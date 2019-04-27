import { gavg, totalSum } from "../helper/helper.js";
import { BaseUnit } from "./baseUnit";

export class Squad extends BaseUnit {
  constructor(type, units) {
    super();
    this.type = type;
    this.units = units;
  }

  isAlive() {
    return this.units.some(el =>
      el.isAlive());
  }

  checkUnits() {
    this.units = this.units.filter(el => {
      return el.isAlive();
    });
  }

  power() {
    let sum = 0;
    this.units.forEach(el => sum += el.power());
    return sum;
  }

  attackSuccess() {
    let totalsAttackSuccess = this.units.map(el =>
      el.attackSuccess());
    return Math.round((gavg(totalsAttackSuccess)) * 100) || 0;
  }

  makeDamage() {
    let ready = this.units.filter(el => el.isReady);
    return totalSum(ready.map(el => el.makeDamage())).toFixed(2);
  }

  receiveDamage(damage) {
    this.units.forEach(el => el.receiveDamage(damage / this.units.length))
  }

  startRecharge() {
    let units = this.units.filter(el => el.isReady);
    units.forEach(el => {
      el.startRecharge();
    });
  }

  timeRecharge() {
    let units = this.units.filter(el => !el.isReady);
    units.forEach(el => {
      el.timeRecharge();
    });
  }

  incrementExperience = (n = 1) => {
    if (this.type === 'vehicles') {
      this.units.forEach(vehicle => {
        vehicle.operators.forEach(el => {
          el.setExperience(el.getExperience() + n);
        })
      })
    } else {
      this.units.forEach(el => {
        el.setExperience(el.getExperience() + n);
      });
    }
  }
}