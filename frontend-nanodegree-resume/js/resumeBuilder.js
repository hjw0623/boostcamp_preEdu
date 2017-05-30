/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Object
var bio = {
	"name" : "hyunwoo Jung",
	"role" : "course dev",
	"contacts":{
		"mobile": "010-0000-1111",
		"email": "hwj0623@naver.com",
		"github" : "hwj0623@naver.com",
		"location" : "Seoul"
	},
	"WelcomeMessage" : "glad to see you",
	"skills" : ["awesome", "programming", "teaching", "JS"],
	"bioPic" : "images/fry.jpg"
};


var education = {
	"schools": [
		{
			"name" : "Yonsei",
			"city" : "seodaemun",
			"degree": "BA",
			"major" : ["Biz", "CS"],
			"dates" : 2009,
			"url" : "http://portal.yonsei.ac.kr"
		},
		{
			"name": "Korea",
			"city" : "Anam",
			"degree": "BA",
			"major": ["CS"],
			"dates":2008,
			"url":"http://portal.korea.ac.kr"
		}
	],
	"onlineCourses" : [
		{
			"title":"Bootstrap",
			"school": "Udacity",
			"dates": 2017,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description" : "I wanna do well",
			"images":[
			"http://cfile230.uf.daum.net/image/263E4D4151B5C4D438151D",
			"http://i.imgur.com/2PBLK.jpg"
			]
		}
	]
}


HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(HTMLheaderRole);
HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(HTMLheaderName);


HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts2").prepend(HTMLlocation);
HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts2").prepend(HTMLmobile);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts2").prepend(HTMLemail);
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts2").prepend(HTMLgithub);



HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#topContacts").prepend(HTMLwelcomeMsg);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#topContacts").prepend(HTMLbioPic);
//Lesson 5 -- If Statements
    if(bio.skills.length>0){
	$("#subContacts").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    }


function displayWork(){
//Lesson 5 -- for in  Statements
$("#workExperience").append(HTMLworkStart);
	//Work Experience
	for( job in work.jobs){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+ formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		//
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork(); //global scope


//Lesson 10. Return Statements
// Your code goes here! Let me help you get started
function locationizer(work_obj) {
	var locationArray =[];
	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

//Lession 11.
function inName(bio_obj){
	var finalName = bio_obj.name.trim().split(" ");
	console.log(finalName);
	finalName[1] = finalName[1].toUpperCase();
	finalName[0] = finalName[0].slice(0,1).toUpperCase()+finalName[0].slice(1).toLowerCase();
	return finalName[0]+" "+finalName[1];
}
console.log(inName(bio));
//add button
$('#main').append(internationalizeButton);
//L15 Customize the Portfolio add Google maps
$("#mapDiv").append(googleMap);

//L12 Encapsulation
var displayProjects = function(){}
//L13 Quiz Encapsulation
projects.display = function(){

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title );
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates );
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description );
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length>0){
			for(image in projects.projects[project].images){
				var formmatedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formmatedImage);
			}
		}
	}
}
projects.display();

//An anonymous function as parameter of the function $(document).click()
$(document).click(function(loc){
	console.log(loc.pageX, loc.pageY);
});