import { Component } from 'angular2/core';
import { FooterComponent } from '../golfinho/footer.component/footer.component';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'home-page',
    templateUrl : `app/home/home.component.html`,
    styleUrls: [`app/home/home.component.css`],
    directives: [  FooterComponent,ROUTER_DIRECTIVES]  
    
})

export class HomePage{
    
}