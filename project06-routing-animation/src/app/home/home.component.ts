import { Component, OnInit, HostBinding,  HostListener } from '@angular/core';
import { Router, ActivatedRoute }    from '@angular/router';
import { routeFadeStateTrigger } from '../shared/route-animations';
import {trigger, state, animate, style, transition, AnimationEntryMetadata} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeFadeState') anyThing = true;


  constructor( 
           private _router:Router,
           private _activatedRoute: ActivatedRoute){
        //    this._router.events.pairwise().subscribe((event) => {
        //     console.log("HomeComponent event in constructor",event);
           
        // });
            let direction = this._activatedRoute.snapshot.params.slideDirection;
            console.log("FIRST PAGE Component activated.snapshot.params", direction);
           
    }
  ngOnInit(){
  }

  goToFirstPageRight (){
    let slideDirection= "right"
    this._router.navigate(['/first', {slideDirection: slideDirection}]) ;
    this._activatedRoute.url.subscribe(() => {
            console.log("HomeComponent activated.snapshot.params in RIGHT function", this._activatedRoute.snapshot.params);
           }) ;
  }
  goToFirstPageLeft (){
    let slideDirection= "left"
    this._router.navigate(['/first', {slideDirection: slideDirection}]);
     this._activatedRoute.url.subscribe(() => {
            console.log("HomeComponent activated.snapshot.params in LEFT function", this._activatedRoute.snapshot.params);
           }) ;
  }

  goToSecondPage (){
    this._router.navigate(['/second']);
  }
}


