import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	filled?: boolean;
	isDisabled?: boolean;
	children: React.ReactNode;
}

const MyButton = ({
	onClick,
	children,
	type = "button",
	filled = false,
	isDisabled = false,
	...props
}: ButtonProps) => {
	return (
		<button
			className={classNames(styles.button, filled && styles.filled)}
			onClick={onClick}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};

export default MyButton;
