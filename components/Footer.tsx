'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Le Petit Collo</h3>
            <p className="text-sm">
              Restaurant de restauration traditionnelle<br />
              3 Cours Mirabeau<br />
              83610 Collobrières, France
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-white transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SAS Pepinillo - Le Petit Collo. Tous droits réservés.</p>
          <p className="mt-1 text-xs text-gray-500">SIREN: 991683087</p>
        </div>
      </div>
    </footer>
  );
}

