import { MatDialogRef } from '@angular/material/dialog';
import { ProduitService } from './../../services/produit.service';
import { MagasinService } from './../../services/magasin.service';
import { Produit } from './../../model/Produit';
import { Magasin } from './../../model/Magasin';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  magasins: Magasin[] = [];
  magProduits: Produit[] = [];
  selectedValue: number = 0;
  description: string = "";
  prixAchat: number = 0;
  prixVente: number = 0;
  dateEnregistrement: string = "";
  quantiteStock: number = 0;
  idMag: number = 0;
  constructor(private ms: MagasinService,
    private ps: ProduitService, public dialogRef: MatDialogRef<AddProduitComponent>
  ) { }
  getMagasins(): void {
    this.ms.getMagasins().subscribe(
      (responce: Magasin[]) => {
        this.magasins = responce;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  selected: number = 0;



  selectOption(el: any) {
    this.selected = el.value;
    console.log(this.selected);

  }
  addProduit() {
    console.log(this.selected);
    let mag = this.magasins[0];
    this.magasins.forEach((element: Magasin) => {
      if (element.id == this.selected) {
        mag = element
      }
    });
    console.log(mag);
    console.log(mag);

    let prod: Produit = { id: 0, prixAchat: this.prixAchat, prixVente: this.prixVente, description: this.description, dateEnregistrement: this.dateEnregistrement, quantiteStock: this.quantiteStock, mag: mag };
    console.log(prod);


    this.ps.addProduit(prod).subscribe(
      (response: Produit) => {
        console.log(response);
        this.dialogRef.close();


      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );



  }

  ngOnInit(): void {
    this.getMagasins();

  }
  onClose() {
    this.dialogRef.close();

  }
}
