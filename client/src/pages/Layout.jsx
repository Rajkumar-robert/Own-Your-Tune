import React from "react";

import { Navbar } from "../components";
import Toolbar from "../components/Toolbar";
import AudioPlayer from "../components/AudioPlayer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="fixed">
            <Navbar />
          </div>

          <div className="absolute left-[250px] flex flex-col">
            <div className="fixed z-10 bg-white">
              <Toolbar />
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 ">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Layout;
