export default function Accueil() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
              Le Petit Collo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Une expérience culinaire raffinée dans une atmosphère chaleureuse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Découvrir le menu
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Réserver une table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cuisine Authentique</h3>
              <p className="text-gray-600">
                Des plats préparés avec des ingrédients frais et locaux, dans le respect des traditions culinaires.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Carte des Vins</h3>
              <p className="text-gray-600">
                Une sélection soignée de vins pour accompagner parfaitement chaque plat.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ambiance Élégante</h3>
              <p className="text-gray-600">
                Un cadre raffiné et accueillant pour vos moments de convivialité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
