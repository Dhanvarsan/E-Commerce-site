import { defineStore } from "pinia";

export const appDataStore = defineStore("appDataStore", {
    state: () => ({
        cartDatas: [],
        orderData: []
    }),
    getters: {
        getCartDatas: (state) => state.cartDatas,
        getOrderData: (state) => state.orderData
    },
    actions: {
        setCartDatas(status = '') {
            this.$state.cartDatas.push(status);
        },
        setOrderDates(status = '') {
            this.$state.orderData = status;
        },
    }
})