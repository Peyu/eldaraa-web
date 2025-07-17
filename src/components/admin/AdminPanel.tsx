import React, { useState } from 'react';

export default function AdminPanel() {
  const [titulo, setTitulo] = useState('');
  const [resumen, setResumen] = useState('');
  const [textoCompleto, setTextoCompleto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Acá iría tu lógica de guardado
    console.log({ titulo, resumen, textoCompleto });
  };

  return (
    <div className="min-h-screen bg-parchment text-inkblue p-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">Panel de Administración</h1>

      {/* Pestañas */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['Historia', 'Geografía', 'Línea de Tiempo', 'Árboles Genealógicos', 'Personajes'].map((tab) => (
          <button
            key={tab}
            className="bg-inkblue text-parchment px-4 py-2 rounded hover:bg-opacity-80 transition-all"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
          <textarea
            placeholder="Resumen"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full h-24"
          />
          <textarea
            placeholder="Texto completo"
            value={textoCompleto}
            onChange={(e) => setTextoCompleto(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full md:col-span-2 h-48"
          />
        </div>
        <div className="mt-4 text-right">
          <button
            type="submit"
            className="bg-inkblue text-parchment px-6 py-2 rounded hover:bg-opacity-80 transition-all"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
