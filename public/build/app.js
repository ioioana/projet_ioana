(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! magic.css/assets/scss/magic.scss */ "./node_modules/magic.css/assets/scss/magic.scss");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");

var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");

Vue.config.delimiters = ['${', '}']; // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
// console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // import greet from './greet';


var liens = new Vue({
  el: '#footer',
  data: {
    // message: 'Hello hey hey hey',
    facebook: 'https://fr-fr.facebook.com/',
    twitter: 'https://twitter.com/',
    mail: 'mailto:barber@shop.com'
  },
  methods: {
    showConsole: function showConsole() {// console.log(this);
    }
  },
  mounted: function mounted() {// console.log(this);
  }
});
Vue.component('carousel', {
  template: "<div class=\"carouselVue\">\n                    <slot></slot>\n                    <button class=\"carousel-control-next-icon carousel__nav carousel__next\" @click.prevent=\"next\"></button>\n                    <button class=\"carousel-control-prev-icon carousel__nav carousel__prev\" @click.prevent=\"prev\"></button>\n                    <div class=\"carousel__pagination\">\n                       <button v-for=\"n in slidesCount\" @click=\"goto(n-1)\" :class=\"{ active: n-1 == index }\"></button> \n                    </div>\n                </div>",
  data: function data() {
    // console.log(this.$children)
    return {
      index: 0,
      slides: 5,
      direction: null
    };
  },
  computed: {
    slidesCount: function slidesCount() {
      return this.slides.length;
    }
  },
  methods: {
    next: function next() {
      this.index++;
      this.direction = 'right';

      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev: function prev() {
      this.index--;
      this.direction = 'left';

      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    },
    "goto": function goto(index) {
      this.direction = index > this.index ? 'right' : 'left';
      this.index = index;
    }
  },
  mounted: function mounted() {
    this.slides = this.$children;
    this.slides.forEach(function (slide, i) {
      slide.index = i;
    }); // console.log(this.$children)
  }
});
Vue.component('carouselSlide', {
  template: "\n        <transition :name=\"transition\">\n            <div v-show=\"visible\">\n                <slot></slot>\n            </div>\n        </transition>\n    ",
  data: function data() {
    return {
      index: 0
    };
  },
  computed: {
    transition: function transition() {
      if (this.$parent.direction) {
        return 'slide-' + this.$parent.direction;
      }
    },
    visible: function visible() {
      return this.index === this.$parent.index;
    }
  }
});
new Vue({
  el: '#lecarousel',
  data: {},
  mounted: function mounted() {// console.log(this);
  }
});
$(document).ready(function () {// $('body').prepend('<h1>'+greet('jill')+'</h1>')
}); // $('.header').hover(function () {
//     $(this).addClass('magictime puffIn');
// });

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsImNvbmZpZyIsImRlbGltaXRlcnMiLCIkIiwibGllbnMiLCJlbCIsImRhdGEiLCJmYWNlYm9vayIsInR3aXR0ZXIiLCJtYWlsIiwibWV0aG9kcyIsInNob3dDb25zb2xlIiwibW91bnRlZCIsImNvbXBvbmVudCIsInRlbXBsYXRlIiwiaW5kZXgiLCJzbGlkZXMiLCJkaXJlY3Rpb24iLCJjb21wdXRlZCIsInNsaWRlc0NvdW50IiwibGVuZ3RoIiwibmV4dCIsInByZXYiLCIkY2hpbGRyZW4iLCJmb3JFYWNoIiwic2xpZGUiLCJpIiwidHJhbnNpdGlvbiIsIiRwYXJlbnQiLCJ2aXNpYmxlIiwiZG9jdW1lbnQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDhDQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx5RkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDJHQUFELENBQVA7O0FBRUEsSUFBSUMsR0FBRyxHQUFHRCxtQkFBTyxDQUFDLDJDQUFELENBQWpCOztBQUNBQyxHQUFHLENBQUNDLE1BQUosQ0FBV0MsVUFBWCxHQUF3QixDQUFDLElBQUQsRUFBTyxHQUFQLENBQXhCLEMsQ0FFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUMsQ0FBQyxHQUFHSixtQkFBTyxDQUFDLG9EQUFELENBQWpCLEMsQ0FDQTs7O0FBR0EsSUFBSUssS0FBSyxHQUFHLElBQUlKLEdBQUosQ0FBUTtBQUNoQkssSUFBRSxFQUFDLFNBRGE7QUFFaEJDLE1BQUksRUFBRTtBQUNGO0FBQ0FDLFlBQVEsRUFBRSw2QkFGUjtBQUdGQyxXQUFPLEVBQUUsc0JBSFA7QUFJRkMsUUFBSSxFQUFFO0FBSkosR0FGVTtBQVFoQkMsU0FBTyxFQUFFO0FBQ0xDLGVBQVcsRUFBRSx1QkFBWSxDQUNyQjtBQUNIO0FBSEksR0FSTztBQWFoQkMsU0FBTyxFQUFFLG1CQUFZLENBQ2pCO0FBQ0g7QUFmZSxDQUFSLENBQVo7QUFrQkFaLEdBQUcsQ0FBQ2EsU0FBSixDQUFjLFVBQWQsRUFBMEI7QUFDdEJDLFVBQVEsaWpCQURjO0FBU3RCUixNQVRzQixrQkFTZDtBQUNKO0FBQ0EsV0FBTztBQUNIUyxXQUFLLEVBQUUsQ0FESjtBQUVIQyxZQUFNLEVBQUUsQ0FGTDtBQUdIQyxlQUFTLEVBQUU7QUFIUixLQUFQO0FBS0gsR0FoQnFCO0FBaUJ0QkMsVUFBUSxFQUFFO0FBQ05DLGVBRE0seUJBQ1M7QUFDWCxhQUFPLEtBQUtILE1BQUwsQ0FBWUksTUFBbkI7QUFDSDtBQUhLLEdBakJZO0FBc0J0QlYsU0FBTyxFQUFFO0FBQ0xXLFFBREssa0JBQ0c7QUFDSixXQUFLTixLQUFMO0FBQ0EsV0FBS0UsU0FBTCxHQUFpQixPQUFqQjs7QUFDQSxVQUFJLEtBQUtGLEtBQUwsSUFBYyxLQUFLSSxXQUF2QixFQUFvQztBQUNoQyxhQUFLSixLQUFMLEdBQWEsQ0FBYjtBQUNIO0FBQ0osS0FQSTtBQVFMTyxRQVJLLGtCQVFHO0FBQ0osV0FBS1AsS0FBTDtBQUNBLFdBQUtFLFNBQUwsR0FBaUIsTUFBakI7O0FBQ0EsVUFBSSxLQUFLRixLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsYUFBS0EsS0FBTCxHQUFhLEtBQUtJLFdBQUwsR0FBbUIsQ0FBaEM7QUFDSDtBQUNKLEtBZEk7QUFBQSwwQkFlQ0osS0FmRCxFQWVRO0FBQ1QsV0FBS0UsU0FBTCxHQUFpQkYsS0FBSyxHQUFHLEtBQUtBLEtBQWIsR0FBcUIsT0FBckIsR0FBK0IsTUFBaEQ7QUFDQSxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQWxCSSxHQXRCYTtBQTBDdEJILFNBQU8sRUFBRyxtQkFBVztBQUNqQixTQUFLSSxNQUFMLEdBQWMsS0FBS08sU0FBbkI7QUFDQSxTQUFLUCxNQUFMLENBQVlRLE9BQVosQ0FBb0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDOUJELFdBQUssQ0FBQ1YsS0FBTixHQUFjVyxDQUFkO0FBQ0gsS0FGRCxFQUZpQixDQUtqQjtBQUNIO0FBaERxQixDQUExQjtBQW1EQTFCLEdBQUcsQ0FBQ2EsU0FBSixDQUFjLGVBQWQsRUFBK0I7QUFDM0JDLFVBQVEscUtBRG1CO0FBUTNCUixNQVIyQixrQkFRbkI7QUFDSixXQUFPO0FBQ0hTLFdBQUssRUFBRTtBQURKLEtBQVA7QUFHSCxHQVowQjtBQWEzQkcsVUFBUSxFQUFFO0FBQ05TLGNBRE0sd0JBQ1E7QUFDVixVQUFJLEtBQUtDLE9BQUwsQ0FBYVgsU0FBakIsRUFBNEI7QUFDeEIsZUFBTyxXQUFXLEtBQUtXLE9BQUwsQ0FBYVgsU0FBL0I7QUFDSDtBQUNKLEtBTEs7QUFNTlksV0FOTSxxQkFNSztBQUNQLGFBQU8sS0FBS2QsS0FBTCxLQUFlLEtBQUthLE9BQUwsQ0FBYWIsS0FBbkM7QUFDSDtBQVJLO0FBYmlCLENBQS9CO0FBeUJBLElBQUlmLEdBQUosQ0FBUTtBQUNKSyxJQUFFLEVBQUUsYUFEQTtBQUVKQyxNQUFJLEVBQUUsRUFGRjtBQUlKTSxTQUFPLEVBQUcsbUJBQVcsQ0FDakI7QUFDSDtBQU5HLENBQVI7QUFTQVQsQ0FBQyxDQUFDMkIsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVSxDQUN6QjtBQUNGLENBRkQsRSxDQUtBO0FBQ0E7QUFDQSxNIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnbWFnaWMuY3NzL2Fzc2V0cy9zY3NzL21hZ2ljLnNjc3MnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJyk7XG5cbnZhciBWdWUgPSByZXF1aXJlKCd2dWUnKTtcblZ1ZS5jb25maWcuZGVsaW1pdGVycyA9IFsnJHsnLCAnfSddO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIGNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG5cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIGltcG9ydCBncmVldCBmcm9tICcuL2dyZWV0JztcblxuXG52YXIgbGllbnMgPSBuZXcgVnVlKHtcbiAgICBlbDonI2Zvb3RlcicsXG4gICAgZGF0YToge1xuICAgICAgICAvLyBtZXNzYWdlOiAnSGVsbG8gaGV5IGhleSBoZXknLFxuICAgICAgICBmYWNlYm9vazogJ2h0dHBzOi8vZnItZnIuZmFjZWJvb2suY29tLycsXG4gICAgICAgIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tLycsXG4gICAgICAgIG1haWw6ICdtYWlsdG86YmFyYmVyQHNob3AuY29tJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaG93Q29uc29sZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgfVxufSk7XG5cblZ1ZS5jb21wb25lbnQoJ2Nhcm91c2VsJywge1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcm91c2VsVnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIGNhcm91c2VsX19uYXYgY2Fyb3VzZWxfX25leHRcIiBAY2xpY2sucHJldmVudD1cIm5leHRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIGNhcm91c2VsX19uYXYgY2Fyb3VzZWxfX3ByZXZcIiBAY2xpY2sucHJldmVudD1cInByZXZcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsX19wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1mb3I9XCJuIGluIHNsaWRlc0NvdW50XCIgQGNsaWNrPVwiZ290byhuLTEpXCIgOmNsYXNzPVwieyBhY3RpdmU6IG4tMSA9PSBpbmRleCB9XCI+PC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgIGRhdGEgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRjaGlsZHJlbilcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgc2xpZGVzOiA1LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNsaWRlc0NvdW50ICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuZXh0ICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrK1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLnNsaWRlc0NvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJldiAoKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4LS1cbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5zbGlkZXNDb3VudCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ290byAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gaW5kZXggPiB0aGlzLmluZGV4ID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLiRjaGlsZHJlblxuICAgICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuICAgICAgICAgICAgc2xpZGUuaW5kZXggPSBpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJGNoaWxkcmVuKVxuICAgIH1cbn0pO1xuXG5WdWUuY29tcG9uZW50KCdjYXJvdXNlbFNsaWRlJywge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVwidHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJ2aXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICBgLFxuICAgIGRhdGEgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdHJhbnNpdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc2xpZGUtJyArIHRoaXMuJHBhcmVudC5kaXJlY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gdGhpcy4kcGFyZW50LmluZGV4XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxubmV3IFZ1ZSh7XG4gICAgZWw6ICcjbGVjYXJvdXNlbCcsXG4gICAgZGF0YToge1xuICAgIH0sXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uICgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgIC8vICQoJ2JvZHknKS5wcmVwZW5kKCc8aDE+JytncmVldCgnamlsbCcpKyc8L2gxPicpXG59KTtcblxuXG4vLyAkKCcuaGVhZGVyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuLy8gICAgICQodGhpcykuYWRkQ2xhc3MoJ21hZ2ljdGltZSBwdWZmSW4nKTtcbi8vIH0pO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==