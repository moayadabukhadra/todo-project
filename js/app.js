'use strict';

var person = prompt ("please enter your name");
if (person==""){
  person= "invaild"
}
var gender = prompt ("enter ur gender (male/female)");
if (gender== ""){
  gender="invaild";
}
var age = prompt ("enter your age");
if(age== ""){
age ="invaild";
}
while (age <= 0) {
    
 
      var age = prompt ("the age cant be 0 or less please enter your age again ");
   } 

function visit() {
  visit =  prompt ("are you new to this website ?");
 
  
}

visit()
if (visit == ""){
  visit = "invaild";
}


function color() {
  color =   prompt ("what is your favorite color");


}
color()
if (color == ""){
  color = "invaild";
}


function from() {
 from =  prompt ("where are you from");

}
from()
if (from == ""){
  from = "invaild";
}

var skip = confirm ("do you want to skip the welcoming message")
let answers = [age,gender,person,skip,visit,color,from]
 






 if (gender == "male" && skip == false ){


alert ("hello Mr " + person);

} if (gender == "female" && skip == false ){
alert ("Hello Ms " + person);
}
else if  (gender == "invaild" && skip == false ){
alert ("Hello " + person );
 var i =0;
}
for (i=0 ; i<=6 ; i++){
  console.log(answers[i]);
}





