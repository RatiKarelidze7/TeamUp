import classes from "../../../modules/FeaturedProjects.module.scss"
import clientProfile from "../../../assets/Home-page-pics/profile-pic.jpg"
import exampleProject from "../../../assets/Home-page-pics/exampleProject.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedProjects = () => {
    // Create a reusable project card component
    const ProjectCard = () => (
        <div className={classes['projects']}>
            <img className={classes["project-picture"]} src={exampleProject} alt="Project"/>
            <div className={classes["project-description"]}>
                <h4>Project Name</h4>
                <p>
                    description:
                    it will be best site
                    ever for clien and
                    developers easy money
                    baby.
                </p>
                <br/>
                <div className={classes["client-side"]}>
                    <div>
                        <img className={classes["client-profile"]} src={clientProfile} alt="Client"/>
                        <p>Client Name</p>
                    </div>
                    <h5>$1,000</h5>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <center><h1 className={classes["featured-projects-title"]}>Featured Projects</h1></center>
            <br/><br/>

            <div className={classes['projects-container']}>
                {/* Desktop Grid View */}
                <div className={classes['desktop-view']}>
                    <div className={classes['projects-grid']}>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>

                {/* Mobile Slider View */}
                <div className={classes['mobile-view']}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className={classes['mobile-swiper']}
                    >
                        <SwiperSlide>
                            <div className={classes['slide-content']}>
                                <ProjectCard />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes['slide-content']}>
                                <ProjectCard />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes['slide-content']}>
                                <ProjectCard />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes['slide-content']}>
                                <ProjectCard />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes['slide-content']}>
                                <ProjectCard />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeaturedProjects