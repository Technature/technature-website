"use client"
import Image from "next/image"
import { useEffect } from 'react';


function ImageDistort({src}) {

      useEffect(() => {
            var container = document.getElementById('distortContainer');
            var inner = document.getElementById('distortInner');

            var onMouseEnterHandler = function (event) {
                  update(event);
            };
            var onMouseLeaveHandler = function () {
                  inner.style = "";
            };
            var onMouseMoveHandler = function (event) {
                  if (isTimeToUpdate()) {
                        update(event);
                  }
            };

            container.onmouseenter = onMouseEnterHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmousemove = onMouseMoveHandler;


            var counter = 0;
            var updateRate = 10;
            var isTimeToUpdate = function () {
                  return counter++ % updateRate === 0;
            };



            // Init
            var container = document.getElementById('distortContainer');
            var inner = document.getElementById('distortInner');
            // Mouse 
            var mouse = {
                  _x: 0,
                  _y: 0,
                  x: 0,
                  y: 0,
                  updatePosition: function (event) {
                        var e = event || window.event;
                        this.x = e.clientX - this._x;
                        this.y = (e.clientY - this._y) * -1;
                  },
                  setOrigin: function (e) {
                        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
                  },
                  show: function () { return '(' + this.x + ', ' + this.y + ')'; }
            }
            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);


            var update = function (event) {
                  mouse.updatePosition(event);
                  updateTransformStyle(
                        (mouse.y / inner.offsetHeight / 2).toFixed(2),
                        (mouse.x / inner.offsetWidth / 2).toFixed(2)
                  );
            };

            var updateTransformStyle = function (x, y) {
                  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                  inner.style.transform = style;
                  inner.style.webkitTransform = style;
                  inner.style.mozTransform = style;
                  inner.style.msTransform = style;
                  inner.style.oTransform = style;
            };
      }, []);





      return (
            <div id="distortContainer" className="distortContainer ">
                  <div id="distortInner" className="distortInner lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] xs:w-[250px] xs:h-[250px]: sm:w-[300px] sm:h-[300px]  md:w-[350px] md:h-[350px]">
                        <Image alt="distort effect" src={src} fill={true}  style={{ objectFit: "contain" }}></Image>
                  </div>
            </div>


      );
}

export default ImageDistort;