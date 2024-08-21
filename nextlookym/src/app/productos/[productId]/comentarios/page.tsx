export default function Comentarios( 
  { params } : { params: { 
    productId: string;
    comentarioId: string;

   } } ) {   

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Comentarios.{params.comentarioId}.del.Producto.{params.productId}</h1>
    </main>
  );
}