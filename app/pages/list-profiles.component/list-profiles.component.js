System.register(['angular2/core', '../../golfinho/footer.component/footer.component', 'angular2/router', './list-profiles.service'], function(exports_1, context_1) {
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
    var core_1, footer_component_1, router_1, list_profiles_service_1;
    var ListProfilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_profiles_service_1_1) {
                list_profiles_service_1 = list_profiles_service_1_1;
            }],
        execute: function() {
            ListProfilesComponent = (function () {
                function ListProfilesComponent(_listProfilesService) {
                    this._listProfilesService = _listProfilesService;
                }
                ListProfilesComponent.prototype.ngOnInit = function () {
                    this.profiles = this._listProfilesService.getAllProfiles();
                };
                ListProfilesComponent.prototype.profileActions = function (item) {
                    alert(item);
                };
                ListProfilesComponent = __decorate([
                    core_1.Component({
                        selector: 'list-profiles-component',
                        templateUrl: "app/pages/list-profiles.component/list-profiles.component.html",
                        styleUrls: ["app/pages/list-profiles.component/list-profiles.component.css"],
                        directives: [footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [list_profiles_service_1.ListProfilesService]
                    }), 
                    __metadata('design:paramtypes', [list_profiles_service_1.ListProfilesService])
                ], ListProfilesComponent);
                return ListProfilesComponent;
            }());
            exports_1("ListProfilesComponent", ListProfilesComponent);
        }
    }
});
//# sourceMappingURL=list-profiles.component.js.map