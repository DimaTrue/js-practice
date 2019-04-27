import { Unit } from "./unit";
import { totalSum, gavg } from "../helper/helper";

export class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this.operators = operators;
    this.recharge = recharge < 1000 ? 1000 : recharge;
  }

  attackSuccess() {
    let totalsAttackSuccess = this.operators.map(operator =>
      operator.attackSuccess());
    return super.attackSuccess() * gavg(totalsAttackSuccess);
  }

  isAlive() {
    return (this.health > 0 && totalSum(this.operators.map(el => el.health)) > 0);
  }

  makeDamage() {
    return (super.makeDamage() * 2 + totalSum(this.operators.map(el => el._experience)) / 100);
  }

  receiveDamage(damage) {
    this.setHealth(this.getHealth() - damage * 0.6);
    this.operators[Math.floor(Math.random() * this.operators.length)].setHealth(this.getHealth() - damage * 0.2);
    this.operators.map(el => el.setHealth(this.getHealth() - damage * 0.1));
  }

  getTotalHealth = () => {
    let res = 0;
    this.operators.map(el => res += el.health);
    return (res + this.health) / (this.operators.length + 1);
  }

  power = () => {
    let totalExp = 0;
    this.operators.map(el => totalExp += el._experience);
    return Math.round((totalExp + this.getTotalHealth() + this.makeDamage()) / 3);
  }
}