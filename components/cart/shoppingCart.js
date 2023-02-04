import Link from "next/link"

const ShoppingCart = ({ cart }) => {
	return (
		<Link href="/checkout">
			<div className="cart">
				{cart.total === 0 ? (
					<img src="/images/cart.png" alt="" />
				) : (
					<img src="/images/cart-green.png" alt="" />
				)}
				<div className="cart__info">
					<div className={cart.packs == 10 ? "cart__max" : ""}>
            packs : {cart.packs}
					</div>
					<div>total : {cart.total} $</div>
				</div>
				<div className="cart__info-packs">
					{cart.infoText !== "" && cart.infoText}
				</div>
			</div>
		</Link>
	)
}

export default ShoppingCart
