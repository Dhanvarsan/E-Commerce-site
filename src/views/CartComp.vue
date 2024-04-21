<template>
    <div class="main">
        <div class="overlay" v-if="showConfirmation"></div>
        <nav-bar/>
        <!-- {{ cartDatas }} -->
        <div class="cart-wrapper">
            <div class="container">
                <div class="df" style="position: relative;margin-bottom: 40px;">
                    <router-link to="/" style="position: absolute;left: 20px;">
                        <button class="bkBtn">Continue Shopping</button>
                    </router-link>
                    <h1 class="cart-h">Shopping Cart</h1>
                </div>
                <div class="cart-table df" style="gap: 20px;">
                    <table>
                        <thead>
                            <th>Product Details</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </thead>
                        <tbody v-if="cartDatas.length > 0">
                            <tr v-for="item in cartDatas" :key="item.id" style="position: relative;">
                                <td>
                                    <button class="close-btn" @click="deletedCartItem(item)"><i class="fas fa-trash"></i></button>
                                    <div class="df">
                                        <img :src="item.thumbnail" alt="">
                                        <div class="pro-descp">
                                            <h4>{{ item.brand }}</h4>
                                            <h5>{{ item.title }}</h5>
                                            <p>color: White</p>
                                        </div>
                                    </div>
                                </td>
                                <td><input class="qtyField" type="number" min="1" v-model="item.itemCount" @input.prevent="item.itemCount == 0"></td>
                                <td>&#x20b9; {{item.price}}</td>
                                <td>&#x20b9; {{item.price *item.itemCount}}</td>
                            </tr>
                        </tbody>
                        <div v-else style="padding: 20px 0;">
                            <p style="position: absolute;left: 0;right: 0;" class="df">No Item added in cart</p>
                        </div>
                    </table>
                    <div class="checkout-card" v-if="cartDatas.length > 0">
                        <h3>Order Summary</h3>
                        <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>&#x20b9; {{ calculatedTotalPrice }}</span>
                        </div>
                        <div class="summary-row">
                        <span>SGST (7%):</span>
                        <span>&#x20b9; {{ calculateTax(calculatedTotalPrice, 0.07) }}</span>
                        </div>
                        <div class="summary-row">
                        <span>CGST (7%):</span>
                        <span>&#x20b9; {{ calculateTax(calculatedTotalPrice, 0.07) }}</span>
                        </div>
                        <div class="summary-row total">
                        <span>Total:</span>
                        <span>&#x20b9; {{ calculateTotal(calculatedTotalPrice) }}</span>
                        </div>
                        <div class="address">
                        <h4>Shipping Address:</h4>
                        <p>Bangalore, India</p>
                        </div>
                        <button class="checkout-btn" @click="orderPlaced()">Proceed to Checkout</button>
                    </div>
                </div>
                <div v-if="showConfirmation" class="confirmation-dialog df">
                    <p>Are you sure you want to delete this item?</p>
                    <div class="btn-sec">
                        <button @click="deleteItem(true)">Delete</button>
                        <button @click="deleteItem(false)">Cancel</button>
                    </div>
                </div>
                <div v-if="orderSuccess">
                    <img class="order_place_img" src="../assets/Order_placed.jpg" alt="">
                </div>
            </div>
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
                showConfirmation: false,
                itemToDelete: null,
                orderSuccess: false
            }
        },
        components:{
            'nav-bar' : navBar
        }, 
        computed: {
            ...mapState(appDataStore,['cartDatas']),
            calculatedTotalPrice(){
                let total = 0;
                for (let i = 0; i < this.cartDatas.length; i++) {
                    total += this.cartDatas[i].price * this.cartDatas[i].itemCount;
                }
                return total;
            }
        },
        methods: {
            calculateTax(price, taxRate) {
                return (price * taxRate).toFixed(2);
            },
            orderPlaced(){
                this.orderSuccess = true
                setTimeout(async () => {
                    this.orderSuccess = false
                    this.cartDatas = []
                    await this.$router.push('/')
                    window.location.reload()
                }, 2000);
            },
            calculateTotal(price) {
                const tax = price * 0.07; // 7% SGST + 7% CGST
                return (price + tax * 2).toFixed(2);
            },
            deleteItem(isConfirmed) {
                if (isConfirmed && this.itemToDelete) {
                    const index = this.cartDatas.indexOf(this.itemToDelete);
                    if (index !== -1) {
                        this.cartDatas.splice(index, 1);
                    }
                }
                this.showConfirmation = false;
            },
            deletedCartItem(item) {
                this.itemToDelete = item;
                this.showConfirmation = true;
            }
        },  
    }
</script>
<style scoped>
.confirmation-dialog {
  border: 1px solid #ccc;
  position: fixed;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 40px 10px;
  margin-top: 10px;
  width: 250px;
  height: 120px;
  background: #fff;  
  z-index: 10;
  flex-direction: column;
}
.confirmation-dialog button {
  margin-right: 10px;
}
</style>