import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./Dialog.module.css";

interface DialogProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.dialogOverlay} onClick={onClose} onKeyDown={onClose}>
			<div
				className={styles.dialog}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<p>{title}</p>
				<Input type="text" />

				<div className={styles.dialogFooter}>
					<Button onClick={() => console.log("hola")} filled>
						Add
					</Button>
					<Button onClick={onClose}>Cancel</Button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
