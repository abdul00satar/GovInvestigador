import { Component } from 'angular2/core';
import { MenuComponent } from '../menu.component/menu.component';
import { LoginComponent } from '../login.component/login.component';
import { FormBoxComponent } from '../forum-box.component/forum-box.component';

@Component({
    selector:'Home-page',
    templateUrl : `app/home.component/home.component.html`,
    styleUrls: [`app/home.component/home.component.css`] ,
    directives: [MenuComponent, LoginComponent, FormBoxComponent] 
})

export class HomePage{
}