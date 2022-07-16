import Head from "next/head";
import Link from "next/Link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
					suscipit optio maxime enim corporis provident aliquid possimus.
					Architecto provident nemo facere accusantium eveniet voluptate
					consequatur quis ex. Obcaecati, cupiditate maxime.
				</p>

				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
					suscipit optio maxime enim corporis provident aliquid possimus.
					Architecto provident nemo facere accusantium eveniet voluptate
					consequatur quis ex. Obcaecati, cupiditate maxime.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}

// <About />;
