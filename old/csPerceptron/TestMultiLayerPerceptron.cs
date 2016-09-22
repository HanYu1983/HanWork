using System;
using UnityEngine;
using System.Collections.Generic;

namespace AIRace.Model
{
	public class TestMultiLayerPerceptron : MonoBehaviour
	{
		public int iteration = 10;
		public List<Vector3> data;
		public GameObject pixel;

		public float output;
		public float error;
		public float errorsum;

		MultiLayerPerceptron p = new MultiLayerPerceptron (2);
		GameObject[,] pixels = new GameObject[10, 10];

		void Start(){
			var layer = new PerceptronLayer (2);
			layer.Add (new Perceptron (2));
			layer.Add (new Perceptron (2));
			//layer.Add (new Perceptron (2));

			var layer2 = new PerceptronLayer (2);
			layer2.Add (new Perceptron (2));
			/*
			layer2.Add (new Perceptron (3));

			var layer3 = new PerceptronLayer (2);
			layer3.Add (new Perceptron (2));
			*/
			// 總共3神經元就能訓練xor
			p.Add (layer);
			p.Add (layer2);
			// p.Add (layer3);

			for (var i = 0; i < pixels.GetLength(0); ++i) {
				for (var j = 0; j < pixels.GetLength(1); ++j) {
					pixels [i, j] = Instantiate (pixel, new Vector3 (i, j, 0), new Quaternion()) as GameObject;
				}
			}

		}
		void OnGUI(){
			if (GUI.Button (new Rect (10, 10, 100, 50), "step")) {
				errorsum = 0;
				foreach (Vector3 v in data) {
					p.Input = new float[]{ v.x, v.y };
					p.Feed ();
					float output = p.Output[0];
					p.Learn (new float[]{v.z});
					this.output = output;
					print (output);
				}
			}
		}

		void Update(){

			for (var i = 0; i < iteration; ++i) {
				errorsum = 0;
				foreach (Vector3 v in data) {
					p.Input = new float[]{ v.x, v.y };
					p.Feed ();
					float output = p.Output[0];
					p.Learn (new float[]{v.z});
					this.output = output;
				}
			}
				
			if (Input.GetMouseButtonDown (0)) {
				Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
				var pos = ray.origin;
				pos /= 10.0f;
				pos.z = 0;
				data.Add (pos);
			}

			if (Input.GetMouseButtonDown (1)) {
				Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
				var pos = ray.origin;
				pos /= 10.0f;
				pos.z = 1;
				data.Add (pos);
			}

			for (var i = 0; i < pixels.GetLength(0); ++i) {
				for (var j = 0; j < pixels.GetLength(1); ++j) {
					p.Input = new float[]{ i/10.0f, j/10.0f };
					p.Feed ();
					float output = p.Output[0];
					if (output > 0.5) {
						pixels [i, j].GetComponent<MeshRenderer> ().material.color = new Color (1, 0, 0);
					} else {
						pixels [i, j].GetComponent<MeshRenderer> ().material.color = new Color (0, 0, 1);
					}
				}
			}
		}
	}
}

