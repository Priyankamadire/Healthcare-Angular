import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent {
  selectedHealthIssue: string = '';

  scheduleAppointment(time: string) {
    // Handle appointment scheduling logic for the selected time
    console.log(`Appointment scheduled for ${time}`);
  }

  scheduleSpecialAppointment() {
    // Handle appointment scheduling logic for specialized consultation
    console.log(`Specialized appointment scheduled for ${this.selectedHealthIssue}`);
  }
}
