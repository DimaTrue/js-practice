import Strategy from "../strategy/strategy";

export class Army {
  constructor(squads, name, strategy) {
    this.squads = squads;
    this.name = name;
    this.strategy = strategy;
  }

  getTargetArmy(arr) {
    return new Strategy(this.strategy, arr);
  }

  isAlive() {
    return this.squads.some(el =>
      el.isAlive());
  }

  checkSquads() {
    this.squads = this.squads.filter(el =>
      el.isAlive());
  }
}