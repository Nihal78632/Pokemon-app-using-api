import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDetailsPageComponent } from './all-details-page/all-details-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path:'' , component:WelcomePageComponent
  },
  {
    path:'pokemons' , component:AllDetailsPageComponent
  },
  {
    path:'pokemons/view-page/:name' , component:ViewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
