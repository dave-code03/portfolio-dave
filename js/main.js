"use strict";

/* ==========================================
   DAVE DEV PORTFOLIO
   Main JavaScript File
========================================== */

/* ==========================================
   APPLICATION
========================================== */

const App = {

    cacheDOM() {

        console.log("DOM Ready");

    },

    bindEvents() {

        console.log("Events Ready");

    },

    start() {

        console.log("Application Started");

    },

    init() {

        this.cacheDOM();

        this.bindEvents();

        this.start();

        console.log("Dave Dev Portfolio initialized.");

    }

};

App.init();
