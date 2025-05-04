import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  myTest:string = 'tazo';
  array:Array<any> = [];
  constructor() { }



  pushElementInArray(array:Array<any>,element:any){
    array.push(element)
  }



  getArray(){
    return this.array
  }

  isAuthorization(){
    return localStorage.getItem('token')
  }


}
