import Header from '@/components/admin/Header';

export default function MenuManagement() {
  const handleAddItem = () => {
    // Placeholder - no functionality
    console.log('Add item clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Gestion du Menu" actionLabel="Ajouter un plat" onAction={handleAddItem} />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Liste des plats</h2>
          </div>
          <div className="p-8">
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-4">🍽️</div>
              <p className="text-lg mb-2">Aucun plat pour le moment</p>
              <p className="text-sm">Cliquez sur "Ajouter un plat" pour commencer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

