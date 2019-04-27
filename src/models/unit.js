import { BaseUnit } from "./baseUnit";

export class Unit extends BaseUnit {
  constructor(health, recharge) {
    super();
    this.health = health;
    this.recharge = recharge < 100 ? 100 : recharge > 2000 ? 2000 : recharge;
    this.isReady = true;
    this.time = 0;
  }

  isAlive() {
    return this.health > 0;
  }

  makeDamage() {
    return 0.05;
  }

  attackSuccess() {
    return 0.5 * (1 + this.health / 100);
  }

  receiveDamage(damage) {
    this.setHealth(this.getHealth() - damage)
  }

  getHealth() {
    return this.health;
  }

  setHealth(value) {
    if (value <= 0) {
      this.health = 0;
    }
    if (value >= 100) {
      this.health = 100;
    }
    else {
      this.health = value;
    }
  }

  startRecharge() {
    this.isReady = this.isReady ? false : true;
    this.time = Date.now();
  }

  timeRecharge() {
    let time = Date.now();
    if (time - this.time > this.recharge) {
      this.startRecharge()
    }
  }
}