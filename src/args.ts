import { Arg } from "./arg"



export class Args {
	args: Arg[] = [];
	singleFlags: Arg[] = [];
	doubleFlags: Arg[] = [];
	tripleFlags: Arg[] = [];
	nonFlags: Arg[] = [];

	constructor(argv: string[]) {
		for (const text of argv) {
			const arg = new Arg(this, text);
			this.args.push(arg);
		}

		this.singleFlags = this.args.filter(a => a.isSingleFlag());
		this.doubleFlags = this.args.filter(a => a.isDoubleFlag());
		this.tripleFlags = this.args.filter(a => a.isTripleFlag());
		this.nonFlags = this.args.filter(a => a.isNotFlag());
	}
}
