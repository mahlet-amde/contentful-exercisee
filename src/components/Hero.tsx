export default function Hero(hero: { eyebrow: string , title: string}) {
    return (
      <section className="w-full flex flex-col items-center justify-center text-center px-4 bg-black text-white mt-[100px]">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl mb-4 font-normal tracking-wide">{hero.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {hero.title}
          </h1>
        </div>
      </section>
    )
  }