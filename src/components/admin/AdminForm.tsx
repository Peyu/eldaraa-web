import React, { useState } from 'react';

export default function AdminForm() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, summary, content });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded shadow-lg border border-gray-300">
      <h2 className="text-2xl font-bold mb-6">Panel de Administración</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Título</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título del contenido"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Resumen</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            rows={3}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Breve resumen del contenido"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Contenido completo</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Texto completo para mostrar en la web"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-inkblue text-parchment px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
