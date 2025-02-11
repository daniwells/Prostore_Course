import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
}

const  HomePage = async () => {
  const latestProducts = await getLatestProducts();
  
  return (
    <ProductList 
      data={latestProducts} 
      title="Newest Arrivals"
      limit={6}
    />
  )
}

export default HomePage;