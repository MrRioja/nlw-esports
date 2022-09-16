import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo NLW eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={2}
        />
        <GameBanner
          bannerUrl="/game-2.png"
          title="League of Legends"
          adsCount={2}
        />
        <GameBanner
          bannerUrl="/game-3.png"
          title="League of Legends"
          adsCount={2}
        />
        <GameBanner
          bannerUrl="/game-4.png"
          title="League of Legends"
          adsCount={2}
        />
        <GameBanner
          bannerUrl="/game-5.png"
          title="League of Legends"
          adsCount={2}
        />
        <GameBanner
          bannerUrl="/game-6.png"
          title="League of Legends"
          adsCount={2}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
