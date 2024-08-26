import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interviewData } from '../interface/master.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private _http:HttpClient) { }

  private inerviewAPI = "https://sata-a0b6a-default-rtdb.europe-west1.firebasedatabase.app/interview.json";

  //POST DATA SERVICE
  datapost(data: any[] ){
    this._http.post(this.inerviewAPI,data);
  }

  //GET DATA
  getdata(){
    return this._http.get<interviewData>(this.inerviewAPI)
  }

}
