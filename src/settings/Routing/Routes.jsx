import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

//? Elements
import Main from "../../pages/main/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
