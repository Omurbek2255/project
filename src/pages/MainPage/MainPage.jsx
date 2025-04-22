import Header from "../../components/Header";
import Products from "../../components/Product";
import Slider from "../../components/Slider";
import Search from "../../features/Search/Search"


const MainPage = () => {

  return (
    <div>
      <Header/>
      <Search />
      <Products />
    </div>
  )
}

export default MainPage;