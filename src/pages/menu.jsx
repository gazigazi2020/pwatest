import React from "react";
import { Page, Navbar, NavTitle, List, ListItem } from "framework7-react";
import { getMenuById } from "../js/getMenu";
import Recommend from "./menuComponents/recommend";
import { FormattedMessage } from "react-intl";

export default ({ id }) => {
  const { price, description, imgSrc, name } = getMenuById(id)[0];
  return (
    <Page name="menu" style={styles.page}>
      <Navbar backLink="戻る" style={styles.navBar}>
        <NavTitle style={styles.title}>{name.ja}</NavTitle>
      </Navbar>
      <img src={imgSrc} style={styles.image} />
      <div style={styles.content}>
        <div className="menu-recommend" style={styles.recommend}>
          ★
        </div>
        <div className="menu-info">
          <div style={styles.name}>{name.ja}</div>
          <div style={styles.price}>
            {price}円<span style={styles.tax}>(税込{price * 1.1}円)</span>
          </div>
        </div>
        <div className="menu-discribe">
          <p>{description.ja}</p>
        </div>
      </div>
    </Page>
  );
};

const styles = {
  page: {
    backgroundColor: "white",
  },
  title: {
    color: "white",
  },
  navBar: {
    color: "white",
  },
  image: {
    height: 300,
    objectFit: "cover",
  },
  list: {
    margin: 0,
  },
  content: {
    margin: "10px 50px",
  },
  recommend: {
    marginLeft: -30,
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#31425E",
    alignSelf: "center",
  },
  price: {
    fontSize: "1.5rem",
    paddingLeft: 10,
    borderLeft: "solid 5px #31425E",
  },
  tax: {
    display: "block",
    fontSize: "1rem",
  },
};
