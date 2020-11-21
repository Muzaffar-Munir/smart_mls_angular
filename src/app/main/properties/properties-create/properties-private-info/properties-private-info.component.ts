import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties-private-info',
  templateUrl: './properties-private-info.component.html',
  styleUrls: ['./properties-private-info.component.scss']
})
export class PropertiesPrivateInfoComponent implements OnInit {
    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
