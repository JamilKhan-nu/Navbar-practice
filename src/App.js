import { CssBaseline } from "@mui/material";
import Airbnb from "./components/Airbnb";
import Github from "./components/Github";
import Twitter from "./components/Twitter";
import Udemy from "./components/Udemy";

function App() {
  return (
    <>
      <CssBaseline />
      <Udemy />
      <div>this is a div</div>
      <Airbnb />
      <Twitter />
      <Github />
    </>
  );
}

export default App;
