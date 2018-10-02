function Airport() {
  this.hangar = []
}

Airport.prototype.instructToLand = function(plane){
  this.hangar.push(plane)
}

Airport.prototype.instructToTakeOff = function(plane){
  planePosition = this.hangar.indexOf(plane)
  startingPlane = this.hangar.splice(planePosition, 1)
  return startingPlane[0]
}

