import React, { useState } from "react";
import { Page, Navbar, NavTitle } from "framework7-react";
import jsQR from "jsqr";

export default () => {
  const [modalvisible, setModalvisible] = useState(false);
  var canvas;
  var ctx;

  const checkImage = () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    if (code) {
      alert(code.data);
    } else {
      setTimeout(() => {
        checkImage();
      }, 200);
    }
  };

  function startCamera() {
    canvas = document.querySelector("#js-canvas");
    console.log(document.querySelector("#js-canvas"));
    ctx = canvas.getContext("2d");
    const video = document.querySelector("#js-video");

    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: {
            exact: "environment",
          },
        },
      })
      .then(function (stream) {
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {});
  }

  function stopCamera() {
    const video = document.querySelector("#js-video");

    video.onloadedmetadata = null;
  }

  return (
    <Page
      onPageTabShow={() => {
        startCamera();
      }}
      onPageTabHide={() => {
        stopCamera();
      }}
    >
      <div className="reader">
        <video
          id="js-video"
          className="reader-video"
          autoPlay
          playsInline
        ></video>
      </div>
      <div style={{ display: "none" }}>
        <canvas id="js-canvas"></canvas>
      </div>
    </Page>
  );
};
