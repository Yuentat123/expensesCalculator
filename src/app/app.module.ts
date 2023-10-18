import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { EidtItemModalComponent } from './eidt-item-modal/eidt-item-modal.component';
import{MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EidtItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
