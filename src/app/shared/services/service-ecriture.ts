import { Injectable } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { Subscription,Observable,of, map } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ServiceEcriture {

private isHover : boolean=true;



  // private exoId: number=0;


constructor(){}


setIsHover() : boolean{




  return this.isHover;
}



//   private Exo : boolean=false;


// getExoName() : boolean{



// return this.Exo=false;
// }



  
}
