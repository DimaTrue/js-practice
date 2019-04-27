import Soldier from "../models/soldier";


let instance = null;

export default class SoldierFabric {
    constructor() {
        if (instance) {
            return instance;
        } else {
            instance = this;
        }
    }
    static getInstance() {
        return new SoldierFabric();
    }

    createSoldier(data) {
        return new Soldier(data.health, data.recharge);
    }
    createSoldiers(arrData) {
        return arrData.map(el => this.createSoldier(el));
    }
}