import Image from 'next/image';

// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full max-w-5xl py-20 text-center">


 <h1 className="text-5xl font-bold mb-4">Desperte Seu Talento Musical</h1>
      <p className="text-lg text-gray-600 mb-6">
        Cursos de canto, guitarra, piano, bateria e muito mais. Para todas as idades!
      </p>
     <div className="flex justify-between space-x-4">
      <div className="w-1/2">
      
      <Image
  src="/images/pexels-pic-matti-450440252-33122356.jpg"
  alt="Aluno cantando em show ao vivo"
  width={400}
  height={130}
  className="mx-auto mb-6 rounded-xl shadow-lg object-cover"
  priority
/>
  </div>
    <div className="w-1/2">
<Image
  src="/images/pexels-cottonbro-9419224.jpg"
  alt="Banda de jazz tocando"
      width={300}
    height={100}
  className="mx-auto mb-6 rounded-xl shadow-lg object-cover"
  priority
/>
</div>



    <div className="w-1/2">
<Image
  src="/images/pexels-kseniachernaya-8535230.jpg"
  alt="Cursos para Crianças"
      width={300}
    height={100}
  className="mx-auto mb-6 rounded-xl shadow-lg object-cover"
  priority
/>
</div>

    <div className="w-1/2">
<Image
  src="/images/pexels-aleksandr-neplokhov-486399-2601215.jpg"
  alt="Ambiente Jovem"
      width={300}
    height={100}
  className="mx-auto mb-6 rounded-xl shadow-lg object-cover"
  priority
/>
</div>

</div>
        <a
        href="#contato"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
      >
        Matricule-se Agora
      </a>
      
    </section>
  );
}
