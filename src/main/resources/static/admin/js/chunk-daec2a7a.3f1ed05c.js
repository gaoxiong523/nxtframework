(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-daec2a7a"],{"31fd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"operatingHints"},[a("el-row",{staticStyle:{"font-weight":"800"}},[e._v("\n      操作提示：\n    ")]),e._v(" "),a("el-row",[e._v("\n      1、如果没有显示分成日志，请检查分销开关是否打开、推荐人是否拉黑是否被关闭分销功能。\n    ")]),e._v(" "),a("el-row",[e._v("\n      2、可以根据订单编号查询这笔订单的佣金分给了哪几个会员，查询某个用户得到的所有分成记录\n    ")]),e._v(" "),a("el-row",[e._v("\n      3、推荐人级别，直接推荐人：一级，直接推荐人的上家：二级，直接推荐人的上上家：三级。\n    ")])],1),e._v(" "),a("el-card",{staticClass:"operatingHints"},[a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{offset:8}},[a("el-select",{attrs:{placeholder:"-是否已支付-",clearable:""},model:{value:e.searchBean.isPaid,callback:function(t){e.$set(e.searchBean,"isPaid",t)},expression:"searchBean.isPaid"}},e._l(e.isList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{attrs:{placeholder:"-是否已收货-",clearable:""},model:{value:e.searchBean.isReceive,callback:function(t){e.$set(e.searchBean,"isReceive",t)},expression:"searchBean.isReceive"}},e._l(e.isList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{attrs:{placeholder:"-是否已结算-",clearable:""},model:{value:e.searchBean.isTransfer,callback:function(t){e.$set(e.searchBean,"isTransfer",t)},expression:"searchBean.isTransfer"}},e._l(e.isList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"订单编号"},model:{value:e.searchBean.orderFormSerialNum,callback:function(t){e.$set(e.searchBean,"orderFormSerialNum",t)},expression:"searchBean.orderFormSerialNum"}}),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"获佣会员"},model:{value:e.searchBean.username,callback:function(t){e.$set(e.searchBean,"username",t)},expression:"searchBean.username"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.searchAction}},[e._v("筛选")])],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-table",{ref:"multipleTable",attrs:{data:e.listData,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"orderFormSerialNum",label:"订单编号",width:"220px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"商品名称",width:"220px;"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{"text-align":"left","text-overflow":"ellipsis",overflow:"hidden"}},[e._v(e._s(t.row.orderFormProductName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"数量(退货/成交)",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.quantityRefund)+"/"+e._s(t.row.quantityDeal))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"inviterUsername",label:"获佣会员",width:"120px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"获佣金额/百分比",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.commissionAmount)+"("+e._s(t.row.commissionRate)+"%)")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"priceDeal",label:"商品付款金额",width:"120px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"inviterLevel",label:"推荐人级别",width:"120px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"datelineReadable",label:"发生时间",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"statusText",label:"状态"}})],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{offset:18}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:function(t){return e.handlePage(-1)}}},[e._v("上一页")]),e._v(" "),a("el-button",[e._v(e._s(e.searchBean.listNumber)+" / "+e._s(e.pageCount))]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-right"},on:{click:function(t){return e.handlePage(1)}}},[e._v("下一页")])],1)],1)],1)],1)},l=[],n={data:function(){return{searchBean:{offset:0,limit:10,listNumber:1},isList:[{value:!0,label:"是"},{value:!1,label:"否"}],listData:[],pageCount:0}},computed:{},created:function(){},mounted:function(){this.searchDate()},methods:{searchAction:function(){this.$set(this.searchBean,"offset",0),this.$set(this.searchBean,"listNumber",1),this.searchDate()},searchDate:function(){var e=this;this.$myLoading.myLoading.loading(),null!=this.searchBean.isPaid&&""===this.searchBean.isPaid&&(this.searchBean.isPaid=null),null!=this.searchBean.isReceive&&""===this.searchBean.isReceive&&(this.searchBean.isReceive=null),null!=this.searchBean.isTransfer&&""===this.searchBean.isTransfer&&(this.searchBean.isTransfer=null),this.$store.dispatch("commission/getCommissionLogs",this.searchBean).then((function(){e.listData=e.$store.state.commission.listData,e.pageCount=Math.ceil(e.$store.state.commission.countData/e.searchBean.limit);var t=e;t.$myLoading.myLoading.closeLoading()}))},handlePage:function(e){if(this.searchBean.listNumber+e<1||this.searchBean.listNumber+e>this.pageCount)return!1;this.searchBean.listNumber=this.searchBean.listNumber+e,this.searchBean.offset=(this.searchBean.listNumber-1)*this.searchBean.limit,this.searchDate()}}},i=n,r=(a("3f1c"),a("2877")),o=Object(r["a"])(i,s,l,!1,null,null,null);t["default"]=o.exports},"3f1c":function(e,t,a){"use strict";a("c718")},c718:function(e,t,a){}}]);