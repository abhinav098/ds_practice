// ReservationSystem
// Major Components
// Restaurant
// Branch
// Address
// Table
// Person
// Manager
// Employees
// Customer

// Manager features:
// 1. can modify restaurant and branch details
// 2. add / remove / modify tables
// 3. can add Employees (Receptionist)

// Employees
// 1. can make/confirm reservation for users

// Customers
// 1. can request for reservation
// 2. can modify reservation

class ReservationSystem {
  constructor() {
    if (!ReservationSystem._instance) {
      ReservationSystem._instance = this;
    }
    return ReservationSystem._instance;
  }

  account;
  restaurants = [];
  // searchRestaurants(name, location, cuisine);
  // requestReservation(branch, numPeople, timing);
  // makeReservation(branch, capacity, timing);
}

class Account {
  owner;
  restaurant;
  branches = [];
}

/*
class Address {
  street;
  city;
  state;
  country;
  zipcode;

  constructor(street, city, state, country, zipcode) {}
}

class Restaurant {
  name;
  address;
  cuisine;
  branches;
  receptionist;

  constructor(name, address, cuisine) {}

  addBranches(address);
  addReceptionist();
}

class Branch {
  address;
  timings;
  tables;

  constructor(address) {}

  addTable(capacity);
}

class Person {
  name;
  email;
  phone;
  constructor(name, email, phone);
}

class Reservation {
  person_id
}

class Table {
  capacity;
  status;
}
*/

let rs = new ReservationSystem();
let rs1 = new ReservationSystem();
console.log(rs === rs1);
