(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{185:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a);function r(n,t,e,a,i,r,o){try{var c=n[r](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(a,i)}var o={layout:"recipient",data:function(){return{mail:null}},mounted:function(){this.init()},methods:{init:function(){var n,t=this;return(n=i.a.mark((function n(){var e,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,axios.post("/recipienter/get_mail_history_detail",{id:t.$route.query.id});case 3:e=n.sent,a=e.data,t.mail=a.mail,n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})),function(){var t=this,e=arguments;return new Promise((function(a,i){var o=n.apply(t,e);function c(n){r(o,a,i,c,s,"next",n)}function s(n){r(o,a,i,c,s,"throw",n)}c(void 0)}))})()},back:function(){this.$router.back()}}},c=(e(501),e(3)),s=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"create__container"},[e("h2",{staticClass:"page__title"},[n._v("メール配信履歴詳細")]),n._v(" "),n.mail?e("div",{staticClass:"contact__info"},[e("div",{staticClass:"d-flex contact_heading"},[e("h2",{staticClass:"page__title"},[n._v("取引先情報")]),n._v(" "),e("span",{staticClass:"company_name"},[n._v(n._s(n.mail.user.com_name))])]),n._v(" "),e("div",{staticClass:"contact__form"},[e("div",{staticClass:"form__row"},[e("label",[n._v("差出人名")]),n._v(" "),e("p",[n._v("\n          "+n._s(n.mail.recipienter.name)+"　"+n._s(1==n.mail.recipienter.type?"マスターアカウント":n.mail.recipienter.tanto_name)+"\n        ")])]),n._v(" "),e("div",{staticClass:"form__row"},[e("label",[n._v("宛先")]),n._v(" "),e("p",[n._v(n._s(n._f("''")(n.mail.user.com_name))+"　　　"+n._s(n.mail.user.email))])]),n._v(" "),e("div",{staticClass:"form__row"},[n._m(0),n._v(" "),e("p",[n._v("\n          "+n._s(n.mail.title)+"\n        ")])])])]):n._e(),n._v(" "),n.mail?e("div",{staticClass:"message__part"},[e("p",{staticClass:"to_client"},[n._v("\n      "+n._s(n.mail.user.com_name)),e("br"),n._v("\n      "+n._s(n.mail.user.name)+"様\n    ")]),n._v(" "),e("p",{staticClass:"message_text"},[n._v(n._s(n.mail.message)),e("br"),n._v(n._s(2==n.mail.mail_type?n.mail.deadline:"")),e("br"),n._v(n._s(n.mail.address)+"\n    ")])]):n._e(),n._v(" "),e("div",{staticClass:"actions"},[e("button",{on:{click:n.back}},[n._v("戻る")])])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("label",[this._v("件名"),t("span",{staticClass:"must"},[this._v("必須")])])}],!1,null,"5962e3c4",null);t.default=s.exports},501:function(n,t,e){"use strict";var a=e(88);e.n(a).a},502:function(n,t,e){(n.exports=e(5)(!1)).push([n.i,".create__container[data-v-5962e3c4] {\n  padding: 20px 30px;\n}\n.create__container .contact__info[data-v-5962e3c4] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 12px 14px;\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background-color: #fff;\n  margin-left: 50px;\n  margin-top: 20px;\n}\n.create__container .contact_heading[data-v-5962e3c4] {\n  align-items: center;\n  margin-bottom: 14px;\n}\n.create__container .contact_heading .company_name[data-v-5962e3c4] {\n  margin-left: 30px;\n  font-size: 12px;\n}\n.create__container .contact__form[data-v-5962e3c4] {\n  padding-left: 20px;\n}\n.create__container .contact__form .form__row[data-v-5962e3c4] {\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n}\n.create__container .contact__form .form__row label[data-v-5962e3c4] {\n  font-size: 12px;\n  align-items: center;\n  width: 65px;\n  display: flex;\n}\n.create__container .contact__form .form__row label .must[data-v-5962e3c4] {\n  width: 26px;\n  height: 12px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #D34555;\n  color: #fff;\n  margin-left: 3px;\n}\n.create__container .contact__form .form__row p[data-v-5962e3c4] {\n  font-size: 12px;\n  flex: 1;\n}\n.create__container .contact__form .form__row p input[data-v-5962e3c4], .create__container .contact__form .form__row p select[data-v-5962e3c4] {\n  width: 100%;\n  height: 30px;\n  border: 1px solid var(--border-color);\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 12px;\n  width: 316px;\n}\n.create__container .message__part[data-v-5962e3c4] {\n  width: 800px;\n  border: 1px solid var(--border-color);\n  margin-left: 50px;\n  margin-top: 24px;\n  padding: 25px 32px;\n  background-color: #fff;\n}\n.create__container .message__part .to_client[data-v-5962e3c4] {\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n.create__container .message__part .message_input[data-v-5962e3c4] {\n  display: block;\n  width: 100%;\n  height: 100px;\n  border: 1px solid var(--border-color);\n  padding: 4px 8px;\n  font-size: 12px;\n  margin-bottom: 26px;\n  resize: none;\n}\n.create__container .message__part .condition_input[data-v-5962e3c4] {\n  display: block;\n  width: 100%;\n  height: 240px;\n  border: 1px solid var(--border-color);\n  padding: 4px 8px;\n  font-size: 12px;\n  margin-bottom: 26px;\n  resize: none;\n}\n.create__container .message__part .message_text[data-v-5962e3c4] {\n  padding-left: 16px;\n  margin-top: 25px;\n  font-size: 12px;\n  word-break: break-all;\n  white-space: pre-wrap;\n}\n.create__container .actions[data-v-5962e3c4] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n}\n.create__container .actions button[data-v-5962e3c4] {\n  width: 180px;\n  height: 35px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.create__container .actions button[data-v-5962e3c4]:first-of-type {\n  margin-right: 50px;\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n}",""])},88:function(n,t,e){var a=e(502);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(n.exports=a.locals)}}]);