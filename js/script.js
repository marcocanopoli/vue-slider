// images: [
            //     {
            //         title: "Reservoir Dogs",
            //         url: "img/reservoir-dogs.jpg"
            //     },
            //     {
            //         title: "Pulp Fiction",
            //         url: "img/pulp-fiction.png"
            //     },
            //     {
            //         title: "Jackie Brown",
            //         url: "img/jackie-brown.jpg"
            //     },
            //     {
            //         title: "Kill Bill: Volume 1",
            //         url: "img/kill-bill-1.jpg"
            //     },
            //     {
            //         title: "Kill Bill: Volume 2",
            //         url: "img/kill-bill-2.jpg"
            //     },
            //     {
            //         title: "Grindhouse: Death Proof",
            //         url: "img/grindhouse-deathproof.jpg"
            //     },
            //     {
            //         title: "Inglourious Basterds",
            //         url: "img/inglorious-basterds.jpg"
            //     },
            //     {
            //         title: "Grindhouse: Death Proof",
            //         url: "img/grindhouse-deathproof.jpg"
            //     },
            //     {
            //         title: "The Hateful Eight",
            //         url: "img/hateful-eight.jpg"
            //     },
            //     {
            //         title: "Once Upon a Time in... Hollywood",
            //         url: "img/once-upon-a-time-in-hollywood.jpg"
            //     },
            // ],

var app = new Vue(
    {
        el: "#slider",
        data: {
            imgUrls: [
                "img/reservoir-dogs.jpg",
                "img/pulp-fiction.png",
                "img/jackie-brown.jpg",
                "img/kill-bill-1.jpg",
                "img/kill-bill-2.jpg",
                "img/grindhouse-deathproof.jpg",
                "img/inglorious-basterds.jpg",
                "img/hateful-eight.jpg",
                "img/django-unchained.jpg",
                "img/once-upon-a-time-in-hollywood.jpg",
            ],            
            sliderIndex: 0
        },
        methods: {
            prevImg: function() {
                this.sliderIndex--;
                if (this.sliderIndex < 0) {
                    this.sliderIndex = this.imgUrls.length -1; 
                }
            }, 
            nextImg: function() {
                this.sliderIndex++;
                if (this.sliderIndex == this.imgUrls.length) {
                    this.sliderIndex = 0; 
                }
            } 
        },
        created: function () {
            setInterval (() => {
                console.log(this) ;
                this.sliderIndex++;
                if (this.sliderIndex == this.imgUrls.length) {
                    this.sliderIndex = 0; 
                } 
            }, 3000);
        }
    }
); 