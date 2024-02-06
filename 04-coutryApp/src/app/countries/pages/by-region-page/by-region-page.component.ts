import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  @Input()
  public regions: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchRegion(region: string) {
    this.countriesService.searchRegion(region).subscribe((regions) => {
      this.regions = regions;
    });
  }
}
