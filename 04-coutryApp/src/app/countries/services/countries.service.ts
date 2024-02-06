import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private API_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const URL = `${this.API_URL}/alpha/${code}`;
    return this.http.get<Country[]>(URL).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const URL = `${this.API_URL}/capital/${term}`;

    return this.http.get<Country[]>(URL).pipe(catchError(() => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const URL = `${this.API_URL}/name/${term}`;
    return this.http.get<Country[]>(URL).pipe(catchError(() => of([])));
  }

  searchRegion(term: string): Observable<Country[]> {
    const URL = `${this.API_URL}/region/${term}`;
    return this.http.get<Country[]>(URL).pipe(catchError(() => of([])));
  }
}
