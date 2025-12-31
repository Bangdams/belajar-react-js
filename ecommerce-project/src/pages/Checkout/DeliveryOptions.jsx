import dayjs from "dayjs";
import { formatMoney } from "../../util/money";
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  const changeDeliveryOption = async (e) => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: e.target.value,
    });

    await loadCart();
  };

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              defaultChecked={deliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              value={deliveryOption.id}
              onChange={changeDeliveryOption}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D"
                )}
              </div>
              <div className="delivery-option-price">
                {deliveryOption.priceCents == 0
                  ? "FREE Shipping"
                  : `${formatMoney(deliveryOption.priceCents)} - Shipping`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
