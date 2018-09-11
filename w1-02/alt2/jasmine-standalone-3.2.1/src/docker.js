// koodi:

class Stuff {
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}
}

class Bag {
	constructor(maxWeight) {
		this.maxWeight = maxWeight;
		this.list = [];
	}
	weight() {
		var curweight = 0;
		for (var stf in this.list) {
			curweight = curweight + this.list[stf].weight;
		}
		return curweight;
	}
	add(item) {
		if (this.weight() < this.maxWeight) {
			if (this.list.indexOf(item) === -1 && item instanceof Stuff) {
				this.list.push(item);
			} else {
				console.log("on jo lisätty");
			}
		} else {
			console.log("max paino");
		}
	}
}

class Cargo {
	constructor(maxWeight) {
		this.maxWeight = maxWeight;
		this.list = [];
	}
	weight() {
		var curweight = 0;
		for (var stf in this.list) {
			curweight = curweight + this.list[stf].weight();
		}
		return curweight;
	}
	add(item) {
		if (this.weight() < this.maxWeight) {
			if (this.list.indexOf(item) === -1 && item instanceof Bag) {
				this.list.push(item);
			} else {
				console.log("on jo lisätty tai väärä esine");
			}
		} else {
			console.log("max paino");
		}
	};
}