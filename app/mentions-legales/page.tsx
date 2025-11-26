export default function MentionsLegales() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Mentions Légales
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
            <p>
              Le site web est édité par la société <strong>SAS Pepinillo</strong>, exploitant le restaurant <strong>Le Petit Collo</strong>.
            </p>
            <p className="mt-2">
              <strong>Raison sociale:</strong> SAS Pepinillo<br />
              <strong>SIREN:</strong> 991683087<br />
              <strong>Activité:</strong> Restauration traditionnelle (56.10A)<br />
              <strong>Adresse:</strong> 3 Cours Mirabeau, 83610 Collobrières, France
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Directeur de publication</h2>
            <p>
              Le directeur de la publication est <strong>Cyril Pichot</strong>, Président de la SAS Pepinillo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
            <p>
              Le site est hébergé par [Nom de l'hébergeur].<br />
              Adresse: [Adresse de l'hébergeur]<br />
              Téléphone: [Téléphone de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection des données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="mt-2">
              Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante: [À compléter]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter:<br />
              <strong>SAS Pepinillo</strong><br />
              3 Cours Mirabeau<br />
              83610 Collobrières, France<br />
              SIREN: 991683087
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

