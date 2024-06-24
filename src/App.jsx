import { useState } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import { UserProvider } from "./UserProvider";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <UserProvider>
      <div>
        <button onClick={() => setCurrentPage("home")}>Homeに戻る</button>
        <button onClick={() => setCurrentPage("about")}>Aboutページへ</button>
        {currentPage === "home" ? <HomePage /> : <AboutPage />}
      </div>
    </UserProvider>
  );
}

export default App;
