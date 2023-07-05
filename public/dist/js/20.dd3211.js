(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{11:function(t,e,n){"use strict";var a={name:"ConfirmModal",props:["note","cancelText","okText","isDelete"],methods:{cancel:function(){this.$emit("cancel")},ok:function(){this.$emit("ok")}}},r=(n(426),n(3)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confirm__modal"},[n("div",{staticClass:"inner"},[n("p",{staticClass:"note"},[t._v(t._s(t.note))]),t._v(" "),1==t.isDelete?n("p",{staticClass:"attension"},[t._v("削除するとデータが完全に消去されます。")]):t._e(),t._v(" "),n("div",{staticClass:"actions"},[n("button",{on:{click:t.cancel}},[t._v(t._s(t.cancelText))]),t._v(" "),n("button",{on:{click:t.ok}},[t._v(t._s(t.okText))])])])])}),[],!1,null,"a9502304",null);e.a=i.exports},181:function(t,e,n){"use strict";n.r(e);var a,r=n(0),i=n.n(r),o=n(20),c=n(24),l=n(11);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e,n,a,r,i,o){try{var c=t[i](o),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(a,r)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){f(i,a,r,o,c,"next",t)}function c(t){f(i,a,r,o,c,"throw",t)}o(void 0)}))}}var u=n(27),v={layout:"recipient",components:{ConfirmModal:l.a,VueHtml2pdf:o.a,OrderProductTable:c.a},data:function(){return{columns:[],rows:[],order_form:null,message:"",deadline:null,deadline_time:null,payment_method:null,card_token:null,bank_code:null,branch_code:null,account_type:null,account_number:null,account_name:null,bankList:[],branchList:[],isShowModal:!1,isEditing:!1,pay_expire:null}},mounted:function(){this.loadBankList(),this.init()},methods:(a={back:function(){this.$router.back()},editExpire:function(){var t=this;return p(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isEditing=!t.isEditing,0!=t.isEditing){e.next=12;break}if(!t.pay_expire){e.next=12;break}return e.prev=3,e.next=6,axios.post("/recipienter/save_pay_expire",{pay_expire:t.pay_expire,id:t.order_form.id});case 6:n=e.sent,n.data,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})))()},changePayExpire:function(t){},sendInvoiceEmail:function(){this.isShowModal=!0},cancelFinishDelivery:function(){this.isShowModal=!1},okFinishDelivery:function(){var t=this;return p(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/recipienter/send_invoice_email",{id:t.$route.query.id});case 3:n=e.sent,n.data.flag&&(t.$swal("","請求書送信しました"),t.$router.push({name:"recipient.invoice"})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},loadBankList:function(){this.bankList=Object.values(u),this.bankList=this.bankList.filter((function(t){return t.code>="0001"&&t.code<"0043"||"ゆうちょ"==t.name}))},calcBankName:function(){var t=this,e=this.bankList.find((function(e){return e.code==t.bank_code}));return e?e.name:""}},d(a,"sendInvoiceEmail",(function(){this.$router.push({name:"recipient.invoice.message.create",query:{id:this.$route.query.id}})})),d(a,"downloadPDF",(function(){this.$refs.html2Pdf.generatePdf()})),d(a,"onProgress",(function(t){})),d(a,"hasStartedGeneration",(function(){})),d(a,"hasGenerated",(function(){})),d(a,"calcBranchName",(function(){var t=this,e=this.bankList.find((function(e){return e.code==t.bank_code}));if(e){var n=Object.values(e.branches).find((function(e){return e.code==t.branch_code}));return n?n.name:""}return""})),d(a,"calcAccountType",(function(){var t="";switch(this.account_type){case"1":t="普通預金";break;case"2":t="当座預金";break;case"3":t="貯蓄預金"}return t})),d(a,"calcTotalPrice",(function(){var t=0;return this.rows.map((function(e){t+=e.price*e.amount})),parseInt(t)})),d(a,"calcTaxFee8P",(function(){var t=0;return this.rows.forEach((function(e){2==e.tax&&(t+=e.price*e.amount*.08)})),parseInt(t)})),d(a,"calcTaxFee10P",(function(){var t=0;return this.rows.forEach((function(e){1==e.tax&&(t+=e.price*e.amount*.1)})),parseInt(t)})),d(a,"calcPrice8P",(function(){var t=0;return this.rows.forEach((function(e){2==e.tax&&(t+=e.price*e.amount)})),parseInt(t)})),d(a,"calcPrice10P",(function(){var t=0;return this.rows.forEach((function(e){1==e.tax&&(t+=e.price*e.amount)})),parseInt(t)})),d(a,"getValue",(function(t,e){var n=this.rows.find((function(t){return t.id==e})),a=null;return n.product_values.forEach((function(e){e.product_user_column.product_column.slug==t&&(a="number"==e.product_user_column.product_column.type?parseInt(e.value):e.value)})),a})),d(a,"getImageUrl",(function(t){var e=this.rows.find((function(e){return e.id==t})),n=null;return e.product_values.forEach((function(t){"image"==t.product_user_column.product_column.slug&&(n=t.value_url)})),n||"/asset/no_image.svg"})),d(a,"init",(function(){var t=this;return p(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/recipienter/get_order_detail",{id:t.$route.query.id});case 3:n=e.sent,a=n.data,t.bank_code=a.recipienter.bank_code,t.branch_code=a.recipienter.branch_code,t.account_type=a.recipienter.account_type,t.account_number=a.recipienter.account_number,t.account_name=a.recipienter.account_name,t.order_form=a.order_form,t.pay_expire=a.order_form.pay_expire,(r=a.columns.filter((function(t){return a.userColumns.length>0?1==a.userColumns.find((function(e){return e.product_column_id==t.id})).picked:1==t.picked})).map((function(t){if(a.userColumns.length>0){var e=a.userColumns.find((function(e){return e.product_column_id==t.id}));return _(_({},t),{},{order:e.order,tax:e.tax,tax_type:e.tax_type,name:e.nickname})}return t}))).sort((function(t,e){return t.order-e.order})),r.forEach((function(e){"total_price"!=e.slug&&("price"==e.slug?(t.columns.push({label:e.name+(1==e.tax_type?"（税抜）":2==e.tax_type?"（税込）":"（非課税）"),field:e.slug,sortable:"number"==e.type}),3!=e.tax_type&&2==e.tax&&t.columns.push({label:"軽減税率",field:"tax",sortable:!1,width:"60px"})):t.columns.push({label:e.name,field:e.slug,sortable:"number"==e.type}))})),t.rows=a.order_form_products.map((function(t){return _(_({},t.product),{},{price:t.price,amount:t.amount,tax:t.tax,tax_type:t.tax_type})})),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})))()})),a)},m=(n(491),n(3)),g=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order__detail_container"},[t._m(0),t._v(" "),t.order_form?n("div",{staticClass:"status__part"},[n("div",{staticClass:"panel"},[n("h3",{staticClass:"page__title"},[t._v("書類情報")]),t._v(" "),n("div",{staticClass:"panel__info"},[n("div",{staticClass:"panel__row"},[n("label",[t._v("注文番号　　："+t._s(t.order_form.hash))]),t._v(" "),n("p")]),t._v(" "),n("div",{staticClass:"panel__row"},[n("label",[t._v("最終更新日時："+t._s(t._f("dateFormatFull")(t.order_form.updated_at)))]),t._v(" "),n("p")])])]),t._v(" "),n("div",{staticClass:"status__action"},[n("button",{on:{click:t.downloadPDF}},[n("img",{attrs:{src:"/asset/icons/pdf.svg"}}),t._v("請求書作成")])])]):t._e(),t._v(" "),t.order_form?n("div",{staticClass:"client__info"},[n("div",{staticClass:"left"},[n("h3",{staticClass:"page__title"},[t._v(t._s(t.order_form.user.com_name))]),t._v(" "),n("p",{staticClass:"client_saki"},[t._v(t._s(t.order_form.user.name)+" "),n("span",[t._v("様")])]),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"total_price"},[n("span",[t._v("合計金額")]),t._v(" "),n("span",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcTotalPrice()))+"（税込）")])])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"info__row"},[n("label",[t._v("請求書番号：")]),t._v(" "),n("p",[t._v(t._s(t.order_form.invoice_hash))])]),t._v(" "),n("div",{staticClass:"info__row"},[n("label",[t._v("作成日：")]),t._v(" "),n("p",[t._v(t._s(t._f("dateFormat")(t.order_form.invoice_at)))])]),t._v(" "),n("div",{staticClass:"info__row"},[n("label",[t._v("支払期限：")]),t._v(" "),t.isEditing?n("input",{directives:[{name:"model",rawName:"v-model",value:t.pay_expire,expression:"pay_expire"}],attrs:{type:"date"},domProps:{value:t.pay_expire},on:{change:t.changePayExpire,input:function(e){e.target.composing||(t.pay_expire=e.target.value)}}}):n("p",[t._v(t._s(t._f("dateFormat")(t.pay_expire)))]),t._v(" "),n("button",{on:{click:t.editExpire}},[t._v(t._s(t.isEditing?"保存":"編集"))])]),t._v(" "),n("div",{staticClass:"com_name"},[t._v(t._s(t.order_form.recipienter.name||""))]),t._v(" "),n("div",{staticClass:"address"},[t._v("\n          住所　："+t._s(t.order_form.recipienter.prefecture||"")),n("br"),t._v("\n          　　　　"+t._s(t.order_form.recipienter.city||"")),n("br"),t._v("\n          　　　　"+t._s(t.order_form.recipienter.address||"")+"\n        ")]),t._v(" "),n("div",{staticClass:"address"},[t._v("\n          担当者："+t._s(t.order_form.recipienter.owner||"管理者")+"\n        ")]),t._v(" "),n("div",{staticClass:"address"},[t._v("\n          電話番号: "+t._s(t.order_form.recipienter.phone||"")+"\n        ")]),t._v(" "),n("div")])]):t._e(),t._v(" "),n("div",{staticClass:"detail__part"},[n("div",{staticClass:"detail__table"},[n("vue-good-table",{attrs:{columns:t.columns,rows:t.rows,"pagination-options":{enabled:!1}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["mark"==e.column.field?n("div",[n("span",{staticClass:"mark"},[t._v(t._s(e.row.mark))])]):"is_public"==e.column.field?n("div",{staticClass:"toggle"},[n("toggle-button",{attrs:{width:88,value:0!=e.row.is_public,sync:!0,disabled:!0,color:{unchecked:"#707070",checked:"#337DFD"},labels:{unchecked:"非公開",checked:"公開"}}})],1):"name"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("name",e.row.id)))])]):"price"==e.column.field?n("div",[n("span",[t._v(t._s(t._f("moneyFormat")(e.row.price))+"円")])]):"tax"==e.column.field?n("div",[n("span",[t._v(t._s(2==e.row.tax?"対象":""))])]):"amount"==e.column.field?n("div",[n("span",[t._v(t._s(t._f("moneyFormat")(e.row.amount)))])]):"total_price"==e.column.field?n("div",[n("span",[t._v(t._s(t._f("moneyFormat")(e.row.price*e.row.amount))+"円")])]):"remark"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("remark",e.row.id)))])]):"maker"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("maker",e.row.id)))])]):"color"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("color",e.row.id)))])]):"size"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("size",e.row.id)))])]):"unit"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("unit",e.row.id)))])]):"image"==e.column.field?n("div",[n("span",{staticClass:"img"},[n("img",{attrs:{src:t.getImageUrl(e.row.id)}})])]):"jan"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("jan",e.row.id)))])]):"order"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("order",e.row.id)))])]):"free_space1"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("free_space1",e.row.id)))])]):"free_space2"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("free_space2",e.row.id)))])]):"free_space3"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("free_space3",e.row.id)))])]):"delete"==e.column.field?n("div",[n("a",{staticClass:"delete_btn",on:{click:function(n){return t.cancelOrderedProduct(e.row.id)}}},[n("img",{attrs:{src:"/asset/icons/delete.svg"}})])]):n("div",{staticClass:"table_cell"},[t._v("\n              "+t._s(e.formattedRow[e.column.field])+"\n            ")])]}}])})],1),t._v(" "),t.order_form?n("div",{staticClass:"total__part"},[n("div",{staticClass:"message__part"},[n("h4",[t._v("メッセージ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.order_form.message)+"\n          ")]),t._v(" "),n("div",{staticClass:"d-flex mb-20"},[n("label",[t._v("希望納品時間：")]),t._v(" "),n("p",[t._v(t._s(t._f("dateFormat")(t.order_form.deadline)))])]),t._v(" "),n("div",{staticClass:"d-flex"},[n("label",[t._v("希望納品時間：")]),t._v(" "),n("p",[t._v(t._s(t.order_form.deadline_time))])]),t._v(" "),n("div",{staticClass:"d-flex"},[n("label",[t._v("支払方法　　：")]),t._v(" "),n("p",[t._v(t._s(1==t.order_form.payment_method?"銀行振込":"クレジットカード"))])])]),t._v(" "),n("div",{staticClass:"calculator"},[1==t.order_form.tax_type?n("div",{staticClass:"block"},[n("div",{staticClass:"calc_row"},[n("label",[t._v("小計（税抜）")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcTotalPrice()))])]),t._v(" "),n("div",{staticClass:"calc_row"},[n("label",[t._v("消費税（8％）")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcTaxFee8P()))])]),t._v(" "),n("div",{staticClass:"calc_row"},[n("label",[t._v("消費税（10％）")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcTaxFee10P()))])]),t._v(" "),n("div",{staticClass:"calc_row"},[n("label",[t._v("合計")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcTotalPrice()+t.calcTaxFee8P()+t.calcTaxFee10P()))])])]):t._e(),t._v(" "),2==t.order_form.tax_type?n("div",{staticClass:"block"},[n("div",{staticClass:"calc_row"},[n("label",[t._v("小計（8％）")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcPrice8P()))])]),t._v(" "),n("div",{staticClass:"calc_row"},[n("label",[t._v("小計（10％）")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcPrice10P()))])]),t._v(" "),n("div",{staticClass:"calc_row"},[n("label",[t._v("合計(税込)")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcPrice8P()+t.calcPrice10P()))])])]):t._e(),t._v(" "),3==t.order_form.tax_type?n("div",{staticClass:"block"},[n("div",{staticClass:"calc_row"},[n("label",[t._v("合計")]),t._v(" "),n("p",[t._v("￥"+t._s(t.calcTotalPrice()))])])]):t._e(),t._v(" "),n("div",{staticClass:"calc__action"},[n("button",{staticClass:"on",on:{click:t.sendInvoiceEmail}},[t._v("メールで送信")])]),t._v(" "),n("div",{staticClass:"calc__action"},[n("button",{staticClass:"back",on:{click:t.back}},[t._v("戻る")])])])]):t._e()]),t._v(" "),t.isShowModal?n("ConfirmModal",{attrs:{note:"ダウンロードして対応済みにする",cancelText:"キャンセル",okText:"決定"},on:{cancel:t.cancelFinishDelivery,ok:t.okFinishDelivery}}):t._e(),t._v(" "),n("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!0,"preview-modal":!1,"paginate-elements-by-height":1400,filename:"請求書","pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"landscape","pdf-content-width":"1132px"},on:{progress:function(e){return t.onProgress(e)},hasStartedGeneration:function(e){return t.hasStartedGeneration()},hasGenerated:function(e){return t.hasGenerated(e)}}},[t.order_form?n("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[n("section",{staticClass:"pdf-item"},[n("div",{staticClass:"pdf_container"},[n("div",{staticClass:"pdf_heading"},[n("p",{staticClass:"contact_to"},[t._v(t._s(t.order_form.user.com_name)+"　御中")]),t._v(" "),n("div",{staticClass:"page_type"},[n("p",[t._v("請求書")]),t._v(" "),n("p",[t._v("作成日："+t._s(t._f("dateFormat")(t.order_form.invoice_at))+"　請求書番号："+t._s(t.order_form.invoice_hash||"")),n("br"),t._v("支払い期日："+t._s(t._f("dateFormat")(t.order_form.pay_expire)))])])]),t._v(" "),n("div",{staticClass:"order_detail_info"},[n("div",{staticClass:"left"},[n("div",{staticClass:"d-flex"},[n("label",[t._v("請求額")]),t._v(" "),1==t.order_form.tax_type?n("p",[t._v("￥"+t._s(t._f("moneyFormat")(parseInt(t.calcTotalPrice()+t.calcTaxFee8P()+t.calcTaxFee10P())))+"（税込）")]):t._e(),t._v(" "),2==t.order_form.tax_type?n("p",[t._v("￥"+t._s(t._f("moneyFormat")(parseInt(t.calcPrice8P()+t.calcPrice10P())))+"（税込）")]):t._e(),t._v(" "),3==t.order_form.tax_type?n("p",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcTotalPrice()))+"（税込）")]):t._e()])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"client_info border"},[n("p",[t._v("\n                    "+t._s(t.$store.getters["recipienter_auth/user"].name)),n("br"),t._v("\n\t\t    "+t._s(t.$store.getters["recipienter_auth/user"].owner)),n("br"),t._v("\n                    "+t._s(t.$store.getters["recipienter_auth/user"].zipcode?"〒"+t.$store.getters["recipienter_auth/user"].zipcode:"")+" "+t._s(t.$store.getters["recipienter_auth/user"].prefecture||"")+" "+t._s(t.$store.getters["recipienter_auth/user"].city||"")+" "+t._s(t.$store.getters["recipienter_auth/user"].building||"")),n("br"),t._v("\n                    TEL: "+t._s(t.$store.getters["recipienter_auth/user"].phone)+"\n                  ")]),t._v(" "),n("span",{staticClass:"dump"},[n("img",{attrs:{src:t.$store.getters["recipienter_auth/user"].stamp_url}})])])])]),t._v(" "),n("OrderProductTable",{attrs:{id:t.order_form.id}}),t._v(" "),n("div",{staticClass:"total_price"},[1==t.order_form.tax_type?n("table",[n("tr",{staticClass:"calc_row"},[n("td",[t._v("小計（税抜）")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcTotalPrice())))])]),t._v(" "),n("tr",{staticClass:"calc_row"},[n("td",[t._v("消費税（8％）")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcTaxFee8P())))])]),t._v(" "),n("tr",{staticClass:"calc_row"},[n("td",[t._v("消費税（10％）")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcTaxFee10P())))])]),t._v(" "),n("tr",{staticClass:"calc_row"},[n("td",[t._v("合計")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(parseInt(t.calcTotalPrice()+t.calcTaxFee8P()+t.calcTaxFee10P()))))])])]):t._e(),t._v(" "),2==t.order_form.tax_type?n("table",[n("tr",{staticClass:"calc_row"},[n("td",[t._v("小計（8％）")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcPrice8P())))])]),t._v(" "),n("tr",{staticClass:"calc_row"},[n("td",[t._v("小計（10％）")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcPrice10P())))])]),t._v(" "),n("tr",{staticClass:"calc_row"},[n("td",[t._v("合計(税込)")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(parseInt(t.calcPrice8P()+t.calcPrice10P()))))])])]):t._e(),t._v(" "),3==t.order_form.tax_type?n("table",[n("tr",{staticClass:"calc_row"},[n("td",[t._v("合計")]),t._v(" "),n("td",[t._v("￥"+t._s(t._f("moneyFormat")(t.calcTotalPrice())))])])]):t._e()])],1),t._v(" "),n("div",{staticClass:"html2pdf__page-break"})])]):t._e()])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex heading"},[e("h2",{staticClass:"page__title"},[this._v("請求書")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"content"},[this._v("\n          この度はご注文いただきましてありがとうごいます。"),e("br"),this._v("\n          下記の通り納品させていただきます。\n        ")])}],!1,null,"1f0fec56",null);e.default=g.exports},24:function(t,e,n){"use strict";var a=n(0),r=n.n(a);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e,n,a,r,i,o){try{var c=t[i](o),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(a,r)}var s={props:["id"],data:function(){return{order_form:null,rows:[],columns:[]}},mounted:function(){this.init()},methods:{init:function(){var t,e=this;return(t=r.a.mark((function t(){var n,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/recipienter/get_order_detail",{id:e.$props.id});case 3:n=t.sent,a=n.data,e.order_form=a.order_form,(i=a.columns.filter((function(t){return a.userColumns.length>0?1==a.userColumns.find((function(e){return e.product_column_id==t.id})).picked:1==t.picked})).map((function(t){if(a.userColumns.length>0){var e=a.userColumns.find((function(e){return e.product_column_id==t.id}));return o(o({},t),{},{order:e.order,tax:e.tax,tax_type:e.tax_type,name:e.nickname})}return t}))).sort((function(t,e){return t.order-e.order})),i.forEach((function(t){"total_price"!=t.slug&&("price"==t.slug?(e.columns.push({label:t.name+(1==t.tax_type?"（税抜）":2==t.tax_type?"（税込）":"（非課税）"),field:t.slug,sortable:"number"==t.type}),3!=t.tax_type&&2==t.tax&&e.columns.push({label:"軽減税率",field:"tax",sortable:!1,width:"60px"})):e.columns.push({label:t.name,field:t.slug,sortable:"number"==t.type}))})),e.rows=a.order_form_products.map((function(t){return o(o({},t.product),{},{price:t.price,amount:t.amount,tax:t.tax,tax_type:t.tax_type})})),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){l(i,a,r,o,c,"next",t)}function c(t){l(i,a,r,o,c,"throw",t)}o(void 0)}))})()},getValue:function(t,e){var n=this.rows.find((function(t){return t.id==e})),a=null;return n.product_values.forEach((function(e){e.product_user_column.product_column.slug==t&&(a="number"==e.product_user_column.product_column.type?parseInt(e.value):e.value)})),a},getImageUrl:function(t){var e=this.rows.find((function(e){return e.id==t})),n=null;return e.product_values.forEach((function(t){"image"==t.product_user_column.product_column.slug&&(n=t.value_url)})),n||"/asset/no_image.svg"}}},_=(n(428),n(3)),d=Object(_.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order_detail_products"},[n("vue-good-table",{attrs:{columns:t.columns,rows:t.rows,"pagination-options":{enabled:!1}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["mark"==e.column.field?n("div",[n("span",{staticClass:"mark"},[t._v(t._s(e.row.mark))])]):"is_public"==e.column.field?n("div",{staticClass:"toggle"},[n("toggle-button",{attrs:{width:88,value:0!=e.row.is_public,sync:!0,disabled:!0,color:{unchecked:"#707070",checked:"#337DFD"},labels:{unchecked:"非公開",checked:"公開"}}})],1):"name"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("name",e.row.id)))])]):"price"==e.column.field?n("div",[n("span",[t._v(t._s(t._f("moneyFormat")(e.row.price))+"円")])]):"tax"==e.column.field?n("div",[n("span",[t._v(t._s(2==e.row.tax?"対象":""))])]):"amount"==e.column.field?n("div",[n("span",[t._v(t._s(t._f("moneyFormat")(e.row.amount)))])]):"total_price"==e.column.field?n("div",[n("span",[t._v(t._s(t._f("moneyFormat")(e.row.price*e.row.amount))+"円")])]):"remark"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("remark",e.row.id)))])]):"maker"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("maker",e.row.id)))])]):"color"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("color",e.row.id)))])]):"size"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("size",e.row.id)))])]):"unit"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("unit",e.row.id)))])]):"image"==e.column.field?n("div",[n("span",{staticClass:"img"},[n("img",{attrs:{src:t.getImageUrl(e.row.id)}})])]):"jan"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("jan",e.row.id)))])]):"order"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("order",e.row.id)))])]):"free_space1"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("free_space1",e.row.id)))])]):"free_space2"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("free_space2",e.row.id)))])]):"free_space3"==e.column.field?n("div",[n("span",[t._v(t._s(t.getValue("free_space3",e.row.id)))])]):n("div",{staticClass:"table_cell"},[t._v("\n        "+t._s(e.formattedRow[e.column.field])+"\n      ")])]}}])})],1)}),[],!1,null,"13af063f",null);e.a=d.exports},426:function(t,e,n){"use strict";var a=n(53);n.n(a).a},427:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".confirm__modal[data-v-a9502304] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.16);\n  z-index: 200;\n}\n.confirm__modal .inner[data-v-a9502304] {\n  position: fixed;\n  z-index: 250;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  border-radius: 5px;\n  border: 1px solid var(--border-color);\n  background-color: #fff;\n  padding: 50px 0 30px;\n}\n.actions[data-v-a9502304] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n}\n.actions button[data-v-a9502304] {\n  width: 180px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions button[data-v-a9502304]:first-of-type {\n  margin-right: 10px;\n  border: 1px solid var(--border-color);\n}\n.actions button[data-v-a9502304]:nth-of-type(2) {\n  border: 0;\n  background-color: var(--accent-color);\n  color: #fff;\n}\n.note[data-v-a9502304] {\n  text-align: center;\n}\n.attension[data-v-a9502304] {\n  text-align: center;\n  color: #ff0000;\n  font-size: 12px;\n  margin-top: 10px;\n}",""])},428:function(t,e,n){"use strict";var a=n(54);n.n(a).a},429:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".img[data-v-13af063f] {\n  display: flex;\n  width: 100px;\n}\n.img img[data-v-13af063f] {\n  width: 100%;\n}",""])},491:function(t,e,n){"use strict";var a=n(83);n.n(a).a},492:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".mb-20[data-v-1f0fec56] {\n  margin-bottom: 20px;\n}\n.order__detail_container[data-v-1f0fec56] {\n  padding: 20px 30px;\n}\n.order__detail_container .heading[data-v-1f0fec56] {\n  width: 910px;\n  align-items: center;\n}\n.order__detail_container .download_btn[data-v-1f0fec56] {\n  border-radius: 5px;\n  background-color: #fff;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: 20px;\n  color: var(--text-color);\n  border: 1px solid var(--border-color);\n}\n.order__detail_container .download_btn img[data-v-1f0fec56] {\n  margin-right: 6px;\n}\n.order__detail_container .status__part[data-v-1f0fec56] {\n  margin-left: 50px;\n  display: flex;\n  padding-top: 20px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 20px;\n}\n.order__detail_container .status__part .panel[data-v-1f0fec56] {\n  flex: 0.5;\n  border: 1px solid var(--border-color);\n  padding: 12px 16px;\n  border-radius: 5px;\n  background-color: #fff;\n}\n.order__detail_container .status__part .panel[data-v-1f0fec56]:first-of-type {\n  margin-right: 30px;\n}\n.order__detail_container .status__part .panel .sub_title[data-v-1f0fec56] {\n  margin-left: 30px;\n  font-size: 14px;\n}\n.order__detail_container .status__part .panel .panel__info[data-v-1f0fec56] {\n  margin-top: 12px;\n  width: 100%;\n}\n.order__detail_container .status__part .panel .panel__info .panel__row[data-v-1f0fec56] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.order__detail_container .status__part .panel .panel__info .panel__row label[data-v-1f0fec56] {\n  font-size: 12px;\n  margin-right: 10px;\n}\n.order__detail_container .status__part .panel .panel__info .panel__row p[data-v-1f0fec56] {\n  flex: 1;\n}\n.order__detail_container .status__part .panel .panel__info .contactClient[data-v-1f0fec56] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #337DFD;\n  margin-left: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.order__detail_container .status__part .panel .panel__info .contactClient img[data-v-1f0fec56] {\n  margin-right: 5px;\n  font-size: 12px;\n  color: 15px;\n  margin-right: 5px;\n}\n.order__detail_container .status__part .status__action[data-v-1f0fec56] {\n  flex: 0.5;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.order__detail_container .status__part .status__action button[data-v-1f0fec56] {\n  width: 70px;\n  height: 25px;\n  border-radius: 5px;\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n.order__detail_container .status__part .status__action button img[data-v-1f0fec56] {\n  margin-right: 4px;\n}\n.order__detail_container .status__part .status__action button[data-v-1f0fec56]:first-of-type {\n  margin-right: 17px;\n}\n.order__detail_container .client__info[data-v-1f0fec56] {\n  margin-left: 50px;\n  width: 860px;\n  padding-top: 25px;\n  display: flex;\n}\n.order__detail_container .client__info .left[data-v-1f0fec56] {\n  width: 300px;\n}\n.order__detail_container .client__info .left .client_saki[data-v-1f0fec56] {\n  font-size: 12px;\n  color: var(--text-color);\n  width: 100%;\n  border-bottom: 1px solid var(--border-color);\n  position: relative;\n  padding-right: 35px;\n  margin-top: 6px;\n  line-height: 25px;\n}\n.order__detail_container .client__info .left .client_saki span[data-v-1f0fec56] {\n  font-size: 18px;\n  position: absolute;\n  right: 15px;\n}\n.order__detail_container .client__info .left .content[data-v-1f0fec56] {\n  font-size: 10px;\n  margin-left: 20px;\n  margin-bottom: 44px;\n  padding-top: 18px;\n}\n.order__detail_container .client__info .left .total_price[data-v-1f0fec56] {\n  display: flex;\n  border-bottom: 1px solid var(--border-color);\n  line-height: 25px;\n}\n.order__detail_container .client__info .left .total_price span[data-v-1f0fec56] {\n  font-size: 12px;\n}\n.order__detail_container .client__info .left .total_price span[data-v-1f0fec56]:first-of-type {\n  margin-right: auto;\n}\n.order__detail_container .client__info .right[data-v-1f0fec56] {\n  width: 270px;\n  margin-left: auto;\n}\n.order__detail_container .client__info .right .info__row[data-v-1f0fec56] {\n  display: flex;\n  align-items: center;\n}\n.order__detail_container .client__info .right .info__row label[data-v-1f0fec56] {\n  font-size: 10px;\n  width: 120px;\n}\n.order__detail_container .client__info .right .info__row input[data-v-1f0fec56] {\n  height: 30px;\n  width: 100px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.order__detail_container .client__info .right .info__row p[data-v-1f0fec56] {\n  flex: 1;\n  font-size: 10px;\n}\n.order__detail_container .client__info .right .com_name[data-v-1f0fec56] {\n  margin-top: 14px;\n  font-size: 18px;\n  color: var(--text-color);\n  margin-bottom: 8px;\n}\n.order__detail_container .client__info .right .address[data-v-1f0fec56] {\n  margin-bottom: 5px;\n  font-size: 10px;\n}\n.order__detail_container .client__info .right .contact_btn[data-v-1f0fec56] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #337DFD;\n}\n.order__detail_container .client__info .right .contact_btn img[data-v-1f0fec56] {\n  width: 15px;\n  margin-right: 20px;\n}\n.order__detail_container .detail__part .detail__table[data-v-1f0fec56] {\n  padding-left: 50px;\n  padding-top: 25px;\n}\n.order__detail_container .detail__part .detail__table .remark input[data-v-1f0fec56] {\n  height: 30px;\n  border: 1px solid var(--border-color);\n}\n.order__detail_container .detail__part .total__part[data-v-1f0fec56] {\n  display: flex;\n  padding-left: 50px;\n}\n.order__detail_container .detail__part .total__part .message__part[data-v-1f0fec56] {\n  width: 500px;\n  border: 1px solid var(--border-color);\n  padding: 15px;\n  background-color: #fff;\n}\n.order__detail_container .detail__part .total__part .message__part h4[data-v-1f0fec56] {\n  font-size: 14px;\n}\n.order__detail_container .detail__part .total__part .message__part textarea[data-v-1f0fec56] {\n  width: 100%;\n  display: block;\n  height: 78px;\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 4px;\n  resize: none;\n  margin-bottom: 16px;\n}\n.order__detail_container .detail__part .total__part .calculator[data-v-1f0fec56] {\n  margin-bottom: 15px;\n  flex: 1;\n}\n.order__detail_container .detail__part .total__part .calculator .calc_row[data-v-1f0fec56] {\n  display: flex;\n  align-items: center;\n}\n.order__detail_container .detail__part .total__part .calculator .calc_row label[data-v-1f0fec56] {\n  flex: 1;\n  height: 50px;\n  border: 1px solid var(--border-color);\n  line-height: 50px;\n  padding-left: 10px;\n}\n.order__detail_container .detail__part .total__part .calculator .calc_row p[data-v-1f0fec56] {\n  text-align: right;\n  flex: 1;\n  height: 50px;\n  border: 1px solid var(--border-color);\n  line-height: 50px;\n  padding-right: 10px;\n}\n.order__detail_container .detail__part .total__part .calculator .calc__action[data-v-1f0fec56] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n}\n.order__detail_container .detail__part .total__part .calculator .calc__action button[data-v-1f0fec56] {\n  width: 180px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order__detail_container .detail__part .total__part .calculator .calc__action button.on[data-v-1f0fec56] {\n  background-color: var(--accent-color);\n  color: #fff;\n  border: 0;\n}\n.order__detail_container .detail__part .total__part .calculator .calc__action button.back[data-v-1f0fec56] {\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n}\n.pdf_container[data-v-1f0fec56] {\n  padding: 25px;\n}\n.pdf_container .pdf_heading[data-v-1f0fec56] {\n  display: flex;\n}\n.pdf_container .pdf_heading .contact_to[data-v-1f0fec56] {\n  font-size: 16px;\n  margin-right: auto;\n}\n.pdf_container .pdf_heading .page_type[data-v-1f0fec56] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.pdf_container .pdf_heading .page_type p[data-v-1f0fec56]:first-of-type {\n  background-color: #333;\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n}\n.pdf_container .pdf_heading .page_type p[data-v-1f0fec56]:last-of-type {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 12px;\n}\n.pdf_container .order_detail_info[data-v-1f0fec56] {\n  display: flex;\n  border: 1px solid #333;\n  padding: 10px;\n  margin-top: 20px;\n}\n.pdf_container .order_detail_info .d-flex[data-v-1f0fec56] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.pdf_container .order_detail_info .left[data-v-1f0fec56] {\n  flex: 1;\n  border-right: 1px dashed #333;\n  margin-right: 10px;\n}\n.pdf_container .order_detail_info .left label[data-v-1f0fec56] {\n  width: 100px;\n  height: 30px;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pdf_container .order_detail_info .left p[data-v-1f0fec56] {\n  font-size: 15px;\n}\n.pdf_container .order_detail_info .right[data-v-1f0fec56] {\n  flex: 1;\n}\n.pdf_container .order_detail_info .right .client_info[data-v-1f0fec56] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.pdf_container .order_detail_info .right .client_info .dump[data-v-1f0fec56] {\n  position: absolute;\n  right: 10px;\n  bottom: 0;\n}\n.pdf_container .order_detail_info .right .client_info .dump img[data-v-1f0fec56] {\n  width: 60px;\n  height: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.pdf_container .order_detail_info .right .client_info.border[data-v-1f0fec56] {\n  border: 1px solid #000;\n  padding: 10px;\n}\n.pdf_container .order_detail_info .right .client_info label[data-v-1f0fec56] {\n  width: 100px;\n  height: 30px;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pdf_container .order_detail_info .right .client_info p[data-v-1f0fec56] {\n  font-size: 12px;\n}\n.total_price[data-v-1f0fec56] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-top: 30px;\n}\n.total_price table[data-v-1f0fec56] {\n  border-collapse: collapse;\n}\n.total_price table td[data-v-1f0fec56] {\n  border: 1px solid #000;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.img[data-v-1f0fec56] {\n  display: flex;\n  width: 100px;\n}\n.img img[data-v-1f0fec56] {\n  width: 100%;\n}",""])},53:function(t,e,n){var a=n(427);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(t.exports=a.locals)},54:function(t,e,n){var a=n(429);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(t.exports=a.locals)},83:function(t,e,n){var a=n(492);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(t.exports=a.locals)}}]);