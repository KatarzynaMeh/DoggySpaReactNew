import "./App.css";
import { Banner } from "./components/banner/Banner";
import { Header } from "./components/header/Header";
import { Main } from './components/main/Main'
import classes from './components/StyleContainer.module.css'

function App() {
  return (
    <div className={classes.bigContainer}>
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
