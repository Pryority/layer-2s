import { ArrowUpIcon, CubeTransparentIcon, CircleStackIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ETHShard from "../components/ETHShard";
import Header from "../components/Header";

export default function Home() {
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
                href={"https://qx.app/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit md:w-full items-center space-x-2 lg:space-x-3 bg-red-700 border-red-300 text-red-50 transition-all ease-in-out duration-75 hover:bg-red-600 hover:border-red-200"
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
                href={"https://tofunft.com/arbi"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit md:w-full items-center space-x-2 lg:space-x-3 bg-blue-700 border-blue-300 text-blue-50 transition-all ease-in-out duration-75 hover:bg-blue-600 hover:border-blue-200"
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
                href={"https://aspect.co/"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit md:w-full items-center space-x-2 lg:space-x-3 bg-purple-700 border-purple-300 text-purple-50 transition-all ease-in-out duration-75 hover:bg-purple-600 hover:border-purple-200"
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
                href={"https://mintsquare.io/zksync-testnet"}
                className="px-6 py-2 border-[3px] lg:border-4 rounded-full flex justify-center w-fit md:w-full items-center space-x-2 lg:space-x-3 bg-violet-700 border-violet-300 text-violet-50 transition-all ease-in-out duration-75 hover:bg-violet-600 hover:border-violet-200"
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
        </motion.section>
      </div>
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
    </div>
  );
};
