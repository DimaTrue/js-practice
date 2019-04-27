import {Army} from "../models/army";
import {Squad} from "../models/squad";
import {Vehicle} from "../models/vehicle";
import {Soldier} from "../models/soldier";

export class Factory {
  static getInstance() {
    return new Factory();
  }

  createArmies(arr) {
    return (
      arr.map(el => {
        return this.createArmy(el);
      })
    );
  }

  createArmy(data) {
    let army = this.createSquads(data.squads);
    return new Army(army, data.name, data.strategy);
  }

  createSquads(arr) {
    return (
      arr.map(el => {
        return this.createSquad(el);
      })
    );
  }

  createSquad(data) {
    switch (data.type) {
      case "vehicles":
        let vehicles = this.createVehicles(data.units);
        return new Squad(data.type, vehicles);
      case "soldiers":
        let soldiers = this.createSoldiers(data.units);
        return new Squad(data.type, soldiers);
    }
  }

  createVehicles(arr) {
    return (
      arr.map(el => {
        return this.createVehicle(el);
      })
    );
  }

  createVehicle(data) {
    let soldiers = this.createSoldiers(data.operators);
    let vehicle = new Vehicle(data.health, data.recharge, this.createSoldiers(soldiers));
    return vehicle;
  }

  createSoldiers(arr) {
    return (
      arr.map(el => {
        return this.createSoldier(el);
      })
    );
  }
  
  createSoldier(data) {
    let soldier = new Soldier(data.health, data.recharge);
    return soldier;
  }
}