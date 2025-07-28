// app/components/Features.tsx
export default function Features() {
  return (
    <section className="w-full max-w-6xl py-16 grid gap-10 md:grid-cols-3 text-center">
      <div>
        <image xlinkHref="/images/pexels-cottonbro-9419224.jpg" height="Banda de jazz tocando" className="rounded-xl shadow-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Aulas em Grupo</h3>
        <p className="text-gray-600">Aprenda com outros alunos em ensaios e apresentações reais.</p>
      </div>
      
      <div>
        <image xlinkHref="/images/pexels-aleksandr-neplokhov-486399-2601215.jpg" height="Banda de garagem se apresentando" className="rounded-xl shadow-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Ambiente Jovem</h3>
        <p className="text-gray-600">Turmas para adolescentes e jovens com foco em criatividade.</p>
      </div>
      <div>
        <image xlinkHref="/images/pexels-kseniachernaya-8535230.jpg" height="Crianças aprendendo música" className="rounded-xl shadow-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Cursos para Crianças</h3>
        <p className="text-gray-600">Metodologia lúdica que estimula o amor pela música desde cedo.</p>
      </div>
    </section>
  );
}

