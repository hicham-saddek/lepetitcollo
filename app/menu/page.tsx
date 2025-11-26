export default function Menu() {
  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Notre Menu
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez notre sélection de plats soigneusement préparés
          </p>
        </div>

        <div className="space-y-12">
          {/* Plats */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Plats
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Magret de canette</h3>
                </div>
                <span className="text-gray-900 font-medium">18€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Burger frites maison</h3>
                  <p className="text-gray-600 text-sm">Bœuf de l'Étubrac</p>
                </div>
                <span className="text-gray-900 font-medium">17€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Raviolis cèpes truffes</h3>
                </div>
                <span className="text-gray-900 font-medium">16€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Pièces du boucher</h3>
                  <p className="text-gray-600 text-sm">Cœur de rumsteak de l'Étubrac</p>
                </div>
                <span className="text-gray-900 font-medium">21€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Planche de charcuterie</h3>
                </div>
                <span className="text-gray-900 font-medium">15€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Plat du jour</h3>
                </div>
                <span className="text-gray-900 font-medium">18€</span>
              </div>
            </div>
          </section>

          {/* Boissons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Boissons
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Vin rouge de Collobrières</h3>
                  <p className="text-gray-600 text-sm">L'Étrellan</p>
                </div>
                <span className="text-gray-900 font-medium">—</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Vin domaine de myrtes</h3>
                  <p className="text-gray-600 text-sm">Verre / Bouteille</p>
                </div>
                <span className="text-gray-900 font-medium">4€ / 28€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Bière pression</h3>
                </div>
                <span className="text-gray-900 font-medium">3,50€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Sodas canette</h3>
                </div>
                <span className="text-gray-900 font-medium">3,50€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Café</h3>
                  <p className="text-gray-600 text-sm">Plusieurs variations au même prix</p>
                </div>
                <span className="text-gray-900 font-medium">3€</span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Les prix peuvent varier selon la saison et la disponibilité des produits.</p>
        </div>
      </div>
    </div>
  );
}

