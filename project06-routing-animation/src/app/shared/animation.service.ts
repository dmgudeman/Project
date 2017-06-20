import { Injectable, AnimationEntryMetadata } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Injectable()
export class AnimationService {
  routeStateLeftTrigger: AnimationEntryMetadata
  omnibusTrigger: AnimationEntryMetadata;

  constructor(direction) { 
    this.omnibusTrigger = this.triggerFactory(direction);
  }
  

  triggerFactory(direction) {
    if (direction === 'left') {
      this.omnibusTrigger = 
      trigger('routeState', [
      state('*',
          style({
               opacity: 1,
               transform: 'translateX(0)'
          })
          ),
          transition(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(-100%)'
            }),
          animate('0.5s ease-in')
    ]),
    transition (':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }))
    ])
    ]) 
      
    } else {
      trigger('routeState', [
      state('*',
          style({
               opacity: 1,
               transform: 'translateX(0)'
          })
          ),
          transition(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(100%)'
            }),
          animate('0.5s ease-in')
    ]),
    transition (':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
    ])
  }
  return this.omnibusTrigger
} 
  
       
}
