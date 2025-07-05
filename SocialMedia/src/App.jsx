import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Siderbar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";
import PostlistContent from "./components/PostList";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Siderbar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Siderbar>
        <div className="container">
          <Header></Header>
          {selectedtab === "Home" ? (
            <PostlistContent />
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
