import { Component } from '@angular/core';
import { BudgetItem } from 'src/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent {
  budgetItems : BudgetItem[]= new Array<BudgetItem>();

  totalBudget:number=0;

  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget +=newItem.amount;
  }

  deleteItem(item: BudgetItem){
    let index= this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget-=item.amount;
  }

  updateItem(updateEvent:UpdateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
