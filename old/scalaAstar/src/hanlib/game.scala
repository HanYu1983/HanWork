package hanlib
import javax.swing._
import java.awt._
import java.awt.event._
import java.awt.image._
import java.lang._

object Game {
  object Simple2D {
    def apply(title: String, w: Int, h: Int): (JFrame, Canvas) = {
      val frame = new JFrame
      val canvas = new Canvas
      frame.setTitle(title);
      canvas.setSize(w, h)
      frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)
      frame.getContentPane.add(canvas, BorderLayout.CENTER)
      frame.setResizable(false)
      frame.pack
      frame.show
      canvas.createBufferStrategy(2)
      (frame, canvas)
    }
    def draw(canvas: Canvas, fn: Graphics => Any) = {
      val g = canvas.getBufferStrategy().getDrawGraphics()
      try {
        fn(g)
      } catch {
        case _ => g.dispose()
      }
    }
    def swap(canvas: Canvas) = {
      if (!canvas.getBufferStrategy().contentsLost())
        canvas.getBufferStrategy().show()
    }
    def loop(mspf: Int, update: (Thread, Float) => Any) = {
      new Thread {
        var curr = System.currentTimeMillis()
        override def run() {
          try {
            while (true) {
              val elapsed = System.currentTimeMillis() - curr
              try {
                update(this, elapsed / 1000f)
              } catch {
                case e: Exception => e.printStackTrace()
              }
              curr = System.currentTimeMillis()
              Thread.sleep(mspf)
            }
          } catch {
            case _: InterruptedException => println("thread stop")
          }
        }
      }.start()
    }
  }
}