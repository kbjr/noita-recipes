
export class MaterialColor {
	public readonly red: number;
	public readonly green: number;
	public readonly blue: number;
	public readonly alpha: number;

	constructor(public readonly hex: string) {
		this.red = parseInt(hex[0] + hex[1], 16);
		this.green = parseInt(hex[2] + hex[3], 16);
		this.blue = parseInt(hex[4] + hex[5], 16);
		this.alpha = parseAlpha(hex);
	}
}

const parseAlpha = (hex: string) => {
	const raw = parseInt(hex[6] + hex[7], 16);
	const percent = raw / 255;
	const rounded = Math.round(percent * 100) / 100;

	return rounded;
};
