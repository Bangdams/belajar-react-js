import "./OrdersPage.css";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { OrderDetail } from "./OrderDetail";
import dayjs from "dayjs";
import { formatMoney } from "../../util/money";

export function OrdersPage({ carts }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handleApi = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    handleApi();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header carts={carts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM d")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>
                <OrderDetail order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
