// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

//  Animation On Scroll
import VueScrollReveal from "gridsome-scroll-reveal";

/*Import VUE Glide SLIDER JS*/
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
/*Import VUE Glide SLIDER JS*/

import VueCookies from 'vue-cookies';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  
  Vue.use(VueCookies);

  //Custom default options for all uses of the directive
  Vue.use(VueScrollReveal, {
    class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 1000,
    scale: 1,
    distance: "10px",
    mobile: false,
  });
}
