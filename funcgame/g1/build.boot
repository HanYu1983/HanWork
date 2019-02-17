(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.9.0" :scope "provided"]
                  [adzerk/boot-cljs "2.1.4" :scope "test"]
                  [adzerk/boot-reload "0.5.2" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :scope "test"]
                  [javax.xml.bind/jaxb-api "2.3.0" :scope "test"] ; necessary for Java 9 compatibility
                  ; project deps
                  [org.clojure/clojurescript "1.10.238"]
                  [nightlight "RELEASE"]
                  [play-cljs "1.2.0"]
                  [edna "1.1.0"]])

(require
  '[nightlight.boot :refer [nightlight]]
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]])

(def targetDir "../../docs/www/funcgame/js")

(deftask run []
  (comp
    (watch)
    (cljs :optimizations :none)
    (target :dir #{targetDir} :no-clean true)))

(deftask build []
  (comp
    (cljs :optimizations :advanced)
    (target :dir #{targetDir} :no-clean true)))

