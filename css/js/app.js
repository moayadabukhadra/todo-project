'use strict';

var person = prompt ("please enter your name");


var gender = prompt ("enter ur gender (male/female)");

var age = prompt ("enter your age");

confirm ("do you want to skip the welcoming message")

if (gender == "male" ){

alert ("hello Mr " + person);

}else if (gender == "female"){
alert ("Hello Ms " + person)
}else {
    alert ("Hello " + person);
}




