export default class WeakestStrategy {
  constructor(arr) {
    this.arr = arr;
    let pow = Infinity;
    let targetArmy = this.arr[0];
    let targetSquad = targetArmy.squads[0];

    for (let i = 0; i < this.arr.length; i++) {
      for (let k = 0; k < this.arr[i].squads.length; k++) {
        if (pow > this.arr[i].squads[k].power()) {
          pow = this.arr[i].squads[k].power();
          targetArmy = this.arr[i];
          targetSquad = targetArmy.squads[k];
        }
      }
    }
    return [targetSquad, targetArmy];
  }
}