import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:{x:number,y:number}[]=[]
  Xvalue!:number
  Yvalue!:number
  constructor() { }
}
