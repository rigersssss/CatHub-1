import video from "../images/BothOfUsKnowThatYouShouldntSeeThis.mp4"

function OriginalWebsite() {
  return (
    <div className="original">
      <p className="original__text">
        Design inspired by this 
        <a
          className="original__link"
          href={video}
        >
          {" "}
          website
        </a>
      </p>
    </div>
  );
}

export default OriginalWebsite;
