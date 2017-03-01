import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Chapter01DiceComponent } from './chapter01-dice/chapter01-dice.component';
import { ColumnLayoutComponent } from './chapter02-column-layout/column-layout.component';
import { VideoPlayerComponent } from './chapter03-video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    Chapter01DiceComponent,
    ColumnLayoutComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
