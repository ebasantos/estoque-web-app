import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home-Component/home/home.component';
import { AppComponent } from './app.component';
import { GetCountryComponent } from './Components/get-country/get-country.component';
import { PostContryComponent } from './Components/post-country/post-contry.component';

const routes: Routes =[
  {path: 'newcountry', component : PostContryComponent},
  {path: 'pais/:id', component : GetCountryComponent},
  {path: 'pais', component : GetCountryComponent},
  {path: '', component : HomeComponent}
 //// {path: '**', component : NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
