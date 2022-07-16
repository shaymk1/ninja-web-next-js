import Link from "next/Link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<a>
						<h1>Ninja List</h1>
					</a>
				</Link>
			</div>

			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/About">
				<a>About</a>
			</Link>
			<Link href="/ninjas">
				<a>Ninja Listing</a>
			</Link>
			
		</nav>
	);
};

export default Navbar;
