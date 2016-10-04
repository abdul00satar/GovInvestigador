import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HomePage } from './home.component/home.component'
import { home_1_Page } from './home-1.component/home-1.component'
import {Cadastro_1_Component} from './cadastro1.component/cadastro1.component'
import {Cadastro_2_Component} from './cadastro2.component/cadastro2.component'
import {Cadastro_3_Component} from './cadastro3.component/cadastro3.component'
import {Cadastro_4_Component} from './cadastro4.component/cadastro4.component'

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
    {path: '/parte_1', name: 'Cadastro_parte_1', component:Cadastro_1_Component },    
    {path: '/parte_2', name: 'Cadastro_parte_2', component:Cadastro_2_Component },    
    {path: '/parte_3', name: 'Cadastro_parte_3', component:Cadastro_3_Component },    
    {path: '/parte_4', name: 'Cadastro_parte_4', component:Cadastro_4_Component },    
   
    
])

//[routerLink]="['Home']"

export class AppComponent {
    pageTitle: string = 'GovInvestigador';
}
