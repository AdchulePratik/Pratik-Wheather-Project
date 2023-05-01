import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheatherForecastingComponent } from './wheather-forecasting/wheather-forecasting.component';

const routes: Routes = [
  {path:'wheather',component: WheatherForecastingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
