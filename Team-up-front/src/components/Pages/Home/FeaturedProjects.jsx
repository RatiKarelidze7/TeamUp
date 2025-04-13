import classes from "../../../modules/FeaturedProjects.module.scss";
import clientProfile from "../../../assets/Home-page-pics/profile-pic.jpg";
import exampleProject from "../../../assets/Home-page-pics/exampleProject.png";
import projectsImgOne from "../../../assets/Home-page-pics/firstProjectImg.png";
import projectsImgTwo from "../../../assets/Home-page-pics/TwoProjectImg.png";
import projectsImgThree from "../../../assets/Home-page-pics/ThreeProjectImg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const FeaturedProjects = () => {
  // Create a reusable project card component
  const ProjectCardOne = () => (
    <div className={classes["projects"]}>
      <img
        className={classes["project-picture"]}
        src={exampleProject}
        alt="Project"
      />
      <div className={classes["project-description"]}>
        <h4>NimbusNest</h4>
        <p>
          A smart home startup offering an AI-powered central hub.
        </p>
        <br />
        <div className={classes["client-side"]}>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className={classes["client-profile"]}
            />
            <p>Vato Tabatadze</p>
          </div>
          <h5>$1,275</h5>
        </div>
      </div>
    </div>
  );

  const ProjectCardTwo = () => (
    <div className={classes["projects"]}>
      <img
        className={classes["project-picture"]}
        src={projectsImgOne}
        alt="Project"
      />
      <div className={classes["project-description"]}>
        <h4>GreenByte</h4>
        <p>
          An eco-tech company focused on reducing carbon footprints.
        </p>
        <br />
        <div className={classes["client-side"]}>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className={classes["client-profile"]}
            />
            <p>Hanibal Lecter</p>
          </div>
          <h5>$1,549</h5>
        </div>
      </div>
    </div>
  );

  const ProjectCardThree = () => (
    <div className={classes["projects"]}>
      <img
        className={classes["project-picture"]}
        src={projectsImgTwo}
        alt="Project"
      />
      <div className={classes["project-description"]}>
        <h4>SnackLoop</h4>
        <p>
          A subscription-based platform delivering healthy.
        </p>
        <br />
        <div className={classes["client-side"]}>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className={classes["client-profile"]}
            />
            <p>Walter White</p>
          </div>
          <h5>$2,305</h5>
        </div>
      </div>
    </div>
  );

  const ProjectCardFourth = () => (
    <div className={classes["projects"]}>
      <img
        className={classes["project-picture"]}
        src={projectsImgThree}
        alt="Project"
      />
      <div className={classes["project-description"]}>
        <h4>SkillSprout</h4>
        <p>
          An ed-tech platform that connects learners with bite-sized.
        </p>
        <br />
        <div className={classes["client-side"]}>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className={classes["client-profile"]}
            />
            <p>Tony Stark</p>
          </div>
          <h5>$1,990</h5>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <center>
        <h1 className={classes["featured-projects-title"]}>
          Featured Projects
        </h1>
      </center>
      <br />
      <br />

      <div className={classes["projects-container"]}>
        {/* Desktop Grid View */}
        <div className={classes["desktop-view"]}>
          <div className={classes["projects-grid"]}>
            <ProjectCardOne />
            <ProjectCardTwo />
            <ProjectCardThree />
            <ProjectCardFourth />
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className={classes["mobile-view"]}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className={classes["mobile-swiper"]}
          >
            <SwiperSlide>
              <div className={classes["slide-content"]}>
                <ProjectCardOne />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes["slide-content"]}>
                <ProjectCardTwo />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes["slide-content"]}>
                <ProjectCardThree />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes["slide-content"]}>
                <ProjectCardFourth />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
