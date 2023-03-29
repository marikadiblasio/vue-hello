const {createApp} = Vue;

createApp({
    data(){
        return {
            title: 'Vue Hello!',
            image: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
        }
    }
}).mount('#app');