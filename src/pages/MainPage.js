import OriginalWebsite from "../components/OriginalWebsite";
import Header from "../components/Header";
import ImageContainer from "../components/ImageContainer";

function MainPage() {
  return (
    <div className="main">
      <Header />
      <h1 className="main__h1">Trending cat images</h1>
      <main>
        <ImageContainer />
      </main>
      <OriginalWebsite />
    </div>
  );
}

export default MainPage;
