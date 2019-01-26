// Reseting password in reset.html page

	 var resetButton = document.getElementById('reset-button');

	 resetButton.addEventListener('click', function(){
	 	alert('A link to reset your password has been sent to your email.');
	 });
	 	
	


	// Validation script for all form inputs

	const inputs = document.querySelectorAll('input');

	const patterns = {
			phonenumber: /^\d{11}$/, //matching exactly 11 digits
			firstname: /^[a-z]{5,12}$/i,
			lastname: /^[a-z]{5,12}$/i,
			password: /^[\w@-]{8,20}$/,
			email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/
	}

	//validation function
	function validate(inputField, regexp){
	if(regexp.test(inputField.value)) {
	inputField.className = "valid";
	} else {
	inputField.className = 'invalid'
	}
	}


	inputs.forEach((item) => item.addEventListener('keyup', (e)=>{
	//console.log(e.target.value);
	validate(e.target, patterns[e.target.attributes.name.value])
	}));
