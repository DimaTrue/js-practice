import Unit from "./unit";

export default class Soldier extends Unit {
    _expirience = 0;
    
    set experience(val) {
        this._experience = val;
        if (val > 50) {
            this._experience = 50;
        } else if (val < 0) {
            this._experience = 0;
        }

    }

    get experience() {
        return this._experience;
    }


    //attackSucces()
    //makeDamage() -----> redefine!!
}