import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-properties-create',
    templateUrl: './properties-create.component.html',
    styleUrls: ['./properties-create.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class PropertiesCreateComponent implements OnInit {
    propertiesForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
    ) { 
        this.propertiesForm = this.createPropertiesForm();

    }

    ngOnInit(): void {
        this.propertiesForm = this._formBuilder.group({
            _id: [{ value: '', disabled: true }],
            reference: [{ value: '', disabled: false }],
            external_reference: [],
            agency_reference: [],
            own: [{ value: true, disabled: false }],
            mls: [{ value: false, disabled: false }],
            is_shared: [{ value: false, disabled: false }],
            exclusive: [],
            listing_agency: [],
            listing_agency_name: [],
            listing_agent: [],
            listing_agent_name: [],
            offices: [{ value: [], disabled: false }],
            update_offices: { value: true, disabled: false },
            type_one: [],
            type_two: [],
            custom_categories: { value: [], disabled: false },
            mooring_type: [],
            listed_until: [],
            currency: [],
            status: [{ value: [], disabled: false }],
            occupancy_status: [{ value: 'Not occupied', disabled: false }],
            sale: [{ value: false, disabled: false }],
            share_sale: [{ value: false, disabled: false }],
            transfer: [{ value: false, disabled: false }],
            rent: [{ value: false, disabled: false }],
            share_rent: [{ value: false, disabled: false }],
            nude_sale: [{ value: false, disabled: false }],
            price_from: (''),
            price_to: (''),
            cart_user: this._formBuilder.group({
                username: [],
                _id: []
            }),
            featured: [],
            new_construction: [],
            license_first_occuption: [],
            year_built: [],
            year_reformed: [],
            property_name: [],
            address_country: [],
            region: [],
            address_province: [],
            address_city: [],
            location: [],
            urbanisation: [],
            latitude: [],
            longitude: [],
            block: [],
            portal: [],
            parking_number: [],
            parking_price: [],
            doorbell: [],
            alarm_code: [],
            keysafe: [],
            created_by: [],
            updated_by: [],
            agency: [],
            private_info_object: this._formBuilder.group({
                ['agency_id'] : this._formBuilder.group({
                    address: this._formBuilder.group({
                        formatted_address: []
                    }),
                    address_postal_code: [],
                    address_street: [],
                    address_street_number: [],
                    apartment_no: [],
                    latitude: [],
                    longitude: [],
                    address_comments: [],
                    commission_unit: [],
                    commission: [],
                    commission_unit_owner: [],
                    commission_owner: [],
                    commission_unit_split: [],
                    commission_split: [],
                    private_info: [],
                    owner: [],
                    mls_info: [],
                    sign_on_property: [],
                    mortgage: [],
                    mortgage_value: [],
                    key_possession: [],
                    keyholder_company: [],
                    keyholder_phone: [],
                    key_reference: [],
                    contact_name: [],
                    contact_phone: []
                })
            }),
        });
    }


    saveProduct(): void {
        console.log('save')
    }

    addProduct(): void {
        console.log('add');
    }
    createPropertiesForm(): FormGroup {
        return this._formBuilder.group({
            id: [''],
            name: [''],
            handle: [''],
            description: [''],
            categories: [''],
            tags: [''],
            images: [''],
            priceTaxExcl: [''],
            priceTaxIncl: [''],
            taxRate: [''],
            comparedPrice: [''],
            quantity: [''],
            sku: [''],
            width: [''],
            height: [''],
            depth: [''],
            weight: [''],
            extraShippingFee: [''],
            active: [''],
        });
    }
}
