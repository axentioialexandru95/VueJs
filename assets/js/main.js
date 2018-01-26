/**
 * Created by anubis on 1/26/2018.
 */
var app = new Vue({
    el: '#app',
    data: {
        newName: '',
        names: ['Alex','John Doe','Michael'],
        title: 'This is the title',
        className: 'color-red'
    },

    methods: {
        addName: function () {
            this.names.push(this.newName);

            this.newName = '';
        }
    }
})