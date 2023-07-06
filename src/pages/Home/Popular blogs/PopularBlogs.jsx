import { imgCard1, imgCard2, imgCard3 } from "../../../assets";
import "./PopularBlogs.scss";
export const PopularBlogs = () => {
  return (
    <>
      <section className="popularBlogs">
        <div className="blogTye">Popular blogs</div>
        <div className="cardList">
          <div className="card">
            <div className="cardHeader">
              <img src={imgCard1} alt="" />
            </div>
            <div className="cardBody">
              <p className="data">
                By <span className="user">John Doe</span> l Aug 23, 2021
              </p>
              <h2 className="tytle">
                A UX Case Study Creating a Studious Environment for Students:{" "}
              </h2>
              <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>{" "}
          <div className="card">
            <div className="cardHeader">
              <img src={imgCard2} alt="" />
            </div>
            <div className="cardBody">
              <p className="data">
                By <span className="user">John Doe</span> l Aug 23, 2021
              </p>
              <h2 className="tytle">
                A UX Case Study Creating a Studious Environment for Students:{" "}
              </h2>
              <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>{" "}
          <div className="card">
            <div className="cardHeader">
              <img src={imgCard3} alt="" />
            </div>
            <div className="cardBody">
              <p className="data">
                By <span className="user">John Doe</span> l Aug 23, 2021
              </p>
              <h2 className="tytle">
                A UX Case Study Creating a Studious Environment for Students:{" "}
              </h2>
              <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
