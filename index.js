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
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
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

  passenger() {
    return store.passengers.find(function (p) {
      console.log(p, this.passengerId)
      return p.id === this.passengerId
    })
  }
}
