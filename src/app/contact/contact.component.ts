import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.contactForm);
    // You can implement sending the form data to a backend or an email service
  }
}
