import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home-Component/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes =[
  ///{path: 'user/new', component : UsersPostComponent},
 /// {path: 'user', component : UsersGetComponent},
 //// {path: 'profile', component : ProfileGetComponent},
  {path: '', component : HomeComponent}
 //// {path: '**', component : NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
