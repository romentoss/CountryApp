
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, filter, map, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCapital(term:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
     catchError(error => {
      console.log(error);
      return of([])
     })
    );
  }

  searchCountry(country:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${country}`
    return this.http.get<Country[]>(url)
    .pipe(
     catchError(error => {
      console.log(error);
      return of([])
     })
    );
  }
  searchRegion(region:string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
    .pipe(
     catchError(error => {
      console.log(error);
      return of([])
     })
    );
  }

}
