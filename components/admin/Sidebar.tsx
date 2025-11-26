'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const menuItems = [
    { href: '/admin-petit-collo', label: 'Tableau de bord', icon: '📊' },
    { href: '/admin-petit-collo/menu', label: 'Menu', icon: '🍽️' },
    { href: '/admin-petit-collo/gallery', label: 'Galerie', icon: '🖼️' },
    { href: '/admin-petit-collo/reservations', label: 'Réservations', icon: '📅' },
    { href: '/admin-petit-collo/settings', label: 'Paramètres', icon: '⚙️' },
  ];

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsLoggingOut(false);
      router.push('/admin-petit-collo/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-serif">Le Petit Collo</h2>
        <p className="text-sm text-gray-400 mt-1">Administration</p>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>Retour au site</span>
        </Link>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-50"
        >
          <span>🚪</span>
          <span>{isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}</span>
        </button>
      </div>
    </aside>
  );
}

