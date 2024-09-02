import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
