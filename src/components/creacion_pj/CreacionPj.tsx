// src/components/creacion_pj/CreacionPj.tsx

import { createSignal } from 'solid-js';
import { API_ENDPOINTS } from '../../constants/api';

export default function CreacionPj() {
  const [step, setStep] = createSignal(1);
  const [personaje, setPersonaje] = createSignal({
    Nombre: '',
    NombreJugador: '',
    RazaId: null,
    SubrazaId: null,
    ClaseId: null,
    TrasfondoId: null,
    Alineamiento: '',
    Edad: null,
    Genero: '',
    Altura: '',
    Peso: '',
    ColorOjos: '',
    ColorCabello: '',
    ColorPiel: '',
    Deidad: '',
    HistoriaPersonal: ''
  });

  const avanzarPaso = () => setStep(step() + 1);
  const retrocederPaso = () => setStep(step() - 1);

  const enviarPersonaje = async () => {
    const res = await fetch(API_ENDPOINTS.personaje, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(personaje())
    });
    if (res.ok) alert('Personaje creado con éxito');
    else alert('Error al crear personaje');
  };

  return (
    <main className="min-h-screen max-w-4xl mx-auto bg-[url('/assets/pergamino-textura.png')] bg-no-repeat bg-cover border border-parchment shadow-xl rounded-xl p-10 text-inkblue flex flex-col">
      <h1 className="text-4xl font-old mb-8 border-b border-parchment pb-2 tracking-wide text-center drop-shadow-sm">Creación de Personaje - Paso {step()}</h1>

      <form className="flex-1 flex flex-col justify-between gap-10">
        {step() === 1 && (
          <section className="flex flex-col gap-6">
            <div>
              <label className="block font-old text-lg text-inkblue mb-1">Nombre</label>
              <input className="w-full border border-parchment rounded p-3 bg-white shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Nombre: e.currentTarget.value })} />
            </div>
            <div>
              <label className="block font-old text-lg text-inkblue mb-1">Nombre del Jugador</label>
              <input className="w-full border border-parchment rounded p-3 bg-white shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), NombreJugador: e.currentTarget.value })} />
            </div>
            <div className="flex justify-end">
              <button type="button" className="bg-inkblue text-white px-6 py-2 rounded shadow hover:bg-blue-900 transition" onClick={avanzarPaso}>Siguiente</button>
            </div>
          </section>
        )}
         {step() === 2 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div><label className="font-old">Alineamiento</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Alineamiento: e.currentTarget.value })} /></div>
            <div><label className="font-old">Edad</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="number" onInput={e => setPersonaje({ ...personaje(), Edad: parseInt(e.currentTarget.value) })} /></div>
            <div><label className="font-old">Género</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Genero: e.currentTarget.value })} /></div>
            <div><label className="font-old">Altura</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Altura: e.currentTarget.value })} /></div>
            <div><label className="font-old">Peso</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Peso: e.currentTarget.value })} /></div>
            <div><label className="font-old">Color de Ojos</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), ColorOjos: e.currentTarget.value })} /></div>
            <div><label className="font-old">Color de Cabello</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), ColorCabello: e.currentTarget.value })} /></div>
            <div><label className="font-old">Color de Piel</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), ColorPiel: e.currentTarget.value })} /></div>
            <div><label className="font-old">Deidad</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Deidad: e.currentTarget.value })} /></div>
            <div className="col-span-full flex justify-between">
              <button type="button" className="bg-gray-300 px-6 py-2 rounded shadow" onClick={retrocederPaso}>Atrás</button>
              <button type="button" className="bg-inkblue text-white px-6 py-2 rounded shadow hover:bg-blue-900 transition" onClick={avanzarPaso}>Siguiente</button>
            </div>
          </section>
        )}
        {step() === 3 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div><label className="font-old">Raza ID</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="number" onInput={e => setPersonaje({ ...personaje(), RazaId: parseInt(e.currentTarget.value) })} /></div>
            <div><label className="font-old">Subraza ID</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="number" onInput={e => setPersonaje({ ...personaje(), SubrazaId: parseInt(e.currentTarget.value) })} /></div>
            <div><label className="font-old">Clase ID</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="number" onInput={e => setPersonaje({ ...personaje(), ClaseId: parseInt(e.currentTarget.value) })} /></div>
            <div><label className="font-old">Trasfondo ID</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="number" onInput={e => setPersonaje({ ...personaje(), TrasfondoId: parseInt(e.currentTarget.value) })} /></div>
            <div className="col-span-full flex justify-between">
              <button type="button" className="bg-gray-300 px-6 py-2 rounded shadow" onClick={retrocederPaso}>Atrás</button>
              <button type="button" className="bg-inkblue text-white px-6 py-2 rounded shadow hover:bg-blue-900 transition" onClick={avanzarPaso}>Siguiente</button>
            </div>
          </section>
        )}
        {step() === 4 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div><label className="font-old">Color de Ojos</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), ColorOjos: e.currentTarget.value })} /></div>
            <div><label className="font-old">Color de Cabello</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), ColorCabello: e.currentTarget.value })} /></div>
            <div><label className="font-old">Color de Piel</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), ColorPiel: e.currentTarget.value })} /></div>
            <div><label className="font-old">Deidad</label><input className="w-full border border-parchment rounded p-3 shadow-inner" type="text" onInput={e => setPersonaje({ ...personaje(), Deidad: e.currentTarget.value })} /></div>
            <div className="col-span-full flex justify-between">
              <button type="button" className="bg-gray-300 px-6 py-2 rounded shadow" onClick={retrocederPaso}>Atrás</button>
              <button type="button" className="bg-inkblue text-white px-6 py-2 rounded shadow hover:bg-blue-900 transition" onClick={avanzarPaso}>Siguiente</button>
            </div>
          </section>
        )}
        {step() === 5 && (
          <section className="flex flex-col gap-6 flex-1 justify-between">
            <div>
              <label className="font-old text-lg">Historia Personal</label>
              <textarea className="w-full border border-parchment rounded p-3 h-48 bg-white shadow-inner" onInput={e => setPersonaje({ ...personaje(), HistoriaPersonal: e.currentTarget.value })}></textarea>
            </div>
            <div className="flex justify-between">
              <button type="button" className="bg-gray-300 px-6 py-2 rounded shadow" onClick={retrocederPaso}>Atrás</button>
              <button type="button" className="bg-green-700 text-white px-6 py-2 rounded shadow hover:bg-green-800 transition" onClick={enviarPersonaje}>Finalizar y Crear Personaje</button>
            </div>
          </section>
        )}
      </form>
    </main>
  );
}