import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  const recaptcha =
    "https://www.google.com/recaptcha/api.js?render=" +
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <div>
      <Head>
        <title>Damien Lachaume | Web Developer | Blockchain Developer</title>
        <meta
          name="description"
          content="I'm a French developer passionate about web technologies and blockchain. I can work with you to build  standard web applications and decentralized applications."
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src={recaptcha}></script>
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
