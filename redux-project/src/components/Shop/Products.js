import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Test 1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Test 2",
    price: 10,
    description: "This is a first product - amazing!",
  },
  {
    id: 3,
    title: "Test 3",
    price: 20,
    description: "This is a first product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
