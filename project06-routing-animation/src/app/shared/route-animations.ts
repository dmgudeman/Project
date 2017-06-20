import { animate, trigger, style, transition, state, } from '@angular/animations';
import {  AnimationEntryMetadata } from '@angular/core';
// import { AnimationEntryMetadata } from '@angular/core';
export const routeFadeStateTrigger = trigger('routeFadeState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(1500)
    ]),
    transition(':leave', animate(1500, style ({
        opacity: 0
    })))

]

)
export const routeStateLeftTrigger: AnimationEntryMetadata =
    trigger('routeStateLeft', [
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


    export const routeStateRightTrigger: AnimationEntryMetadata =
    trigger('routeStateRight', [
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