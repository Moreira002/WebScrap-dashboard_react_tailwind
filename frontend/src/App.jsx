import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sellerFilter, setSellerFilter] = useState("Todos");

  useEffect(() => {
    fetch("http://localhost:8000/produtos")
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "ok" && Array.isArray(result.produtos)) {
          setData(result.produtos);
          setFilteredData(result.produtos);
        } else {
          console.error("Resposta inesperada da API:", result);
        }
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  useEffect(() => {
    if (sellerFilter === "Todos") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => item["Vendedor"] === sellerFilter)
      );
    }
  }, [sellerFilter, data]);

  const sellers = ["Todos", ...new Set(data.map((item) => item["Vendedor"]))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white px-6 py-10">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📦 Produtos do Mercado Livre
      </motion.h1>

      <div className="flex justify-center mb-6">
        <select
          className="bg-slate-800 rounded-2xl p-5 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,191,255,0.8)] border border-transparent hover:border-cyan-400"
          value={sellerFilter}
          onChange={(e) => setSellerFilter(e.target.value)}
        >
          {sellers.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 rounded-2xl p-5 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,191,255,0.8)] border border-transparent hover:border-cyan-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Imagem do produto */}
            {item["Imagem"] && (
              <img
                src={item["Imagem"]}
                alt={item["Produto"]}
                className="w-full h-64 object-cover rounded-xl mb-4 border border-cyan-400"
              />
            )}

            <h2 className="text-xl font-semibold mb-1">{item["Produto"]}</h2>
            <p className="text-gray-300 mb-1">
              💰 R$ {item["Preço (R$)"]} - {item["Vendedor"]}
            </p>
            <p className="text-sm mb-2">
              <a
                href={item["Link"]}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Ver no Mercado Livre
              </a>
            </p>
            <div className="flex items-center gap-1">
              <Star className="text-yellow-400 w-4 h-4" />
              <span className="text-sm">{item["Avaliação"]}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;

