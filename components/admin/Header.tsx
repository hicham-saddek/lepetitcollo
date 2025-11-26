'use client';

interface HeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function Header({ title, actionLabel, onAction }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {actionLabel && (
          <button
            onClick={onAction}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </header>
  );
}

