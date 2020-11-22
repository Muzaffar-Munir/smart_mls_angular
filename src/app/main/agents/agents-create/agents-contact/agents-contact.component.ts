import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agents-contact',
  templateUrl: './agents-contact.component.html',
  styleUrls: ['./agents-contact.component.scss']
})
export class AgentsContactComponent implements OnInit {
    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
