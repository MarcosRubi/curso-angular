import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  @Input()
  public countries: Country[] = [];

  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
    this.countries = this.countriesService.cacheStore.byCountries.countries;
  }

  searchByCity(country: string): void {
    this.isLoading = true;

    this.countriesService.searchCountry(country).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
