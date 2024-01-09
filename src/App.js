import ScrollToTop from "./components/ScrollToTop"
import MainPage from "./pages/MainPage";
import UpButton from "./components/UpButton";
import Header from "./components/Header"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NotFoundPage from "./pages/NotFoundPage";
import ImagesSelectionPage from "./pages/ImagesSelectionPage";
import BreedsInfoPage from "./pages/BreedsInfoPage";
import Popup from "./components/Popup";


function App() {
  return (
    <Provider store={store}>
      <UpButton />
      <Router>
      <ScrollToTop />
      <Header/>
      <Popup />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page/*" element={<MainPage />} />
          <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="selection" element={<ImagesSelectionPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="breedsinfo" element={<BreedsInfoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
