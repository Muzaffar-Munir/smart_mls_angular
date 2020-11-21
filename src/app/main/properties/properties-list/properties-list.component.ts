import { takeUntil, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, OnDestroy } from '@angular/core';

export interface Transaction {
    item: string;
    cost: number;
  }

@Component({
    selector: 'app-properties-list',
    templateUrl: './properties-list.component.html',
    styleUrls: ['./properties-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})


export class PropertiesListComponent implements OnInit, OnDestroy {

    displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];


    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    getTotalCost(): any {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
      }
    ngOnInit(): void {
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

