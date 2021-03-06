
import { MaterialCell } from './cell';
import { Reaction, TagModifier, ReactionInputOutput } from './reaction';
import { MaterialsXML, CellName, CellTag, CellDataNode, CellDataChildNode, ReactionNode, ReqReactionNode } from './xml-structure';

export type MaterialsByName = {
	[name in CellName]?: MaterialCell;
};

export type MaterialsByTag = {
	[name in CellTag]?: Set<MaterialCell>;
};

export type ReactionByMaterial = {
	[name in CellName]?: Set<Reaction>;
};

export type ReactionByTag = {
	[name in CellTag]?: Set<Reaction>;
};

export const processMaterialsXML = (json: MaterialsXML) => {
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

const processMaterials = (rawMaterials: (CellDataNode | CellDataChildNode)[]) => {
	// Index of materials by their "name" attribute
	const materialsByName: MaterialsByName = { };

	// Index of materials by the tags they possess
	const materialsByTag: MaterialsByTag = { };

	// Array of all materials
	const materials = rawMaterials.map((rawMaterial) => {
		const material = new MaterialCell(rawMaterial);

		materialsByName[material.name] = material;

		material.tags.forEach((tag) => {
			if (! materialsByTag[tag]) {
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

const processReactions = <T extends ReactionNode | ReqReactionNode>(rawReactions: T[]) => {
	// Index of reactions by the input materials
	const reactionsByInputMaterial: ReactionByMaterial = { };

	// Index of reactions by the output materials
	const reactionsByOutputMaterial: ReactionByMaterial = { };

	// Index of reactions by the input tags
	const reactionsByInputTag: ReactionByTag = { };

	// Index of reactions by the output tags
	const reactionsByOutputTag: ReactionByTag = { };

	function addTo(map: ReactionByMaterial, key: CellName, reaction: Reaction);
	function addTo(map: ReactionByTag, key: CellTag, reaction: Reaction);
	function addTo(map: object, key: string, reaction: Reaction) {
		if (! map[key]) {
			map[key] = new Set();
		}

		map[key].add(reaction);
	}

	const addInput = (input: ReactionInputOutput, reaction: Reaction) => {
		if (! input) {
			return;
		}

		if (input.material) {
			addTo(reactionsByInputMaterial, input.material, reaction);
		}

		else {
			addTo(reactionsByInputTag, input.tag, reaction);
		}
	};

	const addOutput = (output: ReactionInputOutput, reaction: Reaction) => {
		if (! output) {
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
