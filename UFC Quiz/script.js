var contents;
function readSingleFile(event) {
	// Obtain the single uploaded file
	var f = event.target.files[0];
	if (f) {
		var r = new FileReader();
		r.onload = function (e) {
			contents = e.target.result;
		};
		r.readAsText(f);
	} else {
		alert("Failed to load file");
	}
}
// Function to show hints when question is clicked
function showAnswer(event) {
	var spanTag = event.target;
	var answerId = "h" + spanTag.id.charAt(1);
	var answer = document.getElementById(answerId);
	answer.style.display = "block";
}
// Function to determine whether or not the correct answer is clicked
// ... display the appropriate photo based on answer's correctness on submit
// ... keep track of the user's score
function showNumCorrect() {
	var correctAnswers = JSON.parse(contents);
	var numCorrectAnswers = 0;

	for (let i = 1; i <= 1; i++) {
		let checkbox1 = document.getElementsByName("m1");
		let checkbox2 = document.getElementsByName("m2");
		let checkbox3 = document.getElementsByName("m3");
		let checkbox4 = document.getElementsByName("m4");
		let checkbox5 = document.getElementsByName("m5");

		var image1 = document.getElementById("img1");
		var image2 = document.getElementById("img2");
		var image3 = document.getElementById("img3");
		var image4 = document.getElementById("img4");
		var image5 = document.getElementById("img5");

		// If answers are correct:
		if (
			checkbox1[3].checked == true &&
			checkbox1[3].value == correctAnswers[0].answer
		) {
			image1.src = "./images/green-check.png";
			numCorrectAnswers++;
			image1.style.display = checkbox1[3].checked ? "inline" : "none";
		}
		if (
			checkbox2[0].checked == true &&
			checkbox2[0].value == correctAnswers[1].answer
		) {
			image2.src = "./images/green-check.png";
			numCorrectAnswers++;
			image2.style.display = checkbox2[0].checked ? "inline" : "none";
		}
		if (
			checkbox3[1].checked == true &&
			checkbox3[1].value == correctAnswers[2].answer
		) {
			image3.src = "./images/green-check.png";
			numCorrectAnswers++;
			image3.style.display = checkbox3[1].checked ? "inline" : "none";
		}
		if (
			checkbox4[0].checked == true &&
			checkbox4[0].value == correctAnswers[3].answer
		) {
			image4.src = "./images/green-check.png";
			numCorrectAnswers++;
			image4.style.display = checkbox4[0].checked ? "inline" : "none";
		}
		if (
			checkbox5[2].checked == true &&
			checkbox5[2].value == correctAnswers[4].answer
		) {
			image5.src = "./images/green-check.png";
			numCorrectAnswers++;
			image5.style.display = checkbox5[2].checked ? "inline" : "none";
		}
		// If answers are incorrect:
		if (checkbox1[3].checked == false) {
			image1.src = "./images/red-x.png";
			image1.style.display = checkbox1[3].checked == false ? "inline" : "none";
		}
		if (checkbox2[0].checked == false) {
			image2.src = "./images/red-x.png";
			image2.style.display = checkbox2[0].checked == false ? "inline" : "none";
		}
		if (checkbox3[1].checked == false) {
			image3.src = "./images/red-x.png";
			image3.style.display = checkbox3[1].checked == false ? "inline" : "none";
		}
		if (checkbox4[0].checked == false) {
			image4.src = "./images/red-x.png";
			image4.style.display = checkbox4[0].checked == false ? "inline" : "none";
		}
		if (checkbox5[2].checked == false) {
			image5.src = "./images/red-x.png";
			image5.style.display = checkbox5[2].checked == false ? "inline" : "none";
		}
	}
	// Displays user's score:
	var output = document.querySelector("#numcorrect");
	output.innerHTML = "Number of correct answers: " + numCorrectAnswers;
}
// Adds event handler to all questions to show its hint on click:
function init() {
	var span1 = document.getElementById("q1");
	span1.addEventListener("click", showAnswer);
	var span2 = document.getElementById("q2");
	span2.addEventListener("click", showAnswer);
	var span3 = document.getElementById("q3");
	span3.addEventListener("click", showAnswer);
	var span4 = document.getElementById("q4");
	span4.addEventListener("click", showAnswer);
	var span5 = document.getElementById("q5");
	span5.addEventListener("click", showAnswer);

	var button1 = document.querySelector("#btn1");
	button1.onclick = showNumCorrect;

	// Uploads JSON file synchronusly:
	document
		.getElementById("file")
		.addEventListener("change", readSingleFile, false);
}
window.addEventListener("load", init);
