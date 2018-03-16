let store = { drivers: [], trips: [], passengers: [] }
let driverId = 0, tripId = 0, passengerId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.userId === this.id
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
    this.driver = driver
    this.passenger = passenger
    this.driverId = this.driver.id

    store.trips.push(this)
  }
}
