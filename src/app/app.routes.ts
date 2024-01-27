import { Routes } from '@angular/router';
import { ApphomeComponent } from './apphome/apphome.component';
import { Error404Component } from './error404/error404.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: ApphomeComponent
    },
    {
        path: 'fruits',
        component: FruitsComponent
    },
    {
        path: 'vegetables',
        component: VegetableComponent
    },
{
    path: 'cart',
    component: CartpageComponent
},
{
    path: 'aboutus',
    component: AboutusComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
},

    {
        path: '**',
        component: Error404Component
    }

];
