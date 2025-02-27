import type TextListMemento from "./TextListMemento";

class StateHistory {
	private history: TextListMemento[] = [];

	backup(memento: TextListMemento): void {
		console.log("backup: ", this.history);
		this.history.push(memento);
	}

	undo(): TextListMemento | undefined {
		if (this.history.length === 0) {
			return;
		}

		return this.history.pop();
	}

	canUndo(): boolean {
		return this.history.length > 0;
	}
}

export default StateHistory;
