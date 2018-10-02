function Plane() {
}

Plane.prototype.landAt = function(airport){
  airport.instructToLand(this)
}

Plane.prototype.takeOffFrom = function(airport){
  airport.instructToTakeOff(this)
}