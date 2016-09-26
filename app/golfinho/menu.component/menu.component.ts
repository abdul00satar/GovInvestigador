import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector:'menu-component',
    templateUrl : `app/golfinho/menu.component/menu.component.html`,
    styleUrls : [`app/golfinho/menu.component/menu.component.css`]
,
    directives: [ROUTER_DIRECTIVES ],
    providers: [
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})

export class MenuComponent{
    
}
