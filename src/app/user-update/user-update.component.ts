import { HttpClient } from '@angular/common/http';
import { Component,ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  @ViewChild('dataApplication') userForm!:NgForm;
  constructor(private _http:HttpClient){}
  ngOnInit(){
    this.getData()
  }
  private dataBaseLink = "https://indiba-5c73d-default-rtdb.firebaseio.com/testingAdmin.json";
  database = [
    {FirstName:"dataX",LastName:"dataX", dob:"23/12/2041", email:"dataX", contact:"dataX", altranate_contact:"dataX", 
    Job_post:"dataX", Qualification:"dataX", University:"dataX", Year:"dataX", Percentage:"dataX", Address1:"dataX", 
    Address2:"dataX", City:"dataX", State:"dataX", pin:"dataX", Joblocation:"dataX", Aadhar:"dataX"},

  ]
  dataAdmin(data:any){
    console.log(data);
    this._http.put(this.dataBaseLink,data).subscribe(res=>{
      console.log(res);
    })
  }
  getData(){
    this._http.get(this.dataBaseLink).subscribe(res=>{
      const data = Object.values(res);
      console.log(data);
      this.database = data;
    })    
  }
  

  @ViewChild('FirstName') FName!:ElementRef;
  @ViewChild('LastName') LastName!:ElementRef;
  @ViewChild('dob') dob!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('contact') contact!:ElementRef;
  @ViewChild('altNum') altNum!:ElementRef;
  @ViewChild('jobpost') jobpost!:ElementRef;
  @ViewChild('qualifi') qualifi!:ElementRef;
  @ViewChild('univer') univer!:ElementRef;
  @ViewChild('year') year!:ElementRef;
  @ViewChild('perc') perc!:ElementRef;
  @ViewChild('addres1') addres1!:ElementRef;
  @ViewChild('address2') address2!:ElementRef;
  @ViewChild('city') city!:ElementRef;
  @ViewChild('state') state!:ElementRef;
  @ViewChild('pin') pin!:ElementRef;
  @ViewChild('jobloc') jobloc!:ElementRef;
  @ViewChild('aadhar') aadhar!:ElementRef;



  actionEdit(a:any){
    this.FName.nativeElement.value = this.database[a].FirstName;
    this.LastName.nativeElement.value = this.database[a].LastName;
    this.dob.nativeElement.value = this.database[a].dob;
    this.email.nativeElement.value = this.database[a].email;
    this.contact.nativeElement.value = this.database[a].contact;
    this.altNum.nativeElement.value = this.database[a].altranate_contact;
    this.jobpost.nativeElement.value = this.database[a].Job_post;
    this.qualifi.nativeElement.value = this.database[a].Qualification;
    this.univer.nativeElement.value = this.database[a].University;
    this.year.nativeElement.value = this.database[a].Year;
    this.perc.nativeElement.value = this.database[a].Percentage;
    this.addres1.nativeElement.value = this.database[a].Address1;
    this.address2.nativeElement.value = this.database[a].Address2;
    this.city.nativeElement.value =this.database[a].City;
    this.state.nativeElement.value = this.database[a].State;
    this.pin.nativeElement.value =this.database[a].pin;
    this.aadhar.nativeElement.value = this.database[a].Aadhar;
    this.jobloc.nativeElement.value =this.database[a].Joblocation;
   }


  actionDel(a:any){
    this._http.delete(this.dataBaseLink,a).subscribe(res=>{console.log(res)})
  }
}

