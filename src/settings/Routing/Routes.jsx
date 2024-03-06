import { Routes, Route } from "react-router-dom";

//? Elements
import Main from "../../pages/main/Main";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
