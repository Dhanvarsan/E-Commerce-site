"use strict";(self["webpackChunkecom_project"]=self["webpackChunkecom_project"]||[]).push([[322],{9592:function(a,t,e){e.d(t,{X:function(){return r}});e(4114);var s=e(9005);const r=(0,s.nY)("appDataStore",{state:()=>({cartDatas:[],orderData:[]}),getters:{getCartDatas:a=>a.cartDatas,getOrderData:a=>a.orderData},actions:{setCartDatas(a=""){this.$state.cartDatas.push(a)},setOrderDates(a=""){this.$state.orderData=a}}})},7927:function(a,t,e){e.d(t,{A:function(){return R}});var s=e(6768),r=e(5130),o=e(4232),i=e.p+"img/Loader.90f04d3b.gif",n="data:image/png;base64,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";const d={key:0,class:"loader df"},l=(0,s.Lk)("img",{src:i,alt:""},null,-1),c=[l],A=(0,s.Fv)('<div class="nav-wrapper"><div class="container"><div class="df sb" style="padding:0 30px;"><i class="fa-solid fa-globe"></i><a href=""><i class="fa-brands fa-facebook"></i></a></div></div></div>',1),u={key:1,class:"menu-wrapper"},h={class:"container"},p={class:"df",style:{padding:"0 30px"}},g=(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},[(0,s.Lk)("img",{style:{width:"50px"},src:n,alt:""})])],-1),D={class:"df"},m={class:"cart df",style:{gap:"10px"}},f=(0,s.Lk)("span",null,"Cart",-1),k={class:"cart-count"},E=(0,s.Lk)("i",{class:"fa-sharp fa-solid fa-cart-shopping"},null,-1);function L(a,t,e,i,n,l){const L=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",null,[n.showLoader?((0,s.uX)(),(0,s.CE)("div",d,c)):(0,s.Q3)("",!0),A,"/orders"!=this.$route.path&&"/cart"!=this.$route.path?((0,s.uX)(),(0,s.CE)("div",u,[(0,s.Lk)("div",h,[(0,s.Lk)("nav",null,[(0,s.Lk)("ul",p,[g,(0,s.Lk)("div",D,[(0,s.bF)(L,{to:"/",onClick:t[0]||(t[0]=(0,r.D$)((a=>l.FilterData("home")),["stop"]))},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1}),(0,s.Lk)("a",{onClick:t[1]||(t[1]=(0,r.D$)((a=>l.FilterData("smartphones")),["stop"]))},"Mobile"),(0,s.Lk)("a",{onClick:t[2]||(t[2]=(0,r.D$)((a=>l.FilterData("laptops")),["stop"]))},"Laptop"),(0,s.Lk)("a",{onClick:t[3]||(t[3]=(0,r.D$)((a=>l.FilterData()),["stop"]))},"Others"),(0,s.bF)(L,{to:"/orders",onClick:t[4]||(t[4]=(0,r.D$)((a=>l.FilterData()),["stop"]))},{default:(0,s.k6)((()=>[(0,s.eW)("Orders")])),_:1})]),(0,s.Lk)("div",null,[(0,s.Lk)("input",{type:"text",placeholder:"Search....",onInput:t[5]||(t[5]=a=>l.SearchData(a))},null,32)]),(0,s.bF)(L,{to:"/cart"},{default:(0,s.k6)((()=>[(0,s.Lk)("button",m,[f,(0,s.Lk)("p",k,(0,o.v_)(a.cartDatas?a.cartDatas.length:0),1),E])])),_:1})])])])])):(0,s.Q3)("",!0)])}var v=e(9592),C=e(9005),b={name:"navBar",data(){return{showLoader:!1}},computed:{...(0,C.aH)(v.X,["cartDatas"])},methods:{FilterData(a){this.showLoader=!0,this.$emit("FilterDatas",a),setTimeout((()=>{this.showLoader=!1}),1e3)},SearchData(a){this.$emit("searchText",a.target.value)}}},B=e(1241);const w=(0,B.A)(b,[["render",L]]);var R=w},3777:function(a,t,e){e.r(t),e.d(t,{default:function(){return x}});var s=e(6768),r=e(4232),o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEM0lEQVR4nO1aTWhUVxSeavEHqqj4U7XgD7hw46ZKRcycOzHaiK2Rwj1nkojZuSmiuHEj6MKNWkGlWLoQQXdCC7X+FptzxqQhLYJgS41/C2u1VPwBRTQ/JnLee6MT8yaZ9zPzhuCBs5l597773e+7555z70ul3tsotZVtTVOBcYMR3A9MZ0CoyzA+BqZux4Ue6m8geNoI7tNn6zubJ6eqwerP1o83OWwGxgsg1GeEBgJ6r7Y1OSLtK1VpW95hJxqh7cB4L8TgfV37AsYtFQOUFloLgrfiAuAD6DYw1pUNAHDLBCN4pFwABjlTv74rdnZqL2ZngdDlioCQQYA6gO3HsYAApvlG6GbFQcgbqV0Hbv4kMhNJgjBvHI9FYKJlQiJykiEgruke5QxqIPVBYCBG6LukQYDQw7Q0LtLxZIS+0o00cIitAhAv00I1rjqyS4HpubPptmY/KwmEhjxdYEkDyQhu0vHUtWfnGMG7hVJT2Zciqe1JgwDGPS4T9iMjdMXn/22lsBFb2hHSTzqLemDXGGD8yfcZxvvDbpaaACbLBP2ueZzLBh4Y/lnbWBSIk4kmB+JOfhfPCG0esQ3jL8XriXCpeHRnelp7KbvEm8w6w9hTApAe4IYpfmxsSIQJN6Su0zGkhRYboSelttW9xQcIfZOQrLa672+cHrQ8AKa9Q4E4JWilQeCRfLQ0Qm0h2p8bGrEYb1RUUloeM3yoodYIHg/Vh1CXn7QeBeykLyMWgelo4EEw/p1fqMC4M/SEMD72A9IdcEZ/cBo6M0qHA7T7vyZnF7hh1qJbDYZllbojA/EG9a3uwI40hXaM3AZfZHK0wgHRaj/VRDCSPIVeRpZWgZ9wtO5kBtmvgfGVvwyoH9hu1OdqL9q5IPRvFBDG7fOB3z4SPuNl/DGf+5icbdHzKh8Z7Nb/V7Svn2SYrkYGIQ7D1/wYOROxU9ZBal9pwS9VRu8mgvakHWuYTsUDgpSRU0PDr+D+qB2DYOeaDjvN6a+VVhmhZ+5JiFs/AOOh2EBIkQ3RtFJDTC/4sybXPNtjZtnq3zbOzK+fOEEYF8gXPtJqmBJX0qinhavamha+nST83G/dRJMV9hQ9BAeh8zG+7D/NaIMmgqZ0GZ9OFbOMUFPM1D/SOiNuEMZlPTt8qRtHfC+74137lx1XFIgXWbYlP1AaiY0tw4IoYKUr6cGaYs54o+RTei/KVCEI6g98d6IJYRVK6mAgEHmJGaY/qgaEYOeIC7w4K1pHJ79eQPCWXnGEAvEWDM2vdBlsBsvpeubXpnmpOEzzpSRkBoKdKy/ZGak4zTsXPhSlNA3IxPdlvarO5GhNOaUG+nVEOa+nC807h9o6+N4iojP+U9EPBt4FpKfiXnUZJk3v1SxWE8DQoTVu09rAK3H3GcGfnZsl/ZCm4KMaPc/S8lQrOy2K8qXxexuN9hpZQRYScDGTVAAAAABJRU5ErkJggg==";const i={class:"main-wrapper"},n={class:"container"},d={class:"all-cards df"},l={class:"img-container"},c=["src"],A={class:"df"},u=["onClick"],h={class:"df"},p=(0,s.Lk)("span",null,"+ Cart",-1),g=(0,s.Lk)("i",{class:"fa-sharp fa-solid fa-cart-shopping"},null,-1),D=["onClick"],m=(0,s.Lk)("span",null,"Buy Now",-1),f=[m],k={class:"card-body"},E={class:"cus-toaster df"},L=(0,s.Lk)("img",{style:{width:"20px"},src:o,alt:""},null,-1),v=(0,s.Fv)('<div class="footer-wrapper"><div class="container"><div class="df" style="flex-direction:column;gap:40px;"><span>Thanks for Shopping</span><i style="font-size:14px;font-weight:100;">copyrights © <a href="https://github.com/Dhanvarsan" style="color:lightgray;" target="blank">Dhanvarsan</a></i></div></div></div>',1);function C(a,t,e,o,m,C){const b=(0,s.g2)("nav-bar");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(b,{onFilterDatas:C.FilterDatas,onSearchText:C.searchText},null,8,["onFilterDatas","onSearchText"]),(0,s.Lk)("div",i,[(0,s.Lk)("div",n,[(0,s.Lk)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.FilteredCardDataSource,(a=>((0,s.uX)(),(0,s.CE)("div",{key:a.id,class:"card"},[(0,s.Lk)("div",l,[(0,s.Lk)("img",{src:a.images[0],alt:""},null,8,c)]),(0,s.Lk)("div",A,[(0,s.Lk)("button",{class:"addCart df",onClick:t=>C.AddCart(a)},[(0,s.Lk)("p",h,(0,r.v_)(a.itemCount?a.itemCount:0),1),p,g],8,u),(0,s.Lk)("button",{class:"addCart df",onClick:t=>C.BuyNow(a)},f,8,D)]),(0,s.Lk)("div",k,[(0,s.Lk)("h3",null,(0,r.v_)(a.title),1),(0,s.Lk)("span",null,(0,r.v_)(a.brand),1),(0,s.Lk)("h1",null,"Rs."+(0,r.v_)(a.price),1)])])))),128))]),(0,s.Lk)("div",E,[(0,s.Lk)("span",null,(0,r.v_)(m.msg)+" - Added to cart",1),L])])]),v])}e(4114);var b=e(7927),B=e(9592),w=e(9005),R={name:"MainComponent",components:{"nav-bar":b.A},data(){return{cardDataSource:[],FilteredCardDataSource:[],AddToCart:[],msg:""}},mounted(){this.getProducts()},computed:{...(0,w.aH)(B.X,["cartDatas"])},methods:{...(0,w.i0)(B.X,["setCartDatas","setOrderDates"]),async getProducts(){await fetch("https://dummyjson.com/products").then((async a=>{let t=await a.json();this.cardDataSource=t.products,this.FilteredCardDataSource=this.cardDataSource}))},FilterDatas(a){"home"==a?this.getProducts():this.FilteredCardDataSource=a?this.cardDataSource.filter((t=>t.category==a)):this.cardDataSource.filter((a=>"smartphones"!=a.category&&"laptops"!=a.category))},searchText(a){this.FilteredCardDataSource=this.cardDataSource.filter((t=>t.title.toLowerCase().includes(a)))},BuyNow(a){this.setOrderDates(a),this.$router.push("/orders")},async AddCart(a){const t=this.cartDatas.filter((t=>t.id==a.id));this.msg=await a.title,document.querySelector(".cus-toaster").classList.add("showToaster"),setTimeout((()=>{document.querySelector(".cus-toaster").classList.remove("showToaster")}),1e3),0==t.length?(a.itemCount=1,this.setCartDatas(a)):this.cartDatas.forEach((t=>{t.id==a.id&&(t.itemCount+=1)}))}}},I=e(1241);const Q=(0,I.A)(R,[["render",C]]);var x=Q}}]);
//# sourceMappingURL=322.2cc0ebd4.js.map