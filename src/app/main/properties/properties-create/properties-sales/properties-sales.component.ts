import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties-sales',
  templateUrl: './properties-sales.component.html',
  styleUrls: ['./properties-sales.component.scss']
})
export class PropertiesSalesComponent implements OnInit {
    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
