(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba2d71c"],{b97d:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("div",{staticClass:"main"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addClick}},[e._v("Add Staff Member")]),a("div",{staticStyle:{height:"10px"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"firstName",label:"firstName"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"lastName",label:"lastName"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"username",label:"userName"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"postalAddress",label:"postalAddress"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"phoneNumber",label:"phoneNumber"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"email"}})],1)],1),a("el-dialog",{attrs:{title:"Add Staff Member",visible:e.dialogAddVisible,width:"50%"},on:{"update:visible":function(t){e.dialogAddVisible=t}}},[a("el-form",{ref:"loginForm",attrs:{rules:e.loginRules,model:e.addForm}},[a("el-form-item",{attrs:{label:"firstName",prop:"FirstName","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.FirstName,callback:function(t){e.$set(e.addForm,"FirstName",t)},expression:"addForm.FirstName"}})],1),a("el-form-item",{attrs:{label:"lastName",prop:"LastName","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.LastName,callback:function(t){e.$set(e.addForm,"LastName",t)},expression:"addForm.LastName"}})],1),a("el-form-item",{attrs:{label:"postalAddress",prop:"PostalAddress","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.PostalAddress,callback:function(t){e.$set(e.addForm,"PostalAddress",t)},expression:"addForm.PostalAddress"}})],1),a("el-form-item",{attrs:{label:"phoneNumber",prop:"PhoneNumber","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.PhoneNumber,callback:function(t){e.$set(e.addForm,"PhoneNumber",t)},expression:"addForm.PhoneNumber"}})],1),a("el-form-item",{attrs:{label:"email",prop:"Email","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.Email,callback:function(t){e.$set(e.addForm,"Email",t)},expression:"addForm.Email"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addCancel}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addSure}},[e._v("Confirm")])],1)],1),a("el-dialog",{attrs:{title:"Update Event",visible:e.dialogUpdateVisible,width:"50%"},on:{"update:visible":function(t){e.dialogUpdateVisible=t}}},[a("el-form",{attrs:{model:e.updateForm}},[a("el-form-item",{attrs:{label:"firstName","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.updateForm.FirstName,callback:function(t){e.$set(e.updateForm,"FirstName",t)},expression:"updateForm.FirstName"}})],1),a("el-form-item",{attrs:{label:"lastName","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.updateForm.LastName,callback:function(t){e.$set(e.updateForm,"LastName",t)},expression:"updateForm.LastName"}})],1),a("el-form-item",{attrs:{label:"postalAddress","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.updateForm.PostalAddress,callback:function(t){e.$set(e.updateForm,"PostalAddress",t)},expression:"updateForm.PostalAddress"}})],1),a("el-form-item",{attrs:{label:"phoneNumber","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.updateForm.PhoneNumber,callback:function(t){e.$set(e.updateForm,"PhoneNumber",t)},expression:"updateForm.PhoneNumber"}})],1),a("el-form-item",{attrs:{label:"email","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.updateForm.Email,callback:function(t){e.$set(e.updateForm,"Email",t)},expression:"updateForm.Email"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.updateCancel}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.updateSure}},[e._v("Confirm")])],1)],1)],1)},l=[],r=(a("e9c4"),a("c24f")),i={components:{},data:function(){return{userName:"",dialogAddVisible:!1,dialogUpdateVisible:!1,formLabelWidth:"120px",addForm:{FirstName:"",LastName:"",PostalAddress:"",PhoneNumber:"",Email:""},loginRules:{FirstName:[{required:!0,trigger:"blur"}],LastName:[{required:!0,trigger:"blur"}],PostalAddress:[{required:!0,trigger:"blur"}],PhoneNumber:[{required:!0,trigger:"blur"}],Email:[{required:!0,trigger:"blur"}]},updateForm:{FirstName:"",LastName:"",PostalAddress:"",PhoneNumber:"",Email:""},tableData:[],updateIndex:0}},created:function(){this.getDatatList()},mounted:function(){},methods:{getDatatList:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a={};Object(r["f"])(a).then((function(a){e.tableData=a,t.close()})).catch((function(e){console.log(e)}))},addClick:function(){this.dialogAddVisible=!0},addCancel:function(){this.dialogAddVisible=!1},addSure:function(){var e=this,t=this;this.$refs.loginForm.validate((function(a){if(a){var o=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),l=e.addForm;Object(r["a"])(l).then((function(e){o.close(),t.dialogAddVisible=!1,t.getDatatList(),t.$message({message:"Add the event success!",type:"success"}),o.close()})).catch((function(a){console.log(a),o.close(),t.dialogAddVisible=!1,e.$message.error("Add in failed.")}))}}))},updateClick:function(e){this.updateIndex=e.$index,e.row.flag=!0,this.updateForm=JSON.parse(JSON.stringify(e.row)),this.dialogUpdateVisible=!0},updateCancel:function(){this.dialogUpdateVisible=!1},updateSure:function(){var e=this,t=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){t.close(),e.$store.state.tableList[e.updateIndex]=e.updateForm,e.tableData=JSON.parse(JSON.stringify(e.$store.state.tableList)),e.dialogUpdateVisible=!1,e.$message({message:"Update the event success!",type:"success"})}),1e3)}}},s=i,d=(a("d44e6"),a("2877")),n=Object(d["a"])(s,o,l,!1,null,"069f8681",null);t["default"]=n.exports},c32b:function(e,t,a){},d44e6:function(e,t,a){"use strict";a("c32b")},e9c4:function(e,t,a){var o=a("23e7"),l=a("d066"),r=a("d039"),i=l("JSON","stringify"),s=/[\uD800-\uDFFF]/g,d=/^[\uD800-\uDBFF]$/,n=/^[\uDC00-\uDFFF]$/,m=function(e,t,a){var o=a.charAt(t-1),l=a.charAt(t+1);return d.test(e)&&!n.test(l)||n.test(e)&&!d.test(o)?"\\u"+e.charCodeAt(0).toString(16):e},u=r((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&o({target:"JSON",stat:!0,forced:u},{stringify:function(e,t,a){var o=i.apply(null,arguments);return"string"==typeof o?o.replace(s,m):o}})}}]);