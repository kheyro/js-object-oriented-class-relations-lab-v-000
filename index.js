let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.driverId == this.id
    })
  }

  passengers() {
    return this.trips().map(function (trip) {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.passengerId == this.id
    })
  }

  drivers() {
    return this.trips().map(function (trip) {
      return trip.driver();
    }.bind(this));
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function (d) {
      return d.id == this.driverId
    }.bind(this))
  }

  passenger() {
    return store.passengers.find(function (p) {
      return p.id == this.passengerId
    }.bind(this))
  }
}
