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
  visit =  prompt ("are you new to this website (yes/no)?");
 
  
}

visit()
if (visit == ""){
  visit = "invaild";
}


function developr() {
  developr =   prompt ("are you a developer (yes/no)");


}
developr()
if (developr == ""){
  developr = "invaild";
}


function student() {
 student =  prompt ("are you a student (yes/no)");

}
student()
if (student == ""){
  student = "invaild";
}

var skip = confirm ("do you want to skip the welcoming message")


var answers =[];

answers.push(visit,developr,student);


console.log(answers);




 if (gender == "male" && skip == false ){


alert ("hello Mr " + person);

} if (gender == "female" && skip == false ){
alert ("Hello Ms " + person);
}
else if  (gender == "invaild" && skip == false ){
alert ("Hello " + person );
}






 var i =0;

for (i=0 ; i<=2 ; i++){
  console.log(answers[i]);
}





