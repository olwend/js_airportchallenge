'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
if(this.isStormy()) {
  throw new Error('cannot land during storm');
}
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function() {
if(this.isStormy()) {
  throw new Error('cannot take off during storm');
}
  this._hangar = [];
};
