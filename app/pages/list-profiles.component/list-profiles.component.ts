import { Component } from 'angular2/core';
//import { MenuComponent } from '../../golfinho/menu.component/menu.component';
import { FooterComponent } from '../../golfinho/footer.component/footer.component';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'list-profiles-component',
    templateUrl: `app/pages/list-profiles.component/list-profiles.component.html`,
    styleUrls: [`app/pages/list-profiles.component/list-profiles.component.css`],
    directives: [FooterComponent,ROUTER_DIRECTIVES]
    
    //MenuComponent,FooterComponent
 
})

export class ListProfilesComponent{
    
}