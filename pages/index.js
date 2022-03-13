import Head from 'next/head';
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      {/* <Footer /> */}

    </div>
  )
}

export default Home
