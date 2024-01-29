import { useState } from "react";

const Header = ({ isCartOpen, setIsCartOpen, cartItems }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleCartClick() {
		setIsCartOpen(!isCartOpen);
	}

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
		document.body.classList.toggle('body-is-menu-open')
	}

	return (
		<header className="flex justify-between p-4 bg-white relative">
			<span className={`absolute h-[200vh] w-[100vw] z-10 top-0 left-0 bg-[#00000080] menu ${isMenuOpen ? "block" : "hidden"}`}></span>

			<span className={`absolute h-[200vh] w-72 z-20 top-0 left-0 bg-white p-4 ${isMenuOpen ? "block" : "hidden"} pt-9`}>
				<button onClick={toggleMenu}>
					<img
						src="/src/assets/images/icon-close.svg"
						alt="close menu"
					/>
				</button>

				<ul className="flex flex-col gap-4 font-bold text-lg text-start mt-8">
					<li>
						<a href="#">Collections</a>
					</li>
					<li>
						<a href="#">Men</a>
					</li>
					<li>
						<a href="#">Woman</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</span>

			<article className="flex h-14 items-center gap-5">
				<button onClick={toggleMenu} className="block lg:hidden">
					<img
						src="/src/assets/images/icon-menu.svg"
						alt="menu"
					/>
				</button>
				<a href="#">
					<img
						src="/src/assets/images/logo.svg"
						alt="logo"
						className="h-6"
					/>
				</a>
				<ul className="hidden lg:flex gap-4 ml-4 text-darkGrayishBlue">
					<li>
						<a href="#" className="underline-hover">Collections</a>
					</li>
					<li>
						<a href="#" className="underline-hover">Men</a>
					</li>
					<li>
						<a href="#" className="underline-hover">Women</a>
					</li>
					<li>
						<a href="#" className="underline-hover">About</a>
					</li>
					<li>
						<a href="#" className="underline-hover">Contact</a>
					</li>
				</ul>
			</article>
			<article className="flex items-center gap-5">
				<button onClick={handleCartClick} className="relative">
					<img
						src="/src/assets/images/icon-cart.svg"
					/>
					<span className="bg-orange text-white text-xs absolute -top-2 px-2 rounded-xl"> {/* New message popup */}
						{cartItems && (cartItems[0].quantity)}
					</span>
				</button>
				<a href="#">
					<img
						src="/src/assets/images/image-avatar.png"
						className="h-10 rounded-full outline-orange hover:outline-2 hover:outline"
					/>
				</a>
			</article>
		</header>
	)
}

export default Header;