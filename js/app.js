'use strict';

var person = prompt ("please enter your name");


var gender = prompt ("enter ur gender (male/female)");

var age = prompt ("enter your age");
while (age <= 0) {
    
 

if (age <= 0){

    var age = prompt ("the age cant be 0 or less please enter ur age again ");
 } 

 if (age <= 0){
 
     age = prompt ("the age cant be 0 or less please enter ur age again ");
 }
}

confirm ("do you want to skip the welcoming message")

if (gender == "male" ){

alert ("hello Mr " + person);

}else if (gender == "female"){
alert ("Hello Ms " + person)
}else {
    alert ("Hello " + person);
}







