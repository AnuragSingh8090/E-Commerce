import "./Cart.css";
import CartCard from "../../components/CartCard/CartCard";
const Cart = () => {
  return (
    <section className="cartContainer flex flex-col border1 py-[20px] gap-[30px]">
      <h1 className="text-center font-bold text-[28px] text-[#535252]">
        Your Cart
      </h1>
      <div className=" relative  flex justify-center gap-[50px]  px-[20px]">
        <div className="itemsContainer flex flex-col gap-[10px]">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div className="checkoutContainer sticky top-[80px] !px-[50px] !py-[18px] flex flex-col justify-between cardContainer h-[400px] w-[400px]">
          <h1 className="text-center font-bold text-[18px] text-[#535252]">
            Order Summary
          </h1>

          <button className="w-full mt-[15px] bg-green-600 text-white py-[5px] rounded-[8px] font-[500] text-[16px] hover:bg-green-700 transition duration-200 cursor-pointer active:scale-[0.99]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
