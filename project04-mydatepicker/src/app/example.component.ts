import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormGroupName, FormControlName, FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'example-app',
  template: `
    <form [formGroup]="form">
      <div formGroupName="name">
        <input formControlName="first" placeholder="First">
        <input formControlName="last" placeholder="Last">
      </div>
      <input formControlName="email" placeholder="Email">
      <button>Submit</button>
    </form>
    <p>Value: {{ form.value | json }}</p>
    <p>Validation status: {{ form.status }}</p>
  `
})
export class ExampleComponent {
  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(2)],
        last: 'Drew',
      }),
      email: ''
    });
  }
}