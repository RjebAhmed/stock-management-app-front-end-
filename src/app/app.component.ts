import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { AddMagasinComponent } from './pages/add-magasin/add-magasin.component';
import { ProduitService } from './services/produit.service';
import { MagasinService } from './services/magasin.service';
import { Magasin } from './model/Magasin';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Produit } from './model/Produit';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-boot';

  displayedColumns: string[] = [ 'nom', 'lieu','produit'];
  displayedColumns2: string[] = ['description', 'prixAchat', 'prixVente','quantiteStock','delete'];

selectedID=0;
   magasins: Magasin[] = [];
   produits: Produit[] = [];
   magProduits: Produit[] = [];
  searchKey: string = ""
  nom: string | undefined;
  lieu: string | undefined;

  ngAfterViewInit() {
    this.getMagasins();
    this.getProduits();
    this.getMagProduits(1);
    console.log("aaaaaa" + this.magasins.length);


  }
  ngOnInit(): void {
    this.getMagasins();
    this.getProduits();
    this.getMagProduits(1);
    console.log("aaaaaa" + this.magasins.length);

  }

  constructor(private ms: MagasinService,
    public dialog: MatDialog,
    private ps: ProduitService) {
    this.getMagasins();
    console.log("aaaaaa" + this.magasins.length);

  }

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

  getProduits(): void {
    this.ps.getProduits().subscribe(
      (responce: Produit[]) => {
        this.produits = responce;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  getMagProduits(id: number): void {
this.selectedID=id;
    this.ps.getMagasinProduit(id).subscribe(
      (responce: Produit[]) => {
        this.magProduits = responce;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

openAddMagasinPage(){
  const dialogRef = this.dialog.open(AddMagasinComponent, {

    width: '300px', maxHeight: '600px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
this.getMagasins(); 

});
}

openAddProduitPage(){
  const dialogRef = this.dialog.open(AddProduitComponent, {

    width: '300px', maxHeight: '930px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
this.getMagProduits(this.selectedID);

});
}
public deleteProduit(id: number): void {
  this.ps.deleteProduit(id).subscribe(
    (response: void) => {
      console.log(response);
      this.getMagProduits(this.selectedID);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
}
