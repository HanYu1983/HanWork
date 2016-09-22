using System;
using UnityEngine;

namespace AIRace.Model
{
	public class Perceptron
	{
		float[] ws;
		float[] inputs;
		float output;
		float err;

		public Perceptron (int cnt=2){
			ws = new float[cnt + 1];
			inputs = new float[cnt];

			var rand = new System.Random ();
			for (var i = 0; i < ws.Length; ++i) {
				ws [i] = (float)rand.NextDouble () * 2 - 1;
			}
		}

		public float Error{ get{ return err; } }
		public float[] W{ get{ return ws; } }
		public float Output{ get{ return output; } }
		public float[] Input{ get{ return inputs; } 
			set{ 
				for (var i = 0; i < inputs.Length; ++i) {
					inputs [i] = value [i];
				}
			}
		}
		public void Feed(){
			float value = 0.0f;
			for (var i = 0; i < inputs.Length; ++i) {
				value += inputs [i] * ws [i];
			}
			value += 1 * ws [ws.Length - 1];
			// 用Logistic激發函數。輸入值[-6,6]。輸出值[0,1]
			// 注意：Feed和Learn當中要使用正確的正反運算
			output = 1/(1+Mathf.Exp(-value));
		}

		public void Learn(float target, float learningRate=0.7f){
			// 用Logistic的"回饋"函數(反運算)
			err = (target - Output)*Output*(1-Output);
			for(var i=0; i<inputs.Length; ++i){
				ws [i] += learningRate* inputs [i] * err;
			}
			ws[ws.Length-1] += learningRate* 1 * err;
		}
	}
}

