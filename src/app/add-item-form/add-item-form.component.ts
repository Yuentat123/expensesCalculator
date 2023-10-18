import { Component ,EventEmitter,Input, Output, OnInit} from '@angular/core';
import{NgForm} from '@angular/forms'
import { BudgetItem } from 'src/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem(0,'');
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean=true;

  ngOnInit(){
    if(this.item.amount != 0){
      this.isNewItem=false;
    }else{
      this.isNewItem=true;
      this.item= new BudgetItem(0,'');
    }
  }

  constructor(){}

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
