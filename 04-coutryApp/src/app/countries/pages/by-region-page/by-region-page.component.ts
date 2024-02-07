import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/Region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  @Input()
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  searchRegion(region: Region) {
    this.selectedRegion = region;

    this.isLoading = true;

    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
