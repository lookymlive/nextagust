"use client";
import { useRouter } from "next/navigation";
 
 export default function login() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };


  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Login</h1>
      <button onClick={handleClick}>Ir al Home</button>
    </main>
    </>
    
  );
}
