import { fuseAnimations } from './../../../../@fuse/animations/index';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents-create',
  templateUrl: './agents-create.component.html',
  styleUrls: ['./agents-create.component.scss'],
  animations: fuseAnimations
})
export class AgentsCreateComponent implements OnInit {
    agents: any;
    dateToday= new Date();
  constructor(private _formBuilder: FormBuilder) { 

    this.agents = this._formBuilder.group({
        _id: [],
        first_name: [{ value: '', disabled: false }],
        last_name: [{ value: this.dateToday, disabled: false }],
        phone: [{ value: '', disabled: false }, Validators.required],
        email: [{ value: '', disabled: false }, Validators.required],
        image: [],
        office_phone: [],
        reports_to: [],
        fax: [{ value: '', disabled: false }],
        date: [{ value: this.dateToday, disabled: false }], 
        website: [{ value: '', disabled: false }],
        feed_systems: [{ value: '', disabled: false }],
        content: [{ value: '', disabled: false }],
        logo: this._formBuilder.group({
            name: [{ value: '', disabled: false }],
        }),
        owner_name: [{ value: '', disabled: false }, Validators.required],
        owner_phone: [{ value: '', disabled: false }, Validators.required],
        owner_email: [{ value: '', disabled: false }, Validators.required],
        complete_address: [{ value: '', disabled: false }],
        country: [{ value: '', disabled: false }],
        region: [{ value: '', disabled: false }],
        
        city: [{ value: '', disabled: false }],
        complete_address_postal_code: [{ value: '', disabled: false }],
        complete_address_street: [{ value: '', disabled: false }],
        complete_address_street_number: [{ value: '', disabled: false }],
        comments: [{ value: '', disabled: false }],
        fiscal_name: [{ value: '', disabled: false }, Validators.required],
        commercial_name: [{ value: '', disabled: false }, Validators.required],
        agency_email: [{ value: '', disabled: false }],
        status: [{ value: '', disabled: false }],
        type: [{ value: 0, disabled: false }],
        currency: [{ value: 0, disabled: false }],
        uom: [{ value: '', disabled: false }],
        fiscal_address: [{ value: '', disabled: false }],
        fiscal_address_country: [{ value: '', disabled: false }],
        fiscal_address_region: [{ value: '', disabled: false }],
        fiscal_address_province: [{ value: '', disabled: false }],
        fiscal_address_city: [{ value: '', disabled: false }],
        fiscal_address_street: [{ value: '', disabled: false }],
        fiscal_address_street_number: [{ value: '', disabled: false }],
        fiscal_address_additional_info: [{ value: '', disabled: false }],
        vat_number: [{ value: '', disabled: false }],
        info: [{ value: '', disabled: false }],
        agency_reference: [{ value: '', disabled: false }],
        email_from: [{ value: '', disabled: false }],
        stripe_sk: [{ value: '', disabled: false }],
        web_site: [{ value: '', disabled: false }],
        pdf_external_ref: [{ value: '', disabled: false }],
        time_zone: [{ value: '', disabled: false }],
        mailchimp_key: [{ value: '', disabled: false }],
        map: this._formBuilder.group({
            lat: [{ value: '', disabled: false }],
            lng: [{ value: '', disabled: false }],
            zoom: [{ value: '', disabled: false }],
        }),
    });
  }

  ngOnInit(): void {
  }
  saveAgents(): any{

  }
}
