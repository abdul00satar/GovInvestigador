import { Component } from 'angular2/core';
//import {MenuComponent} from '../../golfinho/menu.component/menu.component';
import { ProfileLeftComponent } from '../../golfinho/profile.left.component/profile.left.component'
import { ProfileCenterComponent } from '../../golfinho/profile.center.component/profile.center.component'
import { ProfileRightComponent } from '../../golfinho/profile.right.component/profile.right.component'

@Component({
    selector: 'profile-component',
    templateUrl : `app/pages/profile.component/profile.component.html`,
    styleUrls: [`app/pages/profile.component/profile.component.css`],
    directives: [ProfileLeftComponent,ProfileCenterComponent,ProfileRightComponent]  
})
//,ProfileCenterComponent,ProfileRightComponent MenuComponent,
export class ProfileComponent{
    
}