
import { MaterialColor } from './color';
import { GraphicsNode, CellName } from './xml-structure';

export class MaterialGraphics {
	public readonly color: MaterialColor;
	public readonly pixelAllAround?: MaterialColor;
	public readonly pixelLonely?: MaterialColor;
	public readonly pixelTopRight?: MaterialColor;
	public readonly pixelBottomLeft?: MaterialColor;
	public readonly pixelLeft?: MaterialColor;
	public readonly pixelTopLeft?: MaterialColor;
	public readonly pixelTop?: MaterialColor;
	public readonly pixelRight?: MaterialColor;
	public readonly pixelBottomRight?: MaterialColor;
	public readonly pixelBottom?: MaterialColor;

	public readonly fireColorsIndex?: 1 | 2 | 3 | 4 | 5;
	public readonly textureFile?: string;
	public readonly normalMapped: boolean;
	public readonly isGrass: boolean;
	public readonly audioPhysicsMaterialWall?: CellName;
	public readonly audioPhysicsMaterialSolid?: CellName;

	constructor(data: GraphicsNode) {
		this.color = color(data.attr.color);
		this.pixelAllAround = color(data.attr.pixel_all_around);
		this.pixelLonely = color(data.attr.pixel_lonely);
		this.pixelTopRight = color(data.attr.pixel_top_right);
		this.pixelBottomLeft = color(data.attr.pixel_bottom_left);
		this.pixelLeft = color(data.attr.pixel_left);
		this.pixelTopLeft = color(data.attr.pixel_top_left);
		this.pixelTop = color(data.attr.pixel_top);
		this.pixelRight = color(data.attr.pixel_right);
		this.pixelBottomRight = color(data.attr.pixel_bottom_right);
		this.pixelBottom = color(data.attr.pixel_bottom);
		this.fireColorsIndex = data.attr.fire_colors_index;
		this.textureFile = data.attr.texture_file;
		this.normalMapped = !! data.attr.normal_mapped;
		this.isGrass = !! data.attr.is_grass;
		this.audioPhysicsMaterialWall = data.attr.audio_physics_material_wall;
		this.audioPhysicsMaterialSolid = data.attr.audio_physics_material_solid;
	}
}

const color = (value: string) => {
	if (value) {
		return new MaterialColor(value);
	}
};
