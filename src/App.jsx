import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";

function App() {

  return (
    <>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
