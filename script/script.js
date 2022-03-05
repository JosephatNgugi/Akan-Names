var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function validateForm(){
    var dd = parseInt(document.getElementById('date').value);
    var mm = parseInt(document.getElementById('month').value);
    var year = document.getElementById('year').value;
    var yy = parseInt(year.substr(2, 4));
    var cc = parseInt(year.substr(0, 2));
    var gender = document.getElementById('gender').value;
    var d= parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )% 7;

    if (dd<=0||dd>31||dd==""){
        alert("Enter a valid date!")
        }
}