import React, { useState } from "react";
import {
  Page,
  Navbar,
  NavTitle,
  List,
  ListItem,
  Segmented,
  Button,
} from "framework7-react";
import { useDispatch, useSelector } from "react-redux";
import action from "../redux/action";
import { FormattedMessage } from "react-intl";

export default () => {
  const { lang } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  function changeLanguage(langage) {
    dispatch(action.changeLang(langage));
  }
  console.log(lang);
  return (
    <Page>
      <Navbar style={styles.navBar}>
        <NavTitle>
          <FormattedMessage id="setting"></FormattedMessage>
        </NavTitle>
      </Navbar>
      <List>
        <ListItem style={styles.listItem}>
          <div>
            <FormattedMessage id="langage"></FormattedMessage>
          </div>
          <Segmented raised style={styles.segment}>
            <Button active={lang == "ja"} onClick={() => changeLanguage("ja")}>
              日本語
            </Button>
            <Button active={lang == "en"} onClick={() => changeLanguage("en")}>
              English
            </Button>
            <Button active={lang == "zh"} onClick={() => changeLanguage("zh")}>
              中文
            </Button>
          </Segmented>
        </ListItem>
      </List>
    </Page>
  );
};

const styles = {
  title: {
    color: "white",
  },
  navBar: {
    color: "white",
  },
  listItem: {},
  segment: {
    width: 300,
  },
};
