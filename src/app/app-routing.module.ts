import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contacts.component';
import {ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: 'contacts', component: ContactComponent},
  { path: 'contacts/:id', component: ContactDetailComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
