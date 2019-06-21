(ns app.t7.macro)

(defmacro defnx [name coms args & exps]  
  (list 'defn name args
    (list 'if (list 'not (list 'app.tool/checkProperty 'self coms))
      'self
      (cons 'do exps))))
