System.register(['angular2/core', '../../golfinho/profile.left.component/profile.left.component', '../../golfinho/profile.center.component/profile.center.component', '../../golfinho/profile.right.component/profile.right.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, profile_left_component_1, profile_center_component_1, profile_right_component_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_left_component_1_1) {
                profile_left_component_1 = profile_left_component_1_1;
            },
            function (profile_center_component_1_1) {
                profile_center_component_1 = profile_center_component_1_1;
            },
            function (profile_right_component_1_1) {
                profile_right_component_1 = profile_right_component_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent() {
                    this.profile = {
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
                            "skills": ["frontend developer", "backend developer", "mongodb", "docker"],
                            "groups": [],
                            "community": [],
                            "recomendation": [],
                            "languages": ["portuguese", "english", "french"],
                            "phoneNumber": 844403480,
                            "experience": [
                                {
                                    "jobTitle": "Front-end Developer",
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
                    };
                }
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-component',
                        templateUrl: "app/pages/profile.component/profile.component.html",
                        styleUrls: ["app/pages/profile.component/profile.component.css"],
                        directives: [profile_left_component_1.ProfileLeftComponent, profile_center_component_1.ProfileCenterComponent, profile_right_component_1.ProfileRightComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map