"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_lazy-followup_lazy-followup_module_ts"],{

/***/ 8348:
/*!***********************************************************!*\
  !*** ./src/app/components/followup/followup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowupComponent": () => (/* binding */ FollowupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-enterprise */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _Services_followup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/followup.service */ 4679);
/* harmony import */ var _Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/notes-handler.service */ 8997);
/* harmony import */ var _Services_export_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/export-functions.service */ 301);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _Services_notify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/notify.service */ 5710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../claim-op-footer/claim-op-footer.component */ 6195);
/* harmony import */ var _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followup-template/followup-template.component */ 5286);
/* harmony import */ var _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../followup-view/followup-view.component */ 6868);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../summary/summary.component */ 6685);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-epic-spinners */ 2662);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-select-dropdown */ 3277);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);






























const _c0 = ["myGrid_1"];
const _c1 = ["myGrid_2"];
const _c2 = ["myGrid_3"];
const _c3 = ["claimpage"];
const _c4 = ["processnotes"];
const _c5 = ["claimnotes"];
const _c6 = ["confirmation"];
const _c7 = ["checkboxes"];
function FollowupComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_li_6_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r46.get_month_details());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r0.class_change.tab1);
  }
}
function FollowupComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li")(1, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r48.getclaim_details(1, "allocated", "null", "null", "null", "null", "null", "null", "null", "null");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r48.getclaim_details(1, "reallocated", "null", "null", "null", "null", "null", "null", "null", "null"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Assigned Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li")(1, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r50.getclaim_details(1, "completed", "null", "null", "null", "null", "null", "null", "null", "null"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Closed Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_i_1005_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 27);
  }
}
function FollowupComponent_i_1006_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 153);
  }
}
const _c8 = function (a0, a1) {
  return {
    from_age: a0,
    to_age: a1
  };
};
function FollowupComponent_option_1021_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c8, agerange_r52.from_age, agerange_r52.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](agerange_r52.from_age + "-" + agerange_r52.to_age);
  }
}
function FollowupComponent_div_1052_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_div_1052_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1052_div_1_Template, 2, 0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.assignedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function FollowupComponent_div_1066_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "a", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_div_1066_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);
      const res_r55 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r56.assignedSelectvalue(res_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](res_r55);
  }
}
function FollowupComponent_div_1066_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1066_div_1_Template, 3, 1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r7.assigned_results);
  }
}
function FollowupComponent_i_1125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 27);
  }
}
function FollowupComponent_i_1126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 153);
  }
}
function FollowupComponent_app_atom_spinner_1241_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-atom-spinner", 159);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function FollowupComponent_tr_1242_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 165)(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.touch);
  }
}
function FollowupComponent_tr_1242_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 165)(1, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.touch);
  }
}
function FollowupComponent_tr_1242_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "td", 162);
  }
}
function FollowupComponent_tr_1242_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.dos);
  }
}
function FollowupComponent_tr_1242_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "td", 162);
  }
}
function FollowupComponent_tr_1242_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.age);
  }
}
function FollowupComponent_tr_1242_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_tr_1242_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r70);
      const x_r58 = restoredCtx.$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1372);
      ctx_r69.open(_r22);
      ctx_r69.claimslection(x_r58);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r69.claim_check(x_r58.touch));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_tr_1242_td_1_Template, 3, 1, "td", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_tr_1242_td_2_Template, 3, 1, "td", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_tr_1242_td_9_Template, 1, 0, "td", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_tr_1242_td_10_Template, 2, 1, "td", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, FollowupComponent_tr_1242_td_11_Template, 1, 0, "td", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FollowupComponent_tr_1242_td_12_Template, 2, 1, "td", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r58 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r58.touch < ctx_r12.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r58.touch >= ctx_r12.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r58.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r58.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r58.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r58.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.prim_ins_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.total_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.total_ar);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r58.claim_Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", x_r58.assigned_to, "/", x_r58.assigned_by, "");
  }
}
function FollowupComponent_tr_1244_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 168)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_i_1258_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 27);
  }
}
function FollowupComponent_i_1259_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 153);
  }
}
function FollowupComponent_option_1274_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c8, agerange_r71.from_age, agerange_r71.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](agerange_r71.from_age + "-" + agerange_r71.to_age);
  }
}
function FollowupComponent_div_1305_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_div_1305_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1305_div_1_Template, 2, 0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r17.closedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function FollowupComponent_div_1319_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "a", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_div_1319_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r76);
      const res_r74 = restoredCtx.$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r75.closedSelectvalue(res_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](res_r74);
  }
}
function FollowupComponent_div_1319_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1319_div_1_Template, 3, 1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r18.closed_results);
  }
}
function FollowupComponent_i_1366_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 27);
  }
}
function FollowupComponent_i_1367_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 153);
  }
}
function FollowupComponent_ng_template_1371_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 173)(1, "a", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r94);
      const x_r92 = restoredCtx.$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r93.selected_tab(x_r92.claim_no);
      ctx_r93.get_line_items(x_r92);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r93.check_reassign_alloc(x_r92));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r94);
      const x_r92 = restoredCtx.$implicit;
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r95.close_tab(x_r92));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r92 = ctx.$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", x_r92.claim_no === ctx_r78.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "#", x_r92.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Claim No: ", x_r92.claim_no, "");
  }
}
function FollowupComponent_ng_template_1371_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_tr_128_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r98);
      const related_r96 = restoredCtx.$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r97.referclaim(related_r96);
      ctx_r97.claim_tab_name("related_claims");
      ctx_r97.get_line_items(related_r96.claim);
      ctx_r97.check_reassign_alloc(ctx_r97.claim_clicked);
      ctx_r97.claimslection(related_r96);
      ctx_r97.check_reassign_alloc(related_r96);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r97.claim_check(related_r96.touch));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const related_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 2, related_r96.claim.dos, "MM/dd/yyyy"), " - ", related_r96.claim.claim_no, "");
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r99.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r99.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r99.cpt);
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r107.claim_clicked.total_charges, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r99.total_ar_due, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_tr_166_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r99.closed_claim_date);
  }
}
function FollowupComponent_ng_template_1371_tr_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_ng_template_1371_tr_166_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, FollowupComponent_ng_template_1371_tr_166_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, FollowupComponent_ng_template_1371_tr_166_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_ng_template_1371_tr_166_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, FollowupComponent_ng_template_1371_tr_166_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_ng_template_1371_tr_166_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, FollowupComponent_ng_template_1371_tr_166_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FollowupComponent_ng_template_1371_tr_166_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FollowupComponent_ng_template_1371_tr_166_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, FollowupComponent_ng_template_1371_tr_166_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, FollowupComponent_ng_template_1371_tr_166_span_17_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, FollowupComponent_ng_template_1371_tr_166_span_18_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "td", 214)(20, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r99 = ctx.$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r80.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r80.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.closed_claim_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r99.closed_claim_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r80.claim_clicked.touch);
  }
}
function FollowupComponent_ng_template_1371_a_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 268)(1, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_span_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span");
  }
}
function FollowupComponent_ng_template_1371_a_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_a_190_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r118);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1374);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r117.openModal2(_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_div_195_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_195_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r122);
      const x_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1374);
      ctx_r121.openModal2(_r24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r121.editnotes("processnote", x_r119.content, x_r119.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 271)(1, "p", 272)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_ng_template_1371_div_195_i_10_Template, 1, 0, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r119 = ctx.$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r119.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, x_r119.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r119.content, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r84.type != "completed");
  }
}
function FollowupComponent_ng_template_1371_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 277)(1, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_div_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 271)(1, "p", 272)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Error Types: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r124.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 3, x_r124.created_at, "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r124.content, ".");
  }
}
function FollowupComponent_ng_template_1371_div_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 277)(1, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_span_221_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_span_221_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r127);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1376);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r126.openModal2(_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r125.claim_notes_data_list.includes(ctx_r125.claim_clicked.claim_no));
  }
}
function FollowupComponent_ng_template_1371_span_221_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_ng_template_1371_span_221_a_1_Template, 5, 1, "a", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_span_221_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r129);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1376);
      ctx_r128.openModal2(_r26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r128.editnotes("claim_notes_init", "none", ctx_r128.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r88.type != "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx_r88.claim_notes_data_list.includes(ctx_r88.claim_clicked.claim_no));
  }
}
function FollowupComponent_ng_template_1371_div_226_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_226_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r133);
      const y_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1376);
      ctx_r132.openModal2(_r26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r132.editnotes("claimnotes", y_r130.content, y_r130.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_226_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 282)(1, "p", 272)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_ng_template_1371_div_226_i_10_Template, 1, 0, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r130 = ctx.$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", y_r130.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, y_r130.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", y_r130.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r89.note_edit_val == y_r130.id && y_r130.content != ctx_r89.claim_clicked.claim_note);
  }
}
function FollowupComponent_ng_template_1371_div_227_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 277)(1, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r148.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r148.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r148.cpt);
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r156.claim_clicked.total_charges, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r148.total_ar_due, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1371_div_301_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_ng_template_1371_div_301_tr_140_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, FollowupComponent_ng_template_1371_div_301_tr_140_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, FollowupComponent_ng_template_1371_div_301_tr_140_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_ng_template_1371_div_301_tr_140_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, FollowupComponent_ng_template_1371_div_301_tr_140_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_ng_template_1371_div_301_tr_140_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, FollowupComponent_ng_template_1371_div_301_tr_140_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FollowupComponent_ng_template_1371_div_301_tr_140_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FollowupComponent_ng_template_1371_div_301_tr_140_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, FollowupComponent_ng_template_1371_div_301_tr_140_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "td", 214)(19, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r148 = ctx.$implicit;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r136.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r136.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r148.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r136.claim_clicked.touch);
  }
}
function FollowupComponent_ng_template_1371_div_301_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span");
  }
}
function FollowupComponent_ng_template_1371_div_301_div_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 271)(1, "p", 272)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_div_171_Template_i_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r165);
      const x_r163 = restoredCtx.$implicit;
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1374);
      ctx_r164.open(_r24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r164.editnotes("processnote", x_r163.content, x_r163.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r163.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r163.created_at, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r163.content, ". ");
  }
}
function FollowupComponent_ng_template_1371_div_301_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 277)(1, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_div_301_a_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_a_182_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r167);
      const x_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1378);
      ctx_r166.open(_r28);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r166.confirm_reassign(x_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_div_195_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_div_195_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r172);
      const y_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1376);
      ctx_r171.open(_r26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r171.editnotes("claimnotes", y_r169.content, y_r169.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1371_div_301_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 282)(1, "p", 272)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_ng_template_1371_div_301_div_195_i_10_Template, 1, 0, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r169 = ctx.$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", y_r169.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, y_r169.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", y_r169.content, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r141.note_edit_val == y_r169.id);
  }
}
function FollowupComponent_ng_template_1371_div_301_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 277)(1, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_div_301_div_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 271)(1, "p", 272)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r174 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r174.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 3, x_r174.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r174.content, ". ");
  }
}
function FollowupComponent_ng_template_1371_div_301_div_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 277)(1, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1371_div_301_app_atom_spinner_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-atom-spinner", 159);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function FollowupComponent_ng_template_1371_div_301_span_218_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-claim-op-footer", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 240)(3, "button", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_span_218_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r176);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r175.modalRef == null ? null : ctx_r175.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tab", ctx_r146.types);
  }
}
function FollowupComponent_ng_template_1371_div_301_span_219_Template(rf, ctx) {
  if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span")(1, "div", 295)(2, "button", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_span_219_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r179);
      const x_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r177.close_tab(x_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_ng_template_1371_div_301_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 283)(1, "div", 179)(2, "div", 66)(3, "div", 180)(4, "div", 17)(5, "div", 181)(6, "div", 13)(7, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 25)(11, "button", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 183)(14, "div", 10)(15, "div", 184)(16, "div", 185)(17, "div", 186)(18, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 25)(22, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 188)(25, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "svg", 190)(27, "desc", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "defs", 191)(30, "path", 192)(31, "path", 193)(32, "path", 194)(33, "path", 195)(34, "path", 196)(35, "path", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "text", 198)(37, "tspan", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "text", 200)(40, "tspan", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 49)(43, "div", 184)(44, "div", 285)(45, "table", 204)(46, "tbody")(47, "tr")(48, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "tr")(53, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "tr")(58, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "tr")(64, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 286)(69, "table", 204)(70, "tbody")(71, "tr")(72, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "tr")(90, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "tr")(99, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](103, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 210)(105, "div", 211)(106, "div", 17)(107, "div", 181)(108, "div", 13)(109, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](110, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 25)(113, "button", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](114, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 49)(116, "div", 20)(117, "table", 31)(118, "thead")(119, "tr")(120, "th", 214)(121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "th", 214)(124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "th", 214)(127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "th", 214)(130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](131, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "th", 214)(133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](134, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "th", 214)(136, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](138, "th", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](140, FollowupComponent_ng_template_1371_div_301_tr_140_Template, 21, 11, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "div", 215)(142, "div", 25)(143, "a", 216)(144, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](145, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "a", 218)(147, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "a", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_Template_a_click_149_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r181);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r180.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](150, "i", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](153, FollowupComponent_ng_template_1371_div_301_span_153_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "div", 222)(155, "div", 211)(156, "div", 17)(157, "div", 181)(158, "div", 13)(159, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](160, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "div", 25)(163, "a", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_Template_a_click_163_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r181);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1374);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r182.openModal2(_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](164, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](168, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "div", 288)(170, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](171, FollowupComponent_ng_template_1371_div_301_div_171_Template, 10, 3, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](172, FollowupComponent_ng_template_1371_div_301_div_172_Template, 3, 0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "div", 232)(174, "div", 211)(175, "div", 17)(176, "div", 181)(177, "div", 13)(178, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](179, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](182, FollowupComponent_ng_template_1371_div_301_a_182_Template, 1, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](183, "a", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_Template_a_click_183_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r181);
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1376);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r183.open(_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](184, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](186, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "a", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_div_301_Template_a_click_187_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r181);
      const x_r135 = restoredCtx.$implicit;
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1376);
      ctx_r184.open(_r26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r184.editnotes("claim_notes_init", "none", x_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](188, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](192, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "div", 288)(194, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](195, FollowupComponent_ng_template_1371_div_301_div_195_Template, 11, 7, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](196, FollowupComponent_ng_template_1371_div_301_div_196_Template, 3, 0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "div", 290)(198, "div", 211)(199, "div", 17)(200, "div", 181)(201, "div", 229)(202, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](203, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](204, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "div", 25)(206, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](207, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "div", 288)(209, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](210, FollowupComponent_ng_template_1371_div_301_div_210_Template, 10, 6, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](211, FollowupComponent_ng_template_1371_div_301_div_211_Template, 3, 0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](212, FollowupComponent_ng_template_1371_div_301_app_atom_spinner_212_Template, 1, 2, "app-atom-spinner", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](213, "div", 236)(214, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](215, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](216, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](217, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](218, FollowupComponent_ng_template_1371_div_301_span_218_Template, 5, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](219, FollowupComponent_ng_template_1371_div_301_span_219_Template, 4, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "div", 242)(221, "div", 243)(222, "div", 184)(223, "h4", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](224, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "form", 245)(227, "div", 246)(228, "div", 247)(229, "div", 248)(230, "div", 249)(231, "div", 250)(232, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](233, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](235, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](236, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "div", 247)(238, "div", 248)(239, "div", 249)(240, "div", 250)(241, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](244, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](245, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](246, "div", 247)(247, "div", 248)(248, "div", 249)(249, "div", 250)(250, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](254, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](255, "div", 247)(256, "div", 248)(257, "div", 252)(258, "div", 250)(259, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](260, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](261, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "select", 253)(264, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](265, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](266, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](267, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](268, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](269, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](270, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "span", 254)(273, "span", 255)(274, "span", 256)(275, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](276, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](277, "span", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](278, "b", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](279, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r135 = ctx.$implicit;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", x_r135.claim_no === ctx_r91.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", x_r135.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", x_r135.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", x_r135.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](62, 30, x_r135.dob, "MM/dd/yyyy"), ", ", x_r135.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", x_r135.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r91.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r91.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r91.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r91.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r91.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r91.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r91.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r91.curr_reassigned_claims.includes(ctx_r91.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r91.active_refer_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r91.active_refer_process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r91.reassign_allocation == true && ctx_r91.refer_claim_editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r91.claim_notes_data_list.includes(x_r135.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx_r91.claim_notes_data_list.includes(x_r135.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r91.active_refer_claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r91.active_refer_claim.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r91.active_refer_client);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r91.active_refer_client.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r91.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "x", x_r135.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "y", x_r135.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r91.refer_claim_editable == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r91.refer_claim_editable == "false");
  }
}
function FollowupComponent_ng_template_1371_Template(rf, ctx) {
  if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 169)(1, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r186);
      const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r185.modalRef == null ? null : ctx_r185.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r185.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ul", 172)(5, "li", 173)(6, "a", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r186);
      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r187.selected_tab("maintab");
      ctx_r187.get_line_items(ctx_r187.claim_clicked);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r187.check_reassign_alloc(ctx_r187.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_ng_template_1371_li_9_Template, 7, 4, "li", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 177)(11, "div", 178)(12, "div", 179)(13, "div", 66)(14, "div", 180)(15, "div", 17)(16, "div", 181)(17, "div", 13)(18, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 25)(22, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 183)(25, "div", 10)(26, "div", 184)(27, "div", 185)(28, "div", 186)(29, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 25)(33, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 188)(36, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "svg", 190)(38, "desc", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "defs", 191)(41, "path", 192)(42, "path", 193)(43, "path", 194)(44, "path", 195)(45, "path", 196)(46, "path", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "text", 198)(48, "tspan", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "text", 200)(51, "tspan", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 202)(54, "div", 184)(55, "div", 203)(56, "table", 204)(57, "tbody")(58, "tr")(59, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "tr")(66, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "tr")(73, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](79, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "tr")(81, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 206)(88, "table", 204)(89, "tbody")(90, "tr")(91, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](94, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "tr")(109, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](110, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "tr")(118, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](119, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](121, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "div", 208)(124, "h4", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "table", 204)(127, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](128, FollowupComponent_ng_template_1371_tr_128_Template, 4, 5, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "div", 210)(130, "div", 211)(131, "div", 17)(132, "div", 181)(133, "div", 13)(134, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](135, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](136, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "div", 25)(138, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](139, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "div", 213)(141, "div", 20)(142, "div", 125)(143, "table", 31)(144, "thead")(145, "tr")(146, "th", 214)(147, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "th", 214)(150, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](151, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](152, "th", 214)(153, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "th", 214)(156, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "th", 214)(159, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](160, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "th", 214)(162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](163, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](164, "th", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](166, FollowupComponent_ng_template_1371_tr_166_Template, 22, 13, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "div", 215)(168, "div", 25)(169, "a", 216)(170, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](172, "a", 218)(173, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](174, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](175, FollowupComponent_ng_template_1371_a_175_Template, 3, 0, "a", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](176, "a", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_Template_a_click_176_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r186);
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r188.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](177, "i", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](178, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](179, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](180, FollowupComponent_ng_template_1371_span_180_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "div", 222)(182, "div", 211)(183, "div", 17)(184, "div", 181)(185, "div", 13)(186, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](187, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](190, FollowupComponent_ng_template_1371_a_190_Template, 5, 0, "a", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](192, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "div", 225)(194, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](195, FollowupComponent_ng_template_1371_div_195_Template, 11, 7, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](196, FollowupComponent_ng_template_1371_div_196_Template, 3, 0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "div", 228)(198, "div", 211)(199, "div", 17)(200, "div", 181)(201, "div", 229)(202, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](203, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](204, " QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "div", 25)(206, "button", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](207, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "div", 231)(209, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](210, FollowupComponent_ng_template_1371_div_210_Template, 16, 6, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](211, FollowupComponent_ng_template_1371_div_211_Template, 3, 0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](212, "div", 232)(213, "div", 211)(214, "div", 17)(215, "div", 181)(216, "div", 13)(217, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](218, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](221, FollowupComponent_ng_template_1371_span_221_Template, 6, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](222, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](223, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "div", 234)(225, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](226, FollowupComponent_ng_template_1371_div_226_Template, 11, 7, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](227, FollowupComponent_ng_template_1371_div_227_Template, 3, 0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](228, "div", 236)(229, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](230, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](231, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](232, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "app-claim-op-footer", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("methodCalled", function FollowupComponent_ng_template_1371_Template_app_claim_op_footer_methodCalled_233_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r186);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r189.onMethodCalled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "div", 240)(235, "button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1371_Template_button_click_235_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r186);
      const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r190.modalRef == null ? null : ctx_r190.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](236, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "div", 242)(238, "div", 243)(239, "div", 184)(240, "h4", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](241, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "form", 245)(244, "div", 246)(245, "div", 247)(246, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](247, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](248, "div", 247)(249, "div", 248)(250, "div", 249)(251, "div", 250)(252, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](254, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](256, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "div", 247)(258, "div", 248)(259, "div", 249)(260, "div", 250)(261, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](265, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](266, "div", 247)(267, "div", 248)(268, "div", 252)(269, "div", 250)(270, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "select", 253)(275, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](276, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](277, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](278, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](279, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](280, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](281, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](282, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](283, "span", 254)(284, "span", 255)(285, "span", 256)(286, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](287, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](288, "span", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](289, "b", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](290, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "form", 245)(292, "div", 49)(293, "div", 66)(294, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](295, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](296, "textarea", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](297, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](298, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](300, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](301, FollowupComponent_ng_template_1371_div_301_Template, 280, 33, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](302, "div", 265);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r23.main_tab == ctx_r23.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r23.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r23.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r23.claim_clicked.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r23.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](79, 31, ctx_r23.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r23.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r23.claim_clicked.ssn);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r23.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r23.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r23.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r23.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r23.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r23.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.type == "reallocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.curr_reassigned_claims.includes(ctx_r23.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.type != "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.process_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.process_notes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r23.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r23.curr_reassigned_claims.includes(ctx_r23.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r23.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tab", ctx_r23.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.refer_claim_det);
  }
}
function FollowupComponent_ng_template_1373_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1373_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r196);
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r195.savenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r195.modalRef2 == null ? null : ctx_r195.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r192.valid);
  }
}
function FollowupComponent_ng_template_1373_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1373_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r198);
      const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r197.updatenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r197.modalRef2 == null ? null : ctx_r197.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r192.valid);
  }
}
function FollowupComponent_ng_template_1373_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 169)(1, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1373_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r200);
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r199.modalRef2 == null ? null : ctx_r199.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 297)(7, "div", 236)(8, "form", 298, 299)(10, "div", 184)(11, "div", 17)(12, "div", 66)(13, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "textarea", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 265)(16, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1373_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r200);
      const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r201.modalRef2 == null ? null : ctx_r201.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, FollowupComponent_ng_template_1373_button_18_Template, 2, 1, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, FollowupComponent_ng_template_1373_button_19_Template, 2, 1, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r25.processNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r25.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r25.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r25.editnote_value);
  }
}
function FollowupComponent_ng_template_1375_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1375_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r207);
      const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r206.savenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r206.modalRef2 == null ? null : ctx_r206.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Sav");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r203.valid);
  }
}
function FollowupComponent_ng_template_1375_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1375_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r209);
      const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r208.updatenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r208.modalRef2 == null ? null : ctx_r208.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r203.valid);
  }
}
function FollowupComponent_ng_template_1375_Template(rf, ctx) {
  if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 169)(1, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1375_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r211);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r210.modalRef2 == null ? null : ctx_r210.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 297)(7, "div", 236)(8, "form", 298, 299)(10, "div", 184)(11, "div", 17)(12, "div", 66)(13, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "textarea", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 265)(16, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1375_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r211);
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r212.modalRef2 == null ? null : ctx_r212.modalRef2.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r212.close_clear_data());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, FollowupComponent_ng_template_1375_button_18_Template, 2, 1, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, FollowupComponent_ng_template_1375_button_19_Template, 2, 1, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r27.claimNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r27.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r27.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r27.editnote_value);
  }
}
function FollowupComponent_ng_template_1377_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 297)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Are you sure you want to Reassign the Claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "The Claim will be moved from your Bucket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r214.reassign_claim.claim_no);
  }
}
function FollowupComponent_ng_template_1377_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 169)(1, "h4", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Re-Assign to Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1377_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const modal_r213 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r213.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_ng_template_1377_div_6_Template, 11, 1, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 265)(8, "button", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1377_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const modal_r213 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r213.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1377_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const modal_r213 = restoredCtx.$implicit;
      const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r213.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r218.confirm_action(ctx_r218.confirmation_type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r29.confirmation_type == "Reassign");
  }
}
function FollowupComponent_ng_template_1379_Template(rf, ctx) {
  if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 169)(1, "h4", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Re-Assign to Managers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1379_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r221);
      const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r220.modalRef3 == null ? null : ctx_r220.modalRef3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 10)(7, "div", 184)(8, "div", 313)(9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Are you sure you want to Reassign the Claim ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 265)(13, "button", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1379_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r221);
      const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r222.modalRef3 == null ? null : ctx_r222.modalRef3.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r222.cancel_claims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1379_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r221);
      const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r223.modalRef3 == null ? null : ctx_r223.modalRef3.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r223.confirm_box("confirmation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1381_Template(rf, ctx) {
  if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 169)(1, "h4", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Re-Assign to Managers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1381_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r226);
      const modal_r224 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r224.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 10)(7, "div", 184)(8, "div", 313)(9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Are you sure you want to Reassign the Claim ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 265)(13, "button", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1381_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r226);
      const modal_r224 = restoredCtx.$implicit;
      const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r224.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r227.cancel_claims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1381_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r226);
      const modal_r224 = restoredCtx.$implicit;
      const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r224.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r228.confirm_boxes("reassign"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1383_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Auth No : ", ctx_r35.claim_data.auth_no ? ctx_r35.claim_data.auth_no : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Admit Date : ", ctx_r35.claim_data.admit_date ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 10, ctx_r35.claim_data.admit_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Discharge Date : ", ctx_r35.claim_data.discharge_date ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 13, ctx_r35.claim_data.discharge_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" CPT : ", ctx_r35.claim_data.cpt ? ctx_r35.claim_data.cpt : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ICD : ", ctx_r35.claim_data.icd ? ctx_r35.claim_data.icd : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Modifiers : ", ctx_r35.claim_data.modifiers ? ctx_r35.claim_data.modifiers : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Units : ", ctx_r35.claim_data.units ? ctx_r35.claim_data.units : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Facility : ", ctx_r35.claim_data.facility ? ctx_r35.claim_data.facility : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Billing Provider : ", ctx_r35.claim_data.billing_prov ? ctx_r35.claim_data.billing_prov : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Insurance Type : ", ctx_r35.claim_data.insurance_type ? ctx_r35.claim_data.insurance_type : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1385_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Guarantor : ", ctx_r37.claim_data.guarantor ? ctx_r37.claim_data.guarantor : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" DOB : ", ctx_r37.claim_data.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 12, ctx_r37.claim_data.dob, "MM/dd/yyyy") : "-Nil-", " | Age : ", ctx_r37.calculateAge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" SSN : ", ctx_r37.claim_data.ssn ? ctx_r37.claim_data.ssn : "-Nil-", " | Gender : ", ctx_r37.claim_data.gender ? ctx_r37.claim_data.gender : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx_r37.claim_data.address_1 ? ctx_r37.claim_data.address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx_r37.claim_data.address_2 ? ctx_r37.claim_data.address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" City : ", ctx_r37.claim_data.city ? ctx_r37.claim_data.city : "-Nil-", " | State : ", ctx_r37.claim_data.state ? ctx_r37.claim_data.state : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Zip Code : ", ctx_r37.claim_data.zipcode ? ctx_r37.claim_data.zipcode : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" Phone Number : ", ctx_r37.claim_data.phone_no ? ctx_r37.claim_data.phone_no : "-Nil-", " Employer : ", ctx_r37.claim_data.employer ? ctx_r37.claim_data.employer : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1387_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Primary Policy ID : ", ctx_r39.claim_data.prim_pol_id ? ctx_r39.claim_data.prim_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary Group ID : ", ctx_r39.claim_data.prim_group_id ? ctx_r39.claim_data.prim_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Primary Address 1 : ", ctx_r39.claim_data.prim_address_1 ? ctx_r39.claim_data.prim_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary Address 2 : ", ctx_r39.claim_data.prim_address_2 ? ctx_r39.claim_data.prim_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary City : ", ctx_r39.claim_data.prim_city ? ctx_r39.claim_data.prim_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary State : ", ctx_r39.claim_data.prim_state ? ctx_r39.claim_data.prim_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary Zip Code : ", ctx_r39.claim_data.prim_zipcode ? ctx_r39.claim_data.prim_zipcode : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1389_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Secondary Policy ID : ", ctx_r41.claim_data.sec_pol_id ? ctx_r41.claim_data.sec_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary Group ID : ", ctx_r41.claim_data.sec_group_id ? ctx_r41.claim_data.sec_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Secondary Address 1 : ", ctx_r41.claim_data.sec_address_1 ? ctx_r41.claim_data.sec_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary Address 2 : ", ctx_r41.claim_data.sec_address_2 ? ctx_r41.claim_data.sec_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary City : ", ctx_r41.claim_data.sec_city ? ctx_r41.claim_data.sec_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary State : ", ctx_r41.claim_data.sec_state ? ctx_r41.claim_data.sec_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary Zip Code : ", ctx_r41.claim_data.sec_zipcode, "");
  }
}
function FollowupComponent_ng_template_1391_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Tertiary Policy ID : ", ctx_r43.claim_data.ter_pol_id ? ctx_r43.claim_data.ter_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary Group ID : ", ctx_r43.claim_data.ter_group_id ? ctx_r43.claim_data.ter_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Tertiary Address 1 : ", ctx_r43.claim_data.ter_address_1 ? ctx_r43.claim_data.ter_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary Address 2 : ", ctx_r43.claim_data.ter_address_2 ? ctx_r43.claim_data.ter_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary City : ", ctx_r43.claim_data.ter_city ? ctx_r43.claim_data.ter_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary State : ", ctx_r43.claim_data.ter_state ? ctx_r43.claim_data.ter_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary Zip Code : ", ctx_r43.claim_data.ter_zipcode ? ctx_r43.claim_data.ter_zipcode : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1393_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Patient AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 2, ctx_r45.claim_data.pat_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](4, 5, ctx_r45.claim_data.pat_ar, "1.2-2") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Insurance AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 8, ctx_r45.claim_data.ins_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 11, ctx_r45.claim_data.ins_ar, "1.2-2") : "-Nil-", "");
  }
}
const _c9 = function (a2, a3) {
  return {
    id: "claims",
    itemsPerPage: 15,
    currentPage: a2,
    totalItems: a3
  };
};
class FollowupComponent {
  constructor(formBuilder, Jarwis, setus, loadingBar, modalService, follow, notes_hadler, export_handler, toastr, notify_service, datepipe, modal, auth, loader) {
    this.formBuilder = formBuilder;
    this.Jarwis = Jarwis;
    this.setus = setus;
    this.loadingBar = loadingBar;
    this.modalService = modalService;
    this.follow = follow;
    this.notes_hadler = notes_hadler;
    this.export_handler = export_handler;
    this.toastr = toastr;
    this.notify_service = notify_service;
    this.datepipe = datepipe;
    this.modal = modal;
    this.auth = auth;
    this.loader = loader;
    this.assigned = "";
    this.reAssigned = "";
    this.closedWork = "";
    this.isCollapsed = true;
    this.assignedSelected = false;
    this.reassignedSelected = false;
    this.closedSelected = false;
    this.assigned_results = [];
    this.reassigned_results = [];
    this.closed_results = [];
    this.searchResults = [];
    this.assigned_selected_val = null;
    this.reassigned_selected_val = null;
    this.closed_selected_val = null;
    this.status_codes_data = [];
    this.sub_status_codes_data = [];
    this.decimal_pattern = "^\[0-9]+(\.[0-9][0-9])\-\[0-9]+(\.[0-9][0-9])?$";
    this.selectedAge = null;
    this.reassignedSelectedAge = null;
    this.closedSelectedAge = null;
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
    this.ranges = {
      'Today': [moment__WEBPACK_IMPORTED_MODULE_0__(), moment__WEBPACK_IMPORTED_MODULE_0__()],
      'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days')],
      'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
      'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
      'This Month': [moment__WEBPACK_IMPORTED_MODULE_0__().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().endOf('month')],
      'Last Month': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')]
    };
    this.invalidDates = [moment__WEBPACK_IMPORTED_MODULE_0__().add(2, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().add(3, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().add(5, 'days')];
    this.isInvalidDate = m => {
      return this.invalidDates.some(d => d.isSame(m, 'day'));
    };
    this.total = 0;
    this.total_reallocated = 0;
    this.request_monitor = 0;
    this.table_fields = [];
    this.workorder_table = [];
    // public total_assigned:number=0;
    this.claim_notes_data_list = [];
    this.current_claim_type = '';
    this.closeResult = '';
    this.total_claims = 0;
    this.pages = 0;
    this.claim_notes_data = [];
    this.completed_claims = [];
    this.total_completed_claims = 0;
    this.comp_pages = 0;
    this.tab_load = false;
    this.allocated_claims = [];
    this.reallocated_claims = [];
    this.total_allocated = 0;
    this.total_realPlocated = 0;
    this.alloc_pages = 0;
    this.realloc_pages = 0;
    this.loading = true;
    this.sortByAsc = true;
    this.formdata = new FormData();
    this.search_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl();
    this.wo_search_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl();
    this.filter_option = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl();
    //Red Alerrt Box
    this._opened = false;
    this.isOpen = false;
    this._positionNum = 0;
    this._modeNum = 1;
    this.table_datas = [];
    this._MODES = ['push'];
    this._POSITIONS = ['right'];
    this.claim_status_codes = [];
    this.claim_sub_status_codes = [];
    this.selected_status_code = [];
    this.selected_sub_status_code = [];
    this.selected_filter_type = [];
    this.searchData = '';
    //Managing Values displayed in Modal
    this.claim_clicked = [];
    this.claim_related = [];
    this.process_notes = [];
    this.claim_notes = [];
    this.qc_notes = [];
    this.client_notes = [];
    this.line_data = [];
    this.toal = 0;
    //Refer Claim Clicked Action
    this.refer_claim_det = [];
    this.refer_claim_no = [];
    this.refer_claim_notes = [];
    this.refer_process_notes = [];
    this.refer_qc_notes = [];
    this.main_tab = true;
    this.active_tab = [];
    this.active_refer_claim = [];
    this.active_refer_process = [];
    this.active_refer_qc = [];
    this.refer_claim_notes_nos = [];
    this.refer_process_notes_nos = [];
    this.refer_qc_notes_nos = [];
    this.refer_client_notes_nos = [];
    this.refer_client_notes = [];
    this.active_refer_client = [];
    this.refer_claim_editable = 'false';
    this.process_notes_data_list = [];
    this.process_notes_data = [];
    this.initial_edit = false;
    this.line_item_data = [];
    this.curr_reassigned_claims = [];
    this.reassign_allocation = true;
    // get_touch_limit()
    // {
    //   this.Jarwis.get_practice_stats().subscribe(
    //     data =>this.set_prac_settings(data)
    //     );
    // }
    this.touch_count = 0;
    this.chart_val = {
      "chart": {
        // "caption": "Split of Top Products Sold",
        // "subCaption": "Last Quarter",
        "basefontsize": "10",
        "pieFillAlpha": "70",
        "pieBorderThickness": "2",
        "hoverFillColor": "#cccccc",
        "pieBorderColor": "#ffffff",
        "showPercentInTooltip": "0",
        "numberPrefix": "$",
        "plotTooltext": "$label, $$valueK, $percentValue",
        "theme": "fusion"
      },
      "category": [{
        "label": "My Report",
        "color": "#ffffff",
        "value": "150",
        "category": [{
          "label": "0-30",
          "color": "#f8bd19",
          "category": [{
            "label": "Breads",
            "color": "#f8bd19",
            "value": "11.1"
          }, {
            "label": "Juice",
            "color": "#f8bd19",
            "value": "27.75"
          }, {
            "label": "Noodles",
            "color": "#f8bd19",
            "value": "9.99"
          }, {
            "label": "Seafood",
            "color": "#f8bd19",
            "value": "6.66"
          }]
        }, {
          "label": "31-60",
          "color": "#e44a00",
          "category": [{
            "label": "Sun Glasses",
            "color": "#e44a00",
            "value": "10.08"
          }, {
            "label": "Clothing",
            "color": "#e44a00",
            "value": "18.9"
          }, {
            "label": "Handbags",
            "color": "#e44a00",
            "value": "6.3"
          }, {
            "label": "Shoes",
            "color": "#e44a00",
            "value": "6.72"
          }]
        }, {
          "label": "61-90",
          "color": "#008ee4",
          "category": [{
            "label": "Bath &{br}Grooming",
            "color": "#008ee4",
            "value": "9.45"
          }, {
            "label": "Feeding",
            "color": "#008ee4",
            "value": "6.3"
          }, {
            "label": "Diapers",
            "color": "#008ee4",
            "value": "6.75"
          }]
        }, {
          "label": "120+",
          "color": "#33bdda",
          "category": [{
            "label": "Laptops",
            "color": "#33bdda",
            "value": "8.1"
          }, {
            "label": "Televisions",
            "color": "#33bdda",
            "value": "10.5"
          }, {
            "label": "SmartPhones",
            "color": "#33bdda",
            "value": "11.4"
          }]
        }]
      }]
    };
    this.class_change = [];
    this.class_change_tab = [];
    this.weeks = [];
    this.days = [];
    this.col_span = [];
    this.assigned_target = [];
    this.achieved_target = [];
    this.achi_targ_per = [];
    this.check_all = [];
    this.selected_claims = [];
    this.selected_claim_nos = [];
    this.summary_total_assigned = 0;
    //Configuration of Dropdown Search
    this.config = {
      displayKey: "description",
      search: true,
      limitTo: 1000,
      result: 'single'
    };
    this.tooltipOptions = {
      'placement': 'right',
      'show-delay': '200',
      'tooltip-class': 'new-tooltip-class',
      'background-color': '#9ad9e4',
      'margin-top': '20px'
    };
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-default',
      rangeInputFormat: 'MM/DD/YYYY',
      dateInputFormat: 'MM/DD/YYYY',
      showWeekNumbers: false,
      isAnimated: true,
      adaptivePosition: true
    });
    this.submitted = false;
    this.cdtn = false;
    this.GridrowData1 = [];
    this.GridrowData2 = [];
    this.GridrowData3 = [];
    this.isCollapsed_Assigned = true;
    this.isCollapsed_Revoked = true;
    this.isCollapsed_Grid1 = false;
    this.isCollapsed_Grid2 = false;
    this.isCollapsed_Grid3 = false;
    this.isCollapsed_closed_claim = true;
    this.paginationSizeValue_assigned = 15;
    this.paginationSizeValue_reworked = 15;
    this.paginationSizeValue_closed = 15;
    this.defaultColDef = {
      editable: false,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: false
    };
    this.gridOptions1 = {
      defaultColDef: {
        sortable: true,
        filter: true
      },
      rowSelection: 'multiple',
      rowHeight: 34,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_assigned,
      suppressDragLeaveHidesColumns: true
    };
    this.gridOptions2 = {
      defaultColDef: {
        sortable: true,
        filter: true
      },
      rowSelection: 'multiple',
      rowHeight: 34,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_reworked,
      suppressDragLeaveHidesColumns: true
    };
    this.gridOptions3 = {
      defaultColDef: {
        sortable: true,
        filter: true
      },
      rowSelection: 'multiple',
      rowHeight: 34,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_closed,
      suppressDragLeaveHidesColumns: true
    };
    this.columnDefs1 = [{
      field: 'touch',
      headerName: '',
      width: 50,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered.bind(this, 'touch')
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 130,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 130,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'dos'),
      onCellClicked: this.CellClicked.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 136,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'age'),
      onCellClicked: this.CellClicked.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 155,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'rendering_prov'),
      onCellClicked: this.CellClicked.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'responsibility'),
      onCellClicked: this.CellClicked.bind(this, 'responsibility')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'total_charges'),
      onCellClicked: this.CellClicked.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'total_ar'),
      onCellClicked: this.CellClicked.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_Status'),
      onCellClicked: this.CellClicked.bind(this, 'claim_Status')
    }, {
      field: 'claim_note',
      headerName: 'Claim Note',
      sortable: true,
      width: 145,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'claim_note'),
      onCellClicked: this.CellClicked.bind(this, 'claim_note')
    }, {
      field: 'created_ats',
      headerName: 'Assigned To | Date',
      sortable: true,
      width: 165,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered.bind(this, 'created_ats'),
      onCellClicked: this.CellClicked.bind(this, 'created_ats')
    }];
    this.columnDefs2 = [{
      field: 'touch',
      headerName: '',
      width: 43,
      sortable: true,
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'touch'),
      cellStyle: params => {
        return {
          'font-size': '12px'
        };
      }
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 100,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 120,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'dos'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'dos')
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'age'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'age')
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 155,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'rendering_prov'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'responsibility'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'responsibility')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'billed_submit_date'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'billed_submit_date')
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'denial_code'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'denial_code')
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'total_charges'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 105,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'total_ar'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 125,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'claim_Status'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'claim_Status')
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'claim_note'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'claim_note')
    }, {
      field: 'created_ats',
      headerName: 'Assigned To | Date',
      sortable: true,
      width: 165,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_ReworkClaims.bind(this, 'created_ats'),
      onCellClicked: this.CellClicked_ReworkClaims.bind(this, 'created_ats')
    }];
    this.columnDefs3 = [{
      field: 'touch',
      headerName: '',
      width: 43,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'touch'),
      headerClass: 'custom-header'
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 100,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'claim_no'),
      headerClass: 'custom-header'
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 120,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'dos'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'dos'),
      headerClass: 'custom-header'
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'age'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'age'),
      headerClass: 'custom-header'
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'acct_no'),
      headerClass: 'custom-header'
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'patient_name'),
      headerClass: 'custom-header'
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 155,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'rendering_prov'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'rendering_prov'),
      headerClass: 'custom-header'
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'responsibility'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'responsibility'),
      headerClass: 'custom-header'
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'billed_submit_date'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'billed_submit_date'),
      headerClass: 'custom-header'
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 135,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'denial_code'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'denial_code'),
      headerClass: 'custom-header'
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 105,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'total_charges'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'total_charges'),
      headerClass: 'custom-header'
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 115,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'total_ar'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'total_ar'),
      headerClass: 'custom-header'
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 115,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'claim_Status'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'claim_Status'),
      headerClass: 'custom-header'
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
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'claim_note'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'claim_note'),
      headerClass: 'custom-header'
    }, {
      field: 'created_ats',
      headerName: 'Assigned To | Date',
      sortable: true,
      width: 175,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px '
        };
      },
      cellRenderer: this.cellrendered_closed_claims.bind(this, 'created_ats'),
      onCellClicked: this.CellClicked_closed_claims.bind(this, 'created_ats'),
      headerClass: 'custom-header'
    }];
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
          suppressColumnSelectAll: false,
          suppressColumnExpandAll: false,
          cssClasses: ['custom-sidebar']
        }
      }],
      defaultToolPanel: 'columns'
    };
    this.response_data = this.notes_hadler.get_response_data('followup').subscribe(message => {
      this.collect_response(message);
    });
    this.update_monitor = this.notes_hadler.refresh_update().subscribe(message => {
      if (this.request_monitor < 1) {
        this.getclaim_details(this.pages, 'refresh', 'null', 'null', 'null', 'null', null, null, null, null);
        this.request_monitor++;
      }
    });
    this.alwaysShowCalendars = true;
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
  //Assign Work Order Table Data
  form_table(data, type, form_type) {
    if (form_type == null) {
      if (type == "wo") {
        if (data) {
          this.table_fields = data.data.fields;
          this.workorder_table = data.data.datas;
          this.total_claims = data.count;
        }
        // this.total_assigned=6;
      } else if (type == 'completed') {
        console.log('INNN333');
        if (data) {
          this.completed_claims = data.data.datas;
          this.GridrowData3 = this.completed_claims;
          this.myGrid_3.api.setRowData(this.GridrowData3);
          this.gridApi_3.closeToolPanel();
          this.loader.stop();
          this.completed_claims_data = data.data.datas;
          this.total_completed_claims = data.count;
          this.total = data.total;
          this.current_total = data.current_total;
          this.skip = data.skip + 1;
          this.total_row = data.count;
          // this.setus.change_status.next(false);
        } else {
          this.GridrowData3 = [];
          this.myGrid_3.api.setRowData(this.GridrowData3);
          this.gridApi_3.closeToolPanel();
          this.loader.stop();
        }
        // this.completed_claims_data = data.selected_claim_data;
        this.skip_row = this.skip;
        this.current_row = this.skip + this.current_total - 1;
      } else if (type == 'allocated') {
        console.log('INNN11');
        if (data) {
          this.allocated_claims = data.data.datas;
          this.GridrowData1 = this.allocated_claims;
          this.myGrid_1.api.setRowData(this.GridrowData1);
          this.gridApi_1.closeToolPanel();
          this.loader.stop();
          this.assigned_claims = data.data.datas;
          this.total_allocated = data.count;
          this.total = data.total;
          this.current_total = data.current_total;
          this.skip = data.skip + 1;
          this.total_row = data.count;
        } else {
          this.GridrowData1 = [];
          this.myGrid_1.api.setRowData(this.GridrowData1);
          this.gridApi_1.closeToolPanel();
          this.loader.stop();
        }
        console.log('allocated_claims', this.allocated_claims);
        // this.assigned_claims = data.selected_claim_data;
        this.skip_row = this.skip;
        this.current_row = this.skip + this.current_total - 1;
      } else if (type == 'reallocated') {
        console.log('INNN22');
        if (data) {
          this.reallocated_claims = data.data.datas;
          this.GridrowData2 = this.reallocated_claims;
          this.myGrid_2.api.setRowData(this.GridrowData2);
          this.gridApi_2.closeToolPanel();
          this.loader.stop();
          this.reassigned_claims_data = data.data.datas;
          this.total_reallocated = data.count;
          this.total = data.total;
          this.current_total = data.current_total;
          this.skip = data.skip + 1;
          this.reallocate_total_row = data.current_total;
        } else {
          this.GridrowData2 = [];
          this.myGrid_2.api.setRowData(this.GridrowData2);
          this.gridApi_2.closeToolPanel();
          this.loader.stop();
        }
        console.log('reallocated_claims', this.reallocated_claims);
        // this.reassigned_claims_data = data.selected_claim_data;
        this.skip_row = this.skip;
        this.current_row = this.skip + this.current_total - 1;
      }
      this.tab_load = false;
    } else if (form_type == 'refresh') {
      let new_claim;
      if (type == "wo") {
        this.table_fields = data.data.fields;
        this.workorder_table = data.data.datas;
        this.total_claims = data.count;
        //console.log("In WO",this.claim_active,this.workorder_table )
        if (this.claim_active != undefined) {
          new_claim = this.workorder_table.find(x => x.claim_no == this.claim_active['claim_no']);
        }
        if (new_claim == undefined) {
          new_claim = this.claim_active;
        }
      } else if (type == 'allocated') {
        // console.log(data);
        this.allocated_claims = data.data.datas;
        // this.assigned_claims = data.selected_claim_data;
        this.assigned_claims = data.data.datas;
        console.log(this.assigned_claims);
        this.total_allocated = data.count;
        if (this.claim_active != undefined) {
          new_claim = this.allocated_claims.find(x => x.claim_no == this.claim_active['claim_no']);
        }
      } else if (type == 'reallocated') {
        // console.log(data);
        this.reallocated_claims = data.data.datas;
        // this.reassigned_claims_data = data.selected_claim_data;
        this.reassigned_claims_data = data.data.datas;
        this.total_reallocated = data.count;
        if (this.claim_active != undefined) {
          new_claim = this.reallocated_claims.find(x => x.claim_no == this.claim_active['claim_no']);
        }
      } else if (type == 'completed') {
        this.completed_claims = data.data.datas;
        // this.completed_claims_data = data.selected_claim_data;
        this.completed_claims_data = data.data.datas;
        this.total_completed_claims = data.count;
        if (this.claim_active != undefined) {
          new_claim = this.completed_claims.find(x => x.claim_no == this.claim_active['claim_no']);
        }
      }
      if (this.claim_active != undefined) {
        //console.log("Here",this.main_tab);
        if (this.main_tab == true) {
          //console.log("Main",this.claim_active);
          this.getnotes(this.claim_active);
          //console.log("NewClaims",new_claim)
          this.claimslection(new_claim);
        } else {
          let claim_active = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
          // console.log('ref',claim_active);
          this.Jarwis.getnotes(claim_active).subscribe(data => {
            let prcs_data = {
              data: data['data']['process']
            };
            let refer_data = {
              data: data['data']['claim']
            };
            let qc_data = {
              data: data['data']['qc']
            };
            this.update_refer_notes(prcs_data, 'processnotes', claim_active.claim_no);
            this.update_refer_notes(refer_data, 'claimnotes', claim_active.claim_no);
            this.update_refer_notes(qc_data, 'qcnotes', claim_active.claim_no);
          }, error => console.log("THeis1", error));
          // console.log("Goos sdhfb",this.refer_claim_notes,this.refer_process_notes,this.refer_qc_notes,this.refer_client_notes);
          this.referclaim(claim_active);
        }
      }
      this.tab_load = false;
    }
    // console.log('Deploy Trie');
  }

  order_list(type, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.alloc_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.alloc_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, search);
    }
  }
  completed_order_list(type, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.closed_sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.comp_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.comp_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, search);
    }
  }
  reassigned_order_list(type, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.reassigned_sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.realloc_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.realloc_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, search);
    }
  }
  assigned_claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.assignedclaims_filter = search;
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search);
  }
  reassigned_claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.reassignedclaims_filter = search;
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search);
  }
  closed_claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.closedclaims_filter = search;
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search);
  }
  getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, search) {
    this.loader.start();
    this.search = search;
    this.type = type;
    let page_count = 15;
    console.log("ip", type);
    let form_type = null;
    let searchs = this.search;
    console.log(searchs);
    if (type == 'wo') {
      this.types = 'wo';
      this.pages = page;
      this.current_claim_type = 'wo';
      this.Jarwis.get_table_page(this.setus.getId(), page, page_count, type, sort_data, sort_type, null, null).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
    } else if (type == 'completed') {
      this.setus.change_status.next(false);
      this.comp_pages = page;
      this.current_claim_type = 'completed';
      this.types = 'completed';
      let closedSearch_notNull = [];
      let nullVal = false;
      let closedClaims_searchValue = [this.closedClaimsFind.value];
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
        sort_data = 'null';
        sort_type = 'null';
        sorting_name = 'null';
        sorting_method = 'null';
        search = this.search;
      }
      searchs = this.search;
      if (sorting_name == 'null' && searchs != 'search') {
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,sorting_name,sorting_method,null,null,null,search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
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
        if (this.closedClaimsFind.value.date?.[0] != null && this.closedClaimsFind.value.date?.[1] != null) {
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
        if (this.closedClaimsFind.value.bill_submit_date?.[0] != null && this.closedClaimsFind.value.bill_submit_date?.[1] != null) {
          this.closedClaimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.closedClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.closedClaimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.closedClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.closedClaimsFind.value.bill_submit_date.pop(this.closedClaimsFind.value.bill_submit_date[0]);
          this.closedClaimsFind.value.bill_submit_date.pop(this.closedClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.closedClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.closedClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.closedClaimsFind.value.bill_submit_date);
        }
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,this.closed_sorting_name,this.sortByAsc,null,null,this.closedClaimsFind.value,this.search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, null, this.closedClaimsFind.value).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else {
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,this.closed_sorting_name,this.sortByAsc,null,null,null,this.search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      }
    } else if (type == 'allocated') {
      this.alloc_pages = page;
      this.types = 'allocated';
      this.current_claim_type = 'allocated';
      let assignedSearch_notNull = [];
      let nullVal = false;
      let assignedClaims_searchValue = [this.assignedClaimsFind.value];
      if (typeof assignedClaims_searchValue === 'object' && assignedClaims_searchValue !== null) {
        Object.keys(assignedClaims_searchValue).forEach(key => {
          if (typeof assignedClaims_searchValue[key] === 'object' && assignedClaims_searchValue[key] !== null) {
            Object.keys(assignedClaims_searchValue[key]).forEach(val => {
              if (typeof assignedClaims_searchValue[key][val] === 'object' && assignedClaims_searchValue[key][val] !== null) {
                Object.keys(assignedClaims_searchValue[key][val]).forEach(data => {
                  if (assignedClaims_searchValue[key][val][data] === null) {
                    nullVal = false;
                  } else {
                    nullVal = true;
                  }
                });
                assignedSearch_notNull.push(nullVal);
              } else if (typeof assignedClaims_searchValue[key][val] !== 'object' && assignedClaims_searchValue[key][val] !== null && assignedClaims_searchValue[key][val] != '') {
                nullVal = true;
                assignedSearch_notNull.push(nullVal);
              } else if (typeof assignedClaims_searchValue[key][val] !== 'object' && assignedClaims_searchValue[key][val] !== null && assignedClaims_searchValue[key][val] == '') {
                nullVal = false;
                assignedSearch_notNull.push(nullVal);
              }
            });
          }
        });
      }
      if (assignedSearch_notNull.some(x => x === true)) {
        this.search = this.assignedclaims_filter;
        search = this.search;
        sort_data = null;
        sort_type = null;
      } else {
        this.search = null;
        sort_data = 'null';
        sort_type = 'null';
        sorting_name = 'null';
        sorting_method = 'null';
        search = this.search;
      }
      searchs = this.search;
      if (sorting_name == 'null' && searchs != 'search') {
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,sorting_name,sorting_method,null,null,null,search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else if (searchs == 'search') {
        if (this.assignedClaimsFind.value.dos?.[0] != null && this.assignedClaimsFind.value.dos?.[1] != null) {
          console.log(this.assignedClaimsFind.controls['dos'].value);
          this.assignedClaimsFind.value.dos['startDate'] = this.datepipe.transform(new Date(this.assignedClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.dos['endDate'] = this.datepipe.transform(new Date(this.assignedClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.dos.pop(this.assignedClaimsFind.value.dos[0]);
          this.assignedClaimsFind.value.dos.pop(this.assignedClaimsFind.value.dos[1]);
          const obj = {
            ...this.assignedClaimsFind.controls['dos'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.assignedClaimsFind.value.dos = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.assignedClaimsFind.value.dos);
        }
        if (this.assignedClaimsFind.value.date?.[0] != null && this.assignedClaimsFind.value.date?.[1] != null) {
          console.log(this.assignedClaimsFind.controls['date'].value);
          this.assignedClaimsFind.value.date['startDate'] = this.datepipe.transform(new Date(this.assignedClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.date['endDate'] = this.datepipe.transform(new Date(this.assignedClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.date.pop(this.assignedClaimsFind.value.date[0]);
          this.assignedClaimsFind.value.date.pop(this.assignedClaimsFind.value.date[1]);
          const obj = {
            ...this.assignedClaimsFind.controls['date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.assignedClaimsFind.value.date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.assignedClaimsFind.value.date);
        }
        if (this.assignedClaimsFind.value.bill_submit_date?.[0] != null && this.assignedClaimsFind.value.bill_submit_date?.[1] != null) {
          this.assignedClaimsFind.value.bill_submit_date['startDate'] = this.datepipe.transform(new Date(this.assignedClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.bill_submit_date['endDate'] = this.datepipe.transform(new Date(this.assignedClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.bill_submit_date.pop(this.assignedClaimsFind.value.bill_submit_date[0]);
          this.assignedClaimsFind.value.bill_submit_date.pop(this.assignedClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.assignedClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.assignedClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.assignedClaimsFind.value.bill_submit_date);
        }
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,this.sorting_name,this.sortByAsc,this.assignedClaimsFind.value,null,null,this.search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, this.assignedClaimsFind.value, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else {
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,this.sorting_name,this.sortByAsc,null,null,null,this.search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, this.assignedClaimsFind.value, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      }
    } else if (type == 'reallocated') {
      this.realloc_pages = page;
      this.types = 'reallocated';
      this.current_claim_type = 'reallocated';
      let reassignedSearch_notNull = [];
      let nullVal = false;
      let reassignedClaims_searchValue = [this.reassignedClaimsFind.value];
      if (typeof reassignedClaims_searchValue === 'object' && reassignedClaims_searchValue !== null) {
        Object.keys(reassignedClaims_searchValue).forEach(key => {
          if (typeof reassignedClaims_searchValue[key] === 'object' && reassignedClaims_searchValue[key] !== null) {
            Object.keys(reassignedClaims_searchValue[key]).forEach(val => {
              if (typeof reassignedClaims_searchValue[key][val] === 'object' && reassignedClaims_searchValue[key][val] !== null) {
                Object.keys(reassignedClaims_searchValue[key][val]).forEach(data => {
                  if (reassignedClaims_searchValue[key][val][data] === null) {
                    nullVal = false;
                  } else {
                    nullVal = true;
                  }
                });
                reassignedSearch_notNull.push(nullVal);
              } else if (typeof reassignedClaims_searchValue[key][val] !== 'object' && reassignedClaims_searchValue[key][val] !== null && reassignedClaims_searchValue[key][val] != '') {
                nullVal = true;
                reassignedSearch_notNull.push(nullVal);
              } else if (typeof reassignedClaims_searchValue[key][val] !== 'object' && reassignedClaims_searchValue[key][val] !== null && reassignedClaims_searchValue[key][val] == '') {
                nullVal = false;
                reassignedSearch_notNull.push(nullVal);
              }
            });
          }
        });
      }
      if (reassignedSearch_notNull.some(x => x === true)) {
        this.search = this.reassignedclaims_filter;
        search = this.search;
        sort_data = null;
        sort_type = null;
      } else {
        this.search = null;
        sort_data = 'null';
        sort_type = 'null';
        sorting_name = 'null';
        sorting_method = 'null';
        search = this.search;
      }
      searchs = this.search;
      if (sorting_name == 'null' && searchs != 'search') {
        console.log(searchs);
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,sorting_name,sorting_method,null,null,null,search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else if (searchs == 'search') {
        console.log('++++++++++++++++');
        this.realloc_pages = page;
        this.current_claim_type = 'reallocated';
        if (this.reassignedClaimsFind.value.dos?.[0] != null && this.reassignedClaimsFind.value.dos?.[1] != null) {
          console.log(this.reassignedClaimsFind.controls['dos'].value);
          this.reassignedClaimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.reassignedClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.reassignedClaimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.reassignedClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
          this.reassignedClaimsFind.value.dos.pop(this.reassignedClaimsFind.value.dos[0]);
          this.reassignedClaimsFind.value.dos.pop(this.reassignedClaimsFind.value.dos[1]);
          const obj = {
            ...this.reassignedClaimsFind.controls['dos'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.reassignedClaimsFind.value.dos = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.reassignedClaimsFind.value.dos);
        }
        if (this.reassignedClaimsFind.value.date?.[0] != null && this.reassignedClaimsFind.value.date?.[1] != null) {
          console.log(this.reassignedClaimsFind.controls['date'].value);
          this.reassignedClaimsFind.value.date.startDate = this.datepipe.transform(new Date(this.reassignedClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.reassignedClaimsFind.value.date.endDate = this.datepipe.transform(new Date(this.reassignedClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
          this.reassignedClaimsFind.value.date.pop(this.reassignedClaimsFind.value.date[0]);
          this.reassignedClaimsFind.value.date.pop(this.reassignedClaimsFind.value.date[1]);
          const obj = {
            ...this.reassignedClaimsFind.controls['date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.reassignedClaimsFind.value.date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.reassignedClaimsFind.value.date);
        }
        if (this.reassignedClaimsFind.value.bill_submit_date?.[0] != null && this.reassignedClaimsFind.value.bill_submit_date?.[1] != null) {
          this.reassignedClaimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.reassignedClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.reassignedClaimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.reassignedClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.reassignedClaimsFind.value.bill_submit_date.pop(this.reassignedClaimsFind.value.bill_submit_date[0]);
          this.reassignedClaimsFind.value.bill_submit_date.pop(this.reassignedClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.reassignedClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.reassignedClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.reassignedClaimsFind.value.bill_submit_date);
        }
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,this.reassigned_sorting_name,this.sortByAsc,null,this.reassignedClaimsFind.value,null,this.search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, this.reassignedClaimsFind.value, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else {
        this.realloc_pages = page;
        this.current_claim_type = 'reallocated';
        // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,sort_data,sort_type,this.reassigned_sorting_name,this.sortByAsc,null,null,null,this.search).subscribe(
        //   data  => this.form_table(data,type,form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.getclaim_details_new(this.setus.getId(), type, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      }
    } else if (type == 'refresh') {
      if (type == 'refresh') {
        type = this.current_claim_type;
        // console.log("Get",this.current_claim_type);
        form_type = 'refresh';
        if (type == 'wo') {
          page = this.pages;
        } else if (type == 'completed') {
          page = this.comp_pages;
        } else if (type == 'allocated') {
          page = this.alloc_pages;
        } else if (type == 'reallocated') {
          page = this.realloc_pages;
        }
      }
      if (type == 'allocated') {
        if (sorting_name == 'null' && searchs != 'search') {
          console.log('middle');
          this.alloc_pages = page;
          this.current_claim_type = 'allocated';
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, sorting_name, sorting_method, null, null, null, search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        } else if (searchs == 'search') {
          console.log('middle');
          this.alloc_pages = page;
          this.current_claim_type = 'allocated';
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.sorting_name, this.sortByAsc, this.assignedClaimsFind.value, null, null, this.search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        } else if (sorting_name != 'null') {
          console.log('last');
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.sorting_name, this.sortByAsc, null, null, null, search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        }
      } else if (type == 'reallocated') {
        console.log('com' + type);
        if (sorting_name == 'null' && searchs != 'search') {
          console.log('first');
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, sorting_name, sorting_method, null, null, null, search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        } else if (searchs == 'search') {
          console.log('-----------');
          this.alloc_pages = page;
          this.current_claim_type = 'reallocated';
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.reassigned_sorting_name, this.sortByAsc, null, this.reassignedClaimsFind.value, null, this.search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        } else if (sorting_name != 'null') {
          console.log('second');
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.reassigned_sorting_name, this.sortByAsc, null, null, null, this.search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        }
      } else if (type == 'completed') {
        console.log('com' + type);
        if (sorting_name == 'null' && searchs != 'search') {
          this.comp_pages = page;
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, sorting_name, sorting_method, null, null, null, search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        } else if (searchs == 'search') {
          this.comp_pages = page;
          this.current_claim_type = 'reallocated';
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.closed_sorting_name, this.sortByAsc, null, null, this.closedClaimsFind.value, this.search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        } else if (sorting_name != 'null') {
          this.comp_pages = page;
          this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.closed_sorting_name, this.sortByAsc, null, null, null, this.search).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
        }
      }
    }
    console.log(type);
    this.tab_load = true;
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
    this.getclaim_details(1, 'all', null, null, 'null', 'null', null, null, null, null);
  }
  //Assign Table data and `total values
  assign_page_data(data) {
    this.workorder_table = data.data;
    //  console.log(this.workorder_table);
    this.total = data.total;
    this.loader.stop();
  }
  //Search filter function
  sort_data(data) {
    this.getclaim_details(1, 'wo', data, 'searchFilter', 'null', 'null', null, null, null, null);
    this.searchData = data;
    // To reset the checklist
    this.check_all[1] = false;
    this.selected_claim_nos = [];
    //console.log(this.searchData);
  }

  sort_table(data) {
    this.getclaim_details(1, 'wo', data, 'filters', 'null', 'null', null, null, null, null);
  }
  export_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_followup_export_data(filter, s_code, this.setus.getId()).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  handleError(error) {
    console.log(error);
  }
  //Open and Close Modal
  open(content) {
    this.modalService.open(content, {
      centered: true,
      windowClass: 'custom-class'
    }).result.then(result => {
      this.closeResult = `${result}`;
    }, reason => {
      this.closeResult = `${this.getDismissReason()}`;
    });
  }
  getDismissReason() {
    this.close_clear_data();
  }
  claimslection(claim) {
    console.log('claim', claim);
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
    this.claim_no = claim?.claim_no;
    this.claim_note = claim?.claim_note;
    console.log('claim_note', this.claim_note);
    this.assigned_to = claim?.assigned_to;
    this.created_at = claim?.created_at;
    this.loading = true;
    this.get_line_items(claim);
    this.check_reassign_alloc(claim);
    this.clear_refer();
    this.claim_clicked = claim;
    let length = this.workorder_table.length;
    this.claim_related = [];
    this.get_related(claim);
    // for(let i=0;i<this.workorder_table.length;i++)
    // {
    //   let related_length=this.claim_related.length;
    //   length= length-1;
    //   if(related_length<3)
    //   {
    //     if(this.workorder_table[length]['acct_no'] == claim.acct_no && this.workorder_table[length]['claim_no'] != claim.claim_no )
    //     {
    //      this.claim_related.push(this.workorder_table[length]);
    //     }
    //   }
    // }
    // console.log("Related",this.claim_related,this.workorder_table)
    this.send_calim_det('footer_data');
    this.getnotes(this.claim_clicked);
    this.check_reassign_alloc(this.claim_clicked);
    //this.processNotesDelete(this.claim_no);
  }

  processNotesDelete(data) {
    this.Jarwis.followup_process_notes_delete(data, this.setus.getId()).subscribe(data => this.handleResponseProcess(data), error => this.handleError(error));
  }
  handleResponseProcess(data) {
    this.getnotes(this.claim_clicked);
  }
  get_related(claim) {
    this.Jarwis.get_related_calims(claim, 'followup', this.setus.getId()).subscribe(data => this.list_related(data), error => console.log(error));
  }
  list_related(claims) {
    this.claim_related = claims.data;
  }
  claim_tab_name(claim_type) {
    this.claim_type = claim_type;
    // alert('claim_no1 ' + this.claim_type);
  }

  referclaim(claim) {
    claim = claim.claim;
    this.claim_nos = claim.claim_no;
    this.claim_status = claim.claim_Status;
    this.Jarwis.get_claimno(this.claim_nos, this.setus.getId(), this.claim_status, this.type).subscribe(data => this.handleClaimNo(data), error => this.handleError(error));
    if (this.refer_claim_no.indexOf(claim['claim_no']) < 0) {
      this.refer_claim_det.push(claim);
      this.refer_claim_no.push(claim['claim_no']);
      // console.log("Into ref",claim)
      this.Jarwis.getnotes(claim).subscribe(data => this.refer_notes(data, claim.claim_no), error => console.log("THeis2", error));
    } else {
      this.selected_tab(claim['claim_no']);
    }
    this.send_calim_det('footer_data');
  }
  handleClaimNo(data) {
    this.assigned_data = data.claim_count;
    this.refer_claim(this.assigned_data);
  }
  refer_claim(assigned_data) {
    //alert('claim_no');
    if (assigned_data == true) {
      this.refer_claim_editable = 'true';
      console.log(this.refer_claim_editable);
      // alert('claim_no1');
    } else if (assigned_data == false) {
      this.refer_claim_editable = 'false';
      console.log(this.refer_claim_editable);
      // alert('claim_no2');
    }
  }
  //Display Reference Notes
  refer_notes(data, claimno) {
    // this.get_line_items(this.claim_clicked);
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
    this.send_calim_det('footer_data');
  }
  update_refer_notes(data, type, claimno) {
    // this.get_line_items(claimno);
    let index_up_qc = this.refer_qc_notes_nos.indexOf(claimno);
    let index_up_process = this.refer_process_notes_nos.indexOf(claimno);
    let index_up_claim = this.refer_claim_notes_nos.indexOf(claimno);
    if (type == 'processnotes') {
      if (index_up_process == undefined) {
        this.refer_process_notes_nos.push(claimno);
        this.refer_process_notes.push(data.data);
        index_up_process = this.refer_process_notes_nos.indexOf(claimno);
      } else {
        this.refer_process_notes[index_up_process] = data.data;
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
      this.refer_claim_notes[claimno] = data.data;
      console.log(this.refer_claim_notes[claimno]);
    } else if (type == 'qcnotes') {
      if (index_up_qc == undefined) {
        this.refer_qc_notes_nos.push(claimno);
        this.refer_qc_notes.push(data.data);
        index_up_qc = this.refer_qc_notes_nos.indexOf(claimno);
      } else {
        this.refer_qc_notes[index_up_qc] = data.data;
      }
    }
    this.active_refer_claim = this.refer_claim_notes[index_up_claim];
    this.active_refer_process = this.refer_process_notes[index_up_process];
    this.active_refer_qc = this.refer_qc_notes[index_up_qc];
  }
  //Focus on Selected Tab
  selected_tab(claimno) {
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
    this.check_reassign_alloc(this.claim_clicked);
  }
  //Clear Tabs Details
  clear_refer() {
    this.main_tab = true;
    this.active_claim = [];
    this.refer_claim_det = [];
    this.refer_claim_no = [];
  }
  //Get Notes
  getnotes(claim) {
    this.process_notes = [];
    this.claim_notes = [];
    this.qc_notes = [];
    this.client_notes = [];
    let type = 'All';
    // console.log("Getnot",claim)
    this.Jarwis.getnotes(claim).subscribe(data => this.display_notes(data, type), error => this.handleError(error));
  }
  display_notes(data, type) {
    console.log(data);
    console.log(type);
    if (this.active_claim != undefined) {
      if (this.active_claim.length != 0) {
        this.update_refer_notes(data, type, this.active_claim);
      } else {
        if (type == 'processnotes') {
          this.process_notes = data.data;
        } else if (type == 'claimnotes') {
          this.claim_notes = data.data;
        } else if (type == 'qcnotes') {
          this.qc_notes = data.data;
        } else if (type == 'All') {
          this.process_notes = data.data.process;
          this.claim_notes = data.data.claim;
          this.qc_notes = data.data.qc;
          this.client_notes = data.data.client;
          console.log(this.claim_notes);
        }
      }
      this.loading = false;
      this.processNotes.reset();
      this.claimNotes.reset();
    }
  }
  //Save Notes
  note_refresh() {
    this.process_notes_data_list = [];
    this.claim_notes_data_list = [];
  }
  savenotes(type) {
    let claim_id;
    if (this.active_claim.length != 0) {
      let index = this.refer_claim_no.indexOf(this.active_claim);
      claim_id = this.refer_claim_det[index];
    } else {
      claim_id = this.claim_clicked;
    }
    if (type == 'processnotes') {
      this.Jarwis.process_note(this.setus.getId(), this.processNotes.value['processnotes'], claim_id, 'processcreate', 'followup').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      // this.request_monitor=0;
      // this.process_notes_data.push({notes:this.processNotes.value['processnotes'],id:claim_id['claim_no']});
      // this.process_notes_data_list.push(claim_id['claim_no']);
      // this.notes_hadler.set_notesest(this.setus.getId(),this.processNotes.value['processnotes'],claim_id,'process_create');
      // this.send_calim_det('footer_data');
    } else if (type == 'claimnotes') {
      this.Jarwis.claim_note(this.setus.getId(), this.claimNotes.value['claim_notes'], claim_id, 'claim_create').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      if (this.editnote_value != null || this.editnote_value != undefined) {
        this.claimNotes.value['claim_notes'] = this.editnote_value;
      }
      this.request_monitor = 0;
      this.claim_notes_data.push({
        notes: this.claimNotes.value['claim_notes'],
        id: claim_id['claim_no']
      });
      this.claim_notes_data_list.push(claim_id['claim_no']);
      //console.log("Dta List",this.claim_notes_data_list);
      this.notes_hadler.set_notes(this.setus.getId(), this.claimNotes.value['claim_notes'], claim_id, 'claim_create');
      this.send_calim_det('footer_data');
    }
  }
  editnotes(type, value, id) {
    //For initial Edit of Claim notes
    if (type == 'claim_notes_init') {
      let claim_data = this.claim_notes_data.find(x => x.id == id['claim_no']);
      this.editnote_value = claim_data.notes;
      // this.claimNotes.patchValue({
      //   claim_notes: this.editnote_value,
      // });
      this.edit_noteid = id;
      this.initial_edit = true;
    } else if (type == 'process_notes_init') {
      let process_data = this.process_notes_data.find(x => x.id == id['claim_no']);
      this.editnote_value = process_data.notes;
      this.edit_noteid = id;
      // this.claimNotes.patchValue({
      //   claim_notes: this.editnote_value,
      // });
      this.proess_initial_edit = true;
    } else {
      console.log('Type', type);
      console.log('editnote_value', value);
      console.log('ID', id);
      this.editnote_value = value;
      if (type == 'processnote') {
        this.processNotes.patchValue({
          processnotes: this.editnote_value
        });
      }
      this.edit_noteid = id;
      if (type == 'claimnotes') {
        this.claimNotes.patchValue({
          claim_notes: this.editnote_value
        });
      }
      this.initial_edit = false;
    }
  }
  get_insurance() {
    this.Jarwis.get_insurance(this.setus.getId()).subscribe(data => this.handleInsurance(data), error => this.handleError(error));
  }
  handleInsurance(data) {
    this.option = data.claim_data;
  }
  //Update Notes
  updatenotes(type) {
    if (this.initial_edit == true) {
      this.notes_hadler.set_notes(this.setus.getId(), this.claimNotes.value['claim_notes'], this.edit_noteid, 'claim_create');
      this.claim_notes_data.find(x => x.id == this.edit_noteid['claim_no']).notes = this.claimNotes.value['claim_notes'];
      // this.claim_notes_data[this.edit_noteid['claim_no']]=this.claimNotes.value['claim_notes'];
      this.initial_edit = false;
      this.send_calim_det('footer_data');
    } /*else if(this.proess_initial_edit==true){
      this.notes_hadler.set_notesest(this.setus.getId(),this.processNotes.value['processnotes'],this.edit_noteid,'claim_create');
      this.process_notes_data.find(x => x.id == this.edit_noteid['claim_no']).notes=this.processNotes.value['processnotes'];
      this.initial_edit=false;
      this.send_calim_det('footer_data');
      } */else {
      if (type == 'processnotes') {
        this.Jarwis.process_note(this.setus.getId(), this.processNotes.value['processnotes'], this.edit_noteid, 'processupdate', 'audit-closed').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
        // let claim_active;
        // this.Jarwis.check_edit_val(claim_active,'followup').subscribe(
        //   data  => {
        //   this.set_note_edit_validity(data);
        //     // console.log("Note _edit",this.note_edit_val);
        //     if(this.note_edit_val != undefined)
        //     {
        //       // console.log("Inside",this.processNotes.value,this.edit_noteid);
        //      this.Jarwis.process_note(this.setus.getId(),this.processNotes.value['processnotes'],this.edit_noteid,'processupdate', 'followup').subscribe(
        //       data  => this.display_notes(data,type),
        //       error => this.handleError(error)
        //      );
        //     }
        //     else
        //     {
        //       this.toastr.errorToastr('Notes cannot be Updated.', 'Claim Processed.');
        //     }
        // },
        //   error => this.handleError(error)
        // );
      } else if (type == 'claimnotes') {
        this.Jarwis.claim_note(this.setus.getId(), this.claimNotes.value['claim_notes'], this.edit_noteid, 'claimupdate').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
        let claim_active;
        // if(this.main_tab == true)
        // {
        //   claim_active=this.claim_clicked;
        // }
        // else{
        //   claim_active=this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        // }
        // console.log("cc",claim_active ,);
        // this.check_note_edit_validity(this.claim_clicked);
        // this.Jarwis.check_edit_val(claim_active,'followup').subscribe(
        //   data  => {
        //     // console.log("ched",data);
        //   this.set_note_edit_validity(data);
        //     // console.log("Note _edit",this.note_edit_val);
        //     if(this.note_edit_val != undefined)
        //     {
        //       // console.log("Inside",this.claimNotes.value,this.edit_noteid);
        //       this.Jarwis.claim_note(this.setus.getId(),this.claimNotes.value['claim_notes'],this.edit_noteid,'claimupdate').subscribe(
        //         data  => this.display_notes(data,type),
        //         error => this.handleError(error)
        //       );
        //     }
        //     else
        //     {
        //       this.toastr.warningToastr('Claim notes cannot be Updated.');
        //     }
        // },
        //   error => this.handleError(error)
        // );
      }
    }

    this.editnote_value = null;
  }
  close_clear_data() {
    this.editnote_value = null;
  }
  //Clear ProcessNote
  clear_notes() {
    this.editnote_value = null;
    this.processNotes.reset();
  }
  //Send Claim Value to Followup-Template Component on Opening Template
  // active_sent_claim:string[];
  send_calim_det(type) {
    console.log(type);
    if (this.main_tab == true) {
      console.log(this.main_tab);
      if (type == 'followup') {
        console.log(this.claim_clicked['claim_no']);
        this.follow.setvalue(this.claim_clicked['claim_no']);
      } else {
        this.notes_hadler.selected_tab(this.claim_clicked['claim_no']);
        this.notes_hadler.set_claim_details(this.claim_clicked);
        this.claim_active = this.claim_clicked;
      }
    } else {
      if (type == 'followup') {
        this.follow.setvalue(this.active_claim);
      } else {
        this.notes_hadler.selected_tab(this.active_claim);
        let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        console.log(claim_detials);
        this.notes_hadler.set_claim_details(claim_detials);
        this.claim_active = this.active_claim;
      }
    }
  }
  get_followup_details() {
    let claim = this.follow.getvalue();
    if (this.claimid.includes(claim)) {
      let id = this.claimid.indexOf(claim);
      this.active_claim = this.followup_data[id];
      this.active_data = this.followup_question_data[id];
      console.log('1' + this.active_data);
    } else {
      this.Jarwis.get_followup(claim).subscribe(data => this.assign_data(data, claim), error => this.handleError(error));
    }
  }
  assign_data(data, claim) {
    console.log(data.data.data);
    this.claimid.push(claim);
    this.followup_data.push(data.data.data);
    this.followup_question_data.push(data.data.content);
    this.active_claim = data.data.data;
    this.active_data = data.data.content;
    console.log('2' + this.active_data);
  }
  collect_response(data) {
    if (this.main_tab == true) {
      this.check_note_edit_validity(this.claim_clicked);
    } else {
      let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
      this.check_note_edit_validity(claim_detials);
    }
    this.display_notes(data, 'claimnotes');
    this.getclaim_details(1, 'refresh', 'null', 'null', 'null', 'null', null, null, null, null);
    this.getclaim_details(1, 'allocated', 'null', 'null', 'null', 'null', null, null, null, null);
    this.getclaim_details(1, 'reallocated', 'null', 'null', 'null', 'null', null, null, null, null);
    //  console.log("Dta List Brf",this.claim_notes_data_list);
    let index = this.claim_notes_data_list.indexOf(this.active_claim);
    this.claim_notes_data_list.splice(index, 1);
    let index1 = this.process_notes_data_list.indexOf(this.active_claim);
    this.process_notes_data_list.splice(index1, 1);
    //console.log("Dta List AFTT",this.claim_notes_data_list);
  }

  get_line_items(claim) {
    // console.log("Get line",claim);
    this.check_note_edit_validity(claim);
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
  }
  //error_handler
  error_handler(error) {
    //console.log(error)
    if (error.error.exception == "Illuminate\Database\QueryException") {
      this.toastr.warningToastr("File can not be Deleted", 'Foreign key Constraint');
    } else {
      this.toastr.errorToastr(error.error.exception, "Error!");
    }
  }
  assign_line_data(data) {
    this.line_item_data.push(data.data);
    this.line_data = data.data;
  }
  confirm_reassign(claim) {
    this.confirmation_type = 'Reassign';
    this.reassign_claim = claim;
  }
  confirm_action(type) {
    if (type == 'Reassign') {
      let mod_type = 'followup';
      this.Jarwis.reassign_calim(this.reassign_claim, this.setus.getId(), mod_type).subscribe(data => this.after_reassign(data, this.reassign_claim['claim_no']), error => this.handleError(error));
    }
  }
  after_reassign(data, claim) {
    // console.log(data,claim);
    this.curr_reassigned_claims.push(claim);
    // this.getclaim_details(this.alloc_pages,'allocated');
    this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null);
    this.reassign_allocation = false;
  }
  check_reassign_alloc(claim) {
    console.log("Here REassign", claim);
    if (this.setus.get_role_id() == '1' && claim['followup_work_order'] != null) {
      let already_re = this.curr_reassigned_claims.indexOf(claim.claim_no);
      if (already_re < 0) {
        this.reassign_allocation = true;
      } else {
        this.reassign_allocation = false;
      }
    } else {
      this.reassign_allocation = false;
    }
  }
  check_note_edit_validity(claim) {
    console.log("Check", claim);
    this.Jarwis.check_edit_val(claim, 'followup').subscribe(data => this.set_note_edit_validity(data), error => this.handleError(error));
  }
  set_note_edit_validity(data) {
    console.log("Validity", data);
    if (data.edit_val == true) {
      // console.log(data.note_id['id']);
      this.note_edit_val = data.note_id['id'];
      console.log(this.note_edit_val);
    } else {
      this.note_edit_val = undefined;
    }
    console.log(this.note_edit_val);
  }
  reload_data() {
    if (this.new_cdtnnn) {
      console.log('Finally INNN');
      // this.Jarwis.getclaim_details_new(this.setus.getId(),'allocated',null,null,null,null).subscribe(
      //   data  => this.form_table(data,'allocated',null),
      //   error => this.handleError(error)
      // )
      this.new_cdtnnn = false;
    }
    this.loading = true;
    if (this.modalService.hasOpenModals() == false) {
      this.getclaim_details(this.pages, 'allocated', null, null, 'null', 'null', null, null, null, null);
      this.getclaim_details(this.pages, 'reallocated', null, null, 'null', 'null', null, null, null, null);
      for (let i = 0; i < this.assigned_claims.length; i++) {
        let claim = this.assigned_claims[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      let page_count = 15;
      this.pages = 1;
      this.Jarwis.get_table_page(null, this.pages, page_count, null, 'null', 'null', 'null', 'null').subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      this.checkboxes.forEach(element => {
        element.nativeElement.checked = false;
      });
    }
  }
  // set_prac_settings(data)
  // {
  //   let prac_data=data.data;
  //   this.touch_count=prac_data.touch_limit;
  //   console.log(this.touch_count);
  // }
  claim_check(count) {
    if (Number(count) > this.touch_count) {
      this.toastr.errorToastr('Claim Exceeds ' + this.touch_count + ' Touches', 'Exceeds!!');
    } else if (Number(count) == this.touch_count - 1) {
      this.toastr.warningToastr('Claim Nearing ' + this.touch_count + ' Touches.', 'Warning!');
    } else if (Number(count) == this.touch_count) {
      this.toastr.errorToastr('Claim Reaches ' + this.touch_count + ' Touches', 'Count Limit!!');
    }
  }
  user_role_maintainer() {
    let role_id = Number(this.setus.get_role_id());
    //console.log("User Role",role_id);
    if (role_id == 5 || role_id == 3 || role_id == 2) {
      this.user_role = 2;
      this.class_change['tab1'] = 'active';
      this.class_change['tab2'] = '';
      this.class_change_tab['tab1'] = 'tab-pane active';
      this.class_change_tab['tab2'] = 'tab-pane';
    } else if (role_id == 1) {
      this.user_role = 1;
      this.class_change['tab1'] = 'active';
      this.class_change['tab2'] = '';
      this.class_change_tab['tab1'] = 'tab-pane active';
      this.class_change_tab['tab2'] = 'tab-pane';
      // this.get_month_details(); edited...
    }
  }

  get_month_details() {
    this.Jarwis.get_month_details().subscribe(data => this.set_month_det(data), error => this.handleError(error));
  }
  set_month_det(data) {
    // console.log(data.working,"WEE",data.weeks);
    this.weeks = data.weeks;
    this.days = data.working;
    //For SATURDAY
    let week_length = [];
    data.weeks.forEach(element => {
      if (element.length == undefined) {
        week_length.push(1);
      } else {
        week_length.push(element.length);
      }
    });
    this.col_span = week_length;
    // console.log("len",this.col_span)
    this.get_prod_qual();
  }
  get_prod_qual() {
    this.Jarwis.get_prod_qual(this.setus.getId(), this.days).subscribe(data => this.assign_prod_qual(data), error => this.handleError(error));
  }
  assign_prod_qual(data) {
    //console.log('o/p',data);
    this.assigned_target = data.assigned;
    this.achieved_target = data.worked;
    this.achi_targ_per = data.work_per;
  }
  check_all_assign(page, event) {
    if (event.target.checked == true) {
      this.check_all[page] == true;
    } else {
      this.check_all[page] == false;
    }
  }
  //Selected Claim Sorting
  selected(event, claim, index) {
    if (claim == 'all' && event.target.checked == true) {
      let assigned_claims = this.assigned_claims;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      assigned_claims.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
      console.log(this.selected_claims);
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.assigned_claims.length; i++) {
        let claim = this.assigned_claims[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      // this.selected_claims=[];
      // this.selected_claim_nos=[];
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.table_datas[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  reassigned_selected(event, claim, index) {
    if (claim == 'all' && event.target.checked == true) {
      let reassigned_claims_data = this.reassigned_claims_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      reassigned_claims_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.reassigned_claims_data.length; i++) {
        let claim = this.reassigned_claims_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      // this.selected_claims=[];
      // this.selected_claim_nos=[];
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.reassigned_claims_data[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  completed_selected(event, claim, index) {
    if (claim == 'all' && event.target.checked == true) {
      let completed_claims_data = this.completed_claims_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      completed_claims_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.completed_claims_data.length; i++) {
        let claim = this.completed_claims_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      // this.selected_claims=[];
      // this.selected_claim_nos=[];
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.table_datas[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  setSummaryInfo(data) {
    this.summary_total_assigned = data.summary.total_assigned;
  }
  getSummary() {
    // this.Jarwis.getSummaryDetails(this.setus.getId()).subscribe(
    //     data  => this.setSummaryInfo(data),
    //     error => this.handleError(error)
    //   );
  }
  get_statuscodes() {
    this.Jarwis.get_status_codes(this.setus.getId(), 'all').subscribe(data => this.process_codes(data));
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
  assigned_status_code_changed(event) {
    if (event.value != undefined) {
      let sub_status = this.sub_status_codes_data[event.value.id];
      let sub_status_option = [];
      console.log('sub_status_option');
      if (sub_status == undefined || sub_status == '') {
        this.sub_options = [];
        this.assignedClaimsFind.patchValue({
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
            this.assignedClaimsFind.patchValue({
              sub_status_code: {
                id: this.sub_options[0]['id'],
                description: this.sub_options[0]['description']
              }
            });
          } else {
            this.assignedClaimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  }

  reassigned_status_code_changed(event) {
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

  closed_status_code_changed(event) {
    if (event.value != undefined) {
      let sub_status = this.sub_status_codes_data[event.value.id];
      let sub_status_option = [];
      console.log('sub_status_option');
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

  ngOnInit() {
    // this.auth.tokenValue.next(false);
    //this.get_insurance();
    // this.getSearchResults();
    this.user_role_maintainer();
    this.getSummary();
    //this.getclaim_details(1,'wo','null','null','null','null',null,null,null,null);
    // this.get_statuscodes();
    this.assignedClaimsFind = this.formBuilder.group({
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      total_charge: [],
      claim_note: [],
      insurance: [],
      prim_ins_name: [],
      prim_pol_id: [],
      sec_ins_name: [],
      sec_pol_id: [],
      ter_ins_name: [],
      ter_pol_id: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(this.decimal_pattern)]),
      responsibility: [],
      rendering_provider: [],
      payer_name: [],
      date: [],
      status_code: [],
      sub_status_code: [],
      bill_submit_date: [],
      denial_code: []
    });
    this.reassignedClaimsFind = this.formBuilder.group({
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      total_charge: [],
      claim_note: [],
      insurance: [],
      prim_ins_name: [],
      prim_pol_id: [],
      sec_ins_name: [],
      sec_pol_id: [],
      ter_ins_name: [],
      ter_pol_id: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(this.decimal_pattern)]),
      responsibility: [],
      rendering_provider: [],
      payer_name: [],
      date: [],
      status_code: [],
      sub_status_code: [],
      bill_submit_date: [],
      denial_code: []
    });
    this.closedClaimsFind = this.formBuilder.group({
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      total_charge: [],
      claim_note: [],
      insurance: [],
      prim_ins_name: [],
      prim_pol_id: [],
      sec_ins_name: [],
      sec_pol_id: [],
      ter_ins_name: [],
      ter_pol_id: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(this.decimal_pattern)]),
      responsibility: [],
      rendering_provider: [],
      payer_name: [],
      date: [],
      status_code: [],
      sub_status_code: [],
      bill_submit_date: [],
      denial_code: []
    });
    this.processNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
      processnotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
    });
    this.claimNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
      claim_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
    });
    this.subscription = this.notify_service.fetch_touch_limit().subscribe(message => {
      this.touch_count = message;
      console.log('touch count ONIN', this.touch_count);
    });
    const debouncetime = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(700));
    this.search_data.valueChanges.pipe(debouncetime).subscribe(result => this.sort_data(result));
    this.filter_option.valueChanges.subscribe(result => this.sort_table(result));
  }
  ngAfterViewInit() {
    console.log('LAST IN FOllowUP COMP');
    console.log('asasasasas', this.auth.tokenValue.value);
    // this.auth.tokenValue.next(true);
    if (this.touch_count == undefined) {
      this.touch_count = this.notify_service.manual_touch_limit();
      console.log('touch count afterview', this.touch_count);
    }
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    //this.subscription.unsubscribe();
    this.response_data.unsubscribe();
    this.update_monitor.unsubscribe();
    this.subscription.unsubscribe();
  }
  //Create Work Order
  // public reassign(){
  //      this.Jarwis.getdata(this.selected_claim_nos,this.setus.getId()).subscribe(
  //     data  => this.reassigned_claims(data),
  //     error => this.handleError(error),
  //    )}
  //     reassigned_claims(data){
  //       if(data.status =='success'){
  //         console.log(data.status);
  //        this.toastr.successToastr('Assigned Successfully.','Successfully');
  //       }
  //       else{
  //        this.toastr.errorToastr( 'Some thing went wrong.');
  //       }
  //     }
  reassign(content) {
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('Please select Claims');
    } else {
      this.openModal3(content);
      this.getDismissReason();
      // this.modalService.open(content, { centered: true ,windowClass:'custom-class'}).result.then((result) => {
      //   this.closeResult = `${result}`;
      // }, (reason) => {
      //   this.closeResult = `${this.getDismissReason()}`;
      // });
    }
  }

  confirm_box(confirmation) {
    this.Jarwis.getdata(this.selected_claim_nos, this.setus.getId(), confirmation).subscribe(data => this.reassigned_claims(data), error => this.handleError(error));
  }
  reassigned_claims(data) {
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('please select Claims');
    }
    for (let i = 0; i < this.selected_claim_nos.length; i++) {
      var assigned_to = this.selected_claim_nos[i]['assigned_to'];
      var assigned_by = this.selected_claim_nos[i]['assigned_by'];
    }
    if (data.assigned_to == data.assigned_by) {
      this.toastr.errorToastr('Unable to Reassign');
      this.selected_claim_nos = [];
    } else {
      let page_count = 15;
      // console.log("ip",type);
      let form_type = null;
      let type = 'allocated';
      let page = this.alloc_pages;
      this.tab_load = true;
      this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, null, null, null, null, null, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      this.toastr.successToastr('Reassigned Successfully');
    }
  }
  confirm_boxes(reassign) {
    this.Jarwis.getdata(this.selected_claim_nos, this.setus.getId(), reassign).subscribe(data => this.reassigned_claims_datas(data), error => this.handleError(error));
  }
  reassigned_claims_datas(data) {
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('please select Claims');
    }
    for (let i = 0; i < this.selected_claim_nos.length; i++) {
      var assigned_to = this.selected_claim_nos[i]['assigned_to'];
      var assigned_by = this.selected_claim_nos[i]['assigned_by'];
    }
    if (data.assigned_to == data.assigned_by) {
      this.toastr.errorToastr('Unable to Reassign');
      this.selected_claim_nos = [];
    } else {
      let page_count = 15;
      // console.log("ip",type);
      let form_type = null;
      let type = 'reallocated';
      let page = this.realloc_pages;
      this.tab_load = true;
      // this.Jarwis.getclaim_details(this.setus.getId(),page,page_count,type,null,null,'null','null',null,null,null,null).subscribe(
      //   data  => this.form_table(data,type,form_type),
      //   error => this.handleError(error)
      // );
      this.Jarwis.getclaim_details(this.setus.getId(), page, page_count, type, null, null, null, null, null, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      this.toastr.successToastr('Reassigned Successfully');
    }
  }
  cancel_claims() {
    this.selected_claim_nos = [];
  }
  sort_details(type) {
    if (type == 'id') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.acct_no.localeCompare(b.acct_no));
        this.completed_claims.sort((a, b) => a.acct_no.localeCompare(b.acct_no));
        this.reallocated_claims.sort((a, b) => a.acct_no.localeCompare(b.acct_no));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.acct_no.localeCompare(a.acct_no));
        this.completed_claims.sort((a, b) => b.acct_no.localeCompare(a.acct_no));
        this.reallocated_claims.sort((a, b) => b.acct_no.localeCompare(a.acct_no));
      }
    } else if (type == 'claims') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.claim_no.localeCompare(b.claim_no));
        this.completed_claims.sort((a, b) => a.claim_no.localeCompare(b.claim_no));
        this.reallocated_claims.sort((a, b) => a.claim_no.localeCompare(b.claim_no));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.claim_no.localeCompare(a.claim_no));
        this.completed_claims.sort((a, b) => b.claim_no.localeCompare(a.claim_no));
        this.reallocated_claims.sort((a, b) => b.claim_no.localeCompare(a.claim_no));
      }
    } else if (type == 'patient') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
        this.completed_claims.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
        this.reallocated_claims.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.patient_name.localeCompare(a.patient_name));
        this.completed_claims.sort((a, b) => b.patient_name.localeCompare(a.patient_name));
        this.reallocated_claims.sort((a, b) => b.patient_name.localeCompare(a.patient_name));
      }
    } else if (type == 'insurance') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.prim_ins_name.localeCompare(b.prim_ins_name));
        this.completed_claims.sort((a, b) => a.prim_ins_name.localeCompare(b.prim_ins_name));
        this.reallocated_claims.sort((a, b) => a.prim_ins_name.localeCompare(b.prim_ins_name));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.prim_ins_name.localeCompare(a.prim_ins_name));
        this.completed_claims.sort((a, b) => b.prim_ins_name.localeCompare(a.prim_ins_name));
        this.reallocated_claims.sort((a, b) => b.prim_ins_name.localeCompare(a.prim_ins_name));
      }
    } else if (type == 'bill') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.total_charges.localeCompare(b.total_charges));
        this.completed_claims.sort((a, b) => a.total_charges.localeCompare(b.total_charges));
        this.reallocated_claims.sort((a, b) => a.total_charges.localeCompare(b.total_charges));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.total_charges.localeCompare(a.total_charges));
        this.completed_claims.sort((a, b) => b.total_charges.localeCompare(a.total_charges));
        this.reallocated_claims.sort((a, b) => b.total_charges.localeCompare(a.total_charges));
      }
    } else if (type == 'due') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.total_ar.localeCompare(b.total_ar));
        this.completed_claims.sort((a, b) => a.total_ar.localeCompare(b.total_ar));
        this.reallocated_claims.sort((a, b) => a.total_ar.localeCompare(b.total_ar));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.total_ar.localeCompare(a.total_ar));
        this.completed_claims.sort((a, b) => b.total_ar.localeCompare(a.total_ar));
        this.reallocated_claims.sort((a, b) => b.total_ar.localeCompare(a.total_ar));
      }
    } else if (type == 'status') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
        this.completed_claims.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
        this.reallocated_claims.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.claim_Status.localeCompare(a.claim_Status));
        this.completed_claims.sort((a, b) => b.claim_Status.localeCompare(a.claim_Status));
        this.reallocated_claims.sort((a, b) => b.claim_Status.localeCompare(a.claim_Status));
      }
    } else if (type == 'dos') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.dos.localeCompare(b.dos));
        this.completed_claims.sort((a, b) => a.dos.localeCompare(b.dos));
        this.reallocated_claims.sort((a, b) => a.dos.localeCompare(b.dos));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.dos.localeCompare(a.dos));
        this.completed_claims.sort((a, b) => b.dos.localeCompare(a.dos));
        this.reallocated_claims.sort((a, b) => b.dos.localeCompare(a.dos));
      }
    }
  }
  // order_list(page:number,type,sort_data,sort_type) {
  //   let page_count=15;
  //   // console.log("ip",type);
  //   let form_type=null;
  //   this.alloc_pages=page;
  //   this.current_claim_type='allocated';
  //   if(this.sortByAsc==true){
  //     this.sortByAsc=false;
  //     this.Jarwis.getclaim_details_sort(this.setus.getId(),page,page_count,type,this.sortByAsc,sort_type).subscribe(
  //       data  => this.form_table(data,type,form_type),
  //       error => this.handleError(error)
  //     );
  //   }
  //   else{
  //     this.sortByAsc=true;
  //     this.Jarwis.getclaim_details_sort(this.setus.getId(),page,page_count,type,this.sortByAsc,sort_type).subscribe(
  //       data  => this.form_table(data,type,form_type),
  //       error => this.handleError(error)
  //     );
  //   }
  // }
  handleOrderList(data) {}
  tooltip(claim) {
    this.claim_number = claim.claim_no;
    this.Jarwis.claims_tooltip(this.claim_number).subscribe(data => this.handleClaimsTooltip(data), error => this.handleError(error));
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
  export_excel_files(type, table_name) {
    console.log(table_name);
    if (table_name == 'Assigned_claims') {
      this.searchClaims = this.assignedClaimsFind.value;
      console.log(this.searchClaims);
    } else if (table_name == 'Reassigned_claims') {
      this.searchClaims = this.reassignedClaimsFind.value;
    } else if (table_name == 'Closed_claims') {
      this.searchClaims = this.closedClaimsFind.value;
    }
    this.Jarwis.fetch_followup_claims_export_data(this.setus.getId(), table_name, this.search, this.searchClaims).subscribe(data => this.export_handler.create_claim_export_excel(data), error => this.error_handler(error));
  }
  export_pdf_files(type, table_name) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_followup_claims_export_data_pdf(this.setus.getId(), table_name).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  export_Excel_handler() {}
  getSearchResults() {
    this.Jarwis.get_payer_name().subscribe(sr => {
      this.searchResults = sr['payer_names'];
      console.log(this.searchResults);
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
    console.log('matches: ' + matches);
    return matches;
  }
  //For Assigned
  assignedSearchOnKeyUp(event) {
    let input = event.target.value;
    console.log('event.target.value: ' + input);
    console.log('this.searchResults: ' + this.searchResults);
    if (input.length > 0) {
      this.assigned_results = this.searchFromArray(this.searchResults, input);
    } else {
      this.assigned_selected_val = null;
      this.assignedSelected = false;
    }
  }
  assignedSelectvalue(value) {
    if (value != '' || value != null) {
      this.assignedSelected = true;
      this.assigned_selected_val = value;
    } else {
      this.assigned_selected_val = null;
      this.assignedSelected = false;
    }
  }
  //For Reassigned
  reassignedSearchOnKeyUp(event) {
    let input = event.target.value;
    console.log('event.target.value: ' + input);
    console.log('this.searchResults: ' + this.searchResults);
    if (input.length > 0) {
      this.reassigned_results = this.searchFromArray(this.searchResults, input);
    } else {
      this.reassigned_selected_val = null;
      this.reassignedSelected = false;
    }
  }
  reassignedSelectvalue(value) {
    if (value != '' || value != null) {
      this.reassignedSelected = true;
      this.reassigned_selected_val = value;
    } else {
      this.reassigned_selected_val = null;
      this.reassignedSelected = false;
    }
  }
  //For Closed
  closedSearchOnKeyUp(event) {
    let input = event.target.value;
    console.log('event.target.value: ' + input);
    console.log('this.searchResults: ' + this.searchResults);
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
  onSearch() {
    this.myGrid_1.api.setQuickFilter(this.search_values);
    this.myGrid_2.api.setQuickFilter(this.search_value_reworks);
    this.myGrid_3.api.setQuickFilter(this.searchvalue_closedClaims);
  }
  onPageSizeChanged(type) {
    if (type == 'assigned') {
      console.log('Assigned');
      this.gridApi_1.paginationSetPageSize(Number(this.paginationSizeValue_assigned));
    } else if (type == 'reworked') {
      console.log('Reworked');
      this.gridApi_2.paginationSetPageSize(Number(this.paginationSizeValue_reworked));
    } else if (type == 'closed') {
      console.log('closed');
      this.gridApi_3.paginationSetPageSize(Number(this.paginationSizeValue_closed));
    }
    ;
  }
  onSelectionChanged(params) {
    this.cdtn = !this.cdtn;
    this.selected_claim_nos = [];
    console.log('cdtn', this.cdtn);
    console.log('params', params);
    this.rowValue_ID_1 = this.myGrid_1.api.getSelectedRows();
    console.log('ID1', this.rowValue_ID_1);
    // if (this.rowValue_ID_1 != '') {
    //   for (let i = 0; i < this.rowValue_ID_1.length; i++) {
    //     this.selected_claim_nos.push(this.rowValue_ID_1?.[i].claim_no);
    //   }
    // }
    // this.claimslection(this.rowValue_ID_1);this.check_reassign_alloc(this.rowValue_ID_1);this.claim_check(this.rowValue_ID_1.touch);this.note_refresh();
    // this.rowValue_ID_1 .forEach((rowNode: any) => {
    //   rowIndex = rowNode.rowIndex;
    //   console.log('Row Index:', rowIndex);
    //   // this.selected(this.cdtn,this.rowValue_ID_1.claim_no,this.rowValue_ID_1.rowIndex);
    // });
  }

  onSelectionChanged_closedClaims(params) {
    this.selected_claim_nos = [];
    console.log('cdtn', this.cdtn);
    console.log('params', params);
    this.rowValue_ID_3 = this.myGrid_3.api.getSelectedRows();
    console.log('ID3', this.rowValue_ID_3);
    // if (this.rowValue_ID_3 != '') {
    //   for (let i = 0; i < this.rowValue_ID_3.length; i++) {
    //     this.selected_claim_nos.push(this.rowValue_ID_3?.[i].claim_no);
    //   }
    // }
    // this.claimslection(this.rowValue_ID_3);
    // this.claim_check(this.rowValue_ID_3.touch);
  }

  onSelectionChanged_reWorks(params) {
    this.rowValue_ID_2 = this.myGrid_2.api.getSelectedRows();
    console.log('ID2', this.rowValue_ID_2);
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
    params.api.sizeColumnsToFit();
    console.log('event', params);
    this.myGrid_1.api.setRowData([]);
    // setTimeout(() => {
    //   console.log('444', this.GridrowData1);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridrowData1);
    // }, 4000);
  }

  onGridReady_3(params) {
    this.gridApi_3 = params.api;
    params.api.sizeColumnsToFit();
    console.log('event', params);
    this.myGrid_3.api.setRowData([]);
    // setTimeout(() => {
    //   console.log('444', this.GridrowData1);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridrowData1);
    // }, 4000);
  }

  onGridReady_2(params) {
    this.gridApi_2 = params.api;
    params.api.sizeColumnsToFit();
    console.log('event', params);
    this.myGrid_2.api.setRowData([]);
    // setTimeout(() => {
    //   console.log('444', this.GridrowData1);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridrowData1);
    // }, 4000);
  }

  openModal(model_name) {
    console.log('IN');
    this.modalRef = this.modal.show(model_name, this.config);
  }
  openModal2(model_name) {
    console.log('IN');
    this.modalRef2 = this.modal.show(model_name, this.config);
    this.getDismissReason();
  }
  openModal3(model_name) {
    console.log('IN');
    this.modalRef3 = this.modal.show(model_name, this.config);
    this.getDismissReason();
  }
  cellrendered(headerName, params) {
    switch (headerName) {
      case 'touch':
        {
          if (params.value >= this.touch_count || params.value < this.touch_count) {
            console.log('params touch count', this.touch_count);
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
          if (params.value != '01/01/1970') {
            let x = params.value;
            x = this.datepipe.transform(x, 'MM/dd/yyyy');
            return `${x}`;
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
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else return '-Nil-';
          break;
        }
      case 'total_ar':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else return '-Nil-';
          break;
        }
      case 'claim_Status':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
        }
      case 'claim_note':
        {
          if (params.value) return `<i class="fa fa-info-circle" aria-hidden="true" title="${params.value}"></i>`;else return '-Nil-';
        }
      case 'created_ats':
        {
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo} | ${params.value}`;
        }
    }
  }
  cellrendered_closed_claims(headerName, params) {
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
          if (params.value != '01/01/1970') {
            let x = params.value;
            x = this.datepipe.transform(x, 'MM/dd/yyyy');
            return `${x}`;
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
      case 'billed_submit_date':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'denial_code':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'responsibility':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'total_charges':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else return '-Nil-';
          break;
        }
      case 'total_ar':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else return '-Nil-';
          break;
        }
      case 'claim_Status':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
        }
      case 'claim_note':
        {
          if (params.value) return `<i class="fa fa-info-circle" aria-hidden="true" title="${params.value}"></i>`;else return '-Nil-';
        }
      case 'created_ats':
        {
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo} | ${params.value}`;
        }
    }
  }
  cellrendered_ReworkClaims(headerName, params) {
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
          if (params.value != '01/01/1970') {
            let x = params.value;
            x = this.datepipe.transform(x, 'MM/dd/yyyy');
            return `${x}`;
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
      case 'billed_submit_date':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'denial_code':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'responsibility':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'total_charges':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else return '-Nil-';
          break;
        }
      case 'total_ar':
        {
          if (params.value) {
            if (typeof params.value == 'string') {
              let x = parseInt(params.value);
              return x.toFixed(2);
            }
          } else return '-Nil-';
          break;
        }
      case 'claim_Status':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
        }
      case 'claim_note':
        {
          if (params.value) return `<i class="fa fa-info-circle" aria-hidden="true" title="${params.value}"></i>`;else return '-Nil-';
        }
      case 'created_ats':
        {
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo} | ${params.value}`;
        }
    }
  }
  CellClicked(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'dos':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'age':
          {
            this.openModal(this.claimpage);
            ;
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'claim_Status':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
        case 'created_ats':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            this.note_refresh();
            this.claim_check(this.rowValue_ID_1?.[0].touch);
            break;
          }
      }
    }
  }
  CellClicked_closed_claims(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'dos':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'age':
          {
            this.openModal(this.claimpage);
            ;
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'claim_Status':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
        case 'created_ats':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_3?.[0].touch);
            break;
          }
      }
    }
  }
  CellClicked_ReworkClaims(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_2?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            // this.check_reassign_alloc()
            break;
          }
        case 'dos':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'age':
          {
            this.openModal(this.claimpage);
            ;
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'total_charges':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'claim_Status':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
        case 'created_ats':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_3?.[0]);
            this.claim_check(this.rowValue_ID_2?.[0].touch);
            break;
          }
      }
    }
  }
  onMethodCalled(data) {
    // Method called from child component
    console.log('Passing', data);
    this.new_cdtnnn = data;
    this.reload_data();
  }
  status_select_code() {
    if (!this.isCollapsed_Revoked || !this.isCollapsed_Assigned || !this.isCollapsed_closed_claim) {
      this.get_statuscodes();
      this.getSearchResults();
    }
  }
}
FollowupComponent.ɵfac = function FollowupComponent_Factory(t) {
  return new (t || FollowupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_3__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_17__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_followup_service__WEBPACK_IMPORTED_MODULE_4__.FollowupService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_5__.NotesHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_export_functions_service__WEBPACK_IMPORTED_MODULE_6__.ExportFunctionsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_19__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_notify_service__WEBPACK_IMPORTED_MODULE_7__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__.NgxUiLoaderService));
};
FollowupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: FollowupComponent,
  selectors: [["app-followup"]],
  viewQuery: function FollowupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c7, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.myGrid_1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.myGrid_2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.myGrid_3 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.claimpage = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.processnotes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.claimnotes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.confirmation = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
    }
  },
  decls: 1395,
  vars: 86,
  consts: [[1, "row", 2, "width", "100%"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", 2, "width", "100%"], [1, "box", "no-shadow", "no-border", "no-bottom"], [1, "no-padding"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [3, "ngClass", "click", 4, "ngIf"], [4, "ngIf"], [1, "tab-content", "no-padding"], ["id", "tab_4", 3, "ngClass"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-lg-6"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "box-title", "list-heading"], [1, "fa", "fa-bars", "ar-blue", "mr-2"], [1, "box", "no-shadow", "no-border"], [1, "box-body", "no-padding"], [1, "box", "no-shadow", "no-bottom", 2, "border-top", "1px solid #d8dbe4"], ["id", "box13", 1, "box-body", "no-padding", "collapse", "in"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "col-lg-6", 2, "border-right", "1px dashed #fff"], [1, "text-dark"], [1, "pull-right"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#dashboard", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "fa", "fa-plus"], ["id", "dashboard", 1, "box-body", "no-padding", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "production-table", "no-padding"], [1, "table-responsive", 2, "padding", "0 5px"], [1, "table-striped1", "table"], [1, "font600", "line-height-24"], ["colspan", "5", 1, "font600", "text-center", "line-height-24", 2, "border-right", "1px solid #fff"], ["colspan", "5", 1, "font600", "text-center", "line-height-24"], [1, "col-lg-6"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#individual", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "individual", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-12", 2, "border-top", "1px solid #dee0e8"], [1, "col-lg-4"], [1, "text-center", 2, "margin-top", "20px", "margin-bottom", "5px"], [1, "font600", "ar-blue", "text-center", 2, "margin-top", "0px"], [1, "font600", "text-center", 2, "margin-top", "0px"], [1, "font600", "text-red", "text-center", 2, "margin-top", "0px"], [1, "box-tools", "pull-right", 2, "margin-top", "1px"], ["id", "size_select", "tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible"], ["value", "option1"], ["value", "option2"], ["value", "option3"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], ["id", "option1", 1, "table-striped1", "table", "table-responsive", "size_chart"], [1, "text-center"], [1, "ar-blue", "font600"], [2, "background", "#f5f5f5"], [1, "text-red", "font600"], [1, "spnDetails"], ["id", "option2", 1, "table-striped1", "table", "table-responsive", "size_chart", 2, "display", "none"], ["id", "option3", 1, "table-striped1", "table", "table-responsive", "size_chart", 2, "display", "none"], ["id", "tab_5", 1, "tab-pane"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xs-12"], [1, "fa", "fa-filter", "ar-blue"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-box-tool", "collapsed", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "fa fa-minus", 4, "ngIf"], ["id", "assigned_search", 1, "collapse", 3, "collapse", "isAnimated"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding"], [1, "form-group", "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "dos", "autocomplete", "off", "id", "data-picker", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "claim_no", 1, "form-control"], ["type", "text", "formControlName", "acc_no", 1, "form-control"], ["type", "text", "formControlName", "patient_name", 1, "form-control"], [1, "form-group", "col-md-4", "col-sm-4", "col-lg-4", "col-xs-12"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "rendering_provider", 1, "form-control"], ["type", "text", "formControlName", "responsibility", 1, "form-control"], ["type", "text", "placeholder", "10.00-20.00", "formControlName", "total_ar", 1, "form-control"], ["formControlName", "status_code", 3, "config", "options", "change"], ["formControlName", "sub_status_code", 3, "config", "options"], ["type", "text", "formControlName", "payer_name", "placeholder", "Search Payer", "list", "SearchResults", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "bill_submit_date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "denial_code", 1, "form-control"], [1, "form-group", "col-md-3", "col-sm-3", "col-lg-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], ["type", "text", "placeholder", "Search..", "name", "search", "autocomplete", "off", 1, "search_box", 3, "ngModel", "keyup", "ngModelChange"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "listing-table"], [1, "no-shadow", "no-bottom"], [1, "red", 2, "margin-top", "5px"], ["id", "page-size", 2, "border-radius", "4px", 3, "ngModel", "change", "ngModelChange"], ["value", "100"], ["value", "500"], ["value", "1000"], [2, "margin-left", "10px", "font-family", "'Maven Pro', sans-serif", "font-size", "13px !important", "font-weight", "600", "color", "#535a68"], [2, "margin-left", "10px", "color", "#ccc", "margin-right", "10px"], ["title", "Refresh Values", 1, "fa", "fa-refresh", 2, "cursor", "pointer", 3, "click"], ["title", "Excel", 1, "fa", "fa-file-excel-o", 2, "cursor", "pointer", 3, "click"], [1, "collapse", 3, "collapse", "isAnimated"], [1, "ag-theme-alpine", "no-grid-lines", 3, "columnDefs", "gridOptions", "defaultColDef", "sideBar", "gridReady", "selectionChanged"], ["myGrid_1", ""], ["id", "tab_2", 3, "ngClass"], ["type", "text", "placeholder", "Search..", 1, "form-control", "pull-right", 2, "width", "300px", "margin-top", "1px", "font-weight", "normal", 3, "formControl"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], ["aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 2, "width", "100%"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], [1, "", 2, "margin-top", "5px"], ["title", "Reload", 1, "fa", "fa-refresh", 2, "cursor", "pointer", 3, "click"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box14", 1, "btn", "btn-box-tool"], ["id", "box14", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "table-responsive"], [3, "size", "color", 4, "ngIf"], ["class", "clickable-row cur-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["id", "claims", 3, "maxSize", "pageChange"], ["id", "tab_3", 1, "tab-pane"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "dos", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", "pull-right"], ["myGrid_3", ""], ["claimpage", ""], ["processnotes", ""], ["claimnotes", ""], ["confirm_modal", ""], ["confirmation", ""], ["reassign_confirmation", ""], ["HtmlContent", ""], ["AccNo", ""], ["PriInsurance", ""], ["SecInsurance", ""], ["TerInsurance", ""], ["TotalAr", ""], [3, "ngClass", "click"], ["href", "#tab_4", "data-toggle", "tab"], [1, "fa", "fa-dashboard"], [1, "tab-divider"], ["href", "#tab_5", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-share"], ["href", "#tab_3", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-stop-circle-o"], [1, "fa", "fa-minus"], [3, "ngValue"], ["class", "error", 4, "ngIf"], [1, "error"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "size", "color"], [1, "clickable-row", "cur-pointer", 3, "click"], ["title", "Touch Count", 4, "ngIf"], [1, "cur-pointer"], ["class", "cur-pointer", 4, "ngIf"], [1, "cur-pointer", "text-right"], ["title", "Touch Count"], [1, "ar"], [1, "ar-red"], ["colspan", "11", "align", "center"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "nav", "nav-tabs", "no-border"], [1, "testClass"], ["href", "#{main_tab}", "data-toggle", "tab", 1, "no-padding", 3, "click"], [1, "modal-title", "list-heading"], ["class", "testClass", 3, "active", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "maintab", 1, "tab-pane"], [1, "modal-body", "no-padding"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "margin-top", "10px"], [1, "box", "no-shadow", "no-bottom", "no-border"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box39", 1, "btn", "btn-box-tool"], [1, "box-body", "no-padding", "hide"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "box", "box-success", "no-border", "no-shadow"], [1, "box-header", "no-border", "p-t-0", "p-b-0"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", "p-t-0"], [1, "box-body", "chart-responsive"], ["id", "sales-chart", 1, "chart", 2, "height", "230px"], ["height", "230", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#3c8dbc", "d", "M0,108.33333333333333A-6.666666666666667,-6.666666666666667,0,0,0,-5.228486604698025,110.86389406942499", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#3c8dbc", "stroke", "#ffffff", "d", "M0,111.33333333333333A-3.666666666666667,-3.666666666666667,0,0,0,-2.8756676325839137,112.72514173818374L-11.764094860570555,105.69376165620622A-15,-15,0,0,1,0,100Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#f56954", "d", "M-5.228486604698025,110.86389406942499A-6.666666666666667,-6.666666666666667,0,1,0,6.054042404487644,117.79159721469804", "stroke-width", "2", "opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "1"], ["fill", "#f56954", "stroke", "#ffffff", "d", "M-2.8756676325839137,112.72514173818374A-3.666666666666667,-3.666666666666667,0,1,0,3.3297233224682046,116.53537846808393L9.081063606731467,119.18739582204708A-10,-10,0,1,1,-7.842729907047037,108.79584110413748Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#00a65a", "d", "M6.054042404487644,117.79159721469804A-6.666666666666667,-6.666666666666667,0,0,0,0.0020943950679349903,108.33333366232014", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#00a65a", "stroke", "#ffffff", "d", "M3.3297233224682046,116.53537846808393A-3.666666666666667,-3.666666666666667,0,0,0,0.0011519172873642447,111.33333351427608L0.004712388902853728,100.00000074022033A-15,-15,0,0,1,13.6215954100972,121.2810937330706Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], ["dy", "105", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "125", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "14px", "stroke", "none", "fill", "#000000", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "14px"], ["dy", "125", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["id", "box39", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", "p-l-0"], [1, "table", "no-border", "table-striped-nb"], [1, "table-label"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", "p-l-0"], [1, "text-orange"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-12"], [1, "ar-blue", 2, "margin-top", "0px", "font-size", "16px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "box", "no-shadow", "no-border", 2, "margin-top", "10px"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box40", 1, "btn", "btn-box-tool"], ["id", "box40", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "5px solid #e9ecf3", "border-bottom", "3px solid #e9ecf3"], ["aria-expanded", "false", "data-target", "#Process_Notes", "data-toggle", "collapse", "title", "Process Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [2, "text-decoration", "underline"], ["aria-expanded", "false", "data-target", "#Claim_Note", "data-toggle", "collapse", "title", "Claim Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["aria-expanded", "false", "class", "cur-pointer collapsed", "data-target", "#QC_Note", "data-toggle", "collapse", "style", "margin-right: 15px;font-size: 16px;", "title", "QC Notes", 4, "ngIf"], ["data-toggle", "collapse", "data-target", "#followupview", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template View", 1, "fa", "fa-external-link-square"], ["id", "Process_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["class", "cur-pointer", "style", "font-size:16px;", 3, "click", 4, "ngIf"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box41", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box41", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "margin-top:5px;", 4, "ngIf"], ["id", "QC_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "box-header", 2, "border-bottom", "1px solid #f3eee9"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box42", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box42", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["id", "Claim_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box43", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box43", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;margin-top:5px;", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "0px"], ["id", "followup-list3", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["id", "followupview", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [3, "tab", "methodCalled"], [1, "text-center", "close-btn"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", "position", "relative", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "background", "#f9f9f9"], ["id", "client-assistant-list", 1, "collapse", 2, "margin-top", "10px"], [1, "", 2, "font-size", "16px", "margin-top", "20px"], [1, "form-horizontal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px solid #f3f4f9"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-11", "col-md-11", "col-sm-11", "col-xs-12", "no-padding"], [1, "form-group"], ["type", "text", 1, "form-control"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-12", "col-lg-offset-1", "col-md-offset-1", "col-sm-offset-1", "no-padding"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible", 2, "width", "100%"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", 2, "width", "100%"], [1, "selection"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-d8k9-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-d8k9-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["role", "presentation", 1, "select2-selection__arrow"], ["role", "presentation"], ["aria-hidden", "true", 1, "dropdown-wrapper"], [1, "form-control", "text-space"], [1, "btn", "btn-default", "btn-sm", "text-center"], [1, "btn", "btn-info", "btn-sm", "text-center"], ["class", "tab-pane", 3, "active", "id", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-toggle", "tab", 3, "href", "click"], [1, "p-l-0", "table-label", 2, "text-decoration", "underline", "cursor", "pointer", "padding-left", "0px", 3, "click"], ["aria-expanded", "false", "data-target", "#QC_Note", "data-toggle", "collapse", "title", "QC Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [1, "cur-pointer", 2, "font-size", "16px", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0"], [1, "text-justify", 2, "margin-bottom", "10px"], [2, "margin-left", "3px", "margin-right", "3px", "color", "#ccc"], [1, "pull-right", 2, "font-size", "18px"], ["class", "fa fa-edit ar-blue", "style", "margin-left:10px; font-size:16px;cursor: pointer;", "title", "Edit", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "fa", "fa-edit", "ar-blue", 2, "margin-left", "10px", "font-size", "16px", "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "5px"], [1, "text-center", "text-gray", 2, "margin-bottom", "10px"], [1, "font600"], ["class", "cur-pointer", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0", "margin-top", "5px"], [1, "tab-pane", 3, "id"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-12", "p-l-0"], [1, "col-lg-7", "col-md-7", "col-sm-7", "col-xs-12", "p-l-0"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "box-body", "no-padding", 2, "margin-top", "10px"], ["class", "cur-pointer", "style", "margin-right: 15px;font-size: 16px;", "aria-expanded", "false", 3, "click", 4, "ngIf"], [1, "col-lg-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], ["aria-expanded", "false", 1, "cur-pointer", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], [3, "tab"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "text-center", "closed-btn", 2, "margin-top", "8%"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "form-horizontal", 3, "formGroup"], ["modalform", "ngForm"], ["formControlName", "processnotes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["formControlName", "claim_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["class", "modal-body", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-danger", 3, "click"], [1, "text-primary"], [1, "text-danger"], [1, "modal-title", "custom-title"], [1, "confirm-text"]],
  template: function FollowupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_li_6_Template, 6, 1, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, FollowupComponent_li_7_Template, 6, 0, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, FollowupComponent_li_8_Template, 6, 0, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "app-summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Month wise Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18)(23, "div", 19)(24, "div", 20)(25, "div", 21)(26, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Total Assigned ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "1472");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Total Worked ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "632");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Follow up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "QC Passed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "617");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "Error pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 10)(51, "div", 11)(52, "div", 16)(53, "div", 17)(54, "div", 12)(55, "div", 13)(56, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](57, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, " My Production and Quality");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "div", 25)(60, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](61, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "div", 28)(63, "div", 29)(64, "div", 30)(65, "table", 31)(66, "thead")(67, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](68, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "tbody")(78, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](79, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](81, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 10)(83, "div", 35)(84, "div", 16)(85, "div", 17)(86, "div", 12)(87, "div", 13)(88, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](89, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](90, " Individual Performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "div", 25)(92, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](93, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](95, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "div", 38)(97, "div", 39)(98, "h5", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "Assigned Cliams");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "46543");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "div", 39)(103, "h5", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, "New Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "345");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "div", 39)(108, "h5", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](109, "> 3 Touches");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "h4", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111, "121");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 16)(113, "div", 17)(114, "div", 12)(115, "div", 13)(116, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](117, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, " Status Wise Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "div", 44)(120, "select", 45)(121, "option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122, "Assigned");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "option", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](126, "Worked");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "div", 49)(128, "div", 29)(129, "div", 30)(130, "table", 50)(131, "thead")(132, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](133, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](139, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](141, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "tbody")(143, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](144, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](145, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](146, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](147, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](150, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](153, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](156, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](157, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](158, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](159, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](160, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](162, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](163, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](164, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](168, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](171, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](172, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](174, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](175, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](176, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](178, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](179, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](182, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](183, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](184, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "tr")(186, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](187, "Worked");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](189, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](191, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](193, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](195, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](196, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](197, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](198, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](199, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](200, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](201, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](202, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](203, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](204, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](205, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](206, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](207, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](209, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](211, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](213, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](215, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](217, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](218, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](221, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](223, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](227, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](228, "tr")(229, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](230, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](232, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](234, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](235, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](236, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](238, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](239, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](240, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](241, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](244, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](245, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](246, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](247, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](248, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](249, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](250, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](252, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](253, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](254, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](255, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](256, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](258, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](259, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](260, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](261, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](265, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](266, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](267, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](268, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](269, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](270, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](271, "tr")(272, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](275, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](276, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](277, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](278, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](279, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](280, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](281, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](282, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](283, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](284, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](285, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](286, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](287, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](288, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](289, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](290, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](291, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](293, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](294, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](295, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](296, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](297, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](298, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](299, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](300, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](301, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](302, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](303, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](304, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](305, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](306, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](308, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](309, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](310, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](311, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](312, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](313, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](314, "tr")(315, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "Followup");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](318, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](319, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](320, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](321, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](322, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](323, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](324, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](325, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](326, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](327, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](328, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](329, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](330, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](331, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](332, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](333, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](334, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](335, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](336, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](337, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](338, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](339, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](340, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](341, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](342, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](343, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](344, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](345, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](346, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](347, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](348, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](349, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](350, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](351, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](352, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](353, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](354, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](355, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](356, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](357, "tr")(358, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](359, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](360, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](361, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](362, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](363, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](364, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](365, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](366, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](367, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](368, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](369, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](370, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](371, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](372, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](373, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](374, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](375, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](376, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](377, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](378, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](379, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](380, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](381, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](382, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](383, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](384, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](385, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](386, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](387, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](388, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](389, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](390, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](391, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](393, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](394, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](395, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](396, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](397, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](398, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](399, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](400, "tr", 53)(401, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](402, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](403, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](404, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](405, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](406, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](408, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](409, "td", 54)(410, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](411, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](412, "td", 54)(413, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](414, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](415, "td", 54)(416, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](417, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](418, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](419, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](421, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](422, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](423, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](425, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](427, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](429, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](430, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](431, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](432, "td", 54)(433, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](434, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](435, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](436, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](437, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](438, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](439, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](440, "71");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](441, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](442, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](443, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](444, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](445, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](446, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](447, "tr")(448, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](449, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](451, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](453, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](455, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](457, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](458, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](459, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](460, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](461, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](462, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](463, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](464, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](465, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](466, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](467, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](468, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](469, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](470, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](471, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](472, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](473, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](474, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](475, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](476, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](477, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](478, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](479, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](480, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](481, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](482, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](483, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](484, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](485, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](486, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](487, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](488, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](489, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](490, "table", 56)(491, "thead")(492, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](493, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](494, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](495, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](496, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](497, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](498, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](499, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](500, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](501, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](502, "tbody")(503, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](504, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](505, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](506, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](507, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](508, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](509, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](510, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](511, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](512, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](513, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](514, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](515, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](516, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](517, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](518, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](519, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](520, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](521, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](522, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](523, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](524, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](525, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](526, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](527, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](528, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](529, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](530, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](531, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](532, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](533, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](534, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](535, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](536, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](537, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](538, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](539, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](540, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](541, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](542, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](543, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](544, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](545, "tr")(546, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](547, "Medicare");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](548, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](549, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](550, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](551, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](552, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](553, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](554, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](555, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](557, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](558, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](559, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](560, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](561, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](562, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](563, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](564, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](565, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](566, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](567, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](568, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](569, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](570, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](571, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](572, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](573, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](574, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](575, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](576, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](577, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](578, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](579, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](580, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](581, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](582, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](583, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](585, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](586, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](587, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](588, "tr")(589, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](590, "Medicaid");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](591, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](592, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](593, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](594, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](595, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](596, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](597, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](598, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](599, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](600, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](601, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](602, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](603, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](604, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](605, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](606, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](607, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](608, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](609, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](610, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](611, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](612, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](613, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](614, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](615, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](616, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](617, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](618, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](619, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](620, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](621, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](622, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](623, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](624, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](625, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](626, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](627, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](628, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](629, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](630, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](631, "tr", 53)(632, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](633, "BCBS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](634, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](635, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](636, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](637, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](638, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](639, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](640, "td", 54)(641, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](642, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](643, "td", 54)(644, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](645, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](646, "td", 54)(647, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](648, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](650, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](651, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](652, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](653, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](654, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](655, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](656, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](657, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](658, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](659, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](660, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](661, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](662, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](663, "td", 54)(664, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](665, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](666, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](667, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](668, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](669, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](670, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](671, "71");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](672, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](673, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](674, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](675, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](676, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](677, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](678, "tr")(679, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](680, "Aetna");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](682, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](683, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](684, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](685, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](686, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](687, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](688, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](689, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](690, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](691, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](692, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](693, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](694, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](695, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](696, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](697, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](698, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](699, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](700, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](701, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](702, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](703, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](704, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](705, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](706, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](707, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](708, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](709, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](710, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](711, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](712, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](713, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](714, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](715, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](716, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](717, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](718, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](719, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](720, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](721, "tr")(722, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](723, "UHC");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](724, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](725, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](726, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](727, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](728, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](729, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](730, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](731, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](732, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](733, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](734, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](735, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](736, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](737, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](738, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](739, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](740, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](741, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](742, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](743, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](744, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](745, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](746, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](747, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](748, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](749, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](750, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](751, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](752, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](753, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](754, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](755, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](756, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](757, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](758, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](759, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](760, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](761, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](762, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](763, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](764, "tr")(765, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](766, "Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](767, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](768, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](769, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](770, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](771, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](772, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](773, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](774, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](775, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](776, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](777, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](778, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](779, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](780, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](781, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](782, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](783, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](784, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](785, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](786, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](787, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](788, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](789, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](790, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](791, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](792, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](793, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](794, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](795, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](796, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](797, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](798, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](799, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](800, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](801, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](802, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](803, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](804, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](805, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](806, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](807, "table", 57)(808, "thead")(809, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](810, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](811, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](812, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](813, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](814, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](815, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](816, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](817, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](818, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](819, "tbody")(820, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](821, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](822, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](823, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](824, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](825, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](826, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](827, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](828, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](829, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](830, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](831, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](832, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](833, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](834, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](835, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](836, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](837, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](838, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](839, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](840, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](841, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](842, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](843, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](844, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](845, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](846, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](847, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](848, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](849, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](850, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](851, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](852, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](853, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](854, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](855, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](856, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](857, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](858, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](859, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](860, "td", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](861, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](862, "tr")(863, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](864, "Followup");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](865, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](866, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](867, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](868, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](869, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](870, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](871, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](872, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](873, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](874, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](875, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](876, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](877, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](878, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](879, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](880, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](881, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](882, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](883, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](884, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](885, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](886, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](887, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](888, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](889, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](890, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](891, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](892, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](893, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](894, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](895, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](896, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](897, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](898, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](899, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](900, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](901, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](902, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](903, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](904, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](905, "tr")(906, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](907, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](908, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](909, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](910, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](911, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](912, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](913, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](914, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](915, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](916, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](917, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](918, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](919, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](920, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](921, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](922, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](923, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](924, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](925, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](926, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](927, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](928, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](929, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](930, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](931, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](932, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](933, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](934, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](935, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](936, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](937, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](938, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](939, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](940, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](941, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](942, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](943, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](944, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](945, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](946, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](947, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](948, "tr")(949, "td", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](950, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](951, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](952, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](953, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](954, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](955, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](956, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](957, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](958, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](959, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](960, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](961, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](962, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](963, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](964, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](965, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](966, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](967, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](968, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](969, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](970, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](971, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](972, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](973, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](974, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](975, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](976, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](977, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](978, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](979, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](980, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](981, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](982, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](983, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](984, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](985, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](986, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](987, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](988, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](989, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](990, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](991, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](992, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](993, "div", 16)(994, "div", 16)(995, "div", 17)(996, "div", 10)(997, "div", 59)(998, "div", 12)(999, "div", 13)(1000, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1001, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1002, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1003, "div", 25)(1004, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1004_listener() {
        ctx.isCollapsed_Assigned = !ctx.isCollapsed_Assigned;
        return ctx.status_select_code();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1005, FollowupComponent_i_1005_Template, 1, 0, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1006, FollowupComponent_i_1006_Template, 1, 0, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1007, "div", 64)(1008, "form", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function FollowupComponent_Template_form_ngSubmit_1008_listener() {
        return ctx.assigned_claims_filter(1, "allocated", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1009, "div", 49)(1010, "div", 66)(1011, "div", 67)(1012, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1013, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1014, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1014_listener($event) {
        return ctx.selecteds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1015, "div", 67)(1016, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1017, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1018, "select", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1018_listener($event) {
        return ctx.selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1019, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1020, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1021, FollowupComponent_option_1021_Template, 2, 5, "option", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1022, "div", 67)(1023, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1024, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1025, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1026, "div", 66)(1027, "div", 67)(1028, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1029, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1030, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1031, "div", 67)(1032, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1033, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1034, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1035, "div", 75)(1036, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1037, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1038, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1038_listener($event) {
        return ctx.assigned_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1039, "div", 66)(1040, "div", 75)(1041, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1042, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1043, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1044, "div", 75)(1045, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1046, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1047, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1048, "div", 75)(1049, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1050, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1051, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1052, FollowupComponent_div_1052_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1053, "div", 66)(1054, "div", 75)(1055, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1056, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1057, "ngx-select-dropdown", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_ngx_select_dropdown_change_1057_listener($event) {
        return ctx.assigned_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1058, "div", 75)(1059, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1060, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1061, "ngx-select-dropdown", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1062, "div", 75)(1063, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1064, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1065, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1065_listener($event) {
        return ctx.assigned_selected_val = $event;
      })("keyup", function FollowupComponent_Template_input_keyup_1065_listener($event) {
        return ctx.assignedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1066, FollowupComponent_div_1066_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1067, "div", 66)(1068, "div", 75)(1069, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1070, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1071, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1071_listener($event) {
        return ctx.submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1072, "div", 75)(1073, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1074, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1075, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1076, "div", 67)(1077, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1078, "Claim Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1079, "select", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1079_listener($event) {
        return ctx.selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1080, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1081, "--Select Status--");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1082, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1083, "Rework");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1084, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1085, "FollowUp");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1086, "div", 66)(1087, "div", 85)(1088, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_input_click_1088_listener() {
        return ctx.assigned_claims_filter(1, "allocated", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1089, "div", 59)(1090, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function FollowupComponent_Template_input_keyup_1090_listener() {
        return ctx.onSearch();
      })("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1090_listener($event) {
        return ctx.search_values = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1091, "div", 17)(1092, "div", 12)(1093, "div", 17)(1094, "div", 88)(1095, "div", 16)(1096, "div", 17)(1097, "div", 89)(1098, "div", 13)(1099, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1100, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1101, " Assigned Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1102, "div", 25)(1103, "p", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1104, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1105, "select", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_select_change_1105_listener() {
        return ctx.onPageSizeChanged("assigned");
      })("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1105_listener($event) {
        return ctx.paginationSizeValue_assigned = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1106, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1107, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1108, "option", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1109, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1110, "option", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1111, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1112, "option", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1113, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1114, "span", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1115, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1116, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1117, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1118, "span", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_span_click_1118_listener() {
        return ctx.reload_data();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1119, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1120, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1121, "i", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1121_listener() {
        return ctx.export_excel_files("excel", "Assigned_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1122, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1123, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1124, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1124_listener() {
        return ctx.isCollapsed_Grid1 = !ctx.isCollapsed_Grid1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1125, FollowupComponent_i_1125_Template, 1, 0, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1126, FollowupComponent_i_1126_Template, 1, 0, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1127, "div", 99)(1128, "ag-grid-angular", 100, 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("gridReady", function FollowupComponent_Template_ag_grid_angular_gridReady_1128_listener($event) {
        return ctx.onGridReady_1($event);
      })("selectionChanged", function FollowupComponent_Template_ag_grid_angular_selectionChanged_1128_listener($event) {
        return ctx.onSelectionChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1130, "div", 102)(1131, "div", 16)(1132, "div", 17)(1133, "div", 12)(1134, "div", 13)(1135, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1136, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1137, " Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1138, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1139, "input", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1140, "div", 49)(1141, "div", 66)(1142, "div", 104)(1143, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1144, "Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1145, "select", 105)(1146, "option", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1147, "All Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1148, "option", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1149, "Assigned Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1150, "option", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1151, "New Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1152, "option", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1153, "Pending Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1154, "option", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1155, "Audit Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1156, "option", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1157, "Account Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1158, "option", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1159, "Insurance Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1160, "option", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1161, "Insurance Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1162, "option", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1163, "Aging Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1164, "option", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1165, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1166, "option", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1167, "Associates");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1168, "option", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1169, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1170, "option", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1171, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1172, "option", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1173, "Status Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1174, "option", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1175, "Aging Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1176, "div", 104)(1177, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1178, "Status Wise");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1179, "select", 105)(1180, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1181, "A-Adjustment");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1182, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1183, "B-Appeal");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1184, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1185, "C-Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1186, "div", 104)(1187, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1188, "Sub-status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1189, "select", 105)(1190, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1191, "Adj-Bad Debt");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1192, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1193, "Adj-Insurance Overpayment");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1194, "div", 16)(1195, "div", 17)(1196, "div", 12)(1197, "div", 13)(1198, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1199, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1200, " Work Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1201, "div", 25)(1202, "p", 121)(1203, "span", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_span_click_1203_listener() {
        return ctx.reload_data();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1204, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1205, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1206, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1207, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1208, "i", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1208_listener() {
        return ctx.export_files("excel");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1209, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1210, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1211, "button", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1212, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1213, "div", 124)(1214, "div", 20)(1215, "div", 125)(1216, "table", 31)(1217, "thead")(1218, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1219, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1220, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1221, "Acct#");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1222, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1223, "Claim#");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1224, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1225, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1226, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1227, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1228, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1229, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1230, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1231, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1232, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1233, "Billed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1234, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1235, "AR Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1236, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1237, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1238, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1239, "Assigned To/By/Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1240, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1241, FollowupComponent_app_atom_spinner_1241_Template, 1, 2, "app-atom-spinner", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1242, FollowupComponent_tr_1242_Template, 23, 15, "tr", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1243, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1244, FollowupComponent_tr_1244_Template, 4, 0, "tr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1245, "pagination-controls", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("pageChange", function FollowupComponent_Template_pagination_controls_pageChange_1245_listener($event) {
        return ctx.getclaim_details($event, "wo", "null", "null", "null", "null", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1246, "div", 129)(1247, "div", 16)(1248, "div", 17)(1249, "div", 10)(1250, "div", 59)(1251, "div", 12)(1252, "div", 13)(1253, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1254, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1255, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1256, "div", 25)(1257, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1257_listener() {
        ctx.isCollapsed_closed_claim = !ctx.isCollapsed_closed_claim;
        return ctx.status_select_code();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1258, FollowupComponent_i_1258_Template, 1, 0, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1259, FollowupComponent_i_1259_Template, 1, 0, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1260, "div", 99)(1261, "form", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function FollowupComponent_Template_form_ngSubmit_1261_listener() {
        return ctx.closed_claims_filter(1, "completed", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1262, "div", 49)(1263, "div", 66)(1264, "div", 67)(1265, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1266, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1267, "input", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1267_listener($event) {
        return ctx.selectedClosed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1268, "div", 67)(1269, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1270, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1271, "select", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1271_listener($event) {
        return ctx.closedSelectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1272, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1273, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1274, FollowupComponent_option_1274_Template, 2, 5, "option", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1275, "div", 67)(1276, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1277, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1278, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1279, "div", 66)(1280, "div", 67)(1281, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1282, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1283, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1284, "div", 67)(1285, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1286, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1287, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1288, "div", 75)(1289, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1290, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1291, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1291_listener($event) {
        return ctx.closed_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1292, "div", 66)(1293, "div", 75)(1294, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1295, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1296, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1297, "div", 75)(1298, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1299, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1300, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1301, "div", 75)(1302, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1303, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1304, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1305, FollowupComponent_div_1305_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1306, "div", 66)(1307, "div", 75)(1308, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1309, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1310, "ngx-select-dropdown", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_ngx_select_dropdown_change_1310_listener($event) {
        return ctx.closed_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1311, "div", 75)(1312, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1313, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1314, "ngx-select-dropdown", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1315, "div", 75)(1316, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1317, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1318, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1318_listener($event) {
        return ctx.closed_selected_val = $event;
      })("keyup", function FollowupComponent_Template_input_keyup_1318_listener($event) {
        return ctx.closedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1319, FollowupComponent_div_1319_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1320, "div", 66)(1321, "div", 75)(1322, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1323, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1324, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1324_listener($event) {
        return ctx.submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1325, "div", 75)(1326, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1327, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1328, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1329, "div", 66)(1330, "div", 131)(1331, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_input_click_1331_listener() {
        return ctx.closed_claims_filter(1, "completed", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1332, "div", 59)(1333, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function FollowupComponent_Template_input_keyup_1333_listener() {
        return ctx.onSearch();
      })("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1333_listener($event) {
        return ctx.searchvalue_closedClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1334, "div", 2)(1335, "div", 17)(1336, "div", 12)(1337, "div", 17)(1338, "div", 88)(1339, "div", 16)(1340, "div", 17)(1341, "div", 89)(1342, "div", 13)(1343, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1344, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1345, " Closed Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1346, "div", 25)(1347, "p", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1348, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1349, "select", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_select_change_1349_listener() {
        return ctx.onPageSizeChanged("closed");
      })("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1349_listener($event) {
        return ctx.paginationSizeValue_closed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1350, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1351, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1352, "option", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1353, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1354, "option", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1355, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1356, "option", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1357, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1358, "span", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1359, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1360, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1361, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1362, "i", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1362_listener() {
        return ctx.export_excel_files("excel", "Closed_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1363, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1364, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1365, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1365_listener() {
        return ctx.isCollapsed_Grid3 = !ctx.isCollapsed_Grid3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1366, FollowupComponent_i_1366_Template, 1, 0, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1367, FollowupComponent_i_1367_Template, 1, 0, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1368, "div", 99)(1369, "ag-grid-angular", 100, 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("gridReady", function FollowupComponent_Template_ag_grid_angular_gridReady_1369_listener($event) {
        return ctx.onGridReady_3($event);
      })("selectionChanged", function FollowupComponent_Template_ag_grid_angular_selectionChanged_1369_listener($event) {
        return ctx.onSelectionChanged_closedClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1371, FollowupComponent_ng_template_1371_Template, 303, 34, "ng-template", null, 133, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1373, FollowupComponent_ng_template_1373_Template, 20, 4, "ng-template", null, 134, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1375, FollowupComponent_ng_template_1375_Template, 20, 4, "ng-template", null, 135, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1377, FollowupComponent_ng_template_1377_Template, 12, 1, "ng-template", null, 136, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1379, FollowupComponent_ng_template_1379_Template, 17, 0, "ng-template", null, 137, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1381, FollowupComponent_ng_template_1381_Template, 17, 0, "ng-template", null, 138, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1383, FollowupComponent_ng_template_1383_Template, 23, 16, "ng-template", null, 139, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1385, FollowupComponent_ng_template_1385_Template, 18, 15, "ng-template", null, 140, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1387, FollowupComponent_ng_template_1387_Template, 15, 7, "ng-template", null, 141, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1389, FollowupComponent_ng_template_1389_Template, 15, 7, "ng-template", null, 142, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1391, FollowupComponent_ng_template_1391_Template, 15, 7, "ng-template", null, 143, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1393, FollowupComponent_ng_template_1393_Template, 9, 14, "ng-template", null, 144, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role != 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role != 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.class_change_tab["tab1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](994);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_Assigned);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCollapsed_Assigned);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_Assigned);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", ctx.isCollapsed_Assigned)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.assignedClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.selecteds)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.assigned_select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.assignedClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.assigned_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.assignedSelected == false && ctx.assigned_selected_val != "" && ctx.assigned_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.search_values);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_assigned);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_Grid1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCollapsed_Grid1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_Grid1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", ctx.isCollapsed_Grid1)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.class_change_tab["tab2"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx.search_data);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.tab_load == true && !ctx.workorder_table);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1243, 80, ctx.workorder_table, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](83, _c9, ctx.pages, ctx.total_claims)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.total_claims == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("maxSize", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_closed_claim);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCollapsed_closed_claim);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_closed_claim);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", ctx.isCollapsed_closed_claim)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.closedClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.selectedClosed)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.closedSelectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.closed_select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.closedClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.closed_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.closedSelected == false && ctx.closed_selected_val != "" && ctx.closed_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.searchvalue_closedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_closed);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_Grid3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCollapsed_Grid3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_Grid3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", ctx.isCollapsed_Grid3)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("columnDefs", ctx.columnDefs3)("gridOptions", ctx.gridOptions3)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_9__.ClaimOpFooterComponent, _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_10__.FollowupTemplateComponent, _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_11__.FollowupViewComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_12__.SummaryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_23__.PaginationControlsComponent, angular_epic_spinners__WEBPACK_IMPORTED_MODULE_24__["ɵa"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__.NgxSelectDropdownComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__.AgGridAngular, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_27__.CollapseDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__.BsDaterangepickerInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_23__.PaginatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 984:
/*!***************************************************************!*\
  !*** ./src/app/lazy-followup/lazy-followup-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyFollowupRoutingModule": () => (/* binding */ LazyFollowupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_followup_followup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/followup/followup.component */ 8348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_followup_followup_component__WEBPACK_IMPORTED_MODULE_0__.FollowupComponent
}];
class LazyFollowupRoutingModule {}
LazyFollowupRoutingModule.ɵfac = function LazyFollowupRoutingModule_Factory(t) {
  return new (t || LazyFollowupRoutingModule)();
};
LazyFollowupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LazyFollowupRoutingModule
});
LazyFollowupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyFollowupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4808:
/*!*******************************************************!*\
  !*** ./src/app/lazy-followup/lazy-followup.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyFollowupModule": () => (/* binding */ LazyFollowupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lazy_followup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-followup-routing.module */ 984);
/* harmony import */ var _components_followup_followup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/followup/followup.component */ 8348);
/* harmony import */ var _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-module/common-module.module */ 6469);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-sidebar */ 2400);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-daterangepicker-material */ 9723);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class LazyFollowupModule {}
LazyFollowupModule.ɵfac = function LazyFollowupModule_Factory(t) {
  return new (t || LazyFollowupModule)();
};
LazyFollowupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: LazyFollowupModule
});
LazyFollowupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _lazy_followup_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyFollowupRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarModule.forRoot(), ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__.NgxDaterangepickerMd, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LazyFollowupModule, {
    declarations: [_components_followup_followup_component__WEBPACK_IMPORTED_MODULE_1__.FollowupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _lazy_followup_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyFollowupRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__.NgxDaterangepickerMd, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_lazy-followup_lazy-followup_module_ts.3fc1f787035c4833.js.map