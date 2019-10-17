class Ship {
  constructor(name, maxPoints, pointsDamage, state) {
    this.name = name;
    this.maxPoints = maxPoints;
    this.pointsDamage = pointsDamage;
    this.state = true;
  }
  isHit() {
    this.maxPoints - pointsDamage;
  }
  isdestroyed() {
    if (this.maxPoints <= 0) {
      return this.state = false;
    }
  }
};

///

class Ship {
  constructor(data) {
    this.name = data.name;
    this.maxPoints = data.maxPoints;
    this.damagePoints = data.damagePoints;
    this.state = data.state;
  };

  export const ships = [
    {
      name: "mother",
      maxPoints: 100,
      damagePoints: 9,
      state: true
    },
    {
      name: "defence",
      maxPoints: 80,
      damagePoints: 10,
      state: true
    },
    {
      name: "attack",
      maxPoints: 45,
      damagePoints: 12,
      state: true
    }
  ];