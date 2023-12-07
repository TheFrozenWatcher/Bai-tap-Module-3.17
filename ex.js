function submitForm() {
    // Get form elements
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('DOB').value;
    var password = document.getElementById('password').value;
    var classroom = document.getElementById('class').value;
    var address = document.querySelector('.address input').value;

    // Create an object to store form data
    var formData = {
        name: name,
        gender: gender,
        email: email,
        dob: dob,
        password: password,
        classroom: classroom,
        address: address
    };

    // Log the form data to the console
    console.log(formData);
}
