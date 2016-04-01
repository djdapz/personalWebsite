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
            description: "Software Development Intern. Worked as part of a team to develop an In-House application. Primarily worked with Angular.JS and Java(Spring Framework). Also worked with Oracle SQL and git."
        },
        {
            name: "Encision Inc.",
            start: "June 2014",
            end: "April 2015",
            location: "Boulder, CO",
            title: "Marketing Intern",
            description: "Marketing Intern. Wrote, filmed, produced, and edited multiple product videos, created centralized database for company sales force, created and distributed launch books for a new product, assisted Encision co-founder and VP of Technology with lab research."
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

};

/* recommended */
angular
    .module('app')
    .controller("appController", appController);

appController.$inject = ['$scope'];