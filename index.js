let store = { drivers: [], trips: [], passengers: [] }
let driverId = 0, tripId = 0, passengerId = 0

class Driver {
  constructor(name) {
    this.id = ++userId
    this.name = name
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.userId === this.id
    })
  }

}
