import React from "react";

const DiaRutina = ({ dia, ejercicios }) => (
  <section className="bg-white rounded-2xl shadow-md p-6 mb-8 transition-shadow hover:shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">{dia}</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-gray-800">
        <thead>
          <tr className="text-sm uppercase text-gray-500">
            <th className="pb-2 pr-4">Ejercicio</th>
            <th className="pb-2 pr-4">Series</th>
            <th className="pb-2 pr-4">Reps</th>
            <th className="pb-2 pr-4">Peso</th>
            <th className="pb-2 pr-4">Descanso</th>
          </tr>
        </thead>
        <tbody>
          {ejercicios.map((e, i) => (
            <tr key={i} className="even:bg-gray-50">
              <td className="py-3 pr-4">{e.ejercicio}</td>
              <td className="py-3 pr-4">{e.series}</td>
              <td className="py-3 pr-4">{e.repeticiones}</td>
              <td className="py-3 pr-4">{e.peso}</td>
              <td className="py-3 pr-4">{e.descanso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default DiaRutina;
