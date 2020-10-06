import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { LaunchComponent } from './launch/launch.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { DuplicatePipe } from './duplicate.pipe';
import { SucessPipe } from './sucess.pipe';
import { LandPipe } from './land.pipe';
import { SuccessComponent } from './success/success.component';
import { LandComponent } from './land/land.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    LaunchComponent,
    FilterPipe,
    DuplicatePipe,
    SucessPipe,
    LandPipe,
    SuccessComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
