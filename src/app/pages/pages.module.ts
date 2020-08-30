import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FooterComponent, HeaderComponent } from '../shared';
import { DashboardComponent, OpenHouseDetailsComponent, ViewProfileComponent, EditProfileComponent, AddOpenHouseComponent, HouseListComponent, ActiveComponent, SoldArchivedComponent, AcceptedOfferComponent, } from './'

@NgModule({
  declarations: [
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    AddOpenHouseComponent,
    HouseListComponent,
    ActiveComponent,
    SoldArchivedComponent,
    AcceptedOfferComponent,
    EditProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  providers: []
})
export class PagesModule { }
