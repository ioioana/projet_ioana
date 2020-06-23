/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
require('../css/app.scss');
require('bootstrap');
require('magic.css/assets/scss/magic.scss');
require('@fortawesome/fontawesome-free/css/all.css');

var Vue = require('vue');
Vue.config.delimiters = ['${', '}'];

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

// console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

const $ = require('jquery');
// import greet from './greet';


var liens = new Vue({
    el:'#footer',
    data: {
        // message: 'Hello hey hey hey',
        facebook: 'https://fr-fr.facebook.com/',
        twitter: 'https://twitter.com/',
        mail: 'mailto:barber@shop.com'
    },
    methods: {
        showConsole: function () {
            // console.log(this);
        }
    },
    mounted: function () {
        // console.log(this);
    }
});

Vue.component('carousel', {
    template: `<div class="carouselVue">
                    <slot></slot>
                    <button class="carousel-control-next-icon carousel__nav carousel__next" @click.prevent="next"></button>
                    <button class="carousel-control-prev-icon carousel__nav carousel__prev" @click.prevent="prev"></button>
                    <div class="carousel__pagination">
                       <button v-for="n in slidesCount" @click="goto(n-1)" :class="{ active: n-1 == index }"></button> 
                    </div>
                </div>`,
    data () {
        // console.log(this.$children)
        return {
            index: 0,
            slides: 5,
            direction: null
        }
    },
    computed: {
        slidesCount () {
            return this.slides.length
        }
    },
    methods: {
        next () {
            this.index++
            this.direction = 'right'
            if (this.index >= this.slidesCount) {
                this.index = 0
            }
        },
        prev () {
            this.index--
            this.direction = 'left'
            if (this.index < 0) {
                this.index = this.slidesCount - 1
            }
        },
        goto (index) {
            this.direction = index > this.index ? 'right' : 'left'
            this.index = index
        }
    },
    mounted : function (){
        this.slides = this.$children
        this.slides.forEach((slide, i) => {
            slide.index = i
        })
        // console.log(this.$children)
    }
});

Vue.component('carouselSlide', {
    template: `
        <transition :name="transition">
            <div v-show="visible">
                <slot></slot>
            </div>
        </transition>
    `,
    data () {
        return {
            index: 0
        }
    },
    computed: {
        transition () {
            if (this.$parent.direction) {
                return 'slide-' + this.$parent.direction
            }
        },
        visible () {
            return this.index === this.$parent.index
        }
    }
});

new Vue({
    el: '#lecarousel',
    data: {
    },
    mounted : function (){
        // console.log(this);
    }
});

$(document).ready(function(){
   // $('body').prepend('<h1>'+greet('jill')+'</h1>')
});


// $('.header').hover(function () {
//     $(this).addClass('magictime puffIn');
// });



