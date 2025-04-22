import CardBody from "../../components/Card";
import { useStore } from "../../features/Store";


const CartPage = () => {
  const { cart } = useStore()

  return (
    <div>
      <h2>Корзина</h2>
      {cart.map((product) => (
        <CardBody
          image={product.thumbnail}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default CartPage;