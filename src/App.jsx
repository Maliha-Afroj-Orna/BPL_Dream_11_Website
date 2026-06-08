import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/homepage/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
import Players from "./Components/homepage/players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000);

  return (
    <div className="max-w-7xl mx-auto font-sora">
      <Navbar coin={coin} />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        />
      </Suspense>

      {/* ========== react toastify ============= */}
      <ToastContainer />
    </div>
  );
}

export default App;
