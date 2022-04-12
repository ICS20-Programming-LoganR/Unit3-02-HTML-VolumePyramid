// Created by: Logan Rodriguez
// Created on: Apr 2022
// This file contains the JS functions for index.html

function calculate () {
  //function for determining the volume

  //get side a from the text field
  let Aside = parseFloat(document.getElementById("side-a").value)
	// get side b from the text field
  let Bside = parseFloat(document.getElementById("side-b").value)
  // get the height from the textfield
  let Height = parseFloat(document.getElementById("height").value)
  //Display the answer
  document.getElementById('answer').innerHTML = "The volume is " + ((Aside * Bside * Height) / 6).toFixed(3) + "cm³"
}