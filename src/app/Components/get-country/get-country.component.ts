import { Component } from '@angular/core';
import { Country } from 'src/app/classes/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styleUrls: ['./get-country.component.css']
})
export class GetCountryComponent{
  country: Country[];

  constructor(cService :CountryService ) {
    cService.find().subscribe( country => { this.country = country;
                            console.log(this.country)});
   }

}
