import StateHistory from "./StateHistory";
import type TextElement from "./TextElement";
import TextListMemento from "./TextListMemento";

class TextList {
	private list: TextElement[] = [];
	private stateHistory: StateHistory = new StateHistory();

	private saveState(): void {
		this.stateHistory.backup(new TextListMemento([...this.list]));
	}

	addElement(text: string) {
		this.saveState();

		const newElement = { id: crypto.randomUUID(), text, isSelected: false };
		this.list.push(newElement);

		return newElement;
	}

	toggleSelectElement(id: string) {
		this.saveState();

		this.list = this.list.map((element) => {
			if (element.id === id) {
				return {
					...element,
					isSelected: !element.isSelected,
				};
			}
			return element;
		});
	}

	deleteOneElement(id: string) {
		this.saveState();
		const element = this.list.find((element) => element.id === id);
		if (!element) {
			throw new Error(`Element with id ${id} not found`);
		}

		this.list = this.list.filter((element) => element.id !== id);

		return id;
	}

	deleteAllSelectedElements() {
		this.saveState();
		this.list = this.list.filter((element) => !element.isSelected);
	}

	undo() {
		const memento = this.stateHistory.undo();
		if (memento) {
			this.list = memento.getState();
		}
	}

	canUndo() {
		return this.stateHistory.canUndo();
	}

	getAll() {
		return this.list;
	}

	hasOneSelected() {
		return this.list.some((element) => element.isSelected);
	}
}

export default TextList;
