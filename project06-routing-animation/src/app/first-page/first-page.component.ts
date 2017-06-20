import { Component, OnInit, HostBinding, EventEmitter, AnimationEntryMetadata }        from '@angular/core';
import { Location }                   from '@angular/common';
import { Router, ActivatedRoute }     from '@angular/router';
import { routeFadeStateTrigger,  
         routeStateLeftTrigger,
         routeStateRightTrigger }    from '../shared/route-animations';
import { SlideFlag }                 from '../shared/slide-flag';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html', 
  styleUrls: ['./first-page.component.css'],
  animations: [
      routeFadeStateTrigger,
      routeStateLeftTrigger,
      routeStateRightTrigger 
  ],
})
export class FirstPageComponent implements OnInit {
  
  flag: SlideFlag = 'left';
  @HostBinding('@routeStateLeft') anyThing = true;

  // @HostBinding('@routeStateRight') private rightSlideDirection:boolean;
  // @HostBinding('@routeStateLeft') private leftSlideDirection:boolean;
  // @HostBinding ('@routeFadeState') sean = (this.flag === 'right')
  
  constructor(
           private _router:Router,
           private _activatedRoute: ActivatedRoute,
           private _location:Location,
           ) 
  { 
      this._activatedRoute.url.subscribe(() => {
        this.flag = this._activatedRoute.snapshot.params.slideDirection;
          console.log("FIRST PAGE Component activated.snapshot.params", this.flag);
        }) ;
      
     console.log( 'right' === this.flag);
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
