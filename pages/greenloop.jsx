import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/greenloop.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const greenloop = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GreenLoop NFT Marketplace</h2>
          <h3>Solidity / Hardhat / Thirdweb</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="pb-2">Overview</h2>
          <p>
            Greenloop is the final project of my Blockchain Developer training
            with
            <a
              className="font-bold"
              href="https://alyra.fr/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Alyra
            </a>
            . It&apos;s a NFT Marketplace deployed on the testnet network of
            Polygon, Mumbai. The following functionnalities are implemented :
          </p>
          <ul>
            <div className="pt-1 pl-10">
              <li className="list-disc cursor-auto">
                Obtain 100 Greencoin (ERC20 Token) using a Faucet
              </li>
              <li className="list-disc cursor-auto">
                Create a NFT collection using a NFT Factory smart contract
              </li>
              <li className="list-disc cursor-auto">
                Mint a trail (ERC1155 NFT) and store metadata using IPFS
              </li>
              <li className="list-disc cursor-auto">
                Buy a NFT using Greencoin
              </li>
            </div>
          </ul>
          <a
            href="https://github.com/damienlachaume/alyra-nft-marketplace"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://alyra-nft-marketplace.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hardhat
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Thirdweb
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IPFS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default greenloop;
