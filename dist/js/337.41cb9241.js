"use strict";(self["webpackChunkpopcorn_vue"]=self["webpackChunkpopcorn_vue"]||[]).push([[337],{7337:function(t,o,a){a.r(o),a.d(o,{default:function(){return W}});var i=a(3396),s=a(7139),e=a(9242);const n=t=>((0,i.dD)("data-v-6569e84f"),t=t(),(0,i.Cn)(),t),c={class:"wrap"},l={class:"cart-container"},u=n((()=>(0,i._)("h2",null,"購物車",-1))),r=n((()=>(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("Step1"),(0,i._)("br"),(0,i.Uk)("購物內容")]),(0,i._)("li",null,[(0,i.Uk)("Step2"),(0,i._)("br"),(0,i.Uk)("填寫資料")]),(0,i._)("li",null,[(0,i.Uk)("Step3"),(0,i._)("br"),(0,i.Uk)("完成訂單")])],-1))),d={class:"cart-body"},p=["src"],h=n((()=>(0,i._)("br",null,null,-1))),_={key:0},g={class:"count"},k=["onClick"],m=["onUpdate:modelValue","onChange"],C=["onClick"],v={key:0},y=["disabled","onClick"],f={class:"box-footer"},w={class:"coupon"},b={class:"price"},$={key:0},U={class:"cart-footer"},L=(0,i.Uk)("繼續購物"),q=(0,i.Uk)("下一步");function x(t,o,a,n,x,I){const D=(0,i.up)("Loading"),z=(0,i.up)("font-awesome-icon"),W=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(D,{active:t.isLoading},null,8,["active"]),(0,i._)("div",c,[(0,i._)("div",l,[u,r,(0,i._)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.cart.carts,(o=>((0,i.wg)(),(0,i.iD)("div",{class:"box",key:o.id},[(0,i._)("img",{src:o.product.imageUrl,alt:""},null,8,p),(0,i._)("h3",null,[(0,i.Uk)((0,s.zw)(o.product.title),1),h,o.coupon?((0,i.wg)(),(0,i.iD)("small",_,"已套用優惠券")):(0,i.kq)("",!0)]),(0,i._)("div",g,[(0,i._)("button",{onClick:t=>I.minus(o)},[(0,i.Wm)(z,{icon:["fas","minus"]})],8,k),(0,i.wy)((0,i._)("input",{type:"number",min:"1","onUpdate:modelValue":t=>o.qty=t,onChange:t=>I.updateCart(o)},null,40,m),[[e.nr,o.qty,void 0,{number:!0}]]),(0,i._)("button",{onClick:t=>I.plus(o)},[(0,i.Wm)(z,{icon:["fas","plus"]})],8,C)]),(0,i._)("h4",null,"$"+(0,s.zw)(o.product.price)+"元 / "+(0,s.zw)(o.product.unit),1),(0,i._)("h4",null,[x.cart.final_total!==x.cart.total?((0,i.wg)(),(0,i.iD)("small",v,"折扣價：")):(0,i.kq)("",!0),(0,i.Uk)(" $"+(0,s.zw)(t.$filters.currency(o.final_total))+"元 ",1)]),(0,i._)("button",{type:"button",class:"cart-del",disabled:x.status.loadingItem===o.id,onClick:t=>I.removeCartItem(o.id)},[(0,i.Wm)(z,{icon:["fas","trash-can"]})],8,y)])))),128)),(0,i._)("div",f,[(0,i._)("div",w,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>x.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[e.nr,x.coupon_code]]),(0,i._)("button",{type:"button",onClick:o[1]||(o[1]=t=>I.addCouponCode())},"套用優惠碼")]),(0,i._)("div",b,[(0,i._)("h4",null,"總計：$"+(0,s.zw)(t.$filters.currency(x.cart.total))+"元",1),x.cart.final_total!==x.cart.total?((0,i.wg)(),(0,i.iD)("strong",$," 折扣價：$"+(0,s.zw)(t.$filters.currency(x.cart.final_total))+"元 ",1)):(0,i.kq)("",!0)])]),(0,i._)("div",U,[(0,i.Wm)(W,{to:"/product/index"},{default:(0,i.w5)((()=>[L])),_:1}),(0,i.Wm)(W,{to:"/final/check"},{default:(0,i.w5)((()=>[q])),_:1})])])])])],64)}var I={data(){return{products:[],product:{},status:{loadingItem:""},cart:{},coupon_code:""}},methods:{plus(t){t.qty+=1,this.updateCart(t)},minus(t){t.qty>1&&(t.qty-=1,this.updateCart(t))},getProducts(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.cart=t.data.data,this.isLoading=!1}))},updateCart(t){const o=`https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const a={product_id:t.product_id,qty:t.qty};this.$http.put(o,{data:a}).then((t=>{this.status.loadingItem="",this.getCart()}))},removeCartItem(t){this.status.loadingItem=t;const o=`https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart/${t}`;this.isLoading=!0,this.$http.delete(o).then((t=>{this.$httpMessageState(t,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isLoading=!1}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/coupon",o={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:o}).then((t=>{this.$httpMessageState(t,"加入優惠券"),this.getCart(),this.isLoading=!1}))}},created(){this.getProducts(),this.getCart()}},D=a(89);const z=(0,D.Z)(I,[["render",x],["__scopeId","data-v-6569e84f"]]);var W=z}}]);
//# sourceMappingURL=337.41cb9241.js.map