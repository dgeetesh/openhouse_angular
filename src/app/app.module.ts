import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages';
import { AuthGuardService, CommonService } from './core/services';
import * as $ from 'jquery';
import * as AnythingThatIsNotDollarSignOrSymbolOrjQuery from 'jquery';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
