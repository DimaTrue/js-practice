import { Soldier } from "../models/soldier";
import { Vehicle } from "../models/vehicle";
import { Squad } from "../models/squad";
import { Army } from "../models/army";

let instance = null;

export class Factory {
  constructor() {
    if (instance) {
      return instance;
  } else {
      instance = this;
  }
  }

  static getInstance() {
    return new Factory();
  }

  createSoldier(data) {
    let { health, recharge } = data;
    let check = health && recharge && true;
    let soldier = check && new Soldier(health, recharge);
    if (soldier) {
      return soldier;
    }
  }

  createSoldiers(arr) {
    return (
      Array.isArray(arr) &&
      arr.map(e => {
        return this.createSoldier(e);
      })
    );
  }

  createVehicle(data) {
    let { health, recharge, operators } = data;
    let check = health && recharge && operators && true;
    let soldiers = operators && this.createSoldiers(operators);
    let vehicle =
      check && new Vehicle(health, recharge, this.createSoldiers(soldiers));
    if (vehicle) {
      return vehicle;
    }
  }

  createVehicles(arr) {
    return (
      Array.isArray(arr) &&
      arr.map(e => {
        return this.createVehicle(e);
      })
    );
  }

  createSquad(data) {
    let { type, units } = data;
    switch (type) {
      case "vehicles":
        let vehicles = units && this.createVehicles(units);
        if (vehicles) {
          return new Squad(type, vehicles);
        }
      case "soldiers":
        let soldiers = units && this.createSoldiers(units);
        if (soldiers) {
          return new Squad(type, soldiers);
        }
    }
  }

  createSquads(arr) {
    return (
      Array.isArray(arr) &&
      arr.map(e => {
        return this.createSquad(e);
      })
    );
  }

  createArmy(data) {
    let { name, strategy, squads } = data;
    let check = name && strategy && squads && true;
    let army = check && this.createSquads(squads);
    if (army) {
      return new Army(name, strategy, army);
    }
  }

  createArmies(arr) {
    return (
      Array.isArray(arr) &&
      arr.map(e => {
        return this.createArmy(e);
      })
    );
  }
}
