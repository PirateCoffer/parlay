(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{788:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return d}));var n=r(0),o=r(826),c=r(830),l=r(829),v=Object(n.h)("v-stepper__header"),d=Object(n.h)("v-stepper__items");o.a,l.a,c.a},826:function(e,t,r){"use strict";r(13),r(9),r(7),r(6),r(10),r(25),r(18);var n=r(2),o=(r(827),r(94)),c=r(146),l=r(16),v=r(5),d=r(8);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h=Object(v.a)(Object(o.b)("stepper"),c.a,l.a);t.a=h.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var data={isBooted:!1,steps:[],content:[],isReverse:!1};return data.internalLazyValue=null!=this.value?this.value:(data[0]||{}).step||1,data},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(d.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(i){return i!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.internalValue=e}))},updateView:function(){for(var e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(var t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render:function(e){return e("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}})},827:function(e,t,r){var content=r(828);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("421e27d6",content,!0,{sourceMap:!1})},828:function(e,t,r){(t=r(14)(!1)).push([e.i,".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.6)}.v-application--is-ltr .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.v-application--is-rtl .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.v-application--is-rtl .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid hsla(0,0%,100%,.12)}.v-stepper{border-radius:4px;overflow:hidden;position:relative}.v-stepper,.v-stepper__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:.75rem;justify-content:center;height:24px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-stepper__step__step{margin-right:8px}.v-application--is-rtl .v-stepper__step__step{margin-left:8px}.v-stepper__step__step .v-icon.v-icon{font-size:1.25rem}.v-stepper__step__step .v-icon.v-icon.v-icon--svg{height:1.25rem;width:1.25rem}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:1.5rem;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;line-height:1}.v-application--is-ltr .v-stepper__label{text-align:left}.v-application--is-rtl .v-stepper__label{text-align:right}.v-stepper__label small{font-size:.75rem;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{padding:16px 60px 16px 23px;width:auto}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{margin:-8px 36px -16px -36px}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-application--is-rtl .v-stepper--vertical .v-stepper__step__step{margin-left:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-bottom:11px;margin-left:0;margin-right:0}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-left:0;margin-right:0}}",""]),e.exports=t},829:function(e,t,r){"use strict";r(21),r(22),r(6),r(18);var n=r(87),o=r(94),c=r(0),l=r(5),v=Object(l.a)(Object(o.a)("stepper","v-stepper-content","v-stepper"));t.a=v.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?n.f:n.g},styles:function(){return this.isVertical?{height:Object(c.g)(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},r={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var n=e("div",r,[this.$slots.default]),content=e("div",t,[n]);return e(this.computedTransition,{on:this.$listeners},[content])}})},830:function(e,t,r){"use strict";r(21),r(22),r(6),r(18);var n=r(65),o=r(19),c=r(94),l=r(74),v=r(5),d=Object(v.a)(o.a,Object(c.a)("stepper","v-stepper-step","v-stepper"));t.a=d.extend().extend({name:"v-stepper-step",directives:{ripple:l.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon:function(e){return this.$createElement(n.a,e)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){return e("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},940:function(e,t,r){"use strict";r.r(t);r(72);var n=r(23),o={name:"NewAd",middleware:"authenticated",components:{},data:function(){return{firstTimeLimit:null,minFeedbackScore:null,paymentMethodDetail:null,tradeTerms:null,paymentMethodInfo:null,minAmount:null,maxAmount:null,limitAmounts:null,tradeType:0,priceType:0,marginPct:null,marketPrice:null,fixedPrice:null,step:1,country:"USA",countries:[{text:"United States of America",value:"USA",src:"USA"},{text:"Mexico",value:"MEX",src:"MEX"}],currency:"USD",currencies:[{text:"USD",value:"USD"}],paymentMethod:"BANK",paymentMethods:[{text:"National Bank Transfer",value:"BANK",icon:"mdi-bank"},{text:"Cash by Mail",value:"MAIL",icon:"mdi-email-outline"}]}},computed:{markedUpPrice:function(){return(this.marketPrice*(1+this.marginPct/100)).toFixed(2)}},created:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getPrice(e.currency);case 2:r=t.sent,e.marketPrice=r,e.fixedPrice=r;case 5:case"end":return t.stop()}}),t)})))()},methods:{isNum:function(e){var t=function(e){return isFinite(String(e).trim()||NaN)};return!e||(t(e)?e<0?"Must be a positive number":!(e>100)||"Must be less than 100":"Must be a number")},getPrice:function(e){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",.08);case 1:case"end":return e.stop()}}),e)})))()},publishAd:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"11dbc844-a534-4995-9bc8-44a534d9958d",e.$router.push("/offer/".concat("11dbc844-a534-4995-9bc8-44a534d9958d")),e.notify("Ad Published!");case 3:case"end":return t.stop()}}),t)})))()}}},c=r(36),l=r(46),v=r.n(l),d=r(222),_=r(229),h=r(218),m=r(45),f=r(771),x=r(784),y=r(759),k=r(886),w=r(887),C=r(888),S=r(889),M=r(133),P=r(890),A=r(891),V=r(772),O=r(842),T=r(773),j=r(826),I=r(829),R=r(788),$=r(830),B=r(776),D=r(804),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"pa-0",attrs:{justify:"center"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",[r("h1",[e._v("Create an advertisement")])])],1),e._v(" "),r("v-row",[r("v-col",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("\n                Advertisement rules and requirements\n              ")]),e._v(" "),r("v-expansion-panel-content",[r("h3",[e._v("\n                  Before creating an advertisement please read through our "),r("n-link",{attrs:{to:"/terms"}},[e._v("Terms of Service")]),e._v(" and "),r("n-link",{attrs:{to:"/guides"}},[e._v("guides")])],1),e._v(" "),r("ul",[r("li",[e._v("\n                    Each completed trade costs advertisers 1% of the total trade amount.\n                  ")]),e._v(" "),r("li",[e._v("\n                    You must have at least 0.35 XMR in your LocalMonero wallet for a posted XMR sell ad to be visible.\n                  ")]),r("li",[e._v("\n                    Each user is allowed to create up to 800 ads.\n                  ")]),e._v(" "),r("li",[e._v("\n                    Once a trade is opened the price is final, except when there is a clear mistake in the pricing.\n                  ")]),e._v(" "),r("li",[e._v("\n                    You are not allowed to buy or sell Monero on behalf of someone else (brokering).\n                  ")]),e._v(" "),r("li",[e._v("\n                    You may only use payment accounts that are registered in your own name (no third party payments!).\n                  ")]),r("li",[e._v("\n                    You must provide your payment details in the advertisement or in the trade chat.\n                  ")]),e._v(" "),r("li",[e._v("\n                    All communication must happen on LocalMonero.\n                  ")])])])],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-btn",[r("v-icon",{attrs:{left:""}},[e._v("mdi-file-document-edit-outline")]),e._v("Show Full Form")],1)],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-stepper",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:e.step>1,step:"1"}},[e._v("Step 1")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.step>2,step:"2"}},[e._v("Step 2")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.step>3,step:"3"}},[e._v("Step 3")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.step>4,step:"4"}},[e._v("Step 4")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.step>5,step:"5"}},[e._v("Step 5")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{step:"6"}},[e._v("Step 6")])],1),e._v(" "),r("v-stepper-items",[r("v-stepper-content",{staticClass:"pa-0",attrs:{step:"1"}},[r("v-card",[r("v-card-text",[r("div",{staticClass:"text-h4 mb-2"},[e._v("Step 1")]),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Type of trade")]),e._v(" "),r("p",{staticClass:"primary--text"},[e._v("I want to...")]),e._v(" "),r("v-radio-group",{attrs:{hint:"What kind of trade advertisement do you wish to create? If you wish to sell Monero make sure you have Monero in your LocalCrypto wallet.","persistent-hint":""},model:{value:e.tradeType,callback:function(t){e.tradeType=t},expression:"tradeType"}},[r("v-radio",{attrs:{color:"success",label:"Sell Monero online"}}),e._v(" "),r("v-radio",{attrs:{color:"success",label:"Sell Monero for cash (locally)"}}),e._v(" "),r("v-radio",{attrs:{color:"success",label:"Buy Monero online"}}),e._v(" "),r("v-radio",{attrs:{color:"success",label:"Buy Monero for cash (locally)"}})],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.step=2}}},[e._v("Next")])],1)],1)],1),e._v(" "),r("v-stepper-content",{staticClass:"pa-0",attrs:{step:"2"}},[r("v-card",[r("v-card-text",[r("div",{staticClass:"text-h4 mb-2"},[e._v("Step 2")]),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{xs:"6",sm:"5"}},[r("div",{staticClass:"text-h5 mb-2"},[e._v("Country")]),e._v(" "),r("v-select",{staticClass:"mb-4",attrs:{items:e.countries,outlined:"","hide-details":""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[n.src?[r("v-avatar",{staticClass:"mr-2",attrs:{size:"24"}},[r("img",{attrs:{src:"/media/icons/"+n.src+".png"}})])]:[r("v-icon",{attrs:{left:""}},[e._v(e._s(n.icon))])],e._v(" "),r("span",{},[e._v(e._s(n.text))])]}},{key:"selection",fn:function(t){var n=t.item;return[n.src?[r("v-avatar",{staticClass:"mr-2",attrs:{size:"24"}},[r("img",{attrs:{src:"/media/icons/"+n.src+".png"}})])]:[r("v-icon",{attrs:{left:""}},[e._v(e._s(n.icon))])],e._v(" "),r("span",{},[e._v(e._s(n.text))])]}}]),model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Currency")]),e._v(" "),r("v-select",{staticClass:"mb-4",attrs:{items:e.currencies,"return-object":"",outlined:"","hide-details":""},model:{value:e.currency,callback:function(t){e.currency=t},expression:"currency"}}),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Payment Method")]),e._v(" "),r("v-select",{staticClass:"mb-4",attrs:{items:e.paymentMethods,outlined:"","hide-details":""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-icon",{attrs:{left:""}},[e._v(e._s(n.icon))]),e._v(" "+e._s(n.text)+"\n                            ")]}},{key:"selection",fn:function(t){var n=t.item;return[r("v-icon",{attrs:{left:""}},[e._v(e._s(n.icon))]),e._v(" "+e._s(n.text)+"\n                            ")]}}]),model:{value:e.paymentMethod,callback:function(t){e.paymentMethod=t},expression:"paymentMethod"}})],1)],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){e.step=1}}},[e._v("Back")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.step=3}}},[e._v("Next")])],1)],1)],1),e._v(" "),r("v-stepper-content",{staticClass:"pa-0",attrs:{step:"3"}},[r("v-card",[r("v-card-text",[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{sm:"6"}},[r("div",{staticClass:"text-h4 mb-2"},[e._v("Step 3")]),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Price")]),e._v(" "),r("v-radio-group",{attrs:{label:"Price input type",hint:"Market price means price on your ad will change as the market price changes. Fixed price means that despite market fluctuations your price will stay the same until you manually change it. Use price formula (advanced) to create more complicated pricing mechanisms.","persistent-hint":""},model:{value:e.priceType,callback:function(t){e.priceType=t},expression:"priceType"}},[r("v-radio",{attrs:{color:"success",label:"Market price"}}),e._v(" "),r("v-radio",{attrs:{color:"success",label:"Fixed price"}}),e._v(" "),r("v-radio",{attrs:{color:"success",label:"Price formula (advanced)"}})],1),e._v(" "),0===e.priceType?[r("v-text-field",{attrs:{label:"Margin in %",hint:"Margin is the difference between your price and market price. 0% is the market price. Use positive value to go above market price and negative value to go below market price.","persistent-hint":""},model:{value:e.marginPct,callback:function(t){e.marginPct=t},expression:"marginPct"}}),e._v(" "),r("div",{staticClass:"text-h4 success--text mt-3"},[e._v(e._s(e.markedUpPrice)+" "+e._s(e.currency))])]:1===e.priceType?[r("v-text-field",{staticClass:"mt-4",attrs:{label:"Fixed price in USD",hint:"Price for 1 XMR in "+e.currency+". This price will not change unless you manually change it.","persistent-hint":""},model:{value:e.fixedPrice,callback:function(t){e.fixedPrice=t},expression:"fixedPrice"}})]:e._e()],2)],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){e.step=2}}},[e._v("Back")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.step=4}}},[e._v("Next")])],1)],1)],1),e._v(" "),r("v-stepper-content",{staticClass:"pa-0",attrs:{step:"4"}},[r("v-card",[r("v-card-text",[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{sm:"8"}},[r("div",{staticClass:"text-h4 mb-2"},[e._v("Step 4")]),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Amount")]),e._v(" "),r("v-text-field",{attrs:{label:"Minimum amount ("+e.currency+")",hint:"Optional. Minimum transaction limit in one trade.","persistent-hint":""},model:{value:e.minAmount,callback:function(t){e.minAmount=t},expression:"minAmount"}}),e._v(" "),r("v-text-field",{attrs:{label:"Maximum amount ("+e.currency+")",hint:"Optional. Maximum transaction limit in one trade.","persistent-hint":""},model:{value:e.maxAmount,callback:function(t){e.maxAmount=t},expression:"maxAmount"}}),e._v(" "),r("v-text-field",{attrs:{label:"Limit amounts to",hint:"Optional. Restrict trading amounts to specific comma-separated integers, for example 20,50,100. In fiat currency (USD/EUR/etc). Handy for coupons, gift cards, etc.","persistent-hint":""},model:{value:e.limitAmounts,callback:function(t){e.limitAmounts=t},expression:"limitAmounts"}}),e._v(" "),r("v-switch",{attrs:{label:"Track maximum amount liquidity",hint:"This option limits the liquidity of this advertisement to the max. transaction limit. Buyers cannot open and complete trades for more than this amount. Example: With track liquidity turned on and max. transaction limit set to 100 USD when a buyer opens a trade for 20 USD the max. transaction limit is automatically decreased to 80 USD. It returns to 100 USD if the buyer cancels the trade, and stays at 80 USD if the trade is completed.","persistent-hint":""}})],1)],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){e.step=3}}},[e._v("Back")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.step=5}}},[e._v("Next")])],1)],1)],1),e._v(" "),r("v-stepper-content",{staticClass:"pa-0",attrs:{step:"5"}},[r("v-card",[r("v-card-text",[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{sm:"8"}},[r("div",{staticClass:"text-h4 mb-2"},[e._v("Step 5")]),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Details")]),e._v(" "),r("v-text-field",{attrs:{label:"Payment method detail",hint:"Optional. Specify some brief detail about the payment method to be shown in the ad list, such as the name of the bank in case the payment method is bank transfer. Maximum 64 characters.","persistent-hint":"",counter:"64",maxLength:"64"},model:{value:e.paymentMethodDetail,callback:function(t){e.paymentMethodDetail=t},expression:"paymentMethodDetail"}}),e._v(" "),r("v-text-field",{attrs:{label:"Terms of trade",hint:"Terms of trade of the advertisement, maximum 4096 characters. You can use markdown to style your ad's terms (images not allowed). How to use markdown?","persistent-hint":"",counter:"4096",maxLength:"4096"},model:{value:e.tradeTerms,callback:function(t){e.tradeTerms=t},expression:"tradeTerms"}}),e._v(" "),r("v-text-field",{attrs:{label:"Payment Method Info",counter:"4096",maxLength:"4096"},scopedSlots:e._u([{key:"message",fn:function(){return[e._v("\n                              Specify payment method info to be shown during trade. Maximum 4096 characters. You can use markdown to style your payment method info (images not allowed). How to use markdown?\n                            ")]},proxy:!0}]),model:{value:e.paymentMethodInfo,callback:function(t){e.paymentMethodInfo=t},expression:"paymentMethodInfo"}}),e._v(" "),r("div",{staticClass:"text-h5 mt-5"},[e._v("Restrictions")]),e._v(" "),r("v-switch",{attrs:{label:"For trusted users only",hint:"Makes this ad accessible only for the users you have marked as trusted","persistent-hint":""}}),e._v(" "),r("v-switch",{attrs:{label:"For users with verified email only",hint:"Useful if you're experiencing problems with ''coinlockers''","persistent-hint":""}}),e._v(" "),r("v-text-field",{staticClass:"mt-5",attrs:{label:"Minimum feedback score",hint:"Optional. Minimum user feedback score required to request a trade from 0 to 100.","persistent-hint":"",rules:[e.isNum]},model:{value:e.minFeedbackScore,callback:function(t){e.minFeedbackScore=t},expression:"minFeedbackScore"}}),e._v(" "),r("v-text-field",{attrs:{label:"First time limit (XMR)",hint:"Optional. Limit minimum transaction amount for users you don't have previous trades with. Minimum 0.","persistent-hint":""},model:{value:e.firstTimeLimit,callback:function(t){e.firstTimeLimit=t},expression:"firstTimeLimit"}})],1)],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){e.step=5}}},[e._v("Back")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.step=6}}},[e._v("Next")])],1)],1)],1),e._v(" "),r("v-stepper-content",{staticClass:"pa-0",attrs:{step:"6"}},[r("v-card",[r("v-card-text",[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{sm:"8"}},[r("div",{staticClass:"text-h4 mb-2"},[e._v("Step 6")]),e._v(" "),r("div",{staticClass:"text-h5 mb-2"},[e._v("Review your advertisement")])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("div",{staticClass:"font-weight-bold body-1"},[e._v("Ad type:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Country:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Currency:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Payment method:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Price input type:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Margin:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Track maximum amount liquidity:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("For trusted users only:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("For users with verified email only:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Payment method detail:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Terms of trade:")]),e._v(" "),r("div",{staticClass:"font-weight-bold body-1"},[e._v("Payment method info:")])]),e._v(" "),r("v-col",{attrs:{cols:"8"}},[r("div",{staticClass:"body-1"},[e._v("Sell Monero online")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v("United States of America")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v(e._s(e.currency))]),e._v(" "),r("div",{staticClass:"body-1"},[e._v("National Bank Transfer")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v("Market Price")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v(e._s(e.marginPct||0)+"%")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v("no")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v("no")]),e._v(" "),r("div",{staticClass:"body-1"},[e._v("no")])])],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){e.step=5}}},[e._v("Back")])],1)],1),e._v(" "),r("v-btn",{staticClass:"mt-1",attrs:{block:"",color:"success"},on:{click:e.publishAd}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("Publish Advertisement\n                ")],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VAvatar:d.a,VBtn:_.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCol:f.a,VContainer:x.a,VDivider:y.a,VExpansionPanel:k.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:C.a,VExpansionPanels:S.a,VIcon:M.a,VRadio:P.a,VRadioGroup:A.a,VRow:V.a,VSelect:O.a,VSpacer:T.a,VStepper:j.a,VStepperContent:I.a,VStepperHeader:R.a,VStepperItems:R.b,VStepperStep:$.a,VSwitch:B.a,VTextField:D.a})}}]);