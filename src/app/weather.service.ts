import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherData = [];

  private weatherUpdated = new Subject<any>();

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65a8bd6b1a21cfe8f34ab6efefab77a0&units=metric`)
      .subscribe(data => {
        this.weatherData.push(data);
        this.weatherUpdated.next({weather: [...this.weatherData]});
      });
  }

  getWeatherListener() {
    return this.weatherUpdated.asObservable();
  }
}
