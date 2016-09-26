System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './products/product.service', './home/home.component', './pages/list-profiles.component/list-profiles.component', './pages/profile.component/profile.component', './pages/login.component/login.component', './pages/cadastro.component/cadastro.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, product_service_1, home_component_1, list_profiles_component_1, profile_component_1, login_component_1, cadastro_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (list_profiles_component_1_1) {
                list_profiles_component_1 = list_profiles_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (cadastro_component_1_1) {
                cadastro_component_1 = cadastro_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Golfinho';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n  \n    <nav class=\"nav navbar navbar-default nav-config\">\n          <div class=\"container\">\n            <div class=\"navbar-header\">\n            <a  [routerLink]=\"['Home']\" class=\"navbar-brand margin-top-10\">Golfinho</a>\n              <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n              </button>\n            </div>\n            \n            <ul class=\"nav navbar-nav nav-hover collapse navbar-collapse\">\n              <li><a [routerLink]=\"['List-Profile']\">Profiles</a></li>\n              <li><a  [routerLink]=\"['Home']\"href=\"#\">Empresas</a></li>\n              <li><a  [routerLink]=\"['Home']\">Comunidades</a></li>\n              <li><a [routerLink]=\"['Home']\">Acerca</a></li>\n              \n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a  [routerLink]=\"['Login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n              </ul>\n            \n         </div> \n    </nav>\n\n    <router-outlet></router-outlet>       \n    \n         \n     ",
                        directives: [router_1.ROUTER_DIRECTIVES, home_component_1.HomePage, list_profiles_component_1.ListProfilesComponent, login_component_1.LoginComponent, cadastro_component_1.CadastroComponent],
                        providers: [product_service_1.ProductService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomePage, useAsDefault: true },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/list-profile', name: 'List-Profile', component: list_profiles_component_1.ListProfilesComponent },
                        { path: '/cadastro', name: 'Cadastro', component: cadastro_component_1.CadastroComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map