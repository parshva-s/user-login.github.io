//this is a Java file
"use strict";

document.getElementById('button').addEventListener('click',check);//clicking login button will chec if username and password is correct or not

function check() {
    //the username and password I chose
    let user = 'username';
    let pass = 'password';
    //the username and password entered by user
    let user_user = document.getElementById('input1').value;
    let user_pass = document.getElementById('input2').value;
    //if both elements are incorrect
    if ((user != user_user) && (pass != user_pass)) {
        document.getElementById('para5').innerHTML = 'The username and password is incorrect.';
        document.getElementById('para5').style.color = 'red';
    //if username is incorrect
    } else if (user != user_user) {
        document.getElementById('para5').innerHTML = 'The username is incorrect.';
        document.getElementById('para5').style.color = 'red';
    //if password is incorrect
    } else if (pass != user_pass) {
        document.getElementById('para5').innerHTML = 'The password is incorrect.';
        document.getElementById('para5').style.color = 'red';
    //if both elements are correct
    } else {
        document.getElementById('para5').innerHTML = 'Login successful!';
        document.getElementById('para5').style.color = 'green';
    }
}
