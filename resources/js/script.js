//***********AngularJs Part Start*********************
var app = angular.module("mainApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
	   templateUrl: 'home',
	   controller: 'homeController'
	})
	.when('/experience', {
	   templateUrl: 'experience',
	   controller: 'experienceController'
	})
	.when('/cirtification', {
	   templateUrl: 'cirtification',
	   controller: 'cirtificationController'
	})
	.when('/academic', {
	   templateUrl: 'academic',
	   controller: 'academicController'
	})
	.when('/protfolio', {
	   templateUrl: 'protfolio',
	   controller: 'protfolioController'
	})
	.when('/cv', {
	   templateUrl: 'cv',
	   controller: 'cvController'
	})
	.when('/galary', {
	   templateUrl: 'galary',
	   controller: 'galaryController'
	})
	.otherwise({
	   redirectTo: '/home'
	});
 }]);
 
app.controller('homeController', function($scope) {
	$scope.aboutDescriptions = [
		{
			"descriptionBlock": "This is, Md. Mizanur Rahman, nick name Mizan, I am Java Programmer. My home district is Pabna Sadar, Pabna and now I am at Dhaka, Bangladesh. I have completed my post graduation in Physics from Dhaka College and accrue a OCJP vendor certification from Oracle Corporation. I am obesely heard working and self-motive person. By watching movies, traveling and visiting new places I spend my leisure time."
		},
		{
			"descriptionBlock": "I know the programming language Java, JavaScript, C, C# and PHP; Java technology and framework Spring, PrimeFace, Struts, Swing, AWT, Servlet, JSP, JSTL and JSF; Font-end technology and framework HTML5, CSS3, jQuery, XML, Json, Ajax, AngularJs, ExtJs and Bootstrap; Data access Technologies JDBC, Hibernate, MyBatis and JPA2; Database Oracle(SQL, PL/SQL) and MySql; Server Apache Tomcat, Glassfish and XAMPP; IDE STS, Eclipse, NetBeans and Visual Studio Code."
		},
		{
			"descriptionBlock": "I love to work on OOP. Now I am working on JavaEE, Spring Boot, JPA, MyBatis, Oracle,  AngularJs, ExtJs, HL7 and IHE. I want to acquire knowledge at Python, NodeJs, Liquibase, Spring Web Flow and many other language and framework in future."	
		}
	];
});

app.controller('experienceController', function($scope) {
	$scope.experiences = [
		{
			"organization": "Medical System Company Limited", 
			"logo": "resources/images/medisys_logo.png", 
			"designation": "Assistant Programmer", 
			"team": "JavaEE & IHE Team", 
			"duration": "March 1, 2017 to preasent", 
			"responsibility": "Team mate of development team for Hospital Management Information System developed with IHE, HL7 v2.3, Spring Boot, MyBatis, Oracle, ExtJs, Tomcat, Maven, Ant, Git, Bitbucket, Jira, Liqibase and many more.", 
			"website": "http://medisys.com.sa", 
			"address": "Software Technology Park@Janata Tower, 10th Floor, Kawran Bazar, Dhaka-1215, Telephone : +88-488 100 10, Postal address : P O Box 2197, Dhaka-1000 Bangladesh."
		}
	];
});

app.controller('cirtificationController', function($scope) {
	$scope.cirtifications = [
		{
			"name": "Oracle Certified Professional Java SE 6 Programmer", 
			"type": "Vendor Certification", 
			"organization": "Oracle Corporation, Redwood City, California, United States", 
			"duration": "March 23, 2017"
		},
		{
			"name": "Enterprise System Analisys and Design (ESAD-J2EE)", 
			"type": "Profetional Diploma", 
			"organization": "IDB-BISEW, IDB Bhaban, Dhaka, Bangladesh", 
			"duration": "December 28, 2015 to December 13, 2017"
		},
		{
			"name": "National Skill Standard Basic Course Examination", 
			"type": "Computer Office Application Traning", 
			"organization": "Path Finder Computer Traning Institute, Pabna, Dhaka, Bangladesh", 
			"duration": "January 01, 2014 to July 24, 2014"
		}
	];
});

app.controller('academicController', function($scope) {
	$scope.academics = [
		{"description": "Master of Science (Physics), Dhaka College, Dhaka under National University"},
		{"description": "Bachelor of Science (Physics), Govt. Edward College, Pabna under National University"},
		{"description": "Higher Secondary Certificate Examination (Science), Shahid Bul Bul Govt. College, Pabna under Rajshahi Education Board"},
		{"description": "Secondary School Certificate Examination (Science), Khatib Abdul Zahid High School, Pabna under Rajshahi Education Board"}
	];
	
});

app.controller('protfolioController', function($scope) {
	$scope.protfolios = [
		{
			"application":"SPACE",
			"profile":"ERP",
			"description": "Enterprise Resource Planning",
			"technologies": [
				{"name": "AngularJs 4"},
				{"name": "Apache Tomcate"},
				{"name": "Spring Boot"},
				{"name": "JPA & Hibernate"},
				{"name": "Oracle 10g"}
			],
			"member": "2",
			"url": "#"
		},
		{
			"application":"HMIS",
			"profile":"ITIS",
			"description": "Hospital Management Information System",
			"technologies": [
				{"name": "ExtJs MVVM"},
				{"name": "JavaScript"},
				{"name": "Spring Boot"},
				{"name": "Apache Camel"},
				{"name": "Apache Ant"},
				{"name": "Apache Maven"},
				{"name": "MyBatis"},
				{"name": "Oracle 11g"}
			],
			"member": "4",
			"url": "http://bgd.medisys.com.my/itis"
		},
		{
			"application":"HMIS",
			"profile":"LABS",
			"description": "Hospital Management Information System",
			"technologies": [
				{"name": "ExtJs MVVM"},
				{"name": "JavaScript"},
				{"name": "Spring Boot"},
				{"name": "Apache Camel"},
				{"name": "Apache Ant"},
				{"name": "Apache Maven"},
				{"name": "MyBatis"},
				{"name": "Oracle 11g"}
			],
			"member": "4",
			"url": "http://bgd.medisys.com.my/labs"
		},
		{
			"application":"HMIS",
			"profile":"PIX",
			"description": "Hospital Management Information System",
			"technologies": [
				{"name": "ExtJs MVVM"},
				{"name": "JavaScript"},
				{"name": "Spring Boot"},
				{"name": "Apache Camel"},
				{"name": "Apache Ant"},
				{"name": "Apache Maven"},
				{"name": "MyBatis"},
				{"name": "Oracle 11g"}
			],
			"member": "2",
			"url": "http://bgd.medisys.com.my/itis"
		},
		{
			"application":"Quality Point",
			"profile":"IMS",
			"description": "Enterprise Resource Planning",
			"technologies": [
				{"name": "AngularJs"},
				{"name": "HTML & CSS"},
				{"name": "Bootstrap"},
				{"name": "JavaScript"},
				{"name": "jQuery"},
				{"name": "Spring Boot"},
				{"name": "Apache Tomcate"},
				{"name": "Apache Maven"},
				{"name": "Jpa"},
				{"name": "Oracle 11g"}
			],
			"member": "2",
			"url": "#"
		},
		{
			"application":"MRS Hotel",
			"profile":"BRS",
			"description": "Hotel Management System",
			"technologies": [
				{"name": "AngularJs"},
				{"name": "JSP & JSTL"},
				{"name": "Bootstrap"},
				{"name": "JavaScript"},
				{"name": "jQuery"},
				{"name": "Spring REST Service"},
				{"name": "Apache Tomcate"},
				{"name": "Hibernate"},
				{"name": "MySql"}
			],
			"member": "1",
			"url": "#"
		},
		{
			"application":"MRS Transport",
			"profile":"TOP",
			"description": "Transport Management System",
			"technologies": [
				{"name": "Swing & AWT"},
				{"name": "Java SE"},
				{"name": "JDBC"},
				{"name": "MySql"}
			],
			"member": "1",
			"url": "#"
		}
	];
});

app.controller('cvController', function($scope) {
	
});

app.controller('galaryController', function($scope) {
	
	$scope.galarys = [
		{"src": "resources/images/galary01.jpg", "alt": "Image01"},
		{"src": "resources/images/galary02.jpg", "alt": "Image02"},
		{"src": "resources/images/galary03.jpg", "alt": "Image03"},
		{"src": "resources/images/galary04.jpg", "alt": "Image04"},
		{"src": "resources/images/galary05.jpg", "alt": "Image05"},
		{"src": "resources/images/galary06.jpg", "alt": "Image06"},
		{"src": "resources/images/galary07.jpg", "alt": "Image07"},
		{"src": "resources/images/galary08.jpg", "alt": "Image08"},
		{"src": "resources/images/galary09.jpg", "alt": "Image09"},
		{"src": "resources/images/galary10.jpg", "alt": "Image10"},
		{"src": "resources/images/galary11.jpg", "alt": "Image11"},
		{"src": "resources/images/galary12.jpg", "alt": "Image12"}
	];
});

//***********AngularJs Part End*********************