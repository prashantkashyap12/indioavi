import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InterviewService } from '../service/interview.service';
import { interviewData } from '../interface/master.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {
  

  @ViewChild('appForm') myForm!:NgForm;

  @ViewChild('jobprofile') jobpro!:ElementRef;
  @ViewChild('fname') fname!:ElementRef;
  @ViewChild('fatherNaem') fatherNaem!:ElementRef;
  @ViewChild('dob') dob!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('contact') contact!:ElementRef;
  @ViewChild('areapin') areapin!:ElementRef;
  @ViewChild('jobloct') jobloct!:ElementRef;
  @ViewChild('status') status!:ElementRef;
  private inerviewAPI = "https://indiba-5c73d-default-rtdb.firebaseio.com/interview.json";
  private inerviewAPIDel = "https://indiba-5c73d-default-rtdb.firebaseio.com/interview";

  constructor(private _http:HttpClient, private _mainservice:InterviewService){ }
  updatebtn:any = true;
  ngOnInit(){
    this.getdata();
  }

  result:any = [
     {Job_Profile:'test',name:'Karan',F_name:'aman kishor', dob:'26/Aug/1996',email:'test@gmail.com',contact:988978979, area_pin:980980,J_loction:'agra', status:'approved'},
  ];

  //PUT DATA with ARRAY
  dataPost(sata:any){
    this.result.push(sata)
    this._http.put(this.inerviewAPI,this.result).subscribe(res=>{
      console.log(res);
      alert("data has been Recored");
    })
  }
  //GET DATA with ARRAY
  getdata(){
    this._http.get(this.inerviewAPI).subscribe(res=>{
      console.log(res);
      this.result = res;
    })
  }
  //DELETE DATA with ARRAY
  delData(i:any){
    confirm("Do want to delete this product");
    var number = i
    this._http.delete(this.inerviewAPIDel+"/"+number+".json").subscribe(res=>{
      console.log(res);
    })
  }

  //EDIT DATA with :ElementRef ARRAY
  tempId:any; 
  editData(i:any){
    this.updatebtn = false;
    this.tempId = i;
    console.log(this.result[i].name);
      this.myForm.setValue({
      F_name:this.result[i].F_name,
      J_loction:this.result[i].J_loction, 
      Job_Profile:this.result[i].Job_Profile, 
      area_pin:this.result[i].area_pin,
      contact:this.result[i].contact,
      dob:this.result[i].dob,      
      email:this.result[i].email,
      name:this.result[i].name,
      status:this.result[i].status,
    })
  }
  
  //UPDATE DATA with :ElementRef ARRAY
  updateData(data:any){
      this.result[this.tempId] = {
      name:this.fname.nativeElement.value,
      F_name:this.fatherNaem.nativeElement.value,
      J_loction:this.jobloct.nativeElement.value,
      Job_Profile:this.jobpro.nativeElement.value, 
      area_pin:this.areapin.nativeElement.value,
      contact:this.contact.nativeElement.value,
      dob:this.dob.nativeElement.value,
      email:this.email.nativeElement.value,
      status:this.status.nativeElement.value,
    }
    this._http.put(this.inerviewAPI,this.result).subscribe(res=>{
      console.log(res);
      alert("data has been updated");
    })
  }
}
