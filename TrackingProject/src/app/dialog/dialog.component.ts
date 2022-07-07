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
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  getValue(e:any){
    console.log(this.positionX,this.positionY);
  }

}
