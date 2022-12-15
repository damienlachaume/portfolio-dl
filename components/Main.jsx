import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbLeaf } from "react-icons/tb";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="invisible md:visible uppercase text-sm tracking-widest text-gray-600">
            “The one thing that’s made me feel optimistic over the last year is
            that there is a lot of interest, not just on the cryptocurrency side
            and buying ether and holding it, but actually using it to build
            applications.” -Vitalik Buterin
          </p>
          <h1 className="py-4 mt-3 text-gray-700">
            Hi, I&apos;m <span className="text-[#23d997]"> Damien</span>
          </h1>
          <h1 className="py-2 text-gray-700">Smart Contract Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Passionate about the blockchain ecosystem and its use cases,
            I&apos;ve learned programing Smart Contract with
            <a
              className="font-bold"
              href="https://alyra.fr/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Alyra&nbsp;
            </a>
            in 2022. I can work with you to build decentralized applications on
            EVM-compatible blockchains.
          </p>
          <div className="flex items-center justify-between max-w-[412px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/damienlachaume/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/damienlachaume"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://twitter.com/damien_lachaume"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <a
              href="https://www.lensfrens.xyz/damlc.lens"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <TbLeaf />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
