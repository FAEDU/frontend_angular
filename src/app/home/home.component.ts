import { Component, ViewEncapsulation , OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class HomeComponent implements OnInit {
  showPage : boolean = false;
  public response;
  public desc;public Name;public time;public date;
  public events=[];
  detail=
  {
    name :'',
    emailID : '',
    query : ''
  }
  constructor(private commonService :CommonService, private loaderService: LoaderService,private router:Router) {
    this.commonService.showHeadernFooter(true);

   }
   

  ngOnInit() {
    this.loaderService.display(true);
    setTimeout(()=>{
      this.showPage = true
      this.loaderService.display(false);
    },400);
    this.commonService.getevents().subscribe(res=>{
      this.response=res
      this.upcoming(this.response);
    })
    
  }

  upcoming(res){
    var len=res.length;
    if(res[len-1]){
      this.events.push(res[len-1]);
    }
    if(res[len-2]){
      this.events.push(res[len-2]);
    }
    if(res[len-3]){
      this.events.push(res[len-3]);
    }
    console.log(this.events);
  }
  

  submit()
  {
    this.loaderService.display(true);
    this.commonService.scoreForm(this.detail).subscribe((result)=>{
      this.loaderService.display(false);
      this.detail.name ='';
      this.detail.emailID ='';
      this.detail.query ='';
      alert("Thanks for contacting us we will get back to you of your dream university withing 24 hours");

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
