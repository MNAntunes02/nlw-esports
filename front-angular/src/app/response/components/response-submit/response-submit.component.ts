import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-response-submit',
  templateUrl: './response-submit.component.html',
  styleUrls: ['./response-submit.component.css']
})
export class ResponseSubmitComponent implements OnInit {

  constructor( 
                public dialogRef: MatDialogRef<ResponseSubmitComponent>,
              ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    // this.dialogRefMain.close();
    this.dialogRef.close();
  }

}
