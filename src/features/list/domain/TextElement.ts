import type { Id } from "../../../core/types/Id";

interface TextElement {
	id: Id;
	text: string;
	isSelected: boolean;
}

export type { Id };
export default TextElement;
