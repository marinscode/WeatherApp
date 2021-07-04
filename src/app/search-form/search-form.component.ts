import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;
  isShowing = false;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'city': new FormControl('Livingston')
    });
  }

  onSearch() {
    this.weatherService.getWeather(this.form.value.city);
    this.form.reset();
    this.isShowing = true;
  }

  clearCards() {
    this.isShowing = false;
    this.weatherService.clearWeatherData();
  }

}
