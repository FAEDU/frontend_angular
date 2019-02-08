import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {
  response :any;
  universityData:any;
  public imageurl;
  constructor(private commonService : CommonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUniversities();
  }

  getUniversities()
  {
    this.imageurl=this.route.snapshot.paramMap.get('image');
    console.log(this.imageurl);
    var parameter;
    this.route.params.subscribe( (params) =>{
       parameter = params;
      console.log(params) ;
    } );
     
    this.commonService.getUniversityData(parameter.id).subscribe((result)=>{
     this.response  =  result;
      this.universityData = this.response;
      console.log(this.universityData);
    });
  }
  

}
