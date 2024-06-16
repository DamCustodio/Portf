import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { InfComponent } from './inf/inf.component';

// const routes: Routes = [];


const routes:Routes =[
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: TreeComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: InfComponent,
    path:'inf'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
