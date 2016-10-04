System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home.component/home.component', './home-1.component/home-1.component', './cadastro1.component/cadastro1.component', './cadastro2.component/cadastro2.component', './cadastro3.component/cadastro3.component', './cadastro4.component/cadastro4.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, home_component_1, home_1_component_1, cadastro1_component_1, cadastro2_component_1, cadastro3_component_1, cadastro4_component_1;
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
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (home_1_component_1_1) {
                home_1_component_1 = home_1_component_1_1;
            },
            function (cadastro1_component_1_1) {
                cadastro1_component_1 = cadastro1_component_1_1;
            },
            function (cadastro2_component_1_1) {
                cadastro2_component_1 = cadastro2_component_1_1;
            },
            function (cadastro3_component_1_1) {
                cadastro3_component_1 = cadastro3_component_1_1;
            },
            function (cadastro4_component_1_1) {
                cadastro4_component_1 = cadastro4_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'GovInvestigador';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n    <router-outlet></router-outlet>          \n     ",
                        directives: [router_1.ROUTER_DIRECTIVES, home_component_1.HomePage, home_1_component_1.home_1_Page],
                        providers: [http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomePage, useAsDefault: true },
                        { path: '/parte_1', name: 'Cadastro_parte_1', component: cadastro1_component_1.Cadastro_1_Component },
                        { path: '/parte_2', name: 'Cadastro_parte_2', component: cadastro2_component_1.Cadastro_2_Component },
                        { path: '/parte_3', name: 'Cadastro_parte_3', component: cadastro3_component_1.Cadastro_3_Component },
                        { path: '/parte_4', name: 'Cadastro_parte_4', component: cadastro4_component_1.Cadastro_4_Component },
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