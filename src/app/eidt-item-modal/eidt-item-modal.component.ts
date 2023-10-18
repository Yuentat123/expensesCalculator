import { Component ,Input, Output, EventEmitter, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from 'src/budget-item.model';

@Component({
  selector: 'app-eidt-item-modal',
  templateUrl: './eidt-item-modal.component.html',
  styleUrls: ['./eidt-item-modal.component.scss']
})
export class EidtItemModalComponent {

  @Output() xButtonClick:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public dialogRef:MatDialogRef<EidtItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem
  ){}

  onXButtonClick(){
    this.dialogRef.close();
  }
  
  onSubmitted(updatedItem:BudgetItem){
    this.dialogRef.close(updatedItem);
  }
}
