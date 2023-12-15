import MainPage from "./pages/MainPage";
import UpButton from "./components/UpButton";
import Header from "./components/Header"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Provider store={store}>
      <UpButton />
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
