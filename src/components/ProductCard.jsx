import { Link } from "react-router-dom";

const ProductCard = ({ title, id, price, currency }) => {
  return (
    <div className="flex w-[300px] flex-col border">
      <div className="h-[300px] w-[300px]">
        <img
          src={`https://source.unsplash.com/random/300x300?sig=${id}`}
          alt="loading"
        />
      </div>
      <div className="h-[80px]">
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
      <div className="flex flex-row-reverse  border-t">{`$${price}`}</div>
    </div>
  );
};

export default ProductCard;
