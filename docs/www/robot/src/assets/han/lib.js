(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  (function () {
    (function () {
      function r(e, n, t) {
        function o(i, f) {
          if (!n[i]) {
            if (!e[i]) {
              var c = "function" == typeof require && require;
              if (!f && c) return c(i, !0);
              if (u) return u(i, !0);
              var a = new Error("Cannot find module '" + i + "'");
              throw a.code = "MODULE_NOT_FOUND", a;
            }

            var p = n[i] = {
              exports: {}
            };
            e[i][0].call(p.exports, function (r) {
              var n = e[i][1][r];
              return o(n || r);
            }, p, p.exports, r, e, n, t);
          }

          return n[i].exports;
        }

        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);

        return o;
      }

      return r;
    })()({
      1: [function (require, module, exports) {
        const KNN = require("ml-knn");

        var train_dataset = [[0, 0, 0], [0, 1, 1], [1, 1, 0], [2, 2, 2], [1, 2, 2], [2, 1, 2]];
        var train_labels = [0, 0, 0, 1, 1, 1];
        var knn = new KNN(train_dataset, train_labels, {
          k: 2
        });
        var test_dataset = [[0.9, 0.9, 0.9], [1.1, 1.1, 1.1], [1.1, 1.1, 1.2], [1.2, 1.2, 1.2]];
        var ans = knn.predict(test_dataset);
        console.log(ans);
        globalThis["ml-knn"] = KNN;

        const kmeans = require('ml-kmeans');

        let data = [[1, 1, 1], [1, 2, 1], [-1, -1, -1], [-1, -1, -1.5]];
        let centers = [[1, 2, 1], [-1, -1, -1]];
        var ans = kmeans(data, 2, {
          initialization: centers
        });
        console.log(ans);
        globalThis["ml-kmeans"] = kmeans;
      }, {
        "ml-kmeans": 7,
        "ml-knn": 8
      }],
      2: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        const toString = Object.prototype.toString;

        function isAnyArray(object) {
          return toString.call(object).endsWith('Array]');
        }

        exports.default = isAnyArray;
      }, {}],
      3: [function (require, module, exports) {
        'use strict';

        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
        }

        var isArray = _interopDefault(require('is-any-array'));

        function max(input, options = {}) {
          if (!isArray(input)) {
            throw new TypeError('input must be an array');
          }

          if (input.length === 0) {
            throw new TypeError('input must not be empty');
          }

          const {
            fromIndex = 0,
            toIndex = input.length
          } = options;

          if (fromIndex < 0 || fromIndex >= input.length || !Number.isInteger(fromIndex)) {
            throw new Error('fromIndex must be a positive integer smaller than length');
          }

          if (toIndex <= fromIndex || toIndex > input.length || !Number.isInteger(toIndex)) {
            throw new Error('toIndex must be an integer greater than fromIndex and at most equal to length');
          }

          let maxValue = input[fromIndex];

          for (let i = fromIndex + 1; i < toIndex; i++) {
            if (input[i] > maxValue) maxValue = input[i];
          }

          return maxValue;
        }

        module.exports = max;
      }, {
        "is-any-array": 2
      }],
      4: [function (require, module, exports) {
        'use strict';

        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
        }

        var isArray = _interopDefault(require('is-any-array'));

        function min(input, options = {}) {
          if (!isArray(input)) {
            throw new TypeError('input must be an array');
          }

          if (input.length === 0) {
            throw new TypeError('input must not be empty');
          }

          const {
            fromIndex = 0,
            toIndex = input.length
          } = options;

          if (fromIndex < 0 || fromIndex >= input.length || !Number.isInteger(fromIndex)) {
            throw new Error('fromIndex must be a positive integer smaller than length');
          }

          if (toIndex <= fromIndex || toIndex > input.length || !Number.isInteger(toIndex)) {
            throw new Error('toIndex must be an integer greater than fromIndex and at most equal to length');
          }

          let minValue = input[fromIndex];

          for (let i = fromIndex + 1; i < toIndex; i++) {
            if (input[i] < minValue) minValue = input[i];
          }

          return minValue;
        }

        module.exports = min;
      }, {
        "is-any-array": 2
      }],
      5: [function (require, module, exports) {
        'use strict';

        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
        }

        var isArray = _interopDefault(require('is-any-array'));

        var max = _interopDefault(require('ml-array-max'));

        var min = _interopDefault(require('ml-array-min'));

        function rescale(input, options = {}) {
          if (!isArray(input)) {
            throw new TypeError('input must be an array');
          } else if (input.length === 0) {
            throw new TypeError('input must not be empty');
          }

          let output;

          if (options.output !== undefined) {
            if (!isArray(options.output)) {
              throw new TypeError('output option must be an array if specified');
            }

            output = options.output;
          } else {
            output = new Array(input.length);
          }

          const currentMin = min(input);
          const currentMax = max(input);

          if (currentMin === currentMax) {
            throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
          }

          const {
            min: minValue = options.autoMinMax ? currentMin : 0,
            max: maxValue = options.autoMinMax ? currentMax : 1
          } = options;

          if (minValue >= maxValue) {
            throw new RangeError('min option must be smaller than max option');
          }

          const factor = (maxValue - minValue) / (currentMax - currentMin);

          for (let i = 0; i < input.length; i++) {
            output[i] = (input[i] - currentMin) * factor + minValue;
          }

          return output;
        }

        module.exports = rescale;
      }, {
        "is-any-array": 2,
        "ml-array-max": 3,
        "ml-array-min": 4
      }],
      6: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        function squaredEuclidean(p, q) {
          let d = 0;

          for (let i = 0; i < p.length; i++) {
            d += (p[i] - q[i]) * (p[i] - q[i]);
          }

          return d;
        }

        exports.squaredEuclidean = squaredEuclidean;

        function euclidean(p, q) {
          return Math.sqrt(squaredEuclidean(p, q));
        }

        exports.euclidean = euclidean;
      }, {}],
      7: [function (require, module, exports) {
        'use strict';

        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
        }

        var mlDistanceEuclidean = require('ml-distance-euclidean');

        var nearestVector = _interopDefault(require('ml-nearest-vector'));

        var Random = _interopDefault(require('ml-random'));

        var mlMatrix = require('ml-matrix');
        /**
         * Calculates the distance matrix for a given array of points
         * @ignore
         * @param {Array<Array<number>>} data - the [x,y,z,...] points to cluster
         * @param {function} distance - Distance function to use between the points
         * @return {Array<Array<number>>} - matrix with the distance values
         */


        function calculateDistanceMatrix(data, distance) {
          var distanceMatrix = new Array(data.length);

          for (var i = 0; i < data.length; ++i) {
            for (var j = i; j < data.length; ++j) {
              if (!distanceMatrix[i]) {
                distanceMatrix[i] = new Array(data.length);
              }

              if (!distanceMatrix[j]) {
                distanceMatrix[j] = new Array(data.length);
              }

              const dist = distance(data[i], data[j]);
              distanceMatrix[i][j] = dist;
              distanceMatrix[j][i] = dist;
            }
          }

          return distanceMatrix;
        }
        /**
         * Updates the cluster identifier based in the new data
         * @ignore
         * @param {Array<Array<number>>} data - the [x,y,z,...] points to cluster
         * @param {Array<Array<number>>} centers - the K centers in format [x,y,z,...]
         * @param {Array <number>} clusterID - the cluster identifier for each data dot
         * @param {function} distance - Distance function to use between the points
         * @return {Array} the cluster identifier for each data dot
         */


        function updateClusterID(data, centers, clusterID, distance) {
          for (var i = 0; i < data.length; i++) {
            clusterID[i] = nearestVector(centers, data[i], {
              distanceFunction: distance
            });
          }

          return clusterID;
        }
        /**
         * Update the center values based in the new configurations of the clusters
         * @ignore
         * @param {Array<Array<number>>} prevCenters - Centroids from the previous iteration
         * @param {Array <Array <number>>} data - the [x,y,z,...] points to cluster
         * @param {Array <number>} clusterID - the cluster identifier for each data dot
         * @param {number} K - Number of clusters
         * @return {Array} he K centers in format [x,y,z,...]
         */


        function updateCenters(prevCenters, data, clusterID, K) {
          const nDim = data[0].length; // copy previous centers

          var centers = new Array(K);
          var centersLen = new Array(K);

          for (var i = 0; i < K; i++) {
            centers[i] = new Array(nDim);
            centersLen[i] = 0;

            for (var j = 0; j < nDim; j++) {
              centers[i][j] = 0;
            }
          } // add the value for all dimensions of the point


          for (var l = 0; l < data.length; l++) {
            centersLen[clusterID[l]]++;

            for (var dim = 0; dim < nDim; dim++) {
              centers[clusterID[l]][dim] += data[l][dim];
            }
          } // divides by length


          for (var id = 0; id < K; id++) {
            for (var d = 0; d < nDim; d++) {
              if (centersLen[id]) {
                centers[id][d] /= centersLen[id];
              } else {
                centers[id][d] = prevCenters[id][d];
              }
            }
          }

          return centers;
        }
        /**
         * The centers have moved more than the tolerance value?
         * @ignore
         * @param {Array<Array<number>>} centers - the K centers in format [x,y,z,...]
         * @param {Array<Array<number>>} oldCenters - the K old centers in format [x,y,z,...]
         * @param {function} distanceFunction - Distance function to use between the points
         * @param {number} tolerance - Allowed distance for the centroids to move
         * @return {boolean}
         */


        function hasConverged(centers, oldCenters, distanceFunction, tolerance) {
          for (var i = 0; i < centers.length; i++) {
            if (distanceFunction(centers[i], oldCenters[i]) > tolerance) {
              return false;
            }
          }

          return true;
        }
        /**
         * Choose K different random points from the original data
         * @ignore
         * @param {Array<Array<number>>} data - Points in the format to cluster [x,y,z,...]
         * @param {number} K - number of clusters
         * @param {number} seed - seed for random number generation
         * @return {Array<Array<number>>} - Initial random points
         */


        function random(data, K, seed) {
          const random = new Random(seed);
          return random.choice(data, {
            size: K
          });
        }
        /**
         * Chooses the most distant points to a first random pick
         * @ignore
         * @param {Array<Array<number>>} data - Points in the format to cluster [x,y,z,...]
         * @param {number} K - number of clusters
         * @param {Array<Array<number>>} distanceMatrix - matrix with the distance values
         * @param {number} seed - seed for random number generation
         * @return {Array<Array<number>>} - Initial random points
         */


        function mostDistant(data, K, distanceMatrix, seed) {
          const random = new Random(seed);
          var ans = new Array(K); // chooses a random point as initial cluster

          ans[0] = Math.floor(random.random() * data.length);

          if (K > 1) {
            // chooses the more distant point
            var maxDist = {
              dist: -1,
              index: -1
            };

            for (var l = 0; l < data.length; ++l) {
              if (distanceMatrix[ans[0]][l] > maxDist.dist) {
                maxDist.dist = distanceMatrix[ans[0]][l];
                maxDist.index = l;
              }
            }

            ans[1] = maxDist.index;

            if (K > 2) {
              // chooses the set of points that maximises the min distance
              for (var k = 2; k < K; ++k) {
                var center = {
                  dist: -1,
                  index: -1
                };

                for (var m = 0; m < data.length; ++m) {
                  // minimum distance to centers
                  var minDistCent = {
                    dist: Number.MAX_VALUE,
                    index: -1
                  };

                  for (var n = 0; n < k; ++n) {
                    if (distanceMatrix[n][m] < minDistCent.dist && ans.indexOf(m) === -1) {
                      minDistCent = {
                        dist: distanceMatrix[n][m],
                        index: m
                      };
                    }
                  }

                  if (minDistCent.dist !== Number.MAX_VALUE && minDistCent.dist > center.dist) {
                    center = Object.assign({}, minDistCent);
                  }
                }

                ans[k] = center.index;
              }
            }
          }

          return ans.map(index => data[index]);
        } // Implementation inspired from scikit


        function kmeanspp(X, K, options = {}) {
          X = new mlMatrix.Matrix(X);
          const nSamples = X.rows;
          const random = new Random(options.seed); // Set the number of trials

          const centers = [];
          const localTrials = options.localTrials || 2 + Math.floor(Math.log(K)); // Pick the first center at random from the dataset

          const firstCenterIdx = random.randInt(nSamples);
          centers.push(X.getRow(firstCenterIdx)); // Init closest distances

          let closestDistSquared = new mlMatrix.Matrix(1, X.rows);

          for (let i = 0; i < X.rows; i++) {
            closestDistSquared.set(0, i, mlDistanceEuclidean.squaredEuclidean(X.getRow(i), centers[0]));
          }

          let cumSumClosestDistSquared = [cumSum(closestDistSquared.getRow(0))];
          const factor = 1 / cumSumClosestDistSquared[0][nSamples - 1];
          let probabilities = mlMatrix.Matrix.mul(closestDistSquared, factor); // Iterate over the remaining centers

          for (let i = 1; i < K; i++) {
            const candidateIdx = random.choice(nSamples, {
              replace: true,
              size: localTrials,
              probabilities: probabilities[0]
            });
            const candidates = X.selection(candidateIdx, range(X.columns));
            const distanceToCandidates = euclideanDistances(candidates, X);
            let bestCandidate;
            let bestPot;
            let bestDistSquared;

            for (let j = 0; j < localTrials; j++) {
              const newDistSquared = mlMatrix.Matrix.min(closestDistSquared, [distanceToCandidates.getRow(j)]);
              const newPot = newDistSquared.sum();

              if (bestCandidate === undefined || newPot < bestPot) {
                bestCandidate = candidateIdx[j];
                bestPot = newPot;
                bestDistSquared = newDistSquared;
              }
            }

            centers[i] = X.getRow(bestCandidate);
            closestDistSquared = bestDistSquared;
            cumSumClosestDistSquared = [cumSum(closestDistSquared.getRow(0))];
            probabilities = mlMatrix.Matrix.mul(closestDistSquared, 1 / cumSumClosestDistSquared[0][nSamples - 1]);
          }

          return centers;
        }

        function euclideanDistances(A, B) {
          const result = new mlMatrix.Matrix(A.rows, B.rows);

          for (let i = 0; i < A.rows; i++) {
            for (let j = 0; j < B.rows; j++) {
              result.set(i, j, mlDistanceEuclidean.squaredEuclidean(A.getRow(i), B.getRow(j)));
            }
          }

          return result;
        }

        function range(l) {
          let r = [];

          for (let i = 0; i < l; i++) {
            r.push(i);
          }

          return r;
        }

        function cumSum(arr) {
          let cumSum = [arr[0]];

          for (let i = 1; i < arr.length; i++) {
            cumSum[i] = cumSum[i - 1] + arr[i];
          }

          return cumSum;
        }

        const distanceSymbol = Symbol('distance');

        class KMeansResult {
          /**
           * Result of the kmeans algorithm
           * @param {Array<number>} clusters - the cluster identifier for each data dot
           * @param {Array<Array<object>>} centroids - the K centers in format [x,y,z,...], the error and size of the cluster
           * @param {boolean} converged - Converge criteria satisfied
           * @param {number} iterations - Current number of iterations
           * @param {function} distance - (*Private*) Distance function to use between the points
           * @constructor
           */
          constructor(clusters, centroids, converged, iterations, distance) {
            this.clusters = clusters;
            this.centroids = centroids;
            this.converged = converged;
            this.iterations = iterations;
            this[distanceSymbol] = distance;
          }
          /**
           * Allows to compute for a new array of points their cluster id
           * @param {Array<Array<number>>} data - the [x,y,z,...] points to cluster
           * @return {Array<number>} - cluster id for each point
           */


          nearest(data) {
            const clusterID = new Array(data.length);
            const centroids = this.centroids.map(function (centroid) {
              return centroid.centroid;
            });
            return updateClusterID(data, centroids, clusterID, this[distanceSymbol]);
          }
          /**
           * Returns a KMeansResult with the error and size of the cluster
           * @ignore
           * @param {Array<Array<number>>} data - the [x,y,z,...] points to cluster
           * @return {KMeansResult}
           */


          computeInformation(data) {
            var enrichedCentroids = this.centroids.map(function (centroid) {
              return {
                centroid: centroid,
                error: 0,
                size: 0
              };
            });

            for (var i = 0; i < data.length; i++) {
              enrichedCentroids[this.clusters[i]].error += this[distanceSymbol](data[i], this.centroids[this.clusters[i]]);
              enrichedCentroids[this.clusters[i]].size++;
            }

            for (var j = 0; j < this.centroids.length; j++) {
              if (enrichedCentroids[j].size) {
                enrichedCentroids[j].error /= enrichedCentroids[j].size;
              } else {
                enrichedCentroids[j].error = null;
              }
            }

            return new KMeansResult(this.clusters, enrichedCentroids, this.converged, this.iterations, this[distanceSymbol]);
          }

        }

        const defaultOptions = {
          maxIterations: 100,
          tolerance: 1e-6,
          withIterations: false,
          initialization: 'kmeans++',
          distanceFunction: mlDistanceEuclidean.squaredEuclidean
        };
        /**
         * Each step operation for kmeans
         * @ignore
         * @param {Array<Array<number>>} centers - K centers in format [x,y,z,...]
         * @param {Array<Array<number>>} data - Points [x,y,z,...] to cluster
         * @param {Array<number>} clusterID - Cluster identifier for each data dot
         * @param {number} K - Number of clusters
         * @param {object} [options] - Option object
         * @param {number} iterations - Current number of iterations
         * @return {KMeansResult}
         */

        function step(centers, data, clusterID, K, options, iterations) {
          clusterID = updateClusterID(data, centers, clusterID, options.distanceFunction);
          var newCenters = updateCenters(centers, data, clusterID, K);
          var converged = hasConverged(newCenters, centers, options.distanceFunction, options.tolerance);
          return new KMeansResult(clusterID, newCenters, converged, iterations, options.distanceFunction);
        }
        /**
         * Generator version for the algorithm
         * @ignore
         * @param {Array<Array<number>>} centers - K centers in format [x,y,z,...]
         * @param {Array<Array<number>>} data - Points [x,y,z,...] to cluster
         * @param {Array<number>} clusterID - Cluster identifier for each data dot
         * @param {number} K - Number of clusters
         * @param {object} [options] - Option object
         */


        function* kmeansGenerator(centers, data, clusterID, K, options) {
          var converged = false;
          var stepNumber = 0;
          var stepResult;

          while (!converged && stepNumber < options.maxIterations) {
            stepResult = step(centers, data, clusterID, K, options, ++stepNumber);
            yield stepResult.computeInformation(data);
            converged = stepResult.converged;
            centers = stepResult.centroids;
          }
        }
        /**
         * K-means algorithm
         * @param {Array<Array<number>>} data - Points in the format to cluster [x,y,z,...]
         * @param {number} K - Number of clusters
         * @param {object} [options] - Option object
         * @param {number} [options.maxIterations = 100] - Maximum of iterations allowed
         * @param {number} [options.tolerance = 1e-6] - Error tolerance
         * @param {boolean} [options.withIterations = false] - Store clusters and centroids for each iteration
         * @param {function} [options.distanceFunction = squaredDistance] - Distance function to use between the points
         * @param {number} [options.seed] - Seed for random initialization.
         * @param {string|Array<Array<number>>} [options.initialization = 'kmeans++'] - K centers in format [x,y,z,...] or a method for initialize the data:
         *  * You can either specify your custom start centroids, or select one of the following initialization method:
         *  * `'kmeans++'` will use the kmeans++ method as described by http://ilpubs.stanford.edu:8090/778/1/2006-13.pdf
         *  * `'random'` will choose K random different values.
         *  * `'mostDistant'` will choose the more distant points to a first random pick
         * @return {KMeansResult} - Cluster identifier for each data dot and centroids with the following fields:
         *  * `'clusters'`: Array of indexes for the clusters.
         *  * `'centroids'`: Array with the resulting centroids.
         *  * `'iterations'`: Number of iterations that took to converge
         */


        function kmeans(data, K, options) {
          options = Object.assign({}, defaultOptions, options);

          if (K <= 0 || K > data.length || !Number.isInteger(K)) {
            throw new Error('K should be a positive integer smaller than the number of points');
          }

          var centers;

          if (Array.isArray(options.initialization)) {
            if (options.initialization.length !== K) {
              throw new Error('The initial centers should have the same length as K');
            } else {
              centers = options.initialization;
            }
          } else {
            switch (options.initialization) {
              case 'kmeans++':
                centers = kmeanspp(data, K, options);
                break;

              case 'random':
                centers = random(data, K, options.seed);
                break;

              case 'mostDistant':
                centers = mostDistant(data, K, calculateDistanceMatrix(data, options.distanceFunction), options.seed);
                break;

              default:
                throw new Error(`Unknown initialization method: "${options.initialization}"`);
            }
          } // infinite loop until convergence


          if (options.maxIterations === 0) {
            options.maxIterations = Number.MAX_VALUE;
          }

          var clusterID = new Array(data.length);

          if (options.withIterations) {
            return kmeansGenerator(centers, data, clusterID, K, options);
          } else {
            var converged = false;
            var stepNumber = 0;
            var stepResult;

            while (!converged && stepNumber < options.maxIterations) {
              stepResult = step(centers, data, clusterID, K, options, ++stepNumber);
              converged = stepResult.converged;
              centers = stepResult.centroids;
            }

            return stepResult.computeInformation(data);
          }
        }

        module.exports = kmeans;
      }, {
        "ml-distance-euclidean": 6,
        "ml-matrix": 9,
        "ml-nearest-vector": 10,
        "ml-random": 12
      }],
      8: [function (require, module, exports) {
        'use strict';

        var mlDistanceEuclidean = require('ml-distance-euclidean');
        /*
         * Original code from:
         *
         * k-d Tree JavaScript - V 1.01
         *
         * https://github.com/ubilabs/kd-tree-javascript
         *
         * @author Mircea Pricop <pricop@ubilabs.net>, 2012
         * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
         * @author Ubilabs http://ubilabs.net, 2012
         * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
         */


        function Node(obj, dimension, parent) {
          this.obj = obj;
          this.left = null;
          this.right = null;
          this.parent = parent;
          this.dimension = dimension;
        }

        class KDTree {
          constructor(points, metric) {
            // If points is not an array, assume we're loading a pre-built tree
            if (!Array.isArray(points)) {
              this.dimensions = points.dimensions;
              this.root = points;
              restoreParent(this.root);
            } else {
              this.dimensions = new Array(points[0].length);

              for (var i = 0; i < this.dimensions.length; i++) {
                this.dimensions[i] = i;
              }

              this.root = buildTree(points, 0, null, this.dimensions);
            }

            this.metric = metric;
          } // Convert to a JSON serializable structure; this just requires removing
          // the `parent` property


          toJSON() {
            const result = toJSONImpl(this.root);
            result.dimensions = this.dimensions;
            return result;
          }

          nearest(point, maxNodes, maxDistance) {
            const metric = this.metric;
            const dimensions = this.dimensions;
            var i;
            const bestNodes = new BinaryHeap(function (e) {
              return -e[1];
            });

            function nearestSearch(node) {
              const dimension = dimensions[node.dimension];
              const ownDistance = metric(point, node.obj);
              const linearPoint = {};
              var bestChild, linearDistance, otherChild, i;

              function saveNode(node, distance) {
                bestNodes.push([node, distance]);

                if (bestNodes.size() > maxNodes) {
                  bestNodes.pop();
                }
              }

              for (i = 0; i < dimensions.length; i += 1) {
                if (i === node.dimension) {
                  linearPoint[dimensions[i]] = point[dimensions[i]];
                } else {
                  linearPoint[dimensions[i]] = node.obj[dimensions[i]];
                }
              }

              linearDistance = metric(linearPoint, node.obj);

              if (node.right === null && node.left === null) {
                if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
                  saveNode(node, ownDistance);
                }

                return;
              }

              if (node.right === null) {
                bestChild = node.left;
              } else if (node.left === null) {
                bestChild = node.right;
              } else {
                if (point[dimension] < node.obj[dimension]) {
                  bestChild = node.left;
                } else {
                  bestChild = node.right;
                }
              }

              nearestSearch(bestChild);

              if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
                saveNode(node, ownDistance);
              }

              if (bestNodes.size() < maxNodes || Math.abs(linearDistance) < bestNodes.peek()[1]) {
                if (bestChild === node.left) {
                  otherChild = node.right;
                } else {
                  otherChild = node.left;
                }

                if (otherChild !== null) {
                  nearestSearch(otherChild);
                }
              }
            }

            if (maxDistance) {
              for (i = 0; i < maxNodes; i += 1) {
                bestNodes.push([null, maxDistance]);
              }
            }

            if (this.root) {
              nearestSearch(this.root);
            }

            const result = [];

            for (i = 0; i < Math.min(maxNodes, bestNodes.content.length); i += 1) {
              if (bestNodes.content[i][0]) {
                result.push([bestNodes.content[i][0].obj, bestNodes.content[i][1]]);
              }
            }

            return result;
          }

        }

        function toJSONImpl(src) {
          const dest = new Node(src.obj, src.dimension, null);
          if (src.left) dest.left = toJSONImpl(src.left);
          if (src.right) dest.right = toJSONImpl(src.right);
          return dest;
        }

        function buildTree(points, depth, parent, dimensions) {
          const dim = depth % dimensions.length;

          if (points.length === 0) {
            return null;
          }

          if (points.length === 1) {
            return new Node(points[0], dim, parent);
          }

          points.sort((a, b) => a[dimensions[dim]] - b[dimensions[dim]]);
          const median = Math.floor(points.length / 2);
          const node = new Node(points[median], dim, parent);
          node.left = buildTree(points.slice(0, median), depth + 1, node, dimensions);
          node.right = buildTree(points.slice(median + 1), depth + 1, node, dimensions);
          return node;
        }

        function restoreParent(root) {
          if (root.left) {
            root.left.parent = root;
            restoreParent(root.left);
          }

          if (root.right) {
            root.right.parent = root;
            restoreParent(root.right);
          }
        } // Binary heap implementation from:
        // http://eloquentjavascript.net/appendix2.html


        class BinaryHeap {
          constructor(scoreFunction) {
            this.content = [];
            this.scoreFunction = scoreFunction;
          }

          push(element) {
            // Add the new element to the end of the array.
            this.content.push(element); // Allow it to bubble up.

            this.bubbleUp(this.content.length - 1);
          }

          pop() {
            // Store the first element so we can return it later.
            var result = this.content[0]; // Get the element at the end of the array.

            var end = this.content.pop(); // If there are any elements left, put the end element at the
            // start, and let it sink down.

            if (this.content.length > 0) {
              this.content[0] = end;
              this.sinkDown(0);
            }

            return result;
          }

          peek() {
            return this.content[0];
          }

          size() {
            return this.content.length;
          }

          bubbleUp(n) {
            // Fetch the element that has to be moved.
            var element = this.content[n]; // When at 0, an element can not go up any further.

            while (n > 0) {
              // Compute the parent element's index, and fetch it.
              const parentN = Math.floor((n + 1) / 2) - 1;
              const parent = this.content[parentN]; // Swap the elements if the parent is greater.

              if (this.scoreFunction(element) < this.scoreFunction(parent)) {
                this.content[parentN] = element;
                this.content[n] = parent; // Update 'n' to continue at the new position.

                n = parentN;
              } else {
                // Found a parent that is less, no need to move it further.
                break;
              }
            }
          }

          sinkDown(n) {
            // Look up the target element and its score.
            var length = this.content.length;
            var element = this.content[n];
            var elemScore = this.scoreFunction(element);

            while (true) {
              // Compute the indices of the child elements.
              var child2N = (n + 1) * 2;
              var child1N = child2N - 1; // This is used to store the new position of the element,
              // if any.

              var swap = null; // If the first child exists (is inside the array)...

              if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N];
                var child1Score = this.scoreFunction(child1); // If the score is less than our element's, we need to swap.

                if (child1Score < elemScore) {
                  swap = child1N;
                }
              } // Do the same checks for the other child.


              if (child2N < length) {
                var child2 = this.content[child2N];
                var child2Score = this.scoreFunction(child2);

                if (child2Score < (swap === null ? elemScore : child1Score)) {
                  swap = child2N;
                }
              } // If the element needs to be moved, swap it, and continue.


              if (swap !== null) {
                this.content[n] = this.content[swap];
                this.content[swap] = element;
                n = swap;
              } else {
                // Otherwise, we are done.
                break;
              }
            }
          }

        }

        class KNN {
          /**
           * @param {Array} dataset
           * @param {Array} labels
           * @param {object} options
           * @param {number} [options.k=numberOfClasses + 1] - Number of neighbors to classify.
           * @param {function} [options.distance=euclideanDistance] - Distance function that takes two parameters.
           */
          constructor(dataset, labels, options = {}) {
            if (dataset === true) {
              const model = labels;
              this.kdTree = new KDTree(model.kdTree, options);
              this.k = model.k;
              this.classes = new Set(model.classes);
              this.isEuclidean = model.isEuclidean;
              return;
            }

            const classes = new Set(labels);
            const {
              distance = mlDistanceEuclidean.euclidean,
              k = classes.size + 1
            } = options;
            const points = new Array(dataset.length);

            for (var i = 0; i < points.length; ++i) {
              points[i] = dataset[i].slice();
            }

            for (i = 0; i < labels.length; ++i) {
              points[i].push(labels[i]);
            }

            this.kdTree = new KDTree(points, distance);
            this.k = k;
            this.classes = classes;
            this.isEuclidean = distance === mlDistanceEuclidean.euclidean;
          }
          /**
           * Create a new KNN instance with the given model.
           * @param {object} model
           * @param {function} distance=euclideanDistance - distance function must be provided if the model wasn't trained with euclidean distance.
           * @return {KNN}
           */


          static load(model, distance = mlDistanceEuclidean.euclidean) {
            if (model.name !== 'KNN') {
              throw new Error(`invalid model: ${model.name}`);
            }

            if (!model.isEuclidean && distance === mlDistanceEuclidean.euclidean) {
              throw new Error('a custom distance function was used to create the model. Please provide it again');
            }

            if (model.isEuclidean && distance !== mlDistanceEuclidean.euclidean) {
              throw new Error('the model was created with the default distance function. Do not load it with another one');
            }

            return new KNN(true, model, distance);
          }
          /**
           * Return a JSON containing the kd-tree model.
           * @return {object} JSON KNN model.
           */


          toJSON() {
            return {
              name: 'KNN',
              kdTree: this.kdTree,
              k: this.k,
              classes: Array.from(this.classes),
              isEuclidean: this.isEuclidean
            };
          }
          /**
           * Predicts the output given the matrix to predict.
           * @param {Array} dataset
           * @return {Array} predictions
           */


          predict(dataset) {
            if (Array.isArray(dataset)) {
              if (typeof dataset[0] === 'number') {
                return getSinglePrediction(this, dataset);
              } else if (Array.isArray(dataset[0]) && typeof dataset[0][0] === 'number') {
                const predictions = new Array(dataset.length);

                for (var i = 0; i < dataset.length; i++) {
                  predictions[i] = getSinglePrediction(this, dataset[i]);
                }

                return predictions;
              }
            }

            throw new TypeError('dataset to predict must be an array or a matrix');
          }

        }

        function getSinglePrediction(knn, currentCase) {
          var nearestPoints = knn.kdTree.nearest(currentCase, knn.k);
          var pointsPerClass = {};
          var predictedClass = -1;
          var maxPoints = -1;
          var lastElement = nearestPoints[0][0].length - 1;

          for (var element of knn.classes) {
            pointsPerClass[element] = 0;
          }

          for (var i = 0; i < nearestPoints.length; ++i) {
            var currentClass = nearestPoints[i][0][lastElement];
            var currentPoints = ++pointsPerClass[currentClass];

            if (currentPoints > maxPoints) {
              predictedClass = currentClass;
              maxPoints = currentPoints;
            }
          }

          return predictedClass;
        }

        module.exports = KNN;
      }, {
        "ml-distance-euclidean": 6
      }],
      9: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var rescale = require('ml-array-rescale');

        function _interopDefaultLegacy(e) {
          return e && typeof e === 'object' && 'default' in e ? e : {
            'default': e
          };
        }

        var rescale__default = /*#__PURE__*/_interopDefaultLegacy(rescale);

        const indent = ' '.repeat(2);
        const indentData = ' '.repeat(4);

        function inspectMatrix() {
          return inspectMatrixWithOptions(this);
        }

        function inspectMatrixWithOptions(matrix, options = {}) {
          const {
            maxRows = 15,
            maxColumns = 10,
            maxNumSize = 8
          } = options;
          return `${matrix.constructor.name} {
${indent}[
${indentData}${inspectData(matrix, maxRows, maxColumns, maxNumSize)}
${indent}]
${indent}rows: ${matrix.rows}
${indent}columns: ${matrix.columns}
}`;
        }

        function inspectData(matrix, maxRows, maxColumns, maxNumSize) {
          const {
            rows,
            columns
          } = matrix;
          const maxI = Math.min(rows, maxRows);
          const maxJ = Math.min(columns, maxColumns);
          const result = [];

          for (let i = 0; i < maxI; i++) {
            let line = [];

            for (let j = 0; j < maxJ; j++) {
              line.push(formatNumber(matrix.get(i, j), maxNumSize));
            }

            result.push(`${line.join(' ')}`);
          }

          if (maxJ !== columns) {
            result[result.length - 1] += ` ... ${columns - maxColumns} more columns`;
          }

          if (maxI !== rows) {
            result.push(`... ${rows - maxRows} more rows`);
          }

          return result.join(`\n${indentData}`);
        }

        function formatNumber(num, maxNumSize) {
          const numStr = String(num);

          if (numStr.length <= maxNumSize) {
            return numStr.padEnd(maxNumSize, ' ');
          }

          const precise = num.toPrecision(maxNumSize - 2);

          if (precise.length <= maxNumSize) {
            return precise;
          }

          const exponential = num.toExponential(maxNumSize - 2);
          const eIndex = exponential.indexOf('e');
          const e = exponential.slice(eIndex);
          return exponential.slice(0, maxNumSize - e.length) + e;
        }

        function installMathOperations(AbstractMatrix, Matrix) {
          AbstractMatrix.prototype.add = function add(value) {
            if (typeof value === 'number') return this.addS(value);
            return this.addM(value);
          };

          AbstractMatrix.prototype.addS = function addS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) + value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.addM = function addM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) + matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.add = function add(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.add(value);
          };

          AbstractMatrix.prototype.sub = function sub(value) {
            if (typeof value === 'number') return this.subS(value);
            return this.subM(value);
          };

          AbstractMatrix.prototype.subS = function subS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) - value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.subM = function subM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) - matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.sub = function sub(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.sub(value);
          };

          AbstractMatrix.prototype.subtract = AbstractMatrix.prototype.sub;
          AbstractMatrix.prototype.subtractS = AbstractMatrix.prototype.subS;
          AbstractMatrix.prototype.subtractM = AbstractMatrix.prototype.subM;
          AbstractMatrix.subtract = AbstractMatrix.sub;

          AbstractMatrix.prototype.mul = function mul(value) {
            if (typeof value === 'number') return this.mulS(value);
            return this.mulM(value);
          };

          AbstractMatrix.prototype.mulS = function mulS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) * value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.mulM = function mulM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) * matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.mul = function mul(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.mul(value);
          };

          AbstractMatrix.prototype.multiply = AbstractMatrix.prototype.mul;
          AbstractMatrix.prototype.multiplyS = AbstractMatrix.prototype.mulS;
          AbstractMatrix.prototype.multiplyM = AbstractMatrix.prototype.mulM;
          AbstractMatrix.multiply = AbstractMatrix.mul;

          AbstractMatrix.prototype.div = function div(value) {
            if (typeof value === 'number') return this.divS(value);
            return this.divM(value);
          };

          AbstractMatrix.prototype.divS = function divS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) / value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.divM = function divM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) / matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.div = function div(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.div(value);
          };

          AbstractMatrix.prototype.divide = AbstractMatrix.prototype.div;
          AbstractMatrix.prototype.divideS = AbstractMatrix.prototype.divS;
          AbstractMatrix.prototype.divideM = AbstractMatrix.prototype.divM;
          AbstractMatrix.divide = AbstractMatrix.div;

          AbstractMatrix.prototype.mod = function mod(value) {
            if (typeof value === 'number') return this.modS(value);
            return this.modM(value);
          };

          AbstractMatrix.prototype.modS = function modS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) % value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.modM = function modM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) % matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.mod = function mod(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.mod(value);
          };

          AbstractMatrix.prototype.modulus = AbstractMatrix.prototype.mod;
          AbstractMatrix.prototype.modulusS = AbstractMatrix.prototype.modS;
          AbstractMatrix.prototype.modulusM = AbstractMatrix.prototype.modM;
          AbstractMatrix.modulus = AbstractMatrix.mod;

          AbstractMatrix.prototype.and = function and(value) {
            if (typeof value === 'number') return this.andS(value);
            return this.andM(value);
          };

          AbstractMatrix.prototype.andS = function andS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) & value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.andM = function andM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) & matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.and = function and(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.and(value);
          };

          AbstractMatrix.prototype.or = function or(value) {
            if (typeof value === 'number') return this.orS(value);
            return this.orM(value);
          };

          AbstractMatrix.prototype.orS = function orS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) | value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.orM = function orM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) | matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.or = function or(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.or(value);
          };

          AbstractMatrix.prototype.xor = function xor(value) {
            if (typeof value === 'number') return this.xorS(value);
            return this.xorM(value);
          };

          AbstractMatrix.prototype.xorS = function xorS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) ^ value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.xorM = function xorM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) ^ matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.xor = function xor(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.xor(value);
          };

          AbstractMatrix.prototype.leftShift = function leftShift(value) {
            if (typeof value === 'number') return this.leftShiftS(value);
            return this.leftShiftM(value);
          };

          AbstractMatrix.prototype.leftShiftS = function leftShiftS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) << value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.leftShiftM = function leftShiftM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) << matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.leftShift = function leftShift(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.leftShift(value);
          };

          AbstractMatrix.prototype.signPropagatingRightShift = function signPropagatingRightShift(value) {
            if (typeof value === 'number') return this.signPropagatingRightShiftS(value);
            return this.signPropagatingRightShiftM(value);
          };

          AbstractMatrix.prototype.signPropagatingRightShiftS = function signPropagatingRightShiftS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) >> value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.signPropagatingRightShiftM = function signPropagatingRightShiftM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) >> matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.signPropagatingRightShift = function signPropagatingRightShift(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.signPropagatingRightShift(value);
          };

          AbstractMatrix.prototype.rightShift = function rightShift(value) {
            if (typeof value === 'number') return this.rightShiftS(value);
            return this.rightShiftM(value);
          };

          AbstractMatrix.prototype.rightShiftS = function rightShiftS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) >>> value);
              }
            }

            return this;
          };

          AbstractMatrix.prototype.rightShiftM = function rightShiftM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) >>> matrix.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.rightShift = function rightShift(matrix, value) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.rightShift(value);
          };

          AbstractMatrix.prototype.zeroFillRightShift = AbstractMatrix.prototype.rightShift;
          AbstractMatrix.prototype.zeroFillRightShiftS = AbstractMatrix.prototype.rightShiftS;
          AbstractMatrix.prototype.zeroFillRightShiftM = AbstractMatrix.prototype.rightShiftM;
          AbstractMatrix.zeroFillRightShift = AbstractMatrix.rightShift;

          AbstractMatrix.prototype.not = function not() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, ~this.get(i, j));
              }
            }

            return this;
          };

          AbstractMatrix.not = function not(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.not();
          };

          AbstractMatrix.prototype.abs = function abs() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.abs(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.abs = function abs(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.abs();
          };

          AbstractMatrix.prototype.acos = function acos() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.acos(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.acos = function acos(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.acos();
          };

          AbstractMatrix.prototype.acosh = function acosh() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.acosh(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.acosh = function acosh(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.acosh();
          };

          AbstractMatrix.prototype.asin = function asin() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.asin(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.asin = function asin(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.asin();
          };

          AbstractMatrix.prototype.asinh = function asinh() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.asinh(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.asinh = function asinh(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.asinh();
          };

          AbstractMatrix.prototype.atan = function atan() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.atan(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.atan = function atan(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.atan();
          };

          AbstractMatrix.prototype.atanh = function atanh() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.atanh(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.atanh = function atanh(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.atanh();
          };

          AbstractMatrix.prototype.cbrt = function cbrt() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.cbrt(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.cbrt = function cbrt(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.cbrt();
          };

          AbstractMatrix.prototype.ceil = function ceil() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.ceil(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.ceil = function ceil(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.ceil();
          };

          AbstractMatrix.prototype.clz32 = function clz32() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.clz32(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.clz32 = function clz32(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.clz32();
          };

          AbstractMatrix.prototype.cos = function cos() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.cos(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.cos = function cos(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.cos();
          };

          AbstractMatrix.prototype.cosh = function cosh() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.cosh(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.cosh = function cosh(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.cosh();
          };

          AbstractMatrix.prototype.exp = function exp() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.exp(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.exp = function exp(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.exp();
          };

          AbstractMatrix.prototype.expm1 = function expm1() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.expm1(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.expm1 = function expm1(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.expm1();
          };

          AbstractMatrix.prototype.floor = function floor() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.floor(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.floor = function floor(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.floor();
          };

          AbstractMatrix.prototype.fround = function fround() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.fround(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.fround = function fround(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.fround();
          };

          AbstractMatrix.prototype.log = function log() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.log(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.log = function log(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.log();
          };

          AbstractMatrix.prototype.log1p = function log1p() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.log1p(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.log1p = function log1p(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.log1p();
          };

          AbstractMatrix.prototype.log10 = function log10() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.log10(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.log10 = function log10(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.log10();
          };

          AbstractMatrix.prototype.log2 = function log2() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.log2(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.log2 = function log2(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.log2();
          };

          AbstractMatrix.prototype.round = function round() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.round(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.round = function round(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.round();
          };

          AbstractMatrix.prototype.sign = function sign() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.sign(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.sign = function sign(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.sign();
          };

          AbstractMatrix.prototype.sin = function sin() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.sin(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.sin = function sin(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.sin();
          };

          AbstractMatrix.prototype.sinh = function sinh() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.sinh(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.sinh = function sinh(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.sinh();
          };

          AbstractMatrix.prototype.sqrt = function sqrt() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.sqrt(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.sqrt = function sqrt(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.sqrt();
          };

          AbstractMatrix.prototype.tan = function tan() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.tan(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.tan = function tan(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.tan();
          };

          AbstractMatrix.prototype.tanh = function tanh() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.tanh(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.tanh = function tanh(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.tanh();
          };

          AbstractMatrix.prototype.trunc = function trunc() {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.trunc(this.get(i, j)));
              }
            }

            return this;
          };

          AbstractMatrix.trunc = function trunc(matrix) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.trunc();
          };

          AbstractMatrix.pow = function pow(matrix, arg0) {
            const newMatrix = new Matrix(matrix);
            return newMatrix.pow(arg0);
          };

          AbstractMatrix.prototype.pow = function pow(value) {
            if (typeof value === 'number') return this.powS(value);
            return this.powM(value);
          };

          AbstractMatrix.prototype.powS = function powS(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.pow(this.get(i, j), value));
              }
            }

            return this;
          };

          AbstractMatrix.prototype.powM = function powM(matrix) {
            matrix = Matrix.checkMatrix(matrix);

            if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
              throw new RangeError('Matrices dimensions must be equal');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, Math.pow(this.get(i, j), matrix.get(i, j)));
              }
            }

            return this;
          };
        }
        /**
         * @private
         * Check that a row index is not out of bounds
         * @param {Matrix} matrix
         * @param {number} index
         * @param {boolean} [outer]
         */


        function checkRowIndex(matrix, index, outer) {
          let max = outer ? matrix.rows : matrix.rows - 1;

          if (index < 0 || index > max) {
            throw new RangeError('Row index out of range');
          }
        }
        /**
         * @private
         * Check that a column index is not out of bounds
         * @param {Matrix} matrix
         * @param {number} index
         * @param {boolean} [outer]
         */


        function checkColumnIndex(matrix, index, outer) {
          let max = outer ? matrix.columns : matrix.columns - 1;

          if (index < 0 || index > max) {
            throw new RangeError('Column index out of range');
          }
        }
        /**
         * @private
         * Check that the provided vector is an array with the right length
         * @param {Matrix} matrix
         * @param {Array|Matrix} vector
         * @return {Array}
         * @throws {RangeError}
         */


        function checkRowVector(matrix, vector) {
          if (vector.to1DArray) {
            vector = vector.to1DArray();
          }

          if (vector.length !== matrix.columns) {
            throw new RangeError('vector size must be the same as the number of columns');
          }

          return vector;
        }
        /**
         * @private
         * Check that the provided vector is an array with the right length
         * @param {Matrix} matrix
         * @param {Array|Matrix} vector
         * @return {Array}
         * @throws {RangeError}
         */


        function checkColumnVector(matrix, vector) {
          if (vector.to1DArray) {
            vector = vector.to1DArray();
          }

          if (vector.length !== matrix.rows) {
            throw new RangeError('vector size must be the same as the number of rows');
          }

          return vector;
        }

        function checkIndices(matrix, rowIndices, columnIndices) {
          return {
            row: checkRowIndices(matrix, rowIndices),
            column: checkColumnIndices(matrix, columnIndices)
          };
        }

        function checkRowIndices(matrix, rowIndices) {
          if (typeof rowIndices !== 'object') {
            throw new TypeError('unexpected type for row indices');
          }

          let rowOut = rowIndices.some(r => {
            return r < 0 || r >= matrix.rows;
          });

          if (rowOut) {
            throw new RangeError('row indices are out of range');
          }

          if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);
          return rowIndices;
        }

        function checkColumnIndices(matrix, columnIndices) {
          if (typeof columnIndices !== 'object') {
            throw new TypeError('unexpected type for column indices');
          }

          let columnOut = columnIndices.some(c => {
            return c < 0 || c >= matrix.columns;
          });

          if (columnOut) {
            throw new RangeError('column indices are out of range');
          }

          if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);
          return columnIndices;
        }

        function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
          if (arguments.length !== 5) {
            throw new RangeError('expected 4 arguments');
          }

          checkNumber('startRow', startRow);
          checkNumber('endRow', endRow);
          checkNumber('startColumn', startColumn);
          checkNumber('endColumn', endColumn);

          if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
            throw new RangeError('Submatrix indices are out of range');
          }
        }

        function newArray(length, value = 0) {
          let array = [];

          for (let i = 0; i < length; i++) {
            array.push(value);
          }

          return array;
        }

        function checkNumber(name, value) {
          if (typeof value !== 'number') {
            throw new TypeError(`${name} must be a number`);
          }
        }

        function checkNonEmpty(matrix) {
          if (matrix.isEmpty()) {
            throw new Error('Empty matrix has no elements to index');
          }
        }

        function sumByRow(matrix) {
          let sum = newArray(matrix.rows);

          for (let i = 0; i < matrix.rows; ++i) {
            for (let j = 0; j < matrix.columns; ++j) {
              sum[i] += matrix.get(i, j);
            }
          }

          return sum;
        }

        function sumByColumn(matrix) {
          let sum = newArray(matrix.columns);

          for (let i = 0; i < matrix.rows; ++i) {
            for (let j = 0; j < matrix.columns; ++j) {
              sum[j] += matrix.get(i, j);
            }
          }

          return sum;
        }

        function sumAll(matrix) {
          let v = 0;

          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              v += matrix.get(i, j);
            }
          }

          return v;
        }

        function productByRow(matrix) {
          let sum = newArray(matrix.rows, 1);

          for (let i = 0; i < matrix.rows; ++i) {
            for (let j = 0; j < matrix.columns; ++j) {
              sum[i] *= matrix.get(i, j);
            }
          }

          return sum;
        }

        function productByColumn(matrix) {
          let sum = newArray(matrix.columns, 1);

          for (let i = 0; i < matrix.rows; ++i) {
            for (let j = 0; j < matrix.columns; ++j) {
              sum[j] *= matrix.get(i, j);
            }
          }

          return sum;
        }

        function productAll(matrix) {
          let v = 1;

          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              v *= matrix.get(i, j);
            }
          }

          return v;
        }

        function varianceByRow(matrix, unbiased, mean) {
          const rows = matrix.rows;
          const cols = matrix.columns;
          const variance = [];

          for (let i = 0; i < rows; i++) {
            let sum1 = 0;
            let sum2 = 0;
            let x = 0;

            for (let j = 0; j < cols; j++) {
              x = matrix.get(i, j) - mean[i];
              sum1 += x;
              sum2 += x * x;
            }

            if (unbiased) {
              variance.push((sum2 - sum1 * sum1 / cols) / (cols - 1));
            } else {
              variance.push((sum2 - sum1 * sum1 / cols) / cols);
            }
          }

          return variance;
        }

        function varianceByColumn(matrix, unbiased, mean) {
          const rows = matrix.rows;
          const cols = matrix.columns;
          const variance = [];

          for (let j = 0; j < cols; j++) {
            let sum1 = 0;
            let sum2 = 0;
            let x = 0;

            for (let i = 0; i < rows; i++) {
              x = matrix.get(i, j) - mean[j];
              sum1 += x;
              sum2 += x * x;
            }

            if (unbiased) {
              variance.push((sum2 - sum1 * sum1 / rows) / (rows - 1));
            } else {
              variance.push((sum2 - sum1 * sum1 / rows) / rows);
            }
          }

          return variance;
        }

        function varianceAll(matrix, unbiased, mean) {
          const rows = matrix.rows;
          const cols = matrix.columns;
          const size = rows * cols;
          let sum1 = 0;
          let sum2 = 0;
          let x = 0;

          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              x = matrix.get(i, j) - mean;
              sum1 += x;
              sum2 += x * x;
            }
          }

          if (unbiased) {
            return (sum2 - sum1 * sum1 / size) / (size - 1);
          } else {
            return (sum2 - sum1 * sum1 / size) / size;
          }
        }

        function centerByRow(matrix, mean) {
          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              matrix.set(i, j, matrix.get(i, j) - mean[i]);
            }
          }
        }

        function centerByColumn(matrix, mean) {
          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              matrix.set(i, j, matrix.get(i, j) - mean[j]);
            }
          }
        }

        function centerAll(matrix, mean) {
          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              matrix.set(i, j, matrix.get(i, j) - mean);
            }
          }
        }

        function getScaleByRow(matrix) {
          const scale = [];

          for (let i = 0; i < matrix.rows; i++) {
            let sum = 0;

            for (let j = 0; j < matrix.columns; j++) {
              sum += Math.pow(matrix.get(i, j), 2) / (matrix.columns - 1);
            }

            scale.push(Math.sqrt(sum));
          }

          return scale;
        }

        function scaleByRow(matrix, scale) {
          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              matrix.set(i, j, matrix.get(i, j) / scale[i]);
            }
          }
        }

        function getScaleByColumn(matrix) {
          const scale = [];

          for (let j = 0; j < matrix.columns; j++) {
            let sum = 0;

            for (let i = 0; i < matrix.rows; i++) {
              sum += Math.pow(matrix.get(i, j), 2) / (matrix.rows - 1);
            }

            scale.push(Math.sqrt(sum));
          }

          return scale;
        }

        function scaleByColumn(matrix, scale) {
          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              matrix.set(i, j, matrix.get(i, j) / scale[j]);
            }
          }
        }

        function getScaleAll(matrix) {
          const divider = matrix.size - 1;
          let sum = 0;

          for (let j = 0; j < matrix.columns; j++) {
            for (let i = 0; i < matrix.rows; i++) {
              sum += Math.pow(matrix.get(i, j), 2) / divider;
            }
          }

          return Math.sqrt(sum);
        }

        function scaleAll(matrix, scale) {
          for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
              matrix.set(i, j, matrix.get(i, j) / scale);
            }
          }
        }

        class AbstractMatrix {
          static from1DArray(newRows, newColumns, newData) {
            let length = newRows * newColumns;

            if (length !== newData.length) {
              throw new RangeError('data length does not match given dimensions');
            }

            let newMatrix = new Matrix(newRows, newColumns);

            for (let row = 0; row < newRows; row++) {
              for (let column = 0; column < newColumns; column++) {
                newMatrix.set(row, column, newData[row * newColumns + column]);
              }
            }

            return newMatrix;
          }

          static rowVector(newData) {
            let vector = new Matrix(1, newData.length);

            for (let i = 0; i < newData.length; i++) {
              vector.set(0, i, newData[i]);
            }

            return vector;
          }

          static columnVector(newData) {
            let vector = new Matrix(newData.length, 1);

            for (let i = 0; i < newData.length; i++) {
              vector.set(i, 0, newData[i]);
            }

            return vector;
          }

          static zeros(rows, columns) {
            return new Matrix(rows, columns);
          }

          static ones(rows, columns) {
            return new Matrix(rows, columns).fill(1);
          }

          static rand(rows, columns, options = {}) {
            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              random = Math.random
            } = options;
            let matrix = new Matrix(rows, columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                matrix.set(i, j, random());
              }
            }

            return matrix;
          }

          static randInt(rows, columns, options = {}) {
            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              min = 0,
              max = 1000,
              random = Math.random
            } = options;
            if (!Number.isInteger(min)) throw new TypeError('min must be an integer');
            if (!Number.isInteger(max)) throw new TypeError('max must be an integer');
            if (min >= max) throw new RangeError('min must be smaller than max');
            let interval = max - min;
            let matrix = new Matrix(rows, columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                let value = min + Math.round(random() * interval);
                matrix.set(i, j, value);
              }
            }

            return matrix;
          }

          static eye(rows, columns, value) {
            if (columns === undefined) columns = rows;
            if (value === undefined) value = 1;
            let min = Math.min(rows, columns);
            let matrix = this.zeros(rows, columns);

            for (let i = 0; i < min; i++) {
              matrix.set(i, i, value);
            }

            return matrix;
          }

          static diag(data, rows, columns) {
            let l = data.length;
            if (rows === undefined) rows = l;
            if (columns === undefined) columns = rows;
            let min = Math.min(l, rows, columns);
            let matrix = this.zeros(rows, columns);

            for (let i = 0; i < min; i++) {
              matrix.set(i, i, data[i]);
            }

            return matrix;
          }

          static min(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            let rows = matrix1.rows;
            let columns = matrix1.columns;
            let result = new Matrix(rows, columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
              }
            }

            return result;
          }

          static max(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            let rows = matrix1.rows;
            let columns = matrix1.columns;
            let result = new this(rows, columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
              }
            }

            return result;
          }

          static checkMatrix(value) {
            return AbstractMatrix.isMatrix(value) ? value : new Matrix(value);
          }

          static isMatrix(value) {
            return value != null && value.klass === 'Matrix';
          }

          get size() {
            return this.rows * this.columns;
          }

          apply(callback) {
            if (typeof callback !== 'function') {
              throw new TypeError('callback must be a function');
            }

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                callback.call(this, i, j);
              }
            }

            return this;
          }

          to1DArray() {
            let array = [];

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                array.push(this.get(i, j));
              }
            }

            return array;
          }

          to2DArray() {
            let copy = [];

            for (let i = 0; i < this.rows; i++) {
              copy.push([]);

              for (let j = 0; j < this.columns; j++) {
                copy[i].push(this.get(i, j));
              }
            }

            return copy;
          }

          toJSON() {
            return this.to2DArray();
          }

          isRowVector() {
            return this.rows === 1;
          }

          isColumnVector() {
            return this.columns === 1;
          }

          isVector() {
            return this.rows === 1 || this.columns === 1;
          }

          isSquare() {
            return this.rows === this.columns;
          }

          isEmpty() {
            return this.rows === 0 || this.columns === 0;
          }

          isSymmetric() {
            if (this.isSquare()) {
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j <= i; j++) {
                  if (this.get(i, j) !== this.get(j, i)) {
                    return false;
                  }
                }
              }

              return true;
            }

            return false;
          }

          isEchelonForm() {
            let i = 0;
            let j = 0;
            let previousColumn = -1;
            let isEchelonForm = true;
            let checked = false;

            while (i < this.rows && isEchelonForm) {
              j = 0;
              checked = false;

              while (j < this.columns && checked === false) {
                if (this.get(i, j) === 0) {
                  j++;
                } else if (this.get(i, j) === 1 && j > previousColumn) {
                  checked = true;
                  previousColumn = j;
                } else {
                  isEchelonForm = false;
                  checked = true;
                }
              }

              i++;
            }

            return isEchelonForm;
          }

          isReducedEchelonForm() {
            let i = 0;
            let j = 0;
            let previousColumn = -1;
            let isReducedEchelonForm = true;
            let checked = false;

            while (i < this.rows && isReducedEchelonForm) {
              j = 0;
              checked = false;

              while (j < this.columns && checked === false) {
                if (this.get(i, j) === 0) {
                  j++;
                } else if (this.get(i, j) === 1 && j > previousColumn) {
                  checked = true;
                  previousColumn = j;
                } else {
                  isReducedEchelonForm = false;
                  checked = true;
                }
              }

              for (let k = j + 1; k < this.rows; k++) {
                if (this.get(i, k) !== 0) {
                  isReducedEchelonForm = false;
                }
              }

              i++;
            }

            return isReducedEchelonForm;
          }

          echelonForm() {
            let result = this.clone();
            let h = 0;
            let k = 0;

            while (h < result.rows && k < result.columns) {
              let iMax = h;

              for (let i = h; i < result.rows; i++) {
                if (result.get(i, k) > result.get(iMax, k)) {
                  iMax = i;
                }
              }

              if (result.get(iMax, k) === 0) {
                k++;
              } else {
                result.swapRows(h, iMax);
                let tmp = result.get(h, k);

                for (let j = k; j < result.columns; j++) {
                  result.set(h, j, result.get(h, j) / tmp);
                }

                for (let i = h + 1; i < result.rows; i++) {
                  let factor = result.get(i, k) / result.get(h, k);
                  result.set(i, k, 0);

                  for (let j = k + 1; j < result.columns; j++) {
                    result.set(i, j, result.get(i, j) - result.get(h, j) * factor);
                  }
                }

                h++;
                k++;
              }
            }

            return result;
          }

          reducedEchelonForm() {
            let result = this.echelonForm();
            let m = result.columns;
            let n = result.rows;
            let h = n - 1;

            while (h >= 0) {
              if (result.maxRow(h) === 0) {
                h--;
              } else {
                let p = 0;
                let pivot = false;

                while (p < n && pivot === false) {
                  if (result.get(h, p) === 1) {
                    pivot = true;
                  } else {
                    p++;
                  }
                }

                for (let i = 0; i < h; i++) {
                  let factor = result.get(i, p);

                  for (let j = p; j < m; j++) {
                    let tmp = result.get(i, j) - factor * result.get(h, j);
                    result.set(i, j, tmp);
                  }
                }

                h--;
              }
            }

            return result;
          }

          set() {
            throw new Error('set method is unimplemented');
          }

          get() {
            throw new Error('get method is unimplemented');
          }

          repeat(options = {}) {
            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              rows = 1,
              columns = 1
            } = options;

            if (!Number.isInteger(rows) || rows <= 0) {
              throw new TypeError('rows must be a positive integer');
            }

            if (!Number.isInteger(columns) || columns <= 0) {
              throw new TypeError('columns must be a positive integer');
            }

            let matrix = new Matrix(this.rows * rows, this.columns * columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                matrix.setSubMatrix(this, this.rows * i, this.columns * j);
              }
            }

            return matrix;
          }

          fill(value) {
            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, value);
              }
            }

            return this;
          }

          neg() {
            return this.mulS(-1);
          }

          getRow(index) {
            checkRowIndex(this, index);
            let row = [];

            for (let i = 0; i < this.columns; i++) {
              row.push(this.get(index, i));
            }

            return row;
          }

          getRowVector(index) {
            return Matrix.rowVector(this.getRow(index));
          }

          setRow(index, array) {
            checkRowIndex(this, index);
            array = checkRowVector(this, array);

            for (let i = 0; i < this.columns; i++) {
              this.set(index, i, array[i]);
            }

            return this;
          }

          swapRows(row1, row2) {
            checkRowIndex(this, row1);
            checkRowIndex(this, row2);

            for (let i = 0; i < this.columns; i++) {
              let temp = this.get(row1, i);
              this.set(row1, i, this.get(row2, i));
              this.set(row2, i, temp);
            }

            return this;
          }

          getColumn(index) {
            checkColumnIndex(this, index);
            let column = [];

            for (let i = 0; i < this.rows; i++) {
              column.push(this.get(i, index));
            }

            return column;
          }

          getColumnVector(index) {
            return Matrix.columnVector(this.getColumn(index));
          }

          setColumn(index, array) {
            checkColumnIndex(this, index);
            array = checkColumnVector(this, array);

            for (let i = 0; i < this.rows; i++) {
              this.set(i, index, array[i]);
            }

            return this;
          }

          swapColumns(column1, column2) {
            checkColumnIndex(this, column1);
            checkColumnIndex(this, column2);

            for (let i = 0; i < this.rows; i++) {
              let temp = this.get(i, column1);
              this.set(i, column1, this.get(i, column2));
              this.set(i, column2, temp);
            }

            return this;
          }

          addRowVector(vector) {
            vector = checkRowVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) + vector[j]);
              }
            }

            return this;
          }

          subRowVector(vector) {
            vector = checkRowVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) - vector[j]);
              }
            }

            return this;
          }

          mulRowVector(vector) {
            vector = checkRowVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) * vector[j]);
              }
            }

            return this;
          }

          divRowVector(vector) {
            vector = checkRowVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) / vector[j]);
              }
            }

            return this;
          }

          addColumnVector(vector) {
            vector = checkColumnVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) + vector[i]);
              }
            }

            return this;
          }

          subColumnVector(vector) {
            vector = checkColumnVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) - vector[i]);
              }
            }

            return this;
          }

          mulColumnVector(vector) {
            vector = checkColumnVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) * vector[i]);
              }
            }

            return this;
          }

          divColumnVector(vector) {
            vector = checkColumnVector(this, vector);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                this.set(i, j, this.get(i, j) / vector[i]);
              }
            }

            return this;
          }

          mulRow(index, value) {
            checkRowIndex(this, index);

            for (let i = 0; i < this.columns; i++) {
              this.set(index, i, this.get(index, i) * value);
            }

            return this;
          }

          mulColumn(index, value) {
            checkColumnIndex(this, index);

            for (let i = 0; i < this.rows; i++) {
              this.set(i, index, this.get(i, index) * value);
            }

            return this;
          }

          max() {
            if (this.isEmpty()) {
              return NaN;
            }

            let v = this.get(0, 0);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                if (this.get(i, j) > v) {
                  v = this.get(i, j);
                }
              }
            }

            return v;
          }

          maxIndex() {
            checkNonEmpty(this);
            let v = this.get(0, 0);
            let idx = [0, 0];

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                if (this.get(i, j) > v) {
                  v = this.get(i, j);
                  idx[0] = i;
                  idx[1] = j;
                }
              }
            }

            return idx;
          }

          min() {
            if (this.isEmpty()) {
              return NaN;
            }

            let v = this.get(0, 0);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                if (this.get(i, j) < v) {
                  v = this.get(i, j);
                }
              }
            }

            return v;
          }

          minIndex() {
            checkNonEmpty(this);
            let v = this.get(0, 0);
            let idx = [0, 0];

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                if (this.get(i, j) < v) {
                  v = this.get(i, j);
                  idx[0] = i;
                  idx[1] = j;
                }
              }
            }

            return idx;
          }

          maxRow(row) {
            checkRowIndex(this, row);

            if (this.isEmpty()) {
              return NaN;
            }

            let v = this.get(row, 0);

            for (let i = 1; i < this.columns; i++) {
              if (this.get(row, i) > v) {
                v = this.get(row, i);
              }
            }

            return v;
          }

          maxRowIndex(row) {
            checkRowIndex(this, row);
            checkNonEmpty(this);
            let v = this.get(row, 0);
            let idx = [row, 0];

            for (let i = 1; i < this.columns; i++) {
              if (this.get(row, i) > v) {
                v = this.get(row, i);
                idx[1] = i;
              }
            }

            return idx;
          }

          minRow(row) {
            checkRowIndex(this, row);

            if (this.isEmpty()) {
              return NaN;
            }

            let v = this.get(row, 0);

            for (let i = 1; i < this.columns; i++) {
              if (this.get(row, i) < v) {
                v = this.get(row, i);
              }
            }

            return v;
          }

          minRowIndex(row) {
            checkRowIndex(this, row);
            checkNonEmpty(this);
            let v = this.get(row, 0);
            let idx = [row, 0];

            for (let i = 1; i < this.columns; i++) {
              if (this.get(row, i) < v) {
                v = this.get(row, i);
                idx[1] = i;
              }
            }

            return idx;
          }

          maxColumn(column) {
            checkColumnIndex(this, column);

            if (this.isEmpty()) {
              return NaN;
            }

            let v = this.get(0, column);

            for (let i = 1; i < this.rows; i++) {
              if (this.get(i, column) > v) {
                v = this.get(i, column);
              }
            }

            return v;
          }

          maxColumnIndex(column) {
            checkColumnIndex(this, column);
            checkNonEmpty(this);
            let v = this.get(0, column);
            let idx = [0, column];

            for (let i = 1; i < this.rows; i++) {
              if (this.get(i, column) > v) {
                v = this.get(i, column);
                idx[0] = i;
              }
            }

            return idx;
          }

          minColumn(column) {
            checkColumnIndex(this, column);

            if (this.isEmpty()) {
              return NaN;
            }

            let v = this.get(0, column);

            for (let i = 1; i < this.rows; i++) {
              if (this.get(i, column) < v) {
                v = this.get(i, column);
              }
            }

            return v;
          }

          minColumnIndex(column) {
            checkColumnIndex(this, column);
            checkNonEmpty(this);
            let v = this.get(0, column);
            let idx = [0, column];

            for (let i = 1; i < this.rows; i++) {
              if (this.get(i, column) < v) {
                v = this.get(i, column);
                idx[0] = i;
              }
            }

            return idx;
          }

          diag() {
            let min = Math.min(this.rows, this.columns);
            let diag = [];

            for (let i = 0; i < min; i++) {
              diag.push(this.get(i, i));
            }

            return diag;
          }

          norm(type = 'frobenius') {
            let result = 0;

            if (type === 'max') {
              return this.max();
            } else if (type === 'frobenius') {
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                  result = result + this.get(i, j) * this.get(i, j);
                }
              }

              return Math.sqrt(result);
            } else {
              throw new RangeError(`unknown norm type: ${type}`);
            }
          }

          cumulativeSum() {
            let sum = 0;

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                sum += this.get(i, j);
                this.set(i, j, sum);
              }
            }

            return this;
          }

          dot(vector2) {
            if (AbstractMatrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
            let vector1 = this.to1DArray();

            if (vector1.length !== vector2.length) {
              throw new RangeError('vectors do not have the same size');
            }

            let dot = 0;

            for (let i = 0; i < vector1.length; i++) {
              dot += vector1[i] * vector2[i];
            }

            return dot;
          }

          mmul(other) {
            other = Matrix.checkMatrix(other);
            let m = this.rows;
            let n = this.columns;
            let p = other.columns;
            let result = new Matrix(m, p);
            let Bcolj = new Float64Array(n);

            for (let j = 0; j < p; j++) {
              for (let k = 0; k < n; k++) {
                Bcolj[k] = other.get(k, j);
              }

              for (let i = 0; i < m; i++) {
                let s = 0;

                for (let k = 0; k < n; k++) {
                  s += this.get(i, k) * Bcolj[k];
                }

                result.set(i, j, s);
              }
            }

            return result;
          }

          strassen2x2(other) {
            other = Matrix.checkMatrix(other);
            let result = new Matrix(2, 2);
            const a11 = this.get(0, 0);
            const b11 = other.get(0, 0);
            const a12 = this.get(0, 1);
            const b12 = other.get(0, 1);
            const a21 = this.get(1, 0);
            const b21 = other.get(1, 0);
            const a22 = this.get(1, 1);
            const b22 = other.get(1, 1); // Compute intermediate values.

            const m1 = (a11 + a22) * (b11 + b22);
            const m2 = (a21 + a22) * b11;
            const m3 = a11 * (b12 - b22);
            const m4 = a22 * (b21 - b11);
            const m5 = (a11 + a12) * b22;
            const m6 = (a21 - a11) * (b11 + b12);
            const m7 = (a12 - a22) * (b21 + b22); // Combine intermediate values into the output.

            const c00 = m1 + m4 - m5 + m7;
            const c01 = m3 + m5;
            const c10 = m2 + m4;
            const c11 = m1 - m2 + m3 + m6;
            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            return result;
          }

          strassen3x3(other) {
            other = Matrix.checkMatrix(other);
            let result = new Matrix(3, 3);
            const a00 = this.get(0, 0);
            const a01 = this.get(0, 1);
            const a02 = this.get(0, 2);
            const a10 = this.get(1, 0);
            const a11 = this.get(1, 1);
            const a12 = this.get(1, 2);
            const a20 = this.get(2, 0);
            const a21 = this.get(2, 1);
            const a22 = this.get(2, 2);
            const b00 = other.get(0, 0);
            const b01 = other.get(0, 1);
            const b02 = other.get(0, 2);
            const b10 = other.get(1, 0);
            const b11 = other.get(1, 1);
            const b12 = other.get(1, 2);
            const b20 = other.get(2, 0);
            const b21 = other.get(2, 1);
            const b22 = other.get(2, 2);
            const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
            const m2 = (a00 - a10) * (-b01 + b11);
            const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
            const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
            const m5 = (a10 + a11) * (-b00 + b01);
            const m6 = a00 * b00;
            const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
            const m8 = (-a00 + a20) * (b02 - b12);
            const m9 = (a20 + a21) * (-b00 + b02);
            const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
            const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
            const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
            const m13 = (a02 - a22) * (b11 - b21);
            const m14 = a02 * b20;
            const m15 = (a21 + a22) * (-b20 + b21);
            const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
            const m17 = (a02 - a12) * (b12 - b22);
            const m18 = (a11 + a12) * (-b20 + b22);
            const m19 = a01 * b10;
            const m20 = a12 * b21;
            const m21 = a10 * b02;
            const m22 = a20 * b01;
            const m23 = a22 * b22;
            const c00 = m6 + m14 + m19;
            const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
            const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
            const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
            const c11 = m2 + m4 + m5 + m6 + m20;
            const c12 = m14 + m16 + m17 + m18 + m21;
            const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
            const c21 = m12 + m13 + m14 + m15 + m22;
            const c22 = m6 + m7 + m8 + m9 + m23;
            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(0, 2, c02);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            result.set(1, 2, c12);
            result.set(2, 0, c20);
            result.set(2, 1, c21);
            result.set(2, 2, c22);
            return result;
          }

          mmulStrassen(y) {
            y = Matrix.checkMatrix(y);
            let x = this.clone();
            let r1 = x.rows;
            let c1 = x.columns;
            let r2 = y.rows;
            let c2 = y.columns;

            if (c1 !== r2) {
              // eslint-disable-next-line no-console
              console.warn(`Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`);
            } // Put a matrix into the top left of a matrix of zeros.
            // `rows` and `cols` are the dimensions of the output matrix.


            function embed(mat, rows, cols) {
              let r = mat.rows;
              let c = mat.columns;

              if (r === rows && c === cols) {
                return mat;
              } else {
                let resultat = AbstractMatrix.zeros(rows, cols);
                resultat = resultat.setSubMatrix(mat, 0, 0);
                return resultat;
              }
            } // Make sure both matrices are the same size.
            // This is exclusively for simplicity:
            // this algorithm can be implemented with matrices of different sizes.


            let r = Math.max(r1, r2);
            let c = Math.max(c1, c2);
            x = embed(x, r, c);
            y = embed(y, r, c); // Our recursive multiplication function.

            function blockMult(a, b, rows, cols) {
              // For small matrices, resort to naive multiplication.
              if (rows <= 512 || cols <= 512) {
                return a.mmul(b); // a is equivalent to this
              } // Apply dynamic padding.


              if (rows % 2 === 1 && cols % 2 === 1) {
                a = embed(a, rows + 1, cols + 1);
                b = embed(b, rows + 1, cols + 1);
              } else if (rows % 2 === 1) {
                a = embed(a, rows + 1, cols);
                b = embed(b, rows + 1, cols);
              } else if (cols % 2 === 1) {
                a = embed(a, rows, cols + 1);
                b = embed(b, rows, cols + 1);
              }

              let halfRows = parseInt(a.rows / 2, 10);
              let halfCols = parseInt(a.columns / 2, 10); // Subdivide input matrices.

              let a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
              let b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);
              let a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
              let b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);
              let a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
              let b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);
              let a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
              let b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1); // Compute intermediate values.

              let m1 = blockMult(AbstractMatrix.add(a11, a22), AbstractMatrix.add(b11, b22), halfRows, halfCols);
              let m2 = blockMult(AbstractMatrix.add(a21, a22), b11, halfRows, halfCols);
              let m3 = blockMult(a11, AbstractMatrix.sub(b12, b22), halfRows, halfCols);
              let m4 = blockMult(a22, AbstractMatrix.sub(b21, b11), halfRows, halfCols);
              let m5 = blockMult(AbstractMatrix.add(a11, a12), b22, halfRows, halfCols);
              let m6 = blockMult(AbstractMatrix.sub(a21, a11), AbstractMatrix.add(b11, b12), halfRows, halfCols);
              let m7 = blockMult(AbstractMatrix.sub(a12, a22), AbstractMatrix.add(b21, b22), halfRows, halfCols); // Combine intermediate values into the output.

              let c11 = AbstractMatrix.add(m1, m4);
              c11.sub(m5);
              c11.add(m7);
              let c12 = AbstractMatrix.add(m3, m5);
              let c21 = AbstractMatrix.add(m2, m4);
              let c22 = AbstractMatrix.sub(m1, m2);
              c22.add(m3);
              c22.add(m6); // Crop output to the desired size (undo dynamic padding).

              let resultat = AbstractMatrix.zeros(2 * c11.rows, 2 * c11.columns);
              resultat = resultat.setSubMatrix(c11, 0, 0);
              resultat = resultat.setSubMatrix(c12, c11.rows, 0);
              resultat = resultat.setSubMatrix(c21, 0, c11.columns);
              resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
              return resultat.subMatrix(0, rows - 1, 0, cols - 1);
            }

            return blockMult(x, y, r, c);
          }

          scaleRows(options = {}) {
            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              min = 0,
              max = 1
            } = options;
            if (!Number.isFinite(min)) throw new TypeError('min must be a number');
            if (!Number.isFinite(max)) throw new TypeError('max must be a number');
            if (min >= max) throw new RangeError('min must be smaller than max');
            let newMatrix = new Matrix(this.rows, this.columns);

            for (let i = 0; i < this.rows; i++) {
              const row = this.getRow(i);

              if (row.length > 0) {
                rescale__default['default'](row, {
                  min,
                  max,
                  output: row
                });
              }

              newMatrix.setRow(i, row);
            }

            return newMatrix;
          }

          scaleColumns(options = {}) {
            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              min = 0,
              max = 1
            } = options;
            if (!Number.isFinite(min)) throw new TypeError('min must be a number');
            if (!Number.isFinite(max)) throw new TypeError('max must be a number');
            if (min >= max) throw new RangeError('min must be smaller than max');
            let newMatrix = new Matrix(this.rows, this.columns);

            for (let i = 0; i < this.columns; i++) {
              const column = this.getColumn(i);

              if (column.length) {
                rescale__default['default'](column, {
                  min: min,
                  max: max,
                  output: column
                });
              }

              newMatrix.setColumn(i, column);
            }

            return newMatrix;
          }

          flipRows() {
            const middle = Math.ceil(this.columns / 2);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < middle; j++) {
                let first = this.get(i, j);
                let last = this.get(i, this.columns - 1 - j);
                this.set(i, j, last);
                this.set(i, this.columns - 1 - j, first);
              }
            }

            return this;
          }

          flipColumns() {
            const middle = Math.ceil(this.rows / 2);

            for (let j = 0; j < this.columns; j++) {
              for (let i = 0; i < middle; i++) {
                let first = this.get(i, j);
                let last = this.get(this.rows - 1 - i, j);
                this.set(i, j, last);
                this.set(this.rows - 1 - i, j, first);
              }
            }

            return this;
          }

          kroneckerProduct(other) {
            other = Matrix.checkMatrix(other);
            let m = this.rows;
            let n = this.columns;
            let p = other.rows;
            let q = other.columns;
            let result = new Matrix(m * p, n * q);

            for (let i = 0; i < m; i++) {
              for (let j = 0; j < n; j++) {
                for (let k = 0; k < p; k++) {
                  for (let l = 0; l < q; l++) {
                    result.set(p * i + k, q * j + l, this.get(i, j) * other.get(k, l));
                  }
                }
              }
            }

            return result;
          }

          transpose() {
            let result = new Matrix(this.columns, this.rows);

            for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.columns; j++) {
                result.set(j, i, this.get(i, j));
              }
            }

            return result;
          }

          sortRows(compareFunction = compareNumbers) {
            for (let i = 0; i < this.rows; i++) {
              this.setRow(i, this.getRow(i).sort(compareFunction));
            }

            return this;
          }

          sortColumns(compareFunction = compareNumbers) {
            for (let i = 0; i < this.columns; i++) {
              this.setColumn(i, this.getColumn(i).sort(compareFunction));
            }

            return this;
          }

          subMatrix(startRow, endRow, startColumn, endColumn) {
            checkRange(this, startRow, endRow, startColumn, endColumn);
            let newMatrix = new Matrix(endRow - startRow + 1, endColumn - startColumn + 1);

            for (let i = startRow; i <= endRow; i++) {
              for (let j = startColumn; j <= endColumn; j++) {
                newMatrix.set(i - startRow, j - startColumn, this.get(i, j));
              }
            }

            return newMatrix;
          }

          subMatrixRow(indices, startColumn, endColumn) {
            if (startColumn === undefined) startColumn = 0;
            if (endColumn === undefined) endColumn = this.columns - 1;

            if (startColumn > endColumn || startColumn < 0 || startColumn >= this.columns || endColumn < 0 || endColumn >= this.columns) {
              throw new RangeError('Argument out of range');
            }

            let newMatrix = new Matrix(indices.length, endColumn - startColumn + 1);

            for (let i = 0; i < indices.length; i++) {
              for (let j = startColumn; j <= endColumn; j++) {
                if (indices[i] < 0 || indices[i] >= this.rows) {
                  throw new RangeError(`Row index out of range: ${indices[i]}`);
                }

                newMatrix.set(i, j - startColumn, this.get(indices[i], j));
              }
            }

            return newMatrix;
          }

          subMatrixColumn(indices, startRow, endRow) {
            if (startRow === undefined) startRow = 0;
            if (endRow === undefined) endRow = this.rows - 1;

            if (startRow > endRow || startRow < 0 || startRow >= this.rows || endRow < 0 || endRow >= this.rows) {
              throw new RangeError('Argument out of range');
            }

            let newMatrix = new Matrix(endRow - startRow + 1, indices.length);

            for (let i = 0; i < indices.length; i++) {
              for (let j = startRow; j <= endRow; j++) {
                if (indices[i] < 0 || indices[i] >= this.columns) {
                  throw new RangeError(`Column index out of range: ${indices[i]}`);
                }

                newMatrix.set(j - startRow, i, this.get(j, indices[i]));
              }
            }

            return newMatrix;
          }

          setSubMatrix(matrix, startRow, startColumn) {
            matrix = Matrix.checkMatrix(matrix);

            if (matrix.isEmpty()) {
              return this;
            }

            let endRow = startRow + matrix.rows - 1;
            let endColumn = startColumn + matrix.columns - 1;
            checkRange(this, startRow, endRow, startColumn, endColumn);

            for (let i = 0; i < matrix.rows; i++) {
              for (let j = 0; j < matrix.columns; j++) {
                this.set(startRow + i, startColumn + j, matrix.get(i, j));
              }
            }

            return this;
          }

          selection(rowIndices, columnIndices) {
            let indices = checkIndices(this, rowIndices, columnIndices);
            let newMatrix = new Matrix(rowIndices.length, columnIndices.length);

            for (let i = 0; i < indices.row.length; i++) {
              let rowIndex = indices.row[i];

              for (let j = 0; j < indices.column.length; j++) {
                let columnIndex = indices.column[j];
                newMatrix.set(i, j, this.get(rowIndex, columnIndex));
              }
            }

            return newMatrix;
          }

          trace() {
            let min = Math.min(this.rows, this.columns);
            let trace = 0;

            for (let i = 0; i < min; i++) {
              trace += this.get(i, i);
            }

            return trace;
          }

          clone() {
            let newMatrix = new Matrix(this.rows, this.columns);

            for (let row = 0; row < this.rows; row++) {
              for (let column = 0; column < this.columns; column++) {
                newMatrix.set(row, column, this.get(row, column));
              }
            }

            return newMatrix;
          }

          sum(by) {
            switch (by) {
              case 'row':
                return sumByRow(this);

              case 'column':
                return sumByColumn(this);

              case undefined:
                return sumAll(this);

              default:
                throw new Error(`invalid option: ${by}`);
            }
          }

          product(by) {
            switch (by) {
              case 'row':
                return productByRow(this);

              case 'column':
                return productByColumn(this);

              case undefined:
                return productAll(this);

              default:
                throw new Error(`invalid option: ${by}`);
            }
          }

          mean(by) {
            const sum = this.sum(by);

            switch (by) {
              case 'row':
                {
                  for (let i = 0; i < this.rows; i++) {
                    sum[i] /= this.columns;
                  }

                  return sum;
                }

              case 'column':
                {
                  for (let i = 0; i < this.columns; i++) {
                    sum[i] /= this.rows;
                  }

                  return sum;
                }

              case undefined:
                return sum / this.size;

              default:
                throw new Error(`invalid option: ${by}`);
            }
          }

          variance(by, options = {}) {
            if (typeof by === 'object') {
              options = by;
              by = undefined;
            }

            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              unbiased = true,
              mean = this.mean(by)
            } = options;

            if (typeof unbiased !== 'boolean') {
              throw new TypeError('unbiased must be a boolean');
            }

            switch (by) {
              case 'row':
                {
                  if (!Array.isArray(mean)) {
                    throw new TypeError('mean must be an array');
                  }

                  return varianceByRow(this, unbiased, mean);
                }

              case 'column':
                {
                  if (!Array.isArray(mean)) {
                    throw new TypeError('mean must be an array');
                  }

                  return varianceByColumn(this, unbiased, mean);
                }

              case undefined:
                {
                  if (typeof mean !== 'number') {
                    throw new TypeError('mean must be a number');
                  }

                  return varianceAll(this, unbiased, mean);
                }

              default:
                throw new Error(`invalid option: ${by}`);
            }
          }

          standardDeviation(by, options) {
            if (typeof by === 'object') {
              options = by;
              by = undefined;
            }

            const variance = this.variance(by, options);

            if (by === undefined) {
              return Math.sqrt(variance);
            } else {
              for (let i = 0; i < variance.length; i++) {
                variance[i] = Math.sqrt(variance[i]);
              }

              return variance;
            }
          }

          center(by, options = {}) {
            if (typeof by === 'object') {
              options = by;
              by = undefined;
            }

            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            const {
              center = this.mean(by)
            } = options;

            switch (by) {
              case 'row':
                {
                  if (!Array.isArray(center)) {
                    throw new TypeError('center must be an array');
                  }

                  centerByRow(this, center);
                  return this;
                }

              case 'column':
                {
                  if (!Array.isArray(center)) {
                    throw new TypeError('center must be an array');
                  }

                  centerByColumn(this, center);
                  return this;
                }

              case undefined:
                {
                  if (typeof center !== 'number') {
                    throw new TypeError('center must be a number');
                  }

                  centerAll(this, center);
                  return this;
                }

              default:
                throw new Error(`invalid option: ${by}`);
            }
          }

          scale(by, options = {}) {
            if (typeof by === 'object') {
              options = by;
              by = undefined;
            }

            if (typeof options !== 'object') {
              throw new TypeError('options must be an object');
            }

            let scale = options.scale;

            switch (by) {
              case 'row':
                {
                  if (scale === undefined) {
                    scale = getScaleByRow(this);
                  } else if (!Array.isArray(scale)) {
                    throw new TypeError('scale must be an array');
                  }

                  scaleByRow(this, scale);
                  return this;
                }

              case 'column':
                {
                  if (scale === undefined) {
                    scale = getScaleByColumn(this);
                  } else if (!Array.isArray(scale)) {
                    throw new TypeError('scale must be an array');
                  }

                  scaleByColumn(this, scale);
                  return this;
                }

              case undefined:
                {
                  if (scale === undefined) {
                    scale = getScaleAll(this);
                  } else if (typeof scale !== 'number') {
                    throw new TypeError('scale must be a number');
                  }

                  scaleAll(this, scale);
                  return this;
                }

              default:
                throw new Error(`invalid option: ${by}`);
            }
          }

          toString(options) {
            return inspectMatrixWithOptions(this, options);
          }

        }

        AbstractMatrix.prototype.klass = 'Matrix';

        if (typeof Symbol !== 'undefined') {
          AbstractMatrix.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspectMatrix;
        }

        function compareNumbers(a, b) {
          return a - b;
        } // Synonyms


        AbstractMatrix.random = AbstractMatrix.rand;
        AbstractMatrix.randomInt = AbstractMatrix.randInt;
        AbstractMatrix.diagonal = AbstractMatrix.diag;
        AbstractMatrix.prototype.diagonal = AbstractMatrix.prototype.diag;
        AbstractMatrix.identity = AbstractMatrix.eye;
        AbstractMatrix.prototype.negate = AbstractMatrix.prototype.neg;
        AbstractMatrix.prototype.tensorProduct = AbstractMatrix.prototype.kroneckerProduct;

        class Matrix extends AbstractMatrix {
          constructor(nRows, nColumns) {
            super();

            if (Matrix.isMatrix(nRows)) {
              // eslint-disable-next-line no-constructor-return
              return nRows.clone();
            } else if (Number.isInteger(nRows) && nRows >= 0) {
              // Create an empty matrix
              this.data = [];

              if (Number.isInteger(nColumns) && nColumns >= 0) {
                for (let i = 0; i < nRows; i++) {
                  this.data.push(new Float64Array(nColumns));
                }
              } else {
                throw new TypeError('nColumns must be a positive integer');
              }
            } else if (Array.isArray(nRows)) {
              // Copy the values from the 2D array
              const arrayData = nRows;
              nRows = arrayData.length;
              nColumns = nRows ? arrayData[0].length : 0;

              if (typeof nColumns !== 'number') {
                throw new TypeError('Data must be a 2D array with at least one element');
              }

              this.data = [];

              for (let i = 0; i < nRows; i++) {
                if (arrayData[i].length !== nColumns) {
                  throw new RangeError('Inconsistent array dimensions');
                }

                this.data.push(Float64Array.from(arrayData[i]));
              }
            } else {
              throw new TypeError('First argument must be a positive number or an array');
            }

            this.rows = nRows;
            this.columns = nColumns;
          }

          set(rowIndex, columnIndex, value) {
            this.data[rowIndex][columnIndex] = value;
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.data[rowIndex][columnIndex];
          }

          removeRow(index) {
            checkRowIndex(this, index);
            this.data.splice(index, 1);
            this.rows -= 1;
            return this;
          }

          addRow(index, array) {
            if (array === undefined) {
              array = index;
              index = this.rows;
            }

            checkRowIndex(this, index, true);
            array = Float64Array.from(checkRowVector(this, array));
            this.data.splice(index, 0, array);
            this.rows += 1;
            return this;
          }

          removeColumn(index) {
            checkColumnIndex(this, index);

            for (let i = 0; i < this.rows; i++) {
              const newRow = new Float64Array(this.columns - 1);

              for (let j = 0; j < index; j++) {
                newRow[j] = this.data[i][j];
              }

              for (let j = index + 1; j < this.columns; j++) {
                newRow[j - 1] = this.data[i][j];
              }

              this.data[i] = newRow;
            }

            this.columns -= 1;
            return this;
          }

          addColumn(index, array) {
            if (typeof array === 'undefined') {
              array = index;
              index = this.columns;
            }

            checkColumnIndex(this, index, true);
            array = checkColumnVector(this, array);

            for (let i = 0; i < this.rows; i++) {
              const newRow = new Float64Array(this.columns + 1);
              let j = 0;

              for (; j < index; j++) {
                newRow[j] = this.data[i][j];
              }

              newRow[j++] = array[i];

              for (; j < this.columns + 1; j++) {
                newRow[j] = this.data[i][j - 1];
              }

              this.data[i] = newRow;
            }

            this.columns += 1;
            return this;
          }

        }

        installMathOperations(AbstractMatrix, Matrix);

        class BaseView extends AbstractMatrix {
          constructor(matrix, rows, columns) {
            super();
            this.matrix = matrix;
            this.rows = rows;
            this.columns = columns;
          }

        }

        class MatrixColumnView extends BaseView {
          constructor(matrix, column) {
            checkColumnIndex(matrix, column);
            super(matrix, matrix.rows, 1);
            this.column = column;
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(rowIndex, this.column, value);
            return this;
          }

          get(rowIndex) {
            return this.matrix.get(rowIndex, this.column);
          }

        }

        class MatrixColumnSelectionView extends BaseView {
          constructor(matrix, columnIndices) {
            columnIndices = checkColumnIndices(matrix, columnIndices);
            super(matrix, matrix.rows, columnIndices.length);
            this.columnIndices = columnIndices;
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
          }

        }

        class MatrixFlipColumnView extends BaseView {
          constructor(matrix) {
            super(matrix, matrix.rows, matrix.columns);
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
          }

        }

        class MatrixFlipRowView extends BaseView {
          constructor(matrix) {
            super(matrix, matrix.rows, matrix.columns);
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
          }

        }

        class MatrixRowView extends BaseView {
          constructor(matrix, row) {
            checkRowIndex(matrix, row);
            super(matrix, 1, matrix.columns);
            this.row = row;
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(this.row, columnIndex, value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(this.row, columnIndex);
          }

        }

        class MatrixRowSelectionView extends BaseView {
          constructor(matrix, rowIndices) {
            rowIndices = checkRowIndices(matrix, rowIndices);
            super(matrix, rowIndices.length, matrix.columns);
            this.rowIndices = rowIndices;
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
          }

        }

        class MatrixSelectionView extends BaseView {
          constructor(matrix, rowIndices, columnIndices) {
            let indices = checkIndices(matrix, rowIndices, columnIndices);
            super(matrix, indices.row.length, indices.column.length);
            this.rowIndices = indices.row;
            this.columnIndices = indices.column;
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
          }

        }

        class MatrixSubView extends BaseView {
          constructor(matrix, startRow, endRow, startColumn, endColumn) {
            checkRange(matrix, startRow, endRow, startColumn, endColumn);
            super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
            this.startRow = startRow;
            this.startColumn = startColumn;
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
          }

        }

        class MatrixTransposeView extends BaseView {
          constructor(matrix) {
            super(matrix, matrix.columns, matrix.rows);
          }

          set(rowIndex, columnIndex, value) {
            this.matrix.set(columnIndex, rowIndex, value);
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.matrix.get(columnIndex, rowIndex);
          }

        }

        class WrapperMatrix1D extends AbstractMatrix {
          constructor(data, options = {}) {
            const {
              rows = 1
            } = options;

            if (data.length % rows !== 0) {
              throw new Error('the data length is not divisible by the number of rows');
            }

            super();
            this.rows = rows;
            this.columns = data.length / rows;
            this.data = data;
          }

          set(rowIndex, columnIndex, value) {
            let index = this._calculateIndex(rowIndex, columnIndex);

            this.data[index] = value;
            return this;
          }

          get(rowIndex, columnIndex) {
            let index = this._calculateIndex(rowIndex, columnIndex);

            return this.data[index];
          }

          _calculateIndex(row, column) {
            return row * this.columns + column;
          }

        }

        class WrapperMatrix2D extends AbstractMatrix {
          constructor(data) {
            super();
            this.data = data;
            this.rows = data.length;
            this.columns = data[0].length;
          }

          set(rowIndex, columnIndex, value) {
            this.data[rowIndex][columnIndex] = value;
            return this;
          }

          get(rowIndex, columnIndex) {
            return this.data[rowIndex][columnIndex];
          }

        }

        function wrap(array, options) {
          if (Array.isArray(array)) {
            if (array[0] && Array.isArray(array[0])) {
              return new WrapperMatrix2D(array);
            } else {
              return new WrapperMatrix1D(array, options);
            }
          } else {
            throw new Error('the argument is not an array');
          }
        }

        class LuDecomposition {
          constructor(matrix) {
            matrix = WrapperMatrix2D.checkMatrix(matrix);
            let lu = matrix.clone();
            let rows = lu.rows;
            let columns = lu.columns;
            let pivotVector = new Float64Array(rows);
            let pivotSign = 1;
            let i, j, k, p, s, t, v;
            let LUcolj, kmax;

            for (i = 0; i < rows; i++) {
              pivotVector[i] = i;
            }

            LUcolj = new Float64Array(rows);

            for (j = 0; j < columns; j++) {
              for (i = 0; i < rows; i++) {
                LUcolj[i] = lu.get(i, j);
              }

              for (i = 0; i < rows; i++) {
                kmax = Math.min(i, j);
                s = 0;

                for (k = 0; k < kmax; k++) {
                  s += lu.get(i, k) * LUcolj[k];
                }

                LUcolj[i] -= s;
                lu.set(i, j, LUcolj[i]);
              }

              p = j;

              for (i = j + 1; i < rows; i++) {
                if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                  p = i;
                }
              }

              if (p !== j) {
                for (k = 0; k < columns; k++) {
                  t = lu.get(p, k);
                  lu.set(p, k, lu.get(j, k));
                  lu.set(j, k, t);
                }

                v = pivotVector[p];
                pivotVector[p] = pivotVector[j];
                pivotVector[j] = v;
                pivotSign = -pivotSign;
              }

              if (j < rows && lu.get(j, j) !== 0) {
                for (i = j + 1; i < rows; i++) {
                  lu.set(i, j, lu.get(i, j) / lu.get(j, j));
                }
              }
            }

            this.LU = lu;
            this.pivotVector = pivotVector;
            this.pivotSign = pivotSign;
          }

          isSingular() {
            let data = this.LU;
            let col = data.columns;

            for (let j = 0; j < col; j++) {
              if (data.get(j, j) === 0) {
                return true;
              }
            }

            return false;
          }

          solve(value) {
            value = Matrix.checkMatrix(value);
            let lu = this.LU;
            let rows = lu.rows;

            if (rows !== value.rows) {
              throw new Error('Invalid matrix dimensions');
            }

            if (this.isSingular()) {
              throw new Error('LU matrix is singular');
            }

            let count = value.columns;
            let X = value.subMatrixRow(this.pivotVector, 0, count - 1);
            let columns = lu.columns;
            let i, j, k;

            for (k = 0; k < columns; k++) {
              for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                  X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
                }
              }
            }

            for (k = columns - 1; k >= 0; k--) {
              for (j = 0; j < count; j++) {
                X.set(k, j, X.get(k, j) / lu.get(k, k));
              }

              for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                  X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
                }
              }
            }

            return X;
          }

          get determinant() {
            let data = this.LU;

            if (!data.isSquare()) {
              throw new Error('Matrix must be square');
            }

            let determinant = this.pivotSign;
            let col = data.columns;

            for (let j = 0; j < col; j++) {
              determinant *= data.get(j, j);
            }

            return determinant;
          }

          get lowerTriangularMatrix() {
            let data = this.LU;
            let rows = data.rows;
            let columns = data.columns;
            let X = new Matrix(rows, columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                if (i > j) {
                  X.set(i, j, data.get(i, j));
                } else if (i === j) {
                  X.set(i, j, 1);
                } else {
                  X.set(i, j, 0);
                }
              }
            }

            return X;
          }

          get upperTriangularMatrix() {
            let data = this.LU;
            let rows = data.rows;
            let columns = data.columns;
            let X = new Matrix(rows, columns);

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                if (i <= j) {
                  X.set(i, j, data.get(i, j));
                } else {
                  X.set(i, j, 0);
                }
              }
            }

            return X;
          }

          get pivotPermutationVector() {
            return Array.from(this.pivotVector);
          }

        }

        function hypotenuse(a, b) {
          let r = 0;

          if (Math.abs(a) > Math.abs(b)) {
            r = b / a;
            return Math.abs(a) * Math.sqrt(1 + r * r);
          }

          if (b !== 0) {
            r = a / b;
            return Math.abs(b) * Math.sqrt(1 + r * r);
          }

          return 0;
        }

        class QrDecomposition {
          constructor(value) {
            value = WrapperMatrix2D.checkMatrix(value);
            let qr = value.clone();
            let m = value.rows;
            let n = value.columns;
            let rdiag = new Float64Array(n);
            let i, j, k, s;

            for (k = 0; k < n; k++) {
              let nrm = 0;

              for (i = k; i < m; i++) {
                nrm = hypotenuse(nrm, qr.get(i, k));
              }

              if (nrm !== 0) {
                if (qr.get(k, k) < 0) {
                  nrm = -nrm;
                }

                for (i = k; i < m; i++) {
                  qr.set(i, k, qr.get(i, k) / nrm);
                }

                qr.set(k, k, qr.get(k, k) + 1);

                for (j = k + 1; j < n; j++) {
                  s = 0;

                  for (i = k; i < m; i++) {
                    s += qr.get(i, k) * qr.get(i, j);
                  }

                  s = -s / qr.get(k, k);

                  for (i = k; i < m; i++) {
                    qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
                  }
                }
              }

              rdiag[k] = -nrm;
            }

            this.QR = qr;
            this.Rdiag = rdiag;
          }

          solve(value) {
            value = Matrix.checkMatrix(value);
            let qr = this.QR;
            let m = qr.rows;

            if (value.rows !== m) {
              throw new Error('Matrix row dimensions must agree');
            }

            if (!this.isFullRank()) {
              throw new Error('Matrix is rank deficient');
            }

            let count = value.columns;
            let X = value.clone();
            let n = qr.columns;
            let i, j, k, s;

            for (k = 0; k < n; k++) {
              for (j = 0; j < count; j++) {
                s = 0;

                for (i = k; i < m; i++) {
                  s += qr.get(i, k) * X.get(i, j);
                }

                s = -s / qr.get(k, k);

                for (i = k; i < m; i++) {
                  X.set(i, j, X.get(i, j) + s * qr.get(i, k));
                }
              }
            }

            for (k = n - 1; k >= 0; k--) {
              for (j = 0; j < count; j++) {
                X.set(k, j, X.get(k, j) / this.Rdiag[k]);
              }

              for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                  X.set(i, j, X.get(i, j) - X.get(k, j) * qr.get(i, k));
                }
              }
            }

            return X.subMatrix(0, n - 1, 0, count - 1);
          }

          isFullRank() {
            let columns = this.QR.columns;

            for (let i = 0; i < columns; i++) {
              if (this.Rdiag[i] === 0) {
                return false;
              }
            }

            return true;
          }

          get upperTriangularMatrix() {
            let qr = this.QR;
            let n = qr.columns;
            let X = new Matrix(n, n);
            let i, j;

            for (i = 0; i < n; i++) {
              for (j = 0; j < n; j++) {
                if (i < j) {
                  X.set(i, j, qr.get(i, j));
                } else if (i === j) {
                  X.set(i, j, this.Rdiag[i]);
                } else {
                  X.set(i, j, 0);
                }
              }
            }

            return X;
          }

          get orthogonalMatrix() {
            let qr = this.QR;
            let rows = qr.rows;
            let columns = qr.columns;
            let X = new Matrix(rows, columns);
            let i, j, k, s;

            for (k = columns - 1; k >= 0; k--) {
              for (i = 0; i < rows; i++) {
                X.set(i, k, 0);
              }

              X.set(k, k, 1);

              for (j = k; j < columns; j++) {
                if (qr.get(k, k) !== 0) {
                  s = 0;

                  for (i = k; i < rows; i++) {
                    s += qr.get(i, k) * X.get(i, j);
                  }

                  s = -s / qr.get(k, k);

                  for (i = k; i < rows; i++) {
                    X.set(i, j, X.get(i, j) + s * qr.get(i, k));
                  }
                }
              }
            }

            return X;
          }

        }

        class SingularValueDecomposition {
          constructor(value, options = {}) {
            value = WrapperMatrix2D.checkMatrix(value);

            if (value.isEmpty()) {
              throw new Error('Matrix must be non-empty');
            }

            let m = value.rows;
            let n = value.columns;
            const {
              computeLeftSingularVectors = true,
              computeRightSingularVectors = true,
              autoTranspose = false
            } = options;
            let wantu = Boolean(computeLeftSingularVectors);
            let wantv = Boolean(computeRightSingularVectors);
            let swapped = false;
            let a;

            if (m < n) {
              if (!autoTranspose) {
                a = value.clone(); // eslint-disable-next-line no-console

                console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
              } else {
                a = value.transpose();
                m = a.rows;
                n = a.columns;
                swapped = true;
                let aux = wantu;
                wantu = wantv;
                wantv = aux;
              }
            } else {
              a = value.clone();
            }

            let nu = Math.min(m, n);
            let ni = Math.min(m + 1, n);
            let s = new Float64Array(ni);
            let U = new Matrix(m, nu);
            let V = new Matrix(n, n);
            let e = new Float64Array(n);
            let work = new Float64Array(m);
            let si = new Float64Array(ni);

            for (let i = 0; i < ni; i++) si[i] = i;

            let nct = Math.min(m - 1, n);
            let nrt = Math.max(0, Math.min(n - 2, m));
            let mrc = Math.max(nct, nrt);

            for (let k = 0; k < mrc; k++) {
              if (k < nct) {
                s[k] = 0;

                for (let i = k; i < m; i++) {
                  s[k] = hypotenuse(s[k], a.get(i, k));
                }

                if (s[k] !== 0) {
                  if (a.get(k, k) < 0) {
                    s[k] = -s[k];
                  }

                  for (let i = k; i < m; i++) {
                    a.set(i, k, a.get(i, k) / s[k]);
                  }

                  a.set(k, k, a.get(k, k) + 1);
                }

                s[k] = -s[k];
              }

              for (let j = k + 1; j < n; j++) {
                if (k < nct && s[k] !== 0) {
                  let t = 0;

                  for (let i = k; i < m; i++) {
                    t += a.get(i, k) * a.get(i, j);
                  }

                  t = -t / a.get(k, k);

                  for (let i = k; i < m; i++) {
                    a.set(i, j, a.get(i, j) + t * a.get(i, k));
                  }
                }

                e[j] = a.get(k, j);
              }

              if (wantu && k < nct) {
                for (let i = k; i < m; i++) {
                  U.set(i, k, a.get(i, k));
                }
              }

              if (k < nrt) {
                e[k] = 0;

                for (let i = k + 1; i < n; i++) {
                  e[k] = hypotenuse(e[k], e[i]);
                }

                if (e[k] !== 0) {
                  if (e[k + 1] < 0) {
                    e[k] = 0 - e[k];
                  }

                  for (let i = k + 1; i < n; i++) {
                    e[i] /= e[k];
                  }

                  e[k + 1] += 1;
                }

                e[k] = -e[k];

                if (k + 1 < m && e[k] !== 0) {
                  for (let i = k + 1; i < m; i++) {
                    work[i] = 0;
                  }

                  for (let i = k + 1; i < m; i++) {
                    for (let j = k + 1; j < n; j++) {
                      work[i] += e[j] * a.get(i, j);
                    }
                  }

                  for (let j = k + 1; j < n; j++) {
                    let t = -e[j] / e[k + 1];

                    for (let i = k + 1; i < m; i++) {
                      a.set(i, j, a.get(i, j) + t * work[i]);
                    }
                  }
                }

                if (wantv) {
                  for (let i = k + 1; i < n; i++) {
                    V.set(i, k, e[i]);
                  }
                }
              }
            }

            let p = Math.min(n, m + 1);

            if (nct < n) {
              s[nct] = a.get(nct, nct);
            }

            if (m < p) {
              s[p - 1] = 0;
            }

            if (nrt + 1 < p) {
              e[nrt] = a.get(nrt, p - 1);
            }

            e[p - 1] = 0;

            if (wantu) {
              for (let j = nct; j < nu; j++) {
                for (let i = 0; i < m; i++) {
                  U.set(i, j, 0);
                }

                U.set(j, j, 1);
              }

              for (let k = nct - 1; k >= 0; k--) {
                if (s[k] !== 0) {
                  for (let j = k + 1; j < nu; j++) {
                    let t = 0;

                    for (let i = k; i < m; i++) {
                      t += U.get(i, k) * U.get(i, j);
                    }

                    t = -t / U.get(k, k);

                    for (let i = k; i < m; i++) {
                      U.set(i, j, U.get(i, j) + t * U.get(i, k));
                    }
                  }

                  for (let i = k; i < m; i++) {
                    U.set(i, k, -U.get(i, k));
                  }

                  U.set(k, k, 1 + U.get(k, k));

                  for (let i = 0; i < k - 1; i++) {
                    U.set(i, k, 0);
                  }
                } else {
                  for (let i = 0; i < m; i++) {
                    U.set(i, k, 0);
                  }

                  U.set(k, k, 1);
                }
              }
            }

            if (wantv) {
              for (let k = n - 1; k >= 0; k--) {
                if (k < nrt && e[k] !== 0) {
                  for (let j = k + 1; j < n; j++) {
                    let t = 0;

                    for (let i = k + 1; i < n; i++) {
                      t += V.get(i, k) * V.get(i, j);
                    }

                    t = -t / V.get(k + 1, k);

                    for (let i = k + 1; i < n; i++) {
                      V.set(i, j, V.get(i, j) + t * V.get(i, k));
                    }
                  }
                }

                for (let i = 0; i < n; i++) {
                  V.set(i, k, 0);
                }

                V.set(k, k, 1);
              }
            }

            let pp = p - 1;
            let eps = Number.EPSILON;

            while (p > 0) {
              let k, kase;

              for (k = p - 2; k >= -1; k--) {
                if (k === -1) {
                  break;
                }

                const alpha = Number.MIN_VALUE + eps * Math.abs(s[k] + Math.abs(s[k + 1]));

                if (Math.abs(e[k]) <= alpha || Number.isNaN(e[k])) {
                  e[k] = 0;
                  break;
                }
              }

              if (k === p - 2) {
                kase = 4;
              } else {
                let ks;

                for (ks = p - 1; ks >= k; ks--) {
                  if (ks === k) {
                    break;
                  }

                  let t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);

                  if (Math.abs(s[ks]) <= eps * t) {
                    s[ks] = 0;
                    break;
                  }
                }

                if (ks === k) {
                  kase = 3;
                } else if (ks === p - 1) {
                  kase = 1;
                } else {
                  kase = 2;
                  k = ks;
                }
              }

              k++;

              switch (kase) {
                case 1:
                  {
                    let f = e[p - 2];
                    e[p - 2] = 0;

                    for (let j = p - 2; j >= k; j--) {
                      let t = hypotenuse(s[j], f);
                      let cs = s[j] / t;
                      let sn = f / t;
                      s[j] = t;

                      if (j !== k) {
                        f = -sn * e[j - 1];
                        e[j - 1] = cs * e[j - 1];
                      }

                      if (wantv) {
                        for (let i = 0; i < n; i++) {
                          t = cs * V.get(i, j) + sn * V.get(i, p - 1);
                          V.set(i, p - 1, -sn * V.get(i, j) + cs * V.get(i, p - 1));
                          V.set(i, j, t);
                        }
                      }
                    }

                    break;
                  }

                case 2:
                  {
                    let f = e[k - 1];
                    e[k - 1] = 0;

                    for (let j = k; j < p; j++) {
                      let t = hypotenuse(s[j], f);
                      let cs = s[j] / t;
                      let sn = f / t;
                      s[j] = t;
                      f = -sn * e[j];
                      e[j] = cs * e[j];

                      if (wantu) {
                        for (let i = 0; i < m; i++) {
                          t = cs * U.get(i, j) + sn * U.get(i, k - 1);
                          U.set(i, k - 1, -sn * U.get(i, j) + cs * U.get(i, k - 1));
                          U.set(i, j, t);
                        }
                      }
                    }

                    break;
                  }

                case 3:
                  {
                    const scale = Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2]), Math.abs(e[p - 2]), Math.abs(s[k]), Math.abs(e[k]));
                    const sp = s[p - 1] / scale;
                    const spm1 = s[p - 2] / scale;
                    const epm1 = e[p - 2] / scale;
                    const sk = s[k] / scale;
                    const ek = e[k] / scale;
                    const b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                    const c = sp * epm1 * (sp * epm1);
                    let shift = 0;

                    if (b !== 0 || c !== 0) {
                      if (b < 0) {
                        shift = 0 - Math.sqrt(b * b + c);
                      } else {
                        shift = Math.sqrt(b * b + c);
                      }

                      shift = c / (b + shift);
                    }

                    let f = (sk + sp) * (sk - sp) + shift;
                    let g = sk * ek;

                    for (let j = k; j < p - 1; j++) {
                      let t = hypotenuse(f, g);
                      if (t === 0) t = Number.MIN_VALUE;
                      let cs = f / t;
                      let sn = g / t;

                      if (j !== k) {
                        e[j - 1] = t;
                      }

                      f = cs * s[j] + sn * e[j];
                      e[j] = cs * e[j] - sn * s[j];
                      g = sn * s[j + 1];
                      s[j + 1] = cs * s[j + 1];

                      if (wantv) {
                        for (let i = 0; i < n; i++) {
                          t = cs * V.get(i, j) + sn * V.get(i, j + 1);
                          V.set(i, j + 1, -sn * V.get(i, j) + cs * V.get(i, j + 1));
                          V.set(i, j, t);
                        }
                      }

                      t = hypotenuse(f, g);
                      if (t === 0) t = Number.MIN_VALUE;
                      cs = f / t;
                      sn = g / t;
                      s[j] = t;
                      f = cs * e[j] + sn * s[j + 1];
                      s[j + 1] = -sn * e[j] + cs * s[j + 1];
                      g = sn * e[j + 1];
                      e[j + 1] = cs * e[j + 1];

                      if (wantu && j < m - 1) {
                        for (let i = 0; i < m; i++) {
                          t = cs * U.get(i, j) + sn * U.get(i, j + 1);
                          U.set(i, j + 1, -sn * U.get(i, j) + cs * U.get(i, j + 1));
                          U.set(i, j, t);
                        }
                      }
                    }

                    e[p - 2] = f;
                    break;
                  }

                case 4:
                  {
                    if (s[k] <= 0) {
                      s[k] = s[k] < 0 ? -s[k] : 0;

                      if (wantv) {
                        for (let i = 0; i <= pp; i++) {
                          V.set(i, k, -V.get(i, k));
                        }
                      }
                    }

                    while (k < pp) {
                      if (s[k] >= s[k + 1]) {
                        break;
                      }

                      let t = s[k];
                      s[k] = s[k + 1];
                      s[k + 1] = t;

                      if (wantv && k < n - 1) {
                        for (let i = 0; i < n; i++) {
                          t = V.get(i, k + 1);
                          V.set(i, k + 1, V.get(i, k));
                          V.set(i, k, t);
                        }
                      }

                      if (wantu && k < m - 1) {
                        for (let i = 0; i < m; i++) {
                          t = U.get(i, k + 1);
                          U.set(i, k + 1, U.get(i, k));
                          U.set(i, k, t);
                        }
                      }

                      k++;
                    }

                    p--;
                    break;
                  }
                // no default
              }
            }

            if (swapped) {
              let tmp = V;
              V = U;
              U = tmp;
            }

            this.m = m;
            this.n = n;
            this.s = s;
            this.U = U;
            this.V = V;
          }

          solve(value) {
            let Y = value;
            let e = this.threshold;
            let scols = this.s.length;
            let Ls = Matrix.zeros(scols, scols);

            for (let i = 0; i < scols; i++) {
              if (Math.abs(this.s[i]) <= e) {
                Ls.set(i, i, 0);
              } else {
                Ls.set(i, i, 1 / this.s[i]);
              }
            }

            let U = this.U;
            let V = this.rightSingularVectors;
            let VL = V.mmul(Ls);
            let vrows = V.rows;
            let urows = U.rows;
            let VLU = Matrix.zeros(vrows, urows);

            for (let i = 0; i < vrows; i++) {
              for (let j = 0; j < urows; j++) {
                let sum = 0;

                for (let k = 0; k < scols; k++) {
                  sum += VL.get(i, k) * U.get(j, k);
                }

                VLU.set(i, j, sum);
              }
            }

            return VLU.mmul(Y);
          }

          solveForDiagonal(value) {
            return this.solve(Matrix.diag(value));
          }

          inverse() {
            let V = this.V;
            let e = this.threshold;
            let vrows = V.rows;
            let vcols = V.columns;
            let X = new Matrix(vrows, this.s.length);

            for (let i = 0; i < vrows; i++) {
              for (let j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                  X.set(i, j, V.get(i, j) / this.s[j]);
                }
              }
            }

            let U = this.U;
            let urows = U.rows;
            let ucols = U.columns;
            let Y = new Matrix(vrows, urows);

            for (let i = 0; i < vrows; i++) {
              for (let j = 0; j < urows; j++) {
                let sum = 0;

                for (let k = 0; k < ucols; k++) {
                  sum += X.get(i, k) * U.get(j, k);
                }

                Y.set(i, j, sum);
              }
            }

            return Y;
          }

          get condition() {
            return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
          }

          get norm2() {
            return this.s[0];
          }

          get rank() {
            let tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
            let r = 0;
            let s = this.s;

            for (let i = 0, ii = s.length; i < ii; i++) {
              if (s[i] > tol) {
                r++;
              }
            }

            return r;
          }

          get diagonal() {
            return Array.from(this.s);
          }

          get threshold() {
            return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0];
          }

          get leftSingularVectors() {
            return this.U;
          }

          get rightSingularVectors() {
            return this.V;
          }

          get diagonalMatrix() {
            return Matrix.diag(this.s);
          }

        }

        function inverse(matrix, useSVD = false) {
          matrix = WrapperMatrix2D.checkMatrix(matrix);

          if (useSVD) {
            return new SingularValueDecomposition(matrix).inverse();
          } else {
            return solve(matrix, Matrix.eye(matrix.rows));
          }
        }

        function solve(leftHandSide, rightHandSide, useSVD = false) {
          leftHandSide = WrapperMatrix2D.checkMatrix(leftHandSide);
          rightHandSide = WrapperMatrix2D.checkMatrix(rightHandSide);

          if (useSVD) {
            return new SingularValueDecomposition(leftHandSide).solve(rightHandSide);
          } else {
            return leftHandSide.isSquare() ? new LuDecomposition(leftHandSide).solve(rightHandSide) : new QrDecomposition(leftHandSide).solve(rightHandSide);
          }
        }

        function determinant(matrix) {
          matrix = Matrix.checkMatrix(matrix);

          if (matrix.isSquare()) {
            if (matrix.columns === 0) {
              return 1;
            }

            let a, b, c, d;

            if (matrix.columns === 2) {
              // 2 x 2 matrix
              a = matrix.get(0, 0);
              b = matrix.get(0, 1);
              c = matrix.get(1, 0);
              d = matrix.get(1, 1);
              return a * d - b * c;
            } else if (matrix.columns === 3) {
              // 3 x 3 matrix
              let subMatrix0, subMatrix1, subMatrix2;
              subMatrix0 = new MatrixSelectionView(matrix, [1, 2], [1, 2]);
              subMatrix1 = new MatrixSelectionView(matrix, [1, 2], [0, 2]);
              subMatrix2 = new MatrixSelectionView(matrix, [1, 2], [0, 1]);
              a = matrix.get(0, 0);
              b = matrix.get(0, 1);
              c = matrix.get(0, 2);
              return a * determinant(subMatrix0) - b * determinant(subMatrix1) + c * determinant(subMatrix2);
            } else {
              // general purpose determinant using the LU decomposition
              return new LuDecomposition(matrix).determinant;
            }
          } else {
            throw Error('determinant can only be calculated for a square matrix');
          }
        }

        function xrange(n, exception) {
          let range = [];

          for (let i = 0; i < n; i++) {
            if (i !== exception) {
              range.push(i);
            }
          }

          return range;
        }

        function dependenciesOneRow(error, matrix, index, thresholdValue = 10e-10, thresholdError = 10e-10) {
          if (error > thresholdError) {
            return new Array(matrix.rows + 1).fill(0);
          } else {
            let returnArray = matrix.addRow(index, [0]);

            for (let i = 0; i < returnArray.rows; i++) {
              if (Math.abs(returnArray.get(i, 0)) < thresholdValue) {
                returnArray.set(i, 0, 0);
              }
            }

            return returnArray.to1DArray();
          }
        }

        function linearDependencies(matrix, options = {}) {
          const {
            thresholdValue = 10e-10,
            thresholdError = 10e-10
          } = options;
          matrix = Matrix.checkMatrix(matrix);
          let n = matrix.rows;
          let results = new Matrix(n, n);

          for (let i = 0; i < n; i++) {
            let b = Matrix.columnVector(matrix.getRow(i));
            let Abis = matrix.subMatrixRow(xrange(n, i)).transpose();
            let svd = new SingularValueDecomposition(Abis);
            let x = svd.solve(b);
            let error = Matrix.sub(b, Abis.mmul(x)).abs().max();
            results.setRow(i, dependenciesOneRow(error, x, i, thresholdValue, thresholdError));
          }

          return results;
        }

        function pseudoInverse(matrix, threshold = Number.EPSILON) {
          matrix = Matrix.checkMatrix(matrix);

          if (matrix.isEmpty()) {
            // with a zero dimension, the pseudo-inverse is the transpose, since all 0xn and nx0 matrices are singular
            // (0xn)*(nx0)*(0xn) = 0xn
            // (nx0)*(0xn)*(nx0) = nx0
            return matrix.transpose();
          }

          let svdSolution = new SingularValueDecomposition(matrix, {
            autoTranspose: true
          });
          let U = svdSolution.leftSingularVectors;
          let V = svdSolution.rightSingularVectors;
          let s = svdSolution.diagonal;

          for (let i = 0; i < s.length; i++) {
            if (Math.abs(s[i]) > threshold) {
              s[i] = 1.0 / s[i];
            } else {
              s[i] = 0.0;
            }
          }

          return V.mmul(Matrix.diag(s).mmul(U.transpose()));
        }

        function covariance(xMatrix, yMatrix = xMatrix, options = {}) {
          xMatrix = new Matrix(xMatrix);
          let yIsSame = false;

          if (typeof yMatrix === 'object' && !Matrix.isMatrix(yMatrix) && !Array.isArray(yMatrix)) {
            options = yMatrix;
            yMatrix = xMatrix;
            yIsSame = true;
          } else {
            yMatrix = new Matrix(yMatrix);
          }

          if (xMatrix.rows !== yMatrix.rows) {
            throw new TypeError('Both matrices must have the same number of rows');
          }

          const {
            center = true
          } = options;

          if (center) {
            xMatrix = xMatrix.center('column');

            if (!yIsSame) {
              yMatrix = yMatrix.center('column');
            }
          }

          const cov = xMatrix.transpose().mmul(yMatrix);

          for (let i = 0; i < cov.rows; i++) {
            for (let j = 0; j < cov.columns; j++) {
              cov.set(i, j, cov.get(i, j) * (1 / (xMatrix.rows - 1)));
            }
          }

          return cov;
        }

        function correlation(xMatrix, yMatrix = xMatrix, options = {}) {
          xMatrix = new Matrix(xMatrix);
          let yIsSame = false;

          if (typeof yMatrix === 'object' && !Matrix.isMatrix(yMatrix) && !Array.isArray(yMatrix)) {
            options = yMatrix;
            yMatrix = xMatrix;
            yIsSame = true;
          } else {
            yMatrix = new Matrix(yMatrix);
          }

          if (xMatrix.rows !== yMatrix.rows) {
            throw new TypeError('Both matrices must have the same number of rows');
          }

          const {
            center = true,
            scale = true
          } = options;

          if (center) {
            xMatrix.center('column');

            if (!yIsSame) {
              yMatrix.center('column');
            }
          }

          if (scale) {
            xMatrix.scale('column');

            if (!yIsSame) {
              yMatrix.scale('column');
            }
          }

          const sdx = xMatrix.standardDeviation('column', {
            unbiased: true
          });
          const sdy = yIsSame ? sdx : yMatrix.standardDeviation('column', {
            unbiased: true
          });
          const corr = xMatrix.transpose().mmul(yMatrix);

          for (let i = 0; i < corr.rows; i++) {
            for (let j = 0; j < corr.columns; j++) {
              corr.set(i, j, corr.get(i, j) * (1 / (sdx[i] * sdy[j])) * (1 / (xMatrix.rows - 1)));
            }
          }

          return corr;
        }

        class EigenvalueDecomposition {
          constructor(matrix, options = {}) {
            const {
              assumeSymmetric = false
            } = options;
            matrix = WrapperMatrix2D.checkMatrix(matrix);

            if (!matrix.isSquare()) {
              throw new Error('Matrix is not a square matrix');
            }

            if (matrix.isEmpty()) {
              throw new Error('Matrix must be non-empty');
            }

            let n = matrix.columns;
            let V = new Matrix(n, n);
            let d = new Float64Array(n);
            let e = new Float64Array(n);
            let value = matrix;
            let i, j;
            let isSymmetric = false;

            if (assumeSymmetric) {
              isSymmetric = true;
            } else {
              isSymmetric = matrix.isSymmetric();
            }

            if (isSymmetric) {
              for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                  V.set(i, j, value.get(i, j));
                }
              }

              tred2(n, e, d, V);
              tql2(n, e, d, V);
            } else {
              let H = new Matrix(n, n);
              let ort = new Float64Array(n);

              for (j = 0; j < n; j++) {
                for (i = 0; i < n; i++) {
                  H.set(i, j, value.get(i, j));
                }
              }

              orthes(n, H, ort, V);
              hqr2(n, e, d, V, H);
            }

            this.n = n;
            this.e = e;
            this.d = d;
            this.V = V;
          }

          get realEigenvalues() {
            return Array.from(this.d);
          }

          get imaginaryEigenvalues() {
            return Array.from(this.e);
          }

          get eigenvectorMatrix() {
            return this.V;
          }

          get diagonalMatrix() {
            let n = this.n;
            let e = this.e;
            let d = this.d;
            let X = new Matrix(n, n);
            let i, j;

            for (i = 0; i < n; i++) {
              for (j = 0; j < n; j++) {
                X.set(i, j, 0);
              }

              X.set(i, i, d[i]);

              if (e[i] > 0) {
                X.set(i, i + 1, e[i]);
              } else if (e[i] < 0) {
                X.set(i, i - 1, e[i]);
              }
            }

            return X;
          }

        }

        function tred2(n, e, d, V) {
          let f, g, h, i, j, k, hh, scale;

          for (j = 0; j < n; j++) {
            d[j] = V.get(n - 1, j);
          }

          for (i = n - 1; i > 0; i--) {
            scale = 0;
            h = 0;

            for (k = 0; k < i; k++) {
              scale = scale + Math.abs(d[k]);
            }

            if (scale === 0) {
              e[i] = d[i - 1];

              for (j = 0; j < i; j++) {
                d[j] = V.get(i - 1, j);
                V.set(i, j, 0);
                V.set(j, i, 0);
              }
            } else {
              for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
              }

              f = d[i - 1];
              g = Math.sqrt(h);

              if (f > 0) {
                g = -g;
              }

              e[i] = scale * g;
              h = h - f * g;
              d[i - 1] = f - g;

              for (j = 0; j < i; j++) {
                e[j] = 0;
              }

              for (j = 0; j < i; j++) {
                f = d[j];
                V.set(j, i, f);
                g = e[j] + V.get(j, j) * f;

                for (k = j + 1; k <= i - 1; k++) {
                  g += V.get(k, j) * d[k];
                  e[k] += V.get(k, j) * f;
                }

                e[j] = g;
              }

              f = 0;

              for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
              }

              hh = f / (h + h);

              for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
              }

              for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];

                for (k = j; k <= i - 1; k++) {
                  V.set(k, j, V.get(k, j) - (f * e[k] + g * d[k]));
                }

                d[j] = V.get(i - 1, j);
                V.set(i, j, 0);
              }
            }

            d[i] = h;
          }

          for (i = 0; i < n - 1; i++) {
            V.set(n - 1, i, V.get(i, i));
            V.set(i, i, 1);
            h = d[i + 1];

            if (h !== 0) {
              for (k = 0; k <= i; k++) {
                d[k] = V.get(k, i + 1) / h;
              }

              for (j = 0; j <= i; j++) {
                g = 0;

                for (k = 0; k <= i; k++) {
                  g += V.get(k, i + 1) * V.get(k, j);
                }

                for (k = 0; k <= i; k++) {
                  V.set(k, j, V.get(k, j) - g * d[k]);
                }
              }
            }

            for (k = 0; k <= i; k++) {
              V.set(k, i + 1, 0);
            }
          }

          for (j = 0; j < n; j++) {
            d[j] = V.get(n - 1, j);
            V.set(n - 1, j, 0);
          }

          V.set(n - 1, n - 1, 1);
          e[0] = 0;
        }

        function tql2(n, e, d, V) {
          let g, h, i, j, k, l, m, p, r, dl1, c, c2, c3, el1, s, s2;

          for (i = 1; i < n; i++) {
            e[i - 1] = e[i];
          }

          e[n - 1] = 0;
          let f = 0;
          let tst1 = 0;
          let eps = Number.EPSILON;

          for (l = 0; l < n; l++) {
            tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
            m = l;

            while (m < n) {
              if (Math.abs(e[m]) <= eps * tst1) {
                break;
              }

              m++;
            }

            if (m > l) {
              do {
                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = hypotenuse(p, 1);

                if (p < 0) {
                  r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];

                for (i = l + 2; i < n; i++) {
                  d[i] -= h;
                }

                f = f + h;
                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;

                for (i = m - 1; i >= l; i--) {
                  c3 = c2;
                  c2 = c;
                  s2 = s;
                  g = c * e[i];
                  h = c * p;
                  r = hypotenuse(p, e[i]);
                  e[i + 1] = s * r;
                  s = e[i] / r;
                  c = p / r;
                  p = c * d[i] - s * g;
                  d[i + 1] = h + s * (c * g + s * d[i]);

                  for (k = 0; k < n; k++) {
                    h = V.get(k, i + 1);
                    V.set(k, i + 1, s * V.get(k, i) + c * h);
                    V.set(k, i, c * V.get(k, i) - s * h);
                  }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;
              } while (Math.abs(e[l]) > eps * tst1);
            }

            d[l] = d[l] + f;
            e[l] = 0;
          }

          for (i = 0; i < n - 1; i++) {
            k = i;
            p = d[i];

            for (j = i + 1; j < n; j++) {
              if (d[j] < p) {
                k = j;
                p = d[j];
              }
            }

            if (k !== i) {
              d[k] = d[i];
              d[i] = p;

              for (j = 0; j < n; j++) {
                p = V.get(j, i);
                V.set(j, i, V.get(j, k));
                V.set(j, k, p);
              }
            }
          }
        }

        function orthes(n, H, ort, V) {
          let low = 0;
          let high = n - 1;
          let f, g, h, i, j, m;
          let scale;

          for (m = low + 1; m <= high - 1; m++) {
            scale = 0;

            for (i = m; i <= high; i++) {
              scale = scale + Math.abs(H.get(i, m - 1));
            }

            if (scale !== 0) {
              h = 0;

              for (i = high; i >= m; i--) {
                ort[i] = H.get(i, m - 1) / scale;
                h += ort[i] * ort[i];
              }

              g = Math.sqrt(h);

              if (ort[m] > 0) {
                g = -g;
              }

              h = h - ort[m] * g;
              ort[m] = ort[m] - g;

              for (j = m; j < n; j++) {
                f = 0;

                for (i = high; i >= m; i--) {
                  f += ort[i] * H.get(i, j);
                }

                f = f / h;

                for (i = m; i <= high; i++) {
                  H.set(i, j, H.get(i, j) - f * ort[i]);
                }
              }

              for (i = 0; i <= high; i++) {
                f = 0;

                for (j = high; j >= m; j--) {
                  f += ort[j] * H.get(i, j);
                }

                f = f / h;

                for (j = m; j <= high; j++) {
                  H.set(i, j, H.get(i, j) - f * ort[j]);
                }
              }

              ort[m] = scale * ort[m];
              H.set(m, m - 1, scale * g);
            }
          }

          for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
              V.set(i, j, i === j ? 1 : 0);
            }
          }

          for (m = high - 1; m >= low + 1; m--) {
            if (H.get(m, m - 1) !== 0) {
              for (i = m + 1; i <= high; i++) {
                ort[i] = H.get(i, m - 1);
              }

              for (j = m; j <= high; j++) {
                g = 0;

                for (i = m; i <= high; i++) {
                  g += ort[i] * V.get(i, j);
                }

                g = g / ort[m] / H.get(m, m - 1);

                for (i = m; i <= high; i++) {
                  V.set(i, j, V.get(i, j) + g * ort[i]);
                }
              }
            }
          }
        }

        function hqr2(nn, e, d, V, H) {
          let n = nn - 1;
          let low = 0;
          let high = nn - 1;
          let eps = Number.EPSILON;
          let exshift = 0;
          let norm = 0;
          let p = 0;
          let q = 0;
          let r = 0;
          let s = 0;
          let z = 0;
          let iter = 0;
          let i, j, k, l, m, t, w, x, y;
          let ra, sa, vr, vi;
          let notlast, cdivres;

          for (i = 0; i < nn; i++) {
            if (i < low || i > high) {
              d[i] = H.get(i, i);
              e[i] = 0;
            }

            for (j = Math.max(i - 1, 0); j < nn; j++) {
              norm = norm + Math.abs(H.get(i, j));
            }
          }

          while (n >= low) {
            l = n;

            while (l > low) {
              s = Math.abs(H.get(l - 1, l - 1)) + Math.abs(H.get(l, l));

              if (s === 0) {
                s = norm;
              }

              if (Math.abs(H.get(l, l - 1)) < eps * s) {
                break;
              }

              l--;
            }

            if (l === n) {
              H.set(n, n, H.get(n, n) + exshift);
              d[n] = H.get(n, n);
              e[n] = 0;
              n--;
              iter = 0;
            } else if (l === n - 1) {
              w = H.get(n, n - 1) * H.get(n - 1, n);
              p = (H.get(n - 1, n - 1) - H.get(n, n)) / 2;
              q = p * p + w;
              z = Math.sqrt(Math.abs(q));
              H.set(n, n, H.get(n, n) + exshift);
              H.set(n - 1, n - 1, H.get(n - 1, n - 1) + exshift);
              x = H.get(n, n);

              if (q >= 0) {
                z = p >= 0 ? p + z : p - z;
                d[n - 1] = x + z;
                d[n] = d[n - 1];

                if (z !== 0) {
                  d[n] = x - w / z;
                }

                e[n - 1] = 0;
                e[n] = 0;
                x = H.get(n, n - 1);
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                  z = H.get(n - 1, j);
                  H.set(n - 1, j, q * z + p * H.get(n, j));
                  H.set(n, j, q * H.get(n, j) - p * z);
                }

                for (i = 0; i <= n; i++) {
                  z = H.get(i, n - 1);
                  H.set(i, n - 1, q * z + p * H.get(i, n));
                  H.set(i, n, q * H.get(i, n) - p * z);
                }

                for (i = low; i <= high; i++) {
                  z = V.get(i, n - 1);
                  V.set(i, n - 1, q * z + p * V.get(i, n));
                  V.set(i, n, q * V.get(i, n) - p * z);
                }
              } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
              }

              n = n - 2;
              iter = 0;
            } else {
              x = H.get(n, n);
              y = 0;
              w = 0;

              if (l < n) {
                y = H.get(n - 1, n - 1);
                w = H.get(n, n - 1) * H.get(n - 1, n);
              }

              if (iter === 10) {
                exshift += x;

                for (i = low; i <= n; i++) {
                  H.set(i, i, H.get(i, i) - x);
                }

                s = Math.abs(H.get(n, n - 1)) + Math.abs(H.get(n - 1, n - 2));
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
              }

              if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;

                if (s > 0) {
                  s = Math.sqrt(s);

                  if (y < x) {
                    s = -s;
                  }

                  s = x - w / ((y - x) / 2 + s);

                  for (i = low; i <= n; i++) {
                    H.set(i, i, H.get(i, i) - s);
                  }

                  exshift += s;
                  x = y = w = 0.964;
                }
              }

              iter = iter + 1;
              m = n - 2;

              while (m >= l) {
                z = H.get(m, m);
                r = x - z;
                s = y - z;
                p = (r * s - w) / H.get(m + 1, m) + H.get(m, m + 1);
                q = H.get(m + 1, m + 1) - z - r - s;
                r = H.get(m + 2, m + 1);
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;

                if (m === l) {
                  break;
                }

                if (Math.abs(H.get(m, m - 1)) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H.get(m - 1, m - 1)) + Math.abs(z) + Math.abs(H.get(m + 1, m + 1))))) {
                  break;
                }

                m--;
              }

              for (i = m + 2; i <= n; i++) {
                H.set(i, i - 2, 0);

                if (i > m + 2) {
                  H.set(i, i - 3, 0);
                }
              }

              for (k = m; k <= n - 1; k++) {
                notlast = k !== n - 1;

                if (k !== m) {
                  p = H.get(k, k - 1);
                  q = H.get(k + 1, k - 1);
                  r = notlast ? H.get(k + 2, k - 1) : 0;
                  x = Math.abs(p) + Math.abs(q) + Math.abs(r);

                  if (x !== 0) {
                    p = p / x;
                    q = q / x;
                    r = r / x;
                  }
                }

                if (x === 0) {
                  break;
                }

                s = Math.sqrt(p * p + q * q + r * r);

                if (p < 0) {
                  s = -s;
                }

                if (s !== 0) {
                  if (k !== m) {
                    H.set(k, k - 1, -s * x);
                  } else if (l !== m) {
                    H.set(k, k - 1, -H.get(k, k - 1));
                  }

                  p = p + s;
                  x = p / s;
                  y = q / s;
                  z = r / s;
                  q = q / p;
                  r = r / p;

                  for (j = k; j < nn; j++) {
                    p = H.get(k, j) + q * H.get(k + 1, j);

                    if (notlast) {
                      p = p + r * H.get(k + 2, j);
                      H.set(k + 2, j, H.get(k + 2, j) - p * z);
                    }

                    H.set(k, j, H.get(k, j) - p * x);
                    H.set(k + 1, j, H.get(k + 1, j) - p * y);
                  }

                  for (i = 0; i <= Math.min(n, k + 3); i++) {
                    p = x * H.get(i, k) + y * H.get(i, k + 1);

                    if (notlast) {
                      p = p + z * H.get(i, k + 2);
                      H.set(i, k + 2, H.get(i, k + 2) - p * r);
                    }

                    H.set(i, k, H.get(i, k) - p);
                    H.set(i, k + 1, H.get(i, k + 1) - p * q);
                  }

                  for (i = low; i <= high; i++) {
                    p = x * V.get(i, k) + y * V.get(i, k + 1);

                    if (notlast) {
                      p = p + z * V.get(i, k + 2);
                      V.set(i, k + 2, V.get(i, k + 2) - p * r);
                    }

                    V.set(i, k, V.get(i, k) - p);
                    V.set(i, k + 1, V.get(i, k + 1) - p * q);
                  }
                }
              }
            }
          }

          if (norm === 0) {
            return;
          }

          for (n = nn - 1; n >= 0; n--) {
            p = d[n];
            q = e[n];

            if (q === 0) {
              l = n;
              H.set(n, n, 1);

              for (i = n - 1; i >= 0; i--) {
                w = H.get(i, i) - p;
                r = 0;

                for (j = l; j <= n; j++) {
                  r = r + H.get(i, j) * H.get(j, n);
                }

                if (e[i] < 0) {
                  z = w;
                  s = r;
                } else {
                  l = i;

                  if (e[i] === 0) {
                    H.set(i, n, w !== 0 ? -r / w : -r / (eps * norm));
                  } else {
                    x = H.get(i, i + 1);
                    y = H.get(i + 1, i);
                    q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                    t = (x * s - z * r) / q;
                    H.set(i, n, t);
                    H.set(i + 1, n, Math.abs(x) > Math.abs(z) ? (-r - w * t) / x : (-s - y * t) / z);
                  }

                  t = Math.abs(H.get(i, n));

                  if (eps * t * t > 1) {
                    for (j = i; j <= n; j++) {
                      H.set(j, n, H.get(j, n) / t);
                    }
                  }
                }
              }
            } else if (q < 0) {
              l = n - 1;

              if (Math.abs(H.get(n, n - 1)) > Math.abs(H.get(n - 1, n))) {
                H.set(n - 1, n - 1, q / H.get(n, n - 1));
                H.set(n - 1, n, -(H.get(n, n) - p) / H.get(n, n - 1));
              } else {
                cdivres = cdiv(0, -H.get(n - 1, n), H.get(n - 1, n - 1) - p, q);
                H.set(n - 1, n - 1, cdivres[0]);
                H.set(n - 1, n, cdivres[1]);
              }

              H.set(n, n - 1, 0);
              H.set(n, n, 1);

              for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;

                for (j = l; j <= n; j++) {
                  ra = ra + H.get(i, j) * H.get(j, n - 1);
                  sa = sa + H.get(i, j) * H.get(j, n);
                }

                w = H.get(i, i) - p;

                if (e[i] < 0) {
                  z = w;
                  r = ra;
                  s = sa;
                } else {
                  l = i;

                  if (e[i] === 0) {
                    cdivres = cdiv(-ra, -sa, w, q);
                    H.set(i, n - 1, cdivres[0]);
                    H.set(i, n, cdivres[1]);
                  } else {
                    x = H.get(i, i + 1);
                    y = H.get(i + 1, i);
                    vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                    vi = (d[i] - p) * 2 * q;

                    if (vr === 0 && vi === 0) {
                      vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                    }

                    cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                    H.set(i, n - 1, cdivres[0]);
                    H.set(i, n, cdivres[1]);

                    if (Math.abs(x) > Math.abs(z) + Math.abs(q)) {
                      H.set(i + 1, n - 1, (-ra - w * H.get(i, n - 1) + q * H.get(i, n)) / x);
                      H.set(i + 1, n, (-sa - w * H.get(i, n) - q * H.get(i, n - 1)) / x);
                    } else {
                      cdivres = cdiv(-r - y * H.get(i, n - 1), -s - y * H.get(i, n), z, q);
                      H.set(i + 1, n - 1, cdivres[0]);
                      H.set(i + 1, n, cdivres[1]);
                    }
                  }

                  t = Math.max(Math.abs(H.get(i, n - 1)), Math.abs(H.get(i, n)));

                  if (eps * t * t > 1) {
                    for (j = i; j <= n; j++) {
                      H.set(j, n - 1, H.get(j, n - 1) / t);
                      H.set(j, n, H.get(j, n) / t);
                    }
                  }
                }
              }
            }
          }

          for (i = 0; i < nn; i++) {
            if (i < low || i > high) {
              for (j = i; j < nn; j++) {
                V.set(i, j, H.get(i, j));
              }
            }
          }

          for (j = nn - 1; j >= low; j--) {
            for (i = low; i <= high; i++) {
              z = 0;

              for (k = low; k <= Math.min(j, high); k++) {
                z = z + V.get(i, k) * H.get(k, j);
              }

              V.set(i, j, z);
            }
          }
        }

        function cdiv(xr, xi, yr, yi) {
          let r, d;

          if (Math.abs(yr) > Math.abs(yi)) {
            r = yi / yr;
            d = yr + r * yi;
            return [(xr + r * xi) / d, (xi - r * xr) / d];
          } else {
            r = yr / yi;
            d = yi + r * yr;
            return [(r * xr + xi) / d, (r * xi - xr) / d];
          }
        }

        class CholeskyDecomposition {
          constructor(value) {
            value = WrapperMatrix2D.checkMatrix(value);

            if (!value.isSymmetric()) {
              throw new Error('Matrix is not symmetric');
            }

            let a = value;
            let dimension = a.rows;
            let l = new Matrix(dimension, dimension);
            let positiveDefinite = true;
            let i, j, k;

            for (j = 0; j < dimension; j++) {
              let d = 0;

              for (k = 0; k < j; k++) {
                let s = 0;

                for (i = 0; i < k; i++) {
                  s += l.get(k, i) * l.get(j, i);
                }

                s = (a.get(j, k) - s) / l.get(k, k);
                l.set(j, k, s);
                d = d + s * s;
              }

              d = a.get(j, j) - d;
              positiveDefinite &= d > 0;
              l.set(j, j, Math.sqrt(Math.max(d, 0)));

              for (k = j + 1; k < dimension; k++) {
                l.set(j, k, 0);
              }
            }

            this.L = l;
            this.positiveDefinite = Boolean(positiveDefinite);
          }

          isPositiveDefinite() {
            return this.positiveDefinite;
          }

          solve(value) {
            value = WrapperMatrix2D.checkMatrix(value);
            let l = this.L;
            let dimension = l.rows;

            if (value.rows !== dimension) {
              throw new Error('Matrix dimensions do not match');
            }

            if (this.isPositiveDefinite() === false) {
              throw new Error('Matrix is not positive definite');
            }

            let count = value.columns;
            let B = value.clone();
            let i, j, k;

            for (k = 0; k < dimension; k++) {
              for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                  B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(k, i));
                }

                B.set(k, j, B.get(k, j) / l.get(k, k));
              }
            }

            for (k = dimension - 1; k >= 0; k--) {
              for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                  B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(i, k));
                }

                B.set(k, j, B.get(k, j) / l.get(k, k));
              }
            }

            return B;
          }

          get lowerTriangularMatrix() {
            return this.L;
          }

        }

        class nipals {
          constructor(X, options = {}) {
            X = WrapperMatrix2D.checkMatrix(X);
            let {
              Y
            } = options;
            const {
              scaleScores = false,
              maxIterations = 1000,
              terminationCriteria = 1e-10
            } = options;
            let u;

            if (Y) {
              if (Array.isArray(Y) && typeof Y[0] === 'number') {
                Y = Matrix.columnVector(Y);
              } else {
                Y = WrapperMatrix2D.checkMatrix(Y);
              }

              if (!Y.isColumnVector() || Y.rows !== X.rows) {
                throw new Error('Y must be a column vector of length X.rows');
              }

              u = Y;
            } else {
              u = X.getColumnVector(0);
            }

            let diff = 1;
            let t, q, w, tOld;

            for (let counter = 0; counter < maxIterations && diff > terminationCriteria; counter++) {
              w = X.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0));
              w = w.div(w.norm());
              t = X.mmul(w).div(w.transpose().mmul(w).get(0, 0));

              if (counter > 0) {
                diff = t.clone().sub(tOld).pow(2).sum();
              }

              tOld = t.clone();

              if (Y) {
                q = Y.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
                q = q.div(q.norm());
                u = Y.mmul(q).div(q.transpose().mmul(q).get(0, 0));
              } else {
                u = t;
              }
            }

            if (Y) {
              let p = X.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
              p = p.div(p.norm());
              let xResidual = X.clone().sub(t.clone().mmul(p.transpose()));
              let residual = u.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
              let yResidual = Y.clone().sub(t.clone().mulS(residual.get(0, 0)).mmul(q.transpose()));
              this.t = t;
              this.p = p.transpose();
              this.w = w.transpose();
              this.q = q;
              this.u = u;
              this.s = t.transpose().mmul(t);
              this.xResidual = xResidual;
              this.yResidual = yResidual;
              this.betas = residual;
            } else {
              this.w = w.transpose();
              this.s = t.transpose().mmul(t).sqrt();

              if (scaleScores) {
                this.t = t.clone().div(this.s.get(0, 0));
              } else {
                this.t = t;
              }

              this.xResidual = X.sub(t.mmul(w.transpose()));
            }
          }

        }

        exports.AbstractMatrix = AbstractMatrix;
        exports.CHO = CholeskyDecomposition;
        exports.CholeskyDecomposition = CholeskyDecomposition;
        exports.EVD = EigenvalueDecomposition;
        exports.EigenvalueDecomposition = EigenvalueDecomposition;
        exports.LU = LuDecomposition;
        exports.LuDecomposition = LuDecomposition;
        exports.Matrix = Matrix;
        exports.MatrixColumnSelectionView = MatrixColumnSelectionView;
        exports.MatrixColumnView = MatrixColumnView;
        exports.MatrixFlipColumnView = MatrixFlipColumnView;
        exports.MatrixFlipRowView = MatrixFlipRowView;
        exports.MatrixRowSelectionView = MatrixRowSelectionView;
        exports.MatrixRowView = MatrixRowView;
        exports.MatrixSelectionView = MatrixSelectionView;
        exports.MatrixSubView = MatrixSubView;
        exports.MatrixTransposeView = MatrixTransposeView;
        exports.NIPALS = nipals;
        exports.Nipals = nipals;
        exports.QR = QrDecomposition;
        exports.QrDecomposition = QrDecomposition;
        exports.SVD = SingularValueDecomposition;
        exports.SingularValueDecomposition = SingularValueDecomposition;
        exports.WrapperMatrix1D = WrapperMatrix1D;
        exports.WrapperMatrix2D = WrapperMatrix2D;
        exports.correlation = correlation;
        exports.covariance = covariance;
        exports.default = Matrix;
        exports.determinant = determinant;
        exports.inverse = inverse;
        exports.linearDependencies = linearDependencies;
        exports.pseudoInverse = pseudoInverse;
        exports.solve = solve;
        exports.wrap = wrap;
      }, {
        "ml-array-rescale": 5
      }],
      10: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        const ml_distance_euclidean_1 = require("ml-distance-euclidean");

        const defaultOptions = {
          distanceFunction: ml_distance_euclidean_1.squaredEuclidean
        };

        function nearestVector(listVectors, vector, options = defaultOptions) {
          const distanceFunction = options.distanceFunction || defaultOptions.distanceFunction;
          const similarityFunction = options.similarityFunction || defaultOptions.similarityFunction;
          let vectorIndex = -1;

          if (typeof similarityFunction === 'function') {
            // maximum similarity
            let maxSim = Number.MIN_VALUE;

            for (let j = 0; j < listVectors.length; j++) {
              const sim = similarityFunction(vector, listVectors[j]);

              if (sim > maxSim) {
                maxSim = sim;
                vectorIndex = j;
              }
            }
          } else if (typeof distanceFunction === 'function') {
            // minimum distance
            let minDist = Number.MAX_VALUE;

            for (let i = 0; i < listVectors.length; i++) {
              const dist = distanceFunction(vector, listVectors[i]);

              if (dist < minDist) {
                minDist = dist;
                vectorIndex = i;
              }
            }
          } else {
            throw new Error("A similarity or distance function it's required");
          }

          return vectorIndex;
        }

        exports.default = nearestVector;

        function findNearestVector(vectorList, vector, options = defaultOptions) {
          const index = nearestVector(vectorList, vector, options);
          return vectorList[index];
        }

        exports.findNearestVector = findNearestVector;
      }, {
        "ml-distance-euclidean": 6
      }],
      11: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        const PROB_TOLERANCE = 0.00000001;

        function randomChoice(values, options = {}, random = Math.random) {
          const {
            size = 1,
            replace = false,
            probabilities
          } = options;
          let valuesArr;
          let cumSum;

          if (typeof values === 'number') {
            valuesArr = getArray(values);
          } else {
            valuesArr = values.slice();
          }

          if (probabilities) {
            if (!replace) {
              throw new Error('choice with probabilities and no replacement is not implemented');
            } // check input is sane


            if (probabilities.length !== valuesArr.length) {
              throw new Error('the length of probabilities option should be equal to the number of choices');
            }

            cumSum = [probabilities[0]];

            for (let i = 1; i < probabilities.length; i++) {
              cumSum[i] = cumSum[i - 1] + probabilities[i];
            }

            if (Math.abs(1 - cumSum[cumSum.length - 1]) > PROB_TOLERANCE) {
              throw new Error(`probabilities should sum to 1, but instead sums to ${cumSum[cumSum.length - 1]}`);
            }
          }

          if (replace === false && size > valuesArr.length) {
            throw new Error('size option is too large');
          }

          const result = [];

          for (let i = 0; i < size; i++) {
            const index = randomIndex(valuesArr.length, random, cumSum);
            result.push(valuesArr[index]);

            if (!replace) {
              valuesArr.splice(index, 1);
            }
          }

          return result;
        }

        function getArray(n) {
          const arr = [];

          for (let i = 0; i < n; i++) {
            arr.push(i);
          }

          return arr;
        }

        function randomIndex(n, random, cumSum) {
          const rand = random();

          if (!cumSum) {
            return Math.floor(rand * n);
          } else {
            let idx = 0;

            while (rand > cumSum[idx]) {
              idx++;
            }

            return idx;
          }
        }

        exports.default = randomChoice;
      }, {}],
      12: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); // tslint:disable-next-line

        const ml_xsadd_1 = require("ml-xsadd");

        const choice_1 = require("./choice");
        /**
         * @classdesc Random class
         */


        class Random {
          /**
           * @param [seedOrRandom=Math.random] - Control the random number generator used by the Random class instance. Pass a random number generator function with a uniform distribution over the half-open interval [0, 1[. If seed will pass it to ml-xsadd to create a seeded random number generator. If undefined will use Math.random.
           */
          constructor(seedOrRandom = Math.random) {
            if (typeof seedOrRandom === 'number') {
              const xsadd = new ml_xsadd_1.default(seedOrRandom);
              this.randomGenerator = xsadd.random;
            } else {
              this.randomGenerator = seedOrRandom;
            }
          }

          choice(values, options) {
            if (typeof values === 'number') {
              return choice_1.default(values, options, this.randomGenerator);
            }

            return choice_1.default(values, options, this.randomGenerator);
          }
          /**
           * Draw a random number from a uniform distribution on [0,1)
           * @return The random number
           */


          random() {
            return this.randomGenerator();
          }
          /**
           * Draw a random integer from a uniform distribution on [low, high). If only low is specified, the number is drawn on [0, low)
           * @param low - The lower bound of the uniform distribution interval.
           * @param high - The higher bound of the uniform distribution interval.
           */


          randInt(low, high) {
            if (high === undefined) {
              high = low;
              low = 0;
            }

            return low + Math.floor(this.randomGenerator() * (high - low));
          }
          /**
           * Draw several random number from a uniform distribution on [0, 1)
           * @param size - The number of number to draw
           * @return - The list of drawn numbers.
           */


          randomSample(size) {
            const result = [];

            for (let i = 0; i < size; i++) {
              result.push(this.random());
            }

            return result;
          }

        }

        exports.default = Random;
      }, {
        "./choice": 11,
        "ml-xsadd": 13
      }],
      13: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        const LOOP = 8;
        const FLOAT_MUL = 1 / 16777216;
        const sh1 = 15;
        const sh2 = 18;
        const sh3 = 11;

        function multiply_uint32(n, m) {
          n >>>= 0;
          m >>>= 0;
          const nlo = n & 0xffff;
          const nhi = n - nlo;
          return (nhi * m >>> 0) + nlo * m >>> 0;
        }

        class XSadd {
          constructor(seed = Date.now()) {
            this.state = new Uint32Array(4);
            this.init(seed);
            this.random = this.getFloat.bind(this);
          }
          /**
           * Returns a 32-bit integer r (0 <= r < 2^32)
           */


          getUint32() {
            this.nextState();
            return this.state[3] + this.state[2] >>> 0;
          }
          /**
           * Returns a floating point number r (0.0 <= r < 1.0)
           */


          getFloat() {
            return (this.getUint32() >>> 8) * FLOAT_MUL;
          }

          init(seed) {
            if (!Number.isInteger(seed)) {
              throw new TypeError('seed must be an integer');
            }

            this.state[0] = seed;
            this.state[1] = 0;
            this.state[2] = 0;
            this.state[3] = 0;

            for (let i = 1; i < LOOP; i++) {
              this.state[i & 3] ^= i + multiply_uint32(1812433253, this.state[i - 1 & 3] ^ this.state[i - 1 & 3] >>> 30 >>> 0) >>> 0;
            }

            this.periodCertification();

            for (let i = 0; i < LOOP; i++) {
              this.nextState();
            }
          }

          periodCertification() {
            if (this.state[0] === 0 && this.state[1] === 0 && this.state[2] === 0 && this.state[3] === 0) {
              this.state[0] = 88; // X

              this.state[1] = 83; // S

              this.state[2] = 65; // A

              this.state[3] = 68; // D
            }
          }

          nextState() {
            let t = this.state[0];
            t ^= t << sh1;
            t ^= t >>> sh2;
            t ^= this.state[3] << sh3;
            this.state[0] = this.state[1];
            this.state[1] = this.state[2];
            this.state[2] = this.state[3];
            this.state[3] = t;
          }

        }

        exports.default = XSadd;
      }, {}]
    }, {}, [1]);
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));