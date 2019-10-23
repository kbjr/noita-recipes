
import { CellDataChildNode, CellDataNode } from './cell';
import { ReactionNode, ReqReactionNode } from './reaction';

export { Bool } from './generic-types';
export { CellTag } from './cell-tag';
export { CellType } from './cell-type';
export { CellName } from './cell-name';
export { CellUIName } from './cell-ui-name';
export { CellAudioPhysics } from './cell-audio-physics';
export { CellStatusEffect } from './cell-status-effects';
export { CellDataChildNode, CellDataNode, GraphicsNode, EdgeNode, EdgeGraphicsNode } from './cell';
export { ReactionNode, ReqReactionNode, ReactionMaterial } from './reaction';

export interface MaterialsXML {
	Materials: {
		CellData: CellDataNode[];
		CellDataChild: CellDataChildNode[];
		Reaction: ReactionNode[];
		ReqReaction: ReqReactionNode[];
	};
}
