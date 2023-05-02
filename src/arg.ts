import { Args } from "./args";



export class Arg {
	parent: Args;
	text: string;
	value: string;

	next: Arg|null = null;
	prev: Arg|null = null;

	constructor(parent: Args, text: string) {
		this.parent = parent;
		this.text = text.trim();
		this.value = this.text;

		const last = this.parent.args.at(-1);
		if (last) {
			last.next = this;
			this.prev = last;
		}
	}

	isFlag () {
		return this.text[0] === "-";
	}

	isNotFlag () {
		return !this.isFlag();
	}

	isSingleFlag () {
		return this.text[0] === "-" && this.text[1] !== "-";
	}

	isDoubleFlag () {
		return this.text[0] === "-" && this.text[1] === "-" && this.text[2] !== "-";
	}

	isTripleFlag () {
		return this.text[0] === "-" && this.text[1] === "-" && this.text[2] === "-" && this.text[3] !== "-";
	}
}
