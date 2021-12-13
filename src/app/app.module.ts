import { ProduitService } from './services/produit.service';
import { MagasinService } from './services/magasin.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { AddMagasinComponent } from './pages/add-magasin/add-magasin.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AddMagasinComponent,
    AddProduitComponent,
  ],
  imports: [
    BrowserModule, MatSliderModule,MatNativeDateModule,
    AppRoutingModule,MatPaginatorModule,MatTableModule,
    ReactiveFormsModule,MatFormFieldModule,MatIconModule,
    HttpClientModule,MatDialogModule,
     FormsModule, BrowserAnimationsModule,MatCardModule
  ],
  providers: [MagasinService, ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
