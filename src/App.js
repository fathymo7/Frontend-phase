import Sidebar from "./components/home/side/sidebar";
import Feed from "../src/components/home/homePage/feed";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div>
        <main className=" bg-black min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <Feed />
        </main>
      </div>
    </Fragment>
  );
}

export default App;
