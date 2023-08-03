import React from 'react';
import galleryImg1 from '../../assets/img/portfolio/pd1.jpg';
import galleryImg2 from '../../assets/img/portfolio/pd2.jpg';
import galleryImg3 from '../../assets/img/portfolio/pd3.jpg';
import thumb from '../../assets/img/portfolio/umbrella.webp';
import detailsCardData from './detailsCardData';
import PortfolioDetailsCard from './PortfolioDetailsCard';
import PortfolioGallery from './PortfolioGallery';

function PortfolioDetails() {
    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div
                            className="project-thumb bg-cover"
                            style={{
                                backgroundImage: `url(${thumb})`,
                            }}
                        />
                        <div className="project-meta-data">
                            <div className="project-info">
                                <span>Clients</span>
                                <h3>Umbrella Corporation</h3>
                            </div>
                            <div className="project-info">
                                <span>Services</span>
                                <h3>Automation Design</h3>
                            </div>
                            <div className="project-info">
                                <span>Keyword</span>
                                <h3>Automation, Innovate, Competitive</h3>
                            </div>
                            {/* <div className="project-info">
                                <a href="portfolio.html" className="theme-btn white">
                                    live preview
                                </a>
                            </div> */}
                        </div>
                        <h3>Vision:</h3>
                        <div className="project-details-content">
                            <p>
                            Our vision is to emerge as a dominant force in the market, setting new standards of excellence in the installation of automation and control systems. By fostering a culture of competitiveness and reliability, we are determined to surpass our competitors and establish ourselves as a frontrunner in the industry.
                            </p>
                            <p>
                            To achieve this, we prioritize the incorporation of cutting-edge technology into our operations. By staying at the forefront of advancements, we ensure that our solutions are always at the forefront of innovation. This commitment to staying ahead of the curve enables us to provide our clients with state-of-the-art systems that optimize efficiency and productivity.
                            </p>
                            <p>
                            At the heart of our success is our professional team. We invest heavily in training and development, equipping our employees with the skills and knowledge necessary to excel in their roles. Their unwavering commitment and dedication to our clients' satisfaction enable us to deliver outstanding results consistently.
                            </p>
                            <p>
                            Furthermore, we are unwavering in our pursuit of providing innovative and sustainable solutions. We understand the importance of integrating eco-friendly practices into our operations, and we strive to minimize our environmental impact while delivering exceptional outcomes for our clients. By prioritizing sustainability, we not only contribute to a greener future but also provide long-term value to our stakeholders.
                            </p>
                            <p>
                            In summary, our goal is to grow as a competitive and reliable figure in the automation and control systems industry. We are driven by our desire to become a leading company, recognized as a reference in the sector. Through the incorporation of state-of-the-art technology, a professional team, and a focus on innovative and sustainable solutions, we are poised to make significant strides towards achieving our vision.
                            </p>
                            <div className="row">
                                <PortfolioGallery galeryImg={galleryImg1} />
                                <PortfolioGallery galeryImg={galleryImg2} />
                                <PortfolioGallery galeryImg={galleryImg3} />
                            </div>
                        </div>
                        <p></p>
                        <h3>Mission:</h3>
                        <div className="project-details-content">
                            <p>
                            Our primary objective is to provide top-quality installation services for electrical and automation systems. We are committed to delivering solutions that prioritize safety, efficiency, and exceptional quality. By tailoring our services to meet the unique needs of each customer, we aim to enhance their productivity in every process they undertake.
                            </p>
                            <p>
                            We understand the significance of high-quality electrical and automation systems in facilitating seamless operations. Therefore, we strive to ensure that our installations meet the highest industry standards. Our focus on safety guarantees the well-being of our customers and their assets, while our commitment to efficiency maximizes productivity and minimizes downtime.
                            </p>
                            <p>
                            By closely collaborating with our customers, we gain a deep understanding of their specific requirements and challenges. This allows us to develop customized solutions that address their unique needs and enhance their overall productivity. Our goal is to become a trusted partner, providing reliable and efficient installation services that contribute to our customers' success.
                            </p>
                            <p>
                            In summary, our mission is to deliver installation services for electrical and automation systems that exhibit high quality, safety, and efficiency. We adapt our solutions to meet the individual needs of each customer, ultimately improving their productivity in every process they undertake. By prioritizing excellence and customer satisfaction, we aim to forge long-lasting partnerships and drive success for our clients.
                            </p>

                            <h3>How We Solve This Project</h3>
                            <p>
                            At Matroonix, we approach each project with a strategic and systematic methodology to ensure efficient and effective solutions. Here's an overview of how we solve projects:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {detailsCardData.map((data) => (
                        <PortfolioDetailsCard
                            key={data.id}
                            icon={data.icon}
                            heading={data.heading}
                            num={data.num}
                            text={data.text}
                        />
                    ))}
                </div>
                <p>At Matroonix, our approach to solving projects combines industry expertise, meticulous planning, and client collaboration. We are dedicated to delivering optimal outcomes, exceeding expectations, and building long-term partnerships based on trust and success.</p>
            </div>
        </section>
    );
}

export default PortfolioDetails;
