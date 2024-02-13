import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import partner4 from "../assets/Group 4907 (1).png";
import partner5 from "../assets/Group 4908 (1).png";
import partner1 from "../assets/Group 5295.png";
import partner2 from "../assets/Group 5296.png";
import partner3 from "../assets/Group 5297.png";
import styles from "./HomePage.module.scss";
import ProductCard from "../components/ProductCard";
import ServiceSection from "../components/ServiceSection";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.posterHead}>
        <div className={styles.headContent}>
          <h1>ԿԱՏԱՐԵԼՈՒԹՅՈՒՆԸ ՈՐՊԵՍ ՀԵՆԱԿԵՏ</h1>
          <p>
            Մենք մասնագիտացած ենք օդորակման, ջեռուցման, օդափոխության համակարգերի
            վաճառքի և սպասարկման մեջ: Մենք մեր հաճախորդներին տրամադրում ենք
            հուսալի սպասարկում և վերանորոգում:
          </p>
          <button className={styles.knowMore}>Իմանալ ավելին</button>
          <div className={styles.partners}>
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner4} alt="" />
            <img src={partner5} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.newCollection}>
        <h3>Նոր տեսականի</h3>
        <div className={styles.productSections}>
          <div className={styles.sectionsTop}>
            <ul className={styles.categories}>
              <li>Օդակարգավորում</li>
              <li>Ջեռուցում և ջրամատակարարում</li>
              <li>Լուսավորություն</li>
              <li>Էլեկտրամոնտաժային սարքեր</li>
              <li>Անվտանգություն</li>
            </ul>
            <hr />
          </div>
          <div className={styles.slider}>
            <Carousel
              className={styles.carousel}
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              autoPlaySpeed={3000}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Carousel>
          </div>
        </div>
      </div>
      <ServiceSection />
    </div>
  );
};

export default HomePage;
