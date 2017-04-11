import { Component, OnInit }        from '@angular/core';
import { Location }                 from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  flag:string = '';
  constructor(
           private _router:Router,
           private _activatedRoute: ActivatedRoute,
           private _location:Location,
  ) { 
this._activatedRoute.url.subscribe(() => {
           this.flag = this._activatedRoute.snapshot.params.slideDirection;
            console.log("FIRST PAGE Component activated.snapshot.params", this.flag);
           }) ;
  }

  ngOnInit() {
  }

  goToHome(flag) {

   this._router.navigate(['/home', {slideDirection: this.flag}]) ;
  }
  goBack() {
    this._location.back();
  }

}
