(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c2da5d"],{"6d2c":function(e,t,o){"use strict";o("6f4b")},"6f4b":function(e,t,o){},"7dca":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticStyle:{height:"10px"}}),o("div",{staticStyle:{width:"300px"}},[o("el-input",{attrs:{placeholder:"Please input advertisement ID"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[o("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},on:{click:e.searchClick},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchClick(t)}},slot:"prefix"})])],1),o("div",{staticStyle:{height:"10px"}}),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[o("el-table-column",{attrs:{width:"100px",fixed:"","show-overflow-tooltip":!0,prop:"firstName",label:"First Name"}}),o("el-table-column",{attrs:{width:"100px","show-overflow-tooltip":!0,prop:"lastName",label:"Last Name"}}),o("el-table-column",{attrs:{width:"90px","show-overflow-tooltip":!0,prop:"gender",label:"Gender"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.gender?o("span",[e._v("Female")]):e._e(),2==t.row.gender?o("span",[e._v("Male")]):e._e(),3==t.row.gender?o("span",[e._v("Other")]):e._e()]}}])}),o("el-table-column",{attrs:{width:"120px","show-overflow-tooltip":!0,prop:"dateOfBirth",label:"Date of Birth"}}),o("el-table-column",{attrs:{width:"110px","show-overflow-tooltip":!0,prop:"ssn",label:"SSN"}}),o("el-table-column",{attrs:{width:"130px","show-overflow-tooltip":!0,prop:"serviceType",label:"Service Type"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.serviceType?o("span",[e._v("Nurse")]):e._e(),2==t.row.serviceType?o("span",[e._v("Physiotherapist")]):e._e(),3==t.row.serviceType?o("span",[e._v("Psychiatrist")]):e._e()]}}])}),o("el-table-column",{attrs:{width:"120px","show-overflow-tooltip":!0,prop:"degree",label:"Degree"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.degree?o("span",[e._v("Bachelor")]):e._e(),2==t.row.degree?o("span",[e._v("Master")]):e._e(),3==t.row.degree?o("span",[e._v("Doctor")]):e._e()]}}])}),o("el-table-column",{attrs:{width:"200px","show-overflow-tooltip":!0,prop:"educationQualifications",label:"Education Qualifications"}}),o("el-table-column",{attrs:{width:"170px","show-overflow-tooltip":!0,prop:"yearsExperience",label:"Years of Experience"}}),o("el-table-column",{attrs:{width:"180px","show-overflow-tooltip":!0,prop:"postalAddress",label:"Postal Address"}}),o("el-table-column",{attrs:{width:"140px","show-overflow-tooltip":!0,prop:"phoneNumber",label:"Phone Number"}}),o("el-table-column",{attrs:{width:"160px","show-overflow-tooltip":!0,prop:"email",label:"Email"}}),o("el-table-column",{attrs:{width:"140px",fixed:"right",label:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(o){return e.handleHire(t.$index,t.row)}}},[e._v("Hire")])]}}])})],1),o("el-dialog",{attrs:{title:"Add hourly rate",visible:e.dialogAddVisible,width:"30%"},on:{"update:visible":function(t){e.dialogAddVisible=t}}},[o("el-form",{ref:"addForm",attrs:{rules:e.addRules,model:e.addForm}},[o("el-form-item",{attrs:{label:"Hourly Rate ",prop:"hourlyRate","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.hourlyRate,callback:function(t){e.$set(e.addForm,"hourlyRate",t)},expression:"addForm.hourlyRate"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogAddVisible=!1}}},[e._v("Cancel")]),o("el-button",{attrs:{type:"primary"},on:{click:e.addConfirm}},[e._v("Confirm")])],1)],1)],1)},a=[],i=(o("ac1f"),o("5319"),o("c24f")),r={data:function(){var e=function(e,t,o){t.replace(/^\d+(\.\d+)?$/,"")?o(new Error("The hourly rate must be a number of type double.")):o()};return{tableData:[],addForm:{hourlyRate:""},input:"",dialogAddVisible:!1,formLabelWidth:"120px",healthcareJobApplicationId:"",addRules:{hourlyRate:[{required:!0,trigger:"blur",validator:e}]}}},mounted:function(){this.getDatatList()},methods:{getDatatList:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),o={};Object(i["J"])(o).then((function(o){e.tableData=o,t.close()})).catch((function(e){console.log(e)}))},handleHire:function(e,t){this.dialogAddVisible=!0,this.healthcareJobApplicationId=t.healthcareJobApplicationId},addConfirm:function(){var e=this,t={healthcareJobApplicationId:this.healthcareJobApplicationId,hourlyRate:this.addForm.hourlyRate};Object(i["G"])(t).then((function(t){e.$message({message:"Hire the HP success!",type:"success"}),e.dialogAddVisible=!1,e.addForm={hourlyRate:""},e.getDatatList()}))},searchClick:function(){var e=this;if(""==this.input)this.getDatatList();else{var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),o={jobAdvertisementId:this.input};Object(i["R"])(o).then((function(o){e.tableData=o,t.close()})).catch((function(e){console.log(e)}))}}}},n=r,s=(o("6d2c"),o("2877")),d=Object(s["a"])(n,l,a,!1,null,"692ed8cc",null);t["default"]=d.exports}}]);