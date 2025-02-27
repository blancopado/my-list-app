import { useState } from "react";
import { useTextListContext } from "../../core/contexts/TextListContext";
import type TextElement from "../../features/list/domain/TextElement";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./Dialog.module.css";

interface DialogProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	setTextElements: React.Dispatch<React.SetStateAction<TextElement[]>>;
}

const Dialog: React.FC<DialogProps> = ({
	isOpen,
	title,
	onClose,
	setTextElements,
}) => {
	if (!isOpen) return null;
	const [inputValue, setInputValue] = useState("");

	const { textListController } = useTextListContext();

	const handleAddElement = () => {
		if (inputValue.length === 0) return;

		textListController.addElement(inputValue);
		setTextElements(textListController.getList());
		onClose();
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={styles.dialogOverlay} onClick={onClose} onKeyDown={onClose}>
			<div
				className={styles.dialog}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<p>{title}</p>
				<Input type="text" value={inputValue} onChange={handleInputChange} />

				<div className={styles.dialogFooter}>
					<Button onClick={handleAddElement} isDisabled={!inputValue} filled>
						Add
					</Button>
					<Button onClick={onClose}>Cancel</Button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
