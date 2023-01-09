import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Damien Lachaume | Blockchain Developer</title>
        <meta
          name="description"
          content="I'm a French developer passionate about the blockchain ecosystem and its use cases. I can work with you to build decentralized applications on
          EVM-compatible blockchains."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
