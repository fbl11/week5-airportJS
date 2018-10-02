describe('Airport', function(){
  beforeEach(function(){
    this.airport = new Airport()
    this.plane = jasmine.createSpyObj('plane', ['landAt', 'takeOffFrom']);
    this.otherPlane = jasmine.createSpyObj('plane', ['landAt', 'takeOffFrom'])
  })
  it('has a hangar to store planes', function(){
    expect(this.airport.hangar).not.toBeUndefined()
  })

  describe('instructToLand', function(){
    it('instructs a plane to land at the airport', function() {
      this.airport.instructToLand(this.plane)
      expect(this.airport.hangar).toContain(this.plane)
    })
  })

  describe('instructToTakeOff', function(){
    it('instructs a plane to take off from the airport and removes the plane from the airport', function() {
      this.airport.instructToLand(this.plane)
      this.airport.instructToTakeOff(this.plane)
      expect(this.airport.hangar).not.toContain(this.plane)
    })
    it('returns the leaving plane', function(){ 
      this.airport.instructToLand(this.plane)
      this.airport.instructToLand(this.otherPlane)
      expect(this.airport.instructToTakeOff(this.otherPlane)).toEqual(this.otherPlane)
    })
  })
})
