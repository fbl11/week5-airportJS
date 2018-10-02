// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
// an airport and confirm that it has landed
describe('Features', function(){
  beforeEach(function(){
    this.airport = new Airport();
    this.plane = new Plane();
  })
  it('planes can land at an airport and it is confirmed that they are there', function(){
    this.plane.landAt(this.airport)
    expect(this.airport.hangar).toContain(this.plane)
  })
// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
// an airport and confirm that it is no longer in the airport
  it('planes can take off from an airport and it is confirmed that they have left', function(){
    this.plane.landAt(this.airport)
    this.plane.takeOffFrom(this.airport)
    expect(this.airport.hangar).not.toContain(this.plane)
  })
})



