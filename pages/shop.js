import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

import ShoppingCart from "../components/cart/shoppingCart"
import MainLayout from "../components/layouts/mainLayout"
import ShopList from "../components/list/shopList"
import BEER from "../data/beers"
import BEER_PREMIUM from "../data/premiumBeers"
/* middleware */
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils"
import { updateCart } from "../redux/shop/shopAction"

const Shop = props => {
  const [t] = useTranslation("shop")
  const dispatch = useDispatch()
  const cartRedux = useSelector(state => state.cart)

  const [cart, setCart] = useState({
    packs: 0,
    total: 0,
    infoText: "",
    items: [],
  })

  useEffect(() => {
    if (cart.packs == 0 && cartRedux.packs > 0) {
      setCart(cartRedux)
    }
  }, [])

  useEffect(() => {
    if (cartRedux.packs >= cart.packs) return
    dispatch(updateCart(cart))
  }, [cart.items.length == 0])

  useEffect(() => {
    dispatch(updateCart(cart))
  }, [cart])

  return (
    <MainLayout props={props} className={"isfixed"}>
      <div className="shop-page">
        <ShoppingCart cart={cart} />

        <div className="shop__container">
          <h2>{t("ourProducts")}</h2>
          <div className="shop__beers">
            {BEER.map((i, index) => (
              <ShopList i={i} key={index} setCart={setCart} cart={cart} />
            ))}
          </div>
        </div>

        <div className="shop__container">
          <h2>{t("ourPremium")}</h2>
          <div className="shop__premium-beers">
            {BEER_PREMIUM.map((i, index) => (
              <ShopList i={i} key={index} setCart={setCart} cart={cart} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Shop

export async function getServerSideProps(context) {
  const { req } = context
  const { origin } = absoluteUrl(req)

  const baseApiUrl = `${origin}/api/about`

  const { token } = getAppCookies(req)
  const profile = token ? verifyToken(token.split(" ")[1]) : ""

  return {
    props: {
      baseApiUrl,
      profile,
    },
  }
}
