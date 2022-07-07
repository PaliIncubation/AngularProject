import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  data:{x:string,y:string}[]=[
    {x:"33px",y:"45px"},
    {x:"100px",y:"45px"},
    {x:"195px",y:"45px"},
    {x:"275px",y:"45px"}
  ];
  isShowDialogBox:boolean=false;
  arrIndex!:any;

  addNewDiv(xVal:string,yVal:string){
    this.arrIndex=this.data.find(element => element.x==xVal&&element.y==yVal);
    if(!this.arrIndex){
      this.data.push({
        x:xVal,
        y:yVal
      });
    }
  }
  
  deleteDiv(index:number){
    this.data.splice(index,1);
  }
}
