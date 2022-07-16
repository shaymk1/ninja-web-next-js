//import About from "./About.jsx"
import Link from "next/Link";

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit
				optio maxime enim corporis provident aliquid possimus. Architecto
				provident nemo facere accusantium eveniet voluptate consequatur quis ex.
				Obcaecati, cupiditate maxime.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit
				optio maxime enim corporis provident aliquid possimus. Architecto
				provident nemo facere accusantium eveniet voluptate consequatur quis ex.
				Obcaecati, cupiditate maxime.
			</p>
			<Link href="/ninjas">
				<a>See Ninja Listing</a>
			</Link>
		</div>
	);
}

// <About />;
