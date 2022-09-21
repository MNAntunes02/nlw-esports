import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {

  @Input() urlImage!: string;
  @Input() name!: string;
  @Input() ad!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
