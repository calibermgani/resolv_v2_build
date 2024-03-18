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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _Services_followup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/followup.service */ 4679);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../excel.service */ 6249);
/* harmony import */ var _Services_export_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/export-functions.service */ 301);
/* harmony import */ var _Services_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/notify.service */ 5710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/notes-handler.service */ 8997);
/* harmony import */ var _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../claim-op-footer/claim-op-footer.component */ 6195);
/* harmony import */ var _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../followup-template/followup-template.component */ 5286);
/* harmony import */ var _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followup-view/followup-view.component */ 6868);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-tooltip-directive */ 7762);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-select-dropdown */ 3277);





















const _c0 = function (a0, a1) {
  return {
    from_age: a0,
    to_age: a1
  };
};
function ClientAssistanceComponent_option_695_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](2, _c0, agerange_r33.from_age, agerange_r33.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](agerange_r33.from_age + "-" + agerange_r33.to_age);
  }
}
function ClientAssistanceComponent_div_742_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_div_742_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37);
      const res_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.onselectvalue(res_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](res_r35);
  }
}
function ClientAssistanceComponent_div_742_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ClientAssistanceComponent_div_742_div_1_Template, 3, 1, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.results);
  }
}
function ClientAssistanceComponent_span_768_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span");
  }
}
function ClientAssistanceComponent_tr_828_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 208)(1, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.touch);
  }
}
function ClientAssistanceComponent_tr_828_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 208)(1, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.touch);
  }
}
function ClientAssistanceComponent_tr_828_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.claim_no);
  }
}
function ClientAssistanceComponent_tr_828_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, tab_dat_r38.dos, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_tr_828_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.age);
  }
}
function ClientAssistanceComponent_tr_828_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.acct_no);
  }
}
function ClientAssistanceComponent_tr_828_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.patient_name);
  }
}
function ClientAssistanceComponent_tr_828_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.rendering_prov);
  }
}
function ClientAssistanceComponent_tr_828_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.responsibility);
  }
}
function ClientAssistanceComponent_tr_828_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.billed_submit_date);
  }
}
function ClientAssistanceComponent_tr_828_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.denial_code);
  }
}
function ClientAssistanceComponent_tr_828_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.statuscode);
  }
}
function ClientAssistanceComponent_tr_828_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.substatuscode);
  }
}
function ClientAssistanceComponent_tr_828_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, tab_dat_r38.total_charges, "1.2-2"));
  }
}
function ClientAssistanceComponent_tr_828_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, tab_dat_r38.total_ar, "1.2-2"));
  }
}
function ClientAssistanceComponent_tr_828_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-Nil-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.claim_Status);
  }
}
function ClientAssistanceComponent_tr_828_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, tab_dat_r38.followup_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_tr_828_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.assigned_to);
  }
}
function ClientAssistanceComponent_tr_828_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_828_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_dat_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tab_dat_r38.created_ats);
  }
}
function ClientAssistanceComponent_tr_828_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 198)(1, "td", 199)(2, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_828_Template_input_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const i_r39 = restoredCtx.index;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r96.selected($event, tab_dat_r38.claim_no, i_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ClientAssistanceComponent_tr_828_td_3_Template, 3, 1, "td", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ClientAssistanceComponent_tr_828_td_4_Template, 3, 1, "td", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_828_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](933);
      ctx_r98.open(_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r98.claimslection(tab_dat_r38));
    })("mouseover", function ClientAssistanceComponent_tr_828_Template_td_mouseover_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r99.tooltip(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ClientAssistanceComponent_tr_828_span_6_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ClientAssistanceComponent_tr_828_span_7_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseover", function ClientAssistanceComponent_tr_828_Template_td_mouseover_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r100.tooltip(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClientAssistanceComponent_tr_828_span_9_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ClientAssistanceComponent_tr_828_span_10_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ClientAssistanceComponent_tr_828_span_12_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ClientAssistanceComponent_tr_828_span_13_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ClientAssistanceComponent_tr_828_span_14_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_828_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](933);
      ctx_r101.open(_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r101.claimslection(tab_dat_r38));
    })("mouseover", function ClientAssistanceComponent_tr_828_Template_td_mouseover_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r102.tooltip(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ClientAssistanceComponent_tr_828_span_16_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ClientAssistanceComponent_tr_828_span_17_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseover", function ClientAssistanceComponent_tr_828_Template_td_mouseover_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r103.tooltip(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClientAssistanceComponent_tr_828_span_19_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClientAssistanceComponent_tr_828_span_20_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ClientAssistanceComponent_tr_828_span_22_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, ClientAssistanceComponent_tr_828_span_23_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ClientAssistanceComponent_tr_828_span_25_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, ClientAssistanceComponent_tr_828_span_26_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, ClientAssistanceComponent_tr_828_span_28_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ClientAssistanceComponent_tr_828_span_29_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClientAssistanceComponent_tr_828_span_31_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClientAssistanceComponent_tr_828_span_32_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, ClientAssistanceComponent_tr_828_span_34_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, ClientAssistanceComponent_tr_828_span_35_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, ClientAssistanceComponent_tr_828_span_37_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ClientAssistanceComponent_tr_828_span_38_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ClientAssistanceComponent_tr_828_span_40_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ClientAssistanceComponent_tr_828_span_41_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "td", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseover", function ClientAssistanceComponent_tr_828_Template_td_mouseover_42_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97);
      const tab_dat_r38 = restoredCtx.$implicit;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r104.tooltip(tab_dat_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClientAssistanceComponent_tr_828_span_43_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClientAssistanceComponent_tr_828_span_44_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, ClientAssistanceComponent_tr_828_span_46_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, ClientAssistanceComponent_tr_828_span_47_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, ClientAssistanceComponent_tr_828_span_49_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](50, ClientAssistanceComponent_tr_828_span_50_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, ClientAssistanceComponent_tr_828_span_52_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ClientAssistanceComponent_tr_828_span_53_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClientAssistanceComponent_tr_828_span_55_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, ClientAssistanceComponent_tr_828_span_56_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_dat_r38 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r3.selected_claim_nos.includes(tab_dat_r38.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.touch < ctx_r3.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.touch >= ctx_r3.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.claim_no == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.claim_no != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.dos == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.dos != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.age == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.age != null && tab_dat_r38.age > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.age <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.acct_no == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.acct_no != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.patient_name == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.patient_name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.rendering_prov == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.rendering_prov != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.responsibility == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.responsibility != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.billed_submit_date == null || tab_dat_r38.billed_submit_date == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.billed_submit_date != null || tab_dat_r38.billed_submit_date != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.denial_code == null || tab_dat_r38.denial_code == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.denial_code != null || tab_dat_r38.denial_code != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.statuscode == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.statuscode != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.substatuscode == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.substatuscode != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.total_charges == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.total_charges != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.total_ar == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.total_ar != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.claim_Status == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.claim_Status != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !tab_dat_r38.followup_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.followup_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !tab_dat_r38.assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !tab_dat_r38.created_ats);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", tab_dat_r38.created_ats);
  }
}
function ClientAssistanceComponent_tr_830_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 211)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_div_834_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 212)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Showing ", ctx_r5.skip_rows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("to ", ctx_r5.current_rows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" of ", ctx_r5.total_rows, " records");
  }
}
function ClientAssistanceComponent_div_835_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 212)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Showing 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " of 0 records");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_tr_923_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_923_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_923_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_tr_923_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_tr_923_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r111);
      const r_r105 = restoredCtx.$implicit;
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](939);
      ctx_r110.open(_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r110.get_wo_details(r_r105.id, r_r105.work_order_name, r_r105.created));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ClientAssistanceComponent_tr_923_td_16_Template, 2, 0, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ClientAssistanceComponent_tr_923_td_17_Template, 2, 0, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClientAssistanceComponent_tr_923_td_18_Template, 2, 0, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r105 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", r_r105.created, "/", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 13, r_r105.created_at, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r105.work_order_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r105.assigned_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r105.due_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r105.billed);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r105.ar_due);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r105.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", r_r105.priority == "low");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", r_r105.priority == "high");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", r_r105.priority == "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("tooltip", r_r105.work_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r7.myOptions);
  }
}
function ClientAssistanceComponent_tr_925_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 219)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_ng_template_928_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220)(1, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_928_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r116);
      const modal_r112 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r112.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "New Work Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 224)(7, "div", 130)(8, "form", 225, 226)(10, "div", 227)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Work Order Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "input", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 130)(15, "div", 229)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "input", 230, 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("focus", function ClientAssistanceComponent_ng_template_928_Template_input_focus_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r116);
      const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r114.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "label", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "label", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, " Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " High");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 238)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Work Order Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "textarea", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 227)(39, "button", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_928_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r116);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](931);
      ctx_r118.get_user_list();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r118.open(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "i", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Associates List");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 242)(43, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_928_Template_button_click_43_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r116);
      const modal_r112 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r112.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_928_Template_button_click_45_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r116);
      const modal_r112 = restoredCtx.$implicit;
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r120.create_workorder();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r112.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r10.workOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r10.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r113.valid || ctx_r10.assigned_claim_status == false);
  }
}
function ClientAssistanceComponent_ng_template_930_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r122.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r122.assigned_claim_nos, "");
  }
}
function ClientAssistanceComponent_ng_template_930_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 251)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Assigned Claims: 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r123.selected_claim_nos.length, "");
  }
}
function ClientAssistanceComponent_ng_template_930_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 251)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r124.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r124.assigned_claim_nos, "");
  }
}
function ClientAssistanceComponent_ng_template_930_tr_15_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td")(1, "input", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ClientAssistanceComponent_ng_template_930_tr_15_td_6_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r131);
      const assts_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r129.manual_assign($event, assts_r126.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assts_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r127.assigned_data[assts_r126.id]);
  }
}
function ClientAssistanceComponent_ng_template_930_tr_15_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_930_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_930_tr_15_Template_input_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r134);
      const assts_r126 = restoredCtx.$implicit;
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r133.select_associates($event, assts_r126.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ClientAssistanceComponent_ng_template_930_tr_15_td_6_Template, 2, 1, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ClientAssistanceComponent_ng_template_930_tr_15_td_7_Template, 2, 0, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assts_r126 = ctx.$implicit;
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("id", assts_r126.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", assts_r126.firstname, " ", assts_r126.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](assts_r126.assigned_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r125.selected_associates.includes(assts_r126.id) && ctx_r125.claim_assign_type == "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r125.selected_associates.includes(assts_r126.id) && ctx_r125.claim_assign_type == "Auto");
  }
}
function ClientAssistanceComponent_ng_template_930_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220)(1, "button", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_930_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r136);
      const modal_r121 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r121.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Users List");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 224)(7, "div", 130)(8, "span", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ClientAssistanceComponent_ng_template_930_div_10_Template, 8, 2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ClientAssistanceComponent_ng_template_930_div_11_Template, 8, 1, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ClientAssistanceComponent_ng_template_930_div_12_Template, 8, 2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "table", 247)(14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ClientAssistanceComponent_ng_template_930_tr_15_Template, 8, 6, "tr", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 242)(17, "span", 248)(18, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_930_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r136);
      const modal_r121 = restoredCtx.$implicit;
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r137.assign_type("Auto");
      ctx_r137.auto_assign_claims();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r121.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Auto Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_930_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r136);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r138.assign_type("Manual"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "button", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_930_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r136);
      const modal_r121 = restoredCtx.$implicit;
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r139.assign_claims();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r121.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", !ctx_r12.associate_error);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r12.associate_error, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r12.selected_claim_nos.length > 0 && ctx_r12.selected_claim_nos.length >= ctx_r12.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r12.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r12.selected_claim_nos.length > 0 && ctx_r12.selected_claim_nos.length < ctx_r12.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r12.users_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r12.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r12.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r12.selected_claim_nos.length == 0 || ctx_r12.selected_claim_nos.length < ctx_r12.assigned_claim_nos);
  }
}
function ClientAssistanceComponent_ng_template_932_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 256)(1, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r155);
      const x_r153 = restoredCtx.$implicit;
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r154.selected_tab(x_r153.claim_no);
      ctx_r154.get_line_items(x_r153);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r154.check_reassign_alloc(x_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r155);
      const x_r153 = restoredCtx.$implicit;
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r156.close_tab(x_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r153 = ctx.$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", x_r153.claim_no === ctx_r141.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("href", "#", x_r153.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Claim No: ", x_r153.claim_no, "");
  }
}
function ClientAssistanceComponent_ng_template_932_tr_122_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_tr_122_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r162);
      const x_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r160.referclaim(x_r157);
      ctx_r160.get_line_items(x_r157);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r160.check_reassign_alloc(x_r157));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, x_r157.dos, "MM/dd/yyyy"), " - ", x_r157.claim_no, "");
  }
}
function ClientAssistanceComponent_ng_template_932_tr_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ClientAssistanceComponent_ng_template_932_tr_122_td_1_Template, 3, 5, "td", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r158 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", i_r158 < 3);
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r166.claim_clicked.admit_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r168.claim_clicked.discharge_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](x_r164.cpt);
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, x_r164.ins_ar, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, x_r164.total_ar_due, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_932_tr_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ClientAssistanceComponent_ng_template_932_tr_159_span_2_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ClientAssistanceComponent_ng_template_932_tr_159_span_3_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ClientAssistanceComponent_ng_template_932_tr_159_span_5_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ClientAssistanceComponent_ng_template_932_tr_159_span_6_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClientAssistanceComponent_ng_template_932_tr_159_span_8_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClientAssistanceComponent_ng_template_932_tr_159_span_9_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ClientAssistanceComponent_ng_template_932_tr_159_span_11_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ClientAssistanceComponent_ng_template_932_tr_159_span_12_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ClientAssistanceComponent_ng_template_932_tr_159_span_14_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ClientAssistanceComponent_ng_template_932_tr_159_span_15_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td", 113)(19, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r164 = ctx.$implicit;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.admit_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.admit_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.discharge_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.discharge_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r164.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r164.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r164.ins_ar == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r164.ins_ar != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r164.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r164.total_ar_due != 0);
  }
}
function ClientAssistanceComponent_ng_template_932_span_175_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_span_175_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r180);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r179.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "F.Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_span_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ClientAssistanceComponent_ng_template_932_span_175_a_1_Template, 4, 0, "a", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r144.edit_permission == true);
  }
}
function ClientAssistanceComponent_ng_template_932_div_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 332)(1, "p", 333)(2, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", x_r181.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, x_r181.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", x_r181.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_932_div_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 336)(1, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 338)(1, "p", 333)(2, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", y_r182.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, y_r182.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", y_r182.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_932_div_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 336)(1, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_a_219_Template(rf, ctx) {
  if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_a_219_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r184);
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](937);
      ctx_r183.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r183.editnotes("client_notes_init", "none", ctx_r183.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", !ctx_r149.client_notes_data_list.includes(ctx_r149.claim_clicked.claim_no));
  }
}
function ClientAssistanceComponent_ng_template_932_div_224_Template(rf, ctx) {
  if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 332)(1, "p", 333)(2, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "i", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_224_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r187);
      const x_r185 = restoredCtx.$implicit;
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](937);
      ctx_r186.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r186.editnotes("clientnotes", x_r185.content, x_r185.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", x_r185.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, x_r185.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", x_r185.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_932_div_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 336)(1, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r202.claim_clicked.admit_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r204.claim_clicked.discharge_date, "MM/dd/yyyy"));
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](x_r200.cpt);
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, x_r200.ins_ar, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, x_r200.total_ar_due, "1.2-2"));
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_tr_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_2_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_3_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_5_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_6_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_8_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_9_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_11_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_12_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_14_Template, 2, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ClientAssistanceComponent_ng_template_932_div_305_tr_126_span_15_Template, 3, 4, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td", 113)(19, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r200 = ctx.$implicit;
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.claim_clicked.admit_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.claim_clicked.admit_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.claim_clicked.discharge_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.claim_clicked.discharge_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r200.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r200.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r200.ins_ar == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r200.ins_ar != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r200.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", x_r200.total_ar_due != 0);
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_span_142_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_span_142_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r216);
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r215.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "F.Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_span_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ClientAssistanceComponent_ng_template_932_div_305_span_142_a_1_Template, 4, 0, "a", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r190.edit_permission == true);
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 332)(1, "p", 333)(2, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r217 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", x_r217.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, x_r217.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", x_r217.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_div_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 336)(1, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_div_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 338)(1, "p", 333)(2, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r218 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", y_r218.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, y_r218.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", y_r218.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 336)(1, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_a_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_a_182_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r220);
      const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](937);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r219.open(_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r195.client_notes_data_list.includes(x_r188.claim_no));
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_div_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 332)(1, "p", 333)(2, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "i", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_div_191_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r224);
      const x_r222 = restoredCtx.$implicit;
      const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](937);
      ctx_r223.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r223.editnotes("clientnotes", x_r222.content, x_r222.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r222 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", x_r222.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, x_r222.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", x_r222.content, ". ");
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_div_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 336)(1, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_span_198_Template(rf, ctx) {
  if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 301)(3, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_span_198_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r227);
      const modal_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r140.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_span_199_Template(rf, ctx) {
  if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span")(1, "div", 347)(2, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_span_199_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r230);
      const x_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r228.close_tab(x_r188));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ClientAssistanceComponent_ng_template_932_div_305_Template(rf, ctx) {
  if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 341)(1, "div", 261)(2, "div", 130)(3, "div", 262)(4, "div", 16)(5, "div", 263)(6, "div", 123)(7, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 25)(11, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 265)(14, "div", 98)(15, "div", 2)(16, "div", 99)(17, "div", 22)(18, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 25)(22, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 28)(25, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "svg", 267)(27, "desc", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "defs", 31)(30, "path", 75)(31, "path", 76)(32, "path", 77)(33, "path", 78)(34, "path", 79)(35, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "text", 81)(37, "tspan", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "text", 83)(40, "tspan", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 128)(43, "div", 2)(44, "div", 268)(45, "table", 269)(46, "tbody")(47, "tr")(48, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "tr")(53, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "tr")(58, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "tr")(64, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 271)(69, "table", 269)(70, "tbody")(71, "tr")(72, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "tr")(80, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "tr")(85, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "div", 276)(91, "div", 277)(92, "div", 16)(93, "div", 263)(94, "div", 123)(95, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 25)(99, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](100, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "div", 128)(102, "div", 105)(103, "table", 106)(104, "thead")(105, "tr")(106, "th", 113)(107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "th", 113)(110, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "th", 113)(113, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "th", 113)(116, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "th", 113)(119, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "th", 113)(122, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](124, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](126, ClientAssistanceComponent_ng_template_932_div_305_tr_126_Template, 21, 10, "tr", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "div", 278)(128, "div", 25)(129, "a", 279)(130, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "a", 281)(133, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "a", 282)(136, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "a", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_Template_a_click_138_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r232);
      const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r231.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](139, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](142, ClientAssistanceComponent_ng_template_932_div_305_span_142_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "div", 285)(144, "div", 277)(145, "div", 16)(146, "div", 263)(147, "div", 123)(148, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](149, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](150, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "div", 25)(152, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](153, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](154, "div", 287)(155, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](156, ClientAssistanceComponent_ng_template_932_div_305_div_156_Template, 10, 6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](157, ClientAssistanceComponent_ng_template_932_div_305_div_157_Template, 3, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "div", 290)(159, "div", 277)(160, "div", 16)(161, "div", 263)(162, "div", 123)(163, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](164, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "div", 25)(167, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](168, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "div", 292)(170, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](171, ClientAssistanceComponent_ng_template_932_div_305_div_171_Template, 10, 6, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](172, ClientAssistanceComponent_ng_template_932_div_305_div_172_Template, 3, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](173, "div", 294)(174, "div", 277)(175, "div", 16)(176, "div", 263)(177, "div", 123)(178, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](179, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](180, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](182, ClientAssistanceComponent_ng_template_932_div_305_a_182_Template, 4, 1, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "a", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_div_305_Template_a_click_183_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r232);
      const x_r188 = restoredCtx.$implicit;
      const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](937);
      ctx_r233.open(_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r233.editnotes("client_notes_init", "none", x_r188));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](184, "i", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](186, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](187, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](188, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "div", 287)(190, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](191, ClientAssistanceComponent_ng_template_932_div_305_div_191_Template, 11, 6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](192, ClientAssistanceComponent_ng_template_932_div_305_div_192_Template, 3, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "div", 298)(194, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](195, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](196, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](197, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](198, ClientAssistanceComponent_ng_template_932_div_305_span_198_Template, 5, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](199, ClientAssistanceComponent_ng_template_932_div_305_span_199_Template, 4, 0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "div", 303)(201, "div", 304)(202, "div", 2)(203, "h4", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](204, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](205, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "form", 306)(207, "div", 307)(208, "div", 308)(209, "div", 309)(210, "div", 312)(211, "div", 227)(212, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](213, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](215, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](216, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "div", 308)(218, "div", 309)(219, "div", 312)(220, "div", 227)(221, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](222, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](223, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](224, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](225, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "div", 308)(227, "div", 309)(228, "div", 312)(229, "div", 227)(230, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](231, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](233, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](234, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](235, "div", 308)(236, "div", 309)(237, "div", 313)(238, "div", 227)(239, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](240, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](242, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](243, "select", 314)(244, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](245, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](246, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](247, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](248, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](249, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](250, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](251, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](252, "span", 315)(253, "span", 316)(254, "span", 344)(255, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](256, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](257, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](258, "b", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](259, "span", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r188 = ctx.$implicit;
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", x_r188.claim_no === ctx_r152.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("id", x_r188.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", x_r188.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", x_r188.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](62, 24, x_r188.dob, "MM/dd/yyyy"), ", ", x_r188.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", x_r188.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" - ", x_r188.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", x_r188.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r152.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r152.curr_reassigned_claims.includes(ctx_r152.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r152.active_refer_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r152.active_refer_process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r152.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r152.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r152.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", !ctx_r152.client_notes_data_list.includes(x_r188.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r152.active_refer_client);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r152.active_refer_client.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "x", x_r188.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "y", x_r188.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r152.refer_claim_editable == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r152.refer_claim_editable == "false");
  }
}
function ClientAssistanceComponent_ng_template_932_Template(rf, ctx) {
  if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220)(1, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r235);
      const modal_r140 = restoredCtx.$implicit;
      const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      modal_r140.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r234.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ul", 255)(5, "li", 256)(6, "a", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r235);
      const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r236.selected_tab("maintab");
      ctx_r236.get_line_items(ctx_r236.claim_clicked);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r236.check_reassign_alloc(ctx_r236.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClientAssistanceComponent_ng_template_932_li_9_Template, 7, 4, "li", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 259)(11, "div", 260)(12, "div", 261)(13, "div", 130)(14, "div", 262)(15, "div", 16)(16, "div", 263)(17, "div", 123)(18, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 25)(22, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 265)(25, "div", 98)(26, "div", 2)(27, "div", 99)(28, "div", 22)(29, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 25)(33, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 28)(36, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "svg", 267)(38, "desc", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "defs", 31)(41, "path", 75)(42, "path", 76)(43, "path", 77)(44, "path", 78)(45, "path", 79)(46, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "text", 81)(48, "tspan", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "text", 83)(51, "tspan", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "svg", 267)(54, "desc", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Created with Rapha\u00EBl 2.2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](56, "defs", 31)(57, "path", 75)(58, "path", 76)(59, "path", 77)(60, "path", 78)(61, "path", 79)(62, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "text", 81)(64, "tspan", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "In-Store Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "text", 83)(67, "tspan", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "div", 128)(70, "div", 2)(71, "div", 268)(72, "table", 269)(73, "tbody")(74, "tr")(75, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "tr")(80, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "tr")(85, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "tr")(91, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](92, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 271)(96, "table", 269)(97, "tbody")(98, "tr")(99, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](104, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "tr")(107, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "tr")(112, "td", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115, ": Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](116, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "div", 273)(118, "h4", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "table", 275)(121, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ClientAssistanceComponent_ng_template_932_tr_122_Template, 2, 1, "tr", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "div", 276)(124, "div", 277)(125, "div", 16)(126, "div", 263)(127, "div", 123)(128, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](129, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "div", 25)(132, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](133, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "div", 128)(135, "div", 105)(136, "table", 106)(137, "thead")(138, "tr")(139, "th", 113)(140, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "th", 113)(143, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](144, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](145, "th", 113)(146, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "th", 113)(149, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](150, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "th", 113)(152, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](154, "th", 113)(155, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](156, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](157, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](159, ClientAssistanceComponent_ng_template_932_tr_159_Template, 21, 10, "tr", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "div", 278)(161, "div", 25)(162, "a", 279)(163, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "a", 281)(166, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "a", 282)(169, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "a", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_Template_a_click_171_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r235);
      const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r237.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](172, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](173, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](174, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](175, ClientAssistanceComponent_ng_template_932_span_175_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "div", 285)(177, "div", 277)(178, "div", 16)(179, "div", 263)(180, "div", 123)(181, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](182, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](183, " Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](184, "div", 25)(185, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](186, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](187, "div", 287)(188, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](189, ClientAssistanceComponent_ng_template_932_div_189_Template, 10, 6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](190, ClientAssistanceComponent_ng_template_932_div_190_Template, 3, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "div", 290)(192, "div", 277)(193, "div", 16)(194, "div", 263)(195, "div", 123)(196, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](197, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](198, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](199, "div", 25)(200, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](201, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "div", 292)(203, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](204, ClientAssistanceComponent_ng_template_932_div_204_Template, 10, 6, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](205, ClientAssistanceComponent_ng_template_932_div_205_Template, 3, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "div", 294)(207, "div", 277)(208, "div", 16)(209, "div", 263)(210, "div", 123)(211, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](212, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](213, " Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "div", 25)(215, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_Template_a_click_215_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r235);
      const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](937);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r238.open(_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](216, "i", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](218, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](219, ClientAssistanceComponent_ng_template_932_a_219_Template, 4, 1, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](221, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "div", 287)(223, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](224, ClientAssistanceComponent_ng_template_932_div_224_Template, 11, 6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](225, ClientAssistanceComponent_ng_template_932_div_225_Template, 3, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "div", 298)(227, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](228, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](229, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](230, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](231, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "div", 301)(233, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_932_Template_button_click_233_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r235);
      const modal_r140 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r140.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](234, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](235, "div", 303)(236, "div", 304)(237, "div", 2)(238, "h4", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](239, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](240, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "form", 306)(242, "div", 307)(243, "div", 308)(244, "div", 309)(245, "div", 310)(246, "div", 227)(247, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](250, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](251, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](252, "div", 308)(253, "div", 309)(254, "div", 312)(255, "div", 227)(256, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](257, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](258, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](259, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](260, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](261, "div", 308)(262, "div", 309)(263, "div", 312)(264, "div", 227)(265, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](266, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](267, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](268, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](269, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](270, "div", 308)(271, "div", 309)(272, "div", 313)(273, "div", 227)(274, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](275, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](276, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](277, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](278, "select", 314)(279, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](280, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](281, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](282, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](283, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](284, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](285, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](286, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](287, "span", 315)(288, "span", 316)(289, "span", 317)(290, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](291, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](292, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](293, "b", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](294, "span", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](295, "form", 306)(296, "div", 128)(297, "div", 130)(298, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](299, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](300, "textarea", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](301, "button", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](302, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](303, "button", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](304, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](305, ClientAssistanceComponent_ng_template_932_div_305_Template, 260, 27, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](306, "div", 242);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r14.main_tab == ctx_r14.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r14.claim_clicked.claim_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r14.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", ctx_r14.claim_clicked.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", ctx_r14.claim_clicked.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](89, 25, ctx_r14.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r14.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](":", ctx_r14.claim_clicked.ssn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" - ", ctx_r14.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](": ", ctx_r14.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r14.curr_reassigned_claims.includes(ctx_r14.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.process_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r14.process_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx_r14.claim_notes == null ? null : ctx_r14.claim_notes.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r14.client_notes_data_list.includes(ctx_r14.claim_clicked.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r14.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.client_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r14.client_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.refer_claim_det);
  }
}
function ClientAssistanceComponent_ng_template_934_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_934_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r245);
      const modal_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r244.savenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r240.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r241.valid);
  }
}
function ClientAssistanceComponent_ng_template_934_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_934_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r248);
      const modal_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r247.updatenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r240.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r241.valid);
  }
}
function ClientAssistanceComponent_ng_template_934_Template(rf, ctx) {
  if (rf & 1) {
    const _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220)(1, "button", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_934_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r251);
      const modal_r240 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r240.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 224)(7, "div", 298)(8, "form", 225, 226)(10, "div", 2)(11, "div", 16)(12, "div", 130)(13, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "textarea", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 242)(16, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_934_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r251);
      const modal_r240 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r240.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClientAssistanceComponent_ng_template_934_button_18_Template, 2, 1, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClientAssistanceComponent_ng_template_934_button_19_Template, 2, 1, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r16.processNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r16.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r16.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r16.editnote_value);
  }
}
function ClientAssistanceComponent_ng_template_936_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_936_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258);
      const modal_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r257.savenotes("client_notes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r253.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r254.valid);
  }
}
function ClientAssistanceComponent_ng_template_936_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_936_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r261);
      const modal_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r260.updatenotes("client_notes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r253.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !_r254.valid);
  }
}
function ClientAssistanceComponent_ng_template_936_Template(rf, ctx) {
  if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220)(1, "button", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_936_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r264);
      const modal_r253 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r253.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Client Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 224)(7, "div", 298)(8, "form", 225, 226)(10, "div", 2)(11, "div", 16)(12, "div", 130)(13, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "textarea", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 242)(16, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_936_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r264);
      const modal_r253 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r253.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClientAssistanceComponent_ng_template_936_button_18_Template, 2, 1, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClientAssistanceComponent_ng_template_936_button_19_Template, 2, 1, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r18.clientNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r18.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r18.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r18.editnote_value);
  }
}
function ClientAssistanceComponent_ng_template_938_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 208)(2, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "td", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wo_det_r268 = ctx.$implicit;
    const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 14, wo_det_r268.dos, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.rendering_prov);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.responsibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.total_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.total_ar);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.claim_Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](wo_det_r268.claim_note);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"]("", wo_det_r268.assigned_to_name, "/", ctx_r267.wo_created, "/", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](27, 17, wo_det_r268.created_at, "dd-MM"), "");
  }
}
function ClientAssistanceComponent_ng_template_938_Template(rf, ctx) {
  if (rf & 1) {
    const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220)(1, "button", 353)(2, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 261)(7, "div", 130)(8, "div", 262)(9, "div", 16)(10, "div", 263)(11, "div", 123)(12, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " Claims List");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 25)(16, "p", 153)(17, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_938_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r270);
      const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r269.wo_export_function("print"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_938_Template_i_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r270);
      const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r271.wo_export_function("excel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_ng_template_938_Template_i_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r270);
      const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r272.wo_export_function("PDF"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 128)(25, "div", 130)(26, "div", 180)(27, "table", 106)(28, "thead")(29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Claim No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "DOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "Patient Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Rendering Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Responsibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Total Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Total AR");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Claim Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Claim Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "Assigned To/By/Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, ClientAssistanceComponent_ng_template_938_tr_54_Template, 28, 20, "tr", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](55, "div", 242);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r20.wo_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r20.wo_details);
  }
}
function ClientAssistanceComponent_ng_template_940_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Auth No : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.auth_no) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.auth_no : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Admit Date : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.admit_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](5, 10, ctx_r22.claim_data == null ? null : ctx_r22.claim_data.admit_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Discharge Date : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.discharge_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 13, ctx_r22.claim_data == null ? null : ctx_r22.claim_data.discharge_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" CPT : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.cpt) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.cpt : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ICD : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.icd) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.icd : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Modifiers : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.modifiers) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.modifiers : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Units : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.units) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.units : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Facility : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.facility) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.facility : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Billing Provider : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.billing_prov) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.billing_prov : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Insurance Type : ", (ctx_r22.claim_data == null ? null : ctx_r22.claim_data.insurance_type) ? ctx_r22.claim_data == null ? null : ctx_r22.claim_data.insurance_type : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_942_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Guarantor : ", ctx_r24.claim_data.guarantor ? ctx_r24.claim_data.guarantor : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" DOB : ", ctx_r24.claim_data.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](5, 12, ctx_r24.claim_data.dob, "MM/dd/yyyy") : "-Nil-", " | Age : ", ctx_r24.calculateAge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" SSN : ", ctx_r24.claim_data.ssn ? ctx_r24.claim_data.ssn : "-Nil-", " | Gender : ", ctx_r24.claim_data.gender ? ctx_r24.claim_data.gender : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx_r24.claim_data.address_1 ? ctx_r24.claim_data.address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx_r24.claim_data.address_2 ? ctx_r24.claim_data.address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" City : ", ctx_r24.claim_data.city ? ctx_r24.claim_data.city : "-Nil-", " | State : ", ctx_r24.claim_data.state ? ctx_r24.claim_data.state : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Zip Code : ", ctx_r24.claim_data.zipcode ? ctx_r24.claim_data.zipcode : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" Phone Number : ", ctx_r24.claim_data.phone_no ? ctx_r24.claim_data.phone_no : "-Nil-", " Employer : ", ctx_r24.claim_data.employer ? ctx_r24.claim_data.employer : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_944_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Primary Policy ID : ", ctx_r26.claim_data.prim_pol_id ? ctx_r26.claim_data.prim_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Primary Group ID : ", ctx_r26.claim_data.prim_group_id ? ctx_r26.claim_data.prim_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Primary Address 1 : ", ctx_r26.claim_data.prim_address_1 ? ctx_r26.claim_data.prim_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Primary Address 2 : ", ctx_r26.claim_data.prim_address_2 ? ctx_r26.claim_data.prim_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Primary City : ", ctx_r26.claim_data.prim_city ? ctx_r26.claim_data.prim_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Primary State : ", ctx_r26.claim_data.prim_state ? ctx_r26.claim_data.prim_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Primary Zip Code : ", ctx_r26.claim_data.prim_zipcode ? ctx_r26.claim_data.prim_zipcode : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_946_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Secondary Policy ID : ", ctx_r28.claim_data.sec_pol_id ? ctx_r28.claim_data.sec_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Secondary Group ID : ", ctx_r28.claim_data.sec_group_id ? ctx_r28.claim_data.sec_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Secondary Address 1 : ", ctx_r28.claim_data.sec_address_1 ? ctx_r28.claim_data.sec_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Secondary Address 2 : ", ctx_r28.claim_data.sec_address_2 ? ctx_r28.claim_data.sec_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Secondary City : ", ctx_r28.claim_data.sec_city ? ctx_r28.claim_data.sec_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Secondary State : ", ctx_r28.claim_data.sec_state ? ctx_r28.claim_data.sec_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Secondary Zip Code : ", ctx_r28.claim_data.sec_zipcode, "");
  }
}
function ClientAssistanceComponent_ng_template_948_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Tertiary Policy ID : ", ctx_r30.claim_data.ter_pol_id ? ctx_r30.claim_data.ter_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Tertiary Group ID : ", ctx_r30.claim_data.ter_group_id ? ctx_r30.claim_data.ter_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Tertiary Address 1 : ", ctx_r30.claim_data.ter_address_1 ? ctx_r30.claim_data.ter_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Tertiary Address 2 : ", ctx_r30.claim_data.ter_address_2 ? ctx_r30.claim_data.ter_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Tertiary City : ", ctx_r30.claim_data.ter_city ? ctx_r30.claim_data.ter_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Tertiary State : ", ctx_r30.claim_data.ter_state ? ctx_r30.claim_data.ter_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Tertiary Zip Code : ", ctx_r30.claim_data.ter_zipcode ? ctx_r30.claim_data.ter_zipcode : "-Nil-", "");
  }
}
function ClientAssistanceComponent_ng_template_950_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Patient AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 2, ctx_r32.claim_data.pat_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](4, 5, ctx_r32.claim_data.pat_ar, "1.2-2") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Insurance AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 8, ctx_r32.claim_data.ins_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 11, ctx_r32.claim_data.ins_ar, "1.2-2") : "-Nil-", "");
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
  constructor(formBuilder, Jarwis, setus, loadingBar, modalService, follow, toastr, excelService, export_handler, notify_service, datepipe, date_config, calendar, notes_hadler) {
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
      total_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(this.decimal_pattern)]),
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
    this.processNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      processnotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])
    });
    this.clientNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      client_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])
    });
    this.workOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      workorder_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      wo_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])
    });
    this.subscription = this.notify_service.fetch_touch_limit().subscribe(message => {
      this.touch_count = message;
    });
  }
  ngAfterViewInit() {
    if (this.touch_count == undefined) {
      this.touch_count = this.notify_service.manual_touch_limit();
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
  return new (t || ClientAssistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_2__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_Services_followup_service__WEBPACK_IMPORTED_MODULE_3__.FollowupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_15__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_Services_export_functions_service__WEBPACK_IMPORTED_MODULE_5__.ExportFunctionsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_Services_notify_service__WEBPACK_IMPORTED_MODULE_6__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDatepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_7__.NotesHandlerService));
};
ClientAssistanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ClientAssistanceComponent,
  selectors: [["app-client-assistance"]],
  decls: 952,
  vars: 30,
  consts: [[1, "content", "no-padding"], [1, "row", 2, "padding-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "box", "no-shadow", "no-border", "no-bottom"], [1, "no-padding"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [1, "active"], ["href", "#tab_2", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-file-text"], [1, "tab-divider"], [1, "hide"], ["href", "#tab_4", "data-toggle", "tab"], [1, "fa", "fa-dashboard"], [1, "tab-content", "no-padding"], ["id", "tab_4", 1, "tab-pane"], [1, "box-body", "no-padding"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "list-heading", 2, "background", "#e2e6ef", "padding", "10px 10px", "margin-top", "0px", "margin-bottom", "20px", "border-radius", "2px 2px 0px 0px"], [1, "row", "hide"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "box", "box-primary", "no-border", "no-shadow"], [1, "box-header", "no-border", "p-t-0", "p-b-0"], [1, "box-title", "list-heading", "p-t-0", "p-b-0"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", "p-t-0"], [1, "fa", "fa-minus"], [1, "box-body", "chart-responsive"], ["id", "revenue-chart", 1, "chart", 2, "height", "230px", "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["height", "342", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "205", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "205", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,205H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "160", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "160", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,160H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "115", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "115", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,115H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "70", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "70", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,70H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "12.5", "y", "25", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "stroke", "none", "fill", "#888888", "font-weight", "normal", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "end", "font-family", "sans-serif", "font-size", "12px", "font-weight", "normal"], ["dy", "25", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#aaaaaa", "d", "M25,25H26", "stroke-width", "0.5", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "#74a5c2", "stroke", "none", "d", "M25,173.008C25.027946537059538,173.398,25.083839611178615,175.72975,25.111786148238153,174.56799999999998C25.13973268529769,173.40624999999997,25.195625759416767,165.44239344262294,25.223572296476306,163.714C25.251215066828674,162.00439344262296,25.306500607533415,162.19825,25.334143377885784,160.816C25.361786148238153,159.43375,25.417071688942894,154.59459836065577,25.444714459295263,152.656C25.4726609963548,150.69609836065575,25.528554070473877,145.14025,25.556500607533415,145.222C25.584447144592954,145.30375,25.64034021871203,161.66314754098357,25.668286755771568,153.31C25.695929526123937,145.04764754098358,25.751215066828678,83.68606629834258,25.778857837181047,78.75999999999999C25.806196840826246,73.88806629834258,25.860874848116648,109.00357692307695,25.888213851761847,114.118C25.916160388821385,119.34607692307695,25.972053462940462,118.627,26,120.13L26,205L25,205Z", "fill-opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "fill-opacity", "1"], ["fill", "none", "stroke", "#3c8dbc", "d", "M25,173.008C25.027946537059538,173.398,25.083839611178615,175.72975,25.111786148238153,174.56799999999998C25.13973268529769,173.40624999999997,25.195625759416767,165.44239344262294,25.223572296476306,163.714C25.251215066828674,162.00439344262296,25.306500607533415,162.19825,25.334143377885784,160.816C25.361786148238153,159.43375,25.417071688942894,154.59459836065577,25.444714459295263,152.656C25.4726609963548,150.69609836065575,25.528554070473877,145.14025,25.556500607533415,145.222C25.584447144592954,145.30375,25.64034021871203,161.66314754098357,25.668286755771568,153.31C25.695929526123937,145.04764754098358,25.751215066828678,83.68606629834258,25.778857837181047,78.75999999999999C25.806196840826246,73.88806629834258,25.860874848116648,109.00357692307695,25.888213851761847,114.118C25.916160388821385,119.34607692307695,25.972053462940462,118.627,26,120.13", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25", "cy", "173.008", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.111786148238153", "cy", "174.56799999999998", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.223572296476306", "cy", "163.714", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.334143377885784", "cy", "160.816", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.444714459295263", "cy", "152.656", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.556500607533415", "cy", "145.222", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.668286755771568", "cy", "153.31", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.778857837181047", "cy", "78.75999999999999", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.888213851761847", "cy", "114.118", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "26", "cy", "120.13", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "#eaf3f6", "stroke", "none", "d", "M25,189.004C25.027946537059538,188.83599999999998,25.083839611178615,190.0165,25.111786148238153,188.332C25.13973268529769,186.64749999999998,25.195625759416767,176.27380327868852,25.223572296476306,175.528C25.251215066828674,174.79030327868853,25.306500607533415,183.8215,25.334143377885784,182.398C25.361786148238153,180.9745,25.417071688942894,165.55945081967212,25.444714459295263,164.14C25.4726609963548,162.70495081967212,25.528554070473877,169.48749999999998,25.556500607533415,170.98C25.584447144592954,172.4725,25.64034021871203,183.17078688524583,25.668286755771568,176.07999999999998C25.695929526123937,169.06628688524586,25.751215066828678,118.9865607734807,25.778857837181047,114.562C25.806196840826246,110.1860607734807,25.860874848116648,135.95198351648352,25.888213851761847,140.878C25.916160388821385,145.91348351648352,25.972053462940462,151.02550000000002,26,154.40800000000002L26,205L25,205Z", "fill-opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "fill-opacity", "1"], ["fill", "none", "stroke", "#a0d0e0", "d", "M25,189.004C25.027946537059538,188.83599999999998,25.083839611178615,190.0165,25.111786148238153,188.332C25.13973268529769,186.64749999999998,25.195625759416767,176.27380327868852,25.223572296476306,175.528C25.251215066828674,174.79030327868853,25.306500607533415,183.8215,25.334143377885784,182.398C25.361786148238153,180.9745,25.417071688942894,165.55945081967212,25.444714459295263,164.14C25.4726609963548,162.70495081967212,25.528554070473877,169.48749999999998,25.556500607533415,170.98C25.584447144592954,172.4725,25.64034021871203,183.17078688524583,25.668286755771568,176.07999999999998C25.695929526123937,169.06628688524586,25.751215066828678,118.9865607734807,25.778857837181047,114.562C25.806196840826246,110.1860607734807,25.860874848116648,135.95198351648352,25.888213851761847,140.878C25.916160388821385,145.91348351648352,25.972053462940462,151.02550000000002,26,154.40800000000002", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25", "cy", "189.004", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.111786148238153", "cy", "188.332", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.223572296476306", "cy", "175.528", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.334143377885784", "cy", "182.398", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.444714459295263", "cy", "164.14", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.556500607533415", "cy", "170.98", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.668286755771568", "cy", "176.07999999999998", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.778857837181047", "cy", "114.562", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.888213851761847", "cy", "140.878", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "26", "cy", "154.40800000000002", "r", "4", "fill", "#a0d0e0", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "morris-hover", "morris-default-style", 2, "display", "none"], [1, "box", "box-danger", "no-border", "no-shadow", "hide"], [1, "box-title", "list-heading"], ["id", "sales-chart", 1, "chart", 2, "height", "230px", "position", "relative"], ["fill", "none", "stroke", "#3c8dbc", "d", "M0,108.33333333333333A-6.666666666666667,-6.666666666666667,0,0,0,-5.228486604698025,110.86389406942499", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#3c8dbc", "stroke", "#ffffff", "d", "M0,111.33333333333333A-3.666666666666667,-3.666666666666667,0,0,0,-2.8756676325839137,112.72514173818374L-11.764094860570555,105.69376165620622A-15,-15,0,0,1,0,100Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#f56954", "d", "M-5.228486604698025,110.86389406942499A-6.666666666666667,-6.666666666666667,0,1,0,6.054042404487644,117.79159721469804", "stroke-width", "2", "opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "1"], ["fill", "#f56954", "stroke", "#ffffff", "d", "M-2.8756676325839137,112.72514173818374A-3.666666666666667,-3.666666666666667,0,1,0,3.3297233224682046,116.53537846808393L9.081063606731467,119.18739582204708A-10,-10,0,1,1,-7.842729907047037,108.79584110413748Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#00a65a", "d", "M6.054042404487644,117.79159721469804A-6.666666666666667,-6.666666666666667,0,0,0,0.0020943950679349903,108.33333366232014", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#00a65a", "stroke", "#ffffff", "d", "M3.3297233224682046,116.53537846808393A-3.666666666666667,-3.666666666666667,0,0,0,0.0011519172873642447,111.33333351427608L0.004712388902853728,100.00000074022033A-15,-15,0,0,1,13.6215954100972,121.2810937330706Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], ["dy", "105", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "125", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "14px", "stroke", "none", "fill", "#000000", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "14px"], ["dy", "125", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "box", "box-info", "no-border", "no-shadow"], ["id", "line-chart", 1, "chart", 2, "height", "230px", "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#3c8dbc", "d", "M25,181.006C25.027946537059538,180.754,25.083839611178615,182.52474999999998,25.111786148238153,179.998C25.13973268529769,177.47125,25.195625759416767,161.9107049180328,25.223572296476306,160.792C25.251215066828674,159.68545491803278,25.306500607533415,173.23225000000002,25.334143377885784,171.097C25.361786148238153,168.96175,25.417071688942894,145.8391762295082,25.444714459295263,143.71C25.4726609963548,141.55742622950822,25.528554070473877,151.73125,25.556500607533415,153.97C25.584447144592954,156.20875,25.64034021871203,172.2561803278688,25.668286755771568,161.62C25.695929526123937,151.0994303278688,25.751215066828678,75.97984116022108,25.778857837181047,69.34300000000002C25.806196840826246,62.779091160221085,25.860874848116648,101.42797527472531,25.888213851761847,108.81700000000001C25.916160388821385,116.37022527472531,25.972053462940462,124.03825000000002,26,129.11200000000002", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25", "cy", "181.006", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.111786148238153", "cy", "179.998", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.223572296476306", "cy", "160.792", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.334143377885784", "cy", "171.097", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.444714459295263", "cy", "143.71", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.556500607533415", "cy", "153.97", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.668286755771568", "cy", "161.62", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.778857837181047", "cy", "69.34300000000002", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "25.888213851761847", "cy", "108.81700000000001", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["cx", "26", "cy", "129.11200000000002", "r", "4", "fill", "#3c8dbc", "stroke", "#ffffff", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "row"], [1, "box", "box-success", "no-border", "no-shadow"], [1, "form-control", 2, "margin-top", "-10px"], [1, "box-body", "no-padding", 2, "border-top", "2px solid #f3f4f9", "margin-top", "0px"], [1, "list-heading", 2, "padding", "10px 20px", "margin-top", "10px", "border-radius", "2px 2px 0px 0px"], ["href", "#tab_3", "data-toggle", "tab", 1, "pull-right", 2, "font-size", "13px"], [1, "fa", "fa-file-o"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "table-striped1", "table"], [2, "width", "1%"], ["type", "checkbox", 2, "margin-top", "0px"], [1, "font600", "line-height-24"], [1, "font600", "text-right", "line-height-24"], ["type", "checkbox"], [1, "text-right"], [1, ""], [1, "font600"], [1, "ar-blue"], [1, "text-right", "ar-blue", "font600"], ["id", "tab_5", 1, "tab-pane", "hide"], [1, "list-heading", 2, "padding", "10px 20px", "margin-top", "20px", "border-radius", "2px 2px 0px 0px"], [1, "ar-blue", "font600"], ["id", "tab_2", 1, "tab-pane", "active"], [1, "box", "no-shadow", "no-border"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xs-12"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "fa", "fa-filter", "ar-blue"], ["data-target", "#ca_search", "data-toggle", "collapse", "data-widget", "collapse", "type", "button", "aria-expanded", "false", "aria-controls", "ca_search", 1, "btn", "btn-box-tool", "collapsed"], [1, "fa", "fa-plus"], ["id", "ca_search", 1, "collapse"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding"], [1, "form-group", "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "claim_no", 1, "form-control"], ["type", "text", "formControlName", "acc_no", 1, "form-control"], ["type", "text", "formControlName", "patient_name", 1, "form-control"], [1, "form-group", "col-md-4", "col-sm-4", "col-lg-4", "col-xs-12"], ["type", "text", "formControlName", "rendering_provider", 1, "form-control"], ["type", "text", "formControlName", "responsibility", 1, "form-control"], ["type", "text", "placeholder", "10.00-20.00", "formControlName", "total_ar", 1, "form-control"], ["formControlName", "status_code", 3, "config", "options", "change"], ["formControlName", "sub_status_code", 3, "config", "options"], ["type", "text", "formControlName", "payer_name", "placeholder", "Search Payer", "list", "SearchResults", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngIf"], ["type", "text", "formControlName", "denial_code", 1, "form-control"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], [1, "box-tools", "searchbox"], ["type", "text", "placeholder", "Search..", "name", "search"], ["type", "submit"], [1, "fa", "fa-search"], [1, "", 2, "margin-top", "5px"], ["title", "Excel", 1, "fa", "fa-file-excel-o", 2, "cursor", "pointer", 3, "click"], ["id", "print-section", 1, "col-lg-12", "col-md-12", "col-sm-12", "listing-table", "no-padding"], [1, "table-responsive"], ["id", "contentToConvert", 1, "table-striped1", "table"], [1, "noprint", 2, "width", "1%"], ["type", "checkbox", "title", "Select All", 2, "margin-top", "0px", 3, "click"], [1, "font600", "line-height-24", 3, "click"], [1, "fa", "fa-fw", "fa-sort"], [3, "click"], ["class", "clickable-row cur-pointer", "data-toggle", "modal", "data-target", "#claims-new2", 4, "ngFor", "ngForOf"], [1, "has-text-centered", "noprint"], ["class", "col-lg-6 col-md-6 col-sm-6 col-xs-12", "style", "text-align: right;", "class", "showing_count", 4, "ngIf"], ["id", "tab_1", 1, "tab-pane"], ["type", "text", "placeholder", "Search..", 1, "form-control", "pull-right", 2, "width", "300px", "margin-top", "1px", "font-weight", "normal"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], ["aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 2, "width", "100%"], ["value", "2"], ["value", "1"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "box-tools", "pull-right", 2, "margin-top", "5px"], ["title", "Print", 1, "fa", "fa-print", 2, "cursor", "pointer", 3, "click"], [2, "margin-left", "10px", "color", "#ccc", "margin-right", "10px"], ["title", "PDF", 1, "fa", "fa-file-pdf-o", 2, "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table", "no-padding"], ["class", "clickable-row cur-pointer", "data-toggle", "modal", "data-target", "#wo-claims-list", 3, "click", 4, "ngFor", "ngForOf"], [1, "has-text-centered"], ["id", "wo_foo", 3, "maxSize", "pageChange"], ["new_workorder", ""], ["associates", ""], ["claimpage", ""], ["processnotes", ""], ["clientnotes", ""], ["work_order_details", ""], ["HtmlContent", ""], ["AccNo", ""], ["PriInsurance", ""], ["SecInsurance", ""], ["TerInsurance", ""], ["TotalAr", ""], [3, "ngValue"], [4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#claims-new2", 1, "clickable-row", "cur-pointer"], [1, "noprint"], ["type", "checkbox", 2, "margin-top", "0px", 3, "checked", "click"], ["title", "Touch Count", 4, "ngIf"], ["tooltip", "HtmlContent", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options", "click", "mouseover"], ["tooltip", "HtmlContent", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", "dos-date", 3, "options", "mouseover"], [1, "cur-pointer"], ["tooltip", "AccNo", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options", "click", "mouseover"], ["tooltip", "AccNo", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options", "mouseover"], ["tooltip", "TotalAr", "content-type", "template", "tooltip-class", "tooltip-feedback", 1, "cur-pointer", 3, "options", "mouseover"], ["title", "Touch Count"], [1, "ar"], [1, "ar-red"], ["align", "center", "colspan", "12"], [1, "showing_count", 2, "text-align", "right"], ["data-toggle", "modal", "data-target", "#wo-claims-list", 1, "clickable-row", "cur-pointer", 3, "click"], ["class", "cur-pointer", 4, "ngIf"], [1, "fa", "fa-file-text", 3, "tooltip", "options"], ["title", "Low", 1, "fa", "fa-arrow-down"], ["title", "High", 1, "fa", "fa-arrow-up"], ["title", "Medium", 1, "fa", "fa-align-justify"], ["align", "center", "colspan", "10"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-title", "list-heading"], [1, "modal-body"], [1, "form-horizontal", 3, "formGroup"], ["modalform", "ngForm"], [1, "form-group"], ["type", "text", "formControlName", "workorder_name", 1, "form-control"], [1, "form-group", "col-lg-6", "no-padding"], ["type", "text", "formControlName", "due_date", "ngbDatepicker", "", "autocomplete", "off", 1, "form-control", 3, "focus"], ["due_date", "ngbDatepicker"], ["for", "low"], ["type", "radio", "id", "low", "name", "priority", "formControlName", "priority", "value", "low"], ["for", "medium"], ["type", "radio", "id", "medium", "name", "priority", "formControlName", "priority", "value", "medium"], ["for", "high"], ["type", "radio", "id", "high", "name", "priority", "formControlName", "priority", "value", "high"], [1, "form-group", 2, "margin-top", "10px"], ["formControlName", "wo_notes", 1, "form-control", "text-space", 2, "height", "90px"], ["data-toggle", "modal", "data-target", "#modal-user", 1, "btn", "btn-file", "btn-xs", "btn-flat", "pull-right", 3, "disabled", "click"], [1, "fa", "fa-users"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", "pull-left", 2, "margin-top", "20px", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "alert-danger", "pull-center", 2, "margin-top", "-1px", 3, "hidden"], [1, "table", "no-border", "no-bottom"], [1, "pull-left", 2, "margin-top", "20px"], [1, "cur-pointer", "btn", "btn-default", "btn-sm", "btn-flat", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "btn-sm", "btn-flat", 2, "margin-top", "20px", 3, "disabled", "click"], [2, "color", "red"], ["type", "checkbox", 2, "margin-top", "0px", 3, "id", "click"], ["type", "text", "size", "3", "knifeOnlyNumbers", "", 3, "value", "keyup"], ["type", "text", "value", "0", "size", "2", "disabled", ""], [1, "nav", "nav-tabs"], [1, "testClass"], ["href", "#{main_tab}", "data-toggle", "tab", 3, "click"], ["class", "testClass", 3, "active", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "maintab", 1, "tab-pane"], [1, "modal-body", "no-padding"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "margin-top", "10px"], [1, "box", "no-shadow", "no-bottom", "no-border"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool"], [1, "box-body", "no-padding", "hide"], ["id", "sales-chart", 1, "chart", 2, "height", "230px"], ["height", "230", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", "p-l-0"], [1, "table", "no-border", "table-striped-nb"], [1, "table-label"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-12", "p-l-0"], [1, "text-orange"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], [1, "ar-blue", 2, "margin-top", "0px", "font-size", "16px"], [1, "table", "no-border", "table-striped-nb", 2, "cursor", "pointer"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "box", "no-shadow", "no-border", 2, "margin-top", "10px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "5px solid #e9ecf3", "border-bottom", "3px solid #e9ecf3"], ["aria-expanded", "false", "data-target", "#Process_Notes", "data-toggle", "collapse", "title", "Process Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [2, "text-decoration", "underline"], ["aria-expanded", "false", "data-target", "#Claim_Note", "data-toggle", "collapse", "title", "Claim Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["aria-expanded", "false", "data-target", "#Client_Notes", "data-toggle", "collapse", "title", "Client Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["data-toggle", "collapse", "data-target", "#followupview", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template View", 1, "fa", "fa-external-link-square"], ["id", "Process_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "box-body", "no-padding", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "margin-top:5px;", 4, "ngIf"], ["id", "Claim_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box25", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box25", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;margin-top:5px;", 4, "ngFor", "ngForOf"], ["id", "Client_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["data-toggle", "modal", 1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "fa", "fa-plus-circle"], ["class", "cur-pointer", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "0px"], ["id", "followup-list3", "aria-expanded", "false", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid rgb(233, 236, 243)", "height", "15px"], ["id", "followupview", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "text-center", "close-btn"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "background", "#f9f9f9"], ["id", "client-assistant-list", 1, "collapse", 2, "margin-top", "10px"], [1, "", 2, "font-size", "16px", "margin-top", "20px"], [1, "form-horizontal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px solid #f3f4f9"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-11", "no-padding"], ["type", "text", 1, "form-control"], [1, "col-lg-11", "col-md-11", "col-sm-11", "col-xs-12", "no-padding"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-12", "col-lg-offset-1", "col-md-offset-1", "col-sm-offset-1", "no-padding"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible", 2, "width", "100%"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", 2, "width", "100%"], [1, "selection"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-xxst-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-xxst-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["role", "presentation", 1, "select2-selection__arrow"], ["role", "presentation"], ["aria-hidden", "true", 1, "dropdown-wrapper"], [1, "form-control", "text-space"], [1, "btn", "btn-default", "btn-sm", "text-center"], [1, "btn", "btn-info", "btn-sm", "text-center"], ["class", "tab-pane", 3, "active", "id", 4, "ngFor", "ngForOf"], ["data-toggle", "tab", 3, "href", "click"], ["class", "p-l-0 table-label", "style", "text-decoration: underline", 3, "click", 4, "ngIf"], [1, "p-l-0", "table-label", 2, "text-decoration", "underline", 3, "click"], ["data-toggle", "collapse", "data-target", "#followup-list3", "class", "cur-pointer collapsed", "title", "Followup Template", "style", "margin-right: 15px;font-size: 16px;", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["data-toggle", "collapse", "data-target", "#followup-list3", "title", "Followup Template", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template", 1, "fa", "fa-headphones"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0"], [1, "text-justify", 2, "margin-bottom", "10px"], [2, "margin-left", "3px", "margin-right", "3px", "color", "#ccc"], [1, "pull-right", 2, "font-size", "18px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "5px"], [1, "text-center", "text-gray", 2, "margin-bottom", "10px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0", "margin-top", "5px"], [1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], ["title", "Edit", 1, "fa", "fa-edit", "ar-blue", 2, "margin-left", "10px", "font-size", "16px", "cursor", "pointer", 3, "click"], [1, "tab-pane", 3, "id"], ["data-toggle", "modal", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-d8k9-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-d8k9-container", "title", "-- Select --", 1, "select2-selection__rendered"], ["data-toggle", "modal", 2, "font-size", "16px", 3, "hidden", "click"], [1, "text-center", "closed-btn", 2, "margin-top", "8%"], ["formControlName", "processnotes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["formControlName", "client_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "cur-pointer", "text-right"]],
  template: function ClientAssistanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_a_click_8_listener() {
        return ctx.get_statuscodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Client Assistance ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "div", 3)(20, "div", 16)(21, "div", 17)(22, "div", 16)(23, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "div", 22)(29, "h3", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " Area Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 25)(33, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 28)(36, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "svg", 30)(38, "desc", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "defs", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "text", 32)(42, "tspan", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](44, "path", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "text", 35)(46, "tspan", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "7,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "path", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "text", 38)(50, "tspan", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "15,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "text", 41)(54, "tspan", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "22,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](56, "path", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "text", 44)(58, "tspan", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "30,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "path", 46)(61, "path", 47)(62, "path", 48)(63, "circle", 49)(64, "circle", 50)(65, "circle", 51)(66, "circle", 52)(67, "circle", 53)(68, "circle", 54)(69, "circle", 55)(70, "circle", 56)(71, "circle", 57)(72, "circle", 58)(73, "path", 59)(74, "path", 60)(75, "circle", 61)(76, "circle", 62)(77, "circle", 63)(78, "circle", 64)(79, "circle", 65)(80, "circle", 66)(81, "circle", 67)(82, "circle", 68)(83, "circle", 69)(84, "circle", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 72)(87, "div", 22)(88, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, " Donut Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 25)(92, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div", 28)(95, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "svg", 30)(97, "desc", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "defs", 31)(100, "path", 75)(101, "path", 76)(102, "path", 77)(103, "path", 78)(104, "path", 79)(105, "path", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "text", 81)(107, "tspan", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "In-Store Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "text", 83)(110, "tspan", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "div", 20)(113, "div", 85)(114, "div", 22)(115, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](116, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, " Line Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "div", 25)(119, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](120, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 28)(122, "div", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "svg", 30)(124, "desc", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](126, "defs", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "text", 32)(128, "tspan", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](130, "path", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "text", 35)(132, "tspan", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, "5,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](134, "path", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "text", 38)(136, "tspan", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137, "10,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](138, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "text", 41)(140, "tspan", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "15,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](142, "path", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "text", 44)(144, "tspan", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "20,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](146, "path", 46)(147, "path", 87)(148, "circle", 88)(149, "circle", 89)(150, "circle", 90)(151, "circle", 91)(152, "circle", 92)(153, "circle", 93)(154, "circle", 94)(155, "circle", 95)(156, "circle", 96)(157, "circle", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](158, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "div", 98)(160, "div", 2)(161, "div", 99)(162, "div", 22)(163, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](164, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, " Bar Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "div", 25)(167, "select", 100)(168, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](169, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](170, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](171, "January");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173, "February");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](175, "March");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](177, "2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](180, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "div", 101)(182, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](183, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184, " Status Wise Summary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](186, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](187, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "div", 105)(189, "table", 106)(190, "thead")(191, "tr")(192, "th", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](193, "input", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](195, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](196, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](197, "0-30");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](199, "31-60");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201, "61-90");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](203, "91-120");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](205, "121-150");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](207, ">150");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "tbody")(211, "tr")(212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](213, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](215, "Submitted");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](217, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](219, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](221, "1,113.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](223, "3,745.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](225, "2,980.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](227, "8,684.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](229, "16,539.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](230, "tr")(231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](232, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](233, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](234, "Hold");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](235, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](236, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](237, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](238, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](239, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](240, "1,113.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](242, "3,189.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](243, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, "2,812.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](245, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](246, "6,409.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](247, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, "13,523.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "tr")(250, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](251, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](252, "td", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](253, "Denied");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](254, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](255, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](256, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](257, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](258, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](259, "80.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](260, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](261, "4,232.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](262, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](263, "3,054.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](264, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](265, "6,487.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](266, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](267, "13,853.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](268, "tr")(269, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](270, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "td", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](272, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](273, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](274, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](275, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](276, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](277, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](278, "120.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](279, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](280, "100.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](281, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](282, "624.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](283, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](284, "3,292.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](285, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](286, "4,136.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](287, "tr")(288, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](289, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](290, "td", 114)(291, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](292, "Total Insurance AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](293, "td", 116)(294, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](295, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](296, "td", 116)(297, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](298, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](299, "td", 116)(300, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](301, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](302, "td", 116)(303, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](304, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](305, "td", 116)(306, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](307, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](308, "td", 116)(309, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](310, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](311, "td", 116)(312, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](313, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](314, "tr")(315, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](316, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](317, "td", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](318, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](319, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](320, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](321, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](322, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](323, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](324, "5.08 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](325, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](326, "23.45%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](327, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](328, "19.71%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](329, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](330, "51.76%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](331, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](332, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](333, "div", 117)(334, "div", 3)(335, "div", 16)(336, "div", 17)(337, "div", 16)(338, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](339, " Work Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](340, "h4", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](341, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](342, " Call Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](343, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](344, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](345, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](346, "div", 105)(347, "table", 106)(348, "thead")(349, "tr")(350, "th", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](351, "input", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](352, "th", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](353, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](354, "Unbilled");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](355, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](356, "0-30");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](357, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](358, "31-60");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](359, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](360, "61-90");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](361, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](362, "91-120");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](363, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](364, "121-150");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](365, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](366, ">150");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](367, "th", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](368, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](369, "tbody")(370, "tr")(371, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](372, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](373, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](374, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](375, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](376, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](377, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](378, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](379, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](380, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](381, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](382, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](383, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](384, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](385, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](386, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](387, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](388, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](389, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](390, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](391, "tr")(392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](393, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](394, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](395, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](396, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](397, "70,161.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](398, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](399, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](400, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](401, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](402, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](403, "759.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](404, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](405, "1,090.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](406, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](407, "4,420.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](408, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](409, "6,668.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](410, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](411, "83,098.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](412, "tr")(413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](414, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](415, "td", 119)(416, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](417, "Outstanding AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](418, "td", 116)(419, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](420, "62,936.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](421, "td", 116)(422, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](423, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](424, "td", 116)(425, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](426, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](427, "td", 116)(428, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](429, "749.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](430, "td", 116)(431, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](432, "1,200.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](433, "td", 116)(434, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](435, "4,170.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](436, "td", 116)(437, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](438, "6,237.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](439, "td", 116)(440, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](441, "75,292.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](442, "tr")(443, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](444, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](445, "td", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](446, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](447, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](448, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](449, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](450, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](451, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](452, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](453, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](454, "1%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](455, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](456, "2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](457, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](458, "6%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](459, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](460, "8%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](461, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](462, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](463, "div", 101)(464, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](465, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](466, " Audit Claims ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](467, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](468, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](469, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](470, "div", 105)(471, "table", 106)(472, "tbody")(473, "tr")(474, "td", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](475, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](476, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](477, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](478, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](479, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](480, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](481, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](482, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](483, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](484, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](485, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](486, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](487, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](488, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](489, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](490, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](491, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](492, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](493, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](494, "tr")(495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](496, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](497, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](498, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](499, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](500, "70,161.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](501, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](502, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](503, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](504, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](505, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](506, "759.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](507, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](508, "1,090.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](509, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](510, "4,420.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](511, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](512, "6,668.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](513, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](514, "83,098.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](515, "tr")(516, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](517, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](518, "td", 119)(519, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](520, "Outstanding AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](521, "td", 116)(522, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](523, "62,936.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](524, "td", 116)(525, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](526, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](527, "td", 116)(528, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](529, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](530, "td", 116)(531, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](532, "749.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](533, "td", 116)(534, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](535, "1,200.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](536, "td", 116)(537, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](538, "4,170.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](539, "td", 116)(540, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](541, "6,237.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](542, "td", 116)(543, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](544, "75,292.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](545, "tr")(546, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](547, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](548, "td", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](549, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](550, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](551, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](552, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](553, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](554, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](555, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](556, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](557, "1%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](558, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](559, "2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](560, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](561, "6%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](562, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](563, "8%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](564, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](565, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](566, "div", 101)(567, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](568, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](569, " New Claims ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](570, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](571, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](572, " Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](573, "div", 105)(574, "table", 106)(575, "tbody")(576, "tr")(577, "td", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](578, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](579, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](580, "Patient");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](581, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](582, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](583, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](584, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](585, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](586, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](587, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](588, "2,443.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](589, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](590, "11,266.98");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](591, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](592, "9,470.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](593, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](594, "24,872.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](595, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](596, "48,051.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](597, "tr")(598, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](599, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](600, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](601, "Insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](602, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](603, "70,161.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](604, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](605, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](606, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](607, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](608, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](609, "759.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](610, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](611, "1,090.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](612, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](613, "4,420.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](614, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](615, "6,668.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](616, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](617, "83,098.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](618, "tr")(619, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](620, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](621, "td", 119)(622, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](623, "Outstanding AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](624, "td", 116)(625, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](626, "62,936.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](627, "td", 116)(628, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](629, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](630, "td", 116)(631, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](632, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](633, "td", 116)(634, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](635, "749.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](636, "td", 116)(637, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](638, "1,200.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](639, "td", 116)(640, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](641, "4,170.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](642, "td", 116)(643, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](644, "6,237.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](645, "td", 116)(646, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](647, "75,292.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](648, "tr")(649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](650, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](651, "td", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](652, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](653, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](654, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](655, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](656, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](657, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](658, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](659, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](660, "1%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](661, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](662, "2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](663, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](664, "6%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](665, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](666, "8%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](667, "td", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](668, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](669, "div", 120)(670, "div", 121)(671, "div", 16)(672, "div", 98)(673, "div", 122)(674, "div", 17)(675, "div", 123)(676, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](677, "i", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](678, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](679, "div", 25)(680, "button", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](681, "i", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](682, "div", 127)(683, "div", 128)(684, "form", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ClientAssistanceComponent_Template_form_ngSubmit_684_listener() {
        return ctx.claims_filter(1, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](685, "div", 130)(686, "div", 131)(687, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](688, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](689, "div", 131)(690, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](691, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](692, "select", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ClientAssistanceComponent_Template_select_ngModelChange_692_listener($event) {
        return ctx.selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](693, "option", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](694, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](695, ClientAssistanceComponent_option_695_Template, 2, 5, "option", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](696, "div", 131)(697, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](698, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](699, "input", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](700, "div", 130)(701, "div", 131)(702, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](703, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](704, "input", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](705, "div", 131)(706, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](707, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](708, "input", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](709, "div", 131)(710, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](711, "followup date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](712, "div", 130)(713, "div", 138)(714, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](715, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](716, "input", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](717, "div", 138)(718, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](719, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](720, "input", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](721, "div", 138)(722, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](723, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](724, "input", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](725, "div", 130)(726, "div", 138)(727, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](728, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](729, "div", 138)(730, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](731, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](732, "ngx-select-dropdown", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ClientAssistanceComponent_Template_ngx_select_dropdown_change_732_listener($event) {
        return ctx.status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](733, "div", 138)(734, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](735, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](736, "ngx-select-dropdown", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](737, "div", 130)(738, "div", 138)(739, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](740, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](741, "input", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ClientAssistanceComponent_Template_input_ngModelChange_741_listener($event) {
        return ctx.selected_val = $event;
      })("keyup", function ClientAssistanceComponent_Template_input_keyup_741_listener($event) {
        return ctx.searchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](742, ClientAssistanceComponent_div_742_Template, 2, 1, "div", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](743, "div", 138)(744, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](745, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](746, "div", 138)(747, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](748, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](749, "input", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](750, "div", 130)(751, "div", 147)(752, "input", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_input_click_752_listener() {
        return ctx.claims_filter(1, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](753, "div", 122)(754, "div", 17)(755, "div", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](756, "input", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](757, "button", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](758, "i", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](759, "div", 121)(760, "div", 16)(761, "div", 17)(762, "div", 123)(763, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](764, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](765, " Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](766, "div", 25)(767, "p", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](768, ClientAssistanceComponent_span_768_Template, 1, 0, "span", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](769, "i", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_i_click_769_listener() {
        return ctx.export_excel_files("excel", "Client_assistance_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](770, "div", 128)(771, "div", 155)(772, "div", 156)(773, "table", 157)(774, "thead")(775, "tr")(776, "th", 158)(777, "input", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_input_click_777_listener($event) {
        ctx.selected($event, "all", "all");
        return ctx.check_all_assign(ctx.pages, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](778, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](779, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_779_listener() {
        return ctx.order_list("wo", "claim_no", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](780, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](781, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](782, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_782_listener() {
        return ctx.order_list("wo", "dos", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](783, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](784, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](785, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](786, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](787, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](788, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_788_listener() {
        return ctx.order_list("wo", "acct_no", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](789, "Acct No");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](790, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](791, "th", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_791_listener() {
        return ctx.order_list("wo", "patient_name", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](792, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](793, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](794, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_794_listener() {
        return ctx.order_list("wo", "rendering_prov", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](795, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](796, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](797, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_797_listener() {
        return ctx.order_list("wo", "responsibility", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](798, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](799, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](800, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_800_listener() {
        return ctx.order_list("wo", "billed_submit_date", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](801, "BillSubmit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](802, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](803, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_803_listener() {
        return ctx.order_list("wo", "denial_code", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](804, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](805, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](806, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_806_listener() {
        return ctx.order_list("wo", "status_code", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](807, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](808, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](809, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_809_listener() {
        return ctx.order_list("wo", "sub_status_code", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](810, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](811, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](812, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_812_listener() {
        return ctx.order_list("wo", "total_charges", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](813, "Total Charges");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](814, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](815, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_815_listener() {
        return ctx.order_list("wo", "total_ar", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](816, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](817, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](818, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_818_listener() {
        return ctx.order_list("wo", "claim_Status", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](819, "Claim Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](820, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](821, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_821_listener() {
        return ctx.order_list("wo", "followup_date", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](822, "Followup Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](823, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](824, "th", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_th_click_824_listener() {
        return ctx.order_list("wo", "created_at", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](825, "AssignedUser|Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](826, "i", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](827, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](828, ClientAssistanceComponent_tr_828_Template, 57, 43, "tr", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](829, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](830, ClientAssistanceComponent_tr_830_Template, 4, 0, "tr", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](831, "div", 98)(832, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](833, "div", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](834, ClientAssistanceComponent_div_834_Template, 8, 3, "div", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](835, ClientAssistanceComponent_div_835_Template, 8, 0, "div", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](836, "div", 166)(837, "div", 121)(838, "div", 16)(839, "div", 17)(840, "div", 123)(841, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](842, "i", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](843, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](844, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](845, "input", 167);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](846, "div", 128)(847, "div", 130)(848, "div", 168)(849, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](850, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](851, "select", 169)(852, "option", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](853, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](854, "option", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](855, "Work Order Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](856, "option", 172);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](857, "AR Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](858, "option", 173);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](859, "Work Order Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](860, "option", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](861, "Created Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](862, "option", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](863, "Created By");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](864, "div", 168)(865, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](866, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](867, "select", 169)(868, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](869, "A-Adjustment");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](870, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](871, "B-Appeal");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](872, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](873, "C-Client Assistance");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](874, "div", 168)(875, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](876, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](877, "select", 169)(878, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](879, "Adj-Bad Debt");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](880, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](881, "Adj-Insurance Overpayment");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](882, "div", 121)(883, "div", 16)(884, "div", 17)(885, "div", 123)(886, "h3", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](887, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](888, " Work Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](889, "div", 176)(890, "p", 153)(891, "span", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_span_click_891_listener() {
        return ctx.export_wo_files("print");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](892, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](893, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](894, "i", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_i_click_894_listener() {
        return ctx.export_wo_files("excel");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](895, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](896, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](897, "i", 179);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientAssistanceComponent_Template_i_click_897_listener() {
        return ctx.export_wo_files("PDF");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](898, "div", 128)(899, "div", 180)(900, "div", 156)(901, "table", 106)(902, "thead")(903, "tr")(904, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](905, "Created By/Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](906, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](907, "Work Order Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](908, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](909, "Claim Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](910, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](911, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](912, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](913, "Billed");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](914, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](915, "AR Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](916, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](917, "WO Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](918, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](919, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](920, "th", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](921, "WO Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](922, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](923, ClientAssistanceComponent_tr_923_Template, 21, 16, "tr", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](924, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](925, ClientAssistanceComponent_tr_925_Template, 4, 0, "tr", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](926, "div", 182)(927, "pagination-controls", 183);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function ClientAssistanceComponent_Template_pagination_controls_pageChange_927_listener($event) {
        return ctx.get_workorder(null, null, null, 3, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](928, ClientAssistanceComponent_ng_template_928_Template, 47, 3, "ng-template", null, 184, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](930, ClientAssistanceComponent_ng_template_930_Template, 24, 9, "ng-template", null, 185, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](932, ClientAssistanceComponent_ng_template_932_Template, 307, 28, "ng-template", null, 186, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](934, ClientAssistanceComponent_ng_template_934_Template, 20, 4, "ng-template", null, 187, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](936, ClientAssistanceComponent_ng_template_936_Template, 20, 4, "ng-template", null, 188, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](938, ClientAssistanceComponent_ng_template_938_Template, 56, 2, "ng-template", null, 189, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](940, ClientAssistanceComponent_ng_template_940_Template, 23, 16, "ng-template", null, 190, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](942, ClientAssistanceComponent_ng_template_942_Template, 18, 15, "ng-template", null, 191, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](944, ClientAssistanceComponent_ng_template_944_Template, 15, 7, "ng-template", null, 192, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](946, ClientAssistanceComponent_ng_template_946_Template, 15, 7, "ng-template", null, 193, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](948, ClientAssistanceComponent_ng_template_948_Template, 15, 7, "ng-template", null, 194, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](950, ClientAssistanceComponent_ng_template_950_Template, 9, 14, "ng-template", null, 195, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](684);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.claimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isValueSelected == false && ctx.selected_val != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.edit_permission == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](829, 18, ctx.table_data, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](24, _c1, ctx.pages, ctx.total_claims)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.total_claims == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.total_claims != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.total_claims == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](924, 21, ctx.work_order_data, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](27, _c2, ctx.wo_page_number, ctx.wo_total)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.wo_total == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("maxSize", 9);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_8__.ClaimOpFooterComponent, _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_9__.FollowupTemplateComponent, _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_10__.FollowupViewComponent, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_17__.TooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationControlsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbInputDatepicker, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_19__.NgxSelectDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: ["@media print\n{\n.noprint {display:none !important;\n    visibility: hidden !important;\n}\n}\n\n.custom-class .modal-content {\n    right: -178px;\n    top: 80px;\n\n  }\n  .custom-class .close {\n    color: #000;\n    opacity: .2;\n  }\n\n  .red-alert{\n    transition: 0.5s all ease-in-out;\n  }\n\n  .ng-sidebar--right[_ngcontent-c8] {\n    bottom: 0;\n    right: 0;\n    top: 0;\n    position: relative !important;\n    overflow: hidden !important;\n  }\n\n  .ng-sidebar[_ngcontent-c7] {\n    -webkit-overflow-scrolling: touch;\n    overflow: auto;\n    pointer-events: auto;\n    position: relative !important;\n    touch-action: auto;\n    will-change: initial;\n    z-index: 2;\n    overflow: hidden !important;\n  }\n  .a {\n    top: 27%;\n    position: absolute;\n    width: 106px;\n    height: 40px;\n    background-color: #dd4b39;\n    color: white;\n    transform: rotate(90deg);\n    right: -33px;\n    z-index: 155;\n    text-decoration: none;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    padding-top: 0px;\n    text-align: center;\n    cursor: pointer;\n  }\n  .a p , .b p{\n    font-size: 17px;\n\n  }\n  .b{\n    top: 77%;\n    cursor: pointer;\n    position: absolute;\n    width: 106px;\n    height: 40px;\n    background-color: #00c0ef;\n    color: white;\n    transform: rotate(90deg);\n    right: -33px;\n    z-index: 155;\n    text-decoration: none;\n    text-align: center;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    padding-top: 9px;\n  }\n  .a p{\n    padding-top: 7px;\n  }\n  .tooltip-feedback {\n    background-color: #9ad9e4 !important;\n    color: #646464 !important;\n    overflow: visible !important;\n     /*margin-left: -25px !important; \n    margin-top: 20px !important;*/\n  }\n  .new-tooltip-class {\n    background-color: #9ad9e4 !important;\n    color: #646464 !important;\n    margin-top: -20px !important;\n  }\n  .text-space {\n    resize: vertical;\n  }\n\n  .dos-date {\n    min-width: 82px;\n  }\n\n  .btn-search {\n    background-color: #00beda;\n    border-color: #00beda;\n    color: #fff;\n    max-width: 66px;\n    margin-top: 15px;\n  }\n  .btn-search:hover {\n    color: #fff !important;\n    background-color: #04a1b8 !important;\n  }\n.close-btn button{\n    left: 10%;\n    top: -54px;\n    position: relative;\n      }\n .closed-btn button{\n  top: -54px;\n  position: relative;\n }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnQtYXNzaXN0YW5jZS9jbGllbnQtYXNzaXN0YW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFVBQVUsdUJBQXVCO0lBQzdCLDZCQUE2QjtBQUNqQztBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0VBRVg7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLE1BQU07SUFDTiw2QkFBNkI7SUFDN0IsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBRVosd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlOztFQUVqQjtFQUNBO0lBQ0UsUUFBUTtJQUNSLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUVaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw0QkFBNEI7S0FDM0I7aUNBQzRCO0VBQy9CO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixvQ0FBb0M7RUFDdEM7QUFDRjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO01BQ2hCO0NBQ0w7RUFDQyxVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50XG57XG4ubm9wcmludCB7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG59XG5cbi5jdXN0b20tY2xhc3MgLm1vZGFsLWNvbnRlbnQge1xuICAgIHJpZ2h0OiAtMTc4cHg7XG4gICAgdG9wOiA4MHB4O1xuXG4gIH1cbiAgLmN1c3RvbS1jbGFzcyAuY2xvc2Uge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC4yO1xuICB9XG5cbiAgLnJlZC1hbGVydHtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5uZy1zaWRlYmFyLS1yaWdodFtfbmdjb250ZW50LWM4XSB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmctc2lkZWJhcltfbmdjb250ZW50LWM3XSB7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgICB3aWxsLWNoYW5nZTogaW5pdGlhbDtcbiAgICB6LWluZGV4OiAyO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuICAuYSB7XG4gICAgdG9wOiAyNyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHJpZ2h0OiAtMzNweDtcbiAgICB6LWluZGV4OiAxNTU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYSBwICwgLmIgcHtcbiAgICBmb250LXNpemU6IDE3cHg7XG5cbiAgfVxuICAuYntcbiAgICB0b3A6IDc3JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzBlZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHJpZ2h0OiAtMzNweDtcbiAgICB6LWluZGV4OiAxNTU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICB9XG4gIC5hIHB7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbiAgfVxuICAudG9vbHRpcC1mZWVkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlhZDllNCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjQ2NDY0ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgLyptYXJnaW4tbGVmdDogLTI1cHggIWltcG9ydGFudDsgXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50OyovXG4gIH1cbiAgLm5ldy10b29sdGlwLWNsYXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFkOWU0ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM2NDY0NjQgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXh0LXNwYWNlIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG5cbiAgLmRvcy1kYXRlIHtcbiAgICBtaW4td2lkdGg6IDgycHg7XG4gIH1cblxuICAuYnRuLXNlYXJjaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmVkYTtcbiAgICBib3JkZXItY29sb3I6ICMwMGJlZGE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWF4LXdpZHRoOiA2NnB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLmJ0bi1zZWFyY2g6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0YTFiOCAhaW1wb3J0YW50O1xuICB9XG4uY2xvc2UtYnRuIGJ1dHRvbntcbiAgICBsZWZ0OiAxMCU7XG4gICAgdG9wOiAtNTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gLmNsb3NlZC1idG4gYnV0dG9ue1xuICB0b3A6IC01NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gfSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_client_assistance_client_assistance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/client-assistance/client-assistance.component */ 7075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_client_assistance_client_assistance_component__WEBPACK_IMPORTED_MODULE_0__.ClientAssistanceComponent
}];
class LazyCARoutingModule {}
LazyCARoutingModule.ɵfac = function LazyCARoutingModule_Factory(t) {
  return new (t || LazyCARoutingModule)();
};
LazyCARoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LazyCARoutingModule
});
LazyCARoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyCARoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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
//# sourceMappingURL=src_app_lazy-ca_lazy-ca_module_ts.77561c8d95338a23.js.map