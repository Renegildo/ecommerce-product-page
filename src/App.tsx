import { useState } from "react";
import Header from "./components/Header";
import ProductThumbnail from "./components/ProductImage";

const App = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [productQuantity, setProductQuantity] = useState(1);
	const [cartItems, setCartItems] = useState(null);

	function handleAddToCart() {
		let newCartItems = [];
		newCartItems = [{
			name: 'Fall Limited Edition Sneakers',
			price: 125,
			quantity: productQuantity,
		},];
		setCartItems(newCartItems);
	}

	return (
		<div>
			<Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} />

			<div className="flex flex-col lg:flex-row lg:items-center">
				<ProductThumbnail isCartOpen={isCartOpen} cartItems={cartItems} setCartItems={setCartItems} />
				<main className="flex flex-col gap-3 p-7 lg:mx-44 lg:gap-8">
					<h3 className="text-orange font-bold text-sm ">SNEAKER COMPANY</h3>
					<h2 className="font-semibold text-3xl">Fall Limited Edition Sneakers</h2>
					<p className="text-darkGrayishBlue text-[0.9rem]">These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, the`ll wishtand everything the weather can offer.</p>
					<div className="flex justify-between lg:flex-col">
						<div className="flex items-center gap-5">
							<h1 className="font-bold text-3xl">$125.00</h1>
							<h2 className="text-orange font-bold discount p-1 text-sm rounded-md text-center">50%</h2>
						</div>
						<p className="line-through text-darkGrayishBlue font-medium">$250.00</p>
					</div>
					<div className="flex flex-col gap-3 lg:flex-row">
						<div className="quantity rounded-lg lg:w-64">
							<button className="py-3 pl-5"
								onClick={() => {
									if (productQuantity === 1) return;
									setProductQuantity(productQuantity - 1);
								}}>
								<img
									src="/src/assets/images/icon-minus.svg"
									alt="minus"
								/>
							</button>
							<p className="py-3 text-center font-bold">{productQuantity}</p>
							<button className="py-3 pl-[82%] lg:pl-[66%]"
								onClick={() => {
									if (productQuantity === 99) return;
									setProductQuantity(productQuantity + 1);
								}}>
								<img
									src="/src/assets/images/icon-plus.svg"
									alt="plus"
								/>
							</button>
						</div>
						<button className="bg-orange w-full py-3 text-white text-center flex justify-center items-center gap-5 font-bold rounded-lg relative hover:bg-paleOrange hover:text-orange transition-colors duration-200"
							onClick={handleAddToCart}>
							<img
								src="/src/assets/images/icon-cart.svg"
								className="h-5 text-white"
							/>
							<span className="text-sm">
								Add to cart
							</span>
						</button>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;