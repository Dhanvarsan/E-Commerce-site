<template>
    <div>
        <nav-bar @FilterDatas="FilterDatas" @searchText="searchText"></nav-bar>
        <div class="main-wrapper">
            <div class="container">
                <div class="all-cards df">
                    <div v-for="item in FilteredCardDataSource" :key="item.id" class="card">
                        <div class="img-container">
                            <img :src="item.images[0]" alt="">
                        </div>
                        <div class="df">
                            <button class="addCart df" @click="AddCart(item)">
                                <p class="df">{{ item.itemCount ? item.itemCount: 0  }}</p>
                                <span>+ Cart</span>
                                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="addCart df" @click="BuyNow(item)">
                                <!-- <p class="df">{{ item.itemCount ? item.itemCount: 0  }}</p> -->
                                <span>Buy Now</span>
                                <!-- <i class="fa-sharp fa-solid fa-cart-shopping"></i> -->
                            </button>
                        </div>
                        <div class="card-body">
                            <h3>{{ item.title }}</h3>
                            <span>{{ item.brand }}</span>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
                            <h1>Rs.{{ item.price }}</h1>
                        </div>
                    </div>
                </div>
                <div class="cus-toaster df"><span>{{ msg }} - Added to cart</span><img style="width: 20px;" src="../../assets/imgs/Check_green.png" alt=""></div>
            </div>
        </div>
        <div class="footer-wrapper">
            <div class="container">
                <div class="df" style="flex-direction: column; gap: 40px">
                    <span>Thanks for Shopping</span>
                    <i style="font-size: 14px;font-weight: 100;">copyrights &copy; <a href="https://github.com/Dhanvarsan" style="color: lightgray;" target="blank">Dhanvarsan</a></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from "../components/nav-bar";
import { appDataStore } from '../stores/vueStores'
import { mapActions,mapState } from "pinia";
    export default {
        name: "MainComponent",
        components:{
            'nav-bar' : navBar
        },
        data() {
            return {
                cardDataSource: [],
                FilteredCardDataSource: [],
                AddToCart: [],
                msg: '',
            }
        },
        mounted() {
            this.getProducts()
            
        },
        computed: {
            ...mapState(appDataStore,['cartDatas']),
        },
        methods:{
            ...mapActions(appDataStore,['setCartDatas','setOrderDates']),
            async getProducts(){
                await fetch('https://dummyjson.com/products')
                .then(async res => {
                    let response = await res.json()
                    this.cardDataSource = response.products
                    this.FilteredCardDataSource = this.cardDataSource
                })
            },
            FilterDatas(category){
                if(category == 'home') this.getProducts()
                else {
                    if(category) {
                        this.FilteredCardDataSource = this.cardDataSource.filter((e) => {
                            return e.category == category
                        })
                    }
                    else {
                        this.FilteredCardDataSource = this.cardDataSource.filter((e) => {
                            return e.category != 'smartphones' && e.category != 'laptops'
                        })
                    }   
                }
            },
            searchText(txt){
                this.FilteredCardDataSource = this.cardDataSource.filter((e) => {
                    return e.title.toLowerCase().includes(txt)
                })
            },
            BuyNow(item){
                this.setOrderDates(item)
                this.$router.push('/orders')
            },
            async AddCart(item){
                const isItemInCart = this.cartDatas.filter(el => el.id == item.id);
                this.msg = await item.title
                document.querySelector('.cus-toaster').classList.add('showToaster')
                setTimeout(() => {
                    document.querySelector('.cus-toaster').classList.remove('showToaster')
                }, 1000);
                if (isItemInCart.length == 0) {
                    item.itemCount = 1
                    this.setCartDatas(item); //storing in stores
                }
                else{
                    this.cartDatas.forEach((el) => { //to add count to existing cart item
                        if(el.id == item.id) {
                            el.itemCount +=1
                        }
                    })
                }
            }
        }
    }
</script>