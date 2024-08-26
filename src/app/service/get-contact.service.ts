import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetContactService {

  constructor(private _http:HttpClient) { }

  private getContact = 'https://sata-a0b6a-default-rtdb.europe-west1.firebasedatabase.app/testing.json';

  getData(){
   return  this._http.get(this.getContact)
  }

}
