import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-page',
  standalone: true,  // Indicates that this is a standalone component
  imports: [CommonModule, ReactiveFormsModule],  // Add ReactiveFormsModule here
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted', this.feedbackForm.value);
      alert('Thank you for your feedback!');
      this.feedbackForm.reset();
    }
  }
}
