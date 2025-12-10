import { Routes } from '@angular/router';
//import { BarDeNav } from '../shared/component/navigation/bar-de-nav/bar-de-nav';
import { BarDeNav } from './shared/component/navigation/bar-de-nav/bar-de-nav';
import { ExoComponent } from './shared/component/exo-component/exo-component';
import { ContactComposant } from './shared/component/contact-composant/contact-composant';
import { LoginComposant } from './shared/component/login-composant/login-composant';
import { InscriptionComposant } from './shared/component/inscription-composant/inscription-composant';


export const routes: Routes = [


//   {path:'',component:BarDeNav},
{path:'home/exo',component:ExoComponent},
{path:'home/contact', component:ContactComposant},
{path:'home/login',component:LoginComposant},
{path:'home/inscription',component:InscriptionComposant}








];





