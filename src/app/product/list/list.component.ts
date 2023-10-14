import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() selectedItem!: any[];
  totalAmount:number=0;

  countInc(row: any) {
    row.count++;
  }
  countDec(row: any) {
    row.count--;
  }
  remove(row: any, index: number) {
    this.selectedItem.splice(index, 1);
  }

  getTotalAmount(){
    this.totalAmount=0;
    this.selectedItem.forEach(
      (x:any)=>{
        this.totalAmount += (x.price * x.count);
      }
    )
  }

  ngDoCheck(){
    this.getTotalAmount();
  }
}
