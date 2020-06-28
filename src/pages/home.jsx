import React, { useState, Fragment } from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Card,
  CardHeader,
  CardContent,
  Row,
  Col,
  CardFooter,
  Link,
  Toolbar,
  Block,
  Segmented,
  Button,
} from "framework7-react";
import Menu from "./homeComponents/menu";
import menus from "../js/getMenu";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

const menuComponents = () => {
  var menus1 = [...menus][Symbol.iterator]();
  var components = [];
  while (true) {
    var menu1 = menus1.next();
    var menu2 = menus1.next();
    if (menu1.done) break;
    if (menu2.done) {
      components.push(
        <Fragment>
          <Col>
            <Menu menu={menu1.value}></Menu>
          </Col>
        </Fragment>
      );
      break;
    }
    components.push(
      <Fragment>
        <Col>
          <Menu menu={menu1.value}></Menu>
        </Col>
        <Col>
          <Menu menu={menu2.value}></Menu>
        </Col>
      </Fragment>
    );
  }
  return components;
};

const OneColumn = (
  <Fragment>
    {menus.map((menu) => (
      <Col key={menu.id}>
        <Menu menu={menu}></Menu>
      </Col>
    ))}
  </Fragment>
);
const TwoColumn = (
  <Fragment>
    {menuComponents().map((com, i) => (
      <Row key={i} noGap>
        {com}
      </Row>
    ))}
  </Fragment>
);

export default () => {
  const { lang } = useSelector((state) => state.root);
  function chageColumns(isOneColumn) {
    if (isOneColumn) {
      setisOne(true);
    } else {
      setisOne(false);
    }
  }
  const [isOne, setisOne] = useState(true);
  return (
    <Page
      name="home"
      style={{
        padding: 10,
      }}
    >
      {/* Top Navbar */}
      <Navbar style={styles.navBar}>
        <NavTitle style={styles.title}>
          <FormattedMessage id="home" />
        </NavTitle>
      </Navbar>
      {/* Page content */}
      {isOne ? OneColumn : TwoColumn}
    </Page>
  );
};

const styles = {
  title: {
    color: "white",
  },
  navBar: {},
};
