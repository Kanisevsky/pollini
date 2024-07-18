import Image from 'next/image';

export default function Home() {
  return (
    <main
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpeg')" }}
    ></main>
  );
}
