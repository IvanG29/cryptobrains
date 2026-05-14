"use client";

import React, { useState } from "react";

// Типизация для записей в Order Book
interface OrderBookEntry {
  price: string;
  amount: string;
  total: string;
}

export default function TradeBlock() {
  const [activeTab, setActiveTab] = useState<
    "buy" | "sell" | "watchlist" | "portfolio" | "open_order"
  >("buy");
  const [buyPrice, setBuyPrice] = useState<string>("28424.11");
  const [buyAmount, setBuyAmount] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("28424.11");
  const [sellAmount, setSellAmount] = useState<string>("");

  // Демо-данные для биржевого стакана (Order Book)
  const asks: OrderBookEntry[] = [
    { price: "28426.50", amount: "0.002224", total: "2,323,241.11" },
    { price: "28425.00", amount: "0.015400", total: "1,123,450.00" },
    { price: "28424.80", amount: "0.124500", total: "984,210.50" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
    { price: "28424.30", amount: "0.056000", total: "431,110.00" },
  ];

  const bids: OrderBookEntry[] = [
    { price: "28423.90", amount: "0.089000", total: "843,211.00" },
    { price: "28423.10", amount: "0.412000", total: "1,532,400.00" },
    { price: "28422.50", amount: "0.004500", total: "231,100.20" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
    { price: "28421.00", amount: "0.945000", total: "3,111,450.00" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 text-white font-sans min-h-screen">
      {/* ЛЕВАЯ ЧАСТЬ: График, Статистика и Формы сделок */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Тикер и Статистика 24ч */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-[#12131a] border border-gray-800 rounded-xl p-4 text-xs">
          <div>
            <div className="text-gray-400 font-medium mb-1">Bitcoin / BTC</div>
            <div className="text-base font-bold">¥ 123,412.50</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium mb-1">24h Change</div>
            <div className="text-emerald-500 font-bold">+1.25%</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium mb-1">24h High</div>
            <div className="font-bold">¥ 28,654.10</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium mb-1">24h Low</div>
            <div className="font-bold">¥ 28,110.30</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium mb-1">
              24h Volume (BTC)
            </div>
            <div className="font-bold">122,541.50 BTC</div>
          </div>
        </div>
        <div className="h-80 bg-[#12131a] border border-gray-800 rounded-xl p-4 flex flex-col relative overflow-hidden">
          <div className="text-sm font-semibold text-gray-400">
            Bitcoin Chart (BTC/USD)
          </div>
        </div>

        <div className="flex gap-2 border-b border-gray-800 text-sm">
          {(
            ["buy", "sell", "watchlist", "portfolio", "open_order"] as const
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-3 font-medium capitalize border-b-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.replace("_", " ")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#12131a] border border-gray-800 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs mb-4">
                <span className="text-emerald-500 font-bold uppercase">
                  Buy BTC
                </span>
                <span className="text-gray-400">Available: 0.1241 BTC</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(e.target.value)}
                    className="w-full bg-[#0b0c10] border border-gray-800 rounded-md px-3 py-2 text-sm focus:border-blue-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">
                    Amount (BTC)
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    className="w-full bg-[#0b0c10] border border-gray-800 rounded-md px-3 py-2 text-sm focus:border-blue-500 outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 text-[10px] text-center text-gray-400">
                {["25%", "50%", "75%", "100%"].map((pct) => (
                  <button
                    key={pct}
                    className="bg-[#0b0c10] border border-gray-800 rounded-sm py-1 hover:text-white hover:border-gray-600 transition-colors cursor-pointer"
                  >
                    {pct}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-500 transition-colors py-3 rounded-lg text-sm font-bold mt-6 cursor-pointer">
              Buy BTC
            </button>
          </div>

          <div className="bg-[#12131a] border border-gray-800 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs mb-4">
                <span className="text-red-500 font-bold uppercase">
                  Sell BTC
                </span>
                <span className="text-gray-400">Available: ¥ 2,341,211.00</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    className="w-full bg-[#0b0c10] border border-gray-800 rounded-md px-3 py-2 text-sm focus:border-blue-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">
                    Amount (BTC)
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={sellAmount}
                    onChange={(e) => setSellAmount(e.target.value)}
                    className="w-full bg-[#0b0c10] border border-gray-800 rounded-md px-3 py-2 text-sm focus:border-blue-500 outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 text-[10px] text-center text-gray-400">
                {["25%", "50%", "75%", "100%"].map((pct) => (
                  <button
                    key={pct}
                    className="bg-[#0b0c10] border border-gray-800 rounded-sm py-1 hover:text-white hover:border-gray-600 transition-colors cursor-pointer"
                  >
                    {pct}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-500 transition-colors py-3 rounded-lg text-sm font-bold mt-6 cursor-pointer">
              Sell BTC
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-80 bg-[#12131a] border border-gray-800 rounded-xl p-4 flex flex-col text-xs">
        <div className="text-sm font-semibold mb-4 text-gray-400">
          Order Book
        </div>

        <div className="grid grid-cols-3 text-gray-500 font-medium pb-2 border-b border-gray-800 mb-2">
          <div>Price (USD)</div>
          <div className="text-right">Amount</div>
          <div className="text-right">Total</div>
        </div>

        <div className="space-y-1">
          {asks.map((ask, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 hover:bg-gray-800/30 py-0.5 rounded-sm transition-colors"
            >
              <div className="text-red-500 font-medium">{ask.price}</div>
              <div className="text-right text-gray-400">{ask.amount}</div>
              <div className="text-right text-gray-400">{ask.total}</div>
            </div>
          ))}
        </div>

        <div className="my-4 py-2 border-y border-gray-800/60 text-center">
          <span className="text-base font-bold text-emerald-500">28424.11</span>
          <span className="text-gray-500 ml-2">¥ 123,412.50</span>
        </div>

        <div className="space-y-1">
          {bids.map((bid, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 hover:bg-gray-800/30 py-0.5 rounded-sm transition-colors"
            >
              <div className="text-emerald-500 font-medium">{bid.price}</div>
              <div className="text-right text-gray-400">{bid.amount}</div>
              <div className="text-right text-gray-400">{bid.total}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
