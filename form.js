function submitForm() {
    let firstName = document.getElementById("inputFname").value;
    let lastName = document.getElementById("inputLname").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let address = document.getElementById("inputAddress").value;
    let address2 = document.getElementById("inputAddress2").value;
    let city = document.getElementById("inputCity").value;
    let state = document.getElementById("inputState").value;
    let zip = document.getElementById("inputZip").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let file = document.getElementById("inputFile").value;
    let gridCheck = document.getElementById("gridCheck").checked;

    let genderText = (gender === "male") ? "Male" : "Female";


    let formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
        address2: address2,
        city: city,
        state: state,
        postalCode: zip,
        gender: genderText,
        file: file,
        gridCheck: gridCheck
    };

    var formDataString = "First Name: " + formData.firstName +
    "\nLast Name: " + formData.lastName +
    "\nGender: " + formData.gender +
    "\nEmail: " + formData.email +
    "\nAddress: " + formData.address +
    "\nAddress 2: " + formData.address2 +
    "\nCity: " + formData.city +
    "\nState: " + formData.state +
    "\nPostal-Code: " + formData.postalCode +
    "\nFile: " + formData.file+
    "\ngridCheck: " +formData.gridCheck;
    alert(formDataString);



    if (inputFile.files.length > 0) {
        file = inputFile.files[0];
        formData = new FormData();
       formData.append('file', file);

    saveFileLocally(file);
    } else {
    alert('Please select a file before submitting.');
    }
}

    function saveFileLocally(file) {
    var downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = 'Document/' + file.name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

}


    $(document).ready(function () {
      $('#fileInput').change(function () {
        const fileInput = this;
        const previewContainer = $('#preview-container');
        const selectedImage = $('#selected-image');

        const file = fileInput.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {
            selectedImage.attr('src', e.target.result);
            selectedImage.css('display', 'block');
          };

          reader.readAsDataURL(file);
        } else {
          // If no file is selected, hide the image
          selectedImage.css('display');
        }
      });
    });
  




















