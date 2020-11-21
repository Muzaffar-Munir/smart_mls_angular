import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties-features',
  templateUrl: './properties-features.component.html',
  styleUrls: ['./properties-features.component.scss']
})
export class PropertiesFeaturesComponent implements OnInit {
    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
