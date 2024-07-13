import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-auto text-white gap-4">
      <Navbar />
      <div className="pt-20">
        <Image src="/task.svg" alt="Logo" width={400} height={200} />
      </div>
      <div className="pt-6">
        <h1 className="text-white text-3xl">
          Monitore seus <span className="text-[#45EDAD]">hábitos</span> de uma vez
        </h1>
        <p className="text-sm pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, Nobis fuga amet et accusamus quod vitae id voluptatibus.</p>
      </div>
      <Link href="/login">
        <button className="bg-[#45EDAD] text-neutral-900 p-2 rounded text-xl mt-2">Começe agora</button>
      </Link>
    </div >
  );
}
