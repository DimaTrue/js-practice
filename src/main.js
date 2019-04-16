import fs from 'fs';
import {Battle} from "./core/battle";
import Soldier from './models/soldier';


export class Application {
  async init() {
     let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));


    const battle = new Battle(json.armies);
    let soldier = new Soldier(49, 100);
    console.log(soldier);
    const fabric = SoldierFabric.getInstance();
    console.log(fabric);
    battle.start();
  }
}
