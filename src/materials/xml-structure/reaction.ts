
import { CellTag } from './cell-tag';
import { CellName } from './cell-name';
import { Bool, Direction } from './generic-types';

export type ReactionMaterial = CellName | CellTag;
export type ReactionMaterialModifier = '_vapour' | '_rust' | '_oxide' | '_molten';

export interface ReactionNode {
	ExplosionConfig?: ExplosionConfigNode;
	attr: {
		/** Number between 0 and 100 */
		probability: number;

		input_cell1: string
		input_cell2: string;
		input_cell3?: string;

		output_cell1: string;
		output_cell2: string;

		destroy_horizontally_lonely_pixels?: Bool;
		req_lifetime?: number;
		blob_radius1?: number;
		blob_restrict_to_input_material1?: Bool;
		blob_radius2?: number;
		fast_reaction?: Bool,
		audio_fx_volume_1?: number,
		cosmetic_particle?: 'steam';
		direction?: Direction;
		blob_restrict_to_input_material2?: Bool;
	};
}

export interface ReqReactionNode {
	attr: {
		/** Number between 0 and 100 */
		probability: number;

		input_cell1: string;
		input_cell2: string;

		output_cell1: string;
		output_cell2: string;

		direction?: Direction;
	};
}

export interface ExplosionConfigNode {
	attr: {
		cell_explosion_power: number;
		cell_explosion_damage_required: number;
		cell_explosion_radius_min: number;
		cell_explosion_radius_max: number;
		cell_explosion_probability: number;
		ray_energy: number;
	};
}
