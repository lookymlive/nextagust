import { products } from "./data";

export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function POST( request: Request ) {
  const product = await request.json();
  const newProduct = {
    id: products.length + 1,
    products: product.name 
  };
  products.push(newProduct);

  return new Response(JSON.stringify(newProduct), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    
  });
}
