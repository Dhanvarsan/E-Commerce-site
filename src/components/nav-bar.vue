<template>
    <div>
        <div class="loader df" v-if="showLoader"><img src="../../assets/imgs/Loader.gif" alt=""></div>
        <div class="nav-wrapper">
            <div class="container">
                <div class="df sb" style="padding: 0 30px;">
                    <i class="fa-solid fa-globe"></i>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </div>
        <div class="menu-wrapper" v-if="this.$route.path != '/orders' && this.$route.path != '/cart'">
            <div class="container">
                <nav>
                    <ul class="df" style="padding: 0 30px;">
                        <li><a href=""><img style="width: 50px;" src="../../assets/Brand_logo.png" alt=""></a></li>
                        <div class="df">
                            <router-link to="/" @click.stop="FilterData('home')">Home</router-link>
                            <a @click.stop="FilterData('smartphones')">Mobile</a>
                            <a @click.stop="FilterData('laptops')">Laptop</a>
                            <a @click.stop="FilterData()">Others</a>
                            <router-link to="/orders" @click.stop="FilterData()">Orders</router-link>
                        </div>
                        <div>
                            <input type="text" placeholder="Search...." @input="SearchData($event)">
                        </div>
                        <router-link to="/cart">
                        <button class="cart df" style="gap: 10px;">
                            <span>Cart</span>
                            <p class="cart-count">{{ cartDatas ? cartDatas.length : 0 }}</p>
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                        </button>
                    </router-link>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>

    import { appDataStore } from '../stores/vueStores'
    import { mapState } from "pinia";
    export default {
      name:'navBar',
      data() {
        return {
            showLoader: false
        }
      },
      computed: {
        ...mapState(appDataStore,['cartDatas'])
      },
      methods: {
        FilterData(item){
            this.showLoader = true
            this.$emit('FilterDatas',item)
            setTimeout(() => {
                this.showLoader = false
            }, 1000);
        },
        SearchData(e){
            this.$emit('searchText',e.target.value)
        }
      },
    }
</script>
<style>
.loader::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    margin: auto;
    background-color: #efefef;
}
.loader{
    height: 100vh;
}
.loader img{
    width: 150px;
    position: relative;
    z-index: 11;
}
</style>