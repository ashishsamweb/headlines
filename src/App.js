import { Slider } from "./components/Slider/Slider";
import { MostPopular } from "./components/MostPopular/MostPopular";
import { LatestNews } from "./components/LatestNews/LatestNews";
import { Newsletters } from "./components/Newsletters/Newsletters";
import { Category } from "./components/Category/Category";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"


export const App = () => {
    return (
      <div>
      <Header />
      <Slider />
      <MostPopular />
      <LatestNews />
      <Newsletters />
      <Category />
      <Footer />
      </div>
    )
  }
  

export default App;

