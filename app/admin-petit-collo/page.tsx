import Header from '@/components/admin/Header';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Tableau de bord" />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vue d'ensemble</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-2">🍽️</div>
              <div className="text-2xl font-semibold text-gray-900">—</div>
              <div className="text-sm text-gray-600 mt-1">Plats au menu</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-2xl font-semibold text-gray-900">—</div>
              <div className="text-sm text-gray-600 mt-1">Réservations</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-2">🖼️</div>
              <div className="text-2xl font-semibold text-gray-900">—</div>
              <div className="text-sm text-gray-600 mt-1">Images en galerie</div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h3>
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
              <p>Aucune activité récente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

