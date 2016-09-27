import { Component } from 'angular2/core';
//import { MenuComponent } from '../../golfinho/menu.component/menu.component';
import { FooterComponent } from '../../golfinho/footer.component/footer.component';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {ListProfilesService} from './list-profiles.service';
import {OnInit} from 'angular2/core';
 
@Component({
    selector: 'list-profiles-component',
    templateUrl: `app/pages/list-profiles.component/list-profiles.component.html`,
    styleUrls: [`app/pages/list-profiles.component/list-profiles.component.css`],
    directives: [FooterComponent,ROUTER_DIRECTIVES],
    providers: [ListProfilesService]
    
    //MenuComponent,FooterComponent
 
})

export class ListProfilesComponent implements OnInit{
    profiles: any[];
    constructor(private _listProfilesService: ListProfilesService){
        
    }
    
    ngOnInit(): void{
        this.profiles = this._listProfilesService.getAllProfiles();
        alert(this.profiles[0].firstName)
        console.info(this.profiles)
    }
    
    


    profileActions(item):void{
    alert(item)
}
}