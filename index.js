function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

const form = document.querySelector("#apply");

const CLASS_REQUIRED = "Please enter your class";
const SUBJECT_REQUIRED = "Please enter your subject";
const DATE_INVALID = "Please enter the correct date";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let classValid = hasValue(form.elements["class"], CLASS_REQUIRED);
    
	
	// if valid, submit the form.
	if (classValid && emailValid) {
		alert("Please fill all the information required");
	}
});




// // validate the form
// let classValid = hasValue(form.elements["class"], CLASS_REQUIRED);
    
	
// // if valid, submit the form.
// if (classValid && emailValid) {
// 	alert("Please fill all the information required");
// }
// });
