import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "../styles/Home.module.css";
const NotFoundPage = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
            router.push('/');
        }, 3000);
	}, []);
	return (
		<div className="not-found">
			<h1 className={styles.title}>Ooooops!.....</h1>
			<h2 className={styles.title}>Page cannot be found</h2>
			<p>
				Go back to :{" "}
				<Link href="/">
					<a className={styles.btn}>Homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFoundPage;
