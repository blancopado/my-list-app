import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/button/Button";
import Card from "./components/container/Card";
import Dialog from "./components/dialog/Dialog";
import Heading from "./components/heading/Heading";
import RefreshIcon from "./components/icons/Refresh";

function App() {
	const [addModal, setdAddModal] = useState(false);

	const handleOpenAddModal = () => {
		setdAddModal(true);
	};

	const handleCloseAddModal = () => {
		setdAddModal(false);
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
						<ul>
							<li>Hola</li>
						</ul>
					</section>
				</main>

				<footer className={styles.buttonsContainer}>
					<section className={styles.buttonsLeft}>
						<Button onClick={() => null}>
							<RefreshIcon fill={"#000"} />
						</Button>
						<Button onClick={() => null}>Delete</Button>
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
			/>
		</>
	);
}

export default App;
