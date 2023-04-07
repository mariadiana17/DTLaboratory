var app = new Vue({
    el: '#app',
    data: {
        message: '',
        rasp:''
    },
    methods: {
        process: function(){
            if(this.message=='123')
            {
                this.rasp="Mesajul este egal cu 123";
            }
            else{
                this.rasp="Mesajul nu este egal cu 123";
            }

        }
    }
})