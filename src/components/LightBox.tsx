import { useState } from "react";
import ProductThumbnail from "./ProductThumbnail";

const LightBox = ({ defaultProductImage, className, setIsLightBoxOpen }) => {
	const [productImage, setProductImage] = useState(defaultProductImage);

	function closeLightBox() {
		document.body.style.overflow = 'auto';
		document.body.style.height = 'auto';
		setIsLightBoxOpen(false);
	}

	return (
		<div className={`lightbox ${className}`}>
			<div className="absolute top-0 left-0 h-[200vh] w-[200vw] bg-[#0000009a] z-20 light-box" onClick={closeLightBox} />

			<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 flex flex-col justify-center light-box'>
				<button onClick={closeLightBox} className="self-end">
					<img
						src="/src/assets/images/icon-close.svg"
						alt="close"
					/>
				</button>
				<div>
					<img
						src={`/src/assets/images/image-product-${productImage}.jpg`}
						alt="product image"
						className="w-[70%] m-auto mb-8 rounded-xl"
					/>
				</div>
				<div className="flex gap-8 mx-14">
					<ProductThumbnail productImage={1} setProductImage={setProductImage} src={'/src/assets/images/image-product-1.jpg'} />
					<ProductThumbnail productImage={2} setProductImage={setProductImage} src={'/src/assets/images/image-product-2.jpg'} />
					<ProductThumbnail productImage={3} setProductImage={setProductImage} src={'/src/assets/images/image-product-3.jpg'} />
					<ProductThumbnail productImage={4} setProductImage={setProductImage} src={'/src/assets/images/image-product-4.jpg'} />
				</div>
			</div>
		</div>
	);
}

export default LightBox;