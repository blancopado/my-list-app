import styles from "./BackIcon.module.css";

const BackIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		className={styles.back}
		aria-label="refresh icon"
		role="img"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		{...props}
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
	</svg>
);

export default BackIcon;
