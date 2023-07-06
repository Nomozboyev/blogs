import "./intro.scss";
export const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro__div">
              <div className="content">
                <b className="introStatus">
                  <span className="cap">Posted on </span>startup
                </b>
                <h1 className="introName">
                  Step-by-step guide to choosing great font pairs
                </h1>
                <p className="introData">
                  By <span>James West</span> | May 23, 2022{" "}
                </p>
                <p className="introTitle">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <button className="introBtn">Read More </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
