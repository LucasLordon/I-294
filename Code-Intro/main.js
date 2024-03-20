const app = Vue.createApp({
    data(){
        return{
            cart:0,
            //Editer depuis la console : mountedApp.product = 'Shoes'
            product:'Brick',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            //Editer depuis la console : mountedApp.description = 'new description'
            description:'my description',
            //Editer depuis la console : mountedApp.image = './assets/images/socks_green.jpg'
            image: './assets/images/socks_blue.jpg',
            onSale:true,
            inventory:100,
            //mountedApp.details.push('30% wool');
            details: ['50% cotton','50% cotton', '30% wool'],
            variants: [
                {id:2234,color:'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                {id: 2235,color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            activeClass: true
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        removeToCart(){
            this.cart -=1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})
//