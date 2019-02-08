import { Component, OnInit } from '@angular/core';
import { LoaderService, CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  showPage: boolean = false;
  response : any;
  universityData =[];
  public universitydata=[];
  public selectedcountry="";
  public countries=[];
  public selectedcourse="";
  public courses=[]
  constructor(private loaderService: LoaderService, private commonService :CommonService,private router:Router) { }

  ngOnInit() {
    this.getUniversities();
    this.loaderService.display(true);
    setTimeout(()=>{
      this.showPage = true
      this.loaderService.display(false);
    },400);
    
  }

  getUniversities()
  {
    this.loaderService.display(true);
    this.commonService.getUniversitiesData().subscribe((result)=>{
      this.loaderService.display(false);
      this.response  =  result;
      console.log(this.response);
      this.universitydata=this.universityData = this.response;
      this.getcountries();
      this.getcourses();
    });
  }

  getcourses(){
    var course=this.universityData.map(i=>{
      return i.courses;
    })
    console.log(course)
    course.forEach(i=>{
      i.map(j=>{
        if(this.courses.indexOf(j) === -1)
          this.courses.push(j);
      })
    })
    console.log(this.courses);
  }

  getcountries(){
    var n=this.universityData.map(i=>{
      return i.Country
    })

    n.forEach(i=>{
      if(this.countries.indexOf(i)=== -1)
        this.countries.push(i);
    })
    console.log(this.countries);
  }

  selectedcount(e){
   this.selectedcountry=e.target.value;
   console.log(this.selectedcountry);
  }

  selectedcour(e){
    this.selectedcourse=e.target.value;
    console.log(this.selectedcourse);
  }

  apply(){
    this.universitydata=this.universityData;
    if(this.selectedcountry!==""){
    this.universitydata=this.universitydata.filter(i=>{
      if(i.Country===this.selectedcountry)
        return i;
    })
    console.log(this.universitydata)
  }
  if(this.selectedcourse!==""){
    this.universitydata=this.universitydata.filter(i=>{
      if(this.check(i.courses))
        return i;
    })
    console.log(this.universitydata)
  }
}

  check(obj):Observable<boolean>{
    var t;
    obj.forEach(i=>{
      if(i===this.selectedcourse)
        return t=1;
    })
    return t;
  }

  reset(){
    this.universitydata=this.universityData;
    this.selectedcountry="";
  }
  knowmore(id,img){
    console.log(id,img);
    console.log(localStorage.getItem('Id'));
    if(localStorage.getItem('id')===null)
      this.router.navigateByUrl('/login/student');
    else
      this.router.navigateByUrl(`/universitydetail/${id}/${img}`)
  }
}
