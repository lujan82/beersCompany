import React, { useState } from 'react';

const ShopList = ({ i, setCart, cart}) => {
  const { url, name, pack, price, id } = i

  const [totalPacks, setTotalPacks] = useState(0)

  let totalSave = cart.items?.filter(i => i.id == id)
  if(totalSave !== undefined ) totalSave = totalSave.slice(-1)[0]


  const handleAddToCart = () => {
    if (cart.packs == 10) {
      return setCart({ ...cart, infoText: '10 Packs Max' })
    }

    if (totalSave !== undefined) {
      setCart({
        ...cart,
        packs: cart.packs + 1,
        total: cart.total + price,
        items: [...cart.items,{id: i.id, totalPacks: totalSave.totalPacks + 1}]
      })
    } else {
      setCart({
        ...cart,
        packs: cart.packs + 1,
        total: cart.total + price,
        items: [...cart.items,{id: i.id, totalPacks: totalPacks + 1}]
      })
    }

    setTotalPacks(totalPacks + 1)
  }

  const handleRemoveToCart = () => {
    if (cart.packs == 0) return
    if (totalSave !== undefined && totalSave.totalPacks == 0) return
    if (totalSave === undefined && totalPacks == 0) return

    if (totalSave !== undefined) {
      setCart({
        packs: cart.packs - 1,
        total: cart.total - price,
        items: [...cart.items,{id: i.id, totalPacks: totalSave.totalPacks - 1}]
      })
    } else {
      setCart({
        packs: cart.packs - 1,
        total: cart.total - price,
        items: [...cart.items,{id: i.id, totalPacks: totalPacks - 1}]
      })
    }
    setTotalPacks(totalPacks - 1)
  }


  return (
    <div className="shop__beer-item">
      <img src={url} />
      <div className="shop__info">
        <div className="shop__info-pack">{`${pack}- ${name}`}</div>
        <div className="shop__info-price">{price}$</div>
      </div>
      <div className="shop__info-cart">
        <div className="shop__button-cart" onClick={handleRemoveToCart}> - </div>
        <div className="shop__total-cart">
          {totalSave !== undefined ? totalSave.totalPacks : totalPacks}
        </div>
        <div className="shop__button-cart" onClick={handleAddToCart}> + </div>
      </div>
    </div>
  );
};

export default ShopList;