import {
  businessIcon,
  startUpIcon,
  economyIcon,
  texnolgiIcon,
} from "../../../assets";
import "./Catagory.scss";

export const Catagory = () => {
  return (
    <>
      <section className="Catagory">
        <h2 className="catagoryTytle">Choose A Catagory</h2>

        <div className="catagoryCardList">
          <div className="catagoryCard">
            <div className=" icon1">
              <img src={businessIcon} alt="" />
            </div>
            <h3 className="catagoryCardTytl">Business</h3>
            <p className="catagoryCardText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>

          <div className="catagoryCard">
            <div className="icon">
              <img src={startUpIcon} alt="" />
            </div>
            <h3 className="catagoryCardTytl">Startup</h3>
            <p className="catagoryCardText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="catagoryCard">
            <div className="icon">
              <img src={economyIcon} alt="" />
            </div>
            <h3 className="catagoryCardTytl">Economy</h3>
            <p className="catagoryCardText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="catagoryCard">
            <div className="icon">
              <img src={texnolgiIcon} alt="" />
            </div>
            <h3 className="catagoryCardTytl">Technology</h3>
            <p className="catagoryCardText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
