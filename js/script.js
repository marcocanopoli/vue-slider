var app = new Vue(
    {
        el: "#slider",
        data: {            
            movies: [
                    {
                        title: "Reservoir Dogs",
                        director: "Quentin Tarantino",
                        url: "img/reservoir-dogs.jpg"
                    },
                    {
                        title: "Pulp Fiction",
                        director: "Quentin Tarantino",
                        url: "img/pulp-fiction.png"
                    },
                    {
                        title: "Jackie Brown",
                        director: "Quentin Tarantino",
                        url: "img/jackie-brown.jpg"
                    },
                    {
                        title: "Kill Bill: Volume 1",
                        director: "Quentin Tarantino",
                        url: "img/kill-bill-1.jpg"
                    },
                    {
                        title: "Kill Bill: Volume 2",
                        director: "Quentin Tarantino",
                        url: "img/kill-bill-2.jpg"
                    },
                    {
                        title: "Grindhouse: Death Proof",
                        director: "Quentin Tarantino",
                        url: "img/grindhouse-deathproof.jpg"
                    },
                    {
                        title: "Inglourious Basterds",
                        director: "Quentin Tarantino",
                        url: "img/inglorious-basterds.jpg"
                    },
                    {
                        title: "Grindhouse: Death Proof",
                        director: "Quentin Tarantino",
                        url: "img/grindhouse-deathproof.jpg"
                    },
                    {
                        title: "The Hateful Eight",
                        director: "Quentin Tarantino",
                        url: "img/hateful-eight.jpg"
                    },
                    {
                        title: "Once Upon a Time in... Hollywood",
                        director: "Quentin Tarantino",
                        url: "img/once-upon-a-time-in-hollywood.jpg"
                    },
                ],            
            sliderIndex: 0,
            carousel: ''
        },
        methods: {
            prevImg: function() {
                this.sliderIndex--;
                if (this.sliderIndex < 0) {
                    this.sliderIndex = this.movies.length -1; 
                }
                clearInterval(this.carousel);
            }, 
            nextImg: function() {
                this.sliderIndex++;
                if (this.sliderIndex == this.movies.length) {
                    this.sliderIndex = 0; 
                }
                clearInterval(this.carousel);
            } 
        },
        created: function () {
            var carousel = setInterval (() => {
                this.sliderIndex++;
                if (this.sliderIndex == this.movies.length) {
                    this.sliderIndex = 0; 
                }
            }, 3000);
            this.carousel = carousel;
        }
    }
); 