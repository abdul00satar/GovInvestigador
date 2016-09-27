import {Component} from 'angular2/core';

@Component({
    selector:'profile-center-component',
    templateUrl: 'app/golfinho/profile.center.component/profile.center.component.html',
    styleUrls: ['app/golfinho/profile.center.component/profile.center.component.css']
    
})

export class ProfileCenterComponent{
    
    profile = {
            "firstName": "José",
            "lastName": "Fumo",
            "email": "coder.davidfumo@gmail.com",
            "username": "josefumo",
            "imgUrl": "profile3",
            "profile": {
                "location": ["Matola"],
                "availability": true,
                "jobTitle": "ML Engineer",
                "componyName": "Studio 201",
                "description": "Creator of grinpost.com | kolega.io",
                "birthday": "8-27-2016",
                "views": 988,
                "gender": "male",
                "following": [12],
                "followers": [13],
                "civilStatus": "single",
                "skills": ["frontend developer", "backend developer", "mongodb",  "docker"],
                "groups": [], 
                "community": [],
                "recomendation": [],
                "languages": ["portuguese", "english", "french"],
                "phoneNumber": 844403480,
                "experience": [
                    {
                        "jobTitle" : "Front-end Developer",
                        "componyName": "Plugin",
                        "startMonth": 1,
                        "startYear": 2016,
                        "endMonth": "8",
                        "endYear": "2016",
                        "summary": "I worked in the development of the website of plugin studio(marketing and web design agency)"
                    }
                ],
                "education": [
                    {
                        "country": "Mozambique",
                        "degree": "Computer science",
                        "startYear": "2014",
                        "endYear": "2018"
                    }
                ],
                "certification": [
                    {
                        "certificationName": "Web API Design",
                        "certificationOrg": "pluralsight",
                        "year": "2016",
                        "websiteUrl": "pluralsight.com",
                        "description": "In this course i lean't wide concepts about api design, restful api, api versioning and sercurity"
                    }
                ],
                "projects": [
                    {
                        "category": "Machine Learning",
                        "name": "Web Crawler",
                        "skillsRequired": [
                            "python", "algorithms and data structures", "nosql"
                        ],
                        "description": "In this project we're going to build a web crawler",
                        "budget": 0,
                        "privacy": false,
                        "members": []
                    }
                ]
            }
        }
}