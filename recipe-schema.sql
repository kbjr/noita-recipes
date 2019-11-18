
-- 
-- This table layout keeps probabilities in the seed table.
-- 
-- Option two would be to store the probability in the recipe table (988,000 recipes). The smallest
-- primary key that could store that is a 24-bit mediumint. This would allow for cheaper indexing
-- of probability values if that was desired, making probabilities searchable on their own without
-- another indexed field, and only expanding the recipe table out to about 4.9MB + indexes
-- 



-- 
-- Stores a reference list of all materials that can be used in recipes
-- 
create table material (
  id tinyint unsigned primary key not null auto_increment,
  name varchar(255) not null
);

-- 
-- Populate the material table
-- 
insert into material
  (name)
values
  ('water'),
  ('water_ice'),
  ('water_swamp'),
  ('oil'),
  ('alcohol'),
  ('swamp'),
  ('mud'),
  ('blood'),
  ('blood_fungi'),
  ('blood_worm'),
  ('radioactive_liquid'),
  ('cement'),
  ('acid'),
  ('lava'),
  ('urine'),
  ('poison'),
  ('magic_liquid_teleportation'),
  ('magic_liquid_polymorph'),
  ('magic_liquid_random_polymorph'),
  ('magic_liquid_berserk'),
  ('magic_liquid_charm'),
  ('magic_liquid_invisibility'),
  ('sand'),
  ('bone'),
  ('soil'),
  ('honey'),
  ('slime'),
  ('snow'),
  ('rotten_meat'),
  ('wax'),
  ('gold'),
  ('silver'),
  ('copper'),
  ('brass'),
  ('diamond'),
  ('coal'),
  ('gunpowder'),
  ('gunpowder_explosive'),
  ('grass'),
  ('fungi');

-- 
-- Stores all of the possible recipe combinations
--  (40 mats * 39 * 38) = 59280 possible unique combinations
-- After removing duplicates (same mats, different order), there are only 9880 unique combinations
-- which takes about 49KB + indexes
-- 
create table recipe (
  id smallint unsigned primary key not null auto_increment,
  material_one tinyint unsigned not null,
  material_two tinyint unsigned not null,
  material_three tinyint unsigned not null,

  constraint fk_recipe_material_one
    foreign key (material_one) references material (id),
  constraint fk_recipe_material_two
    foreign key (material_two) references material (id),
  constraint fk_recipe_material_three
    foreign key (material_three) references material (id)
);

-- 
-- Populate the recipe table
-- 
insert into recipe
  (material_one, material_two, material_three)
select distinct
  least(mat1.id, mat2.id, mat3.id) as material_one,
  case least(mat1.id, mat2.id, mat3.id)
    when mat1.id then if (mat2.id < mat3.id, mat2.id, mat3.id)
    when mat2.id then if (mat1.id < mat3.id, mat1.id, mat3.id)
    when mat3.id then if (mat2.id < mat1.id, mat2.id, mat1.id)
  end as material_two,
  greatest(mat1.id, mat2.id, mat3.id) as material_three
from material mat1
cross join material mat2
cross join material mat3
-- Remove combinations where the same material is used twice
where ((mat1.id != mat2.id) and (mat2.id != mat3.id) and (mat3.id != mat1.id))

-- 
-- Stores a list of all seeds, and their ap/lc recipes
-- 
--   80-bit records
--     = seed (32-bit)
--     + lc_recipe (16-bit)
--     + lc_probability (8-bit)
--     + ap_recipe (16-bit)
--     + ap_probability (8-bit)
--   32-bit seed = 4,294,967,296 seed records
--   ---------------------------------------------------------
--   80-bit record * 4,294,967,296 records ~= 42.9GB + indexes
-- 
create table seed_recipes (
  seed int unsigned primary key not null,
  lc_recipe smallint unsigned not null,
  lc_probability tinyint unsigned not null,
  ap_recipe smallint unsigned not null,
  ap_probability tinyint unsigned not null,

  constraint fk_seed_recipe_lc
    foreign key (lc_recipe) references recipe (id),
  constraint fk_seed_recipe_ap
    foreign key (ap_recipe) references recipe (id)
);

