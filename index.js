let store = { drivers: [], trips: [], passengers: [] }
let driverId = 0
let tripId = 0
let passengerId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return this.trips().map(trip => {
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
      return trip.passengerId === this.id
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }

    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function (d) {
      return d.id === this.driverId
    })
  }

  passenger() {
    return store.passengers.find(function (p) {
      return p.id === this.passengerId
    })
  }
}
