import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      'city': new FormControl('Livingston', [Validators.required, Validators.minLength(3)])
    });
  }

  get city() { return this.form.get('city')}

  onSearch() {
    if(this.form.valid) {
      this.weatherService.getWeather(this.form.value.city);
    }
    this.form.reset();
    this.isShowing = true;
  }

  clearCards() {
    this.isShowing = false;
    this.form.reset();
    this.weatherService.clearWeatherData();
  }

}
