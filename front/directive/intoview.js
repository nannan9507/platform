import Vue from 'vue'
import $ from 'jquery'

const notInView = () => {
  // const pos = 
}

Vue.directive('intoview', {
  inserted(el) {
    let input = null;
    if ($(el).find('input').length > 0) {
      input = $(el).find('input')[0];

      input.addEventListener('focus', () => {
        const timestamp = Date.now();

        $(input).attr('id', timestamp);

        document.getElementById( timestamp ).scrollIntoView( true );
        // window.onresize = () => {
        //   setTimeout(() => {
        //     input.scrollIntoView();
        //   }, 0);
        // }   
      })

      input.addEventListener('blur', () => {
        setTimeout(() => {
          input.scrollIntoView(false);
        }, 0);
      })
    }
  },
  unbind() {
    window.onresize = null;
  }
})