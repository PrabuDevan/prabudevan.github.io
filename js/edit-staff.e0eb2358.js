(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-staff"],{"2fa4":function(t,e,s){"use strict";s("20f6");var i=s("80d2");e["a"]=Object(i["h"])("spacer","div","v-spacer")},"36a7":function(t,e,s){},"5e23":function(t,e,s){},"64da":function(t,e,s){},7076:function(t,e,s){"use strict";s("64da")},"71d9":function(t,e,s){"use strict";var i=s("3835"),a=s("5530"),n=(s("a9e3"),s("0481"),s("5e23"),s("8dd9")),o=s("adda"),r=s("80d2"),c=s("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(a["a"])(Object(a["a"])({},this.measurableStyles),{},{height:Object(r["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var s=Object(i["a"])(e,2),a=s[0],n=s[1];t.$attrs.hasOwnProperty(a)&&Object(c["a"])(a,n,t)}))},methods:{genBackground:function(){var t={height:Object(r["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["g"])(this.computedContentHeight)}},Object(r["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["g"])(this.extensionHeight)}},Object(r["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},"8a79":function(t,e,s){"use strict";var i=s("23e7"),a=s("06cf").f,n=s("50c4"),o=s("577e"),r=s("5a34"),c=s("1d80"),l=s("ab13"),h=s("c430"),d="".endsWith,u=Math.min,m=l("endsWith"),p=!h&&!m&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!p&&!m},{endsWith:function(t){var e=o(c(this));r(t);var s=arguments.length>1?arguments[1]:void 0,i=n(e.length),a=void 0===s?i:u(n(s),i),l=o(t);return d?d.call(e,l,a):e.slice(a-l.length,a)===l}})},"8efc":function(t,e,s){},adda:function(t,e,s){"use strict";var i=s("53ca"),a=(s("a9e3"),s("a15b"),s("8a79"),s("2ca0"),s("8efc"),s("90a2")),n=(s("36a7"),s("24b2")),o=s("58df"),r=Object(o["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=r,l=s("7560"),h=s("d9f7"),d=s("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(i["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,s){if(!u||s||this.eager){if(this.normalisedSrc.lazySrc){var i=new Image;i.src=this.normalisedSrc.lazySrc,this.pollForSize(i,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var a=t.naturalHeight,n=t.naturalWidth;a||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/a):t.complete||!e.isLoading||e.hasError||null==s||setTimeout(i,s)};i()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),s=Object(h["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},f904:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{padding:"55px 40px"}},[s("v-container",{staticClass:"pa-8",staticStyle:{"background-color":"white"}},[s("v-toolbar",{staticStyle:{"font-weight":"600","font-size":"18px","line-height":"27px"},attrs:{flat:"",height:"90px"}},[t._v(" Edit Staff ")]),s("v-row",{staticClass:"ma-0"},[s("v-col",{attrs:{cols:"6"}},[s("v-row",{staticClass:"ma-0 custom-text"},[t._v("First Name")]),s("v-row",{staticClass:"ma-0"},[s("v-text-field",{staticClass:"custom-input mt-7",attrs:{height:"65px",solo:"","hide-details":"",flat:""},model:{value:t.staff.fname,callback:function(e){t.$set(t.staff,"fname",e)},expression:"staff.fname"}})],1)],1),s("v-col",{attrs:{cols:"6"}},[s("v-row",{staticClass:"ma-0 custom-text"},[t._v("Last Name")]),s("v-row",{staticClass:"ma-0"},[s("v-text-field",{staticClass:"custom-input mt-7",attrs:{height:"65px",solo:"","hide-details":"",flat:""},model:{value:t.staff.lname,callback:function(e){t.$set(t.staff,"lname",e)},expression:"staff.lname"}})],1)],1)],1),s("v-row",{staticClass:"ma-0"},[s("v-col",{attrs:{cols:"6"}},[s("v-row",{staticClass:"ma-0 custom-text"},[t._v("Email")]),s("v-row",{staticClass:"ma-0"},[s("v-text-field",{staticClass:"custom-input mt-7",attrs:{height:"65px",solo:"","hide-details":"",flat:""},model:{value:t.staff.email,callback:function(e){t.$set(t.staff,"email",e)},expression:"staff.email"}})],1)],1),s("v-col",{attrs:{cols:"6"}},[s("v-row",{staticClass:"ma-0 custom-text"},[t._v("Mobile Number")]),s("v-row",{staticClass:"ma-0"},[s("v-text-field",{staticClass:"custom-input mt-7",attrs:{height:"65px",solo:"","hide-details":"",flat:""},model:{value:t.staff.mobile,callback:function(e){t.$set(t.staff,"mobile",e)},expression:"staff.mobile"}})],1)],1)],1),s("v-row",{staticClass:"ma-0"},[s("v-col",{attrs:{cols:"12"}},[s("v-row",{staticClass:"ma-0 custom-text"},[t._v("Address")]),s("v-row",{staticClass:"ma-0"},[s("v-text-field",{staticClass:"custom-input mt-7",attrs:{height:"65px",solo:"","hide-details":"",flat:""},model:{value:t.staff.address,callback:function(e){t.$set(t.staff,"address",e)},expression:"staff.address"}})],1)],1)],1),s("v-row",{staticClass:"ma-0"},[s("v-spacer"),s("v-col",{attrs:{cols:"2"}},[s("v-btn",{staticClass:"text-none custom-button",attrs:{height:"58px",color:"primary",width:"100%",elevation:"0"},on:{click:function(e){return e.preventDefault(),t.$router.push("/staff")}}},[t._v(" Save ")])],1),s("v-col",{attrs:{cols:"2"}},[s("v-btn",{staticClass:"text-none custom-button",attrs:{height:"58px",color:"#D1D1D1",dark:"",width:"100%",elevation:"0"},on:{click:function(e){return e.preventDefault(),t.$router.push("/staff")}}},[t._v(" Cancel ")])],1),s("v-spacer")],1)],1)],1)},a=[],n={name:"EditStaff",data:function(){return{staff:{fname:"Jerme",lname:"Bell",email:"admin123@gmail.com",mobile:9876543210,address:"2715 Ash Dr. San Jose, South Dakota 83475"}}}},o=n,r=(s("7076"),s("2877")),c=s("6544"),l=s.n(c),h=s("8336"),d=s("62ad"),u=s("a523"),m=s("0fd9"),p=s("2fa4"),f=s("8654"),v=s("71d9"),g=Object(r["a"])(o,i,a,!1,null,"1470562a",null);e["default"]=g.exports;l()(g,{VBtn:h["a"],VCol:d["a"],VContainer:u["a"],VRow:m["a"],VSpacer:p["a"],VTextField:f["a"],VToolbar:v["a"]})}}]);
//# sourceMappingURL=edit-staff.e0eb2358.js.map