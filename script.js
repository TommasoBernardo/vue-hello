// creo una nuova istanza di Vue nella variabile createApp
const { createApp } = Vue;

// popoliamo la nostra istanza di Vue con i dati che vogliamo inserire
createApp({
    data() {
        return {
            title : `Ciao vue`,
            imageSrc : 'ciao a tutti ',
        }
    },

    methods: {

    }


}).mount('#app');