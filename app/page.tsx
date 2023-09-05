'use client'
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Screen1 from "@/components/ui/SCREEN1";
import Screen2 from "@/components/ui/SCREEN2";
import Screen3 from "@/components/ui/SCREEN3";
import Screen4 from "@/components/ui/SCREEN4";
import client from "./sanityClient/sanity";
import { useProducts,useUpdateProduct } from "./CONTEXT/productsContext";
import { useSession } from "./CONTEXT/USER";

const builder = imageUrlBuilder(client);

export default function Home() {
  const products = useProducts();
  const {sessionValue} = useSession();
  const updateProduct = useUpdateProduct();
  interface Product {
  picture: string
  name: string;
  category: string;
  price: string;
  discount: string;
  gender: string;
  priority: string;
  productNumber: string;
}
  const [dataSet, setDataSet] = useState<Product[]>([]); // Initialize with an empty array of products
console.log("i am session value", sessionValue);
  useEffect(() => {
    // Fetch data from Sanity
    client
      .fetch(`*[_type == 'Product']`)
      .then((data) => {
        console.log("Fetched data:", data);
        setDataSet(data);
      })
      .catch((error) => {
        console.error("Error fetching data from Sanity:", error);
      });
  }, []);



   function convertProducts(input: any[]): Product[] {
    const convertedProducts: Product[] = [];
    for (const product of input) {
      function urlFor(source:any) {
        return builder.image(source)
      }
      // console.log("image here",product.picture.asset["_ref"]);
      console.log("PRODUCTS here",product);
      const convertedProduct: Product = {
        // picture: builder.image('image-dcd5735df12122cb7b9b87d8cfbf324f16ebb604-500x500-png').width(500).url(),
        picture: builder.image(product.picture.asset?._ref).width(500).url(),
        // picture: String(product.picture.asset?._ref),
        name: product.name,
        category: product.category,
        price: product.price,
        discount: product.discount,
        gender: product.gender,
        priority: product.priority,
        productNumber: product.productNumber,
      };
      convertedProducts.push(convertedProduct);
    }
    return convertedProducts;
  }

  useEffect(() => {
    // Convert fetched data to desired format
    async function fetchAndConvertData() {
      try {
        const initialProducts: Product[] = convertProducts(dataSet);
        if(initialProducts.length > 0) {
          updateProduct(initialProducts);
        }
      } catch (error) {
        console.error("Error converting data:", error);
      }
    }

    fetchAndConvertData();
  }, [dataSet]);

  return (
    <div className="flex-1 flex flex-col">
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
    </div>
  );
}
