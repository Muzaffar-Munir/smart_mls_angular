import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties-characteristics',
  templateUrl: './properties-characteristics.component.html',
  styleUrls: ['./properties-characteristics.component.scss']
})
export class PropertiesCharacteristicsComponent implements OnInit {
    @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
