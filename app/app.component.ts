import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomePage } from './home/home.component';
import { ListProfilesComponent } from './pages/list-profiles.component/list-profiles.component';

import { ProfileComponent } from './pages/profile.component/profile.component';
import { LoginComponent } from './pages/login.component/login.component';
import { CadastroComponent } from './pages/cadastro.component/cadastro.component';

@Component({
    selector: 'pm-app',
    template: `
  
    <nav class="nav navbar navbar-default nav-config">
          <div class="container">
            <div class="navbar-header">
            <a  [routerLink]="['Home']" class="navbar-brand margin-top-10">Golfinho</a>
              <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
              </button>
            </div>
            
            <ul class="nav navbar-nav nav-hover collapse navbar-collapse">
              <li><a [routerLink]="['List-Profile']">Profiles</a></li>
              <li><a  [routerLink]="['Home']"href="#">Empresas</a></li>
              <li><a  [routerLink]="['Home']">Comunidades</a></li>
              <li><a [routerLink]="['Home']">Acerca</a></li>
              
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a  [routerLink]="['Login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            
         </div> 
    </nav>

    <router-outlet></router-outlet>       
    
         
     `,
    directives: [ROUTER_DIRECTIVES, HomePage, ListProfilesComponent,LoginComponent,CadastroComponent ],
    providers: [ProductService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/home', name: 'Home', component:HomePage,useAsDefault:true },
    {path: '/profile', name: 'Profile', component:ProfileComponent },
    {path: '/list-profile', name: 'List-Profile', component:ListProfilesComponent},
    {path: '/cadastro', name: 'Cadastro', component: CadastroComponent},
    {path: '/login', name: 'Login', component: LoginComponent},
    
   // { path: '/product/:id', name//: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Golfinho';
}
