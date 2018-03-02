import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {TabViewModule} from 'primeng/tabview';

import { AppComponent } from './app.component';

import { MixTapeService } from './services/mixtape.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TabViewModule
  ],
  providers: [
    MixTapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
