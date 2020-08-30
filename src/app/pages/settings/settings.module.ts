import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ManageQuestionsComponent,
    EmailSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
