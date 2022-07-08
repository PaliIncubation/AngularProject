import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
positionX:any="";
positionY:any="";
  constructor(public dataVal:DataService) { }

  ngOnInit(): void {
  }
  getValue(e:any){
    if(this.positionX !== "" && this.positionY !=="" ){
      this.dataVal.addNewDiv(this.positionX,this.positionY);
  }
  }

}
