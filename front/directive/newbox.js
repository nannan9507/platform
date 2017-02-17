import Vue from 'vue'
import $ from 'jquery'

Vue.directive('newbox', {
  inserted(el) {
    const input = $(el).find('input')[0];

    input.addEventListener('focus', () => {
      const box = $('<div class="box"></div>');
      $('.content .home').append(box);
    })
  }
})