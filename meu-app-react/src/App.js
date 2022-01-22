



import {
  BrowserRouter,
  Routes,
  Route
  } from "react-router-dom";
  import Listing from './componentes/pages/Listing';
  import Form from './componentes/pages/Form';
  import Navbar from "./componentes/navbar";
  function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
    </Route>
    </Routes>
  </BrowserRouter>
  );
  }
  export default App;
  
