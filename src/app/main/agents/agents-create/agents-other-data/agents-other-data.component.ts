import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agents-other-data',
  templateUrl: './agents-other-data.component.html',
  styleUrls: ['./agents-other-data.component.scss']
})
export class AgentsOtherDataComponent implements OnInit {
@Input() form: FormGroup;
  constructor() { }

  ngOnInit(): any {
  }

}
