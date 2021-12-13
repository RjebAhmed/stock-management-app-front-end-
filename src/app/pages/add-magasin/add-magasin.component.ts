import { AppComponent } from './../../app.component';
import { MagasinService } from './../../services/magasin.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Magasin } from 'src/app/model/Magasin';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-add-magasin',
  templateUrl: './add-magasin.component.html',
  styleUrls: ['./add-magasin.component.css']
})
export class AddMagasinComponent implements OnInit {
  nom: string ="";
  lieu: string ="";
  constructor(private ms:MagasinService,public dialogRef: MatDialogRef<AddMagasinComponent> ) { }
  
  ngOnInit(): void {
  }
  addMagasin(){
let mag:Magasin={id:0,nom:this.nom,lieu:this.lieu};
this.ms.addMagasins(mag).subscribe(
  (response: Magasin) => {
    console.log(response);
    this.dialogRef.close();


  },
  (error: HttpErrorResponse) => {
    alert(error.message);

  }
);
  }
  onClose() {
    this.dialogRef.close();

  }
}
