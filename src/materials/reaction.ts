
import { ReactionNode, ReqReactionNode, CellName, CellTag } from './xml-structure';

export type TagModifier = 'vapour' | 'rust' | 'oxide' | 'molten';

export interface ReactionInputOutput {
	tag?: CellTag;
	modifier?: TagModifier;
	material?: CellName;
}

export class Reaction {
	public readonly probability: number;
	public readonly input1: ReactionInputOutput;
	public readonly input2: ReactionInputOutput;
	public readonly input3?: ReactionInputOutput;
	public readonly output1: ReactionInputOutput;
	public readonly output2: ReactionInputOutput;
	public readonly attr: (ReactionNode | ReqReactionNode)['attr'];

	constructor(data: ReactionNode | ReqReactionNode) {
		this.probability = data.attr.probability;

		this.input1 = processInputOutput(data.attr.input_cell1);
		this.input2 = processInputOutput(data.attr.input_cell2);

		if ((data.attr as any).input_cell3) {
			this.input3 = processInputOutput((data.attr as any).input_cell3);
		}

		this.output1 = processInputOutput(data.attr.output_cell1);
		this.output2 = processInputOutput(data.attr.output_cell2);

		this.attr = data.attr;
	}
}

const processInputOutput = (inputOutput: string) : ReactionInputOutput => {
	if (inputOutput.indexOf('[') === 0) {
		if (inputOutput.indexOf(']_') >= 0) {
			const chunks = inputOutput.split(']_');
			const tag = chunks[0] + ']' as CellTag
			const modifier = chunks[1] as TagModifier;

			return { tag, modifier };
		}

		return { tag: inputOutput as CellTag };
	}

	return { material: inputOutput as CellName };
};
