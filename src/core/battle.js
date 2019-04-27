export class Battle {
  armies = [];

  constructor(armies) {
    this.armies = armies;
  }

  start() {
    if (this.armies.length > 1) {
      do {
        const attackerArmy = this.armies[Math.floor(Math.random() * this.armies.length)];
        let attackerSquad = attackerArmy.squads[Math.floor(Math.random() * attackerArmy.squads.length)];
        let targetArmies = this.armies.filter(el => el !== attackerArmy);
        let [targetSquad, targetArmy] = attackerArmy.getTargetArmy(targetArmies);
        console.log(`${attackerSquad.units.length} ${attackerSquad.type} of ${attackerArmy.name} attacking ${targetSquad.units.length} ${targetSquad.type} of ${targetArmy.name}`);
        let attackerChance = attackerSquad.attackSuccess()
        console.log(`Attack chance of ${attackerArmy.name} is ${attackerChance}`);
        let targetChance = targetSquad.attackSuccess();
        console.log(`Attack chance of ${targetArmy.name} is ${targetChance}`);

        if (attackerChance >= targetChance) {
          console.log(`Attack is successful`)
          let damage = attackerSquad.makeDamage();
          attackerSquad.startRecharge();
          targetSquad.receiveDamage(damage);
          attackerSquad.timeRecharge();
          console.log(`Attack squad makes ${damage} damage to target squad`);
          targetSquad.isAlive()
          targetSquad.checkUnits();
          targetArmy.checkSquads();
          this.checkArmies();
          attackerSquad.incrementExperience();
        } else {
          console.log(`Attack is failed. Target squad does not receive a damage`);
        }
      } while (this.armies.length > 1);
      console.log('');
      console.log(`.•°*”˜ .•°*”˜ .•°*”˜  ˜”*°•. ˜”*°•. ˜”*°•`);
      console.log('');
      console.log(`The Heroes of ${this.armies[0].name} army won!!!`);
      console.log('');
      console.log(` .../ **** |=======#`);
      console.log(`;|HH*T-34*HH:| `);
      console.log(`  (@=@=@=@=@)`);
      console.log('');
    } else {
      console.log('Sorry, The count of armies must be greater than 1')
    }
  }

  checkArmies() {
    this.armies = this.armies.filter(army =>
      army.isAlive());
  }
}
