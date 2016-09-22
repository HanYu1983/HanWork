package hanlib
import hanlib.Geom._

object Astar {
  def isGoalDefault[T](curr: T, goal: T) = {
    curr == goal
  }
  // 版本2
  def search2[T](start: T, goal: T, nextFunc: (T) => Set[T], costFunc: (T, T, Boolean) => Float, isGoalFunc: (T, T) => Boolean): Option[List[T]] = {
    case class Node(id: T, cost: Float, costToGoal: Float, path: List[T])
    def recur(open: List[Node], mark: Set[T]): Option[List[T]] = {
      if (open.isEmpty) None else {
        // 取出最少成本的點
        // 總成本 = 成本 + 估計成本
        // 若估計成本永遠設為0，就是最短路徑生成樹演算法
        val cur = open.sortWith((left, right) => {
          val f1 = left.cost + left.costToGoal
          val f2 = right.cost + right.costToGoal
          f1 < f2
        }).head
        // 若是目標則回傳
        if (isGoalFunc(cur.id, goal))
          Some(cur.path.reverse)
        else {
          // 加入已確定為成本最小的點（但未必包含在最終最短路徑裡）
          // 這裡應這個演算法的關係，會加入重覆的id，但沒關係，因為這個是集合
          val nmark = mark + cur.id
          // 巡訪相隣點
          val nopen = nextFunc(cur.id).foldLeft(open.filterNot(elm => elm == cur))((nopen, nextId) => {
            val cost = cur.cost+ costFunc(cur.id, nextId, false)
            // 如果這個點已是被標記為成本最小點
            // 就忽略它
            if (nmark.contains(nextId))
              nopen
            // 如果計算的點之前已經計算過
            // 就比較它的成本
            else if (nopen.exists(_.id == nextId)) {
              val has = nopen.find(_.id == nextId).get
              // 只須要比較成本，不須要比較估計成本
              // 因為同樣一個點計算出來的估計成本一樣
              if (has.cost > cost)
                // 將這個點直接列表，並將原有的點移除
                Node(nextId, cost, costFunc(nextId, goal, false), nextId :: cur.path) :: nopen.filterNot(elm => elm == has)
              else
                nopen
            } else
              Node(nextId, cost, costFunc(nextId, goal, false), nextId :: cur.path) :: nopen
          });
          recur(nopen, nmark)
        }
      }
    }
    recur(List[Node](Node(start, 0, costFunc(start, goal, false), List[T](start))), Set[T]())
  }
  // 版本1
  def search[T](start: T, goal: T, net: Map[T, Set[T]], costFunc: (T, T, Boolean) => Float, isGoalFunc: (T, T) => Boolean): Option[List[T]] = {
    case class Node(id: T, cost: Float, costToGoal: Float, path: List[T])
    def recur(open: List[Node], mark: Set[T]): Option[List[T]] = {
      if (open.isEmpty) None else {
        val cur = open.sortWith((left, right) => {
          val f1 = left.cost + left.costToGoal
          val f2 = right.cost + right.costToGoal
          f1 < f2
        }).head
        if (isGoalFunc(cur.id, goal))
          Some(cur.path.reverse)
        else {
          val nmark = mark + cur.id
          val nopen = net(cur.id).foldLeft(open.filterNot(elm => elm == cur))((nopen, nextId) => {
            if (nmark.contains(nextId))
              nopen
            else
              // 直接就塞進列表，管都不用管，因為會在列表中被排序而比較
              // 這裡就是和版本2的差別
              Node(nextId, cur.cost + costFunc(cur.id, nextId, false), costFunc(nextId, goal, true), nextId :: cur.path) :: nopen
          });
          recur(nopen, nmark)
        }
      }
    }
    recur(List[Node](Node(start, 0, costFunc(start, goal, false), List[T](start))), Set[T]())
  }
  
  def createRoadNet(objs: List[(Float3, Float3)], cellWidth: Int) = {
    def toCellId(rect: (Float3, Float3)) = {
      val min = rect._1 / cellWidth
      val max = rect._2 / cellWidth
      val cids =
        for (
          x <- min.x.toInt to max.x.toInt; y <- min.y.toInt to max.y.toInt
        ) yield (x, y, if (x == min.x.toInt || x == max.x.toInt || y == min.y.toInt || y == max.y.toInt) 1 else 999)
      cids.foldLeft(Set[((Int, Int), Int)]()) { (left, right) =>
        left + (((right._1, right._2), right._3))
      }
    }
    def collectCell(left: Map[(Int, Int), Int], right: Set[((Int, Int), Int)]) = {
      right.foldLeft(left) { (left, info) =>
        val key = info._1
        val v = info._2
        if (left.contains(key))
          left + (key -> (left(key) + v))
        else
          left + (key -> v)
      }
    }
    val cids = objs.foldLeft(List[Set[((Int, Int), Int)]]()) { (list, obj) =>
      toCellId(obj) :: list
    }
    val info = cids.foldLeft(Map[(Int, Int), Int]())(collectCell)
    info.filter(_._2 == 1).foldLeft(Map[(Int, Int), Set[(Int, Int)]]()) { (left, right) =>
      val key = right._1
      val v = right._2
      val ids =
        for (
          x <- key._1 - 1 to key._1 + 1;
          y <- key._2 - 1 to key._2 + 1;
          if x >= 0 && y >= 0
        ) yield (x, y)
      ids.foldLeft(left) { (left, id) =>
        if (key == id)
          left
        else if (info.contains(id)) {
          val realKey = (key._1 * cellWidth, key._2 * cellWidth)
          val readId = (id._1 * cellWidth, id._2 * cellWidth)
          if (info(id) == 1) {
            if (left.contains(realKey))
              left + (realKey -> (left(realKey) + readId))
            else
              left + (realKey -> Set(readId))
          } else
            left
        } else
          left
      }
    }
  }

  def main(args: Array[String]) = {
    val net = createRoadNet(List(
      (Float3(1, 1, 0), Float3(10, 10, 0))),
      1)
    println(net)
    val path = search[(Int, Int)]((1, 1), (10, 10), net,
      (left, right, _) => {
        (Float3(left._1, left._2, 0) - Float3(right._1, right._2, 0)).lengthSq
      },
      isGoalDefault[(Int, Int)])
    println(path)
  }
}