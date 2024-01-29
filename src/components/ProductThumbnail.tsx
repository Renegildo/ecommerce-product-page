const ProductThumbnail = ({ src, setProductImage, productImage }) => {
	function handleClick() {
		setProductImage(productImage);
	}

	return (
		<button className="product-thumbnail-item rounded-xl relative" onClick={handleClick}>
			<div className="absolute w-full h-full bg-white opacity-0 rounded-xl" />

			<img
				src={src}
				alt="product thumbnail"
				className="rounded-xl"
			/>
		</button>
	);
}

export default ProductThumbnail;