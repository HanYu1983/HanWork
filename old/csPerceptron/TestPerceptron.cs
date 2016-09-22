using System;
using UnityEngine;
using System.Collections.Generic;

namespace AIRace.Model
{
	public class TestPerceptron : MonoBehaviour
	{
		public List<Vector3> data;
		public GameObject pixel;

		public float output;
		public float error;
		public float errorsum;

		Perceptron p = new Perceptron(2);

		GameObject[,] pixels = new GameObject[10, 10];

		void Start(){
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
					float output = p.Output;
					p.Learn (v.z);
					this.output = output;
					error = p.Error;
					errorsum += error;
				}
			}
		}

		void Update(){
			
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
			

			errorsum = 0;
			foreach (Vector3 v in data) {
				p.Input = new float[]{ v.x, v.y };
				p.Feed ();
				float output = p.Output;
				p.Learn (v.z);
				this.output = output;
				error = p.Error;
				errorsum += error;
			}

			for (var i = 0; i < pixels.GetLength(0); ++i) {
				for (var j = 0; j < pixels.GetLength(1); ++j) {
					p.Input = new float[]{ i/10.0f, j/10.0f };
					p.Feed ();
					float output = p.Output;
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

