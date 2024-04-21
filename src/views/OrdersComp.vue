<template>
    <div>
     <nav-bar/>
     <div v-if="orderData.length < 1" class="df" style="height:90vh;flex-direction: column; gap: 40px">
        <img style="width: 150px;" src="../../assets/no_orders.png" alt="">
        <span class="cart-h">No Orders Placed</span>
        <router-link to="/">
            <button class="bkBtn">Continue Shopping</button>
        </router-link>
    </div>
    <div v-else>
        <h1 class="cart-h" style="text-align: center;margin: 40px 0">My Orders</h1>
            <div class="cart-table df" style="gap: 20px;">
                    <table>
                        <thead>
                            <th>Product Details</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="df">
                                        <img :src="orderData.thumbnail" alt="">
                                        <div class="pro-descp">
                                            <h4>{{ orderData.brand }}</h4>
                                            <h5>{{ orderData.title }}</h5>
                                            <p>color: White</p>
                                        </div>
                                    </div>
                                </td>
                                <td>1</td>
                                <td>&#x20b9; {{orderData.price}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="checkout-card">
                        <h3>Order Summary</h3>
                        <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>&#x20b9; {{ orderData.price }}</span>
                        </div>
                        <div class="summary-row">
                        <span>SGST (7%):</span>
                        <span>&#x20b9; {{ calculateTax(orderData.price, 0.07) }}</span>
                        </div>
                        <div class="summary-row">
                        <span>CGST (7%):</span>
                        <span>&#x20b9; {{ calculateTax(orderData.price, 0.07) }}</span>
                        </div>
                        <div class="summary-row total">
                        <span>Total:</span>
                        <span>&#x20b9; {{ calculateTotal(orderData.price) }}</span>
                        </div>
                        <div class="address">
                        <h4>Shipping Address:</h4>
                        <p>Bangalore, India</p>
                        </div>
                        <button class="checkout-btn" @click="orderPlaced()">Proceed to Checkout</button>
                    </div>
                </div>
        </div>
        <router-link to="/" class="df" style="margin: 40px 0 0;">
            <button class="bkBtn">Continue Shopping</button>
        </router-link>
        <div v-if="orderSuccess">
            <img class="order_place_img" src="../../assets/Order_placed.jpg" alt="">
        </div>
     </div>
</template>

<script>
import navBar from "../components/nav-bar";
import { appDataStore } from '../stores/vueStores'
import { mapState } from "pinia";
    export default {
        data() {
            return {
                orderSuccess: false
            }
        },
        components:{
            'nav-bar' : navBar
        },
        computed:{
            ...mapState(appDataStore,['orderData'])
        },
        methods: {
            orderPlaced(){
                this.orderSuccess = true
                setTimeout(() => {
                    this.orderSuccess = false
                    this.orderData = []
                    this.$router.push('/')
                }, 2000);
            },
            calculateTax(price, taxRate) {
                return (price * taxRate).toFixed(2);
            },
            calculateTotal(price) {
                const tax = price * 0.07; // 7% SGST + 7% CGST
                return (price + tax * 2).toFixed(2);
            }
        },
    }
</script>