"use client";

import React, { useState } from "react";

export default function TokenListingPage() {
  // Стейты для полей формы
  const [tokenName, setTokenName] = useState<string>("");
  const [tokenSymbol, setTokenSymbol] = useState<string>("");
  const [blockchain, setBlockchain] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [whitepaper, setWhitepaper] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Логика обработки и отправки формы листинга на сервер
    console.log({
      tokenName,
      tokenSymbol,
      blockchain,
      contractAddress,
      website,
      whitepaper,
      telegram,
      twitter,
      description,
    });
  };

  return (
    <div className="min-h-screen text-colorall font-sans p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-7xl p-6 md:p-10 shadow-2xl">
        <h1 className="text-[58px] font-semibold tracking-tight mb-6 text-center md:text-left">
          Token Listing
        </h1>

        <section className="mb-10 text-lg md:text-sm text-color space-y-4  pb-8">
          <p className="leading-7">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure
          </p>
          <p className="leading-7">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae.
          </p>
        </section>
        <section className="mb-10 text-lg md:text-sm text-color space-y-4  pb-8">
          <h2 className="text-[32px] font-semibold text-colorall mb-6">
            Terms of Applying Token -
          </h2>
          <p className="leading-7">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best.
          </p>
          <nav className="flex justify-center itmes-center gap-10 mx-6 max-w-7xl">
            <ul className="text-xl leading-8 list-disc">
              <li className="">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </li>
              <li>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
            </ul>
            <ul className="text-xl leading-8 list-disc">
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </li>
              <li>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </li>
            </ul>
          </nav>
          <p className="leading-7">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-[36px] font-semibold text-colorall mb-6">
              Listing Application Form
            </h2>
            <p className="text-2xl font-semibold text-colorall mb-6">
              Personal Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <label
                  htmlFor="tokenName"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="tokenName"
                  type="text"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="tokenSymbol"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Mobile *
                </label>
                <input
                  id="tokenSymbol"
                  type="text"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Blockchain Network */}
              <div>
                <label
                  htmlFor="blockchain"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="blockchain"
                  type="text"
                  value={blockchain}
                  onChange={(e) => setBlockchain(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Smart Contract Address */}
              <div>
                <label
                  htmlFor="contractAddress"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Name of Token *
                </label>
                <input
                  id="contractAddress"
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Official Website */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Token Code *
                </label>
                <input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Whitepaper URL */}
              <div>
                <label
                  htmlFor="whitepaper"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Token Project *
                </label>
                <input
                  id="whitepaper"
                  type="url"
                  value={whitepaper}
                  onChange={(e) => setWhitepaper(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <p className="text-2xl font-semibold text-colorall mt-10 mb-6">
              Technical Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <label
                  htmlFor="tokenName"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Category of Project
                </label>
                <input
                  id="tokenName"
                  type="text"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="tokenSymbol"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Problem
                </label>
                <input
                  id="tokenSymbol"
                  type="text"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Blockchain Network */}
              <div>
                <label
                  htmlFor="blockchain"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Describe of Token
                </label>
                <input
                  id="blockchain"
                  type="text"
                  value={blockchain}
                  onChange={(e) => setBlockchain(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Smart Contract Address */}
              <div>
                <label
                  htmlFor="contractAddress"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Protocol of Token
                </label>
                <input
                  id="contractAddress"
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Official Website */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Wallet Holder
                </label>
                <input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Whitepaper URL */}
              <div>
                <label
                  htmlFor="whitepaper"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Contract Address
                </label>
                <input
                  id="whitepaper"
                  type="url"
                  value={whitepaper}
                  onChange={(e) => setWhitepaper(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="whitepaper"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Employees Working on Project
                </label>
                <input
                  id="whitepaper"
                  type="url"
                  value={whitepaper}
                  onChange={(e) => setWhitepaper(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="whitepaper"
                  className="block text-base leading-6 text-colorall mb-2"
                >
                  Category
                </label>
                <input
                  id="whitepaper"
                  type="url"
                  value={whitepaper}
                  onChange={(e) => setWhitepaper(e.target.value)}
                  placeholder="Type Here"
                  required
                  className="w-full rounded-md px-4 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Кнопка отправки формы */}
          <div className="flex justify-center items-center md:justify-center pt-4">
            <button
              type="submit"
              className="w-full md:w-56 rounded-md bg-[#2563eb] hover:bg-blue-600 py-4 text-xl leading-8 font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
