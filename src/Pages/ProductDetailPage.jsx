import { useParams } from "react-router-dom";
import { useGetProductDetails } from "../hooks/products.hook";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductDetails(id);
  //   return <>{isLoading ? "loading" : data?.description}</>;
  return (
    <div className="grid h-screen place-items-center ">
      {isLoading ? (
        "loading...."
      ) : (
        <div className="flex h-[300px] gap-4 border">
          <div>
            <img src={`https://source.unsplash.com/random/300x300?sig=${id}`} />
          </div>
          <div className="flex w-[500px] flex-col justify-between border-l text-justify ">
            <div className="border-b text-xl font-bold">
              <h1>{data?.data?.data?.title}</h1>

              <p className="font-light">BRAND : {data?.data?.data?.brand}</p>
            </div>
            <div>
              <p className=" ">
                {data?.data?.data?.description.substring(0, 450)}
              </p>
            </div>

            <div className="border-t">{data?.data?.data?.price}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
