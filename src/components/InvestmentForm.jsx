
import React, { useState } from "react";

export default function InvestmentForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", type: "", amount: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount || !form.date || !form.type) return;
    onAdd(form);
    setForm({ name: "", type: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow mb-6 grid gap-3 md:grid-cols-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="p-2 border rounded" />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Tipo (ex: Renda Fixa)" className="p-2 border rounded" />
      <input name="amount" value={form.amount} onChange={handleChange} type="number" placeholder="Valor (R$)" className="p-2 border rounded" />
      <input name="date" value={form.date} onChange={handleChange} type="date" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded col-span-2">Adicionar</button>
    </form>
  );
}
