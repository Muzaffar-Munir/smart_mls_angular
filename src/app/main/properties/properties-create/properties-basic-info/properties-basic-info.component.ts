import { fuseAnimations } from './../../../../../@fuse/animations/index';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-properties-basic-info',
  templateUrl: './properties-basic-info.component.html',
  styleUrls: ['./properties-basic-info.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class PropertiesBasicInfoComponent implements OnInit {
    @Input() form: FormGroup;
    years: any;
  constructor() {
    const newArray: any[] = [];
    const Currentyear = new Date().getFullYear();
    for (let i = Currentyear + 3; i >= 1950; i--) {
      newArray.push(i);
    }
    this.years = newArray;
   }

  ngOnInit(): void {
  }

}
