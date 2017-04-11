import { Component } from '@angular/core';
import { Router, ActivatedRoute }    from '@angular/router';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor (
         private _router:Router,
         private _activatedRoute: ActivatedRoute){
        //    this._router.events.pairwise().subscribe((event) => {
        //     console.log(event);
        //    this._activatedRoute.url.subscribe(() => {
        //     console.log(this._activatedRoute.snapshot);
        //    })
        // });
         }
    
   
}
