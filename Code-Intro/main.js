const app = Vue.createApp({
    data(){
        return{
            //Editer depuis la console : mountedApp.product = 'Shoes'
            product:'Brick',
            //Editer depuis la console : mountedApp.description = 'new description'
            description:'my description',
            //Editer depuis la console : mountedApp.image = './assets/images/socks_green.jpg'
            image: './assets/images/socks_blue.jpg',
            onSale:true,
            inStock:false,
            inventory:100
        }
    }
})
//