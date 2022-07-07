import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
positionX:any="";
positionY:any="";
  constructor() { }

  ngOnInit(): void {
  }
  getValue(e:any){
    console.log(this.positionX,this.positionY);
  }

}
