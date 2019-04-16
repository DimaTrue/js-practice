import BaseUnit from "./baseUnit";

export default class Unit extends BaseUnit{
    constructor(health, recharge) {
        super();
        this.health = health;      ////number
        this.recharge = recharge;     ////number
    }
    makeDamage() {
        // number
    }

    attackSuccess() {
        //number
    }

    damageReceive() {
        //damage: number
    }

    isAlive() {
        //boolean
    }

    setReacharge() {

    }

    isRecharge() {
        //boolean
    }

    startRecharge() {

    }

    getHealth() {

    }

    setHealth() {

    }
    timeRecharge() {
        //Date.now()
    }
}