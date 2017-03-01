import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  url: string = '../assets/img1.jpg';

  ngOnInit() {
    this.loadImage(this.url, function onsuccess(img) {
      document.body.appendChild(img);
    },
      function onerror(e) {
        console.log("Error occurred while loading image");
        console.log(e)
      }
    );
  }

  loadImage = function (url: string, success: any, error) {
    var img = new Image();
    img.src = url;

    img.onload = function () {
      success(img);
    };

    img.onerror = function (e) {
      error(e);
    }
  }

} 
