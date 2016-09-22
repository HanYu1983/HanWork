using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace AIRace.Model
{
	public class PerceptronLayer
	{
		List<Perceptron> ps = new List<Perceptron>();
		float[] inputs;

		public PerceptronLayer (int cnt=2){
			inputs = new float[cnt];
		}

		public void Add(Perceptron p){
			ps.Add (p);
		}

		public float[] Output {
			get {
				var output = 
					from p in ps
					select p.Output;
				return output.ToArray ();
			}
		}

		public float[] Input{ get{ return inputs; } 
			set{ 
				for (var i = 0; i < inputs.Length; ++i) {
					inputs [i] = value [i];
				}
			}
		}

		public void Feed(){
			foreach (Perceptron p in ps) {
				p.Input = Input;
				p.Feed ();
			}
		}

		public void Learn(float[] targets, float learningRate=0.7f){
			for (var j = 0; j < targets.Length; ++j) {
				var target = targets [j];
				var p = ps [j];
				p.Learn (target, learningRate);
			}
		}

		public void Learn(PerceptronLayer layer, float learningRate=0.7f){
			for (var i = 0; i < ps.Count; ++i) {
				var p = ps [i];
				var err = 0f;
				for (var j = 0; j < layer.ps.Count; ++j) {
					var p2 = layer.ps [j];
					err += p2.W [i] *p2.Error;
				}
				var target = p.Output + err;
				p.Learn (target, learningRate);
			}
		}
	}
}

