(function (eventemitter3) {
	'use strict';

	var Materials = {
		CellData: [
			{
				attr: {
					name: "air",
					ui_name: "$mat_air",
					wang_color: "ff000042"
				}
			},
			{
				attr: {
					name: "fire",
					ui_name: "$mat_fire",
					tags: "[fire]",
					burnable: 0,
					density: 1,
					cell_type: "fire",
					wang_color: "7fFF6060",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					gfx_glow: 255
				},
				Graphics: {
					attr: {
						color: "7fff6000"
					}
				}
			},
			{
				attr: {
					name: "spark",
					ui_name: "$mat_spark",
					tags: "[fire]",
					burnable: 0,
					density: 1,
					cell_type: "fire",
					wang_color: "7fff6024",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 0,
					gfx_glow: 255
				}
			},
			{
				attr: {
					name: "spark_electric",
					ui_name: "$mat_spark_electric",
					tags: "[fire]",
					burnable: 0,
					density: 1,
					cell_type: "fire",
					wang_color: "7f27b4f6",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 0,
					gfx_glow: 255
				}
			},
			{
				attr: {
					name: "flame",
					ui_name: "$mat_flame",
					tags: "[fire]",
					burnable: 0,
					density: 1,
					lifetime: 5,
					cell_type: "fire",
					wang_color: "7fce0f0f",
					generates_smoke: 0,
					liquid_gravity: 5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "sand_static",
					ui_name: "$mat_sand_static",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff524f2d",
					durability: 10,
					generates_smoke: 0,
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 19000,
					platform_type: 1,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/earth.png",
						color: "ff524f2d"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_sand_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_sand_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_sand_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_sand_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_sand_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_sand_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "nest_static",
					ui_name: "$mat_nest_static",
					tags: "[static],[corrodible],[burnable],[alchemy],[solid]",
					burnable: 1,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffA83E29",
					generates_smoke: 0,
					liquid_gravity: 0.6,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 40,
					autoignition_temperature: 85,
					wang_noise_percent: 2.5,
					hp: 5000,
					platform_type: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/nest.png",
						color: "ffA83E29"
					}
				}
			},
			{
				attr: {
					name: "bluefungi_static",
					ui_name: "$mat_bluefungi_static",
					tags: "[static],[corrodible],[burnable],[alchemy],[solid]",
					burnable: 1,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff435495",
					generates_smoke: 0,
					liquid_gravity: 0.6,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 40,
					autoignition_temperature: 85,
					wang_noise_percent: 2.5,
					hp: 20,
					gfx_glow: 50,
					solid_restitution: 0.7,
					platform_type: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/bluefungi.png",
						color: "ff435495"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -8.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 37,
						render_on_grid: 1,
						airflow_force: 0.6314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.0003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "rock_static",
					ui_name: "$mat_rock_static",
					tags: "[static],[corrodible],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff353923",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					solid_static_type: 1,
					durability: 10,
					on_fire: 0,
					hp: 100000,
					platform_type: 1,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff313b36",
						pixel_all_around: "ff313b36"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "water_static",
					ui_name: "$mat_water_static",
					tags: "[static]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "A02F554D",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					status_effects: "WET",
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						color: "A0376259"
					}
				}
			},
			{
				attr: {
					name: "endslime_static",
					ui_name: "$mat_endslime_static",
					tags: "[static],[alchemy],[solid]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "888BFF80",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					liquid_static: 1,
					stickyness: 0.7,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/endslime.png",
						color: "888BFF80"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.8,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_endslime_1.png"
									}
								}
							}
						}
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -13.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 60,
						render_on_grid: 1,
						airflow_force: 0.5314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.0045,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "slime_static",
					ui_name: "$mat_slime_static",
					tags: "[static],[alchemy],[solid]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "88E8BD5C",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					liquid_slime: 1,
					stickyness: 1,
					solid_friction: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/slime.png",
						color: "88E8BD5C"
					}
				}
			},
			{
				attr: {
					name: "lavarock_static",
					ui_name: "$mat_lavarock_static",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff5F2621",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					solid_break_to_type: "lavasand",
					on_fire: 0,
					hp: 90000,
					platform_type: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/lavarock.png",
						color: "ff5F2621",
						pixel_all_around: "ff5F2621",
						pixel_lonely: "ff5F2621",
						pixel_top_right: "ff5F2621",
						pixel_bottom_left: "ff5F2621",
						pixel_left: "ff8D3620",
						pixel_top_left: "ff8D3620",
						pixel_top: "ff8D3620",
						pixel_right: "ff321616",
						pixel_bottom_right: "ff321616",
						pixel_bottom: "ff321616"
					}
				}
			},
			{
				attr: {
					name: "meteorite_static",
					ui_name: "$mat_meteorite_static",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff1D1010",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					solid_restitution: 0,
					on_fire: 0,
					hp: 10000,
					platform_type: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meteor.png",
						color: "ff1D1010",
						pixel_all_around: "ff1D1010",
						pixel_lonely: "ff1D1010",
						pixel_top_right: "ff461F1F",
						pixel_bottom_left: "ff0A0606",
						pixel_left: "ff0A0606",
						pixel_top_left: "ff1D1010",
						pixel_top: "ff461F1F",
						pixel_right: "ff461F1F",
						pixel_bottom: "ff0A0606",
						pixel_bottom_right: "ff1D1010"
					}
				}
			},
			{
				attr: {
					name: "templerock_static",
					ui_name: "$mat_templerock_static",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff6F5439",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					solid_static_type: 1,
					on_fire: 0,
					wang_noise_percent: 0.15,
					hp: 10000,
					platform_type: 1,
					durability: 14,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templerock.png",
						color: "ff6F5439",
						pixel_all_around: "ff6F5439",
						pixel_lonely: "ff6F5439",
						pixel_top_right: "ff6F5439",
						pixel_bottom_left: "ff6F5439",
						pixel_left: "ff9A7142",
						pixel_top_left: "ff9A7142",
						pixel_top: "ff9A7142",
						pixel_right: "ff543F2B",
						pixel_bottom: "ff543F2B",
						pixel_bottom_right: "ff543F2B"
					}
				}
			},
			{
				attr: {
					name: "steel_static",
					ui_name: "$mat_steel_static",
					tags: "[static],[corrodible],[rust],[alchemy],[meltable_metal],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff404041",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					durability: 12,
					wang_noise_percent: 0.28,
					hp: 130000,
					solid_friction: 0.75,
					electrical_conductivity: 1,
					platform_type: 1,
					audio_physics_material_event: "metalhollow",
					audio_physics_material_wall: "metalwall",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff404040",
						pixel_all_around: "ff404040"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "rock_static_glow",
					ui_name: "$mat_rock_static_glow",
					tags: "[static],[corrodible],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff145014",
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					gfx_glow: 100,
					hp: 60000,
					platform_type: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glowrock.png",
						color: "ff145014"
					}
				}
			},
			{
				attr: {
					name: "snow_static",
					ui_name: "$mat_snow_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_water],[alchemy],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ffEBEBEC",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 1000,
					wang_noise_percent: 0,
					solid_friction: 0.6,
					platform_type: 1,
					audio_physics_material_wall: "snow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/snow.png",
						color: "ffEBEBEB"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.8,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_snow.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "ice_static",
					ui_name: "$mat_ice_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_water],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffCFF7C8",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					slippery: 1,
					solid_friction: 0.05,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					gfx_glow: 0,
					hp: 30000,
					convert_to_box2d_material: "ice_glass",
					platform_type: 1,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffCFF7C8"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.8,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_ice.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "ice_acid_static",
					ui_name: "$mat_ice_acid_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_acid],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffCFFFC8",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					slippery: 1,
					solid_friction: 0.05,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 30000,
					convert_to_box2d_material: "ice_acid_glass",
					platform_type: 1,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					gfx_glow: 70
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_acid.png",
						color: "ffCFFFC8"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.3,
						"lifetime.max": 0.6,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.004,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "ice_cold_static",
					ui_name: "$mat_ice_cold_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_cold],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffAFFFC8",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					slippery: 1,
					solid_friction: 0.05,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					gfx_glow: 40,
					hp: 30000,
					convert_to_box2d_material: "ice_cold_glass",
					platform_type: 1,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_cold.png",
						color: "ffAFFFC8"
					}
				}
			},
			{
				attr: {
					name: "ice_radioactive_static",
					ui_name: "$mat_ice_radioactive_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_radioactive],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffBFFFC8",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					slippery: 1,
					solid_friction: 0.05,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					gfx_glow: 70,
					hp: 30000,
					convert_to_box2d_material: "ice_radioactive_glass",
					platform_type: 1,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_radioactive.png",
						color: "ffBFFFC8"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "ice_poison_static",
					ui_name: "$mat_ice_poison_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_poison],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffba2de0",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					slippery: 1,
					solid_friction: 0.05,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					gfx_glow: 70,
					hp: 30000,
					convert_to_box2d_material: "ice_poison_glass",
					platform_type: 1,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_poison.png",
						color: "ffba2de0"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "ice_meteor_static",
					ui_name: "$mat_ice_meteor_static",
					tags: "[static],[corrodible],[frozen],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffCF1FC8",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					slippery: 1,
					solid_friction: 0.05,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					gfx_glow: 20,
					hp: 30000,
					convert_to_box2d_material: "meteorite_crackable",
					platform_type: 1,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_acid.png",
						color: "ffCF1FC8"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.3,
						"lifetime.max": 0.6,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.004,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "tubematerial",
					ui_name: "$mat_tubematerial",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffCFF7C5",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_restitution: 0.4,
					gfx_glow: 20,
					hp: 30000,
					convert_to_box2d_material: "tube_physics",
					platform_type: 1,
					audio_physics_material_wall: "glass",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffCFF7C5"
					}
				}
			},
			{
				attr: {
					name: "glass_static",
					ui_name: "$mat_glass_static",
					tags: "[static],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffa16065",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_restitution: 0,
					gfx_glow: 6,
					hp: 30000,
					convert_to_box2d_material: "glass_brittle",
					platform_type: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glass.png",
						color: "ffa16065"
					}
				}
			},
			{
				attr: {
					name: "waterrock",
					ui_name: "$mat_waterrock",
					tags: "[static],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ff1a43f4",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					solid_static_type: 2,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 0,
					solid_friction: 0.05,
					platform_type: 1,
					hp: 10000,
					gfx_glow: 20
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff1a43f4"
					}
				}
			},
			{
				attr: {
					name: "ice_glass",
					ui_name: "$mat_ice_glass",
					tags: "[box2d],[static],[meltable_to_water],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffaedde3",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					solid_static_type: 5,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_break_to_type: "ice_static",
					solid_friction: 0.05,
					crackability: 100,
					platform_type: 1,
					slippery: 1,
					hp: 10000,
					gfx_glow: 0,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffCFF7C8"
					}
				}
			},
			{
				attr: {
					name: "ice_glass_b2",
					ui_name: "$mat_ice_glass_b2",
					tags: "[static],[meltable_to_water],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffaedde5",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					solid_static_type: 0,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_break_to_type: "ice_static",
					crackability: 100,
					platform_type: 1,
					solid_friction: 0.05,
					hp: 10000,
					gfx_glow: 20,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffCFF7C8"
					}
				}
			},
			{
				attr: {
					name: "glass_brittle",
					ui_name: "$mat_glass_brittle",
					tags: "[static],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffaeddd3",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					solid_static_type: 2,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_break_to_type: "glass_static",
					crackability: 100,
					solid_friction: 0.9,
					solid_restitution: 0,
					platform_type: 1,
					hp: 10000,
					gfx_glow: 6,
					audio_physics_material_wall: "glass",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glass.png",
						color: "ffaeddd3"
					}
				}
			},
			{
				attr: {
					name: "snowrock_static",
					ui_name: "$mat_snowrock_static",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ffDBDBDC",
					liquid_sand: 1,
					liquid_static: 1,
					solid_friction: 0.6,
					wang_noise_percent: 0.9,
					wang_curvature: 0.5,
					wang_noise_type: 2,
					on_fire: 0,
					hp: 70000,
					platform_type: 1,
					audio_physics_material_wall: "snow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/snowrock.png",
						color: "ffDBDBDB",
						pixel_all_around: "ff313b36"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.2,
								require_same_material: 1,
								require_same_material_type: 0,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_snowrock_test_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_snowrock_test_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_snowrock_test_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_snowrock_test_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_snowrock_test_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_snowrock_test_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "concrete_static",
					ui_name: "$mat_concrete_static",
					tags: "[static],[corrodible],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff767677",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					collapsible: 1,
					solid_friction: 1,
					hp: 30000,
					supports_collapsible_structures: 0,
					platform_type: 1,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/concrete.png",
						color: "ff767676"
					}
				}
			},
			{
				attr: {
					name: "wood_static",
					ui_name: "$mat_wood_static",
					tags: "[corrodible],[burnable],[alchemy],[solid]",
					burnable: 1,
					density: 11,
					cell_type: "liquid",
					wang_color: "ff413F24",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					fire_hp: 600,
					requires_oxygen: 1,
					temperature_of_fire: 90,
					autoignition_temperature: 85,
					solid_friction: 0.9,
					hp: 2000,
					durability: 10,
					wang_noise_percent: 0.01,
					wang_curvature: 0.25,
					supports_collapsible_structures: 1,
					platform_type: 1,
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood",
					audio_materialbreakaudio_type: "WOOD"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff413F24",
						pixel_all_around: "ff5d5a33"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "cheese_static",
					ui_name: "$mat_cheese_static",
					tags: "[static],[corrodible],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "ffF3CD67",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					solid_static_type: 1,
					durability: 5,
					on_fire: 0,
					hp: 1000,
					platform_type: 1,
					audio_physics_material_event: "slime",
					audio_physics_material_wall: "slime",
					audio_physics_material_solid: "slime"
				}
			},
			{
				attr: {
					name: "smoke",
					ui_name: "$mat_smoke",
					tags: "[gas]",
					burnable: 0,
					density: 1,
					lifetime: 350,
					cell_type: "gas",
					wang_color: "7f848485",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "cloud",
					ui_name: "$mat_cloud",
					tags: "[gas]",
					burnable: 0,
					density: 1,
					lifetime: 350,
					cell_type: "gas",
					liquid_static: 1,
					platform_type: 1,
					wang_color: "7fAFAFBF",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "cloud_lighter",
					ui_name: "$mat_cloud",
					tags: "[gas]",
					burnable: 0,
					density: 1,
					lifetime: 350,
					cell_type: "gas",
					liquid_static: 1,
					platform_type: 1,
					wang_color: "7fAFAFE5",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "smoke_explosion",
					ui_name: "$mat_smoke_explosion",
					tags: "[gas]",
					burnable: 0,
					density: 1,
					lifetime: 150,
					cell_type: "gas",
					wang_color: "7f848486",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "steam",
					ui_name: "$mat_steam",
					tags: "[gas]",
					burnable: 0,
					lifetime: 1000,
					density: 1,
					cell_type: "gas",
					wang_color: "7fc5c5ff",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "acid_gas",
					ui_name: "$mat_acid_gas",
					tags: "[gas],[burnable_fast]",
					burnable: 1,
					density: 2,
					cell_type: "gas",
					lifetime: 450,
					wang_color: "af4eb815",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					fire_hp: 1000,
					requires_oxygen: 0,
					temperature_of_fire: 60,
					autoignition_temperature: 1
				}
			},
			{
				attr: {
					name: "acid_gas_static",
					ui_name: "$mat_acid_gas_static",
					tags: "[gas],[burnable_fast]",
					burnable: 1,
					density: 2,
					cell_type: "gas",
					lifetime: 0,
					wang_color: "af4eb817",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					liquid_static: 1,
					on_fire: 0,
					fire_hp: 1000,
					requires_oxygen: 0,
					temperature_of_fire: 60,
					autoignition_temperature: 1
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.3,
						"lifetime.max": 0.6,
						"gravity.y": 0,
						render_on_grid: 1,
						draw_as_long: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.01,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "smoke_static",
					ui_name: "$mat_smoke_static",
					tags: "[gas]",
					burnable: 0,
					density: 1,
					lifetime: 0,
					cell_type: "gas",
					wang_color: "7f848487",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "blood_cold_vapour",
					ui_name: "$mat_blood_cold_vapour",
					tags: "[gas],[vapour]",
					burnable: 0,
					density: 2,
					cell_type: "gas",
					lifetime: 250,
					wang_color: "7f5C98CD",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 0,
					autoignition_temperature: 99,
					gfx_glow: 255
				},
				ParticleEffect: {
					attr: {
						"vel.y": 0,
						"vel_random.min_x": -17,
						"vel_random.max_x": 17,
						"vel_random.min_y": -17,
						"vel_random.max_y": -17,
						"lifetime.min": 0.0857,
						"lifetime.max": 0.3343,
						"gravity.y": -0.857,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.5714,
						probability: 0.6571,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "sand_herb_vapour",
					ui_name: "$mat_sand_herb_vapour",
					tags: "[gas],[vapour]",
					burnable: 0,
					density: 2,
					cell_type: "gas",
					lifetime: 250,
					wang_color: "7f6E8C3B",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 0,
					autoignition_temperature: 99
				}
			},
			{
				attr: {
					name: "radioactive_gas",
					ui_name: "$mat_radioactive_gas",
					tags: "[gas]",
					burnable: 0,
					density: 2,
					cell_type: "gas",
					lifetime: 450,
					wang_color: "af43b815",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					gfx_glow: 100
				},
				Graphics: {
					attr: {
						color: "7fC4FF10"
					}
				}
			},
			{
				attr: {
					name: "radioactive_gas_static",
					ui_name: "$mat_radioactive_gas_static",
					tags: "[gas]",
					burnable: 0,
					density: 2,
					cell_type: "gas",
					lifetime: 0,
					wang_color: "af43b818",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					liquid_static: 1,
					gfx_glow: 100
				},
				Graphics: {
					attr: {
						color: "7fC4FF10"
					}
				}
			},
			{
				attr: {
					name: "water",
					ui_name: "$mat_water",
					tags: "[liquid],[corrodible],[freezable],[water]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "902F554C",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					liquid_stains_self: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					danger_water: 1,
					liquid_stains: 1,
					status_effects: "WET",
					liquid_sprite_stain_ignited_drop_chance: 10,
					liauid_sprite_stains_check_offset: -1
				},
				Graphics: {
					attr: {
						color: "A0376259"
					}
				}
			},
			{
				attr: {
					name: "water_temp",
					ui_name: "$mat_water_temp",
					tags: "[liquid],[corrodible],[freezable],[water]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "902F554F",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					status_effects: "WET",
					danger_water: 1
				}
			},
			{
				attr: {
					name: "water_ice",
					ui_name: "$mat_water_ice",
					tags: "[liquid],[corrodible],[meltable_to_water],[freezable],[water]",
					burnable: 0,
					density: 3.5,
					cell_type: "liquid",
					wang_color: "602F557F",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					status_effects: "WET",
					danger_water: 1
				},
				Graphics: {
					attr: {
						color: "A0376269"
					}
				}
			},
			{
				attr: {
					name: "water_swamp",
					ui_name: "$mat_water_swamp",
					tags: "[liquid],[corrodible],[meltable_to_water],[water],[impure]",
					burnable: 0,
					density: 3.4,
					cell_type: "liquid",
					wang_color: "802F552C",
					generates_smoke: 0,
					liquid_gravity: 0.9,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					status_effects: "WET",
					danger_water: 1
				}
			},
			{
				attr: {
					name: "oil",
					ui_name: "$mat_oil",
					tags: "[liquid],[burnable],[impure]",
					burnable: 1,
					density: 1,
					cell_type: "liquid",
					wang_color: "ff3B3B3C",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					fire_hp: 500,
					liquid_sand: 0,
					liquid_stains: 4,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 95,
					autoignition_temperature: 10,
					electrical_conductivity: 0,
					status_effects: "OILED",
					liauid_sprite_stains_check_offset: 1,
					liquid_sprite_stains_status_threshold: 0.2
				},
				Graphics: {
					attr: {
						color: "e63D3728"
					}
				}
			},
			{
				attr: {
					name: "alcohol",
					ui_name: "$mat_alcohol",
					tags: "[liquid],[burnable],[water],[impure]",
					burnable: 1,
					density: 3.5,
					cell_type: "liquid",
					wang_color: "90d0ffe8",
					generates_smoke: 0,
					liquid_gravity: 1.2,
					liquid_sand: 0,
					liquid_stains: 1,
					liquid_stains_self: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 80,
					autoignition_temperature: 10,
					status_effects: "ALCOHOLIC"
				},
				Graphics: {
					attr: {
						color: "4FEA7207"
					}
				}
			},
			{
				attr: {
					name: "magic_liquid",
					ui_name: "$mat_magic_liquid",
					tags: "[liquid],[water],[magic_liquid],[impure]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "80fffea2",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					lifetime: 300
				},
				ParticleEffect: {
					attr: {
						"vel.y": 2.86,
						"vel_random.min_x": -6,
						"vel_random.max_x": 6,
						"vel_random.min_y": -2.9,
						"vel_random.max_y": 3.2,
						render_on_grid: 1,
						probability: 0.6,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_teleportation",
					ui_name: "$mat_magic_liquid_teleportation",
					tags: "[liquid],[water],[magic_liquid],[impure]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "807fceea",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 5,
					status_effects: "TELEPORTATION"
				},
				ParticleEffect: {
					attr: {
						"vel.y": 17.14,
						"vel_random.min_y": -100,
						"vel_random.max_y": 25.71,
						"lifetime.min": 0,
						"gravity.y": -8.57,
						render_on_grid: 1,
						draw_as_long: 1,
						friction: -3.429,
						probability: 0.0518
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_hp_regeneration",
					ui_name: "$mat_magic_liquid_hp_regeneration",
					tags: "[liquid],[water],[magic_liquid],[regenerative]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "80a1f18b",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 5
				},
				ParticleEffect: {
					attr: {
						"vel.y": -14.28,
						"vel_random.min_x": -0.285,
						"vel_random.max_x": 0.285,
						"vel_random.min_y": -11.43,
						"vel_random.max_y": 11.43,
						"lifetime.min": 0,
						"lifetime.max": 20,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.1146,
						airflow_scale: -0.028,
						probability: 0.018,
						"count.min": 0
					}
				}
			},
			{
				attr: {
					_parent: "magic_liquid_hp_regeneration",
					name: "magic_liquid_hp_regeneration_unstable",
					ui_name: "$mat_magic_liquid_hp_regeneration_unstable",
					tags: "[liquid],[water],[magic_liquid],[regenerative]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "80a1f18c",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 5,
					status_effects: "HP_REGENERATION",
					lifetime: 900
				},
				ParticleEffect: {
					attr: {
						"vel.y": -14.28,
						"vel_random.min_x": -0.285,
						"vel_random.max_x": 0.285,
						"vel_random.min_y": -11.43,
						"vel_random.max_y": 11.43,
						"lifetime.min": 0,
						"lifetime.max": 20,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.1146,
						airflow_scale: -0.028,
						probability: 0.018,
						"count.min": 0
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_polymorph",
					ui_name: "$mat_magic_liquid_polymorph",
					tags: "[liquid],[water],[magic_liquid],[magic_polymorph],[impure]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "80f18beb",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 5,
					status_effects: "POLYMORPH"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -2.857,
						"vel_random.min_x": -6,
						"vel_random.max_x": 6,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": 8.914,
						"lifetime.min": 5,
						"lifetime.max": 10,
						"gravity.y": 0,
						render_on_grid: 1,
						draw_as_long: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 3.143,
						probability: 0.0857,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_random_polymorph",
					ui_name: "$mat_magic_liquid_random_polymorph",
					tags: "[liquid],[water],[magic_liquid],[magic_polymorph],[impure]",
					burnable: 0,
					density: 4,
					cell_type: "liquid",
					wang_color: "80a3569f",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 5,
					status_effects: "POLYMORPH_RANDOM"
				},
				ParticleEffect: {
					attr: {
						"vel.y": 0,
						"vel_random.min_x": -17.43,
						"vel_random.max_x": 17.43,
						"vel_random.min_y": -45.75,
						"vel_random.max_y": 40,
						"lifetime.min": 5,
						"lifetime.max": 10,
						"gravity.y": 0,
						render_on_grid: 1,
						draw_as_long: 1,
						airflow_force: 1.974,
						airflow_scale: 0.1371,
						friction: 3.714,
						probability: 0.0857,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_berserk",
					ui_name: "$mat_magic_liquid_berserk",
					tags: "[liquid],[water],[magic_liquid],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "80f86868",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 1,
					status_effects: "BERSERK"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -100,
						"vel_random.min_y": -31,
						"vel_random.max_y": 74,
						"lifetime.min": 0.0285,
						"lifetime.max": 0.5,
						"gravity.x": -100,
						"gravity.y": 100,
						render_on_grid: 1,
						draw_as_long: 1,
						friction: 5,
						"count.min": 0
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_charm",
					ui_name: "$mat_magic_liquid_charm",
					tags: "[liquid],[water],[magic_liquid],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "80c23055",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 0,
					liquid_sprite_stain_ignited_drop_chance: 0,
					status_effects: "CHARM"
				},
				Graphics: {
					attr: {
						color: "80c23055"
					}
				},
				ParticleEffect: {
					attr: {
						"vel_random.min_x": -17,
						"vel_random.max_x": 17,
						"vel_random.min_y": -17,
						"vel_random.max_y": -5,
						"lifetime.min": 0.12,
						"lifetime.max": 0.41,
						"gravity.y": 2.857,
						render_on_grid: 1,
						friction: -10,
						probability: 0.3571
					}
				}
			},
			{
				attr: {
					name: "magic_liquid_invisibility",
					ui_name: "$mat_magic_liquid_invisibility",
					tags: "[liquid],[water],[magic_liquid],[impure]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "80306cc0",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 0,
					gfx_glow: 150,
					on_fire: 0,
					requires_oxygen: 0,
					liquid_stains: 1,
					liquid_sprite_stain_shaken_drop_chance: 1,
					status_effects: "INVISIBILITY"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -40,
						"vel_random.min_y": -20.21,
						"vel_random.max_y": -2.861,
						"vel_random.min_x": -6.667,
						"vel_random.max_x": 6.667,
						"lifetime.min": 0.3238,
						"lifetime.max": 9.3238,
						"gravity.y": -100,
						render_on_grid: 1,
						airflow_force: 10,
						airflow_scale: 6.857,
						draw_as_long: 0,
						friction: 1.352,
						probability: 0.0343
					}
				}
			},
			{
				attr: {
					name: "cloud_radioactive",
					ui_name: "$mat_cloud_radioactive",
					tags: "[liquid],[radioactive],[impure]",
					burnable: 0,
					density: 1,
					cell_type: "liquid",
					wang_color: "1101FF34",
					gfx_glow: 130,
					generates_smoke: 0,
					liquid_gravity: 0,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					danger_radioactive: 1,
					lifetime: 10,
					status_effects: "RADIOACTIVE"
				},
				Graphics: {
					attr: {
						color: "11B4FF10"
					}
				}
			},
			{
				attr: {
					name: "cloud_alcohol",
					ui_name: "$mat_cloud_alcohol",
					tags: "[liquid],[impure]",
					burnable: 1,
					density: 1,
					cell_type: "liquid",
					wang_color: "1101FE34",
					gfx_glow: 130,
					generates_smoke: 0,
					liquid_gravity: 0,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 80,
					autoignition_temperature: 10,
					lifetime: 10,
					status_effects: "ALCOHOLIC"
				},
				Graphics: {
					attr: {
						color: "22f87d12"
					}
				}
			},
			{
				attr: {
					name: "cloud_blood",
					ui_name: "$mat_cloud_blood",
					tags: "[liquid],[blood],[impure]",
					burnable: 0,
					density: 1,
					cell_type: "liquid",
					wang_color: "2201FD34",
					gfx_glow: 130,
					generates_smoke: 0,
					liquid_gravity: 0,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					liquid_stains_custom_color: "aa830000",
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					lifetime: 10,
					status_effects: "BLOODY"
				},
				Graphics: {
					attr: {
						color: "33b80000"
					}
				}
			},
			{
				attr: {
					name: "cloud_slime",
					ui_name: "$mat_cloud_slime",
					tags: "[liquid],[impure]",
					burnable: 0,
					density: 1,
					cell_type: "liquid",
					wang_color: "2201FC34",
					gfx_glow: 130,
					generates_smoke: 0,
					liquid_gravity: 0,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					lifetime: 10,
					status_effects: "SLIMY"
				},
				Graphics: {
					attr: {
						color: "37c5447c"
					}
				}
			},
			{
				attr: {
					name: "swamp",
					ui_name: "$mat_swamp",
					tags: "[liquid],[corrodible],[soluble],[meltable_to_water],[freezable],[water],[impure]",
					burnable: 0,
					density: 3.5,
					cell_type: "liquid",
					wang_color: "802f2f0a",
					generates_smoke: 0,
					liquid_gravity: 0.6,
					liquid_viscosity: 15,
					liquid_sand: 0,
					liquid_stains: 1,
					on_fire: 0,
					requires_oxygen: 1,
					status_effects: "WET",
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/swamp.png",
						color: "802f2f0a"
					}
				}
			},
			{
				attr: {
					name: "mud",
					ui_name: "$mat_mud",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[impure]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "A0363e21",
					generates_smoke: 0,
					liquid_gravity: 0.3,
					liquid_sand: 1,
					liquid_viscosity: 75,
					liquid_stains: 1,
					liquid_sticks_to_ceiling: 50,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					status_effects: "WET",
					hp: 2000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/mud.png",
						color: "A0363e21"
					}
				}
			},
			{
				attr: {
					name: "blood",
					ui_name: "$mat_blood",
					tags: "[liquid],[corrodible],[soluble],[blood],[impure]",
					burnable: 0,
					density: 4.1,
					cell_type: "liquid",
					wang_color: "aa830000",
					generates_smoke: 0,
					liquid_gravity: 0.7,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					status_effects: "BLOODY"
				}
			},
			{
				attr: {
					name: "blood_fading",
					ui_name: "$mat_blood_fading",
					tags: "[liquid],[corrodible],[soluble],[evaporable_fast],[blood],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "aa830002",
					generates_smoke: 0,
					liquid_gravity: 0.7,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					status_effects: "BLOODY"
				}
			},
			{
				attr: {
					name: "blood_fungi",
					ui_name: "$mat_blood_fungi",
					tags: "[liquid],[corrodible],[soluble],[evaporable],[blood],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "aa830001",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					gfx_glow: 100,
					status_effects: "SLIMY"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/fungi.png",
						color: "ffF064AA"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -8.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 37,
						render_on_grid: 1,
						airflow_force: 0.6314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.0003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "blood_worm",
					ui_name: "$mat_blood_worm",
					tags: "[liquid],[corrodible],[soluble],[blood],[impure]",
					burnable: 0,
					density: 2,
					cell_type: "liquid",
					wang_color: "88C8BC00",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 0,
					liquid_stains: 2,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/yellowblood.png",
						color: "88C8BC00"
					}
				}
			},
			{
				attr: {
					name: "blood_cold",
					ui_name: "$mat_blood_cold",
					tags: "[liquid],[corrodible],[soluble],[evaporable_custom],[blood],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "aa830023",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 0,
					gfx_glow: 255
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/blueblood.png",
						color: "ff3d4d87"
					}
				}
			},
			{
				attr: {
					name: "radioactive_liquid",
					ui_name: "$mat_radioactive_liquid",
					tags: "[liquid],[corrodible],[soluble],[radioactive],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "4400FF33",
					gfx_glow: 60,
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					danger_radioactive: 1,
					status_effects: "RADIOACTIVE",
					liquid_sprite_stain_shaken_drop_chance: 1,
					liauid_sprite_stains_check_offset: 1,
					liquid_sprite_stains_status_threshold: 0.2
				},
				Graphics: {
					attr: {
						color: "44B4FF10"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "radioactive_liquid_fading",
					ui_name: "$mat_radioactive_liquid_fading",
					tags: "[liquid],[corrodible],[soluble],[evaporable],[radioactive],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "4400FF34",
					gfx_glow: 130,
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					danger_radioactive: 1
				},
				Graphics: {
					attr: {
						color: "44B4FF10"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "plasma_fading",
					ui_name: "$mat_plasma_fading",
					tags: "[liquid],[corrodible],[soluble],[evaporable_fast],[impure]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "7734bfff",
					gfx_glow: 254,
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 0,
					liquid_stains: 0,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10
				}
			},
			{
				attr: {
					name: "gold_molten",
					ui_name: "$mat_gold_molten",
					tags: "[liquid],[corrodible],[molten],[meltable_to_lava],[alchemy],[gold],[solid]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "ffebcd04",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					liquid_viscosity: 75,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					gfx_glow: 200,
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gold.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "wax_molten",
					ui_name: "$mat_wax_molten",
					tags: "[liquid],[corrodible],[molten],[alchemy],[impure],[solid]",
					burnable: 0,
					density: 2,
					cell_type: "liquid",
					wang_color: "ffEAACAB",
					generates_smoke: 0,
					liquid_gravity: 0.3,
					liquid_sand: 0,
					liquid_viscosity: 75,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					danger_fire: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wax.png",
						color: "ffEAACAB"
					}
				}
			},
			{
				attr: {
					name: "silver_molten",
					ui_name: "$mat_silver_molten",
					tags: "[liquid],[corrodible],[molten],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "ff4e5263",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					danger_fire: 1,
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/silver.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "copper_molten",
					ui_name: "$mat_copper_molten",
					tags: "[liquid],[corrodible],[molten],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "ff4e5264",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					danger_fire: 1,
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/copper.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "brass_molten",
					ui_name: "$mat_brass_molten",
					tags: "[liquid],[corrodible],[molten],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "ff4e5285",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					danger_fire: 1,
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/brass.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "glass_molten",
					ui_name: "$mat_glass_molten",
					tags: "[liquid],[molten],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "ff4e5266",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					danger_fire: 1,
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glass.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "glass_broken_molten",
					ui_name: "$mat_glass_broken_molten",
					tags: "[liquid],[molten],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "ff4e5237",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					danger_fire: 1,
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glass.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "steel_molten",
					ui_name: "$mat_steel_molten",
					tags: "[liquid],[molten],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 2,
					cell_type: "liquid",
					wang_color: "ffebcd08",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 0,
					liquid_viscosity: 75,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "creepy_liquid",
					ui_name: "$mat_creepy_liquid",
					tags: "[liquid],[impure]",
					burnable: 0,
					density: 1,
					lifetime: 1350,
					cell_type: "liquid",
					wang_color: "7f381774",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					gfx_glow: 90,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 60
				}
			},
			{
				attr: {
					name: "cement",
					ui_name: "$mat_cement",
					tags: "[corrodible],[meltable_to_lava],[alchemy],[impure],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff808081",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 0,
					liquid_sticks_to_ceiling: 100,
					liquid_viscosity: 15,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 1000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/concrete_wet.png",
						color: "ff808080"
					}
				}
			},
			{
				attr: {
					name: "concrete_sand",
					ui_name: "$mat_concrete_sand",
					tags: "[corrodible],[meltable_to_lava],[alchemy]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff808082",
					generates_smoke: 0,
					liquid_gravity: 1.5,
					liquid_sand: 1,
					liquid_sand_never_box2d: 1,
					liquid_sticks_to_ceiling: 100,
					liquid_viscosity: 15,
					platform_type: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					supports_collapsible_structures: 0,
					hp: 15000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/concrete.png",
						color: "ff767676"
					}
				}
			},
			{
				attr: {
					name: "sand",
					ui_name: "$mat_sand",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[alchemy]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffebcd00",
					generates_smoke: 0,
					liquid_gravity: 0.9,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 800,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand",
					durability: 4
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/sand.png",
						color: "ffb89e57"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.6,
								require_same_material: 1,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_sand.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "bone",
					ui_name: "$mat_bone",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[alchemy]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffE6E6FF",
					generates_smoke: 0,
					liquid_gravity: 1.2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 10000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "bone"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/bone.png",
						color: "ffE6E6FF"
					}
				}
			},
			{
				attr: {
					name: "soil",
					ui_name: "$mat_soil",
					tags: "[sand_ground],[corrodible],[grows_grass],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff36311e",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					liquid_sticks_to_ceiling: 50,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 2000,
					durability: 10,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/soil.png",
						color: "ff36311e"
					}
				}
			},
			{
				attr: {
					name: "sandstone",
					ui_name: "$mat_sandstone",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff90fe40",
					generates_smoke: 0,
					liquid_gravity: 0.9,
					liquid_sand: 1,
					liquid_viscosity: 5,
					liquid_sticks_to_ceiling: 100,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 9000,
					durability: 4,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/desert.png",
						color: "ff90fe40"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.6,
								require_same_material: 1,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_sand.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "fungisoil",
					ui_name: "$mat_fungisoil",
					tags: "[sand_ground],[corrodible],[grows_fungus],[meltable_to_lava],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff36312e",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 100,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/soil.png",
						color: "ff36311e"
					}
				}
			},
			{
				attr: {
					name: "honey",
					ui_name: "$mat_honey",
					tags: "[corrodible],[meltable_to_lava_fast],[alchemy],[meltable_by_fire]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "55E8BD5A",
					generates_smoke: 0,
					liquid_gravity: 0.2,
					liquid_sand: 1,
					liquid_viscosity: 15,
					liquid_sticks_to_ceiling: 90,
					stickyness: 1,
					solid_friction: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/honey.png",
						color: "ffE8BD5A"
					}
				}
			},
			{
				attr: {
					name: "slime",
					ui_name: "$mat_slime_pink",
					tags: "[corrodible],[meltable_to_lava],[alchemy]",
					burnable: 0,
					density: 5,
					cell_type: "liquid",
					wang_color: "88E8BD5A",
					generates_smoke: 0,
					liquid_gravity: 0.1,
					liquid_sand: 0,
					liquid_sticks_to_ceiling: 40,
					liquid_slime: 1,
					liquid_stains: 2,
					stickyness: 1,
					solid_friction: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					status_effects: "SLIMY",
					audio_physics_material_event: "slime",
					audio_physics_material_wall: "slime",
					audio_physics_material_solid: "slime"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/slime.png",
						color: "88b8376d"
					}
				}
			},
			{
				attr: {
					name: "explosion_dirt",
					ui_name: "$mat_explosion_dirt",
					tags: "[sand_ground],[corrodible]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff36311f",
					generates_smoke: 0,
					liquid_gravity: 1.1,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 1000
				}
			},
			{
				attr: {
					name: "vine",
					ui_name: "$mat_vine",
					tags: "[static],[sand_ground],[corrodible],[burnable],[alchemy]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					cell_holes_in_texture: 1,
					wang_color: "ff526F40",
					generates_smoke: 0,
					liquid_sand: 1,
					liquid_static: 1,
					liquid_viscosity: 0,
					on_fire: 0,
					requires_oxygen: 1,
					autoignition_temperature: 60,
					temperature_of_fire: 90,
					hp: 10
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/test_vine.png",
						color: "ff526F36"
					}
				}
			},
			{
				attr: {
					name: "root",
					ui_name: "$mat_root",
					tags: "[static],[sand_ground],[corrodible],[burnable],[alchemy],[solid]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					cell_holes_in_texture: 1,
					wang_color: "ff2A724A",
					generates_smoke: 0,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1,
					liquid_viscosity: 0,
					on_fire: 0,
					requires_oxygen: 1,
					liquid_sticks_to_ceiling: 0,
					autoignition_temperature: 30,
					temperature_of_fire: 90,
					hp: 5
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/test_vine.png",
						color: "ff2A724A"
					}
				}
			},
			{
				attr: {
					name: "snow",
					ui_name: "$mat_snow",
					tags: "[static],[sand_ground],[corrodible],[frozen],[meltable_to_water],[alchemy]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ffF4F4F3",
					generates_smoke: 0,
					liquid_gravity: 0.6,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 1000,
					audio_physics_material_event: "snow",
					audio_physics_material_wall: "snow",
					audio_physics_material_solid: "snow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/snow.png",
						color: "ffF4F4F3"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.8,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_snow.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "snow_sticky",
					ui_name: "$mat_snow",
					tags: "[sand_ground],[corrodible],[frozen],[meltable_to_water],[alchemy]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ffeeeeed",
					generates_smoke: 0,
					liquid_gravity: 0.6,
					liquid_sand: 1,
					liquid_sticks_to_ceiling: 100,
					liquid_viscosity: 20,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					wang_noise_percent: 0.6,
					wang_curvature: 0.3,
					wang_noise_type: 1,
					hp: 1000,
					audio_physics_material_event: "snow",
					audio_physics_material_wall: "snow",
					audio_physics_material_solid: "snow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/snow.png",
						color: "ffeeeeee"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.8,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_snow.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "rotten_meat",
					ui_name: "$mat_rotten_meat",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[alchemy],[meat]",
					burnable: 1,
					autoignition_temperature: 80,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffebcdd0",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 5000,
					fire_hp: 800,
					solid_on_collision_material: "blood",
					solid_on_collision_splash_power: 1,
					solid_restitution: 0.4,
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					audio_is_soft: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meat_rotten.png",
						color: "ffcc4c4c",
						pixel_all_around: "ffcc4c4c",
						pixel_lonely: "ffcc4c4c",
						pixel_top_right: "ffcc4c4c",
						pixel_bottom_left: "ffcc4c4c",
						pixel_left: "ffc996e6",
						pixel_top_left: "ffc996e6",
						pixel_top: "ffc996e6",
						pixel_right: "ff8f4d53",
						pixel_bottom_right: "ff8f4d53",
						pixel_bottom: "ff8f4d53"
					}
				}
			},
			{
				attr: {
					name: "meat_slime_sand",
					ui_name: "$mat_meat_slime_sand",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[alchemy],[meat]",
					burnable: 1,
					autoignition_temperature: 80,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffed4c4c",
					generates_smoke: 0,
					liquid_gravity: 0.8,
					liquid_sand: 1,
					liquid_slime: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 5000,
					fire_hp: 800,
					solid_on_collision_material: "slime",
					solid_on_collision_splash_power: 1,
					solid_restitution: 0.4,
					solid_break_to_type: "slime",
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy",
					audio_is_soft: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meat_rotten.png",
						color: "ffed4c4c"
					}
				}
			},
			{
				attr: {
					name: "rotten_meat_radioactive",
					ui_name: "$mat_rotten_meat_radioactive",
					tags: "[sand_ground],[corrodible],[meltable_to_lava],[alchemy],[meat],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "4400FF53",
					gfx_glow: 255,
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_restitution: 0.5,
					hp: 5000,
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					audio_is_soft: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meat_rotten.png",
						color: "ffcc4c4c",
						pixel_all_around: "ffcc4c4c",
						pixel_lonely: "ffcc4c4c",
						pixel_top_right: "ffcc4c4c",
						pixel_bottom_left: "ffcc4c4c",
						pixel_left: "ffc996e6",
						pixel_top_left: "ffc996e6",
						pixel_top: "ffc996e6",
						pixel_right: "ff8f4d53",
						pixel_bottom_right: "ff8f4d53",
						pixel_bottom: "ff8f4d53"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				"#text": ">",
				attr: {
					name: "ice",
					ui_name: "$mat_ice",
					tags: "[sand_ground],[corrodible],[frozen],[meltable_to_water],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffCFCFF0",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					liquid_gravity: 1.5,
					slippery: 1,
					solid_friction: 0.05,
					liquid_sand: 1,
					gfx_glow: 10,
					hp: 5000,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffCFCFF0",
						pixel_all_around: "ff3b93bb"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.8,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_ice.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					name: "sand_herb",
					ui_name: "$mat_sand_herb",
					tags: "[corrodible],[evaporable_custom],[burnable],[alchemy]",
					burnable: 1,
					density: 3,
					cell_type: "liquid",
					wang_color: "aa8300a0",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 1,
					liquid_stains: 1,
					liquid_stains_self: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 90,
					autoignition_temperature: 85,
					gfx_glow: 30,
					fire_hp: 400
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss.png",
						color: "ff33b828"
					}
				}
			},
			{
				attr: {
					name: "wax",
					ui_name: "$mat_wax",
					tags: "[burnable],[corrodible],[meltable],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffEAAAAB",
					generates_smoke: 0,
					liquid_gravity: 3,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_friction: 0.6,
					hp: 8000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wax.png",
						color: "ffEAAAAB"
					}
				}
			},
			{
				attr: {
					name: "gold",
					ui_name: "$mat_gold",
					tags: "[sand_metal],[corrodible],[meltable_metal],[alchemy],[gold],[solid]",
					burnable: 0,
					density: 9,
					cell_type: "liquid",
					wang_color: "ffebcd01",
					gfx_glow: 127,
					generates_smoke: 0,
					liquid_gravity: 3,
					liquid_sand: 1,
					durability: 12,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_friction: 0.7,
					hp: 8000,
					electrical_conductivity: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gold.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "silver",
					ui_name: "$mat_silver",
					tags: "[sand_metal],[corrodible],[meltable_metal],[alchemy],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ff4e5262",
					gfx_glow: 127,
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					liquid_solid: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 0.7,
					hp: 8000,
					electrical_conductivity: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/silver.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "copper",
					ui_name: "$mat_copper",
					tags: "[sand_metal],[corrodible],[meltable_metal],[alchemy],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ff4e5265",
					generates_smoke: 0,
					on_fire: 0,
					liquid_gravity: 2.5,
					liquid_sand: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 0.7,
					hp: 8000,
					electrical_conductivity: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/copper.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "brass",
					ui_name: "$mat_brass",
					tags: "[sand_metal],[corrodible],[meltable_metal],[alchemy],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ff4e5267",
					generates_smoke: 0,
					on_fire: 0,
					liquid_gravity: 1.8,
					liquid_sand: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 0.7,
					hp: 8000,
					platform_type: 0
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/brass.png",
						color: "ffb89e58"
					}
				}
			},
			{
				attr: {
					name: "diamond",
					ui_name: "$mat_diamond",
					tags: "[sand_metal],[alchemy],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "liquid",
					wang_color: "ff82DBE2",
					gfx_glow: 127,
					generates_smoke: 0,
					on_fire: 0,
					liquid_gravity: 2.4,
					liquid_sand: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 0.6,
					hp: 200000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/diamond.png",
						color: "ff82DBE2"
					}
				}
			},
			{
				attr: {
					name: "coal",
					ui_name: "$mat_coal",
					tags: "[sand_other],[corrodible],[burnable],[alchemy]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff505052",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 95,
					autoignition_temperature: 94,
					hp: 1000,
					durability: 8,
					fire_hp: 1000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/coal.png",
						color: "ff505050"
					}
				}
			},
			{
				attr: {
					name: "sulphur",
					ui_name: "$mat_sulphur",
					tags: "[sand_other],[corrodible],[alchemy]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff141415",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 95,
					hp: 1000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/sulphur.png",
						color: "ffb89e57"
					}
				}
			},
			{
				attr: {
					name: "salt",
					ui_name: "$mat_salt",
					tags: "[sand_other],[corrodible],[alchemy]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffe1e1e2",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_friction: 1,
					hp: 1000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/salt.png",
						color: "ffb89e57"
					}
				}
			},
			{
				attr: {
					name: "sodium_unstable",
					ui_name: "$mat_sodium_unstable",
					tags: "[sand_other],[corrodible],[alchemy]",
					burnable: 1,
					density: 2,
					cell_type: "liquid",
					wang_color: "ff411F24",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 1,
					requires_oxygen: 0,
					temperature_of_fire: 200,
					autoignition_temperature: 0,
					hp: 1000,
					fire_hp: 9000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				ExplosionConfig: {
					attr: {
						cell_explosion_power: 20,
						cell_explosion_damage_required: 0,
						cell_explosion_radius_min: 5,
						create_cell_probability: 100,
						create_cell_material: "fire",
						ray_energy: 50000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/salt.png",
						color: "ff411F24"
					}
				}
			},
			{
				attr: {
					name: "gunpowder",
					ui_name: "$mat_gunpowder",
					tags: "[sand_other],[corrodible],[alchemy]",
					burnable: 1,
					density: 7,
					cell_type: "liquid",
					wang_color: "ff232324",
					generates_smoke: 10,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 80,
					autoignition_temperature: 1,
					hp: 1000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gunpowder.png",
						color: "ffb89e57"
					}
				}
			},
			{
				attr: {
					name: "gunpowder_explosive",
					ui_name: "$mat_gunpowder_explosive",
					tags: "[sand_other],[corrodible],[alchemy]",
					burnable: 1,
					density: 7,
					cell_type: "liquid",
					wang_color: "ffF7BB43",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 50,
					autoignition_temperature: 1,
					hp: 1000,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				ExplosionConfig: {
					attr: {
						damage: 0.2,
						cell_explosion_power: 40,
						cell_explosion_damage_required: 20,
						cell_explosion_radius_min: 8,
						explosion_sprite: "data/particles/explosion_012.xml",
						ray_energy: 400000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gunpowder_tnt.png",
						color: "ffF7BB43"
					}
				}
			},
			{
				attr: {
					name: "gunpowder_tnt",
					ui_name: "$mat_gunpowder_tnt",
					tags: "[sand_other],[corrodible],[alchemy]",
					burnable: 1,
					density: 7,
					cell_type: "liquid",
					wang_color: "ffF7BF43",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 50,
					autoignition_temperature: 1,
					hp: 1000,
					fire_hp: 200,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				ExplosionConfig: {
					attr: {
						damage: 0.2,
						cell_explosion_damage_required: 10,
						ccell_explosion_radius_min: 8,
						explosion_sprite: "data/particles/explosion_012.xml",
						create_cell_probability: 100,
						create_cell_material: "gunpowder_unstable",
						ray_energy: 400000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gunpowder_tnt.png",
						color: "ffF7BF43"
					}
				}
			},
			{
				attr: {
					name: "gunpowder_unstable",
					ui_name: "$mat_gunpowder_unstable",
					tags: "[sand_other],[corrodible],[burnable],[alchemy]",
					burnable: 1,
					density: 7,
					cell_type: "liquid",
					wang_color: "ff232373",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 1,
					requires_oxygen: 0,
					temperature_of_fire: 50,
					autoignition_temperature: 0,
					hp: 1000,
					fire_hp: 300,
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				ExplosionConfig: {
					attr: {
						damage: 0.2,
						cell_explosion_power: 40,
						cell_explosion_damage_required: 10,
						cell_explosion_radius_min: 8,
						explosion_sprite: "data/particles/explosion_012.xml",
						ray_energy: 400000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gunpowder.png",
						color: "ffb89e57"
					}
				}
			},
			{
				attr: {
					name: "gunpowder_unstable_boss_limbs",
					ui_name: "$mat_gunpowder_unstable_boss_limbs",
					tags: "[sand_other],[corrodible],[alchemy],[meat]",
					burnable: 1,
					density: 7,
					cell_type: "liquid",
					wang_color: "ff80C850",
					generates_smoke: 0,
					liquid_gravity: 2,
					liquid_sand: 1,
					on_fire: 1,
					requires_oxygen: 0,
					temperature_of_fire: 50,
					autoignition_temperature: 0,
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					hp: 1000,
					fire_hp: 300
				},
				ExplosionConfig: {
					attr: {
						damage: 0.2,
						cell_explosion_power: 40,
						cell_explosion_damage_required: 0,
						cell_explosion_radius_min: 8,
						create_cell_probability: 10,
						create_cell_material: "slime_green",
						ray_energy: 50000,
						explosion_sprite: "data/particles/explosion_032_slime.xml",
						spark_material: "spark_green",
						r: 80,
						g: 220,
						b: 170
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss.png",
						color: "ff80C850"
					}
				}
			},
			{
				attr: {
					name: "plastic_red",
					ui_name: "$mat_plastic_red",
					tags: "[corrodible],[meltable],[alchemy]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff900000",
					generates_smoke: 0,
					liquid_gravity: 3,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					solid_friction: 0.6,
					hp: 100,
					platform_type: 0
				}
			},
			{
				attr: {
					name: "plastic_red_molten",
					ui_name: "$mat_plastic_red_molten",
					tags: "[liquid],[corrodible],[molten],[meltable_to_lava],[alchemy]",
					burnable: 0,
					density: 5.1,
					cell_type: "liquid",
					color: "ff890000",
					wang_color: "ff9000ab",
					generates_smoke: 0,
					liquid_gravity: 3,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 100
				}
			},
			{
				attr: {
					name: "grass",
					ui_name: "$mat_grass",
					tags: "[plant],[requires_air],[corrodible],[burnable],[alchemy],[impure]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff3abb30",
					generates_smoke: 20,
					liquid_gravity: 1,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					hp: 200,
					fire_hp: 100,
					audio_physics_material_wall: "organicsoft",
					audio_physics_material_solid: "organicsoft"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/grass.png",
						is_grass: 1,
						color: "ff33b828"
					}
				}
			},
			{
				attr: {
					name: "fungi",
					ui_name: "$mat_fungi",
					tags: "[plant],[corrodible],[burnable],[alchemy],[impure]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff3abb32",
					generates_smoke: 20,
					liquid_gravity: 1,
					liquid_sand: 1,
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 80,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 90,
					autoignition_temperature: 65,
					solid_on_collision_material: "blood_fungi",
					solid_break_to_type: "blood_fungi",
					liquid_sand_never_box2d: 1,
					platform_type: 0,
					gfx_glow: 255,
					fire_hp: 60
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/fungi.png",
						color: "ffF064AA"
					}
				}
			},
			{
				attr: {
					name: "spore",
					ui_name: "$mat_spore",
					tags: "[plant],[corrodible],[burnable],[alchemy],[impure]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff3abb33",
					generates_smoke: 20,
					liquid_gravity: 0.04,
					liquid_sand: 1,
					liquid_viscosity: 150,
					liquid_sticks_to_ceiling: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 90,
					autoignition_temperature: 65,
					platform_type: 0,
					gfx_glow: 255
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gunpowder.png",
						color: "ff33b828"
					}
				}
			},
			{
				attr: {
					name: "moss",
					ui_name: "$mat_moss",
					tags: "[plant],[corrodible],[burnable],[alchemy],[impure]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff33b828",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_sticks_to_ceiling: 100,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					liquid_viscosity: 40,
					hp: 200,
					fire_hp: 100,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss.png",
						color: "ff33b828"
					}
				}
			},
			{
				attr: {
					name: "plant_material",
					ui_name: "$mat_plant_material",
					tags: "[plant],[requires_air],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff33b838",
					generates_smoke: 20,
					liquid_gravity: 0.8,
					liquid_sand: 1,
					liquid_viscosity: 101,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 700,
					vegetation_sprite: "data/vegetation/bush_growth_$[1-8].xml",
					hp: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/grass.png",
						color: "ff33b828"
					}
				}
			},
			{
				attr: {
					name: "plant_material_red",
					ui_name: "$mat_plant_material_red",
					tags: "[plant],[requires_air],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffaa2818",
					generates_smoke: 20,
					liquid_gravity: 0.8,
					liquid_sand: 1,
					liquid_viscosity: 101,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 700,
					vegetation_sprite: "data/vegetation/redplant_0$[1-4].xml",
					hp: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/lavarock.png",
						color: "ffaa2818"
					}
				}
			},
			{
				attr: {
					name: "ceiling_plant_material",
					ui_name: "$mat_ceiling_plant_material",
					tags: "[plant],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff33b848",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 101,
					liquid_sticks_to_ceiling: 100,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 700,
					vegetation_sprite: "data/vegetation/ceiling_vegetation_00$[1-8].png",
					hp: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/grass.png",
						color: "ff33b828"
					}
				}
			},
			{
				attr: {
					name: "mushroom_seed",
					ui_name: "$mat_mushroom_seed",
					tags: "[plant],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffb89f6c",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					hp: 200
				}
			},
			{
				attr: {
					name: "plant_seed",
					ui_name: "$mat_plant_seed",
					tags: "[plant],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffBC9B58",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					hp: 200
				}
			},
			{
				attr: {
					name: "mushroom",
					ui_name: "$mat_mushroom",
					tags: "[plant],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffb89f7c",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 700,
					vegetation_sprite: "data/vegetation/mushroom_growth_1.xml",
					hp: 200
				}
			},
			{
				attr: {
					name: "mushroom_giant_red",
					ui_name: "$mat_mushroom_giant_red",
					tags: "[plant],[requires_air],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffd9d9cd",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 6000,
					vegetation_sprite: "data/vegetation/mushroom_growth_2.xml",
					hp: 200
				}
			},
			{
				attr: {
					name: "mushroom_giant_blue",
					ui_name: "$mat_mushroom_giant_blue",
					tags: "[plant],[requires_air],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffd9d9cc",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 6000,
					vegetation_sprite: "data/vegetation/mushroom_growth_3.xml",
					hp: 200
				}
			},
			{
				attr: {
					name: "glowshroom",
					ui_name: "$mat_glowshroom",
					tags: "[plant],[requires_air],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffd9d9cb",
					generates_smoke: 20,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 6000,
					vegetation_sprite: "data/vegetation/glowshroom_growth.xml",
					hp: 200,
					gfx_glow: 255
				}
			},
			{
				attr: {
					name: "bush_seed",
					ui_name: "$mat_bush_seed",
					tags: "[plant],[requires_air],[corrodible],[burnable]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff4d5d44",
					generates_smoke: 20,
					liquid_gravity: 0.8,
					liquid_sand: 1,
					liquid_viscosity: 75,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					platform_type: 0,
					vegetation_full_lifetime_growth: 700,
					vegetation_sprite: "data/vegetation/bush_growth_$[1-8].xml",
					hp: 200
				}
			},
			{
				attr: {
					name: "acid",
					ui_name: "$mat_acid",
					tags: "[liquid],[acid],[impure]",
					burnable: 0,
					density: 2.9,
					cell_type: "liquid",
					wang_color: "4B00ff12",
					generates_smoke: 0,
					liquid_gravity: 0.6,
					liquid_sand: 0,
					on_fire: 0,
					gfx_glow: 100,
					requires_oxygen: 1,
					temperature_of_fire: 10
				},
				Graphics: {
					attr: {
						color: "4B00ff12"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.3,
						"lifetime.max": 0.6,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.004,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "lava",
					ui_name: "$mat_lava",
					tags: "[fire_lava],[liquid],[lava]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					gfx_glow: 150,
					wang_color: "ffff6000",
					generates_smoke: 0,
					liquid_gravity: 0.2,
					liquid_sand: 0,
					liquid_viscosity: 10,
					on_fire: 0,
					always_ignites_damagemodel: 1,
					danger_fire: 1,
					requires_oxygen: 0,
					temperature_of_fire: 90,
					status_effects: "ON_FIRE",
					audio_materialaudio_type: "LAVA"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -10,
						"vel_random.min_x": -14,
						"vel_random.max_x": 14,
						"vel_random.min_y": -28,
						"vel_random.max_y": -14,
						"gravity.y": 25.71,
						cosmetic_force_create: 1,
						draw_as_long: 1,
						airflow_force: 2.286,
						airflow_scale: -7.143,
						friction: -1.34,
						probability: 0.0007
					}
				}
			},
			{
				attr: {
					name: "wood_player",
					ui_name: "$mat_wood_player",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 1,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff613e03",
					generates_smoke: 0,
					liquid_gravity: 1,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					fire_hp: 600,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_friction: 0.9,
					solid_static_type: 3,
					durability: 9,
					gfx_glow: 0,
					hp: 2000,
					on_fire_convert_to_material: "wood_player_b2",
					platform_type: 1,
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff413F24",
						pixel_all_around: "ff5d5a33"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "wood_player_b2",
					ui_name: "$mat_wood_player_b2",
					tags: "[static],[box2d],[alchemy],[corrodible],[solid]",
					burnable: 1,
					density: 6,
					cell_type: "solid",
					wang_color: "ff613e02",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_static_type: 3,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_break_to_type: "wood_player",
					crackability: 0,
					wang_noise_percent: 0.01,
					wang_curvature: 0.25,
					solid_friction: 0.9,
					platform_type: 1,
					durability: 9,
					hp: 2000,
					fire_hp: 600,
					gfx_glow: 0,
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood",
					audio_materialbreakaudio_type: "WOOD"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff413F24",
						pixel_all_around: "ff5d5a33"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "wood",
					ui_name: "$mat_wood",
					tags: "[box2d],[corrodible],[alchemy],[burnable],[solid]",
					burnable: 1,
					density: 6,
					cell_type: "solid",
					wang_color: "ff613e00",
					generates_smoke: 0,
					on_fire: 0,
					fire_hp: 600,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_static_type: 3,
					solid_collide_with_self: 1,
					platform_type: 1,
					solid_friction: 0.9,
					hp: 3000,
					durability: 9,
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff413F24",
						pixel_all_around: "ff5d5a33"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					name: "wax_b2",
					ui_name: "$mat_wax_b2",
					tags: "[box2d],[alchemy],[solid]",
					burnable: 1,
					density: 6,
					cell_type: "solid",
					wang_color: "ffEAAAAC",
					generates_smoke: 0,
					on_fire: 0,
					fire_hp: 60000,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					platform_type: 0,
					solid_friction: 0.9,
					hp: 2000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wax.png",
						color: "ffEAAAAC"
					}
				}
			},
			{
				attr: {
					name: "fuse",
					ui_name: "$mat_fuse",
					tags: "[box2d]",
					burnable: 1,
					density: 6,
					cell_type: "solid",
					wang_color: "ffEAAAAD",
					generates_smoke: 0,
					on_fire: 0,
					fire_hp: 600,
					requires_oxygen: 1,
					temperature_of_fire: 5,
					autoignition_temperature: 99,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					solid_restitution: 0.45,
					solid_gravity_scale: 1.3,
					platform_type: 0,
					solid_friction: 0.9,
					durability: 11,
					hp: 2000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						normal_mapped: 1,
						color: "ff586679"
					}
				}
			},
			{
				attr: {
					name: "wood_loose",
					ui_name: "$mat_wood_loose",
					tags: "[box2d],[corrodible],[alchemy],[solid]",
					burnable: 1,
					density: 6,
					cell_type: "solid",
					wang_color: "ff613e01",
					generates_smoke: 0,
					on_fire: 0,
					fire_hp: 600,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_static_type: 0,
					solid_collide_with_self: 0,
					solid_friction: 0.9,
					platform_type: 0,
					hp: 2000,
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood",
					audio_materialbreakaudio_type: "WOOD"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff5d5a33"
					}
				}
			},
			{
				attr: {
					name: "rock_loose",
					ui_name: "$mat_rock_loose",
					tags: "[box2d],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ff937d58",
					on_fire: 0,
					solid_static_type: 0,
					solid_collide_with_self: 0,
					solid_friction: 0.9,
					platform_type: 0,
					hp: 10000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff937d58"
					}
				}
			},
			{
				attr: {
					name: "ice_ceiling",
					ui_name: "$mat_ice_ceiling",
					tags: "[box2d],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ff3b93ba",
					generates_smoke: 0,
					on_fire: 0,
					fire_hp: 600,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_friction: 0.2,
					solid_static_type: 5,
					platform_type: 0,
					hp: 3000,
					audio_physics_material_wall: "snow",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ff3b93bb",
						pixel_all_around: "ff3b93bb",
						pixel_lonely: "ff3b93bb",
						pixel_top_right: "ff3b93bb",
						pixel_bottom_left: "ff3b93bb",
						pixel_left: "ff78e0f0",
						pixel_top_left: "ff78e0f0",
						pixel_top: "ff78e0f0",
						pixel_right: "ff365b77",
						pixel_bottom_right: "ff365b77",
						pixel_bottom: "ff365b77"
					}
				}
			},
			{
				attr: {
					name: "brick",
					ui_name: "$mat_brick",
					tags: "[box2d],[corrodible],[alchemy],[solid]",
					burnable: 1,
					density: 50,
					cell_type: "solid",
					wang_color: "ffb80900",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					solid_friction: 1,
					temperature_of_fire: 30,
					autoignition_temperature: 99,
					solid_break_on_explosion_rate: 10,
					hp: 4000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/brick.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff73737f",
						pixel_top_right: "ff73737f",
						pixel_bottom_left: "ff73737f",
						pixel_left: "ffc7c7cc",
						pixel_top_left: "ffc7c7cc",
						pixel_top: "ffc7c7cc",
						pixel_right: "ff706d60",
						pixel_bottom_right: "ff706d60",
						pixel_bottom: "ff706d60"
					}
				}
			},
			{
				attr: {
					name: "concrete_collapsed",
					ui_name: "$mat_concrete_collapsed",
					tags: "[box2d],[corrodible],[alchemy],[solid]",
					burnable: 1,
					density: 10,
					cell_type: "solid",
					wang_color: "ffb80901",
					generates_smoke: 0,
					on_fire: 0,
					gfx_glow: 0,
					requires_oxygen: 1,
					temperature_of_fire: 30,
					autoignition_temperature: 99,
					solid_break_on_explosion_rate: 10,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					solid_on_sleep_convert: 1,
					solid_friction: 0.9,
					solid_break_to_type: "concrete_static",
					platform_type: 1,
					solid_on_collision_explode: 1,
					supports_collapsible_structures: 0,
					hp: 10000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				ExplosionConfig: {
					attr: {
						cell_explosion_power: 0.08,
						cell_explosion_damage_required: 500000,
						cell_explosion_radius_min: 4,
						cell_explosion_radius_max: 20,
						cell_explosion_velocity_min: 30,
						light_enabled: 0,
						camera_shake: 15,
						stains_enabled: 0,
						spark_material: "concrete_sand",
						create_cell_material: "concrete_sand",
						create_cell_probability: 2,
						explosion_sprite: "",
						ray_energy: 60000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/brick.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff73737f",
						pixel_top_right: "ff73737f",
						pixel_bottom_left: "ff73737f",
						pixel_left: "ffc7c7cc",
						pixel_top_left: "ffc7c7cc",
						pixel_top: "ffc7c7cc",
						pixel_right: "ff706d60",
						pixel_bottom_right: "ff706d60",
						pixel_bottom: "ff706d60"
					}
				}
			},
			{
				attr: {
					name: "tnt",
					ui_name: "$mat_tnt",
					tags: "[box2d],[corrodible],[burnable],[alchemy],[solid]",
					burnable: 1,
					density: 8,
					cell_type: "solid",
					wang_color: "ffab5e4f",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					fire_hp: 600,
					solid_friction: 0.9,
					hp: 500,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "wood"
				},
				ExplosionConfig: {
					attr: {
						camera_shake: 10,
						cell_explosion_power: 40,
						cell_explosion_damage_required: 30,
						cell_explosion_radius_min: 5,
						ray_energy: 50000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/tnt.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff73737f",
						pixel_top_right: "ff73737f",
						pixel_bottom_left: "ff73737f",
						pixel_left: "ffc7c7cc",
						pixel_top_left: "ffc7c7cc",
						pixel_top: "ffc7c7cc",
						pixel_right: "ff242428",
						pixel_bottom_right: "ff242428",
						pixel_bottom: "ff242428"
					}
				}
			},
			{
				attr: {
					name: "tnt_static",
					ui_name: "$mat_tnt",
					tags: "[box2d],[corrodible],[burnable],[alchemy],[solid]",
					burnable: 1,
					density: 8,
					cell_type: "solid",
					solid_static_type: 2,
					wang_color: "ffc1ffee",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					fire_hp: 600,
					solid_friction: 0.9,
					hp: 500,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "wood"
				},
				ExplosionConfig: {
					attr: {
						camera_shake: 10,
						cell_explosion_power: 40,
						cell_explosion_damage_required: 30,
						cell_explosion_radius_min: 5,
						ray_energy: 50000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/tnt.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff73737f",
						pixel_top_right: "ff73737f",
						pixel_bottom_left: "ff73737f",
						pixel_left: "ffc7c7cc",
						pixel_top_left: "ffc7c7cc",
						pixel_top: "ffc7c7cc",
						pixel_right: "ff242428",
						pixel_bottom_right: "ff242428",
						pixel_bottom: "ff242428"
					}
				}
			},
			{
				attr: {
					name: "trailer_text",
					ui_name: "$mat_trailer_text",
					burnable: 0,
					density: 8,
					gfx_glow: 0,
					gfx_glow_color: "FFFFFFFF",
					cell_type: "liquid",
					liquid_sand: 1,
					liquid_static: 1,
					solid_static_type: 1,
					wang_color: "ffc0ffe1",
					generates_smoke: 10,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					fire_hp: 600,
					solid_friction: 0.9,
					hp: 500,
					stainable: 0
				},
				Graphics: {
					attr: {
						color: "ffFFffFF"
					}
				}
			},
			{
				attr: {
					name: "meteorite",
					ui_name: "$mat_meteorite",
					tags: "[box2d],[alchemy],[solid]",
					burnable: 0,
					fire_hp: -1,
					density: 8,
					cell_type: "solid",
					wang_color: "ff1D1012",
					generates_smoke: 0,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_go_through_sand: 1,
					solid_on_collision_explode: 1,
					solid_friction: 1,
					hp: 5000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				ExplosionConfig: {
					attr: {
						cell_explosion_power: 2.5,
						cell_explosion_damage_required: 300000,
						cell_explosion_radius_min: 5,
						ray_energy: 50000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meteor.png",
						color: "ff1D1010",
						pixel_all_around: "ff1D1010",
						pixel_lonely: "ff1D1010",
						pixel_top_right: "ff461F1F",
						pixel_bottom_left: "ff0A0606",
						pixel_left: "ff0A0606",
						pixel_top_left: "ff1D1010",
						pixel_top: "ff461F1F",
						pixel_right: "ff461F1F",
						pixel_bottom: "ff0A0606",
						pixel_bottom_right: "ff1D1010"
					}
				}
			},
			{
				attr: {
					name: "meteorite_test",
					ui_name: "$mat_meteorite",
					tags: "[box2d],[alchemy],[solid]",
					burnable: 0,
					fire_hp: -1,
					density: 8,
					cell_type: "solid",
					wang_color: "ff1D1013",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_go_through_sand: 1,
					solid_on_collision_explode: 0,
					solid_friction: 1,
					hp: 5000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meteor.png",
						color: "ff1D1010",
						pixel_all_around: "ff1D1010",
						pixel_lonely: "ff1D1010",
						pixel_top_right: "ff461F1F",
						pixel_bottom_left: "ff0A0606",
						pixel_left: "ff0A0606",
						pixel_top_left: "ff1D1010",
						pixel_top: "ff461F1F",
						pixel_right: "ff461F1F",
						pixel_bottom: "ff0A0606",
						pixel_bottom_right: "ff1D1010"
					}
				}
			},
			{
				attr: {
					name: "meteorite_green",
					ui_name: "$mat_meteorite_green",
					tags: "[box2d],[alchemy],[solid]",
					burnable: 0,
					fire_hp: -1,
					density: 8,
					cell_type: "solid",
					wang_color: "ff4e5244",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					explosion_power: 2.5,
					temperature_of_fire: 50,
					autoignition_temperature: 85,
					solid_go_through_sand: 1,
					solid_on_collision_explode: 1,
					solid_friction: 1,
					gfx_glow: 255,
					hp: 5000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				ExplosionConfig: {
					attr: {
						cell_explosion_power: 30,
						cell_explosion_damage_required: 3000,
						cell_explosion_radius_min: 5,
						ray_energy: 50000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_glow.png",
						color: "ff313b36",
						pixel_all_around: "ff313b36",
						pixel_lonely: "ff313b36",
						pixel_top_right: "ff313b36",
						pixel_bottom_left: "ff313b36",
						pixel_left: "ff495750",
						pixel_top_left: "ff495750",
						pixel_top: "ff495750",
						pixel_right: "ff1a201d",
						pixel_bottom_right: "ff1a201d",
						pixel_bottom: "ff1a201d"
					}
				}
			},
			{
				attr: {
					name: "steel",
					ui_name: "$mat_steel",
					tags: "[box2d],[rust_box2d],[alchemy],[meltable_metal],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d4b",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					platform_type: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_static_type: 0,
					solid_break_to_type: "steel_sand",
					solid_friction: 0.8,
					hp: 100000,
					electrical_conductivity: 1,
					audio_physics_material_wall: "metalwall",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					name: "steel_rust",
					ui_name: "$mat_steel_rust",
					tags: "[box2d],[alchemy],[meltable_metal],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff73727e",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 1,
					solid_static_type: 0,
					hp: 8000,
					electrical_conductivity: 1,
					audio_physics_material_wall: "metalwall",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rust.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					name: "metal_rust_rust",
					ui_name: "$mat_metal_rust_rust",
					tags: "[box2d],[alchemy],[corrodible],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff73a27e",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 1,
					solid_static_type: 0,
					hp: 8000,
					electrical_conductivity: 1,
					audio_physics_material_wall: "metalhollow",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rust.png",
						color: "ff73a37f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					name: "metal_rust_barrel_rust",
					ui_name: "$mat_metal_rust_barrel_rust",
					tags: "[box2d],[alchemy],[corrodible],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff73a27f",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 1,
					solid_static_type: 0,
					hp: 8000,
					electrical_conductivity: 1,
					audio_physics_material_wall: "metalwall",
					audio_physics_material_solid: "metalhollow_barrel"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rust.png",
						color: "ff73a37f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					name: "plastic",
					ui_name: "$mat_plastic",
					tags: "[box2d],[corrodible],[meltable],[alchemy],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d3b",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_static_type: 0,
					solid_friction: 0.7,
					hp: 4000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					name: "aluminium",
					ui_name: "$mat_aluminium",
					tags: "[box2d],[corrodible],[rust_oxide],[alchemy],[meltable_metal],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d3c",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 0.7,
					solid_static_type: 0,
					hp: 5000,
					electrical_conductivity: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff73737f"
					}
				}
			},
			{
				attr: {
					name: "rock_static_box2d",
					ui_name: "$mat_rock_static_box2d",
					tags: "[box2d],[static],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ff2d2dff",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					solid_static_type: 2,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_break_to_type: "rock_static_intro_breakable",
					solid_friction: 0.85,
					crackability: 40,
					platform_type: 1,
					slippery: 0,
					hp: 10000,
					gfx_glow: 0,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffCFF7C8"
					}
				}
			},
			{
				attr: {
					name: "rock_box2d",
					ui_name: "$mat_rock_box2d",
					tags: "[box2d],[static],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ff2e2dff",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					solid_static_type: 2,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_friction: 0.85,
					slippery: 0,
					hp: 15000,
					gfx_glow: 0,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock",
					audio_size_multiplier: 3
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff2e2dff"
					}
				}
			},
			{
				attr: {
					name: "crystal",
					ui_name: "$mat_crystal",
					tags: "[box2d],[alchemy]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d2e",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_break_to_type: "diamond",
					solid_friction: 0.5,
					solid_static_type: 0,
					hp: 500000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/crystal.png",
						color: "ff74737f"
					}
				}
			},
			{
				attr: {
					name: "magic_crystal",
					ui_name: "$mat_magic_crystal",
					tags: "[box2d],[alchemy]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d43",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_break_to_type: "diamond",
					solid_friction: 0.5,
					solid_static_type: 0,
					platform_type: 0,
					hp: 500000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "glass",
					solid_gravity_scale: 0,
					gfx_glow: 128
				},
				Graphics: {
					attr: {
						normal_mapped: 1,
						texture_file: "data/materials_gfx/crystal.png",
						color: "ff5FCDE4"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -8.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 7,
						render_on_grid: 1,
						airflow_force: 0.6314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					name: "crystal_magic",
					ui_name: "$mat_crystal_magic",
					tags: "[box2d],[alchemy]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d2f",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_break_to_type: "diamond",
					solid_friction: 0.5,
					solid_static_type: 0,
					solid_gravity_scale: 0,
					hp: 500000,
					platform_type: 1,
					gfx_glow: 255,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/crystal.png",
						color: "ff74737e"
					}
				}
			},
			{
				attr: {
					name: "aluminium_oxide",
					ui_name: "$mat_aluminium_oxide",
					tags: "[box2d],[corrodible],[alchemy],[meltable_metal],[solid]",
					burnable: 0,
					density: 8,
					cell_type: "solid",
					wang_color: "ff3b5d4d",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 50,
					autoignition_temperature: 99,
					solid_friction: 0.7,
					solid_static_type: 0,
					hp: 2500,
					electrical_conductivity: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/aluminium_oxide.png",
						color: "ff73747f"
					}
				}
			},
			{
				attr: {
					name: "meat",
					ui_name: "$mat_meat",
					tags: "[box2d],[corrodible],[meltable_to_lava],[alchemy],[meat],[solid]",
					burnable: 1,
					density: 3,
					solid_friction: 1,
					cell_type: "solid",
					wang_color: "fff2ddb2",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 30,
					autoignition_temperature: 99,
					platform_type: 0,
					hp: 1000,
					fire_hp: 600,
					solid_on_collision_material: "blood",
					solid_on_collision_splash_power: 1,
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					audio_is_soft: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meat.png",
						color: "ffcc4c4c",
						pixel_all_around: "ffcc4c4c",
						pixel_lonely: "ffcc4c4c",
						pixel_top_right: "ffcc4c4c",
						pixel_bottom_left: "ffcc4c4c",
						pixel_left: "ffc996e6",
						pixel_top_left: "ffc996e6",
						pixel_top: "ffc996e6",
						pixel_right: "ff8f4d53",
						pixel_bottom_right: "ff8f4d53",
						pixel_bottom: "ff8f4d53"
					}
				}
			},
			{
				attr: {
					name: "meat_slime",
					ui_name: "$mat_meat_slime",
					tags: "[box2d],[corrodible],[meltable_to_lava],[alchemy],[meat],[solid]",
					burnable: 1,
					density: 3,
					cell_type: "solid",
					wang_color: "fff2ddb3",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 30,
					autoignition_temperature: 99,
					platform_type: 0,
					hp: 10000,
					fire_hp: 600,
					solid_collide_with_self: 0,
					solid_on_collision_material: "slime",
					solid_break_to_type: "slime",
					solid_on_collision_splash_power: 1,
					solid_restitution: 0.5,
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy",
					audio_is_soft: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meat.png",
						color: "ffcc4c4c"
					}
				}
			},
			{
				attr: {
					name: "urine",
					ui_name: "$mat_urine",
					tags: "[liquid],[corrodible],[soluble]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "33FFEE00",
					generates_smoke: 0,
					liquid_gravity: 0.9,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10
				}
			},
			{
				attr: {
					name: "poo",
					ui_name: "$mat_poo",
					tags: "[sand_other],[corrodible],[soluble]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ff36315f",
					generates_smoke: 0,
					liquid_gravity: 0.9,
					liquid_sand: 1,
					liquid_stains: 2,
					liquid_stains_self: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					platform_type: 0,
					hp: 200
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/soil.png",
						color: "ff36311e"
					}
				}
			},
			{
				attr: {
					name: "physics_throw_material_part2",
					ui_name: "$mat_physics_throw_material_part2",
					tags: "[box2d],[alchemy]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffdee1fe",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 100,
					solid_static_type: 0,
					solid_friction: 0.5,
					solid_on_collision_convert: 1,
					crackability: 0,
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ffdee1fe"
					}
				}
			},
			{
				attr: {
					name: "rocket_particles",
					ui_name: "$mat_rocket_particles",
					tags: "[liquid]",
					burnable: 0,
					density: 3,
					cell_type: "liquid",
					wang_color: "66FFFFFE",
					generates_smoke: 0,
					liquid_gravity: 0.2,
					liquid_sand: 0,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10
				}
			},
			{
				attr: {
					name: "ice_melting_perf_killer",
					ui_name: "$mat_ice_melting_perf_killer",
					tags: "[box2d],[hax],[meltable_to_water],[ice]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffdee1aa",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 100,
					solid_break_on_explosion_rate: 90,
					solid_static_type: 0,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ff3b93bb",
						pixel_all_around: "ff3b93bb",
						pixel_lonely: "ff3b93bb",
						pixel_top_right: "ff3b93bb",
						pixel_bottom_left: "ff3b93bb",
						pixel_left: "ff78e0f0",
						pixel_top_left: "ff78e0f0",
						pixel_top: "ff78e0f0",
						pixel_right: "ff365b77",
						pixel_bottom_right: "ff365b77",
						pixel_bottom: "ff365b77"
					}
				}
			},
			{
				attr: {
					name: "ice_b2",
					ui_name: "$mat_ice_b2",
					tags: "[box2d],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffdee1ec",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 100,
					solid_break_on_explosion_rate: 90,
					solid_static_type: 0,
					solid_friction: 0.05,
					audio_physics_material_wall: "snow",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice.png",
						color: "ff3b93bb",
						pixel_all_around: "ff3b93bb",
						pixel_lonely: "ff3b93bb",
						pixel_top_right: "ff3b93bb",
						pixel_bottom_left: "ff3b93bb",
						pixel_left: "ff78e0f0",
						pixel_top_left: "ff78e0f0",
						pixel_top: "ff78e0f0",
						pixel_right: "ff365b77",
						pixel_bottom_right: "ff365b77",
						pixel_bottom: "ff365b77"
					}
				}
			},
			{
				attr: {
					name: "glass",
					ui_name: "$mat_glass",
					tags: "[static],[meltable_metal],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffaeddee",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 100,
					solid_static_type: 2,
					solid_on_break_explode: 1,
					solid_break_to_type: "glass_broken",
					crackability: 100,
					hp: 200,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glass.png",
						color: "ffaeddee",
						pixel_all_around: "ffaeddee",
						pixel_lonely: "ffaeddee",
						pixel_top_right: "ffaeddee",
						pixel_bottom_left: "ffaeddee",
						pixel_left: "ffaeddee",
						pixel_top_left: "ffaeddee",
						pixel_top: "ffaeddee",
						pixel_right: "ffaeddee",
						pixel_bottom_right: "ffaeddee",
						pixel_bottom: "ffaeddee"
					}
				}
			},
			{
				attr: {
					name: "glass_broken",
					ui_name: "$mat_glass",
					tags: "[sand_other],[meltable_metal],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "liquid",
					wang_color: "ffaeddef",
					generates_smoke: 0,
					liquid_gravity: 1.1,
					liquid_sand: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 1000,
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/glass.png",
						color: "ffaeddee"
					}
				}
			},
			{
				attr: {
					name: "neon_tube_purple",
					ui_name: "$mat_neon_tube_purple",
					tags: "[static],[corrodible],[box2d],[alchemy],[solid]",
					burnable: 0,
					density: 6,
					cell_type: "solid",
					wang_color: "ffaedde6",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 100,
					solid_static_type: 2,
					solid_collide_with_self: 0,
					solid_on_sleep_convert: 1,
					solid_break_to_type: "tubematerial",
					crackability: 100,
					platform_type: 0,
					hp: 200,
					gfx_glow: 255,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/neon_tube_purple.png",
						color: "ffCFF7C8"
					}
				}
			},
			{
				attr: {
					name: "blood_thick",
					ui_name: "$mat_blood_thick",
					tags: "[static],[corrodible],[blood]",
					burnable: 0,
					density: 10,
					platform_type: 0,
					solid_collide_with_self: 0,
					gfx_glow: 175,
					cell_type: "liquid",
					wang_color: "ffff7674",
					generates_smoke: 0,
					liquid_gravity: 0.4,
					liquid_sand: 1,
					liquid_static: 1,
					on_fire: 0,
					requires_oxygen: 1,
					temperature_of_fire: 10,
					hp: 1000
				}
			},
			{
				attr: {
					name: "snow_b2",
					ui_name: "$mat_snow_b2",
					tags: "[box2d],[corrodible],[alchemy],[meltable_to_water],[solid]",
					burnable: 0,
					density: 50,
					cell_type: "solid",
					wang_color: "ffb80902",
					generates_smoke: 0,
					on_fire: 0,
					requires_oxygen: 1,
					solid_friction: 1,
					temperature_of_fire: 30,
					platform_type: 1,
					autoignition_temperature: 99,
					solid_break_on_explosion_rate: 10,
					hp: 40,
					audio_physics_material_wall: "snow",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/snow.png",
						color: "ffF4F4F3"
					}
				}
			}
		],
		CellDataChild: [
			{
				attr: {
					_parent: "fire",
					_inherit_reactions: 1,
					name: "fire_blue",
					ui_name: "$mat_fire_blue",
					wang_color: "7fFF6061"
				},
				Graphics: {
					attr: {
						color: "7f82DCFF",
						fire_colors_index: 1
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_green",
					ui_name: "$mat_spark_green",
					wang_color: "7f96FF46"
				},
				Graphics: {
					attr: {
						color: "7f96FF46",
						fire_colors_index: 2
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_blue",
					ui_name: "$mat_spark_blue",
					wang_color: "7f82DCFF"
				},
				Graphics: {
					attr: {
						color: "7f82DCFF",
						fire_colors_index: 1
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_red",
					ui_name: "$mat_spark_red",
					wang_color: "7fFF2813",
					gfx_glow: 90
				},
				Graphics: {
					attr: {
						color: "7fFF2813",
						fire_colors_index: 3
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_red_bright",
					ui_name: "$mat_spark_red",
					wang_color: "7fFF2814",
					gfx_glow: 255
				},
				Graphics: {
					attr: {
						color: "7fFF2813",
						fire_colors_index: 3
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_white",
					ui_name: "$mat_spark_white",
					wang_color: "ffFEFEFF",
					gfx_glow: 90
				},
				Graphics: {
					attr: {
						color: "7fFEFEFF",
						fire_colors_index: 4
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_white_bright",
					ui_name: "$mat_spark_white",
					wang_color: "ffFEFEFD",
					gfx_glow: 255
				},
				Graphics: {
					attr: {
						color: "7fFEFEFF",
						fire_colors_index: 4
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_yellow",
					ui_name: "$mat_spark_yellow",
					wang_color: "ffFFF028",
					gfx_glow: 90
				},
				Graphics: {
					attr: {
						color: "7fffac0f",
						fire_colors_index: 5
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_purple",
					ui_name: "$mat_spark_purple",
					wang_color: "44B43C1F",
					gfx_glow: 60
				},
				Graphics: {
					attr: {
						color: "44B43CFF"
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_purple_bright",
					ui_name: "$mat_spark_purple",
					wang_color: "44B4323F",
					gfx_glow: 90
				},
				Graphics: {
					attr: {
						color: "7f7c41ff"
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_player",
					ui_name: "$mat_spark_player",
					wang_color: "ffFFF029",
					gfx_glow: 90
				},
				Graphics: {
					attr: {
						color: "7f7f5476",
						fire_colors_index: 5
					}
				}
			},
			{
				attr: {
					_parent: "spark",
					_inherit_reactions: 1,
					name: "spark_teal",
					ui_name: "$mat_spark_teal",
					wang_color: "44A41C1F",
					gfx_glow: 120
				},
				Graphics: {
					attr: {
						color: "6A44f393"
					}
				}
			},
			{
				attr: {
					_parent: "sand_static",
					_inherit_reactions: 1,
					name: "sand_static_rainforest",
					ui_name: "$mat_sand_static_rainforest",
					wang_color: "ff524F00",
					hp: 70000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/earth_rainforest.png",
						color: "ff524F00"
					}
				}
			},
			{
				attr: {
					_parent: "sand_static",
					_inherit_reactions: 1,
					name: "bone_static",
					ui_name: "$mat_bone_static",
					wang_color: "ff523F03",
					hp: 20000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/bone.png",
						color: "ff524F00"
					}
				}
			},
			{
				attr: {
					_parent: "sand_static",
					_inherit_reactions: 1,
					name: "rust_static",
					ui_name: "$mat_rust_static",
					wang_color: "ffee8F49",
					hp: 30000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rust.png",
						color: "ffee8F49"
					}
				}
			},
			{
				attr: {
					_parent: "sand_static",
					_inherit_reactions: 1,
					name: "sand_static_bright",
					ui_name: "$mat_sand_static_bright",
					wang_color: "ffef8F49",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/earth_bright.png",
						color: "ffef8F49"
					}
				}
			},
			{
				attr: {
					_parent: "sand_static",
					_inherit_reactions: 1,
					name: "sand_static_red",
					ui_name: "$mat_sand_static_red",
					wang_color: "ffff8F47",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/earth_bright_red.png",
						color: "ffff8F47"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ffff8F47",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_red_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_red_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_red_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_red_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_red_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_red_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[solid]",
					name: "rock_static_intro",
					ui_name: "$mat_rock_static_intro",
					wang_color: "ff0a3344",
					hp: 160000,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff313b36",
						pixel_all_around: "ff313b36"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[solid]",
					name: "rock_static_cursed",
					ui_name: "$mat_rock_static_cursed",
					wang_color: "ff3f4d3e",
					hp: 160000,
					durability: 14,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_cursed.png",
						color: "ff313b36",
						pixel_all_around: "ff313b36"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_cursed_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_cursed_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_cursed_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_cursed_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_cursed_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_cursed_6.png"
										}
									}
								]
							}
						}
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -13.14,
						"vel_random.min_x": -17.71,
						"vel_random.max_x": 17.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 60,
						render_on_grid: 1,
						airflow_force: 0.5314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.0145,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[solid]",
					name: "rock_hard",
					ui_name: "$mat_rock_hard",
					wang_color: "ff003344",
					hp: 200000,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_hard.png",
						color: "ff003344"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_hard_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_hard_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_hard_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_hard_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_hard_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_hard_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[solid]",
					name: "wood_tree",
					ui_name: "$mat_wood",
					wang_color: "ff005345",
					hp: 200000,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood_vertical.png",
						color: "ff003344"
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[solid]",
					name: "rock_static_noedge",
					ui_name: "$mat_rock_static_noedge",
					wang_color: "ff003345",
					hp: 200000,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff003345"
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[solid]",
					name: "rock_hard_border",
					ui_name: "$mat_rock_hard_border",
					wang_color: "ff104344",
					hp: 200000,
					durability: 12,
					audio_physics_material_event: "rock",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_hard_border.png",
						color: "ff104344"
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					name: "rock_magic_gate",
					ui_name: "$mat_rock_magic_gate",
					wang_color: "ffab3347",
					durability: 12,
					hp: 400000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_hard.png",
						color: "ffab3344"
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					name: "rock_magic_bottom",
					ui_name: "$mat_rock_magic_bottom",
					wang_color: "ffabb346",
					durability: 12,
					hp: 400000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/magic_gate.png",
						color: "ffabb344"
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 0,
					name: "rock_eroding",
					ui_name: "$mat_rock_eroding",
					cell_type: "solid",
					wang_color: "ffafb146",
					durability: 2,
					hp: 100,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_hard.png",
						color: "ffabb344"
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					name: "rock_vault",
					ui_name: "$mat_rock_vault",
					wang_color: "ff003349",
					hp: 200000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/vaultrock.png",
						color: "ff003344"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_vaultrock_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_vaultrock_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_vaultrock_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_vaultrock_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_vaultrock_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_vaultrock_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					name: "coal_static",
					ui_name: "$mat_coal_static",
					wang_color: "ff124444",
					hp: 25000,
					density: 8,
					cell_type: "liquid",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_viscosity: 75,
					liquid_sticks_to_ceiling: 50,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/coal_static.png",
						color: "ff124444"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.3,
								require_same_material: 1,
								require_same_material_type: 0,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_coal_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_coal_2.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					name: "rock_static_grey",
					ui_name: "$mat_rock_static_grey",
					wang_color: "ff1244a4",
					hp: 150000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_grey.png",
						color: "ff1244a4"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_grey_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_grey_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_grey_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_grey_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_grey_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_grey_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[meltable_to_lava],[corrodible],[solid]",
					name: "rock_static_radioactive",
					ui_name: "$mat_rock_static_radioactive",
					wang_color: "ff00f344",
					gfx_glow: 255,
					hp: 20000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_radioactive.png",
						color: "ff003344"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_radio_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_radio_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_radio_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_radio_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_radio_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_radio_6.png"
										}
									}
								]
							}
						}
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[alchemy],[meltable_to_lava],[corrodible],[solid]",
					name: "rock_static_poison",
					ui_name: "$mat_rock_static_poison",
					wang_color: "ff00fa44",
					hp: 20000,
					gfx_glow: 128,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock_poison.png",
						color: "ffB43CFF"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_poison_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_poison_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_poison_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_poison_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_poison_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_poison_6.png"
										}
									}
								]
							}
						}
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "the_end",
					_inherit_reactions: 1,
					tags: "[static],[corrodible],[alchemy],[solid]",
					name: "skullrock",
					ui_name: "$mat_skullrock",
					wang_color: "ff00a344",
					hp: 200000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/skullrock.png",
						color: "ff00a344"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "NORMAL_BASED",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_skull_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_skull_ver.png",
											min_angle: 135,
											max_angle: 235
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_skull_hor.png",
											min_angle: 235,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_skull_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_skull_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					name: "rock_static_wet",
					ui_name: "$mat_rock_static_wet",
					wang_color: "ff103344",
					hp: 200000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff103344"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templebrick_static",
					ui_name: "$mat_templebrick_static",
					wang_color: "ff786C42",
					wang_noise_percent: 0.33,
					hp: 1000000,
					wang_curvature: 0.5,
					wang_noise_type: 2,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick.png",
						color: "ff786C42"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "NORMAL_BASED",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 135,
											max_angle: 235
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_hor.png",
											min_angle: 235,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templebrick_static_soft",
					ui_name: "$mat_templebrick_static",
					wang_color: "ffaf9f6a",
					wang_noise_percent: 0.33,
					hp: 80000,
					wang_curvature: 0.5,
					wang_noise_type: 2,
					durability: 11,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick.png",
						color: "ff786C42"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "NORMAL_BASED",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 135,
											max_angle: 235
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_hor.png",
											min_angle: 235,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templebrick_noedge_static",
					ui_name: "$mat_templebrick_noedge_static",
					wang_color: "ff786C44",
					wang_noise_percent: 0.33,
					durability: 14,
					hp: 1000000,
					wang_curvature: 0.5,
					wang_noise_type: 2,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick.png",
						color: "ff786C44"
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templerock_soft",
					ui_name: "$mat_templerock_static",
					tags: "[static],[corrodible],[alchemy],[solid]",
					burnable: 0,
					density: 10,
					cell_type: "liquid",
					wang_color: "ff6A54A9",
					liquid_gravity: 1.2,
					liquid_sand: 1,
					liquid_static: 1,
					solid_static_type: 1,
					on_fire: 0,
					wang_noise_percent: 0.15,
					hp: 10000,
					platform_type: 1,
					durability: 10,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templerock.png",
						color: "ff6F5439",
						pixel_all_around: "ff6F5439",
						pixel_lonely: "ff6F5439",
						pixel_top_right: "ff6F5439",
						pixel_bottom_left: "ff6F5439",
						pixel_left: "ff9A7142",
						pixel_top_left: "ff9A7142",
						pixel_top: "ff9A7142",
						pixel_right: "ff543F2B",
						pixel_bottom: "ff543F2B",
						pixel_bottom_right: "ff543F2B"
					}
				}
			},
			{
				attr: {
					_parent: "templebrick_static",
					_inherit_reactions: 1,
					name: "templebrick_thick_static",
					ui_name: "$mat_templebrick_thick_static",
					wang_color: "ff646C58",
					wang_noise_percent: 0.27,
					durability: 10,
					hp: 100000,
					wang_curvature: 0.5,
					wang_noise_type: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick.png",
						color: "ff646C58"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "NORMAL_BASED",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 135,
											max_angle: 235
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_hor.png",
											min_angle: 235,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templebrickdark_static",
					ui_name: "$mat_templebrickdark_static",
					hp: 200000,
					durability: 10,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock",
					wang_color: "ff5B5047"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick_alt.png",
						color: "ff5B5047"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "NORMAL_BASED",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_alt_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_alt_ver.png",
											min_angle: 135,
											max_angle: 235
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_temple_alt_hor.png",
											min_angle: 235,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_alt_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_temple_alt_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "glowstone",
					ui_name: "$mat_glowstone",
					gfx_glow: 255,
					hp: 40000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock",
					wang_color: "ffAAF06E"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick_alt.png",
						color: "ffAAF06E"
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "glowstone_altar",
					ui_name: "$mat_glowstone_altar",
					gfx_glow: 255,
					hp: 40000,
					wang_color: "ffffc931"
				},
				Graphics: {
					attr: {
						texture_file: "",
						color: "ff2feb48"
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "glowstone_potion",
					ui_name: "$mat_glowstone_potion",
					gfx_glow: 255,
					hp: 40000,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock",
					wang_color: "ffA3F06E"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick_alt.png",
						color: "ffAAF06E"
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templebrick_red",
					ui_name: "$mat_templebrick_red",
					hp: 200000,
					wang_color: "ff78AC42",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick_red.png",
						color: "ff78AC42"
					}
				}
			},
			{
				attr: {
					_parent: "templerock_static",
					_inherit_reactions: 1,
					name: "templebrick_moss_static",
					ui_name: "$mat_templebrick_moss_static",
					wang_color: "ff786C45",
					solid_friction: 0.8,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock",
					wang_noise_percent: 0.3
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templerock.png",
						color: "ff786C42"
					}
				}
			},
			{
				attr: {
					_parent: "templebrick_static",
					_inherit_reactions: 1,
					name: "the_end",
					ui_name: "$mat_the_end",
					wang_color: "ff026C05",
					wang_noise_percent: 0.5,
					hp: 100000,
					wang_curvature: 0.5,
					wang_noise_type: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/the_end.png",
						color: "ff026C05"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "NORMAL_BASED",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_end_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_end_ver.png",
											min_angle: 135,
											max_angle: 235
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_end_hor.png",
											min_angle: 235,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_end_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_end_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "steel_static",
					_inherit_reactions: 1,
					name: "steelmoss_static",
					ui_name: "$mat_steelmoss_static",
					wang_color: "ff787A55",
					wang_noise_percent: 0,
					wang_curvature: 0.5,
					solid_friction: 0.9,
					electrical_conductivity: 1,
					durability: 11
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanelmoss.png",
						color: "ff787A55"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelmoss_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelmoss_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelmoss_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelmoss_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelmoss_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "steel_static",
					_inherit_reactions: 1,
					name: "steelmoss_slanted",
					ui_name: "$mat_steelmoss_slanted",
					wang_color: "ff787A85",
					wang_noise_percent: 0,
					wang_curvature: 0.5,
					wang_noise_type: 1,
					solid_friction: 0.9
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanelmoss.png",
						color: "ff787A85"
					}
				}
			},
			{
				attr: {
					_parent: "steel_static",
					_inherit_reactions: 1,
					name: "steelsmoke_static",
					ui_name: "$mat_steelsmoke_static",
					wang_color: "ff646455"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff646455"
					}
				}
			},
			{
				attr: {
					_parent: "steel_static",
					_inherit_reactions: 1,
					name: "steelpipe_static",
					ui_name: "$mat_steelpipe_static",
					wang_color: "ff64c455",
					durability: 10,
					hp: 90000
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff646455"
					}
				}
			},
			{
				attr: {
					_parent: "steel_static",
					_inherit_reactions: 1,
					name: "steel_static_strong",
					ui_name: "$mat_steel_static_strong",
					tags: "[static],[alchemy],[solid]",
					wang_color: "ff404a41"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff404041"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "steel_static",
					_inherit_reactions: 1,
					name: "steel_static_unmeltable",
					ui_name: "$mat_steel_static_unmeltable",
					tags: "[static],[alchemy],[corrodible],[solid]",
					wang_color: "ff404F50"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff404041"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_steelpanel_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "ice_static",
					_inherit_reactions: 0,
					tags: "[static],[alchemy],[solid]",
					name: "rock_static_intro_breakable",
					ui_name: "$mat_rock_static_intro_breakable",
					wang_color: "ff0a3355",
					hp: 30000,
					crackability: 100,
					slippery: 0,
					solid_friction: 0.85,
					convert_to_box2d_material: "rock_static_box2d",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff313b36",
						pixel_all_around: "ff313b36"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_2.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_3.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_4.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_5.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_rock_6.png"
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "ice_static",
					_inherit_reactions: 0,
					tags: "[static],[alchemy],[meltable_to_blood],[solid]",
					name: "ice_blood_static",
					ui_name: "$mat_ice_blood_static",
					wang_color: "ffcb7070",
					hp: 20000,
					crackability: 100,
					slippery: 1,
					solid_friction: 0.85,
					convert_to_box2d_material: "ice_blood_glass",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_blood.png",
						color: "ffcb7070"
					}
				}
			},
			{
				attr: {
					_parent: "ice_static",
					_inherit_reactions: 0,
					tags: "[static],[alchemy],[meltable_to_slime],[solid]",
					name: "ice_slime_static",
					ui_name: "$mat_ice_slime_static",
					wang_color: "ffcba270",
					hp: 20000,
					crackability: 100,
					slippery: 1,
					solid_friction: 0.85,
					convert_to_box2d_material: "ice_slime_glass",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/ice_slime.png",
						color: "ffb870d2"
					}
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					_inherit_reactions: 1,
					slippery: 0,
					solid_friction: 0.05,
					name: "tube_physics",
					ui_name: "$mat_tube_physics",
					wang_color: "ff413F42",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice"
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					tags: "[static],[meltable_to_acid],[alchemy],[solid]",
					_inherit_reactions: 1,
					solid_friction: 0.05,
					name: "ice_acid_glass",
					ui_name: "$mat_ice_acid_glass",
					wang_color: "ff41FF42",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					solid_break_to_type: "ice_acid_static",
					gfx_glow: 70
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.3,
						"lifetime.max": 0.6,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.004,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					tags: "[static],[meltable_to_cold],[alchemy],[solid]",
					_inherit_reactions: 1,
					solid_friction: 0.05,
					name: "ice_cold_glass",
					ui_name: "$mat_ice_cold_glass",
					wang_color: "ffA1FF42",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					solid_break_to_type: "ice_cold_static"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.3,
						"lifetime.max": 0.6,
						"gravity.y": 0,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.004,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					tags: "[static],[meltable_to_radioactive],[alchemy],[solid]",
					_inherit_reactions: 1,
					solid_friction: 0.05,
					name: "ice_radioactive_glass",
					ui_name: "$mat_ice_radioactive_glass",
					wang_color: "ffB1FF42",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					gfx_glow: 70,
					solid_break_to_type: "ice_radioactive_static"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					tags: "[static],[meltable_to_poison],[alchemy],[solid]",
					_inherit_reactions: 1,
					solid_friction: 0.05,
					name: "ice_poison_glass",
					ui_name: "$mat_ice_poison_glass",
					wang_color: "ffbc3ae0",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					gfx_glow: 70,
					solid_break_to_type: "ice_poison_static"
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					tags: "[static],[meltable_to_blood],[alchemy],[solid]",
					_inherit_reactions: 1,
					solid_friction: 0.05,
					name: "ice_blood_glass",
					ui_name: "$mat_ice_blood_glass",
					wang_color: "ffbc40e2",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					gfx_glow: 0,
					solid_break_to_type: "ice_blood_static"
				}
			},
			{
				attr: {
					_parent: "ice_glass",
					tags: "[static],[meltable_to_slime],[alchemy],[solid]",
					_inherit_reactions: 1,
					solid_friction: 0.05,
					name: "ice_slime_glass",
					ui_name: "$mat_ice_slime_glass",
					wang_color: "ffbc10e2",
					audio_physics_material_wall: "ice",
					audio_physics_material_solid: "ice",
					gfx_glow: 0,
					solid_break_to_type: "ice_slime_static"
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					name: "wood_static_wet",
					ui_name: "$mat_wood_static_wet",
					solid_friction: 0.5,
					fire_hp: 12000,
					hp: 2000,
					wang_color: "ff413F41"
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					name: "wood_burns_forever",
					ui_name: "$mat_wood_static",
					solid_friction: 0.5,
					fire_hp: 99999999,
					autoignition_temperature: 5,
					hp: 2000,
					wang_color: "ff413F43"
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					name: "creepy_liquid_emitter",
					ui_name: "$mat_creepy_liquid_emitter",
					solid_friction: 0.5,
					burnable: 0,
					fire_hp: 10000,
					hp: 2000,
					wang_color: "ff41AF41"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick_alt.png"
					}
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					tags: "[corrodible],[alchemy],[gold],[solid]",
					name: "gold_static",
					ui_name: "$mat_gold_static",
					solid_friction: 0.5,
					burnable: 0,
					fire_hp: 10000,
					hp: 2000,
					gfx_glow: 127,
					wang_color: "ff4AAF41"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gold.png"
					}
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					tags: "[corrodible],[alchemy],[gold],[solid]",
					name: "gold_static_dark",
					ui_name: "$mat_gold_static_dark",
					solid_friction: 0.5,
					burnable: 0,
					fire_hp: 10000,
					hp: 2000,
					gfx_glow: 70,
					wang_color: "ff4ACF41"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gold_dark.png"
					}
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					name: "wood_static_vertical",
					ui_name: "$mat_wood_static_vertical",
					wang_color: "ff413F3A"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood_vertical.png"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								color: "ff233112",
								overwrite: 0,
								percent: 1,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "CARDINAL_DIRECTIONS",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 45,
											max_angle: 135
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 135,
											max_angle: 225
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 1,
											do_only_vertical_stripe: 0,
											filename: "data/materials_gfx/edge_files/edge_wood_hor.png",
											min_angle: 225,
											max_angle: 315
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 315,
											max_angle: 360
										}
									},
									{
										attr: {
											do_only_horizontal_stripe: 0,
											do_only_vertical_stripe: 1,
											filename: "data/materials_gfx/edge_files/edge_wood_ver.png",
											min_angle: 0,
											max_angle: 45
										}
									}
								]
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "wood_static",
					_inherit_reactions: 1,
					name: "wood_static_gas",
					ui_name: "$mat_wood_static_gas",
					solid_friction: 0.5,
					fire_hp: 300,
					temperature_of_fire: 90,
					autoignition_temperature: 15,
					hp: 2000,
					wang_color: "ff414F41"
				}
			},
			{
				attr: {
					_parent: "rock_static",
					_inherit_reactions: 1,
					tags: "[static],[corrodible]",
					name: "corruption_static",
					ui_name: "$mat_corruption_static",
					wang_color: "ff7D0067",
					gfx_glow: 64,
					hp: 20000,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/corruption.png",
						color: "ff7D0067"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "smoke",
					name: "smoke_magic",
					ui_name: "$mat_smoke_magic",
					lifetime: 150,
					wang_color: "01c1e5ff"
				},
				Graphics: {
					attr: {
						color: "01a53d77"
					}
				},
				ParticleEffect: {
					attr: {
						m_material_id: 52,
						airflow_force: 5.42857,
						airflow_scale: -9.42857,
						friction: 6,
						"gravity.y": -100,
						"lifetime.min": 0,
						"lifetime.max": 1,
						particle_single_width: 1,
						probability: 0.0857143,
						render_on_grid: 1,
						"vel.y": -28.5714,
						"vel_random.min_x": -20,
						"vel_random.max_x": 22.8571,
						"vel_random.min_y": -22.8571,
						"vel_random.max_y": 31.4286
					}
				}
			},
			{
				attr: {
					_parent: "steam",
					name: "steam_trailer",
					ui_name: "$mat_steam",
					wang_color: "ffc6c5ff"
				},
				Graphics: {
					attr: {
						color: "bf84A7BE"
					}
				}
			},
			{
				attr: {
					_parent: "acid_gas",
					name: "poison_gas",
					ui_name: "$mat_poison_gas",
					wang_color: "7fB42CFF"
				},
				Graphics: {
					attr: {
						color: "7fB42CFF"
					}
				}
			},
			{
				attr: {
					_parent: "acid_gas",
					_inherit_reactions: 1,
					name: "fungal_gas",
					ui_name: "$mat_fungal_gas",
					wang_color: "7fEA1CAF"
				},
				Graphics: {
					attr: {
						color: "7fEA1CAF"
					}
				}
			},
			{
				attr: {
					_parent: "water",
					name: "water_fading",
					ui_name: "$mat_water_fading",
					wang_color: "902F354C",
					status_effects: "WET"
				},
				Graphics: {
					attr: {
						color: "A0376259"
					}
				}
			},
			{
				attr: {
					_parent: "water",
					name: "water_salt",
					ui_name: "$mat_water_salt",
					wang_color: "a02F754C",
					density: 4.5,
					status_effects: "WET"
				},
				Graphics: {
					attr: {
						color: "a02F754C"
					}
				}
			},
			{
				attr: {
					_parent: "water",
					tags: "[liquid],[corrodible],[freezable],[water],[impure]",
					name: "void_liquid",
					ui_name: "$mat_void_liquid",
					wang_color: "ffa2332a",
					density: 14.5,
					gfx_glow: 255,
					lifetime: 200
				},
				Graphics: {
					attr: {
						color: "ff000000"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": 2.86,
						"vel_random.min_x": -6,
						"vel_random.max_x": 6,
						"vel_random.min_y": -2.9,
						"vel_random.max_y": 3.2,
						render_on_grid: 1,
						probability: 0.6,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "oil",
					name: "liquid_fire",
					ui_name: "$mat_liquid_fire",
					wang_color: "af3B3B3D",
					requires_oxygen: 0,
					liquid_gravity: 0.2,
					liquid_viscosity: 9,
					liquid_sticks_to_ceiling: 90,
					liquid_flow_speed: 0.3,
					temperature_of_fire: 150,
					on_fire: 1,
					liquid_stains: 0,
					fire_hp: 1000000,
					status_effects: "OILED",
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						color: "aff08400"
					}
				}
			},
			{
				attr: {
					_parent: "oil",
					name: "liquid_fire_weak",
					ui_name: "$mat_liquid_fire_weak",
					wang_color: "ff3B3B4D",
					requires_oxygen: 0,
					liquid_gravity: 0.2,
					liquid_viscosity: 9,
					liquid_sticks_to_ceiling: 90,
					liquid_flow_speed: 0.3,
					temperature_of_fire: 150,
					liquid_stains: 0,
					on_fire: 1,
					fire_hp: 2300,
					status_effects: "OILED",
					gfx_glow: 200
				},
				Graphics: {
					attr: {
						color: "ffebcd00"
					}
				}
			},
			{
				attr: {
					_parent: "alcohol",
					tags: "[liquid],[burnable],[water]",
					name: "midas_precursor",
					ui_name: "$mat_midas_precursor",
					liquid_gravity: 0.5,
					wang_color: "e1243CFF"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/midas_precursor.png",
						color: "e1243CFF"
					}
				}
			},
			{
				attr: {
					_parent: "alcohol",
					tags: "[liquid],[burnable],[water]",
					name: "midas",
					ui_name: "$mat_midas",
					wang_color: "efefa101",
					liquid_gravity: 0.5,
					gfx_glow: 90,
					density: 4
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/honey.png",
						color: "efefa101"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": 2.86,
						"vel_random.min_x": -6,
						"vel_random.max_x": 6,
						"vel_random.min_y": -2.9,
						"vel_random.max_y": 3.2,
						render_on_grid: 1,
						probability: 0.6,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "blood",
					_inherit_reactions: 0,
					name: "blood_fading_slow",
					wang_color: "44F13C23",
					lifetime: 200
				},
				Graphics: {
					attr: {
						color: "aa830000"
					}
				}
			},
			{
				attr: {
					_parent: "radioactive_liquid",
					_inherit_reactions: 0,
					tags: "[liquid],[corrodible],[soluble],[impure]",
					name: "poison",
					wang_color: "44B43CFF",
					danger_poison: 1,
					danger_radioactive: 0,
					status_effects: "POISONED"
				},
				Graphics: {
					attr: {
						color: "44B43CFF"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "radioactive_liquid",
					name: "radioactive_liquid_yellow",
					ui_name: "$mat_radioactive_liquid_yellow",
					wang_color: "44B4FF10",
					danger_poison: 0,
					danger_radioactive: 1,
					status_effects: "RADIOACTIVE"
				},
				Graphics: {
					attr: {
						color: "44B4FF10"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "plasma_fading",
					name: "plasma_fading_green",
					ui_name: "$mat_plasma_fading_green",
					fire_hp: 100,
					wang_color: "ff78F050",
					requires_oxygen: 0,
					liquid_viscosity: 10,
					liquid_sticks_to_ceiling: 100,
					liquid_flow_speed: 0.25,
					temperature_of_fire: 150,
					liquid_gravity: 0.2,
					liquid_sand: 1,
					on_fire: 1
				},
				Graphics: {
					attr: {
						color: "ff78F050"
					}
				}
			},
			{
				attr: {
					_parent: "plasma_fading",
					name: "plasma_fading_pink",
					ui_name: "$mat_plasma_fading_pink",
					fire_hp: 100,
					wang_color: "ffFF50F0",
					requires_oxygen: 0,
					liquid_viscosity: 10,
					liquid_sticks_to_ceiling: 100,
					liquid_flow_speed: 0.25,
					temperature_of_fire: 150,
					liquid_gravity: 0.2,
					liquid_sand: 1,
					on_fire: 1
				},
				Graphics: {
					attr: {
						color: "ffFF50F0"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "steel_static_molten",
					ui_name: "$mat_steel_static_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404042",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "steelmoss_slanted_molten",
					ui_name: "$mat_steelmoss_slanted_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404043",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanelmoss.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "steelmoss_static_molten",
					ui_name: "$mat_steelmoss_static_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404044",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanelmoss.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "steelsmoke_static_molten",
					ui_name: "$mat_steelsmoke_static_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404045",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steelpanel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "metal_molten",
					ui_name: "$mat_metal_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404046",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "metal_rust_molten",
					ui_name: "$mat_metal_rust_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404047",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "metal_nohit_molten",
					ui_name: "$mat_metal_nohit_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404048",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "aluminium_molten",
					ui_name: "$mat_aluminium_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404049",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "aluminium_robot_molten",
					ui_name: "$mat_aluminium_robot_molten",
					gfx_glow: 200,
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404050",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "metal_prop_molten",
					gfx_glow: 200,
					ui_name: "$mat_metal_prop_molten",
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404051",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "steel_rust_molten",
					gfx_glow: 200,
					ui_name: "$mat_steel_rust_molten",
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404052",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "gold_molten",
					name: "aluminium_oxide_molten",
					gfx_glow: 200,
					ui_name: "$mat_aluminium_oxide_molten",
					on_fire: 1,
					requires_oxygen: 1,
					temperature_of_fire: 100,
					danger_fire: 1,
					wang_color: "ff404053",
					status_effects: "ON_FIRE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff404040"
					}
				}
			},
			{
				attr: {
					_parent: "sand",
					_inherit_reactions: 1,
					name: "sand_blue",
					ui_name: "$mat_sand_blue",
					wang_color: "ff008240"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/sand_blue.png",
						color: "ff008240"
					}
				}
			},
			{
				attr: {
					_parent: "sand",
					_inherit_reactions: 1,
					name: "sand_surface",
					ui_name: "$mat_sand",
					wang_color: "ff009242"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/sand_surface.png",
						color: "ffb89e57"
					}
				}
			},
			{
				attr: {
					_parent: "sand",
					_inherit_reactions: 1,
					name: "lavasand",
					ui_name: "$mat_lavasand",
					wang_color: "ff0A8240",
					audio_physics_material_event: "sand",
					audio_physics_material_wall: "sand",
					audio_physics_material_solid: "sand"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/lavarock.png",
						color: "ff0A8240"
					}
				}
			},
			{
				attr: {
					_parent: "soil",
					_inherit_reactions: 1,
					density: 10,
					name: "soil_lush",
					ui_name: "$mat_soil_lush",
					wang_color: "ff008040",
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 100,
					fire_hp: 15,
					temperature_of_fire: 30,
					autoignition_temperature: 60,
					burnable: 1,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/soil_lush.png",
						color: "ff008040"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_soil_lush_1.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "soil",
					_inherit_reactions: 1,
					density: 10,
					name: "soil_dead",
					ui_name: "$mat_soil_dead",
					wang_color: "ff708040",
					liquid_viscosity: 75,
					liquid_sticks_to_ceiling: 50,
					fire_hp: 100,
					temperature_of_fire: 30,
					autoignition_temperature: 60,
					burnable: 1,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/soil_dead.png",
						color: "ff708040"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: {
									attr: {
										allow_random_rotation: 1,
										filename: "data/materials_gfx/edge_files/edge_soil_dead_1.png"
									}
								}
							}
						}
					}
				}
			},
			{
				attr: {
					_parent: "sandstone",
					_inherit_reactions: 1,
					name: "sandstone_surface",
					ui_name: "$mat_sandstone",
					wang_color: "ff90fe4a"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/desert_surface.png",
						color: "ff90fe40"
					}
				}
			},
			{
				attr: {
					_parent: "slime",
					_inherit_reactions: 1,
					name: "slime_green",
					ui_name: "$mat_slime_green",
					wang_color: "8880FF80",
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 100,
					liquid_damping: 0.9,
					liquid_flow_speed: 0.1,
					status_effects: "SLIMY",
					audio_physics_material_event: "slime",
					audio_physics_material_wall: "slime",
					audio_physics_material_solid: "slime"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/slime_green.png",
						color: "884fab2e"
					}
				}
			},
			{
				attr: {
					_parent: "slime_green",
					_inherit_reactions: 0,
					name: "pea_soup",
					ui_name: "$mat_pea_soup",
					wang_color: "8880FF82",
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 100,
					liquid_damping: 0.9,
					liquid_flow_speed: 0.1,
					status_effects: "SLIMY",
					audio_physics_material_event: "slime",
					audio_physics_material_wall: "slime",
					audio_physics_material_solid: "slime"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/slime_green.png",
						color: "884fab2e"
					}
				}
			},
			{
				attr: {
					_parent: "slime",
					_inherit_reactions: 1,
					name: "endslime",
					ui_name: "$mat_endslime",
					tags: "[static],[corrodible],[alchemy]",
					wang_color: "888AFF80",
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 100,
					liquid_damping: 0.9,
					liquid_flow_speed: 0.1,
					liquid_gravity: 0.5,
					liquid_sand: 1,
					liquid_static: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/endslime.png",
						color: "88ab372c"
					},
					Edge: {
						EdgeGraphics: {
							attr: {
								overwrite: 0,
								percent: 0.3,
								require_same_material: 0,
								require_same_material_type: 1,
								type: "EVERYWHERE",
								z: 1
							},
							Images: {
								Image: [
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_endslime_1.png"
										}
									},
									{
										attr: {
											allow_random_rotation: 1,
											filename: "data/materials_gfx/edge_files/edge_endslime_2.png"
										}
									}
								]
							}
						}
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -13.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 60,
						render_on_grid: 1,
						airflow_force: 0.5314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.0045,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "slime",
					_inherit_reactions: 1,
					name: "endslime_blood",
					ui_name: "$mat_endslime_blood",
					tags: "[static],[corrodible]",
					wang_color: "888CFF80",
					liquid_viscosity: 0,
					liquid_sticks_to_ceiling: 100,
					liquid_damping: 0.9,
					liquid_flow_speed: 0.1,
					liquid_gravity: 0.5,
					liquid_sand: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/endslime.png",
						color: "88ab372c"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -13.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.9,
						"lifetime.max": 1.6,
						"gravity.y": 60,
						render_on_grid: 1,
						airflow_force: 0.5314,
						airflow_scale: 0.1371,
						friction: 0.0002,
						probability: 0.0045,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "meat_slime",
					name: "meat_slime_green",
					ui_name: "$mat_meat_slime_green",
					solid_break_to_type: "slime_green",
					solid_restitution: 0.4,
					wang_color: "ffed4d4c",
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					audio_is_soft: 1,
					solid_on_collision_material: "slime_green"
				}
			},
			{
				attr: {
					_parent: "meat_slime",
					name: "meat_slime_orange",
					ui_name: "$mat_meat_slime_orange",
					solid_break_to_type: "endslime_blood",
					solid_restitution: 0.4,
					wang_color: "fffeaf2c",
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					audio_is_soft: 1,
					solid_on_collision_material: "endslime_blood"
				},
				Graphics: {
					attr: {
						color: "fffeaf2c"
					}
				}
			},
			{
				attr: {
					_parent: "meat",
					name: "meat_worm",
					ui_name: "$mat_meat_worm",
					wang_color: "ffebcda1",
					solid_on_collision_material: "blood_worm",
					solid_break_to_type: "blood_worm",
					gfx_glow: 50,
					audio_physics_material_wall: "meat",
					audio_physics_material_solid: "meat",
					audio_is_soft: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wormmeat.png",
						color: "ffebcd00"
					}
				}
			},
			{
				attr: {
					_parent: "gold",
					name: "gold_radioactive",
					ui_name: "$mat_gold_radioactive",
					wang_color: "fffbf451",
					danger_radioactive: 1,
					status_effects: "RADIOACTIVE"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gold.png",
						color: "ffb8ae58"
					}
				},
				ParticleEffect: {
					attr: {
						"vel.y": -17.14,
						"vel_random.min_x": -11.71,
						"vel_random.max_x": 11.71,
						"vel_random.min_y": -17.18,
						"vel_random.max_y": -2.8,
						"lifetime.min": 0.6,
						"lifetime.max": 1.3,
						"gravity.y": 42,
						render_on_grid: 1,
						airflow_force: 0.8314,
						airflow_scale: 0.1371,
						friction: 0.0001,
						probability: 0.003,
						"count.min": 0,
						"count.max": 1
					}
				}
			},
			{
				attr: {
					_parent: "silver",
					name: "steel_sand",
					ui_name: "$mat_steel_sand",
					tags: "[sand_metal],[corrodible],[alchemy]",
					wang_color: "ffebf4a1",
					gfx_glow: 0,
					electrical_conductivity: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ffebf4a1"
					}
				}
			},
			{
				attr: {
					_parent: "salt",
					name: "sodium",
					ui_name: "$mat_sodium",
					wang_color: "ff410F24"
				},
				Graphics: {
					attr: {
						color: "ff410F24"
					}
				}
			},
			{
				attr: {
					_parent: "salt",
					name: "purifying_powder",
					ui_name: "$mat_purifying_powder",
					wang_color: "ffb6d5d8"
				},
				Graphics: {
					attr: {
						color: "ffb6d5d8"
					}
				}
			},
			{
				attr: {
					_parent: "salt",
					name: "burning_powder",
					ui_name: "$mat_burning_powder",
					burnable: 1,
					fire_hp: 100,
					wang_color: "ffa10F24",
					autoignition_temperature: 0,
					temperature_of_fire: 50,
					requires_oxygen: 0,
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "gravel"
				},
				Graphics: {
					attr: {
						color: "ffa10F24"
					}
				}
			},
			{
				attr: {
					_parent: "plastic_red_molten",
					name: "plastic_molten",
					ui_name: "$mat_plastic_molten",
					wang_color: "ffff00ab"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					_parent: "plastic_red_molten",
					name: "plastic_prop_molten",
					ui_name: "$mat_plastic_prop_molten",
					wang_color: "ffbb00ab"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff73737f",
						pixel_all_around: "ff73737f",
						pixel_lonely: "ff4f5eab",
						pixel_top_right: "ff4f5eab",
						pixel_bottom_left: "ff4f5eab",
						pixel_left: "ffc1c8be",
						pixel_top_left: "ffc1c8be",
						pixel_top: "ffc1c8be",
						pixel_right: "ff25333b",
						pixel_bottom_right: "ff25333b",
						pixel_bottom: "ff25333b"
					}
				}
			},
			{
				attr: {
					_parent: "fungi",
					_inherit_reactions: 1,
					solid_on_collision_material: "slime_green",
					stickyness: 0.7,
					solid_friction: 0.7,
					name: "fungi_green",
					ui_name: "$mat_fungi_green",
					wang_color: "ff45FF45",
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss.png",
						color: "ff45FF45"
					}
				}
			},
			{
				attr: {
					_parent: "fungi",
					_inherit_reactions: 1,
					tags: "[plant],[corrodible],[burnable]",
					stickyness: 0.1,
					solid_friction: 0.7,
					name: "fungi_creeping",
					ui_name: "$mat_fungi_creeping",
					wang_color: "ff46FF65",
					status_effects: "POLYMORPH",
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/meat_rotten.png",
						color: "ff45FF45"
					}
				}
			},
			{
				attr: {
					_parent: "fungi",
					_inherit_reactions: 1,
					tags: "[plant],[corrodible],[burnable]",
					stickyness: 0.1,
					solid_friction: 0.7,
					name: "fungi_creeping_secret",
					ui_name: "$mat_fungi_green",
					wang_color: "ff461FF5",
					status_effects: "POLYMORPH",
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/slime.png",
						color: "ff45FF45"
					}
				}
			},
			{
				attr: {
					_parent: "moss",
					_inherit_reactions: 1,
					density: 3.4,
					liquid_sand: 0,
					name: "peat",
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock",
					wang_color: "A045AA45"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss.png",
						color: "A045AA45"
					}
				}
			},
			{
				attr: {
					_parent: "moss",
					_inherit_reactions: 1,
					density: 3.4,
					name: "moss_rust",
					ui_name: "$mat_moss_rust",
					wang_color: "ff45F145",
					audio_physics_material_event: "gravel",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss_rust.png",
						is_grass: 1,
						color: "ff9a5e4c"
					}
				}
			},
			{
				attr: {
					_parent: "wood_player_b2",
					_inherit_reactions: 1,
					name: "wood_player_b2_vertical",
					ui_name: "$mat_wood_player_b2_vertical",
					wang_color: "ffa13f02"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood_vertical.png"
					}
				}
			},
			{
				attr: {
					_parent: "fuse",
					name: "fuse_bright",
					ui_name: "$mat_fuse",
					tags: "[box2d]",
					wang_color: "ffEA151E"
				},
				Graphics: {
					attr: {
						normal_mapped: 1,
						color: "ffab57a0"
					}
				}
			},
			{
				attr: {
					_parent: "fuse",
					name: "fuse_tnt",
					ui_name: "$mat_fuse_tnt",
					tags: "[box2d]",
					solid_gravity_scale: 1.3,
					solid_restitution: 0.25,
					solid_friction: 0.99,
					wang_color: "ffEAAAAE"
				},
				Graphics: {
					attr: {
						normal_mapped: 0,
						color: "ff304055"
					}
				}
			},
			{
				attr: {
					_parent: "fuse",
					name: "fuse_holy",
					ui_name: "$mat_fuse_holy",
					tags: "[box2d]",
					solid_gravity_scale: 1.3,
					solid_restitution: 0.25,
					solid_friction: 0.99,
					wang_color: "ffEAABAE",
					audio_physics_material_event: "metalhollow_gold",
					audio_physics_material_wall: "metalwall",
					audio_physics_material_solid: "metalhollow_gold"
				},
				Graphics: {
					attr: {
						normal_mapped: 0,
						color: "fff0d447"
					}
				}
			},
			{
				attr: {
					_parent: "wood",
					_inherit_reactions: 1,
					name: "templebrick_box2d",
					ui_name: "$mat_templebrick_box2d",
					platform_type: 2,
					hp: 10000,
					burnable: 0,
					wang_color: "ff644620"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick.png",
						color: "ff644620"
					}
				}
			},
			{
				attr: {
					_parent: "wood_loose",
					_inherit_reactions: 1,
					name: "wood_trailer",
					ui_name: "$mat_wood_trailer",
					platform_type: 1,
					autoignition_temperature: 50,
					fire_hp: 50,
					solid_static_type: 2,
					solid_collide_with_self: 0,
					wang_color: "ffa44620",
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						color: "ffa44620"
					}
				}
			},
			{
				attr: {
					_parent: "wood",
					_inherit_reactions: 1,
					name: "wood_wall",
					ui_name: "$mat_wood_wall",
					platform_type: 1,
					wang_color: "ff644600"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff644600",
						audio_physics_material_wall: "woodwall",
						audio_physics_material_solid: "wood"
					}
				}
			},
			{
				attr: {
					_parent: "wood_loose",
					_inherit_reactions: 1,
					name: "cactus",
					wang_color: "ff64f640"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff64f640",
						audio_physics_material_wall: "woodwall",
						audio_physics_material_solid: "wood"
					}
				}
			},
			{
				attr: {
					_parent: "wood_loose",
					_inherit_reactions: 1,
					name: "grass_loose",
					ui_name: "$mat_grass_loose",
					wang_color: "ff64e64a"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/moss.png",
						color: "ff64f640",
						audio_physics_material_wall: "gravel",
						audio_physics_material_solid: "wood"
					}
				}
			},
			{
				attr: {
					_parent: "wood_loose",
					_inherit_reactions: 1,
					name: "fungus_loose",
					ui_name: "$mat_fungus_loose",
					solid_restitution: 0.4,
					solid_on_collision_material: "blood_fungi",
					solid_on_collision_splash_power: 1,
					wang_color: "ff64ab40",
					audio_physics_material_wall: "organicbouncy",
					audio_physics_material_solid: "organicbouncy"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/fungi.png",
						color: "ff64ab40"
					}
				}
			},
			{
				attr: {
					_parent: "wood",
					_inherit_reactions: 1,
					name: "wood_prop",
					ui_name: "$mat_wood_prop",
					durability: 8,
					platform_type: 1,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					fire_hp: 420,
					hp: 5000,
					wang_color: "ff966400",
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood",
					audio_materialbreakaudio_type: "WOOD"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff966400"
					}
				}
			},
			{
				attr: {
					_parent: "wood",
					_inherit_reactions: 1,
					name: "wood_prop_durable",
					ui_name: "$mat_wood_prop_durable",
					platform_type: 1,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					fire_hp: 242420,
					temperature_of_fire: 15,
					hp: 200000,
					wang_color: "ff966410",
					audio_physics_material_wall: "woodwall",
					audio_physics_material_solid: "wood"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/wood.png",
						color: "ff966410"
					}
				}
			},
			{
				attr: {
					_parent: "wood_prop",
					_inherit_reactions: 1,
					name: "nest_box2d",
					ui_name: "$mat_nest_box2d",
					platform_type: 0,
					wang_color: "ff3b8d4b"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/nest.png",
						color: "ff3b8d4b"
					}
				}
			},
			{
				attr: {
					_parent: "wood_prop",
					_inherit_reactions: 1,
					name: "cocoon_box2d",
					ui_name: "$mat_cocoon_box2d",
					platform_type: 0,
					wang_color: "ff3f8d4b"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/nest.png",
						color: "ff3f8d4b"
					}
				}
			},
			{
				attr: {
					_parent: "meteorite",
					_inherit_reactions: 1,
					name: "meteorite_crackable",
					ui_name: "$mat_meteorite_crackable",
					wang_color: "ffa86C42",
					crackability: 100,
					cell_type: "solid",
					generates_smoke: 0,
					density: 4,
					on_fire: 0,
					requires_oxygen: 0,
					temperature_of_fire: 10,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					solid_on_sleep_convert: 0,
					solid_break_to_type: "ice_static",
					solid_friction: 0.05,
					solid_on_collision_explode: 1,
					platform_type: 1
				},
				ExplosionConfig: {
					attr: {
						cell_explosion_power: 5.5,
						cell_explosion_damage_required: 1000,
						cell_explosion_velocity_min: 0,
						cell_explosion_radius_min: 10,
						cell_explosion_radius_max: 20,
						cell_explosion_probability: 1.1,
						ray_energy: 100000
					}
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/templebrick.png",
						color: "ffa86C42"
					}
				}
			},
			{
				attr: {
					_parent: "plastic",
					_inherit_reactions: 1,
					name: "plastic_prop",
					ui_name: "$mat_plastic",
					platform_type: 0,
					wang_color: "ff3b6d4b",
					audio_physics_material_wall: "bone",
					audio_physics_material_solid: "bone"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff3b5d4b"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[corrodible],[alchemy],[meltable_metal],[solid]",
					name: "aluminium_robot",
					ui_name: "$mat_aluminium",
					wang_color: "ff3c2d3c",
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "metalhollow",
					electrical_conductivity: 1
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff3c2d3c"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					name: "metal_prop",
					ui_name: "$mat_metal_prop",
					tags: "[box2d],[corrodible],[alchemy],[meltable_metal],[solid]",
					platform_type: 1,
					solid_static_type: 0,
					solid_collide_with_self: 1,
					burnable: 0,
					hp: 200000,
					wang_color: "ff968800",
					electrical_conductivity: 1,
					audio_physics_material_wall: "metalwall",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff968800"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[corrodible],[alchemy],[meltable_metal],[solid]",
					name: "metal",
					ui_name: "$mat_metal",
					platform_type: 1,
					wang_color: "ff3d2d3c",
					electrical_conductivity: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff3d2d3c"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[solid]",
					name: "rock_box2d",
					ui_name: "$mat_rock_box2d",
					platform_type: 1,
					hp: 100000,
					wang_color: "ff2d2dac",
					electrical_conductivity: 0,
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock",
					audio_size_multiplier: 3
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff2d2dac"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[solid]",
					name: "rock_box2d_hard",
					ui_name: "$mat_rock_box2d_hard",
					platform_type: 1,
					hp: 100000,
					durability: 14,
					electrical_conductivity: 0,
					wang_color: "ff2d6dbc",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock",
					audio_size_multiplier: 3
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff2d2dac"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[solid]",
					name: "rock_box2d_nohit",
					ui_name: "$mat_rock_box2d_nohit",
					electrical_conductivity: 0,
					hp: 1000,
					wang_color: "ff2d2dbc",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff2d2dac"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[solid]",
					name: "rock_box2d_nohit_hard",
					ui_name: "$mat_rock_box2d_nohit_hard",
					electrical_conductivity: 0,
					hp: 100000,
					durability: 14,
					wang_color: "ff2d4dbc",
					audio_physics_material_wall: "rock",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/rock.png",
						color: "ff2d2dac"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d]",
					name: "item_box2d",
					ui_name: "$mat_item_box2d",
					platform_type: 0,
					hp: 30000,
					electrical_conductivity: 0,
					durability: 12,
					gfx_glow: 188,
					wang_color: "fffe2dac",
					stainable: 0,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "rock"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/crystal.png",
						color: "fffe2dac"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d]",
					name: "gem_box2d",
					ui_name: "$mat_gem_box2d",
					platform_type: 0,
					hp: 30000,
					durability: 12,
					gfx_glow: 188,
					electrical_conductivity: 0,
					gfx_glow_color: 4278190335,
					wang_color: "fffd2dac",
					stainable: 0,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "gold"
				},
				Graphics: {
					attr: {
						normal_mapped: 1,
						texture_file: "data/materials_gfx/crystal.png",
						color: "ff5787E7"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d]",
					name: "potion_glass_box2d",
					ui_name: "$mat_potion_glass_box2d",
					platform_type: 0,
					solid_gravity_scale: 1.3,
					hp: 30000,
					durability: 0,
					gfx_glow: 188,
					electrical_conductivity: 0,
					gfx_glow_color: 4278190335,
					wang_color: "fffd2dab",
					stainable: 0,
					audio_physics_material_wall: "glass",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						normal_mapped: 1,
						texture_file: "data/materials_gfx/crystal.png",
						color: "ff5787E7"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d]",
					name: "glass_box2d",
					ui_name: "$mat_glass_box2d",
					platform_type: 0,
					solid_gravity_scale: 1.3,
					hp: 30000,
					durability: 0,
					gfx_glow: 0,
					wang_color: "fffd4dab",
					stainable: 0,
					electrical_conductivity: 0,
					audio_physics_material_wall: "glass",
					audio_physics_material_solid: "glass"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/crystal.png",
						color: "ff5787E7"
					}
				}
			},
			{
				attr: {
					_parent: "gem_box2d",
					_inherit_reactions: 1,
					name: "gem_box2d_pink",
					ui_name: "$mat_gem_box2d_pink",
					gfx_glow_color: 4294901930,
					wang_color: "fffd2dad"
				},
				Graphics: {
					attr: {
						color: "ffE334B4"
					}
				}
			},
			{
				attr: {
					_parent: "gem_box2d",
					_inherit_reactions: 1,
					name: "gem_box2d_red",
					ui_name: "$mat_gem_box2d_red",
					gfx_glow_color: 4294901760,
					wang_color: "fffd2d9d"
				},
				Graphics: {
					attr: {
						color: "ffE72850"
					}
				}
			},
			{
				attr: {
					_parent: "gem_box2d",
					_inherit_reactions: 1,
					name: "gem_box2d_green",
					ui_name: "$mat_gem_box2d_green",
					gfx_glow_color: 4278255360,
					wang_color: "fffd2dae"
				},
				Graphics: {
					attr: {
						color: "ffA6D33C"
					}
				}
			},
			{
				attr: {
					_parent: "gem_box2d",
					_inherit_reactions: 1,
					name: "gem_box2d_orange",
					ui_name: "$mat_gem_box2d_orange",
					gfx_glow_color: 4287224441,
					wang_color: "ffF98227"
				},
				Graphics: {
					attr: {
						color: "ff89DA79"
					}
				}
			},
			{
				attr: {
					_parent: "gem_box2d",
					_inherit_reactions: 1,
					tags: "[box2d],[gold],[alchemy]",
					name: "gold_box2d",
					ui_name: "$mat_gold_box2d",
					gfx_glow_color: 4294952782,
					wang_color: "ffF98228",
					electrical_conductivity: 1,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "gold"
				},
				Graphics: {
					attr: {
						color: "ffffc74e"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[corrodible],[alchemy],[meltable_metal],[solid]",
					name: "metal_nohit",
					ui_name: "$mat_metal_nohit",
					hp: 40000,
					wang_color: "ffad2dac",
					electrical_conductivity: 1,
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ffad2dac"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[corrodible],[rust_box2d],[alchemy],[meltable_metal],[solid]",
					name: "metal_rust",
					ui_name: "$mat_metal_rust",
					platform_type: 1,
					wang_color: "ff4d2d3c",
					electrical_conductivity: 1,
					audio_physics_material_event: "metalhollow",
					audio_physics_material_wall: "metalhollow",
					audio_physics_material_solid: "metalhollow"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff4d2d3c"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[corrodible],[rust_box2d],[alchemy],[meltable_metal],[solid]",
					name: "metal_rust_barrel",
					ui_name: "$mat_metal_rust_barrel",
					platform_type: 1,
					wang_color: "ff4d2d3d",
					electrical_conductivity: 1,
					audio_physics_material_wall: "metalhollow_barrel",
					audio_physics_material_solid: "metalhollow_barrel"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/steel.png",
						color: "ff4d2d3c"
					}
				}
			},
			{
				attr: {
					_parent: "aluminium",
					_inherit_reactions: 1,
					tags: "[box2d],[corrodible],[alchemy],[meltable_to_lava],[solid]",
					name: "bone_box2d",
					ui_name: "$mat_bone_box2d",
					solid_break_to_type: "bone",
					wang_color: "ff1c2d2c",
					electrical_conductivity: 0,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "bone"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/bone.png",
						color: "ff1c2d2c"
					}
				}
			},
			{
				attr: {
					name: "gold_b2",
					ui_name: "$mat_gold_b2",
					tags: "[box2d],[gold],[alchemy],[solid]",
					_parent: "crystal",
					_inherit_reactions: 1,
					wang_color: "fffefae4",
					durability: 12,
					audio_physics_material_wall: "gravel",
					audio_physics_material_solid: "gold"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/gold.png",
						color: "fffefae4"
					}
				}
			},
			{
				attr: {
					name: "crystal_purple",
					ui_name: "$mat_crystal_purple",
					_parent: "crystal",
					_inherit_reactions: 1,
					wang_color: "ffa53d77"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/crystal_purple.png",
						color: "ffa53d77"
					}
				}
			},
			{
				attr: {
					name: "neon_tube_cyan",
					ui_name: "$mat_neon_tube_cyan",
					_parent: "neon_tube_purple",
					_inherit_reactions: 1,
					wang_color: "ffaedde7"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/neon_tube_cyan.png",
						color: "ffCFF7C8"
					}
				}
			},
			{
				attr: {
					name: "neon_tube_blood_red",
					ui_name: "$mat_neon_tube_blood_red",
					_parent: "neon_tube_purple",
					_inherit_reactions: 1,
					wang_color: "ffaedde8"
				},
				Graphics: {
					attr: {
						texture_file: "data/materials_gfx/neon_tube_blood_red.png",
						color: "ffCFF7C8"
					}
				}
			}
		],
		Reaction: [
			{
				attr: {
					probability: 70,
					input_cell1: "cement",
					input_cell2: "concrete_static",
					output_cell1: "concrete_static",
					output_cell2: "concrete_static",
					destroy_horizontally_lonely_pixels: 1,
					req_lifetime: 300
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "cement",
					input_cell2: "fire",
					input_cell3: "cement",
					output_cell1: "concrete_static",
					output_cell2: "air",
					destroy_horizontally_lonely_pixels: 1,
					req_lifetime: 50
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "cement",
					input_cell2: "water",
					output_cell1: "concrete_static",
					output_cell2: "air",
					destroy_horizontally_lonely_pixels: 1,
					req_lifetime: 600
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "cement",
					input_cell2: "wood_player",
					output_cell1: "concrete_static",
					output_cell2: "wood_player",
					destroy_horizontally_lonely_pixels: 1,
					req_lifetime: 600
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "cement",
					input_cell2: "air",
					output_cell1: "concrete_static",
					output_cell2: "air",
					destroy_horizontally_lonely_pixels: 1,
					req_lifetime: 300
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "water",
					input_cell2: "cement",
					output_cell1: "concrete_static",
					output_cell2: "air",
					destroy_horizontally_lonely_pixels: 1
				}
			},
			{
				attr: {
					probability: 3,
					input_cell1: "steam",
					input_cell2: "[static]",
					output_cell1: "water",
					output_cell2: "[static]"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "steam_trailer",
					input_cell2: "[static]",
					output_cell1: "water",
					output_cell2: "[static]",
					blob_radius1: 2,
					blob_restrict_to_input_material1: 1
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[fire]",
					input_cell2: "water",
					output_cell1: "[fire]",
					output_cell2: "steam"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[fire]",
					input_cell2: "snow",
					output_cell1: "[fire]",
					output_cell2: "steam"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[fire]",
					input_cell2: "snow_static",
					output_cell1: "[fire]",
					output_cell2: "steam"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "[fire]",
					input_cell2: "ice",
					output_cell1: "[fire]",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "[fire]",
					input_cell2: "ice_static",
					output_cell1: "[fire]",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[fire]",
					input_cell2: "snow_static",
					output_cell1: "[fire]",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[fire]",
					input_cell2: "snow",
					output_cell1: "[fire]",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 60,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_water]",
					output_cell1: "[fire]",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_blood]",
					output_cell1: "[fire]",
					output_cell2: "blood"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_slime]",
					output_cell1: "[fire]",
					output_cell2: "slime"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "ice",
					input_cell2: "air",
					output_cell1: "water",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "ice_static",
					input_cell2: "air",
					output_cell1: "water",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "water",
					input_cell2: "ice",
					output_cell1: "water",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "water",
					input_cell2: "ice_static",
					output_cell1: "water",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "water",
					input_cell2: "[ice]",
					output_cell1: "water",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 8,
					input_cell1: "ice_static",
					input_cell2: "water",
					output_cell1: "ice_static",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 6,
					input_cell1: "snow_static",
					input_cell2: "water",
					output_cell1: "snow_static",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 4,
					input_cell1: "snow_sticky",
					input_cell2: "water",
					input_cell3: "air",
					output_cell1: "snow_sticky",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "snowrock_static",
					input_cell2: "water",
					output_cell1: "snowrock_static",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "ice",
					input_cell2: "water_ice",
					output_cell1: "ice_static",
					output_cell2: "ice_static"
				}
			},
			{
				attr: {
					probability: 8,
					input_cell1: "ice",
					input_cell2: "water",
					output_cell1: "ice_static",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 35,
					input_cell1: "water_ice",
					input_cell2: "ice_static",
					input_cell3: "air",
					output_cell1: "ice_static",
					output_cell2: "ice_static",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1
				}
			},
			{
				attr: {
					probability: 35,
					input_cell1: "water_ice",
					input_cell2: "ice",
					input_cell3: "air",
					output_cell1: "ice_static",
					output_cell2: "ice_static",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1
				}
			},
			{
				attr: {
					probability: 35,
					input_cell1: "water_ice",
					input_cell2: "snow_static",
					input_cell3: "air",
					output_cell1: "ice_static",
					output_cell2: "snow_static",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1
				}
			},
			{
				attr: {
					probability: 35,
					input_cell1: "water_ice",
					input_cell2: "snowrock_static",
					input_cell3: "air",
					output_cell1: "ice_static",
					output_cell2: "snowrock_static",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1
				}
			},
			{
				attr: {
					probability: 15,
					input_cell1: "water",
					input_cell2: "radioactive_liquid",
					output_cell1: "water",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 15,
					input_cell1: "water_static",
					input_cell2: "radioactive_liquid",
					output_cell1: "water_static",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 15,
					input_cell1: "water_ice",
					input_cell2: "radioactive_liquid",
					output_cell1: "water_ice",
					output_cell2: "water_ice"
				}
			},
			{
				attr: {
					probability: 15,
					input_cell1: "water_swamp",
					input_cell2: "radioactive_liquid",
					output_cell1: "water_swamp",
					output_cell2: "water_swamp"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "salt",
					input_cell2: "water",
					output_cell1: "air",
					output_cell2: "water_salt"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "salt",
					input_cell2: "water_ice",
					output_cell1: "air",
					output_cell2: "water_salt"
				}
			},
			{
				attr: {
					probability: 50,
					input_cell1: "sodium",
					input_cell2: "[water]",
					output_cell1: "sodium",
					output_cell2: "steam"
				},
				ExplosionConfig: {
					attr: {
						cell_explosion_power: 30,
						cell_explosion_damage_required: 3000,
						cell_explosion_radius_min: 5,
						cell_explosion_radius_max: 5,
						cell_explosion_probability: 1.1,
						ray_energy: 50000
					}
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "burning_powder",
					input_cell2: "[water]",
					output_cell1: "burning_powder",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 60,
					input_cell1: "steam",
					input_cell2: "waterrock",
					output_cell1: "steam",
					output_cell2: "steam"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "ice_melting_perf_killer",
					input_cell2: "air",
					output_cell1: "water",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 50,
					fast_reaction: 1,
					input_cell1: "[acid]",
					input_cell2: "[corrodible]",
					output_cell1: "[acid]",
					output_cell2: "acid_gas",
					blob_radius1: 2,
					blob_radius2: 2,
					audio_fx_volume_1: 10
				}
			},
			{
				attr: {
					probability: 10,
					fast_reaction: 1,
					input_cell1: "[acid]",
					input_cell2: "air",
					output_cell1: "acid_gas",
					output_cell2: "air",
					audio_fx_volume_1: 1
				}
			},
			{
				attr: {
					probability: 12,
					fast_reaction: 1,
					input_cell1: "[acid]",
					input_cell2: "acid_gas",
					output_cell1: "acid_gas",
					output_cell2: "air",
					audio_fx_volume_1: 1
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[fire]",
					input_cell2: "[meltable]",
					output_cell1: "[meltable]_molten",
					output_cell2: "smoke"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "[meltable]_molten",
					input_cell2: "air",
					output_cell1: "[meltable]",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[meltable]_molten",
					input_cell2: "water",
					output_cell1: "[meltable]",
					output_cell2: "steam"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[meltable]",
					input_cell2: "[lava]",
					output_cell1: "[meltable]_molten",
					output_cell2: "[lava]"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[meltable_metal]",
					input_cell2: "[lava]",
					output_cell1: "lava",
					output_cell2: "[lava]"
				}
			},
			{
				attr: {
					probability: 0,
					input_cell1: "[lava]",
					input_cell2: "air",
					output_cell1: "smoke",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "water",
					output_cell1: "rock_static",
					output_cell2: "steam",
					cosmetic_particle: "steam",
					blob_radius1: 6,
					blob_radius2: 3,
					blob_restrict_to_input_material1: 1,
					audio_fx_volume_1: 100
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "water_ice",
					output_cell1: "rock_static",
					output_cell2: "steam",
					cosmetic_particle: "steam",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1,
					audio_fx_volume_1: 100
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "[lava]",
					input_cell2: "blood",
					output_cell1: "lavarock_static",
					output_cell2: "steam",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1,
					audio_fx_volume_1: 100
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "[lava]",
					input_cell2: "[radioactive]",
					output_cell1: "rock_static_radioactive",
					output_cell2: "radioactive_gas",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1,
					audio_fx_volume_1: 100
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "[lava]",
					input_cell2: "poison",
					output_cell1: "rock_static_poison",
					output_cell2: "poison_gas",
					blob_radius1: 4,
					blob_radius2: 4,
					blob_restrict_to_input_material1: 1,
					audio_fx_volume_1: 100
				}
			},
			{
				attr: {
					probability: 8,
					input_cell1: "[lava]",
					input_cell2: "[burnable]",
					output_cell1: "[lava]",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "[burnable_fast]",
					output_cell1: "[lava]",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "[fire]",
					input_cell2: "[burnable_fast]",
					output_cell1: "[fire]",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 3,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_lava]",
					output_cell1: "smoke",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_lava_fast]",
					output_cell1: "smoke",
					output_cell2: "lava"
				}
			},
			{
				attr: {
					probability: 60,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_water]",
					output_cell1: "[lava]",
					output_cell2: "water"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_acid]",
					output_cell1: "[lava]",
					output_cell2: "acid"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_acid]",
					output_cell1: "[fire]",
					output_cell2: "acid"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_cold]",
					output_cell1: "[lava]",
					output_cell2: "blood_cold"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_cold]",
					output_cell1: "[fire]",
					output_cell2: "blood_cold"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_radioactive]",
					output_cell1: "[lava]",
					output_cell2: "radioactive_liquid"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_radioactive]",
					output_cell1: "[fire]",
					output_cell2: "radioactive_liquid"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[lava]",
					input_cell2: "[meltable_to_poison]",
					output_cell1: "[lava]",
					output_cell2: "poison"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "[fire]",
					input_cell2: "[meltable_to_poison]",
					output_cell1: "[fire]",
					output_cell2: "poison"
				}
			},
			{
				attr: {
					probability: 8,
					input_cell1: "[lava]",
					input_cell2: "gunpowder",
					output_cell1: "[lava]",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 8,
					input_cell1: "[lava]",
					input_cell2: "gunpowder_explosive",
					output_cell1: "[lava]",
					output_cell2: "fire"
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "[fire]",
					input_cell2: "[meltable_by_fire]",
					output_cell1: "lava",
					output_cell2: "smoke"
				}
			},
			{
				attr: {
					probability: 15,
					input_cell1: "[evaporable]",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 45,
					input_cell1: "[evaporable_fast]",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[evaporable_custom]",
					input_cell2: "[lava]",
					output_cell1: "[evaporable_custom]_vapour",
					output_cell2: "[lava]"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "[fire]",
					input_cell2: "[evaporable_custom]",
					output_cell1: "[fire]",
					output_cell2: "[evaporable_custom]_vapour"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "cactus",
					input_cell2: "[lava]",
					output_cell1: "sand_herb_vapour",
					output_cell2: "[lava]"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[fire]",
					input_cell2: "cactus",
					output_cell1: "[fire]",
					output_cell2: "sand_herb_vapour"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "[fire]",
					input_cell2: "wood_static_gas",
					output_cell1: "[fire]",
					output_cell2: "steam_trailer"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "[grows_grass]",
					input_cell2: "air",
					output_cell1: "grass",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "[grows_fungus]",
					input_cell2: "air",
					output_cell1: "fungi",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 8,
					input_cell1: "fungi",
					input_cell2: "air",
					output_cell1: "fungi",
					output_cell2: "fungi",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 30,
					input_cell1: "fungi",
					input_cell2: "air",
					output_cell1: "fungi",
					output_cell2: "fungi",
					direction: "bottom"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "spore",
					input_cell2: "[sand_ground]",
					output_cell1: "air",
					output_cell2: "[sand_ground]"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "spore",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 60,
					fast_reaction: 0,
					input_cell1: "vine",
					input_cell2: "air",
					output_cell1: "vine",
					output_cell2: "vine",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 30,
					fast_reaction: 0,
					input_cell1: "vine",
					input_cell2: "air",
					output_cell1: "vine",
					output_cell2: "vine",
					direction: "right"
				}
			},
			{
				attr: {
					probability: 30,
					fast_reaction: 0,
					input_cell1: "vine",
					input_cell2: "air",
					output_cell1: "vine",
					output_cell2: "vine",
					direction: "left"
				}
			},
			{
				attr: {
					probability: 60,
					fast_reaction: 0,
					input_cell1: "root",
					input_cell2: "air",
					output_cell1: "root",
					output_cell2: "root",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 30,
					fast_reaction: 0,
					input_cell1: "root",
					input_cell2: "air",
					output_cell1: "root",
					output_cell2: "root",
					direction: "right"
				}
			},
			{
				attr: {
					probability: 30,
					fast_reaction: 0,
					input_cell1: "root",
					input_cell2: "air",
					output_cell1: "root",
					output_cell2: "root",
					direction: "left"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "mushroom_seed",
					input_cell2: "water",
					input_cell3: "air",
					output_cell1: "mushroom",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "mushroom_seed",
					input_cell2: "blood",
					input_cell3: "air",
					output_cell1: "mushroom_giant_red",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 7,
					input_cell1: "mushroom_seed",
					input_cell2: "alcohol",
					input_cell3: "air",
					output_cell1: "mushroom_giant_blue",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "mushroom",
					input_cell2: "water",
					input_cell3: "air",
					output_cell1: "mushroom",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "mushroom_giant_red",
					input_cell2: "blood",
					input_cell3: "air",
					output_cell1: "mushroom_giant_red",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "mushroom_giant_blue",
					input_cell2: "alcohol",
					input_cell3: "air",
					output_cell1: "mushroom_giant_blue",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "bluefungi_static",
					input_cell2: "air",
					output_cell1: "glowshroom",
					output_cell2: "air",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "plant_seed",
					input_cell2: "water",
					output_cell1: "plant_material",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "rock_static",
					input_cell2: "air",
					output_cell1: "rock_static",
					output_cell2: "moss",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "templebrick_moss_static",
					input_cell2: "air",
					output_cell1: "templebrick_moss_static",
					output_cell2: "moss",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "sand_static_rainforest",
					input_cell2: "air",
					output_cell1: "sand_static_rainforest",
					output_cell2: "soil_lush",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "rocket_particles",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "coal",
					input_cell2: "fire",
					output_cell1: "fire",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "snow",
					input_cell2: "urine",
					output_cell1: "water",
					output_cell2: "steam"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "steelsmoke_static",
					input_cell2: "air",
					output_cell1: "steelsmoke_static",
					output_cell2: "steam",
					direction: "top"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "rock_static_glow",
					input_cell2: "air",
					output_cell1: "rock_static_glow",
					output_cell2: "slime_green",
					direction: "bottom"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "slime_green",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "honey",
					input_cell2: "air",
					output_cell1: "honey",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "blood_cold",
					input_cell2: "[freezable]",
					output_cell1: "blood_cold",
					output_cell2: "ice_static",
					blob_radius1: 3,
					blob_radius2: 3,
					blob_restrict_to_input_material2: 1
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "blood_cold",
					input_cell2: "air",
					output_cell1: "blood_cold_vapour",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "blood_cold",
					input_cell2: "blood_worm",
					output_cell1: "blood_worm",
					output_cell2: "blood_worm"
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "blood_cold",
					input_cell2: "[fire]",
					output_cell1: "blood_cold_vapour",
					output_cell2: "steam",
					blob_radius2: 3
				}
			},
			{
				attr: {
					probability: 20,
					input_cell1: "blood_cold",
					input_cell2: "lava",
					output_cell1: "blood_cold_vapour",
					output_cell2: "rock_hard",
					blob_radius2: 3
				}
			},
			{
				attr: {
					probability: 30,
					input_cell1: "[vapour]",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "water",
					input_cell2: "soil_lush",
					output_cell1: "swamp",
					output_cell2: "soil"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "water",
					input_cell2: "fungisoil",
					output_cell1: "swamp",
					output_cell2: "soil"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "swamp",
					input_cell2: "water",
					output_cell1: "swamp",
					output_cell2: "water_swamp"
				}
			},
			{
				attr: {
					probability: 6,
					input_cell1: "water_swamp",
					input_cell2: "air",
					output_cell1: "peat",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 3,
					input_cell1: "blood_thick",
					input_cell2: "air",
					output_cell1: "blood_fading",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 15,
					fast_reaction: 1,
					input_cell1: "poison",
					input_cell2: "air",
					output_cell1: "poison_gas",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "[rust]",
					input_cell2: "[water]",
					output_cell1: "rust_static",
					output_cell2: "[water]"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "[rust_box2d]",
					input_cell2: "[water]",
					output_cell1: "[rust_box2d]_rust",
					output_cell2: "[water]"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "[rust_oxide]",
					input_cell2: "[water]",
					output_cell1: "[rust_oxide]_oxide",
					output_cell2: "[water]"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "water",
					input_cell2: "soil",
					output_cell1: "air",
					output_cell2: "mud"
				}
			},
			{
				attr: {
					probability: 3,
					input_cell1: "mud",
					input_cell2: "soil",
					input_cell3: "mud",
					output_cell1: "soil",
					output_cell2: "mud",
					direction: "bottom"
				}
			},
			{
				attr: {
					probability: 0.3,
					input_cell1: "soil",
					input_cell2: "mud",
					input_cell3: "soil",
					output_cell1: "soil",
					output_cell2: "soil"
				}
			},
			{
				attr: {
					probability: 90,
					fast_reaction: 1,
					input_cell1: "magic_liquid",
					input_cell2: "rock_magic_bottom",
					output_cell1: "magic_liquid",
					output_cell2: "magic_liquid",
					blob_radius2: 3,
					blob_restrict_to_input_material2: 1,
					direction: "bottom"
				}
			},
			{
				attr: {
					probability: 40,
					input_cell1: "magic_liquid",
					input_cell2: "soil",
					output_cell1: "smoke",
					output_cell2: "magic_liquid"
				}
			},
			{
				attr: {
					probability: 5,
					input_cell1: "rock_static_wet",
					input_cell2: "air",
					output_cell1: "rock_static_wet",
					output_cell2: "water_fading",
					direction: "bottom"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "water_fading",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 2,
					input_cell1: "[water]",
					input_cell2: "liquid_fire",
					output_cell1: "fire",
					output_cell2: "liquid_fire"
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "midas_precursor",
					input_cell2: "[meat]",
					output_cell1: "midas",
					output_cell2: "midas",
					fast_reaction: 1
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "midas_precursor",
					input_cell2: "midas",
					output_cell1: "midas",
					output_cell2: "midas",
					fast_reaction: 1
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "smoke_static",
					input_cell2: "air",
					output_cell1: "smoke_static",
					output_cell2: "smoke",
					fast_reaction: 1
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "acid_gas_static",
					input_cell2: "air",
					output_cell1: "acid_gas_static",
					output_cell2: "acid_gas",
					fast_reaction: 1
				}
			},
			{
				attr: {
					probability: 70,
					input_cell1: "radioactive_gas_static",
					input_cell2: "air",
					output_cell1: "radioactive_gas_static",
					output_cell2: "radioactive_gas",
					fast_reaction: 1
				}
			},
			{
				attr: {
					probability: 100,
					fast_reaction: 1,
					input_cell1: "midas",
					input_cell2: "[alchemy]",
					output_cell1: "midas",
					output_cell2: "gold",
					blob_radius2: 3,
					blob_restrict_to_input_material2: 1
				}
			},
			{
				attr: {
					probability: 100,
					fast_reaction: 1,
					input_cell1: "rock_eroding",
					input_cell2: "air",
					output_cell1: "air",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "creepy_liquid_emitter",
					input_cell2: "fire",
					output_cell1: "creepy_liquid",
					output_cell2: "creepy_liquid"
				}
			},
			{
				attr: {
					probability: 90,
					input_cell1: "creepy_liquid",
					input_cell2: "air",
					output_cell1: "creepy_liquid",
					output_cell2: "creepy_liquid"
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "corruption_static",
					input_cell2: "[alchemy]",
					output_cell1: "corruption_static",
					output_cell2: "corruption_static"
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "radioactive_liquid",
					input_cell2: "blood_worm",
					input_cell3: "fungi",
					output_cell1: "void_liquid",
					output_cell2: "void_liquid",
					blob_radius1: 40,
					blob_radius2: 40
				}
			},
			{
				attr: {
					probability: 100,
					input_cell1: "radioactive_liquid",
					input_cell2: "sand",
					input_cell3: "blood_fungi",
					output_cell1: "fungi_creeping",
					output_cell2: "fungi_creeping",
					blob_radius1: 5,
					blob_radius2: 5
				}
			},
			{
				attr: {
					probability: 50,
					input_cell1: "fungi_creeping",
					input_cell2: "sand",
					output_cell1: "fungi_creeping",
					output_cell2: "fungi_creeping",
					blob_radius2: 2
				}
			},
			{
				attr: {
					probability: 50,
					input_cell1: "fungi_creeping",
					input_cell2: "radioactive_liquid",
					output_cell1: "fungi_creeping",
					output_cell2: "fungi_creeping",
					blob_radius2: 2
				}
			},
			{
				attr: {
					probability: 50,
					input_cell1: "fungi_creeping",
					input_cell2: "radioactive_liquid_yellow",
					output_cell1: "fungi_creeping",
					output_cell2: "fungi_creeping",
					blob_radius2: 2
				}
			},
			{
				attr: {
					probability: 50,
					input_cell1: "fungi_creeping_secret",
					input_cell2: "[liquid]",
					output_cell1: "fungi_creeping_secret",
					output_cell2: "fungi_creeping_secret",
					blob_radius2: 2
				}
			},
			{
				attr: {
					probability: 50,
					input_cell1: "brass",
					input_cell2: "diamond",
					output_cell1: "purifying_powder",
					output_cell2: "purifying_powder",
					blob_radius1: 3,
					blob_radius2: 3
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "purifying_powder",
					input_cell2: "[impure]",
					output_cell1: "purifying_powder",
					output_cell2: "water",
					blob_radius2: 2
				}
			},
			{
				attr: {
					probability: 80,
					input_cell1: "purifying_powder",
					input_cell2: "[regenerative]",
					output_cell1: "gunpowder_unstable",
					output_cell2: "gunpowder_unstable",
					blob_radius1: 4,
					blob_radius2: 4
				}
			}
		],
		ReqReaction: [
			{
				attr: {
					probability: 10,
					input_cell1: "[requires_air]",
					input_cell2: "air",
					output_cell1: "soil",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 10,
					input_cell1: "ceiling_plant_material",
					input_cell2: "air",
					output_cell1: "soil",
					output_cell2: "air",
					direction: "bottom"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "mushroom_seed",
					input_cell2: "air",
					output_cell1: "soil",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "mushroom_giant_red",
					input_cell2: "air",
					output_cell1: "soil",
					output_cell2: "air"
				}
			},
			{
				attr: {
					probability: 1,
					input_cell1: "mushroom_giant_blue",
					input_cell2: "air",
					output_cell1: "soil",
					output_cell2: "air"
				}
			}
		]
	};
	var materialsXML = {
		Materials: Materials
	};

	class List {
	    constructor() {
	        this.set = new Set();
	        this.array = [];
	    }
	    get length() {
	        return this.array.length;
	    }
	    has(value) {
	        return this.set.has(value);
	    }
	    add(value) {
	        if (!this.has(value)) {
	            this.set.add(value);
	            this.array.push(value);
	        }
	    }
	    remove(value) {
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
	    removeAt(index) {
	        if (this.array.length - 1 < index) {
	            return;
	        }
	        const [value] = this.array.splice(index, 1);
	        this.set.delete(value);
	    }
	}

	const intMax = 0x7fffffff;
	// We need genuine int32 behavior when mutliplying (ie. accurate int32 overflow
	// behavior), so we're going to cheat and use an int32 array to have JS actually
	// treat it as int32 values. Defining this up here and reusing it to avoid having
	// to reallocate tiny 8 byte buffers over and over.
	const a32 = new Int32Array(2);
	class NumberGenerator {
	    constructor(seed) {
	        this.seed = seed;
	        this.next();
	    }
	    next() {
	        const intSeed = this.seed | 0;
	        // Calculate the first portion of the equation in int32:
	        //   a32[0] = (int) seed * 16807
	        a32[0] = intSeed;
	        a32[0] *= 16807;
	        // Calculate the second portion, also in int32:
	        //   a32[1] = (int) seed / 127773 * -0x7fffffff
	        a32[1] = intSeed;
	        a32[1] /= 127773;
	        a32[1] *= -intMax;
	        // Add the two results above:
	        //   a32[0] = (int) seed * 16807 + (int) seed / 127773 * -0x7fffffff
	        a32[0] += a32[1];
	        if (a32[0] < 0) {
	            a32[0] += intMax;
	        }
	        // When we're done, store the new seed
	        this.seed = a32[0];
	        return this.seed / intMax;
	    }
	}

	const liquidMaterials = [
	    'water',
	    'water_ice',
	    'water_swamp',
	    'oil',
	    'alcohol',
	    'swamp',
	    'mud',
	    'blood',
	    'blood_fungi',
	    'blood_worm',
	    'radioactive_liquid',
	    'cement',
	    'acid',
	    'lava',
	    'urine',
	    'poison',
	    'magic_liquid_teleportation',
	    'magic_liquid_polymorph',
	    'magic_liquid_random_polymorph',
	    'magic_liquid_berserk',
	    'magic_liquid_charm',
	    'magic_liquid_invisibility'
	];
	const alchemyMaterials = [
	    'sand',
	    'bone',
	    'soil',
	    'honey',
	    'slime',
	    'snow',
	    'rotten_meat',
	    'wax',
	    'gold',
	    'silver',
	    'copper',
	    'brass',
	    'diamond',
	    'coal',
	    'gunpowder',
	    'gunpowder_explosive',
	    'grass',
	    'fungi'
	];

	/**
	 * Noita alchemy generator
	 *
	 * Algorithm borrowed from https://github.com/zatherz/NoitaAlchemy/blob/master/Program.cs
	 */
	class NoitaAlchemyGenerator {
	    constructor(seed, full) {
	        this.seed = seed;
	        this.full = full;
	        this.prng = new NumberGenerator(this.seed * 0.17127000 + 1323.59030000);
	        // Pre-warm the PRNG
	        for (let i = 0; i < 5; i++) {
	            this.prng.next();
	        }
	        this.livelyConcoction = this.getRandomRecipe();
	        this.alchemicalPrecursor = this.getRandomRecipe();
	    }
	    chooseRandomMaterials(target, materialList, iterations) {
	        for (let i = 0; i < iterations; i++) {
	            const rand = this.prng.next();
	            const pick = materialList[(rand * materialList.length) | 0];
	            if (target.has(pick)) {
	                i--;
	                continue;
	            }
	            target.add(pick);
	        }
	    }
	    getRandomRecipe() {
	        const materials = new List();
	        this.chooseRandomMaterials(materials, liquidMaterials, 3);
	        this.chooseRandomMaterials(materials, alchemyMaterials, 1);
	        let probability = this.prng.next();
	        this.prng.next();
	        probability = (10 - ((probability * -91) | 0));
	        this.shuffle(materials);
	        if (!this.full && materials.length === 4) {
	            materials.removeAt(materials.length - 1);
	        }
	        return {
	            probability,
	            materials: materials.array
	        };
	    }
	    shuffle(list) {
	        const seed = ((this.seed >> 1) | 0) + 0x30f6;
	        const prng = new NumberGenerator(seed);
	        for (let i = list.length - 1; i >= 0; i--) {
	            const swapIndex = (prng.next() * (i + 1)) | 0;
	            const element = list.array[i];
	            list.array[i] = list.array[swapIndex];
	            list.array[swapIndex] = element;
	        }
	    }
	}

	class SeedFinder extends eventemitter3.EventEmitter {
	    constructor(options) {
	        super();
	        this.options = options;
	        this.exclude = new Set(this.options.exclude);
	        this.minScoreThreshold = this.options.minScoreThreshold || 1;
	        this.badMaterialThreshold = this.options.badMaterialThreshold || 17;
	        this.materialWeights = Object.assign({}, defaultMaterialPreference, this.options.materialPreferences || {});
	        const required = this.options.requireMaterials || {};
	        this.lcRequired = new Set(required.lc || []);
	        this.apRequired = new Set(required.ap || []);
	        this.minLcProbability = this.options.minLcProbability || 0;
	        this.maxLcProbability = this.options.maxLcProbability || 100;
	        this.minApProbability = this.options.minApProbability || 0;
	        this.maxApProbability = this.options.maxApProbability || 100;
	    }
	    /**
	     * Start looking for seeds
	     *
	     * @param start The seed to start at while checking
	     * @param count The number of seeds to check before stopping
	     */
	    seek(start, count) {
	        const end = start + count;
	        let canceled = false;
	        const cancel = () => canceled = true;
	        for (let seed = start; seed < end; seed++) {
	            const result = this.calculateSeed(seed);
	            if (result.score < this.minScoreThreshold || result.hasExcluded || !result.hasIncluded || result.hasBadMat || result.hasBadProbability) {
	                continue;
	            }
	            this.emit('seed', result, cancel);
	            if (canceled) {
	                break;
	            }
	        }
	        this.emit('done');
	    }
	    /**
	     * Calculates the recipes for a given seed, and calculates scoring information about the seed. The best possible
	     * score for a seed would be 98 / 100. This would be water on both recipes (0 points), and two 1 point materials
	     * shared between both recipes (1 point each, only counted once because they're reused). An example of this would
	     * be "water" + "blood" + "oil" on both recipes. The worst possible score is 100 - (6 * 16), or 4 out of 100.
	     *
	     * @param seed The seed to calculate for
	     */
	    calculateSeed(seed) {
	        const generator = new NoitaAlchemyGenerator(seed, false);
	        let score = 100;
	        let hasBadMat = false;
	        let hasExcluded = false;
	        let hasBadProbability = false;
	        // Materials are only counted against the score one each, so if they
	        // are re-used, don't re-count them. This keeps track of the list of
	        // materials we've already seen
	        const used = new Set();
	        const materials = [
	            ...generator.livelyConcoction.materials,
	            ...generator.alchemicalPrecursor.materials
	        ];
	        let stillRequired = this.apRequired.size + this.lcRequired.size;
	        const processMats = (recipe, required, minProb, maxProb) => {
	            if (recipe.probability < minProb || recipe.probability > maxProb) {
	                hasBadProbability = true;
	            }
	            for (let i = 0; i < 3; i++) {
	                const mat = recipe.materials[i];
	                if (required.has(mat)) {
	                    stillRequired--;
	                }
	                if (used.has(mat)) {
	                    continue;
	                }
	                used.add(mat);
	                const matScore = this.materialWeights[mat];
	                if (matScore > this.badMaterialThreshold) {
	                    hasBadMat = true;
	                }
	                if (this.exclude.has(mat)) {
	                    hasExcluded = true;
	                }
	                score -= matScore;
	            }
	        };
	        processMats(generator.livelyConcoction, this.lcRequired, this.minLcProbability, this.maxLcProbability);
	        processMats(generator.alchemicalPrecursor, this.apRequired, this.minApProbability, this.maxApProbability);
	        return {
	            seed,
	            score,
	            hasBadMat,
	            hasExcluded,
	            hasBadProbability,
	            hasIncluded: !stillRequired,
	            livelyConcoction: generator.livelyConcoction,
	            alchemicalPrecursor: generator.alchemicalPrecursor
	        };
	    }
	}
	/**
	 * Weighted preference scores for each material (lower score is better)
	 */
	const defaultMaterialPreference = {
	    // Obviously, prefer the *really* easy stuff
	    'water': 0,
	    'blood': 1,
	    'oil': 1,
	    'magic_liquid_charm': 1,
	    'magic_liquid_berserk': 1,
	    'magic_liquid_invisibility': 1,
	    'alcohol': 2,
	    // Next, go for stuff that's not too hard, but has some annoying properties / can
	    // be mildly annoying to get a hold of at times
	    'snow': 3,
	    'sand': 3,
	    'acid': 5,
	    'poison': 5,
	    'rotten_meat': 5,
	    'water_ice': 5,
	    'water_swamp': 5,
	    'magic_liquid_polymorph': 6,
	    'magic_liquid_random_polymorph': 6,
	    'magic_liquid_teleportation': 6,
	    // Finally, the stuff that is really hard to find, or is just dangerous
	    'blood_worm': 7,
	    'bone': 7,
	    'lava': 10,
	    'coal': 12,
	    'gunpowder': 12,
	    'fungi': 15,
	    'gunpowder_explosive': 15,
	    'urine': 15,
	    'wax': 15,
	    'gold': 15,
	    'silver': 15,
	    'copper': 15,
	    'brass': 15,
	    'diamond': 15,
	    // Default to "bad" until I care enough to clean up
	    'swamp': 16,
	    'mud': 16,
	    'blood_fungi': 16,
	    'radioactive_liquid': 16,
	    'cement': 16,
	    'soil': 16,
	    'honey': 16,
	    'slime': 16,
	    'grass': 16,
	};

	const displayNames = {
	    '$mat_acid': 'acid',
	    '$mat_acid_gas': 'flammable gas',
	    '$mat_acid_gas_static': 'flammable gas',
	    '$mat_air': 'air',
	    '$mat_alcohol': 'whiskey',
	    '$mat_aluminium': 'aluminium',
	    '$mat_aluminium_molten': 'molten aluminium',
	    '$mat_aluminium_oxide': 'aluminium',
	    '$mat_aluminium_oxide_molten': 'molten aluminium',
	    '$mat_aluminium_robot_molten': 'molten aluminium',
	    '$mat_blood': 'blood',
	    '$mat_blood_cold': 'freezing liquid',
	    '$mat_blood_cold_vapour': 'freezing vapour',
	    '$mat_blood_fading': 'blood',
	    '$mat_blood_fading_slow': 'fungal blood',
	    '$mat_blood_fungi': 'fungus',
	    '$mat_blood_thick': 'blood',
	    '$mat_blood_worm': 'worm blood',
	    '$mat_bluefungi_static': 'blue fungus',
	    '$mat_bone': 'bone dust',
	    '$mat_bone_box2d': 'bone',
	    '$mat_bone_static': 'bone wall',
	    '$mat_brass': 'brass',
	    '$mat_brass_molten': 'molten brass',
	    '$mat_brick': 'brick wall',
	    '$mat_burning_powder': 'burning powder',
	    '$mat_bush_seed': 'evergreen seed',
	    '$mat_cactus': 'grass',
	    '$mat_ceiling_plant_material': 'seed',
	    '$mat_cement': 'cement',
	    '$mat_cheese_static': 'cheese',
	    '$mat_cloud': 'cloud',
	    '$mat_cloud_alcohol': 'alcohol mist',
	    '$mat_cloud_blood': 'blood mist',
	    '$mat_cloud_radioactive': 'toxic mist',
	    '$mat_cloud_slime': 'slime mist',
	    '$mat_coal': 'coal',
	    '$mat_coal_static': 'coal vein',
	    '$mat_cocoon_box2d': 'cocoon',
	    '$mat_concrete_collapsed': 'collapsed concrete',
	    '$mat_concrete_sand': 'concrete',
	    '$mat_concrete_static': 'concrete',
	    '$mat_copper': 'copper',
	    '$mat_copper_molten': 'molten copper',
	    '$mat_corruption_static': 'corrupted rock',
	    '$mat_creepy_liquid': 'creepy liquid',
	    '$mat_creepy_liquid_emitter': 'brick wall',
	    '$mat_crystal': 'crystal',
	    '$mat_crystal_magic': 'crystal',
	    '$mat_crystal_purple': 'purple crystal',
	    '$mat_diamond': 'diamond',
	    '$mat_endslime': 'hell slime',
	    '$mat_endslime_blood': 'hell slime',
	    '$mat_endslime_static': 'hell slime',
	    '$mat_explosion_dirt': 'dirt',
	    '$mat_fire': 'fire',
	    '$mat_fire_blue': 'fire',
	    '$mat_flame': 'fire',
	    '$mat_fungal_gas': 'fungal gas',
	    '$mat_fungi': 'fungus',
	    '$mat_fungi_green': 'fungus',
	    '$mat_fungisoil': 'fungal soil',
	    '$mat_fungus_loose': 'fungus',
	    '$mat_fuse': 'bomb',
	    '$mat_fuse_holy': 'holy matter',
	    '$mat_fuse_tnt': 'tnt',
	    '$mat_gem_box2d': 'gem',
	    '$mat_gem_box2d_green': 'gem',
	    '$mat_gem_box2d_orange': 'gem',
	    '$mat_gem_box2d_pink': 'gem',
	    '$mat_gem_box2d_red': 'gem',
	    '$mat_glass': 'glass',
	    '$mat_glass_box2d': 'glass',
	    '$mat_glass_brittle': 'brittle glass',
	    '$mat_glass_broken_molten': 'molten glass',
	    '$mat_glass_molten': 'molten glass',
	    '$mat_glass_static': 'glass',
	    '$mat_glowshroom': 'glowing fungal spore',
	    '$mat_glowstone': 'glowing stone',
	    '$mat_glowstone_altar': 'glowing stone',
	    '$mat_glowstone_potion': 'glowing stone',
	    '$mat_gold': 'gold',
	    '$mat_gold_b2': 'gold',
	    '$mat_gold_box2d': 'gold',
	    '$mat_gold_molten': 'molten gold',
	    '$mat_gold_radioactive': 'toxic gold',
	    '$mat_gold_static': 'gold vein',
	    '$mat_gold_static_dark': 'vibrant gold vein',
	    '$mat_grass': 'grass',
	    '$mat_grass_loose': 'fungal matter',
	    '$mat_gunpowder': 'gunpowder',
	    '$mat_gunpowder_explosive': 'gunpowder',
	    '$mat_gunpowder_tnt': 'gunpowder',
	    '$mat_gunpowder_unstable': 'gunpowder',
	    '$mat_gunpowder_unstable_boss_limbs': 'slimy meat',
	    '$mat_honey': 'honey',
	    '$mat_ice': 'ice',
	    '$mat_ice_acid_glass': 'frozen acid',
	    '$mat_ice_acid_static': 'frozen acid',
	    '$mat_ice_b2': 'ice',
	    '$mat_ice_blood_static': 'frozen blood',
	    '$mat_ice_ceiling': 'ice',
	    '$mat_ice_cold_glass': 'ice',
	    '$mat_ice_cold_static': 'ice',
	    '$mat_ice_glass': 'ice',
	    '$mat_ice_glass_b2': 'ice',
	    '$mat_ice_melting_perf_killer': 'ice',
	    '$mat_ice_meteor_static': 'ice',
	    '$mat_ice_radioactive_glass': 'toxic ice',
	    '$mat_ice_radioactive_static': 'toxic ice',
	    '$mat_ice_static': 'ice',
	    '$mat_item_box2d': 'item',
	    '$mat_lava': 'lava',
	    '$mat_lavarock_static': 'volcanic rock',
	    '$mat_lavasand': 'volcanic sand',
	    '$mat_liquid_fire': 'fire',
	    '$mat_liquid_fire_weak': 'liquid fire',
	    '$mat_magic_liquid': 'gate-opener',
	    '$mat_magic_liquid_berserk': 'berserkium',
	    '$mat_magic_liquid_charm': 'pheromone',
	    '$mat_magic_liquid_hp_regeneration': 'healthium',
	    '$mat_magic_liquid_hp_regeneration_unstable': 'lively concoction',
	    '$mat_magic_liquid_invisibility': 'invisiblium',
	    '$mat_magic_liquid_polymorph': 'polymorphine',
	    '$mat_magic_liquid_random_polymorph': 'chaotic polymorphine',
	    '$mat_magic_liquid_teleportation': 'teleportatium',
	    '$mat_meat': 'meat',
	    '$mat_meat_slime': 'slimy meat',
	    '$mat_meat_slime_green': 'green slimy meat',
	    '$mat_meat_slime_orange': 'slimy meat',
	    '$mat_meat_slime_sand': 'slimy meat',
	    '$mat_meat_worm': 'worm meat',
	    '$mat_metal': 'metal',
	    '$mat_metal_molten': 'molten metal',
	    '$mat_metal_nohit': 'metal',
	    '$mat_metal_nohit_molten': 'molten metal',
	    '$mat_metal_prop': 'metal',
	    '$mat_metal_prop_molten': 'molten metal',
	    '$mat_metal_rust': 'rusted metal',
	    '$mat_metal_rust_barrel': 'rusted metal',
	    '$mat_metal_rust_barrel_rust': 'rusted metal',
	    '$mat_metal_rust_molten': 'molten metal',
	    '$mat_metal_rust_rust': 'rusted metal',
	    '$mat_meteorite': 'meteorite',
	    '$mat_meteorite_crackable': 'meteorite',
	    '$mat_meteorite_green': 'green meteorite',
	    '$mat_meteorite_static': 'meteorite',
	    '$mat_midas': 'draught of midas',
	    '$mat_midas_precursor': 'alchemic precursor',
	    '$mat_moss': 'moss',
	    '$mat_moss_rust': 'rusty moss',
	    '$mat_mud': 'mud',
	    '$mat_mushroom': 'fungal spore',
	    '$mat_mushroom_giant_blue': 'fungal spore',
	    '$mat_mushroom_giant_red': 'fungal spore',
	    '$mat_mushroom_seed': 'fungal spore',
	    '$mat_neon_tube_blood_red': 'neon tube',
	    '$mat_neon_tube_cyan': 'neon tube',
	    '$mat_neon_tube_purple': 'neon tube',
	    '$mat_nest_box2d': 'nest',
	    '$mat_nest_static': 'nest',
	    '$mat_oil': 'oil',
	    '$mat_pea_soup': 'pea soup',
	    '$mat_physics_throw_material_part2': 'who knows',
	    '$mat_plant_material': 'plant material',
	    '$mat_plant_material_red': 'seed',
	    '$mat_plant_seed': 'plant seed',
	    '$mat_plasma_fading': 'magical liquid',
	    '$mat_plasma_fading_green': 'magical liquid',
	    '$mat_plasma_fading_pink': 'magical liquid',
	    '$mat_plastic': 'plastic',
	    '$mat_plastic_molten': 'molten plastic',
	    '$mat_plastic_prop_molten': 'molten plastic',
	    '$mat_plastic_red': 'plastic',
	    '$mat_plastic_red_molten': 'molten plastic',
	    '$mat_poison': 'glowing liquid',
	    '$mat_poison_gas': 'poison gas',
	    '$mat_poo': 'excrement',
	    '$mat_potion_glass_box2d': 'glass',
	    '$mat_radioactive_gas': 'toxic gas',
	    '$mat_radioactive_gas_static': 'toxic gas',
	    '$mat_radioactive_liquid': 'toxic sludge',
	    '$mat_radioactive_liquid_fading': 'toxic sludge',
	    '$mat_radioactive_liquid_yellow': 'toxic sludge',
	    '$mat_rock_box2d': 'rock',
	    '$mat_rock_box2d_hard': 'rock',
	    '$mat_rock_box2d_nohit': 'rock',
	    '$mat_rock_box2d_nohit_hard': 'dense rock',
	    '$mat_rock_eroding': 'eroding rock',
	    '$mat_rock_hard': 'dense rock',
	    '$mat_rock_hard_border': 'extremely dense rock',
	    '$mat_rock_loose': 'rock',
	    '$mat_rock_magic_bottom': 'magic wall',
	    '$mat_rock_magic_gate': 'magic gate',
	    '$mat_rock_static': 'rock',
	    '$mat_rock_static_box2d': 'rock',
	    '$mat_rock_static_glow': 'glowing matter',
	    '$mat_rock_static_grey': 'grey rock',
	    '$mat_rock_static_intro': 'rock',
	    '$mat_rock_static_intro_breakable': 'rock',
	    '$mat_rock_static_noedge': 'rock',
	    '$mat_rock_static_poison': 'poisonous rock',
	    '$mat_rock_static_radioactive': 'toxic rock',
	    '$mat_rock_static_wet': 'damp rock',
	    '$mat_rock_vault': 'vault rock',
	    '$mat_rocket_particles': 'smoke',
	    '$mat_root': 'vine',
	    '$mat_rotten_meat': 'rotten meat',
	    '$mat_rotten_meat_radioactive': 'toxic meat',
	    '$mat_rust_static': 'rusted metal',
	    '$mat_salt': 'salt',
	    '$mat_sand': 'sand',
	    '$mat_sand_blue': 'blue sand',
	    '$mat_sand_herb': 'herb',
	    '$mat_sand_herb_vapour': 'funky vapour',
	    '$mat_sand_static': 'ground',
	    '$mat_sand_static_bright': 'granite ground',
	    '$mat_sand_static_rainforest': 'lush ground',
	    '$mat_sand_static_red': 'rusty ground',
	    '$mat_sandstone': 'sandstone',
	    '$mat_silver': 'silver',
	    '$mat_silver_molten': 'molten silver',
	    '$mat_skullrock': 'hell rock',
	    '$mat_slime_green': 'slime',
	    '$mat_slime_pink': 'slime',
	    '$mat_slime_static': 'slime',
	    '$mat_smoke': 'smoke',
	    '$mat_smoke_explosion': 'smoke',
	    '$mat_smoke_magic': 'smoke',
	    '$mat_smoke_static': 'smoke',
	    '$mat_snow': 'snow',
	    '$mat_snow_b2': 'snow',
	    '$mat_snow_static': 'packed snow',
	    '$mat_snowrock_static': 'frozen rock',
	    '$mat_sodium': 'sodium',
	    '$mat_sodium_unstable': 'wet sodium',
	    '$mat_soil': 'soil',
	    '$mat_soil_dead': 'barren soil',
	    '$mat_soil_lush': 'soil',
	    '$mat_spark': 'spark',
	    '$mat_spark_blue': 'spark',
	    '$mat_spark_electric': 'electric spark',
	    '$mat_spark_green': 'spark',
	    '$mat_spark_player': 'spark',
	    '$mat_spark_purple': 'spark',
	    '$mat_spark_red': 'spark',
	    '$mat_spark_teal': 'spark',
	    '$mat_spark_white': 'spark',
	    '$mat_spark_yellow': 'spark',
	    '$mat_spore': 'seed',
	    '$mat_steam': 'steam',
	    '$mat_steel': 'steel',
	    '$mat_steel_molten': 'molten metal',
	    '$mat_steel_rust': 'rusted steel',
	    '$mat_steel_rust_molten': 'molten steel',
	    '$mat_steel_sand': 'steel',
	    '$mat_steel_static': 'steel',
	    '$mat_steel_static_molten': 'molten steel',
	    '$mat_steel_static_strong': 'dense steel',
	    '$mat_steel_static_unmeltable': 'hardened steel',
	    '$mat_steelmoss_slanted': 'mossy steel',
	    '$mat_steelmoss_slanted_molten': 'molten steel',
	    '$mat_steelmoss_static': 'mossy steel',
	    '$mat_steelmoss_static_molten': 'molten steel',
	    '$mat_steelpipe_static': 'metal pipe',
	    '$mat_steelsmoke_static': 'smoking steel',
	    '$mat_steelsmoke_static_molten': 'molten steel',
	    '$mat_sulphur': 'sulphur',
	    '$mat_swamp': 'swamp',
	    '$mat_templebrick_box2d': 'brickwork',
	    '$mat_templebrick_moss_static': 'mossy brickwork',
	    '$mat_templebrick_noedge_static': 'brickwork',
	    '$mat_templebrick_red': 'brickwork',
	    '$mat_templebrick_static': 'brickwork',
	    '$mat_templebrick_thick_static': 'brickwork',
	    '$mat_templebrickdark_static': 'brickwork',
	    '$mat_templerock_static': 'brickwork',
	    '$mat_the_end': 'hell rock',
	    '$mat_tnt': 'tnt',
	    '$mat_trailer_text': 'text',
	    '$mat_tube_physics': 'neon tube',
	    '$mat_tubematerial': 'neon tube',
	    '$mat_urine': 'urine',
	    '$mat_vine': 'vine',
	    '$mat_water': 'Water',
	    '$mat_water_fading': 'Water',
	    '$mat_water_ice': 'chilly water',
	    '$mat_water_salt': 'brine',
	    '$mat_water_static': 'Water',
	    '$mat_water_swamp': 'swamp',
	    '$mat_water_temp': 'Water',
	    '$mat_waterrock': 'rock',
	    '$mat_wax': 'wax',
	    '$mat_wax_b2': 'wax',
	    '$mat_wax_molten': 'molten wax',
	    '$mat_wood': 'wood',
	    '$mat_wood_loose': 'wood',
	    '$mat_wood_player': 'wood',
	    '$mat_wood_player_b2': 'wood',
	    '$mat_wood_player_b2_vertical': 'wood',
	    '$mat_wood_prop': 'wood',
	    '$mat_wood_prop_durable': 'tough wood',
	    '$mat_wood_static': 'wood',
	    '$mat_wood_static_gas': 'pressurized wood',
	    '$mat_wood_static_vertical': 'wood',
	    '$mat_wood_static_wet': 'damp wood',
	    '$mat_wood_trailer': 'wood',
	    '$mat_wood_wall': 'wood'
	};

	class MaterialColor {
	    constructor(hex) {
	        this.hex = hex;
	        this.red = parseInt(hex[0] + hex[1], 16);
	        this.green = parseInt(hex[2] + hex[3], 16);
	        this.blue = parseInt(hex[4] + hex[5], 16);
	        this.alpha = parseAlpha(hex);
	    }
	}
	const parseAlpha = (hex) => {
	    const raw = parseInt(hex[6] + hex[7], 16);
	    const percent = raw / 255;
	    const rounded = Math.round(percent * 100) / 100;
	    return rounded;
	};

	class MaterialGraphics {
	    constructor(data) {
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
	        this.normalMapped = !!data.attr.normal_mapped;
	        this.isGrass = !!data.attr.is_grass;
	        this.audioPhysicsMaterialWall = data.attr.audio_physics_material_wall;
	        this.audioPhysicsMaterialSolid = data.attr.audio_physics_material_solid;
	    }
	}
	const color = (value) => {
	    if (value) {
	        return new MaterialColor(value);
	    }
	};

	class MaterialCell {
	    constructor(data) {
	        this.name = data.attr.name;
	        this.uiName = data.attr.ui_name;
	        this.displayName = displayNames[data.attr.ui_name];
	        this.parent = data.attr._parent;
	        this.tags = data.attr.tags
	            ? new Set(data.attr.tags.split(','))
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

	class Reaction {
	    constructor(data) {
	        this.probability = data.attr.probability;
	        this.input1 = processInputOutput(data.attr.input_cell1);
	        this.input2 = processInputOutput(data.attr.input_cell2);
	        if (data.attr.input_cell3) {
	            this.input3 = processInputOutput(data.attr.input_cell3);
	        }
	        this.output1 = processInputOutput(data.attr.output_cell1);
	        this.output2 = processInputOutput(data.attr.output_cell2);
	        this.attr = data.attr;
	    }
	}
	const processInputOutput = (inputOutput) => {
	    if (inputOutput.indexOf('[') === 0) {
	        if (inputOutput.indexOf(']_') >= 0) {
	            const chunks = inputOutput.split(']_');
	            const tag = chunks[0] + ']';
	            const modifier = chunks[1];
	            return { tag, modifier };
	        }
	        return { tag: inputOutput };
	    }
	    return { material: inputOutput };
	};

	const processMaterialsXML = (json) => {
	    const materials = processMaterials([
	        ...json.Materials.CellData,
	        ...json.Materials.CellDataChild
	    ]);
	    const reactions = processReactions(json.Materials.Reaction);
	    const reqReactions = processReactions(json.Materials.ReqReaction);
	    return {
	        materials,
	        reactions,
	        reqReactions
	    };
	};
	const processMaterials = (rawMaterials) => {
	    // Index of materials by their "name" attribute
	    const materialsByName = {};
	    // Index of materials by the tags they possess
	    const materialsByTag = {};
	    // Array of all materials
	    const materials = rawMaterials.map((rawMaterial) => {
	        const material = new MaterialCell(rawMaterial);
	        materialsByName[material.name] = material;
	        material.tags.forEach((tag) => {
	            if (!materialsByTag[tag]) {
	                materialsByTag[tag] = new Set();
	            }
	            materialsByTag[tag].add(material);
	        });
	        return material;
	    });
	    return {
	        materials,
	        materialsByName,
	        materialsByTag,
	    };
	};
	const processReactions = (rawReactions) => {
	    // Index of reactions by the input materials
	    const reactionsByInputMaterial = {};
	    // Index of reactions by the output materials
	    const reactionsByOutputMaterial = {};
	    // Index of reactions by the input tags
	    const reactionsByInputTag = {};
	    // Index of reactions by the output tags
	    const reactionsByOutputTag = {};
	    function addTo(map, key, reaction) {
	        if (!map[key]) {
	            map[key] = new Set();
	        }
	        map[key].add(reaction);
	    }
	    const addInput = (input, reaction) => {
	        if (!input) {
	            return;
	        }
	        if (input.material) {
	            addTo(reactionsByInputMaterial, input.material, reaction);
	        }
	        else {
	            addTo(reactionsByInputTag, input.tag, reaction);
	        }
	    };
	    const addOutput = (output, reaction) => {
	        if (!output) {
	            return;
	        }
	        if (output.material) {
	            addTo(reactionsByOutputMaterial, output.material, reaction);
	        }
	        else {
	            addTo(reactionsByOutputTag, output.tag, reaction);
	        }
	    };
	    const reactions = rawReactions.map((rawReaction) => {
	        const reaction = new Reaction(rawReaction);
	        addInput(reaction.input1, reaction);
	        addInput(reaction.input2, reaction);
	        addInput(reaction.input3, reaction);
	        addOutput(reaction.output1, reaction);
	        addOutput(reaction.output2, reaction);
	        return reaction;
	    });
	    return {
	        reactions,
	        reactionsByInputMaterial,
	        reactionsByOutputMaterial,
	        reactionsByInputTag,
	        reactionsByOutputTag
	    };
	};

	const generateRecipes = (seed) => {
	    const generator = new NoitaAlchemyGenerator(seed, false);
	    return {
	        lc: generator.livelyConcoction,
	        ap: generator.alchemicalPrecursor
	    };
	};

	// seeds.html
	const seedsPage = () => {
		const checkSeed = document.querySelector('#check-seed');
		const checkSeedInput = checkSeed.querySelector('input');
		const checkSeedButton = checkSeed.querySelector('button');
		const checkSeedOutput = checkSeed.querySelector('.output');

		checkSeedButton.addEventListener('click', () => {
			const seed = parseInt(checkSeedInput.value, 10);
			const recipes = generateRecipes(seed);

			checkSeedOutput.innerHTML = `
			<div class="lc">
				<h3>Lively Concoction</h3>
				<small>Probability: ${recipes.lc.probability}%</small>
				<ul>
					${recipes.lc.materials.map((mat) => `<li>${mat}</li>`).join('')}
				</ul>
			</div>
			<div class="ap">
				<h3>Alchemical Precursor</h3>
				<small>Probability: ${recipes.ap.probability}%</small>
				<ul>
					${recipes.ap.materials.map((mat) => `<li>${mat}</li>`).join('')}
				</ul>
			</div>
		`;
		});

		const allowed = new Set();
		const materialPreferences = Object.assign({ }, defaultMaterialPreference);
		const allMaterials = Object.keys(materialPreferences);

		const searchSeeds = document.querySelector('section#search-seeds');
		const searchSeedsMinScore = searchSeeds.querySelector('.options .score');
		const searchSeedsButton = searchSeeds.querySelector('.options button.search');
		const searchSeedsStatus = searchSeeds.querySelector('.options .status');
		const searchSeedsResults = searchSeeds.querySelector('.results');
		const searchSeedsMaterials = searchSeeds.querySelector('.materials');

		let canceled;
		let searching;
		const maxSeed = 0x7fffffff;
		const desiredResults = 200;
		const attemptsPerCycle = 10000;
		const threadPausePerCycle = 100;

		allMaterials.forEach((material) => {
			allowed.add(material);

			const row = searchSeedsMaterials.querySelector('table tbody').appendChild(
				document.createElement('tr')
			);

			const cost = materialPreferences[material];

			row.setAttribute('data-material', material);
			row.innerHTML = `
			<td class="material">${material}</td>
			<td class="allowed"><input type="checkbox" checked /></td>
			<td class="cost"><input type="number" value="${cost}" min="0" max="16" /></td>
			<td class="lc-required"><input type="checkbox" /></td>
			<td class="ap-required"><input type="checkbox" /></td>
		`;
		});

		searchSeedsButton.addEventListener('click', () => {
			if (searching) {
				canceled = true;
				searchSeedsButton.innerHTML = 'Canceling';
			}

			else {
				runSeedsSearch();
				searchSeedsButton.innerHTML = 'Stop and View Results';
			}
		});

		const getSearchQuery = () => {
			const exclude = new Set(allMaterials);
			const minScoreThreshold = searchSeedsMinScore.value;
			const requireMaterials = {
				lc: [ ],
				ap: [ ]
			};

			[ ...searchSeedsMaterials.querySelectorAll('table tbody tr') ].forEach((row) => {
				const material = row.getAttribute('data-material');
				const allowed = row.querySelector('.allowed input').checked;
				const cost = row.querySelector('.cost input').value;
				const lcRequired = row.querySelector('.lc-required input').checked;
				const apRequired = row.querySelector('.ap-required input').checked;

				if (allowed) {
					exclude.delete(material);
					materialPreferences[material] = cost;
					
					if (lcRequired) {
						requireMaterials.lc.push(material);
					}

					if (apRequired) {
						requireMaterials.ap.push(material);
					}
				}
			});

			if (allMaterials.length - 3 < exclude.size) {
				return setSearchStatus('Must have at least 3 enabled materials', true);
			}

			if (requireMaterials.lc.length > 3) {
				return setSearchStatus('Can only require up to 3 materials for LC recipe');
			}

			if (requireMaterials.ap.length > 3) {
				return setSearchStatus('Can only require up to 3 materials for AP recipe');
			}

			return {
				exclude,
				requireMaterials,
				minScoreThreshold,
				requireMaterials,
				materialPreferences
			};
		};

		const runSeedsSearch = async () => {
			const startTime = Date.now();
			const results = [ ];
			const searchQuery = getSearchQuery();

			if (! searchQuery) {
				return;
			}

			canceled = false;
			searching = true;

			let nextSeed = 0;
			let searched = `less than ${attemptsPerCycle}`;
			const seedFinder = new SeedFinder(searchQuery);

			seedFinder.on('seed', (seed, cancel) => {
				results.push(seed);

				setSearchStatus(`Checked ${searched} seeds; Found ${results.length} matches`);

				if (canceled || results.length >= desiredResults) {
					canceled = true;
					cancel();
				}
			});

			while (results.length < desiredResults && nextSeed < maxSeed && ! canceled) {
				const start = nextSeed;
				
				nextSeed += attemptsPerCycle;

				const count = (nextSeed > maxSeed)
					? maxSeed - start
					: attemptsPerCycle;

				setSearchStatus(`Checked ${searched} seeds; Found ${results.length} matches`);

				await sleep(threadPausePerCycle);

				seedFinder.seek(start, count);

				searched = `about ${start}`;
			}

			const duration = (Date.now() - startTime) / 1000;

			searching = false;
			searchSeedsButton.innerHTML = 'Search';
			setSearchStatus(`Done. Checked ${searched} seeds; Found ${results.length} matches in ${duration} seconds`);
			renderSearchResults(results);
		};

		const setSearchStatus = (message, isError = false) => {
			searchSeedsStatus.innerHTML = message;
			searchSeedsStatus.classList.toggle('error', isError);
		};

		const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

		const renderSearchResults = (results) => {
			if (! results.length) {
				searchSeedsResults.innerHTML = '<h4>No Results Found</h4>';
				return;
			}

			searchSeedsResults.innerHTML = `
			<header>
				<h4>Found ${results.length} Matching Seeds</h4>
				<a class="clear">Clear Results</a>
			</header>
			<section>
				${results.map((seed) => `
					<div>
						<h5>Seed: ${seed.seed}</h5>
						<p>Lively Concoction: ${seed.livelyConcoction.materials.join(', ')} (Probability ${seed.livelyConcoction.probability}%)</p>
						<p>Alchemical Precursor: ${seed.alchemicalPrecursor.materials.join(', ')} (Probability ${seed.alchemicalPrecursor.probability}%)</p>
					</div>
				`).join('')}
			</section>
		`;

			searchSeedsResults.querySelector('header a.clear').addEventListener('click', () => {
				searchSeedsResults.innerHTML = '';
			});
		};
	};

	// materials.html
	const materialsPage = () => {
		const data = processMaterialsXML(materialsXML);

		console.log(data);

		const materialsTable = document.querySelector('#materials-explorer table tbody');
		const materialsRows = [ ];

		data.materials.materials.forEach((material) => {
			const tags = [ ...material.tags ].map((tag) => {
				return `<a href="#tag-${tag.slice(1, -1)}">${tag}</a>`;
			});

			materialsRows.push(`
			<tr id="mat-${material.name}"">
				<td>${material.name}</td>
				<td>${material.uiName}</td>
				<td>${material.displayName || ''}</td>
				<td>${material.parent || ''}</td>
				<td>${tags.join(', ')}</td>
			</tr>
		`);
		});

		materialsTable.innerHTML = materialsRows.join('');

		const tagsBox = document.querySelector('#tags-explorer > div.tags');
		const tagsRows = [ ];

		Object.keys(data.materials.materialsByTag).forEach((tag) => {
			let content = `
			<div id="tag-${tag.slice(1, -1)}">
				<h3>${tag}</h3>
				<ul class="materials">
		`;

			data.materials.materialsByTag[tag].forEach((material) => {
				content += `<li>${material.name}</li>`;
			});

			content += '</ul></div>';

			tagsRows.push(content);
		});

		tagsBox.innerHTML = tagsRows.join('');
	};

	// reactions.html
	const reactionsPage = () => {
		const data = processMaterialsXML(materialsXML);

		console.log(data);

		const reactionsTable = document.querySelector('#reactions-explorer table tbody');
		const reactionsRows = [ ];
		const inputOutput = (value) => {
			if (value.material) {
				const link = `./materials.html#mat-${value.material}`;
				// const material = data.materialsByName[value.material];
				const display = value.material;

				return { link, display };
			}

			if (value.tag) {
				const link = `./materials.html#tag-${value.tag.slice(1, -1)}`;
				const display = value.modifier
					? `${value.tag}_${value.modifier}`
					: value.tag;

				return { link, display };
			}
		};

		const inputOutputCell = (value) => {
			if (! value) {
				return '';
			}

			const processed = inputOutput(value);

			return `<a href="${processed.link}">${processed.display}</a>`;
		};

		data.reactions.reactions.forEach((reaction) => {
			reactionsRows.push(`
			<tr>
				<td>${inputOutputCell(reaction.input1)}</td>
				<td>${inputOutputCell(reaction.input2)}</td>
				<td>${inputOutputCell(reaction.input3)}</td>
				<td>${inputOutputCell(reaction.output1)}</td>
				<td>${inputOutputCell(reaction.output2)}</td>
				<td>${reaction.probability}%</td>
			</tr>
		`);
		});

		data.reqReactions.reactions.forEach((reaction) => {
			reactionsRows.push(`
			<tr class="req">
				<td>${inputOutputCell(reaction.input1)}</td>
				<td>${inputOutputCell(reaction.input2)}</td>
				<td>${inputOutputCell(reaction.input3)}</td>
				<td>${inputOutputCell(reaction.output1)}</td>
				<td>${inputOutputCell(reaction.output2)}</td>
				<td>${reaction.probability}%</td>
			</tr>
		`);
		});

		reactionsTable.innerHTML = reactionsRows.join('');
	};

	const page = document.body.getAttribute('data-page');

	switch (page) {
		case 'seeds':
			seedsPage();
			break;

		case 'materials':
			materialsPage();
			break;

		case 'reactions':
			reactionsPage();
			break;
	}

}(EventEmitter3));
