import "./App.scss";
import { useMediaQuery } from "react-responsive";

import Mobile from "./components/Mobile";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 768px) and (max-width:1920px)",
  });

  return <div className="container">{isPC ? <div>pc</div> : <Mobile />}</div>;
}

export default App;
