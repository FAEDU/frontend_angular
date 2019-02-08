import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events;
  public desc;public Name;public time;public date;

  constructor(private service:CommonService) { }

  ngOnInit() {
    this.getevents();
  }

  getevents(){
    this.service.getevents().subscribe(res=>{
      this.events=res;
      console.log(this.events);
    })
  }
  eventclicked(desc,name,time,date){
    this.Name=name;
    this.desc=desc;
    this.time=time;
    this.date=date;
    console.log(desc,name);
  }

}
