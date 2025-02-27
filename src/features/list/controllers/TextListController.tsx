import type TextElement from "../domain/TextElement";
import type { Id } from "../domain/TextElement";
import type TextList from "../domain/TextList";

class TextListController {
	private readonly textList;

	constructor(textList: TextList) {
		this.textList = textList;
	}

	addElement(text: string): TextElement {
		return this.textList.addElement(text);
	}

	toggleSelectElement(id: Id): void {
		this.textList.toggleSelectElement(id);
	}

	deleteOneElement(id: Id): Id {
		return this.textList.deleteOneElement(id);
	}

	deleteAllSelectedElements(): void {
		this.textList.deleteAllSelectedElements();
	}

	undo(): void {
		this.textList.undo();

		console.log(this.textList.getAll());
	}

	canUndo(): boolean {
		return this.textList.canUndo();
	}

	getList(): TextElement[] {
		return this.textList.getAll();
	}

	hasOneSelected(): boolean {
		return this.textList.hasOneSelected();
	}
}

export default TextListController;
