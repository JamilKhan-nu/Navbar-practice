import { CssBaseline } from "@mui/material";
import Airbnb from "./components/Airbnb";
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
    </>
  );
}

export default App;
