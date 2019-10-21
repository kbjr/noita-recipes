
export class List<T> {
	public readonly set: Set<T> = new Set();
	public readonly array: T[] = [ ];

	get length() {
		return this.array.length;
	}

	has(value: T) {
		return this.set.has(value);
	}

	add(value: T) {
		if (! this.has(value)) {
			this.set.add(value);
			this.array.push(value);
		}
	}

	remove(value: T) {
		if (this.has(value)) {
			this.set.delete(value);

			for (let i = 0; i < this.array.length; i++) {
				if (this.array[i] === value) {
					this.array.splice(i, 1);
					break;
				}
			}
		}
	}

	removeAt(index: number) {
		if (this.array.length - 1 < index) {
			return;
		}

		const [ value ] = this.array.splice(index, 1);

		this.set.delete(value);
	}
}
