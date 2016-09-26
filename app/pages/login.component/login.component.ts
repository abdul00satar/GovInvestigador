import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

//import {MenuComponent} from '../../golfinho/menu.component/menu.component';

@Component({
    selector: 'login-component',
    templateUrl : `app/pages/login.component/login.component.html`,
    styleUrls: [`app/pages/login.component/login.component.css`],
    directives: [ROUTER_DIRECTIVES] 
   // directives: [MenuComponent]  
})

export class LoginComponent{
    
}