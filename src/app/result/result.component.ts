import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @ViewChild('data') TestName!:ElementRef;

  logicBtn:boolean = true;

  private getInter = 'https://indiba-5c73d-default-rtdb.firebaseio.com/interview.json';
  constructor(private _http:HttpClient){}
  ngOnInit(){
    this.dataview()
    console.log("PK");

  }
  result:any = [
    {Job_Profile:'test',name:'Karan',F_name:'aman kishor', dob:'26/Aug/1996',email:'test@gmail.com',contact:988978979, area_pin:980980,J_loction:'agra', status:'approved'},
  ];
  // VIEW & UPDATE 
  @ViewChild('jobprofile') jobpro!:ElementRef;
  @ViewChild('fname') fname!:ElementRef;
  @ViewChild('fatherNaem') fatherNaem!:ElementRef;
  @ViewChild('dob') dob!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('contact') contact!:ElementRef;
  @ViewChild('areapin') areapin!:ElementRef;
  @ViewChild('jobloct') jobloct!:ElementRef;
  @ViewChild('status') status!:ElementRef;
  dataFil(i:any){
    this.logicBtn = false;
    console.log(this.result[i]);
    this.jobpro.nativeElement.value = this.result[i].Job_Profile;
    this.fname.nativeElement.value = this.result[i].name;
    this.fatherNaem.nativeElement.value = this.result[i].F_name;
    this.dob.nativeElement.value = this.result[i].dob;
    this.email.nativeElement.values= this.result[i].email;
    this.contact.nativeElement.value = this.result[i].contact;
    this.areapin.nativeElement.value = this.result[i].area_pin;
    this.jobloct.nativeElement.value = this.result[i].J_loction;
    this.status.nativeElement.value = this.result[i].status;
  }
  
  dataupdate(info:any){
    this.logicBtn = true;
    console.log(info);
  }

  //POST DATA
  dataAdd(data:any){
    console.log("data add");
    this._http.post(this.getInter,data).subscribe(res=>{console.log(res)}) 
  }
  //GET DATA
  dataview(){
    this._http.get(this.getInter)
    .pipe(map(res=>{
      console.log(res);
      let datain = Object.values(res)
      this.result = datain;
      console.log(this.result[1]);
    }))
    .subscribe(res=>{
    })
  }
}