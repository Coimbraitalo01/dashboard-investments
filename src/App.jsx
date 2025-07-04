export default function App() {
  return (
    <div className="min-h-screen">
      <header className="xp-header">
        <h1 className="text-3xl font-bold">Bem-vindo ao seu Painel de Investimentos</h1>
      </header>

      <main className="container mx-auto p-4">
        <section className="xp-card">
          <h2 className="text-2xl font-semibold mb-6">Resumo</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-400 mb-1">Total Investido</p>
              <p className="xp-highlight text-3xl">R$ 15.000,00</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Quantidade</p>
              <p className="xp-highlight text-3xl">2 investimentos</p>
            </div>
          </div>

          <div className="xp-divider"></div>
          
          <h3 className="font-medium text-lg mb-4">Novo Investimento</h3>
          <ul className="space-y-3 text-gray-300">
            {['Nome', 'Tipo (ex: Renda Fixa)', 'Valor (R$)', 'Data (dd/mm/aaaa)'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 rounded border-gray-600 bg-gray-700 focus:ring-yellow-500"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="xp-card mt-6">
          <h2 className="text-2xl font-semibold mb-6">Seus Investimentos</h2>
          
          {/* Tesouro Direto */}
          <div className="mb-8 pb-6 border-b border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Tesouro Direto</h3>
              <span className="xp-badge fixed-income">Renda Fixa</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Valor</p>
                <p className="xp-highlight">R$ 10.000,00</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Data</p>
                <p>01/08/2024</p>
              </div>
            </div>
          </div>
          
          {/* Ações PETRA */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Ações PETRA</h3>
              <span className="xp-badge variable-income">Renda Variável</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Valor</p>
                <p className="xp-highlight">R$ 5.000,00</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Variação (24h)</p>
                <p className="text-green-400">+1,25%</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}