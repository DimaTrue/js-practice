export class BaseUnit {

    makeDamage() {
        throw new Error(`You should to define ${this.makeDamage.name} method`);
    }

    isAlive() {
        throw new Error(`You should to define ${this.isAlive.name} method`);
    }

    attackSuccess() {
        throw new Error(`You should to define ${this.attackSuccess.name} method`);
    }

    receiveDamage() {
        throw new Error(`You should to define ${this.receiveDamage.name} method`);
    }

    getHealth() {
        throw new Error(`You should to define ${this.getHealth.name} method`);
    }

    setHealth() {
        throw new Error(`You should to define ${this.setHealth.name} method`);
    }

    startRecharge() {
        throw new Error(`You should to define ${this.startRecharge.name} method`);
    }

    timeRecharge() {
        throw new Error(`You should to define ${this.timeRecharge.name} method`);
    }
    power() {
        throw new Error(`You should to define ${this.power.name} method`);
    }
}