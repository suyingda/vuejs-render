



<template>
    <div>
        {{array}}
        <!--    <anchored :array="array"></anchored> -->
        <div @click="ab()">点击</div>
    </div>
</template>
<script>
import Vue from 'vue'
Vue.component('anchored', {
    /*   render: function(createElement) {
          return createElement('h1', 'dd')
      } */
    /*  render: function(createElement) {
         return createElement(
             'h' + '9999',
             [
                 createElement(
                     'a',
                     {
                         domProps: {
                             href: '#8888',
 
                         },
                         class: 'woshi'
                     },
                     '我是内容'
                 )
             ]
         )
     } */
    props: {
        array: {
            type: Array
        }
    },
    render: function(createElement) {
        return createElement(
            'div', this.array
            /*   Array.apply(null, { length: 20 }).map(function() {
                  console.log(1)
                  return createElement('h1', '苏英大')
              }) */
        )
    }
})
export default {
    name: 'an',
    data() {
        return {
            list: 1,
            // array: ['1', '2', '4']
            array: {
                render: (a, { column, index, row }) => { return h('div', {}, [`${row}`]); },
            }

        }
    },
    methods: {
        ab() {
            this.array = ['1', '2', '4']

        }
    },
    mounted() {


    }

}
</script>
