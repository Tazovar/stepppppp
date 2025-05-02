import { CanActivateFn } from '@angular/router';


function haveUserPermision(userAge:number):boolean{
   if(userAge >= 18){
    return true
   }
   return false
}
export const activateGuard: CanActivateFn = (route, state) => {
  return haveUserPermision(18);
};
