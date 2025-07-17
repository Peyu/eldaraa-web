import React from 'react';

export default function Sidebar() {
  const sections = ['Historia', 'Geografía', 'Línea de Tiempo', 'Árboles Genealógicos', 'Personajes'];

  return (
    <aside className="w-64 bg-inkblue text-parchment p-6 space-y-4 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin</h2>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section}
            className="block w-full text-left px-4 py-2 rounded hover:bg-parchment hover:text-inkblue transition"
          >
            {section}
          </button>
        ))}
      </nav>
    </aside>
  );
}
