import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-response-conect',
  templateUrl: './response-conect.component.html',
  styleUrls: ['./response-conect.component.css']
})
export class ResponseConectComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<ResponseConectComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
  // this.dialogRefMain.close();
  this.dialogRef.close();
  }
}
