import { useEffect, useState } from "react";
import productApi from "../api/productApi";

function useGetAllApi(nameProduct) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productApi.getAll(`${nameProduct}`);
        setProduct(response.data.rows);
        // console.log(response.data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameProduct]);

  return product;
}
export default useGetAllApi;
