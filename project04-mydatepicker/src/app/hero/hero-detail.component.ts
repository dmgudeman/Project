import { Component }              from '@angular/core';
import { FormControl }            from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  name = new FormControl();
}