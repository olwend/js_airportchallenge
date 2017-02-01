'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane', ['land']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

describe ('under normal conditions', function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(false);
  });
  it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff();
    expect(airport.planes()).toEqual([]);
    });
  });

describe('under stormy conditions', function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(true);
  });

    it('blocks takeoff when weather is stormy', function(){
      expect(function(){ airport.clearForTakeOff(plane);}).toThrowError('cannot take off during storm');
    });

    it('blocks landing when weather is stormy' , function(){
      expect(function(){airport.clearForLanding();}).toThrowError('cannot land during storm');
    });
  });
});
