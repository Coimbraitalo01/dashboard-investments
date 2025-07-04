
import React from "react";

export default function InvestmentList({ investments }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Investimentos</h2>
      <ul className="grid gap-3">
        {investments.map(inv => (
          <li key={inv.id} className="bg-white p-3 rounded shadow">
            <p><strong>{inv.name}</strong> ({inv.type})</p>
            <p>Valor: R$ {Number(inv.amount).toFixed(2)}</p>
            <p>Data: {inv.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
