using System;
using System.Collections.Generic;

namespace AIRace.Model
{
	public class MultiLayerPerceptron
	{
		List<PerceptronLayer> layers = new List<PerceptronLayer>();
		float[] inputs;

		public MultiLayerPerceptron (int cnt=2){
			inputs = new float[cnt];
		}

		public void Add(PerceptronLayer layer){
			layers.Add (layer);
		}

		public float[] Input{ get{ return inputs; } 
			set{ 
				for (var i = 0; i < inputs.Length; ++i) {
					inputs [i] = value [i];
				}
			}
		}

		public float[] Output {
			get {
				return layers [layers.Count - 1].Output;
			}
		}

		public void Feed(){
			float[] input = Input;
			for (var i = 0; i < layers.Count; ++i) {
				var layer = layers [i];
				layer.Input = input;
				layer.Feed ();
				input = layer.Output;
			}
		}

		public void Learn(float[] targets, float learningRate=0.7f){
			PerceptronLayer outerLayer = null;
			for (var i = layers.Count-1; i >=0; --i) {
				var layer = layers [i];
				if (i == layers.Count - 1) {
					// 輸出層學習
					layer.Learn (targets, learningRate);
				} else {
					// 隱藏層學習
					layer.Learn (outerLayer, learningRate);
				}
				outerLayer = layer;
			}
		}
	}
}

