import classNames from "classnames";
import { useState } from "react";
import Button from "../../../components/button/Button";
import Card from "../../../components/container/Card";
import Dialog from "../../../components/dialog/Dialog";
import Heading from "../../../components/heading/Heading";
import BackIcon from "../../../components/icons/BackIcon";
import { useTextListContext } from "../../../core/contexts/TextListContext";
import type TextElement from "../domain/TextElement";
import styles from "./TextListView.module.css";

const TextLisytView = () => {
	const { textListController } = useTextListContext();

	const [textElements, setTextElements] = useState<TextElement[]>([]);

	const [addModal, setdAddModal] = useState(false);

	const handleOpenAddModal = () => {
		setdAddModal(true);
	};

	const handleCloseAddModal = () => {
		setdAddModal(false);
	};

	const handleSelectElement = (id: string) => {
		textListController.toggleSelectElement(id);
		setTextElements(textListController.getList());
	};

	const handleDeleteOneElement = (id: string) => {
		textListController.deleteOneElement(id);
		setTextElements(textListController.getList());
	};

	const handleDeleteAllSelectedElements = () => {
		textListController.deleteAllSelectedElements();
		setTextElements(textListController.getList());
	};

	const handleUndo = () => {
		textListController.undo();
		setTextElements(textListController.getList());
	};

	return (
		<>
			<Card>
				<Heading level={1}>This is a technical proof</Heading>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
					inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
					hendrerit posuere augue fames dictumst placerat porttitor, dis mi
					pharetra vestibulum venenatis phasellus.
				</p>

				<main className={styles.listContainer}>
					<section className={styles.list}>
						<ul className={styles.elementsList}>
							{textElements.map((textElement) => (
								<li
									key={textElement.id}
									className={classNames(
										styles.element,
										textElement.isSelected && styles.selectedElement,
									)}
									onKeyUp={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											() => handleSelectElement(textElement.id);
										}
									}}
									onClick={() => handleSelectElement(textElement.id)}
									onDoubleClick={() => handleDeleteOneElement(textElement.id)}
								>
									{textElement.text}
								</li>
							))}
						</ul>
					</section>
				</main>

				<footer className={styles.buttonsContainer}>
					<section className={styles.buttonsLeft}>
						<Button
							onClick={handleUndo}
							isDisabled={!textListController.canUndo()}
						>
							<BackIcon />
						</Button>
						<Button
							onClick={handleDeleteAllSelectedElements}
							isDisabled={!textListController.hasOneSelected()}
						>
							Delete
						</Button>
					</section>

					<Button onClick={handleOpenAddModal} filled>
						add
					</Button>
				</footer>
			</Card>

			<Dialog
				isOpen={addModal}
				title="Add item to list"
				onClose={handleCloseAddModal}
				setTextElements={setTextElements}
			/>
		</>
	);
};

export default TextLisytView;
