import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  
  private messageSource = new BehaviorSubject({ type:'',data:[]});
  currentData= this.messageSource.asObservable();

  changeDataMessage(message: any) {
    console.log(message)
    this.messageSource.next(message)
  }
}