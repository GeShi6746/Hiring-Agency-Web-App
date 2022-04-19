(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d4abcd4"],{1036:function(e,t,a){"use strict";a("7674")},7674:function(e,t,a){},"9c25":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tag",{attrs:{type:"warning"}},[e._v("CareTaker Withdrawing Service List")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"Patient First Name: "}},[a("span",[e._v(e._s(t.row.firstName))])]),a("el-form-item",{attrs:{label:"Patient Last Name: "}},[a("span",[e._v(e._s(t.row.lastName))])]),a("el-form-item",{attrs:{label:"Patient Gender: "}},[1==t.row.gender?a("span",[e._v("Female")]):e._e(),2==t.row.gender?a("span",[e._v("Male")]):e._e(),3==t.row.gender?a("span",[e._v("Other")]):e._e()]),a("el-form-item",{attrs:{label:"Patient Birthdate: "}},[a("span",[e._v(e._s(t.row.dateOfBirth))])]),a("el-form-item",{attrs:{label:"Service Address: "}},[a("span",[e._v(e._s(t.row.serviceAddress))])]),a("el-form-item",{attrs:{label:"Phone Number: "}},[a("span",[e._v(e._s(t.row.patientPhone))])]),a("el-form-item",{attrs:{label:"Email: "}},[a("span",[e._v(e._s(t.row.patientEmail))])]),a("el-form-item",{attrs:{label:"Specific Gender: "}},[1==t.row.genderSpecific?a("span",[e._v("Female")]):e._e(),2==t.row.genderSpecific?a("span",[e._v("Male")]):e._e(),3==t.row.genderSpecific?a("span",[e._v("Other")]):e._e(),null==t.row.genderSpecific?a("span"):e._e()]),a("el-form-item",{attrs:{label:"Lower Age Limit: "}},[a("span",[e._v(e._s(t.row.lowerAgeLimit))])]),a("el-form-item",{attrs:{label:"Upper Age Limit: "}},[a("span",[e._v(e._s(t.row.upperAgeLimit))])])],1)]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"firstName",label:"Patient First Name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"serviceType",label:"Service Type"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.serviceType?a("span",[e._v("Nurse")]):e._e(),2==t.row.serviceType?a("span",[e._v("Physiotherapist")]):e._e(),3==t.row.serviceType?a("span",[e._v("Psychiatrist")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"weekList",label:"Week Day"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"startTime",label:"Start Time"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"endTime",label:"End Time"}}),a("el-table-column",{attrs:{width:"120px","show-overflow-tooltip":!0,prop:"flexibleHoursPerDay",label:"Flexible Hours(per day)"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"totalDays",label:"Total Days"}}),a("el-table-column",{attrs:{width:"140px",fixed:"right",label:"Process"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{round:"",size:"mini",type:"danger"},on:{click:function(a){return e.handleTerminate(t.$index,t.row)}}},[e._v("Terminate")])]}}])})],1),a("el-divider"),a("el-tag",{attrs:{type:"danger"}},[e._v("Terminated Service")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.terminateData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"Patient First Name: "}},[a("span",[e._v(e._s(t.row.firstName))])]),a("el-form-item",{attrs:{label:"Patient Last Name: "}},[a("span",[e._v(e._s(t.row.lastName))])]),a("el-form-item",{attrs:{label:"Patient Gender: "}},[1==t.row.gender?a("span",[e._v("Female")]):e._e(),2==t.row.gender?a("span",[e._v("Male")]):e._e(),3==t.row.gender?a("span",[e._v("Other")]):e._e()]),a("el-form-item",{attrs:{label:"Patient Birthdate: "}},[a("span",[e._v(e._s(t.row.dateOfBirth))])]),a("el-form-item",{attrs:{label:"Service Address: "}},[a("span",[e._v(e._s(t.row.serviceAddress))])]),a("el-form-item",{attrs:{label:"Phone Number: "}},[a("span",[e._v(e._s(t.row.patientPhone))])]),a("el-form-item",{attrs:{label:"Email: "}},[a("span",[e._v(e._s(t.row.patientEmail))])]),a("el-form-item",{attrs:{label:"Specific Gender: "}},[1==t.row.genderSpecific?a("span",[e._v("Female")]):e._e(),2==t.row.genderSpecific?a("span",[e._v("Male")]):e._e(),3==t.row.genderSpecific?a("span",[e._v("Other")]):e._e(),null==t.row.genderSpecific?a("span"):e._e()]),a("el-form-item",{attrs:{label:"Lower Age Limit: "}},[a("span",[e._v(e._s(t.row.lowerAgeLimit))])]),a("el-form-item",{attrs:{label:"Upper Age Limit: "}},[a("span",[e._v(e._s(t.row.upperAgeLimit))])])],1)]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"firstName",label:"Patient First Name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"serviceType",label:"Service Type"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.serviceType?a("span",[e._v("Nurse")]):e._e(),2==t.row.serviceType?a("span",[e._v("Physiotherapist")]):e._e(),3==t.row.serviceType?a("span",[e._v("Psychiatrist")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"weekList",label:"Week Day"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"startTime",label:"Start Time"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"endTime",label:"End Time"}}),a("el-table-column",{attrs:{width:"120px","show-overflow-tooltip":!0,prop:"flexibleHoursPerDay",label:"Flexible Hours(per day)"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"totalDays",label:"Total Days"}})],1)],1)},s=[],l=(a("d3b7"),a("159b"),a("ac1f"),a("1276"),a("c24f")),o={data:function(){return{tableData:[],terminateData:[],careRequestId:"",careTakerId:"",formLabelWidth:"120px"}},mounted:function(){this.getDatatList(),this.getTerminateList()},methods:{getDatatList:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(l["Z"])().then((function(a){e.tableData=a,e.tableData.forEach((function(e){e.weekDayCopy=e.weekDay.split(","),e.weekList="",e.weekDayCopy.forEach((function(t,a){switch(t){case"0":e.weekList+="Sun. ";break;case"1":e.weekList+="Mon. ";break;case"2":e.weekList+="Tue. ";break;case"3":e.weekList+="Wed. ";break;case"4":e.weekList+="Thu. ";break;case"5":e.weekList+="Fri. ";break;case"6":e.weekList+="Sat. ";break}}))})),t.close()})).catch((function(e){console.log(e)}))},getTerminateList:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(l["W"])().then((function(a){e.terminateData=a,e.terminateData.forEach((function(e){e.weekDayCopy=e.weekDay.split(","),e.weekList="",e.weekDayCopy.forEach((function(t,a){switch(t){case"0":e.weekList+="Sun. ";break;case"1":e.weekList+="Mon. ";break;case"2":e.weekList+="Tue. ";break;case"3":e.weekList+="Wed. ";break;case"4":e.weekList+="Thu. ";break;case"5":e.weekList+="Fri. ";break;case"6":e.weekList+="Sat. ";break}}))})),t.close()})).catch((function(e){console.log(e)}))},handleTerminate:function(e,t){var a=this,r={careRequestId:t.careRequestId};Object(l["V"])(r).then((function(e){"200"==e.code?(a.$message({message:"Terminate the service success!",type:"success"}),a.getDatatList(),a.getTerminateList()):a.$message({message:"Terminate the service failure.",type:"error"})}))}}},i=o,n=(a("1036"),a("2877")),c=Object(n["a"])(i,r,s,!1,null,"3e7b8434",null);t["default"]=c.exports}}]);