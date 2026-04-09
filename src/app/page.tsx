const spots = [
  {
    category: 'Vue mer',
    name: 'Le Petit Nice Passedat',
    address: '17 Rue des Braves, 13007 Marseille',
    description:
      'Adresse iconique face à la Méditerranée, avec une cuisine d’exception et un cadre ultra raffiné pour un dîner mémorable.',
  },
  {
    category: 'Bistronomie',
    name: 'Chez Fonfon',
    address: '140 Rue du Vallon des Auffes, 13007 Marseille',
    description:
      'Un classique du Vallon des Auffes pour savourer une bouillabaisse et profiter de l’un des plus beaux coins de Marseille.',
  },
  {
    category: 'Ambiance cool',
    name: 'La Caravelle',
    address: '34 Quai du Port, 13002 Marseille',
    description:
      'Bar-restaurant avec une vue superbe sur le Vieux-Port, parfait pour un apéro au coucher du soleil ou un dîner décontracté.',
  },
  {
    category: 'Poisson & local',
    name: 'L’Épuisette',
    address: 'Rue des Braves, Vallon des Auffes, 13007 Marseille',
    description:
      'Table mythique pour les amateurs de produits de la mer, nichée dans un décor spectaculaire au bord de l’eau.',
  },
  {
    category: 'Chic',
    name: 'AM par Alexandre Mazzia',
    address: '9 Rue François Rocca, 13008 Marseille',
    description:
      'Une expérience gastronomique créative et très recherchée, pour ceux qui veulent une adresse vraiment inoubliable.',
  },
  {
    category: 'Décontracté',
    name: 'Le Café des Épices',
    address: '4 Rue du Lacydon, 13002 Marseille',
    description:
      'Petit spot chaleureux du Panier, idéal pour manger simplement, bien, et profiter du charme des ruelles marseillaises.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#2d2d2d]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,32,47,0.78),rgba(18,32,47,0.45)),url('https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
        <div className="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-6 py-16 sm:px-10 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f7d9b6]">
            Marseille · Adresses à ne pas rater
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            Les meilleurs spots de Marseille, au même endroit.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Une sélection de lieux cools pour dîner, boire un verre ou profiter de la ville,
            avec l’adresse et une courte description pour choisir vite.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b06b3f]">
              Sélection
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Des adresses pour toutes les envies</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#5f5a55] sm:text-right">
            Du Vieux-Port au Vallon des Auffes, voici des spots connus pour leur cadre, leur cuisine
            ou leur ambiance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {spots.map((spot) => (
            <article
              key={spot.name}
              className="group rounded-3xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#f7eadc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b06b3f]">
                {spot.category}
              </div>
              <h3 className="text-2xl font-semibold leading-tight">{spot.name}</h3>
              <p className="mt-3 text-sm font-medium text-[#7b6f66]">{spot.address}</p>
              <p className="mt-4 text-base leading-7 text-[#4d4844]">{spot.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#6a625c] sm:px-10 lg:px-12">
          Guide rapide des meilleurs spots à Marseille — parfait pour préparer une sortie ou un dîner.
        </div>
      </footer>
    </main>
  );
}
