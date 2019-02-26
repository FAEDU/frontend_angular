import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-notloggeddashboard',
  templateUrl: './notloggeddashboard.component.html',
  styleUrls: ['./notloggeddashboard.component.css']
})
export class NotloggeddashboardComponent implements OnInit {

  constructor(private commonService:CommonService) {     this.commonService.showHeadernFooter(false);
  }

  ngOnInit() {
  }

}
