import styles from "./Input.module.css";

interface InputProps {
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const Input = ({
	type = "text",
	value,
	onChange,
	placeholder = "Type the text here...",
}: InputProps) => {
	return (
		<input
			className={styles.input}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;
