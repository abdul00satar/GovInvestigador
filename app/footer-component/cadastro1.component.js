System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Cadastro_1_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Cadastro_1_Component = (function () {
                function Cadastro_1_Component() {
                }
                Cadastro_1_Component = __decorate([
                    core_1.Component({
                        selector: 'parte_1',
                        templateUrl: "app/cadastro1.component/cadastro1.component.html",
                        styleUrls: ["app/cadastro1.component/cadastro1.component.css"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Cadastro_1_Component);
                return Cadastro_1_Component;
            }());
            exports_1("Cadastro_1_Component", Cadastro_1_Component);
        }
    }
});
//# sourceMappingURL=cadastro1.component.js.map