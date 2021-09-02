Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        albumList: "",

    },
    methods: {

    },

    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((r) => {
                const response = r.data.response;
                this.albumList = response;
                console.log(this.albumList);
            });
    }

});
