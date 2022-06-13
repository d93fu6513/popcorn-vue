"use strict";(self["webpackChunkpopcorn_vue"]=self["webpackChunkpopcorn_vue"]||[]).push([[780],{9780:function(t,o,i){i.r(o),i.d(o,{default:function(){return S}});var a=i(3396),s=i(7139),e=i(9242);const n=t=>((0,a.dD)("data-v-6bc1bb1e"),t=t(),(0,a.Cn)(),t),c={class:"wrap"},l={class:"cart-container"},u=n((()=>(0,a._)("h2",null,"購物車",-1))),r=n((()=>(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("Step1"),(0,a._)("br"),(0,a.Uk)("購物內容")]),(0,a._)("li",null,[(0,a.Uk)("Step2"),(0,a._)("br"),(0,a.Uk)("填寫資料")]),(0,a._)("li",null,[(0,a.Uk)("Step3"),(0,a._)("br"),(0,a.Uk)("完成訂單")])],-1))),d={class:"cart-body"},p=["src"],h=n((()=>(0,a._)("br",null,null,-1))),_={key:0},g={class:"count"},k=["onClick"],m=["onUpdate:modelValue","onChange"],y=["onClick"],v={key:0},C=["disabled","onClick"],b={class:"box-footer"},f={class:"coupon"},w={class:"price"},$={key:0,class:"discount"},U={key:1},L={class:"cart-footer"},q=(0,a.Uk)("繼續購物"),x=(0,a.Uk)("下一步");function I(t,o,i,n,I,D){const z=(0,a.up)("Loading"),W=(0,a.up)("font-awesome-icon"),S=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(z,{active:t.isLoading},null,8,["active"]),(0,a._)("div",c,[(0,a._)("div",l,[u,r,(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(I.cart.carts,(o=>((0,a.wg)(),(0,a.iD)("div",{class:"box",key:o.id},[(0,a._)("img",{src:o.product.imageUrl,alt:""},null,8,p),(0,a._)("h3",null,[(0,a.Uk)((0,s.zw)(o.product.title),1),h,o.coupon?((0,a.wg)(),(0,a.iD)("small",_,"已套用優惠券")):(0,a.kq)("",!0)]),(0,a._)("div",g,[(0,a._)("button",{onClick:t=>D.minus(o)},[(0,a.Wm)(W,{icon:["fas","minus"]})],8,k),(0,a.wy)((0,a._)("input",{type:"number",min:"1","onUpdate:modelValue":t=>o.qty=t,onChange:t=>D.updateCart(o)},null,40,m),[[e.nr,o.qty,void 0,{number:!0}]]),(0,a._)("button",{onClick:t=>D.plus(o)},[(0,a.Wm)(W,{icon:["fas","plus"]})],8,y)]),(0,a._)("h4",null,"$"+(0,s.zw)(o.product.price)+"元 / "+(0,s.zw)(o.product.unit),1),(0,a._)("h4",null,[o.coupon?((0,a.wg)(),(0,a.iD)("small",v,"已折扣")):(0,a.kq)("",!0),(0,a.Uk)(" 小計：$"+(0,s.zw)(t.$filters.currency(o.final_total))+"元 ",1)]),(0,a._)("button",{type:"button",class:"cart-del",disabled:I.status.loadingItem===o.id,onClick:t=>D.removeCartItem(o.id)},[(0,a.Wm)(W,{icon:["fas","trash-can"]})],8,C)])))),128)),(0,a._)("div",b,[(0,a._)("div",f,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>I.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[e.nr,I.coupon_code]]),(0,a._)("button",{type:"button",onClick:o[1]||(o[1]=t=>D.addCouponCode())},"套用優惠碼")]),(0,a._)("div",w,[I.cart.final_total!==I.cart.total?((0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("h4",null,"總計：$"+(0,s.zw)(t.$filters.currency(I.cart.total))+"元",1),(0,a._)("strong",null," 折扣價：$"+(0,s.zw)(t.$filters.currency(I.cart.final_total))+"元 ",1)])):((0,a.wg)(),(0,a.iD)("h4",U,"總計：$"+(0,s.zw)(t.$filters.currency(I.cart.total))+"元",1))])]),(0,a._)("div",L,[(0,a.Wm)(S,{to:"/product/index"},{default:(0,a.w5)((()=>[q])),_:1}),(0,a.Wm)(S,{to:"/final/check"},{default:(0,a.w5)((()=>[x])),_:1})])])])])],64)}var D={data(){return{products:[],product:{},status:{loadingItem:""},cart:{},coupon_code:""}},methods:{plus(t){t.qty+=1,this.updateCart(t)},minus(t){t.qty>1&&(t.qty-=1,this.updateCart(t))},getProducts(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,this.isLoading=!1}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.cart=t.data.data,this.isLoading=!1}))},updateCart(t){const o=`https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const i={product_id:t.product_id,qty:t.qty};this.$http.put(o,{data:i}).then((t=>{this.status.loadingItem="",this.isLoading=!1,this.getCart()}))},removeCartItem(t){this.status.loadingItem=t;const o=`https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart/${t}`;this.isLoading=!0,this.$http.delete(o).then((t=>{this.$httpMessageState(t,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isLoading=!1}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/coupon";this.isLoading=!0;const o={code:this.coupon_code};this.$http.post(t,{data:o}).then((t=>{this.$httpMessageState(t,"加入優惠券"),this.getCart(),this.isLoading=!1}))}},created(){this.getProducts(),this.getCart()}},z=i(89);const W=(0,z.Z)(D,[["render",I],["__scopeId","data-v-6bc1bb1e"]]);var S=W}}]);
//# sourceMappingURL=780.ab8d7d39.js.map