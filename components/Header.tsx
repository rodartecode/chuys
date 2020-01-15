import Link from "next/link";

export default () => (
	<header>
		<nav>
			<Link href='/tacos'>
				<a>Tacos</a>
			</Link>{" "}
			|
			<Link href='/about'>
				<a>Taquizas</a>
			</Link>{" "}
			|
			<Link href='/contact'>
				<a>Contact</a>
			</Link>
		</nav>
	</header>
);
