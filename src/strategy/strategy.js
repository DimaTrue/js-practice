import RandomStrategy from "./randomStrategy";
import WeakestStrategy from "./weakestStrategy";
import StrongestStrategy from "./strongestStrategy";

export default class Strategy {
	constructor(typeOfStrategy, arr) {
		this.typeOfStrategy = typeOfStrategy;

		if (this.typeOfStrategy === 'weakest') {
			return new WeakestStrategy(arr);
		} else if (this.typeOfStrategy === 'strongest') {
			return new StrongestStrategy(arr);
		} else {
			return new RandomStrategy(arr);
		}
	}
}


