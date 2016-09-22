package hanlib
import java.awt.Graphics
import java.awt.Rectangle

object Geom {
  case class Float3(x: Float, y: Float, z: Float) {
    def unary_- = Float3(-x, -y, -z)
    override def equals(v: Any): Boolean = {
      val other = v.asInstanceOf[Float3]
      Math.abs(x - other.x) < 0.0001 && Math.abs(y - other.y) < 0.0001 && Math.abs(z - other.z) < 0.0001
    }
    def +(v: Float3) = Float3(x + v.x, y + v.y, z + v.z)
    def -(v: Float3) = Float3(x - v.x, y - v.y, z - v.z)
    def *(v: Float) = Float3(x * v, y * v, z * v)
    def *(v: Float3) = x * v.x + y * v.y + z * v.z
    def /(v: Float) = Float3(x / v, y / v, z / v)
    def cross(v: Float3) = Float3(y * v.z - z * v.y, z * v.x - x * v.z, x * v.y - y * v.x)
    def lengthSq = this * this
    def length = Math.sqrt(lengthSq).toFloat
    def normal = this / length
  }
  case class Line(p: Float3, dir: Float3, t: Float)

  def zero3 = Float3(0, 0, 0)
  def axisX = Float3(1, 0, 0)
  def axisY = Float3(0, 1, 0)
  def axisZ = Float3(0, 0, 1)
  def isZero(f: Float) = Math.abs(f) < .0001
  def line(p1: Float3, p2: Float3) = {
    val toP2 = (p2 - p1)
    val len = toP2.length
    Line(p1, toP2.normal, len)
  }
  def lines(rect: Rectangle) = {
    val x = rect.x
    val y = rect.y
    val w = rect.width
    val h = rect.height
    val d1 = Float3(x, y, 0)
    val d2 = Float3(x + w, y, 0)
    val d3 = Float3(x + w, y + h, 0)
    val d4 = Float3(x, y + h, 0)
    List(line(d1, d2), line(d2, d3), line(d3, d4), line(d4, d1))
  }
  def intersect(l1: Line, l2: Line): (Boolean, Float3, Float, Float) = {
    val v = l1.dir.cross(l2.dir)
    val c = v.length
    if (isZero(c))
      (false, zero3, 0, 0)
    else {
      val p2SubP1 = (l2.p - l1.p)
      val powc = c * c
      val t = (p2SubP1.cross(l2.dir) * v) / powc
      if (l1.t > 0 && t > l1.t)
        (false, zero3, t, 0)
      else {
        val t2 = (p2SubP1.cross(l1.dir) * v) / powc
        if (l2.t > 0 && t2 > l2.t)
          (false, zero3, t, t2)
        else {
          if (t >= 0 && t2 >= 0) {
            val in1 = l1.p + l1.dir * t
            val in2 = l2.p + l2.dir * t2
            if (in1 - in2 == zero3)
              (true, in1, t, t2)
            else
              (false, zero3, t, t2)
          } else
            (false, zero3, t, t2)
        }
      }
    }
  }
  def filterViewLineSimple(ls: List[Float3], wall: List[Line]) = {
    def recur(s: Int, c: Int, res: List[Float3]): List[Float3] = {
      if (c == ls.size)
        ls(c - 1) :: res
      else {
        val cur = line(ls(s), ls(c))
        if (wall.exists(intersect(cur, _)._1))
          recur(c - 1, c + 1, ls(c - 1) :: res)
        else
          recur(s, c + 1, res)
      }
    }
    recur(0, 2, List(ls(0))).reverse
  }
  def filterViewLinePower(ls: List[Float3], wall: List[Line]) = {
    def recur(c1: Int, c2: Int, c3: Int, res: List[Float3], plus: Boolean): List[Float3] = {
      if (c3 == ls.size)
        ls(c3-1) :: res
      else {
        val cur = line(ls(c2), ls(c3))
        if (plus) {
          if (wall.exists(intersect(cur, _)._1))
            recur(c1, c2+1, c3, res, false)
          else
            recur(c1, c2, c3 + 1, res, true)
        } else {
          if ( wall.exists(intersect(cur, _)._1))
            recur(c1, c2 + 1, c3, res, false)
          else
            recur(c2, c2, c2 +1, ls(c2) :: res, true)
        }
      }
    }
    recur(0, 0, 2, List(ls(0)), true).reverse
  }

  def drawLine(g: Graphics, line: Line) = {
    val p2 = line.p + line.dir * line.t
    g.drawLine(line.p.x.toInt, line.p.y.toInt, p2.x.toInt, p2.y.toInt)
  }
  def main(args: Array[String]) = {
    val l1 = Line(Float3(-10, 5, 0), Float3(1, 0, 0), 0)
    val l2 = Line(Float3(7, -10, 0), Float3(1, 1, 0), 0)
    val inter = Geom.intersect(l1, l2)
    println(inter)
    println(Float3(0.00001f, 0.00001f, 0.00001f) == Geom.zero3)
  }
}