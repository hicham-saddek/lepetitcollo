export default function APropos() {
  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            À propos
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-gray-700 leading-relaxed">
              Le Petit Collo, situé au cœur de Collobrières, opère sous une nouvelle direction depuis 2025. 
              Après la reprise du fonds de commerce, la société SAS Pepinillo, dirigée par Cyril Pichot, 
              a repris les rênes de ce restaurant de restauration traditionnelle avec l'ambition de perpétuer 
              l'excellence culinaire dans une atmosphère chaleureuse et raffinée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Philosophie</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous croyons en une cuisine qui respecte les produits, les saisons et les traditions. Chaque plat 
              est préparé avec soin, en utilisant des ingrédients frais et locaux, pour vous offrir une expérience 
              culinaire mémorable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-gray-700 leading-relaxed">
              Notre équipe de chefs passionnés et notre personnel attentionné travaillent ensemble pour vous 
              garantir un service d'exception. Chaque membre de notre équipe partage notre engagement envers 
              l'excellence et l'accueil chaleureux.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos Valeurs</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Respect des produits et des producteurs locaux</li>
              <li>Excellence dans chaque détail</li>
              <li>Accueil chaleureux et service personnalisé</li>
              <li>Engagement envers la qualité et l'authenticité</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

