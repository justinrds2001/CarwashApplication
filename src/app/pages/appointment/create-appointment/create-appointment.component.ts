import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface WashService {
  name: string;
  description: string;
}

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'],
  providers: [NgbCarouselConfig],
})
export class CreateAppointmentComponent {
  selectedServiceIndex = 0;
  @Input() services: WashService[] = [
    {
      name: 'Basic Wash',
      description: 'Exterior hand wash, tire shine, and interior vacuuming',
    },
    {
      name: 'Deluxe Wash',
      description: 'Basic wash plus wax, interior cleaning, and air freshener',
    },
    {
      name: 'Ultimate Wash',
      description:
        'Deluxe wash plus polish, tire rotation, and windshield treatment',
    },
    {
      name: 'Full Detail',
      description:
        'Ultimate wash plus engine cleaning, carpet shampoo, and leather treatment',
    },
  ];
  selectedDate: Date | undefined;
  availableTimeslots: Date[] = [
    new Date(2021, 0, 1, 8),
    new Date(2021, 0, 1, 9),
    new Date(2021, 0, 1, 10),
    new Date(2021, 0, 1, 11),
    new Date(2021, 0, 1, 12),
    new Date(2021, 0, 1, 13),
    new Date(2021, 0, 1, 14),
    new Date(2021, 0, 1, 15),
    new Date(2021, 0, 1, 16),
    new Date(2021, 0, 1, 17),
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 0;
  }

  // Example function to get available timeslots based on selected date
  getAvailableTimeslots(date: Date): Date[] {
    const timeslots: Date[] = [];
    for (let i = 8; i <= 17; i++) {
      const time = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        i
      );
      timeslots.push(time);
    }
    return timeslots;
  }

  // Handler for selecting a wash service
  selectService(service: WashService) {
    console.log(`Selected service: ${service.name}`);
    // TODO: Store selected service in backend or local storage
    this.selectedServiceIndex = this.services.indexOf(service);
  }

  // Handler for selecting a timeslot
  selectTime(time: Date) {
    console.log(`Selected time: ${time}`);
    // TODO: Store selected time in backend or local storage
  }

  // Function to apply custom CSS classes to calendar cells
  dateClass = (date: Date) => {
    const timeslots = this.getAvailableTimeslots(date);
    const available = timeslots.some(
      (time) => time.getTime() === date.getTime()
    );
    return available ? 'available' : '';
  };
}
