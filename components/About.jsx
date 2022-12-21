import Image from "next/image";
import Link from "next/link";
import React from "react";
import profilePic from "../public/assets/me.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-32">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#23d997]">
            About
          </p>
          <p className="py-4 text-gray-600">
            I&apos;m Damien, 32 and living in Nantes, France.
          </p>
          <p className="py-2 text-gray-600">
            Developer since 2018. I&apos;ve mainly worked as a software
            developer, using Delphi IDE and SQL to build features for a WMS
            (Warehouse Management System). I also enjoy training myself and
            learn more about new technologies, especially on web technologies
            such as React.JS
          </p>
          <p className="py-2 text-gray-600">
            Passionate about Ethereum, I&apos;ve learned Solidity to be able to
            create and deploy smart contracts on EVM-compatible blockchains.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
          <div className="flex items-center justify-center py-4">
            <a
              href="https://certificate.bcdiploma.com/check/2541E53C7002EBEBDBF4066CD5434386628F032A419EA3230AAF89F6A342D4E9RzVnbTRwZWpRZTRsWUtDazNwMTRRbHpzT0ozWXZhRFVyeU5tZHJHNjl5Tm52VDR1"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/assets/badge.svg" alt="/" width={250} height={250} />
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p4 hover:scale-105 ease-in duration-300">
          <Image src={profilePic} alt="/" style={{ borderRadius: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default About;
