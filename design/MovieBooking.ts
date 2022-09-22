// Major Entities:

class MovieReservationSystem {
  private city: City;
  private cinemas: [];

  // searchCinemas(city): Cinema[] {}
  // addCinema(cinema): void;
}

class City {
  private name: string;
  private zipcode: number;
}

class Auditorium {
  screen_number: number;
  cinema_id: number;
  seats: Seat[];
  capacity: number;

  // addSeats(rows, cols);
}

class Cinema {
  name: string;
  location: Address;
  movies: Movie[];
  screens: Auditorium[];

  // getAllMovies() : Movie[];
  // addScreens(): void;
}

class Movie {
  name: string;
  genres: string[];
  runningLength: number;
  showTimes: ShowTime[];

  // addMovie(name, genres, runningLength);
  // addSlots(movie, screen, cinema); // add a showTime for this movie
  // getShows(); // return showTimes;
}

class ShowTime {
  cinema: Cinema;
  movie: Movie;
  screen: Auditorium;

  // allotMovie(movie);
}

class Seat {
  screen: Auditorium;
  isReserved: boolean;
  row: string;
  col: number;
  seatType: string;

  // isSeatAvailable();
  // reserveSeat();
}

class Booking {
  id: number;
  schedule: ShowTime;
  customer: Customer;
  seat: Seat;
  status: ["initialized", "booked", "cancelled"];

  // createBooking(seat, schedule);
  // assignSeat(seat);
  // cancel();

  // makePayment();
}

class Payment {
  booking: Booking;
  total_amount: number;
  dateTime: Date;

  // makePayment(booking, amount);
  // isValidPayment();
}

class Address {
  street: string;
  city: string;
  zipcode: number;
  state: string;
  country: string;
}

class User {
  name: string;
  phone: string;

  constructor(name, phone) {}
}

class Manager extends User {
  isManager: boolean;
  isFrontEnd: boolean;
  // addMovie(movie);
  // addShow(show);
}

class FrontOfficeUser extends User {
  isManager: false;
  isFrontEnd: true;
  // createBooking(customer, schedule, seat);
}

class Customer extends User {
  isManager: false;
  isFrontEnd: false;
  bookings: Booking[];

  // bookTicket(booking);
}
