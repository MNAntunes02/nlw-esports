import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
