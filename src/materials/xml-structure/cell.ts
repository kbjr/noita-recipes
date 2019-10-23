
import { Bool } from './generic-types';
import { CellType } from './cell-type';
import { CellName } from './cell-name';
import { CellUIName } from './cell-ui-name';
import { CellAudioPhysics } from './cell-audio-physics';
import { CellStatusEffect } from './cell-status-effects';

export interface CellDataChildNode extends CellDataNode {
	attr: CellDataNode['attr'] & {
		_parent: CellName;
		_inherit_reactions: Bool;
	};
}

export interface CellDataNode {
	Graphics?: GraphicsNode;
	attr: {
		name: CellName;
		ui_name: CellUIName;
		_parent?: CellName;
		/* Comma-delimited list of tags (CellTag) */
		tags?: string;
		burnable?: Bool;
		cell_type?: CellType;
		wang_color: string;
		generates_smoke?: number;
		liquid_gravity?: number;
		liquid_sand?: Bool;
		on_fire?: Bool;
		requires_oxygen?: Bool;
		/** Appears to be an 8-bit unsigned int */
		gfx_glow?: number;
		density?: number;
		/** Seems to be mostly small numbers (into the teens) */
		durability?: number;
		liquid_static?: Bool;
		temperature_of_fire?: number;
		/** Mostly numbers in the thousands to hundreds of thousands */
		hp?: number;
		platform_type?: Bool;
		audio_physics_material_event?: CellAudioPhysics;
		audio_physics_material_wall?: CellAudioPhysics;
		audio_physics_material_solid?: CellAudioPhysics;
		lifetime?: number;
		autoignition_temperature?: number;
		wang_noise_percent?: number;
		solid_restitution?: number;
		solid_static_type?: number;
		liquid_stains?: number;
		liquid_stains_self?: Bool;
		status_effects?: CellStatusEffect;
		stickyness?: number;
		liquid_slime?: Bool;
		solid_friction?: number;
		solid_break_to_type?: CellName;
		electrical_conductivity?: Bool;
		slippery?: Bool;
		convert_to_box2d_material?: CellName;
		solid_collide_with_self?: Bool;
		solid_on_sleep_convert?: Bool;
		crackability?: number;
		wang_curvature?: number;
		wang_noise_type?: number;
		collapsible?: Bool;
		supports_collapsible_structures?: Bool;
		fire_hp?: number;
		audio_materialbreakaudio_type?: 'WOOD';
		danger_water?: Bool;
		liquid_sprite_stain_ignited_drop_chance?: number;
		liauid_sprite_stains_check_offset?: number;
		liquid_sprite_stains_status_threshold?: number;
		liquid_sprite_stain_shaken_drop_chance?: number;
		danger_radioactive?: Bool;
		liquid_stains_custom_color?: string;
		liquid_viscosity?: number;
		liquid_sticks_to_ceiling?: number;
		danger_fire?: Bool;
		liquid_sand_never_box2d?: Bool;
		cell_holes_in_texture?: Bool;
		solid_on_collision_material?: 'blood' | 'slime' | 'blood_fungi';
		solid_on_collision_splash_power?: Bool;
		audio_is_soft?: Bool;
		liquid_solid?: Bool;
		color?: string;
		vegetation_full_lifetime_growth?: number;
		vegetation_sprite?: string;
		always_ignites_damagemodel?: Bool;
		audio_materialaudio_type?: 'LAVA';
		on_fire_convert_to_material?: CellName;
		solid_gravity_scale?: number;
		solid_break_on_explosion_rate?: number;
		solid_on_collision_explode?: Bool;
		gfx_glow_color?: string;
		stainable?: Bool;
		solid_go_through_sand?: Bool;
		explosion_power?: number;
		audio_size_multiplier?: number;
		solid_on_collision_convert?: Bool;
		solid_on_break_explode?: Bool;
	};
}

export interface GraphicsNode {
	Edge?: EdgeNode;
	attr: {
		// These are all hex color strings
		color: string;
		pixel_all_around?: string;
		pixel_lonely?: string;
		pixel_top_right?: string;
		pixel_bottom_left?: string;
		pixel_left?: string;
		pixel_top_left?: string;
		pixel_top?: string;
		pixel_right?: string;
		pixel_bottom_right?: string;
		pixel_bottom?: string;

		fire_colors_index?: 1 | 2 | 3 | 4 | 5;
		texture_file?: string;
		normal_mapped?: Bool;
		is_grass?: Bool;
		audio_physics_material_wall: CellName;
		audio_physics_material_solid: CellName;
	};
}

export interface EdgeNode {
	EdgeGraphics: EdgeGraphicsNode;
}

export interface EdgeGraphicsNode {
	Images: {
		Image: ImageNode | ImageNode[];
	};
	attrs: {
		color: string;
		overwrite: number;
		percent: number;
		require_same_material: Bool;
		require_same_material_type: Bool;
		type: 'COLOR_EDGE_PIXELS' | 'EVERYWHERE'  | 'CARDINAL_DIRECTIONS'  | 'NORMAL_BASED';
		z: number;
	};
}

export interface ImageNode {
	allow_random_rotation?: Bool;
	filename: string;
	do_only_horizontal_stripe?: Bool;
	do_only_vertical_stripe?: Bool;
	min_angle?: number;
	max_angle?: number;
}
