import { Routes, Route } from "react-router-dom";

//? Elements
import Main from "../../pages/main/main";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
