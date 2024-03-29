import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ServiceSection.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 703 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 703, min: 0 },
    items: 1.1,
  },
};

const ServiceSection = () => {
  return (
    <div className={styles.ServiceSection}>
      <div className={styles.titleNWatchMore}>
        <h3>Ծառայություններ</h3>
        <button className={styles.watchMore}>Տեսնել ավելին</button>
      </div>
      <div className={styles.serviceSlider}>
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
          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M18.332 1.77203H0V19.607L4.124 15.483H18.332V1.77203ZM4.57031 4.81891H13.7617V6.34235H4.57031V4.81891ZM13.7617 12.4361H4.57031V10.9127H13.7617V12.4361ZM15.2852 9.38922H3.04688V7.86578H15.2852V9.38922Z"
                  fill="#3E4095"
                />
                <path
                  d="M19.8555 17.0064H7.61719V20.0533H21.8252L26 24.228V6.34235H19.8555V17.0064Z"
                  fill="#3E4095"
                />
              </svg>
            </div>
            <h4>Խորհրդատվություն</h4>
            <p>
              Անհրաժեշտ սարքավորման ճիշտ ընտրության համար առաջարկում ենք
              խորհրդակցել մեր մասնագետների հետ:
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
          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M0.156846 3.95102C0.295488 3.37396 1.01434 3.16925 1.4361 3.59106L4.24225 6.39871H6.39804V4.24293L3.59561 1.44197C3.17582 1.02219 3.37815 0.304103 3.95232 0.163482C5.27748 -0.161029 7.42769 -0.112581 9.09012 1.54928C10.5446 3.00374 11.0118 5.17476 10.3282 7.09695L18.9037 15.6724C20.8259 14.9888 22.9969 15.456 24.4514 16.9105C26.0714 18.5305 26.1669 20.703 25.8432 22.0502C25.7046 22.6273 24.9857 22.832 24.564 22.4102L21.7578 19.6026H19.602V21.7583L22.4037 24.5585C22.8236 24.9784 22.6211 25.6967 22.0468 25.8371C20.7222 26.161 18.5727 26.1141 16.91 24.4519C15.4555 22.9975 14.9883 20.8264 15.6719 18.9043L7.09643 10.3289C5.17424 11.0124 3.00372 10.5452 1.54874 9.09073C-0.0713787 7.47072 -0.166802 5.29827 0.156846 3.95102Z"
                  fill="#3E4095"
                />
                <path
                  d="M12.9992 18.3878L6.5003 24.8861C5.19971 26.1867 3.18459 26.3487 1.70676 25.3706L7.57794 19.5C7.87503 19.2024 7.87503 18.7199 7.57794 18.4223C7.28034 18.1252 6.79789 18.1252 6.5003 18.4223L0.629624 24.2935C-0.348483 22.8156 -0.186989 20.8005 1.11411 19.5L7.61247 13.0011L12.9992 18.3878Z"
                  fill="#3E4095"
                />
                <path
                  d="M25.9191 2.17962L23.7643 6.48866C23.6526 6.71262 23.4383 6.867 23.1905 6.90255L19.6716 7.40481L16.2305 10.8459L15.1533 9.76881L18.594 6.32818L19.0967 2.80884C19.1323 2.56101 19.2867 2.3467 19.5106 2.23498L23.8197 0.0802027C24.1127 -0.0660558 24.4672 -0.00866966 24.6987 0.222906L25.7764 1.30055C26.008 1.53212 26.0654 1.8866 25.9191 2.17962Z"
                  fill="#3E4095"
                />
              </svg>
            </div>
            <h4>Մոնտաժային աշխատանքներ</h4>
            <p>
              Ճիշտ մոնտաժումը սարքավորման երկարաժամկետ աշխատանքի գրավականն է:
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
          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clip-path="url(#clip0_427_733)">
                  <path
                    d="M25.5934 5.72813L20.2715 0.40625L18.9512 1.72656L20.3527 3.12813C20.5559 3.33125 20.5559 3.65625 20.3527 3.83906C20.2512 3.94063 20.1293 3.98125 19.9871 3.98125C19.8449 3.98125 19.723 3.94063 19.6215 3.83906L18.2402 2.4375L16.8996 3.77813L19.4996 6.37813C19.7027 6.58125 19.7027 6.90625 19.4996 7.08906C19.398 7.19063 19.2762 7.23125 19.134 7.23125C18.9918 7.23125 18.8699 7.19063 18.7684 7.08906L16.1684 4.50938L14.8277 5.85L16.2293 7.25156C16.4324 7.45469 16.4324 7.77969 16.2293 7.9625C16.1277 8.06406 16.0059 8.10469 15.8637 8.10469C15.7215 8.10469 15.5996 8.06406 15.498 7.9625L14.0965 6.56094L13.3652 7.3125L18.6871 12.6344L25.5934 5.72813Z"
                    fill="#3E4095"
                  />
                  <path
                    d="M6.56094 14.1176L7.9625 15.5192C8.16563 15.7223 8.16563 16.0473 7.9625 16.2301C7.86094 16.3317 7.73906 16.3723 7.59688 16.3723C7.45469 16.3723 7.33281 16.3317 7.23125 16.2301L5.85 14.8285L4.50938 16.1692L7.10938 18.7692C7.3125 18.9723 7.3125 19.2973 7.10938 19.4801C7.00781 19.5817 6.88594 19.6223 6.74375 19.6223C6.60156 19.6223 6.47969 19.5817 6.37813 19.4801L3.77813 16.9004L2.4375 18.241L3.83906 19.6426C4.04219 19.8457 4.04219 20.1707 3.83906 20.3535C3.7375 20.4551 3.61563 20.4957 3.47344 20.4957C3.33125 20.4957 3.20938 20.4551 3.10781 20.3535L1.70625 18.952L0.40625 20.2723L5.72813 25.5942L12.6344 18.6879L7.3125 13.366L6.56094 14.1176Z"
                    fill="#3E4095"
                  />
                  <path
                    d="M22.3438 21.1256L24.0703 19.4397L7.82031 3.1897L6.09375 4.87563L22.3438 21.1256Z"
                    fill="#3E4095"
                  />
                  <path
                    d="M4.87441 6.03345L3.18848 7.82095L19.4385 24.0709L21.1244 22.2834L4.87441 6.03345Z"
                    fill="#3E4095"
                  />
                  <path
                    d="M2.47773 7.10978L4.79336 4.79415L5.36211 4.2254L7.10898 2.47853L5.3418 0.71134C4.91523 0.284778 4.24492 0.284778 3.81836 0.71134L0.710547 3.81915C0.283984 4.24572 0.283984 4.91603 0.710547 5.34259L2.47773 7.10978Z"
                    fill="#3E4095"
                  />
                  <path
                    d="M23.0342 21.9174L20.3936 24.5377L25.5936 25.5939L24.5373 20.3939L23.0342 21.9174Z"
                    fill="#3E4095"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_427_733">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h4>Նախագծում</h4>
            <p>
              Նախագծումը համարվում է շահագործվող համակարգի հետագա գործունեության
              և հուսալիության գրավականը:
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
        </Carousel>
      </div>
      <button className={styles.watchMoreMob}>Տեսնել ավելին</button>
    </div>
  );
};

export default ServiceSection;
