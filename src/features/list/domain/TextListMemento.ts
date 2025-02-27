import type TextElement from "./TextElement";

class TextListMemento {
	constructor(private readonly state: TextElement[]) {}

	getState(): TextElement[] {
		return this.state;
	}
}

export default TextListMemento;
