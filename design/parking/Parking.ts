class ParkingSystem {
  private static instance;
  // singleton class
  private constructor() {}
  public static getInstance(): ParkingSystem {
    if (!ParkingSystem.instance) {
      ParkingSystem.instance = new ParkingSystem();
    }
    return ParkingSystem.instance;
  }

  private types = { small: 50, medium: 50, big: 50 };

  private spots = {
    small: {
      spots: new Array(this.types["small"]),
      used: new Array(this.types["small"]),
    },
    medium: {
      spots: new Array(this.types["medium"]),
      used: new Array(this.types["medium"]),
    },
    big: {
      spots: new Array(this.types["big"]),
      used: new Array(this.types["big"]),
    },
  };

  initializeSpots() {
    let types: string[] = Object.keys(this.types);

    types.forEach((type: string) => {
      for (let i = 1; i <= this.types[type]; i++) {
        this.spots[type][i - 1] = new ParkingSpot(type, i);
      }
    });
  }

  checkin(carNumber, type): Ticket | string {
    let ticket: Ticket | string;
    if (this.types[type].length > 0) {
      let parkingSpot = this.spots[type].shift();
      let vehicle = new Vehicle(carNumber);
      this.spots[type]["used"].push(parkingSpot);

      ticket = vehicle.checkin(parkingSpot);
    }
    return "Cannot allot parking";
  }

  checkout(ticket, vehicle) {
    let ps = vehicle.checkout(ticket);
    // find used Index
    let location = Number.parseInt(ps.getLocation().split("-")[1]);

    // freeup spot in used
    this.spots[ps.getType()]["used"][location - 1] = undefined;

    // push available spot to the list of
    this.spots[ps.getType()]["spots"].push(ps);
    return "checked out";
  }
}

class ParkingSpot {
  private carNumber: string | null;
  private location: string;
  private type: string;

  constructor(type, location) {
    this.location = type + "-" + location;
    this.type = type;
  }

  isAvailable(): boolean {
    return !!this.carNumber;
  }

  setCar(carNumber: string): string {
    if (this.isAvailable()) {
      this.carNumber = carNumber;
    }
    return this.location;
  }

  getLocation() {
    return this.location;
  }

  freeUpSpot() {
    this.carNumber = null;
  }
}

class Ticket {
  private carNumber: string;
  private enterTime: Date;
  private parkingSpot: ParkingSpot;

  constructor(carNumber, ps) {
    this.carNumber = carNumber;
    this.enterTime = new Date();
    this.parkingSpot = ps;
  }

  getEnterTime(): Date {
    return this.enterTime;
  }

  getCarNumber(): string {
    return this.carNumber;
  }

  getSpot() {
    return this.parkingSpot;
  }
}

class Vehicle {
  private carNumber: string;

  constructor(carNumber) {
    this.carNumber = carNumber;
  }

  checkin(spot: ParkingSpot): Ticket {
    // set car on the spot
    spot.setCar(this.carNumber);
    // generate & return ticket
    return new Ticket(this.carNumber, spot);
  }

  checkout(ticket: Ticket) {
    // make payment
    let payment = new Payment(ticket);
    payment.setIsValid(true);
    payment.generateReciept();

    // free up the spot
    let spot = ticket.getSpot();
    spot.freeUpSpot();
    return spot;
  }
}

class Payment {
  private enterTime: Date;
  private exitTime: Date;
  private cost: number;
  private isValid: boolean;

  constructor(ticket: Ticket) {
    this.enterTime = ticket.getEnterTime();
    this.exitTime = new Date();
    this.cost = (Number(this.exitTime) - Number(this.enterTime)) * 5;
  }

  isValidPayment() {
    return this.isValid;
  }

  setIsValid(valid: boolean) {
    this.isValid = valid;
  }

  generateReciept() {
    if (this.isValidPayment()) {
      return {
        enter_time: this.enterTime,
        exit_time: this.exitTime,
        cost: this.cost,
      };
    } else {
      throw new Error("Payment Failed");
    }
  }
}
