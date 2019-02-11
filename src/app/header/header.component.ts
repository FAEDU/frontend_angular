import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  showPage :boolean= false;
  public loggedIn:boolean=true;
  constructor(private loaderService: LoaderService) {
  
   }

  ngOnInit() {
    if(localStorage.getItem('id')!==undefined)
      this.loggedIn=true;
    this.loaderService.display(true);
    setTimeout(()=>{
      this.showPage = true
      this.loaderService.display(false);
    },400);
  }

}
