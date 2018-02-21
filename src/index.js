class Sorter {
	constructor() {
		this.arr = [];
		this.defaultCompare = function(a, b){
			return a - b;
		};
	}

	add(element) {
		this.arr.push(element);
	}

	at(index) {
		return this.arr[index];
	}

	get length() {
		return this.arr.length;
	}

	toArray() {
		return this.arr;
	}

	sort(indices) {
		indices.sort(function(a, b){
			return a - b;
		});
    let tempArr = [];
    
		for (let i = 0; i < indices.length; i++) {
			tempArr.push(this.arr[indices[i]]);
    }
    
    tempArr.sort(this.defaultCompare);
    
		for(let i = 0; i < indices.length; i++) {
      this.arr.splice(indices[i], 1, tempArr[i]);
		}

	}

	setComparator(compareFunction) {
		this.defaultCompare = compareFunction;
	}
}

module.exports = Sorter;
