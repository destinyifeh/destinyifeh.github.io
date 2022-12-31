import React, { useState } from "react";
//import {Link} from 'react-router-dom';
import profile from "./images/pics/dee.jpg";
import Fade from "react-reveal/Fade";

function Home() {
  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);
  const [education, setEducation] = useState(false);
  const [skill, setSkill] = useState(false);
  const [interest, setInterest] = useState(false);
  const [reorder, setReorder] = useState(true);
  const [remove, setRemove] = useState(false);
  const [list, setList] = useState(false);

  let handleAbout = (e) => {
    console.log(e);
    // window.scrollTo({top:0, behavior: 'smooth'});
    setAbout(true);
    setProject(false);
    setSkill(false);
    setEducation(false);
    setInterest(false);
  };

  let handleProject = (e) => {
    console.log(e);
    // window.scrollTo({top:0, behavior: 'smooth'});
    setProject(true);
    setAbout(false);
    setSkill(false);
    setEducation(false);
    setInterest(false);
  };

  let handleEdu = (e) => {
    console.log(e);
    // window.scrollTo({top:0, behavior: 'smooth'});
    setEducation(true);
    setAbout(false);
    setProject(false);
    setSkill(false);
    setInterest(false);
  };

  let handleSkill = (e) => {
    console.log(e);
    // window.scrollTo({top:0, behavior: 'smooth'});
    setSkill(true);
    setAbout(false);
    setProject(false);
    setEducation(false);
    setInterest(false);
  };

  let handleInterest = (e) => {
    console.log(e);
    // window.scrollTo({top:0, behavior: 'smooth'});
    setInterest(true);
    setAbout(false);
    setProject(false);
    setSkill(false);
    setEducation(false);
  };

  let handleReorder = () => {
    setReorder(false);
    setRemove(true);
    setList(true);
  };

  let handleRemove = () => {
    setReorder(true);
    setRemove(false);
    setList(false);
  };

  return (
    <>
      <div className="container-fuid header d-flex justify-content-between p-3 d-md-none">
        <div className="text-white">
          <h5 className="text-white text-center">MEETME</h5>
          {list ? (
            <Fade left>
              <div className="sub-header">
                <a className="" href="#profile" onClick={handleAbout}>
                  {about ? (
                    <p className="text-white">ABOUT</p>
                  ) : (
                    <p className="">ABOUT</p>
                  )}
                </a>
                <a className="" href="#projects" onClick={handleProject}>
                  {project ? (
                    <p className="text-white">PROJECTS</p>
                  ) : (
                    <p className="">PROJECTS</p>
                  )}
                </a>
                <a className="" href="#education" onClick={handleEdu}>
                  {education ? (
                    <p className="text-white">EDUCATION</p>
                  ) : (
                    <p className="">EDUCATION</p>
                  )}
                </a>
                <a className="" href="#skills" onClick={handleSkill}>
                  {skill ? (
                    <p className="text-white">SKILLS</p>
                  ) : (
                    <p className="">SKILLS</p>
                  )}
                </a>
                <a className="" href="#interests" onClick={handleInterest}>
                  {interest ? (
                    <p className="text-white">INTEREST</p>
                  ) : (
                    <p className="">INTERESTS</p>
                  )}
                </a>
              </div>
            </Fade>
          ) : (
            " "
          )}
        </div>
        <div className="reorder">
          {reorder ? (
            <i className="fa fa-reorder" onClick={handleReorder}></i>
          ) : (
            " "
          )}

          {remove ? (
            <i className="fa fa-times" onClick={handleRemove}></i>
          ) : (
            " "
          )}
        </div>
      </div>

      <div class="container-fluid d-none d-lg-none d-md-flex justify-content-between p-2 header">
        <h5 className="text-white text-center p-1">
          <a href="/" class="meet-head text-white text-center">
            MEETME{" "}
          </a>
        </h5>

        <div className="d-flex mini">
          <a className="" href="#profile" onClick={handleAbout}>
            {about ? (
              <p className="text-white">ABOUT</p>
            ) : (
              <p className="">ABOUT |</p>
            )}
          </a>
          <a className="" href="#projects" onClick={handleProject}>
            {project ? (
              <p className="text-white">PROJECTS</p>
            ) : (
              <p className="">PROJECTS |</p>
            )}
          </a>
          <a className="" href="#education" onClick={handleEdu}>
            {education ? (
              <p className="text-white">EDUCATION</p>
            ) : (
              <p className="">EDUCATION |</p>
            )}
          </a>
          <a className="" href="#skills" onClick={handleSkill}>
            {skill ? (
              <p className="text-white">SKILLS</p>
            ) : (
              <p className="">SKILLS |</p>
            )}
          </a>
          <a className="" href="#interests" onClick={handleInterest}>
            {interest ? (
              <p className="text-white">INTEREST</p>
            ) : (
              <p className="">INTERESTS</p>
            )}
          </a>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 d-none d-lg-block small-view">
            <img
              className="profile-image d-block mx-auto img-thumbnail mb-3"
              src={profile}
              alt=""
            />
            <a className="" href="#profile" onClick={handleAbout}>
              {about ? (
                <p className="text-white">ABOUT</p>
              ) : (
                <p className="">ABOUT</p>
              )}
            </a>
            <a className="" href="#projects" onClick={handleProject}>
              {project ? (
                <p className="text-white">PROJECTS</p>
              ) : (
                <p className="">PROJECTS</p>
              )}
            </a>
            <a className="" href="#education" onClick={handleEdu}>
              {education ? (
                <p className="text-white">EDUCATION</p>
              ) : (
                <p className="">EDUCATION</p>
              )}
            </a>
            <a className="" href="#skills" onClick={handleSkill}>
              {skill ? (
                <p className="text-white">SKILLS</p>
              ) : (
                <p className="">SKILLS</p>
              )}
            </a>
            <a className="" href="#interests" onClick={handleInterest}>
              {interest ? (
                <p className="text-white">INTEREST</p>
              ) : (
                <p className="">INTERESTS</p>
              )}
            </a>
          </div>
          <div className="col-sm-9 big-view ">
            <div className="container profile " id="profile">
              <h2 className="profile-title">
                DESTINY <span className="last-name ">IFEHOR</span>
              </h2>

              <p className="profile-text mb-5">
                I'm a web developer with ability to learn and collaborate in
                rapidly changing environments and compositions.{" "}
              </p>
              <p className="">
                <i className="fa fa-phone "></i>{" "}
                <span className="pro-detail  ">+2349033662731</span>
              </p>
              <p className="">
                <i className="fa fa-envelope-open"></i>{" "}
                <span className="pro-detail ">destinyifeh@gmail.com</span>
              </p>
              <p className="mb-5">
                <i className="fa fa-home"></i>{" "}
                <span className="pro-detail ">LAGOS, NIGERIA.</span>
              </p>

              <div className="mb-5 social">
                <a
                  className="mx-2"
                  href="https://www.linkedin.com/in/destiny-ifehor-99686a15b"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="mx-2"
                  href="https://www.instagram.com/destoofficial"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  className="mx-2"
                  href="https://wa.me/2349033662731"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <i className="fa fa-whatsapp"></i>
                </a>
                <a
                  className="mx-2"
                  href="https://www.github.com/destinyifeh"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>

            <div className="container project my-5" id="projects">
              <h2 className="profile-title mb-5"> PROJECTS</h2>

              <h3 className="">
                {" "}
                <span className="sub-title ">Phonebook</span> - Creator
              </h3>
              <p className="">
                <span className="dots">.</span> Developed front-end user
                experience using React.JS, Redux Toolkit, Node.JS, Bootstrap,
                Html5, Css3.
              </p>
              <p className="">
                <span className="dots">.</span> Allow users to have a customized
                experience based on the mood of the user throughout the entire
                experience of the application.
              </p>
              <p className="">
                <span className="dots">.</span> Implemented user log in, sign
                up, log out,password reset email and contact form.
              </p>
              <p className="">
                <span className="dots">.</span> Allow users to create post,
                edit, update and delete their saved contacts{" "}
              </p>
              <p className="">
                <span className="dots">.</span> Designed and integrated database
                using mongoDB
              </p>

              <p className="">
                <a
                  className="view-site"
                  href="https://phonebook-7784.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  view site{" "}
                </a>
              </p>

              <h3 className="">
                {" "}
                <span className="sub-title ">Discussion</span> - Creator
              </h3>
              <p className="">
                <span className="dots">.</span> Created front-end user
                experience using React.JS, Node.JS, Bootstrap, Html5, Css3.
              </p>
              <p className="">
                <span className="dots">.</span> Implemented user log in, sign
                up, log out, profile picture, authentication, email
                verification, password reset email and contact form.
              </p>
              <p className="">
                <span className="dots">.</span> Allow users to create post,
                edit, update and delete post{" "}
              </p>
              <p className="">
                <span className="dots">.</span> Designed and integrated database
                using mongoDB
              </p>

              <p className="">
                <a
                  className="view-site"
                  href="https://discussion.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  view site{" "}
                </a>
              </p>

              <h3 className="">
                {" "}
                <span className="sub-title  ">Basicoffer</span> - Creator
              </h3>
              <p className=" ">
                <span className="dots">.</span> Designed a cryptocurrency
                blog/website for cryptocurrency updates using Html5, Css3,
                Javascript, Bootstrap, Handlebars.JS, and Node.JS .
              </p>
              <p className=" ">
                <span className="dots">.</span> Designed and integrated admin
                dashboard, admin log in , log out, sign up, email verification,
                reset password.{" "}
              </p>
              <p className=" ">
                <span className="dots">.</span> Designed and integrated database
                using mongoDB
              </p>

              <p className="">
                <a
                  className="view-site"
                  href="https://basicoffer.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  view site{" "}
                </a>
              </p>
            </div>

            <div className="container education my-5" id="education">
              <h2 className="profile-title mb-5">EDUCATION</h2>
              <h3 className="sub-title">University Of Benin</h3>
              <h4 className="mb-2">Bachelor Of Science</h4>
              <h5 className="">Banking And Finance </h5>
              <p className="edu-year ">December 2017 - August 2021</p>

              <h3 className="sub-title mt-4">
                Dexplora Computer Institute And Technology
              </h3>
              <h4 className="mb-2">Diploma</h4>
              <h5 className="">Basic Computer Proficiency</h5>
              <p className="edu-year"> June 2017 - December 2017</p>
            </div>

            <div className="container skill my-5" id="skills">
              <h2 className="profile-title mb-5">SKILLS</h2>
              <h3 className="sub-title mb-3">
                Programming Languages And Tools
              </h3>

              <div className="d-flex justify-content-even d-none d-md-flex">
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>

                <i className="devicon-bootstrap-plain-wordmark colored"></i>

                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original-wordmark colored"></i>
                <i className="devicon-handlebars-plain-wordmark colored"></i>

                <i className="devicon-mongodb-plain-wordmark colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-npm-original-wordmark colored"></i>
                <i className="devicon-git-plain-wordmark colored"></i>
              </div>

              {/* For small screen mobile*/}

              <div className="d-flex justify-content-even d-flex d-md-none">
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>

                <i className="devicon-bootstrap-plain-wordmark colored"></i>

                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original-wordmark colored"></i>
              </div>

              <div className="d-flex justify-content-even d-flex d-md-none">
                <i className="devicon-handlebars-plain-wordmark colored"></i>

                <i className="devicon-mongodb-plain-wordmark colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-npm-original-wordmark colored"></i>
                <i className="devicon-git-plain-wordmark colored"></i>
              </div>
            </div>

            <div className="container interest my-5" id="interests">
              <h2 className="profile-title mb-5">INTERESTS</h2>

              <p className="">
                Apart from being a web developer, i enjoy most of my time being
                outdoors. I enjoy hanging out with friends and family.
              </p>
              <p className="">
                When forced indoors, I spend a large amount of my free time
                exploring the latest technology advancements in both front and
                back-end web development world, as well as exploring the latest
                happenings around the world.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
