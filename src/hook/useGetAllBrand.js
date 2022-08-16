import { useEffect, useState } from "react";
import brandApi from "../api/brandApi";

function useGetAllBrand(nameBrand) {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await brandApi.getAllBrand(`${nameBrand}`);
        setBrand(response.data);
        // console.log(response.data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return brand;
}
export default useGetAllBrand;
