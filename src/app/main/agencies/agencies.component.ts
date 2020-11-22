import { fuseAnimations } from './../../../@fuse/animations/index';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


export interface Transaction {
    item: string;
    cost: number;
  }
@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class AgenciesComponent implements OnInit {
    displayedColumns: string[] = ['item', 'cost'];
    transactions: Transaction[] = [
      {item: 'Beach ball', cost: 4},
      {item: 'Towel', cost: 5},
      {item: 'Frisbee', cost: 2},
      {item: 'Sunscreen', cost: 4},
      {item: 'Cooler', cost: 25},
      {item: 'Swim suit', cost: 15},
    ];
  constructor() { }

  ngOnInit(): any {
  }
  
  getTotalCost(): any {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
//   ngOnDestroy(): void
//   {
//       // Unsubscribe from all subscriptions
//       this._unsubscribeAll.next();
//       this._unsubscribeAll.complete();
//   }
}
