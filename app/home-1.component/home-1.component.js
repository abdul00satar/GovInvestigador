System.register(['angular2/core', '../menu.component/menu.component', '../login.component/login.component', '../forum-box.component/forum-box.component'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, login_component_1, forum_box_component_1;
    var home_1_Page;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (forum_box_component_1_1) {
                forum_box_component_1 = forum_box_component_1_1;
            }],
        execute: function() {
            home_1_Page = (function () {
                function home_1_Page() {
                }
                home_1_Page = __decorate([
                    core_1.Component({
                        selector: 'home-1-page',
                        templateUrl: "app/home-1.component/home-1.component.html",
                        styleUrls: ["app/home-1.component/home-1.component.css"],
                        directives: [menu_component_1.MenuComponent, login_component_1.LoginComponent, forum_box_component_1.FormBoxComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], home_1_Page);
                return home_1_Page;
            }());
            exports_1("home_1_Page", home_1_Page);
        }
    }
});
//# sourceMappingURL=home-1.component.js.map