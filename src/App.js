import { CssBaseline } from "@mui/material";
import Airbnb from "./components/Airbnb";
import Udemy from "./components/Udemy";

function App() {
  return (
    <>
      <CssBaseline />
      <Udemy />
      <div>this is a div</div>
      <Airbnb />
    </>
  );
}

export default App;
