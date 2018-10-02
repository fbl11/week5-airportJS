describe('Plane', function(){
  beforeEach(function(){
    this.plane = new Plane()
    this.airport = jasmine.createSpyObj('airport', ['instructToLand', 'instructToTakeOff']);
  })

  describe('landAt', function(){
    it('can land at an airport', function () {
      // expect(this.plane.land).not.toBeUndefined()
      this.plane.landAt(this.airport)
     expect(this.airport.instructToLand).toHaveBeenCalledWith(this.plane)
    })
  })

  describe('takeOffFrom', function () {
    it('can takes off from an airport', function () {
      // expect(this.plane.takeOffFrom).not.toBeUndefined()
      this.plane.takeOffFrom(this.airport)
      expect(this.airport.instructToTakeOff).toHaveBeenCalledWith(this.plane)
    })
  })
  
})