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




    ]

};

/* recommended */
angular
    .module('app')
    .controller("appController", appController);

appController.$inject = ['$scope'];