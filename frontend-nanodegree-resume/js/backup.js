/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("hwj");

//practice .replace("prev", "changed");
var email = "hwj0623@naver.com";
var newEmail = email.replace("naver", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts ="I am hwj and I am AWESOME!";
console.log(awesomeThoughts);

var funThought = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThought);

//test append, prepend
var formattedName = HTMLheaderName.replace("%data%", "James Cameron");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 //Quiz String Manipulation
var s = "audacity";
var udacityizer = function(s){

	s = 'U'+s.slice(2);

	return s;
};
// Did your code work? The line below will tell you!
console.log(udacityizer(s));

//Arrays
var skills = 
["awesome", "programming", "teaching", "JS"];
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

//Quiz Array Manipulation
function incrementLastArrayElement(_array){
	var newArray =[];
	newArray  = _array.slice(0);
	var lastNumber = newArray.pop();
	newArray.push(lastNumber+1);
	return newArray;
}

var name = "AlbERt EINstEiN";

//Quiz
function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase()+
    			names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


//Object
var bio = {
	"name" : "hyunwoo-Jung",
	"role" : "Web Developer",
	"contracts":{
		"mobile": "010-0000-1111",
		"email": "hwj0623@naver.com",
		"github" : "hwj0623@naver.com",
		"location" : "Seoul"
	},
	"WelcomeMessage" : "glad to see you",
	"skills" : ["awesome", "programming", "teaching", "JS"],
	"bioPic" : "images/fry.jpg"

};
//var MyObj ={};
//MyObj.property = someValue;
//MyObj["property"] = someValue;
$("#main").append(bio.name);
bio.city = "Mountain View";
bio["email"] = "hwj@naver.com";
$("#main").append(bio.city);

var workObj ={}
workObj.position = "Web Developer";
workObj.employer = "Naver";
workObj.years = 5;
workObj["city"] = "San Fransisco";

var education ={}
education["name"] = "Yonsei Univ";
education["years"] = "2009-2016";
education["city"] = "Seoul";
$("#main").append("\n");
$("#main").append(workObj["position"]);
$("#main").append("\n");
$("#main").append(education.name);

var education2 = {
	"schools": [
		{
			"name" : "Yonsei",
			"city" : "seodaemun",
			"degree": "BA",
			"major" : ["Biz", "CS"]
		},
		{
			"name": "Korea",
			"city" : "Anam",
			"degree": "BA",
			"major": ["CS"]
		}
	],

	"onlineCourses" :[
		{
			"title":"Bootstrap",
			"school": "Udacity",
			"dates": 20,
			"url": "http://www.udacity.com/course/ud804"
		}
	]

};

//Lesson 5 -- If Statements
    if(bio.skills.length>0){
      HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").append(HTMLheaderName);

      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    }


//While Loops
function makeCourse(){};
function doSomething(){ console.log(courses)};

var cameron = {};
cameron.job = "course dev";
var courses = 0;
while(cameron.job ==="course dev"){
	makeCourse();
	courses = courses+1;
	if(courses===10){
		cameron.job = "learning specialist";
	}
}
console.log(cameron.job);
//for Loops
for(courses; courses <20; courses++){
	doSomething();
}
//for in Loops
var countries =["Germany", "Argentina", "Brazil", "Netherland"];
for(country in countries){
	//console.log(country);		//0~3
	console.log(countries[country]);
}


