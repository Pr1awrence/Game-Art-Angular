import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/)]],
    email: ['', [Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
    subject: [''],
    message: ['', Validators.required]
});
  constructor(private fb: FormBuilder) { }

  submit = false;
  onSubmit() {
    console.warn(this.feedbackForm.value);
    this.submit = true;
  }
  ngOnInit() {
  }
}
