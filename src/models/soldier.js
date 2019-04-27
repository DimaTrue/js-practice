import { Unit } from "./unit";
import { random } from "../helper/helper";

export class Soldier extends Unit {
  _experience = 0;

  constructor(health, recharge) {
    super(health, recharge);
  }

  setExperience(value) {
    if (value >= 50) {
      return this._experience = 50;
    } else if (value <= 0) {
      return this._experience = 0;
    } else {
      return this._experience = value;
    }
  }

  getExperience() {
    return this._experience;
  }

  attackSuccess() {
    return (super.attackSuccess() * random(50 + this._experience, 100)) / 100;
  }

  makeDamage() {
    return super.makeDamage() + this._experience / 100;
  }

  power() {
    return Math.round((this._experience + this.health + this.makeDamage()) / 3);
  }
}