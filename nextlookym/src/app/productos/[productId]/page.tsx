export default function productD(
  { params } : {
    params: {
      productId: string;
    } 
  }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Producto.{params.productId}</h1>
    </main>
  );
}