Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        albumList: [],

    },

    computed: {
        orderedAlbums() {
            return this.albumList.sort((a, b) => {
                return a.year - b.year;
            })
        }
    },
    methods: {

    },

    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((r) => {
                this.albumList = r.data.response;
                console.log(this.albumList);
            });
    }

});
