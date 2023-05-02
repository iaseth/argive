import { Args } from "./args";



function parse (argv: string[]) : Args {
	if (!argv) {
		[,, ...argv] = process.argv;
	}
	const args = new Args(argv);
	return args;
}

const argive = {
	parse,
};

export default argive;
