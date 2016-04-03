/**
 * Created by djdapz on 3/31/16.
 */
var appController = function($scope){
    $scope.schools = [
        {
            name: "Northwestern University",
            start: "2013",
            end: "2017",
            special: undefined,
            gpa: 3.626,
            location: "Evanston, IL",
            major: "Computer Science, Economics",
            certificate: "Kellogg Financial Economics Certificate"
        },
        {
            name: "The University of Edinburgh",
            start: "9/2015",
            end: "12/2015",
            special: "Study Abroad",
            gpa: undefined,
            location: "Edinburgh, Scotland"

        },
        {
            name: "The Dawson School",
            start: "2009",
            end: "2013",
            special: undefined,
            gpa: 3.98,
            location: "Lafayette, CO"
        }
    ];

    $scope.jobs = [
        {
            name: "Expedia Inc.",
            start: "June 2016",
            end: "August 2016",
            location: "Chicago, IL",
            title: "Incoming Software Development Engineering Intern"
        },
        {
            name: "Level 3 Communications",
            start: "June 2015",
            end: "September 2015",
            location: "Boulder, CO",
            title: "Software Development Intern",
            description: "Worked as part of a team to develop an In-House application. Primarily worked with Angular.JS and Java(Spring Framework). Also worked with Oracle SQL and git."
        },
        {
            name: "Encision Inc.",
            start: "June 2014",
            end: "April 2015",
            location: "Boulder, CO",
            title: "Marketing Intern",
            description: "Wrote, filmed, produced, and edited multiple product videos, created centralized database for company sales force, created and distributed launch books for a new product, assisted Encision co-founder and VP of Technology with lab research."
        },
        {
            name: "Studio N",
            start: "December 2013",
            end: "Present",
            location: "Evanston, IL",
            title: "Camera operator, Control Room Technician",
            description: "Operated camera and worked in Tech Booth to produce and stream live NCAA sporting events over the Internet."
        },
        {
            name: "GEOS Global Synergy Funds",
            start: "May 2013",
            end: "August 2014",
            location: "Boulder, CO",
            title: "Office Intern",
            description: "Worked as an Intern preforming office tasks, research, confirming trades, and assisting back office"
        }

    ]

    $scope.clubs = [
        {
            name: "Delta Tau Delta Fraternity",
            start: "Winter 2014",
            end: "present",
            description: "Active brother and leader in the chapter. Leadership discussed in leadership section",
            list_title: "Positions",
            list: [
                {
                    title: "Guide",
                    description: "Holds a seat on the Executive Board and is in charge of the ritual, initiation, and secrets of the fraternity"
                },
                {
                    title: "Brotherhood Chair",
                    description: " Holds a seat on the Administrative Board and is responsible for all programming promoting comradery and brotherhood"
                },
                {
                    title: "Housing Chair",
                    description: " Independent position responsible for managing the house and acting as a liaison between the chapter and our housing corporation"
                }
            ]
        },
        {
            name: "Peer Leader",
            start: "Fall 2011",
            end: "Spring 2013",
            description: "Advised and mentored a group of incoming Alexander Dawson School freshmen throughout the year.",
            list_title: undefined,
            list: undefined
        },
        {
            name: "Conduct Comittee",
            start: "Fall 2010",
            end: "Spring 2012",
            description: "Elected by peers to serve on the Alexander Dawson School disciplinary committee run by students and faculty.",
            list_title: undefined,
            list: undefined
        },
        {
            name: "Form & Function Marketing",
            start: "Fall 2014",
            end: "present",
            description: "Member of student-run marketing consulting group. Formulated and executed marketing plans for local businesses, student groups and charities.",
            list_title: "Clients",
            list: [
                {
                    title: "Salmon Cove"
                },
                {
                    title: "Honor Flight Chicago"
                },
                {
                    title: "LYFE Kitchen"
                },
                {
                    title: "Kohl's Children Museum"
                }
            ]
        },
        {
            name: "Northwestern Sketch Television",
            start: "Fall 2013",
            end: "Spring 2014",
            description: "Associate Producer",
            list_title: undefined,
            list: undefined
        }




    ];

    $scope.awards = [
        {
            name: "Dean's List",
            description: "Placed on Northwestern University's Dean's list 3 times: Spring 2014, Fall 2014, and Spring 2015"
        },
        {
            name: "Excellence in Design",
            description: "My four-person group’s design was recognized for excellence in design at Northwestern University’s Design Expo."
        }
    ];

    $scope.languages = [
        {
            name: "C++",
            proficiency: 4,
            frameworks: [
                {
                    name: "openGL",
                    proficiency:2
                }
            ]
        },
        {
            name: "Javascript",
            proficiency: 5,
            frameworks: [
                {
                    name: "Angular",
                    proficiency:5
                },
                {
                    name: "Node",
                    proficiency:3
                },
                {
                    name: "Express",
                    proficiency:3
                }
            ]
        },
        {
            name: 'Python',
            proficiency: 3,
            frameworks: undefined
        },
        {
            name: "HTML5/CSS3",
            proficiency: 5,
            frameworks: undefined
        },
        {
            name: "Java",
            proficiency: 3,
            frameworks: [
                {
                    name: "Spring",
                    proficiency: 2
                }
            ]
        }

    ]

    $scope.skills = [
        {
            name: "SQL"
        },
        {
            name: 'Git'
        },
        {
            name: "Object Oriented Programming"
        },
        {
            name: "User Centered Design"
        },
        {
            name: "Data Structures"
        },
        {
            name: "Machine Learning Techniques"
        },
        {
            name: "Audio Processing"
        },
        {
            name: "Graphic Design (Photoshop and Illustrator)"
        }
    ];


    $scope.cs = [
        {
            number: 111,
            title: "Fundamentals to Computer Programming 1",
            technology: "Meta"
        },
        {
            number: 211,
            title: "Fundamentals to Computer Programming 2",
            technology: "C++"
        },
        {
            number: 212,
            title: "Mathamatic Foundations of Computer Science"
        },
        {
            number: 213,
            title: "Computer Systems",
            technology: "UNIX, C"
        },
        {
            number: 214,
            title: "Data Structures and Algorithms",
            technology: "C#"
        },
        {
            number: 195,
            title: "Introduction to Robotics Laboratory",
            technology: "Python, ROS"
        },
        {
            number: 330,
            title: "Human Computer Interaction",
            technology: "HTML5, CSS3, Javascript"
        },
        {
            number: "3XX",
            title: "Computer Graphics(Level 11)**",
            technology: "C++, OpenGL"
        },
        {
            number: "3XX",
            title: "Database Systems**",
            technology: "PostgreSQL"
        },
        {
            number: 352,
            title: "Machine Perception of Music and Audio",
            technology: "Python"
        },
        {
            number: 348,
            title: "Introduction to Artificial Intelligence",
            technology: "Python"
        },
        {
            number: 349,
            title: "Machine Learning",
            technology: "Python"
        }

    ];

    $scope.technical = [
        {
            dept: "Engineering",
            number: "205-1",
            title: "Engineering Analysis 1",
            description: "Linear Algebra, MATLAB Programming"
        },
        {
            dept: "Engineering",
            number: "205-2",
            title: "Engineering Analysis 2",
            description: "Mechanics, Stress & Strain"
        },
        {
            dept: "Engineering",
            number: "205-3",
            title: "Engineering Analysis 3",
            description: "Dynamics, Introduction to Differential Equations"
        },
        {
            dept: "Design",
            number: "106-1",
            title: "Design Thinking & Communication 1"

        },
        {
            dept: "Design",
            number: "106-2",
            title: "Design Thinking & Communication 2"
        },
        {
            dept: "Math",
            number: "230",
            title: "Multivariable Differential Calculus"
        },
        {
            dept: "Math",
            number: "234",
            title: "Multivariable Integration and Vector Calculus"
        },
        {
            dept: "IEMS",
            number: "202",
            title: "Probability"
        },
        {
            dept: "IEMS",
            number: "303",
            title: "Statistics"
        },
        {
            dept: "RTVF",
            number: "202",
            title: "Analysis of Media Text"
        },
        {
            dept: "History",
            number: "2XX",
            title: "Medieval Scottish History**"
        },
        {
            dept: "Earth Science",
            number: "2XX",
            title: "Earth Dynamics**"
        }
    ];


    $scope.econ = [
        {
            number: 201,
            title: "Intro to Microeconomics"
        },
        {
            number: 201,
            title: "Intro to Macroeconomics"
        },
        {
            number: "310-1",
            title: "Intermediate Microeconomics 1"
        },
        {
            number: "310-2",
            title: "Intermediate Microeconomics 2"
        },
        {
            number: 311,
            title: "Intermediate Macroeconomics"
        },
        {
            number: "381-1",
            title: "Applied Econometrics 1"
        },
        {
            number: "381-2",
            title: "Applied Econometrics 2"
        }
    ];


    var init = function(){
        for(var i = 0; i<$scope.languages.length; i++){
            setUpStars($scope.languages[i]);
            console.log($scope.languages[i].name)
            if($scope.languages[i].frameworks != undefined) {
                for (var j = 0; j < $scope.languages[i].frameworks.length; j++) {
                    setUpStars($scope.languages[i].frameworks[j]);
                }
            }

        }
    };

    var setUpStars = function(object){
        var s = object.proficiency;
        var n = 5 -s;
        var arr = []
        for(var i = 1; i<=s; i++){
            arr.push(i)
        }
        for(var i = 1; i<=n; i++){
            arr.push(i*-1)
        }
        object.stars = arr;
        return object;
    };

    init();

    $scope.lookIn = function(){
        1+1;
    }



};

/* recommended */
angular
    .module('app')
    .controller("appController", appController);

appController.$inject = ['$scope'];