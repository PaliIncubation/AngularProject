import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  data:any=[];
  status!:number;
  constructor(public dataService:DataService) { 
  }
  

  ngOnInit(): void {
    this.data = this.dataService.data;
  }
  createDivEle(event:any){
    this.dataService.addNewDiv(event.x+"px",event.y+"px");
  }

  removeDiv(i:number){
    this.dataService.deleteDiv(i)
  }
}
