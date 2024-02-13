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
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_li_6_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r60.get_month_details());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 154);
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
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li")(1, "a", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r62.getclaim_details(1, "allocated", "null", "null", "null", "null", "null", "null", "null", "null");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r62.getclaim_details(1, "reallocated", "null", "null", "null", "null", "null", "null", "null", "null"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Assigned Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li")(1, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r64.getclaim_details(1, "completed", "null", "null", "null", "null", "null", "null", "null", "null"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Closed Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const datee_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, datee_r66.date, "MM/dd"));
  }
}
function FollowupComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const target_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](target_r67);
  }
}
function FollowupComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const achieve_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](achieve_r68);
  }
}
function FollowupComponent_td_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ach_per_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ach_per_r69);
  }
}
function FollowupComponent_td_62_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ach_per_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ach_per_r69);
  }
}
function FollowupComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_td_62_span_1_Template, 2, 1, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_td_62_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ach_per_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ach_per_r69 <= 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ach_per_r69 > 70);
  }
}
function FollowupComponent_i_1104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 20);
  }
}
function FollowupComponent_i_1105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 160);
  }
}
const _c8 = function (a0, a1) {
  return {
    from_age: a0,
    to_age: a1
  };
};
function FollowupComponent_option_1120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c8, agerange_r74.from_age, agerange_r74.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](agerange_r74.from_age + "-" + agerange_r74.to_age);
  }
}
function FollowupComponent_div_1151_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_div_1151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1151_div_1_Template, 2, 0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r10.reassignedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function FollowupComponent_div_1165_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "a", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_div_1165_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r79);
      const res_r77 = restoredCtx.$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r78.reassignedSelectvalue(res_r77));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](res_r77);
  }
}
function FollowupComponent_div_1165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1165_div_1_Template, 3, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r11.reassigned_results);
  }
}
function FollowupComponent_span_1209_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_span_1210_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_span_1210_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1600);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r80.reassign(_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_i_1217_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 20);
  }
}
function FollowupComponent_i_1218_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 160);
  }
}
function FollowupComponent_i_1235_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 20);
  }
}
function FollowupComponent_i_1236_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 160);
  }
}
function FollowupComponent_option_1251_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c8, agerange_r82.from_age, agerange_r82.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](agerange_r82.from_age + "-" + agerange_r82.to_age);
  }
}
function FollowupComponent_div_1282_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_div_1282_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1282_div_1_Template, 2, 0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r20.assignedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function FollowupComponent_div_1296_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "a", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_div_1296_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r87);
      const res_r85 = restoredCtx.$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r86.assignedSelectvalue(res_r85));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](res_r85);
  }
}
function FollowupComponent_div_1296_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1296_div_1_Template, 3, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r21.assigned_results);
  }
}
function FollowupComponent_i_1345_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 20);
  }
}
function FollowupComponent_i_1346_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 160);
  }
}
function FollowupComponent_app_atom_spinner_1461_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-atom-spinner", 167);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function FollowupComponent_tr_1462_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 173)(1, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.touch);
  }
}
function FollowupComponent_tr_1462_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 173)(1, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.touch);
  }
}
function FollowupComponent_tr_1462_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "td", 170);
  }
}
function FollowupComponent_tr_1462_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.dos);
  }
}
function FollowupComponent_tr_1462_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "td", 170);
  }
}
function FollowupComponent_tr_1462_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.age);
  }
}
function FollowupComponent_tr_1462_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_tr_1462_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r100);
      const x_r88 = restoredCtx.$implicit;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1592);
      ctx_r99.open(_r36);
      ctx_r99.claimslection(x_r88);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r99.claim_check(x_r88.touch));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_tr_1462_td_1_Template, 3, 1, "td", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_tr_1462_td_2_Template, 3, 1, "td", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_tr_1462_td_9_Template, 1, 0, "td", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_tr_1462_td_10_Template, 2, 1, "td", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, FollowupComponent_tr_1462_td_11_Template, 1, 0, "td", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FollowupComponent_tr_1462_td_12_Template, 2, 1, "td", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "td", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "td", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "td", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r88 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r88.touch < ctx_r26.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r88.touch >= ctx_r26.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r88.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r88.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r88.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r88.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.prim_ins_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.total_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.total_ar);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r88.claim_Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", x_r88.assigned_to, "/", x_r88.assigned_by, "");
  }
}
function FollowupComponent_tr_1464_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 176)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_i_1478_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 20);
  }
}
function FollowupComponent_i_1479_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 160);
  }
}
function FollowupComponent_option_1494_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c8, agerange_r101.from_age, agerange_r101.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](agerange_r101.from_age + "-" + agerange_r101.to_age);
  }
}
function FollowupComponent_div_1525_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_div_1525_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1525_div_1_Template, 2, 0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r31.closedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function FollowupComponent_div_1539_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "a", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_div_1539_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r106);
      const res_r104 = restoredCtx.$implicit;
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r105.closedSelectvalue(res_r104));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](res_r104);
  }
}
function FollowupComponent_div_1539_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_div_1539_div_1_Template, 3, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r32.closed_results);
  }
}
function FollowupComponent_i_1586_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 20);
  }
}
function FollowupComponent_i_1587_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 160);
  }
}
function FollowupComponent_ng_template_1591_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 181)(1, "a", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r124);
      const x_r122 = restoredCtx.$implicit;
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r123.selected_tab(x_r122.claim_no);
      ctx_r123.get_line_items(x_r122);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r123.check_reassign_alloc(x_r122));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r124);
      const x_r122 = restoredCtx.$implicit;
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r125.close_tab(x_r122));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r122 = ctx.$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", x_r122.claim_no === ctx_r108.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "#", x_r122.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Claim No: ", x_r122.claim_no, "");
  }
}
function FollowupComponent_ng_template_1591_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_tr_128_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r128);
      const related_r126 = restoredCtx.$implicit;
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r127.referclaim(related_r126);
      ctx_r127.claim_tab_name("related_claims");
      ctx_r127.get_line_items(related_r126.claim);
      ctx_r127.check_reassign_alloc(ctx_r127.claim_clicked);
      ctx_r127.claimslection(related_r126);
      ctx_r127.check_reassign_alloc(related_r126);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r127.claim_check(related_r126.touch));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const related_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 2, related_r126.claim.dos, "MM/dd/yyyy"), " - ", related_r126.claim.claim_no, "");
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r129.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r129.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r129.cpt);
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r137.claim_clicked.total_charges, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r129.total_ar_due, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_tr_166_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r129.closed_claim_date);
  }
}
function FollowupComponent_ng_template_1591_tr_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_ng_template_1591_tr_166_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, FollowupComponent_ng_template_1591_tr_166_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, FollowupComponent_ng_template_1591_tr_166_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_ng_template_1591_tr_166_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, FollowupComponent_ng_template_1591_tr_166_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_ng_template_1591_tr_166_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, FollowupComponent_ng_template_1591_tr_166_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FollowupComponent_ng_template_1591_tr_166_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FollowupComponent_ng_template_1591_tr_166_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, FollowupComponent_ng_template_1591_tr_166_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, FollowupComponent_ng_template_1591_tr_166_span_17_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, FollowupComponent_ng_template_1591_tr_166_span_18_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "td", 222)(20, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r129 = ctx.$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r110.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r110.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.closed_claim_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r129.closed_claim_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r110.claim_clicked.touch);
  }
}
function FollowupComponent_ng_template_1591_a_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 276)(1, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_span_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span");
  }
}
function FollowupComponent_ng_template_1591_a_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_a_190_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r148);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1594);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r147.openModal2(_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_div_195_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_195_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r152);
      const x_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1594);
      ctx_r151.openModal2(_r38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r151.editnotes("processnote", x_r149.content, x_r149.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 279)(1, "p", 280)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_ng_template_1591_div_195_i_10_Template, 1, 0, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r149 = ctx.$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r149.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, x_r149.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r149.content, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r114.type != "completed");
  }
}
function FollowupComponent_ng_template_1591_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 285)(1, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_div_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 279)(1, "p", 280)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Error Types: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r154.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 3, x_r154.created_at, "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r154.content, ".");
  }
}
function FollowupComponent_ng_template_1591_div_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 285)(1, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_span_221_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_span_221_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r157);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1596);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r156.openModal2(_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r155.claim_notes_data_list.includes(ctx_r155.claim_clicked.claim_no));
  }
}
function FollowupComponent_ng_template_1591_span_221_Template(rf, ctx) {
  if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FollowupComponent_ng_template_1591_span_221_a_1_Template, 5, 1, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_span_221_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r159);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1596);
      ctx_r158.openModal2(_r40);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r158.editnotes("claim_notes_init", "none", ctx_r158.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r118.type != "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx_r118.claim_notes_data_list.includes(ctx_r118.claim_clicked.claim_no));
  }
}
function FollowupComponent_ng_template_1591_div_226_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_226_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r163);
      const y_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1596);
      ctx_r162.openModal2(_r40);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r162.editnotes("claimnotes", y_r160.content, y_r160.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_226_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 290)(1, "p", 280)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_ng_template_1591_div_226_i_10_Template, 1, 0, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r160 = ctx.$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", y_r160.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, y_r160.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", y_r160.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r119.note_edit_val == y_r160.id && y_r160.content != ctx_r119.claim_clicked.claim_note);
  }
}
function FollowupComponent_ng_template_1591_div_227_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 285)(1, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r178.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r178.dos, "MM/dd/yyyy"));
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](x_r178.cpt);
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r186.claim_clicked.total_charges, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, x_r178.total_ar_due, "1.2-2"));
  }
}
function FollowupComponent_ng_template_1591_div_301_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FollowupComponent_ng_template_1591_div_301_tr_140_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, FollowupComponent_ng_template_1591_div_301_tr_140_span_3_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, FollowupComponent_ng_template_1591_div_301_tr_140_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_ng_template_1591_div_301_tr_140_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, FollowupComponent_ng_template_1591_div_301_tr_140_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_ng_template_1591_div_301_tr_140_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, FollowupComponent_ng_template_1591_div_301_tr_140_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FollowupComponent_ng_template_1591_div_301_tr_140_span_12_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FollowupComponent_ng_template_1591_div_301_tr_140_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, FollowupComponent_ng_template_1591_div_301_tr_140_span_15_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "td", 222)(19, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r178 = ctx.$implicit;
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r166.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r166.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", x_r178.total_ar_due != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r166.claim_clicked.touch);
  }
}
function FollowupComponent_ng_template_1591_div_301_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span");
  }
}
function FollowupComponent_ng_template_1591_div_301_div_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 279)(1, "p", 280)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_div_171_Template_i_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r195);
      const x_r193 = restoredCtx.$implicit;
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1594);
      ctx_r194.open(_r38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r194.editnotes("processnote", x_r193.content, x_r193.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r193 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r193.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r193.created_at, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r193.content, ". ");
  }
}
function FollowupComponent_ng_template_1591_div_301_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 285)(1, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_div_301_a_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_a_182_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r197);
      const x_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1598);
      ctx_r196.open(_r42);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r196.confirm_reassign(x_r165));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_div_195_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_div_195_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r202);
      const y_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1596);
      ctx_r201.open(_r40);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r201.editnotes("claimnotes", y_r199.content, y_r199.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FollowupComponent_ng_template_1591_div_301_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 290)(1, "p", 280)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FollowupComponent_ng_template_1591_div_301_div_195_i_10_Template, 1, 0, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r199 = ctx.$implicit;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", y_r199.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, y_r199.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", y_r199.content, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r171.note_edit_val == y_r199.id);
  }
}
function FollowupComponent_ng_template_1591_div_301_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 285)(1, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_div_301_div_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 279)(1, "p", 280)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", x_r204.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 3, x_r204.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", x_r204.content, ". ");
  }
}
function FollowupComponent_ng_template_1591_div_301_div_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 285)(1, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1591_div_301_app_atom_spinner_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-atom-spinner", 167);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function FollowupComponent_ng_template_1591_div_301_span_218_Template(rf, ctx) {
  if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-claim-op-footer", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 248)(3, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_span_218_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r206);
      const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r205.modalRef == null ? null : ctx_r205.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tab", ctx_r176.types);
  }
}
function FollowupComponent_ng_template_1591_div_301_span_219_Template(rf, ctx) {
  if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span")(1, "div", 303)(2, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_span_219_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r209);
      const x_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r207.close_tab(x_r165));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function FollowupComponent_ng_template_1591_div_301_Template(rf, ctx) {
  if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 291)(1, "div", 187)(2, "div", 68)(3, "div", 188)(4, "div", 17)(5, "div", 189)(6, "div", 13)(7, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 18)(11, "button", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 191)(14, "div", 10)(15, "div", 192)(16, "div", 193)(17, "div", 194)(18, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 18)(22, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 196)(25, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "svg", 198)(27, "desc", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "defs", 199)(30, "path", 200)(31, "path", 201)(32, "path", 202)(33, "path", 203)(34, "path", 204)(35, "path", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "text", 206)(37, "tspan", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "text", 208)(40, "tspan", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 54)(43, "div", 192)(44, "div", 293)(45, "table", 212)(46, "tbody")(47, "tr")(48, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "tr")(53, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "tr")(58, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "tr")(64, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 294)(69, "table", 212)(70, "tbody")(71, "tr")(72, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "tr")(90, "td", 213);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "tr")(99, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](103, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 218)(105, "div", 219)(106, "div", 17)(107, "div", 189)(108, "div", 13)(109, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](110, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 18)(113, "button", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](114, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 54)(116, "div", 36)(117, "table", 24)(118, "thead")(119, "tr")(120, "th", 222)(121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "th", 222)(124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "th", 222)(127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "th", 222)(130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](131, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "th", 222)(133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](134, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "th", 222)(136, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](138, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](140, FollowupComponent_ng_template_1591_div_301_tr_140_Template, 21, 11, "tr", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "div", 223)(142, "div", 18)(143, "a", 224)(144, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](145, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "a", 226)(147, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "a", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_Template_a_click_149_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r211);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r210.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](150, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](153, FollowupComponent_ng_template_1591_div_301_span_153_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "div", 230)(155, "div", 219)(156, "div", 17)(157, "div", 189)(158, "div", 13)(159, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](160, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "div", 18)(163, "a", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_Template_a_click_163_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r211);
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1594);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r212.openModal2(_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](164, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "button", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](168, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "div", 296)(170, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](171, FollowupComponent_ng_template_1591_div_301_div_171_Template, 10, 3, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](172, FollowupComponent_ng_template_1591_div_301_div_172_Template, 3, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "div", 240)(174, "div", 219)(175, "div", 17)(176, "div", 189)(177, "div", 13)(178, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](179, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](182, FollowupComponent_ng_template_1591_div_301_a_182_Template, 1, 0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](183, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_Template_a_click_183_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r211);
      const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1596);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r213.open(_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](184, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](186, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_div_301_Template_a_click_187_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r211);
      const x_r165 = restoredCtx.$implicit;
      const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1596);
      ctx_r214.open(_r40);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r214.editnotes("claim_notes_init", "none", x_r165));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](188, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "button", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](192, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "div", 296)(194, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](195, FollowupComponent_ng_template_1591_div_301_div_195_Template, 11, 7, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](196, FollowupComponent_ng_template_1591_div_301_div_196_Template, 3, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "div", 298)(198, "div", 219)(199, "div", 17)(200, "div", 189)(201, "div", 237)(202, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](203, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](204, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "div", 18)(206, "button", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](207, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "div", 296)(209, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](210, FollowupComponent_ng_template_1591_div_301_div_210_Template, 10, 6, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](211, FollowupComponent_ng_template_1591_div_301_div_211_Template, 3, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](212, FollowupComponent_ng_template_1591_div_301_app_atom_spinner_212_Template, 1, 2, "app-atom-spinner", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](213, "div", 244)(214, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](215, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](216, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](217, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](218, FollowupComponent_ng_template_1591_div_301_span_218_Template, 5, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](219, FollowupComponent_ng_template_1591_div_301_span_219_Template, 4, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "div", 250)(221, "div", 251)(222, "div", 192)(223, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](224, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "form", 253)(227, "div", 254)(228, "div", 255)(229, "div", 256)(230, "div", 257)(231, "div", 258)(232, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](233, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](235, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](236, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "div", 255)(238, "div", 256)(239, "div", 257)(240, "div", 258)(241, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](244, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](245, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](246, "div", 255)(247, "div", 256)(248, "div", 257)(249, "div", 258)(250, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](254, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](255, "div", 255)(256, "div", 256)(257, "div", 260)(258, "div", 258)(259, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](260, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](261, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "select", 261)(264, "option");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "span", 262)(273, "span", 263)(274, "span", 264)(275, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](276, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](277, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](278, "b", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](279, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r165 = ctx.$implicit;
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", x_r165.claim_no === ctx_r121.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", x_r165.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", x_r165.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", x_r165.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](62, 30, x_r165.dob, "MM/dd/yyyy"), ", ", x_r165.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", x_r165.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r121.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r121.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r121.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r121.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r121.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r121.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r121.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r121.curr_reassigned_claims.includes(ctx_r121.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r121.active_refer_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r121.active_refer_process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r121.reassign_allocation == true && ctx_r121.refer_claim_editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r121.claim_notes_data_list.includes(x_r165.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx_r121.claim_notes_data_list.includes(x_r165.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r121.active_refer_claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r121.active_refer_claim.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r121.active_refer_client);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r121.active_refer_client.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r121.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "x", x_r165.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "y", x_r165.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r121.refer_claim_editable == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r121.refer_claim_editable == "false");
  }
}
function FollowupComponent_ng_template_1591_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 177)(1, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r215.modalRef == null ? null : ctx_r215.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r215.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ul", 180)(5, "li", 181)(6, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r217.selected_tab("maintab");
      ctx_r217.get_line_items(ctx_r217.claim_clicked);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r217.check_reassign_alloc(ctx_r217.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, FollowupComponent_ng_template_1591_li_9_Template, 7, 4, "li", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 185)(11, "div", 186)(12, "div", 187)(13, "div", 68)(14, "div", 188)(15, "div", 17)(16, "div", 189)(17, "div", 13)(18, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 18)(22, "button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 191)(25, "div", 10)(26, "div", 192)(27, "div", 193)(28, "div", 194)(29, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 18)(33, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 196)(36, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "svg", 198)(38, "desc", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "defs", 199)(41, "path", 200)(42, "path", 201)(43, "path", 202)(44, "path", 203)(45, "path", 204)(46, "path", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "text", 206)(48, "tspan", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "text", 208)(51, "tspan", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 210)(54, "div", 192)(55, "div", 211)(56, "table", 212)(57, "tbody")(58, "tr")(59, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "tr")(66, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "tr")(73, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](79, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "tr")(81, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 214)(88, "table", 212)(89, "tbody")(90, "tr")(91, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](94, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "tr")(109, "td", 213);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "tr")(118, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](119, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](121, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "div", 216)(124, "h4", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "table", 212)(127, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](128, FollowupComponent_ng_template_1591_tr_128_Template, 4, 5, "tr", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "div", 218)(130, "div", 219)(131, "div", 17)(132, "div", 189)(133, "div", 13)(134, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](135, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](136, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "div", 18)(138, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](139, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "div", 221)(141, "div", 36)(142, "div", 133)(143, "table", 24)(144, "thead")(145, "tr")(146, "th", 222)(147, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "th", 222)(150, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](151, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](152, "th", 222)(153, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "th", 222)(156, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "th", 222)(159, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](160, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "th", 222)(162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](163, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](164, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](166, FollowupComponent_ng_template_1591_tr_166_Template, 22, 13, "tr", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "div", 223)(168, "div", 18)(169, "a", 224)(170, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](172, "a", 226)(173, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](174, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](175, FollowupComponent_ng_template_1591_a_175_Template, 3, 0, "a", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](176, "a", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_Template_a_click_176_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r218.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](177, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](178, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](179, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](180, FollowupComponent_ng_template_1591_span_180_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "div", 230)(182, "div", 219)(183, "div", 17)(184, "div", 189)(185, "div", 13)(186, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](187, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](190, FollowupComponent_ng_template_1591_a_190_Template, 5, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](192, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "div", 233)(194, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](195, FollowupComponent_ng_template_1591_div_195_Template, 11, 7, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](196, FollowupComponent_ng_template_1591_div_196_Template, 3, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "div", 236)(198, "div", 219)(199, "div", 17)(200, "div", 189)(201, "div", 237)(202, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](203, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](204, " QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "div", 18)(206, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](207, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "div", 239)(209, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](210, FollowupComponent_ng_template_1591_div_210_Template, 16, 6, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](211, FollowupComponent_ng_template_1591_div_211_Template, 3, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](212, "div", 240)(213, "div", 219)(214, "div", 17)(215, "div", 189)(216, "div", 13)(217, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](218, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](221, FollowupComponent_ng_template_1591_span_221_Template, 6, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](222, "button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](223, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "div", 242)(225, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](226, FollowupComponent_ng_template_1591_div_226_Template, 11, 7, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](227, FollowupComponent_ng_template_1591_div_227_Template, 3, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](228, "div", 244)(229, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](230, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](231, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](232, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "app-claim-op-footer", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("methodCalled", function FollowupComponent_ng_template_1591_Template_app_claim_op_footer_methodCalled_233_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r219.onMethodCalled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "div", 248)(235, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1591_Template_button_click_235_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216);
      const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r220.modalRef == null ? null : ctx_r220.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](236, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "div", 250)(238, "div", 251)(239, "div", 192)(240, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](241, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "form", 253)(244, "div", 254)(245, "div", 255)(246, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](247, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](248, "div", 255)(249, "div", 256)(250, "div", 257)(251, "div", 258)(252, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](254, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](256, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "div", 255)(258, "div", 256)(259, "div", 257)(260, "div", 258)(261, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](265, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](266, "div", 255)(267, "div", 256)(268, "div", 260)(269, "div", 258)(270, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "select", 261)(275, "option");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](283, "span", 262)(284, "span", 263)(285, "span", 264)(286, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](287, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](288, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](289, "b", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](290, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "form", 253)(292, "div", 54)(293, "div", 68)(294, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](295, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](296, "textarea", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](297, "button", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](298, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](300, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](301, FollowupComponent_ng_template_1591_div_301_Template, 280, 33, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](302, "div", 273);
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r37.main_tab == ctx_r37.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r37.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r37.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r37.claim_clicked.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r37.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](79, 31, ctx_r37.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r37.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r37.claim_clicked.ssn);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r37.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r37.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r37.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r37.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r37.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](": ", ctx_r37.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r37.type == "reallocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r37.curr_reassigned_claims.includes(ctx_r37.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r37.type != "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.process_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r37.process_notes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r37.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r37.curr_reassigned_claims.includes(ctx_r37.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r37.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tab", ctx_r37.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r37.refer_claim_det);
  }
}
function FollowupComponent_ng_template_1593_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1593_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r226);
      const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r225.savenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r225.modalRef2 == null ? null : ctx_r225.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r222.valid);
  }
}
function FollowupComponent_ng_template_1593_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1593_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r228);
      const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r227.updatenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r227.modalRef2 == null ? null : ctx_r227.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r222.valid);
  }
}
function FollowupComponent_ng_template_1593_Template(rf, ctx) {
  if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 177)(1, "button", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1593_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r230);
      const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r229.modalRef2 == null ? null : ctx_r229.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 305)(7, "div", 244)(8, "form", 306, 307)(10, "div", 192)(11, "div", 17)(12, "div", 68)(13, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "textarea", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 273)(16, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1593_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r230);
      const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r231.modalRef2 == null ? null : ctx_r231.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, FollowupComponent_ng_template_1593_button_18_Template, 2, 1, "button", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, FollowupComponent_ng_template_1593_button_19_Template, 2, 1, "button", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r39.processNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r39.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r39.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r39.editnote_value);
  }
}
function FollowupComponent_ng_template_1595_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1595_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r237);
      const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r236.savenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r236.modalRef2 == null ? null : ctx_r236.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Sav");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r233.valid);
  }
}
function FollowupComponent_ng_template_1595_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1595_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r239);
      const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      ctx_r238.updatenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r238.modalRef2 == null ? null : ctx_r238.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !_r233.valid);
  }
}
function FollowupComponent_ng_template_1595_Template(rf, ctx) {
  if (rf & 1) {
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 177)(1, "button", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1595_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r241);
      const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r240.modalRef2 == null ? null : ctx_r240.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h4", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 305)(7, "div", 244)(8, "form", 306, 307)(10, "div", 192)(11, "div", 17)(12, "div", 68)(13, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "textarea", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 273)(16, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1595_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r241);
      const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r242.modalRef2 == null ? null : ctx_r242.modalRef2.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r242.close_clear_data());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, FollowupComponent_ng_template_1595_button_18_Template, 2, 1, "button", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, FollowupComponent_ng_template_1595_button_19_Template, 2, 1, "button", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r41.claimNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r41.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r41.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r41.editnote_value);
  }
}
function FollowupComponent_ng_template_1597_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 305)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Are you sure you want to Reassign the Claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "The Claim will be moved from your Bucket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r244.reassign_claim.claim_no);
  }
}
function FollowupComponent_ng_template_1597_Template(rf, ctx) {
  if (rf & 1) {
    const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 177)(1, "h4", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Re-Assign to Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1597_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r246);
      const modal_r243 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r243.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, FollowupComponent_ng_template_1597_div_6_Template, 11, 1, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 273)(8, "button", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1597_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r246);
      const modal_r243 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r243.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1597_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r246);
      const modal_r243 = restoredCtx.$implicit;
      const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r243.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r248.confirm_action(ctx_r248.confirmation_type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r43.confirmation_type == "Reassign");
  }
}
function FollowupComponent_ng_template_1599_Template(rf, ctx) {
  if (rf & 1) {
    const _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 177)(1, "h4", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Re-Assign to Managers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1599_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r251);
      const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r250.modalRef3 == null ? null : ctx_r250.modalRef3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 10)(7, "div", 192)(8, "div", 321)(9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Are you sure you want to Reassign the Claim ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 273)(13, "button", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1599_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r251);
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r252.modalRef3 == null ? null : ctx_r252.modalRef3.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r252.cancel_claims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1599_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r251);
      const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r253.modalRef3 == null ? null : ctx_r253.modalRef3.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r253.confirm_box("confirmation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1601_Template(rf, ctx) {
  if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 177)(1, "h4", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Re-Assign to Managers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1601_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r256);
      const modal_r254 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r254.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 10)(7, "div", 192)(8, "div", 321)(9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Are you sure you want to Reassign the Claim ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 273)(13, "button", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1601_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r256);
      const modal_r254 = restoredCtx.$implicit;
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r254.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r257.cancel_claims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_ng_template_1601_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r256);
      const modal_r254 = restoredCtx.$implicit;
      const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r254.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r258.confirm_boxes("reassign"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function FollowupComponent_ng_template_1603_Template(rf, ctx) {
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
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Auth No : ", ctx_r49.claim_data.auth_no ? ctx_r49.claim_data.auth_no : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Admit Date : ", ctx_r49.claim_data.admit_date ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 10, ctx_r49.claim_data.admit_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Discharge Date : ", ctx_r49.claim_data.discharge_date ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 13, ctx_r49.claim_data.discharge_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" CPT : ", ctx_r49.claim_data.cpt ? ctx_r49.claim_data.cpt : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ICD : ", ctx_r49.claim_data.icd ? ctx_r49.claim_data.icd : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Modifiers : ", ctx_r49.claim_data.modifiers ? ctx_r49.claim_data.modifiers : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Units : ", ctx_r49.claim_data.units ? ctx_r49.claim_data.units : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Facility : ", ctx_r49.claim_data.facility ? ctx_r49.claim_data.facility : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Billing Provider : ", ctx_r49.claim_data.billing_prov ? ctx_r49.claim_data.billing_prov : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Insurance Type : ", ctx_r49.claim_data.insurance_type ? ctx_r49.claim_data.insurance_type : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1605_Template(rf, ctx) {
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
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Guarantor : ", ctx_r51.claim_data.guarantor ? ctx_r51.claim_data.guarantor : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" DOB : ", ctx_r51.claim_data.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 12, ctx_r51.claim_data.dob, "MM/dd/yyyy") : "-Nil-", " | Age : ", ctx_r51.calculateAge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" SSN : ", ctx_r51.claim_data.ssn ? ctx_r51.claim_data.ssn : "-Nil-", " | Gender : ", ctx_r51.claim_data.gender ? ctx_r51.claim_data.gender : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx_r51.claim_data.address_1 ? ctx_r51.claim_data.address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx_r51.claim_data.address_2 ? ctx_r51.claim_data.address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" City : ", ctx_r51.claim_data.city ? ctx_r51.claim_data.city : "-Nil-", " | State : ", ctx_r51.claim_data.state ? ctx_r51.claim_data.state : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Zip Code : ", ctx_r51.claim_data.zipcode ? ctx_r51.claim_data.zipcode : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" Phone Number : ", ctx_r51.claim_data.phone_no ? ctx_r51.claim_data.phone_no : "-Nil-", " Employer : ", ctx_r51.claim_data.employer ? ctx_r51.claim_data.employer : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1607_Template(rf, ctx) {
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
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Primary Policy ID : ", ctx_r53.claim_data.prim_pol_id ? ctx_r53.claim_data.prim_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary Group ID : ", ctx_r53.claim_data.prim_group_id ? ctx_r53.claim_data.prim_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Primary Address 1 : ", ctx_r53.claim_data.prim_address_1 ? ctx_r53.claim_data.prim_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary Address 2 : ", ctx_r53.claim_data.prim_address_2 ? ctx_r53.claim_data.prim_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary City : ", ctx_r53.claim_data.prim_city ? ctx_r53.claim_data.prim_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary State : ", ctx_r53.claim_data.prim_state ? ctx_r53.claim_data.prim_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Primary Zip Code : ", ctx_r53.claim_data.prim_zipcode ? ctx_r53.claim_data.prim_zipcode : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1609_Template(rf, ctx) {
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
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Secondary Policy ID : ", ctx_r55.claim_data.sec_pol_id ? ctx_r55.claim_data.sec_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary Group ID : ", ctx_r55.claim_data.sec_group_id ? ctx_r55.claim_data.sec_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Secondary Address 1 : ", ctx_r55.claim_data.sec_address_1 ? ctx_r55.claim_data.sec_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary Address 2 : ", ctx_r55.claim_data.sec_address_2 ? ctx_r55.claim_data.sec_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary City : ", ctx_r55.claim_data.sec_city ? ctx_r55.claim_data.sec_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary State : ", ctx_r55.claim_data.sec_state ? ctx_r55.claim_data.sec_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Secondary Zip Code : ", ctx_r55.claim_data.sec_zipcode, "");
  }
}
function FollowupComponent_ng_template_1611_Template(rf, ctx) {
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
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Tertiary Policy ID : ", ctx_r57.claim_data.ter_pol_id ? ctx_r57.claim_data.ter_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary Group ID : ", ctx_r57.claim_data.ter_group_id ? ctx_r57.claim_data.ter_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Tertiary Address 1 : ", ctx_r57.claim_data.ter_address_1 ? ctx_r57.claim_data.ter_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary Address 2 : ", ctx_r57.claim_data.ter_address_2 ? ctx_r57.claim_data.ter_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary City : ", ctx_r57.claim_data.ter_city ? ctx_r57.claim_data.ter_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary State : ", ctx_r57.claim_data.ter_state ? ctx_r57.claim_data.ter_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Tertiary Zip Code : ", ctx_r57.claim_data.ter_zipcode ? ctx_r57.claim_data.ter_zipcode : "-Nil-", "");
  }
}
function FollowupComponent_ng_template_1613_Template(rf, ctx) {
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
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Patient AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 2, ctx_r59.claim_data.pat_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](4, 5, ctx_r59.claim_data.pat_ar, "1.2-2") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Insurance AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 8, ctx_r59.claim_data.ins_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 11, ctx_r59.claim_data.ins_ar, "1.2-2") : "-Nil-", "");
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
  decls: 1615,
  vars: 124,
  consts: [[1, "row", 2, "width", "100%"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", 2, "width", "100%"], [1, "box", "no-shadow", "no-border", "no-bottom"], [1, "no-padding"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [3, "ngClass", "click", 4, "ngIf"], [4, "ngIf"], [1, "tab-content", "no-padding"], ["id", "tab_4", 3, "ngClass"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-lg-6"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "box-title", "list-heading"], [1, "fa", "fa-bars", "ar-blue"], [1, "box", "no-shadow", "no-border"], [1, "box-body", "no-padding"], [1, "box-tools", "pull-right"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#dashboard", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "fa", "fa-plus"], ["id", "dashboard", 1, "box-body", "no-padding", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "production-table", "no-padding"], [1, "table-responsive", 2, "padding", "0 5px"], [1, "table-striped1", "table"], [1, "font600", "line-height-24"], ["colspan", "5", 1, "font600", "text-center", "line-height-24", 2, "border-right", "1px solid #fff"], ["colspan", "5", 1, "font600", "text-center", "line-height-24"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "ar-blue", "font600"], [2, "background", "#f5f5f5"], [2, "background", "#f7f7f7"], [1, "text-red", "font600"], [1, "col-lg-6"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#individual", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "individual", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "col-lg-12", 2, "border-top", "1px solid #dee0e8"], [1, "col-lg-4"], [1, "text-center", 2, "margin-top", "20px", "margin-bottom", "5px"], [1, "font600", "ar-blue", "text-center", 2, "margin-top", "0px"], [1, "font600", "text-center", 2, "margin-top", "0px"], [1, "font600", "text-red", "text-center", 2, "margin-top", "0px"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#top-5", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "top-5", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "perfomer-table"], [1, "table", "table-striped", 2, "margin-top", "10px"], ["src", "http://gravatar.com/avatar/2c0ad52fc5943b78d6abe069cc08f320?s=32", 1, "user-image", 2, "width", "32px", "border-radius", "50%"], [2, "background", "#e0f4fc"], [1, "box-tools", "pull-right", 2, "margin-top", "1px"], ["id", "size_select", "tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible"], ["value", "option1"], ["value", "option2"], ["value", "option3"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], ["id", "option1", 1, "table-striped1", "table", "table-responsive", "size_chart"], [1, "text-center"], [1, "spnDetails"], ["id", "option2", 1, "table-striped1", "table", "table-responsive", "size_chart", 2, "display", "none"], ["id", "option3", 1, "table-striped1", "table", "table-responsive", "size_chart", 2, "display", "none"], ["id", "tab_5", 1, "tab-pane"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xs-12"], [1, "fa", "fa-filter", "ar-blue"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-box-tool", "collapsed", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "fa fa-minus", 4, "ngIf"], [1, "collapse", 3, "collapse", "isAnimated"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding"], [1, "form-group", "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "dos", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "claim_no", 1, "form-control"], ["type", "text", "formControlName", "acc_no", 1, "form-control"], ["type", "text", "formControlName", "patient_name", 1, "form-control"], [1, "form-group", "col-md-4", "col-sm-4", "col-lg-4", "col-xs-12"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "rendering_provider", 1, "form-control"], ["type", "text", "formControlName", "responsibility", 1, "form-control"], ["type", "text", "placeholder", "10.00-20.00", "formControlName", "total_ar", 1, "form-control"], ["formControlName", "status_code", 3, "config", "options", "change"], ["formControlName", "sub_status_code", 3, "config", "options"], ["type", "text", "formControlName", "payer_name", "placeholder", "Search Payer", "list", "SearchResults", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "bill_submit_date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "denial_code", 1, "form-control"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], ["type", "text", "placeholder", "Search..", "name", "search", "autocomplete", "off", 1, "search_box", 3, "ngModel", "keyup", "ngModelChange", "(keyup)"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "listing-table"], [1, "no-shadow", "no-bottom"], [1, "red", 2, "margin-top", "5px"], ["id", "page-size", 2, "border-radius", "4px", 3, "ngModel", "change", "ngModelChange"], ["value", "100"], ["value", "500"], ["value", "1000"], [2, "margin-left", "10px", "font-family", "'Maven Pro', sans-serif", "font-size", "13px !important", "font-weight", "600", "color", "#535a68"], [2, "margin-left", "10px", "color", "#ccc", "margin-right", "10px"], ["title", "Refresh Values", 1, "fa", "fa-refresh", 2, "cursor", "pointer", 3, "click"], ["style", "margin-left:10px;color:#ccc;margin-right:10px;", 4, "ngIf"], ["class", "fa fa-user-o", "style", "cursor:pointer;", "title", "Reassign", 3, "click", 4, "ngIf"], ["title", "Excel", 1, "fa", "fa-file-excel-o", 2, "cursor", "pointer", 3, "click"], [1, "ag-theme-alpine", "no-grid-lines", 3, "columnDefs", "gridOptions", "defaultColDef", "sideBar", "gridReady", "selectionChanged"], ["myGrid_2", ""], ["id", "assigned_search", 1, "collapse", 3, "collapse", "isAnimated"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "dos", "autocomplete", "off", "id", "data-picker", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "form-group", "col-md-3", "col-sm-3", "col-lg-3", "col-xs-12", "pull-right"], ["type", "text", "placeholder", "Search..", "name", "search", "autocomplete", "off", 1, "search_box", 3, "ngModel", "keyup", "ngModelChange"], ["myGrid_1", ""], ["id", "tab_2", 3, "ngClass"], ["type", "text", "placeholder", "Search..", 1, "form-control", "pull-right", 2, "width", "300px", "margin-top", "1px", "font-weight", "normal", 3, "formControl"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], ["aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 2, "width", "100%"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], [1, "", 2, "margin-top", "5px"], ["title", "Reload", 1, "fa", "fa-refresh", 2, "cursor", "pointer", 3, "click"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box14", 1, "btn", "btn-box-tool"], ["id", "box14", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "table-responsive"], [3, "size", "color", 4, "ngIf"], ["class", "clickable-row cur-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["id", "claims", 3, "maxSize", "pageChange"], ["id", "tab_3", 1, "tab-pane"], ["myGrid_3", ""], ["claimpage", ""], ["processnotes", ""], ["claimnotes", ""], ["confirm_modal", ""], ["confirmation", ""], ["reassign_confirmation", ""], ["HtmlContent", ""], ["AccNo", ""], ["PriInsurance", ""], ["SecInsurance", ""], ["TerInsurance", ""], ["TotalAr", ""], [3, "ngClass", "click"], ["href", "#tab_4", "data-toggle", "tab"], [1, "fa", "fa-dashboard"], [1, "tab-divider"], ["href", "#tab_5", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-share"], ["href", "#tab_3", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-stop-circle-o"], ["class", "text-red font600", 4, "ngIf"], [1, "fa", "fa-minus"], [3, "ngValue"], ["class", "error", 4, "ngIf"], [1, "error"], [4, "ngFor", "ngForOf"], [3, "click"], ["title", "Reassign", 1, "fa", "fa-user-o", 2, "cursor", "pointer", 3, "click"], [3, "size", "color"], [1, "clickable-row", "cur-pointer", 3, "click"], ["title", "Touch Count", 4, "ngIf"], [1, "cur-pointer"], ["class", "cur-pointer", 4, "ngIf"], [1, "cur-pointer", "text-right"], ["title", "Touch Count"], [1, "ar"], [1, "ar-red"], ["colspan", "11", "align", "center"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "nav", "nav-tabs", "no-border"], [1, "testClass"], ["href", "#{main_tab}", "data-toggle", "tab", 1, "no-padding", 3, "click"], [1, "modal-title", "list-heading"], ["class", "testClass", 3, "active", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "maintab", 1, "tab-pane"], [1, "modal-body", "no-padding"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "margin-top", "10px"], [1, "box", "no-shadow", "no-bottom", "no-border"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box39", 1, "btn", "btn-box-tool"], [1, "box-body", "no-padding", "hide"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "box", "box-success", "no-border", "no-shadow"], [1, "box-header", "no-border", "p-t-0", "p-b-0"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", "p-t-0"], [1, "box-body", "chart-responsive"], ["id", "sales-chart", 1, "chart", 2, "height", "230px"], ["height", "230", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#3c8dbc", "d", "M0,108.33333333333333A-6.666666666666667,-6.666666666666667,0,0,0,-5.228486604698025,110.86389406942499", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#3c8dbc", "stroke", "#ffffff", "d", "M0,111.33333333333333A-3.666666666666667,-3.666666666666667,0,0,0,-2.8756676325839137,112.72514173818374L-11.764094860570555,105.69376165620622A-15,-15,0,0,1,0,100Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#f56954", "d", "M-5.228486604698025,110.86389406942499A-6.666666666666667,-6.666666666666667,0,1,0,6.054042404487644,117.79159721469804", "stroke-width", "2", "opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "1"], ["fill", "#f56954", "stroke", "#ffffff", "d", "M-2.8756676325839137,112.72514173818374A-3.666666666666667,-3.666666666666667,0,1,0,3.3297233224682046,116.53537846808393L9.081063606731467,119.18739582204708A-10,-10,0,1,1,-7.842729907047037,108.79584110413748Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#00a65a", "d", "M6.054042404487644,117.79159721469804A-6.666666666666667,-6.666666666666667,0,0,0,0.0020943950679349903,108.33333366232014", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#00a65a", "stroke", "#ffffff", "d", "M3.3297233224682046,116.53537846808393A-3.666666666666667,-3.666666666666667,0,0,0,0.0011519172873642447,111.33333351427608L0.004712388902853728,100.00000074022033A-15,-15,0,0,1,13.6215954100972,121.2810937330706Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], ["dy", "105", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "125", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "14px", "stroke", "none", "fill", "#000000", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "14px"], ["dy", "125", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["id", "box39", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", "p-l-0"], [1, "table", "no-border", "table-striped-nb"], [1, "table-label"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", "p-l-0"], [1, "text-orange"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-12"], [1, "ar-blue", 2, "margin-top", "0px", "font-size", "16px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "box", "no-shadow", "no-border", 2, "margin-top", "10px"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box40", 1, "btn", "btn-box-tool"], ["id", "box40", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "5px solid #e9ecf3", "border-bottom", "3px solid #e9ecf3"], ["aria-expanded", "false", "data-target", "#Process_Notes", "data-toggle", "collapse", "title", "Process Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [2, "text-decoration", "underline"], ["aria-expanded", "false", "data-target", "#Claim_Note", "data-toggle", "collapse", "title", "Claim Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["aria-expanded", "false", "class", "cur-pointer collapsed", "data-target", "#QC_Note", "data-toggle", "collapse", "style", "margin-right: 15px;font-size: 16px;", "title", "QC Notes", 4, "ngIf"], ["data-toggle", "collapse", "data-target", "#followupview", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template View", 1, "fa", "fa-external-link-square"], ["id", "Process_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["class", "cur-pointer", "style", "font-size:16px;", 3, "click", 4, "ngIf"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box41", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box41", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "margin-top:5px;", 4, "ngIf"], ["id", "QC_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "box-header", 2, "border-bottom", "1px solid #f3eee9"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box42", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box42", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["id", "Claim_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box43", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box43", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;margin-top:5px;", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "0px"], ["id", "followup-list3", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["id", "followupview", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [3, "tab", "methodCalled"], [1, "text-center", "close-btn"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", "position", "relative", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "background", "#f9f9f9"], ["id", "client-assistant-list", 1, "collapse", 2, "margin-top", "10px"], [1, "", 2, "font-size", "16px", "margin-top", "20px"], [1, "form-horizontal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px solid #f3f4f9"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-11", "col-md-11", "col-sm-11", "col-xs-12", "no-padding"], [1, "form-group"], ["type", "text", 1, "form-control"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-12", "col-lg-offset-1", "col-md-offset-1", "col-sm-offset-1", "no-padding"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible", 2, "width", "100%"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", 2, "width", "100%"], [1, "selection"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-d8k9-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-d8k9-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["role", "presentation", 1, "select2-selection__arrow"], ["role", "presentation"], ["aria-hidden", "true", 1, "dropdown-wrapper"], [1, "form-control", "text-space"], [1, "btn", "btn-default", "btn-sm", "text-center"], [1, "btn", "btn-info", "btn-sm", "text-center"], ["class", "tab-pane", 3, "active", "id", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-toggle", "tab", 3, "href", "click"], [1, "p-l-0", "table-label", 2, "text-decoration", "underline", "cursor", "pointer", "padding-left", "0px", 3, "click"], ["aria-expanded", "false", "data-target", "#QC_Note", "data-toggle", "collapse", "title", "QC Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [1, "cur-pointer", 2, "font-size", "16px", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0"], [1, "text-justify", 2, "margin-bottom", "10px"], [2, "margin-left", "3px", "margin-right", "3px", "color", "#ccc"], [1, "pull-right", 2, "font-size", "18px"], ["class", "fa fa-edit ar-blue", "style", "margin-left:10px; font-size:16px;cursor: pointer;", "title", "Edit", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "fa", "fa-edit", "ar-blue", 2, "margin-left", "10px", "font-size", "16px", "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "5px"], [1, "text-center", "text-gray", 2, "margin-bottom", "10px"], [1, "font600"], ["class", "cur-pointer", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0", "margin-top", "5px"], [1, "tab-pane", 3, "id"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-12", "p-l-0"], [1, "col-lg-7", "col-md-7", "col-sm-7", "col-xs-12", "p-l-0"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "box-body", "no-padding", 2, "margin-top", "10px"], ["class", "cur-pointer", "style", "margin-right: 15px;font-size: 16px;", "aria-expanded", "false", 3, "click", 4, "ngIf"], [1, "col-lg-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], ["aria-expanded", "false", 1, "cur-pointer", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], [3, "tab"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "text-center", "closed-btn", 2, "margin-top", "8%"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "form-horizontal", 3, "formGroup"], ["modalform", "ngForm"], ["formControlName", "processnotes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["formControlName", "claim_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["class", "modal-body", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-danger", 3, "click"], [1, "text-primary"], [1, "text-danger"], [1, "modal-title", "custom-title"], [1, "confirm-text"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Todo List");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "div", 16)(23, "div", 17)(24, "div", 12)(25, "div", 13)(26, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, " My Production and Quality");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "table", 24)(36, "thead")(37, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "tbody")(48, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, FollowupComponent_td_50_Template, 3, 4, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "tr")(52, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "Target");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](54, FollowupComponent_td_54_Template, 2, 1, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "tr")(56, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "Achieved");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, FollowupComponent_td_58_Template, 2, 1, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "tr", 30)(60, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "Achieved %");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, FollowupComponent_td_62_Template, 3, 2, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](63, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "td", 32)(66, "td", 32)(67, "td", 32)(68, "td", 32)(69, "td", 32)(70, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "div", 11)(72, "div", 12)(73, "div", 13)(74, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](75, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, " Recent Activities");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div", 10)(78, "div", 33)(79, "div", 16)(80, "div", 17)(81, "div", 12)(82, "div", 13)(83, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](84, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, " Individual Performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 18)(87, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](88, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](90, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "div", 37)(92, "div", 38)(93, "h5", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](94, "Assigned Cliams");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "h4", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, "46543");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "div", 38)(98, "h5", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "New Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "345");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "div", 38)(103, "h5", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, "> 3 Touches");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "121");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "div", 33)(108, "div", 16)(109, "div", 17)(110, "div", 12)(111, "div", 13)(112, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](113, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114, " Top 5 Performers");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 18)(116, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](117, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](118, "div", 44)(119, "div", 45)(120, "table", 46)(121, "tbody")(122, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](123, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127, "Chris Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129, "AR Analyst");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](131, "90.3% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](133, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "Chris Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](139, "AR Caller");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](141, "85.3% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](144, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](145, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](147, "Chris Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](148, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](149, "AR Caller");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](150, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](151, "95.3% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](152, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](153, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](155, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](156, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, "Mike Hussey");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](159, "AR Analyst");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](160, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, "95.0% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "tr")(163, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](164, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](168, "David Miller");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, "AR Caller");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](171, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](172, "94.1% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](175, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](176, "6");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](178, "Ricky Pointing");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](179, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, "AR Analyst");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](182, "93.8% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](183, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](184, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](186, "7");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, "David Willey");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "AR Caller");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](192, "93.6% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](195, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](196, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](198, "David");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](200, "AR Caller");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](201, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](202, "90.6% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](203, "tr", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](204, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](206, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](207, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](208, "John");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](209, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](210, "AR Analyst");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](211, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](212, "87.5% Accuracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](213, "div", 16)(214, "div", 17)(215, "div", 12)(216, "div", 13)(217, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](218, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, " Status Wise Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "div", 49)(221, "select", 50)(222, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](223, "Assigned");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](227, "Worked");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](228, "div", 54)(229, "div", 22)(230, "div", 23)(231, "table", 55)(232, "thead")(233, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](234, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](235, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](236, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](238, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](239, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](240, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](241, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "tbody")(244, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](245, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](246, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](247, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](248, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](249, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](250, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](254, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](256, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](257, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](258, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](259, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](260, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](261, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](262, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](263, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](264, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](265, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](266, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](267, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](268, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](269, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](270, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](275, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](276, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](277, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](278, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](279, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](280, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](281, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](282, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](283, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](284, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](285, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](286, "tr")(287, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](288, "Worked");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](289, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](290, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](292, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](293, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](294, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](295, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](296, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](297, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](298, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](300, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](301, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](302, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](303, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](304, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](305, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](306, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](308, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](310, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](312, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](313, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](314, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](315, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](318, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](319, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](320, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](321, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](322, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](323, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](324, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](325, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](326, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](327, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](328, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](329, "tr")(330, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](331, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](332, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](333, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](334, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](335, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](336, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](337, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](338, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](339, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](340, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](341, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](342, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](343, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](344, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](345, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](346, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](347, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](348, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](349, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](350, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](351, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](352, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](353, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](354, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](355, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](356, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](357, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](358, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](359, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](360, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](361, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](362, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](363, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](364, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](365, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](366, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](367, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](368, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](369, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](370, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](371, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](372, "tr")(373, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](374, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](375, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](376, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](377, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](378, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](379, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](380, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](381, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](382, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](383, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](384, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](385, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](386, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](388, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](390, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](391, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](392, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](393, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](394, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](395, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](396, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](397, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](398, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](399, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](400, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](401, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](402, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](403, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](404, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](405, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](406, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](408, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](409, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](410, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](411, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](412, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](414, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](415, "tr")(416, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](417, "Followup");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](418, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](419, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](421, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](422, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](423, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](425, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](427, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](429, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](430, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](431, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](433, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](434, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](435, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](436, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](437, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](438, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](439, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](440, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](441, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](442, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](443, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](444, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](445, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](446, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](447, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](448, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](449, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](451, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](453, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](455, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](457, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](458, "tr")(459, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](460, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](461, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](462, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](463, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](464, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](466, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](468, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](469, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](470, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](471, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](472, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](473, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](474, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](475, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](476, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](477, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](478, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](479, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](480, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](481, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](482, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](483, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](484, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](485, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](486, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](487, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](488, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](489, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](490, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](492, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](494, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](496, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](497, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](498, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](499, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](500, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](501, "tr", 30)(502, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](503, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](504, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](505, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](506, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](507, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](508, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](509, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](510, "td", 32)(511, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](512, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](513, "td", 32)(514, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](515, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](516, "td", 32)(517, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](518, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](520, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](521, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](522, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](523, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](524, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](525, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](526, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](527, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](528, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](529, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](530, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](531, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](532, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](533, "td", 32)(534, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](535, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](536, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](537, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](538, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](539, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](540, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](541, "71");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](542, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](543, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](544, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](545, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](546, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](547, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](548, "tr")(549, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](550, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](551, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](552, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](553, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](554, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](555, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](556, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](557, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](558, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](559, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](560, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](561, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](562, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](563, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](564, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](565, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](566, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](567, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](568, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](569, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](570, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](571, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](572, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](573, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](574, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](575, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](576, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](577, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](578, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](579, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](580, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](581, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](582, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](583, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](584, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](585, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](586, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](587, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](588, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](589, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](590, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](591, "table", 58)(592, "thead")(593, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](594, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](595, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](596, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](597, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](598, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](599, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](600, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](601, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](602, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](603, "tbody")(604, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](605, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](606, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](607, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](608, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](609, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](610, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](611, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](612, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](613, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](614, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](615, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](616, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](617, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](618, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](619, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](620, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](621, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](622, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](623, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](624, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](625, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](626, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](627, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](628, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](629, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](630, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](631, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](632, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](633, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](634, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](635, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](636, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](637, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](638, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](639, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](640, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](641, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](642, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](643, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](644, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](645, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](646, "tr")(647, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](648, "Medicare");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](650, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](651, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](652, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](653, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](654, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](655, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](656, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](657, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](658, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](659, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](660, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](661, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](662, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](663, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](664, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](665, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](666, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](667, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](668, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](669, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](670, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](671, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](672, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](673, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](674, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](675, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](676, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](677, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](678, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](679, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](680, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](682, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](683, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](684, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](685, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](686, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](687, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](688, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](689, "tr")(690, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](691, "Medicaid");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](692, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](693, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](694, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](695, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](696, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](697, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](698, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](699, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](700, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](701, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](702, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](703, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](704, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](705, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](706, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](707, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](708, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](709, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](710, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](711, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](712, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](713, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](714, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](715, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](716, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](717, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](718, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](719, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](720, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](721, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](722, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](723, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](724, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](725, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](726, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](727, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](728, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](729, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](730, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](731, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](732, "tr", 30)(733, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](734, "BCBS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](735, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](736, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](737, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](738, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](739, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](740, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](741, "td", 32)(742, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](743, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](744, "td", 32)(745, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](746, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](747, "td", 32)(748, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](749, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](750, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](751, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](752, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](753, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](754, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](755, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](756, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](757, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](758, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](759, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](760, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](761, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](762, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](763, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](764, "td", 32)(765, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](766, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](767, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](768, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](769, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](770, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](771, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](772, "71");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](773, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](774, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](775, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](776, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](777, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](778, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](779, "tr")(780, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](781, "Aetna");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](782, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](783, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](784, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](785, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](786, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](787, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](788, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](789, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](790, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](791, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](792, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](793, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](794, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](795, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](796, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](797, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](798, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](799, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](800, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](801, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](802, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](803, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](804, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](805, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](806, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](807, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](808, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](809, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](810, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](811, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](812, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](813, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](814, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](815, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](816, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](817, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](818, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](819, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](820, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](821, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](822, "tr")(823, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](824, "UHC");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](825, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](826, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](827, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](828, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](829, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](830, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](831, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](832, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](833, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](834, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](835, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](836, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](837, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](838, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](839, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](840, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](841, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](842, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](843, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](844, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](845, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](846, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](847, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](848, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](849, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](850, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](851, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](852, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](853, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](854, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](855, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](856, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](857, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](858, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](859, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](860, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](861, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](862, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](863, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](864, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](865, "tr")(866, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](867, "Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](868, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](869, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](870, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](871, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](872, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](873, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](874, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](875, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](876, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](877, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](878, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](879, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](880, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](881, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](882, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](883, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](884, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](885, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](886, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](887, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](888, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](889, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](890, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](891, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](892, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](893, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](894, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](895, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](896, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](897, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](898, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](899, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](900, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](901, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](902, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](903, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](904, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](905, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](906, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](907, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](908, "table", 59)(909, "thead")(910, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](911, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](912, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](913, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](914, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](915, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](916, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](917, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](918, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](919, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](920, "tbody")(921, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](922, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](923, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](924, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](925, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](926, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](927, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](928, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](929, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](930, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](931, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](932, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](933, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](934, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](935, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](936, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](937, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](938, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](939, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](940, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](941, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](942, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](943, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](944, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](945, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](946, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](947, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](948, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](949, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](950, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](951, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](952, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](953, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](954, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](955, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](956, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](957, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](958, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](959, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](960, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](961, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](962, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](963, "tr")(964, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](965, "Followup");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](966, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](967, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](968, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](969, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](970, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](971, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](972, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](973, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](974, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](975, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](976, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](977, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](978, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](979, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](980, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](981, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](982, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](983, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](984, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](985, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](986, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](987, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](988, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](989, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](990, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](991, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](992, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](993, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](994, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](995, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](996, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](997, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](998, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](999, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1000, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1001, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1002, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1003, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1004, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1005, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1006, "tr")(1007, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1008, "Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1009, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1010, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1011, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1012, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1013, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1014, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1015, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1016, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1017, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1018, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1019, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1020, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1021, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1022, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1023, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1024, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1025, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1026, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1027, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1028, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1029, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1030, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1031, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1032, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1033, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1034, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1035, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1036, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1037, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1038, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1039, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1040, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1041, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1042, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1043, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1044, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1045, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1046, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1047, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1048, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1049, "tr")(1050, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1051, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1052, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1053, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1054, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1055, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1056, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1057, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1058, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1059, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1060, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1061, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1062, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1063, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1064, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1065, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1066, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1067, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1068, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1069, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1070, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1071, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1072, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1073, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1074, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1075, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1076, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1077, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1078, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1079, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1080, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1081, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1082, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1083, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1084, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1085, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1086, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1087, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1088, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1089, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1090, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1091, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1092, "div", 60)(1093, "div", 16)(1094, "div", 17)(1095, "div", 10)(1096, "div", 61)(1097, "div", 12)(1098, "div", 13)(1099, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1100, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1101, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1102, "div", 18)(1103, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1103_listener() {
        ctx.isCollapsed_Revoked = !ctx.isCollapsed_Revoked;
        return ctx.status_select_code();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1104, FollowupComponent_i_1104_Template, 1, 0, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1105, FollowupComponent_i_1105_Template, 1, 0, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1106, "div", 66)(1107, "form", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function FollowupComponent_Template_form_ngSubmit_1107_listener() {
        return ctx.reassigned_claims_filter(1, "reallocated", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1108, "div", 54)(1109, "div", 68)(1110, "div", 69)(1111, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1112, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1113, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1113_listener($event) {
        return ctx.selectedReAssigin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1114, "div", 69)(1115, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1116, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1117, "select", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1117_listener($event) {
        return ctx.reassignedSelectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1118, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1119, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1120, FollowupComponent_option_1120_Template, 2, 5, "option", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1121, "div", 69)(1122, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1123, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1124, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1125, "div", 68)(1126, "div", 69)(1127, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1128, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1129, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1130, "div", 69)(1131, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1132, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1133, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1134, "div", 77)(1135, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1136, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1137, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1137_listener($event) {
        return ctx.reassigned_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1138, "div", 68)(1139, "div", 77)(1140, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1141, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1142, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1143, "div", 77)(1144, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1145, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1146, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1147, "div", 77)(1148, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1149, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1150, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1151, FollowupComponent_div_1151_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1152, "div", 68)(1153, "div", 77)(1154, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1155, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1156, "ngx-select-dropdown", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_ngx_select_dropdown_change_1156_listener($event) {
        return ctx.reassigned_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1157, "div", 77)(1158, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1159, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1160, "ngx-select-dropdown", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1161, "div", 77)(1162, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1163, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1164, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1164_listener($event) {
        return ctx.reassigned_selected_val = $event;
      })("keyup", function FollowupComponent_Template_input_keyup_1164_listener($event) {
        return ctx.reassignedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1165, FollowupComponent_div_1165_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1166, "div", 68)(1167, "div", 77)(1168, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1169, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1170, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1170_listener($event) {
        return ctx.submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1171, "div", 77)(1172, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1173, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1174, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1175, "div", 68)(1176, "div", 87)(1177, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_input_click_1177_listener() {
        return ctx.reassigned_claims_filter(1, "reallocated", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1178, "div", 61)(1179, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function FollowupComponent_Template_input_keyup_1179_listener() {
        return ctx.onSearch();
      })("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1179_listener($event) {
        return ctx.search_value_reworks = $event;
      })("(keyup)", function FollowupComponent_Template_input__keyup__1179_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1180, "div", 16)(1181, "div", 17)(1182, "div", 12)(1183, "div", 17)(1184, "div", 90)(1185, "div", 16)(1186, "div", 17)(1187, "div", 91)(1188, "div", 13)(1189, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1190, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1191, " Reworks/Call back/Pending Claims ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1192, "div", 18)(1193, "p", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1194, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1195, "select", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_select_change_1195_listener() {
        return ctx.onPageSizeChanged("reworked");
      })("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1195_listener($event) {
        return ctx.paginationSizeValue_reworked = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1196, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1197, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1198, "option", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1199, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1200, "option", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1201, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1202, "option", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1203, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1204, "span", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1205, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1206, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1207, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1208, "span", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_span_click_1208_listener() {
        return ctx.reload_data();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1209, FollowupComponent_span_1209_Template, 2, 0, "span", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1210, FollowupComponent_span_1210_Template, 1, 0, "span", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1211, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1212, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1213, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1213_listener() {
        return ctx.export_excel_files("excel", "Assigned_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1214, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1215, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1216, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1216_listener() {
        return ctx.isCollapsed_Grid2 = !ctx.isCollapsed_Grid2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1217, FollowupComponent_i_1217_Template, 1, 0, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1218, FollowupComponent_i_1218_Template, 1, 0, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1219, "div", 66)(1220, "ag-grid-angular", 103, 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("gridReady", function FollowupComponent_Template_ag_grid_angular_gridReady_1220_listener($event) {
        return ctx.onGridReady_2($event);
      })("selectionChanged", function FollowupComponent_Template_ag_grid_angular_selectionChanged_1220_listener($event) {
        return ctx.onSelectionChanged_reWorks($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1222, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1223, "div", 16)(1224, "div", 16)(1225, "div", 17)(1226, "div", 10)(1227, "div", 61)(1228, "div", 12)(1229, "div", 13)(1230, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1231, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1232, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1233, "div", 18)(1234, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1234_listener() {
        ctx.isCollapsed_Assigned = !ctx.isCollapsed_Assigned;
        return ctx.status_select_code();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1235, FollowupComponent_i_1235_Template, 1, 0, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1236, FollowupComponent_i_1236_Template, 1, 0, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1237, "div", 105)(1238, "form", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function FollowupComponent_Template_form_ngSubmit_1238_listener() {
        return ctx.assigned_claims_filter(1, "allocated", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1239, "div", 54)(1240, "div", 68)(1241, "div", 69)(1242, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1243, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1244, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1244_listener($event) {
        return ctx.selecteds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1245, "div", 69)(1246, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1247, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1248, "select", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1248_listener($event) {
        return ctx.selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1249, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1250, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1251, FollowupComponent_option_1251_Template, 2, 5, "option", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1252, "div", 69)(1253, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1254, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1255, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1256, "div", 68)(1257, "div", 69)(1258, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1259, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1260, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1261, "div", 69)(1262, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1263, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1264, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1265, "div", 77)(1266, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1267, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1268, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1268_listener($event) {
        return ctx.assigned_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1269, "div", 68)(1270, "div", 77)(1271, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1272, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1273, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1274, "div", 77)(1275, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1276, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1277, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1278, "div", 77)(1279, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1280, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1281, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1282, FollowupComponent_div_1282_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1283, "div", 68)(1284, "div", 77)(1285, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1286, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1287, "ngx-select-dropdown", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_ngx_select_dropdown_change_1287_listener($event) {
        return ctx.assigned_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1288, "div", 77)(1289, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1290, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1291, "ngx-select-dropdown", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1292, "div", 77)(1293, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1294, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1295, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1295_listener($event) {
        return ctx.assigned_selected_val = $event;
      })("keyup", function FollowupComponent_Template_input_keyup_1295_listener($event) {
        return ctx.assignedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1296, FollowupComponent_div_1296_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1297, "div", 68)(1298, "div", 77)(1299, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1300, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1301, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1301_listener($event) {
        return ctx.submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1302, "div", 77)(1303, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1304, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1305, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1306, "div", 68)(1307, "div", 107)(1308, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_input_click_1308_listener() {
        return ctx.assigned_claims_filter(1, "allocated", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1309, "div", 61)(1310, "input", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function FollowupComponent_Template_input_keyup_1310_listener() {
        return ctx.onSearch();
      })("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1310_listener($event) {
        return ctx.search_values = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1311, "div", 17)(1312, "div", 12)(1313, "div", 17)(1314, "div", 90)(1315, "div", 16)(1316, "div", 17)(1317, "div", 91)(1318, "div", 13)(1319, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1320, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1321, " Assigned Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1322, "div", 18)(1323, "p", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1324, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1325, "select", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_select_change_1325_listener() {
        return ctx.onPageSizeChanged("assigned");
      })("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1325_listener($event) {
        return ctx.paginationSizeValue_assigned = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1326, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1327, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1328, "option", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1329, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1330, "option", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1331, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1332, "option", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1333, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1334, "span", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1335, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1336, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1337, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1338, "span", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_span_click_1338_listener() {
        return ctx.reload_data();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1339, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1340, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1341, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1341_listener() {
        return ctx.export_excel_files("excel", "Assigned_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1342, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1343, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1344, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1344_listener() {
        return ctx.isCollapsed_Grid1 = !ctx.isCollapsed_Grid1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1345, FollowupComponent_i_1345_Template, 1, 0, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1346, FollowupComponent_i_1346_Template, 1, 0, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1347, "div", 66)(1348, "ag-grid-angular", 103, 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("gridReady", function FollowupComponent_Template_ag_grid_angular_gridReady_1348_listener($event) {
        return ctx.onGridReady_1($event);
      })("selectionChanged", function FollowupComponent_Template_ag_grid_angular_selectionChanged_1348_listener($event) {
        return ctx.onSelectionChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1350, "div", 110)(1351, "div", 16)(1352, "div", 17)(1353, "div", 12)(1354, "div", 13)(1355, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1356, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1357, " Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1358, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1359, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1360, "div", 54)(1361, "div", 68)(1362, "div", 112)(1363, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1364, "Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1365, "select", 113)(1366, "option", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1367, "All Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1368, "option", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1369, "Assigned Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1370, "option", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1371, "New Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1372, "option", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1373, "Pending Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1374, "option", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1375, "Audit Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1376, "option", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1377, "Account Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1378, "option", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1379, "Insurance Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1380, "option", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1381, "Insurance Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1382, "option", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1383, "Aging Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1384, "option", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1385, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1386, "option", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1387, "Associates");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1388, "option", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1389, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1390, "option", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1391, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1392, "option", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1393, "Status Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1394, "option", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1395, "Aging Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1396, "div", 112)(1397, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1398, "Status Wise");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1399, "select", 113)(1400, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1401, "A-Adjustment");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1402, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1403, "B-Appeal");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1404, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1405, "C-Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1406, "div", 112)(1407, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1408, "Sub-status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1409, "select", 113)(1410, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1411, "Adj-Bad Debt");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1412, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1413, "Adj-Insurance Overpayment");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1414, "div", 16)(1415, "div", 17)(1416, "div", 12)(1417, "div", 13)(1418, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1419, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1420, " Work Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1421, "div", 18)(1422, "p", 129)(1423, "span", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_span_click_1423_listener() {
        return ctx.reload_data();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1424, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1425, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1426, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1427, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1428, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1428_listener() {
        return ctx.export_files("excel");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1429, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1430, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1431, "button", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1432, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1433, "div", 132)(1434, "div", 36)(1435, "div", 133)(1436, "table", 24)(1437, "thead")(1438, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1439, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1440, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1441, "Acct#");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1442, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1443, "Claim#");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1444, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1445, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1446, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1447, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1448, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1449, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1450, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1451, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1452, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1453, "Billed");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1454, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1455, "AR Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1456, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1457, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1458, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1459, "Assigned To/By/Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1460, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1461, FollowupComponent_app_atom_spinner_1461_Template, 1, 2, "app-atom-spinner", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1462, FollowupComponent_tr_1462_Template, 23, 15, "tr", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1463, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1464, FollowupComponent_tr_1464_Template, 4, 0, "tr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1465, "pagination-controls", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("pageChange", function FollowupComponent_Template_pagination_controls_pageChange_1465_listener($event) {
        return ctx.getclaim_details($event, "wo", "null", "null", "null", "null", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1466, "div", 137)(1467, "div", 16)(1468, "div", 17)(1469, "div", 10)(1470, "div", 61)(1471, "div", 12)(1472, "div", 13)(1473, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1474, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1475, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1476, "div", 18)(1477, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1477_listener() {
        ctx.isCollapsed_closed_claim = !ctx.isCollapsed_closed_claim;
        return ctx.status_select_code();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1478, FollowupComponent_i_1478_Template, 1, 0, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1479, FollowupComponent_i_1479_Template, 1, 0, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1480, "div", 66)(1481, "form", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function FollowupComponent_Template_form_ngSubmit_1481_listener() {
        return ctx.closed_claims_filter(1, "completed", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1482, "div", 54)(1483, "div", 68)(1484, "div", 69)(1485, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1486, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1487, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1487_listener($event) {
        return ctx.selectedClosed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1488, "div", 69)(1489, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1490, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1491, "select", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1491_listener($event) {
        return ctx.closedSelectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1492, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1493, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1494, FollowupComponent_option_1494_Template, 2, 5, "option", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1495, "div", 69)(1496, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1497, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1498, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1499, "div", 68)(1500, "div", 69)(1501, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1502, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1503, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1504, "div", 69)(1505, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1506, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1507, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1508, "div", 77)(1509, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1510, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1511, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1511_listener($event) {
        return ctx.closed_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1512, "div", 68)(1513, "div", 77)(1514, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1515, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1516, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1517, "div", 77)(1518, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1519, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1520, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1521, "div", 77)(1522, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1523, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1524, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1525, FollowupComponent_div_1525_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1526, "div", 68)(1527, "div", 77)(1528, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1529, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1530, "ngx-select-dropdown", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_ngx_select_dropdown_change_1530_listener($event) {
        return ctx.closed_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1531, "div", 77)(1532, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1533, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1534, "ngx-select-dropdown", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1535, "div", 77)(1536, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1537, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1538, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1538_listener($event) {
        return ctx.closed_selected_val = $event;
      })("keyup", function FollowupComponent_Template_input_keyup_1538_listener($event) {
        return ctx.closedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1539, FollowupComponent_div_1539_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1540, "div", 68)(1541, "div", 77)(1542, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1543, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1544, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1544_listener($event) {
        return ctx.submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1545, "div", 77)(1546, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1547, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1548, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1549, "div", 68)(1550, "div", 87)(1551, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_input_click_1551_listener() {
        return ctx.closed_claims_filter(1, "completed", null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1552, "div", 61)(1553, "input", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function FollowupComponent_Template_input_keyup_1553_listener() {
        return ctx.onSearch();
      })("ngModelChange", function FollowupComponent_Template_input_ngModelChange_1553_listener($event) {
        return ctx.searchvalue_closedClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1554, "div", 2)(1555, "div", 17)(1556, "div", 12)(1557, "div", 17)(1558, "div", 90)(1559, "div", 16)(1560, "div", 17)(1561, "div", 91)(1562, "div", 13)(1563, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1564, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1565, " Closed Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1566, "div", 18)(1567, "p", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1568, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1569, "select", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function FollowupComponent_Template_select_change_1569_listener() {
        return ctx.onPageSizeChanged("closed");
      })("ngModelChange", function FollowupComponent_Template_select_ngModelChange_1569_listener($event) {
        return ctx.paginationSizeValue_closed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1570, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1571, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1572, "option", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1573, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1574, "option", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1575, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1576, "option", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1577, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1578, "span", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1579, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1580, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1581, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1582, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_i_click_1582_listener() {
        return ctx.export_excel_files("excel", "Closed_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1583, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1584, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1585, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FollowupComponent_Template_button_click_1585_listener() {
        return ctx.isCollapsed_Grid3 = !ctx.isCollapsed_Grid3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1586, FollowupComponent_i_1586_Template, 1, 0, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1587, FollowupComponent_i_1587_Template, 1, 0, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1588, "div", 66)(1589, "ag-grid-angular", 103, 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("gridReady", function FollowupComponent_Template_ag_grid_angular_gridReady_1589_listener($event) {
        return ctx.onGridReady_3($event);
      })("selectionChanged", function FollowupComponent_Template_ag_grid_angular_selectionChanged_1589_listener($event) {
        return ctx.onSelectionChanged_closedClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1591, FollowupComponent_ng_template_1591_Template, 303, 34, "ng-template", null, 139, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1593, FollowupComponent_ng_template_1593_Template, 20, 4, "ng-template", null, 140, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1595, FollowupComponent_ng_template_1595_Template, 20, 4, "ng-template", null, 141, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1597, FollowupComponent_ng_template_1597_Template, 12, 1, "ng-template", null, 142, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1599, FollowupComponent_ng_template_1599_Template, 17, 0, "ng-template", null, 143, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1601, FollowupComponent_ng_template_1601_Template, 17, 0, "ng-template", null, 144, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1603, FollowupComponent_ng_template_1603_Template, 23, 16, "ng-template", null, 145, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1605, FollowupComponent_ng_template_1605_Template, 18, 15, "ng-template", null, 146, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1607, FollowupComponent_ng_template_1607_Template, 15, 7, "ng-template", null, 147, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1609, FollowupComponent_ng_template_1609_Template, 15, 7, "ng-template", null, 148, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1611, FollowupComponent_ng_template_1611_Template, 15, 7, "ng-template", null, 149, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1613, FollowupComponent_ng_template_1613_Template, 9, 14, "ng-template", null, 150, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.days);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.assigned_target);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.achieved_target);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.achi_targ_per);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1041);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_Revoked);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCollapsed_Revoked);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_Revoked);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", ctx.isCollapsed_Revoked)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.reassignedClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.selectedReAssigin)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.reassignedSelectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.reassigned_select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.reassignedClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.reassigned_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.reassignedSelected == false && ctx.reassigned_selected_val != "" && ctx.reassigned_selected_val != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.search_value_reworks);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_reworked);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.user_role != 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.user_role != 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_Grid2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCollapsed_Grid2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_Grid2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", ctx.isCollapsed_Grid2)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("columnDefs", ctx.columnDefs2)("gridOptions", ctx.gridOptions2)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1463, 118, ctx.workorder_table, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](121, _c9, ctx.pages, ctx.total_claims)));
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
//# sourceMappingURL=src_app_lazy-followup_lazy-followup_module_ts.9a0280cd06fda1f7.js.map