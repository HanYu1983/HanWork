package hanlib
import java.awt.event.MouseEvent
import java.awt.event.MouseListener
import java.awt.Color
import java.awt.Rectangle
import java.awt.event.MouseAdapter
import java.awt.event.MouseMotionAdapter
import java.util.Random

object RoadNet {
  type Point = Tuple2[Int, Int]
  type Net = Map[Point, Set[Point]]
  type Data = Tuple3[Net, Set[Point], Net]
  case class SimpleRoadNet(width: Int, height: Int, min: Int) {
    val boundRect = new Rectangle(0, 0, width, height)
    val emptyData = (Map[Point, Set[Point]](), Set[Point](), Map[Point, Set[Point]]())
    def add(gRect: Rectangle, data: Data) = {
      val (_net, _stop, _delete) = data
      def disconnectLine(net: Net, p4: List[Point], delete: Net) = {
        List(0, 1, 2, 3).foldLeft(net, delete) { (in, idx) =>
          val (net, delete) = in
          val pset = if (net.contains(p4(idx))) net(p4(idx)) else Set[Point]()
          val dset = if (delete.contains(p4(idx))) delete(p4(idx)) else Set[Point]()
          val nd = (idx + 1) % 4
          val pd = (idx + 3) % 4
          (net + (p4(idx) -> (pset -- Set(p4(nd), p4(pd)))),
            delete + (p4(idx) -> (dset ++ Set(p4(nd), p4(pd)))))
        }
      }
      def connectLine(net: Net, p4: List[Point], delete: Net) = {
        List(0, 1, 2, 3).foldLeft(net) { (net, idx) =>
          var pset = if (net.contains(p4(idx))) net(p4(idx)) else Set[Point]()
          val dset = if (delete.contains(p4(idx))) delete(p4(idx)) else Set[Point]()
          val nd = (idx + 1) % 4
          val pd = (idx + 3) % 4
          List(p4(nd), p4(pd)).foldLeft(net) { (net, p) =>
            val pset = if (net.contains(p4(idx))) net(p4(idx)) else Set[Point]()
            if (!dset.contains(p))
              net + (p4(idx) -> (pset + p))
            else
              net
          }
        }
      }
      def recur(rect: Rectangle, p: Point, net: Net, stop: Set[Point], delete: Net, count: Int): Tuple3[Net, Set[Point], Net] = {
        val (net1, delete1) = disconnectLine(net, point4(rect), delete)
        if (count > 0)
          split4(rect).foldLeft((net1, stop, delete1)) { (in, rect) =>
            val (net, stop, delete) = (connectLine(in._1, point4(rect), in._3), in._2, in._3)
            if (rect.width >= min && rect.contains(p._1, p._2))
              recur(rect, p, net, stop, delete, count)
            else if (rect.width < min)
              (net, point4(rect).filter(p => gRect.contains(p._1, p._2)).foldLeft(stop) { (stop, p) => stop + p }, delete)
            else
              recur(rect, p, net, stop, delete, count - 1)
          }
        else
          (net, stop, delete)
      }
      val connectedNet = connectLine(_net, point4(boundRect), _delete)
      border(gRect).foldLeft((connectedNet, _stop, _delete)) { (in, p) =>
        recur(boundRect, p, in._1, in._2, in._3, 2)
      }
    }
    private def border(rect: Rectangle) = {
      val x = rect.x
      val y = rect.y
      val w = rect.width
      val h = rect.height
      for (
        xx <- 0 to w / min;
        yy <- 0 to h / min;
        if (xx == 0 || yy == 0 || xx == w / min || yy == h / min)
      ) yield (x + xx * min, y + yy * min)
    }
    private def point4(rect: Rectangle) = {
      val x = rect.x
      val y = rect.y
      val w = rect.width
      val h = rect.height
      List(
        (x, y),
        (x + w, y),
        (x + w, y + h),
        (x, y + h))
    }
    private def split4(rect: Rectangle) = {
      val x = rect.x
      val y = rect.y
      val w2 = rect.width / 2
      val h2 = rect.height / 2
      List(
        new Rectangle(x, y, w2, h2),
        new Rectangle(x + w2, y, w2, h2),
        new Rectangle(x + w2, y + h2, w2, h2),
        new Rectangle(x, y + h2, w2, h2))
    }
  }
  def addRectList(rn: SimpleRoadNet, data: Data, list: List[Rectangle]) = {
    list.foldLeft(data) { (in, rect) =>
      rn.add(rect, in)
    }
  }
  def getPointSet(rnet: Net) = {
    rnet.foldLeft(Set[Tuple2[Int, Int]]()) { (in, ps) =>
      in ++ ps._2
    }
  }
  def main(args: Array[String]): Unit = {
    val rnet = SimpleRoadNet(1024, 1024, 32)
    val rand = new Random
    val rectSeq: Seq[Rectangle] = for (i <- 0 until 20)
      yield new Rectangle(rand.nextInt(1024), rand.nextInt(768), rand.nextInt(150) + 3, rand.nextInt(150) + 3)
    val rects = rectSeq.toList
    val rectsline = rects.flatMap(Geom.lines(_))
    val (net, stop, delete) = addRectList(rnet, rnet.emptyData, rects)
    val ps = getPointSet(net).filterNot(stop.contains(_)).filterNot(p => rects.exists(_.contains(p._1, p._2)))
    var _path: List[Point] = null
    var _pathline: List[Geom.Float3] = null
    var _filterPath: List[Geom.Float3] = null
    def _searchPoint(oriP: Tuple2[Int, Int], point: Tuple2[Int, Int]) = {
      val ori = ps.minBy { p =>
        (Geom.Float3(p._1, p._2, 0) - Geom.Float3(oriP._1, oriP._2, 0)).lengthSq
      }
      val target = ps.minBy { p =>
        (Geom.Float3(p._1, p._2, 0) - Geom.Float3(point._1, point._2, 0)).lengthSq
      }
      val path = hanlib.Astar.search2[(Int, Int)](ori, target,
        p => {
          net(p).filterNot(stop.contains(_))
        },
        (left, right, isE) => {
          // 不必針對是不是要算估計值而改變算法(isE不用理它)
          // 因為在這範例中可以用同樣的算法計算估計值
          // costToGoal = fn(curr, goal, false)
          // costToNext = fn(curr, next, false)
          val dx = left._1 - right._1
          val dy = left._2 - right._2
          val v = Math.abs(dx) + Math.abs(dy)
          if (isE)
            v
          else
            v
        },
        Astar.isGoalDefault[(Int, Int)])
      val pathEnd: List[Tuple2[Int, Int]] = oriP :: path.getOrElse(List((0, 0))) ++ List(point)
      val pathline = pathEnd.map(p => Geom.Float3(p._1, p._2, 0))
      val filterPath = Geom.filterViewLineSimple(Geom.filterViewLinePower(pathline, rectsline), rectsline)
      _path = pathEnd
      _pathline = pathline
      _filterPath = filterPath
    }
    var _ori = (0, 0)
    var _target = (179, 179)
    _searchPoint(_ori, _target)

    val (frame, canvas) = Game.Simple2D("haha", 1024, 768)
    canvas.addMouseListener(new MouseAdapter() {
      override def mouseReleased(e: MouseEvent) = {
        e.getButton() match {
          case 3 => {
            _ori = (e.getX(), e.getY())
            _searchPoint(_ori, _target)
          }
          case _ => Unit
        }
      }
    })
    canvas.addMouseMotionListener(new MouseMotionAdapter() {
      override def mouseDragged(e: MouseEvent) = {
        _target = (e.getX(), e.getY())
        _searchPoint(_ori, _target)
      }
    })
    Game.Simple2D.loop(33, (_, delta) => {
      Game.Simple2D.draw(canvas, g => {
        g.setColor(Color.white)
        g.fillRect(0, 0, 1024, 768)

        g.setColor(Color.lightGray)
        net.foreach { kv =>
          val k = kv._1
          val v = kv._2
          v.foreach { p =>
            g.drawLine(k._1, k._2, p._1, p._2)
          }
        }
        g.setColor(Color.blue)
        net.foreach { kv =>
          val k = kv._1
          if (stop.contains(k))
            g.fillRect(k._1, k._2, 2, 2)
        }
        g.setColor(Color.black)
        rectsline.foreach { Geom.drawLine(g, _) }
        g.setColor(Color.green)
        for (i <- 1 until _path.length) {
          val dot = _path(i - 1)
          val dot2 = _path(i)
          g.drawLine(dot._1, dot._2, dot2._1, dot2._2)
        }
        g.setColor(Color.red)
        for (i <- 1 until _filterPath.length) {
          val dot = _filterPath(i - 1)
          val dot2 = _filterPath(i)
          g.drawLine(dot.x.toInt, dot.y.toInt, dot2.x.toInt, dot2.y.toInt)
        }
      })
      Game.Simple2D.swap(canvas)
    })
  }
}