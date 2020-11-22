import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-contact',
  templateUrl: './agency-contact.component.html',
  styleUrls: ['./agency-contact.component.scss']
})
export class AgencyContactComponent implements OnInit {

    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): any {
  }

}
