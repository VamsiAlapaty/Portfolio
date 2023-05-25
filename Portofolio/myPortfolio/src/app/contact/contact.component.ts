import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder){}

  contactForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    gmail:[''],
    phoneNumber: [''],
    comments:['']
  })

  sendInfor(){
    if(this.contactForm.value.firstName && this.contactForm.value.gmail){
      console.log("Data Received ", this.contactForm.value.firstName); 
    }
  }
}
