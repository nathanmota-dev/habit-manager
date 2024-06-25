import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
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
