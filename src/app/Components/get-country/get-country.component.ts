import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/classes/pais';
import { CountryService } from 'src/app/services/country.service';
import { Pages } from 'src/app/classes/pages';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styleUrls: ['./get-country.component.css']
})
export class GetCountryComponent{
  page: Pages;
  returnPage : Pages;
  id : any;

  @Input() pagenumber = 1;

  

  constructor (private c : CountryService){
    this.c.find(1)
    .subscribe(page => {
      this.page = page;
              console.log(this.page);
    });

    this.returnPage = this.page;
  }

  find(){
    if(( this.pagenumber > 0) && (this.pagenumber <= this.page.total_pages) ){
      this.c.find(this.pagenumber)
      .subscribe(page => {
        this.page = page;
                console.log(this.page);
              });
    }
  }
  

  delete(id : number){
    this.c.deleteById(id)
    .subscribe(id => {
      this.id = id;
              console.log(this.page);
            });
  }

}
