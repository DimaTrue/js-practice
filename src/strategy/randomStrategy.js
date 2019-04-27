export default class RandomStrategy {
  constructor(arr) {
    this.arr = arr;
    let targetArmy = arr[Math.floor(Math.random() * arr.length)];
    let targetSquad = targetArmy.squads[Math.floor(Math.random() * targetArmy.squads.length)];
    return [targetSquad, targetArmy];
  }
}