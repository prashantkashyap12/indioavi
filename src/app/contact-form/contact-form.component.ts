import { Component } from '@angular/core';
import { GetContactService } from '../service/get-contact.service';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {


  database = [
    {firstName:"hi",LastName:"by",contactView:"9999",emailView:'test@gmail.com',comment:'ops'}
  ];

  private getContact = 'https://indiba-5c73d-default-rtdb.firebaseio.com/testing.json';
  constructor(private _http:HttpClient, private _dataSErvice:GetContactService){}
  ngOnInit(){
    this.ShowData();
  }
  dataDel(a:any){
    alert("You don't have permission?")
  }
  ShowData(){
    this._http.get(this.getContact)
    .pipe(map(res=>{
      const data = Object.values(res);
      this.database = data
    }))
    .subscribe(res=>{ })
  }


}
