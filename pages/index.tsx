import { ArrowTopRightOnSquareIcon, ArrowUpIcon, CubeTransparentIcon, ArrowUpOnSquareStackIcon, ArrowUpRightIcon, CircleStackIcon, MinusCircleIcon, PlusCircleIcon, ArrowDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ETHShard from "../components/ETHShard";
import FAQ from "../components/FAQ";
import Header from "../components/Header";

export default function Home() {
  const [showFAQ2, setShowFAQ2] = useState(false);
  const toggleFAQ2 = () => {
    setShowFAQ2(!showFAQ2);
  };
  const [showFAQ3, setShowFAQ3] = useState(false);
  const toggleFAQ3 = () => {
    setShowFAQ3(!showFAQ3);
  };
  const [showFAQ4, setShowFAQ4] = useState(false);
  const toggleFAQ4 = () => {
    setShowFAQ4(!showFAQ4);
  };

  type Layer = {
    name: string;
    website: string;
    color: string;
  }
  
  const layers: Layer[] = [
    {
      name: "Optimism",
      website: "",
      color: "red",
    },
    {
      name: "Starknet",
      website: "",
      color: "purple",
    },
    {
      name: "Arbitrum",
      website: "",
      color: "blue",
    },
    {
      name: "Lightning",
      website: "",
      color: "yellow",
    },
  ];
  return (
    <div className="flex flex-col w-full snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <Head>
        <title>Layer-2s.eth</title>
        <meta name="description" content="A website about Layer-2 Ethereum" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
      <div className="snap-start w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 via-slate-900 to-stone-900">
        <motion.section id="start"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-screen justify-center lg:space-y-8">
          <div className="flex flex-col items-center w-full relative space-y-8 sm:space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-20 h-[80px] sm:h-[100px] md:h-[110px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl absolute text-start tracking-widest text-zinc-300 cursor-default">
            LAYER-2s
            </h1>
            <div className="w-96 h-96 z-[-10] opacity-10">
              <ETHShard/>
            </div>
            <h1 className="text-base sm:text-lg md:text-xl absolute z-20 opacity-80 lg:text-xl xl:text-3xl text-start text-zinc-500 cursor-default uppercase tracking-[.4px]">
              Ethereum for everyone
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center">
            <div className="p-1 flex w-full relative justify-center">
              <Link href={"#optimism"} className="flex bg-red-800 border border-red-600 sm:w-full rounded-full justify-center items-center transition-all ease-in-out duration-75 hover:bg-red-600 hover:border-red-800 text-zinc-300 px-6 py-2">
                <h3 className="text-xl uppercase tracking-tigher">
                  Optimism
                </h3>
              </Link>
            </div>
            <div className="p-1 flex w-full relative justify-center">
              <Link href={"#arbitrum"} className="flex bg-blue-800 border border-blue-600 sm:w-full rounded-full justify-center items-center transition-all ease-in-out duration-75 hover:bg-blue-600 hover:border-blue-800 text-zinc-300 px-6 py-2">
                <h3 className="text-xl uppercase tracking-tight">
                  Arbitrum 
                </h3>
              </Link>
            </div>
            <div className="p-1 flex w-full relative justify-center">
              <Link href={"#starknet"} className="flex bg-purple-800 border border-purple-600 sm:w-full rounded-full justify-center items-center transition-all ease-in-out duration-75 hover:bg-purple-600 hover:border-purple-800 text-zinc-300 px-6 py-2">
                <h3 className="text-xl uppercase tracking-tight">
                  Starknet 
                </h3>
              </Link>
            </div>
            <div className="p-1 flex w-full relative justify-center">
              <Link href={"#zksync"} className="flex bg-violet-500 border border-violet-700 sm:w-full rounded-full justify-center items-center transition-all ease-in-out duration-75 hover:bg-violet-600 hover:border-violet-800 text-zinc-300 px-6 py-2">
                <h3 className="text-xl uppercase tracking-tight">
                  zkSync
                </h3>
              </Link>
            </div>
            <div className="p-1 sm:col-span-2 md:col-span-4 justify-center flex items-center">
              <Link href={"#boba"} className="flex bg-lime-800 border w-fit border-lime-600 rounded-full justify-center items-center transition-all ease-in-out duration-75 hover:bg-lime-600 hover:border-lime-800 text-zinc-300 px-6 py-2">
                <h3 className="text-xl uppercase tracking-tight">
                  Boba
                </h3>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
      {/* -----------LAYERS----------- */}
      <div id="optimism" className="snap-start w-screen min-h-screen flex items-center justify-center bg-red-500">
        <motion.section 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .1 }}
          className="flex flex-col space-y-8 p-4 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl items-center justify-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] text-red-900 uppercase tracking-tightest">
          Optimism
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center justify-around">
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://kwenta.eth.limo"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-red-700 border-red-300 text-red-50 transition-all ease-in-out duration-75 hover:bg-red-600 hover:border-red-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Trade
                </p>
                <CircleStackIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://app.optimism.io/bridge/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-red-700 border-red-300 text-red-50 transition-all ease-in-out duration-75 hover:bg-red-600 hover:border-red-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Bridge
                </p>
                <CubeTransparentIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 sm:col-span-2 md:col-span-1 flex w-full justify-center">
              <Link
                href={"https://app.optimism.io/bridge/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit items-center space-x-2 lg:space-x-3 bg-red-700 border-red-300 text-red-50 transition-all ease-in-out duration-75 hover:bg-red-600 hover:border-red-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  NFTs
                </p>
                <SparklesIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
          </section>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div id="arbitrum" className="snap-start w-screen min-h-screen flex items-center justify-center bg-blue-700">
        <motion.section 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .1 }}
          className="flex flex-col space-y-8 p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl items-center justify-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] text-blue-900 uppercase tracking-tightest">
          Arbitrum
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center justify-around">
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://app.1inch.io/#/1/unified/swap/ETH/DAI"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-blue-700 border-blue-300 text-blue-50 transition-all ease-in-out duration-75 hover:bg-blue-600 hover:border-blue-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Trade
                </p>
                <CircleStackIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://bridge.arbitrum.io/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-blue-700 border-blue-300 text-blue-50 transition-all ease-in-out duration-75 hover:bg-blue-600 hover:border-blue-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Bridge
                </p>
                <CubeTransparentIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 sm:col-span-2 md:col-span-1 flex w-full justify-center">
              <Link
                href={"https://bridge.arbitrum.io/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit items-center space-x-2 lg:space-x-3 bg-blue-700 border-blue-300 text-blue-50 transition-all ease-in-out duration-75 hover:bg-blue-600 hover:border-blue-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  NFTs
                </p>
                <SparklesIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
          </section>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div id="starknet" className="snap-start w-screen min-h-screen flex items-center justify-center bg-purple-700">
        <motion.section  
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .1 }}
          className="flex flex-col space-y-8 p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl items-center justify-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] text-purple-900 uppercase tracking-tightest">
          Starknet
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center justify-around">
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://www.starkswap.co/app/swap"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-purple-700 border-purple-300 text-purple-50 transition-all ease-in-out duration-75 hover:bg-purple-600 hover:border-purple-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Trade
                </p>
                <CircleStackIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://starkgate.starknet.io/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-purple-700 border-purple-300 text-purple-50 transition-all ease-in-out duration-75 hover:bg-purple-600 hover:border-purple-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Bridge
                </p>
                <CubeTransparentIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 sm:col-span-2 md:col-span-1 flex w-full justify-center">
              <Link
                href={"https://starkgate.starknet.io/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit items-center space-x-2 lg:space-x-3 bg-purple-700 border-purple-300 text-purple-50 transition-all ease-in-out duration-75 hover:bg-purple-600 hover:border-purple-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  NFTs
                </p>
                <SparklesIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
          </section>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div id="zksync" className="snap-start w-screen min-h-screen flex items-center justify-center bg-violet-500">
        <motion.section  
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .1 }}
          className="flex flex-col space-y-8 p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl items-center justify-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] text-violet-900 uppercase tracking-tightest">
          zkSync
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center justify-around">
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://trade.zigzag.exchange/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-violet-700 border-violet-300 text-violet-50 transition-all ease-in-out duration-75 hover:bg-violet-600 hover:border-violet-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Trade
                </p>
                <CircleStackIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://portal.zksync.io/bridge"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-violet-700 border-violet-300 text-violet-50 transition-all ease-in-out duration-75 hover:bg-violet-600 hover:border-violet-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Bridge
                </p>
                <CubeTransparentIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 sm:col-span-2 md:col-span-1 flex w-full justify-center">
              <Link
                href={"https://portal.zksync.io/bridge"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit items-center space-x-2 lg:space-x-3 bg-violet-700 border-violet-300 text-violet-50 transition-all ease-in-out duration-75 hover:bg-violet-600 hover:border-violet-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  NFTs
                </p>
                <SparklesIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
          </section>
        </motion.section>
      </div>

      <div id="boba" className="snap-start w-screen min-h-screen flex items-center justify-center bg-lime-500">
        <motion.section  
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .1 }}
          className="flex flex-col space-y-8 p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl items-center justify-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] text-lime-900 uppercase tracking-tightest">
          Boba
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center justify-around">
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://oolongswap.com/#/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-lime-700 border-lime-300 text-lime-50 transition-all ease-in-out duration-75 hover:bg-lime-600 hover:border-lime-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Trade
                </p>
                <CircleStackIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 flex w-full justify-center">
              <Link
                href={"https://gateway.boba.network/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit sm:w-full items-center space-x-2 lg:space-x-3 bg-lime-700 border-lime-300 text-lime-50 transition-all ease-in-out duration-75 hover:bg-lime-600 hover:border-lime-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  Bridge
                </p>
                <CubeTransparentIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
            <div className="p-1 sm:col-span-2 md:col-span-1 flex w-full justify-center">
              <Link
                href={"https://gateway.boba.network/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit items-center space-x-2 lg:space-x-3 bg-lime-700 border-lime-300 text-lime-50 transition-all ease-in-out duration-75 hover:bg-lime-600 hover:border-lime-200"
              >
                <p className="text-xs md:text-base xl:text-xl">
                  NFTs
                </p>
                <SparklesIcon className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6"/>
              </Link>
            </div>
          </section>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5  }}
          className="p-4 xl:max-w-5xl flex flex-col space-y-8 sm:space-y-16 md:space-y-24 w-full items-center justify-center">
          <h2 className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl text-center md:text-end">
            Scaling Ethereum without compromising on security or decentralization.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5  }}
          className="p-4 xl:max-w-6xl flex flex-col space-y-8 sm:space-y-16 md:space-y-24 w-full items-start justify-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl text-center">
          What is layer 2?
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-start">
          Layer-2 (L2) is a collective term to describe a specific set of Ethereum scaling solutions. A layer-2 is a separate blockchain that extends Ethereum and inherits the security guarantees of Ethereum.
          </h2>
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl text-start">
          To understand layer-2 better, we need to explain layer-1 (L1).
          </h2> */}
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      {/* <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h3 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-teal-500">
            Frequently Asked Questions
          </h3>
          <FAQ />
          <section className="flex flex-col w-full justify-start items-center space-y-2">
            <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
              <div className="flex items-center w-full justify-between">
                <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">
                  {"Why aren't there financial incentives?"}
                </h4>
                <span className="" />
                <div className={`${"flex items-center"}`}>
                  {!showFAQ2 ? (
                    <PlusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ2}
                    />
                  ) : (
                    <MinusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ2}
                    />
                  )}
                </div>
              </div>
              <div
                className={showFAQ2 ? "flex flex-col space-y-2 items-center" : "hidden"}
              >
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"Simply put: Incorrectly implemented incentives lead to perverse incentives."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"Using financial incentives is a natural choice for many crypto/blockchain protocols. Well-designed incentives can be a powerful tool to encourage proper-use and discourage malicious behavior. Incentives might seem especially well-suited for the Portal Network, where the strength of the network is correlated to the number of participants and the amount of contributed computing resources. However, at the current point in time, Portal Network developers have opted out from implementing financial incentives."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The problems with financial incentives is they are complex and difficult to implement correctly. They also provide mechanisms for people to game the system and extract value, rather than contribute towards overall network health. The Portal Network relies on producing a useful, lightweight client for developers, along with altruism and laziness to encourage network adoption and sufficient computing resources."}
                </p>
                <p className="leading-7 w-full flex justify-center py-8 text-sky-700 dark:text-sky-100">
                  {"\""}<span className="italic">Never underestimate the power of laziness and software defaults</span>{"\" - Piper Merriam"}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"Protocols like Bittorrent and IPFS are proof that this is a feasible strategy. Furthermore, there already exist protocols like the Filecoin and The Graph Network that are using financial incentives to accomplish similar goals to the Portal Network."}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full justify-start items-center space-y-2">
            <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
              <div className="flex items-center w-full justify-between">
                <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">
                  {"What is the Portal network?"}
                </h4>
                <span className="" />
                <div className={`${"flex items-center"}`}>
                  {!showFAQ3 ? (
                    <PlusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ3}
                    />
                  ) : (
                    <MinusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ3}
                    />
                  )}
                </div>
              </div>
              <div
                className={showFAQ3 ? "flex flex-col space-y-2 items-center" : "hidden"}
              >
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The \"Portal Network\" is an in progess effort to enable lightweight protocol access to resource constrained devices. The term \"portal\" is used to indicate that these networks provide a view into the protocol but are not critical to the operation of the core Ethereum protocol."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide the data and functionality necessary to expose the standard JSON-RPC API. These networks are being specially designed to ensure that clients participating in these networks can do so with minimal expendature of networking bandwidth, CPU, RAM, and HDD resources."}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full justify-start items-center space-y-2">
            <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
              <div className="flex items-center w-full justify-between">
                <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">
                  {"Why do we need the Portal network?"}
                </h4>
                <span className="" />
                <div className={`${"flex items-center"}`}>
                  {!showFAQ4 ? (
                    <PlusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ4}
                    />
                  ) : (
                    <MinusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ4}
                    />
                  )}
                </div>
              </div>
              <div
                className={showFAQ4 ? "flex flex-col space-y-2 items-center" : "hidden"}
              >
                <p className="leading-7 w-full flex justify-center text-sky-700 dark:text-sky-100">
                  {"This effort is motivated by two overlapping goals:"}
                </p>
                <p className="leading-7 w-full flex justify-center pt-2 text-xl font-medium text-blue-700 dark:text-sky-100">
                  {"Full Functionality for Stateless Clients"}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The core Ethereum protocol is moving towards a \"stateless\" model of block verification. Under this model a client will be able to fully verify the execution of a block using a witness. Such a client would no longer need to keep or maintain any of the Ethereum \"state\" data. Such a client is very valuable in the context of the core protocol, as it facilitates a cleaner merge of the Eth1 and Eth2 chains."}
                </p>
                <div className="pt-2 pb-4">
                  <Link 
                    href="https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html" 
                    target={"_blank"}
                    className="flex space-x-2 items-center rounded-lg bg-teal-100 border border-teal-400 visited:text-teal-900 visited:hover:text-teal-900/60 text-teal-700 hover:text-sky-900 focus:bg-teal-600 py-[0.34px] px-4 font-base text-xs t-1 hover:bg-sky-200 hover:border-sky-400"
                  >
                    <p className="leading-7 w-full dark:text-sky-100">
                      {"Why stateless is so important to the Eth1/Eth2 merge?"}
                    </p>
                    <ArrowTopRightOnSquareIcon className="h-3 w-3"/>
                  </Link>
                </div>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"What is easy to overlook is that such a \"stateless\" client will be unable to much else without additional infrastructure. Specifically it would be unable to serve the vast majority of the JSON-RPC apis. The Portal Network provides this additional infrastructure, allowing stateless clients to also expose the external APIs that support the web3 ecosystem."}
                </p>
                <p className="leading-7 w-full flex justify-center pt-8 text-xl font-medium text-blue-700 dark:text-sky-100">
                  {"Scalable Lightweight Clients"}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The term \"light client\" tends to refer to a client of the existing DevP2P LES network. This network is designed using a client/server architecture. The LES network has a total capacity dictated by the number of \"servers\" on the network. In order for this network to scale, the \"server\" capacity has to increase. This also means that at any point in time the network has some total capacity which if exceeded will cause service degredation across the network. Because of this the LES network is unreliable when operating near capacity."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The Portal Network aims to solve this problem by designing our networks so that each additional client that joints the network adds additional capacity to the network. The end result should be a network which becomes more robust and powerful as more nodes join the network."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide the data and functionality necessary to expose the standard JSON-RPC API. These networks are being specially designed to ensure that clients participating in these networks can do so with minimal expendature of networking bandwidth, CPU, RAM, and HDD resources."}
                </p>
                <div className="flex space-x-4 w-full items-center">
                  <div className="pt-2 pb-4 flex w-full justify-center">
                    <Link 
                      href="https://snakecharmers.ethereum.org/the-winding-road-to-functional-light-clients/" 
                      target={"_blank"}
                      className="flex space-x-2 items-center rounded-lg bg-teal-100 border border-teal-400 visited:text-teal-900 visited:hover:text-teal-900/60 text-teal-700 hover:text-sky-900 focus:bg-teal-600 py-[0.34px] px-4 font-base text-xs t-1 hover:bg-sky-200 hover:border-sky-400"
                    >
                      <p className="leading-7 w-full dark:text-sky-100 capitalize">
                        {"The winding road to functional light clients"}
                      </p>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3"/>
                    </Link>
                  </div>
                  <div className="pt-2 pb-4 flex w-full justify-center">
                    <Link 
                      href="https://www.youtube.com/watch?v=MZxqRs_tLNs" 
                      target={"_blank"} className="flex space-x-2 items-center rounded-lg bg-teal-100 border border-teal-400 visited:text-teal-900 visited:hover:text-teal-900/60 text-teal-700 hover:text-sky-900 focus:bg-teal-600 py-[0.34px] px-4 font-base text-xs t-1 hover:bg-sky-200 hover:border-sky-400"
                    >
                      <p className="leading-7 w-full dark:text-sky-100">
                        {"Democratizing Ethereum: Breaking Down the Monolith"}
                      </p>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.section>
      </div> */}
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-5" 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .1 }}
          className="p-4 flex w-full space-x-2 items-center justify-center">
          <Link href={"#start"} className="flex items-center space-x-2 text-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-lg hover:shadow-sm transition-all ease-in-out duration-150 hover:border dark:hover:border-zinc-300 px-6 py-2 uppercase text-start">
            <p>Go to Top of Page</p>
            <ArrowUpIcon className="h-4 w-4"/>
          </Link>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
    </div>
  );
};
