import React from "react";
import {
  Page,
  Navbar,
  NavTitle,
  Icon,
  Swiper,
  SwiperSlide,
} from "framework7-react";
import { FormattedMessage } from "react-intl";

export default () => {
  return (
    <Page name="map" style={styles.Page}>
      <Navbar style={styles.navBar}>
        <NavTitle>
          <FormattedMessage id="store"></FormattedMessage>
        </NavTitle>
      </Navbar>
      <div className="ggmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.820539407823!2d135.1716125010636!3d34.2276003962343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b2c1a160d2c5%3A0xe10031626b806c93!2z5ZKM5q2M5bGx5Z-O!5e0!3m2!1sja!2sjp!4v1592730998897!5m2!1sja!2sjp"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <p style={styles.p}>
        <Icon f7="map_pin" style={styles.icon}></Icon>
        <FormattedMessage id="locate"></FormattedMessage>
      </p>
      <p style={styles.p}>
        <Icon f7="phone" style={styles.icon}></Icon>
        073-435-1044
      </p>
      <p style={styles.p}>
        <Icon f7="clock" style={styles.icon}></Icon>
        10:00～22:00
      </p>
      <Swiper pagination scrollbar style={styles.swiper}>
        <SwiperSlide style={styles.swiperSlide}>
          <img src="./static/images/wakayama1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.swiperSlide}>
          <img src="./static/images/wakayama1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.swiperSlide}>
          <img src="./static/images/wakayama1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Page>
  );
};

const styles = {
  Page: {
    padding: "0 10px",
  },
  navBar: {
    color: "white",
  },
  p: {
    fontFamily: "Yu Gothic",
  },
  icon: {
    color: "#31425E",
  },
  swiper: {
    width: 300,
  },
  swiperSlide: {
    height: 200,
    textAlign: "center",
  },
};
