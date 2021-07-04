import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  isLoading = false;
  weatherData;
  today: number = Date.now();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.weatherService.getWeatherListener()
    .subscribe(data => {
      this.weatherData = data.weather;
      console.log(this.weatherData);
      this.isLoading = false;
    });
  }
}
