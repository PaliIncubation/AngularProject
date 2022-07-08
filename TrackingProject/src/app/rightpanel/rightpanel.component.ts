import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {

  constructor(public Data:DataService ) { }

  ngOnInit(): void {
  }
  removeElement(i:any){
    this.Data.deleteDiv(i);
  }
}
