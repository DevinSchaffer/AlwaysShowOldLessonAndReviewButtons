// ==UserScript==
// @name          Always Show Top Lesson and Review buttons
// @namespace     https://www.wanikani.com
// @description   Always show the lesson and review buttons in the top bar without having to scroll below the giant buttons.
// @author        Devin Schaffer
// @version       1.0.0
// @include       https://www.wanikani.com/dashboard
// @include       https://www.wanikani.com/
// @grant         none
// ==/UserScript==

$(document).ready(function() {
    $(".navigation-shortcuts").removeClass("hidden");
});
