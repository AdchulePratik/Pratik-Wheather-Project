import { Component } from '@angular/core';
import { WheatheringService } from '../wheathering.service';

@Component({
  selector: 'app-wheather-forecasting',
  templateUrl: './wheather-forecasting.component.html',
  styleUrls: ['./wheather-forecasting.component.scss']
})
export class WheatherForecastingComponent {
  wheatherdata:any;

  constructor(private wheather: WheatheringService){

  }

  getWheatherChecking(city:any){
    this.wheather.getWheatherData(city).subscribe((res)=>{
      console.log(res)
      this.wheatherdata = res



    })

  }



}
