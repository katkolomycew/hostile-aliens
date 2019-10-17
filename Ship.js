export default class Ship {
  constructor(type, maxHitPoints, lostHitPoints) {
    this.type = type;
    this.maxHitPoints = maxHitPoints;
    this.lostHitPoints = lostHitPoints;
    this.currentHitPoints = maxHitPoints;
    this.isDestroyed = false;
  }
};

isHit(){
  this._currentHitPoints -= maxHitPoints;
  if (this._currentHitPoints <= 0) {
    this.isDestroyed = true;
    return this._currentHitPoints = 0;
  } else { return this._currentHitPoints }
}
render(){
  return `<div class="${this.type}"</div>`
};