import { useState } from "react";
import ProductThumbnail from "./ProductThumbnail";
import LightBox from "./LightBox";

const ProductImage = ({ isCartOpen, cartItems, setCartItems }) => {
	const [productImage, setProductImage] = useState(1);
	const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

	function next() {
		if (productImage === 4) return;
		setProductImage(productImage + 1);
	}

	function previous() {
		if (productImage === 1) return;
		setProductImage(productImage - 1);
	}

	function deleteCartItems() {
		setCartItems(null);
	}

	function openLightBox() {
		document.body.style.overflow = 'hidden';
		document.body.style.height = '100vh';
		setIsLightBoxOpen(true);
	}


	return (
		<>
			<main className="relative lg:ml-24">
				<div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[93%] bg-white flex-col z-10 rounded-md shadow-lg ${isCartOpen ? "scale-100" : "scale-0"} transition-transform`}> {/* Cart Menu */}
					<h3 className="mb-5 pt-5 pl-5">Cart</h3>
					<hr className="text-grayishBlue" />
					<div className={`${!cartItems ? "flex" : "hidden"} items-center justify-center h-full overflow-scroll`}>
						<p className="text-darkGrayishBlue font-bold mt-7">Your cart is empty</p>
					</div>
					<div className="p-7 flex flex-col">
						{(cartItems) && <ul className="mb-8">
							{cartItems.map((item, index) => {
								return (
									<li className="flex gap-3 items-center justify-between text-darkGrayishBlue" key={index}>
										<img
											src="/src/assets/images/image-product-1-thumbnail.jpg"
											alt="product image"
											className="w-14 rounded-md"
										/>
										<div className="flex flex-col">
											<p>{item.name}</p>
											<div className="flex gap-3">
												<p>${item.price} x {item.quantity}</p>
												<p className="font-bold text-black tracking-wider">${item.price * item.quantity}</p>
											</div>
										</div>
										<button onClick={deleteCartItems}>
											<img
												src="src/assets/images/icon-delete.svg"
											/>
										</button>
									</li>
								);
							})}
						</ul>}
						<a href="#"
							className={`${cartItems ? "block" : "hidden"} bg-orange text-center text-white py-3 rounded-lg`}>
							Checkout
						</a>
					</div>
				</div>
				<img
					src={`/src/assets/images/image-product-${productImage}.jpg`}
					alt="product image"
					className="hidden lg:block lg:rounded-xl cursor-pointer"
					onClick={openLightBox}
				/>
				<img
					src={`/src/assets/images/image-product-${productImage}.jpg`}
					alt="product image"
					className="block lg:hidden lg:rounded-xl"
				/>
				<div className="block lg:hidden"> {/* Mobile Buttons */}
					<button className="absolute left-4 top-[45%]
					bg-white w-10 h-10 rounded-full flex items-center justify-center"
						onClick={previous}>
						<img
							src="/src/assets/images/icon-previous.svg"
							alt="right-arrow"
						/>
					</button>
					<button className="absolute right-4 top-[45%]
					bg-white w-10 h-10 rounded-full flex items-center justify-center"
						onClick={next}>
						<img
							src="/src/assets/images/icon-next.svg"
							alt="left-arrow"
						/>
					</button>
				</div>
				<div className="gap-5 mt-5 hidden lg:flex">
					<ProductThumbnail src={'/src/assets/images/image-product-1-thumbnail.jpg'} setProductImage={setProductImage} productImage={1} />
					<ProductThumbnail src={'/src/assets/images/image-product-2-thumbnail.jpg'} setProductImage={setProductImage} productImage={2} />
					<ProductThumbnail src={'/src/assets/images/image-product-3-thumbnail.jpg'} setProductImage={setProductImage} productImage={3} />
					<ProductThumbnail src={'/src/assets/images/image-product-4-thumbnail.jpg'} setProductImage={setProductImage} productImage={4} />
				</div>
			</main>
			<LightBox defaultProductImage={productImage} className={`${isLightBoxOpen ? "block" : "hidden"}`} setIsLightBoxOpen={setIsLightBoxOpen} />
		</>
	);
}

export default ProductImage;