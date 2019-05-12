var app = new Vue({
    el: '#app',
    data: {
        seen: true,
        todos:[
            {text:'learn JavaScript'},
            {text:'learn Vue'},
            {text:'good good study'}
        ],
        message1:'Hello Vue.js!!!!',
        message2:'Hello beauties!!!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})




