import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //getting api
  getapi(argu:any){
   return this.http.get('https://pokeapi.co/api/v2/pokemon/'+argu)
  }
}
