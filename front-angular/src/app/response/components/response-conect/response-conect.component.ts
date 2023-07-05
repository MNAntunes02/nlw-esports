import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  discord: string
}

@Component({
  selector: 'app-response-conect',
  templateUrl: './response-conect.component.html',
  styleUrls: ['./response-conect.component.css']
})
export class ResponseConectComponent implements OnInit {

  faClipboard = faClipboard;

  constructor( 
    public dialogRef: MatDialogRef<ResponseConectComponent>,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
  // this.dialogRefMain.close();
  this.dialogRef.close();
  }

  // abrir snackbar
  openSnackBar(message: string, classColor:  string) {
    this._snackBar.open(message , '' , {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: classColor
    });
  }

  copyDiscord(){
    try {
      this.clipboard.copy(this.data.discord);
      this.openSnackBar('Usuário Discord copiado!', 'default-snackbar')
    } catch (error) {
      this.openSnackBar('Erro ao copiar', 'red-snackbar')
    }
  }

}
