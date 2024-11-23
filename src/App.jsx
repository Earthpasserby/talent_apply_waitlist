// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Waitlist from "./components/Waitlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Waitlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
