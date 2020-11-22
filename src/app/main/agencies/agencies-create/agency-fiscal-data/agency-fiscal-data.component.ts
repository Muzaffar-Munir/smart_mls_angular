import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agency-fiscal-data',
  templateUrl: './agency-fiscal-data.component.html',
  styleUrls: ['./agency-fiscal-data.component.scss']
})
export class AgencyFiscalDataComponent implements OnInit {
    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): any {
  }

}
