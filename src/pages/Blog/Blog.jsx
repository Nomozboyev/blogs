import React from "react";
import "./Blog.scss";
import { blogIntroImg, userAvatar } from "../../assets";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blogIntro">
          <img src={blogIntroImg} alt="blogIntroImg" />
        </div>
        <section className="BlogContent">
          <div className="user">
            <div>
              <img src={userAvatar} alt="" />
            </div>
            <div>
              {" "}
              <h2 className="username">Andrew Jonson</h2>
              <p className="data"> Posted on 27th January 2022</p>
            </div>
          </div>
          <h1 className="tytle">
            Step-by-step guide to choosing great font pairs
          </h1>
          <h4 className="type">Startup (#business, #screen, #life)</h4>
          <div className="banner">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non. lorem150
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
