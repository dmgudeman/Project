import { Component, OnInit } from '@angular/core';
import {IMyOptions} from 'mydatepicker';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-mydatepick-original',
  templateUrl: './mydatepick-original.component.html',
  styleUrls: ['./mydatepick-original.component.css']
})
export class MydatepickOriginalComponent implements OnInit {
   private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    private myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
            // Empty string means no initial value. Can be also specific date for
            // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
            // value.

            myDate: [{date: {year: 2018, month: 10, day: 9}}, Validators.required]
            // other controls are here...
        });
  }

   setDate(): void {
        // Set today date using the setValue function
        let date = new Date();
        this.myForm.setValue({myDate: {
        date: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()}
        }});
    }

    clearDate(): void {
        // Clear the date using the setValue function
        this.myForm.setValue({myDate: ''});
    }

}
