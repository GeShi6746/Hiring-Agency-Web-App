(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6acf578e"],{"180e":function(e,t,a){"use strict";a("5a64")},"5a64":function(e,t,a){},b160:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticStyle:{height:"10px"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"firstName",label:"First Name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"lastName",label:"Last Name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"username",label:"User Name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"postalAddress",label:"Postal Address"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"phoneNumber",label:"Phone number"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"Email"}}),a("el-table-column",{attrs:{label:"Operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1)],1)},l=[],n=a("c24f"),s={data:function(){return{tableData:[]}},mounted:function(){this.getDatatList()},methods:{getDatatList:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a={};Object(n["h"])(a).then((function(a){e.tableData=a,t.close()})).catch((function(e){console.log(e)}))},handleDelete:function(e,t){var a=this,o={careTakerId:t.userId};Object(n["w"])(o).then((function(e){"200"==e.code?(a.$message({message:"Delete the staff success!",type:"success"}),a.getDatatList()):a.$message({message:"The care taker has pending service now.",type:"error"})}))}}},r=s,i=(a("180e"),a("2877")),c=Object(i["a"])(r,o,l,!1,null,"2e04e8ba",null);t["default"]=c.exports}}]);