(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{180:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function i(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){i(o,a,r,s,c,"next",e)}function c(e){i(o,a,r,s,c,"throw",e)}s(void 0)}))}}var s={layout:"recipient",middleware:"recipient",data:function(){return{com_name:null,department_name:null,name:null,telephone:null,email:"",recipienter_id:null,recipienters:[]}},mounted:function(){this.init()},methods:{init:function(){var e=this;return o(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/recipienter/get_customer_edit_init",{id:e.$route.query.id});case 3:n=t.sent,a=n.data,e.recipienters=a.recipienters,e.com_name=a.user.com_name,e.department_name=a.user.department_name,e.name=a.user.name,e.telephone=a.user.telephone,e.email=a.user.email,e.recipienter_id=a.user.recipienter_id,t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})))()},inviteUser:function(){var e=this;return o(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.com_name&&e.name&&e.telephone&&e.email){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,axios.post("/recipienter/update_user",{com_name:e.com_name,department_name:e.department_name,name:e.name,telephone:e.telephone,email:e.email,recipienter_id:e.recipienter_id,id:e.$route.query.id});case 5:n=t.sent,n.data,e.$swal("","更新しました"),e.$router.push({name:"recipient.customer"}),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(2);case 13:case"end":return t.stop()}}),t,null,[[2,11]])})))()}}},c=(n(481),n(3)),p=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create__container"},[n("h2",{staticClass:"page__title"},[e._v("取引先ー編集")]),e._v(" "),n("div",{staticClass:"main__part"},[n("div",{staticClass:"form__part"},[n("h3",{staticClass:"page__title"},[e._v("取引先情報")]),e._v(" "),n("div",{staticClass:"form__row"},[e._m(0),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.com_name,expression:"com_name"}],attrs:{type:"text"},domProps:{value:e.com_name},on:{input:function(t){t.target.composing||(e.com_name=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"form__row"},[n("label",[e._v("部署名")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.department_name,expression:"department_name"}],attrs:{type:"text"},domProps:{value:e.department_name},on:{input:function(t){t.target.composing||(e.department_name=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"form__row"},[e._m(1),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"担当者名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"form__row"},[e._m(2),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone,expression:"telephone"}],attrs:{type:"text"},domProps:{value:e.telephone},on:{input:function(t){t.target.composing||(e.telephone=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"form__row"},[e._m(3),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",disabled:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),e.recipienters.length>0?n("h3",{staticClass:"page__title mt-30"},[e._v("社内情報")]):e._e(),e._v(" "),e.recipienters.length>0?n("div",{staticClass:"form__row"},[n("label",[e._v("担当者")]),e._v(" "),n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.recipienter_id,expression:"recipienter_id"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.recipienter_id=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:e.$store.getters["recipienter_auth/user"].id}},[e._v(e._s(1==e.$store.getters["recipienter_auth/user"].type?"マスターアカウント":e.$store.getters["recipienter_auth/user"].tanto_name))]),e._v(" "),e._l(e.recipienters,(function(t,a){return n("option",{key:a,domProps:{value:t.id}},[e._v(e._s(t.tanto_name))])}))],2)])]):e._e()]),e._v(" "),n("div",{staticClass:"action__part"},[n("button",{on:{click:e.inviteUser}},[e._v("更新")])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("会社名/屋号"),t("span",{staticClass:"must"},[this._v("必須")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("担当者名"),t("span",{staticClass:"must"},[this._v("必須")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("電話番号"),t("span",{staticClass:"must"},[this._v("必須")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("メールアドレス"),t("span",{staticClass:"must"},[this._v("必須")])])}],!1,null,"29eacf52",null);t.default=p.exports},481:function(e,t,n){"use strict";var a=n(80);n.n(a).a},482:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".mt-30[data-v-29eacf52] {\n  margin-top: 30px;\n}\n.create__container[data-v-29eacf52] {\n  padding: 20px 30px;\n}\n.create__container .main__part[data-v-29eacf52] {\n  margin-left: 200px;\n  margin-top: 20px;\n}\n.create__container .main__part .form__part[data-v-29eacf52] {\n  width: 500px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  padding: 16px 20px;\n  background-color: #fff;\n}\n.create__container .main__part .form__part h3[data-v-29eacf52] {\n  margin-bottom: 27px;\n}\n.create__container .main__part .form__part .form__row[data-v-29eacf52] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.create__container .main__part .form__part .form__row label[data-v-29eacf52] {\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  width: 175px;\n}\n.create__container .main__part .form__part .form__row label .must[data-v-29eacf52] {\n  width: 30px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #D34555;\n  font-size: 10px;\n  margin-left: 10px;\n}\n.create__container .main__part .form__part .form__row p[data-v-29eacf52] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.create__container .main__part .form__part .form__row p input[data-v-29eacf52], .create__container .main__part .form__part .form__row p select[data-v-29eacf52] {\n  flex: 1;\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid var(--border-color);\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.create__container .main__part .form__part .form__row p input[data-v-29eacf52]:nth-of-type(2), .create__container .main__part .form__part .form__row p select[data-v-29eacf52]:nth-of-type(2) {\n  margin-left: 10px;\n}\n.action__part[data-v-29eacf52] {\n  padding-top: 42px;\n  display: flex;\n  justify-content: center;\n}\n.action__part button[data-v-29eacf52] {\n  width: 180px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  background-color: var(--accent-color);\n  color: #fff;\n  border: 0;\n}",""])},80:function(e,t,n){var a=n(482);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(e.exports=a.locals)}}]);