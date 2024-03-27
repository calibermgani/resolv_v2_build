"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_lazy-ca_lazy-ca_module_ts"],{

/***/ 7075:
/*!*****************************************************************************!*\
  !*** ./src/app/components/client-assistance/client-assistance.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAssistanceComponent": () => (/* binding */ ClientAssistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _Services_followup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/followup.service */ 4679);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../excel.service */ 6249);
/* harmony import */ var _Services_export_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/export-functions.service */ 301);
/* harmony import */ var _Services_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/notify.service */ 5710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);
/* harmony import */ var _Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/notes-handler.service */ 8997);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../claim-op-footer/claim-op-footer.component */ 6195);
/* harmony import */ var _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followup-template/followup-template.component */ 5286);
/* harmony import */ var _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../followup-view/followup-view.component */ 6868);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-tooltip-directive */ 7762);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-select-dropdown */ 3277);























const _c0 = function (a0, a1) {
  return {
    from_age: a0,
    to_age: a1
  };
};
function ClientAssistanceComponent_option_693_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c0, agerange_r33.from_age, agerange_r33.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](agerange_r33.from_age + "-" + agerange_r33.to_age);
  }
}
function ClientAssistanceComponent_div_740_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "a", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_div_740_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const res_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.onselectvalue(res_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](res_r35);
  }
}
function ClientAssistanceComponent_div_740_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ClientAssistanceComponent_div_740_div_1_Template, 3, 1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.results);
  }
}
function ClientAssistanceComponent_span_766_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span");
  }
}
function ClientAssistanceComponent_tr_814_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 207)(1, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.touch);
  }
}
function ClientAssistanceComponent_tr_814_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 207)(1, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.touch);
  }
}
function ClientAssistanceComponent_tr_814_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.claim_no);
  }
}
function ClientAssistanceComponent_tr_814_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, tab_dat_r38.dos, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_tr_814_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.age);
  }
}
function ClientAssistanceComponent_tr_814_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.acct_no);
  }
}
function ClientAssistanceComponent_tr_814_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.patient_name);
  }
}
function ClientAssistanceComponent_tr_814_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.prim_ins_name);
  }
}
function ClientAssistanceComponent_tr_814_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.statuscode);
  }
}
function ClientAssistanceComponent_tr_814_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.substatuscode);
  }
}
function ClientAssistanceComponent_tr_814_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, tab_dat_r38.total_charges, "1.2-2"), "");
  }
}
function ClientAssistanceComponent_tr_814_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, tab_dat_r38.total_ar, "1.2-2"), "");
  }
}
function ClientAssistanceComponent_tr_814_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.assigned_to);
  }
}
function ClientAssistanceComponent_tr_814_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_dat_r38.created_ats);
  }
}
function ClientAssistanceComponent_tr_814_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_814_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, tab_dat_r38.created_at, "dd/MM/yyyy"));
  }
}
function ClientAssistanceComponent_tr_814_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 197)(1, "td", 198)(2, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_814_Template_input_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r85);
      const tab_dat_r38 = restoredCtx.$implicit;
      const i_r39 = restoredCtx.index;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r84.selected($event, tab_dat_r38.claim_no, i_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ClientAssistanceComponent_tr_814_td_3_Template, 3, 1, "td", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ClientAssistanceComponent_tr_814_td_4_Template, 3, 1, "td", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_814_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r85);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](919);
      ctx_r86.openModal(_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r86.claimslection(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClientAssistanceComponent_tr_814_span_6_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ClientAssistanceComponent_tr_814_span_7_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ClientAssistanceComponent_tr_814_span_9_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ClientAssistanceComponent_tr_814_span_10_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ClientAssistanceComponent_tr_814_span_12_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ClientAssistanceComponent_tr_814_span_13_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ClientAssistanceComponent_tr_814_span_14_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_814_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r85);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](919);
      ctx_r87.open(_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r87.claimslection(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ClientAssistanceComponent_tr_814_span_16_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ClientAssistanceComponent_tr_814_span_17_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ClientAssistanceComponent_tr_814_span_19_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, ClientAssistanceComponent_tr_814_span_20_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, ClientAssistanceComponent_tr_814_span_22_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, ClientAssistanceComponent_tr_814_span_23_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ClientAssistanceComponent_tr_814_span_25_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, ClientAssistanceComponent_tr_814_span_26_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, ClientAssistanceComponent_tr_814_span_28_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, ClientAssistanceComponent_tr_814_span_29_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ClientAssistanceComponent_tr_814_span_31_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, ClientAssistanceComponent_tr_814_span_32_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "td", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, ClientAssistanceComponent_tr_814_span_34_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, ClientAssistanceComponent_tr_814_span_35_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, ClientAssistanceComponent_tr_814_span_37_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, ClientAssistanceComponent_tr_814_span_38_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, ClientAssistanceComponent_tr_814_span_40_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, ClientAssistanceComponent_tr_814_span_41_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, ClientAssistanceComponent_tr_814_span_43_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, ClientAssistanceComponent_tr_814_span_44_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_dat_r38 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx_r3.selected_claim_nos.includes(tab_dat_r38.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.touch < ctx_r3.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.touch >= ctx_r3.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.claim_no == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.claim_no != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.dos == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.dos != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.age == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.age != null && tab_dat_r38.age > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.age <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.acct_no == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.acct_no != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.patient_name == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.patient_name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.prim_ins_name == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.prim_ins_name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.statuscode == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.statuscode != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.substatuscode == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.substatuscode != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.total_charges == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.total_charges != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.total_ar == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.total_ar != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !tab_dat_r38.assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !tab_dat_r38.created_ats);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.created_ats);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !tab_dat_r38.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_dat_r38.created_at);
  }
}
function ClientAssistanceComponent_tr_816_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 210)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_div_820_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 211)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Showing ", ctx_r5.skip_rows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("to ", ctx_r5.current_rows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" of ", ctx_r5.total_rows, " records");
  }
}
function ClientAssistanceComponent_div_821_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 211)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Showing 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " of 0 records");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_tr_909_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_909_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_909_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_909_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_909_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r94);
      const r_r88 = restoredCtx.$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](925);
      ctx_r93.open(_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r93.get_wo_details(r_r88.id, r_r88.work_order_name, r_r88.created));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ClientAssistanceComponent_tr_909_td_16_Template, 2, 0, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ClientAssistanceComponent_tr_909_td_17_Template, 2, 0, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ClientAssistanceComponent_tr_909_td_18_Template, 2, 0, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "i", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r88 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", r_r88.created, "/", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 13, r_r88.created_at, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](r_r88.work_order_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](r_r88.assigned_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](r_r88.due_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](r_r88.billed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](r_r88.ar_due);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](r_r88.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", r_r88.priority == "low");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", r_r88.priority == "high");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", r_r88.priority == "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("tooltip", r_r88.work_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r7.myOptions);
  }
}
function ClientAssistanceComponent_tr_911_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 218)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_ng_template_914_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 219)(1, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_914_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r99);
      const modal_r95 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r95.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "New Work Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 223)(7, "div", 129)(8, "form", 224, 225)(10, "div", 226)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Work Order Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 129)(15, "div", 228)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "input", 229, 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function ClientAssistanceComponent_ng_template_914_Template_input_focus_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r99);
      const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r97.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "label", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, " Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "label", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "input", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, " Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "input", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " High");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 237)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Work Order Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](37, "textarea", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 226)(39, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_914_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r99);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](917);
      ctx_r101.get_user_list();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r101.open(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "i", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, " Associates List");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 241)(43, "button", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_914_Template_button_click_43_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r99);
      const modal_r95 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r95.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_914_Template_button_click_45_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r99);
      const modal_r95 = restoredCtx.$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r103.create_workorder();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r95.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r10.workOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r10.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r96.valid || ctx_r10.assigned_claim_status == false);
  }
}
function ClientAssistanceComponent_ng_template_916_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r105.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r105.assigned_claim_nos, "");
  }
}
function ClientAssistanceComponent_ng_template_916_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 250)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Assigned Claims: 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r106.selected_claim_nos.length, "");
  }
}
function ClientAssistanceComponent_ng_template_916_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 250)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r107.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r107.assigned_claim_nos, "");
  }
}
function ClientAssistanceComponent_ng_template_916_tr_15_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td")(1, "input", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function ClientAssistanceComponent_ng_template_916_tr_15_td_6_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r114);
      const assts_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r112.manual_assign($event, assts_r109.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assts_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r110.assigned_data[assts_r109.id]);
  }
}
function ClientAssistanceComponent_ng_template_916_tr_15_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "input", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_916_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_916_tr_15_Template_input_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117);
      const assts_r109 = restoredCtx.$implicit;
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r116.select_associates($event, assts_r109.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClientAssistanceComponent_ng_template_916_tr_15_td_6_Template, 2, 1, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ClientAssistanceComponent_ng_template_916_tr_15_td_7_Template, 2, 0, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assts_r109 = ctx.$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", assts_r109.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", assts_r109.firstname, " ", assts_r109.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](assts_r109.assigned_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r108.selected_associates.includes(assts_r109.id) && ctx_r108.claim_assign_type == "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r108.selected_associates.includes(assts_r109.id) && ctx_r108.claim_assign_type == "Auto");
  }
}
function ClientAssistanceComponent_ng_template_916_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 219)(1, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_916_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r119);
      const modal_r104 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r104.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Users List");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 223)(7, "div", 129)(8, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ClientAssistanceComponent_ng_template_916_div_10_Template, 8, 2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ClientAssistanceComponent_ng_template_916_div_11_Template, 8, 1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ClientAssistanceComponent_ng_template_916_div_12_Template, 8, 2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "table", 246)(14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ClientAssistanceComponent_ng_template_916_tr_15_Template, 8, 6, "tr", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 241)(17, "span", 247)(18, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_916_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r119);
      const modal_r104 = restoredCtx.$implicit;
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r120.assign_type("Auto");
      ctx_r120.auto_assign_claims();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r104.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Auto Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_916_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r119);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r121.assign_type("Manual"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_916_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r119);
      const modal_r104 = restoredCtx.$implicit;
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r122.assign_claims();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r104.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r12.associate_error);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r12.associate_error, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.selected_claim_nos.length > 0 && ctx_r12.selected_claim_nos.length >= ctx_r12.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.selected_claim_nos.length > 0 && ctx_r12.selected_claim_nos.length < ctx_r12.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r12.users_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r12.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r12.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r12.selected_claim_nos.length == 0 || ctx_r12.selected_claim_nos.length < ctx_r12.assigned_claim_nos);
  }
}
function ClientAssistanceComponent_ng_template_918_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 255)(1, "a", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r137);
      const x_r135 = restoredCtx.$implicit;
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r136.selected_tab(x_r135.claim_no);
      ctx_r136.get_line_items(x_r135);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r136.check_reassign_alloc(x_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r137);
      const x_r135 = restoredCtx.$implicit;
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r138.close_tab(x_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r135 = ctx.$implicit;
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", x_r135.claim_no === ctx_r124.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "#", x_r135.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claim No: ", x_r135.claim_no, "");
  }
}
function ClientAssistanceComponent_ng_template_918_tr_122_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_tr_122_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r144);
      const x_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r142.referclaim(x_r139);
      ctx_r142.get_line_items(x_r139);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r142.check_reassign_alloc(x_r139));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 2, x_r139.dos, "MM/dd/yyyy"), " - ", x_r139.claim_no, "");
  }
}
function ClientAssistanceComponent_ng_template_918_tr_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ClientAssistanceComponent_ng_template_918_tr_122_td_1_Template, 3, 5, "td", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r140 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r140 < 3);
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r148.claim_clicked.admit_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r150.claim_clicked.discharge_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](x_r146.cpt);
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r146.ins_ar, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r146.total_ar_due, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_918_tr_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ClientAssistanceComponent_ng_template_918_tr_159_span_2_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ClientAssistanceComponent_ng_template_918_tr_159_span_3_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ClientAssistanceComponent_ng_template_918_tr_159_span_5_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClientAssistanceComponent_ng_template_918_tr_159_span_6_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ClientAssistanceComponent_ng_template_918_tr_159_span_8_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ClientAssistanceComponent_ng_template_918_tr_159_span_9_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ClientAssistanceComponent_ng_template_918_tr_159_span_11_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ClientAssistanceComponent_ng_template_918_tr_159_span_12_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ClientAssistanceComponent_ng_template_918_tr_159_span_14_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ClientAssistanceComponent_ng_template_918_tr_159_span_15_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td", 112)(19, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r146 = ctx.$implicit;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r126.claim_clicked.admit_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r126.claim_clicked.admit_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r126.claim_clicked.discharge_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r126.claim_clicked.discharge_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r146.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r146.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r146.ins_ar == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r146.ins_ar != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r146.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r146.total_ar_due != 0);
  }
}
function ClientAssistanceComponent_ng_template_918_div_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r160.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, x_r160.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", x_r160.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_918_div_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329)(1, "p", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 331)(1, "p", 326)(2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r161 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", y_r161.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, y_r161.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", y_r161.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_918_div_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329)(1, "p", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_a_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_a_211_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r163);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](923);
      ctx_r162.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r162.editnotes("client_notes_init", "none", ctx_r162.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r131.client_notes_data_list.includes(ctx_r131.claim_clicked.claim_no));
  }
}
function ClientAssistanceComponent_ng_template_918_div_216_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "i", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_216_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r166);
      const x_r164 = restoredCtx.$implicit;
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](923);
      ctx_r165.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r165.editnotes("clientnotes", x_r164.content, x_r164.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r164.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, x_r164.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", x_r164.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_918_div_217_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329)(1, "p", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r181.claim_clicked.admit_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r183.claim_clicked.discharge_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](x_r179.cpt);
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r179.ins_ar, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r179.total_ar_due, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_tr_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_2_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_3_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_5_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_6_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_8_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_9_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_11_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_12_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_14_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ClientAssistanceComponent_ng_template_918_div_297_tr_127_span_15_Template, 3, 4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td", 112)(19, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r179 = ctx.$implicit;
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r168.claim_clicked.admit_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r168.claim_clicked.admit_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r168.claim_clicked.discharge_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r168.claim_clicked.discharge_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r179.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r179.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r179.ins_ar == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r179.ins_ar != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r179.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r179.total_ar_due != 0);
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_span_143_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_span_143_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r195);
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r194.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "F.Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_span_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ClientAssistanceComponent_ng_template_918_div_297_span_143_a_1_Template, 4, 0, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r169.edit_permission == true);
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_div_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r196.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, x_r196.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", x_r196.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_div_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329)(1, "p", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 331)(1, "p", 326)(2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", y_r197.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, y_r197.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", y_r197.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_div_173_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329)(1, "p", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_a_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_a_183_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r199);
      const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](923);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r198.open(_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx_r174.client_notes_data_list.includes(x_r167.claim_no));
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_div_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 325)(1, "p", 326)(2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "i", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_div_192_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r203);
      const x_r201 = restoredCtx.$implicit;
      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](923);
      ctx_r202.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r202.editnotes("clientnotes", x_r201.content, x_r201.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r201.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, x_r201.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", x_r201.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_div_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329)(1, "p", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_span_199_Template(rf, ctx) {
  if (rf & 1) {
    const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 297)(3, "button", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_span_199_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r205);
      const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r204.modalRef == null ? null : ctx_r204.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_span_200_Template(rf, ctx) {
  if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span")(1, "div", 346)(2, "button", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_span_200_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r208);
      const x_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r206.close_tab(x_r167));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_ng_template_918_div_297_Template(rf, ctx) {
  if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 334)(1, "div", 260)(2, "div", 129)(3, "div", 261)(4, "div", 15)(5, "div", 262)(6, "div", 122)(7, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 24)(11, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 264)(14, "div", 97)(15, "div", 2)(16, "div", 98)(17, "div", 21)(18, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 24)(22, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 27)(25, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "svg", 266)(27, "desc", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "defs", 30)(30, "path", 74)(31, "path", 75)(32, "path", 76)(33, "path", 77)(34, "path", 78)(35, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "text", 80)(37, "tspan", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "text", 82)(40, "tspan", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 127)(43, "div", 2)(44, "div", 267)(45, "table", 268)(46, "tbody")(47, "tr")(48, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "tr")(53, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "tr")(58, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "tr")(64, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 270)(69, "table", 268)(70, "tbody")(71, "tr")(72, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "tr")(80, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "tr")(85, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 275)(91, "div", 276)(92, "div", 15)(93, "div", 262)(94, "div", 122)(95, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](96, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "div", 24)(99, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](100, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "div", 127)(102, "div", 104)(103, "table", 105)(104, "thead")(105, "tr")(106, "th", 112)(107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "th", 112)(110, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "th", 112)(113, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](114, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "th", 112)(116, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "th", 112)(119, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](120, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "th", 112)(122, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](124, "th", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, "Touches");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](127, ClientAssistanceComponent_ng_template_918_div_297_tr_127_Template, 21, 10, "tr", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](128, "div", 277)(129, "div", 24)(130, "a", 335)(131, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](132, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "a", 278)(134, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](135, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](136, "a", 280)(137, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](138, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_Template_a_click_139_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r210);
      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r209.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](140, "i", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](142, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](143, ClientAssistanceComponent_ng_template_918_div_297_span_143_Template, 2, 1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](144, "div", 281)(145, "div", 276)(146, "div", 15)(147, "div", 262)(148, "div", 122)(149, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](150, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](151, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](152, "div", 24)(153, "button", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](154, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](155, "div", 283)(156, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](157, ClientAssistanceComponent_ng_template_918_div_297_div_157_Template, 10, 6, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](158, ClientAssistanceComponent_ng_template_918_div_297_div_158_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](159, "div", 286)(160, "div", 276)(161, "div", 15)(162, "div", 262)(163, "div", 122)(164, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](165, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](166, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](167, "div", 24)(168, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](169, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](170, "div", 288)(171, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](172, ClientAssistanceComponent_ng_template_918_div_297_div_172_Template, 10, 6, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](173, ClientAssistanceComponent_ng_template_918_div_297_div_173_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](174, "div", 290)(175, "div", 276)(176, "div", 15)(177, "div", 262)(178, "div", 122)(179, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](180, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](181, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](182, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](183, ClientAssistanceComponent_ng_template_918_div_297_a_183_Template, 4, 1, "a", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](184, "a", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_div_297_Template_a_click_184_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r210);
      const x_r167 = restoredCtx.$implicit;
      const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](923);
      ctx_r211.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r211.editnotes("client_notes_init", "none", x_r167));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](185, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](187, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](188, "button", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](189, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](190, "div", 283)(191, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](192, ClientAssistanceComponent_ng_template_918_div_297_div_192_Template, 11, 6, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](193, ClientAssistanceComponent_ng_template_918_div_297_div_193_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "div", 294)(195, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](196, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](197, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](198, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](199, ClientAssistanceComponent_ng_template_918_div_297_span_199_Template, 5, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](200, ClientAssistanceComponent_ng_template_918_div_297_span_200_Template, 4, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](201, "div", 299)(202, "div", 300)(203, "div", 2)(204, "h4", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](205, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](206, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](207, "form", 302)(208, "div", 303)(209, "div", 304)(210, "div", 305)(211, "div", 308)(212, "div", 226)(213, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](214, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](215, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](216, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](217, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "div", 304)(219, "div", 305)(220, "div", 308)(221, "div", 226)(222, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](223, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](225, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](226, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "div", 304)(228, "div", 305)(229, "div", 308)(230, "div", 226)(231, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](232, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](233, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](234, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](235, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](236, "div", 304)(237, "div", 305)(238, "div", 309)(239, "div", 226)(240, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](241, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](242, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](243, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](244, "select", 310)(245, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](246, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](247, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](248, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](249, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](250, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](251, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](252, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "span", 311)(254, "span", 312)(255, "span", 340)(256, "span", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](257, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](258, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](259, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](260, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r167 = ctx.$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", x_r167.claim_no === ctx_r134.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", x_r167.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r167.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r167.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](62, 24, x_r167.dob, "MM/dd/yyyy"), ", ", x_r167.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r167.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", x_r167.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r167.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r134.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r134.curr_reassigned_claims.includes(ctx_r134.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r134.active_refer_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r134.active_refer_process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r134.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r134.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r134.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r134.client_notes_data_list.includes(x_r167.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r134.active_refer_client);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r134.active_refer_client.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "x", x_r167.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "y", x_r167.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r134.refer_claim_editable == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r134.refer_claim_editable == "false");
  }
}
function ClientAssistanceComponent_ng_template_918_Template(rf, ctx) {
  if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 219)(1, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r213);
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r212.modalRef == null ? null : ctx_r212.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r212.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ul", 254)(5, "li", 255)(6, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r213);
      const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r214.selected_tab("maintab");
      ctx_r214.get_line_items(ctx_r214.claim_clicked);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r214.check_reassign_alloc(ctx_r214.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ClientAssistanceComponent_ng_template_918_li_9_Template, 7, 4, "li", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 258)(11, "div", 259)(12, "div", 260)(13, "div", 129)(14, "div", 261)(15, "div", 15)(16, "div", 262)(17, "div", 122)(18, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 24)(22, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 264)(25, "div", 97)(26, "div", 2)(27, "div", 98)(28, "div", 21)(29, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 24)(33, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 27)(36, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "svg", 266)(38, "desc", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "defs", 30)(41, "path", 74)(42, "path", 75)(43, "path", 76)(44, "path", 77)(45, "path", 78)(46, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "text", 80)(48, "tspan", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "text", 82)(51, "tspan", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "svg", 266)(54, "desc", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](56, "defs", 30)(57, "path", 74)(58, "path", 75)(59, "path", 76)(60, "path", 77)(61, "path", 78)(62, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "text", 80)(64, "tspan", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "text", 82)(67, "tspan", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 127)(70, "div", 2)(71, "div", 267)(72, "table", 268)(73, "tbody")(74, "tr")(75, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "tr")(80, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "tr")(85, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](89, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "tr")(91, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "div", 270)(96, "table", 268)(97, "tbody")(98, "tr")(99, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](100, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "tr")(107, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](111, "tr")(112, "td", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](116, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "div", 272)(118, "h4", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "table", 274)(121, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](122, ClientAssistanceComponent_ng_template_918_tr_122_Template, 2, 1, "tr", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "div", 275)(124, "div", 276)(125, "div", 15)(126, "div", 262)(127, "div", 122)(128, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](129, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](130, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](131, "div", 24)(132, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](133, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](134, "div", 127)(135, "div", 104)(136, "table", 105)(137, "thead")(138, "tr")(139, "th", 112)(140, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](141, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "th", 112)(143, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](144, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](145, "th", 112)(146, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](147, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](148, "th", 112)(149, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](150, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](151, "th", 112)(152, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](153, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](154, "th", 112)(155, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](156, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](157, "th", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](158, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](159, ClientAssistanceComponent_ng_template_918_tr_159_Template, 21, 10, "tr", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](160, "div", 277)(161, "div", 24)(162, "a", 278)(163, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](164, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](165, "a", 280)(166, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](167, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](168, "div", 281)(169, "div", 276)(170, "div", 15)(171, "div", 262)(172, "div", 122)(173, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](174, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](175, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](176, "div", 24)(177, "button", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](178, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](179, "div", 283)(180, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](181, ClientAssistanceComponent_ng_template_918_div_181_Template, 10, 6, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](182, ClientAssistanceComponent_ng_template_918_div_182_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](183, "div", 286)(184, "div", 276)(185, "div", 15)(186, "div", 262)(187, "div", 122)(188, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](189, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](190, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](191, "div", 24)(192, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](193, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "div", 288)(195, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](196, ClientAssistanceComponent_ng_template_918_div_196_Template, 10, 6, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](197, ClientAssistanceComponent_ng_template_918_div_197_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](198, "div", 290)(199, "div", 276)(200, "div", 15)(201, "div", 262)(202, "div", 122)(203, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](204, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](205, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](206, "div", 24)(207, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_Template_a_click_207_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r213);
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](923);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r215.open(_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](208, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](209, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](210, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](211, ClientAssistanceComponent_ng_template_918_a_211_Template, 4, 1, "a", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](212, "button", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](213, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](214, "div", 283)(215, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](216, ClientAssistanceComponent_ng_template_918_div_216_Template, 11, 6, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](217, ClientAssistanceComponent_ng_template_918_div_217_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "div", 294)(219, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](220, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](221, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](222, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](223, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "div", 297)(225, "button", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_918_Template_button_click_225_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r213);
      const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r216.modalRef == null ? null : ctx_r216.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](226, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "div", 299)(228, "div", 300)(229, "div", 2)(230, "h4", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](231, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](232, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](233, "form", 302)(234, "div", 303)(235, "div", 304)(236, "div", 305)(237, "div", 306)(238, "div", 226)(239, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](241, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](242, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](243, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](244, "div", 304)(245, "div", 305)(246, "div", 308)(247, "div", 226)(248, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](249, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](250, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](251, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](252, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "div", 304)(254, "div", 305)(255, "div", 308)(256, "div", 226)(257, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](258, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](259, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](260, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](261, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](262, "div", 304)(263, "div", 305)(264, "div", 309)(265, "div", 226)(266, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](267, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](268, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](269, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](270, "select", 310)(271, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](272, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](273, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](274, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](275, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](276, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](277, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](278, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](279, "span", 311)(280, "span", 312)(281, "span", 313)(282, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](283, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](284, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](285, "b", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](286, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](287, "form", 302)(288, "div", 127)(289, "div", 129)(290, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](291, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](292, "textarea", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](293, "button", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](294, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](295, "button", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](296, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](297, ClientAssistanceComponent_ng_template_918_div_297_Template, 261, 27, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](298, "div", 241);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r14.main_tab == ctx_r14.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r14.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r14.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r14.claim_clicked.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r14.claim_clicked.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](89, 24, ctx_r14.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r14.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](":", ctx_r14.claim_clicked.ssn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r14.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r14.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.process_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r14.process_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx_r14.claim_notes == null ? null : ctx_r14.claim_notes.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx_r14.client_notes_data_list.includes(ctx_r14.claim_clicked.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r14.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.client_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r14.client_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.refer_claim_det);
  }
}
function ClientAssistanceComponent_ng_template_920_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_920_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r222);
      const modal_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r221.savenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r217.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r218.valid);
  }
}
function ClientAssistanceComponent_ng_template_920_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_920_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r225);
      const modal_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r224.updatenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r217.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r218.valid);
  }
}
function ClientAssistanceComponent_ng_template_920_Template(rf, ctx) {
  if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 219)(1, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_920_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r228);
      const modal_r217 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r217.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 223)(7, "div", 294)(8, "form", 224, 225)(10, "div", 2)(11, "div", 15)(12, "div", 129)(13, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "textarea", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 241)(16, "button", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_920_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r228);
      const modal_r217 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r217.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ClientAssistanceComponent_ng_template_920_button_18_Template, 2, 1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ClientAssistanceComponent_ng_template_920_button_19_Template, 2, 1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r16.processNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r16.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r16.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r16.editnote_value);
  }
}
function ClientAssistanceComponent_ng_template_922_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_922_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r235);
      const modal_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r234.savenotes("client_notes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r230.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r231.valid);
  }
}
function ClientAssistanceComponent_ng_template_922_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_922_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r238);
      const modal_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r237.updatenotes("client_notes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r230.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r231.valid);
  }
}
function ClientAssistanceComponent_ng_template_922_Template(rf, ctx) {
  if (rf & 1) {
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 219)(1, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_922_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r241);
      const modal_r230 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r230.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 223)(7, "div", 294)(8, "form", 224, 225)(10, "div", 2)(11, "div", 15)(12, "div", 129)(13, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "textarea", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 241)(16, "button", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_922_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r241);
      const modal_r230 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r230.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ClientAssistanceComponent_ng_template_922_button_18_Template, 2, 1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ClientAssistanceComponent_ng_template_922_button_19_Template, 2, 1, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r18.clientNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r18.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r18.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.editnote_value);
  }
}
function ClientAssistanceComponent_ng_template_924_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 207)(2, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wo_det_r245 = ctx.$implicit;
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 14, wo_det_r245.dos, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.rendering_prov);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.responsibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.total_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.total_ar);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.claim_Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r245.claim_note);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"]("", wo_det_r245.assigned_to_name, "/", ctx_r244.wo_created, "/", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](27, 17, wo_det_r245.created_at, "dd-MM"), "");
  }
}
function ClientAssistanceComponent_ng_template_924_Template(rf, ctx) {
  if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 219)(1, "button", 352)(2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 260)(7, "div", 129)(8, "div", 261)(9, "div", 15)(10, "div", 262)(11, "div", 122)(12, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Claims List");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 24)(16, "p", 152)(17, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_924_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r247);
      const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r246.wo_export_function("print"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_924_Template_i_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r247);
      const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r248.wo_export_function("excel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "i", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_924_Template_i_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r247);
      const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r249.wo_export_function("PDF"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 127)(25, "div", 129)(26, "div", 179)(27, "table", 105)(28, "thead")(29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Claim No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "DOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "Patient Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "Rendering Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Responsibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Total Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "Total AR");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Claim Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Claim Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Assigned To/By/Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, ClientAssistanceComponent_ng_template_924_tr_54_Template, 28, 20, "tr", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](55, "div", 241);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r20.wo_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r20.wo_details);
  }
}
function ClientAssistanceComponent_ng_template_926_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Auth No : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.auth_no) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.auth_no : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Admit Date : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.admit_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 10, ctx_r22.claim_data == null ? null : ctx_r22.claim_data.admit_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Discharge Date : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.discharge_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 13, ctx_r22.claim_data == null ? null : ctx_r22.claim_data.discharge_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" CPT : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.cpt) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.cpt : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ICD : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.icd) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.icd : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Modifiers : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.modifiers) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.modifiers : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Units : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.units) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.units : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Facility : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.facility) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.facility : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Billing Provider : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.billing_prov) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.billing_prov : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Insurance Type : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.insurance_type) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.insurance_type : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_928_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Guarantor : ", ctx_r24.claim_data.guarantor ? ctx_r24.claim_data.guarantor : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" DOB : ", ctx_r24.claim_data.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 12, ctx_r24.claim_data.dob, "MM/dd/yyyy") : "-Nil-", " | Age : ", ctx_r24.calculateAge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" SSN : ", ctx_r24.claim_data.ssn ? ctx_r24.claim_data.ssn : "-Nil-", " | Gender : ", ctx_r24.claim_data.gender ? ctx_r24.claim_data.gender : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx_r24.claim_data.address_1 ? ctx_r24.claim_data.address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx_r24.claim_data.address_2 ? ctx_r24.claim_data.address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" City : ", ctx_r24.claim_data.city ? ctx_r24.claim_data.city : "-Nil-", " | State : ", ctx_r24.claim_data.state ? ctx_r24.claim_data.state : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Zip Code : ", ctx_r24.claim_data.zipcode ? ctx_r24.claim_data.zipcode : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" Phone Number : ", ctx_r24.claim_data.phone_no ? ctx_r24.claim_data.phone_no : "-Nil-", " Employer : ", ctx_r24.claim_data.employer ? ctx_r24.claim_data.employer : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_930_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Primary Policy ID : ", ctx_r26.claim_data.prim_pol_id ? ctx_r26.claim_data.prim_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary Group ID : ", ctx_r26.claim_data.prim_group_id ? ctx_r26.claim_data.prim_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Primary Address 1 : ", ctx_r26.claim_data.prim_address_1 ? ctx_r26.claim_data.prim_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary Address 2 : ", ctx_r26.claim_data.prim_address_2 ? ctx_r26.claim_data.prim_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary City : ", ctx_r26.claim_data.prim_city ? ctx_r26.claim_data.prim_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary State : ", ctx_r26.claim_data.prim_state ? ctx_r26.claim_data.prim_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary Zip Code : ", ctx_r26.claim_data.prim_zipcode ? ctx_r26.claim_data.prim_zipcode : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_932_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Secondary Policy ID : ", ctx_r28.claim_data.sec_pol_id ? ctx_r28.claim_data.sec_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary Group ID : ", ctx_r28.claim_data.sec_group_id ? ctx_r28.claim_data.sec_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Secondary Address 1 : ", ctx_r28.claim_data.sec_address_1 ? ctx_r28.claim_data.sec_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary Address 2 : ", ctx_r28.claim_data.sec_address_2 ? ctx_r28.claim_data.sec_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary City : ", ctx_r28.claim_data.sec_city ? ctx_r28.claim_data.sec_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary State : ", ctx_r28.claim_data.sec_state ? ctx_r28.claim_data.sec_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary Zip Code : ", ctx_r28.claim_data.sec_zipcode, "");
  }
}
function ClientAssistanceComponent_ng_template_934_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Tertiary Policy ID : ", ctx_r30.claim_data.ter_pol_id ? ctx_r30.claim_data.ter_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary Group ID : ", ctx_r30.claim_data.ter_group_id ? ctx_r30.claim_data.ter_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Tertiary Address 1 : ", ctx_r30.claim_data.ter_address_1 ? ctx_r30.claim_data.ter_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary Address 2 : ", ctx_r30.claim_data.ter_address_2 ? ctx_r30.claim_data.ter_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary City : ", ctx_r30.claim_data.ter_city ? ctx_r30.claim_data.ter_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary State : ", ctx_r30.claim_data.ter_state ? ctx_r30.claim_data.ter_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary Zip Code : ", ctx_r30.claim_data.ter_zipcode ? ctx_r30.claim_data.ter_zipcode : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_936_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Patient AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 2, ctx_r32.claim_data.pat_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 5, ctx_r32.claim_data.pat_ar, "1.2-2") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Insurance AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 8, ctx_r32.claim_data.ins_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 11, ctx_r32.claim_data.ins_ar, "1.2-2") : "-Nil-", "");
  }
}
const _c1 = function (a2, a3) {
  return {
    id: "claims",
    itemsPerPage: 15,
    currentPage: a2,
    totalItems: a3
  };
};
const _c2 = function (a2, a3) {
  return {
    id: "wo_foo",
    itemsPerPage: 15,
    currentPage: a2,
    totalItems: a3
  };
};
class ClientAssistanceComponent {
  constructor(formBuilder, Jarwis, setus, loadingBar, modalService, follow, toastr, excelService, export_handler, notify_service, datepipe, date_config, calendar, auth, notes_hadler, modal) {
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
    this.auth = auth;
    this.notes_hadler = notes_hadler;
    this.modal = modal;
    this.createWork = "";
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
    this.isopend = true;
    this.selectedAge = null;
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
    this.status_codes_data = [];
    this.sub_status_codes_data = [];
    this.decimal_pattern = "^\[0-9]+(\.[0-9][0-9])\-\[0-9]+(\.[0-9][0-9])?$";
    this.isValueSelected = false;
    this.results = [] = [];
    this.searchResults = [] = [];
    this.selected_val = null;
    this.table_data = [];
    this.closeResult = '';
    this.pages = '';
    this.tab_load = false;
    this.editnote_value = null;
    this.completed_claims = [];
    this.allocated_claims = [];
    this.sortByAsc = true;
    this.export_data = [];
    //Check All function
    this.check_all = [];
    this.selected_claims = [];
    this.selected_claim_nos = [];
    //Manage Selected claims
    this.assigned_claim_nos = 0;
    //Get Client details
    this.users_details = [];
    this.assigned_claims_details = [];
    this.claim_assign_type = null;
    this.selected_associates = [];
    this.associate_error_handler = [];
    this.assigned_data = [];
    this.assigned_claim_status = false;
    this.assigned_claim_details = [];
    //   public export_excel_data(data,type)
    //   {
    //     this.export_data=[];
    //     if(type=='excel')
    //     {
    //       let ca_data=data.data;
    //       let op_json={};
    //       for(let i=0;i<ca_data.length;i++)
    //       {
    //     op_json=[];
    //         op_json['Acct#']=ca_data[i]['acct_no'];
    //         op_json['Claim#']=ca_data[i]['claim_no'];
    //         op_json['Patient Name']=ca_data[i]['patient_name'];
    //         op_json['DOS']=ca_data[i]['dos'];
    //         op_json['Claim Age']=ca_data[i]['claim_age'];
    //         op_json['Insurance']=ca_data[i]['prim_ins_name'];
    //         op_json['Billed']='3,745.00';
    //         op_json['AR Due']='2,980.00';
    //         op_json['Sub-Status Code']=ca_data[i]['sub_status'];
    //         this.export_data.push(op_json);
    //       }
    //       this.excelService.exportAsExcelFile(this.export_data, 'sample');
    //     }
    // else {
    //   let ca_data=data.data;
    //   for(let i=0;i<ca_data.length;i++)
    //   {
    //          let op_json=[];
    //   op_json.push(ca_data[i]['acct_no']);
    //   op_json.push(ca_data[i]['claim_no']);
    //   op_json.push(ca_data[i]['patient_name']);
    //   op_json.push(ca_data[i]['dos']);
    //   op_json.push(ca_data[i]['claim_age']);
    //   op_json.push(ca_data[i]['prim_ins_name']);
    //   op_json.push('3,745.00');
    //   op_json.push('3,745.00');
    //   op_json.push(ca_data[i]['sub_status']);
    //   this.export_data.push(op_json);
    //   }
    //    if(type == 'PDF'){
    //     this.generatePDF();
    //     }
    //     else if(type == 'print')
    //     {
    //       this.print_pdf();
    //       }
    //       }
    //   }
    // public print_pdf()
    // {
    //   let doc: any = new jsPDF('l', 'pt');
    //   doc.autoTable({
    //     head: [['Acct#','Claim#','Patient Name','DOS','Claim Age','Insurance','Billed','AR Due','Sub-Status Code']],
    //     body: this.export_data
    //   });
    //   doc.autoPrint();
    // window.open(doc.output('bloburl'), '_blank');
    // }
    //   public generatePDF()
    //   {
    // // console.log(this.export_data);
    //     let doc: any = new jsPDF('l', 'pt');
    //     doc.autoTable({
    //       head: [['Acct#','Claim#','Patient Name','DOS','Claim Age','Insurance','Billed','AR Due','Sub-Status Code']],
    //       body: this.export_data
    //     });
    // //     doc.autoPrint();
    // // window.open(doc.output('bloburl'), '_blank');
    //     doc.save('table.pdf');
    //   }
    //Create Work Order Tab Functions*****
    this.table_fields = [];
    this.table_datas = [];
    this.claim_clicked = [];
    this.claim_related = [];
    this.process_notes = [];
    this.claim_notes = [];
    this.client_notes = [];
    //Refer Claim Clicked Action
    this.refer_claim_det = [];
    this.refer_claim_no = [];
    this.refer_claim_notes = [];
    this.refer_process_notes = [];
    this.refer_qc_notes = [];
    this.refer_client_notes = [];
    this.main_tab = true;
    this.active_tab = [];
    this.active_refer_claim = [];
    this.active_refer_process = [];
    this.active_refer_qc = [];
    this.active_claim = [];
    this.active_refer_client = [];
    this.refer_claim_notes_nos = [];
    this.refer_process_notes_nos = [];
    this.refer_qc_notes_nos = [];
    this.refer_client_notes_nos = [];
    this.refer_claim_editable = 'false';
    this.client_notes_data = [];
    this.client_notes_data_list = [];
    this.qc_notes = [];
    //Edit Notes
    this.edit_noteid = [];
    this.initial_edit = false;
    //Work Order table Formation
    this.wo_page_number = 1;
    this.wo_details = [];
    this.line_data = [];
    this.line_item_data = [];
    this.edit_permission = false;
    this.reassign_claim = [];
    this.curr_reassigned_claims = [];
    this.reassign_allocation = true;
    // set_prac_settings(data)
    // {
    //   let prac_data=data.data;
    //   this.touch_count=prac_data.touch_limit;
    //  //  console.log(this.touch_count);
    // }
    this.myOptions = {
      'placement': 'right',
      'hide-delay': 3000,
      'theme': 'light'
    };
    //Red Alerrt Box
    this._opened = false;
    this.isOpen = false;
    this._positionNum = 0;
    this._modeNum = 1;
    this._MODES = ['push'];
    this._POSITIONS = ['right'];
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
    this.observalble = this.setus.update_edit_perm().subscribe(message => {
      this.check_edit_permission(message);
    });
    this.response_data = this.notes_hadler.get_response_data('CA').subscribe(message => {
      this.collect_response(message);
    });
    this.alwaysShowCalendars = true;
  }
  claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, claim_searh, search) {
    this.search = search;
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, claim_searh, search);
  }
  order_list(type, sort_type, sorting_name, sorting_method, claim_searh, search) {
    this.sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, search);
    }
  }
  getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, claim_searh, search) {
    this.tab_load = true;
    if (type == 'wo') {
      this.pages = page;
    } else if (type == 'completed') {
      this.comp_pages = page;
    } else if (type == 'allocated') {
      this.alloc_pages = page;
    }
    //this.pages=page;
    let page_count = 15;
    let searchs = this.search;
    console.log(searchs);
    if (sorting_name == 'null' && searchs != 'search') {
      console.log('test');
      this.Jarwis.get_ca_claims(this.setus.getId(), page, page_count, type, sort_data, sort_type, sorting_name, sorting_method, null, search).subscribe(data => this.form_table(data, type), error => this.handleError(error));
    } else if (searchs == 'search') {
      console.log(searchs);
      if (this.claimsFind.value.dos.startDate != null && this.claimsFind.value.dos.endDate != null) {
        console.log(this.claimsFind.controls['dos'].value);
        this.claimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.claimsFind.value.dos.startDate._d), 'yyyy-MM-dd');
        this.claimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.claimsFind.value.dos.endDate._d), 'yyyy-MM-dd');
      }
      if (this.claimsFind.value.date.startDate != null && this.claimsFind.value.date.endDate != null) {
        console.log(this.claimsFind.controls['date'].value);
        this.claimsFind.value.date.startDate = this.datepipe.transform(new Date(this.claimsFind.value.date.startDate._d), 'yyyy-MM-dd');
        this.claimsFind.value.date.endDate = this.datepipe.transform(new Date(this.claimsFind.value.date.endDate._d), 'yyyy-MM-dd');
      }
      if (this.claimsFind.value.bill_submit_date.startDate != null && this.claimsFind.value.bill_submit_date.endDate != null) {
        this.claimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.claimsFind.value.bill_submit_date.startDate._d), 'yyyy-MM-dd');
        this.claimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.claimsFind.value.bill_submit_date.endDate._d), 'yyyy-MM-dd');
      }
      if (this.claimsFind.value.followup_date.startDate != null && this.claimsFind.value.followup_date.endDate != null) {
        this.claimsFind.value.followup_date.startDate = this.datepipe.transform(new Date(this.claimsFind.value.followup_date.startDate._d), 'yyyy-MM-dd');
        this.claimsFind.value.followup_date.endDate = this.datepipe.transform(new Date(this.claimsFind.value.followup_date.endDate._d), 'yyyy-MM-dd');
      }
      this.Jarwis.get_ca_claims(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.sorting_name, this.sortByAsc, this.claimsFind.value, this.search).subscribe(data => this.form_table(data, type), error => this.handleError(error));
    } else {
      this.Jarwis.get_ca_claims(this.setus.getId(), page, page_count, type, this.sortByAsc, sort_type, this.sorting_name, this.sortByAsc, null, search).subscribe(data => this.form_table(data, type), error => this.handleError(error));
    }
  }
  form_table(data, type) {
    console.log(type);
    if (type == "wo") {
      this.table_data = data.data;
      console.log(this.table_data);
      this.selected_table_data = data.selected_claim_data;
      this.total_claims = data.count;
      // let ca_data=this.table_data;
      //this.total=data.total;
      this.current_totals = data.current_total;
      this.skips = data.skip + 1;
      this.skip_rows = this.skips;
      this.current_rows = this.skips + this.current_totals - 1;
      this.total_rows = data.count;
    } else if (data.type == "wo") {
      this.table_data = data.data;
      let agedata = data.data.age;
      console.log(agedata);
      this.selected_table_data = data.selected_claim_data;
      this.total_claims = data.count;
      // let ca_data=this.table_data;
      //this.total=data.total;
      this.current_totals = data.current_total;
      this.skips = data.skip + 1;
      this.skip_rows = this.skips;
      this.current_rows = this.skips + this.current_totals - 1;
      this.total_rows = data.count;
    } else if (type == 'allocated') {
      //console.log(data);
      this.allocated_claims = data.data.datas;
      this.total_allocated = data.count;
      this.total = data.total;
      this.current_total = data.current_total;
      this.skip = data.skip + 1;
      this.skip_row = this.skip;
      this.current_row = this.skip + this.current_total - 1;
      this.total_row = data.count;
    } else if (type == 'completed') {
      this.completed_claims = data.data.datas;
      this.total_completed_claims = data.count;
      // this.total=data.total;
      // this.current_total= data.current_total - 1;
      // this.skip = data.skip;
      // this.skip_row = this.skip;
      // this.current_row = this.skip + this.current_total;
      // this.total_row = data.count;
    } else if (type != "wo" || type != "allocated" || type != "completed") {
      this.table_data = data.data;
      this.selected_table_data = data.selected_claim_data;
      this.total_claims = data.count;
      // let ca_data=this.table_data;
      //this.total=data.total;
      // this.current_total= data.current_total - 1;
      // this.skip = data.skip;
      // this.skip_row = this.skip;
      // this.current_row = this.skip + this.current_total;
      // this.total_row = data.count;
    }

    this.tab_load = false;
    //  let field_names:Array<any>=['Acct#','Claim#','Patient Name','DOS','Claim Age','Insurance','Billed','AR Due','Sub-Status Code'];
  }

  check_all_assign(page, event) {
    if (event.target.checked == true) {
      this.check_all[page] = true;
    } else {
      this.check_all[page] = false;
    }
  }
  selected(event, claim, index) {
    if (claim == 'all' && event.target.checked == true) {
      let selected_table_data = this.selected_table_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      selected_table_data.forEach(function (value) {
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
      for (let i = 0; i < this.selected_table_data.length; i++) {
        let claim = this.selected_table_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.selected_table_data[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  //Open Pop-up
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
  openModal(model_name) {
    this.modalRef = this.modal.show(model_name, this.config);
  }
  //Modal Dismiss on Clicking Outside the Modal
  getDismissReason() {}
  get_user_list() {
    this.Jarwis.get_user_list(this.setus.getId()).subscribe(data => this.list_users(data), error => this.handleError(error));
  }
  //Assign and List User
  list_users(data) {
    this.users_details = data.data;
  }
  //Select Associates for Work Order
  select_associates(event, id) {
    if (event.target.checked == true) {
      this.selected_associates.push(id);
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
    }
  }
  //Manual or Automatic Assign
  assign_type(type) {
    this.claim_assign_type = type;
  }
  //Manual Assign Function
  manual_assign(event, id) {
    let check = this.assigned_claims_details.some(function (value) {
      return value.id === id;
    });
    if (event.target.value != 0) {
      if (!check) {
        this.assigned_claims_details.push({
          id: id,
          value: event.target.value
        });
      } else {
        this.assigned_claims_details.find(v => v.id == id).value = event.target.value;
      }
    }
    this.calculate_assigned();
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
  //Assign Claims to Create Work Order
  assign_claims() {
    let selected_claims = this.selected_claim_nos;
    let assigned_details = [];
    let init_value = 0;
    this.assigned_claims_details.forEach(function (value) {
      let keys = value;
      let id = keys['id'];
      let value_data = keys['value'];
      let claims_assigned = selected_claims.slice(init_value, Number(init_value) + Number(value_data));
      init_value = value_data;
      assigned_details.push({
        assigned_to: id,
        claim_nos: value_data,
        claims: claims_assigned
      });
    });
    this.assigned_claim_details = assigned_details;
    this.assigned_claim_status = true;
    // this.Jarwis.create_ca_workorder(this.setus.getId(),assigned_details).subscribe(
    //   data  => this.handle_workorder_creation(data),
    //   error => console.log(error)
    //   );
  }

  create_workorder() {
    this.Jarwis.create_workorder(this.setus.getId(), this.workOrder.value, this.assigned_claim_details, 'client_assistance').subscribe(data => this.handle_workorder_creation(data), error => this.handleError(error));
  }
  //Aftermath Work Order creation Handling
  handle_workorder_creation(data) {
    this.toastr.successToastr('Created', 'Work Order');
    this.getclaim_details(1, 'wo', null, null, 'null', 'null', null, null);
    this.get_user_list();
    this.claim_assign_type = null;
    this.workOrder.reset();
    this.selected_claim_nos = [];
    this.selected_claims = [];
    this.check_all = [];
    this.assigned_claim_details = [];
    this.assigned_data = [];
  }
  export_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_export_data(filter, s_code, this.setus.getId()).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.handleError(error));
  }
  export_wo_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    let wo_type = 3;
    this.Jarwis.fetch_wo_export_data(filter, s_code, wo_type, this.setus.getId()).subscribe(data => this.export_handler.ready_wo_export(data, type), error => this.handleError(error));
  }
  wo_export_function(type) {
    this.export_handler.sort_export_data(this.wo_details, type, 'wo_detail');
  }
  claimslection(claim) {
    this.claim_no = claim.claim_no;
    this.get_line_items(claim);
    this.check_reassign_alloc(claim);
    this.clear_refer();
    this.claim_clicked = claim;
    //Related Claims
    this.loading = true;
    this.Jarwis.get_related_calims(claim, 'claim', this.setus.getId()).subscribe(data => this.claim_related = data['data'], error => this.handleError(error));
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
    this.getnotes(this.claim_clicked);
    this.send_calim_det('footer_data');
    //this.processNotesDelete(this.claim_no);
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
  referclaim(claim) {
    claim = claim;
    this.claim_nos = claim.claim_no;
    this.claim_status = claim.claim_Status;
    this.Jarwis.get_client_claimno(this.claim_nos, this.setus.getId(), this.claim_status).subscribe(data => this.handleClaimNo(data), error => this.handleError(error));
    if (this.assigned_datas == true) {
      this.refer_claim_editable = 'true';
    } else if (this.assigned_datas == undefined) {
      this.refer_claim_editable = 'false';
    }
    if (this.assigned_datas == false) {
      this.refer_claim_editable = 'false';
    }
    if (this.refer_claim_no.indexOf(claim['claim_no']) < 0) {
      this.refer_claim_det.push(claim);
      this.refer_claim_no.push(claim['claim_no']);
      this.Jarwis.getnotes(claim).subscribe(data => this.refer_notes(data, claim.claim_no), error => this.handleError(error));
    } else {
      this.selected_tab(claim['claim_no']);
    }
    this.send_calim_det('footer_data');
  }
  handleClaimNo(data) {
    this.assigned_datas = data.claim_count;
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
    this.send_calim_det('footer_data');
  }
  update_refer_notes(data, type, claimno) {
    let index_up_qc = this.refer_qc_notes_nos.indexOf(claimno);
    let index_up_process = this.refer_process_notes_nos.indexOf(claimno);
    let index_up_claim = this.refer_claim_notes_nos.indexOf(claimno);
    let index_up_client = this.refer_client_notes_nos.indexOf(claimno);
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
    } else if (type == 'client_notes') {
      if (index_up_client == undefined) {
        this.refer_client_notes_nos.push(claimno);
        this.refer_client_notes.push(data.data);
        index_up_qc = this.refer_client_notes_nos.indexOf(claimno);
      } else {
        this.refer_client_notes[index_up_qc] = data.data;
      }
      this.refer_client_notes[claimno] = data.data;
    }
    this.active_refer_claim = this.refer_claim_notes[index_up_claim];
    this.active_refer_process = this.refer_process_notes[index_up_process];
    this.active_refer_qc = this.refer_qc_notes[index_up_qc];
    this.active_refer_client = this.refer_client_notes[index_up_client];
    // this.active_refer_claim= this.refer_claim_notes[claimno];
    // this.active_refer_process=this.refer_process_notes[claimno];
    // this.active_refer_qc=this.refer_qc_notes[claimno];
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
  }
  //Close Refer Tab
  close_tab(claim_no) {
    let index = this.refer_claim_det.indexOf(claim_no);
    let list_index = this.refer_claim_no.indexOf(claim_no.claim_no);
    this.refer_claim_det.splice(index, 1);
    this.refer_claim_no.splice(list_index, 1);
    this.main_tab = true;
    this.active_claim = [];
    this.get_line_items(this.claim_clicked);
    this.check_reassign_alloc(this.claim_clicked);
    this.send_calim_det('footer_data');
  }
  //Clear Tabs Details
  clear_refer() {
    this.main_tab = true;
    this.active_claim = [];
    this.refer_claim_det = [];
    this.refer_claim_no = [];
  }
  //Save Notes
  savenotes(type) {
    let claim_id = [];
    if (this.active_claim.length != 0) {
      let index = this.refer_claim_no.indexOf(this.active_claim);
      claim_id = this.refer_claim_det[index];
    } else {
      claim_id = this.claim_clicked;
    }
    // if(type=='processnotes')
    // {
    // this.Jarwis.process_note(this.setus.getId(),this.processNotes.value['processnotes'],claim_id,'processcreate').subscribe(
    //   data  => this.display_notes(data,type),
    //   error => this.handleError(error)
    // );
    // }
    if (type == 'client_notes') {
      /* this.Jarwis.client_notes(this.setus.getId(),this.clientNotes.value['client_notes'],claim_id,'client_create').subscribe(
      data  =>this.display_notes(data,type),
      error => console.log(error)
      ); */
      this.client_notes_data.push({
        notes: this.clientNotes.value['client_notes'],
        id: claim_id['claim_no']
      });
      this.client_notes_data_list.push(claim_id['claim_no']);
      this.notes_hadler.set_notes(this.setus.getId(), this.clientNotes.value['client_notes'], claim_id, 'create_client_notes');
      this.send_calim_det('footer_data');
    }
  }
  //Update Displayed Notes
  display_notes(data, type) {
    if (this.active_claim.length != 0) {
      this.update_refer_notes(data, type, this.active_claim);
    } else {
      if (type == 'processnotes') {
        this.process_notes = data.data;
      } else if (type == 'All') {
        this.process_notes = data.data.process;
        this.client_notes = data.data.client;
        this.claim_notes = data.data.claim;
        this.qc_notes = data.data.qc;
      } else if (type == 'client_notes') {
        this.client_notes = data.data;
      }
    }
    this.loading = false;
    this.processNotes.reset();
    this.clientNotes.reset();
  }
  //Get Notes
  getnotes(claim) {
    this.process_notes = [];
    this.claim_notes = [];
    this.client_notes = [];
    this.qc_notes = [];
    let type = 'All';
    this.Jarwis.getnotes(claim).subscribe(data => this.display_notes(data, type), error => this.handleError(error));
  }
  editnotes(type, value, id) {
    //console.log(type,value,id);
    if (type == 'client_notes_init') {
      let qc_data = this.client_notes_data.find(x => x.id == id['claim_no']);
      //console.log(qc_data)
      this.editnote_value = qc_data.notes;
      this.edit_noteid = id;
      this.initial_edit = true;
    } else {
      this.editnote_value = value.content;
      this.edit_noteid = id;
      this.initial_edit = false;
    }
  }
  //Update Notes
  updatenotes(type) {
    if (this.initial_edit == true) {
      //console.log("sending data",this.clientNotes.value['client_notes']);
      this.notes_hadler.set_notes(this.setus.getId(), this.clientNotes.value['client_notes'], this.edit_noteid, 'create_client_notes');
      // this.qc_notes_data[this.edit_noteid['claim_no']]=this.qcNotes.value['qc_notes'];
      this.client_notes_data.find(x => x.id == this.edit_noteid['claim_no']).notes = this.clientNotes.value['client_notes'];
      this.initial_edit = false;
      this.send_calim_det('footer_data');
    } else {
      if (type == 'client_notes') {
        let claim_active;
        if (this.main_tab == true) {
          claim_active = this.claim_clicked;
        } else {
          claim_active = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        }
        this.Jarwis.client_notes(this.setus.getId(), this.clientNotes.value['client_notes'], this.edit_noteid, 'client_note_update').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      }
    }
    this.editnote_value = null;
  }
  //Clear ProcessNote
  clear_notes() {
    this.editnote_value = null;
    this.processNotes.reset();
    this.clientNotes.reset();
  }
  //Send Claim Value to Followup-Template Component on Opening Template
  send_calim_det(type) {
    if (this.main_tab == true) {
      if (type == 'followup') {
        this.follow.setvalue(this.claim_clicked['claim_no']);
        // this.notes_hadler.selected_tab(this.claim_clicked['claim_no']);
      } else {
        this.notes_hadler.selected_tab(this.claim_clicked['claim_no']);
        this.notes_hadler.set_claim_details(this.claim_clicked);
      }
    } else {
      if (type == 'followup') {
        this.follow.setvalue(this.active_claim);
        // this.notes_hadler.selected_tab(this.active_claim);
      } else {
        this.notes_hadler.selected_tab(this.active_claim);
        let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        this.notes_hadler.set_claim_details(claim_detials);
      }
    }
  }
  handleError(error) {
    //console.log(error);
    this.toastr.errorToastr(error, 'Error');
  }
  get_workorder(filter, from, to, type, page) {
    if (filter == null && from == null && to == null) {
      this.tab_load = true;
      // console.log("inside",filter,from,to);
      this.Jarwis.get_workorder(0, 0, 0, 3, page, null, null, null, null, null, null, null).subscribe(data => this.form_wo_table(data, page), error => this.handleError(error));
    } else {
      this.handleError("NYD");
    }
  }
  form_wo_table(data, page_no) {
    this.work_order_data = data.data;
    this.wo_total = data.count;
    this.wo_page_number = page_no;
    this.tab_load = false;
  }
  //Work Order details fetch
  get_wo_details(id, name, assigned) {
    this.loading = true;
    this.wo_details = [];
    this.wo_name = name;
    this.wo_created = assigned;
    this.Jarwis.get_workorder_details(id).subscribe(data => this.wo_details_table(data), error => this.handleError(error));
  }
  wo_details_table(data) {
    this.loading = false;
    this.wo_details = data.data;
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
  }
  assign_line_data(data) {
    this.line_item_data.push(data.data);
    this.line_data = data.data;
  }
  check_edit_permission(data) {
    if (data.includes('client_assistance')) {
      this.edit_permission = true;
    } else {
      this.edit_permission = false;
    }
  }
  collect_response(data) {
    this.display_notes(data, 'client_notes');
    this.getclaim_details(1, 'wo', null, null, 'null', 'null', null, null);
    let index = this.client_notes_data_list.indexOf(this.active_claim);
    this.client_notes_data_list.splice(index, 1);
  }
  confirm_reassign(claim) {
    //console.log(claim);
    this.confirmation_type = 'Reassign';
    this.reassign_claim = claim;
  }
  confirm_action(type) {
    if (type == 'Reassign') {
      let mod_type = 'audit';
      this.Jarwis.reassign_calim(this.reassign_claim, this.setus.getId(), mod_type).subscribe(data => this.after_reassign(data, this.reassign_claim['claim_no']), error => this.handleError(error));
    }
  }
  after_reassign(data, claim) {
    this.curr_reassigned_claims.push(claim);
    // this.getclaim_details(this.alloc_pages,'allocated');
    this.getclaim_details(1, 'wo', null, null, 'null', 'null', null, null);
    this.reassign_allocation = false;
  }
  check_reassign_alloc(claim) {
    if (this.setus.get_role_id() == '6' && claim['ca_work_order'] != null) {
      let already_re = this.curr_reassigned_claims.indexOf(claim.claim_no);
      // console.log("Here REassign",claim,already_re);
      if (already_re < 0) {
        this.reassign_allocation = true;
      } else {
        this.reassign_allocation = false;
      }
    } else {
      this.reassign_allocation = false;
    }
  }
  auto_assign_claims() {
    //console.log(this.selected_claim_nos,this.users_details,this.selected_associates);
    let assignable_aud = [];
    if (this.selected_associates.length == 0) {
      this.users_details.forEach(element => {
        assignable_aud.push(element.id);
      });
    } else {
      assignable_aud = this.selected_associates;
    }
    //console.log(assignable_aud);
    let selected_claims = this.selected_claim_nos;
    let init_value = 0;
    let users = this.users_details;
    let assigned_details = [];
    let assign_value = 0;
    assignable_aud.forEach(function (value) {
      let keys = value;
      let auditor_det = users.find(x => x['id'] == keys);
      //Check Assignable Numbers
      let assign_limit = Number(auditor_det['assign_limit']) - Number(auditor_det['assigned_nos']);
      // Check assignable claims nos
      if (selected_claims.length - Number(assign_value) < assign_limit) {
        assign_limit = selected_claims.length;
      }
      //console.log(selected_claims,assign_limit);
      if (assign_limit > 0 && selected_claims.length - Number(assign_value) != 0) {
        assign_value = Number(init_value) + Number(assign_limit);
        let claims_assigned = selected_claims.slice(init_value, Number(init_value) + Number(assign_limit));
        init_value = Number(init_value) + Number(assign_limit);
        assigned_details.push({
          assigned_to: auditor_det['id'],
          claim_nos: assign_limit,
          claims: claims_assigned
        });
      }
    });
    this.assigned_claim_details = assigned_details;
    //console.log("o/p",this.assigned_claim_details);
    this.assigned_claim_status = true;
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
  status_code_changed(event) {
    if (event.value != undefined) {
      let sub_status = this.sub_status_codes_data[event.value.id];
      let sub_status_option = [];
      console.log('sub_status_option');
      if (sub_status == undefined || sub_status == '') {
        this.sub_options = [];
        this.claimsFind.patchValue({
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
            this.claimsFind.patchValue({
              sub_status_code: {
                id: this.sub_options[0]['id'],
                description: this.sub_options[0]['description']
              }
            });
          } else {
            this.claimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  }

  ngOnInit() {
    this.getSearchResults();
    this.get_statuscodes();
    this.getclaim_details(1, 'wo', null, null, 'null', 'null', null, null);
    // this.get_user_list();
    this.claimsFind = this.formBuilder.group({
      dos: [],
      age_filter: [],
      claim_no: [],
      acc_no: [],
      patient_name: [],
      total_charge: [],
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.decimal_pattern)]),
      status_code: [],
      sub_status_code: [],
      rendering_provider: [],
      responsibility: [],
      followup_date: [],
      date: [],
      payer_name: [],
      denial_code: [],
      bill_submit_date: [],
      claim_note: [],
      insurance: [],
      prim_ins_name: [],
      prim_pol_id: [],
      sec_ins_name: [],
      sec_pol_id: [],
      ter_ins_name: [],
      ter_pol_id: []
    });
    this.processNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      processnotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    this.clientNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      client_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    this.workOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      workorder_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      wo_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    this.subscription = this.notify_service.fetch_touch_limit().subscribe(message => {
      this.touch_count = message;
    });
  }
  ngAfterViewInit() {
    if (this.touch_count == undefined) {
      this.touch_count = this.notify_service.manual_touch_limit();
    }
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
    this.observalble.unsubscribe();
    this.response_data.unsubscribe();
  }
  togglecollapse() {
    alert("hi");
    this.isopend = !this.isopend;
  }
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
    console.log(this.search);
    console.log(this.claimsFind.value);
    this.Jarwis.fetch_client_claims_export_data(this.setus.getId(), table_name, this.search, this.claimsFind.value).subscribe(data => this.export_handler.create_claim_export_excel(data), error => this.error_handler(error));
  }
  export_pdf_files(type, table_name) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_client_claims_export_data_pdf(this.setus.getId(), table_name).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  error_handler(error) {}
  getSearchResults() {
    this.Jarwis.get_ca_payer_name().subscribe(sr => {
      this.searchResults = sr['payer_names'];
      console.log(this.searchResults);
    });
  }
  searchOnKeyUp(event) {
    let input = event.target.value;
    console.log('event.target.value: ' + input);
    console.log('this.searchResults: ' + this.searchResults);
    if (input.length > 0) {
      this.results = this.searchFromArray(this.searchResults, input);
    } else {
      this.selected_val = null;
      this.isValueSelected = false;
    }
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
  onselectvalue(value) {
    if (value != '' || value != null) {
      this.isValueSelected = true;
      this.selected_val = value;
    } else {
      this.selected_val = null;
      this.isValueSelected = false;
    }
  }
}
ClientAssistanceComponent.ɵfac = function ClientAssistanceComponent_Factory(t) {
  return new (t || ClientAssistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_2__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_14__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_followup_service__WEBPACK_IMPORTED_MODULE_3__.FollowupService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_export_functions_service__WEBPACK_IMPORTED_MODULE_5__.ExportFunctionsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_notify_service__WEBPACK_IMPORTED_MODULE_6__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDatepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_8__.NotesHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__.BsModalService));
};
ClientAssistanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ClientAssistanceComponent,
  selectors: [["app-client-assistance"]],
  decls: 938,
  vars: 30,
  consts: [[1, "content", "no-padding"], [1, "row", 2, "padding-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "box", "no-shadow", "no-border", "no-bottom"], [1, "no-padding"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [1, "active"], ["href", "#tab_2", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-file-text"], [1, "hide"], ["href", "#tab_4", "data-toggle", "tab"], [1, "fa", "fa-dashboard"], [1, "tab-content", "no-padding"], ["id", "tab_4", 1, "tab-pane"], [1, "box-body", "no-padding"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "list-heading", 2, "background", "#e2e6ef", "padding", "10px 10px", "margin-top", "0px", "margin-bottom", "20px", "border-radius", "2px 2px 0px 0px"], [1, "row", "hide"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "box", "box-primary", "no-border", "no-shadow"], [1, "box-header", "no-border", "p-t-0", "p-b-0"], [1, "box-title", "list-heading", "p-t-0", "p-b-0"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", "p-t-0"], [1, "fa", "fa-minus"], [1, "box-body", "chart-responsive"], ["id", "revenue-chart", 1, "chart", 2, "height", "230px", "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["height", "342", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "205", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "205", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,205H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "160", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "160", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,160H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "115", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "115", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,115H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "70", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "70", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,70H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "25", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "25", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,25H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "#74a5c2", "stroke", "none", "d", "M25,173.008C25.027946537059538,173.398,25.083839611178615,175.72975,25.111786148238153,174.56799999999998C25.13973268529769,173.40624999999997,25.195625759416767,165.44239344262294,25.223572296476306,163.714C25.251215066828674,162.00439344262296,25.306500607533415,162.19825,25.334143377885784,160.816C25.361786148238153,159.43375,25.417071688942894,154.59459836065577,25.444714459295263,152.656C25.4726609963548,150.69609836065575,25.528554070473877,145.14025,25.556500607533415,145.222C25.584447144592954,145.30375,25.64034021871203,161.66314754098357,25.668286755771568,153.31C25.695929526123937,145.04764754098358,25.751215066828678,83.68606629834258,25.778857837181047,78.75999999999999C25.806196840826246,73.88806629834258,25.860874848116648,109.00357692307695,25.888213851761847,114.118C25.916160388821385,119.34607692307695,25.972053462940462,118.627,26,120.13L26,205L25,205Z", "fill-opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "fill-opacity", "1"], ["fill", "none", "stroke", "#3c8dbc", "d", "M25,173.008C25.027946537059538,173.398,25.083839611178615,175.72975,25.111786148238153,174.56799999999998C25.13973268529769,173.40624999999997,25.195625759416767,165.44239344262294,25.223572296476306,163.714C25.251215066828674,162.00439344262296,25.306500607533415,162.19825,25.334143377885784,160.816C25.361786148238153,159.43375,25.417071688942894,154.59459836065577,25.444714459295263,152.656C25.4726609963548,150.69609836065575,25.528554070473877,145.14025,25.556500607533415,145.222C25.584447144592954,145.30375,25.64034021871203,161.66314754098357,25.668286755771568,153.31C25.695929526123937,145.04764754098358,25.751215066828678,83.68606629834258,25.778857837181047,78.75999999999999C25.806196840826246,73.88806629834258,25.860874848116648,109.00357692307695,25.888213851761847,114.118C25.916160388821385,119.34607692307695,25.972053462940462,118.627,26,120.13", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25", "cy", "173.008", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.111786148238153", "cy", "174.56799999999998", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.223572296476306", "cy", "163.714", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.334143377885784", "cy", "160.816", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.444714459295263", "cy", "152.656", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.556500607533415", "cy", "145.222", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.668286755771568", "cy", "153.31", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.778857837181047", "cy", "78.75999999999999", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.888213851761847", "cy", "114.118", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "26", "cy", "120.13", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "#eaf3f6", "stroke", "none", "d", "M25,189.004C25.027946537059538,188.83599999999998,25.083839611178615,190.0165,25.111786148238153,188.332C25.13973268529769,186.64749999999998,25.195625759416767,176.27380327868852,25.223572296476306,175.528C25.251215066828674,174.79030327868853,25.306500607533415,183.8215,25.334143377885784,182.398C25.361786148238153,180.9745,25.417071688942894,165.55945081967212,25.444714459295263,164.14C25.4726609963548,162.70495081967212,25.528554070473877,169.48749999999998,25.556500607533415,170.98C25.584447144592954,172.4725,25.64034021871203,183.17078688524583,25.668286755771568,176.07999999999998C25.695929526123937,169.06628688524586,25.751215066828678,118.9865607734807,25.778857837181047,114.562C25.806196840826246,110.1860607734807,25.860874848116648,135.95198351648352,25.888213851761847,140.878C25.916160388821385,145.91348351648352,25.972053462940462,151.02550000000002,26,154.40800000000002L26,205L25,205Z", "fill-opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "fill-opacity", "1"], ["fill", "none", "stroke", "#a0d0e0", "d", "M25,189.004C25.027946537059538,188.83599999999998,25.083839611178615,190.0165,25.111786148238153,188.332C25.13973268529769,186.64749999999998,25.195625759416767,176.27380327868852,25.223572296476306,175.528C25.251215066828674,174.79030327868853,25.306500607533415,183.8215,25.334143377885784,182.398C25.361786148238153,180.9745,25.417071688942894,165.55945081967212,25.444714459295263,164.14C25.4726609963548,162.70495081967212,25.528554070473877,169.48749999999998,25.556500607533415,170.98C25.584447144592954,172.4725,25.64034021871203,183.17078688524583,25.668286755771568,176.07999999999998C25.695929526123937,169.06628688524586,25.751215066828678,118.9865607734807,25.778857837181047,114.562C25.806196840826246,110.1860607734807,25.860874848116648,135.95198351648352,25.888213851761847,140.878C25.916160388821385,145.91348351648352,25.972053462940462,151.02550000000002,26,154.40800000000002", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25", "cy", "189.004", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.111786148238153", "cy", "188.332", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.223572296476306", "cy", "175.528", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.334143377885784", "cy", "182.398", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.444714459295263", "cy", "164.14", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.556500607533415", "cy", "170.98", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.668286755771568", "cy", "176.07999999999998", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.778857837181047", "cy", "114.562", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.888213851761847", "cy", "140.878", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "26", "cy", "154.40800000000002", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "morris-hover", "morris-default-style", 2, "display", "none"], [1, "box", "box-danger", "no-border", "no-shadow", "hide"], [1, "box-title", "list-heading"], ["id", "sales-chart", 1, "chart", 2, "height", "230px", "position", "relative"], ["fill", "none", "stroke", "#3c8dbc", "d", "M0,108.33333333333333A-6.666666666666667,-6.666666666666667,0,0,0,-5.228486604698025,110.86389406942499", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#3c8dbc", "stroke", "#ffffff", "d", "M0,111.33333333333333A-3.666666666666667,-3.666666666666667,0,0,0,-2.8756676325839137,112.72514173818374L-11.764094860570555,105.69376165620622A-15,-15,0,0,1,0,100Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#f56954", "d", "M-5.228486604698025,110.86389406942499A-6.666666666666667,-6.666666666666667,0,1,0,6.054042404487644,117.79159721469804", "stroke-width", "2", "opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "1"], ["fill", "#f56954", "stroke", "#ffffff", "d", "M-2.8756676325839137,112.72514173818374A-3.666666666666667,-3.666666666666667,0,1,0,3.3297233224682046,116.53537846808393L9.081063606731467,119.18739582204708A-10,-10,0,1,1,-7.842729907047037,108.79584110413748Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#00a65a", "d", "M6.054042404487644,117.79159721469804A-6.666666666666667,-6.666666666666667,0,0,0,0.0020943950679349903,108.33333366232014", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#00a65a", "stroke", "#ffffff", "d", "M3.3297233224682046,116.53537846808393A-3.666666666666667,-3.666666666666667,0,0,0,0.0011519172873642447,111.33333351427608L0.004712388902853728,100.00000074022033A-15,-15,0,0,1,13.6215954100972,121.2810937330706Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], ["dy", "105", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "125", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "14px", "stroke", "none", "fill", "#000000", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "14px"], ["dy", "125", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "box", "box-info", "no-border", "no-shadow"], ["id", "line-chart", 1, "chart", 2, "height", "230px", "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#3c8dbc", "d", "M25,181.006C25.027946537059538,180.754,25.083839611178615,182.52474999999998,25.111786148238153,179.998C25.13973268529769,177.47125,25.195625759416767,161.9107049180328,25.223572296476306,160.792C25.251215066828674,159.68545491803278,25.306500607533415,173.23225000000002,25.334143377885784,171.097C25.361786148238153,168.96175,25.417071688942894,145.8391762295082,25.444714459295263,143.71C25.4726609963548,141.55742622950822,25.528554070473877,151.73125,25.556500607533415,153.97C25.584447144592954,156.20875,25.64034021871203,172.2561803278688,25.668286755771568,161.62C25.695929526123937,151.0994303278688,25.751215066828678,75.97984116022108,25.778857837181047,69.34300000000002C25.806196840826246,62.779091160221085,25.860874848116648,101.42797527472531,25.888213851761847,108.81700000000001C25.916160388821385,116.37022527472531,25.972053462940462,124.03825000000002,26,129.11200000000002", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25", "cy", "181.006", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.111786148238153", "cy", "179.998", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.223572296476306", "cy", "160.792", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.334143377885784", "cy", "171.097", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.444714459295263", "cy", "143.71", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.556500607533415", "cy", "153.97", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.668286755771568", "cy", "161.62", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.778857837181047", "cy", "69.34300000000002", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.888213851761847", "cy", "108.81700000000001", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "26", "cy", "129.11200000000002", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "row"], [1, "box", "box-success", "no-border", "no-shadow"], [1, "form-control", 2, "margin-top", "-10px"], [1, "box-body", "no-padding", 2, "border-top", "2px solid #f3f4f9", "margin-top", "0px"], [1, "list-heading", 2, "padding", "10px 20px", "margin-top", "10px", "border-radius", "2px 2px 0px 0px"], ["href", "#tab_3", "data-toggle", "tab", 1, "pull-right", 2, "font-size", "13px"], [1, "fa", "fa-file-o"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "table-striped1", "table"], [2, "width", "1%"], ["type", "checkbox", 2, "margin-top", "0px"], [1, "font600", "line-height-24"], [1, "font600", "text-right", "line-height-24"], ["type", "checkbox"], [1, "text-right"], [1, ""], [1, "font600"], [1, "ar-blue"], [1, "text-right", "ar-blue", "font600"], ["id", "tab_5", 1, "tab-pane", "hide"], [1, "list-heading", 2, "padding", "10px 20px", "margin-top", "20px", "border-radius", "2px 2px 0px 0px"], [1, "ar-blue", "font600"], ["id", "tab_2", 1, "tab-pane", "active"], [1, "box", "no-shadow", "no-border"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xs-12"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "fa", "fa-filter", "ar-blue"], ["data-target", "#ca_search", "data-toggle", "collapse", "data-widget", "collapse", "type", "button", "aria-expanded", "false", "aria-controls", "ca_search", 1, "btn", "btn-box-tool", "collapsed"], [1, "fa", "fa-plus"], ["id", "ca_search", 1, "collapse"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding"], [1, "form-group", "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "claim_no", 1, "form-control"], ["type", "text", "formControlName", "acc_no", 1, "form-control"], ["type", "text", "formControlName", "patient_name", 1, "form-control"], [1, "form-group", "col-md-4", "col-sm-4", "col-lg-4", "col-xs-12"], ["type", "text", "formControlName", "rendering_provider", 1, "form-control"], ["type", "text", "formControlName", "responsibility", 1, "form-control"], ["type", "text", "placeholder", "10.00-20.00", "formControlName", "total_ar", 1, "form-control"], ["formControlName", "status_code", 3, "config", "options", "change"], ["formControlName", "sub_status_code", 3, "config", "options"], ["type", "text", "formControlName", "payer_name", "placeholder", "Search Payer", "list", "SearchResults", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngIf"], ["type", "text", "formControlName", "denial_code", 1, "form-control"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], [1, "box-tools", "searchbox"], ["type", "text", "placeholder", "Search..", "name", "search"], ["type", "submit"], [1, "fa", "fa-search"], [1, "", 2, "margin-top", "5px"], ["title", "Excel", 1, "fa", "fa-file-excel-o", 2, "cursor", "pointer", 3, "click"], ["id", "print-section", 1, "col-lg-12", "col-md-12", "col-sm-12", "listing-table", "no-padding"], [1, "table-responsive"], ["id", "contentToConvert", 1, "table-striped1", "table"], [1, "noprint", 2, "width", "1%"], ["type", "checkbox", "title", "Select All", 2, "margin-top", "0px", 3, "click"], [1, "font600", "line-height-24", 3, "click"], [1, "fa", "fa-fw", "fa-sort"], [3, "click"], ["class", "clickable-row cur-pointer", "data-toggle", "modal", "data-target", "#claims-new2", 4, "ngFor", "ngForOf"], [1, "has-text-centered", "noprint"], ["class", "col-lg-6 col-md-6 col-sm-6 col-xs-12", "style", "text-align: right;", "class", "showing_count", 4, "ngIf"], ["id", "tab_1", 1, "tab-pane"], ["type", "text", "placeholder", "Search..", 1, "form-control", "pull-right", 2, "width", "300px", "margin-top", "1px", "font-weight", "normal"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], ["aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 2, "width", "100%"], ["value", "2"], ["value", "1"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "box-tools", "pull-right", 2, "margin-top", "5px"], ["title", "Print", 1, "fa", "fa-print", 2, "cursor", "pointer", 3, "click"], [2, "margin-left", "10px", "color", "#ccc", "margin-right", "10px"], ["title", "PDF", 1, "fa", "fa-file-pdf-o", 2, "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table", "no-padding"], ["class", "clickable-row cur-pointer", "data-toggle", "modal", "data-target", "#wo-claims-list", 3, "click", 4, "ngFor", "ngForOf"], [1, "has-text-centered"], ["id", "wo_foo", 3, "maxSize", "pageChange"], ["new_workorder", ""], ["associates", ""], ["claimpage", ""], ["processnotes", ""], ["clientnotes", ""], ["work_order_details", ""], ["HtmlContent", ""], ["AccNo", ""], ["PriInsurance", ""], ["SecInsurance", ""], ["TerInsurance", ""], ["TotalAr", ""], [3, "ngValue"], [4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#claims-new2", 1, "clickable-row", "cur-pointer"], [1, "noprint"], ["type", "checkbox", 2, "margin-top", "0px", 3, "checked", "click"], ["title", "Touch Count", 4, "ngIf"], ["tooltip", "HtmlContent", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options", "click"], ["tooltip", "HtmlContent", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", "dos-date", 3, "options"], [1, "cur-pointer"], ["tooltip", "AccNo", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options", "click"], ["tooltip", "AccNo", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options"], ["tooltip", "TotalAr", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options"], ["title", "Touch Count"], [1, "ar"], [1, "ar-red"], ["align", "center", "colspan", "12"], [1, "showing_count", 2, "text-align", "right"], ["data-toggle", "modal", "data-target", "#wo-claims-list", 1, "clickable-row", "cur-pointer", 3, "click"], ["class", "cur-pointer", 4, "ngIf"], [1, "fa", "fa-file-text", 3, "tooltip", "options"], ["title", "Low", 1, "fa", "fa-arrow-down"], ["title", "High", 1, "fa", "fa-arrow-up"], ["title", "Medium", 1, "fa", "fa-align-justify"], ["align", "center", "colspan", "10"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-title", "list-heading"], [1, "modal-body"], [1, "form-horizontal", 3, "formGroup"], ["modalform", "ngForm"], [1, "form-group"], ["type", "text", "formControlName", "workorder_name", 1, "form-control"], [1, "form-group", "col-lg-6", "no-padding"], ["type", "text", "formControlName", "due_date", "ngbDatepicker", "", "autocomplete", "off", 1, "form-control", 3, "focus"], ["due_date", "ngbDatepicker"], ["for", "low"], ["type", "radio", "id", "low", "name", "priority", "formControlName", "priority", "value", "low"], ["for", "medium"], ["type", "radio", "id", "medium", "name", "priority", "formControlName", "priority", "value", "medium"], ["for", "high"], ["type", "radio", "id", "high", "name", "priority", "formControlName", "priority", "value", "high"], [1, "form-group", 2, "margin-top", "10px"], ["formControlName", "wo_notes", 1, "form-control", "text-space", 2, "height", "90px"], ["data-toggle", "modal", "data-target", "#modal-user", 1, "btn", "btn-file", "btn-xs", "btn-flat", "pull-right", 3, "disabled", "click"], [1, "fa", "fa-users"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", "pull-left", 2, "margin-top", "20px", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "alert-danger", "pull-center", 2, "margin-top", "-1px", 3, "hidden"], [1, "table", "no-border", "no-bottom"], [1, "pull-left", 2, "margin-top", "20px"], [1, "cur-pointer", "btn", "btn-default", "btn-sm", "btn-flat", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "btn-sm", "btn-flat", 2, "margin-top", "20px", 3, "disabled", "click"], [2, "color", "red"], ["type", "checkbox", 2, "margin-top", "0px", 3, "id", "click"], ["type", "text", "size", "3", "knifeOnlyNumbers", "", 3, "value", "keyup"], ["type", "text", "value", "0", "size", "2", "disabled", ""], [1, "nav", "nav-tabs"], [1, "testClass"], ["href", "#{main_tab}", "data-toggle", "tab", 3, "click"], ["class", "testClass", 3, "active", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "maintab", 1, "tab-pane"], [1, "modal-body", "no-padding"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "margin-top", "10px"], [1, "box", "no-shadow", "no-bottom", "no-border"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool"], [1, "box-body", "no-padding", "hide"], ["id", "sales-chart", 1, "chart", 2, "height", "230px"], ["height", "230", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", "p-l-0"], [1, "table", "no-border", "table-striped-nb"], [1, "table-label"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-12", "p-l-0"], [1, "text-orange"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], [1, "ar-blue", 2, "margin-top", "0px", "font-size", "16px"], [1, "table", "no-border", "table-striped-nb", 2, "cursor", "pointer"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "box", "no-shadow", "no-border", 2, "margin-top", "10px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "5px solid #e9ecf3", "border-bottom", "3px solid #e9ecf3"], ["aria-expanded", "false", "data-target", "#Claim_Note", "data-toggle", "collapse", "title", "Claim Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [2, "text-decoration", "underline"], ["aria-expanded", "false", "data-target", "#Client_Notes", "data-toggle", "collapse", "title", "Client Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["id", "Process_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "box-body", "no-padding", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "margin-top:5px;", 4, "ngIf"], ["id", "Claim_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box25", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box25", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;margin-top:5px;", 4, "ngFor", "ngForOf"], ["id", "Client_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["data-toggle", "modal", 1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "fa", "fa-plus-circle"], ["class", "cur-pointer", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "0px"], ["id", "followup-list3", "aria-expanded", "false", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid rgb(233, 236, 243)", "height", "15px"], ["id", "followupview", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "text-center", "close-btn"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "background", "#f9f9f9"], ["id", "client-assistant-list", 1, "collapse", 2, "margin-top", "10px"], [1, "", 2, "font-size", "16px", "margin-top", "20px"], [1, "form-horizontal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px solid #f3f4f9"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-11", "no-padding"], ["type", "text", 1, "form-control"], [1, "col-lg-11", "col-md-11", "col-sm-11", "col-xs-12", "no-padding"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-12", "col-lg-offset-1", "col-md-offset-1", "col-sm-offset-1", "no-padding"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible", 2, "width", "100%"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", 2, "width", "100%"], [1, "selection"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-xxst-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-xxst-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["role", "presentation", 1, "select2-selection__arrow"], ["role", "presentation"], ["aria-hidden", "true", 1, "dropdown-wrapper"], [1, "form-control", "text-space"], [1, "btn", "btn-default", "btn-sm", "text-center"], [1, "btn", "btn-info", "btn-sm", "text-center"], ["class", "tab-pane", 3, "active", "id", 4, "ngFor", "ngForOf"], ["data-toggle", "tab", 3, "href", "click"], ["class", "p-l-0 table-label", "style", "text-decoration: underline", 3, "click", 4, "ngIf"], [1, "p-l-0", "table-label", 2, "text-decoration", "underline", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0"], [1, "text-justify", 2, "margin-bottom", "10px"], [2, "margin-left", "3px", "margin-right", "3px", "color", "#ccc"], [1, "pull-right", 2, "font-size", "18px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "5px"], [1, "text-center", "text-gray", 2, "margin-bottom", "10px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0", "margin-top", "5px"], [1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], ["title", "Edit", 1, "fa", "fa-edit", "ar-blue", 2, "margin-left", "10px", "font-size", "16px", "cursor", "pointer", 3, "click"], [1, "tab-pane", 3, "id"], ["aria-expanded", "false", "data-target", "#Process_Notes", "data-toggle", "collapse", "title", "Process Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["data-toggle", "collapse", "data-target", "#followupview", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template View", 1, "fa", "fa-external-link-square"], ["data-toggle", "modal", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-d8k9-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-d8k9-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["data-toggle", "collapse", "data-target", "#followup-list3", "class", "cur-pointer collapsed", "title", "Followup Template", "style", "margin-right: 15px;font-size: 16px;", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["data-toggle", "collapse", "data-target", "#followup-list3", "title", "Followup Template", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template", 1, "fa", "fa-headphones"], ["data-toggle", "modal", 2, "font-size", "16px", 3, "hidden", "click"], [1, "text-center", "closed-btn", 2, "margin-top", "8%"], ["formControlName", "processnotes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["formControlName", "client_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "cur-pointer", "text-right"]],
  template: function ClientAssistanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_a_click_8_listener() {
        return ctx.get_statuscodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "li", 10)(12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "div", 3)(18, "div", 15)(19, "div", 16)(20, "div", 15)(21, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, " Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "div", 20)(26, "div", 21)(27, "h3", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, " Area Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 24)(31, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 27)(34, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "svg", 29)(36, "desc", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "defs", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "text", 31)(40, "tspan", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "path", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "text", 34)(44, "tspan", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "7,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](46, "path", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "text", 37)(48, "tspan", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "15,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](50, "path", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "text", 40)(52, "tspan", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "22,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "path", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "text", 43)(56, "tspan", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "30,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "path", 45)(59, "path", 46)(60, "path", 47)(61, "circle", 48)(62, "circle", 49)(63, "circle", 50)(64, "circle", 51)(65, "circle", 52)(66, "circle", 53)(67, "circle", 54)(68, "circle", 55)(69, "circle", 56)(70, "circle", 57)(71, "path", 58)(72, "path", 59)(73, "circle", 60)(74, "circle", 61)(75, "circle", 62)(76, "circle", 63)(77, "circle", 64)(78, "circle", 65)(79, "circle", 66)(80, "circle", 67)(81, "circle", 68)(82, "circle", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](83, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "div", 71)(85, "div", 21)(86, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](87, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, " Donut Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "div", 24)(90, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](91, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "div", 27)(93, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "svg", 29)(95, "desc", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](97, "defs", 30)(98, "path", 74)(99, "path", 75)(100, "path", 76)(101, "path", 77)(102, "path", 78)(103, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "text", 80)(105, "tspan", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "In-Store Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "text", 82)(108, "tspan", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](109, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "div", 19)(111, "div", 84)(112, "div", 21)(113, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](114, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, " Line Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "div", 24)(117, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](118, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "div", 27)(120, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "svg", 29)(122, "desc", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](124, "defs", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "text", 31)(126, "tspan", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](128, "path", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "text", 34)(130, "tspan", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, "5,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](132, "path", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "text", 37)(134, "tspan", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](135, "10,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](136, "path", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](137, "text", 40)(138, "tspan", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](139, "15,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](140, "path", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "text", 43)(142, "tspan", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](143, "20,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](144, "path", 45)(145, "path", 86)(146, "circle", 87)(147, "circle", 88)(148, "circle", 89)(149, "circle", 90)(150, "circle", 91)(151, "circle", 92)(152, "circle", 93)(153, "circle", 94)(154, "circle", 95)(155, "circle", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](156, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](157, "div", 97)(158, "div", 2)(159, "div", 98)(160, "div", 21)(161, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](162, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](163, " Bar Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](164, "div", 24)(165, "select", 99)(166, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](167, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](168, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](169, "January");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](170, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](171, "February");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](172, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](173, "March");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](174, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](175, "2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](176, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](177, "2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](178, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](179, "div", 100)(180, "h4", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](181, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](182, " Status Wise Summary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](183, "a", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](184, "i", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](185, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "div", 104)(187, "table", 105)(188, "thead")(189, "tr")(190, "th", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](191, "input", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](192, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](193, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](195, "0-30");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](196, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](197, "31-60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](198, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](199, "61-90");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](200, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](201, "91-120");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](202, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](203, "121-150");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](204, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](205, ">150");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](206, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](207, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](208, "tbody")(209, "tr")(210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](211, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](213, "Submitted");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](214, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](215, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](216, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](217, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](219, "1,113.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](220, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](221, "3,745.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](222, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](223, "2,980.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](225, "8,684.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](226, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](227, "16,539.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](228, "tr")(229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](230, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](232, "Hold");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](233, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](234, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](235, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](236, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](237, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](238, "1,113.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](239, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "3,189.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](241, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](242, "2,812.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](243, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](244, "6,409.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](245, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](246, "13,523.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](247, "tr")(248, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](249, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](250, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](251, "Denied");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](252, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](253, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](254, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](255, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](256, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](257, "80.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](258, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](259, "4,232.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](260, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](261, "3,054.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](262, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](263, "6,487.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](264, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](265, "13,853.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](266, "tr")(267, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](268, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](269, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](270, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](271, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](272, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](273, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](274, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](275, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](276, "120.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](277, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](278, "100.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](279, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](280, "624.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](281, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](282, "3,292.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](283, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](284, "4,136.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](285, "tr")(286, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](287, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](288, "td", 113)(289, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](290, "Total Insurance AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](291, "td", 115)(292, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](293, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](294, "td", 115)(295, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](296, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](297, "td", 115)(298, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](299, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](300, "td", 115)(301, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](302, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](303, "td", 115)(304, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](305, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](306, "td", 115)(307, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](308, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](309, "td", 115)(310, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](311, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](312, "tr")(313, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](314, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](315, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](316, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](317, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](318, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](319, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](320, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](321, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](322, "5.08 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](323, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](324, "23.45%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](325, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](326, "19.71%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](327, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](328, "51.76%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](329, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](330, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](331, "div", 116)(332, "div", 3)(333, "div", 15)(334, "div", 16)(335, "div", 15)(336, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](337, " Work Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](338, "h4", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](339, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](340, " Call Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](341, "a", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](342, "i", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](343, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](344, "div", 104)(345, "table", 105)(346, "thead")(347, "tr")(348, "th", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](349, "input", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](350, "th", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](351, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](352, "Unbilled");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](353, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](354, "0-30");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](355, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](356, "31-60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](357, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](358, "61-90");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](359, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](360, "91-120");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](361, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](362, "121-150");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](363, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](364, ">150");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](365, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](366, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](367, "tbody")(368, "tr")(369, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](370, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](371, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](372, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](373, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](374, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](375, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](376, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](377, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](378, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](379, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](380, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](381, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](382, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](383, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](384, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](385, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](386, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](387, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](388, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](389, "tr")(390, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](391, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](393, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](394, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](395, "70,161.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](396, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](397, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](398, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](399, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](400, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](401, "759.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](402, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](403, "1,090.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](404, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](405, "4,420.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](406, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](407, "6,668.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](408, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](409, "83,098.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](410, "tr")(411, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](412, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](413, "td", 118)(414, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](415, "Outstanding AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](416, "td", 115)(417, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](418, "62,936.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](419, "td", 115)(420, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](421, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](422, "td", 115)(423, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](424, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](425, "td", 115)(426, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](427, "749.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](428, "td", 115)(429, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](430, "1,200.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](431, "td", 115)(432, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](433, "4,170.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](434, "td", 115)(435, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](436, "6,237.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](437, "td", 115)(438, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](439, "75,292.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](440, "tr")(441, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](442, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](443, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](444, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](445, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](446, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](447, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](448, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](449, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](450, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](451, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](452, "1%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](453, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](454, "2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](455, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](456, "6%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](457, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](458, "8%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](459, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](460, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](461, "div", 100)(462, "h4", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](463, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](464, " Audit Claims ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](465, "a", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](466, "i", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](467, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](468, "div", 104)(469, "table", 105)(470, "tbody")(471, "tr")(472, "td", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](473, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](474, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](475, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](476, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](477, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](478, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](479, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](480, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](481, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](482, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](483, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](484, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](485, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](486, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](487, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](488, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](489, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](490, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](491, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](492, "tr")(493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](494, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](496, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](497, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](498, "70,161.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](499, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](500, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](501, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](502, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](503, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](504, "759.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](505, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](506, "1,090.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](507, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](508, "4,420.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](509, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](510, "6,668.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](511, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](512, "83,098.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](513, "tr")(514, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](515, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](516, "td", 118)(517, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](518, "Outstanding AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](519, "td", 115)(520, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](521, "62,936.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](522, "td", 115)(523, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](524, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](525, "td", 115)(526, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](527, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](528, "td", 115)(529, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](530, "749.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](531, "td", 115)(532, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](533, "1,200.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](534, "td", 115)(535, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](536, "4,170.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](537, "td", 115)(538, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](539, "6,237.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](540, "td", 115)(541, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](542, "75,292.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](543, "tr")(544, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](545, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](546, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](547, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](548, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](549, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](550, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](551, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](552, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](553, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](554, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](555, "1%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](556, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](557, "2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](558, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](559, "6%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](560, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](561, "8%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](562, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](563, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](564, "div", 100)(565, "h4", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](566, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](567, " New Claims ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](568, "a", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](569, "i", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](570, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](571, "div", 104)(572, "table", 105)(573, "tbody")(574, "tr")(575, "td", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](576, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](577, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](578, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](579, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](580, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](581, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](582, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](583, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](584, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](585, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](586, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](587, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](588, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](589, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](590, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](591, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](592, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](593, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](594, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](595, "tr")(596, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](597, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](598, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](599, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](600, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](601, "70,161.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](602, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](603, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](604, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](605, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](606, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](607, "759.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](608, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](609, "1,090.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](610, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](611, "4,420.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](612, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](613, "6,668.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](614, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](615, "83,098.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](616, "tr")(617, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](618, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](619, "td", 118)(620, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](621, "Outstanding AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](622, "td", 115)(623, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](624, "62,936.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](625, "td", 115)(626, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](627, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](628, "td", 115)(629, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](630, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](631, "td", 115)(632, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](633, "749.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](634, "td", 115)(635, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](636, "1,200.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](637, "td", 115)(638, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](639, "4,170.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](640, "td", 115)(641, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](642, "6,237.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](643, "td", 115)(644, "span", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](645, "75,292.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](646, "tr")(647, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](648, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](649, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](650, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](651, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](652, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](653, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](654, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](655, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](656, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](657, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](658, "1%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](659, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](660, "2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](661, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](662, "6%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](663, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](664, "8%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](665, "td", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](666, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](667, "div", 119)(668, "div", 120)(669, "div", 15)(670, "div", 97)(671, "div", 121)(672, "div", 16)(673, "div", 122)(674, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](675, "i", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](676, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](677, "div", 24)(678, "button", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](679, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](680, "div", 126)(681, "div", 127)(682, "form", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ClientAssistanceComponent_Template_form_ngSubmit_682_listener() {
        return ctx.claims_filter(1, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](683, "div", 129)(684, "div", 130)(685, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](686, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](687, "div", 130)(688, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](689, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](690, "select", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ClientAssistanceComponent_Template_select_ngModelChange_690_listener($event) {
        return ctx.selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](691, "option", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](692, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](693, ClientAssistanceComponent_option_693_Template, 2, 5, "option", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](694, "div", 130)(695, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](696, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](697, "input", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](698, "div", 129)(699, "div", 130)(700, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](701, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](702, "input", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](703, "div", 130)(704, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](705, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](706, "input", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](707, "div", 130)(708, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](709, "followup date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](710, "div", 129)(711, "div", 137)(712, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](713, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](714, "input", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](715, "div", 137)(716, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](717, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](718, "input", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](719, "div", 137)(720, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](721, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](722, "input", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](723, "div", 129)(724, "div", 137)(725, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](726, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](727, "div", 137)(728, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](729, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](730, "ngx-select-dropdown", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ClientAssistanceComponent_Template_ngx_select_dropdown_change_730_listener($event) {
        return ctx.status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](731, "div", 137)(732, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](733, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](734, "ngx-select-dropdown", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](735, "div", 129)(736, "div", 137)(737, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](738, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](739, "input", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ClientAssistanceComponent_Template_input_ngModelChange_739_listener($event) {
        return ctx.selected_val = $event;
      })("keyup", function ClientAssistanceComponent_Template_input_keyup_739_listener($event) {
        return ctx.searchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](740, ClientAssistanceComponent_div_740_Template, 2, 1, "div", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](741, "div", 137)(742, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](743, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](744, "div", 137)(745, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](746, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](747, "input", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](748, "div", 129)(749, "div", 146)(750, "input", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_input_click_750_listener() {
        return ctx.claims_filter(1, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](751, "div", 121)(752, "div", 16)(753, "div", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](754, "input", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](755, "button", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](756, "i", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](757, "div", 120)(758, "div", 15)(759, "div", 16)(760, "div", 122)(761, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](762, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](763, " Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](764, "div", 24)(765, "p", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](766, ClientAssistanceComponent_span_766_Template, 1, 0, "span", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](767, "i", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_i_click_767_listener() {
        return ctx.export_excel_files("excel", "Client_assistance_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](768, "div", 127)(769, "div", 154)(770, "div", 155)(771, "table", 156)(772, "thead")(773, "tr")(774, "th", 157)(775, "input", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_input_click_775_listener($event) {
        ctx.selected($event, "all", "all");
        return ctx.check_all_assign(ctx.pages, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](776, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](777, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_777_listener() {
        return ctx.order_list("wo", "claim_no", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](778, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](779, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](780, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_780_listener() {
        return ctx.order_list("wo", "dos", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](781, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](782, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](783, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](784, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](785, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](786, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_786_listener() {
        return ctx.order_list("wo", "acct_no", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](787, "Acct No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](788, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](789, "th", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_789_listener() {
        return ctx.order_list("wo", "patient_name", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](790, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](791, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](792, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](793, "Insurance Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](794, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](795, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_795_listener() {
        return ctx.order_list("wo", "status_code", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](796, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](797, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](798, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_798_listener() {
        return ctx.order_list("wo", "sub_status_code", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](799, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](800, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](801, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_801_listener() {
        return ctx.order_list("wo", "total_charges", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](802, "Total Charges");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](803, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](804, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_804_listener() {
        return ctx.order_list("wo", "total_ar", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](805, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](806, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](807, "th", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_807_listener() {
        return ctx.order_list("wo", "created_at", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](808, "AssignedUser|Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](809, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](810, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](811, "Work Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](812, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](813, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](814, ClientAssistanceComponent_tr_814_Template, 45, 35, "tr", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](815, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](816, ClientAssistanceComponent_tr_816_Template, 4, 0, "tr", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](817, "div", 97)(818, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](819, "div", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](820, ClientAssistanceComponent_div_820_Template, 8, 3, "div", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](821, ClientAssistanceComponent_div_821_Template, 8, 0, "div", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](822, "div", 165)(823, "div", 120)(824, "div", 15)(825, "div", 16)(826, "div", 122)(827, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](828, "i", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](829, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](830, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](831, "input", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](832, "div", 127)(833, "div", 129)(834, "div", 167)(835, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](836, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](837, "select", 168)(838, "option", 169);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](839, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](840, "option", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](841, "Work Order Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](842, "option", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](843, "AR Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](844, "option", 172);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](845, "Work Order Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](846, "option", 173);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](847, "Created Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](848, "option", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](849, "Created By");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](850, "div", 167)(851, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](852, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](853, "select", 168)(854, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](855, "A-Adjustment");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](856, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](857, "B-Appeal");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](858, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](859, "C-Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](860, "div", 167)(861, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](862, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](863, "select", 168)(864, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](865, "Adj-Bad Debt");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](866, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](867, "Adj-Insurance Overpayment");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](868, "div", 120)(869, "div", 15)(870, "div", 16)(871, "div", 122)(872, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](873, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](874, " Work Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](875, "div", 175)(876, "p", 152)(877, "span", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_span_click_877_listener() {
        return ctx.export_wo_files("print");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](878, "span", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](879, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](880, "i", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_i_click_880_listener() {
        return ctx.export_wo_files("excel");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](881, "span", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](882, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](883, "i", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_i_click_883_listener() {
        return ctx.export_wo_files("PDF");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](884, "div", 127)(885, "div", 179)(886, "div", 155)(887, "table", 105)(888, "thead")(889, "tr")(890, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](891, "Created By/Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](892, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](893, "Work Order Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](894, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](895, "Claim Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](896, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](897, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](898, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](899, "Billed");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](900, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](901, "AR Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](902, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](903, "WO Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](904, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](905, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](906, "th", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](907, "WO Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](908, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](909, ClientAssistanceComponent_tr_909_Template, 21, 16, "tr", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](910, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](911, ClientAssistanceComponent_tr_911_Template, 4, 0, "tr", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](912, "div", 181)(913, "pagination-controls", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function ClientAssistanceComponent_Template_pagination_controls_pageChange_913_listener($event) {
        return ctx.get_workorder(null, null, null, 3, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](914, ClientAssistanceComponent_ng_template_914_Template, 47, 3, "ng-template", null, 183, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](916, ClientAssistanceComponent_ng_template_916_Template, 24, 9, "ng-template", null, 184, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](918, ClientAssistanceComponent_ng_template_918_Template, 299, 27, "ng-template", null, 185, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](920, ClientAssistanceComponent_ng_template_920_Template, 20, 4, "ng-template", null, 186, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](922, ClientAssistanceComponent_ng_template_922_Template, 20, 4, "ng-template", null, 187, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](924, ClientAssistanceComponent_ng_template_924_Template, 56, 2, "ng-template", null, 188, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](926, ClientAssistanceComponent_ng_template_926_Template, 23, 16, "ng-template", null, 189, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](928, ClientAssistanceComponent_ng_template_928_Template, 18, 15, "ng-template", null, 190, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](930, ClientAssistanceComponent_ng_template_930_Template, 15, 7, "ng-template", null, 191, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](932, ClientAssistanceComponent_ng_template_932_Template, 15, 7, "ng-template", null, 192, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](934, ClientAssistanceComponent_ng_template_934_Template, 15, 7, "ng-template", null, 193, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](936, ClientAssistanceComponent_ng_template_936_Template, 9, 14, "ng-template", null, 194, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](682);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.claimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isValueSelected == false && ctx.selected_val != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.edit_permission == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](815, 18, ctx.table_data, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](24, _c1, ctx.pages, ctx.total_claims)));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.total_claims == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.total_claims != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.total_claims == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](910, 21, ctx.work_order_data, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](27, _c2, ctx.wo_page_number, ctx.wo_total)));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.wo_total == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("maxSize", 9);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_9__.ClaimOpFooterComponent, _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_10__.FollowupTemplateComponent, _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_11__.FollowupViewComponent, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__.TooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.PaginationControlsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbInputDatepicker, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_21__.NgxSelectDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.PaginatePipe],
  styles: ["@media print\r\n{\r\n.noprint {display:none !important;\r\n    visibility: hidden !important;\r\n}\r\n}\r\n\r\n .modal-content {\r\n    right: -178px;\r\n    top: 80px;\r\n\r\n  }\r\n  .close {\r\n    color: #000;\r\n    opacity: .2;\r\n  }\r\n\r\n  .red-alert{\r\n    transition: 0.5s all ease-in-out;\r\n  }\r\n\r\n  .ng-sidebar--right[_ngcontent-c8] {\r\n    bottom: 0;\r\n    right: 0;\r\n    top: 0;\r\n    position: relative !important;\r\n    overflow: hidden !important;\r\n  }\r\n\r\n  .ng-sidebar[_ngcontent-c7] {\r\n    -webkit-overflow-scrolling: touch;\r\n    overflow: auto;\r\n    pointer-events: auto;\r\n    position: relative !important;\r\n    touch-action: auto;\r\n    will-change: initial;\r\n    z-index: 2;\r\n    overflow: hidden !important;\r\n  }\r\n  .a {\r\n    top: 27%;\r\n    position: absolute;\r\n    width: 106px;\r\n    height: 40px;\r\n    background-color: #dd4b39;\r\n    color: white;\r\n    transform: rotate(90deg);\r\n    right: -33px;\r\n    z-index: 155;\r\n    text-decoration: none;\r\n    border-bottom-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n    padding-top: 0px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  .a p , .b p{\r\n    font-size: 17px;\r\n\r\n  }\r\n  .b{\r\n    top: 77%;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    width: 106px;\r\n    height: 40px;\r\n    background-color: #00c0ef;\r\n    color: white;\r\n    transform: rotate(90deg);\r\n    right: -33px;\r\n    z-index: 155;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    border-bottom-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n    padding-top: 9px;\r\n  }\r\n  .a p{\r\n    padding-top: 7px;\r\n  }\r\n  .tooltip-feedback {\r\n    background-color: #9ad9e4 !important;\r\n    color: #646464 !important;\r\n    overflow: visible !important;\r\n     /*margin-left: -25px !important;\r\n    margin-top: 20px !important;*/\r\n  }\r\n  .new-tooltip-class {\r\n    background-color: #9ad9e4 !important;\r\n    color: #646464 !important;\r\n    margin-top: -20px !important;\r\n  }\r\n  .text-space {\r\n    resize: vertical;\r\n  }\r\n\r\n  .dos-date {\r\n    min-width: 82px;\r\n  }\r\n\r\n  .btn-search {\r\n    background-color: #00beda;\r\n    border-color: #00beda;\r\n    color: #fff;\r\n    max-width: 66px;\r\n    margin-top: 15px;\r\n  }\r\n  .btn-search:hover {\r\n    color: #fff !important;\r\n    background-color: #04a1b8 !important;\r\n  }\r\n.close-btn button{\r\n    left: 10%;\r\n    top: -54px;\r\n    position: relative;\r\n      }\r\n .closed-btn button{\r\n  top: -54px;\r\n  position: relative;\r\n }\r\n\r\ninput[type=checkbox]:before {\r\n  border: 0px !important;\r\n}\r\n\r\ninput:before{\r\n  border: none !important;\r\n}\r\n\r\ninput:after{\r\n  display: none !important;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnQtYXNzaXN0YW5jZS9jbGllbnQtYXNzaXN0YW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFVBQVUsdUJBQXVCO0lBQzdCLDZCQUE2QjtBQUNqQztBQUNBOztDQUVDO0lBQ0csYUFBYTtJQUNiLFNBQVM7O0VBRVg7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLE1BQU07SUFDTiw2QkFBNkI7SUFDN0IsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBRVosd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlOztFQUVqQjtFQUNBO0lBQ0UsUUFBUTtJQUNSLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUVaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw0QkFBNEI7S0FDM0I7aUNBQzRCO0VBQy9CO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixvQ0FBb0M7RUFDdEM7QUFDRjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO01BQ2hCO0NBQ0w7RUFDQyxVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50XHJcbntcclxuLm5vcHJpbnQge2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHJpZ2h0OiAtMTc4cHg7XHJcbiAgICB0b3A6IDgwcHg7XHJcblxyXG4gIH1cclxuICAuY2xvc2Uge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAuMjtcclxuICB9XHJcblxyXG4gIC5yZWQtYWxlcnR7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5uZy1zaWRlYmFyLS1yaWdodFtfbmdjb250ZW50LWM4XSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5nLXNpZGViYXJbX25nY29udGVudC1jN10ge1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xyXG4gICAgd2lsbC1jaGFuZ2U6IGluaXRpYWw7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYSB7XHJcbiAgICB0b3A6IDI3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHJpZ2h0OiAtMzNweDtcclxuICAgIHotaW5kZXg6IDE1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYSBwICwgLmIgcHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgfVxyXG4gIC5ie1xyXG4gICAgdG9wOiA3NyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTA2cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjMGVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICByaWdodDogLTMzcHg7XHJcbiAgICB6LWluZGV4OiAxNTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICB9XHJcbiAgLmEgcHtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgfVxyXG4gIC50b29sdGlwLWZlZWRiYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YWQ5ZTQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjQ2NDY0ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgIC8qbWFyZ2luLWxlZnQ6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7Ki9cclxuICB9XHJcbiAgLm5ldy10b29sdGlwLWNsYXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YWQ5ZTQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjQ2NDY0ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGV4dC1zcGFjZSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgLmRvcy1kYXRlIHtcclxuICAgIG1pbi13aWR0aDogODJweDtcclxuICB9XHJcblxyXG4gIC5idG4tc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJlZGE7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJlZGE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1heC13aWR0aDogNjZweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5idG4tc2VhcmNoOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhMWI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uY2xvc2UtYnRuIGJ1dHRvbntcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogLTU0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuIC5jbG9zZWQtYnRuIGJ1dHRvbntcclxuICB0b3A6IC01NHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmJlZm9yZSB7XHJcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQ6YmVmb3Jle1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDphZnRlcntcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 4847:
/*!***************************************************!*\
  !*** ./src/app/lazy-ca/lazy-ca-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyCARoutingModule": () => (/* binding */ LazyCARoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_client_assistance_client_assistance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/client-assistance/client-assistance.component */ 7075);
/* harmony import */ var _Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/auth-guard.service */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _components_client_assistance_client_assistance_component__WEBPACK_IMPORTED_MODULE_0__.ClientAssistanceComponent,
  canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class LazyCARoutingModule {}
LazyCARoutingModule.ɵfac = function LazyCARoutingModule_Factory(t) {
  return new (t || LazyCARoutingModule)();
};
LazyCARoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LazyCARoutingModule
});
LazyCARoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LazyCARoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 3444:
/*!*******************************************!*\
  !*** ./src/app/lazy-ca/lazy-ca.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyCAModule": () => (/* binding */ LazyCAModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lazy_ca_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-ca-routing.module */ 4847);
/* harmony import */ var _components_client_assistance_client_assistance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/client-assistance/client-assistance.component */ 7075);
/* harmony import */ var _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-module/common-module.module */ 6469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class LazyCAModule {}
LazyCAModule.ɵfac = function LazyCAModule_Factory(t) {
  return new (t || LazyCAModule)();
};
LazyCAModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LazyCAModule
});
LazyCAModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _lazy_ca_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyCARoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyCAModule, {
    declarations: [_components_client_assistance_client_assistance_component__WEBPACK_IMPORTED_MODULE_1__.ClientAssistanceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _lazy_ca_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyCARoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_lazy-ca_lazy-ca_module_ts.3fcd67bec72c1079.js.map