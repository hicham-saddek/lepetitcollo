export default function Menu() {
  return (
    <div className="min-h-screen py-12">
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
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Salade de saison</h3>
                  <p className="text-gray-600 text-sm">Légumes frais du marché, vinaigrette maison</p>
                </div>
                <span className="text-gray-900 font-medium">12€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Soupe du jour</h3>
                  <p className="text-gray-600 text-sm">Préparée quotidiennement avec des produits frais</p>
                </div>
                <span className="text-gray-900 font-medium">9€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Terrine de campagne</h3>
                  <p className="text-gray-600 text-sm">Accompagnée de cornichons et pain de campagne</p>
                </div>
                <span className="text-gray-900 font-medium">11€</span>
              </div>
            </div>
          </section>

          {/* Plats Principaux */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Plats Principaux
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Filet de saumon</h3>
                  <p className="text-gray-600 text-sm">Sauce citronnée, légumes de saison, riz pilaf</p>
                </div>
                <span className="text-gray-900 font-medium">24€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Magret de canard</h3>
                  <p className="text-gray-600 text-sm">Sauce au miel, pommes de terre rôties</p>
                </div>
                <span className="text-gray-900 font-medium">26€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Risotto aux champignons</h3>
                  <p className="text-gray-600 text-sm">Champignons de saison, parmesan, truffe</p>
                </div>
                <span className="text-gray-900 font-medium">22€</span>
              </div>
            </div>
          </section>

          {/* Desserts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Desserts
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Tarte tatin</h3>
                  <p className="text-gray-600 text-sm">Pommes caramélisées, crème fraîche</p>
                </div>
                <span className="text-gray-900 font-medium">8€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Mousse au chocolat</h3>
                  <p className="text-gray-600 text-sm">Chocolat noir, chantilly</p>
                </div>
                <span className="text-gray-900 font-medium">7€</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Assiette de fromages</h3>
                  <p className="text-gray-600 text-sm">Sélection de fromages locaux</p>
                </div>
                <span className="text-gray-900 font-medium">10€</span>
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

