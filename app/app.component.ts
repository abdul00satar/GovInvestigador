import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HomePage } from './home.component/home.component'
import { home_1_Page } from './home-1.component/home-1.component'


@Component({
    selector: 'pm-app',
    template: `
    <router-outlet></router-outlet>          
     `,
    directives: [ROUTER_DIRECTIVES,HomePage,home_1_Page],
    providers: [HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/home', name: 'Home', component:HomePage,useAsDefault:true },    
    {path: '/home_1', name: 'Home_1', component:home_1_Page },    
   
    
])

export class AppComponent {
    pageTitle: string = 'GovInvestigador';
}
