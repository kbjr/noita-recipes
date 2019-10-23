
import { displayNames } from './names';
import { MaterialGraphics } from './graphics';
import { CellDataNode, CellDataChildNode, CellName, CellUIName, CellTag, GraphicsNode } from './xml-structure';

export class MaterialCell {
	public readonly name: CellName;
	public readonly uiName: CellUIName;
	public readonly displayName: typeof displayNames[keyof typeof displayNames];
	public readonly parent?: CellName;
	public readonly tags: Set<CellTag>;
	public readonly graphics?: MaterialGraphics;
	public readonly attrs: (CellDataNode | CellDataChildNode)['attr'];

	constructor(data: CellDataNode | CellDataChildNode) {
		this.name = data.attr.name;
		this.uiName = data.attr.ui_name;
		this.displayName = displayNames[data.attr.ui_name];
		this.parent = data.attr._parent;
		this.tags = data.attr.tags
			? new Set(data.attr.tags.split(',') as CellTag[])
			: new Set();

		this.graphics = data.Graphics
			? new MaterialGraphics(data.Graphics)
			: null;

		this.attrs = data.attr;

		// data.attr.ui_name;
		// data.attr._parent;
		// data.attr.tags;
		// data.attr.burnable;
		// data.attr.cell_type;
		// data.attr.wang_color;
		// data.attr.generates_smoke;
		// data.attr.liquid_gravity;
		// data.attr.liquid_sand;
		// data.attr.on_fire;
		// data.attr.requires_oxygen;
		// data.attr.gfx_glow;
		// data.attr.density;
		// data.attr.durability;
		// data.attr.liquid_static;
		// data.attr.temperature_of_fire;
		// data.attr.hp;
		// data.attr.platform_type;
		// data.attr.audio_physics_material_event;
		// data.attr.audio_physics_material_wall;
		// data.attr.audio_physics_material_solid;
		// data.attr.lifetime;
		// data.attr.autoignition_temperature;
		// data.attr.wang_noise_percent;
		// data.attr.solid_restitution;
		// data.attr.solid_static_type;
		// data.attr.liquid_stains;
		// data.attr.liquid_stains_self;
		// data.attr.status_effects;
		// data.attr.stickyness;
		// data.attr.liquid_slime;
		// data.attr.solid_friction;
		// data.attr.solid_break_to_type;
		// data.attr.electrical_conductivity;
		// data.attr.slippery;
		// data.attr.convert_to_box2d_material;
		// data.attr.solid_collide_with_self;
		// data.attr.solid_on_sleep_convert;
		// data.attr.crackability;
		// data.attr.wang_curvature;
		// data.attr.wang_noise_type;
		// data.attr.collapsible;
		// data.attr.supports_collapsible_structures;
		// data.attr.fire_hp;
		// data.attr.audio_materialbreakaudio_type;
		// data.attr.danger_water;
		// data.attr.liquid_sprite_stain_ignited_drop_chance;
		// data.attr.liauid_sprite_stains_check_offset;
		// data.attr.liquid_sprite_stains_status_threshold;
		// data.attr.liquid_sprite_stain_shaken_drop_chance;
		// data.attr.danger_radioactive;
		// data.attr.liquid_stains_custom_color;
		// data.attr.liquid_viscosity;
		// data.attr.liquid_sticks_to_ceiling;
		// data.attr.danger_fire;
		// data.attr.liquid_sand_never_box2d;
		// data.attr.cell_holes_in_texture;
		// data.attr.solid_on_collision_material;
		// data.attr.solid_on_collision_splash_power;
		// data.attr.audio_is_soft;
		// data.attr.liquid_solid;
		// data.attr.color;
		// data.attr.vegetation_full_lifetime_growth;
		// data.attr.vegetation_sprite;
		// data.attr.always_ignites_damagemodel;
		// data.attr.audio_materialaudio_type;
		// data.attr.on_fire_convert_to_material;
		// data.attr.solid_gravity_scale;
		// data.attr.solid_break_on_explosion_rate;
		// data.attr.solid_on_collision_explode;
		// data.attr.gfx_glow_color;
		// data.attr.stainable;
		// data.attr.solid_go_through_sand;
		// data.attr.explosion_power;
		// data.attr.audio_size_multiplier;
		// data.attr.solid_on_collision_convert;
		// data.attr.solid_on_break_explode;
	}
}
