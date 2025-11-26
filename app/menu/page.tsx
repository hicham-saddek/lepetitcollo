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
          {/* Entrées */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Entrées
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Planche de charcuterie</h3>
                  <p className="text-gray-600 text-sm mb-1">Assortiment régional</p>
                  <p className="text-gray-500 text-xs italic">Goût salé délicat et fumé</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">15€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Salade burrata crémeuse</h3>
                  <p className="text-gray-600 text-sm mb-1">Burrata + tomates anciennes</p>
                  <p className="text-gray-500 text-xs italic">Goût frais, onctueux</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">14€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Velouté du marché</h3>
                  <p className="text-gray-600 text-sm mb-1">Légumes saison</p>
                  <p className="text-gray-500 text-xs italic">Goût doux et réconfortant</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">9€</span>
              </div>
            </div>
          </section>

          {/* Plats */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Plats
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Magret de canette</h3>
                  <p className="text-gray-600 text-sm mb-1">Viande tendre, sauce maison</p>
                  <p className="text-gray-500 text-xs italic">Goût intense, fondant</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">18€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Burger & frites maison</h3>
                  <p className="text-gray-600 text-sm mb-1">Bœuf Aubrac</p>
                  <p className="text-gray-500 text-xs italic">Juteux, gourmand</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">17€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Raviolis cèpes truffes</h3>
                  <p className="text-gray-500 text-xs italic">Goût boisé, parfum puissant</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">16€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Pièce du boucher cœur de rumsteak Aubrac</h3>
                  <p className="text-gray-500 text-xs italic">Goût robuste, persillé</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">21€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Plat du jour</h3>
                  <p className="text-gray-600 text-sm mb-1">Recette variable</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">18€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Pâtes carbonara</h3>
                  <p className="text-gray-600 text-sm mb-1">Traditionnelles</p>
                  <p className="text-gray-500 text-xs italic">Goût crémeux naturel</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">15€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Poisson du marché</h3>
                  <p className="text-gray-500 text-xs italic">Léger, précis</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">19€</span>
              </div>
            </div>
          </section>

          {/* Desserts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Desserts
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Tiramisu</h3>
                  <p className="text-gray-500 text-xs italic">Crémeux, équilibré</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">7€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Fondant chocolat</h3>
                  <p className="text-gray-500 text-xs italic">Intense et coulant</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">7€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Crème brûlée</h3>
                  <p className="text-gray-600 text-sm mb-1">Vanille bourbon</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">6€</span>
              </div>
            </div>
          </section>

          {/* Boissons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Boissons
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Vin rouge Collobrières L'Etrellan</h3>
                  <p className="text-gray-500 text-xs italic">Goût fruité rond</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">—</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Vin Domaine des Myrtes</h3>
                  <p className="text-gray-600 text-sm">Verre / Bouteille</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">4€ / 28€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Bière pression</h3>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">3,50€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Sodas</h3>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">3,50€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Café</h3>
                  <p className="text-gray-600 text-sm">Variations incluses</p>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">3€</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Thé infusion artisanale</h3>
                </div>
                <span className="text-gray-900 font-medium text-lg whitespace-nowrap">3,50€</span>
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

