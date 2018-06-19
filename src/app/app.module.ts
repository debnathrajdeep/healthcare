import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ApiService } from './apiservice';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent
  ],
  imports: [FormsModule, HttpClientModule ,
    BrowserModule
  ],
  providers: [ApiService],
  bootstrap: [NewCmpComponent]
})
export class AppModule { }
