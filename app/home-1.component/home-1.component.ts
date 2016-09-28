import { Component } from 'angular2/core';
import { MenuComponent } from '../menu.component/menu.component';
import { LoginComponent } from '../login.component/login.component';
import { FormBoxComponent } from '../forum-box.component/forum-box.component';

@Component({
    selector:'home-1-page',
    templateUrl : `app/home-1.component/home-1.component.html`,
    styleUrls: [`app/home-1.component/home-1.component.css`] ,
    directives: [MenuComponent, LoginComponent, FormBoxComponent] 
})

export class home_1_Page{
}