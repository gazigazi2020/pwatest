import React from "react";

import { App, View, Views, Toolbar, Link } from "framework7-react";

import routes from "../js/routes";

import { connect } from "react-redux";

import { IntlProvider } from "react-intl";
import ja from "../locale/ja";
import en from "../locale/en";
import zh from "../locale/zh";

const chooseLocale = (locale) => {
  switch (locale) {
    case "en":
      return en;
    case "ja":
      return ja;
    case "zh":
      return zh;
    default:
      return ja;
  }
};

class App_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Framework7 Parameters
      f7params: {
        name: "My App", // App name
        theme: "auto", // Automatic theme detection

        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: "/service-worker.js",
        },
      },
    };
  }
  render() {
    return (
      <IntlProvider
        locale={this.props.lang}
        messages={chooseLocale(this.props.lang)}
      >
        <App params={this.state.f7params}>
          <Views tabs className="safe-areas">
            {/* Tabbar for switching views-tabs */}
            <Toolbar tabbar labels bottom>
              <Link
                tabLink="#view-home"
                tabLinkActive
                iconIos="f7:house_fill"
                iconAurora="f7:house_fill"
                iconMd="material:home"
                text="ホーム"
              />
              <Link
                tabLink="#view-qrReader"
                iconIos="f7:qrcode"
                iconAurora="f7:qrcode"
                iconMd="material:qrcode"
                text="QRリーダー"
              />
              <Link
                tabLink="#view-map"
                iconIos="f7:house"
                iconAurora="f7:house"
                iconMd="material:house"
                text="店舗"
              />
              <Link
                tabLink="#view-settings"
                iconIos="f7:gear"
                iconAurora="f7:gear"
                iconMd="material:settings"
                text="設定"
              />
            </Toolbar>

            {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
            <View id="view-home" main tab tabActive url="/" />
            <View id="view-qrReader" name="qrReader" tab url="/qrReader/" />
            <View id="view-map" name="qrReader" tab url="/map/" />
            {/* Settings View */}
            <View id="view-settings" name="settings" tab url="/setting/" />
          </Views>
        </App>
      </IntlProvider>
    );
  }

  componentDidMount() {
    this.$f7ready((f7) => {
      // Call F7 APIs here
    });
  }
}

function mapStateToProps(state) {
  return state.root;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App_);
