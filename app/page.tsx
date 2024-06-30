import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white gap-4">
      <div>
        <Link href="/login">
          Página de Login
        </Link>
      </div>
      <div>
        <Link href="/register">
          Página de Registro
        </Link>
      </div>
    </div >
  );
}
