import { Routes } from '@angular/router';
//import { BarDeNav } from '../shared/component/navigation/bar-de-nav/bar-de-nav';
import { BarDeNav } from './shared/component/navigation/bar-de-nav/bar-de-nav';
import { ExoComponent } from './shared/component/exo-component/exo-component';
import { ContactComposant } from './shared/component/contact-composant/contact-composant';


export const routes: Routes = [


//   {path:'',component:BarDeNav},
{path:'home/exo',component:ExoComponent},
{path:'home/contact', component:ContactComposant}









];





