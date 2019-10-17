import Ship from "./Ship.js";

export const generateShipInfo = (array) => {
  let ships = array.flatMap(ship => {
    let shipType = [];
    for (let i = 0; i < ship[2]; i++) {
      shipType.push(new Ship(ship[0], ship[1], ship[2]));
    }
    return shipType;
  })
  return ships;
};