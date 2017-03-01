import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';
import { MydatepickComponent } from './mydatepick/mydatepick/mydatepick.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { MydatepickOriginalComponent } from './mydatepick/mydatepick-original/mydatepick-original.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    MydatepickComponent,
    HeroDetailComponent,
    MydatepickOriginalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
