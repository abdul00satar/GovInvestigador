import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'menu-component',
    templateUrl: `app/menu.component/menu.component.html`, 
    styleUrls: [`app/menu.component/menu.component.css`],
    directives: [ROUTER_DIRECTIVES],
})

export class MenuComponent{
    
}