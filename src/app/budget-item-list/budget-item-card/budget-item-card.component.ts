import { Component ,OnInit, Input, EventEmitter, Output} from '@angular/core';
import { BudgetItem } from 'src/budget-item.model';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem= new BudgetItem(0, '');

  @Output() xButtonClick:EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick:EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog){
  }

  ngOnInit(){}

  onXButtonClick(){
    this.xButtonClick.emit();
  }

  onCardClicked(){
    this.cardClick.emit();
  }


}
