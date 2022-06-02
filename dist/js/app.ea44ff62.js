(function(){"use strict";var t={4210:function(t,e,n){var i=n(9242),a=n(6265),o=n.n(a),s=n(6423),r=n(3396);function c(t,e){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var l=n(89);const u={},d=(0,l.Z)(u,[["render",c]]);var p=d,f=n(678);function h(t,e,n,i,a,o){const s=(0,r.up)("Header"),c=(0,r.up)("Banner"),l=(0,r.up)("Sale"),u=(0,r.up)("SideCart"),d=(0,r.up)("Shop"),p=(0,r.up)("Info"),f=(0,r.up)("Banner2"),h=(0,r.up)("Qa"),m=(0,r.up)("Footer"),g=(0,r.up)("ToastMessages"),v=(0,r.up)("router-view"),k=(0,r.Q2)("motion-slide-visible-once-left"),w=(0,r.Q2)("motion-fade-visible-once");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c),(0,r.wy)((0,r.Wm)(l,{delay:200},null,512),[[k]]),(0,r.Wm)(u),(0,r.Wm)(d),(0,r.Wm)(p),(0,r.Wm)(f),(0,r.wy)((0,r.Wm)(h,{delay:200},null,512),[[w]]),(0,r.Wm)(m),(0,r.Wm)(g),(0,r.Wm)(v)],64)}var m=n(3512),g=n(7399),v=n(9965),k=n(9557),w=n(9698);const A=t=>((0,r.dD)("data-v-f9a1821e"),t=t(),(0,r.Cn)(),t),b={class:"banner2"},C={class:"text"},I=A((()=>(0,r._)("h3",null,[(0,r.Uk)("也可以在這些地方"),(0,r._)("br"),(0,r.Uk)('找到"好運"')],-1))),y=A((()=>(0,r._)("h3",null,null,-1))),S={class:"icon"},E={href:"https://www.instagram.com/luckypopcorn/?fbclid=IwAR06VR5EOVeAFbZZESQ4KMkW-oXpqYew-hvAqFYTobRe8HU9C-7O_nJnvn4"},U={href:"https://www.facebook.com/luckypopcorn"},W={href:"https://www.facebook.com/luckypopcorn"};function F(t,e){const n=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",C,[I,y,(0,r._)("div",S,[(0,r._)("a",E,[(0,r.Wm)(n,{icon:["fab","instagram-square"]})]),(0,r._)("a",U,[(0,r.Wm)(n,{icon:["fab","facebook-square"]})]),(0,r._)("a",W,[(0,r.Wm)(n,{icon:["fab","line"]})])])])])}const R={},Z=(0,l.Z)(R,[["render",F],["__scopeId","data-v-f9a1821e"]]);var D=Z,O=n(2670),Q=n(9893),x=n(9036),J=n(5820),M=n(1292),_={components:{Header:m.Z,Banner:g.Z,Sale:v.Z,Shop:k.Z,SideCart:w.Z,Banner2:D,Info:O.Z,Qa:Q.Z,Footer:x.Z,ToastMessages:M.Z},provide(){return{emitter:J.Z}},created(){}};const j=(0,l.Z)(_,[["render",h]]);var V=j;const K=[{path:"/",name:"home",component:V},{path:"/login",component:()=>n.e(878).then(n.bind(n,9878))},{path:"/dashboard",component:()=>n.e(64).then(n.bind(n,2064)),children:[{path:"products",component:()=>Promise.all([n.e(51),n.e(512)]).then(n.bind(n,2512))},{path:"orders",component:()=>Promise.all([n.e(51),n.e(883)]).then(n.bind(n,3883))},{path:"coupons",component:()=>Promise.all([n.e(51),n.e(454)]).then(n.bind(n,4454))}]},{path:"/product",component:()=>n.e(551).then(n.bind(n,2551)),children:[{path:"index",component:()=>n.e(329).then(n.bind(n,8329))},{path:"product/:productId",component:()=>n.e(815).then(n.bind(n,815))}]},{path:"/about",component:()=>n.e(709).then(n.bind(n,6709))},{path:"/final",component:()=>n.e(695).then(n.bind(n,7695)),children:[{path:"cart",component:()=>n.e(840).then(n.bind(n,6840))},{path:"check",component:()=>n.e(576).then(n.bind(n,7576))},{path:"checkout/:orderId",component:()=>n.e(8).then(n.bind(n,5008))}]}],T=(0,f.p7)({history:(0,f.r5)(),linkActiveClass:"active",routes:K});var N=T;function z(t){const e=parseInt(t,10);return`${e.toFixed(0).replace(/./g,((t,e,n)=>e&&"."!==t&&(n.length-e)%3===0?`, ${t}`.replace(/\s/g,""):t))}`}function L(t){const e=new Date(1e3*t);return e.toLocaleDateString()}function q(t,e="更新"){if(t.data.success)J.Z.emit("push-message",{style:"success",title:`${e}成功`});else{const n="string"===typeof t.data.message?[t.data.message]:t.data.message;J.Z.emit("push-message",{style:"danger",title:`${e}失敗`,content:n.join("、")})}}var B=n(6216),P=n(5428),H=n.n(P),X=n(5708),G=n(3990),Y=n(579),$=n(2389),tt=n(2278),et=n(5717),nt=n(7749),it=n(8125),at=n(8321),ot=n(2234);it.vI.add(at.g82,at.WA2,at.fV7,at.Vui,at.Kl4,at.r8p,at.X8G,at.FDd,at.fGT,at.m6i,at.qD8,at.yYj,at.Y$T,at.Hnv,at.vJI,at.qaO,at.DBf,at.gr5,at.y1i,at.Elr,at.LEp,ot.pZl,ot.Xg5,ot.OPk);const st=(0,i.ri)(p);st.config.globalProperties.$filters={currency:z,date:L},Object.keys(G.ZP).forEach((t=>{(0,X.aH)(t,G.ZP[t])})),(0,X.jQ)({generateMessage:(0,Y.NC)({zh_TW:$}),validateOnInput:!0}),(0,Y.i_)("zh_TW"),st.config.globalProperties.$httpMessageState=q,st.use(s.Z,o()),st.use(N),st.use(H()),st.use(et.Z),st.use(tt.tc),st.component("font-awesome-icon",nt.GN),st.component("Loading",B.Z),st.component("Form",X.l0),st.component("Field",X.gN),st.component("ErrorMessage",X.Bc),st.mount("#app")},5820:function(t,e,n){var i=n(1373);const a=(0,i.Z)();e["Z"]=a},7399:function(t,e,n){n.d(e,{Z:function(){return v}});var i=n(3396),a=n.p+"img/banner1.195e29eb.png",o=n.p+"img/banner1-2.614f7057.png",s=n.p+"img/banner1-3.2a52a6be.png";const r=t=>((0,i.dD)("data-v-2c49681c"),t=t(),(0,i.Cn)(),t),c=r((()=>(0,i._)("img",{src:a,alt:"banner1",width:"100%"},null,-1))),l=r((()=>(0,i._)("img",{src:o,alt:"banner2",width:"100%"},null,-1))),u=r((()=>(0,i._)("img",{src:s,alt:"banner3",width:"100%"},null,-1)));function d(t,e,n,a,o,s){const r=(0,i.up)("swiper-slide"),d=(0,i.up)("swiper");return(0,i.wg)(),(0,i.j4)(d,{pagination:!0,modules:a.modules,autoplay:{delay:4500,disableOnInteraction:!1},class:"mySwiper"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[u])),_:1})])),_:1},8,["modules"])}var p=n(8008),f=n(9231),h={components:{Swiper:p.tq,SwiperSlide:p.o5},setup(){return{modules:[f.tl,f.pt]}}},m=n(89);const g=(0,m.Z)(h,[["render",d],["__scopeId","data-v-2c49681c"]]);var v=g},9036:function(t,e,n){n.d(e,{Z:function(){return p}});var i=n(3396);const a=t=>((0,i.dD)("data-v-bc3d5fa8"),t=t(),(0,i.Cn)(),t),o={class:"wrap"},s=a((()=>(0,i._)("div",{class:"footerbody"},"圖片僅供個人學習使用，無商業用途",-1))),r=[s];function c(t,e){return(0,i.wg)(),(0,i.iD)("div",o,r)}var l=n(89);const u={},d=(0,l.Z)(u,[["render",c],["__scopeId","data-v-bc3d5fa8"]]);var p=d},3512:function(t,e,n){n.d(e,{Z:function(){return S}});var i=n(3396),a=n(7139),o=n(9242),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAyCAYAAAB/Lj+fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAD6JJREFUeNrsXf15nDgTx/fk/5dUYFLBkQpCKjhcQXAF2VQQXME6FeCrAKcC9ipgUwG4AjYV8CJ7FM/Ko0+k9V5O8zw8NssiBknz9ZuRNkkiRYoUyQNdnBtD8zwXy58CfXR7cXFxQNfz5U+6HOPy+RiHMFKkSDJlMs3H1KJrFfp8AsUSKVKk/6Ci2DAtoPlOvxzDcpSgMDpB0fRwjVGDrrVIyTTLkcYejxTp91IgLSiHgikGA2XSCZ5JzcMf4bzjioYpDrg2wHGkaCJFihSe/gigPFLwQLhn8H05suVggl8sx71BM+Ny3CzH9cXFRQ2fcdzkT+aZQFsjfFaie/8meGKKqGZhUhzySJHO3wPJQJE04BnkgjBzj6Ey8GQ6A6+FhTMZfN6gz47wFAFnYbSNoxUp0nkrkxnwDCbIg0TZrA4/QDnUXJEgJdODMiswXoJwlgLhKhFPiRTpzLGRIw8ACzz6ThvIK8ok4c0MYVGCcJuoTCJFOqOQZgvhRSkI7oxCmokS8hPzOYMCqTl4C9dSFDYNUN8SKVKkEwvpIKkD4cJZQDjy6ilahKc8KjeCV/63jyP7Wxm7BsJbigaeDRSOIjBfOXpW+S/qzxSch1bVRxcODbPGGEB6uxzfkqdq1JJlXQD0ZNdulvPbM+qMo6pZOO+BzxoA33z5/20URW0/+hCCXRKoghmNrRMtPF0E7D+GJXJP/XCq+QZJh03ylBH9uDx3b2uQlz8VnLJxe+dTu+J6jw33Rjy1vUXnYmjS+qh6RSHZBr1P+0oCWkE42KpCQvjeFlk2nNXC1rXl/QbvmVv2y4Ssdy1cb2e/1DrOkUY2F4Rw25oCj/XJnqXoD5c+H7zxDUJXEI1vYfJNPsIZcKcmnj7GygT+H3yFTUTZfo4m63AKoBbc8Uk10PCdYYV8TBb8UMqi5/0w+6fJoc86TX+JwjMhxYqzfCUopcmXoKiUN6XkNCEaNw7VSp46lz4HOSiQs4Cp4XVb1jKCOrxCD8I1HZVHAdvw1DJimiuZwuNzsIUriPcKjqMQA0UJR+1BaDNTd1hyf00Igwx34Ifs+irhFRXduXgmgtC+wF8kfOWG/Z9a8LEV+nuWGIhOprAUfLh7l9ABGXLFZ8FDyUNYb150hrIwpYsVc1Au2MVvcVo50DNFgHBjoHCCKRMh7MJUEMJQEnOlxsCngcIafIcKr6hMKNpq+CokiQKl0nHgQ0eDxptR0a8C0zcqFxzA1EfQBg52zsCYdwBW2QI5HAjds20F2MRd/t4RX91zwBTOc/hMGyYtf77C99m9fy/t7wzZ28Iz7wBs4gKYBVIkGfCJKeUTjPPNgOzlsz18NyX6iffP/wBkE+lgA3Sy8Viedw9A61/L8Z3xQhiNkXtOy5/PBG8cuHsQ7vmO+Nwlvw+NxFx5XFay9N+1QVJD5t2PpnLm0XM/WL63sZXioUwJFntyFJ5GqJJtZeXtvMIVnsmPyuAZVMxfWrxrgQDZwXdqG61bqg20/yQCoJq2ZeFQ7ZH/BsfdjiFYjdKMmQGmJGIdL0IAaHODKqBF2hDtFAjz8+GZlCrPQuWZKLySydIrSX0A4SALOFxVpdYzm05avbYF2hjQ+p0JAWNWbrjhYG5RiNBbtrMhXNDMExjWOAz0xmGM8KCnhrzlaOJ0VAUzmrCpQ2z9yyg5zDu8DosCAzEWUL5WNkel0B2UiZMhQ+EmP6hamy26XhoodXEM0zWdtGrVLdzbongcZwj6tdZTyIq06BmVrScFQtUi/jao7bV8tmvjWQtFYmvVZJ5SZ+gVFjIMCMYnX6l4O0NMICcwn2DZJUPMSeeZFEj5b31WjRMKrluJB3WrFImHF9rKXHcOsnoSUryfCVcqW8c2U0LActFddlBUuvBmMAXgiNQypsqSNx1fnSPa3xEuc2/ADwU8ZyaKF7npqsxTL1z3UsNEhLOVIgzylgXVzLm1kUVn4ylj7bhFVrmxRZMlgs5DmpSwPkYWFCYSdt8yIfszownYox3bXAW/QMIw8NXQxh1q1vYLT0IS9xaWqdzKkSdVCXqHxsEH5ZZCMBuEiZWkj3VZsnaF0hDDCurYSozEhMof8EGldZ0NI2HMOiIbh3GSRvKuuU3H9ETs2a18gZLY3yRHue5MeKFS0UaHOhvvWdIKKczOR1WuAMh63Q9FIwimyqQLAbhKQqfaAGi0AmIN+LAp1usQfwMhiDKvRKy9qAz7qF4RTq2haoUimWQhHTGXCh+TvKaALw/A4wDWgHsjG4WVzYhJVaOqxQwUSI+s5SBkiSpPQl/bgocOrqcuz1+ifVzwMUmsHVUsVpt4aYJReQG6ETE4zqL0MhCRuK+1nIuq7FCNDMtJSvxXViUHVcKGIeOsmXN+soDz80ZC3mI65FE0kiwBdrE3hOClMIA98kJmQQi4wBUe+S5kPHu0/FvNwG49TcTWQZGIXmXtiZfOsK96QUkqwWlFmGZKhSFf21dQJLagugqj6zTKsVbMkQr0w1EFLVm0BgVTO59AENrLVUZfEnrFMbemGfyfAW+p0D4rtLnzDWCF6IuF/hTOfwjneEKPy/HT03N1ngkv+DsaF9viRM/EiiU3MLYZ0TfieL3n1jh5KkTkdJU8FUuOIChfhWuPc8qiwO8GxuVDclxUeUDjyecpu/4peVnUxuesyfgyvu7xb0jpjLfwjhT/mETeLkUlAuNAFShmIWRP5mKVa3LTCI3npf2/MBeNVq7nV9ycycDaUmXVIgDbevQGNpY4DvYIKoln0qNQYyAyOVtUGrA2RVlrrGuKLOakKLRSrVVpAo15Kiu3R2GiD0ghN/DONgZj3wmY5aBLqb8JLDQZWIcRNPeVY1PsvhY8lxFp3GtFOrtDlqs+I0WSEtZf5pUwYuXn92DFRIVMWTv2znyH/j3cd9B5Fwr3PgWecrA+I3H9g+RebqWz5GWJ9sGh+y6Jd8Wk2m8lS+RLI8TxuPY0zjys/Lb0//3y2U4Y358gIz0f2+X8Tld+rwqfk+dlISoy+YWIPbwDa08Hd3w7heDgYpxaokXFLE+hON9gTISXW1NKDFujM/NKSpWlICxnZglQ1o585SYFXWsX0q0EEpVxva+0tScvpCdA9I5a6uEKAru+u+G9tUEq/iiR8iaw7HBvJMcxFWi8jlsEWMh24FobzvdgZUZ4/z3SkJ/gO+z6Aa5focVx7J4vFlr4lER5JWxB3S0IB1aOO00Mv9PExTbYELNEV8BLQVjxvQyncKQ7W2VH8PQn4e3siT4eYR48JM+LSHO4X/RkDrA47+CqSPDcVuE7yDu7F/h4zFraeCgw58fEbWFq5iDXzPu9c+0nn9aZF/GUqPS9Rxp8wAVnKN7OUSyO606ac/NAHLIAk21NwaxZ1r6ST9ELaATvqpNUt6rS1Lzwr3Lgh7KSvcDTpFqfND9vOlRp+rB3XBcjK+XvJV5nofBWrYsjhSzhoFgTlBrMoxp5WLzkYnN2GCRSAoVQR9GhisJGCG/w2owMpZr5itB/izJJZ7P9IibDyetdmUjaLYV3KISCQ+q9NhIczacLnxmEXhOhjCqNG2+lUObjLS9Jo0D0T6UA5a3HE41LoQFXCxNl4jpeqkEsfGsjsM4NetEUdXYpUSZbPqkE68l3wu8CCL7zOhyDtnWbHnWGkyeEMmll9Ryzn82arIoKNUJPZbtcC8p6xwK2wnBNUy/DfBSYlVVtiYQ/Z2ViQ7rfGq4g/qs8y9IPIaak/s+EjMFPIrbLUOy89y3syfNmUN4JamlU2a3CQODyEAqUwBFGAd/xQVtDflLN/CsFHq9h9/SPyXMWTIf1sGs3UKNyr8E5VFkbChO5MhkvyLZRGMkjBuNrEWJI+uOVnrtDHbsnACndvXwQeVFZnrws/PIBHocmndfTOEyiwwpFkkqUZ4E8xS/JcRHfAc53hPDtJddkgiMzaDpibTNF8J7v3AfzgvH6EX6+4j0xj1jh1lumfFBR5TXcx4r1vhjyl0rG4aMNQAm8yxRK77LA1HD+UErz0sAr3hh7MAi/KHxLEbhvBd6CQFw5ib6Lf7qhw64ZcuMKz/yt2sPFEixzKu+mwNxA4DAuQlPxU/vcG0QCBPPlBRO1xgvxMYj4h+K9nJdLSNLz/Uz/DIdRKDHTe6K4FvoZgfQqcFvyzpOIjek8k8Naa6ex/BmhFS8Tefm62Ak7Pgks9nq14e+Q+EuFHk0WwgM4gFW6hWey81vZexm4/9b4WELvISv2P191uyEE5g71184TT6KQj+AxvAPLfyvgDkwIvgr35cTcEb2L3nEhp/iet4nDD10RHooYcjH6J6CXLM7znMBWStS/qRj66upMSrjxMvFQFShRJg/Jcb1AJnG5HoSXxthKCGXHKwnZ+7/1KLSFRJHgCfiFuI+NxSc0iKoNpl3os8V38+S5RggrXl5/wMZzlFjex7DIUNiouXAFAncg3reV3HOXvKzHESuKH7GPhedrySbnMsFnBu0W7r/x9SuF0M4VzBc2Nj8M1rethR5E48QMB67dUYblpkVrITIaD6DRvqP2WQd+ICZSBphIipRKCi9ZBMI3DoEU1V8aRSKjr4kecF3TDxkxua5hgn3WzIFc4jmqlOqtASYxAh8F99wsLT777rfkeTEephtovxHerUksC+oMsRX+Ppll27uVXt7e8LPvEk83NRjXbyYDnoZKj0K7PLU7oM86YnuBjsBXGrSL1TYAf2mgtPhGSGHmhvcF2zgHhQjtTP8oEwfb+tkf9QHGLEcbZKUKTANvUJ0KqXDvcwnx15x620YCd5oU37MdX/Mf4Juffx0shLBm4r4kCCwyUSa8YK1bu42iYmKGaju1VVIGK4eHE01MvnJ7K1mdazIBuzngj5sR4zjpFDh8rwrMi1jYl52oD/CWjLWBQek1IHwzEz8NeqEbiORpReP7EHtagMJ4D894C65oxz/jv0gPKPYNuPo3EKf2gC2wOPnKNwALsWoL8f1VcgakWXE8+orXXYVWEwodXmtfFAzkBgDqXfsqeeV9Yl7lxeeAbeO9Zgtc4SrxTCa0nmFGnkyIMGzjYw/cSJH+K6QtWuPeQSAaE7RLFbeshPuXITCIsnjeszks5XjxRB/jNIkUaaUyQat760DPZxkalkb8tf2AoDyo8wPKf2dJoErV+flX/PI4TSJFWu+ZMEFihTMfAnomqaFCSIU4cxdSmSD8IY3TJFIkD2FO8pR7DlV5N4JH8jN5LlwbsXcgKDbxf6bkHgL30SFOk0iR9PRGY52D4gWQleEK5IOoTBK63B57C6ZejSt/ES+JFMmHMjkRMWXxWGEJWAiuuMtRUucSvJUCFA9TNNk5pPoiRYqkqTM5BUFBnCvIObru5B0pUiS/9H8BBgAWrQjwiHWBWwAAAABJRU5ErkJggg==";const r=t=>((0,i.dD)("data-v-487e279c"),t=t(),(0,i.Cn)(),t),c=r((()=>(0,i._)("img",{src:s,alt:"logo"},null,-1))),l={class:"header-menu"},u=(0,i.Uk)(" 好運商品"),d=(0,i.Uk)(" 關於好運"),p=(0,i.Uk)(" 好運管理員"),f=r((()=>(0,i._)("span",null,null,-1))),h=r((()=>(0,i._)("span",null,null,-1))),m=r((()=>(0,i._)("span",null,null,-1))),g=[f,h,m],v={class:"mobile-menu"},k=(0,i.Uk)(" 好運商品"),w=(0,i.Uk)(" 關於好運"),A=(0,i.Uk)(" 好運管理員");function b(t,e,n,s,r,f){const h=(0,i.up)("router-link"),m=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("div",{class:(0,a.C_)(["header-container",{"header-container-scrolled":r.scrollNav}])},[(0,i.Wm)(h,{to:"/",class:"logo"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.wy)((0,i._)("nav",l,[(0,i.Wm)(h,{to:"/product/index"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{icon:["fas","store"]}),u])),_:1}),(0,i.Wm)(h,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{icon:["fas","circle-info"]}),d])),_:1}),(0,i.Wm)(h,{to:"/login"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{icon:["fas","gear"]}),p])),_:1})],512),[[o.F8,!r.mobile]]),(0,i.wy)((0,i._)("div",{class:(0,a.C_)(["hamburger-icon",{"hamburger-icon-active":r.mobileNav}]),onClick:e[0]||(e[0]=(...t)=>f.toogleNav&&f.toogleNav(...t))},g,2),[[o.F8,r.mobile]]),(0,i.Wm)(o.uT,{name:"mobile-nav"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("nav",v,[(0,i.Wm)(h,{to:"/product/index"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{icon:["fas","store"]}),k])),_:1}),(0,i.Wm)(h,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{icon:["fas","circle-info"]}),w])),_:1}),(0,i.Wm)(h,{to:"/login"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{icon:["fas","gear"]}),A])),_:1})],512),[[o.F8,r.mobileNav]])])),_:1})],2)])}var C={data(){return{mobile:"",mobileNav:"",screenWidth:"",scrollNav:""}},methods:{toogleNav(){this.mobileNav=!this.mobileNav},screenSize(){this.screenWidth=window.innerWidth,this.screenWidth<=768?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)},updateScroll(){const t=window.scrollY;this.scrollNav=t>50}},created(){window.addEventListener("resize",this.screenSize),this.screenSize()},mounted(){window.addEventListener("scroll",this.updateScroll)}},I=n(89);const y=(0,I.Z)(C,[["render",b],["__scopeId","data-v-487e279c"]]);var S=y},2670:function(t,e,n){n.d(e,{Z:function(){return O}});var i=n(3396),a="data:image/png;base64,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",o=n.p+"img/about1.32fb1705.png";const s=t=>((0,i.dD)("data-v-34d1422d"),t=t(),(0,i.Cn)(),t),r={class:"wrap"},c={class:"container",delay:200},l=s((()=>(0,i._)("h2",null,"關於好運",-1))),u={class:"aboutbody"},d={class:"item"},p=s((()=>(0,i._)("div",{class:"itemhead"},[(0,i._)("img",{src:a,alt:"",srcset:""}),(0,i._)("h3",null,"luckypopcorn")],-1))),f=s((()=>(0,i._)("img",{src:o,alt:"",srcset:""},null,-1))),h={class:"text"},m=(0,i.Uk)(" 9,999個讚"),g=s((()=>(0,i._)("p",null,"好運堅持使用最好的原料",-1))),v=(0,i.Uk)(" 美國非基改玉米粒 "),k=(0,i.Uk)(" 爆米花專用椰子油 "),w=(0,i.Uk)(" 美國進口焦糖"),A={class:"item"},b=s((()=>(0,i._)("div",{class:"itemhead"},[(0,i._)("img",{src:a,alt:"",srcset:""}),(0,i._)("h3",null,"luckypopcorn")],-1))),C=s((()=>(0,i._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9583744175125!2d121.61067421561208!3d25.001530345744925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd4c8aeb65b%3A0x5dd0ea45ce3735ab!2z5aW96YGL54iG57Gz6Iqx!5e0!3m2!1szh-TW!2stw!4v1653241815682!5m2!1szh-TW!2stw",width:"100%",height:"487px",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1))),I={class:"text"},y=(0,i.Uk)(" 9,999個讚"),S=s((()=>(0,i._)("p",null,"好運爆米花也有網美實體店喔！",-1))),E=s((()=>(0,i._)("p",null,"歡迎大家來打卡拍照",-1))),U=s((()=>(0,i._)("p",null,"拿著好運爆米花人人是網美",-1))),W=s((()=>(0,i._)("p",null,"來店還有免費試吃活動",-1)));function F(t,e){const n=(0,i.up)("font-awesome-icon"),a=(0,i.Q2)("motion-slide-visible-once-top");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",c,[l,(0,i._)("div",u,[(0,i._)("div",d,[p,f,(0,i._)("div",h,[(0,i._)("p",null,[(0,i.Wm)(n,{icon:["fas","heart"]}),m]),g,(0,i._)("p",null,[(0,i.Wm)(n,{icon:["fas","check"]}),v]),(0,i._)("p",null,[(0,i.Wm)(n,{icon:["fas","check"]}),k]),(0,i._)("p",null,[(0,i.Wm)(n,{icon:["fas","check"]}),w])])]),(0,i._)("div",A,[b,C,(0,i._)("div",I,[(0,i._)("p",null,[(0,i.Wm)(n,{icon:["fas","heart"]}),y]),S,E,U,W])])])])),[[a]])])}var R=n(89);const Z={},D=(0,R.Z)(Z,[["render",F],["__scopeId","data-v-34d1422d"]]);var O=D},9893:function(t,e,n){n.d(e,{Z:function(){return Z}});var i=n(3396),a=n(9242);const o=t=>((0,i.dD)("data-v-6b5ea1c7"),t=t(),(0,i.Cn)(),t),s={class:"wrap",id:"qa"},r={class:"container"},c=o((()=>(0,i._)("h2",null,"常見問題",-1))),l={class:"item"},u=(0,i.Uk)(" 好運爆米花素食可以食用嗎？ "),d={class:"text"},p={class:"item"},f=(0,i.Uk)(" 好運爆米花運送方式？ "),h={class:"text"},m=(0,i.Uk)(" 按照訂購數量可以選擇7-11店到店或宅配運送。"),g=o((()=>(0,i._)("br",null,null,-1))),v=(0,i.Uk)("7-11店到店：運費為35元，滿400元皆可免運，數量限12桶以下。"),k=o((()=>(0,i._)("br",null,null,-1))),w=(0,i.Uk)("宅配運送：運費為70元，滿400元皆可免運，外島運費另計。 "),A=[m,g,v,k,w],b={class:"item"},C=(0,i.Uk)(" 好運爆米花什麼時候會出貨？ "),I={class:"text"},y={class:"item"},S=(0,i.Uk)(" 好運爆米花造型可以客製化嗎？ "),E={class:"text"};function U(t,e,n,o,m,g){const v=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",r,[c,(0,i._)("div",l,[(0,i._)("div",{class:"title",onClick:e[0]||(e[0]=t=>m.isOpenA=!m.isOpenA)},[(0,i.Wm)(v,{icon:["fas","circle-question"]}),u]),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",d," 好運的產品有分全素、五辛蛋奶素、非素食，詳情再麻煩請見產品說明。 ",512),[[a.F8,m.isOpenA]])])),_:1})]),(0,i._)("div",p,[(0,i._)("div",{onClick:e[1]||(e[1]=t=>m.isOpenB=!m.isOpenB),class:"title"},[(0,i.Wm)(v,{icon:["fas","circle-question"]}),f]),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",h,A,512),[[a.F8,m.isOpenB]])])),_:1})]),(0,i._)("div",b,[(0,i._)("div",{onClick:e[2]||(e[2]=t=>m.isOpenC=!m.isOpenC),class:"title"},[(0,i.Wm)(v,{icon:["fas","circle-question"]}),C]),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",I," 接到訂單後生產，確認付款後約2-3天(不含例假日)完成出貨。 ",512),[[a.F8,m.isOpenC]])])),_:1})]),(0,i._)("div",y,[(0,i._)("div",{onClick:e[3]||(e[3]=t=>m.isOpenD=!m.isOpenD),class:"title"},[(0,i.Wm)(v,{icon:["fas","circle-question"]}),S]),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",E," 當然可以！我們可以幫你客製化婚禮小物、周歲禮品、生日派對等場合使用的造型包裝。 ",512),[[a.F8,m.isOpenD]])])),_:1})])])])}var W={data(){return{isOpenA:!1,isOpenB:!1,isOpenC:!1,isOpenD:!1}}},F=n(89);const R=(0,F.Z)(W,[["render",U],["__scopeId","data-v-6b5ea1c7"]]);var Z=R},9557:function(t,e,n){n.d(e,{Z:function(){return z}});var i=n(3396),a=n(7139),o=n(9242);const s=t=>((0,i.dD)("data-v-0ff4eedb"),t=t(),(0,i.Cn)(),t),r={class:"wrap"},c={class:"container"},l=s((()=>(0,i._)("h2",null,"好運商品",-1))),u={class:"shopnav"},d=(0,i.Uk)(" 經典款 "),p=(0,i.Uk)(" 露營款"),f=(0,i.Uk)(" 限量款"),h={class:"shopbody"},m={key:0,class:"item"},g=["onClick"],v=["src"],k={class:"shopfooter"},w=["onClick"],A=(0,i.Uk)(" 查看更多 "),b=["disabled","onClick"],C=(0,i.Uk)(" 購物車 "),I={key:1,class:"item"},y=["onClick"],S=["src"],E={class:"shopfooter"},U=["onClick"],W=(0,i.Uk)(" 查看更多 "),F=["disabled","onClick"],R=(0,i.Uk)(" 購物車 "),Z={key:2,class:"item"},D=["onClick"],O=["src"],Q={class:"shopfooter"},x=["onClick"],J=(0,i.Uk)(" 查看更多 "),M=["disabled","onClick"],_=(0,i.Uk)(" 購物車 ");function j(t,e,n,s,j,V){const K=(0,i.up)("Loading"),T=(0,i.up)("font-awesome-icon"),N=(0,i.Q2)("motion-slide-visible-once-top");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(K,{active:t.isLoading},null,8,["active"]),(0,i._)("div",r,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",c,[l,(0,i._)("div",u,[(0,i._)("a",{href:"",class:(0,a.C_)({active:"經典款"===j.link}),onClick:e[0]||(e[0]=(0,o.iM)((t=>j.link="經典款"),["prevent"]))},[(0,i.Wm)(T,{icon:["fas","store"]}),d],2),(0,i._)("a",{href:"",class:(0,a.C_)({active:"露營款"===j.link}),onClick:e[1]||(e[1]=(0,o.iM)((t=>j.link="露營款"),["prevent"]))},[(0,i.Wm)(T,{icon:["fas","tent"]}),p],2),(0,i._)("a",{href:"",class:(0,a.C_)({active:"限量款"===j.link}),onClick:e[2]||(e[2]=(0,o.iM)((t=>j.link="限量款"),["prevent"]))},[(0,i.Wm)(T,{icon:["fas","gem"]}),f],2)]),(0,i._)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(j.products,(t=>((0,i.wg)(),(0,i.j4)(o.uT,{key:t.id,mode:"out-in","enter-active-class":"animate__animated animate__zoomIn animate__fast","leave-active-class":"animate__animated animate__zoomOut animate__fast"},{default:(0,i.w5)((()=>["經典款"===j.link?(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("a",{href:"",onClick:(0,o.iM)((e=>V.getProduct(t.id)),["prevent"])},[(0,i._)("img",{src:t.imageUrl,alt:""},null,8,v)],8,g),(0,i._)("h3",null,(0,a.zw)(t.title),1),(0,i._)("h4",null,(0,a.zw)(t.description),1),(0,i._)("h5",null,"$"+(0,a.zw)(t.price)+"元",1),(0,i._)("div",k,[(0,i._)("button",{type:"button",class:"intro",onClick:e=>V.getProduct(t.id)},[(0,i.Wm)(T,{icon:["fas","magnifying-glass"]}),A],8,w),(0,i._)("button",{type:"button",class:"add-cart",disabled:j.status.loadingItem===t.id,onClick:e=>V.addCart(t.id)},[(0,i.Wm)(T,{icon:["fas","cart-plus"]}),C],8,b)])],512)),[[o.F8,"經典款"===t.category]]):"露營款"===j.link?(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("a",{href:"",onClick:(0,o.iM)((e=>V.getProduct(t.id)),["prevent"])},[(0,i._)("img",{src:t.imageUrl,alt:""},null,8,S)],8,y),(0,i._)("h3",null,(0,a.zw)(t.title),1),(0,i._)("h4",null,(0,a.zw)(t.description),1),(0,i._)("h5",null,"$"+(0,a.zw)(t.price)+"元",1),(0,i._)("div",E,[(0,i._)("button",{type:"button",class:"intro",onClick:e=>V.getProduct(t.id)},[(0,i.Wm)(T,{icon:["fas","magnifying-glass"]}),W],8,U),(0,i._)("button",{type:"button",class:"add-cart",disabled:j.status.loadingItem===t.id,onClick:e=>V.addCart(t.id)},[(0,i.Wm)(T,{icon:["fas","cart-plus"]}),R],8,F)])],512)),[[o.F8,"露營款"===t.category]]):"限量款"===j.link?(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("a",{href:"",onClick:(0,o.iM)((e=>V.getProduct(t.id)),["prevent"])},[(0,i._)("img",{src:t.imageUrl,alt:""},null,8,O)],8,D),(0,i._)("h3",null,(0,a.zw)(t.title),1),(0,i._)("h4",null,(0,a.zw)(t.description),1),(0,i._)("h5",null,"$"+(0,a.zw)(t.price)+"元",1),(0,i._)("div",Q,[(0,i._)("button",{type:"button",class:"intro",onClick:e=>V.getProduct(t.id)},[(0,i.Wm)(T,{icon:["fas","magnifying-glass"]}),J],8,x),(0,i._)("button",{type:"button",class:"add-cart",disabled:j.status.loadingItem===t.id,onClick:e=>V.addCart(t.id)},[(0,i.Wm)(T,{icon:["fas","cart-plus"]}),_],8,M)])],512)),[[o.F8,"限量款"===t.category]]):(0,i.kq)("",!0)])),_:2},1024)))),128))])])),[[N]])])],64)}var V=n(5820),K={data(){return{link:"經典款",products:[],product:{},status:{loadingItem:""},cart:{}}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products}))},getProduct(t){this.$router.push(`/product/product/${t}`)},getCart(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.cart=t.data.data,this.isLoading=!1}))},addCart(t){const e="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart",n={product_id:t,qty:1};this.status.loadingItem=t,this.$http.post(e,{data:n}).then((t=>{this.status.loadingItem="",this.$httpMessageState(t,"加入購物車"),V.Z.emit("sendCart",this.cart)}))}},created(){this.getProducts(),this.getCart()}},T=n(89);const N=(0,T.Z)(K,[["render",j],["__scopeId","data-v-0ff4eedb"]]);var z=N},9698:function(t,e,n){n.d(e,{Z:function(){return _}});var i=n(3396),a=n(7139),o=n(9242),s=n.p+"img/popcronman.9a0dee1a.gif";const r=t=>((0,i.dD)("data-v-a173bb3a"),t=t(),(0,i.Cn)(),t),c={class:"wrap"},l={class:"container"},u={class:"sideicon"},d=r((()=>(0,i._)("img",{src:s,alt:"",srcset:""},null,-1))),p=[d],f=(0,i.Uk)(" 查看"),h=r((()=>(0,i._)("br",null,null,-1))),m=(0,i.Uk)("購物車 "),g=[f,h,m],v={key:0,class:"icon-num"},k={key:1,class:"icon-null"},w={class:"cart-wrap"},A={class:"cart-container"},b={class:"cart-header"},C=(0,i.Uk)(" 好運購物車 "),I={key:0},y={class:"cart-photo"},S=["src"],E={class:"cart-text"},U={class:"num"},W=["disabled","onClick"],F={class:"cart-footer"},R=r((()=>(0,i._)("h4",null,"小計",-1))),Z={key:1,class:"cart-checkout"},D=(0,i.Uk)(" 結帳 ");function O(t,e,n,s,r,d){const f=(0,i.up)("Loading"),h=(0,i.up)("font-awesome-icon"),m=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(f,{active:t.isLoading},null,8,["active"]),(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("div",u,[(0,i._)("button",{class:"sidecarticon",onClick:e[0]||(e[0]=(...t)=>d.tooglesideCart&&d.tooglesideCart(...t))},p),(0,i._)("button",{class:"sidecarticon-back",onClick:e[1]||(e[1]=(...t)=>d.tooglesideCart&&d.tooglesideCart(...t))},g),0!==r.cartLen?((0,i.wg)(),(0,i.iD)("div",v,(0,a.zw)(r.cartLen),1)):((0,i.wg)(),(0,i.iD)("div",k,"來點好運"))]),(0,i.Wm)(o.uT,{name:"sideCart"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",w,[(0,i._)("div",A,[(0,i._)("div",b,[(0,i._)("h2",null,[(0,i.Wm)(h,{icon:["fas","cart-shopping"]}),C]),(0,i._)("a",{href:"#",onClick:e[2]||(e[2]=(0,o.iM)(((...t)=>d.tooglesideCart&&d.tooglesideCart(...t)),["prevent"]))},[(0,i.Wm)(h,{icon:["fas","xmark"]})])]),0===r.cartLen?((0,i.wg)(),(0,i.iD)("h3",I,"購物車目前空空的")):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.cart.carts,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"cart-item",key:e.id},[(0,i._)("div",y,[(0,i._)("img",{src:e.product.imageUrl,alt:""},null,8,S)]),(0,i._)("div",E,[(0,i._)("h3",null,(0,a.zw)(e.product.title),1),(0,i._)("div",U,[(0,i._)("h4",null,(0,a.zw)(e.qty)+" / "+(0,a.zw)(e.product.unit),1),(0,i._)("h4",null,"$"+(0,a.zw)(t.$filters.currency(e.total))+"元",1)])]),(0,i._)("button",{type:"button",class:"cart-del",disabled:r.status.loadingItem===e.id,onClick:t=>d.removeCartItem(e.id)},[(0,i.Wm)(h,{icon:["fas","trash-can"]})],8,W)])))),128)),(0,i._)("div",F,[R,(0,i._)("h5",null,"$"+(0,a.zw)(t.$filters.currency(r.cart.total))+"元",1)]),0!==r.cartLen?((0,i.wg)(),(0,i.iD)("div",Z,[(0,i.Wm)(m,{to:"/final/cart"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{icon:["fas","cart-shopping"]}),D])),_:1})])):(0,i.kq)("",!0)])],512),[[o.F8,r.sideCart]])])),_:1})])])],64)}var Q=n(5820),x={data(){return{sideCart:"",products:[],product:{},status:{loadingItem:""},cart:{},cartLen:0}},methods:{tooglesideCart(){this.sideCart=!this.sideCart},getCart(){const t="https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart";this.$http.get(t).then((t=>{this.cart=t.data.data,this.cartLen=t.data.data.carts.length}))},removeCartItem(t){this.status.loadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/luckypopcorn-api/cart/${t}`;this.$http.delete(e).then((t=>{this.$httpMessageState(t,"移除購物車品項"),this.status.loadingItem="",this.getCart()}))}},created(){Q.Z.on("sendCart",(t=>{this.cart=t,this.getCart()}))}},J=n(89);const M=(0,J.Z)(x,[["render",O],["__scopeId","data-v-a173bb3a"]]);var _=M},1292:function(t,e,n){n.d(e,{Z:function(){return C}});var i=n(3396);const a={class:"toastcontainer"};function o(t,e,n,o,s,r){const c=(0,i.up)("Toast");return(0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.messages,((t,e)=>((0,i.wg)(),(0,i.j4)(c,{key:e,msg:t},null,8,["msg"])))),128))])}var s=n(7139);const r=t=>((0,i.dD)("data-v-495d6164"),t=t(),(0,i.Cn)(),t),c={class:"toast align-items-center",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},l={class:"d-flex"},u={key:0},d={key:1},p=r((()=>(0,i._)("button",{type:"button",class:"btn-close m-auto","data-bs-dismiss":"toast","aria-label":"Close"},null,-1)));function f(t,e,n,a,o,r){const f=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",l,[(0,i._)("div",{class:(0,s.C_)(["toast-body d-flex align-items-center",`text-${n.msg.style}`])},["success"===n.msg.style?((0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(f,{icon:["fas","circle-check"]})])):((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(f,{icon:["fas","circle-xmark"]})])),(0,i.Uk)(" "+(0,s.zw)(n.msg.content||n.msg.title),1)],2),p])],512)}var h=n(8803),m=n.n(h),g={name:"Toast",props:["msg"],mounted(){const t=this.$refs.toast,e=new(m())(t,{delay:3e3});e.show()}},v=n(89);const k=(0,v.Z)(g,[["render",f],["__scopeId","data-v-495d6164"]]);var w=k,A={components:{Toast:w},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:n,content:i}=t;this.messages.push({style:e,title:n,content:i})}))}};const b=(0,v.Z)(A,[["render",o],["__scopeId","data-v-2008782a"]]);var C=b},9965:function(t,e,n){n.d(e,{Z:function(){return A}});var i=n(3396),a=n.p+"img/salePic.0fa5988b.png";const o=t=>((0,i.dD)("data-v-2a67dba4"),t=t(),(0,i.Cn)(),t),s={class:"wrap"},r={class:"container"},c=o((()=>(0,i._)("img",{src:a,alt:""},null,-1))),l={class:"text-container"},u=o((()=>(0,i._)("h2",null,"好運爆米花 好運發發發",-1))),d=o((()=>(0,i._)("h3",null,"官網開幕慶",-1))),p=o((()=>(0,i._)("h3",null,"讓你好運一整個月！",-1))),f=o((()=>(0,i._)("h4",null,"2022/05/20-2022/06/19",-1))),h=o((()=>(0,i._)("div",{class:"coupon"},[(0,i._)("div",{class:"coupon-left"},[(0,i._)("p",null,[(0,i.Uk)("商品"),(0,i._)("br"),(0,i.Uk)("６折")])]),(0,i._)("div",{class:"coupon-right"},[(0,i._)("p",null,"getlucky60")])],-1))),m=(0,i.Uk)("點我領取 ");function g(t,e,n,a,o,g){const v=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",r,[c,(0,i._)("div",l,[u,d,p,f,h,(0,i._)("button",{type:"button",onClick:e[0]||(e[0]=(...t)=>g.copy&&g.copy(...t))},[(0,i._)("p",null,[m,(0,i.Wm)(v,{icon:["fas","arrow-pointer"]})])])])])])}var v={data(){return{message:"getlucky60"}},methods:{copy(){this.$copyText(this.message).then((()=>{})).catch((()=>{})),alert("優惠碼複製成功")}}},k=n(89);const w=(0,k.Z)(v,[["render",g],["__scopeId","data-v-2a67dba4"]]);var A=w}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,i,a,o){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],o=t[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(r=!1,o<s&&(s=o));if(r){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{8:"8769843d",51:"ac48d0b6",64:"837ab910",329:"32a22e3b",454:"12b9c204",512:"0e61143b",551:"dbbe31e4",576:"add1e634",695:"15185a19",709:"2de17074",815:"2bef9df3",840:"f7d4f3d0",878:"2077ab5e",883:"46eb1d5b"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{8:"766b5dcf",576:"994c2aca",815:"0a0a6a86",840:"aa232b7b",878:"38098f30"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="popcorn-vue:";n.l=function(i,a,o,s){if(t[i])t[i].push(a);else{var r,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+o),r.src=i),t[i]=[a];var p=function(e,n){r.onerror=r.onload=null,clearTimeout(f);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/popcorn-vue/dist/"}(),function(){var t=function(t,e,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=r,a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){a=s[i],o=a.getAttribute("data-href");if(o===t||o===e)return a}},i=function(i){return new Promise((function(a,o){var s=n.miniCssF(i),r=n.p+s;if(e(s,r))return a();t(i,r,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={8:1,576:1,815:1,840:1,878:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=i(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=t[e]=[n,i]}));i.push(a[2]=o);var s=n.p+n.u(e),r=new Error,c=function(i){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,a[1](r)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,s=i[0],r=i[1],c=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var u=c(n)}for(e&&e(i);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkpopcorn_vue"]=self["webpackChunkpopcorn_vue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4210)}));i=n.O(i)})();
//# sourceMappingURL=app.ea44ff62.js.map