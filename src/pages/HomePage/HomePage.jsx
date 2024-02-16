import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import partner4 from "../../assets/Group 4907 (1).png";
import partner5 from "../../assets/Group 4908 (1).png";
import partner1 from "../../assets/Group 5295.png";
import partner2 from "../../assets/Group 5296.png";
import partner3 from "../../assets/Group 5297.png";
import partnersGroup from "../../assets/Group 5298.png";
import ProductCard from "../../components/ProductCard";

import ServiceSection from "../../components/ServiceSection";
import "./carousel.css";
import styles from "./HomePage.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 740 },
    items: 3,
  },

  littleTablet: {
    breakpoint: { max: 740, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

const HomePage = () => {
  const [circlePopupPos, setCirclePopupPos] = useState({
    curTop: 50,
    curLeft: 0,
  });
  const [catInd, setCatInd] = useState(0);
  const [isImagePopupActive, setImagePopupActive] = useState(false);

  const circleRef = useRef(null);

  const getPos = (curRef) => {
    const { top, left } = curRef.current?.getBoundingClientRect();

    return {
      curTop: top + 50,
      curLeft: left - 30,
    };
  };

  useEffect(() => {
    setCirclePopupPos(getPos(circleRef));
  }, []);

  const categories = [
    "Օդակարգավորում",
    "Ջեռուցում և ջրամատակարարում",
    "Լուսավորություն",
    "Էլեկտրամոնտաժային սարքեր",
    "Անվտանգություն",
  ];

  // useEffect(() => {
  //   const { top, left } = circleRef.current?.getBoundingClientRect();

  //   console.log(top, left);

  //   setCirclePopupPos({ curTop: top + 60, curLeft: left });

  //   if (top + 300 > window.innerHeight) {
  //     if (left + 416 > window.innerWidth) {
  //       setCirclePopupPos({
  //         curTop: top - 300,
  //         curLeft: left - 416,
  //       });
  //     }

  //     setCirclePopupPos({
  //       curTop: top - 300,
  //       curLeft: left,
  //     });
  //   } else {
  //     if (left + 416 > window.innerWidth) {
  //       setCirclePopupPos({
  //         curLeft: left - 416,
  //         curTop: top,
  //       });
  //     }
  //   }
  // }, []);

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
          <img className={styles.partnersMob} src={partnersGroup} alt="" />
        </div>
      </div>
      <div className={styles.newCollection}>
        <h3>Նոր տեսականի</h3>
        <div className={styles.productSections}>
          <div className={styles.sectionsTop}>
            <ul className={styles.categories}>
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className={i === catInd ? styles.catActive : null}
                  onClick={() => setCatInd(i)}
                >
                  {cat}
                </li>
              ))}
            </ul>
            <hr />
          </div>
          <div class={styles.customSelect}>
            <select>
              <option value="">Օդակարգավորում</option>
              <option value="">Ջեռուցում և ջրամատակարարում</option>
              <option value="">Լուսավորություն</option>
              <option value="">Էլեկտրամոնտաժային սարքեր</option>
              <option value="">Անվտանգություն</option>
            </select>
            <div className={styles.arrowDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M13.0002 1L7.00024 7L1.00024 1"
                  stroke="#3E4095"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* <div className={styles.categoriesSelect}>
            <p>Օդակարգավորում</p>
            <div className={styles.arrowDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M13.0002 1L7.00024 7L1.00024 1"
                  stroke="#3E4095"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div> */}
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
      <div className={styles.homeImage}>
        <div
          id={styles.one}
          className={styles.circle}
          ref={circleRef}
          onClick={() => setImagePopupActive((prev) => !prev)}
        >
          1
        </div>
        <div
          id={styles.two}
          className={styles.circle}
          onClick={() => setImagePopupActive((prev) => !prev)}
        >
          2
        </div>
        <div
          id={styles.three}
          className={styles.circle}
          onClick={() => setImagePopupActive((prev) => !prev)}
        >
          3
        </div>
        <div
          id={styles.four}
          className={styles.circle}
          onClick={() => setImagePopupActive((prev) => !prev)}
        >
          4
        </div>
        {isImagePopupActive && (
          <div
            className={styles.imagePopup}
            style={{ top: circlePopupPos.curTop, left: circlePopupPos.curLeft }}
          >
            <h4>Ապրանքի անվանում</h4>
            <p>
              Մոդելների լայն տեսականին ներառում է հինգ մոդել 2,6-ից մինչև 7 կՎտ
              հզորությամբ մինչև 20-ից մինչև 70 ք.մ.
            </p>
            <a href="#">
              <span>Կարդալ ավելին</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                >
                  <path
                    d="M0 7.00002C0 7.26523 0.105357 7.51959 0.292893 7.70712C0.48043 7.89466 0.734784 8.00002 1 8.00002H20.586L16.294 12.292C16.1118 12.4806 16.011 12.7332 16.0133 12.9954C16.0156 13.2576 16.1208 13.5084 16.3062 13.6938C16.4916 13.8792 16.7424 13.9844 17.0046 13.9867C17.2668 13.989 17.5194 13.8882 17.708 13.706L23.708 7.70602C23.8005 7.61402 23.874 7.50464 23.9241 7.38417C23.9742 7.26369 24 7.1345 24 7.00402V7.00002C24 6.87002 23.974 6.74002 23.922 6.61802C23.8722 6.49678 23.7987 6.38665 23.706 6.29402L17.706 0.294017C17.5174 0.111859 17.2648 0.011065 17.0026 0.0133435C16.7404 0.0156219 16.4896 0.120791 16.3042 0.306199C16.1188 0.491607 16.0136 0.74242 16.0113 1.00462C16.009 1.26681 16.1098 1.51942 16.292 1.70802L20.586 6.00002H1C0.734784 6.00002 0.48043 6.10537 0.292893 6.29291C0.105357 6.48045 0 6.7348 0 7.00002Z"
                    fill="#3E4095"
                  />
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
      <div className={styles.newCollection}>
        <h3>Գործող առաջարկներ</h3>
        <div className={styles.productSections}>
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
    </div>
  );
};

export default HomePage;
