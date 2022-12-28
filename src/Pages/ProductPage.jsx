import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItem, removeItems } from "../util/localStorage";
import LogoutSVG from "../svg/LogoutSVG";
import Pagination from "../components/Pagination";
import { useGetProducts } from "../hooks/products.hook";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: products,
    refetch,
    isLoading,
  } = useGetProducts({
    offset: currentPage * 12,
    limit: 12,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!getItem("user") || !getItem("token")) {
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    removeItems();
    navigate("/");
  };
  return (
    <div className="overflow-x-hidden">
      <nav className="flex h-[48px] w-screen items-center justify-end bg-gray-800 pr-8">
        <button onClick={handleLogout}>
          <LogoutSVG />
        </button>
      </nav>
      <div className="grid w-screen place-items-center pt-4">
        <div className=" flex w-4/5 flex-col">
          <div className="grid grid-cols-3 gap-8">
            {isLoading ? (
              <h1>loading...</h1>
            ) : (
              <>
                {products?.data?.data?.rows?.map(
                  ({ title, images, price, currency, id }) => {
                    return (
                      <ProductCard
                        key={id}
                        currency={currency}
                        images={images}
                        price={price}
                        title={title}
                        id={id}
                      />
                    );
                  }
                )}
              </>
            )}
          </div>
          <div className="my-4 flex justify-end">
            <Pagination
              incrementPage={() => setCurrentPage(currentPage + 1)}
              decrementPage={() => setCurrentPage(currentPage - 1)}
              disablePrevious={currentPage === 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
