"use client";
import Image from "next/image";
import Link from "next/link";

export default function Trade() {
  const BTC = [
    {
      coin: "BTC / Bitcoin",
      name: [
        "Current Price",
        "24h Chage",
        "24h Low",
        "24h High",
        "24h Volume (BTC)",
      ],
      price: "₹ 28,654,25.52",
      chage: " + ₹  2564.24",
      change: " 5.76%",
      Low: " ₹ 26,854,94.79",
      High: " ₹ 29,985,75.24",
      volume: "₹ 2,216,846,568.49",
    },
  ];

  return (
    <header className="min-h-screen ">
      <main className="grid grid-cols-[1fr_300px] gap-6 mx-12.5 my-6">
        {BTC.map((item, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="grid grid-cols-[200px_1fr] gap-6">
              <div className="flex justify-center items-center gap-2 bg-zinc-800 p-4 rounded-lg">
                <Image
                  src="/BookmarkSimple.svg"
                  alt="Описание картинки"
                  width={18}
                  height={18}
                />
                <span>{item.coin}</span>
                <Image
                  src="/arrowDown.svg"
                  alt="Описание картинки"
                  width={18}
                  height={18}
                  className="ml-6"
                />
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg"></div>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg h-100"></div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800 p-4 rounded-lg"></div>
              <div className="bg-zinc-800 p-4 rounded-lg"></div>
            </div>
          </div>
        ))}

        <aside className="bg-zinc-800 p-4 rounded-lg"></aside>
      </main>
      <div className="my-15"></div>
    </header>
  );
}
