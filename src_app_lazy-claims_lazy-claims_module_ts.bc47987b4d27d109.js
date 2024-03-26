"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_lazy-claims_lazy-claims_module_ts"],{

/***/ 2797:
/*!*******************************************************!*\
  !*** ./src/app/components/claims/claims.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsComponent": () => (/* binding */ ClaimsComponent)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-enterprise */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _Services_followup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/followup.service */ 4679);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../excel.service */ 6249);
/* harmony import */ var _Services_export_functions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/export-functions.service */ 301);
/* harmony import */ var _Services_notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/notify.service */ 5710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/notes-handler.service */ 8997);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../claim-op-footer/claim-op-footer.component */ 6195);
/* harmony import */ var _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../followup-template/followup-template.component */ 5286);
/* harmony import */ var _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../followup-view/followup-view.component */ 6868);
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-epic-spinners */ 2662);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-select-dropdown */ 3277);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);







// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';


























const _c0 = ["template"];
const _c1 = ["new_workorder"];
const _c2 = ["work_order_details"];
const _c3 = ["closedclaimpage"];
const _c4 = ["associates"];
const _c5 = ["associates_error"];
const _c6 = ["page1"];
const _c7 = ["page2"];
const _c8 = ["newclaimmod"];
const _c9 = ["duplicatemodel"];
const _c10 = ["mismatchmodel"];
const _c11 = ["claimpage"];
const _c12 = ["myGrid_1"];
const _c13 = ["myGrid_2"];
const _c14 = ["myGrid_3"];
const _c15 = ["myGrid_4"];
const _c16 = ["myGrid_5"];
const _c17 = ["myGrid_6"];
const _c18 = ["myGrid_7"];
const _c19 = ["myGrid_8"];
const _c20 = ["pageRow"];
const _c21 = ["checkboxes"];
function ClaimsComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 156)(1, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_li_6_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r95.pageChange(1, "claim", "null", "null", "null", "null", "null", "null"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Create Work Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r0.class_change.tab2);
  }
}
function ClaimsComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r97.get_workorder(null, null, null, 1, ctx_r97.wo_page_number, null, null, "null", "null", null, null, null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Work Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClaimsComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 162)(1, "a", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r99.get_userlist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Re-assigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClaimsComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_li_9_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r101.get_workorder("closedClaims", null, null, 1, ctx_r101.wo_page_number, null, null, "null", "null", null, null, null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r101.status_code_select());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClaimsComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 167)(1, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_li_10_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r103.pageChange(1, "all_claim", null, null, null, null, null, null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r103.status_code_select());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " All Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r4.class_change.tab6);
  }
}
function ClaimsComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_li_11_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r105.reload_datas(1, "import");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r105.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Import");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 170);
  }
}
function ClaimsComponent_i_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 171);
  }
}
const _c22 = function (a0, a1) {
  return {
    from_age: a0,
    to_age: a1
  };
};
function ClaimsComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c22, agerange_r107.from_age, agerange_r107.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", agerange_r107.from_age + "-" + agerange_r107.to_age, "");
  }
}
function ClaimsComponent_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_64_div_1_Template, 2, 0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.createClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function ClaimsComponent_div_73_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_div_73_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r112);
      const res_r110 = restoredCtx.$implicit;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r111.onselectvalue(res_r110));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](res_r110);
  }
}
function ClaimsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_73_div_1_Template, 3, 1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r10.results);
  }
}
function ClaimsComponent_i_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 170);
  }
}
function ClaimsComponent_i_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 171);
  }
}
function ClaimsComponent_option_254_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", user_r113.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", user_r113.user_name, " ");
  }
}
function ClaimsComponent_div_258_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", user_r115.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", user_r115.user_name, " ");
  }
}
function ClaimsComponent_div_258_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 95)(1, "label", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Claims in Rework Bucket:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "select", 178)(4, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "--Select User--");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_div_258_option_6_Template, 2, 2, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Claims in Rework Bucket cannot be moved to fresh work order, please assign another user for the reassigned claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r17.getUserList);
  }
}
function ClaimsComponent_div_260_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", user_r117.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", user_r117.user_name, " ");
  }
}
function ClaimsComponent_div_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 95)(1, "label", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Claim Found in Audit Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "select", 179)(4, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "--Select User--");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_div_260_option_6_Template, 2, 2, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Claims in Audit Status cannot be moved to fresh work order, please assign another user for the claims incase QA adds an error code");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r18.getUserList);
  }
}
function ClaimsComponent_i_288_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 170);
  }
}
function ClaimsComponent_i_289_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 171);
  }
}
function ClaimsComponent_option_304_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c22, agerange_r118.from_age, agerange_r118.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", agerange_r118.from_age + "-" + agerange_r118.to_age, "");
  }
}
function ClaimsComponent_div_327_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_div_327_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_327_div_1_Template, 2, 0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r22.closedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function ClaimsComponent_div_341_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_div_341_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r123);
      const res_r121 = restoredCtx.$implicit;
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r122.closedSelectvalue(res_r121));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](res_r121);
  }
}
function ClaimsComponent_div_341_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_341_div_1_Template, 3, 1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r23.closed_results);
  }
}
function ClaimsComponent_i_397_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 170);
  }
}
function ClaimsComponent_i_398_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 171);
  }
}
function ClaimsComponent_option_413_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c22, agerange_r124.from_age, agerange_r124.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", agerange_r124.from_age + "-" + agerange_r124.to_age, "");
  }
}
function ClaimsComponent_option_420_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cstatus_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", cstatus_r125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", cstatus_r125, " ");
  }
}
function ClaimsComponent_div_443_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_div_443_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_443_div_1_Template, 2, 0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r29.allClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function ClaimsComponent_div_453_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_div_453_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r130);
      const res_r128 = restoredCtx.$implicit;
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r129.allclaimSelectvalue(res_r128));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](res_r128);
  }
}
function ClaimsComponent_div_453_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_453_div_1_Template, 3, 1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r30.allclaim_results);
  }
}
function ClaimsComponent_i_522_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 170);
  }
}
function ClaimsComponent_i_523_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 171);
  }
}
function ClaimsComponent_option_538_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c22, agerange_r131.from_age, agerange_r131.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", agerange_r131.from_age + "-" + agerange_r131.to_age, "");
  }
}
function ClaimsComponent_option_545_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cstatus_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", cstatus_r132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", cstatus_r132, " ");
  }
}
function ClaimsComponent_div_568_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_div_568_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_568_div_1_Template, 2, 0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r36.allClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function ClaimsComponent_div_578_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_div_578_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r137);
      const res_r135 = restoredCtx.$implicit;
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r136.allclaimSelectvalue(res_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](res_r135);
  }
}
function ClaimsComponent_div_578_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_578_div_1_Template, 3, 1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r37.allclaim_results);
  }
}
function ClaimsComponent_i_647_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 170);
  }
}
function ClaimsComponent_i_648_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 171);
  }
}
function ClaimsComponent_option_663_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c22, agerange_r138.from_age, agerange_r138.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", agerange_r138.from_age + "-" + agerange_r138.to_age, "");
  }
}
function ClaimsComponent_option_670_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cstatus_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", cstatus_r139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", cstatus_r139, " ");
  }
}
function ClaimsComponent_div_693_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_div_693_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_693_div_1_Template, 2, 0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r43.allClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function ClaimsComponent_div_703_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_div_703_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r144);
      const res_r142 = restoredCtx.$implicit;
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r143.allclaimSelectvalue(res_r142));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](res_r142);
  }
}
function ClaimsComponent_div_703_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_div_703_div_1_Template, 3, 1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r44.allclaim_results);
  }
}
function ClaimsComponent_ng_template_796_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Report Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_796_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_796_div_31_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r147.f["report_date"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_796_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "File Import is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_796_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_796_div_43_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r148.f["file"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_796_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Note is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_796_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_796_div_55_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r149.f["notes"].errors["required"]);
  }
}
const _c23 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function ClaimsComponent_ng_template_796_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_796_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r154);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r153.modalRef == null ? null : ctx_r153.modalRef.hide();
      ctx_r153.clear();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r153.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " File Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 185)(9, "form", 24, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_ng_template_796_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r154);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r155.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 1)(12, "div", 187)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "User - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 190)(21, "div", 191)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Report Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 193)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ClaimsComponent_ng_template_796_div_31_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 190)(33, "div", 191)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "File Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 193)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 194)(42, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_ng_template_796_Template_input_change_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r154);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r156.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, ClaimsComponent_ng_template_796_div_43_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 190)(45, "div", 191)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 193)(51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](54, "textarea", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, ClaimsComponent_ng_template_796_div_55_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 199)(57, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_796_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r154);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](799);
      ctx_r157.modalRef == null ? null : ctx_r157.modalRef.hide();
      ctx_r157.openModal(_r49);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r157.processdata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_796_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r154);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r158.modalRef == null ? null : ctx_r158.modalRef.hide();
      ctx_r158.clear();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r158.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r48.filenote);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r48.filenote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r48.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r48.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](19, 12, ctx_r48.myDate, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx_r48.bsConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r48.f["report_date"].touched && ctx_r48.f["report_date"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](15, _c23, ctx_r48.f["file"].touched && ctx_r48.f["file"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r48.f["file"].touched && ctx_r48.f["file"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](17, _c23, ctx_r48.f["notes"].touched && ctx_r48.f["notes"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r48.f["notes"].touched && ctx_r48.f["notes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r146.valid);
  }
}
function ClaimsComponent_ng_template_798_div_6_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 162)(1, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_798_div_6_td_33_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](803);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r165.openModal2(_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_798_div_6_td_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 162)(1, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_798_div_6_td_39_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r168);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](805);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r167.openModal3(_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_798_div_6_td_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 162)(1, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_798_div_6_td_45_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r170);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](807);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r169.openModal4(_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_798_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 185)(1, "form")(2, "div", 205)(3, "table", 206)(4, "thead")(5, "tr")(6, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Total Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Report Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Import Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "tbody")(15, "tr")(16, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "table", 209)(27, "tbody")(28, "tr")(29, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "New Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, ClaimsComponent_ng_template_798_div_6_td_33_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "tr")(35, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Duplicate Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, ClaimsComponent_ng_template_798_div_6_td_39_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "tr")(41, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Mismatch Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, ClaimsComponent_ng_template_798_div_6_td_45_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r160.newclaim + ctx_r160.duplicate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r160.file_upload.uploaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](22, 10, ctx_r160.file_upload.report_date, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](25, 13, ctx_r160.myDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" : ", ctx_r160.newclaim, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r160.newclaim > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" : ", ctx_r160.duplicate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r160.duplicate > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" : ", ctx_r160.mismatch, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r160.mismatch > 0);
  }
}
function ClaimsComponent_ng_template_798_div_7_app_atom_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_798_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Something went wrong! Contact Site Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_798_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_798_div_7_app_atom_spinner_1_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_798_div_7_div_2_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r161.file_upload == undefined && ctx_r161.error_occur == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r161.error_occur);
  }
}
function ClaimsComponent_ng_template_798_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_798_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r174);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r173.modalRef == null ? null : ctx_r173.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Import Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_798_div_6_Template, 46, 16, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClaimsComponent_ng_template_798_div_7_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 199)(9, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_798_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r174);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r175.modalRef == null ? null : ctx_r175.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r50.file_upload != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r50.file_upload == undefined);
  }
}
function ClaimsComponent_ng_template_800_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Report Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_800_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_800_div_31_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r178.rf["report_date"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_800_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "File Import is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_800_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_800_div_43_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r179.rf["file"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_800_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Note is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_800_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_800_div_55_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r180.rf["notes"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_800_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_800_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r185);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r184.modalRef == null ? null : ctx_r184.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r184.clear_reimport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " File Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 185)(9, "form", 24, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_ng_template_800_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r185);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r186.process_reimport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 1)(12, "div", 187)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "User - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 190)(21, "div", 191)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Report Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 193)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ClaimsComponent_ng_template_800_div_31_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 190)(33, "div", 191)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "File Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 193)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 194)(42, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_ng_template_800_Template_input_change_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r185);
      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r187.onReimport_FileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, ClaimsComponent_ng_template_800_div_43_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 190)(45, "div", 191)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 193)(51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](54, "textarea", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, ClaimsComponent_ng_template_800_div_55_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 199)(57, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_800_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r185);
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r188.process_reimport();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r188.modalRef == null ? null : ctx_r188.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_800_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r185);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r189.modalRef == null ? null : ctx_r189.modalRef.hide();
      ctx_r189.clear_reimport();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r189.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r52.filenote);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r52.filenote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r52.reimport_formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r52.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](19, 13, ctx_r52.myDate, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("minDate", ctx_r52.minDate)("bsConfig", ctx_r52.bsConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r52.rf["report_date"].touched && ctx_r52.rf["report_date"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](16, _c23, ctx_r52.rf["file"].touched && ctx_r52.rf["file"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r52.rf["file"].touched && ctx_r52.rf["file"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](18, _c23, ctx_r52.rf["notes"].touched && ctx_r52.rf["notes"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r52.rf["notes"].touched && ctx_r52.rf["notes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r177.valid);
  }
}
function ClaimsComponent_ng_template_802_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r195 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](r_r195.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](r_r195.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](r_r195.insurance_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](9, 5, r_r195.total_ar, "1.2-2" || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](r_r195.claim_Status);
  }
}
function ClaimsComponent_ng_template_802_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_802_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_802_div_26_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r197);
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r196.modalRef2 == null ? null : ctx_r196.modalRef2.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r196.saveclaims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Save Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_802_div_26_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r197);
      const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r198.modalRef2 == null ? null : ctx_r198.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_802_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_802_div_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r200);
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r199.modalRef2 == null ? null : ctx_r199.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_802_Template(rf, ctx) {
  if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "h4", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "New Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_802_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r202);
      const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r201.modalRef2 == null ? null : ctx_r201.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "form")(8, "div", 205)(9, "table", 215)(10, "thead")(11, "tr")(12, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Claim No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Patient Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Insurance Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Total AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Claim Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, ClaimsComponent_ng_template_802_tr_23_Template, 12, 8, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ClaimsComponent_ng_template_802_div_24_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, ClaimsComponent_ng_template_802_div_26_Template, 5, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, ClaimsComponent_ng_template_802_div_27_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r54.new_claims.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r54.new_claims);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r54.new_claims.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r54.new_claims.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r54.new_claims.length == 0);
  }
}
function ClaimsComponent_ng_template_804_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](r_r207);
  }
}
function ClaimsComponent_ng_template_804_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_804_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 199)(1, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_804_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r209);
      const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r208.modalRef3 == null ? null : ctx_r208.modalRef3.hide();
      ctx_r208.ignore_function();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r208.ignore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_804_div_17_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r209);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r210.modalRef3 == null ? null : ctx_r210.modalRef3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_804_Template(rf, ctx) {
  if (rf & 1) {
    const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_804_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r212);
      const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r211.modalRef3 == null ? null : ctx_r211.modalRef3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Duplicate Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "form")(8, "div", 205)(9, "table", 215)(10, "thead")(11, "tr")(12, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Claim No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_804_tr_15_Template, 3, 1, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ClaimsComponent_ng_template_804_div_16_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, ClaimsComponent_ng_template_804_div_17_Template, 5, 0, "div", 219);
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r56.duplicate_claims.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r56.duplicate_claims);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r56.duplicate_claims.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r56.duplicate_claims.length != 0);
  }
}
function ClaimsComponent_ng_template_806_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r217 = ctx.$implicit;
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", m_r217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r214.field_name[m_r217], "");
  }
}
function ClaimsComponent_ng_template_806_tr_35_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r221 = ctx.$implicit;
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", m_r221);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selected", m_r221 === ctx_r219.mismatch_selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r219.field_name[m_r221], "");
  }
}
function ClaimsComponent_ng_template_806_tr_35_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_806_tr_35_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r224);
      const r_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r222.action(r_r218, ctx_r222.fieldselect, "Ignore_all_fields"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Ignore All");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_806_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td", 208)(4, "select", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_ng_template_806_tr_35_Template_select_change_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r226);
      const r_r218 = restoredCtx.$implicit;
      const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r225.displayvalues(r_r218, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "option", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClaimsComponent_ng_template_806_tr_35_option_7_Template, 2, 3, "option", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "td", 208)(13, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_806_tr_35_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r226);
      const r_r218 = restoredCtx.$implicit;
      const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r227.action(r_r218, ctx_r227.fieldselect, "Overwrite"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Overwrite");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_806_tr_35_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r226);
      const r_r218 = restoredCtx.$implicit;
      const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r228.action(r_r218, ctx_r228.fieldselect, "Ignore"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ClaimsComponent_ng_template_806_tr_35_button_19_Template, 2, 0, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r218 = ctx.$implicit;
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", r_r218, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r215.mismatch_claim_data[r_r218]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r215.old_value[r_r218], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r215.new_value[r_r218], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r215.mismatch_selected == "All" || !ctx_r215.mismatch_selected);
  }
}
function ClaimsComponent_ng_template_806_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_806_Template(rf, ctx) {
  if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_806_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r230);
      const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r229.modalRef4 == null ? null : ctx_r229.modalRef4.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Mismatch Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "form")(8, "div", 205)(9, "table", 222)(10, "td", 208)(11, "select", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_ng_template_806_Template_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r230);
      const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r231.display_selected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "option", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_806_option_14_Template, 2, 2, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "td", 225)(16, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_806_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r230);
      const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r232.overwrite_all(ctx_r232.mismatch_claim_number_sort));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Overwrite All");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_806_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r230);
      const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r233.ignore_all(ctx_r233.mismatch_claim_number_sort));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Ignore All");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "table", 227)(22, "thead")(23, "tr")(24, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Claim No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "th", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "Old Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "th", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "New Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "th", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, ClaimsComponent_ng_template_806_tr_35_Template, 20, 5, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, ClaimsComponent_ng_template_806_div_36_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](37);
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r58.mismatch_field_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r58.mismatch_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r58.mismatch_claim_number_sort);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r58.mismatch_claim_nos == 0);
  }
}
function ClaimsComponent_ng_template_808_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 235)(1, "a", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r248);
      const x_r246 = restoredCtx.$implicit;
      const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r247.selected_tab(x_r246.claim_no);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r247.get_line_items(x_r246));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r248);
      const x_r246 = restoredCtx.$implicit;
      const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r249.close_tab(x_r246));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r246 = ctx.$implicit;
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", x_r246.claim_no === ctx_r235.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#", x_r246.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Claim No: ", x_r246.claim_no, "");
  }
}
function ClaimsComponent_ng_template_808_tr_144_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_tr_144_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r255);
      const x_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r253.referclaim(x_r250));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, x_r250.dos, "MM/dd/yyyy"), " - ", x_r250.claim_no, "");
  }
}
function ClaimsComponent_ng_template_808_tr_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_808_tr_144_td_1_Template, 3, 5, "td", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r251 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r251 < 3);
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r259.claim_clicked.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r261.claim_clicked.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](x_r257.cpt);
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r265.claim_clicked.total_charges, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_tr_182_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r257.total_ar_due, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_808_tr_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_808_tr_182_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_808_tr_182_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_808_tr_182_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_808_tr_182_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_808_tr_182_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_808_tr_182_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_808_tr_182_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_808_tr_182_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_808_tr_182_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_808_tr_182_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "09/17/18 [Stat]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 162)(19, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r257 = ctx.$implicit;
    const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r237.claim_clicked.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r237.claim_clicked.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r237.claim_clicked.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r237.claim_clicked.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r257.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r257.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r237.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r237.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r257.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r257.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r237.claim_clicked.touch);
  }
}
function ClaimsComponent_ng_template_808_div_208_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r270 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", y_r270.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, y_r270.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", y_r270.content, ". ");
  }
}
function ClaimsComponent_ng_template_808_div_209_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_808_app_atom_spinner_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_808_a_220_Template(rf, ctx) {
  if (rf & 1) {
    const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_a_220_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r272);
      const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](827);
      ctx_r271.open(_r77);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r271.get_audit_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r241.qc_notes_data_list.includes(ctx_r241.claim_clicked.claim_no));
  }
}
function ClaimsComponent_ng_template_808_div_225_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r275 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r275.name, ". ");
  }
}
function ClaimsComponent_ng_template_808_div_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Error Types: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Root Causes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ClaimsComponent_ng_template_808_div_225_span_16_Template, 2, 1, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r273 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r273.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 5, x_r273.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r273.content, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r273.root.name, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", x_r273.error_type);
  }
}
function ClaimsComponent_ng_template_808_div_226_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_808_app_atom_spinner_227_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_808_div_306_td_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r276.prim_pol_id, " ");
  }
}
function ClaimsComponent_ng_template_808_div_306_td_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r276.sec_pol_id, " ");
  }
}
function ClaimsComponent_ng_template_808_div_306_td_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r276.ter_pol_id, " ");
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r293.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r293.dos, "MM/dd/yyyy"), " ");
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](x_r293.cpt);
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r293.ins_ar, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r293.total_ar_due, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_808_div_306_tr_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_808_div_306_tr_137_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_808_div_306_tr_137_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_808_div_306_tr_137_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_808_div_306_tr_137_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_808_div_306_tr_137_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_808_div_306_tr_137_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_808_div_306_tr_137_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_808_div_306_tr_137_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_808_div_306_tr_137_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_808_div_306_tr_137_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "09/17/18 [Stat]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 162)(19, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r293 = ctx.$implicit;
    const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.ins_ar == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.ins_ar != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r293.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r280.claim_clicked.touch);
  }
}
function ClaimsComponent_ng_template_808_div_306_div_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r311 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "i", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_div_306_div_155_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r311);
      const x_r309 = restoredCtx.$implicit;
      const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](811);
      ctx_r310.open(_r61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r310.editnotes("processnote", x_r309.content, x_r309.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r309 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r309.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r309.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r309.content, ". ");
  }
}
function ClaimsComponent_ng_template_808_div_306_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_808_div_306_div_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r312 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r312.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r312.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r312.content, ". ");
  }
}
function ClaimsComponent_ng_template_808_div_306_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_808_div_306_div_194_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r313 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", y_r313.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, y_r313.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", y_r313.content, ". ");
  }
}
function ClaimsComponent_ng_template_808_div_306_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_808_div_306_div_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r314 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r314.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r314.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r314.content, ". ");
  }
}
function ClaimsComponent_ng_template_808_div_306_div_213_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_808_div_306_app_atom_spinner_214_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_808_div_306_Template(rf, ctx) {
  if (rf & 1) {
    const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 334)(1, "div", 241)(2, "div", 74)(3, "div", 242)(4, "div", 3)(5, "div", 243)(6, "div", 16)(7, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 19)(11, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 245)(14, "div", 13)(15, "div", 1)(16, "div", 246)(17, "div", 247)(18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "button", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 249)(25, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "svg", 251)(27, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "defs", 252)(30, "path", 253)(31, "path", 254)(32, "path", 255)(33, "path", 256)(34, "path", 257)(35, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "text", 259)(37, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "text", 261)(40, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 25)(43, "div", 1)(44, "div", 264)(45, "table", 265)(46, "tbody")(47, "tr")(48, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "tr")(53, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "tr")(58, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "tr")(64, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 267)(69, "table", 265)(70, "tbody")(71, "tr")(72, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "tr")(90, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, ClaimsComponent_ng_template_808_div_306_td_92_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](93, ClaimsComponent_ng_template_808_div_306_td_93_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, ClaimsComponent_ng_template_808_div_306_td_94_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "tr")(96, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "div", 272)(102, "div", 273)(103, "div", 3)(104, "div", 243)(105, "div", 16)(106, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](107, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "div", 19)(110, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](111, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "div", 25)(113, "div", 276)(114, "table", 277)(115, "thead")(116, "tr")(117, "th", 162)(118, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "th", 162)(121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "th", 162)(124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "th", 162)(127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](128, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "th", 162)(130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "th", 162)(133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](135, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](137, ClaimsComponent_ng_template_808_div_306_tr_137_Template, 21, 11, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "div", 272)(139, "div", 273)(140, "div", 3)(141, "div", 243)(142, "div", 16)(143, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](144, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](145, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "div", 19)(147, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_div_306_Template_a_click_147_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r316);
      const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](811);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r315.open(_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](148, "i", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](152, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "div", 339)(154, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](155, ClaimsComponent_ng_template_808_div_306_div_155_Template, 11, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](156, ClaimsComponent_ng_template_808_div_306_div_156_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](157, "div", 272)(158, "div", 273)(159, "div", 3)(160, "div", 243)(161, "div", 290)(162, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](163, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](164, " QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](165, "div", 19)(166, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](167, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](168, "div", 339)(169, "div", 1)(170, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](171, ClaimsComponent_ng_template_808_div_306_div_171_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](172, ClaimsComponent_ng_template_808_div_306_div_172_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "div", 272)(174, "div", 273)(175, "div", 3)(176, "div", 243)(177, "div", 16)(178, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](179, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](180, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "div", 19)(182, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_div_306_Template_a_click_182_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r316);
      const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r317.send_calim_det("claims"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](183, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](186, "a", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_div_306_Template_a_click_186_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r316);
      const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r318.send_calim_det("claims"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](187, "i", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](189, "F.Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](191, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "div", 339)(193, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](194, ClaimsComponent_ng_template_808_div_306_div_194_Template, 10, 6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](195, ClaimsComponent_ng_template_808_div_306_div_195_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](196, "div", 272)(197, "div", 273)(198, "div", 3)(199, "div", 243)(200, "div", 290)(201, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](202, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](203, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](204, "div", 19)(205, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](206, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](207, "div", 343)(208, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_div_306_Template_button_click_208_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r316);
      const x_r276 = restoredCtx.$implicit;
      const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r319.close_tab(x_r276));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](209, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](210, "div", 339)(211, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](212, ClaimsComponent_ng_template_808_div_306_div_212_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](213, ClaimsComponent_ng_template_808_div_306_div_213_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](214, ClaimsComponent_ng_template_808_div_306_app_atom_spinner_214_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](215, "div", 295)(216, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](217, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](218, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](219, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "div", 300)(221, "div", 301)(222, "div", 1)(223, "h4", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](224, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "form", 303)(227, "div", 304)(228, "div", 305)(229, "div", 306)(230, "div", 307)(231, "div", 187)(232, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](233, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](234, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](235, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](236, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](237, "div", 305)(238, "div", 306)(239, "div", 307)(240, "div", 187)(241, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](242, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](243, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](244, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](245, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](246, "div", 305)(247, "div", 306)(248, "div", 307)(249, "div", 187)(250, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](251, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](252, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](253, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](254, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](255, "div", 305)(256, "div", 306)(257, "div", 309)(258, "div", 187)(259, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](260, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](262, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](263, "select", 310)(264, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](265, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](266, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](267, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](268, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](269, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](270, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](271, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "span", 311)(273, "span", 312)(274, "span", 346)(275, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](276, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](278, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](279, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r276 = ctx.$implicit;
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", x_r276.claim_no === ctx_r245.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", x_r276.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r276.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r276.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](62, 28, x_r276.dob, "MM/dd/yyyy"), ", ", x_r276.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r276.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", x_r276.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", x_r276.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", x_r276.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r276.prim_ins_name != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r276.sec_ins_name != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r276.ter_ins_name != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r245.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r245.active_refer_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r245.active_refer_process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r245.active_refer_qc);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r245.active_refer_qc.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#y", x_r276.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#x", x_r276.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r245.active_refer_claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r245.active_refer_claim.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r245.active_refer_client);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r245.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r245.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "x", x_r276.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "y", x_r276.id, "");
  }
}
function ClaimsComponent_ng_template_808_Template(rf, ctx) {
  if (rf & 1) {
    const _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r321);
      const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r320.modalRef == null ? null : ctx_r320.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r320.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ul", 234)(5, "li", 235)(6, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r321);
      const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r322.selected_tab("maintab");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r322.get_line_items(ctx_r322.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_808_li_9_Template, 7, 4, "li", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 239)(11, "div", 240)(12, "div", 241)(13, "div", 74)(14, "div", 242)(15, "div", 3)(16, "div", 243)(17, "div", 16)(18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 245)(25, "div", 13)(26, "div", 1)(27, "div", 246)(28, "div", 247)(29, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 19)(33, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 249)(36, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "svg", 251)(38, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "defs", 252)(41, "path", 253)(42, "path", 254)(43, "path", 255)(44, "path", 256)(45, "path", 257)(46, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "text", 259)(48, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "text", 261)(51, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "svg", 251)(54, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "defs", 252)(57, "path", 253)(58, "path", 254)(59, "path", 255)(60, "path", 256)(61, "path", 257)(62, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "text", 259)(64, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "text", 261)(67, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 263)(70, "div", 1)(71, "div", 264)(72, "table", 265)(73, "tbody")(74, "tr")(75, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "tr")(82, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "tr")(89, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](92, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](95, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "tr")(97, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](98, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](100, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 267)(104, "table", 265)(105, "tbody")(106, "tr")(107, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](112, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](117, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "tr")(125, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "tr")(134, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, ": Commercial [Static]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](138, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "div", 269)(140, "h4", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](141, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "table", 271)(143, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](144, ClaimsComponent_ng_template_808_tr_144_Template, 2, 1, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "div", 272)(146, "div", 273)(147, "div", 3)(148, "div", 243)(149, "div", 16)(150, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](151, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "div", 19)(154, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](155, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "div", 275)(157, "div", 276)(158, "table", 277)(159, "thead")(160, "tr")(161, "th", 162)(162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](163, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "th", 162)(165, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](166, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "th", 162)(168, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "th", 162)(171, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](172, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "th", 162)(174, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](175, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "th", 162)(177, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](179, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](180, "Touches");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](182, ClaimsComponent_ng_template_808_tr_182_Template, 21, 11, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "div", 278)(184, "div", 19)(185, "a", 279)(186, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](187, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "a", 281)(189, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](190, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](191, "a", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_Template_a_click_191_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r321);
      const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r323.send_calim_det("claims"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](192, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](195, "div", 284)(196, "div", 273)(197, "div", 3)(198, "div", 243)(199, "div", 16)(200, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](201, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](202, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](203, "div", 19)(204, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](205, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](206, "div", 286)(207, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](208, ClaimsComponent_ng_template_808_div_208_Template, 10, 6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](209, ClaimsComponent_ng_template_808_div_209_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](210, ClaimsComponent_ng_template_808_app_atom_spinner_210_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](211, "div", 289)(212, "div", 273)(213, "div", 3)(214, "div", 243)(215, "div", 290)(216, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](217, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](218, " QC Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](220, ClaimsComponent_ng_template_808_a_220_Template, 1, 1, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](221, "button", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](222, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](223, "div", 293)(224, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](225, ClaimsComponent_ng_template_808_div_225_Template, 17, 8, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](226, ClaimsComponent_ng_template_808_div_226_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](227, ClaimsComponent_ng_template_808_app_atom_spinner_227_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](228, "div", 295)(229, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](230, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](231, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](232, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](233, "div", 298)(234, "button", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_808_Template_button_click_234_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r321);
      const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r324.modalRef == null ? null : ctx_r324.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](235, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](236, "div", 300)(237, "div", 301)(238, "div", 1)(239, "h4", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](240, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](241, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](242, "form", 303)(243, "div", 304)(244, "div", 305)(245, "div", 306)(246, "div", 307)(247, "div", 187)(248, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](249, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](250, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](251, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](252, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](253, "div", 305)(254, "div", 306)(255, "div", 307)(256, "div", 187)(257, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](258, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](259, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](260, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](261, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](262, "div", 305)(263, "div", 306)(264, "div", 307)(265, "div", 187)(266, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](267, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](268, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](269, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](270, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](271, "div", 305)(272, "div", 306)(273, "div", 309)(274, "div", 187)(275, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](276, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](278, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](279, "select", 310)(280, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](281, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](282, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](283, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](284, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](285, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](286, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](287, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "span", 311)(289, "span", 312)(290, "span", 313)(291, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](292, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](293, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](294, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](295, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](296, "form", 303)(297, "div", 25)(298, "div", 74)(299, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](300, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](301, "textarea", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](302, "button", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](303, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](304, "button", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](305, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](306, ClaimsComponent_ng_template_808_div_306_Template, 280, 31, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](307, "div", 199);
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r60.main_tab == ctx_r60.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r60.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r60.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r60.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r60.claim_clicked.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r60.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](95, 27, ctx_r60.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r60.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r60.claim_clicked.ssn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r60.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r60.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r60.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r60.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r60.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r60.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r60.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r60.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r60.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r60.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r60.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r60.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r60.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r60.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r60.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r60.refer_claim_det);
  }
}
function ClaimsComponent_ng_template_810_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_810_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r330);
      const modal_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r329.savenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r325.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r326 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r326.valid);
  }
}
function ClaimsComponent_ng_template_810_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_810_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r333);
      const modal_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r332.updatenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r325.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r326 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r326.valid);
  }
}
function ClaimsComponent_ng_template_810_Template(rf, ctx) {
  if (rf & 1) {
    const _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_810_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r336);
      const modal_r325 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r325.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "div", 295)(8, "form", 350, 186)(10, "div", 1)(11, "div", 3)(12, "div", 74)(13, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "textarea", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 199)(16, "button", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_810_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r336);
      const modal_r325 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r325.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ClaimsComponent_ng_template_810_button_18_Template, 2, 1, "button", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ClaimsComponent_ng_template_810_button_19_Template, 2, 1, "button", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r62.processNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r62.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r62.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r62.editnote_value);
  }
}
function ClaimsComponent_ng_template_812_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_812_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r343);
      const modal_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r342.savenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r338.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r339.valid);
  }
}
function ClaimsComponent_ng_template_812_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_812_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r346);
      const modal_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r345.updatenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r338.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r339.valid);
  }
}
function ClaimsComponent_ng_template_812_Template(rf, ctx) {
  if (rf & 1) {
    const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_812_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r349);
      const modal_r338 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r338.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "div", 295)(8, "form", 350, 186)(10, "div", 1)(11, "div", 3)(12, "div", 74)(13, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "textarea", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 199)(16, "button", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_812_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r349);
      const modal_r338 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r338.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ClaimsComponent_ng_template_812_button_18_Template, 2, 1, "button", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ClaimsComponent_ng_template_812_button_19_Template, 2, 1, "button", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r64.claimNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r64.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r64.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r64.editnote_value);
  }
}
function ClaimsComponent_ng_template_814_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 235)(1, "a", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r364);
      const x_r362 = restoredCtx.$implicit;
      const ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r363.selected_tab(x_r362.claim_no);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r363.get_line_items(x_r362));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r364);
      const x_r362 = restoredCtx.$implicit;
      const ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r365.close_tab(x_r362));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r362 = ctx.$implicit;
    const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", x_r362.claim_no === ctx_r352.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#", x_r362.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Claim No: ", x_r362.claim_no, "");
  }
}
function ClaimsComponent_ng_template_814_tr_144_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_tr_144_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r371);
      const x_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r369.referclaim(x_r366));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, x_r366.dos, "MM/dd/yyyy"), " - ", x_r366.claim_no, "");
  }
}
function ClaimsComponent_ng_template_814_tr_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_814_tr_144_td_1_Template, 3, 5, "td", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r367 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r367 < 3);
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r375.claim_clicked.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r377.claim_clicked.dos, "MM/dd/yyyy"), " ");
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](x_r373.cpt);
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r381.claim_clicked.total_charges, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_tr_181_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r373.total_ar_due, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_814_tr_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_814_tr_181_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_814_tr_181_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_814_tr_181_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_814_tr_181_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_814_tr_181_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_814_tr_181_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_814_tr_181_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_814_tr_181_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_814_tr_181_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_814_tr_181_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "09/17/18 [Stat]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 162)(19, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r373 = ctx.$implicit;
    const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r354.claim_clicked.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r354.claim_clicked.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r354.claim_clicked.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r354.claim_clicked.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r373.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r373.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r354.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r354.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r373.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r373.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r354.claim_clicked.touch);
  }
}
function ClaimsComponent_ng_template_814_div_207_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r386 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r386.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r386.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r386.content, ". ");
  }
}
function ClaimsComponent_ng_template_814_div_208_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_814_app_atom_spinner_209_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_814_div_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r387 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", y_r387.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, y_r387.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", y_r387.content, ". ");
  }
}
function ClaimsComponent_ng_template_814_div_221_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_814_app_atom_spinner_222_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_133_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r411 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_tr_133_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r411);
      const x_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r409.referclaim(x_r406));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, x_r406.dos, "MM/dd/yyyy"), " - ", x_r406.claim_no, "");
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_814_div_302_tr_133_td_1_Template, 3, 5, "td", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r407 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r407 < 3);
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r413.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r413.dos, "MM/dd/yyyy"), " ");
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](x_r413.cpt);
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r421.claim_clicked.total_charges, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r413.total_ar_due, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_814_div_302_tr_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_814_div_302_tr_170_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_814_div_302_tr_170_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_814_div_302_tr_170_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_814_div_302_tr_170_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_814_div_302_tr_170_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_814_div_302_tr_170_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_814_div_302_tr_170_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_814_div_302_tr_170_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_814_div_302_tr_170_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_814_div_302_tr_170_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "09/17/18 [Stat]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 162)(19, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r413 = ctx.$implicit;
    const ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r390.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r390.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r413.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r390.claim_clicked.touch);
  }
}
function ClaimsComponent_ng_template_814_div_302_div_200_Template(rf, ctx) {
  if (rf & 1) {
    const _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "i", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_div_200_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r430);
      const x_r428 = restoredCtx.$implicit;
      const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](811);
      ctx_r429.open(_r61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r429.editnotes("processnote", x_r428.content, x_r428.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r428 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r428.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r428.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r428.content, ". ");
  }
}
function ClaimsComponent_ng_template_814_div_302_div_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_814_div_302_app_atom_spinner_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_814_div_302_a_212_Template(rf, ctx) {
  if (rf & 1) {
    const _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_a_212_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r432);
      const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](827);
      ctx_r431.open(_r77);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r431.get_audit_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "New Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r394.qc_notes_data_list.includes(ctx_r394.claim_clicked.claim_no));
  }
}
function ClaimsComponent_ng_template_814_div_302_div_221_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r433 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r433.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r433.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r433.content, ". ");
  }
}
function ClaimsComponent_ng_template_814_div_302_div_222_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_814_div_302_app_atom_spinner_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_814_div_302_div_234_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r434 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", y_r434.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, y_r434.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", y_r434.content, ". ");
  }
}
function ClaimsComponent_ng_template_814_div_302_div_235_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_814_div_302_app_atom_spinner_236_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_814_div_302_div_247_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r435 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r435.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r435.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r435.content, ". ");
  }
}
function ClaimsComponent_ng_template_814_div_302_div_248_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_814_div_302_app_atom_spinner_249_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_814_div_302_span_255_Template(rf, ctx) {
  if (rf & 1) {
    const _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 361)(3, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_span_255_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r437);
      const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r436.modalRef == null ? null : ctx_r436.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClaimsComponent_ng_template_814_div_302_span_256_Template(rf, ctx) {
  if (rf & 1) {
    const _r440 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span")(1, "div", 298)(2, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_span_256_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r440);
      const x_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r438.close_tab(x_r388));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClaimsComponent_ng_template_814_div_302_Template(rf, ctx) {
  if (rf & 1) {
    const _r442 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 334)(1, "div", 241)(2, "div", 74)(3, "div", 242)(4, "div", 3)(5, "div", 243)(6, "div", 16)(7, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 19)(11, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 245)(14, "div", 13)(15, "div", 1)(16, "div", 246)(17, "div", 247)(18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 249)(25, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "svg", 251)(27, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "defs", 252)(30, "path", 253)(31, "path", 254)(32, "path", 255)(33, "path", 256)(34, "path", 257)(35, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "text", 259)(37, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "text", 261)(40, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "svg", 251)(43, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "defs", 252)(46, "path", 253)(47, "path", 254)(48, "path", 255)(49, "path", 256)(50, "path", 257)(51, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "text", 259)(53, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "text", 261)(56, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "div", 263)(59, "div", 1)(60, "div", 264)(61, "table", 265)(62, "tbody")(63, "tr")(64, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "tr")(71, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "tr")(78, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](84, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "tr")(86, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](89, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 267)(93, "table", 265)(94, "tbody")(95, "tr")(96, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](101, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](104, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "tr")(114, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](118, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "tr")(123, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](124, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, ": Commercial [Static]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](127, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "div", 269)(129, "h4", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "table", 271)(132, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](133, ClaimsComponent_ng_template_814_div_302_tr_133_Template, 2, 1, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](134, "div", 272)(135, "div", 273)(136, "div", 3)(137, "div", 243)(138, "div", 16)(139, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](140, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](141, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "div", 19)(143, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](144, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "div", 275)(146, "div", 276)(147, "table", 277)(148, "thead")(149, "tr")(150, "th", 162)(151, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "th", 162)(154, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](155, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "th", 162)(157, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](158, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "th", 162)(160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](161, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](162, "th", 162)(163, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](164, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](165, "th", 162)(166, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](167, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](168, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](169, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](170, ClaimsComponent_ng_template_814_div_302_tr_170_Template, 21, 11, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](171, "div", 278)(172, "div", 19)(173, "a", 358)(174, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](175, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "a", 359)(177, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](179, "a", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](180, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "div", 272)(184, "div", 273)(185, "div", 3)(186, "div", 243)(187, "div", 16)(188, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](189, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](190, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](191, "div", 19)(192, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_Template_a_click_192_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r442);
      const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](811);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r441.open(_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](193, "i", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](194, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](195, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](196, "button", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](197, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](198, "div", 363)(199, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](200, ClaimsComponent_ng_template_814_div_302_div_200_Template, 11, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](201, ClaimsComponent_ng_template_814_div_302_div_201_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](202, ClaimsComponent_ng_template_814_div_302_app_atom_spinner_202_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](203, "div", 272)(204, "div", 273)(205, "div", 3)(206, "div", 243)(207, "div", 290)(208, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](209, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](210, " QC Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](211, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](212, ClaimsComponent_ng_template_814_div_302_a_212_Template, 4, 1, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](213, "a", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_Template_a_click_213_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r442);
      const x_r388 = restoredCtx.$implicit;
      const ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](827);
      ctx_r443.open(_r77);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r443.editnotes("qc_notes_init", "none", x_r388));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](214, "i", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](215, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](216, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](217, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](218, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "div", 293)(220, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](221, ClaimsComponent_ng_template_814_div_302_div_221_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](222, ClaimsComponent_ng_template_814_div_302_div_222_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](223, ClaimsComponent_ng_template_814_div_302_app_atom_spinner_223_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](224, "div", 272)(225, "div", 273)(226, "div", 3)(227, "div", 243)(228, "div", 16)(229, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](230, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](231, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](232, "div", 286)(233, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](234, ClaimsComponent_ng_template_814_div_302_div_234_Template, 10, 6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](235, ClaimsComponent_ng_template_814_div_302_div_235_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](236, ClaimsComponent_ng_template_814_div_302_app_atom_spinner_236_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](237, "div", 272)(238, "div", 273)(239, "div", 3)(240, "div", 243)(241, "div", 290)(242, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](243, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](244, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](245, "div", 365)(246, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](247, ClaimsComponent_ng_template_814_div_302_div_247_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](248, ClaimsComponent_ng_template_814_div_302_div_248_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](249, ClaimsComponent_ng_template_814_div_302_app_atom_spinner_249_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](250, "div", 295)(251, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](252, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](253, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](254, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](255, ClaimsComponent_ng_template_814_div_302_span_255_Template, 5, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](256, ClaimsComponent_ng_template_814_div_302_span_256_Template, 4, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "div", 300)(258, "div", 301)(259, "div", 1)(260, "h4", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](261, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](262, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](263, "form", 303)(264, "div", 304)(265, "div", 305)(266, "div", 306)(267, "div", 307)(268, "div", 187)(269, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](270, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](271, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](272, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](273, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](274, "div", 305)(275, "div", 306)(276, "div", 307)(277, "div", 187)(278, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](279, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](280, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](281, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](282, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](283, "div", 305)(284, "div", 306)(285, "div", 307)(286, "div", 187)(287, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](288, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](289, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](290, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](291, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](292, "div", 305)(293, "div", 306)(294, "div", 309)(295, "div", 187)(296, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](297, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](298, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](299, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](300, "select", 310)(301, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](302, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](303, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](304, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](305, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](306, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](307, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](308, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](309, "span", 311)(310, "span", 312)(311, "span", 313)(312, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](313, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](314, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](315, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](316, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](317, "form", 303)(318, "div", 25)(319, "div", 74)(320, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](321, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](322, "textarea", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](323, "button", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](324, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](325, "button", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](326, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](327, "div", 298)(328, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_div_302_Template_button_click_328_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r442);
      const x_r388 = restoredCtx.$implicit;
      const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r444.close_tab(x_r388));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](329, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const x_r388 = ctx.$implicit;
    const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", x_r388.claim_no === ctx_r361.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", x_r388.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r361.claim_clicked.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r361.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](84, 32, ctx_r361.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r361.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r361.claim_clicked.ssn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r361.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r361.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r361.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r361.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r361.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r361.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r361.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r361.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r361.process_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r361.process_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r361.qc_notes_data_list.includes(ctx_r361.claim_clicked.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r361.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r361.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r361.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r361.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r361.client_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r361.client_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.refer_claim_editable == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r361.refer_claim_editable == "false");
  }
}
function ClaimsComponent_ng_template_814_Template(rf, ctx) {
  if (rf & 1) {
    const _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r446);
      const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r445.modalRef == null ? null : ctx_r445.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r445.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ul", 234)(5, "li", 235)(6, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r446);
      const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r447.selected_tab("maintab");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r447.get_line_items(ctx_r447.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_814_li_9_Template, 7, 4, "li", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 239)(11, "div", 240)(12, "div", 241)(13, "div", 74)(14, "div", 242)(15, "div", 3)(16, "div", 243)(17, "div", 16)(18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 245)(25, "div", 13)(26, "div", 1)(27, "div", 246)(28, "div", 247)(29, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 19)(33, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 249)(36, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "svg", 251)(38, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "defs", 252)(41, "path", 253)(42, "path", 254)(43, "path", 255)(44, "path", 256)(45, "path", 257)(46, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "text", 259)(48, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "text", 261)(51, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "svg", 251)(54, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "defs", 252)(57, "path", 253)(58, "path", 254)(59, "path", 255)(60, "path", 256)(61, "path", 257)(62, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "text", 259)(64, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "text", 261)(67, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 263)(70, "div", 1)(71, "div", 264)(72, "table", 265)(73, "tbody")(74, "tr")(75, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "tr")(82, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "tr")(89, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](92, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](95, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "tr")(97, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](98, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](100, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 267)(104, "table", 265)(105, "tbody")(106, "tr")(107, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](112, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](117, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "tr")(125, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "tr")(134, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, ": Commercial [Static]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](138, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "div", 357)(140, "h4", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](141, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "table", 271)(143, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](144, ClaimsComponent_ng_template_814_tr_144_Template, 2, 1, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "div", 272)(146, "div", 273)(147, "div", 3)(148, "div", 243)(149, "div", 16)(150, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](151, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "div", 19)(154, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](155, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "div", 275)(157, "div", 276)(158, "table", 277)(159, "thead")(160, "tr")(161, "th", 162)(162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](163, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "th", 162)(165, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](166, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "th", 162)(168, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "th", 162)(171, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](172, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "th", 162)(174, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](175, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "th", 162)(177, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](179, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](181, ClaimsComponent_ng_template_814_tr_181_Template, 21, 11, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](182, "div", 278)(183, "div", 19)(184, "a", 358)(185, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186, "Claim Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "a", 359)(188, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](189, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "a", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](191, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](193, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](194, "div", 289)(195, "div", 273)(196, "div", 3)(197, "div", 243)(198, "div", 290)(199, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](200, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](201, " QC Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](202, "div", 19)(203, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](204, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](205, "div", 293)(206, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](207, ClaimsComponent_ng_template_814_div_207_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](208, ClaimsComponent_ng_template_814_div_208_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](209, ClaimsComponent_ng_template_814_app_atom_spinner_209_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](210, "div", 284)(211, "div", 273)(212, "div", 3)(213, "div", 243)(214, "div", 16)(215, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](216, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](217, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](218, "div", 286)(219, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](220, ClaimsComponent_ng_template_814_div_220_Template, 10, 6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](221, ClaimsComponent_ng_template_814_div_221_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](222, ClaimsComponent_ng_template_814_app_atom_spinner_222_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](223, "div", 295)(224, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](225, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](227, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](228, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](229, "div", 361)(230, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_814_Template_button_click_230_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r446);
      const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r448.modalRef == null ? null : ctx_r448.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](231, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](232, "div", 300)(233, "div", 301)(234, "div", 1)(235, "h4", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](236, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](237, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](238, "form", 303)(239, "div", 304)(240, "div", 305)(241, "div", 306)(242, "div", 307)(243, "div", 187)(244, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](245, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](246, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](247, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](248, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](249, "div", 305)(250, "div", 306)(251, "div", 307)(252, "div", 187)(253, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](254, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](255, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](256, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](257, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](258, "div", 305)(259, "div", 306)(260, "div", 307)(261, "div", 187)(262, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](263, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](264, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](265, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](266, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "div", 305)(268, "div", 306)(269, "div", 309)(270, "div", 187)(271, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](272, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](273, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](274, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](275, "select", 310)(276, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](277, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](278, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](279, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](280, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](281, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](282, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](283, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](284, "span", 311)(285, "span", 312)(286, "span", 313)(287, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](288, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](289, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](290, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](291, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](292, "form", 303)(293, "div", 25)(294, "div", 74)(295, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](296, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](297, "textarea", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](298, "button", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](299, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](300, "button", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](301, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](302, ClaimsComponent_ng_template_814_div_302_Template, 330, 35, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](303, "div", 199);
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r66.main_tab == ctx_r66.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r66.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r66.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r66.claim_clicked.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r66.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](95, 26, ctx_r66.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r66.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r66.claim_clicked.ssn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r66.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r66.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r66.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r66.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r66.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r66.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r66.qc_notes == null ? null : ctx_r66.qc_notes.length) != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r66.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r66.claim_notes == null ? null : ctx_r66.claim_notes.length) != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r66.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.refer_claim_det);
  }
}
function ClaimsComponent_ng_template_816_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Work Order Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_816_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_816_div_22_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r451.fe["workorder_name"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_816_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Due Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_816_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_816_div_35_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r452.fe["due_date"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_816_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_816_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_816_div_54_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r453.fe["priority"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_816_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_816_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_816_div_60_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r454.fe["priority"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_816_div_78_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Work Order Note is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_816_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_816_div_78_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r455.fe["wo_notes"].errors["required"]);
  }
}
const _c24 = function () {
  return {
    isAnimated: true
  };
};
const _c25 = function () {
  return {
    rangeInputFormat: "YYYY-MM-DD",
    dateInputFormat: "YYYY-MM-DD",
    showWeekNumbers: false
  };
};
function ClaimsComponent_ng_template_816_Template(rf, ctx) {
  if (rf & 1) {
    const _r462 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_816_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r462);
      const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r461.modalRef == null ? null : ctx_r461.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r461.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "New Work Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "div", 1)(8, "form", 366, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_ng_template_816_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r462);
      const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r463.onClaimSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 13)(11, "div", 187)(12, "div", 191)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Work Order Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 193)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "input", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, ClaimsComponent_ng_template_816_div_22_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 13)(24, "div", 187)(25, "div", 191)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 193)(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "input", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, ClaimsComponent_ng_template_816_div_35_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 13)(37, "div", 187)(38, "div", 191)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 193)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 369)(47, "div", 370)(48, "div", 371)(49, "div", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](50, "input", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "label", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, ClaimsComponent_ng_template_816_div_54_Template, 2, 1, "div", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "input", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "label", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, ClaimsComponent_ng_template_816_div_60_Template, 2, 1, "div", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "div", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "input", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "label", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "div", 13)(67, "div", 381)(68, "div", 382)(69, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "Work Order Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 193)(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](77, "textarea", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](78, ClaimsComponent_ng_template_816_div_78_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 187)(80, "button", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_816_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r462);
      const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](819);
      ctx_r464.get_associates();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r464.openModal2(_r69));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](81, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82, " Associates List");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 199)(84, "button", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_816_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r462);
      const ctx_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r465.modalRef == null ? null : ctx_r465.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r465.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_816_Template_button_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r462);
      const ctx_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r466.modalRef == null ? null : ctx_r466.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r466.create_workorder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r450 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9);
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r68.workOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](18, _c23, ctx_r68.fe["workorder_name"].touched && ctx_r68.fe["workorder_name"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.fe["workorder_name"].touched && ctx_r68.fe["workorder_name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](20, _c24))("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](21, _c25))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c23, ctx_r68.fe["due_date"].touched && ctx_r68.fe["due_date"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.fe["due_date"].touched && ctx_r68.fe["due_date"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](24, _c23, ctx_r68.fe["priority"].touched && ctx_r68.fe["priority"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.fe["priority"].touched && ctx_r68.fe["priority"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](26, _c23, ctx_r68.fe["priority"].touched && ctx_r68.fe["priority"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.fe["priority"].touched && ctx_r68.fe["priority"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](28, _c23, ctx_r68.fe["priority"].touched && ctx_r68.fe["priority"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](30, _c23, ctx_r68.fe["wo_notes"].touched && ctx_r68.fe["wo_notes"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.fe["wo_notes"].touched && ctx_r68.fe["wo_notes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("title", " ", ctx_r68.selected_claim_nos.length == 0 ? "Select claims to Assign" : "Assign Associates", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r68.selected_claim_nos.length == 0 || !_r450.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", ctx_r68.null_assigned == true ? "No Claims Assigned" : "Create Work Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r450.valid || ctx_r68.associates_error_status == true || ctx_r68.null_assigned == true);
  }
}
function ClaimsComponent_ng_template_818_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r468 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r468.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r468.assigned_claim_nos, "");
  }
}
function ClaimsComponent_ng_template_818_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 395)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Assigned Claims: 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r469.selected_claim_nos.length, "");
  }
}
function ClaimsComponent_ng_template_818_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 395)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r470.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r470.assigned_claim_nos, "");
  }
}
function ClaimsComponent_ng_template_818_tr_22_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assts_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](assts_r474.assign_limit);
  }
}
function ClaimsComponent_ng_template_818_tr_22_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td")(1, "span", 395)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const assts_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](assts_r474.assign_limit);
  }
}
function ClaimsComponent_ng_template_818_tr_22_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r483 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td")(1, "input", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function ClaimsComponent_ng_template_818_tr_22_td_9_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r483);
      const assts_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r481.manual_assign($event, assts_r474.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assts_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r477.assigned_data[assts_r474.id]);
  }
}
function ClaimsComponent_ng_template_818_tr_22_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_818_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r486 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_818_tr_22_Template_input_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r486);
      const assts_r474 = restoredCtx.$implicit;
      const ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r485.select_associates($event, assts_r474.id));
    })("ngModelChange", function ClaimsComponent_ng_template_818_tr_22_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r486);
      const assts_r474 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](assts_r474.isChecked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClaimsComponent_ng_template_818_tr_22_td_7_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_818_tr_22_td_8_Template, 4, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_818_tr_22_td_9_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ClaimsComponent_ng_template_818_tr_22_td_10_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assts_r474 = ctx.$implicit;
    const ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", assts_r474.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r471.selected_associates.includes(assts_r474.id))("ngModel", assts_r474.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", assts_r474.firstname, " ", assts_r474.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](assts_r474.assigned_claims);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r471.limit_exceeds.includes(assts_r474.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r471.limit_exceeds.includes(assts_r474.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r471.selected_associates.includes(assts_r474.id) && ctx_r471.claim_assign_type == "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r471.selected_associates.includes(assts_r474.id) && ctx_r471.claim_assign_type == "Auto");
  }
}
function ClaimsComponent_ng_template_818_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r489 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_818_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r489);
      const ctx_r488 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r488.modalRef2 == null ? null : ctx_r488.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r472.selected_claim_nos.length < ctx_r472.assigned_claim_nos);
  }
}
function ClaimsComponent_ng_template_818_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_818_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r491);
      const ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](821);
      ctx_r490.assign_claims();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r490.openModal3(_r71));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r473.claim_proceed);
  }
}
function ClaimsComponent_ng_template_818_Template(rf, ctx) {
  if (rf & 1) {
    const _r493 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_818_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r493);
      const ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r492.modalRef2 == null ? null : ctx_r492.modalRef2.hide();
      ctx_r492.checkedEvnt(false);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r492.removeTextbox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Associates List");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "div", 74)(8, "span", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "table", 390)(11, "thead")(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ClaimsComponent_ng_template_818_div_13_Template, 8, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_818_div_14_Template, 8, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_818_div_15_Template, 8, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Assign limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, ClaimsComponent_ng_template_818_tr_22_Template, 11, 10, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 199)(24, "span", 391)(25, "button", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_818_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r493);
      const ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r494.assign_type("Manual"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, ClaimsComponent_ng_template_818_button_27_Template, 2, 1, "button", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, ClaimsComponent_ng_template_818_button_28_Template, 2, 1, "button", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r70.associate_error);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r70.associate_error, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r70.selected_claim_nos.length > 0 && ctx_r70.selected_claim_nos.length >= ctx_r70.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r70.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r70.selected_claim_nos.length > 0 && ctx_r70.selected_claim_nos.length < ctx_r70.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r70.associates_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r70.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r70.associates_error_status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r70.associates_error_status == true);
  }
}
function ClaimsComponent_ng_template_820_table_8_tr_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r502 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r502, " ");
  }
}
function ClaimsComponent_ng_template_820_table_8_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r504 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " * Some Associates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ClaimsComponent_ng_template_820_table_8_tr_6_span_4_Template, 3, 1, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " are Unassigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td")(7, "button", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_820_table_8_tr_6_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r504);
      const ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r503.ignore_error("associates"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r498.error_details["associate_name"]);
  }
}
function ClaimsComponent_ng_template_820_table_8_tr_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r506 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r506, " ");
  }
}
function ClaimsComponent_ng_template_820_table_8_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r508 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " * Some Reopen claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ClaimsComponent_ng_template_820_table_8_tr_7_span_4_Template, 3, 1, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " not assigned because their AR is not selected or Limit Exceeded. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td")(7, "button", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_820_table_8_tr_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r508);
      const ctx_r507 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r507.ignore_error("reopen"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r499.error_details["reopen"]);
  }
}
function ClaimsComponent_ng_template_820_table_8_tr_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r510 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r510, " ");
  }
}
function ClaimsComponent_ng_template_820_table_8_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r512 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " * New Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ClaimsComponent_ng_template_820_table_8_tr_8_span_4_Template, 3, 1, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " are not assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td")(7, "button", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_820_table_8_tr_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r512);
      const ctx_r511 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r511.ignore_error("newclaims"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r500 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r500.error_details["new_claims"]);
  }
}
function ClaimsComponent_ng_template_820_table_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "table")(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_820_table_8_tr_6_Template, 9, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClaimsComponent_ng_template_820_table_8_tr_7_Template, 9, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_820_table_8_tr_8_Template, 9, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r496.error_details && ctx_r496.error_details["associates"] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r496.error_details && ctx_r496.error_details["reopen"] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r496.error_details && ctx_r496.error_details["new_claims"] != "");
  }
}
function ClaimsComponent_ng_template_820_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "All Claims Assigned Click Continue to Proceed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_820_Template(rf, ctx) {
  if (rf & 1) {
    const _r514 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_820_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r514);
      const ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r513.modalRef3 == null ? null : ctx_r513.modalRef3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Assign Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_820_table_8_Template, 9, 3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_820_div_9_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 199)(11, "button", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_820_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r514);
      const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r515.modalRef3 == null ? null : ctx_r515.modalRef3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r72.associates_error_status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r72.associates_error_status == false);
  }
}
function ClaimsComponent_ng_template_822_tbody_51_tr_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wo_det_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, wo_det_r521.dos, "MM/dd/yyyy"), " ");
  }
}
function ClaimsComponent_ng_template_822_tbody_51_tr_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "td", 412);
  }
}
function ClaimsComponent_ng_template_822_tbody_51_tr_1_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "td", 412);
  }
}
function ClaimsComponent_ng_template_822_tbody_51_tr_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wo_det_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.claim_age);
  }
}
function ClaimsComponent_ng_template_822_tbody_51_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 411)(2, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ClaimsComponent_ng_template_822_tbody_51_tr_1_td_10_Template, 3, 4, "td", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_822_tbody_51_tr_1_td_11_Template, 1, 0, "td", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_822_tbody_51_tr_1_td_12_Template, 1, 0, "td", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ClaimsComponent_ng_template_822_tbody_51_tr_1_td_13_Template, 2, 1, "td", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "td", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "td", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wo_det_r521 = ctx.$implicit;
    const ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", wo_det_r521.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", wo_det_r521.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", wo_det_r521.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", wo_det_r521.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.prim_ins_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](18, 15, wo_det_r521.total_charges, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](21, 18, wo_det_r521.total_ar, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](wo_det_r521.claim_Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate3"]("", wo_det_r521.assigned_to_name, "/", ctx_r520.wo_created, "/", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](26, 21, wo_det_r521.created_at, "MM/dd/yyyy"), "");
  }
}
function ClaimsComponent_ng_template_822_tbody_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_822_tbody_51_tr_1_Template, 27, 24, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r517.wo_details);
  }
}
function ClaimsComponent_ng_template_822_tbody_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 415)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function ClaimsComponent_ng_template_822_app_atom_spinner_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 416);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_822_Template(rf, ctx) {
  if (rf & 1) {
    const _r529 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 405)(2, "span", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r528.modalRef == null ? null : ctx_r528.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 241)(7, "div", 74)(8, "div", 242)(9, "div", 3)(10, "div", 243)(11, "div", 16)(12, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " Claims List");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 25)(17, "div", 74)(18, "div", 70)(19, "table", 277)(20, "thead")(21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r530 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r530.sort_claims("acct_no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Acct# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r531.sort_claims("claim_no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Claim# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "th", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r532 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r532.sort_claims("patient_name"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "Patient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r533.sort_claims("dos_date"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "DOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "th", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r534.sort_claims("prim_ins_name"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Insurance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r535.sort_claims("total_charges"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "Billed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r536.sort_claims("total_ar"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "AR Due ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "th", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_822_Template_th_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r529);
      const ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r537.sort_claims("claim_Status"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](48, "i", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "th", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "Assigned To/By/Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, ClaimsComponent_ng_template_822_tbody_51_Template, 2, 1, "tbody", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, ClaimsComponent_ng_template_822_tbody_52_Template, 5, 0, "tbody", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, ClaimsComponent_ng_template_822_app_atom_spinner_53_Template, 1, 2, "app-atom-spinner", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](54, "div", 199);
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r74.wo_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r74.wo_details.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r74.wo_details.length == 0 && ctx_r74.loading == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r74.loading == true);
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    const ctx_r544 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r544.assoc_target_data[i_r543]);
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    const ctx_r549 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r549.assoc_ach_data[i_r543], "%");
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    const ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r550.assoc_ach_data[i_r543], "%");
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_824_div_6_tr_63_td_5_span_1_Template, 2, 1, "span", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_824_div_6_tr_63_td_5_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    const ctx_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r546.assoc_ach_data[i_r543] < 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r546.assoc_ach_data[i_r543] > 70);
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_824_div_6_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_824_div_6_tr_63_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ClaimsComponent_ng_template_824_div_6_tr_63_td_4_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_824_div_6_tr_63_td_5_Template, 3, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_824_div_6_tr_63_td_6_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r543 = ctx.index;
    const ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Week ", i_r543 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r541.assoc_target_data[i_r543] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r541.assoc_target_data[i_r543] == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r541.assoc_ach_data[i_r543] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r541.assoc_ach_data[i_r543] == undefined);
  }
}
function ClaimsComponent_ng_template_824_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 185)(1, "div", 74)(2, "table", 417)(3, "tbody")(4, "tr")(5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Associate Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Designation : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "User ID : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 418)(18, "table", 419)(19, "tbody")(20, "tr")(21, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Pending Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "tr")(26, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Completed Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "tr")(31, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "Followup Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "tr")(36, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "> 3 Touches");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "td", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "tr")(41, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Quality Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "td", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, ": 96%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "tr")(46, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "Productivity Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "td", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, ": 97%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 422)(51, "h4", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](52, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, " Productivity Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "table", 206)(55, "thead")(56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "Achieved %");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, ClaimsComponent_ng_template_824_div_6_tr_63_Template, 7, 5, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r539 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r539.detailed_claims.user_data["firstname"], " ", ctx_r539.detailed_claims.user_data["lastname"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r539.detailed_claims.desig);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r539.detailed_claims.user_data["id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r539.detailed_claims.pending, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r539.detailed_claims.completed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r539.detailed_claims.follow, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r539.detailed_claims.exceed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r539.week_count);
  }
}
function ClaimsComponent_ng_template_824_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-atom-spinner", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_824_Template(rf, ctx) {
  if (rf & 1) {
    const _r555 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 405)(2, "span", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_824_Template_span_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r555);
      const modal_r538 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r538.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_824_div_6_Template, 64, 9, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClaimsComponent_ng_template_824_div_7_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "div", 199);
  }
  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r76.detailed_claims != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r76.detailed_claims == "");
  }
}
function ClaimsComponent_ng_template_826_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "QC Notes is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_826_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_826_div_15_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r558 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r558.v["qc_notes"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_826_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Choose Root Cause Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_826_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_826_div_24_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r559 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r559.v["root_cause"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_826_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Choose Error type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_826_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_826_div_31_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r560 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r560.v["error_type"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_826_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r567 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_826_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r567);
      const modal_r556 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r566 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r566.savenotes("qcnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r556.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_826_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r570 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_826_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r570);
      const modal_r556 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r569.updatenotes("qcnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r556.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r557 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r557.valid);
  }
}
function ClaimsComponent_ng_template_826_Template(rf, ctx) {
  if (rf & 1) {
    const _r573 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_826_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r573);
      const modal_r556 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r556.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Qc Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 185)(7, "div", 295)(8, "form", 350, 186)(10, "div", 1)(11, "div", 3)(12, "div", 74)(13, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "textarea", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_826_div_15_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 3)(17, "div", 74)(18, "div", 425)(19, "div", 426)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Root Cause Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ClaimsComponent_ng_template_826_div_24_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 425)(26, "div", 427)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Error Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ClaimsComponent_ng_template_826_div_31_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 199)(33, "button", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_826_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r573);
      const modal_r556 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r556.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, ClaimsComponent_ng_template_826_button_35_Template, 2, 0, "button", 428);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, ClaimsComponent_ng_template_826_button_36_Template, 2, 1, "button", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r78.qcNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r78.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](8, _c23, ctx_r78.submitted && ctx_r78.v["qc_notes"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.submitted && ctx_r78.v["qc_notes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.submitted && ctx_r78.v["root_cause"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.submitted && ctx_r78.v["error_type"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r78.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.editnote_value);
  }
}
function ClaimsComponent_ng_template_828_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "File is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_828_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_828_div_31_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r577 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r577.auto_cc["file"].errors["required"]);
  }
}
function ClaimsComponent_ng_template_828_Template(rf, ctx) {
  if (rf & 1) {
    const _r580 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_828_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r580);
      const ctx_r579 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r579.modalRef2 == null ? null : ctx_r579.modalRef2.hide();
      ctx_r579.clear();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r579.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " File Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 185)(9, "form", 24, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_ng_template_828_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r580);
      const ctx_r581 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r581.auto_close_claim());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 1)(12, "div", 187)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "User - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 190)(21, "div", 191)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "File Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 193)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 194)(30, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_ng_template_828_Template_input_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r580);
      const ctx_r582 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r582.onAutocc_FileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ClaimsComponent_ng_template_828_div_31_Template, 2, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 199)(33, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_828_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r580);
      const modal_r575 = restoredCtx.$implicit;
      const ctx_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r583.auto_close_claim();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](modal_r575.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_828_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r580);
      const ctx_r584 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r584.modalRef2 == null ? null : ctx_r584.modalRef2.hide();
      ctx_r584.clear();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r584.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r576 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r80.filenote);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r80.filenote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r80.autoclose_claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r80.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](19, 8, ctx_r80.myDate, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](11, _c23, ctx_r80.auto_cc["file"].touched && ctx_r80.auto_cc["file"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r80.auto_cc["file"].touched && ctx_r80.auto_cc["file"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !_r576.valid);
  }
}
function ClaimsComponent_ng_template_830_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Auth No : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.auth_no) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.auth_no : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Admit Date : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.admit_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 10, ctx_r82.claim_data == null ? null : ctx_r82.claim_data.admit_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Discharge Date : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.discharge_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 13, ctx_r82.claim_data == null ? null : ctx_r82.claim_data.discharge_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" CPT : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.cpt) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.cpt : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ICD : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.icd) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.icd : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Modifiers : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.modifiers) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.modifiers : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Units : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.units) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.units : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Facility : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.facility) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.facility : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Billing Provider : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.billing_prov) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.billing_prov : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Insurance Type : ", (ctx_r82.claim_data == null ? null : ctx_r82.claim_data.insurance_type) ? ctx_r82.claim_data == null ? null : ctx_r82.claim_data.insurance_type : "-Nil-", " ");
  }
}
function ClaimsComponent_ng_template_832_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Guarantor : ", ctx_r84.claim_data.guarantor ? ctx_r84.claim_data.guarantor : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" DOB : ", ctx_r84.claim_data.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 12, ctx_r84.claim_data.dob, "MM/dd/yyyy") : "-Nil-", " | Age : ", ctx_r84.calculateAge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" SSN : ", ctx_r84.claim_data.ssn ? ctx_r84.claim_data.ssn : "-Nil-", " | Gender : ", ctx_r84.claim_data.gender ? ctx_r84.claim_data.gender : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx_r84.claim_data.address_1 ? ctx_r84.claim_data.address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx_r84.claim_data.address_2 ? ctx_r84.claim_data.address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" City : ", ctx_r84.claim_data.city ? ctx_r84.claim_data.city : "-Nil-", " | State : ", ctx_r84.claim_data.state ? ctx_r84.claim_data.state : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Zip Code : ", ctx_r84.claim_data.zipcode ? ctx_r84.claim_data.zipcode : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" Phone Number : ", ctx_r84.claim_data.phone_no ? ctx_r84.claim_data.phone_no : "-Nil-", " Employer : ", ctx_r84.claim_data.employer ? ctx_r84.claim_data.employer : "-Nil-", " ");
  }
}
function ClaimsComponent_ng_template_834_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Primary Policy ID : ", ctx_r86.claim_data.prim_pol_id ? ctx_r86.claim_data.prim_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Primary Group ID : ", ctx_r86.claim_data.prim_group_id ? ctx_r86.claim_data.prim_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Primary Address 1 : ", ctx_r86.claim_data.prim_address_1 ? ctx_r86.claim_data.prim_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Primary Address 2 : ", ctx_r86.claim_data.prim_address_2 ? ctx_r86.claim_data.prim_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Primary City : ", ctx_r86.claim_data.prim_city ? ctx_r86.claim_data.prim_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Primary State : ", ctx_r86.claim_data.prim_state ? ctx_r86.claim_data.prim_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Primary Zip Code : ", ctx_r86.claim_data.prim_zipcode ? ctx_r86.claim_data.prim_zipcode : "-Nil-", "");
  }
}
function ClaimsComponent_ng_template_836_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Secondary Policy ID : ", ctx_r88.claim_data.sec_pol_id ? ctx_r88.claim_data.sec_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Secondary Group ID : ", ctx_r88.claim_data.sec_group_id ? ctx_r88.claim_data.sec_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Secondary Address 1 : ", ctx_r88.claim_data.sec_address_1 ? ctx_r88.claim_data.sec_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Secondary Address 2 : ", ctx_r88.claim_data.sec_address_2 ? ctx_r88.claim_data.sec_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Secondary City : ", ctx_r88.claim_data.sec_city ? ctx_r88.claim_data.sec_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Secondary State : ", ctx_r88.claim_data.sec_state ? ctx_r88.claim_data.sec_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Secondary Zip Code : ", ctx_r88.claim_data.sec_zipcode, "");
  }
}
function ClaimsComponent_ng_template_838_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Tertiary Policy ID : ", ctx_r90.claim_data.ter_pol_id ? ctx_r90.claim_data.ter_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Tertiary Group ID : ", ctx_r90.claim_data.ter_group_id ? ctx_r90.claim_data.ter_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Tertiary Address 1 : ", ctx_r90.claim_data.ter_address_1 ? ctx_r90.claim_data.ter_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Tertiary Address 2 : ", ctx_r90.claim_data.ter_address_2 ? ctx_r90.claim_data.ter_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Tertiary City : ", ctx_r90.claim_data.ter_city ? ctx_r90.claim_data.ter_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Tertiary State : ", ctx_r90.claim_data.ter_state ? ctx_r90.claim_data.ter_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Tertiary Zip Code : ", ctx_r90.claim_data.ter_zipcode ? ctx_r90.claim_data.ter_zipcode : "-Nil-", "");
  }
}
function ClaimsComponent_ng_template_840_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Patient AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 2, ctx_r92.claim_data.pat_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](4, 5, ctx_r92.claim_data.pat_ar, "1.2-2") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Insurance AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 8, ctx_r92.claim_data.ins_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 11, ctx_r92.claim_data.ins_ar, "1.2-2") : "-Nil-", "");
  }
}
function ClaimsComponent_ng_template_842_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r598 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 235)(1, "a", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r598);
      const x_r596 = restoredCtx.$implicit;
      const ctx_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r597.selected_tab(x_r596.claim_no);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r597.get_line_items(x_r596));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r598);
      const x_r596 = restoredCtx.$implicit;
      const ctx_r599 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r599.close_tab(x_r596));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r596 = ctx.$implicit;
    const ctx_r585 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", x_r596.claim_no === ctx_r585.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#", x_r596.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Claim No: ", x_r596.claim_no, "");
  }
}
function ClaimsComponent_ng_template_842_tr_144_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r605 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_tr_144_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r605);
      const x_r600 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r603 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r603.referclaim(x_r600));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r600 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, x_r600.dos, "MM/dd/yyyy"), " - ", x_r600.claim_no, "");
  }
}
function ClaimsComponent_ng_template_842_tr_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClaimsComponent_ng_template_842_tr_144_td_1_Template, 3, 5, "td", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r601 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r601 < 3);
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r609.claim_clicked.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r611 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r611.claim_clicked.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r607 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](x_r607.cpt);
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r615 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r615.claim_clicked.total_charges, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_tr_181_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r607 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r607.total_ar_due, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_842_tr_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_842_tr_181_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_842_tr_181_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_842_tr_181_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_842_tr_181_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_842_tr_181_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_842_tr_181_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_842_tr_181_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_842_tr_181_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_842_tr_181_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_842_tr_181_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "09/17/18 [Stat]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 162)(19, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r607 = ctx.$implicit;
    const ctx_r587 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r587.claim_clicked.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r587.claim_clicked.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r587.claim_clicked.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r587.claim_clicked.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r607.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r607.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r587.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r587.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r607.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r607.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r587.claim_clicked.touch);
  }
}
function ClaimsComponent_ng_template_842_div_203_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r620 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", y_r620.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, y_r620.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", y_r620.content, ". ");
  }
}
function ClaimsComponent_ng_template_842_div_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_842_app_atom_spinner_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_842_a_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r622 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_a_215_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r622);
      const ctx_r621 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](827);
      ctx_r621.open(_r77);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r621.get_audit_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r591 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r591.qc_notes_data_list.includes(ctx_r591.claim_clicked.claim_no));
  }
}
function ClaimsComponent_ng_template_842_div_220_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r625 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r625.name, ". ");
  }
}
function ClaimsComponent_ng_template_842_div_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Error Types: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Root Causes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ClaimsComponent_ng_template_842_div_220_span_16_Template, 2, 1, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r623 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r623.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 5, x_r623.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r623.content, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r623.root.name, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", x_r623.error_type);
  }
}
function ClaimsComponent_ng_template_842_div_221_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_842_app_atom_spinner_222_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_842_div_301_td_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r626.prim_pol_id, " ");
  }
}
function ClaimsComponent_ng_template_842_div_301_td_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r626.sec_pol_id, " ");
  }
}
function ClaimsComponent_ng_template_842_div_301_td_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r626.ter_pol_id, " ");
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r643.dos, "MM/dd/yyyy"));
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r643.dos, "MM/dd/yyyy"), " ");
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](x_r643.cpt);
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r643.ins_ar, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, x_r643.total_ar_due, "1.2-2"));
  }
}
function ClaimsComponent_ng_template_842_div_301_tr_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClaimsComponent_ng_template_842_div_301_tr_137_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ClaimsComponent_ng_template_842_div_301_tr_137_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ClaimsComponent_ng_template_842_div_301_tr_137_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_ng_template_842_div_301_tr_137_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_ng_template_842_div_301_tr_137_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_842_div_301_tr_137_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_ng_template_842_div_301_tr_137_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ClaimsComponent_ng_template_842_div_301_tr_137_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClaimsComponent_ng_template_842_div_301_tr_137_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ClaimsComponent_ng_template_842_div_301_tr_137_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "09/17/18 [Stat]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 162)(19, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r643 = ctx.$implicit;
    const ctx_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.ins_ar == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.ins_ar != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r643.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r630.claim_clicked.touch);
  }
}
function ClaimsComponent_ng_template_842_div_301_div_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r661 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "i", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_div_301_div_155_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r661);
      const x_r659 = restoredCtx.$implicit;
      const ctx_r660 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](811);
      ctx_r660.open(_r61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r660.editnotes("processnote", x_r659.content, x_r659.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r659 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r659.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r659.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r659.content, ". ");
  }
}
function ClaimsComponent_ng_template_842_div_301_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_842_div_301_div_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r662 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r662.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r662.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r662.content, ". ");
  }
}
function ClaimsComponent_ng_template_842_div_301_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_842_div_301_div_194_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r663 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", y_r663.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, y_r663.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", y_r663.content, ". ");
  }
}
function ClaimsComponent_ng_template_842_div_301_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_842_div_301_div_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 333)(1, "p", 326)(2, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r664 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", x_r664.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, x_r664.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", x_r664.content, ". ");
  }
}
function ClaimsComponent_ng_template_842_div_301_div_213_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClaimsComponent_ng_template_842_div_301_app_atom_spinner_214_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-atom-spinner", 212);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function ClaimsComponent_ng_template_842_div_301_Template(rf, ctx) {
  if (rf & 1) {
    const _r666 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 334)(1, "div", 241)(2, "div", 74)(3, "div", 242)(4, "div", 3)(5, "div", 243)(6, "div", 16)(7, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 19)(11, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 245)(14, "div", 13)(15, "div", 1)(16, "div", 246)(17, "div", 247)(18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "button", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 249)(25, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "svg", 251)(27, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "defs", 252)(30, "path", 253)(31, "path", 254)(32, "path", 255)(33, "path", 256)(34, "path", 257)(35, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "text", 259)(37, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "text", 261)(40, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 25)(43, "div", 1)(44, "div", 264)(45, "table", 265)(46, "tbody")(47, "tr")(48, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "tr")(53, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "tr")(58, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "tr")(64, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 267)(69, "table", 265)(70, "tbody")(71, "tr")(72, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "tr")(90, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, ClaimsComponent_ng_template_842_div_301_td_92_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](93, ClaimsComponent_ng_template_842_div_301_td_93_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, ClaimsComponent_ng_template_842_div_301_td_94_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "tr")(96, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "div", 272)(102, "div", 273)(103, "div", 3)(104, "div", 243)(105, "div", 16)(106, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](107, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "div", 19)(110, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](111, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "div", 25)(113, "div", 276)(114, "table", 277)(115, "thead")(116, "tr")(117, "th", 162)(118, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "th", 162)(121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "th", 162)(124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "th", 162)(127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](128, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "th", 162)(130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "th", 162)(133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](135, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](137, ClaimsComponent_ng_template_842_div_301_tr_137_Template, 21, 11, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "div", 272)(139, "div", 273)(140, "div", 3)(141, "div", 243)(142, "div", 16)(143, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](144, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](145, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "div", 19)(147, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_div_301_Template_a_click_147_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r666);
      const ctx_r665 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](811);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r665.open(_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](148, "i", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](152, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "div", 339)(154, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](155, ClaimsComponent_ng_template_842_div_301_div_155_Template, 11, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](156, ClaimsComponent_ng_template_842_div_301_div_156_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](157, "div", 272)(158, "div", 273)(159, "div", 3)(160, "div", 243)(161, "div", 290)(162, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](163, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](164, " QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](165, "div", 19)(166, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](167, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](168, "div", 339)(169, "div", 1)(170, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](171, ClaimsComponent_ng_template_842_div_301_div_171_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](172, ClaimsComponent_ng_template_842_div_301_div_172_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "div", 272)(174, "div", 273)(175, "div", 3)(176, "div", 243)(177, "div", 16)(178, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](179, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](180, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "div", 19)(182, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_div_301_Template_a_click_182_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r666);
      const ctx_r667 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r667.send_calim_det("claims"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](183, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](186, "a", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_div_301_Template_a_click_186_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r666);
      const ctx_r668 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r668.send_calim_det("claims"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](187, "i", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](189, "F.Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](191, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "div", 339)(193, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](194, ClaimsComponent_ng_template_842_div_301_div_194_Template, 10, 6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](195, ClaimsComponent_ng_template_842_div_301_div_195_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](196, "div", 272)(197, "div", 273)(198, "div", 3)(199, "div", 243)(200, "div", 290)(201, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](202, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](203, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](204, "div", 19)(205, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](206, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](207, "div", 298)(208, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_div_301_Template_button_click_208_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r666);
      const x_r626 = restoredCtx.$implicit;
      const ctx_r669 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r669.close_tab(x_r626));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](209, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](210, "div", 339)(211, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](212, ClaimsComponent_ng_template_842_div_301_div_212_Template, 10, 6, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](213, ClaimsComponent_ng_template_842_div_301_div_213_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](214, ClaimsComponent_ng_template_842_div_301_app_atom_spinner_214_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](215, "div", 295)(216, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](217, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](218, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](219, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "div", 300)(221, "div", 301)(222, "div", 1)(223, "h4", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](224, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "form", 303)(227, "div", 304)(228, "div", 305)(229, "div", 306)(230, "div", 307)(231, "div", 187)(232, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](233, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](234, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](235, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](236, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](237, "div", 305)(238, "div", 306)(239, "div", 307)(240, "div", 187)(241, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](242, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](243, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](244, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](245, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](246, "div", 305)(247, "div", 306)(248, "div", 307)(249, "div", 187)(250, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](251, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](252, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](253, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](254, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](255, "div", 305)(256, "div", 306)(257, "div", 309)(258, "div", 187)(259, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](260, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](262, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](263, "select", 310)(264, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](265, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](266, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](267, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](268, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](269, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](270, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](271, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "span", 311)(273, "span", 312)(274, "span", 346)(275, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](276, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](278, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](279, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r626 = ctx.$implicit;
    const ctx_r595 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", x_r626.claim_no === ctx_r595.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", x_r626.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r626.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r626.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](62, 28, x_r626.dob, "MM/dd/yyyy"), ", ", x_r626.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", x_r626.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", x_r626.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", x_r626.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", x_r626.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r626.prim_ins_name != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r626.sec_ins_name != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", x_r626.ter_ins_name != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r595.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r595.active_refer_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r595.active_refer_process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r595.active_refer_qc);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r595.active_refer_qc.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#y", x_r626.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "#x", x_r626.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r595.active_refer_claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r595.active_refer_claim.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r595.active_refer_client);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r595.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r595.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "x", x_r626.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "y", x_r626.id, "");
  }
}
function ClaimsComponent_ng_template_842_Template(rf, ctx) {
  if (rf & 1) {
    const _r671 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 180)(1, "button", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r671);
      const ctx_r670 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r670.modalRef == null ? null : ctx_r670.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r670.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ul", 234)(5, "li", 235)(6, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r671);
      const ctx_r672 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      ctx_r672.selected_tab("maintab");
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r672.get_line_items(ctx_r672.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h4", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_ng_template_842_li_9_Template, 7, 4, "li", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 239)(11, "div", 240)(12, "div", 241)(13, "div", 74)(14, "div", 242)(15, "div", 3)(16, "div", 243)(17, "div", 16)(18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 245)(25, "div", 13)(26, "div", 1)(27, "div", 246)(28, "div", 247)(29, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 19)(33, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 249)(36, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "svg", 251)(38, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "defs", 252)(41, "path", 253)(42, "path", 254)(43, "path", 255)(44, "path", 256)(45, "path", 257)(46, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "text", 259)(48, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "text", 261)(51, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "svg", 251)(54, "desc", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "defs", 252)(57, "path", 253)(58, "path", 254)(59, "path", 255)(60, "path", 256)(61, "path", 257)(62, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "text", 259)(64, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "text", 261)(67, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 263)(70, "div", 1)(71, "div", 264)(72, "table", 265)(73, "tbody")(74, "tr")(75, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "tr")(82, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "tr")(89, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](92, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](95, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "tr")(97, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](98, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](100, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 267)(104, "table", 265)(105, "tbody")(106, "tr")(107, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](112, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](117, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "tr")(125, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "tr")(134, "td", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, ": Commercial [Static]");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](138, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "div", 269)(140, "h4", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](141, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "table", 271)(143, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](144, ClaimsComponent_ng_template_842_tr_144_Template, 2, 1, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "div", 272)(146, "div", 273)(147, "div", 3)(148, "div", 243)(149, "div", 16)(150, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](151, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "div", 19)(154, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](155, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "div", 275)(157, "div", 276)(158, "table", 277)(159, "thead")(160, "tr")(161, "th", 162)(162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](163, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "th", 162)(165, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](166, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "th", 162)(168, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "th", 162)(171, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](172, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "th", 162)(174, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](175, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "th", 162)(177, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](179, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](181, ClaimsComponent_ng_template_842_tr_181_Template, 21, 11, "tr", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](182, "div", 278)(183, "div", 19)(184, "a", 279)(185, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "a", 281)(188, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](189, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "div", 284)(191, "div", 273)(192, "div", 3)(193, "div", 243)(194, "div", 16)(195, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](196, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](197, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](198, "div", 19)(199, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](200, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](201, "div", 286)(202, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](203, ClaimsComponent_ng_template_842_div_203_Template, 10, 6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](204, ClaimsComponent_ng_template_842_div_204_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](205, ClaimsComponent_ng_template_842_app_atom_spinner_205_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](206, "div", 289)(207, "div", 273)(208, "div", 3)(209, "div", 243)(210, "div", 290)(211, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](212, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](213, " QC Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](214, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](215, ClaimsComponent_ng_template_842_a_215_Template, 1, 1, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](216, "button", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](217, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](218, "div", 293)(219, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](220, ClaimsComponent_ng_template_842_div_220_Template, 17, 8, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](221, ClaimsComponent_ng_template_842_div_221_Template, 3, 0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](222, ClaimsComponent_ng_template_842_app_atom_spinner_222_Template, 1, 2, "app-atom-spinner", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](223, "div", 295)(224, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](225, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](227, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](228, "div", 298)(229, "button", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_ng_template_842_Template_button_click_229_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r671);
      const ctx_r673 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r673.modalRef == null ? null : ctx_r673.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](230, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](231, "div", 300)(232, "div", 301)(233, "div", 1)(234, "h4", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](235, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](236, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](237, "form", 303)(238, "div", 304)(239, "div", 305)(240, "div", 306)(241, "div", 307)(242, "div", 187)(243, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](244, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](245, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](246, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](247, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](248, "div", 305)(249, "div", 306)(250, "div", 307)(251, "div", 187)(252, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](253, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](254, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](255, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](256, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "div", 305)(258, "div", 306)(259, "div", 307)(260, "div", 187)(261, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](262, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](263, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](264, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](265, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](266, "div", 305)(267, "div", 306)(268, "div", 309)(269, "div", 187)(270, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](271, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](273, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](274, "select", 310)(275, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](276, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](278, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](279, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](280, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](281, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](282, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](283, "span", 311)(284, "span", 312)(285, "span", 313)(286, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](287, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](289, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](290, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](291, "form", 303)(292, "div", 25)(293, "div", 74)(294, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](295, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](296, "textarea", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](297, "button", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](298, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](299, "button", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](300, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](301, ClaimsComponent_ng_template_842_div_301_Template, 280, 31, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r94.main_tab == ctx_r94.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r94.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r94.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r94.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r94.claim_clicked.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r94.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](95, 27, ctx_r94.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r94.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r94.claim_clicked.ssn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r94.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r94.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", ctx_r94.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r94.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r94.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](": ", ctx_r94.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r94.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r94.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r94.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r94.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r94.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r94.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r94.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r94.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r94.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r94.refer_claim_det);
  }
}
const ngxUiLoaderConfig = {
  // bgsColor: '#OOACC1',
  // bgsOpacity: 20,
  // bgsPosition: POSITION.centerCenter,
  // bgsSize: 60,
  // bgsType: SPINNER.threeStrings,
  fgsColor: '#00ACC1',
  fgsPosition: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.POSITION.centerCenter,
  fgsSize: 60,
  fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.SPINNER.threeStrings
  // pbColor: '#00ACC1',
  // pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 5,
};

class ClaimsComponent {
  constructor(formBuilder, Jarwis, setus, loadingBar, modalService, follow, toastr, excelService, export_handler, notify_service, datepipe, date_config, calendar, notes_hadler, formatter, modal, el, renderer, datePipe, auth, loader, router) {
    this.formBuilder = formBuilder;
    this.Jarwis = Jarwis;
    this.setus = setus;
    this.loadingBar = loadingBar;
    this.modalService = modalService;
    this.follow = follow;
    this.toastr = toastr;
    this.excelService = excelService;
    this.export_handler = export_handler;
    this.notify_service = notify_service;
    this.datepipe = datepipe;
    this.date_config = date_config;
    this.calendar = calendar;
    this.notes_hadler = notes_hadler;
    this.formatter = formatter;
    this.modal = modal;
    this.el = el;
    this.renderer = renderer;
    this.datePipe = datePipe;
    this.auth = auth;
    this.loader = loader;
    this.router = router;
    this.page = "";
    this.createWork = "";
    this.isDesc = false;
    this.column = "dos";
    this.associateCount = '';
    this.filter = '';
    this.assigned = "";
    this.reAssigned = "";
    this.select_date = null;
    this.submit_date = null;
    this.closed_select_date = null;
    // reallocate_billsubmit_date:any;
    // selectedAge = null;
    this.all_selectedAge = null;
    this.closed_selectedAge = null;
    this.reassigned_selectedAge = null;
    // reallocate_selectedAge = null;
    this.age_options = [{
      "from_age": 0,
      "to_age": 30
    }, {
      "from_age": 31,
      "to_age": 60
    }, {
      "from_age": 61,
      "to_age": 90
    }, {
      "from_age": 91,
      "to_age": 120
    }, {
      "from_age": 121,
      "to_age": 180
    }, {
      "from_age": 181,
      "to_age": 365
    }];
    this.claim_statuses = ['Closed', 'Assigned', 'Auditing', 'Audit'];
    this.decimal_pattern = "^\[0-9]+(\.[0-9][0-9])\-\[0-9]+(\.[0-9][0-9])?$";
    this.isSelectedAll = false;
    this.status_codes_data = [];
    this.sub_status_codes_data = [];
    this.results = [];
    this.closed_results = [];
    this.reassigned_results = [];
    this.allclaim_results = [];
    // reallocate_results:any = [];
    this.searchResults = [];
    this.isValueSelected = false;
    this.selected_val = null;
    this.reassignSelected = false;
    this.reassign_selected_val = null;
    this.closedSelected = false;
    this.closed_selected_val = null;
    this.allclaimSelected = false;
    this.allclaim_selected_val = null;
    this.getUserList = [];
    //selected: any;
    this.configure = {
      displayKey: "description",
      search: true,
      result: 'single'
    };
    this.file_name = [];
    this.data = null;
    this.error = null;
    this.fileupload = null;
    this.newclaim = null;
    this.duplicate = null;
    this.mismatch = null;
    this.claimno = null;
    this.filenote = null;
    this.new_claims = [];
    this.duplicate_claims = [];
    this.mismatch_claims = [];
    this.mismatch_claim_nos = 0;
    this.mismatch_claim_data = [];
    this.mismatch_claim_numbers = [];
    this.mismatch_claim_data_value = [];
    this.mismatch_claim_data_mismatch = [];
    this.mismatch_claim_number_sort = [];
    this.new_claim_data = [];
    this.file_upload = undefined;
    this.error_occur = true;
    this.input_data = [];
    this.closeResult = '';
    this.old_value = [];
    this.new_value = [];
    this.fieldselect = [];
    this.roles = [];
    this.datas = [];
    this.importProcessed = 1;
    this.mismatch_field_list = [];
    this.mismatch_selected = '';
    this.table_datas_list = [];
    this.field_name = [];
    this.sortByAsc = true;
    this.editnote_value = null;
    this.formdata = new FormData();
    // formGroup: FormGroup;
    this.submitted = false;
    this.submitUser = false;
    this.userEnabled = false;
    this.auditClaimsEnabled = false;
    this.dependentUserOptions = [];
    this.checkAuditClaims = [];
    this.tabdat = ['date', 'file_name', 'claims', 'newclaims', 'uploaded'];
    this.reimport_tabdat = ['date', 'file_name', 'claims', 'uploaded'];
    this.myDate = new Date();
    this.name = 'Angular';
    this.selecteds = null;
    this.selectedClosed = null;
    this.ranges = {
      'Today': [moment__WEBPACK_IMPORTED_MODULE_1__(), moment__WEBPACK_IMPORTED_MODULE_1__()],
      'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days')],
      'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
      'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
      'This Month': [moment__WEBPACK_IMPORTED_MODULE_1__().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_1__().endOf('month')],
      'Last Month': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month')]
    };
    this.invalidDates = [moment__WEBPACK_IMPORTED_MODULE_1__().add(2, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().add(3, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().add(5, 'days')];
    this.isInvalidDate = m => {
      return this.invalidDates.some(d => d.isSame(m, 'day'));
    };
    this.paginationSizeValue_createWorkOrders = 15;
    this.paginationSizeValue_WorkOrders = 15;
    this.paginationSizeValue_ClosedClaims = 15;
    this.paginationSizeValue_Import = 15;
    this.paginationSizeValue_reimport = 15;
    this.paginationSizeValue_AllClaims = 15;
    this.paginationSizeValue_DuplicateClaims = 15;
    this.paginationSizeValue_MismatchedValues = 15;
    //Red Alerrt Box
    this._opened = false;
    this.isOpen = false;
    this._positionNum = 0;
    this._modeNum = 1;
    this._MODES = ['push'];
    this._POSITIONS = ['right'];
    this.upload_total = 0;
    this.reimport_roles = [];
    this.reimport_upload_total = 0;
    this.total_row_reimport = 0;
    this.reimport_page = 0;
    this.reimport_total = 0;
    //Create Work Order Tab Functions*****
    this.table_fields = [];
    this.table_datas = [];
    this.claim_related = [];
    this.process_notes = [];
    this.claim_notes = [];
    this.line_data = [];
    this.tooltipOptions = {
      'placement': 'right',
      'show-delay': '200',
      'tooltip-class': 'new-tooltip-class',
      'background-color': '#9ad9e4',
      'margin-top': '20px'
    };
    this.confirmation_type = '';
    this.reassign_claim = '';
    this.curr_reassigned_claims = [];
    this.reassign_allocation = true;
    /*get_related(claim)
    {
     this.Jarwis.get_related_calims(claim,'followup',this.setus.getId()).subscribe(
       data  => this.list_related(data),
       error => this.handleError(error)
       );
    }
          list_related(claims)
    {
     this.claim_related = claims.data;
    }*/
    this.edit_permission = false;
    //Refer Claim Clicked Action
    this.refer_claim_det = [];
    this.refer_claim_no = [];
    this.refer_claim_notes_nos = [];
    this.refer_process_notes_nos = [];
    this.refer_qc_notes_nos = [];
    this.refer_client_notes_nos = [];
    this.refer_claim_notes = [];
    this.refer_process_notes = [];
    this.refer_qc_notes = [];
    this.refer_client_notes = [];
    this.main_tab = true;
    this.active_tab = [];
    this.active_refer_claim = [];
    this.active_refer_process = [];
    this.active_refer_qc = [];
    this.active_refer_client = [];
    this.active_claim = [];
    this.refer_claim_editable = 'false';
    this.initial_edit = false;
    //Save Notes
    this.qc_notes_data = [];
    this.qc_notes_data_list = [];
    this.note_edit_val = 0;
    //Send Claim Value to Followup-Template Component on Opening Template
    // public send_calim_det()
    // {
    //   if(this.main_tab==true)
    //   {
    //     this.follow.setvalue(this.claim_clicked['claim_no']);
    //   }
    //   else
    //   {
    //     this.follow.setvalue(this.active_claim)
    //   }
    //  }
    //Create Work Order
    this.check_all = [];
    this.selected_claims = [];
    this.selected_claim_nos = [];
    this.associates_detail = [];
    this.claim_assign_type = 'null';
    this.selected_associates = [];
    //Manual Assign Function
    this.assigned_claims_details = [];
    this.associate_error = '';
    this.associate_error_handler = [];
    this.assigned_claim_nos = 0;
    this.assigned_data = [];
    this.limit_clearance = false;
    this.limit_exceeds = [];
    this.claim_proceed = true;
    //associateCount : any [] = [];
    //Assign Claims to Associates
    this.claims_assigned = [];
    this.assign_status = [];
    this.associates_error_status = true;
    this.null_assigned = true;
    this.isChecked = true;
    /* reallocateclaims_filter;
    reallocateClaims_search(page: number, table, sort_data, sort_type, sorting_name, sorting_method, reallocatesearch, searchdata) {
      this.reallocateclaims_filter = searchdata;
      console.log(searchdata);
      this.pageChange(page, table, sort_data, sort_type, sorting_name, sorting_method, reallocatesearch, searchdata);
    } */
    //Table to list claims and Pagination
    this.upload_page = 0;
    this.pages = 0;
    this.total = 0;
    this.allclaim_pages = 0;
    this.allclaim_total = 0;
    this.reallocate_pages = 0;
    this.claim_status_codes = [];
    this.claim_sub_status_codes = [];
    this.selected_status_code = [];
    this.selected_sub_status_code = [];
    this.selected_filter_type = [];
    this.GridData_CreateWorkOrders = [];
    this.GridData_WorkOrders = [];
    this.GridData_ClosedClaims = [];
    this.GridData_Import = [];
    this.GridData_ReImport = [];
    this.GridData_AllClaims = [];
    this.ReloadData = [];
    //Reallocate Table data and `total values
    /* reallocate_table_datas = [];
    reallocate_current_total;
    reallocate_skip;
    reallocate_total_row;
    reallocate_skip_row;
    reallocate_current_row;
    reallocate_selected_claim_data;
    reallocate_cwo_total;
    public reallocate_page_data(data) {
      this.reallocate_table_datas = data.data;
      this.reallocate_selected_claim_data = data.selected_claim_data;
      this.reallocate_cwo_total = data.total;
      this.reallocate_current_total = data.current_total;
      this.reallocate_skip = data.skip + 1;
             this.reallocate_skip_row = this.reallocate_skip;
      this.reallocate_current_row = this.reallocate_skip + this.reallocate_current_total - 1;
      this.reallocate_total_row = data.total;
    } */
    this.searchData = '';
    this.wo_page_number = 1;
    this.work_order_data = [];
    this.closed_page_number = 1;
    this.closed_data = [];
    this.wo_total = 0;
    this.closed_total = 0;
    this.closed_pages = 0;
    this.wo_details = [];
    this.wo_name = '';
    this.wo_created = '';
    this.line_item_data = [];
    this.touch_count = 0;
    this.myOptions = {
      'placement': 'right',
      'hide-delay': 3000,
      'theme': 'light'
    };
    // graph_data=[];
    // graph_data_year=[];
    this.insurance_table_data = [];
    this.insurance_total = [];
    this.insurance_per = [];
    this.status_data = [];
    this.status_total = [];
    this.status_perc = [];
    this.assoc_data = [];
    this.assoc_total = [];
    this.assoc_perc = [];
    this.insurance_table_data_count = 0;
    this.status_data_count = 0;
    this.assoc_data_count = 0;
    this.detailed_claims = [];
    this.week_count = [];
    this.assoc_target_data = [];
    this.assoc_ach_data = [];
    this.class_change = [];
    this.class_change_tab = [];
    this.currentPageData = [];
    this.resl_dta = [];
    this.selectedRows = [];
    this.cdtn = false;
    this.defaultColDef = {
      editable: false,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: false,
      resizable: false,
      filter: false
    };
    this.columnDefs1 = [{
      field: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 40
    }, {
      field: 'touch',
      headerName: '',
      sortable: true,
      width: 40,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px',
          'width': 'auto'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'touch')
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 90,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 100,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'dos'),
      onCellClicked: this.CellClicked.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 65,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'age'),
      onCellClicked: this.CellClicked.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 85,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      width: 208,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 164,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'rendering_prov'),
      onCellClicked: this.CellClicked.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 128,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'responsibility'),
      onCellClicked: this.CellClicked.bind(this, 'responsibility')
    }, {
      field: 'prim_ins_name',
      headerName: 'Primary',
      sortable: true,
      width: 220,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'prim_ins_name'),
      onCellClicked: this.CellClicked.bind(this, 'prim_ins_name')
    }, {
      field: 'sec_ins_name',
      headerName: 'Secondary',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'sec_ins_name'),
      onCellClicked: this.CellClicked.bind(this, 'sec_ins_name')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 123,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'total_charges'),
      onCellClicked: this.CellClicked.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 107,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'total_ar'),
      onCellClicked: this.CellClicked.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 118,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_Status'),
      onCellClicked: this.CellClicked.bind(this, 'claim_Status')
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 115,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'denial_code'),
      onCellClicked: this.CellClicked.bind(this, 'denial_code')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 125,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'billed_submit_date'),
      onCellClicked: this.CellClicked.bind(this, 'billed_submit_date')
    }, {
      field: 'claim_note',
      headerName: 'Claim Note',
      sortable: true,
      width: 105,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_note'),
      onCellClicked: this.CellClicked.bind(this, 'claim_note')
    }, {
      field: 'created_at',
      headerName: 'Assigned To|Date',
      sortable: true,
      width: 140,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'created_at'),
      onCellClicked: this.CellClicked.bind(this, 'created_at')
    }];
    this.columnDefs2 = [{
      field: 'created',
      headerName: 'Created | Date',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'created'),
      onCellClicked: this.CellClicked_2.bind(this, 'created'),
      headerClass: 'no-header-border'
    }, {
      field: 'work_order_name',
      headerName: 'Work Order Name',
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered_2.bind(this, 'work_order_name'),
      onCellClicked: this.CellClicked_2.bind(this, 'work_order_name'),
      headerClass: 'no-header-border'
    }, {
      field: 'assigned_nos',
      headerName: 'Claim Count',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'assigned_nos'),
      onCellClicked: this.CellClicked_2.bind(this, 'assigned_nos'),
      headerClass: 'no-header-border'
    }, {
      field: 'due_date',
      headerName: 'Due Date',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'due_date'),
      onCellClicked: this.CellClicked_2.bind(this, 'due_date'),
      headerClass: 'no-header-border'
    }, {
      field: 'billed',
      headerName: 'Billed',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'billed'),
      onCellClicked: this.CellClicked_2.bind(this, 'billed'),
      headerClass: 'no-header-border'
    }, {
      field: 'ar_due',
      headerName: 'AR Due',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'ar_due'),
      onCellClicked: this.CellClicked_2.bind(this, 'ar_due'),
      headerClass: 'no-header-border'
    }, {
      field: 'status',
      headerName: 'WO Status',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'status'),
      onCellClicked: this.CellClicked_2.bind(this, 'status'),
      headerClass: 'no-header-border'
    }, {
      field: 'priority',
      headerName: 'Priority',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'priority'),
      onCellClicked: this.CellClicked_2.bind(this, 'priority'),
      headerClass: 'no-header-border'
    }, {
      field: 'work_notes',
      headerName: 'Wo Notes',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered_2.bind(this, 'work_notes'),
      onCellClicked: this.CellClicked_2.bind(this, 'work_notes'),
      headerClass: 'no-header-border'
    }];
    this.columnDefs3 = [{
      field: 'touch',
      headerName: '',
      sortable: true,
      width: 45,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'touch')
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked3.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'dos')
      // onCellClicked: this.CellClicked3.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'age')
      // onCellClicked: this.CellClicked3.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked3.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked3.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'rendering_prov')
      // onCellClicked: this.CellClicked3.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'responsibility')
      // onCellClicked: this.CellClicked3.bind(this, 'responsibility')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'total_charges')
      // onCellClicked: this.CellClicked3.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'total_ar')
      // onCellClicked: this.CellClicked3.bind(this, 'total_ar')
    }, {
      field: 'claim_note',
      headerName: 'Claim Note',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'claim_note')
      // onCellClicked: this.CellClicked3.bind(this, 'claim_note')
    }, {
      field: 'created_ats',
      headerName: 'Assigned To|Date',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered3.bind(this, 'created_ats')
      // onCellClicked: this.CellClicked3.bind(this, 'created_at')
    }];

    this.columnDefs4 = [{
      field: 'date',
      headerName: 'Date',
      width: 250,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered4.bind(this, 'date')
    }, {
      field: 'file_name',
      headerName: 'File Name',
      width: 800,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered4.bind(this, 'file_name')
    }, {
      field: 'claims',
      headerName: 'Claims',
      sortable: true,
      width: 160,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'claims')
    }, {
      field: 'newclaims',
      headerName: 'New Claims',
      sortable: true,
      width: 160,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'newclaims')
    }, {
      field: 'uploaded',
      headerName: 'Uploaded By',
      sortable: true,
      width: 160,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'uploaded')
    }, {
      field: 'notes',
      headerName: 'Notes',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'notes')
    }, {
      field: 'download',
      headerName: '',
      sortable: true,
      width: 20,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'download'),
      onCellClicked: this.CellClicked4.bind(this, 'download')
    }, {
      field: 'delete',
      headerName: '',
      sortable: true,
      width: 20,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'delete'),
      onCellClicked: this.CellClicked4.bind(this, 'delete')
    }, {
      field: 'settings',
      headerName: '',
      sortable: true,
      width: 20,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'settings'),
      onCellClicked: this.CellClicked4.bind(this, 'settings')
    }];
    this.columnDefs5 = [{
      field: 'date',
      headerName: 'Date',
      width: 250,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered4.bind(this, 'date')
    }, {
      field: 'file_name',
      headerName: 'File Name',
      width: 500,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered4.bind(this, 'file_name')
    }, {
      field: 'claims',
      headerName: 'Claims',
      sortable: true,
      width: 210,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'claims')
    }, {
      field: 'uploaded',
      headerName: 'Uploaded By',
      sortable: true,
      width: 210,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'uploaded')
    }, {
      field: 'notes',
      headerName: 'Notes',
      sortable: true,
      width: 210,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered4.bind(this, 'notes')
    }];
    this.columnDefs6 = [{
      field: 'touch',
      headerName: '',
      width: 45,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered6.bind(this, 'touch')
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      minWidth: 60,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked5.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 110,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'dos'),
      onCellClicked: this.CellClicked5.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 90,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'age'),
      onCellClicked: this.CellClicked5.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 105,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked5.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked5.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 175,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 130,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'responsibility')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 140,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'billed_submit_date')
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 130,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'denial_code')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 125,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 110,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 120,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'claim_Status')
    }, {
      field: 'assigned_to',
      headerName: 'Assigned To | Date',
      sortable: true,
      width: 160,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'assigned_to')
    }, {
      field: 'created_ats',
      headerName: 'Executive Work Date',
      sortable: true,
      width: 170,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '15px !important'
        };
      },
      cellRenderer: this.cellrendered6.bind(this, 'created_ats')
    }];
    this.columnDefs7 = [{
      field: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 40
    }, {
      field: 'touch',
      headerName: '',
      sortable: true,
      width: 40,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px',
          'width': 'auto'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'touch')
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 90,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 100,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'dos'),
      onCellClicked: this.CellClicked.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 65,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'age'),
      onCellClicked: this.CellClicked.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 85,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      width: 208,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 164,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'rendering_prov'),
      onCellClicked: this.CellClicked.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 128,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'responsibility'),
      onCellClicked: this.CellClicked.bind(this, 'responsibility')
    }, {
      field: 'prim_ins_name',
      headerName: 'Primary',
      sortable: true,
      width: 220,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'prim_ins_name'),
      onCellClicked: this.CellClicked.bind(this, 'prim_ins_name')
    }, {
      field: 'sec_ins_name',
      headerName: 'Secondary',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'sec_ins_name'),
      onCellClicked: this.CellClicked.bind(this, 'sec_ins_name')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 123,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'total_charges'),
      onCellClicked: this.CellClicked.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 107,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'total_ar'),
      onCellClicked: this.CellClicked.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 118,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_Status'),
      onCellClicked: this.CellClicked.bind(this, 'claim_Status')
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 115,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'denial_code'),
      onCellClicked: this.CellClicked.bind(this, 'denial_code')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 125,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'billed_submit_date'),
      onCellClicked: this.CellClicked.bind(this, 'billed_submit_date')
    }, {
      field: 'claim_note',
      headerName: 'Claim Note',
      sortable: true,
      width: 105,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_note'),
      onCellClicked: this.CellClicked.bind(this, 'claim_note')
    }, {
      field: 'created_at',
      headerName: 'Assigned To|Date',
      sortable: true,
      width: 140,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'created_at'),
      onCellClicked: this.CellClicked.bind(this, 'created_at')
    }];
    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      suppressMenuHide: false,
      rowSelection: 'multiple',
      rowHeight: 35,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_createWorkOrders,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.gridOptions2 = {
      rowSelection: 'multiple',
      rowHeight: 34,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_WorkOrders,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.gridOptions3 = {
      rowSelection: 'multiple',
      rowHeight: 34,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_ClosedClaims,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.gridOptions4 = {
      rowSelection: 'multiple',
      suppressDragLeaveHidesColumns: true,
      rowHeight: 40,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_Import,
      suppressContextMenu: true
    };
    this.gridOptions5 = {
      rowSelection: 'multiple',
      rowHeight: 37,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_reimport,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.gridOptions6 = {
      rowSelection: 'multiple',
      rowHeight: 30,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_AllClaims,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.gridOptions7 = {
      rowSelection: 'multiple',
      rowHeight: 30,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_DuplicateClaims,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.gridOptions8 = {
      rowSelection: 'multiple',
      rowHeight: 30,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_MismatchedValues,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true
    };
    this.isCollapsed_CreateWorkOrders = true;
    this.isCollapsed_WorkOrdes = true;
    this.isCollapsed_ClosedClaims = true;
    this.isCollapsed_AllClaims = true;
    this.new_cdtn = false;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.config = {
      backdrop: true,
      animated: true,
      keyboard: false,
      ignoreBackdropClick: true,
      containerClass: 'theme-default'
    };
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-default',
      rangeInputFormat: 'MM/DD/YYYY',
      dateInputFormat: 'MM/DD/YYYY',
      showWeekNumbers: false,
      isAnimated: true,
      adaptivePosition: true
    });
    this.sideBar = {
      toolPanels: [{
        id: 'columns',
        labelDefault: 'Columns Visibility',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
          suppressColumnFilter: false,
          suppressColumnSelectAll: false
        }
      }],
      defaultToolPanel: 'columns'
    };
    this.autoGroupColumnDef = {
      minWidth: 200
    };
    //this.alwaysShowCalendars = true;
    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.observalble = this.setus.update_edit_perm().subscribe(message => {
      this.check_edit_permission(message);
    });
    this.response_data = this.notes_hadler.get_response_data('audit').subscribe(message => {
      this.collect_response(message);
    });
    this.alwaysShowCalendars = true;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.bsRangeValue = [this.minDate, this.maxDate];
  }
  get v() {
    return this.qcNotes.controls;
  }
  redalert() {
    this._opened = !this._opened;
  }
  mynotes() {
    this.isOpen = !this.isOpen;
  }
  _togglePosition() {
    this._positionNum++;
    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }
  _toggleMode() {
    this._modeNum++;
    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }
  onFileChange(evt) {
    /* wire up file reader */
    const target = evt.target;
    console.log('Length', target.files.length);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader = new FileReader();
    reader.onload = e => {
      /* read workbook */
      const bstr = e.target.result;
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_16__.read(bstr, {
        type: 'binary'
      });
      /* grab first sheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* save data */
      this.data = xlsx__WEBPACK_IMPORTED_MODULE_16__.utils.sheet_to_json(ws, {
        header: 2
      });
      console.log(target.files[0]['name'].length);
      if (this.data.length != 0 && target.files[0].type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" && target.files[0]['name'].length <= 200) {
        this.formdata.append('file_name', target.files[0]);
        this.formdata.append('user_id', this.setus.getId());
        console.log('FormData', this.formdata);
        this.filenote = "";
      } else if (target.files[0]['name'].length > 200) {
        this.formGroup.controls['file'].reset();
        this.toastr.errorToastr('Upload another file.', 'File Name too long!');
      } else {
        // console.log("Name",target.files[0]['name'].length);
        // console.log("Name",target.files[0]['name'].length);
        this.formGroup.controls['file'].reset();
        // this.filenote="Invalid File";
        this.toastr.errorToastr('Invalid File.', 'Oops!');
        // setTimeout(()=>{
        //   this.filenote = "";
        //   }, 1000);
      }
    };

    reader.readAsBinaryString(target.files[0]);
  }
  onReimport_FileChange(event) {
    /* wire up file reader */
    const target = event.target;
    console.log(target.files.length);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader = new FileReader();
    reader.onload = ele => {
      /* read workbook */
      const bstr = ele.target.result;
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_16__.read(bstr, {
        type: 'binary'
      });
      /* grab first sheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* save data */
      this.data = xlsx__WEBPACK_IMPORTED_MODULE_16__.utils.sheet_to_json(ws, {
        header: 2
      });
      console.log(target.files[0]['name'].length);
      if (this.data.length != 0 && target.files[0].type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" && target.files[0]['name'].length <= 200) {
        this.formdata.append('file_name', target.files[0]);
        this.formdata.append('user_id', this.setus.getId());
        console.log(this.formdata);
        this.filenote = "";
      } else if (target.files[0]['name'].length > 200) {
        this.reimport_formGroup.controls['file'].reset();
        this.toastr.errorToastr('Upload another file.', 'File Name too long!');
      } else {
        // console.log("Name",target.files[0]['name'].length);
        // console.log("Name",target.files[0]['name'].length);
        this.reimport_formGroup.controls['file'].reset();
        // this.filenote="Invalid File";
        this.toastr.errorToastr('Invalid File.', 'Oops!');
        // setTimeout(()=>{
        //   this.filenote = "";
        //   }, 1000);
      }
    };

    reader.readAsBinaryString(target.files[0]);
  }
  onAutocc_FileChange(evt) {
    /* wire up file reader */
    const target = evt.target;
    console.log(target.files.length);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader = new FileReader();
    reader.onload = e => {
      /* read workbook */
      const bstr = e.target.result;
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_16__.read(bstr, {
        type: 'binary'
      });
      /* grab first sheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* save data */
      this.data = xlsx__WEBPACK_IMPORTED_MODULE_16__.utils.sheet_to_json(ws, {
        header: 2
      });
      console.log(target.files[0]['name'].length);
      if (this.data.length != 0 && target.files[0].type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" && target.files[0]['name'].length <= 200) {
        this.formdata.append('file_name', target.files[0]);
        this.formdata.append('user_id', this.setus.getId());
        console.log(this.formdata);
        this.filenote = "";
      } else if (target.files[0]['name'].length > 200) {
        this.autoclose_claim.controls['file'].reset();
        this.toastr.errorToastr('Upload another file.', 'File Name too long!');
      } else {
        // console.log("Name",target.files[0]['name'].length);
        // console.log("Name",target.files[0]['name'].length);
        this.autoclose_claim.controls['file'].reset();
        // this.filenote="Invalid File";
        this.toastr.errorToastr('Invalid File.', 'Oops!');
        // setTimeout(()=>{
        //   this.filenote = "";
        //   }, 1000);
      }
    };

    reader.readAsBinaryString(target.files[0]);
  }
  ignore_function() {
    this.Jarwis.updateingnore(this.file_upload_id).subscribe(message => this.updateignore(message), error => this.notify(error));
  }
  ignore() {
    this.duplicate = 0;
    this.toastr.successToastr('Successfully');
  }
  updateignore(message) {
    this.importProcessed = 1;
    console.log('Ignore', message);
    // this.process_uld_file(message.upload_id);
  }

  handlesuccess(res) {
    this.filecount = res.file_datas;
    console.log(this.filecount);
  }
  handlemessage(message) {
    // console.log("Handle",message);
    //assigning backend values to frontend
    // console.log('In coming message',message);
    // message = null;
    // console.log('OUT coming message',message);
    if (message) {
      this.toastr.successToastr('Uploaded');
      this.newclaim = message.message.display_claims.new_filter.length;
      this.duplicate = message.message.display_claims.duplicate_filter.length;
      this.duplicates = message.message.display_claims.filedata.total_claims;
      this.mismatch = message.message.display_claims.mismatch_nos;
      console.log('mismatch' + this.mismatch);
      this.claimno = message.message.display_claims.mismatch_nos;
      this.new_claims = message.message.display_claims.new_filter_data;
      this.duplicate_claims = message.message.display_claims.duplicate_filter;
      this.mismatch_claims = message.message.display_claims.mismatch_data;
      this.mismatch_claim_nos = message.message.display_claims.mismatch_nos;
      this.new_claim_data = message.message.display_claims.new_datas;
      this.file_upload = message.message.display_claims.filedata;
      this.file_upload_id = message.message.display_claims.filedata.id;
      console.log(message.message.display_claims.filedata.id);
      this.field_name = message.message.field_name;
      this.claims_processed = message.message.display_claims.filedata.claims_processed;
      // console.log("Field",this.field_name)
      //Mismatch data Keys
      this.mismatch_claim_numbers = Object.keys(message.message.display_claims.mismatch_data);
      this.mismatch_claim_number_sort = this.mismatch_claim_numbers;
      let z = [];
      let x = [];
      let y = [];
      let field_list = [];
      this.mismatch_claim_numbers.forEach(function (value) {
        let keys = value;
        let data = message.message.display_claims.mismatch_data[keys]['midb'];
        let data2 = message.message.display_claims.mismatch_data[keys]['mupd'];
        x[keys] = Object.values(data);
        y[keys] = Object.values(data2);
        z[keys] = Object.keys(data);
        let fields = Object.keys(data);
        for (let i = 0; i < fields.length; i++) {
          let x = field_list.find(x => x == fields[i]);
          if (x == undefined) {
            field_list.push(fields[i]);
          }
        }
      });
      //For Mismatch View
      this.mismatch_field_list = field_list;
      this.old_value = [];
      this.new_value = [];
      this.fieldselect = [];
      this.mismatch_claim_data = z;
      this.mismatch_claim_data_value = x;
      this.mismatch_claim_data_mismatch = y;
      this.loadingBar.stop();
      // this.getclaims();
      this.pageChange(1, 'all', null, null, 'null', 'null', 'null', 'null');
      this.fileupload = "";
      // this.error = message.error;
      // setTimeout(()=>{
      //   this.error = "";
      //   }, 1500);
    } else {
      this.error_occur = false;
    }
  }
  handlemessage_new(message) {
    // console.log("Handle",message);
    //assigning backend values to frontend
    // console.log('In coming message',message);
    // message = null;
    // console.log('OUT coming message',message);
    if (message) {
      this.newclaim = message.message.new_filter.length;
      this.duplicate = message.message.duplicate_filter.length;
      this.duplicates = message.message.filedata.total_claims;
      this.mismatch = message.message.mismatch_nos;
      console.log('mismatch' + this.mismatch);
      this.claimno = message.message.mismatch_nos;
      this.new_claims = message.message.new_filter_data;
      this.duplicate_claims = message.message.duplicate_filter;
      this.mismatch_claims = message.message.mismatch_data;
      this.mismatch_claim_nos = message.message.mismatch_nos;
      this.new_claim_data = message.message.new_datas;
      this.file_upload = message.message.filedata;
      this.file_upload_id = message.message.filedata.id;
      console.log(message.message.filedata.id);
      this.field_name = message.message.field_name;
      this.claims_processed = message.message.filedata.claims_processed;
      // console.log("Field",this.field_name)
      //Mismatch data Keys
      this.mismatch_claim_numbers = Object.keys(message.message.mismatch_data);
      this.mismatch_claim_number_sort = this.mismatch_claim_numbers;
      let z = [];
      let x = [];
      let y = [];
      let field_list = [];
      this.mismatch_claim_numbers.forEach(function (value) {
        let keys = value;
        let data = message.message.mismatch_data[keys]['midb'];
        let data2 = message.message.mismatch_data[keys]['mupd'];
        x[keys] = Object.values(data);
        y[keys] = Object.values(data2);
        z[keys] = Object.keys(data);
        let fields = Object.keys(data);
        for (let i = 0; i < fields.length; i++) {
          let x = field_list.find(x => x == fields[i]);
          if (x == undefined) {
            field_list.push(fields[i]);
          }
        }
      });
      //For Mismatch View
      this.mismatch_field_list = field_list;
      this.old_value = [];
      this.new_value = [];
      this.fieldselect = [];
      this.mismatch_claim_data = z;
      this.mismatch_claim_data_value = x;
      this.mismatch_claim_data_mismatch = y;
      this.loadingBar.stop();
      // this.getclaims();
      this.pageChange(1, 'all', null, null, 'null', 'null', 'null', 'null');
      this.fileupload = "";
      // this.error = message.error;
      // setTimeout(()=>{
      //   this.error = "";
      //   }, 1500);
    } else {
      this.error_occur = false;
    }
  }
  notify(error) {
    //console.log(error);
    this.toastr.errorToastr('Error in Uploading File.');
  }
  handleResponse(data) {
    console.log(data);
    this.roles = data.message;
    console.log('Rols', this.roles);
    this.latest_id = data.latest_id;
    this.importedfile = data.message.filter(x => x.id == this.latest_id);
    console.log(this.importedfile);
    this.importedfile.forEach(element => {
      this.importProcessed = element.processed;
    });
    console.log('ImportProcessed', this.importProcessed);
    this.datas = this.tabdat;
    this.upload_total = data.count;
    this.total = data.count;
    this.current_total = data.current_total;
    this.skip = data.skip + 1;
    this.skip_row_import = this.skip;
    this.current_row_import = this.skip + this.current_total - 1;
    this.total_row_import = data.count;
    if (data) {
      this.GridData_Import = data.message;
      this.myGrid_4.api.setRowData(this.GridData_Import);
      //  this.setAutoHeight();
      this.gridApi_4.closeToolPanel();
      this.loader.stop();
      // this.autoSizeAll();
      console.log('GridData_Import', this.GridData_Import);
    } else {
      this.myGrid_4.api.setRowData([]);
      //  this.setAutoHeight();
      this.gridApi_4.closeToolPanel();
      this.loader.stop();
      // this.autoSizeAll();
      console.log('GridData_Import', this.GridData_Import);
    }
  }
  handleError(error) {
    console.log('Error', error);
  }
  handleResponse_reimport(data) {
    console.log(data);
    if (data.message) {
      this.GridData_ReImport = data.message;
      this.myGrid_5.api.setRowData(this.GridData_ReImport);
      this.loader.stop();
      this.gridApi_5.closeToolPanel();
      // this.autoSizeAll();
      //  this.setAutoHeight();
      console.log('GridData_Remport', this.GridData_ReImport);
    } else {
      this.GridData_ReImport = data.message;
      this.myGrid_5.api.setRowData([]);
      // this.autoSizeAll();
      this.loader.stop();
      //  this.setAutoHeight();
    }

    this.reimport_roles = data.message;
    console.log(this.reimport_roles);
    this.reimport_latest_id = data.latest_id;
    this.reimportedfile = data.message.filter(x => x.id == this.reimport_latest_id);
    console.log(this.reimportedfile);
    this.reimportedfile.forEach(element => {
      this.reimportProcessed = element.processed;
    });
    console.log(this.reimportProcessed);
    this.reimport_datas = this.reimport_tabdat;
    this.reimport_upload_total = data.count;
    this.reimport_total = data.count;
    this.reimport_current_total = data.current_total;
    this.reimport_skip = data.skip + 1;
    this.skip_row_reimport = this.reimport_skip;
    this.current_row_reimport = this.reimport_skip + this.reimport_current_total - 1;
    this.total_row_reimport = data.count;
  }
  // private getclaims()
  // {
  //   this.Jarwis.getclaims(this.setus.getId()).subscribe(
  //     data  => this.handleResponse(data),
  //     error => this.handleError(error)
  //   );
  // }
  filedown(data, name) {
    //console.log("Template",data);
    console.log(data);
    if (data.size == 47) {
      console.log('dfasdas');
      // this.error = "No Preferred Fields";
      this.toastr.errorToastr('No Preferred Fields.');
      // setTimeout(()=>{
      //   this.error = "";
      //   }, 1500);
    } else {
      // FileSaver.saveAs(data, name);
      console.log('dfasdas');
      // this.excelService.exportAsExcelFile(data, 'template');
      this.export_handler.create_template(data);
      this.toastr.successToastr('Download Complete');
    }
  }
  getfile(event, name) {
    this.Jarwis.getfile(event).subscribe(data => {
      file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, name);
      this.toastr.successToastr('Download Complete');
    }, error => {
      this.toastr.errorToastr("File Not Found");
    });
  }
  templates() {
    this.Jarwis.template().subscribe(data => this.filedown(data, 'template'));
  }
  open(content) {
    this.openModal(content);
    // this.modalService.open(content, { centered: true, windowClass: 'custom-class' }).result.then((result) => {
    //   this.closeResult = `${result}`;
    // }, (reason) => {
    //   this.closeResult = `${this.getDismissReason()}`;
    // });
  }
  //Modal Dismiss on Clicking Outside the Modal
  getDismissReason() {
    this.clear();
    this.clear_notes();
  }
  processdata() {
    console.log(this.formGroup.value);
    let x = this.formGroup.controls['report_date'].value;
    const date = new Date(x);
    const formattedDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    //  const day = date.getDate();
    //  const month = date.getMonth()+1;
    //  const year = date.getFullYear();
    //  const formattedDate = `${day}-${month}-${year}`;
    this.formGroup.value.report_date = formattedDate;
    console.log('updated formGroupValue', this.formGroup.value);
    // this.loadingBar.start();
    let report_date = this.formGroup.value.report_date;
    this.formdata.append('report_date', report_date.day + '-' + report_date.month + '-' + report_date.year);
    this.formdata.append('notes', this.formGroup.value.notes);
    this.formdata.append('practice_dbid', localStorage.getItem('practice_id'));
    console.log(this.formdata);
    this.Jarwis.upload(this.formdata).subscribe(message => {
      this.handlemessage(message);
    }, error => this.notify(error));
    console.log('FormData', this.formdata);
  }
  process_reimport() {
    console.log(this.reimport_formGroup.value);
    let x = this.reimport_formGroup.controls['report_date'].value;
    const date = new Date(x);
    const formattedDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    //  const day = date.getDate();
    //  const month = date.getMonth()+1;
    //  const year = date.getFullYear();
    //  const formattedDate = `${day}-${month}-${year}`;
    this.reimport_formGroup.value.report_date = formattedDate;
    console.log('updated formGroupValue', this.reimport_formGroup.value);
    // this.loadingBar.start();
    let report_date = this.reimport_formGroup.value.report_date;
    let file_name = this.reimport_formGroup.value['file'];
    this.formdata.append('file_name', file_name);
    this.formdata.append('user_id', this.setus.getId());
    this.formdata.append('report_date', report_date.day + '-' + report_date.month + '-' + report_date.year);
    this.formdata.append('notes', this.reimport_formGroup.value.notes);
    this.formdata.append('practice_dbid', localStorage.getItem('practice_id'));
    this.Jarwis.file_reimport(this.formdata).subscribe(message => {
      let data = message['reimport_msg'];
      this.notifysuccess(data), this.load_reimport_data(1);
    }, error => this.notify(error));
  }
  notifysuccess(message) {
    console.log(message);
    this.toastr.successToastr(message);
  }
  auto_close_claim() {
    console.log(this.autoclose_claim.value['file']);
    let file_name = this.autoclose_claim.value['file'];
    this.formdata.append('file_name', file_name);
    this.formdata.append('user_id', this.setus.getId());
    this.formdata.append('practice_dbid', localStorage.getItem('practice_id'));
    console.log(this.formdata);
    this.Jarwis.uploadcloseclaim(this.formdata).subscribe(message => {
      let data = message['message'];
      console.log(data);
      this.notifysuccess(data);
    }, error => this.notify(error));
  }
  clear() {
    this.formGroup.controls['file'].reset();
    this.formGroup.controls['notes'].reset();
    this.formGroup.controls['report_date'].reset();
  }
  clear_reimport() {
    this.reimport_formGroup.controls['file'].reset();
    this.reimport_formGroup.controls['notes'].reset();
    this.reimport_formGroup.controls['report_date'].reset();
  }
  saveclaims() {
    this.importProcessed = undefined;
    this.cellrendered4.bind('settings');
    this.Jarwis.createnewclaims(this.new_claim_data, this.file_upload, this.setus.getId()).subscribe(data => this.updatelog(data), error => this.handleError(error));
  }
  updatelog(data) {
    if (data.error == 'Created') {
      this.toastr.successToastr('New Claims Created.');
      console.log(this.claims_processed);
      this.Jarwis.get_upload_table_page(1, 15).subscribe(data => this.handleResponse(data), error => this.handleError(error));
      this.new_claims = [];
      this.newclaim = 0;
    }
    // let compare = data.message.filter(item => this.new_claims.indexOf(item) < 0);
    // this.new_claims = compare;
    // this.newclaim = this.new_claims.length;
  }
  // public mismatch_action(data)
  // {
  //   if(data == 'Replace')
  //   {
  //     let mismatch_keys = this.mismatch_claim_data;
  //     let mismatch_values = this.mismatch_claim_data_mismatch;
  //     let mismatchkey = {};
  //     let mismatchvalue = {};
  //     this.mismatch_claim_numbers.forEach(function (value) {
  //       mismatchkey[value] = mismatch_keys[value];
  //       mismatchvalue[value] = mismatch_values[value];
  //       });
  //     let inputdata = [];
  //     inputdata.push(mismatchkey);
  //     inputdata.push(mismatchvalue);
  //     this.Jarwis.mismatch(inputdata).subscribe(
  //       message=> this.updatemismatch(message),
  //       error => this.notify(error)
  //       );
  //       }
  //       }
  updatemismatch(data) {
    this.mismatch = data.message.length;
    console.log(this.mismatch);
    this.mismatch_claim_nos = data.message.length;
    this.mismatch_claim_numbers = Object.keys(data.message);
  }
  displayvalues(claim, field) {
    this.old_value[claim] = this.mismatch_claims[claim]['midb'][field.target.value];
    this.new_value[claim] = this.mismatch_claims[claim]['mupd'][field.target.value];
    this.fieldselect[claim] = field;
  }
  action(claim, data, type) {
    let field = data[claim];
    if (field == 0 || field == 'Select' || field == undefined && type != 'Ignore_all_fields') {
      this.toastr.errorToastr("Please Select a Value.");
      // console.log("Please Select a Value.");
    } else {
      let value = this.mismatch_claims[claim]['mupd'][field];
      let inputdata = [];
      inputdata.push(claim);
      inputdata.push(field);
      inputdata.push(value);
      if (type == 'Overwrite') {
        this.Jarwis.overwrite(inputdata, this.setus.getId()).subscribe(message => this.update_action(message, field, claim), error => this.notify(error));
        this.toastr.successToastr("Successfull ");
      } else if (type == 'Ignore') {
        this.update_action('ignore', field, claim);
        this.toastr.successToastr("Successfull ");
      } else if (type == 'Ignore_all_fields') {
        this.mismatch_claim_data.splice(claim, 0);
        let indexsort = this.mismatch_claim_number_sort.indexOf(claim);
        this.mismatch_claim_number_sort.splice(indexsort, 1);
        this.mismatch_claim_nos = this.mismatch_claim_nos - 1;
        this.mismatch = this.mismatch_claim_nos;
        this.toastr.successToastr("Successfull ");
      }
    }
  }
  ignore_all(data) {
    if (this.mismatch_selected == undefined || this.mismatch_selected == "All") {
      this.toastr.errorToastr("Please select Anything.");
      // console.log("Please select Anything.");
    } else {
      let mismatch_field_list_key = this.mismatch_field_list.indexOf(this.mismatch_selected);
      this.mismatch_field_list.splice(mismatch_field_list_key, 1);
      //Display Claims Removal
      this.mismatch_claim_number_sort = [];
      //Delete field data from Claims
      for (let i = 0; i < data.length; i++) {
        let claim_id = data[i];
        let array = this.mismatch_claim_data[claim_id];
        let index = [];
        for (let j = 0; j < array.length; j++) {
          if (array[j] != this.mismatch_selected && array[j] != undefined) {
            index.push(array[j]);
          }
        }
        //Insert if Not Null
        if (index.length == 0) {
          //Main Sorted Variable
          let mismatchsort = this.mismatch_claim_numbers.indexOf(claim_id);
          this.mismatch_claim_numbers.splice(mismatchsort, 1);
          //Decrease Mismatch Claims Number
          this.mismatch_claim_nos = this.mismatch_claim_nos - 1;
          this.mismatch = this.mismatch_claim_nos;
        } else {
          this.mismatch_claim_data[claim_id] = index;
        }
        //Assigning Claims to current Instance Variable
        this.mismatch_claim_number_sort = this.mismatch_claim_numbers;
        this.old_value = [];
        this.new_value = [];
        //Clear Array
        index = [];
      }
    }
  }
  overwrite_all(data) {
    if (this.mismatch_selected == undefined || this.mismatch_selected == "All") {
      this.toastr.errorToastr("Please select Anything.");
      // console.log("Please select Anything.");
    } else {
      let field = this.mismatch_selected;
      let value = [];
      for (let i = 0; i < data.length; i++) {
        value[data[i]] = this.mismatch_claims[data[i]]['mupd'][field];
      }
      let inputdata = [];
      inputdata.push(field);
      inputdata.push(data);
      inputdata.push(value);
      this.Jarwis.overwrite_all(inputdata, this.setus.getId()).subscribe(message => this.update_action_overwrite(message, field, data), error => this.notify(error));
    }
  }
  update_action_overwrite(data, field, claim) {
    //Collective Dropdown Ops
    let mismatch_field_list_key = this.mismatch_field_list.indexOf(field);
    this.mismatch_field_list.splice(mismatch_field_list_key, 1);
    //Display Claims Removal
    this.mismatch_claim_number_sort = [];
    //Delete field data from Claims
    let index = [];
    for (let i = 0; i < claim.length; i++) {
      let claim_id = claim[i];
      let array = this.mismatch_claim_data[claim_id];
      for (let j = 0; j < array.length; j++) {
        if (array[j] != field && array[j] != undefined) {
          index.push(array[j]);
        }
      }
      //Insert if Not Null
      if (index.length == 0) {
        //Main Sorted Variable
        let mismatchsort = this.mismatch_claim_numbers.indexOf(claim_id);
        this.mismatch_claim_numbers.splice(mismatchsort, 1);
        //Decrease Mismatch Claims Number
        this.mismatch_claim_nos = this.mismatch_claim_nos - 1;
        this.mismatch = this.mismatch_claim_nos;
      } else {
        this.mismatch_claim_data[claim_id] = index;
      }
      //Assigning Claims to current Instance Variable
      this.mismatch_claim_number_sort = this.mismatch_claim_numbers;
      this.old_value = [];
      this.new_value = [];
      //Clear Array
      index = [];
    }
  }
  update_action(data, field, claim) {
    let array = this.mismatch_claim_data[claim];
    this.mismatch_claim_data.splice(claim, 0);
    const index = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] != field) {
        index.push(array[i]);
      }
    }
    this.mismatch_claim_data[claim] = index;
    if (this.mismatch_selected != undefined || this.mismatch_selected == "All") {
      let indexsort = this.mismatch_claim_number_sort.indexOf(claim);
      this.mismatch_claim_number_sort.splice(indexsort, 1);
    }
    //To remove Claims
    if (index.length == 0) {
      let ind = this.mismatch_claim_numbers.indexOf(claim);
      this.mismatch_claim_numbers.splice(ind, 1);
      this.mismatch_claim_nos = this.mismatch_claim_nos - 1;
      this.mismatch = this.mismatch_claim_nos;
    }
  }
  display_selected(data) {
    this.mismatch_selected = data.target.value;
    this.mismatch_claim_number_sort = [];
    if (data == "All") {
      this.mismatch_claim_number_sort = this.mismatch_claim_numbers;
      this.old_value = [];
      this.new_value = [];
    } else {
      for (let i = 0; i < this.mismatch_claim_numbers.length; i++) {
        let claim = this.mismatch_claim_numbers[i];
        let claim_data = this.mismatch_claim_data[claim];
        let find = claim_data.find(x => x == data);
        if (find != undefined) {
          this.mismatch_claim_number_sort.push(claim);
          this.old_value[claim] = this.mismatch_claims[claim]['midb'][data];
          this.new_value[claim] = this.mismatch_claims[claim]['mupd'][data];
          console.log(this.mismatch_claims[claim]['mupd'][data]);
          this.fieldselect[claim] = data;
        }
      }
    }
  }
  tooltip(claim) {
    this.claim_no = claim.claim_no;
    this.Jarwis.claims_tooltip(this.claim_no).subscribe(data => this.handleClaimsTooltip(data), error => this.handleError(error));
  }
  handleClaimsTooltip(data) {
    this.claim_data = data.claim_data;
    this.age = data.claim_data.dob;
    const convertAge = new Date(this.age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    this.calculateAge = this.showAge;
    console.log(this.calculateAge);
  }
  claimslection(claim) {
    console.log('CLIAM', claim);
    console.log('claims_created_at', claim.created_at);
    const dateTime = new Date(claim.created_at);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const date = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    let x = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    const dateTime1 = new Date(claim.updated_at);
    const year1 = dateTime1.getFullYear();
    const month1 = String(dateTime.getMonth() + 1).padStart(2, '0');
    const date1 = String(dateTime.getDate()).padStart(2, '0');
    const hours1 = String(dateTime.getHours()).padStart(2, '0');
    const minutes1 = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds1 = String(dateTime.getSeconds()).padStart(2, '0');
    let y = `${year1}-${month1}-${date1} ${hours1}:${minutes1}:${seconds1}`;
    claim.created_at = x;
    claim.updated_at = y;
    console.log('UPDATED CLIAM', claim);
    this.claim_no = claim.claim_no;
    this.get_line_items(claim);
    this.check_reassign_alloc(claim);
    //Clear Previous Claims
    this.clear_refer();
    this.claim_clicked = claim;
    // let length=this.table_datas?.length;
    this.claim_related = [];
    // this.get_related(claim);
    // console.log("Selected",this.claim_clicked);
    //Related Claims
    this.loading = true;
    this.Jarwis.get_selected_claim_details_fork(claim).subscribe(data => {
      this.claim_related = data[0]['data'], this.line_data = data[1]['data'], this.line_item_data.push(data[1]['data']);
    }, error => this.handleError(error));
    this.claim_related = [];
    //Check in DB for matching account_no
    // let length=this.table_datas.length;
    //   for(let i=0;i<this.table_datas.length;i++)
    //   {
    //     let related_length=this.claim_related.length;
    //     length= length-1;
    //     if(related_length<3)
    //     {
    //       if(this.table_datas[length]['acct_no'] == claim.acct_no && this.table_datas[length]['claim_no'] != claim.claim_no )
    //       {
    //        this.claim_related.push(this.table_datas[length]);
    //       }
    //     }
    //   }
    this.send_calim_det('footer_data');
    this.send_calim_det('followup');
    this.getnotes(this.claim_clicked);
    this.processNotesDelete(this.claim_no);
  }
  check_reassign_alloc(claim) {
    //console.log("ROle",this.setus.get_role(),claim['audit_work_order']);
    //console.log(this.setus.get_role_id());
    if ((this.setus.get_role_id() == '4' || this.setus.get_role_id() == '3') && claim['audit_work_order'] != null) {
      let already_re = this.curr_reassigned_claims.indexOf(claim.claim_no);
      //console.log("Here REassign",claim,already_re);
      if (already_re < 0) {
        this.reassign_allocation = true;
        //console.log(this.reassign_allocation);
      } else {
        this.reassign_allocation = false;
      }
    } else {
      this.reassign_allocation = false;
    }
  }
  check_edit_permission(data) {
    if (data.includes('claims')) {
      this.edit_permission = true;
      //console.log(data);
    } else {
      this.edit_permission = false;
    }
    //console.log(this.edit_permission);
  }

  send_calim_det(type) {
    console.log(type);
    console.log(this.main_tab);
    if (this.main_tab == true) {
      if (type == 'claims') {
        console.log(this.claim_clicked['claim_no']);
        this.follow.setvalue(this.claim_clicked['claim_no']);
      } else {
        this.notes_hadler.selected_tab(this.claim_clicked['claim_no']);
        this.notes_hadler.set_claim_details(this.claim_clicked);
        this.claim_active = this.claim_clicked;
      }
    } else {
      if (type == 'claims') {
        this.follow.setvalue(this.active_claim);
      } else {
        this.notes_hadler.selected_tab(this.active_claim);
        let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        this.notes_hadler.set_claim_details(claim_detials);
        this.claim_active = this.active_claim;
      }
    }
  }
  processNotesDelete(data) {
    // this.Jarwis.process_notes_delete(data, this.setus.getId()).subscribe(
    //   data  => this.handleResponseProcess(data),
    //   error => this.handleError(error)
    // );
  }
  handleResponseProcess(data) {
    this.getnotes(this.claim_clicked);
  }
  closeclaimslection(claim) {
    this.claim_no = claim.claim_no;
    //console.log(this.claim_no);
    this.get_line_items(claim);
    this.check_reassign_alloc(claim); //  removed because this function is not used
    //Clear Previous Claims
    this.clear_refer();
    this.claim_clicked = claim;
    let length = this.table_datas.length;
    this.claim_related = [];
    // this.get_related(claim);
    // console.log("Selected",this.claim_clicked);
    //Related Claims
    this.loading = true;
    this.Jarwis.get_selected_claim_details_fork(claim).subscribe(data => {
      this.claim_related = data[0]['data'], this.line_data = data[1]['data'], this.line_item_data.push(data[1]['data']);
    }, error => this.handleError(error));
    //console.log(this.claim_related);
    this.claim_related = [];
    //Check in DB for matching account_no
    // let length=this.table_datas.length;
    //   for(let i=0;i<this.table_datas.length;i++)
    //   {
    //     let related_length=this.claim_related.length;
    //     length= length-1;
    //     if(related_length<3)
    //     {
    //       if(this.table_datas[length]['acct_no'] == claim.acct_no && this.table_datas[length]['claim_no'] != claim.claim_no )
    //       {
    //        this.claim_related.push(this.table_datas[length]);
    //       }
    //     }
    //   }
    //this.send_calim_det('footer_data');
    this.send_calim_det('Audit');
    this.getnotes(this.claim_clicked);
    //this.processNotesDelete(this.claim_no);
  }

  referclaim(claim) {
    console.log(claim.claim_no);
    claim = claim;
    console.log(claim);
    this.claim_nos = claim.claim_no;
    console.log(this.type);
    this.claim_status = claim.claim_Status;
    this.Jarwis.get_claimno(this.claim_nos, this.setus.getId(), this.claim_status, this.type).subscribe(data => this.handleClaimNo(data), error => this.handleError(error));
    this.get_line_items(claim);
    if (this.refer_claim_no.indexOf(claim['claim_no']) < 0) {
      this.refer_claim_det.push(claim);
      this.refer_claim_no.push(claim['claim_no']);
      this.Jarwis.getnotes(claim).subscribe(data => this.refer_notes(data, claim.claim_no), error => this.handleError(error));
    } else {
      this.selected_tab(claim['claim_no']);
    }
    //this.get_line_items(claim);
    // this.check_reassign_alloc(claim);
    //Clear Previous Claims
    //this.clear_refer();
    this.send_calim_det('footer_data');
    this.send_calim_det('claims');
    this.getnotes(this.claim_clicked);
    this.processNotesDelete(this.claim_no);
  }
  handleClaimNo(data) {
    this.assigned_datas = data.claim_count;
    console.log(this.assigned_datas);
    this.refer_claim(this.assigned_datas);
  }
  refer_claim(assigned_datas) {
    if (assigned_datas == true) {
      this.refer_claim_editable = 'true';
    } else if (assigned_datas == false) {
      this.refer_claim_editable = 'false';
    }
  }
  //Display Reference Notes
  refer_notes(data, claimno) {
    this.refer_claim_notes_nos.push(claimno);
    this.refer_claim_notes.push(data.data.claim);
    this.refer_process_notes_nos.push(claimno);
    this.refer_process_notes.push(data.data.process);
    this.refer_qc_notes_nos.push(claimno);
    this.refer_qc_notes.push(data.data.qc);
    this.refer_client_notes_nos.push(claimno);
    this.refer_client_notes.push(data.data.client);
    let index_claim = this.refer_claim_notes_nos.indexOf(claimno);
    let index_process = this.refer_process_notes_nos.indexOf(claimno);
    let index_qc = this.refer_qc_notes_nos.indexOf(claimno);
    let index_client = this.refer_client_notes_nos.indexOf(claimno);
    this.active_refer_claim = this.refer_claim_notes[index_claim];
    this.active_refer_process = this.refer_process_notes[index_process];
    this.active_refer_qc = this.refer_qc_notes[index_qc];
    this.active_refer_client = this.refer_client_notes[index_client];
    this.main_tab = false;
    this.active_claim = claimno;
  }
  update_refer_notes(data, type, claimno) {
    console.log(type);
    let index_up_qc = this.refer_qc_notes_nos.indexOf(claimno);
    let index_up_process = this.refer_process_notes_nos.indexOf(claimno);
    console.log(index_up_process);
    let index_up_claim = this.refer_claim_notes_nos.indexOf(claimno);
    if (type == 'processnotes') {
      if (index_up_process == undefined) {
        this.refer_process_notes_nos.push(claimno);
        this.refer_process_notes.push(data.data);
        index_up_process = this.refer_process_notes_nos.indexOf(claimno);
      } else {
        this.refer_process_notes[index_up_process] = data.data;
        console.log(this.refer_process_notes[index_up_process]);
      }
      // this.refer_process_notes[claimno]=data.data;
    } else if (type == 'claimnotes') {
      if (index_up_claim == undefined) {
        this.refer_claim_notes_nos.push(claimno);
        this.refer_claim_notes.push(data.data);
        index_up_claim = this.refer_claim_notes_nos.indexOf(claimno);
      } else {
        this.refer_claim_notes[index_up_claim] = data.data;
      }
      // this.refer_claim_notes[claimno]=data.data;
    } else if (type == 'qcnotes') {
      if (index_up_qc == undefined) {
        this.refer_qc_notes_nos.push(claimno);
        this.refer_qc_notes.push(data.data);
        index_up_qc = this.refer_qc_notes_nos.indexOf(claimno);
      } else {
        this.refer_qc_notes[index_up_qc] = data.data;
      }
      // this.refer_qc_notes[claimno]=data.data;
    }

    this.active_refer_claim = this.refer_claim_notes[index_up_claim];
    this.active_refer_process = this.refer_process_notes[index_up_process];
    this.active_refer_qc = this.refer_qc_notes[index_up_qc];
  }
  //Focus on Selected Tab
  selected_tab(claimno) {
    console.log(claimno);
    if (claimno == 'maintab') {
      this.main_tab = true;
      this.active_claim = [];
    } else {
      let index_qc = this.refer_qc_notes_nos.indexOf(claimno);
      let index_process = this.refer_process_notes_nos.indexOf(claimno);
      let index_claim = this.refer_claim_notes_nos.indexOf(claimno);
      let index_client = this.refer_claim_notes_nos.indexOf(claimno);
      this.active_refer_claim = this.refer_claim_notes[index_claim];
      this.active_refer_process = this.refer_process_notes[index_process];
      this.active_refer_qc = this.refer_qc_notes[index_qc];
      this.active_refer_client = this.refer_client_notes[index_client];
      this.main_tab = false;
      console.log(this.main_tab, '--->>>>');
      this.active_claim = claimno;
    }
    this.send_calim_det('footer_data');
    this.send_calim_det('followup');
  }
  //Close Refer Tab
  close_tab(claim_no) {
    let index = this.refer_claim_det.indexOf(claim_no);
    let list_index = this.refer_claim_no.indexOf(claim_no.claim_no);
    this.refer_claim_det.splice(index, 1);
    this.refer_claim_no.splice(list_index, 1);
    this.main_tab = true;
    this.active_claim = [];
    this.send_calim_det('footer_data');
    this.send_calim_det('followup');
    this.get_line_items(this.claim_clicked);
  }
  //Clear Tabs Details
  clear_refer() {
    this.main_tab = true;
    this.active_claim = [];
    this.refer_claim_det = [];
    this.refer_claim_no = [];
  }
  //Update Displayed Notes
  display_notes(data, type) {
    console.log('data' + data);
    if (this.active_claim != undefined) {
      console.log(type);
      console.log(this.active_claim);
      if (this.active_claim.length != 0) {
        this.update_refer_notes(data, type, this.active_claim);
      } else {
        if (type == 'processnotes') {
          console.log(type);
          console.log(data);
          this.process_notes = data.data;
          console.log(this.process_notes);
        } else if (type == 'claimnotes') {
          this.claim_notes = data.data;
          console.log(this.claim_notes);
        } else if (type == 'qcnotes') {
          this.qc_notes = data.data;
          console.log(this.qc_notes);
        } else if (type == 'All') {
          this.process_notes = data.data.process;
          this.claim_notes = data.data.claim;
          this.qc_notes = data.data.qc;
          this.client_notes = data.data.client;
          console.log("All details");
          console.log(this.claim_notes);
          console.log(this.qc_notes);
        }
      }
      this.loading = false;
      this.processNotes.reset();
      //this.claimNotes.reset();
      //this.qcNotes.reset();
    }
  }
  //Get Notes
  getnotes(claim) {
    // console.log("get_notes",claim)
    this.process_notes = [];
    this.claim_notes = [];
    this.qc_notes = [];
    this.client_notes = [];
    let type = 'All';
    this.Jarwis.getnotes(claim).subscribe(data => this.display_notes(data, type), error => this.handleError(error));
  }
  get_audit_codes() {
    if (!this.audit_codes_list) {
      this.Jarwis.get_audit_codes(this.setus.getId()).subscribe(data => this.assign_audit_codes(data), error => this.handleError(error));
    }
  }
  assign_audit_codes(data) {
    // console.log(data);
    let root_stats = data.root_states;
    let err_stats = data.err_types;
    this.audit_codes_list = {
      root: root_stats,
      error: err_stats
    };
    let root_states = [];
    for (let i = 0; i < root_stats.length; i++) {
      if (root_stats[i].status == '1') {
        root_states.push({
          id: root_stats[i]['id'],
          description: root_stats[i]['name']
        });
      }
    }
    this.root_cause_list = root_states;
    let error_states = [];
    for (let j = 0; j < err_stats.length; j++) {
      if (err_stats[j].status == '1') {
        error_states.push({
          id: err_stats[j]['id'],
          description: err_stats[j]['name']
        });
      }
    }
    this.err_type_list = error_states;
    // console.log("err",this.err_type_list,this.root_cause_list);
    // sub_status_option.push({id: sub_status[i]['id'], description: sub_status[i]['status_code'] +'-'+ sub_status[i]['description'] });
  }

  editnotes(type, value, id) {
    if (type == 'qc_notes_init') {
      let qc_data = this.qc_notes_data.find(x => x.id == id['claim_no']);
      this.editnote_value = qc_data.notes;
      this.edit_noteid = id;
      this.initial_edit = true;
    } else if (type == 'processnote') {
      this.editnote_value = value;
      this.edit_noteid = id;
      this.initial_edit = false;
    } else {
      this.editnote_value = value.content;
      this.edit_noteid = id;
      if (type == 'qcnote') {
        let root_cause = value.root_cause;
        let error_type = JSON.parse(value.error_type);
        // console.log(this.audit_codes_list);
        let root_det = this.audit_codes_list.root.find(x => x.id = root_cause);
        let error_det = this.audit_codes_list.error;
        let selecetd_err = [];
        // console.log("ERR_tyoe",error_type);
        error_type.forEach(function (value) {
          let keys = value;
          let error = error_det.find(x => x.id == keys);
          selecetd_err.push({
            id: keys,
            description: error['name']
          });
        });
        this.qcNotes.patchValue({
          root_cause: {
            id: root_cause,
            description: root_det['name']
          },
          error_type: selecetd_err
        });
      }
      this.initial_edit = false;
    }
  }
  //Handle Rootcause and Error Type
  handle_notes_opt() {
    // console.log("QC",this.qcNotes.value);
    let error_type = this.qcNotes.value['error_type'];
    let root_cause = this.qcNotes.value['root_cause'];
    let error_types_ids = [];
    error_type.forEach(function (value) {
      let keys = value;
      error_types_ids.push(keys['id']);
    });
    this.rc_et_data = {
      root_cause: root_cause['id'],
      error_types: error_types_ids
    };
  }
  //Update Notes
  updatenotes(type) {
    if (this.initial_edit == true) {
      this.handle_notes_opt();
      // console.log("QC",this.rc_et_data);
      let notes_det = {
        notes: this.qcNotes.value['qc_notes'],
        notes_opt: this.rc_et_data
      };
      this.notes_hadler.set_notes(this.setus.getId(), notes_det, this.edit_noteid, 'create_qcnotes');
      // this.qc_notes_data[this.edit_noteid['claim_no']]=this.qcNotes.value['qc_notes'];
      this.qc_notes_data.find(x => x.id == this.edit_noteid['claim_no']).notes = this.qcNotes.value['qc_notes'];
      this.initial_edit = false;
      this.send_calim_det('followup');
      this.send_calim_det('footer_data');
    } else {
      if (type == 'processnotes') {
        this.Jarwis.process_note(this.setus.getId(), this.processNotes.value['processnotes'], this.edit_noteid, 'processupdate', 'audit-closed').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      } else if (type == 'claimnotes') {
        this.Jarwis.claim_note(this.setus.getId(), this.claimNotes.value['claim_notes'], this.edit_noteid, 'claimupdate').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      } else if (type == 'qcnotes') {
        let claim_active;
        if (this.main_tab == true) {
          claim_active = this.claim_clicked;
        } else {
          claim_active = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        }
        this.Jarwis.check_edit_val(claim_active, 'audit').subscribe(data => {
          this.set_note_edit_validity(data);
          if (this.note_edit_val != undefined) {
            this.handle_notes_opt();
            let notes_det = {
              notes: this.qcNotes.value['qc_notes'],
              notes_opt: this.rc_et_data
            };
            this.Jarwis.qc_note(this.setus.getId(), notes_det, this.edit_noteid, 'qcupdate').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
          } else {
            this.toastr.errorToastr('Notes cannot be Updated.', 'Claim Processed.');
          }
        }, error => this.handleError(error));
      }
    }
    this.editnote_value = null;
  }
  savenotes(type) {
    console.log(type);
    let claim_id;
    if (this.active_claim.length != 0) {
      let index = this.refer_claim_no.indexOf(this.active_claim);
      claim_id = this.refer_claim_det[index];
    } else {
      claim_id = this.claim_clicked;
    }
    if (type == 'processnotes') {
      this.Jarwis.process_note(this.setus.getId(), this.processNotes.value['processnotes'], claim_id, 'processcreate', 'create_claims').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
    } else if (type == 'claimnotes') {
      this.Jarwis.claim_note(this.setus.getId(), this.claimNotes.value['claim_notes'], claim_id, 'claim_create').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
    } else if (type == 'qcnotes') {
      console.log(this.qcNotes.value);
      this.submitted = true;
      this.Jarwis.qc_note(this.setus.getId(), this.qcNotes.value['qc_notes'], claim_id, 'create_qcnotes').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      this.handle_notes_opt();
      // console.log("QC",this.rc_et_data);
      this.qc_notes_data.push({
        notes: this.qcNotes.value['qc_notes'],
        id: claim_id['claim_no'],
        notes_opt: this.rc_et_data
      });
      this.qc_notes_data_list.push(claim_id['claim_no']);
      let notes_det = {
        notes: this.qcNotes.value['qc_notes'],
        notes_opt: this.rc_et_data
      };
      this.notes_hadler.set_notes(this.setus.getId(), notes_det, claim_id, 'create_qcnotes');
      this.send_calim_det('footer_data');
      this.send_calim_det('followup');
    }
  }
  collect_response(data) {
    if (this.main_tab == true) {
      this.check_note_edit_validity(this.claim_clicked);
    } else {
      let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
      this.check_note_edit_validity(claim_detials);
    }
    this.display_notes(data, 'qcnotes');
    this.get_workorder('closedClaims', 0, 0, 1, 1, null, null, null, null, null, null, null);
    let index = this.qc_notes_data_list.indexOf(this.active_claim);
    this.qc_notes_data_list.splice(index, 1);
  }
  check_note_edit_validity(claim) {
    this.Jarwis.check_edit_val(claim, 'audit').subscribe(data => this.set_note_edit_validity(data), error => this.handleError(error));
  }
  set_note_edit_validity(data) {
    if (data.edit_val == true) {
      this.note_edit_val = data.note_id['id'];
    } else {
      this.note_edit_val = undefined;
    }
  }
  clear_notes() {
    this.editnote_value = null;
    this.processNotes.reset();
  }
  check_all_assign(page, event) {
    if (event.target.checked == true) {
      this.check_all[page] = true;
      console.log(this.check_all[page]);
    } else {
      this.check_all[page] = false;
    }
  }
  //Select all Check
  selectAll(isChecked) {
    this.isSelectedAll = !this.isSelectedAll;
    const indices = this.pageRows.toArray().map(vcr => +vcr.nativeElement.dataset.index);
    this.table_datas.filter(i => indices.indexOf(i.index) > -1).forEach(i => i.checked = this.isSelectedAll);
  }
  // public select_all(event)
  // {
  // if(event.target.checked == true)
  // {
  // this.check_all='all';
  // }
  // else if(event.target.checked == false)
  // {
  //   this.check_all='none';
  // }
  // }
  select_claim(content) {
    console.log('selected_claim_no', this.selected_claim_nos);
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('Please Select Claim');
    } else {
      this.openModal(content);
      this.cdtn = true;
      // this.modalService.open(content, { centered: true, windowClass: 'custom-class' }).result.then((result) => {
      //   this.closeResult = `${result}`;
      // }, (reason) => {
      //   this.closeResult = `${this.getDismissReason()}`;
      // });
    }
  }
  //Selected Claim Sorting
  selected(event, claim, index) {
    console.log(this.selected_claim_nos);
    if (claim == 'all' && event.target.checked == true) {
      // for(let i=0;i<index;i++){
      //   var selected_claim_datas;
      //   selected_claim_datas.push(this.selected_claim_data[i]);
      // }
      let selected_claim_data = this.selected_claim_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      selected_claim_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
      console.log(this.selected_claim_nos);
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.selected_claim_data.length; i++) {
        let claim = this.selected_claim_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      // this.selected_claims=[];
      // this.selected_claim_nos=[];
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.selected_claim_data[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  closed_selected(event, claim, index) {
    console.log(event.target.checked);
    console.log(claim);
    console.log(index);
    if (claim == 'all' && event.target.checked == true) {
      let closed_claim_data = this.closed_claim_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      closed_claim_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      console.log(this.selected_claim_nos);
      this.selected_claims = claim_data;
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.closed_claim_data.length; i++) {
        let claim = this.closed_claim_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      // this.selected_claims=[];
      // this.selected_claim_nos=[];
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.closed_claim_data[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  //Render Associates data into Popup
  assign_data(data) {
    this.associates_detail = data.data;
  }
  //Get Associates data
  get_associates() {
    this.Jarwis.get_associates(this.setus.getId()).subscribe(data => this.assign_data(data), error => this.handleError(error));
  }
  select_associates(event, id) {
    console.log('testing_id: ' + id);
    if (event.target.checked == true) {
      this.selected_associates.push(id);
      this.selected_id = id;
      console.log(this.selected_associates);
    } else if (event.target.checked == false) {
      let index = this.selected_associates.indexOf(id);
      this.selected_associates.splice(index, 1);
      //Reduce Assigned Numbers Unchecked Associates
      let x = this.assigned_claims_details.find(v => v.id == id);
      if (x != undefined) {
        let ind = this.assigned_claims_details.indexOf(x);
        this.assigned_claims_details.splice(ind, 1);
        if (x.value != 0) {
          this.assigned_claim_nos = this.assigned_claim_nos - Number(x.value);
        }
      }
      // console.log(x);
      // Limit Remove
      let limit_index = this.limit_exceeds.indexOf(x);
      this.limit_exceeds.splice(limit_index, 1);
      if (this.limit_exceeds.length == 0) {
        this.limit_clearance = true;
      }
    }
    this.associates_error_status = true;
    this.proceed_stats();
  }
  //Manual or Automatic Assign
  assign_type(type) {
    if (this.selected_associates.length == 0) {
      this.toastr.errorToastr("Please select Associate");
    } else {
      this.claim_assign_type = type;
    }
  }
  auto_post_claims(data) {
    this.assign_status = [];
    console.log("Claim Stats", data.import_det);
    let claim_stats = data.data;
    //   this.for(let j=0;j < assigned_associates.length;j++)
    // {
    let reassigned_claims = [];
    let new_claim = [];
    this.tested = data.import_det;
    console.log(this.selected_claim_nos.length);
    for (let i = 0; i < this.selected_claim_nos.length; i++) {
      console.log(this.selected_claim_nos[i]);
      let curr_claim = this.selected_claim_nos[i];
      console.log(curr_claim);
      if (curr_claim != null) {
        let reass_index = reassigned_claims.findIndex(v => v.id == this.selected_id);
        console.log(reass_index);
        if (reass_index < 0) {
          reassigned_claims.push({
            id: this.selected_id,
            value: [curr_claim]
          });
          console.log("Reassigned", reassigned_claims);
        } else {
          reassigned_claims[reass_index]['value'].push(curr_claim);
          console.log("Reassigned2", reassigned_claims);
        }
      } else {
        new_claim.push(this.selected_claim_nos[i]);
        console.log(new_claim);
      }
    }
    // console.log("associate",new_claim,this.associates_detail,this.selected_associates);
    let process_associates = [];
    let claim_assign_nos = [];
    console.log(this.selected_associates);
    if (this.selected_associates.length == 0) {
      process_associates = this.associates_detail;
    } else {
      for (let i = 0; i < this.selected_associates.length; i++) {
        console.log(this.selected_associates[i]);
        process_associates.push(this.associates_detail.find(v => v.id == this.selected_associates[i]));
        console.log(process_associates);
      }
    }
    let assign_total = 0;
    let total_new_cliam = new_claim.length;
    process_associates.forEach(element => {
      assign_total += Number(2);
      console.log("Assoc", assign_total, "TOT", element['assign_limit']);
    });
    for (let i = 0; i < process_associates.length; i++) {
      var assigned = {};
      let associate_data = process_associates[i];
      // console.log("Assoc_data",associate_data,associate_data['assign_limit'],associate_data);
      // let assignable_nos=Number(associate_data['assign_limit']) - Number(associate_data['assigned_claims']);
      console.log('total_new_cliam ' + total_new_cliam);
      console.log('assign_total ' + assign_total);
      console.log('associate_data ' + associate_data['assign_limit']);
      let assignable = Number('1') / Number(assign_total) * Number('1');
      console.log(assignable);
      let assignable_nos = Number(assignable.toFixed());
      console.log("Ass_nos", total_new_cliam, assignable, assignable_nos);
      let assigned_claims = [];
      console.log(associate_data['id']);
      if (reassigned_claims.findIndex(x => x.id == associate_data['id']) >= 0) {
        let claims_ref = reassigned_claims.find(x => x.id = associate_data['id']);
        console.log(claims_ref);
        let claims = claims_ref['value'];
        console.log("=>", claims);
        assigned_claims = claims;
      }
      console.log(assignable_nos);
      if (assignable_nos > 0) {
        console.log(new_claim);
        let new_assigned = new_claim.splice(0, assignable_nos);
        console.log(new_assigned);
        new_assigned.forEach(element => {
          assigned_claims.push(element);
        });
      }
      assigned['assigned'] = assigned_claims.length;
      assigned['assigned_to'] = associate_data['id'];
      assigned['claims'] = assigned_claims;
      assigned['max'] = assigned_claims.length;
      console.log(assigned);
      console.log(this.assign_status);
      this.assign_status.push(assigned);
      console.log(this.assign_status);
    }
    // console.log("Assigned",reassigned_claims,"New",new_claim,this.associates_detail);
    // console.log("Final",this.assign_status);
    // Old Logic
    /*
    if(assignable_nos >0)
    {
      // console.log("Ind",reassigned_claims,associate_data['id'],reassigned_claims.findIndex(x => x.id == associate_data['id'] ));
      if( reassigned_claims.findIndex(x => x.id == associate_data['id'] ) >= 0 )
      {
        let claims_ref=reassigned_claims.find(x => x.id = associate_data['id'] );
        console.log("claims_ref",claims_ref,claims_ref['value'].length,claims_ref['value'].length <= assignable_nos)
             let assigned_claims=[];
             if(claims_ref['value'].length <= Number(assignable_nos) )
        {
          let claims=claims_ref['value'];
          // console.log("Fmm,f",claims);
          assigned_claims.push(claims);
          assignable_nos=assignable_nos-claims.length;
          let new_assigned;
          if(assignable_nos >0 && new_claim.length >= assignable_nos)
          {
            new_assigned= new_claim.splice(0,assignable_nos);
               }
          else if(new_claim.length !=0)
          {
            new_assigned=new_claim;
            new_claim=[];
          }
          assigned_claims.push(new_assigned);
             }
        else
        {
          // console.log("comp",claims_ref['value'],claims_ref['value'].length,assignable_nos);
          claims_ref['value'].length = assignable_nos ;
          assigned_claims= claims_ref['value'];
          // console.log("Exceed,f",claims_ref['value']);
        }
             // console.log("Old and New",assigned_claims);
        // var assigned={
        //   assigned:assigned_claims.length,
        //   assigned_to:associate_data['id'],
        //   claims:assigned_claims,
        //   max:assignable_nos
        // };
        assigned['assigned']= assigned_claims.length;
        assigned['assigned_to']= associate_data['id'];
        assigned['claims']= assigned_claims;
        assigned['max']= assignable_nos;
        // console.log(assigned);
        this.assign_status.push(assigned);
     
      }
      else if(new_claim.length > 0)
      {
        let claims_assigned;
        if(new_claim.length >= assignable_nos)
        {
          claims_assigned=new_claim.splice(0,assignable_nos)
        }
        else if(new_claim.length !=0)
        {
          claims_assigned=new_claim;
          new_claim=[];
        }
        // console.log("New",claims_assigned,assignable_nos,"NC",new_claim)
             // var assigned_here={
        //   assigned:associate_data.length,
        //   assigned_to:associate_data['id'],
        //   claims:claims_assigned,
        //   max:assignable_nos
        // };
             assigned['assigned']= claims_assigned.length;
        assigned['assigned_to']= associate_data['id'];
        assigned['claims']= claims_assigned;
        assigned['max']= assignable_nos;
        // console.log(assigned);
        this.assign_status.push(assigned);
     
      }
    }
    */
    // console.log(this.assign_status);
    let assigned_count = 0;
    console.log(this.assign_status);
    this.create_workorder();
    this.assign_status.forEach(element => {
      assigned_count += element.claims.length;
    });
    console.log(assigned_count);
    // if(this.assign_status.length == 0)
    if (assigned_count == 0) {
      this.null_assigned = true;
    } else {
      this.null_assigned = false;
      this.associates_error_status = false;
    }
  }
  manual_assign(event, id) {
    let check = this.assigned_claims_details.some(function (value) {
      return value.id === id;
    });
    ;
    console.log("Man", event.target.value, id, check);
    if (event.target.value != 0) {
      if (!check) {
        console.log(id);
        console.log(event.target.value);
        this.assigned_claims_details.push({
          id: id,
          value: event.target.value
        });
        console.log(this.assigned_claims_details);
      } else {
        this.assigned_claims_details.find(v => v.id == id).value = event.target.value;
        console.log(this.assigned_claims_details);
      }
    } else if (this.assigned_claims_details.find(v => v.id == id) != 0 && this.assigned_claims_details.find(v => v.id == id) != undefined) {
      // console.log(this.assigned_claims_details.find(v => v.id == id));
      this.assigned_claims_details.find(v => v.id == id).value = 0;
      console.log(this.assigned_claims_details);
    }
    // console.log("assigned",this.assigned_claims_details);
    this.calculate_assigned();
    // this.check_limit();
    this.associates_error_status = true;
    this.proceed_stats();
  }
  //Calculate Assigned and Unassigned Claims
  calculate_assigned() {
    let total = 0;
    for (let i = 0; i < this.assigned_claims_details.length; i++) {
      total += Number(this.assigned_claims_details[i]['value']);
      this.assigned_data[this.assigned_claims_details[i]['id']] = this.assigned_claims_details[i]['value'];
    }
    this.assigned_claim_nos = total;
  }
  //Monitor Limit of Associates
  check_limit() {
    // console.log("Here",this.assigned_claims_details)
    for (let i = 0; i < this.assigned_claims_details.length; i++) {
      let associate = this.associates_detail.find(x => x['id'] == this.assigned_claims_details[i]['id']);
      let total_assigned = Number(this.assigned_claims_details[i]['value']) + Number(associate['assigned_claims']);
      // console.log("Ta",total_assigned,associate['assign_limit'])
      if (associate['assign_limit'] < total_assigned) {
        //Filter duplicate
        if (this.limit_exceeds.indexOf(associate['id']) < 0) {
          this.limit_exceeds.push(associate['id']);
        }
        // console.log("Limit _exccede",this.limit_exceeds)
        this.limit_clearance = false;
      } else {
        // console.log("Entered")
        if (this.limit_exceeds.length == 0) {
          this.limit_clearance = true;
        } else {
          //Splice code
          let index = this.limit_exceeds.indexOf(associate['id']);
          this.limit_exceeds.splice(index, 1);
          if (this.limit_exceeds.length == 0) {
            this.limit_clearance = true;
          }
        }
      }
      // console.log("Associate",associate);
    }
  }
  // console.log(this.assigned_claim_nos,this.selected_claim_nos)
  proceed_stats() {
    // console.log(this.selected_claim_nos.length ,',', this.assigned_claim_nos, this.selected_claim_nos.length,this.limit_exceeds  )
    if (this.selected_claim_nos.length >= this.assigned_claim_nos && this.selected_claim_nos.length != 0 && this.assigned_claim_nos != 0 && this.limit_exceeds.length == 0) {
      // console.log("P_Stats  -> True")
      this.claim_proceed = false;
    } else {
      // console.log("P_Stats  -> False")
      this.claim_proceed = true;
    }
  }
  //Verify Selected claims and associates
  assign_claims() {
    this.Jarwis.check_claims(this.selected_claim_nos).subscribe(data => {
      console.log("O/p", data);
      if (this.claim_assign_type == 'Manual') {
        this.assign_associates(data);
      } else if (this.claim_assign_type == 'Auto') {
        console.log('auto post');
        this.auto_post_claims(data);
        this.modalService.dismissAll();
      }
    }, error => this.handleError(error));
  }
  assign_associates(data) {
    let claim_numbers = this.selected_claim_nos;
    let assigned_associates = this.assigned_claims_details;
    console.log(assigned_associates);
    console.log(this.selected_claim_nos);
    console.log(assigned_associates);
    this.error_details = [];
    this.assign_status = [];
    this.associates_error_status = true;
    let unassigned_numbers = [];
    //Assign Logic
    for (let j = 0; j < assigned_associates.length; j++) {
      // this.assign_status.push({id:assigned_associates[j]['id'],to:assigned_associates[j]['value']});
      let assign = [];
      let count = 0;
      for (let x = 0; x < Object.keys(data.data).length; x++) {
        if (data.data[claim_numbers[x]] != null) {
          // console.log(data.data);
          if (data.data[claim_numbers[x]]['assigned_to'] == assigned_associates[j]['id'] && count < assigned_associates[j]['value']) {
            assign.push(claim_numbers[x]);
            count++;
            unassigned_numbers.push(claim_numbers[x]);
          }
        }
      }
      this.assign_status.push({
        claims: assign,
        assigned: count,
        max: assigned_associates[j]['value'],
        assigned_to: assigned_associates[j]['id']
      });
      ;
      console.log(this.assign_status);
    }
    let missing = claim_numbers.filter(item => unassigned_numbers.indexOf(item) < 0);
    let new_claim = [];
    let reopen_claim = [];
    for (let z = 0; z < missing.length; z++) {
      if (data.data[missing[z]] == null) {
        new_claim.push(missing[z]);
      } else {
        reopen_claim.push(missing[z]);
      }
    }
    let cont = 0;
    for (let j = 0; j < assigned_associates.length; j++) {
      let count = this.assign_status.find(v => v.assigned_to == assigned_associates[j]['id']);
      count = Number(count['max']) - Number(count['assigned']);
      if (count != 0) {
        let assign = [];
        let loop_count = 0;
        for (let i = 0; i < count; i++) {
          if (new_claim[cont] != undefined) {
            assign.push(new_claim[cont]);
            cont++;
            loop_count++;
            ///Continue Here to update 'assign_status' and form it as 'claims_assigned' format  *************IMPORTANT-------******
          }
          // this.assigned_claims_details.find(v => v.id == id).value = event.target.value;
        }
        //Concat Claim Values
        if (loop_count != 0) {
          let array_data = this.assign_status.find(v => v.assigned_to == assigned_associates[j]['id']);
          let index = this.assign_status.findIndex(x => x.assigned_to == assigned_associates[j]['id']);
          let claims = array_data['claims'];
          let assigned_nos = array_data['assigned'];
          for (let z = 0; z < claims.length; z++) {
            assign.push(claims[z]);
          }
          array_data['claims'] = assign;
          array_data['assigned'] = Number(assigned_nos) + Number(loop_count);
          if (array_data['assigned'] > 0) {
            this.assign_status[index] = array_data;
          }
        }
      }
    }
    let unassigned_new_claims = [];
    if (cont < new_claim.length) {
      for (let i = cont; i < new_claim.length; i++) {
        unassigned_new_claims.push(new_claim[i]);
      }
    }
    //Final Check for Unassigned Claims and Associates
    let claim_array = [];
    let claim_name = [];
    for (let i = 0; i < this.assign_status.length; i++) {
      if (this.assign_status[i]['claims'].length == 0) {
        claim_array.push(this.assign_status[i]['assigned_to']);
        let name = this.associates_detail.find(v => v.id == this.assign_status[i]['assigned_to']);
        claim_name.push(name['firstname']);
        // let x=this.assigned_claims_details.find(v => v.id == id);
      }
    }

    if (claim_array.length != 0 || reopen_claim.length != 0 || unassigned_new_claims.length != 0) {
      this.error_details['associates'] = claim_array;
      this.error_details['reopen'] = reopen_claim;
      this.error_details['new_claims'] = unassigned_new_claims;
      this.error_details['associate_name'] = claim_name;
      this.associates_error_status = true;
    } else {
      this.associates_error_status = false;
    }
    let current_assigned = 0;
    let total_assigned = 0;
    this.assign_status.forEach(element => {
      current_assigned = element.assigned;
      total_assigned = Number(total_assigned) + Number(current_assigned);
    });
    if (total_assigned == 0) {
      this.null_assigned = true;
    } else {
      this.null_assigned = false;
    }
    console.log("Assigned", this.assign_status);
  }
  removeTextbox() {
    //this.assign_type().reset();
    this.assigntype_reset = this.assign_type(this.type);
    this.assigntype_reset = '';
    this.associateCount = '';
    this.assigned_claim_nos = 0;
    this.assigned_data = [];
    this.selected_associates = [];
    this.claim_assign_type = '';
    this.assigned_claims_details = [];
  }
  work_order_notify(data) {
    this.assign_status = [];
    this.selected_associates = [];
    console.log(this.assign_status);
    this.selected_claim_nos = [];
    this.selected_claims = [];
    this.check_all = [];
    this.assigned_claims_details = [];
    this.assigned_data = [];
    this.workOrder.reset();
    this.pageChange(1, 'claim', null, null, null, null, null, null);
    this.toastr.successToastr('Work Order Created');
    this.reload_data(1);
  }
  //Create Work Order
  create_workorder() {
    console.log(this.assign_status);
    if (this.workOrder.value) {
      let y = this.workOrder.controls['due_date'].value;
      let x = new Date(y);
      let year = x.getFullYear();
      let month = x.getMonth() + 1; // Months are zero-based, so we add 1
      let day = x.getDate() - 1; // Subtracting 1 from the date to get the previous day
      let result = {
        year: year,
        month: month,
        day: day
      };
      console.log(result);
      this.workOrder.value.due_date = result;
    }
    this.Jarwis.create_workorder(this.setus.getId(), this.workOrder.value, this.assign_status, 'followup').subscribe(data => this.work_order_notify(data), error => this.handleError(error));
  }
  checkedEvnt(val) {
    for (let i = 0; i < this.associates_detail.length; i++) {
      this.associates_detail[i].isChecked = val;
    }
    this.associateCount = '';
    this.selected_associates = [];
  }
  clear_fields() {
    this.assigned_claims_details = [];
    this.workOrder.reset();
    this.formGroup.reset();
    this.associates_detail = [];
  }
  ignore_error(type) {
    // alert(type);
    if (type == 'associates') {
      this.error_details['associates'] = [];
    } else if (type == 'reopen') {
      this.error_details['reopen'] = [];
    } else if (type == 'newclaims') {
      this.error_details['new_claims'] = [];
    } else if (type == 'assign_to_others') {
      let reopen = this.error_details['reopen'];
      for (let x = 0; x < reopen.length; x++) {
        for (let i = 0; i < this.assign_status.length; i++) {
          let min = this.assign_status[i]['assigned'];
          let max = this.assign_status[i]['max'];
          if (Number(max) - Number(min) > 0) {
            let claims = this.assign_status[i]['claims'];
            claims.push(reopen[x]);
            this.assign_status[i]['claims'] = claims;
            this.assign_status[i]['assigned'] = Number(min) + 1;
            break;
          }
        }
      }
      this.error_details['reopen'] = [];
    }
    if (this.error_details['associates'] == '' && this.error_details['reopen'] == '' && this.error_details['new_claims'] == '') {
      this.associates_error_status = false;
    }
    console.log(this.assign_status);
  }
  order_list(type, table, sorting_name, sorting_method, createsearch, search) {
    this.sorting_name = type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.pageChange(this.pages, table, this.sortByAsc, type, sorting_name, sorting_method, null, search);
    } else {
      this.sortByAsc = true;
      this.pageChange(this.pages, table, this.sortByAsc, type, sorting_name, sorting_method, null, search);
    }
  }
  sort(property) {
    this.isDesc = false;
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    this.table_datas.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }
  desort(property) {
    this.isDesc = true;
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    this.table_datas.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }
  createClaims_search(page, table, sort_data, sort_type, sorting_name, sorting_method, createsearch, searchdata) {
    console.log('claim_value', this.createClaimsFind.value);
    this.createclaims_filter = searchdata;
    console.log('Search Data', searchdata);
    this.pageChange(page, table, sort_data, sort_type, sorting_name, sorting_method, createsearch, searchdata);
  }
  allClaims_search(page, table, sort_data, sort_type, sorting_name, sorting_method, allclaimsearch, searchdata) {
    this.allclaims_filter = searchdata;
    console.log(searchdata);
    this.pageChange(page, table, sort_data, sort_type, sorting_name, sorting_method, allclaimsearch, searchdata);
  }
  pageChange(page, table, sort_data, sort_type, sorting_name, sorting_method, createsearch, search) {
    console.log('Table Name', table);
    this.gridApi_6.setRowData([]);
    this.loader.start();
    this.search = search;
    let searchs = this.search;
    this.searchValue = this.search;
    let page_count = 15;
    if (table == 'claim') {
      // if (createsearch) {
      //   this.Jarwis.get_first_table_data(createsearch).subscribe(
      //     data => this.assign_page_data(data),
      //     error => this.handleError(error)
      //   )
      // }
      let createsearch_notNull = [];
      let nullVal = false;
      let createClaims_searchValue = [this.createClaimsFind.value];
      if (typeof createClaims_searchValue === 'object' && createClaims_searchValue !== null) {
        Object.keys(createClaims_searchValue).forEach(key => {
          if (typeof createClaims_searchValue[key] === 'object' && createClaims_searchValue[key] !== null) {
            Object.keys(createClaims_searchValue[key]).forEach(val => {
              if (typeof createClaims_searchValue[key][val] === 'object' && createClaims_searchValue[key][val] !== null) {
                Object.keys(createClaims_searchValue[key][val]).forEach(data => {
                  if (createClaims_searchValue[key][val][data] === null) {
                    nullVal = false;
                  } else {
                    nullVal = true;
                  }
                });
                createsearch_notNull.push(nullVal);
              } else if (typeof createClaims_searchValue[key][val] !== 'object' && createClaims_searchValue[key][val] !== null && createClaims_searchValue[key][val] != '') {
                nullVal = true;
                createsearch_notNull.push(nullVal);
              } else if (typeof createClaims_searchValue[key][val] !== 'object' && createClaims_searchValue[key][val] !== null && createClaims_searchValue[key][val] == '') {
                nullVal = false;
                createsearch_notNull.push(nullVal);
              }
            });
          }
        });
      }
      if (createsearch_notNull.some(x => x === true)) {
        this.search = this.createclaims_filter;
        search = this.search;
        sort_data = 'null';
        sort_type = 'null';
        sorting_name = null;
      } else {
        this.search = null;
        search = this.search;
        sort_type = null;
      }
      searchs = this.search;
      this.pages = page;
      if (sorting_name == null && searchs == null) {
        console.log('Sort_data', sort_data);
        // this.Jarwis.get_table_page(sort_data, page, page_count, sort_type, sorting_name, sorting_method, null, search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_first_table_data(createsearch).then(data => this.assign_page_data(data), error => this.handleError(error));
      } else if (searchs == 'search') {
        if (this.createClaimsFind.value.dos?.[0] != null && this.createClaimsFind.value.dos?.[1] != null) {
          console.log(this.createClaimsFind.value.dos);
          this.createClaimsFind.value.dos['startDate'] = this.datepipe.transform(new Date(this.createClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.createClaimsFind.value.dos['endDate'] = this.datepipe.transform(new Date(this.createClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
          this.createClaimsFind.value.dos.pop(this.createClaimsFind.value.dos[0]);
          this.createClaimsFind.value.dos.pop(this.createClaimsFind.value.dos[1]);
          const obj = {
            ...this.createClaimsFind.controls['dos'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.createClaimsFind.value.dos = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.createClaimsFind.value.dos);
        }
        if (this.createClaimsFind.value.date?.[0] != null && this.createClaimsFind.value.date?.[1] != null) {
          console.log(this.createClaimsFind.controls['date'].value);
          this.createClaimsFind.value.date['startDate'] = this.datepipe.transform(new Date(this.createClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.createClaimsFind.value.date['endDate'] = this.datepipe.transform(new Date(this.createClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
          this.createClaimsFind.value.date.pop(this.createClaimsFind.value.date[0]);
          this.createClaimsFind.value.date.pop(this.createClaimsFind.value.date[1]);
          const obj = {
            ...this.createClaimsFind.controls['date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.createClaimsFind.value.date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.createClaimsFind.value.date);
        }
        if (this.createClaimsFind.value.bill_submit_date?.[0] != null && this.createClaimsFind.value.bill_submit_date?.[1] != null) {
          this.createClaimsFind.value.bill_submit_date['startDate'] = this.datepipe.transform(new Date(this.createClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.createClaimsFind.value.bill_submit_date['endDate'] = this.datepipe.transform(new Date(this.createClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.createClaimsFind.value.bill_submit_date.pop(this.createClaimsFind.value.bill_submit_date[0]);
          this.createClaimsFind.value.bill_submit_date.pop(this.createClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.createClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.createClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.createClaimsFind.value.bill_submit_date);
        }
        // this.Jarwis.get_table_page(sort_data, page, page_count, sort_type, sorting_name, this.sortByAsc, this.createClaimsFind.value, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_first_table_data(this.createClaimsFind.value).then(data => this.assign_page_data(data), error => this.handleError(error));
      } else {
        console.log('SORT_DATA', sort_data);
        this.Jarwis.get_first_table_data(createsearch).then(data => this.assign_page_data(data), error => this.handleError(error));
        // this.Jarwis.get_table_page(sort_data, page, page_count, sort_type, sorting_name, this.sortByAsc, null, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
      }
      // if(sorting_name == 'null' && searchs == null){
      //   this.Jarwis.get_workorder(filter,0,0,1,page,sort_type,sort_data,sorting_name,sorting_method,closedsearch,search).subscribe(
      //     data  => this.form_closedClaims_table(data,page),
      //     error => this.error_handler(error)
      //   );
      // }else if(searchs == 'search'){
      //   this.Jarwis.get_workorder(filter,0,0,1,page,sort_type,sort_data,this.closed_sorting_name,this.sortByAsc,this.closedClaimsFind.value,this.search).subscribe(
      //     data  => this.form_closedClaims_table(data,page),
      //     error => this.error_handler(error)
      //   );
      // }
      // else{
      //   this.Jarwis.get_workorder(filter,0,0,1,page,sort_type,sort_data,this.closed_sorting_name,this.sortByAsc,closedsearch,this.search).subscribe(
      //     data  => this.form_closedClaims_table(data,page),
      //     error => this.error_handler(error)
      //   );
      // }
    }
    /** Developer : Sathish
        Date : 09/01/2023
        Purpose : To get all Calims Table */else if (table == 'all_claim') {
      let allclaimsearch_notNull = [];
      let nullVal = false;
      let allClaims_searchValue = [this.allClaimsFind.value];
      if (typeof allClaims_searchValue === 'object' && allClaims_searchValue !== null) {
        Object.keys(allClaims_searchValue).forEach(key => {
          if (typeof allClaims_searchValue[key] === 'object' && allClaims_searchValue[key] !== null) {
            Object.keys(allClaims_searchValue[key]).forEach(val => {
              if (typeof allClaims_searchValue[key][val] === 'object' && allClaims_searchValue[key][val] !== null) {
                Object.keys(allClaims_searchValue[key][val]).forEach(data => {
                  if (allClaims_searchValue[key][val][data] === null) {
                    nullVal = false;
                  } else {
                    nullVal = true;
                  }
                });
                allclaimsearch_notNull.push(nullVal);
              } else if (typeof allClaims_searchValue[key][val] !== 'object' && allClaims_searchValue[key][val] !== null && allClaims_searchValue[key][val] != '') {
                nullVal = true;
                allclaimsearch_notNull.push(nullVal);
              } else if (typeof allClaims_searchValue[key][val] !== 'object' && allClaims_searchValue[key][val] !== null && allClaims_searchValue[key][val] == '') {
                nullVal = false;
                allclaimsearch_notNull.push(nullVal);
              }
            });
          }
        });
      }
      if (allclaimsearch_notNull.some(x => x === true)) {
        this.search = this.allclaims_filter;
        sort_data = 'null';
        sort_type = 'null';
        sorting_name = 'null';
        search = this.search;
      } else {
        this.search = null;
        sort_data = null;
        sort_type = null;
        sorting_name = null;
        sorting_method = null;
        search = this.search;
      }
      searchs = this.search;
      console.log(searchs);
      this.allclaim_pages = page;
      if (sorting_name == null && searchs == null) {
        // this.Jarwis.all_claim_list(sort_data, page, page_count, sort_type, null, sorting_method, null, search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.all_claim_list_new('null').subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      } else if (searchs == 'search') {
        if (this.allClaimsFind.value.dos?.[0] != null && this.allClaimsFind.value.dos?.[1] != null) {
          console.log(this.allClaimsFind.value);
          this.allClaimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.allClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.allClaimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.allClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
          this.allClaimsFind.value.dos.pop(this.allClaimsFind.value.dos[0]);
          this.allClaimsFind.value.dos.pop(this.allClaimsFind.value.dos[1]);
          const obj = {
            ...this.allClaimsFind.controls['dos'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.allClaimsFind.value.dos = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.allClaimsFind.value.dos);
        }
        if (this.allClaimsFind.value.date?.[0] != null && this.allClaimsFind.value.date?.[1] != null) {
          console.log(this.allClaimsFind.controls['date'].value);
          this.allClaimsFind.value.date.startDate = this.datepipe.transform(new Date(this.allClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.allClaimsFind.value.date.endDate = this.datepipe.transform(new Date(this.allClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
          this.allClaimsFind.value.date.pop(this.allClaimsFind.value.date[0]);
          this.allClaimsFind.value.date.pop(this.allClaimsFind.value.date[1]);
          const obj = {
            ...this.allClaimsFind.controls['date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.allClaimsFind.value.date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.allClaimsFind.value.date);
        }
        if (this.allClaimsFind.value.bill_submit_date?.[0] != null && this.allClaimsFind.value.bill_submit_date?.[1] != null) {
          // console.log(this.createClaimsFind.controls.bill_submit_date.value);
          this.allClaimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.allClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.allClaimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.allClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.allClaimsFind.value.bill_submit_date.pop(this.allClaimsFind.value.bill_submit_date[0]);
          this.allClaimsFind.value.bill_submit_date.pop(this.allClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.allClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.allClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.allClaimsFind.value.bill_submit_date);
        }
        // this.Jarwis.all_claim_list(sort_data, page, page_count, sort_type, sorting_name, this.sortByAsc, this.allClaimsFind.value, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.all_claim_list_new(this.allClaimsFind.value).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      } else {
        // this.Jarwis.all_claim_list(sort_data, page, page_count, sort_type, sorting_name, this.sortByAsc, null, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.all_claim_list_new(null).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      }
    }
    /* else if (table == 'reallocate_claims') {
      console.log(sorting_name);
      let itemnotNull = [];
      let nullVal:boolean = false;
      let reallocate_searchdata = [this.reallocateClaimsFind.value];
      if (typeof reallocate_searchdata === 'object' && this.reallocateClaimsFind.value !== null) {
        Object.keys(reallocate_searchdata).forEach(key => {
          if (typeof reallocate_searchdata[key] === 'object' && reallocate_searchdata[key] !== null) {
            Object.keys(reallocate_searchdata[key]).forEach(val => {
              if(typeof reallocate_searchdata[key][val] === 'object' && reallocate_searchdata[key][val] !== null) {
                Object.keys(reallocate_searchdata[key][val]).forEach(data => {
                  if(reallocate_searchdata[key][val][data] === null){
                    nullVal = false;
                  }
                  else{
                    nullVal = true;
                  }
                });
                itemnotNull.push(nullVal);
              }
              else if (typeof reallocate_searchdata[key][val] !== 'object' && reallocate_searchdata[key][val] !== null){
                nullVal = true;
                itemnotNull.push(nullVal);
              }
            });
          }
        });
      }
      if(itemnotNull.some(x => x === true)){
        console.log('val changed');
        this.search = this.reallocateclaims_filter;
        sort_data = 'null';
        sort_type = 'null';
        sorting_name='null';
        search = this.search;
      }
      else{
        console.log('val not changed');
        this.search=null;
        sort_data = null;
        sort_type = null;
        sorting_name = null;
        sorting_method = null;
        search = this.search;
      }
      searchs = this.search;
      console.log(searchs);
      this.reallocate_pages = page;
      if (sorting_name == null && searchs == null) {
        this.Jarwis.reallocation_list(sort_data, page, page_count, sort_type, null, sorting_method, null, search).subscribe(
          data => this.reallocate_page_data(data),
          error => this.handleError(error)
        );
      } else if (searchs == 'search') {
        if (this.reallocateClaimsFind.value.dos.startDate !=null && this.reallocateClaimsFind.value.dos.endDate !=null) {
          console.log(this.reallocateClaimsFind.value);
          this.reallocateClaimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.reallocateClaimsFind.value.dos.startDate), 'yyyy-MM-dd');
          this.reallocateClaimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.reallocateClaimsFind.value.dos.endDate), 'yyyy-MM-dd');
        }
        if (this.reallocateClaimsFind.value.date?.[0] != null && this.reallocateClaimsFind.value.date.endDate != null) {
          console.log(this.reallocateClaimsFind.controls.date.value);
          this.reallocateClaimsFind.value.date?.[0] = this.datepipe.transform(new Date(this.reallocateClaimsFind.value.date?.[0]._d), 'yyyy-MM-dd');
          this.reallocateClaimsFind.value.date.endDate = this.datepipe.transform(new Date(this.reallocateClaimsFind.value.date.endDate._d), 'yyyy-MM-dd');
        }
        if (this.reallocateClaimsFind.value.bill_submit_date.startDate != null && this.reallocateClaimsFind.value.bill_submit_date.endDate != null) {
          // console.log(this.createClaimsFind.controls.bill_submit_date.value);
          this.reallocateClaimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.reallocateClaimsFind.value.bill_submit_date.startDate._d), 'yyyy-MM-dd');
          this.reallocateClaimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.reallocateClaimsFind.value.bill_submit_date.endDate._d), 'yyyy-MM-dd');
        }
             this.Jarwis.reallocation_list(sort_data, page, page_count, sort_type, sorting_name, this.sortByAsc, this.reallocateClaimsFind.value, this.search).subscribe(
          data => this.reallocate_page_data(data),
          error => this.handleError(error)
        );
      } else {
        this.Jarwis.reallocation_list(sort_data, page, page_count, sort_type, sorting_name,this.sortByAsc, null, this.search).subscribe(
          data => this.reallocate_page_data(data),
          error => this.handleError(error)
        );
      }
    } */else if (table == 'upload') {
      console.log('Upload Table', table);
      this.upload_page = page;
      console.log(this.upload_page);
      this.Jarwis.get_upload_table_page(page, page_count).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    } else if (table == 'all') {
      console.log('All Table', table);
      this.pages = page;
      // if (sorting_name == 'null') {
      //   this.Jarwis.claim_status_data_fork(sort_data, page, page_count, sort_type, this.setus.getId(), sorting_name, sorting_method, createsearch, search).subscribe(
      //     data => {
      //       this.assign_page_data(data[0]),
      //         this.assign_status_codes(data[1])
      //     },
      //     error => this.handleError(error)
      //   );
      // } else {
      //   this.Jarwis.claim_status_data_fork(sort_data, page, page_count, sort_type, this.setus.getId(), this.sortByAsc, this.sorting_name, createsearch, search).subscribe(
      //     data => {
      //       this.assign_page_data(data[0]),
      //         this.assign_status_codes(data[1])
      //     },
      //     error => this.handleError(error)
      //   );
      // }
      this.upload_page = page;
      this.Jarwis.get_upload_table_page(page, page_count).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    } else if (table == 'uploadall') {
      this.upload_page = page;
      this.Jarwis.get_upload_table_page(page, page_count).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
  }
  //Assign Status codes
  assign_status_codes(data) {
    this.claim_status_codes = data.status;
    this.claim_sub_status_codes = data.sub_status;
  }
  //Change values of substatus
  change_sub_status_code($event) {
    this.selected_status_code = $event.target.value;
    this.selected_sub_status_code = this.claim_sub_status_codes[$event.target.value];
  }
  //set filter type
  claim_filter_type($event) {
    this.selected_filter_type = $event.target.value;
    this.claim_sort_filter();
  }
  //sort with filter
  claim_sort_filter() {
    this.pageChange(1, 'all', 'null', 'null', 'null', 'null', 'null', 'null');
  }
  assign_page_data(data) {
    console.log('New Data', data);
    if (data != null && data != '') {
      this.GridData_CreateWorkOrders = data.data;
      this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
      this.myGrid_7.api?.setRowData(this.GridData_CreateWorkOrders);
      this.myGrid_8.api?.setRowData(this.GridData_CreateWorkOrders);
      this.gridApi_1.closeToolPanel();
      this.gridApi_7.closeToolPanel();
      this.gridApi_8.closeToolPanel();
      // this.autoSizeAll();
      this.loader.stop();
      //  this.setAutoHeight();
    } else {
      this.GridData_CreateWorkOrders = [];
      this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
      this.myGrid_7.api?.setRowData(this.GridData_CreateWorkOrders);
      this.myGrid_8.api?.setRowData(this.GridData_CreateWorkOrders);
      //  this.setAutoHeight();
      this.gridApi_1.closeToolPanel();
      this.gridApi_7.closeToolPanel();
      this.gridApi_8.closeToolPanel();
      // this.autoSizeAll();
      this.loader.stop();
    }
    if (data != null) {
      this.table_datas = data.data;
    }
    if (data != null && data != '') {
      console.log('INNNN');
      this.GridData_AllClaims = data.data;
      this.myGrid_6.api?.setRowData(this.GridData_AllClaims);
      //  this.setAutoHeight();
      this.gridApi_6.closeToolPanel();
      // this.autoSizeAll();
      this.loader.stop();
    } else {
      this.GridData_AllClaims = [];
      this.myGrid_6.api?.setRowData(this.GridData_AllClaims);
      //  this.setAutoHeight();
      this.gridApi_6.closeToolPanel();
      // this.autoSizeAll();
      this.loader.stop();
    }
    if (data) {
      this.selected_claim_data = data.selected_claim_data;
      this.cwo_total = data.total;
      this.current_total = data.current_total;
      this.skip = data.skip + 1;
      this.total_row = data.total;
    }
    this.skip_row = this.skip;
    this.current_row = this.skip + this.current_total - 1;
  }
  //Search filter function
  sort_data(data) {
    this.pageChange(1, 'claim', data, 'searchFilter', 'null', 'null', 'null', 'null');
    this.searchData = data;
    //To reset the checklist
    this.check_all[1] = false;
    this.selected_claim_nos = [];
  }
  sort_wo_data(data) {
    // console.log(data);
    if (data == '') {
      this.get_workorder(null, null, null, 1, 1, null, null, 'null', 'null', null, null, null);
    } else {
      this.get_workorder('search', data, 0, 1, 1, null, null, 'null', 'null', null, null, null);
    }
  }
  sort_table(data) {
    this.pageChange(1, 'claim', data, 'filters', 'null', 'null', 'null', 'null');
  }
  closed_order_list(filter, from, to, type, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, search) {
    this.closed_sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.get_workorder(filter, from, to, type, this.closed_pges, sort_type, this.sortByAsc, sorting_name, sorting_method, closedsearch, workordersearch, search);
    } else {
      this.sortByAsc = true;
      this.get_workorder(filter, from, to, type, this.closed_pges, sort_type, this.sortByAsc, sorting_name, sorting_method, closedsearch, workordersearch, search);
    }
  }
  workorder_search(filter, from, to, type, page, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, search) {
    this.workorder_filter = search;
    console.log('workorder_filter', this.workorder_filter);
    console.log(page);
    this.get_workorder(filter, from, to, type, page, sort_type, this.sortByAsc, sorting_name, sorting_method, null, this.workOrderFind.value, search);
  }
  work_order_list(sort_type, sorting_name, sorting_method, search) {
    console.log(sort_type);
    this.search = search;
    let searchs = this.search;
    this.wo_sorting_name = sort_type;
    if (searchs == 'search') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.get_workorder(null, null, null, 1, this.pages, sort_type, this.sortByAsc, sorting_name, sorting_method, null, null, search);
      } else {
        this.sortByAsc = true;
        this.get_workorder(null, null, null, 1, this.pages, sort_type, this.sortByAsc, sorting_name, sorting_method, null, null, search);
      }
    } else {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.get_workorder(null, null, null, 1, this.pages, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, search);
      } else {
        this.sortByAsc = true;
        this.get_workorder(null, null, null, 1, this.pages, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, search);
      }
    }
  }
  get_workorder(filter, from, to, type, page, sort_data, sort_type, sorting_name, sorting_method, closedsearch, workordersearch, search) {
    this.loader.start();
    this.search = search;
    let searchs = this.search;
    this.searchValue = this.search;
    console.log('', this.searchValue);
    let page_count = 15;
    this.type = filter;
    if (filter == null && from == null && to == null) {
      this.pages = page;
      this.search = this.workorder_filter;
      searchs = this.search;
      if (sorting_name == 'null' && searchs == null) {
        // this.Jarwis.get_workorder(0, 0, 0, 1, page, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, search).subscribe(
        //   data => this.form_wo_table(data, page),
        //   error => this.error_handler(error)
        // );
        this.Jarwis.get_workorder_new(0, 1, page, closedsearch, workordersearch).subscribe(data => this.form_wo_table(data, page), error => this.error_handler(error));
      } else if (searchs == 'search') {
        console.log('workfindValues', this.workOrderFind.value);
        console.log('INN');
        console.log('created_at', this.workOrderFind.value.created_at);
        if (this.workOrderFind.value.created_at?.[0] != null && this.workOrderFind.value.created_at?.[1] != null) {
          this.workOrderFind.value.created_at['startDate'] = this.datepipe.transform(new Date(this.workOrderFind.value.created_at?.[0]), 'yyyy-MM-dd');
          this.workOrderFind.value.created_at['endDate'] = this.datepipe.transform(new Date(this.workOrderFind.value.created_at?.[1]), 'yyyy-MM-dd');
          this.workOrderFind.value.created_at.pop(this.workOrderFind.value.created_at[0]);
          this.workOrderFind.value.created_at.pop(this.workOrderFind.value.created_at[1]);
          const obj = {
            ...this.workOrderFind.controls['created_at'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.workOrderFind.value.created_at = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.workOrderFind.value.created_at);
        } else {
          this.workOrderFind.value.created_at = null;
          this.workOrderFind.value.created_at = null;
        }
        console.log('due_date', this.workOrderFind.value.due_date);
        if (this.workOrderFind.value.due_date?.[0] != null && this.workOrderFind.value.due_date?.[1] != null) {
          console.log('due_date', this.workOrderFind.controls['due_date'].value);
          this.workOrderFind.value.due_date['startDate'] = this.datepipe.transform(new Date(this.workOrderFind.value.due_date?.[0]), 'yyyy-MM-dd');
          this.workOrderFind.value.due_date['endDate'] = this.datepipe.transform(new Date(this.workOrderFind.value.due_date?.[1]), 'yyyy-MM-dd');
          this.workOrderFind.value.due_date.pop(this.workOrderFind.value.due_date[0]);
          this.workOrderFind.value.due_date.pop(this.workOrderFind.value.due_date[1]);
          const obj = {
            ...this.workOrderFind.controls['due_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.workOrderFind.value.due_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.workOrderFind.value.due_date);
        } else {
          this.workOrderFind.value.due_date = null;
          this.workOrderFind.value.due_date = null;
        }
        // this.Jarwis.get_table_page(sort_data, page, page_count, sort_type, sorting_name, this.sortByAsc, this.createClaimsFind.value, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_workorder_new(0, 1, page, closedsearch, this.workOrderFind.value).subscribe(data => this.form_wo_table(data, page), error => this.error_handler(error));
        // this.Jarwis.get_workorder(0, 0, 0, 1, page, sort_type, sort_data, this.wo_sorting_name, this.sortByAsc, null, this.workOrderFind.value, this.search).subscribe(
        //   data => this.form_wo_table(data, page),
        //   error => this.error_handler(error)
        // );
      } else {
        this.Jarwis.get_workorder(0, 0, 0, 1, page, sort_type, sort_data, this.wo_sorting_name, this.sortByAsc, null, workordersearch, this.search).subscribe(data => this.form_wo_table(data, page), error => this.error_handler(error));
      }
    } else if (filter == 'search') {
      this.pages = page;
      this.Jarwis.get_workorder(filter, from, 0, 1, page, sort_type, sort_data, sorting_name, sorting_method, null, null, search).subscribe(data => this.form_wo_table(data, page), error => this.error_handler(error));
    } else if (filter == 'closedClaims') {
      this.closed_pges = page;
      console.log(this.closedClaimsFind.value);
      let closedSearch_notNull = [];
      let nullVal = false;
      let closedClaims_searchValue = [this.closedClaimsFind.value];
      console.log(closedClaims_searchValue);
      if (typeof closedClaims_searchValue === 'object' && closedClaims_searchValue !== null) {
        Object.keys(closedClaims_searchValue).forEach(key => {
          if (typeof closedClaims_searchValue[key] === 'object' && closedClaims_searchValue[key] !== null) {
            Object.keys(closedClaims_searchValue[key]).forEach(val => {
              if (typeof closedClaims_searchValue[key][val] === 'object' && closedClaims_searchValue[key][val] !== null) {
                Object.keys(closedClaims_searchValue[key][val]).forEach(data => {
                  if (closedClaims_searchValue[key][val][data] === null) {
                    nullVal = false;
                  } else {
                    nullVal = true;
                  }
                });
                closedSearch_notNull.push(nullVal);
              } else if (typeof closedClaims_searchValue[key][val] !== 'object' && closedClaims_searchValue[key][val] !== null && closedClaims_searchValue[key][val] != '') {
                nullVal = true;
                closedSearch_notNull.push(nullVal);
              } else if (typeof closedClaims_searchValue[key][val] !== 'object' && closedClaims_searchValue[key][val] !== null && closedClaims_searchValue[key][val] == '') {
                nullVal = false;
                closedSearch_notNull.push(nullVal);
              }
            });
          }
        });
      }
      if (closedSearch_notNull.some(x => x === true)) {
        this.search = this.closedclaims_filter;
        search = this.search;
      } else {
        this.search = null;
        sort_data = null;
        sort_type = null;
        sorting_name = null;
        sorting_method = null;
        search = this.search;
      }
      searchs = this.search;
      if (sorting_name == 'null' && searchs == null) {
        // this.Jarwis.get_workorder(filter, 0, 0, 1, page, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, search).subscribe(
        //   data => this.form_closedClaims_table(data, page),
        //   error => this.error_handler(error)
        // );
        this.Jarwis.get_workorder_new(filter, 1, page, closedsearch, workordersearch).subscribe(data => this.form_closedClaims_table(data, page), error => this.error_handler(error));
      } else if (searchs == 'search') {
        if (this.closedClaimsFind.value.dos?.[0] != null && this.closedClaimsFind.value.dos?.[1] != null) {
          console.log(this.closedClaimsFind.controls['dos'].value);
          this.closedClaimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.closedClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.closedClaimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.closedClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
          this.closedClaimsFind.value.dos.pop(this.closedClaimsFind.value.dos[0]);
          this.closedClaimsFind.value.dos.pop(this.closedClaimsFind.value.dos[1]);
          const obj = {
            ...this.closedClaimsFind.controls['dos'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.closedClaimsFind.value.dos = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.closedClaimsFind.value.dos);
        }
        if (this.closedClaimsFind.value.date?.[0] != null && this.closedClaimsFind.value.date.endDate != null) {
          console.log(this.closedClaimsFind.controls['date'].value);
          this.closedClaimsFind.value.date.startDate = this.datepipe.transform(new Date(this.closedClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.closedClaimsFind.value.date.endDate = this.datepipe.transform(new Date(this.closedClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
          this.closedClaimsFind.value.date.pop(this.closedClaimsFind.value.date[0]);
          this.closedClaimsFind.value.date.pop(this.closedClaimsFind.value.date[1]);
          const obj = {
            ...this.closedClaimsFind.controls['date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.closedClaimsFind.value.date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.closedClaimsFind.value.date);
        }
        this.Jarwis.get_workorder(filter, 0, 0, 1, page, sort_type, sort_data, this.closed_sorting_name, this.sortByAsc, this.closedClaimsFind.value, null, this.search).subscribe(data => this.form_closedClaims_table(data, page), error => this.error_handler(error));
        // this.Jarwis.get_workorder_new(filter, 1, page, this.closedClaimsFind.value,null ).subscribe(
        //   data => this.form_closedClaims_table(data, page),
        //   error => this.error_handler(error)
        // );
      } else {
        // this.Jarwis.get_workorder(filter, 0, 0, 1, page, sort_type, sort_data, this.closed_sorting_name, this.sortByAsc, closedsearch, null, this.search).subscribe(
        //   data => this.form_closedClaims_table(data, page),
        //   error => this.error_handler(error)
        // );
        this.Jarwis.get_workorder_new(filter, 1, page, closedsearch, workordersearch).subscribe(data => this.form_closedClaims_table(data, page), error => this.error_handler(error));
      }
    }
  }
  closedClaims_search(filter, from, to, type, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, searchdata) {
    this.closedclaims_filter = searchdata;
    this.get_workorder(filter, from, to, type, this.closed_pges, sort_type, sort_data, sorting_name, this.sortByAsc, closedsearch, null, searchdata);
  }
  form_wo_table(data, page_no) {
    // console.log(data);
    // this.work_order_data = data.data;
    this.GridData_WorkOrders = [];
    if (data) {
      this.GridData_WorkOrders = data.data;
      this.myGrid_2.api?.setRowData(this.GridData_WorkOrders);
      this.loader.stop();
      this.gridApi_2.closeToolPanel();
      //  this.setAutoHeight();
      console.log('GridData2', this.GridData_WorkOrders);
      // console.log('work_order_data',this.work_order_data);
      this.wo_total = data.count;
      this.wo_page_number = page_no;
      this.w_total = data.count;
      this.w_current_total = data.current_total;
      this.w_skip = data.skip + 1;
      this.w_skip_rows = this.w_skip;
      this.w_current_row = this.w_skip + this.w_current_total - 1;
      this.w_total_row = this.w_total;
    }
  }
  form_closedClaims_table(data, page_no) {
    if (data) {
      this.GridData_ClosedClaims = [];
      this.closed_data = data.data;
      this.GridData_ClosedClaims = data.data;
      this.myGrid_3.api.setRowData(this.GridData_ClosedClaims);
      this.loader.stop();
      this.gridApi_3.closeToolPanel();
      // this.autoSizeAll();
      //  this.setAutoHeight();
      console.log('GridRowData', this.GridData_ClosedClaims);
      this.closed_claim_data = data.closed_claim_data;
      this.closed_total = data.count;
      this.current_totals = data.current_total;
      this.skips = data.skip + 1;
      this.total_rows = data.count;
    } else {
      this.GridData_ClosedClaims = [];
      //  this.setAutoHeight();
      this.myGrid_3.api.setRowData(this.GridData_ClosedClaims);
      this.gridApi_3.closeToolPanel();
      // this.autoSizeAll();
      this.loader.stop();
    }
    console.log('closed DAta', this.closed_data);
    this.closed_page_number = page_no;
    this.skip_rows = this.skips;
    this.current_rows = this.skips + this.current_totals - 1;
  }
  get_wo_details(id, name, assigned) {
    console.log('sssa', id, name, assigned);
    this.loading = true;
    this.wo_details = [];
    this.wo_name = name;
    this.wo_created = assigned;
    this.Jarwis.get_workorder_details(id).subscribe(data => this.wo_details_table(data), error => this.error_handler(error));
  }
  export_excel_files(type, table_name, search) {
    // const exportParams: ExcelExportParams = {
    //   skipHeader: false,
    //   columnWidth: 20,
    //   sheetName: 'My Sheet Name',
    //   fileName: 'my-file-name.xlsx',
    //   customHeader: [
    //   ]
    // };
    // call exportDataAsExcel() to export your data as an Excel file
    // this.myGrid_1.api?.exportDataAsCsv();
    console.log(table_name);
    if (table_name == 'Create_work_order_claims') {
      this.searchClaims = this.createClaimsFind.value;
      this.myGrid_1.api?.exportDataAsExcel();
    } else if (table_name == 'Closed_claims') {
      this.searchClaims = this.closedClaimsFind.value;
      this.myGrid_3.api?.exportDataAsExcel();
    } else if (table_name == 'work_orders') {
      this.workordersearch = this.workOrderFind.value;
      this.myGrid_2.api?.exportDataAsExcel();
    } else if (table_name == 'all_claims_list') {
      this.searchClaims = this.allClaimsFind.value;
      this.myGrid_6.api?.exportDataAsExcel();
    }
    // if(table_name !='all_claims_list')
    // {
    // this.Jarwis.fetch_create_claims_export_data(this.setus.getId(), table_name, this.search, this.searchClaims, this.workordersearch).subscribe(
    //   data => this.export_handler.create_claim_export_excel(data),
    //   error => this.error_handler(error)
    // );
    // }
    // else if(table_name == 'all_claims_list'){
    //   this.Jarwis.fetch_all_claims_export_data(this.setus.getId(),table_name,this.search,this.searchClaims,this.workordersearch).subscribe(
    //     data => this.export_handler.create_claim_export_excel(data),
    //   error => this.error_handler(error)
    //   )
    // }
  }

  export_pdf_files(type, table_name) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_create_claims_export_data_pdf(this.setus.getId(), table_name, this.search).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  export_excel_wo_files(type, table_name) {
    console.log(this.searchValue);
    // this.Jarwis.fetch_work_order_export_data(this.setus.getId(), table_name, this.searchValue, this.workOrderFind.value).subscribe(
    //   data => this.export_handler.create_wo_export_excel(data),
    //   error => this.error_handler(error)
    // );
    this.myGrid_2.api?.exportDataAsExcel();
  }
  export_pdf_wo_files(type, table_name) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_work_order_export_data_pdf(this.setus.getId(), table_name).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  export_Excel_handler() {}
  wo_details_table(data) {
    this.loading = false;
    this.wo_details = data.data;
    console.log(this.wo_details);
  }
  export_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_calim_export_data(filter, s_code, this.setus.getId()).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  export_wo_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    let wo_type = 1;
    this.Jarwis.fetch_wo_export_data(filter, s_code, wo_type, this.setus.getId()).subscribe(data => this.export_handler.ready_wo_export(data, type), error => this.error_handler(error));
  }
  wo_export_function(type) {
    this.export_handler.sort_export_data(this.wo_details, type, 'wo_detail');
  }
  get_line_items(claim) {
    let stat = 0;
    for (let i = 0; i < this.line_item_data.length; i++) {
      let array = this.line_item_data[i];
      let x = array.find(x => x.claim_id == claim['claim_no']);
      if (x != undefined) {
        this.line_data = array;
        stat = 1;
      }
    }
    if (stat == 0) {
      this.Jarwis.get_line_items(claim).subscribe(data => this.assign_line_data(data), error => this.handleError(error));
    }
    // this.pageChange(1, 'claims', 'null', 'null', 'null', 'null', 'null', 'null');  edited..
  }

  assign_line_data(data) {
    this.line_item_data.push(data.data);
    this.line_data = data.data;
    console.log(this.line_data);
  }
  reload_data(page) {
    console.log('Yes');
    // this.gridApi_1.setRowData([]);
    this.pages = page;
    this.modalRef?.hide();
    // this.Jarwis.get_first_table_data(null).subscribe((data: any) => {
    //   this.myGrid_1.api?.setRowData(data.data);
    // });
    console.log(this.modalService.hasOpenModals());
    if (this.modalService.hasOpenModals() == false) {
      // this.pageChange(this.pages, 'claim', null, null, 'null', 'null', null, 'null');
      // for (let i = 0; i < this.selected_claim_data.length; i++) {
      //   let claim = this.selected_claim_data[i]['claim_no'];
      //   let ind = this.selected_claim_nos.indexOf(claim);
      //   this.selected_claims.splice(ind, 1);
      //   this.selected_claim_nos.splice(ind, 1);
      // }
      let page_count = 15;
      this.Jarwis.get_table_page(null, this.pages, page_count, null, null, null, 'null', 'null').subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      // this.Jarwis.all_claim_list_new('null').subscribe(
      //   data => this.assign_page_data(data),
      //   error => this.handleError(error)
      // );
      this.checkboxes.forEach(element => {
        element.nativeElement.checked = false;
      });
      this.formGroup.reset();
    }
  }
  reload_data_allClaims(page) {
    this.pages = page;
    this.modalRef?.hide();
    // this.Jarwis.get_first_table_data(null).subscribe((data: any) => {
    //   this.myGrid_1.api?.setRowData(data.data);
    // });
    console.log(this.modalService.hasOpenModals());
    if (this.modalService.hasOpenModals() == false) {
      // this.pageChange(this.pages, 'claim', null, null, 'null', 'null', null, 'null');
      // for (let i = 0; i < this.selected_claim_data.length; i++) {
      //   let claim = this.selected_claim_data[i]['claim_no'];
      //   let ind = this.selected_claim_nos.indexOf(claim);
      //   this.selected_claims.splice(ind, 1);
      //   this.selected_claim_nos.splice(ind, 1);
      // }
      this.Jarwis.all_claim_list_new('null').subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      this.checkboxes.forEach(element => {
        element.nativeElement.checked = false;
      });
      this.formGroup.reset();
    }
  }
  // rowData:any = [];
  // selva()
  // {
  //   let newSelva : any = [];
  //   console.log('syss');
  //   this.Jarwis.get_table_page(1, 'claim', 'null', 'null', 'null', 'null', 'null', 'null').subscribe((data: any) => {
  //     console.log('New ARRAY', data);
  //     newSelva = data.data;
  //     console.log('NewSelva',newSelva);
  //     this.rowData = newSelva;
  //     this.myGrid_1.api.refreshCells();
  //   });
  //   this.myGrid_1.api?.setRowData(newSelva);
  //   this.myGrid_1.api?.refreshCells({force : true});
  // }
  reload_datas(page, type) {
    this.pages = page;
    if (type == 'import') {
      this.loader.start();
      this.Jarwis.get_upload_table_page(page, 15).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
    console.log(this.modalService.hasOpenModals());
    if (this.modalService.hasOpenModals() == false) {
      // this.pageChange(this.pages, 'claim', null, null, 'null', 'null', null, 'null');
      // for (let i = 0; i < this.selected_claim_data.length; i++) {
      //   let claim = this.selected_claim_data[i]['claim_no'];
      //   let ind = this.selected_claim_nos.indexOf(claim);
      //   this.selected_claims.splice(ind, 1);
      //   this.selected_claim_nos.splice(ind, 1);
      // }
      let page_count = 15;
      //   this.Jarwis.get_table_page(null, this.pages, page_count, null, null, null, null, null).subscribe(
      //     data => this.assign_page_data(data),
      //     error => this.handleError(error)
      //   );
      this.checkboxes.forEach(element => {
        element.nativeElement.checked = false;
      });
      this.formGroup.reset();
    }
  }
  load_reimport_data(page) {
    this.loader.start();
    this.reimport_page = page;
    let page_count = 15;
    this.Jarwis.get_reimport_table_page(this.reimport_page, page_count).subscribe(data => this.handleResponse_reimport(data), error => this.handleError(error));
  }
  unCheck() {
    this.checkboxes.forEach(element => {
      element.nativeElement.checked = false;
    });
  }
  un_selected(event, claim, index) {
    console.log(this.selected_claim_nos);
    if (claim == 'all' && event.target.checked == false) {
      // this.selected_claims=[];
      // this.selected_claim_nos=[];
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  // fetch_count()
  // {
  //  let x = this.notify_service.get_tl();
  //  console.log("Get count",x);
  // }
  // get_touch_limit()
  // {
  //   this.Jarwis.get_practice_stats().subscribe(
  //     data =>this.set_prac_settings(data)
  //     );
  // }
  //
  // set_prac_settings(data)
  // {
  //   let prac_data=data.data;
  //   this.touch_count=prac_data.touch_limit;
  //   console.log(this.touch_count);
  // }
  delete_file(id) {
    //console.log(id);
    this.Jarwis.delete_upload_file(id, this.setus.getId()).subscribe(data => {
      this.pageChange(this.upload_page, 'upload', 'null', 'null', 'null', 'null', 'null', 'null');
      this.deleteMessage(data);
    }, error => this.error_handler(error));
  }
  deleteMessage(data) {
    console.log(data);
    if (data.message == 'success') {
      this.toastr.successToastr('File Deleted');
    } else if (data.message == 'failure') {
      this.toastr.errorToastr('Unable to delete Processed file');
    }
  }
  error_handler(error) {
    //console.log(error);
    if (error.error.exception == 'Illuminate\Database\QueryException') {
      this.toastr.warningToastr('File Cannot Be Deleted', 'Foreign Key Constraint');
    } else {
      this.toastr.errorToastr(error.error.exception, 'Error!');
    }
  }
  process_uld_file(id) {
    console.log(id);
    this.Jarwis.process_upload_file(id, this.setus.getId()).subscribe(data => {
      this.handlemessage_new(data);
    }, error => this.error_handler(error));
  }
  get_graph_stats() {
    this.Jarwis.get_graph_stats_fork(this.setus.getId()).subscribe(data => {
      this.assign_graph_values(data[0]), this.assign_table_values(data[1]);
    }, error => this.handleError(error));
    // const isDisabled = (date: NgbDate, current: {month: number}) => date.day === 13;
    // this.Jarwis.get_claim_graph_stats(this.setus.getId()).subscribe(
    //   data  => ,
    //   error => console.log(error)
    //   );
  }

  assign_graph_values(data) {
    //console.log(data);
    let graph_data_year = [];
    let graph_data_flow = [];
    let graph_data = [];
    if (data.data.length == 0) {
      this.line = "";
    } else {
      graph_data_year = data.data['year'][0];
      graph_data_flow = data.data['data'];
      graph_data = data.daily;
      this.line = {
        "chart": {
          // "caption": "Store footfall vs Online visitors ",
          // "subCaption": "Last Year",
          "xAxisName": "Quarter",
          "yAxisName": "Claims",
          "base": "10",
          // "numberprefix": "",
          "theme": "fusion"
        },
        "categories": [{
          "category": [{
            "label": graph_data_year[0] + " Q1"
          }, {
            "label": graph_data_year[1] + " Q2"
          }, {
            "label": graph_data_year[2] + " Q3"
          }, {
            "label": graph_data_year[3] + " Q4"
          }
          // {
          //     "label": "2019"
          // }
          ]
        }],

        "dataset": [{
          "seriesname": "Assigned Claims",
          "data": [{
            "value": graph_data_flow[0][0]
          }, {
            "value": graph_data_flow[1][0]
          }, {
            "value": graph_data_flow[2][0]
          }, {
            "value": graph_data_flow[3][0]
          }]
        }, {
          "seriesname": "Completed Claims",
          "data": [{
            "value": graph_data_flow[0][1]
          }, {
            "value": graph_data_flow[1][1]
          }, {
            "value": graph_data_flow[2][1]
          }, {
            "value": graph_data_flow[3][1]
          }]
        }]
      };
    }
    // console.log("Ststus",this.status);
    if (data.daily['work'].length == 0) {
      this.line2 = [];
    } else {
      let value1 = [];
      let value2 = [];
      // console.log("Here");
      // console.log("Here222");
      // graph_data=[];
      value1 = [];
      value2 = [];
      let days = graph_data['dates'];
      let data_days = graph_data['days'];
      let data_data = graph_data['work'];
      // console.log("Chc",days,data_days,data_data)
      let graph_data2 = [];
      for (let i = 0; i < days.length; i++) {
        graph_data2.push({
          "label": '' + days[i] + ''
        });
        let index = data_days.indexOf(days[i]);
        if (index >= 0) {
          value1.push({
            "value": data_data[index][0]
          });
          value2.push({
            "value": data_data[index][1]
          });
        } else {
          value1.push({
            "value": '0'
          });
          value2.push({
            "value": '0'
          });
        }
      }
      // console.log("Graph Check",graph_data2,value1,value2);
      // console.log("Here3333");
      this.line2 = {
        "chart": {
          // "caption": "Store footfall vs Online visitors ",
          // "subCaption": "Last Year",
          "xAxisName": "Date",
          "yAxisName": "Claims",
          "base": "10",
          "theme": "fusion"
        },
        "categories": [{
          "category": graph_data2
        }],
        "dataset": [{
          "seriesname": "Assigned",
          "data": value1
        }, {
          "seriesname": "Completed",
          "data": value2
        }]
      };
    }
  }
  assign_table_values(data) {
    //  console.log("Asign",data.insurance);
    if (data.insurance.ins_data != undefined && data.insurance.ins_data.length != 0) {
      this.insurance_table_data = data.insurance.ins_data;
      this.insurance_total = data.insurance.total_data;
      this.insurance_per = data.insurance.total_per;
      this.insurance_table_data_count = data.insurance.ins_data.length;
    } else if (data.insurance.ins_data == undefined || data.insurance.ins_data.length == 0) {
      this.insurance_table_data_count = 0;
    }
    if (data.status.ins_data != undefined && data.status.ins_data.length != 0) {
      this.status_data = data.status.ins_data;
      this.status_total = data.status.total_data;
      this.status_perc = data.status.total_per;
      this.status_data_count = data.status.ins_data.length;
    } else if (data.status.ins_data == undefined || data.status.ins_data.length == 0) {
      this.status_data_count = 0;
    }
    if (data.associate.ins_data != undefined && data.associate.ins_data != 0) {
      this.assoc_data = data.associate.ins_data;
      this.assoc_total = data.associate.total_data;
      this.assoc_perc = data.associate.total_per;
      this.assoc_data_count = data.associate.ins_data.length;
    } else if (data.associate.ins_data == undefined || data.associate.ins_data == 0) {
      this.assoc_data_count = 0;
    }
    // console.log("I/p",data);
  }

  get_detailed(data) {
    this.detailed_claims = [];
    this.week_count = [];
    this.assoc_target_data = [];
    this.assoc_ach_data = [];
    this.Jarwis.fork_user_month_det(this.setus.getId(), data.assoc_id).subscribe(data => {
      this.set_detailed(data[0]), this.weekly_data(data[1]);
    });
    // console.log(data);
    // this.detailed_claims=[];
    // this.Jarwis.get_detailed(data.assoc_id).subscribe(
    //   data  => this.set_detailed(data),
    //   error => this.handleError(error)
    // );
  }

  set_detailed(data) {
    // this.detailed_claims=[];
    //console.log("Detailed",data.claims);
    this.detailed_claims = data.claims;
  }
  weekly_data(data) {
    //console.log(data);
    this.week_count = data.weeks;
    this.assoc_ach_data = data.ach_per;
    this.assoc_target_data = data.target;
  }
  ngOnInit() {
    // this.auth.tokenValue.next(true);
    // this.get_statuscodes();
    console.log("YESSSSSSSSSSSSSSSSS");
    // pageChange(1,'claim','null','null','null','null','null','null')
    // this.Jarwis.get_table_page(1, 'claim', 'null', 'null', 'null', 'null', 'null', 'null').subscribe((data: any) => {
    //   console.log('New ARRAY', data);
    //   this.GridData_CreateWorkOrders = data.data;
    // })
    // this.getclaims();
    this.getSearchResults();
    this.user_role_maintainer();
    this.formValidators();
    this.claimValidators();
    // this.pageChange(1, 'all', null, null, null, null, null, null); // removed...
    // this.formGroup = new FormGroup({
    //   report_date: new FormControl('', [
    //     Validators.required
    //   ]),
    //   file: new FormControl('', [
    //     Validators.required
    //   ]) ,
    //   notes: new FormControl('', [
    //     Validators.required
    //   ])
    // });
    this.reimport_formGroup = this.formBuilder.group({
      report_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]
    });
    this.closedClaimsFind = this.formBuilder.group({
      dos: [null],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      responsibility: [],
      total_charge: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.decimal_pattern)]),
      rendering_provider: [],
      date: [null],
      status_code: [],
      sub_status_code: [],
      payer_name: [],
      claim_note: [],
      insurance: [],
      prim_ins_name: [],
      prim_pol_id: [],
      sec_ins_name: [],
      sec_pol_id: [],
      ter_ins_name: [],
      ter_pol_id: []
    });
    this.createClaimsFind = this.formBuilder.group({
      file_id: [],
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      responsibility: [],
      total_charge: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.decimal_pattern)]),
      rendering_provider: [],
      payer_name: [],
      date: [],
      claim_note: [],
      insurance: [],
      prim_ins_name: [],
      prim_pol_id: [],
      sec_ins_name: [],
      sec_pol_id: [],
      ter_ins_name: [],
      ter_pol_id: [],
      bill_submit_date: [],
      denial_code: []
    });
    /* this.reallocateClaimsFind = this.formBuilder.group({
      dos: [],
      age_filter:[],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      responsibility: [],
      total_ar: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.decimal_pattern),
      ]),
      rendering_provider:[],
      payer_name:[],
      date:[],
      bill_submit_date: [],
      denial_code: []
    }); */
    this.allClaimsFind = this.formBuilder.group({
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      responsibility: [],
      total_charge: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.decimal_pattern)]),
      rendering_provider: [],
      payer_name: [],
      claim_status: [],
      bill_submit_date: [],
      denial_code: [],
      date: [],
      status_code: [],
      sub_status_code: []
    });
    this.reassignedClaimsFind = this.formBuilder.group({
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      responsibility: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.decimal_pattern)]),
      rendering_provider: [],
      date: [],
      status_code: [],
      sub_status_code: [],
      payer_name: []
    });
    this.workOrderFind = this.formBuilder.group({
      created_at: [null],
      due_date: [null],
      work_order_name: [],
      priority: []
    });
    this.changeExecutive = this.formBuilder.group({
      user_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      new_user_id: [null],
      audit_status_claims: [null]
    });
    this.processNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
      processnotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
    });
    this.claimNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
      claim_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
    });
    this.qcNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
      qc_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
      root_cause: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
      error_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
    });
    this.autoclose_claim = this.formBuilder.group({
      file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]
    });
    this.workOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
      workorder_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
      due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
      wo_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
    });
    // this.workOrder = new FormGroup({
    //   workorder_name: new FormControl('', [
    // Validators.required
    // ]),
    // due_date: new FormControl('', [
    //   Validators.required
    // ]),
    // priority: new FormControl('', [
    //   Validators.required
    // ]),
    // wo_notes: new FormControl('', [
    //   Validators.required
    // ])
    // });
    console.log(this.age_options);
    const debouncetime = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(700));
    // this.search_data.valueChanges.pipe(debouncetime)
    //   .subscribe(result => {
    //     console.log('RESULT', result);
    //     this.sort_data(result)
    //   });
    // this.wo_search_data.valueChanges.pipe(debouncetime)
    //   .subscribe(result => this.sort_wo_data(result)
    //   );
    // this.filter_option.valueChanges
    //   .subscribe(result => this.sort_table(result)
    //   );
    // this.fetch_count();
    this.subscription = this.notify_service.fetch_touch_limit().subscribe(message => {
      this.touch_count = message;
    });
    this.user_name = this.setus.getname();
    console.log('User_Name', this.user_name);
    //this.get_graph_stats();
    //this.file_count();  Not needed..
  }

  user_role_maintainer() {
    let role_id = Number(this.setus.get_role_id());
    console.log(role_id);
    if (role_id == 5 || role_id == 3 || role_id == 2) {
      this.user_role = 2;
      this.class_change['tab2'] = 'active';
      // this.pageChange(1,'claim','null','null','null','null','null','null');
      this.class_change_tab['tab2'] = 'tab-pane active';
    } else if (role_id == 1) {
      this.user_role = 1;
    } else if (role_id == 16) {
      this.user_role = 16;
      // this.class_change['tab1'] = '';
      this.class_change['tab2'] = 'active';
      this.class_change_tab['tab1'] = 'tab-pane active';
      // this.class_change_tab['tab2'] = 'tab-pane';
      this.Jarwis.all_claim_list_new('null').subscribe(data => this.assign_page_data(data), error => this.handleError(error));
    } else if (role_id == 11) {
      this.user_role = 16;
    }
  }
  file_count() {
    this.Jarwis.get_file_ready_count().subscribe(res => {
      this.handlesuccess(res);
    }, error => this.notify(error));
  }
  get f() {
    return this.formGroup.controls;
  }
  get auto_cc() {
    return this.autoclose_claim.controls;
  }
  get rf() {
    return this.reimport_formGroup.controls;
  }
  formValidators() {
    this.formGroup = this.formBuilder.group({
      report_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]
    });
  }
  get fe() {
    return this.workOrder.controls;
  }
  claimValidators() {
    this.workOrder = this.formBuilder.group({
      workorder_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      due_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      wo_notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      console.log('Error');
      return;
    }
  }
  onClaimSubmit() {
    this.submitted = true;
    // if (this.modalform.invalid) {
    //   console.log('Error');
    //   return;
    // }
    // this.processdata();
  }

  ngAfterViewInit() {
    this.get_initial_values();
    if (this.touch_count == undefined) {
      this.touch_count = this.notify_service.manual_touch_limit();
      console.log('touch_count', this.touch_count);
    }
    console.log('LAST IN CLAIM COMP');
    // this.auth.tokenValue.next(true);
    console.log('Token Value in Claims', this.auth.tokenValue.value);
    // let data = localStorage.getItem('token');
    // this.auth.login(data);
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
    // this.gridApi_1.sizeColumnsToFit();
    // this.gridApi_2.sizeColumnsToFit();
    // this.gridApi_3.sizeColumnsToFit();
    // this.gridApi_4.sizeColumnsToFit();
    // this.gridApi_5.sizeColumnsToFit();
    // this.gridApi_6.sizeColumnsToFit();
    setTimeout(() => {
      this.pageChange(1, 'claim', 'null', 'null', 'null', 'null', 'null', 'null');
    }, 1000);
  }
  get_initial_values() {
    this.initial_allclaim_filter = this.allClaimsFind.value;
    this.initial_create_filter = this.createClaimsFind.value;
    this.initial_closed_filter = this.closedClaimsFind.value;
    this.initial_wo_filter = this.workOrderFind.value;
    console.log(this.initial_allclaim_filter);
    console.log(this.initial_create_filter);
    console.log(this.initial_closed_filter);
    console.log(this.initial_wo_filter);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
    this.observalble.unsubscribe();
  }
  sort_details(type) {
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.Jarwis.claims_order_list(type, this.setus.getId(), this.sortByAsc).subscribe(data => this.orderListResponse(data), error => this.notify(error));
    } else {
      this.sortByAsc = true;
      this.Jarwis.claims_order_list(type, this.setus.getId(), this.sortByAsc).subscribe(data => this.orderListResponse(data), error => this.notify(error));
    }
  }
  orderListResponse(data) {}
  //Get Status codes from Backend
  get_statuscodes() {
    this.Jarwis.get_status_codes(this.setus.getId(), 'all').subscribe(data => {
      this.status_list = data['status'], this.process_codes(data);
    });
  }
  process_codes(data) {
    console.log(data);
    let status_option = [];
    this.status_codes_data = data.status;
    this.sub_status_codes_data = data.sub_status;
    for (let i = 0; i < this.status_codes_data.length; i++) {
      if (this.status_codes_data[i]['status'] == 1) {
        // alert(this.status_codes_data[i]['status_code']);
        status_option.push({
          id: this.status_codes_data[i]['id'],
          description: this.status_codes_data[i]['status_code'] + '-' + this.status_codes_data[i]['description']
        });
      }
    }
    this.status_options = status_option;
  }
  allClaim_status_code_changed(event) {
    if (event.value != undefined) {
      let sub_status = this.sub_status_codes_data[event.value.id];
      let sub_status_option = [];
      console.log('sub_status_option');
      if (sub_status == undefined || sub_status == '') {
        this.sub_options = [];
        this.allClaimsFind.patchValue({
          sub_status_code: ''
        });
      } else {
        for (let i = 0; i < sub_status.length; i++) {
          if (sub_status[i]['status'] == 1) {
            sub_status_option.push({
              id: sub_status[i]['id'],
              description: sub_status[i]['status_code'] + '-' + sub_status[i]['description']
            });
          }
          this.sub_options = sub_status_option;
          if (this.sub_options.length != 0) {
            this.allClaimsFind.patchValue({
              sub_status_code: {
                id: this.sub_options[0]['id'],
                description: this.sub_options[0]['description']
              }
            });
          } else {
            this.allClaimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  }
  /* public reallocate_status_code_changed(event:any)
  {
    if(event.value!=undefined)
    {
      let sub_status=this.sub_status_codes_data[event.value.id];
      let sub_status_option=[];
      console.log('sub_status_option');
      if(sub_status == undefined || sub_status =='' )
      {
        this.sub_options=[];
        this.reallocateClaimsFind.patchValue({
          sub_status_code: ''
        });
      }
      else {
        for(let i=0;i<sub_status.length;i++)
        {
          if(sub_status[i]['status']==1)
          {
            sub_status_option.push({id: sub_status[i]['id'], description: sub_status[i]['status_code'] +'-'+ sub_status[i]['description'] });
          }
          this.sub_options=sub_status_option;
          if(this.sub_options.length !=0)
          {
            this.reallocateClaimsFind.patchValue({
              sub_status_code: {id:this.sub_options[0]['id'],description:this.sub_options[0]['description']}
            });
          }
          else{
            this.reallocateClaimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  } */
  closedClaims_status_code_changed(event) {
    if (event.value != undefined) {
      let sub_status = this.sub_status_codes_data[event.value.id];
      let sub_status_option = [];
      console.log(sub_status);
      console.log(sub_status_option);
      if (sub_status == undefined || sub_status == '') {
        this.sub_options = [];
        this.closedClaimsFind.patchValue({
          sub_status_code: ''
        });
      } else {
        for (let i = 0; i < sub_status.length; i++) {
          if (sub_status[i]['status'] == 1) {
            sub_status_option.push({
              id: sub_status[i]['id'],
              description: sub_status[i]['status_code'] + '-' + sub_status[i]['description']
            });
          }
          this.sub_options = sub_status_option;
          console.log(this.sub_options);
          if (this.sub_options.length != 0) {
            this.closedClaimsFind.patchValue({
              sub_status_code: {
                id: this.sub_options[0]['id'],
                description: this.sub_options[0]['description']
              }
            });
          } else {
            this.closedClaimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  }

  reassignedClaims_status_code_changed(event) {
    if (event.value != undefined) {
      let sub_status = this.sub_status_codes_data[event.value.id];
      let sub_status_option = [];
      console.log('sub_status_option');
      if (sub_status == undefined || sub_status == '') {
        this.sub_options = [];
        this.reassignedClaimsFind.patchValue({
          sub_status_code: ''
        });
      } else {
        for (let i = 0; i < sub_status.length; i++) {
          if (sub_status[i]['status'] == 1) {
            sub_status_option.push({
              id: sub_status[i]['id'],
              description: sub_status[i]['status_code'] + '-' + sub_status[i]['description']
            });
          }
          this.sub_options = sub_status_option;
          if (this.sub_options.length != 0) {
            this.reassignedClaimsFind.patchValue({
              sub_status_code: {
                id: this.sub_options[0]['id'],
                description: this.sub_options[0]['description']
              }
            });
          } else {
            this.reassignedClaimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  }

  sort_claims(type) {
    if (type == 'acct_no') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.acct_no.localeCompare(b.acct_no));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.acct_no.localeCompare(a.acct_no));
      }
    }
    if (type == 'claim_no') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.claim_no.localeCompare(b.claim_no));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.claim_no.localeCompare(a.claim_no));
      }
    }
    if (type == 'patient_name') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.patient_name.localeCompare(a.patient_name));
      }
    }
    if (type == 'dos_date') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.dos.localeCompare(b.dos));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.dos.localeCompare(a.dos));
      }
    }
    if (type == 'prim_ins_name') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.prim_ins_name.localeCompare(b.prim_ins_name));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.prim_ins_name.localeCompare(a.prim_ins_name));
      }
    }
    if (type == 'total_charges') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.total_charges.localeCompare(b.total_charges));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.total_charges.localeCompare(a.total_charges));
      }
    }
    if (type == 'total_ar') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.total_ar.localeCompare(b.total_ar));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.total_ar.localeCompare(a.total_ar));
      }
    }
    if (type == 'claim_Status') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.wo_details.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
      } else {
        this.sortByAsc = true;
        this.wo_details.sort((a, b) => b.claim_Status.localeCompare(a.claim_Status));
      }
    }
  }
  // tooltipOptions= {
  //   'placement': 'right',
  //   'show-delay': '200',
  //   'tooltip-class': 'new-tooltip-class',
  //   'background-color': '#9ad9e4'
  //   };
  getSearchResults() {
    this.Jarwis.get_payer_name().subscribe(sr => {
      this.searchResults = sr['payer_names'];
    });
  }
  searchFromArray(arr, regex) {
    let matches = [],
      i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  }
  //For CWO
  searchOnKeyUp(event) {
    let input = event.target.value;
    if (input.length > 0) {
      this.results = this.searchFromArray(this.searchResults, input);
    } else {
      this.selected_val = null;
      this.isValueSelected = false;
    }
  }
  onselectvalue(value) {
    if (value != '' || value != null) {
      this.isValueSelected = true;
      this.selected_val = value;
    } else {
      this.selected_val = null;
      this.isValueSelected = false;
    }
  }
  //For ReAssignedClaim
  reassignedSearchOnKeyUp(event) {
    let input = event.target.value;
    if (input.length > 0) {
      this.reassigned_results = this.searchFromArray(this.searchResults, input);
    } else {
      this.reassign_selected_val = null;
      this.reassignSelected = false;
    }
  }
  reassignedSelectvalue(value) {
    if (value != '' || value != null) {
      this.reassignSelected = true;
      this.reassign_selected_val = value;
    } else {
      this.reassign_selected_val = null;
      this.reassignSelected = false;
    }
  }
  //For ClosedClaim
  closedSearchOnKeyUp(event) {
    let input = event.target.value;
    if (input.length > 0) {
      this.closed_results = this.searchFromArray(this.searchResults, input);
    } else {
      this.closed_selected_val = null;
      this.closedSelected = false;
    }
  }
  closedSelectvalue(value) {
    if (value != '' || value != null) {
      this.closedSelected = true;
      this.closed_selected_val = value;
    } else {
      this.closed_selected_val = null;
      this.closedSelected = false;
    }
  }
  //For AllClaim
  allclaimSearchOnKeyUp(event) {
    let input = event.target.value;
    if (input.length > 0) {
      this.allclaim_results = this.searchFromArray(this.searchResults, input);
    } else {
      this.allclaim_selected_val = null;
      this.allclaimSelected = false;
    }
  }
  allclaimSelectvalue(value) {
    if (value != '' || value != null) {
      this.allclaimSelected = true;
      this.allclaim_selected_val = value;
    } else {
      this.allclaim_selected_val = null;
      this.allclaimSelected = false;
    }
  }
  reimport_template() {
    this.Jarwis.reimport_template().subscribe(response => {
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(blob, 'reimport_template.xlsx');
    });
  }
  reimport_pageChange(page) {
    this.reimport_page = page;
  }
  //For ReallocateClaim
  /* reallocateclaimSearchOnKeyUp(event) {
    let input = event.target.value;
    if (input.length > 0) {
      this.reallocate_results = this.searchFromArray(this.searchResults, input);
    }
    else{
      this.reallocate_selected_val = null;
      this.reallocateSelected = false;
    }
  }
  reallocateclaimSelectvalue(value) {
    if(value !='' || value !=null){
      this.reallocateSelected = true;
    this.reallocate_selected_val = value;
    }
    else{
      this.reallocate_selected_val = null;
      this.reallocateSelected = false;
    }
  } */
  get_userlist() {
    this.Jarwis.getExecutiveList().subscribe(response => {
      this.getUserList = response['user_list'];
    });
  }
  forms() {
    return this.changeExecutive.controls;
  }
  move_create_work_order() {
    this.submitUser = true;
    // stop here if form is invalid
    if (this.changeExecutive.invalid) {
      return;
    }
    console.log(this.changeExecutive.value);
    let user_id = this.changeExecutive.value.user_id;
    let audit_status_claims = this.changeExecutive.value.audit_status_claims;
    let new_user_id = this.changeExecutive.value.new_user_id;
    this.formdata.append('user_id', user_id);
    this.formdata.append('new_user_id', new_user_id);
    this.formdata.append('audit_status_claims', audit_status_claims);
    this.formdata.append('practice_dbid', localStorage.getItem('practice_id'));
    this.Jarwis.move_create_work_orders(this.formdata).subscribe(message => {
      let data = message['reimport_msg'];
      if (message['status'] == 200) {
        this.notifysuccess(data);
      } else if (message['status'] == 204) {
        this.toastr.errorToastr(data);
      }
      this.changeExecutive.reset();
      this.userEnabled = false;
      this.auditClaimsEnabled = false;
    }, error => this.notification(error));
  }
  notification(error) {
    this.toastr.errorToastr('Error Change Executive.');
  }
  onSelectedOptionChange() {
    this.dependentUserOptions = [];
    this.checkAuditClaims = [];
    this.formdata.append('selected_u_id', this.selectedUserId);
    // this.formdata.append('audit_claims_check_box', this.checkboxAuditClaims);
    this.formdata.append('practice_dbid', localStorage.getItem('practice_id'));
    //  EDITED.............
    // Make API call to retrieve dependent options
    // this.Jarwis.getReassignedUsers(this.formdata).subscribe(
    //   (userIds: any) => {
    //     this.dependentUserOptions = userIds['status'];
    //     if (userIds['status'] == 200) {
    //       this.userEnabled = true;
    //     } else {
    //       this.userEnabled = false;
    //     }
    //   },
    //   (error: any) => {
    //     console.error('Error retrieving dependent options:', error);
    //   }
    // );
    // this.Jarwis.audit_claims_found_user(this.formdata).subscribe(
    //   (claimId: any) => {
    //     this.checkAuditClaims = claimId['status'];
    //     console.log(claimId['status']);
    //     if (claimId['status'] == 200) {
    //       this.auditClaimsEnabled = true;
    //     } else {
    //       this.auditClaimsEnabled = false;
    //     }
    //   },
    //   (error: any) => {
    //     console.error('Error retrieving check box options:', error);
    //   }
    // );
  }

  cellrendered(headerName, params) {
    switch (headerName) {
      case 'touch':
        {
          if (params.value >= this.touch_count || params.value < this.touch_count) {
            return params.value;
          } else return '-Nil-';
        }
      case 'claim_no':
        {
          if (params.value) {
            return params.value;
          } else return '-Nil-';
        }
      case 'dos':
        {
          if (params.value) {
            if (params.value != '11/30/1899') {
              let x = params.value;
              x = this.datePipe.transform(x, 'MM/dd/yyyy');
              return `${x}`;
            } else {
              return '01/01/1970';
            }
          } else {
            return '-Nil-';
          }
        }
      case 'age':
        {
          if (params.value) {
            if (params.value <= 0) {
              return 0;
            } else {
              return `${params.value}`;
            }
          } else return '-Nil-';
        }
      case 'acct_no':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'patient_name':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'rendering_prov':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'responsibility':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'prim_ins_name':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'sec_ins_name':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'total_charges':
        {
          if (params.value) if (typeof params.value == 'string') {
            let x = parseInt(params.value);
            return x.toFixed(2);
          } else {
            return '-Nil-';
          }
          break;
        }
      case 'total_ar':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else {
            return '-Nil-';
          }
          break;
        }
      case 'claim_Status':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'denial_code':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'billed_submit_date':
        {
          if (params.value) {
            let rowData = params.node.data;
            let assignedTo = rowData.dos;
            if (assignedTo == '11/30/1899') {
              return `${'01/01/1970'}`;
            } else {
              let x = params.value;
              x = this.datePipe.transform(x, 'MM/dd/yyyy');
              return `${x}`;
            }
          } else {
            return '-Nil-';
          }
        }
      case 'claim_note':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'created_at':
        {
          let x;
          x = params.value.substring(0, 10);
          x = this.datePipe.transform(x, 'MM/dd/yyyy');
          x != null ? x : 'UA';
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo == null ? 'UA' : assignedTo} | ${x}`;
        }
    }
  }
  cellrendered_2(headername, params) {
    switch (headername) {
      case 'created':
        {
          let rowData = params.node.data;
          let assignedTo = rowData.created_at;
          assignedTo = assignedTo.substring(0, 10);
          assignedTo = this.datePipe.transform(assignedTo, 'MM/dd/yyyy');
          return ` ${params.value.charAt(0).toUpperCase() + params.value.slice(1)} | ${assignedTo}`;
        }
      case 'work_order_name':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'assigned_nos':
        {
          if (params.value) {
            return params.value;
          } else return '-Nil-';
        }
      case 'due_date':
        {
          if (params.value) {
            let x;
            x = this.datePipe.transform(params.value, 'MM/dd/yyyy');
            return `${x}`;
          } else return '-Nil-';
        }
      case 'billed':
        {
          if (params.value) return params.value.toFixed(2);else return '-Nil-';
        }
      case 'ar_due':
        {
          if (params.value) return params.value.toFixed(2);else return '-Nil-';
        }
      case 'status':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'status':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'priority':
        {
          if (params.value) {
            if (params.value == 'low') {
              return `<i class="fa fa-arrow-down"
          title="Low"></i>`;
            }
            if (params.value == 'medium') {
              return `<i class="fa fa-align-justify"
          title="Medium"></i>`;
            }
            if (params.value == 'high') {
              return `<i class="fa fa-arrow-up"
          title="High"></i>`;
            }
          } else {
            return '-Nil-';
          }
          break;
        }
      case 'work_notes':
        {
          return `<i title="${params.value}"
      class="fa fa-file-text"></i>`;
        }
    }
  }
  cellrendered3(headerName, params) {
    switch (headerName) {
      case 'touch':
        {
          if (params.value >= this.touch_count || params.value < this.touch_count) {
            return params.value;
          } else return '-Nil-';
        }
      case 'claim_no':
        {
          if (params.value) {
            return params.value;
          } else return '-Nil-';
        }
      case 'dos':
        {
          if (params.value) {
            if (params.value != '11/30/1899') {
              let x = params.value;
              x = this.datePipe.transform(x, 'MM/dd/yyyy');
              return `${x}`;
            } else {
              return '01/01/1970';
            }
          } else {
            return '-Nil-';
          }
        }
      case 'age':
        {
          if (params.value) {
            if (params.value <= 0) {
              return 0;
            } else {
              return `${params.value}`;
            }
          } else return '-Nil-';
        }
      case 'acct_no':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'patient_name':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'rendering_prov':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'responsibility':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'total_charges':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'total_ar':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else {
            return '-Nil-';
          }
          break;
        }
      case 'claim_Status':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'claim_note':
        {
          if (params.value == null || params.value) return `<i class="fa fa-info-circle" aria-hidden="true"
          title="${params.value}"></i>`;else return '-Nil-';
        }
      case 'created_ats':
        {
          let x;
          x = this.datePipe.transform(x, 'MM/dd/yyyy');
          x != null ? x : 'UA';
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo == null ? 'UA' : assignedTo} | ${x == null ? 'UA' : x}`;
        }
    }
  }
  cellrendered4(headerName, params) {
    switch (headerName) {
      case 'date':
        {
          if (params.value) {
            return params.value;
          } else return '-Nil-';
        }
      case 'file_name':
        {
          if (params.value) {
            return params.value;
          } else return '-Nil-';
        }
      case 'claims':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
        }
      case 'newclaims':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'uploaded':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'notes':
        {
          return `<i title="${params.value}"
      class="fa fa-file-text  cur-pointer"></i>`;
        }
      case 'download':
        {
          return `<i class="fa fa-download cur-pointer" style="color:#337ab7;width:20px;height:30px"
      title="Download File">`;
        }
      case 'delete':
        {
          return `<i class="fa fa-trash cur-pointer" style="color:#337ab7;width:20px;height:30px"
      title="Delete File"></i>`;
        }
      case 'settings':
        {
          console.log('IMported FIle', this.importProcessed);
          if (this.importedfile?.[0].id == params.data.id && this.importProcessed != 1 && this.importProcessed != undefined) {
            return `<i class="fa fa-cog cur-pointer" style="color:#337ab7;width:20px;height:30px"
       title="Process File"></i>`;
          }
        }
    }
  }
  cellrendered6(headerName, params) {
    switch (headerName) {
      case 'touch':
        {
          if (params.value >= this.touch_count || params.value < this.touch_count) {
            return params.value;
          } else return '-Nil-';
        }
      case 'claim_no':
        {
          if (params.value) {
            return params.value;
          } else return '-Nil-';
        }
      case 'dos':
        {
          if (params.value) {
            if (params.value != '11/30/1899') {
              let x = params.value;
              x = this.datePipe.transform(x, 'MM/dd/yyyy');
              return `${x}`;
            } else {
              return '01/01/1970';
            }
          } else {
            return '-Nil-';
          }
        }
      case 'age':
        {
          if (params.value) {
            if (params.value <= 0) {
              return 0;
            } else {
              return `${params.value}`;
            }
          } else return '-Nil-';
        }
      case 'acct_no':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'patient_name':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'rendering_prov':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'responsibility':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'total_charges':
        {
          if (params.value) if (typeof params.value == 'string') {
            let x = parseInt(params.value);
            return x.toFixed(2);
          } else {
            return '-Nil-';
          }
          break;
        }
      case 'total_ar':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else {
            return '-Nil-';
          }
          break;
        }
      case 'claim_Status':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'denial_code':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'billed_submit_date':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'claim_note':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'assigned_to':
        {
          let x = params.value;
          let rowData = params.node.data;
          let created_at = rowData.created_at;
          created_at = created_at.substring(0, 10);
          created_at = this.datePipe.transform(x, 'MM/dd/yyyy');
          created_at != null ? created_at : '-Nil-';
          return `${x != null ? x : 'UA'} | ${created_at}`;
        }
      case 'created_ats':
        {
          let x = params.value;
          let created_ats = new Date(x);
          let result = created_ats.toLocaleDateString('en-US');
          let rowData = params.node.data;
          let claimStatus = rowData.claim_Status;
          if (claimStatus != null || claimStatus != '') return `${result}`;else return '-Nil-';
        }
    }
  }
  onSelectionChanged(params) {
    this.cdtn = !this.cdtn;
    // console.log(this.cdtn);
    // const currentPage = params.api.paginationGetCurrentPage();
    this.currentPageData = [];
    this.selected_claim_nos = [];
    this.rowValue_ID_1 = this.gridApi_1.getSelectedRows();
    const selectedNodes = this.gridApi_1.getSelectedNodes();
    console.log('ID1', this.rowValue_ID_1);
    if (this.rowValue_ID_1 != '') {
      for (let i = 0; i < this.rowValue_ID_1.length; i++) {
        this.selected_claim_nos.push(this.rowValue_ID_1?.[i].claim_no);
      }
    }
    var currentPage1 = this.gridApi_1.paginationGetCurrentPage();
    // console.log("Current page:", currentPage1);
    // const currentPage = params.api.paginationGetCurrentPage();
    // const pageSize = params.api.paginationGetPageSize();
    // const startIndex = currentPage * pageSize;
    // const endIndex = startIndex + pageSize;
    // console.log(startIndex,endIndex);
    // params.api.forEachNodeAfterFilterAndSort((node: any) =>{
    //   this.currentPageData.push(node.data);
    // });
    // this.resl_dta = this.GridData_CreateWorkOrders.slice(startIndex,endIndex);
    // console.log('currentPageData',this.resl_dta);
    // this.selectedRows = selectedNodes.map(node => node.data);
    // const selectedRowCount = selectedNodes.length;
    // console.log('selectedRowCount',selectedRowCount);
    // if (selectedRowCount > 15) {
    //   // Deselect rows beyond the first 15
    //   selectedNodes.slice(15).map(node => node.setSelected(false));
    // }
    //  else if (selectedRowCount < 15) {
    //   // Select remaining rows within the first 15
    //   this.gridApi_1.forEachNode((node: any, index: number) => {
    //     if (index >= 15) {
    //       node.setSelected(false);
    //     }
    //   });
    // }
    // if (selectedRowCount>=startIndex && selectedRowCount <= endIndex) {
    //   // Deselect rows beyond the first 15
    //   selectedNodes.slice(15).forEach(node => node.setSelected(false));
    // }
    //  else if (selectedRowCount>=startIndex && selectedRowCount <= endIndex) {
    //   // Select remaining rows within the first 15
    //   this.gridApi_1.forEachNode((node: any, index: number) => {
    //     if (index >= 15) {
    //       node.setSelected(false);
    //     }
    //   });
    // }
  }

  onPageSizeChanged(type) {
    switch (type) {
      case 'create_work_orders':
        {
          this.gridApi_1.paginationSetPageSize(Number(this.paginationSizeValue_createWorkOrders));
          break;
        }
      case 'work_orders':
        {
          this.gridApi_2.paginationSetPageSize(Number(this.paginationSizeValue_WorkOrders));
          break;
        }
      case 'closed_claims':
        {
          this.gridApi_3.paginationSetPageSize(Number(this.paginationSizeValue_ClosedClaims));
          break;
        }
      case 'import':
        {
          this.gridApi_4.paginationSetPageSize(Number(this.paginationSizeValue_Import));
          break;
        }
      case 'reimport':
        {
          this.gridApi_5.paginationSetPageSize(Number(this.paginationSizeValue_reimport));
          break;
        }
      case 'all_claims':
        {
          this.gridApi_6.paginationSetPageSize(Number(this.paginationSizeValue_AllClaims));
          break;
        }
      case 'duplicate_claims':
        {
          this.gridApi_7.paginationSetPageSize(Number(this.paginationSizeValue_DuplicateClaims));
          break;
        }
      case 'misMatched_records':
        {
          this.gridApi_8.paginationSetPageSize(Number(this.paginationSizeValue_MismatchedValues));
          break;
        }
    }
    // if(type=='create_work_orders'){this.gridApi_1.paginationSetPageSize(Number(this.paginationSizeValue_createWorkOrders));}
    // else if(type=='work_orders'){this.gridApi_2.paginationSetPageSize(Number(this.paginationSizeValue_WorkOrders));}
    // else if(type=='closed_claims'){this.gridApi_3.paginationSetPageSize(Number(this.paginationSizeValue_ClosedClaims));}
    // else if(type == 'import'){this.gridApi_4.paginationSetPageSize(Number(this.paginationSizeValue_Import));}
    // else if(type='reimport'){this.gridApi_5.paginationSetPageSize(Number(this.paginationSizeValue_reimport));}
    // else if(type=='all_claims'){this.gridApi_6.paginationSetPageSize(Number(this.paginationSizeValue_AllClaims));}
  }

  onPageSizeChanged1(type) {
    this.gridApi_6.paginationSetPageSize(Number(this.paginationSizeValue_AllClaims));
  }
  onSelectionChanged_WorkOrders(params) {
    this.rowValue_ID_2 = this.gridApi_2.getSelectedRows();
    console.log('ID2', this.rowValue_ID_2);
  }
  onSelectionChanged_ClosedClaims(params) {
    this.rowValue_ID_3 = this.gridApi_3.getSelectedRows();
    console.log('ID3', this.rowValue_ID_3);
  }
  onSelectionChanged_import(params) {
    this.rowValue_ID_4 = this.gridApi_4.getSelectedRows();
    console.log('ID4', this.rowValue_ID_4);
  }
  onSelectionChanged_reImport(params) {
    this.rowValue_ID_5 = this.gridApi_5.getSelectedRows();
    console.log('ID5', this.rowValue_ID_5);
  }
  onSelectionChanged_allClaims(params) {
    this.rowValue_ID_6 = this.gridApi_6.getSelectedRows();
    console.log('ID6', this.rowValue_ID_6);
  }
  onSelectionChanged_DuplicateClaims(params) {
    this.rowValue_ID_7 = this.gridApi_7.getSelectedRows();
    console.log('ID7', this.rowValue_ID_7);
  }
  onSelectionChanged_MismathchedRecords(params) {
    this.rowValue_ID_8 = this.gridApi_8.getSelectedRows();
    console.log('ID8', this.rowValue_ID_8);
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_CreateWorkOrders);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
    // }, 4000);
    const header = document.querySelectorAll('.ag-checkbox-input');
    header.forEach(v => {
      v.addEventListener('click', event => {
        let startIndex = 0;
        let endIndex = 0;
        this.new_cdtn = !this.new_cdtn;
        console.log('New_cdtn', this.new_cdtn);
        const currentPage = params.api.paginationGetCurrentPage();
        const pageSize = params.api.paginationGetPageSize();
        startIndex = currentPage * pageSize;
        endIndex = startIndex + pageSize;
        console.log(startIndex, endIndex);
        params.api.forEachNodeAfterFilterAndSort(node => {
          this.currentPageData.push(node.data);
        });
        if (this.new_cdtn) {
          this.resl_dta = this.GridData_CreateWorkOrders.slice(startIndex, endIndex);
        } else {
          this.resl_dta = [];
        }
        console.log('currentPageData', this.resl_dta);
        for (let i = 0; i < this.resl_dta.length; i++) {
          this.selected_claim_nos.push(this.resl_dta?.[i].claim_no);
        }
        const selectedNodes = this.gridApi_1.getSelectedNodes();
        // for(let i=0;i<selectedNodes.length;i++)
        // console.log('selectedNodes',selectedNodes?.[i].data);
        let x = this.gridApi_1.paginationGetRowCount();
        console.log('Total Row Count', x);
        let totalPages = this.gridApi_1.paginationGetTotalPages();
        let currentPage1 = this.gridApi_1.paginationGetCurrentPage();
        console.log("Current page:", currentPage1);
        console.log("Total page:", totalPages);
        if (this.new_cdtn) {
          //  if (selectedRowCount< startIndex && selectedRowCount >endIndex ) {
          // Deselect rows beyond the first 15
          if (startIndex > 0 && totalPages - 1 != currentPage1) {
            console.log('IN1');
            selectedNodes.splice(endIndex, x).forEach(node => node.setSelected(false));
            selectedNodes.splice(0, startIndex).forEach(node => node.setSelected(false));
          } else if (startIndex > 0 && totalPages - 1 == currentPage1) {
            console.log('IN2');
            selectedNodes.splice(0, startIndex).forEach(node => node.setSelected(false));
          } else if (endIndex > 0) {
            console.log('IN3');
            console.log('EndIndex+1', endIndex + 1);
            console.log('X', x);
            console.log('X - EndIndex', x - endIndex);
            selectedNodes.splice(endIndex, x - endIndex).forEach(node => node.setSelected(false));
          }
          // }
        } else {
          selectedNodes.forEach(node => node.setSelected(false));
        }
      });
    });
  }
  // setAutoHeight() {
  //   this.gridApi_1.setDomLayout('autoHeight');
  //   this.gridApi_2.setDomLayout('autoHeight');
  //   this.gridApi_3.setDomLayout('autoHeight');
  //   this.gridApi_4.setDomLayout('autoHeight');
  //   this.gridApi_5.setDomLayout('autoHeight');
  //   this.gridApi_6.setDomLayout('autoHeight');
  //   // auto height will get the grid to fill the height of the contents,
  //   // so the grid div should have no height set, the height is dynamic.
  //   let element_1:any = document.querySelector<HTMLElement>('#myGrid_1');
  //   let element_2:any = document.querySelector<HTMLElement>('#myGrid_2');
  //   let element_3:any = document.querySelector<HTMLElement>('#myGrid_2');
  //   let element_4:any = document.querySelector<HTMLElement>('#myGrid_2');
  //   let element_5:any = document.querySelector<HTMLElement>('#myGrid_2');
  //   let element_6:any = document.querySelector<HTMLElement>('#myGrid_2');
  //   let element_7:any = document.getElementsByClassName('no-bottom');
  //   if (element_1 || element_2 || element_3 || element_4 || element_5 || element_6) {
  //   element_1.style.height = '0px';
  //   element_2.style.height = '0px';
  //   element_3.style.height = '0px';
  //   element_4.style.height = '0px';
  //   element_5.style.height = '0px';
  //   element_6.style.height = '0px';
  //   element_7.style.height = '0px';
  //   }
  // }
  onGridReady_2(params) {
    this.gridApi_2 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_WorkOrders);
    //   this.myGrid_2.api?.setRowData(this.GridData_WorkOrders);
    // }, 4000);
  }

  onGridReady_3(params) {
    this.gridApi_3 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_WorkOrders);
    //   this.myGrid_2.api?.setRowData(this.GridData_WorkOrders);
    // }, 4000);
  }

  onGridReady_4(params) {
    this.gridApi_4 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_CreateWorkOrders);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
    // }, 4000);
  }

  onGridReady_5(params) {
    this.gridApi_5 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_CreateWorkOrders);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
    // }, 4000);
  }

  onGridReady_6(params) {
    this.gridApi_6 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_CreateWorkOrders);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
    // }, 4000);
  }

  onGridReady_7(params) {
    this.gridApi_7 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_CreateWorkOrders);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
    // }, 4000);
  }

  onGridReady_8(params) {
    this.gridApi_8 = params.api;
    console.log('event', params);
    // setTimeout(() => {
    //   console.log('444', this.GridData_CreateWorkOrders);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridData_CreateWorkOrders);
    // }, 4000);
  }

  openModal(model_name) {
    console.log('IN');
    this.modalRef = this.modal.show(model_name, this.config);
  }
  openModal2(model_name) {
    console.log('IN');
    this.modalRef2 = this.modal.show(model_name, this.config);
  }
  openModal3(model_name) {
    console.log('IN');
    this.modalRef3 = this.modal.show(model_name, this.config);
  }
  openModal4(model_name) {
    console.log('IN');
    this.modalRef4 = this.modal.show(model_name, this.config);
  }
  CellClicked(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'dos':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'age':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'rendering_prov':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'responsibility':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'prim_ins_name':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'sec_ins_name':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'claim_Status':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'denial_code':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'billed_submit_date':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'claim_note':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'assigned_to':
          {
            this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
      }
    }
  }
  CellClicked_2(headerName, params) {
    switch (headerName) {
      case 'created':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'work_order_name':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'assigned_nos':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'due_date':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'billed':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'ar_due':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'status':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'priority':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'work_notes':
        {
          this.openModal(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
    }
  }
  CellClicked3(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.closedclaimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.reload_data(1);
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.closedclaimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.reload_data(1);
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.closedclaimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.reload_data(1);
            break;
          }
      }
    }
  }
  CellClicked4(headerName, params) {
    switch (headerName) {
      case 'download':
        {
          this.getfile(this.rowValue_ID_4?.[0].id, this.rowValue_ID_4?.[0].file_name);
          break;
        }
      case 'delete':
        {
          this.delete_file(this.rowValue_ID_4?.[0].path);
          break;
        }
      case 'settings':
        {
          this.process_uld_file(this.rowValue_ID_4?.[0].id);
          this.openModal(this.page2);
          break;
        }
    }
  }
  CellClicked5(headerName, params) {
    switch (headerName) {
      case 'claim_no':
        {
          this.openModal(this.claimpage);
          this.claimslection(this.rowValue_ID_6?.[0]);
          break;
        }
      case 'dos':
        {
          this.openModal(this.claimpage);
          this.claimslection(this.rowValue_ID_6?.[0]);
          break;
        }
      case 'age':
        {
          this.openModal(this.claimpage);
          this.claimslection(this.rowValue_ID_6?.[0]);
          break;
        }
      case 'acct_no':
        {
          this.openModal(this.claimpage);
          this.claimslection(this.rowValue_ID_6?.[0]);
          break;
        }
      case 'patient_name':
        {
          this.openModal(this.claimpage);
          this.claimslection(this.rowValue_ID_6?.[0]);
          break;
        }
    }
  }
  onSearch() {
    this.myGrid_1.api?.setQuickFilter(this.search_values_for_create_work);
    this.myGrid_2.api?.setQuickFilter(this.search_values_for_work_orders);
    this.myGrid_3.api?.setQuickFilter(this.search_values_for_closed_claims);
    this.myGrid_6.api?.setQuickFilter(this.search_values_for_all_claims);
  }
  closeModal(modalId) {
    this.modal.hide(modalId);
  }
  // autoSizeAll() {
  //   if(this.GridData_CreateWorkOrders || this.GridData_WorkOrders || this.GridData_ClosedClaims || this.GridData_Import || this.GridData_ReImport || this.GridData_AllClaims)
  //   {
  //     let allColumnIds:any = [];
  //   this.gridOptions1.columnApi.getColumns().forEach((column:any) => {
  //     allColumnIds.push(column.getId());
  //   });
  //   this.gridOptions2.columnApi.getColumns().forEach((column:any) => {
  //     allColumnIds.push(column.getId());
  //   });
  //   this.gridOptions3.columnApi.getColumns().forEach((column:any) => {
  //     allColumnIds.push(column.getId());
  //   });
  //   this.gridOptions4.columnApi.getColumns().forEach((column:any) => {
  //     allColumnIds.push(column.getId());
  //   });
  //   this.gridOptions5.columnApi.getColumns().forEach((column:any) => {
  //     allColumnIds.push(column.getId());
  //   });
  //   this.gridOptions6.columnApi.getColumns().forEach((column:any) => {
  //     allColumnIds.push(column.getId());
  //   });
  //   console.log('Size Resized');
  //   this.gridOptions1.columnApi.autoSizeColumns(allColumnIds, false);
  //   this.gridOptions2.columnApi.autoSizeColumns(allColumnIds, false);
  //   this.gridOptions3.columnApi.autoSizeColumns(allColumnIds, false);
  //   this.gridOptions4.columnApi.autoSizeColumns(allColumnIds, false);
  //   this.gridOptions5.columnApi.autoSizeColumns(allColumnIds, false);
  //   this.gridOptions6.columnApi.autoSizeColumns(allColumnIds, false);
  //   }
  // }
  status_code_select() {
    if (!this.isCollapsed_ClosedClaims || !this.isCollapsed_AllClaims) {
      this.get_statuscodes();
    }
  }
}
ClaimsComponent.ɵfac = function ClaimsComponent_Factory(t) {
  return new (t || ClaimsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_4__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_20__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Services_followup_service__WEBPACK_IMPORTED_MODULE_5__.FollowupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_22__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_excel_service__WEBPACK_IMPORTED_MODULE_6__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Services_export_functions_service__WEBPACK_IMPORTED_MODULE_7__.ExportFunctionsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Services_notify_service__WEBPACK_IMPORTED_MODULE_8__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDatepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_9__.NotesHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDateParserFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_24__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router));
};
ClaimsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ClaimsComponent,
  selectors: [["app-claims"]],
  viewQuery: function ClaimsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c10, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c11, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c12, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c13, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c14, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c15, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c16, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c17, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c18, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c19, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c20, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c21, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.new_workorder = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.work_order_details = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.closedclaimpage = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.associates = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.associates_error = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.page1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.page2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.newclaimmod = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.duplicatemodel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.mismatchmodel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.claimpage = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_3 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_4 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_5 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_6 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_7 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myGrid_8 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.pageRows = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
    }
  },
  inputs: {
    table_datas_list: ["data", "table_datas_list"]
  },
  decls: 844,
  vars: 192,
  consts: [[1, "row", 2, "padding-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "no-shadow", "no-border", "no-bottom"], [1, "box-body", "no-padding"], [1, "tabs", "nav-tabs-custom"], ["id", "myTab", 1, "tabs", "nav", "nav-tabs"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["class", "", 4, "ngIf"], ["class", "", 3, "ngClass", 4, "ngIf"], [1, "tab-content", "no-padding"], ["id", "tab_2", 1, "tab-pane", 3, "ngClass"], [1, "box", "no-shadow", "no-border"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xs-12"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "box-title", "list-heading"], [1, "fa", "fa-filter", "ar-blue"], [1, "box-tools", "pull-right"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-box-tool", "collapsed", 2, "margin-left", "10px", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "fa fa-minus", 4, "ngIf"], [1, "collapse", 3, "collapse", "isAnimated"], [3, "formGroup", "ngSubmit"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xs-12", "no-padding"], [1, "form-group", "col-md-4", "col-sm-4", "col-lg-4", "col-xs-12"], ["type", "text", "formControlName", "dos", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "bsConfig"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "claim_no", 1, "form-control"], ["type", "text", "formControlName", "acc_no", 1, "form-control"], ["type", "text", "formControlName", "patient_name", 1, "form-control"], ["type", "text", "formControlName", "responsibility", 1, "form-control"], ["type", "text", "placeholder", "10.00 - 20.00", "formControlName", "total_ar", 1, "form-control"], ["type", "text", "formControlName", "rendering_provider", 1, "form-control"], ["type", "text", "formControlName", "payer_name", "placeholder", "Search Payer", "list", "SearchResults", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "formControlName", "date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "bill_submit_date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "denial_code", 1, "form-control"], [1, "form-group", "col-md-3", "col-sm-3", "col-lg-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], ["type", "text", "placeholder", "Search..", "name", "search", "autocomplete", "off", 1, "search_box", 3, "ngModel", "ngModelChange", "keyup"], [1, "box", "no-shadow", "no-bottom", 2, "border", "2px solid #d8dbe4", "width", "100%"], ["id", "1", 1, "box-body", "no-padding", "colors"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right", 2, "margin-top", "0px"], [1, "", 2, "margin-top", "5px"], ["id", "page-size", 2, "border-radius", "4px", 3, "ngModel", "change", "ngModelChange"], ["value", "100"], ["value", "500"], ["value", "1000"], [2, "margin-left", "10px", "font-family", "'Maven Pro', sans-serif", "font-size", "13px !important", "font-weight", "600", "color", "#535a68"], [2, "margin-left", "10px", "color", "#ccc", "margin-right", "10px"], ["title", "Refresh Values", 1, "fa", "fa-refresh", 2, "cursor", "pointer", 3, "click"], ["title", "Assign Claims", 1, "fa", "fa-user-plus", 2, "cursor", "pointer", 3, "click"], ["title", "Excel", 1, "fa", "fa-file-excel-o", 2, "cursor", "pointer", 3, "click"], [1, "ag-theme-alpine", "no-grid-lines", 3, "columnDefs", "gridOptions", "defaultColDef", "sideBar", "gridReady", "selectionChanged"], ["myGrid_1", ""], ["id", "tab_3", 1, "tab-pane"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4", "width", "100%"], [1, "alert-success", "pull-center", 2, "margin-top", "-1px", 3, "hidden"], [1, "pull-left", 2, "margin-top", "4px", "padding-left", "5px"], ["tabindex", "0", "data-toggle", "tooltip", "title", "Please process datas from previous uploaded file", 1, "disabled-tooltip", "pull-right"], [1, "btn", "btn-info", "btn-xs", "pull-right", "btn-flat", 2, "margin-top", "4px", 3, "disabled", "click"], [1, "fa", "fa-upload"], [1, "btn", "btn-info", "btn-xs", "pull-right", "btn-flat", 2, "margin-top", "4px", "margin-right", "20px", 3, "click"], [1, "fa", "fa-download"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table", "no-padding"], [1, "ag-theme-alpine", "no-grid-lines", 3, "columnDefs", "gridOptions", "defaultColDef", "sideBar", "autoGroupColumnDef", "gridReady", "selectionChanged"], ["myGrid_4", ""], ["id", "tab_4", 1, "tab-pane"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding"], [1, "form-group", "col-lg-3"], ["type", "text", "formControlName", "created_at", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", "readonly", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], ["type", "text", "formControlName", "due_date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "readonly", "ngModelChange"], ["type", "text", "formControlName", "work_order_name", 1, "form-control"], ["aria-hidden", "true", "formControlName", "priority", 1, "form-control", "ngx-dropdown-button", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "ngValue", "selected"], ["value", "low", 3, "selected"], ["value", "medium", 3, "selected"], ["value", "high", 3, "selected"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "btn", "btn-search", "pull-right", 3, "click"], [1, "box-header"], [1, "box-tools", "pull-right", 2, "margin-top", "5px"], ["myGrid_2", ""], ["id", "tab_8", 1, "tab-pane"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "width", "100%"], [1, "box-body", "no-padding", "mb-4"], [1, "box-body", 2, "margin", "5px 0 8px 0"], [1, "col-md-8"], [1, "col-md-6"], ["for", "select1"], ["formControlName", "user_id", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-muted", "small"], [1, "row", 2, "margin-top", "10px"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-4", 2, "margin-top", "20px"], ["type", "submit", 1, "btn", "btn-info"], [1, "col-md-4"], [1, "alert-message", "alert-message-info"], [1, "alert-message", "alert-message-danger", 2, "margin-top", "10px"], ["id", "tab_5", 1, "tab-pane"], ["type", "text", "formControlName", "dos", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 3, "ngModel", "ngModelChange"], ["formControlName", "status_code", 3, "config", "options", "change"], ["formControlName", "sub_status_code", 3, "config", "options"], [1, "btn", "btn-info", "btn-xs", "btn-flat", 2, "margin-top", "4px", "margin-right", "10px", 3, "click"], [1, "pull-right", 2, "margin-top", "4px", "padding-left", "5px"], ["myGrid_3", ""], ["id", "tab_6", 1, "tab-pane"], ["id", "AllClaimsSearch", 1, "collapse", 3, "collapse", "isAnimated"], ["formControlName", "claim_status", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button"], [3, "ngValue"], ["type", "text", "formControlName", "date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "bsConfig"], ["type", "text", "formControlName", "bill_submit_date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "bsConfig"], ["type", "text", "placeholder", "Search..", "name", "search", 1, "search_box", 3, "ngModel", "ngModelChange", "keyup"], ["id", "6", 1, "box-body", "no-padding", "colors"], ["myGrid_6", ""], ["id", "tab_7", 1, "tab-pane", 3, "ngClass"], ["myGrid_7", ""], ["id", "tab_8", 1, "tab-pane", 3, "ngClass"], ["myGrid_8", ""], ["id", "reimport", 1, "tab-pane"], [1, "btn", "btn-info", "btn-xs", "pull-right", "btn-flat", 2, "margin-top", "4px", 3, "click"], ["myGrid_5", ""], ["page1", ""], ["page2", ""], ["reimport_page1", ""], ["newclaimmod", ""], ["duplicatemodel", ""], ["mismatchmodel", ""], ["claimpage", ""], ["processnotes", ""], ["claimnotes", ""], ["closedclaimpage", ""], ["new_workorder", ""], ["associates", ""], ["associates_error", ""], ["work_order_details", ""], ["assoc_summary", ""], ["qcnotes", ""], ["auto_claim_close", ""], ["HtmlContent", ""], ["AccNo", ""], ["PriInsurance", ""], ["SecInsurance", ""], ["TerInsurance", ""], ["TotalAr", ""], ["template", ""], [3, "ngClass"], ["href", "#tab_2", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-user"], [1, "tab-divider"], ["href", "#tab_4", "data-toggle", "tab", "aria-expanded", "true", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-list"], [1, ""], ["href", "#tab_8", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-users"], ["href", "#tab_5", "data-toggle", "tab", "aria-expanded", "true", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-drivers-license"], [1, "", 3, "ngClass"], ["href", "#tab_6", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], ["href", "#tab_3", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"], ["class", "error", 4, "ngIf"], [1, "error"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], ["for", "select2"], ["formControlName", "new_user_id", 1, "form-control"], ["formControlName", "audit_status_claims", 1, "form-control"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "modal-basic-title", 1, "modal-title", "list-heading"], [1, "alert", "alert-danger", 3, "hidden"], [1, "modal-body"], ["modalform", "ngForm"], [1, "form-group"], [1, "ar-blue"], [1, "pull-right", "ar-blue", "font600"], [1, "row", "form-group"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "text-center"], [1, "ar-red"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-9", "col-md-9", "col-sm-9", "col-xs-9"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", "formControlName", "report_date", "autocomplete", "off", 1, "form-control", 3, "bsConfig"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "file", "formControlName", "file", "value", "", 1, "form-control", "file-upload", 3, "ngClass", "change"], ["formControlName", "notes", "value", "", 1, "form-control", "work-notes", 2, "height", "90px", 3, "ngClass"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "click"], [1, "invalid-feedback"], ["id", "modal-basic-title", 1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "listing-table"], [1, "table", "table-striped1", "table-bordered", 2, "border-color", "#edf0f7"], [1, "text-center", 2, "border-bottom", "1px solid #fff !important"], [1, "text-center", "ar-blue"], [1, "table", "table-striped-nb", "no-border"], [1, "btn", "btn-flat", "btn-xs", "btn-default", 3, "click"], [3, "size", "color", 4, "ngIf"], [3, "size", "color"], [2, "font-weight", "600", "font-family", "Segoe UI,Noto Sans,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji !important", "color", "#333333", "position", "relative", "top", "24px", "left", "36%"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", "formControlName", "report_date", "autocomplete", "off", 1, "form-control", 3, "minDate", "bsConfig"], [1, "table", "table-striped1", "table-bordered", 2, "border-color", "#edf0f7", 3, "hidden"], ["type", "button", 1, "btn", "btn-default", "customs-btn", 3, "click"], ["type", "button", 1, "btn", "btn-default", "btn-flat", "btn-sm", "pull-left", "customs-btn", 3, "click"], ["type", "button", 1, "btn", "btn-default", "btn-flat", "btn-sm", "pull-left", 2, "margin-top", "20px", 3, "click"], ["class", "modal-footer", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-default", "btn-flat", "btn-sm", 3, "click"], [1, "table", "table-striped1", "table-bordered", 2, "border-color", "#edf0f7", "position", "relative"], ["id", "field", 1, "form-group", "details", 2, "width", "27.2%", "padding-left", "0px", 3, "change"], ["value", "All"], [1, "text-center", "ar-blue", "operations"], ["type", "button", 1, "btn", "btn-info", "btn-xs", 3, "click"], [1, "table", "table-striped1", "table-bordered", 2, "border-color", "#edf0f7", "position", "relative", 3, "hidden"], [1, "text-center", 2, "border-bottom", "1px solid #fff !important", "width", "210px"], ["id", "field", 1, "form-group", "details", 3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-info btn-xs", 3, "click", 4, "ngIf"], [3, "selected", "value"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "close", 3, "click"], [1, "nav", "nav-tabs", "no-border"], [1, "testClass"], ["href", "#{main_tab}", "data-toggle", "tab", 1, "no-padding", 3, "click"], [1, "modal-title", "list-heading"], ["class", "testClass", 3, "active", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "maintab", 1, "tab-pane"], [1, "modal-body", "no-padding"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "margin-top", "10px"], [1, "box", "no-shadow", "no-bottom", "no-border"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box33", 1, "btn", "btn-box-tool"], [1, "box-body", "no-padding", "hide"], [1, "box", "box-success", "no-border", "no-shadow"], [1, "box-header", "no-border", "p-t-0", "p-b-0"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool"], [1, "box-body", "chart-responsive"], ["id", "sales-chart", 1, "chart", 2, "height", "230px"], ["height", "230", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#3c8dbc", "d", "M0,108.33333333333333A-6.666666666666667,-6.666666666666667,0,0,0,-5.228486604698025,110.86389406942499", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#3c8dbc", "stroke", "#ffffff", "d", "M0,111.33333333333333A-3.666666666666667,-3.666666666666667,0,0,0,-2.8756676325839137,112.72514173818374L-11.764094860570555,105.69376165620622A-15,-15,0,0,1,0,100Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#f56954", "d", "M-5.228486604698025,110.86389406942499A-6.666666666666667,-6.666666666666667,0,1,0,6.054042404487644,117.79159721469804", "stroke-width", "2", "opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "1"], ["fill", "#f56954", "stroke", "#ffffff", "d", "M-2.8756676325839137,112.72514173818374A-3.666666666666667,-3.666666666666667,0,1,0,3.3297233224682046,116.53537846808393L9.081063606731467,119.18739582204708A-10,-10,0,1,1,-7.842729907047037,108.79584110413748Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#00a65a", "d", "M6.054042404487644,117.79159721469804A-6.666666666666667,-6.666666666666667,0,0,0,0.0020943950679349903,108.33333366232014", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#00a65a", "stroke", "#ffffff", "d", "M3.3297233224682046,116.53537846808393A-3.666666666666667,-3.666666666666667,0,0,0,0.0011519172873642447,111.33333351427608L0.004712388902853728,100.00000074022033A-15,-15,0,0,1,13.6215954100972,121.2810937330706Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], ["dy", "105", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "125", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "14px", "stroke", "none", "fill", "#000000", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "14px"], ["dy", "125", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["id", "box33", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", "p-l-0"], [1, "table", "no-border", "table-striped-nb"], [1, "table-label"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", "p-l-0"], [1, "text-orange"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-12"], [1, "ar-blue", 2, "margin-top", "0px", "font-size", "16px"], [1, "table", "no-border", "table-striped-nb", 2, "cursor", "pointer"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "box", "no-shadow", "no-border", 2, "margin-top", "10px"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box34", 1, "btn", "btn-box-tool"], ["id", "box34", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "table-striped1", "table"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "5px solid #e9ecf3", "border-bottom", "3px solid #e9ecf3"], ["data-toggle", "collapse", "data-target", "#Claim_Note", "title", "Claim Notes", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [2, "text-decoration", "underline"], ["data-toggle", "collapse", "data-target", "#QC_Notes", "title", "QC Notes", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["data-toggle", "collapse", "data-target", "#followupview", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template View", 1, "fa", "fa-external-link-square"], ["id", "Claim_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box37", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box37", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;margin-top:5px;", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "margin-top:5px;", 4, "ngIf"], ["id", "QC_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "box-header", 2, "border-bottom", "1px solid #f3eee9"], ["data-toggle", "modal", "class", "cur-pointer", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box36", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box36", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "0px"], ["id", "followup-list3", "aria-expanded", "false", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid rgb(233, 236, 243)", "height", "15px"], ["id", "followupview", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "text-center", "closed-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "background", "#f9f9f9"], ["id", "client-assistant-list", 1, "collapse", 2, "margin-top", "10px"], [1, "", 2, "font-size", "16px", "margin-top", "20px"], [1, "form-horizontal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px solid #f3f4f9"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-11", "col-md-11", "col-sm-11", "col-xs-12", "no-padding"], ["type", "text", 1, "form-control"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-12", "col-lg-offset-1", "col-md-offset-1", "col-sm-offset-1", "no-padding"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible", 2, "width", "100%"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", 2, "width", "100%"], [1, "selection"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-xxst-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-xxst-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["role", "presentation", 1, "select2-selection__arrow"], ["role", "presentation"], ["aria-hidden", "true", 1, "dropdown-wrapper"], [1, "form-control", "text-space"], [1, "btn", "btn-default", "btn-sm", "text-center"], [1, "btn", "btn-info", "btn-sm", "text-center"], ["class", "tab-pane", 3, "active", "id", 4, "ngFor", "ngForOf"], ["data-toggle", "tab", 3, "href", "click"], ["class", "p-l-0 table-label", "style", "text-decoration: underline; padding-left: 0px;", 3, "click", 4, "ngIf"], [1, "p-l-0", "table-label", 2, "text-decoration", "underline", "padding-left", "0px", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0", "margin-top", "5px"], [1, "text-justify", 2, "margin-bottom", "10px"], [1, "ar-blue", "font600"], [2, "margin-left", "3px", "margin-right", "3px", "color", "#ccc"], [1, "pull-right", 2, "font-size", "18px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "5px"], [1, "text-center", "text-gray", 2, "margin-bottom", "10px"], ["data-toggle", "modal", 1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0"], [1, "tab-pane", 3, "id"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", "p-t-0"], [1, "cur-pointer", 2, "font-size", "16px", 3, "click"], [1, "fa", "fa-plus-circle"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "box-body", "no-padding", 2, "margin-top", "10px"], ["data-toggle", "collapse", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "href", "click"], ["data-toggle", "collapse in", "title", "Followup Template", "aria-expanded", "false", 1, "cur-pointer", 2, "margin-right", "15px", "font-size", "16px", 3, "href", "click"], ["title", "Followup Template", 1, "fa", "fa-headphones"], [1, "text-center", "closed-btn", 2, "padding", "20px"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-d8k9-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-d8k9-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["title", "Edit", 1, "fa", "fa-edit", "ar-blue", 2, "margin-left", "10px", "font-size", "16px", "cursor", "pointer", 3, "click"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "form-horizontal", 3, "formGroup"], ["formControlName", "processnotes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["formControlName", "claim_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "aria-label", "Close", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "col-lg-2", "col-md-2", "col-sm-12", "col-xs-12"], ["aria-expanded", "false", "data-target", "#Claim_Note", "data-toggle", "collapse", "title", "Claim Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["aria-expanded", "false", "data-target", "#QC_Notes", "data-toggle", "collapse", "title", "QC Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["aria-expanded", "false", "data-target", "#followupview", "data-toggle", "collapse", "title", "Followup View", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [1, "text-center", "close-btn"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box35", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box35", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], [1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], ["id", "box38", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "workorder_name", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "MM-DD-YYYY", "formControlName", "due_date", "bsDatepicker", "", "autocomplete", "off", 1, "form-control", 3, "bsConfig", "ngClass"], [1, "col-lg-9", "col-md-9", "col-sm-9", "col-xs-9", "priority-column"], [1, "priority"], [1, "form-group", "priority-radio"], [1, "custom-control", "custom-radio"], ["id", "low", "formControlName", "priority", "type", "radio", "value", "low", "data-ng-value", "1", 1, "custom-control-input", 3, "ngClass"], ["for", "low", 1, "custom-control-label"], ["class", "invalid-feedback priority-error", 4, "ngIf"], ["id", "medium", "formControlName", "priority", "type", "radio", "value", "medium", "data-ng-value", "2", 1, "custom-control-input", 3, "ngClass"], ["for", "medium", 1, "custom-control-label"], ["class", "invalid-feedback priority-error2", 4, "ngIf"], ["id", "high", "formControlName", "priority", "type", "radio", "value", "high", "data-ng-value", "3", 1, "custom-control-input", 3, "ngClass"], ["for", "high", 1, "custom-control-label"], [1, "form-group", 2, "margin-top", "-15px"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2"], ["formControlName", "wo_notes", 1, "form-control", "work-notes", 2, "height", "90px", 3, "ngClass"], ["data-toggle", "modal", "data-target", "#modal-user", 1, "btn", "btn-file", "btn-xs", "btn-flat", "pull-right", 3, "disabled", "title", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "disabled", "title", "click"], [1, "invalid-feedback", "priority-error"], [1, "invalid-feedback", "priority-error2"], [1, "alert-danger", "pull-center", 2, "margin-top", "-1px", 3, "hidden"], [1, "table", "no-border", "no-bottom"], [1, "pull-left", 2, "margin-top", "20px"], [1, "cur-pointer", "btn", "btn-default", "btn-sm", "btn-flat", "btn-focus", 3, "disabled", "click"], ["type", "button", "class", "btn btn-info btn-sm btn-flat", "style", "margin-top:20px;", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm btn-flat", "style", "margin-top:20px;", "data-dismiss", "modal", 3, "disabled", "click", 4, "ngIf"], [2, "color", "red"], ["type", "checkbox", 2, "margin-top", "0px", 3, "id", "checked", "ngModel", "click", "ngModelChange"], [1, "assigned_nos"], ["type", "text", "size", "3", "knifeOnlyNumbers", "", 3, "value", "keyup"], ["type", "text", "value", "0", "size", "2", "disabled", ""], ["type", "button", 1, "btn", "btn-info", "btn-sm", "btn-flat", 2, "margin-top", "20px", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "btn-sm", "btn-flat", 2, "margin-top", "20px", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", "pull-right", 2, "margin-top", "20px", 3, "click"], [1, "alert-danger", "pull-center"], ["type", "button", 1, "btn", "btn-default", "btn-flat", "btn-sm", "pull-left", 3, "click"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 3, "click"], [1, "font600", "line-height-24", 3, "click"], [1, "fa", "fa-fw", "fa-sort"], [1, "font600", "line-height-24"], ["style", "padding: left 200px;", 3, "size", "color", 4, "ngIf"], ["title", "Touch Count"], [1, "cur-pointer"], ["class", "cur-pointer", 4, "ngIf"], [1, "cur-pointer", "text-right"], ["colspan", "11", "align", "center"], [2, "padding", "left 200px", 3, "size", "color"], [1, "table", "table-bordered"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-12", "no-padding"], [1, "table", "no-border"], [1, "text-red"], [1, "text-green"], [1, "col-lg-7", "col-md-7", "col-sm-7", "col-xs-12", "no-padding", "listing-table", "popup-table"], ["class", "text-red", 4, "ngIf"], ["formControlName", "qc_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value", "ngClass"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], [1, "form-group", 2, "margin-bottom", "10px"], [1, "form-group", 2, "margin-bottom", "10px", "margin-left", "0px"], ["type", "submit", "class", "btn btn-info btn-sm", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"]],
  template: function ClaimsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r674 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClaimsComponent_li_6_Template, 6, 1, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClaimsComponent_li_7_Template, 6, 0, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ClaimsComponent_li_8_Template, 6, 0, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ClaimsComponent_li_9_Template, 6, 0, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ClaimsComponent_li_10_Template, 6, 1, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ClaimsComponent_li_11_Template, 4, 0, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 3)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 19)(24, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_24_listener() {
        return ctx.isCollapsed_CreateWorkOrders = !ctx.isCollapsed_CreateWorkOrders;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, ClaimsComponent_i_25_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, ClaimsComponent_i_26_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 23)(28, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_28_listener() {
        return ctx.createClaims_search(1, "claim", null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 25)(30, "div", 26)(31, "div", 27)(32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 27)(36, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "select", 29)(39, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, ClaimsComponent_option_41_Template, 2, 5, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 27)(43, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 26)(47, "div", 27)(48, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](50, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 27)(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](54, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 27)(56, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](58, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 26)(60, "div", 27)(61, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](62, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](63, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](64, ClaimsComponent_div_64_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 27)(66, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](68, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 27)(70, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_72_listener($event) {
        return ctx.selected_val = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_72_listener($event) {
        return ctx.searchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](73, ClaimsComponent_div_73_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "div", 26)(75, "div", 27)(76, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_78_listener($event) {
        return ctx.select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 27)(80, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_82_listener($event) {
        return ctx.submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 27)(84, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](86, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "div", 26)(88, "div", 42)(89, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_input_click_89_listener() {
        return ctx.createClaims_search(1, "claim", null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "div", 14)(91, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_91_listener($event) {
        return ctx.search_values_for_create_work = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_91_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 12)(93, "div", 3)(94, "div", 45)(95, "div", 46)(96, "div", 16)(97, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](98, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, " New Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "div", 48)(101, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](102, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_103_listener() {
        return ctx.onPageSizeChanged("create_work_orders");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_103_listener($event) {
        return ctx.paginationSizeValue_createWorkOrders = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](105, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](106, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](107, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_span_click_116_listener() {
        return ctx.reload_data(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_119_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r674);
        const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](817);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.select_claim(_r67));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](121, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_122_listener() {
        return ctx.export_excel_files("excel", "Create_work_order_claims", null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "ag-grid-angular", 59, 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_123_listener($event) {
        return ctx.onGridReady_1($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_123_listener($event) {
        return ctx.onSelectionChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](125, "div", 61)(126, "div", 12)(127, "div", 3)(128, "div", 62)(129, "div", 16)(130, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](131, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132, " Import History ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](135, "div", 19)(136, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_138_listener() {
        return ctx.onPageSizeChanged("import");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_138_listener($event) {
        return ctx.paginationSizeValue_Import = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](140, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](144, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](146, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](148, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "span", 65)(152, "button", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_152_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r674);
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](797);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.open(_r47));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](153, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](154, " Import");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](155, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_155_listener() {
        return ctx.templates();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](156, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](157, "Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](158, "div", 25)(159, "div", 70)(160, "ag-grid-angular", 71, 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_160_listener($event) {
        return ctx.onGridReady_4($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_160_listener($event) {
        return ctx.onSelectionChanged_import($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](162, "div", 73)(163, "div", 12)(164, "div", 3)(165, "div", 13)(166, "div", 14)(167, "div", 15)(168, "div", 16)(169, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](170, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](171, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "div", 19)(173, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_173_listener() {
        return ctx.isCollapsed_WorkOrdes = !ctx.isCollapsed_WorkOrdes;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](174, ClaimsComponent_i_174_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](175, ClaimsComponent_i_175_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "div", 23)(177, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_177_listener() {
        return ctx.workorder_search(null, null, null, 1, ctx.wo_page_number, "null", "null", null, "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](178, "div", 25)(179, "div", 74)(180, "div", 75)(181, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, "Created date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_183_listener($event) {
        return ctx.selectedCreatedAt = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "div", 77)(185, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186, "Due date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_187_listener($event) {
        return ctx.selectedDueDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "div", 77)(189, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](190, "Work Order Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](191, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "div", 77)(193, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](195, "select", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_195_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](196, "option", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function ClaimsComponent_Template_option_selected_196_listener() {
        return ctx.page = "--Select--";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](197, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](198, "option", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function ClaimsComponent_Template_option_selected_198_listener() {
        return ctx.page = "low";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](199, "Low");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](200, "option", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function ClaimsComponent_Template_option_selected_200_listener() {
        return ctx.page = "medium";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](201, "Medium");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](202, "option", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function ClaimsComponent_Template_option_selected_202_listener() {
        return ctx.page = "high";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](203, "High");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](204, "div", 74)(205, "div", 85)(206, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_input_click_206_listener() {
        return ctx.workorder_search(null, null, null, 1, ctx.wo_page_number, "null", "null", null, "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](207, "div", 14)(208, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_208_listener($event) {
        return ctx.search_values_for_work_orders = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_208_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](209, "div", 12)(210, "div", 3)(211, "div", 62)(212, "div", 87)(213, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](214, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](215, " Work Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](216, "div", 88)(217, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](218, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_219_listener() {
        return ctx.onPageSizeChanged("work_orders");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_219_listener($event) {
        return ctx.paginationSizeValue_WorkOrders = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](221, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](222, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](223, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](224, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](227, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](228, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](229, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](230, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](231, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](232, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_232_listener() {
        return ctx.export_excel_wo_files("excel", "Work_order_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](233, "ag-grid-angular", 71, 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_233_listener($event) {
        return ctx.onGridReady_2($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_233_listener($event) {
        return ctx.onSelectionChanged_WorkOrders($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](235, "div", 90)(236, "div", 91)(237, "div", 92)(238, "div", 15)(239, "div", 16)(240, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](241, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](242, " Revoke Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](243, "div", 93)(244, "div", 13)(245, "div", 94)(246, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_246_listener() {
        return ctx.move_create_work_order();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](247, "div", 13)(248, "div", 95)(249, "label", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](250, "Revoke Claims from:");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](251, "select", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_251_listener($event) {
        return ctx.selectedUserId = $event;
      })("change", function ClaimsComponent_Template_select_change_251_listener() {
        return ctx.onSelectedOptionChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](252, "option", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](253, "--Select User--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](254, ClaimsComponent_option_254_Template, 2, 2, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](255, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](256, "Selected User Claims in Assigned Status will move to your Work Order Bucket");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](258, ClaimsComponent_div_258_Template, 9, 1, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](259, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](260, ClaimsComponent_div_260_Template, 9, 1, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "div", 101)(262, "div", 103)(263, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](264, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](265, "div", 105)(266, "div", 106)(267, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](268, "Note");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](269, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](270, "If you are trying to revoke claims in assigned status only, please use the ReImport tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](271, "div", 107)(272, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](273, "Alert");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](274, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](275, " This action cannot be undone, All claims will be revoked permanently.");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](276, "div", 108)(277, "div", 12)(278, "div", 3)(279, "div", 13)(280, "div", 14)(281, "div", 15)(282, "div", 16)(283, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](284, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](285, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](286, "div", 19)(287, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_287_listener() {
        ctx.isCollapsed_ClosedClaims = !ctx.isCollapsed_ClosedClaims;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](288, ClaimsComponent_i_288_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](289, ClaimsComponent_i_289_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](290, "div", 23)(291, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_291_listener() {
        return ctx.closedClaims_search("closedClaims", 0, 0, 1, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](292, "div", 25)(293, "div", 74)(294, "div", 27)(295, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](296, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](297, "input", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_297_listener($event) {
        return ctx.selectedClosed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](298, "div", 27)(299, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](300, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](301, "select", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_301_listener($event) {
        return ctx.closed_selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](302, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](303, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](304, ClaimsComponent_option_304_Template, 2, 5, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](305, "div", 27)(306, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](307, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](308, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](309, "div", 74)(310, "div", 27)(311, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](312, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](313, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](314, "div", 27)(315, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](316, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](317, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](318, "div", 27)(319, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](320, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](321, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](322, "div", 74)(323, "div", 27)(324, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](325, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](326, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](327, ClaimsComponent_div_327_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](328, "div", 27)(329, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](330, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](331, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](332, "div", 27)(333, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](334, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](335, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_335_listener($event) {
        return ctx.closed_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](336, "div", 26)(337, "div", 27)(338, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](339, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](340, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_340_listener($event) {
        return ctx.closed_selected_val = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_340_listener($event) {
        return ctx.closedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](341, ClaimsComponent_div_341_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](342, "div", 27)(343, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](344, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](345, "ngx-select-dropdown", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_ngx_select_dropdown_change_345_listener($event) {
        return ctx.closedClaims_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](346, "div", 27)(347, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](348, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](349, "ngx-select-dropdown", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](350, "div", 74)(351, "div", 42)(352, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_input_click_352_listener() {
        return ctx.closedClaims_search("closedClaims", 0, 0, 1, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](353, "div", 14)(354, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_354_listener($event) {
        return ctx.search_values_for_closed_claims = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_354_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](355, "div", 12)(356, "div", 3)(357, "div", 45)(358, "div", 16)(359, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](360, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](361, " Closed Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](362, "div", 19)(363, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](364, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](365, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_365_listener() {
        return ctx.onPageSizeChanged("closed_claims");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_365_listener($event) {
        return ctx.paginationSizeValue_ClosedClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](366, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](367, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](368, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](369, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](370, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](371, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](372, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](373, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](374, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](375, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](376, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](377, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](378, "button", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_378_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r674);
        const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](829);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.openModal2(_r79));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](379, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](380, " Import");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](381, "p", 114)(382, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_382_listener() {
        return ctx.export_excel_files("excel", "Closed_claims", null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](383, "ag-grid-angular", 71, 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_383_listener($event) {
        return ctx.onGridReady_3($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_383_listener($event) {
        return ctx.onSelectionChanged_ClosedClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](385, "div", 116)(386, "div", 12)(387, "div", 3)(388, "div", 13)(389, "div", 14)(390, "div", 15)(391, "div", 16)(392, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](393, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](394, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](395, "div", 19)(396, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_396_listener() {
        ctx.isCollapsed_AllClaims = !ctx.isCollapsed_AllClaims;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](397, ClaimsComponent_i_397_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](398, ClaimsComponent_i_398_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](399, "div", 117)(400, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_400_listener() {
        return ctx.allClaims_search(1, "all_claim", null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](401, "div", 25)(402, "div", 26)(403, "div", 27)(404, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](405, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](406, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](407, "div", 27)(408, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](409, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](410, "select", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_410_listener($event) {
        return ctx.all_selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](411, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](412, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](413, ClaimsComponent_option_413_Template, 2, 5, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](414, "div", 27)(415, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](416, "Claim Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](417, "select", 118)(418, "option", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](419, "-- Select Status--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](420, ClaimsComponent_option_420_Template, 2, 2, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](421, "div", 26)(422, "div", 27)(423, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](424, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](425, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](426, "div", 27)(427, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](428, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](429, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](430, "div", 27)(431, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](432, "Patient Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](433, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](434, "div", 26)(435, "div", 27)(436, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](437, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](438, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](439, "div", 27)(440, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](441, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](442, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](443, ClaimsComponent_div_443_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](444, "div", 27)(445, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](446, "Rendering Provider ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](447, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](448, "div", 26)(449, "div", 27)(450, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](451, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](452, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_452_listener($event) {
        return ctx.allclaim_selected_val = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_452_listener($event) {
        return ctx.allclaimSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](453, ClaimsComponent_div_453_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](454, "div", 27)(455, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](456, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](457, "ngx-select-dropdown", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_ngx_select_dropdown_change_457_listener($event) {
        return ctx.allClaim_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](458, "div", 27)(459, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](460, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](461, "ngx-select-dropdown", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](462, "div", 26)(463, "div", 27)(464, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](465, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](466, "input", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](467, "div", 27)(468, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](469, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](470, "input", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](471, "div", 27)(472, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](473, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](474, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](475, "div", 26)(476, "div", 42)(477, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_input_click_477_listener() {
        return ctx.allClaims_search(1, "all_claim", "null", "null", "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](478, "div", 14)(479, "input", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_479_listener($event) {
        return ctx.search_values_for_all_claims = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_479_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](480, "div", 12)(481, "div", 3)(482, "div", 62)(483, "div", 123)(484, "div", 16)(485, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](486, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](487, " All Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](488, "div", 88)(489, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](490, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](491, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_491_listener() {
        return ctx.onPageSizeChanged("all_claims");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_491_listener($event) {
        return ctx.paginationSizeValue_AllClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](492, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](493, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](494, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](495, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](496, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](497, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](498, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](499, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](500, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](501, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](502, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](503, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](504, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_span_click_504_listener() {
        return ctx.reload_data_allClaims(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](505, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](506, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](507, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_507_listener() {
        return ctx.export_excel_files("excel", "all_claims_list", null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](508, "ag-grid-angular", 71, 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_508_listener($event) {
        return ctx.onGridReady_6($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_508_listener($event) {
        return ctx.onSelectionChanged_allClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](510, "div", 125)(511, "div", 12)(512, "div", 3)(513, "div", 13)(514, "div", 14)(515, "div", 15)(516, "div", 16)(517, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](518, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](519, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](520, "div", 19)(521, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_521_listener() {
        ctx.isCollapsed_AllClaims = !ctx.isCollapsed_AllClaims;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](522, ClaimsComponent_i_522_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](523, ClaimsComponent_i_523_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](524, "div", 117)(525, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_525_listener() {
        return ctx.allClaims_search(1, "all_claim", null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](526, "div", 25)(527, "div", 26)(528, "div", 27)(529, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](530, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](531, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](532, "div", 27)(533, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](534, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](535, "select", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_535_listener($event) {
        return ctx.all_selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](536, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](537, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](538, ClaimsComponent_option_538_Template, 2, 5, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](539, "div", 27)(540, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](541, "Claim Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](542, "select", 118)(543, "option", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](544, "-- Select Status--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](545, ClaimsComponent_option_545_Template, 2, 2, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](546, "div", 26)(547, "div", 27)(548, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](549, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](550, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](551, "div", 27)(552, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](553, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](554, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](555, "div", 27)(556, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](557, "Patient Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](558, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](559, "div", 26)(560, "div", 27)(561, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](562, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](563, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](564, "div", 27)(565, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](566, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](567, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](568, ClaimsComponent_div_568_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](569, "div", 27)(570, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](571, "Rendering Provider ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](572, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](573, "div", 26)(574, "div", 27)(575, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](576, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](577, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_577_listener($event) {
        return ctx.allclaim_selected_val = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_577_listener($event) {
        return ctx.allclaimSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](578, ClaimsComponent_div_578_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](579, "div", 27)(580, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](581, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](582, "ngx-select-dropdown", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_ngx_select_dropdown_change_582_listener($event) {
        return ctx.allClaim_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](583, "div", 27)(584, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](585, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](586, "ngx-select-dropdown", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](587, "div", 26)(588, "div", 27)(589, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](590, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](591, "input", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](592, "div", 27)(593, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](594, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](595, "input", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](596, "div", 27)(597, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](598, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](599, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](600, "div", 26)(601, "div", 42)(602, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_input_click_602_listener() {
        return ctx.allClaims_search(1, "all_claim", "null", "null", "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](603, "div", 14)(604, "input", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_604_listener($event) {
        return ctx.search_values_for_all_claims = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_604_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](605, "div", 12)(606, "div", 3)(607, "div", 62)(608, "div", 123)(609, "div", 16)(610, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](611, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](612, "Duplicate Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](613, "div", 88)(614, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](615, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](616, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_616_listener() {
        return ctx.onPageSizeChanged("duplicate_claims");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_616_listener($event) {
        return ctx.paginationSizeValue_DuplicateClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](617, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](618, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](619, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](620, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](621, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](622, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](623, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](624, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](625, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](626, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](627, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](628, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](629, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_span_click_629_listener() {
        return ctx.reload_data_allClaims(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](630, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](631, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](632, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_632_listener() {
        return ctx.export_excel_files("excel", "all_claims_list", null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](633, "ag-grid-angular", 71, 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_633_listener($event) {
        return ctx.onGridReady_7($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_633_listener($event) {
        return ctx.onSelectionChanged_DuplicateClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](635, "div", 127)(636, "div", 12)(637, "div", 3)(638, "div", 13)(639, "div", 14)(640, "div", 15)(641, "div", 16)(642, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](643, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](644, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](645, "div", 19)(646, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_646_listener() {
        ctx.isCollapsed_AllClaims = !ctx.isCollapsed_AllClaims;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](647, ClaimsComponent_i_647_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](648, ClaimsComponent_i_648_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](649, "div", 117)(650, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ClaimsComponent_Template_form_ngSubmit_650_listener() {
        return ctx.allClaims_search(1, "all_claim", null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](651, "div", 25)(652, "div", 26)(653, "div", 27)(654, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](655, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](656, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](657, "div", 27)(658, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](659, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](660, "select", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_660_listener($event) {
        return ctx.all_selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](661, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](662, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](663, ClaimsComponent_option_663_Template, 2, 5, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](664, "div", 27)(665, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](666, "Claim Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](667, "select", 118)(668, "option", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](669, "-- Select Status--");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](670, ClaimsComponent_option_670_Template, 2, 2, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](671, "div", 26)(672, "div", 27)(673, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](674, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](675, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](676, "div", 27)(677, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](678, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](679, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](680, "div", 27)(681, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](682, "Patient Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](683, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](684, "div", 26)(685, "div", 27)(686, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](687, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](688, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](689, "div", 27)(690, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](691, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](692, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](693, ClaimsComponent_div_693_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](694, "div", 27)(695, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](696, "Rendering Provider ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](697, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](698, "div", 26)(699, "div", 27)(700, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](701, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](702, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_702_listener($event) {
        return ctx.allclaim_selected_val = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_702_listener($event) {
        return ctx.allclaimSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](703, ClaimsComponent_div_703_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](704, "div", 27)(705, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](706, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](707, "ngx-select-dropdown", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_ngx_select_dropdown_change_707_listener($event) {
        return ctx.allClaim_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](708, "div", 27)(709, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](710, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](711, "ngx-select-dropdown", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](712, "div", 26)(713, "div", 27)(714, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](715, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](716, "input", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](717, "div", 27)(718, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](719, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](720, "input", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](721, "div", 27)(722, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](723, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](724, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](725, "div", 26)(726, "div", 42)(727, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_input_click_727_listener() {
        return ctx.allClaims_search(1, "all_claim", "null", "null", "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](728, "div", 14)(729, "input", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ClaimsComponent_Template_input_ngModelChange_729_listener($event) {
        return ctx.search_values_for_all_claims = $event;
      })("keyup", function ClaimsComponent_Template_input_keyup_729_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](730, "div", 12)(731, "div", 3)(732, "div", 62)(733, "div", 123)(734, "div", 16)(735, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](736, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](737, "MisMatched Records");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](738, "div", 88)(739, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](740, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](741, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_741_listener() {
        return ctx.onPageSizeChanged("misMatched_records");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_741_listener($event) {
        return ctx.paginationSizeValue_MismatchedValues = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](742, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](743, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](744, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](745, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](746, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](747, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](748, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](749, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](750, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](751, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](752, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](753, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](754, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_span_click_754_listener() {
        return ctx.reload_data_allClaims(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](755, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](756, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](757, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_i_click_757_listener() {
        return ctx.export_excel_files("excel", "all_claims_list", null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](758, "ag-grid-angular", 71, 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_758_listener($event) {
        return ctx.onGridReady_8($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_758_listener($event) {
        return ctx.onSelectionChanged_MismathchedRecords($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](760, "div", 129)(761, "div", 12)(762, "div", 3)(763, "div", 62)(764, "div", 16)(765, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](766, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](767, " Re-Import History ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](768, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](769);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](770, "div", 19)(771, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](772, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](773, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClaimsComponent_Template_select_change_773_listener() {
        return ctx.onPageSizeChanged("reimport");
      })("ngModelChange", function ClaimsComponent_Template_select_ngModelChange_773_listener($event) {
        return ctx.paginationSizeValue_reimport = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](774, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](775, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](776, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](777, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](778, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](779, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](780, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](781, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](782, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](783, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](784, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](785, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](786, "button", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_786_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r674);
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](801);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.open(_r51));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](787, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](788, " Import");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](789, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClaimsComponent_Template_button_click_789_listener() {
        return ctx.reimport_template();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](790, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](791, "Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](792, "div", 25)(793, "div", 70)(794, "ag-grid-angular", 71, 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("gridReady", function ClaimsComponent_Template_ag_grid_angular_gridReady_794_listener($event) {
        return ctx.onGridReady_5($event);
      })("selectionChanged", function ClaimsComponent_Template_ag_grid_angular_selectionChanged_794_listener($event) {
        return ctx.onSelectionChanged_reImport($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](796, ClaimsComponent_ng_template_796_Template, 61, 19, "ng-template", null, 132, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](798, ClaimsComponent_ng_template_798_Template, 11, 2, "ng-template", null, 133, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](800, ClaimsComponent_ng_template_800_Template, 61, 20, "ng-template", null, 134, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](802, ClaimsComponent_ng_template_802_Template, 28, 5, "ng-template", null, 135, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](804, ClaimsComponent_ng_template_804_Template, 18, 4, "ng-template", null, 136, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](806, ClaimsComponent_ng_template_806_Template, 38, 4, "ng-template", null, 137, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](808, ClaimsComponent_ng_template_808_Template, 308, 30, "ng-template", null, 138, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](810, ClaimsComponent_ng_template_810_Template, 20, 4, "ng-template", null, 139, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](812, ClaimsComponent_ng_template_812_Template, 20, 4, "ng-template", null, 140, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](814, ClaimsComponent_ng_template_814_Template, 304, 29, "ng-template", null, 141, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](816, ClaimsComponent_ng_template_816_Template, 88, 32, "ng-template", null, 142, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](818, ClaimsComponent_ng_template_818_Template, 29, 9, "ng-template", null, 143, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](820, ClaimsComponent_ng_template_820_Template, 13, 2, "ng-template", null, 144, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](822, ClaimsComponent_ng_template_822_Template, 55, 4, "ng-template", null, 145, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](824, ClaimsComponent_ng_template_824_Template, 9, 2, "ng-template", null, 146, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](826, ClaimsComponent_ng_template_826_Template, 37, 10, "ng-template", null, 147, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](828, ClaimsComponent_ng_template_828_Template, 37, 13, "ng-template", null, 148, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](830, ClaimsComponent_ng_template_830_Template, 23, 16, "ng-template", null, 149, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](832, ClaimsComponent_ng_template_832_Template, 18, 15, "ng-template", null, 150, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](834, ClaimsComponent_ng_template_834_Template, 15, 7, "ng-template", null, 151, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](836, ClaimsComponent_ng_template_836_Template, 15, 7, "ng-template", null, 152, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](838, ClaimsComponent_ng_template_838_Template, 15, 7, "ng-template", null, 153, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](840, ClaimsComponent_ng_template_840_Template, 9, 14, "ng-template", null, 154, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](842, ClaimsComponent_ng_template_842_Template, 302, 30, "ng-template", null, 155, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2 || !(ctx.user_role == 16));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2 || !(ctx.user_role == 16));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2 || !(ctx.user_role == 16));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2 || !(ctx.user_role == 16));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2 || ctx.user_role == 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2 || !(ctx.user_role == 16));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.class_change_tab["tab2"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_CreateWorkOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isCollapsed_CreateWorkOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_CreateWorkOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.isCollapsed_CreateWorkOrders)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.createClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.createClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isValueSelected == false && ctx.selected_val != "" && ctx.selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.search_values_for_create_work);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_createWorkOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_Import);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx.importProcessed == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs4)("gridOptions", ctx.gridOptions4)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_WorkOrdes);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isCollapsed_WorkOrdes);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_WorkOrdes);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.isCollapsed_WorkOrdes)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.workOrderFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.selectedCreatedAt)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.selectedDueDate)("bsConfig", ctx.bsConfig)("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.page);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.search_values_for_work_orders);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_WorkOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs2)("gridOptions", ctx.gridOptions2)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.changeExecutive);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.selectedUserId);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getUserList);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.userEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.auditClaimsEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_ClosedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isCollapsed_ClosedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_ClosedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.isCollapsed_ClosedClaims)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.closedClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.selectedClosed)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.closed_selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.closedClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.closed_select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.closed_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.closedSelected == false && ctx.closed_selected_val != "" && ctx.closed_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.search_values_for_closed_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_ClosedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs3)("gridOptions", ctx.gridOptions3)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.isCollapsed_AllClaims)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.allClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.all_selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.claim_statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.allclaim_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allclaimSelected == false && ctx.allclaim_selected_val != "" && ctx.allclaim_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.search_values_for_all_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs6)("gridOptions", ctx.gridOptions6)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.class_change_tab["tab1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.isCollapsed_AllClaims)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.allClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.all_selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.claim_statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.allclaim_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allclaimSelected == false && ctx.allclaim_selected_val != "" && ctx.allclaim_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.search_values_for_all_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_DuplicateClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs7)("gridOptions", ctx.gridOptions7)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.class_change_tab["tab1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_AllClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.isCollapsed_AllClaims)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.allClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.all_selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.claim_statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.allclaim_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allclaimSelected == false && ctx.allclaim_selected_val != "" && ctx.allclaim_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.search_values_for_all_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_MismatchedValues);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs6)("gridOptions", ctx.gridOptions8)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_reimport);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columnDefs", ctx.columnDefs5)("gridOptions", ctx.gridOptions5)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar)("autoGroupColumnDef", ctx.autoGroupColumnDef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_11__.ClaimOpFooterComponent, _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_12__.FollowupTemplateComponent, _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_13__.FollowupViewComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, angular_epic_spinners__WEBPACK_IMPORTED_MODULE_26__["ɵa"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_27__.NgxSelectDropdownComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_28__.AgGridAngular, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_29__.CollapseDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__.BsDaterangepickerInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 2520:
/*!***********************************************************!*\
  !*** ./src/app/lazy-claims/lazy-claims-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyClaimsRoutingModule": () => (/* binding */ LazyClaimsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_claims_claims_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/claims/claims.component */ 2797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_claims_claims_component__WEBPACK_IMPORTED_MODULE_0__.ClaimsComponent
}];
class LazyClaimsRoutingModule {}
LazyClaimsRoutingModule.ɵfac = function LazyClaimsRoutingModule_Factory(t) {
  return new (t || LazyClaimsRoutingModule)();
};
LazyClaimsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LazyClaimsRoutingModule
});
LazyClaimsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyClaimsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5909:
/*!***************************************************!*\
  !*** ./src/app/lazy-claims/lazy-claims.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyClaimsModule": () => (/* binding */ LazyClaimsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lazy_claims_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-claims-routing.module */ 2520);
/* harmony import */ var _components_claims_claims_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/claims/claims.component */ 2797);
/* harmony import */ var _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-module/common-module.module */ 6469);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-sidebar */ 2400);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class LazyClaimsModule {}
LazyClaimsModule.ɵfac = function LazyClaimsModule_Factory(t) {
  return new (t || LazyClaimsModule)();
};
LazyClaimsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: LazyClaimsModule
});
LazyClaimsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _lazy_claims_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyClaimsRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarModule.forRoot(), ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__.AgGridModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LazyClaimsModule, {
    declarations: [_components_claims_claims_component__WEBPACK_IMPORTED_MODULE_1__.ClaimsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _lazy_claims_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyClaimsRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__.AgGridModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_lazy-claims_lazy-claims_module_ts.bc47987b4d27d109.js.map