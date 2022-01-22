'use strict';

var person = prompt ("please enter your name");

console.log(person);
var gender = prompt ("enter ur gender (male/female)");

var age = prompt ("enter your age");
console.log(age);
while (age <= 0) {
    
 

if (age <= 0){

    var age = prompt ("the age cant be 0 or less please enter ur age again ");
 } 

 if (age <= 0){
 
     age = prompt ("the age cant be 0 or less please enter ur age again ");
 }
}

 var skip = confirm ("do you want to skip the welcoming message")
console.log(gender);
console.log(skip);
 
if (gender == "male" && skip == false ){

alert ("hello Mr " + person);

}else if (gender == "female" && skip == false ){
alert ("Hello Ms " + person);
}
if  (gender == "" && skip == false ){
alert ("Hello " + person );
 
}






