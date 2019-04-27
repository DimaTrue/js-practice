import fs from 'fs';
import { Battle } from "./core/battle";
import { Factory } from './factories/factory';



export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    let factory = Factory.getInstance();
    let armies = factory.createArmies(json.armies);

    const battle = new Battle(armies);
    battle.start();
  }
}
