
import React from "react";

export default function Dashboard({ investments }) {
  const total = investments.reduce((sum, inv) => sum + Number(inv.amount), 0);

  return (
    <section className="my-4">
      <h2 className="text-lg font-semibold mb-2">Resumo</h2>
      <div className="bg-white shadow p-4 rounded-md">
        <p>Total Investido: <strong>R$ {total.toFixed(2)}</strong></p>
        <p>Quantidade de Investimentos: <strong>{investments.length}</strong></p>
      </div>
    </section>
  );
}
