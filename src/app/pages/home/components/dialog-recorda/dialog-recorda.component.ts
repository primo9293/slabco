import { Component, OnInit, Inject } from '@angular/core';
/* import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"; */

@Component({
  selector: 'app-dialog-recorda',
  templateUrl: './dialog-recorda.component.html',
  styleUrls: ['./dialog-recorda.component.css']
})
export class DialogRecordaComponent implements OnInit {

  constructor(
   /*  public dialogRef: MatDialogRef<DialogRecordaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any */ ) {
     /*   console.log('data',data); */
    }


  ngOnInit(): void {
  }

  /* close(opcion) {
    if (opcion === 'Cancelar') return this.dialogRef.close({ opcion })
    if (opcion === 'Descartar') return this.dialogRef.close({ opcion })
    if (opcion === 'Aceptar') return this.dialogRef.close({ opcion })
  } */

}
