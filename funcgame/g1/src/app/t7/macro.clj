(ns app.t7.macro)

(defmacro defnx [name coms args & exps]  
  (list 'defn name args
    (list 'if (list 'not (list 'app.t7.tool/checkProperty 'self coms))
      'self
      (cons 'do exps))))
