import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/common.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  showPage: boolean  = false;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.display(true);
    setTimeout(()=>{
     this.showPage = true
     this.loaderService.display(false);
    },400);
  }

}
