import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  @Input()
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCity(country: string): void {
    this.countriesService
      .searchCountry(country)
      .subscribe((countries) => (this.countries = countries));
  }
}