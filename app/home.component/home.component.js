System.register(['angular2/core', '../menu.component/menu.component', '../login.component/login.component', '../footer-component/footer-component', '../forum-box.component/forum-box.component'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, login_component_1, footer_component_1, forum_box_component_1;
    var HomePage;
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
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (forum_box_component_1_1) {
                forum_box_component_1 = forum_box_component_1_1;
            }],
        execute: function() {
            HomePage = (function () {
                function HomePage() {
                }
                HomePage = __decorate([
                    core_1.Component({
                        selector: 'Home-page',
                        templateUrl: "app/home.component/home.component.html",
                        styleUrls: ["app/home.component/home.component.css"],
                        directives: [menu_component_1.MenuComponent, login_component_1.LoginComponent, footer_component_1.FooterComponent, forum_box_component_1.FormBoxComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomePage);
                return HomePage;
            }());
            exports_1("HomePage", HomePage);
        }
    }
});
//# sourceMappingURL=home.component.js.map