import { Component, OnInit, Inject } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { IMyOptions } from 'mydatepicker';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-mydatepick',
  templateUrl: './mydatepick.component.html',
  styleUrls: ['./mydatepick.component.css']
})
export class MydatepickComponent implements OnInit {
title = 'app works!';
  year = 2015;
  month = 5;
  day = 5;

  date: Date = new Date(2014, 4, 8); 
  inputDate: FormControl;
  // FormControl = new FormControl({input:'02-15-2017', disabled: false});
  myDate: FormControl;
  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd-mm-yyyy',
    };
  myForm: FormGroup;
  constructor(@Inject(FormBuilder) formBuilder: FormBuilder){
     this.date = new Date(this.year,this.month,this.day);
           this.myForm = formBuilder.group({
            // Empty string means no initial value. Can be also specific date for
            // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
            // value.
          
            myDate: [this.date],
            // other controls are here...
            inputDate:['02-15-2017']
        
          
        });
        console.log("THIS.DATE IN CONSTRUCTOR " + this.date)
  } 
         
        ngOnInit() {
    
        }

   setDate(): void {
        // Set today date using the setValue function
        let date = new Date();
        let datey = new Date (this.myForm.get('inputDate').value);
        console.log("datey " + datey);
        console.log("datey.getFullYear() " + datey.getFullYear())
        this.myForm.patchValue({myDate: {
        date: {
            year: datey.getFullYear(),
            month: datey.getMonth()+1,
            day: datey.getDate()}
        }});
        
    }

  
    clearDate(): void {
        // Clear the date using the setValue function
        this.myForm.setValue({myDate: ''});
    }
   

}
