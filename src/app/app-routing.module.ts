import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InterviewComponent } from './interview/interview.component';

const routes: Routes = [
  {path:'', component:ResultComponent},
  {path:'Result', component:InterviewComponent},
  {path:'Job_Application',component:UserUpdateComponent},
  {path:'contact-form',component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
