"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_lazy-audit_lazy-audit_module_ts"],{

/***/ 2857:
/*!*****************************************************!*\
  !*** ./src/app/components/audit/audit.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditComponent": () => (/* binding */ AuditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-enterprise */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _Services_followup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/followup.service */ 4679);
/* harmony import */ var _Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/notes-handler.service */ 8997);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _Services_export_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/export-functions.service */ 301);
/* harmony import */ var _Services_notify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/notify.service */ 5710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../claim-op-footer/claim-op-footer.component */ 6195);
/* harmony import */ var _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followup-template/followup-template.component */ 5286);
/* harmony import */ var _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../followup-view/followup-view.component */ 6868);
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-epic-spinners */ 2662);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-select-dropdown */ 3277);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);




























const _c0 = ["myGrid_1"];
const _c1 = ["myGrid_2"];
const _c2 = ["myGrid_3"];
const _c3 = ["myGrid_4"];
const _c4 = ["claimpage"];
const _c5 = ["work_order_details"];
const _c6 = ["checkboxes"];
function AuditComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 153)(1, "a", 154)(2, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_li_6_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r63.graphStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Analytics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AuditComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 153)(1, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r65.getclaim_details(1, "wo", "null", "null", "null", "null", null, null, null, null, null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Audit Que ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r1.class_change.tab2);
  }
}
function AuditComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 158)(1, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r67.get_workorder(null, null, null, 2, ctx_r67.wo_page_number, null, null, "null", "null", null, null, null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Work Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AuditComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li")(1, "a", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_li_9_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r69.getclaim_details(1, "allocated", "null", "null", "null", "null", "null", "null", "null", "null", "null"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Assigned Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AuditComponent_i_551_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 163);
  }
}
function AuditComponent_i_552_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
  }
}
const _c7 = function (a0, a1) {
  return {
    from_age: a0,
    to_age: a1
  };
};
function AuditComponent_option_567_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c7, agerange_r71.from_age, agerange_r71.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", agerange_r71.from_age + "-" + agerange_r71.to_age, "");
  }
}
function AuditComponent_div_585_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_div_585_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_div_585_div_1_Template, 2, 0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.closedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function AuditComponent_div_621_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_div_621_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r76);
      const res_r74 = restoredCtx.$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r75.closedSelectvalue(res_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](res_r74);
  }
}
function AuditComponent_div_621_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_div_621_div_1_Template, 3, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r8.closed_results);
  }
}
function AuditComponent_i_659_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 163);
  }
}
function AuditComponent_i_660_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
  }
}
function AuditComponent_i_676_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 163);
  }
}
function AuditComponent_i_677_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
  }
}
function AuditComponent_option_692_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c7, agerange_r77.from_age, agerange_r77.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", agerange_r77.from_age + "-" + agerange_r77.to_age, "");
  }
}
function AuditComponent_div_710_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_div_710_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_div_710_div_1_Template, 2, 0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r15.assignedClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function AuditComponent_div_746_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_div_746_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r82);
      const res_r80 = restoredCtx.$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r81.assignedSelectvalue(res_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](res_r80);
  }
}
function AuditComponent_div_746_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_div_746_div_1_Template, 3, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r16.assigned_results);
  }
}
function AuditComponent_i_787_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 163);
  }
}
function AuditComponent_i_788_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
  }
}
function AuditComponent_i_805_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 163);
  }
}
function AuditComponent_i_806_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
  }
}
function AuditComponent_option_821_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agerange_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c7, agerange_r83.from_age, agerange_r83.to_age));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", agerange_r83.from_age + "-" + agerange_r83.to_age, "");
  }
}
function AuditComponent_div_839_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " please provide correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_div_839_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_div_839_div_1_Template, 2, 0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r23.auditClaimsFind.controls["total_ar"].hasError("pattern"));
  }
}
function AuditComponent_div_875_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_div_875_div_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r88);
      const res_r86 = restoredCtx.$implicit;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r87.auditQueueSelectvalue(res_r86));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const res_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](res_r86);
  }
}
function AuditComponent_div_875_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_div_875_div_1_Template, 3, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r24.auditQueue_results);
  }
}
function AuditComponent_i_914_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 163);
  }
}
function AuditComponent_i_915_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
  }
}
function AuditComponent_ng_template_984_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 173)(1, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r103);
      const x_r101 = restoredCtx.$implicit;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r102.selected_tab(x_r101.claim_no);
      ctx_r102.get_line_items(x_r101);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r102.check_reassign_alloc(ctx_r102.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_li_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r103);
      const x_r101 = restoredCtx.$implicit;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r104.close_tab(x_r101));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r101 = ctx.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", x_r101.claim_no === ctx_r90.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "#", x_r101.claim_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claim No: ", x_r101.claim_no, "");
  }
}
function AuditComponent_ng_template_984_tr_128_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_tr_128_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r110);
      const x_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r108.referclaim(x_r105);
      ctx_r108.get_line_items(x_r105.claim);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r108.check_reassign_alloc(x_r105.claim));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 2, x_r105.claim.dos, "MM/dd/yyyy"), " - ", x_r105.claim.claim_no, "");
  }
}
function AuditComponent_ng_template_984_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_984_tr_128_td_1_Template, 3, 5, "td", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r106 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r106 < 3);
  }
}
function AuditComponent_ng_template_984_tr_166_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_tr_166_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r112.dos, "MM/dd/yyyy"));
  }
}
function AuditComponent_ng_template_984_tr_166_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_tr_166_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r112.dos, "MM/dd/yyyy"));
  }
}
function AuditComponent_ng_template_984_tr_166_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_tr_166_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](x_r112.cpt);
  }
}
function AuditComponent_ng_template_984_tr_166_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_tr_166_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r120.claim_clicked.total_charges, "1.2-2"));
  }
}
function AuditComponent_ng_template_984_tr_166_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_tr_166_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r112.total_ar_due, "1.2-2"));
  }
}
function AuditComponent_ng_template_984_tr_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AuditComponent_ng_template_984_tr_166_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AuditComponent_ng_template_984_tr_166_span_3_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AuditComponent_ng_template_984_tr_166_span_5_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AuditComponent_ng_template_984_tr_166_span_6_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AuditComponent_ng_template_984_tr_166_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AuditComponent_ng_template_984_tr_166_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AuditComponent_ng_template_984_tr_166_span_11_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AuditComponent_ng_template_984_tr_166_span_12_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AuditComponent_ng_template_984_tr_166_span_14_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AuditComponent_ng_template_984_tr_166_span_15_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td", 158)(19, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r112 = ctx.$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.dos == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.dos != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r92.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r92.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r112.total_ar_due != 0);
  }
}
function AuditComponent_ng_template_984_a_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_a_184_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r128);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](999);
      ctx_r127.open(_r43);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r127.confirm_reassign(ctx_r127.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Re-Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_span_185_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_span_185_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r131);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](991);
      ctx_r130.openModal2(_r35);
      ctx_r130.get_audit_codes();
      ctx_r130.get_error_param_codes();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r130.get_error_sub_param_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "New Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx_r129.qc_notes_data_list.includes(ctx_r129.claim_clicked.claim_no));
  }
}
function AuditComponent_ng_template_984_span_185_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_984_span_185_a_1_Template, 4, 1, "a", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_span_185_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r133);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](991);
      ctx_r132.openModal2(_r35);
      ctx_r132.get_audit_codes();
      ctx_r132.get_error_param_codes();
      ctx_r132.get_error_sub_param_codes();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r132.editnotes("qc_notes_init", "none", ctx_r132.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r94.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r94.qc_notes_data_list.includes(ctx_r94.claim_clicked.claim_no));
  }
}
function AuditComponent_ng_template_984_div_191_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r137.name, ". ");
  }
}
function AuditComponent_ng_template_984_div_191_i_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_191_i_17_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r139);
      const x_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](991);
      ctx_r138.get_audit_codes();
      ctx_r138.openModal2(_r35);
      ctx_r138.editnotes("qcnote", x_r134, x_r134.id);
      ctx_r138.get_error_param_codes();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r138.get_error_sub_param_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_191_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 253)(1, "p", 254)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Error Types: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AuditComponent_ng_template_984_div_191_span_16_Template, 2, 1, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, AuditComponent_ng_template_984_div_191_i_17_Template, 1, 0, "i", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r134 = ctx.$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r134.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 5, x_r134.created_at, "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r134.content, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", x_r134["error_type"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r95.edit_permission == true && ctx_r95.note_edit_val == x_r134.id);
  }
}
function AuditComponent_ng_template_984_div_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 260)(1, "p", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_div_206_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 262)(1, "p", 254)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", y_r141.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, y_r141.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", y_r141.content, ". ");
  }
}
function AuditComponent_ng_template_984_div_207_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 260)(1, "p", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_app_atom_spinner_208_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-atom-spinner", 264);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 60)("color", "#1fa5be");
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r155.claim_clicked.admit_date);
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r157.claim_clicked.discharge_date);
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](x_r153.cpt);
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r161.claim_clicked.total_charges, "1.2-2"));
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, x_r153.total_ar_due, "1.2-2"));
  }
}
function AuditComponent_ng_template_984_div_288_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AuditComponent_ng_template_984_div_288_tr_140_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AuditComponent_ng_template_984_div_288_tr_140_span_3_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AuditComponent_ng_template_984_div_288_tr_140_span_5_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AuditComponent_ng_template_984_div_288_tr_140_span_6_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AuditComponent_ng_template_984_div_288_tr_140_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AuditComponent_ng_template_984_div_288_tr_140_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AuditComponent_ng_template_984_div_288_tr_140_span_11_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AuditComponent_ng_template_984_div_288_tr_140_span_12_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AuditComponent_ng_template_984_div_288_tr_140_span_14_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AuditComponent_ng_template_984_div_288_tr_140_span_15_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "09/17/18");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td", 158)(19, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r153 = ctx.$implicit;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.admit_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.admit_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.discharge_date == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.discharge_date != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r153.cpt == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r153.cpt != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.total_charges == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r143.claim_clicked.total_charges != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r153.total_ar_due == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", x_r153.total_ar_due != 0);
  }
}
function AuditComponent_ng_template_984_div_288_span_153_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_span_153_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r168);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r167.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "F.Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_div_288_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_984_div_288_span_153_a_1_Template, 4, 0, "a", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r144.edit_permission == true);
  }
}
function AuditComponent_ng_template_984_div_288_a_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_a_163_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r170);
      const x_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](999);
      ctx_r169.open(_r43);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r169.confirm_reassign(x_r142));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Re-Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_div_288_a_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_a_164_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r173);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](991);
      ctx_r172.open(_r35);
      ctx_r172.get_audit_codes();
      ctx_r172.get_error_param_codes();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r172.get_error_sub_param_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "New Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx_r146.qc_notes_data_list.includes(x_r142.claim_no));
  }
}
function AuditComponent_ng_template_984_div_288_div_174_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_div_174_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r178);
      const x_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](991);
      ctx_r177.get_audit_codes();
      ctx_r177.get_error_param_codes();
      ctx_r177.get_error_sub_param_codes();
      ctx_r177.open(_r35);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r177.editnotes("qcnote", x_r175, x_r175.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_984_div_288_div_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 253)(1, "p", 254)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AuditComponent_ng_template_984_div_288_div_174_i_10_Template, 1, 0, "i", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r175 = ctx.$implicit;
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", x_r175.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 4, x_r175.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", x_r175.content, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r147.edit_permission == true && ctx_r147.note_edit_val == x_r175.id);
  }
}
function AuditComponent_ng_template_984_div_288_div_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 260)(1, "p", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_div_288_div_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 262)(1, "p", 254)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r180 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", y_r180.create_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 3, y_r180.created_at, "MM/dd/yyyy"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", y_r180.content, ". ");
  }
}
function AuditComponent_ng_template_984_div_288_div_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 260)(1, "p", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_984_div_288_span_196_Template(rf, ctx) {
  if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 221)(3, "button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_span_196_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r182);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r181.modalRef == null ? null : ctx_r181.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AuditComponent_ng_template_984_div_288_span_197_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span")(1, "div", 278)(2, "button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_span_197_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r185);
      const x_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r183.close_tab(x_r142));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AuditComponent_ng_template_984_div_288_Template(rf, ctx) {
  if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 265)(1, "div", 179)(2, "div", 72)(3, "div", 180)(4, "div", 39)(5, "div", 181)(6, "div", 17)(7, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 20)(11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 183)(14, "div", 14)(15, "div", 1)(16, "div", 184)(17, "div", 185)(18, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 20)(22, "button", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 23)(25, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "svg", 26)(27, "desc", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "defs", 27)(30, "path", 28)(31, "path", 29)(32, "path", 30)(33, "path", 31)(34, "path", 32)(35, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "text", 266)(37, "tspan", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "text", 36)(40, "tspan", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 50)(43, "div", 1)(44, "div", 267)(45, "table", 190)(46, "tbody")(47, "tr")(48, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "tr")(53, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "tr")(58, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "tr")(64, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 268)(69, "table", 190)(70, "tbody")(71, "tr")(72, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "tr")(90, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "tr")(99, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](100, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, ": Commercial[Static]");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](103, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "div", 196)(105, "div", 197)(106, "div", 39)(107, "div", 181)(108, "div", 17)(109, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](110, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "div", 20)(113, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](114, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "div", 50)(116, "div", 200)(117, "table", 201)(118, "thead")(119, "tr")(120, "th", 158)(121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "th", 158)(124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "th", 158)(127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "th", 158)(130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](132, "th", 158)(133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](134, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](135, "th", 158)(136, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](137, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](138, "th", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](140, AuditComponent_ng_template_984_div_288_tr_140_Template, 21, 10, "tr", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "div", 202)(142, "div", 20)(143, "a", 203)(144, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](145, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](146, "a", 205)(147, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](148, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](149, "a", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_Template_a_click_149_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r187);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r186.send_calim_det("followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](150, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](151, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](152, "F.Template View");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](153, AuditComponent_ng_template_984_div_288_span_153_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](154, "div", 206)(155, "div", 197)(156, "div", 39)(157, "div", 181)(158, "div", 207)(159, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](160, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](161, " QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](162, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](163, AuditComponent_ng_template_984_div_288_a_163_Template, 4, 0, "a", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](164, AuditComponent_ng_template_984_div_288_a_164_Template, 4, 1, "a", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](165, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_div_288_Template_a_click_165_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r187);
      const x_r142 = restoredCtx.$implicit;
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](991);
      ctx_r188.open(_r35);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r188.editnotes("qc_notes_init", "none", x_r142));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](166, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](167, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](168, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](169, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](170, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](171, "div", 271)(172, "div", 1)(173, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](174, AuditComponent_ng_template_984_div_288_div_174_Template, 11, 7, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](175, AuditComponent_ng_template_984_div_288_div_175_Template, 3, 0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](176, "div", 213)(177, "div", 197)(178, "div", 39)(179, "div", 181)(180, "div", 17)(181, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](182, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](183, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](184, "div", 20)(185, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](186, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](187, "div", 271)(188, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](189, AuditComponent_ng_template_984_div_288_div_189_Template, 10, 6, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](190, AuditComponent_ng_template_984_div_288_div_190_Template, 3, 0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](191, "div", 218)(192, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](193, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](195, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](196, AuditComponent_ng_template_984_div_288_span_196_Template, 5, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](197, AuditComponent_ng_template_984_div_288_span_197_Template, 4, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](198, "div", 223)(199, "div", 224)(200, "div", 1)(201, "h4", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](202, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](203, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](204, "form", 226)(205, "div", 227)(206, "div", 228)(207, "div", 229)(208, "div", 230)(209, "div", 231)(210, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](211, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](212, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](213, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](214, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](215, "div", 228)(216, "div", 229)(217, "div", 230)(218, "div", 231)(219, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](220, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](221, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](222, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](223, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "div", 228)(225, "div", 229)(226, "div", 230)(227, "div", 231)(228, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](229, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](230, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](231, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](232, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](233, "div", 228)(234, "div", 229)(235, "div", 234)(236, "div", 231)(237, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](238, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](239, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](241, "select", 235)(242, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](243, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](244, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](245, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](246, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](247, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](248, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](249, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](250, "span", 236)(251, "span", 44)(252, "span", 237)(253, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](254, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](255, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](256, "b", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](257, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const x_r142 = ctx.$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", x_r142.claim_no === ctx_r100.active_claim ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", x_r142.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r142.acct_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r142.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](62, 27, x_r142.dob, "MM/dd/yyyy"), ", ", x_r142.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", x_r142.ssn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r100.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r100.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r100.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r100.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r100.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r100.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r100.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r100.curr_reassigned_claims.includes(ctx_r100.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r100.reassign_allocation == true && ctx_r100.refer_claim_editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r100.edit_permission == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r100.qc_notes_data_list.includes(x_r142.claim_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r100.active_refer_qc);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r100.active_refer_qc.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r100.active_refer_claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r100.active_refer_claim.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "x", x_r142.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "y", x_r142.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r100.refer_claim_editable == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r100.refer_claim_editable == "false");
  }
}
function AuditComponent_ng_template_984_Template(rf, ctx) {
  if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r190);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r189.modalRef == null ? null : ctx_r189.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r189.clear_refer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ul", 172)(5, "li", 173)(6, "a", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r190);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r191.selected_tab("maintab");
      ctx_r191.get_line_items(ctx_r191.claim_clicked);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r191.check_reassign_alloc(ctx_r191.claim_clicked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AuditComponent_ng_template_984_li_9_Template, 7, 4, "li", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 177)(11, "div", 178)(12, "div", 179)(13, "div", 72)(14, "div", 180)(15, "div", 39)(16, "div", 181)(17, "div", 17)(18, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 20)(22, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 183)(25, "div", 14)(26, "div", 1)(27, "div", 184)(28, "div", 185)(29, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, " Monthly Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 20)(33, "button", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 23)(36, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "svg", 26)(38, "desc", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Created with Rapha\u00EBl 2.2.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "defs", 27)(41, "path", 28)(42, "path", 29)(43, "path", 30)(44, "path", 31)(45, "path", 32)(46, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "text", 34)(48, "tspan", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "In-Store Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "text", 36)(51, "tspan", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 188)(54, "div", 1)(55, "div", 189)(56, "table", 190)(57, "tbody")(58, "tr")(59, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "Acct No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "tr")(66, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "tr")(73, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](79, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "tr")(81, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div", 192)(88, "table", 190)(89, "tbody")(90, "tr")(91, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "Insurance Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96, "Pri");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "Ter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](108, "tr")(109, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, "Policy ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "tr")(118, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119, "Acct Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121, ": Commercial[Static]");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "div", 194)(124, "h4", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, " Related Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "table", 190)(127, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](128, AuditComponent_ng_template_984_tr_128_Template, 2, 1, "tr", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "div", 196)(130, "div", 197)(131, "div", 39)(132, "div", 181)(133, "div", 17)(134, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](135, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](136, " Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](137, "div", 20)(138, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](139, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](140, "div", 199)(141, "div", 200)(142, "table", 201)(143, "thead")(144, "tr")(145, "th", 158)(146, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](147, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](148, "th", 158)(149, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](150, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](151, "th", 158)(152, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](153, "CPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](154, "th", 158)(155, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](156, "Billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](157, "th", 158)(158, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](159, "AR Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](160, "th", 158)(161, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](162, "Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](163, "th", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](164, "Touches");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](165, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](166, AuditComponent_ng_template_984_tr_166_Template, 21, 10, "tr", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](167, "div", 202)(168, "div", 20)(169, "a", 203)(170, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](171, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](172, "a", 205)(173, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](174, "QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](175, "div", 206)(176, "div", 197)(177, "div", 39)(178, "div", 181)(179, "div", 207)(180, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](181, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](182, " QC Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](183, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](184, AuditComponent_ng_template_984_a_184_Template, 4, 0, "a", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](185, AuditComponent_ng_template_984_span_185_Template, 6, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](187, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](188, "div", 210)(189, "div", 1)(190, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](191, AuditComponent_ng_template_984_div_191_Template, 18, 8, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](192, AuditComponent_ng_template_984_div_192_Template, 3, 0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](193, "div", 213)(194, "div", 197)(195, "div", 39)(196, "div", 181)(197, "div", 17)(198, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](199, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](200, " Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](201, "div", 20)(202, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](203, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](204, "div", 215)(205, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](206, AuditComponent_ng_template_984_div_206_Template, 10, 6, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](207, AuditComponent_ng_template_984_div_207_Template, 3, 0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](208, AuditComponent_ng_template_984_app_atom_spinner_208_Template, 1, 2, "app-atom-spinner", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](209, "div", 218)(210, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](211, "app-followup-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](212, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](213, "app-followup-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](214, "app-claim-op-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](215, "div", 221)(216, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_984_Template_button_click_216_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r190);
      const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r192.modalRef == null ? null : ctx_r192.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](217, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "div", 223)(219, "div", 224)(220, "div", 1)(221, "h4", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](222, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](223, " Client Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "form", 226)(225, "div", 227)(226, "div", 228)(227, "div", 229)(228, "div", 230)(229, "div", 231)(230, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](231, "Rep Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](232, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](233, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](234, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](235, "div", 228)(236, "div", 229)(237, "div", 230)(238, "div", 231)(239, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](241, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](242, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](243, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](244, "div", 228)(245, "div", 229)(246, "div", 230)(247, "div", 231)(248, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](249, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](250, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](251, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](252, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "div", 228)(254, "div", 229)(255, "div", 234)(256, "div", 231)(257, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](258, "Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](259, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](260, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](261, "select", 235)(262, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](263, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](264, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](265, "Cigna Healthcare");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](266, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](267, "Atena");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](268, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](269, "123 Insurance Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](270, "span", 236)(271, "span", 44)(272, "span", 237)(273, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](274, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](275, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](276, "b", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](277, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](278, "form", 226)(279, "div", 50)(280, "div", 72)(281, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](282, "Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](283, "textarea", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](284, "button", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](285, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](286, "button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](287, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](288, AuditComponent_ng_template_984_div_288_Template, 258, 30, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](289, "div", 243);
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r30.main_tab == ctx_r30.main_tab ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claim No: ", ctx_r30.claim_clicked.claim_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r30.refer_claim_det);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r30.main_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r30.claim_clicked.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r30.claim_clicked.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](79, 27, ctx_r30.claim_clicked.dob, "MM/dd/yyyy"), ", ", ctx_r30.claim_clicked.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r30.claim_clicked.ssn);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r30.claim_clicked.prim_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r30.claim_clicked.sec_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", ctx_r30.claim_clicked.ter_ins_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r30.claim_clicked.prim_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r30.claim_clicked.sec_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](": ", ctx_r30.claim_clicked.ter_pol_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r30.claim_related);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r30.line_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r30.reassign_allocation == true && ctx_r30.refer_claim_editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r30.curr_reassigned_claims.includes(ctx_r30.claim_clicked.claim_no) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r30.qc_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r30.qc_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r30.claim_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r30.claim_notes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r30.loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r30.refer_claim_det);
  }
}
function AuditComponent_ng_template_986_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Enter notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_986_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_986_div_15_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r195.f["processnotes"].errors["required"]);
  }
}
function AuditComponent_ng_template_986_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_986_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r200);
      const modal_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r199.savenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r193.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r194.valid);
  }
}
function AuditComponent_ng_template_986_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_986_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r203);
      const modal_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r202.updatenotes("processnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r193.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r194.valid);
  }
}
const _c8 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function AuditComponent_ng_template_986_Template(rf, ctx) {
  if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_986_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r206);
      const modal_r193 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r193.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Process Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 280)(7, "div", 218)(8, "form", 281, 282)(10, "div", 1)(11, "div", 39)(12, "div", 72)(13, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "textarea", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AuditComponent_ng_template_986_div_15_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 243)(17, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_986_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r206);
      const modal_r193 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r193.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, AuditComponent_ng_template_986_button_19_Template, 2, 1, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, AuditComponent_ng_template_986_button_20_Template, 2, 1, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r32.processNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r32.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c8, ctx_r32.submitted && ctx_r32.f["processnotes"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r32.submitted && ctx_r32.f["processnotes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r32.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r32.editnote_value);
  }
}
function AuditComponent_ng_template_988_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_988_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r213);
      const modal_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r212.savenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r208.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r209.valid);
  }
}
function AuditComponent_ng_template_988_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_988_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r216);
      const modal_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r215.updatenotes("claimnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r208.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Update and Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r209.valid);
  }
}
function AuditComponent_ng_template_988_Template(rf, ctx) {
  if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_988_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r219);
      const modal_r208 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r208.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Claim Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 280)(7, "div", 218)(8, "form", 281, 282)(10, "div", 1)(11, "div", 39)(12, "div", 72)(13, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "textarea", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 243)(16, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_988_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r219);
      const modal_r208 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r208.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AuditComponent_ng_template_988_button_18_Template, 2, 1, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, AuditComponent_ng_template_988_button_19_Template, 2, 1, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r34.claimNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r34.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r34.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r34.editnote_value);
  }
}
function AuditComponent_ng_template_990_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "QC Notes is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_990_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_990_div_15_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r223.v["qc_notes"].errors["required"]);
  }
}
function AuditComponent_ng_template_990_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose Audit Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_990_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_990_div_26_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r225.v["error_type"].errors["required"]);
  }
}
function AuditComponent_ng_template_990_div_27_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose Error Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_990_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_990_div_27_div_6_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r234.v["error_parameter"].errors["required"]);
  }
}
function AuditComponent_ng_template_990_div_27_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose Error Sub Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_990_div_27_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_990_div_27_div_12_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r235.v["error_sub_parameter"].errors["required"]);
  }
}
function AuditComponent_ng_template_990_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "div", 296)(2, "div", 292)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ngx-select-dropdown", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_ng_template_990_div_27_Template_ngx_select_dropdown_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r239);
      const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r238.selectSubChange($event));
    })("click", function AuditComponent_ng_template_990_div_27_Template_ngx_select_dropdown_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r239);
      const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r240.get_error_sub_param_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AuditComponent_ng_template_990_div_27_div_6_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 296)(8, "div", 292)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Sub Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ngx-select-dropdown", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AuditComponent_ng_template_990_div_27_div_12_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx_r226.config)("options", ctx_r226.error_param_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r226.submitted && ctx_r226.v["error_parameter"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx_r226.config)("options", ctx_r226.error_sub_param_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r226.submitted && ctx_r226.v["error_sub_parameter"].errors);
  }
}
function AuditComponent_ng_template_990_div_28_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose FYI Error Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_990_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_990_div_28_div_6_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r241.v["fyi_parameter"].errors["required"]);
  }
}
function AuditComponent_ng_template_990_div_28_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose FYI Sub Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_990_div_28_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_990_div_28_div_12_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r242.v["fyi_sub_parameter"].errors["required"]);
  }
}
function AuditComponent_ng_template_990_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "div", 296)(2, "div", 292)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ngx-select-dropdown", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_ng_template_990_div_28_Template_ngx_select_dropdown_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r246);
      const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r245.selectSubChange($event));
    })("click", function AuditComponent_ng_template_990_div_28_Template_ngx_select_dropdown_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r246);
      const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r247.get_error_sub_param_codes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AuditComponent_ng_template_990_div_28_div_6_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 296)(8, "div", 292)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Sub Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ngx-select-dropdown", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AuditComponent_ng_template_990_div_28_div_12_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx_r227.config)("options", ctx_r227.fyi_param_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r227.submitted && ctx_r227.v["fyi_parameter"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx_r227.config)("options", ctx_r227.error_sub_param_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r227.submitted && ctx_r227.v["fyi_sub_parameter"].errors);
  }
}
function AuditComponent_ng_template_990_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div");
  }
}
function AuditComponent_ng_template_990_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div");
  }
}
function AuditComponent_ng_template_990_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_990_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r249);
      const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r248.savenotes("qcnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r248.modalRef2 == null ? null : ctx_r248.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r222.valid);
  }
}
function AuditComponent_ng_template_990_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_990_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r251);
      const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r250.updatenotes("qcnotes");
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r250.modalRef2 == null ? null : ctx_r250.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r222.valid);
  }
}
function AuditComponent_ng_template_990_Template(rf, ctx) {
  if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_990_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r253);
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r252.modalRef2 == null ? null : ctx_r252.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Qc Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 280)(7, "div", 218)(8, "form", 281, 282)(10, "div", 1)(11, "div", 39)(12, "div", 72)(13, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "textarea", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AuditComponent_ng_template_990_div_15_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 39)(17, "div", 72)(18, "div", 291)(19, "div", 292)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Audit Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ngx-select-dropdown", 293, 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_ng_template_990_Template_ngx_select_dropdown_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r253);
      const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r254.selectChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, AuditComponent_ng_template_990_div_26_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, AuditComponent_ng_template_990_div_27_Template, 13, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, AuditComponent_ng_template_990_div_28_Template, 13, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, AuditComponent_ng_template_990_div_29_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, AuditComponent_ng_template_990_div_30_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 243)(32, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_990_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r253);
      const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r255.modalRef2 == null ? null : ctx_r255.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, AuditComponent_ng_template_990_button_34_Template, 2, 1, "button", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, AuditComponent_ng_template_990_button_35_Template, 2, 1, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r36.qcNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r36.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.submitted && ctx_r36.v["qc_notes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx_r36.config)("options", ctx_r36.err_type_list)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](13, _c8, ctx_r36.submitted && ctx_r36.v["error_type"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.submitted && ctx_r36.v["error_type"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.selectedError == "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.selectedError == "FYI");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.selectedError == "No Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.selectedError == "Clarification");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r36.editnote_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.editnote_value);
  }
}
function AuditComponent_ng_template_992_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Work Order Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_992_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_992_div_21_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r258.fe["workorder_name"].errors["required"]);
  }
}
function AuditComponent_ng_template_992_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Due Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_992_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_992_div_33_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r259.fe["due_date"].errors["required"]);
  }
}
function AuditComponent_ng_template_992_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_992_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_992_div_51_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r260.fe["priority"].errors["required"]);
  }
}
function AuditComponent_ng_template_992_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_992_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_992_div_57_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r261.fe["priority"].errors["required"]);
  }
}
function AuditComponent_ng_template_992_div_74_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Work Order Note is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AuditComponent_ng_template_992_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AuditComponent_ng_template_992_div_74_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r262.fe["wo_notes"].errors["required"]);
  }
}
function AuditComponent_ng_template_992_Template(rf, ctx) {
  if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_992_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r269);
      const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r268.modalRef == null ? null : ctx_r268.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r268.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "New Work Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 280)(7, "div", 1)(8, "form", 281, 282)(10, "div", 231)(11, "div", 302)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Work Order Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 303)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "input", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, AuditComponent_ng_template_992_div_21_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 231)(23, "div", 306)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 303)(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 304)(32, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_ng_template_992_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r269);
      const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r270.selectedAudit = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, AuditComponent_ng_template_992_div_33_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 231)(35, "div", 302)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 303)(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 308)(44, "div", 309)(45, "div", 310)(46, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "input", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "label", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, AuditComponent_ng_template_992_div_51_Template, 2, 1, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](53, "input", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "label", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, AuditComponent_ng_template_992_div_57_Template, 2, 1, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "input", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "label", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 231)(64, "div", 302)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "Work Order Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 303)(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](73, "textarea", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, AuditComponent_ng_template_992_div_74_Template, 2, 1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "div", 231)(76, "div", 321)(77, "label", 322)(78, "input", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_992_Template_input_click_78_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r269);
      const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r271.auto_select_claims($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r271.auto_assigned());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, " \u00A0Auto Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "button", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_992_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r269);
      const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](995);
      ctx_r272.get_auditors();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r272.openModal2(_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](81, "i", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, " Associates List");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "div", 243)(84, "button", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_992_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r269);
      const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r273.modalRef == null ? null : ctx_r273.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r273.clear_fields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "button", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_992_Template_button_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r269);
      const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r274.create_workorder();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r274.modalRef == null ? null : ctx_r274.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r38.workOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](15, _c8, ctx_r38.fe["workorder_name"].touched && ctx_r38.fe["workorder_name"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r38.fe["workorder_name"].touched && ctx_r38.fe["workorder_name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r38.selectedAudit)("bsConfig", ctx_r38.bsConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r38.fe["due_date"].touched && ctx_r38.fe["due_date"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c8, ctx_r38.fe["priority"].touched && ctx_r38.fe["priority"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r38.fe["priority"].touched && ctx_r38.fe["priority"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c8, ctx_r38.fe["priority"].touched && ctx_r38.fe["priority"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r38.fe["priority"].touched && ctx_r38.fe["priority"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](21, _c8, ctx_r38.fe["priority"].touched && ctx_r38.fe["priority"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](23, _c8, ctx_r38.fe["wo_notes"].touched && ctx_r38.fe["wo_notes"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r38.fe["wo_notes"].touched && ctx_r38.fe["wo_notes"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r257.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !_r257.valid || ctx_r38.assigned_claim_status == false);
  }
}
function AuditComponent_ng_template_994_div_13_Template(rf, ctx) {
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
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r276.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r276.assigned_claim_nos, "");
  }
}
function AuditComponent_ng_template_994_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 335)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Assigned Claims: 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r277.selected_claim_nos.length, "");
  }
}
function AuditComponent_ng_template_994_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 335)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Selected Claims: ", ctx_r278.selected_claim_nos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Assigned Claims: ", ctx_r278.assigned_claim_nos, "");
  }
}
function AuditComponent_ng_template_994_tr_22_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assts_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](assts_r280.assign_limit);
  }
}
function AuditComponent_ng_template_994_tr_22_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td")(1, "span", 335)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const assts_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](assts_r280.assign_limit);
  }
}
function AuditComponent_ng_template_994_tr_22_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td")(1, "input", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function AuditComponent_ng_template_994_tr_22_td_9_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r288);
      const assts_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r286.manual_assign($event, assts_r280.id));
    })("ngModelChange", function AuditComponent_ng_template_994_tr_22_td_9_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r288);
      const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r289.associateCount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assts_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r283.assigned_data[assts_r280.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r283.associateCount);
  }
}
function AuditComponent_ng_template_994_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_994_tr_22_Template_input_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r292);
      const assts_r280 = restoredCtx.$implicit;
      const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r291.select_associates($event, assts_r280.id));
    })("ngModelChange", function AuditComponent_ng_template_994_tr_22_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r292);
      const assts_r280 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](assts_r280.isCheck = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AuditComponent_ng_template_994_tr_22_td_7_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AuditComponent_ng_template_994_tr_22_td_8_Template, 4, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AuditComponent_ng_template_994_tr_22_td_9_Template, 2, 2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assts_r280 = ctx.$implicit;
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", assts_r280.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx_r279.selected_associates.includes(assts_r280.id))("ngModel", assts_r280.isCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", assts_r280.firstname, " ", assts_r280.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](assts_r280.assigned_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r279.limit_exceeds.includes(assts_r280.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r279.limit_exceeds.includes(assts_r280.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r279.selected_associates.includes(assts_r280.id) && ctx_r279.claim_assign_type == "Manual");
  }
}
function AuditComponent_ng_template_994_Template(rf, ctx) {
  if (rf & 1) {
    const _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_994_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r295);
      const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r294.modalRef2 == null ? null : ctx_r294.modalRef2.hide();
      ctx_r294.checkedEvnt(false);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r294.removeTextbox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Auditor List");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 280)(7, "div", 72)(8, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "table", 331)(11, "thead")(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AuditComponent_ng_template_994_div_13_Template, 8, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AuditComponent_ng_template_994_div_14_Template, 8, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AuditComponent_ng_template_994_div_15_Template, 8, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Assign limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, AuditComponent_ng_template_994_tr_22_Template, 10, 9, "tr", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 243)(24, "span", 332)(25, "button", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_994_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r295);
      const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r296.assign_type("Manual"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "button", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_994_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r295);
      const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r297.assign_claims();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r297.modalRef2 == null ? null : ctx_r297.modalRef2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r40.associate_error);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r40.associate_error, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r40.selected_claim_nos.length > 0 && ctx_r40.selected_claim_nos.length >= ctx_r40.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r40.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r40.selected_claim_nos.length > 0 && ctx_r40.selected_claim_nos.length < ctx_r40.assigned_claim_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r40.auditors_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r40.selected_claim_nos.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r40.selected_claim_nos.length == 0 || ctx_r40.selected_claim_nos.length < ctx_r40.assigned_claim_nos);
  }
}
function AuditComponent_ng_template_996_tr_53_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wo_det_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, wo_det_r300.dos, "MM/dd/yyyy"), " ");
  }
}
function AuditComponent_ng_template_996_tr_53_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wo_det_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.claim_age);
  }
}
function AuditComponent_ng_template_996_tr_53_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "td", 343);
  }
}
function AuditComponent_ng_template_996_tr_53_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "td", 343);
  }
}
function AuditComponent_ng_template_996_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 342)(2, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AuditComponent_ng_template_996_tr_53_td_10_Template, 3, 4, "td", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AuditComponent_ng_template_996_tr_53_td_11_Template, 2, 1, "td", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AuditComponent_ng_template_996_tr_53_td_12_Template, 1, 0, "td", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AuditComponent_ng_template_996_tr_53_td_13_Template, 1, 0, "td", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wo_det_r300 = ctx.$implicit;
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.touch_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.acct_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.claim_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", wo_det_r300.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", wo_det_r300.dos != "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", wo_det_r300.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", wo_det_r300.dos == "01/01/1970");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.prim_ins_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](18, 15, wo_det_r300.total_charges, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](21, 18, wo_det_r300.total_ar, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](wo_det_r300.claim_Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"]("", wo_det_r300.assigned_to_name, "/", ctx_r299.wo_created, "/", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](26, 21, wo_det_r300.created_at, "MM/dd/yyyy"), "");
  }
}
function AuditComponent_ng_template_996_Template(rf, ctx) {
  if (rf & 1) {
    const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r307.modalRef == null ? null : ctx_r307.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h4", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 179)(7, "div", 72)(8, "div", 180)(9, "div", 39)(10, "div", 181)(11, "div", 17)(12, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Claims List");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 50)(18, "div", 200)(19, "div", 339)(20, "table", 201)(21, "thead")(22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r309.sort_claims("acct_no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Acct# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r310.sort_claims("claim_no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Claim# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "th", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r311.sort_claims("patient_name"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Patient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r312.sort_claims("dos_date"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "DOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r313.sort_claims("prim_ins_name"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Insurance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r314.sort_claims("total_charges"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Billed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r315.sort_claims("total_ar"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "AR Due ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](46, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "th", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_996_Template_th_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r308);
      const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r316.sort_claims("claim_Status"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "i", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "Assigned To/By/Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, AuditComponent_ng_template_996_tr_53_Template, 27, 24, "tr", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "div", 243);
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r42.wo_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r42.wo_details);
  }
}
function AuditComponent_ng_template_998_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 280)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Are you sure you want to Reassign the Claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "The Claim will be moved from your Bucket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r318.reassign_claim.claim_no);
  }
}
function AuditComponent_ng_template_998_Template(rf, ctx) {
  if (rf & 1) {
    const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "h4", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Re-Assign to Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_998_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r320);
      const modal_r317 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r317.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AuditComponent_ng_template_998_div_6_Template, 11, 1, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 243)(8, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_998_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r320);
      const modal_r317 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r317.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_998_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r320);
      const modal_r317 = restoredCtx.$implicit;
      const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      modal_r317.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r322.confirm_action(ctx_r322.confirmation_type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r44.confirmation_type == "Reassign");
  }
}
function AuditComponent_ng_template_1000_Template(rf, ctx) {
  if (rf & 1) {
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "h4", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Re-Assign to Managers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_1000_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r325);
      const modal_r323 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r323.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 14)(7, "div", 1)(8, "div", 354)(9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Are you sure you want to Reassign the Claim ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 243)(13, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_1000_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r325);
      const modal_r323 = restoredCtx.$implicit;
      const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      modal_r323.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r326.cancel_claims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_1000_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r325);
      const modal_r323 = restoredCtx.$implicit;
      const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      modal_r323.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r327.confirm_boxes("reassign"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_1002_Template(rf, ctx) {
  if (rf & 1) {
    const _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169)(1, "h4", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Close the Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_1002_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r330);
      const modal_r328 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r328.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 14)(7, "div", 355)(8, "div", 354)(9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Are you sure you want to Close the Claim ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 243)(13, "button", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_1002_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r330);
      const modal_r328 = restoredCtx.$implicit;
      const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      modal_r328.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r331.cancel_claims());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "button", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_ng_template_1002_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r330);
      const modal_r328 = restoredCtx.$implicit;
      const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      modal_r328.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r332.confirm_box());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AuditComponent_ng_template_1004_Template(rf, ctx) {
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
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Auth No : ", ctx_r50.claim_data.auth_no ? ctx_r50.claim_data.auth_no : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Admit Date : ", ctx_r50.claim_data.admit_date ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 10, ctx_r50.claim_data.admit_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Discharge Date : ", ctx_r50.claim_data.discharge_date ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 13, ctx_r50.claim_data.discharge_date, "MM/dd/yyyy") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" CPT : ", ctx_r50.claim_data.cpt ? ctx_r50.claim_data.cpt : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ICD : ", ctx_r50.claim_data.icd ? ctx_r50.claim_data.icd : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Modifiers : ", ctx_r50.claim_data.modifiers ? ctx_r50.claim_data.modifiers : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Units : ", ctx_r50.claim_data.units ? ctx_r50.claim_data.units : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Facility : ", ctx_r50.claim_data.facility ? ctx_r50.claim_data.facility : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Billing Provider : ", ctx_r50.claim_data.billing_prov ? ctx_r50.claim_data.billing_prov : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Insurance Type : ", ctx_r50.claim_data.insurance_type ? ctx_r50.claim_data.insurance_type : "-Nil-", "");
  }
}
function AuditComponent_ng_template_1006_Template(rf, ctx) {
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
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Guarantor : ", ctx_r52.claim_data.guarantor ? ctx_r52.claim_data.guarantor : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" DOB : ", ctx_r52.claim_data.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 12, ctx_r52.claim_data.dob, "MM/dd/yyyy") : "-Nil-", " | Age : ", ctx_r52.calculateAge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" SSN : ", ctx_r52.claim_data.ssn ? ctx_r52.claim_data.ssn : "-Nil-", " | Gender : ", ctx_r52.claim_data.gender ? ctx_r52.claim_data.gender : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx_r52.claim_data.address_1 ? ctx_r52.claim_data.address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx_r52.claim_data.address_2 ? ctx_r52.claim_data.address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" City : ", ctx_r52.claim_data.city ? ctx_r52.claim_data.city : "-Nil-", " | State : ", ctx_r52.claim_data.state ? ctx_r52.claim_data.state : "-Nil-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Zip Code : ", ctx_r52.claim_data.zipcode ? ctx_r52.claim_data.zipcode : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" Phone Number : ", ctx_r52.claim_data.phone_no ? ctx_r52.claim_data.phone_no : "-Nil-", " Employer : ", ctx_r52.claim_data.employer ? ctx_r52.claim_data.employer : "-Nil-", "");
  }
}
function AuditComponent_ng_template_1008_Template(rf, ctx) {
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
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Primary Policy ID : ", ctx_r54.claim_data.prim_pol_id ? ctx_r54.claim_data.prim_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary Group ID : ", ctx_r54.claim_data.prim_group_id ? ctx_r54.claim_data.prim_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Primary Address 1 : ", ctx_r54.claim_data.prim_address_1 ? ctx_r54.claim_data.prim_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary Address 2 : ", ctx_r54.claim_data.prim_address_2 ? ctx_r54.claim_data.prim_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary City : ", ctx_r54.claim_data.prim_city ? ctx_r54.claim_data.prim_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary State : ", ctx_r54.claim_data.prim_state ? ctx_r54.claim_data.prim_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Primary Zip Code : ", ctx_r54.claim_data.prim_zipcode ? ctx_r54.claim_data.prim_zipcode : "-Nil-", "");
  }
}
function AuditComponent_ng_template_1010_Template(rf, ctx) {
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
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Secondary Policy ID : ", ctx_r56.claim_data.sec_pol_id ? ctx_r56.claim_data.sec_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary Group ID : ", ctx_r56.claim_data.sec_group_id ? ctx_r56.claim_data.sec_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Secondary Address 1 : ", ctx_r56.claim_data.sec_address_1 ? ctx_r56.claim_data.sec_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary Address 2 : ", ctx_r56.claim_data.sec_address_2 ? ctx_r56.claim_data.sec_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary City : ", ctx_r56.claim_data.sec_city ? ctx_r56.claim_data.sec_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary State : ", ctx_r56.claim_data.sec_state ? ctx_r56.claim_data.sec_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Secondary Zip Code : ", ctx_r56.claim_data.sec_zipcode, "");
  }
}
function AuditComponent_ng_template_1012_Template(rf, ctx) {
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
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Tertiary Policy ID : ", ctx_r58.claim_data.ter_pol_id ? ctx_r58.claim_data.ter_pol_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary Group ID : ", ctx_r58.claim_data.ter_group_id ? ctx_r58.claim_data.ter_group_id : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Tertiary Address 1 : ", ctx_r58.claim_data.ter_address_1 ? ctx_r58.claim_data.ter_address_1 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary Address 2 : ", ctx_r58.claim_data.ter_address_2 ? ctx_r58.claim_data.ter_address_2 : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary City : ", ctx_r58.claim_data.ter_city ? ctx_r58.claim_data.ter_city : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary State : ", ctx_r58.claim_data.ter_state ? ctx_r58.claim_data.ter_state : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Tertiary Zip Code : ", ctx_r58.claim_data.ter_zipcode ? ctx_r58.claim_data.ter_zipcode : "-Nil-", "");
  }
}
function AuditComponent_ng_template_1014_Template(rf, ctx) {
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
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Patient AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 2, ctx_r60.claim_data.pat_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 5, ctx_r60.claim_data.pat_ar, "1.2-2") : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Insurance AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](7, 8, ctx_r60.claim_data.ins_ar, "1.2-2") ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 11, ctx_r60.claim_data.ins_ar, "1.2-2") : "-Nil-", "");
  }
}
function AuditComponent_ng_template_1016_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claim Notes : ", ctx_r62.claim_data.claims_notes ? ctx_r62.claim_data.claims_notes : "-Nil-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claim Notes : ", ctx_r62.claim_data.claims_notes, "");
  }
}
class AuditComponent {
  constructor(Jarwis, formBuilder, setus, loadingBar, modalService, follow, notes_hadler, toastr, export_handler, notify_service, datepipe, modal, auth, loader) {
    this.Jarwis = Jarwis;
    this.formBuilder = formBuilder;
    this.setus = setus;
    this.loadingBar = loadingBar;
    this.modalService = modalService;
    this.follow = follow;
    this.notes_hadler = notes_hadler;
    this.toastr = toastr;
    this.export_handler = export_handler;
    this.notify_service = notify_service;
    this.datepipe = datepipe;
    this.modal = modal;
    this.auth = auth;
    this.loader = loader;
    this.createWork = "";
    this.assigned = "";
    this.closedWork = "";
    this.associateCount = '';
    this.mySelect = '';
    // ErrType:[] = [];
    this.selectedValue = {};
    this.assigned_results = [];
    this.reassigned_results = [];
    this.closed_results = [];
    this.auditQueue_results = [];
    this.searchResults = [];
    this.assignedSelected = false;
    this.assigned_selected_val = null;
    this.reassignedSelected = false;
    this.reassigned_selected_val = null;
    this.closedSelected = false;
    this.closed_selected_val = null;
    this.auditQueueSelected = false;
    this.auditQueue_selected_val = null;
    this.status_codes_data = [];
    this.sub_status_codes_data = [];
    this.select_date = null;
    this.selectedAudit = null;
    this.selectedDueDate = null;
    this.selectedCreatedAt = null;
    this.realloc_pages = 0;
    this.selectedAge = null;
    this.auditselectedAge = null;
    this.closedselectedAge = null;
    this.audit_submit_date = null;
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
    this.decimal_pattern = "^\[0-9]+(\.[0-9][0-9])\-\[0-9]+(\.[0-9][0-9])?$";
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
    this.root_cause_list = [];
    this.err_type_list = [];
    this.error_param_list = [];
    this.fyi_param_list = [];
    this.error_sub_param_list = [];
    this.fyi_sub_param_list = [];
    this.editnote_value = null;
    this.formdata = new FormData();
    this.search_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    this.wo_search_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    this.filter_option = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    this.qc_notes_data = [];
    this.qc_notes_data_list = [];
    this.tab_load = false;
    this.sortByAsc = true;
    //Work Order Tab Functions*****
    this.table_fields = [];
    this.table_datas = [];
    this.claim_clicked = [];
    this.claim_related = [];
    this.process_notes = [];
    this.claim_notes = [];
    this.qc_notes = [];
    this.client_notes = [];
    this.closeResult = '';
    this.total_claims = 0;
    this.pages = 0;
    this.loading = false;
    this.completed_claims = [];
    this.total_completed_claims = 0;
    this.comp_pages = 0;
    this.allocated_claims = [];
    this.total_allocated = 0;
    this.alloc_pages = 0;
    this.current_claim_type = '';
    this.selected_filter_type = [];
    this.audit_claim_data = [];
    this.searchData = '';
    //Work Order table Formation
    this.wo_page_number = 1;
    this.work_order_data = [];
    this.wo_sorting_name = [];
    this.tooltipOptions = {
      'placement': 'right',
      'show-delay': '200',
      'tooltip-class': 'new-tooltip-class',
      'background-color': '#9ad9e4',
      'margin-top': '20px'
    };
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
    this.active_claim = [];
    this.refer_claim_notes_nos = [];
    this.refer_process_notes_nos = [];
    this.refer_qc_notes_nos = [];
    this.refer_client_notes_nos = [];
    this.refer_client_notes = [];
    this.active_refer_client = [];
    this.refer_claim_editable = 'false';
    this.submitted = false;
    this.initial_edit = false;
    //Save Notes
    this.process_notes_data_list = [];
    this.process_notes_data = [];
    this.request_monitor = 0;
    //Get Auditor details
    this.auditors_detail = [];
    //Check All function
    this.check_all = [];
    this.selected_claims = [];
    this.selected_claim_nos = [];
    //Manage Selected claims
    this.assigned_claim_nos = 0;
    this.assigned_claims_details = [];
    this.selected_associates = [];
    this.associate_error = '';
    this.associate_error_handler = [];
    this.assigned_claim_status = false;
    this.assigned_data = [];
    this.claim_proceed = true;
    this.limit_clearance = false;
    this.limit_exceeds = [];
    this.assigned_claim_details = [];
    this.wo_total = 0;
    this.wo_details = [];
    this.wo_name = '';
    this.wo_created = '';
    this.line_data = [];
    this.line_item_data = [];
    this.edit_permission = false;
    this.confirmation_type = '';
    this.reassign_claim = [];
    this.curr_reassigned_claims = [];
    this.reassign_allocation = true;
    //Configuration of Dropdown Search
    this.config = {
      displayKey: "description",
      search: true,
      limitTo: 1000,
      result: 'single'
    };
    this.isCheck = true;
    //  get_touch_limit()
    //  {
    //    this.Jarwis.get_practice_stats().subscribe(
    //      data =>this.set_prac_settings(data)
    //      );
    //  }
    this.touch_count = 0;
    //  set_prac_settings(data)
    //  {
    //    let prac_data=data.data;
    //    this.touch_count=prac_data.touch_limit;
    //   //  console.log(this.touch_count);
    //  }
    this.dataSource = {
      "chart": {
        "caption": "Average Sales",
        "subCaption": "Previous week vs current week",
        "xAxisName": "Day",
        "yAxisName": "Sales (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "60",
        "theme": "fusion"
      },
      "categories": [{
        "category": [{
          "label": "Mon"
        }, {
          "label": "Tue"
        }, {
          "label": "Wed"
        }, {
          "label": "Thu"
        }, {
          "label": "Fri"
        }, {
          "label": "Sat"
        }, {
          "label": "Sun"
        }]
      }],
      "dataset": [{
        "seriesname": "Previous Week",
        "data": [{
          "value": "13000"
        }, {
          "value": "14500"
        }, {
          "value": "13500"
        }, {
          "value": "15000"
        }, {
          "value": "15500"
        }, {
          "value": "17650"
        }, {
          "value": "19500"
        }]
      }, {
        "seriesname": "Current Week",
        "data": [{
          "value": "8400"
        }, {
          "value": "9800"
        }, {
          "value": "11800"
        }, {
          "value": "14400"
        }, {
          "value": "18800"
        }, {
          "value": "24800"
        }, {
          "value": "30800"
        }]
      }]
    };
    this.dataSource2 = {
      "chart": {
        "caption": "Average Page Load Time (hsm.com)",
        "subCaption": "Last Week",
        "showBorder": "0",
        "xAxisName": "Day",
        "yAxisName": "Time (In Sec)",
        "numberSuffix": "s",
        "theme": "fusion"
      },
      "categories": [{
        "category": [{
          "label": "Mon"
        }, {
          "label": "Tue"
        }, {
          "label": "Wed"
        }, {
          "label": "Thu"
        }, {
          "label": "Fri"
        }, {
          "label": "Sat"
        }, {
          "label": "Sun"
        }]
      }],
      "dataset": [{
        "seriesname": "Loading Time",
        "allowDrag": "0",
        "data": [{
          "value": "6"
        }, {
          "value": "5.8"
        }, {
          "value": "5"
        }, {
          "value": "4.3"
        }, {
          "value": "4.1"
        }, {
          "value": "3.8"
        }, {
          "value": "3.2"
        }]
      }]
    };
    this.myOptions = {
      'placement': 'right',
      'hide-delay': 3000,
      'theme': 'light'
    };
    this.user_role = 0;
    this.class_change = [];
    this.class_change_tab = [];
    //Red Alerrt Box
    this._opened = false;
    this.isOpen = false;
    this._positionNum = 0;
    this._modeNum = 1;
    this._MODES = ['push'];
    this._POSITIONS = ['right'];
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-default',
      rangeInputFormat: 'MM/DD/YYYY',
      dateInputFormat: 'MM/DD/YYYY',
      showWeekNumbers: false,
      isAnimated: true,
      adaptivePosition: true
    });
    this.cdtn = false;
    this.isCollapsed_audit_que_grid = false;
    this.isCollapsed_audit_que_filters = true;
    this.isCollapsed_assigned_claims_filters = true;
    this.isCollapsed_assigned_claims_grid = false;
    this.isCollapsed_closed_claims = false;
    this.isCollapsed_closed_claims_filters = true;
    this.defaultColDef = {
      editable: false,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: false
    };
    this.page = null;
    this.GridrowData1 = [];
    this.GridrowData2 = [];
    this.GridrowData3 = [];
    this.GridrowData4 = [];
    this.new_cdtn = false;
    this.currentPageData = [];
    this.resl_dta = [];
    this.paginationSizeValue_AuditQue = 15;
    this.paginationSizeValue_WorkOrders = 15;
    this.paginationSizeValue_AssignmedClaims = 15;
    this.paginationSizeValue_ClosedClaims = 15;
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
      paginationPageSize: this.paginationSizeValue_AuditQue,
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
      paginationPageSize: this.paginationSizeValue_WorkOrders,
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
      paginationPageSize: this.paginationSizeValue_AssignmedClaims,
      suppressDragLeaveHidesColumns: true
    };
    this.gridOptions4 = {
      defaultColDef: {
        sortable: true,
        filter: true
      },
      rowSelection: 'multiple',
      rowHeight: 34,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      paginationPageSize: this.paginationSizeValue_ClosedClaims,
      suppressDragLeaveHidesColumns: true
    };
    this.columnDefs1 = [{
      field: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 20,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px',
          'width': 'auto'
        };
      }
    },
    // {
    //   field: 'touch',
    //   headerName: '',
    //    width: 83,
    //   cellStyle:(params:any):any=>{
    //     return {'color': '#363636',
    //      'font-weight': '500',  'font-family': 'sans-serif',
    //      'font-size': '12px','width':'auto'};
    //   },
    //   cellRenderer: this.cellrendered_auditQue.bind(this, 'touch'),
    // },
    {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 210,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px',
          'width': 'auto'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked_AuditQue.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 212,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'dos')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 183,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'age')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 190,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked_AuditQue.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      width: 300,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked_AuditQue.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 350,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'rendering_prov')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 263,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'responsibility')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'responsibility')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 266,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'billed_submit_date')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'billed_submit_date')
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 155,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'denial_code')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'denial_code')
    }, {
      field: 'statuscode',
      headerName: 'Status Code',
      sortable: true,
      width: 238,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'statuscode')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'statuscode')
    }, {
      field: 'substatus_code',
      headerName: 'Sub Status Code',
      sortable: true,
      width: 205,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'substatus_code')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'substatus_code')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 175,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'total_charges')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'total_charges')
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
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'total_ar')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 165,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'claim_Status')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'claim_Status')
    }, {
      field: 'claim_note',
      headerName: 'Claim Note',
      sortable: true,
      width: 155,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_auditQue.bind(this, 'claim_note')
      // onCellClicked: this.CellClicked_AuditQue.bind(this, 'claim_note')
    }, {
      field: 'created_ats',
      headerName: 'User | Date',
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
      cellRenderer: this.cellrendered_auditQue.bind(this, 'created_ats')
      // // onCellClicked: this.CellClicked_AuditQue.bind(this, 'created_ats')
    }];

    this.columnDefs2 = [{
      field: 'created',
      headerName: 'Created By|Date',
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'created'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'created')
    }, {
      field: 'work_order_name',
      headerName: 'Work Order Name',
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      sortable: true,
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'work_order_name'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'work_order_name')
    }, {
      field: 'assigned_nos',
      headerName: 'Claim Count',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'assigned_nos'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'assigned_nos')
    }, {
      field: 'due_date',
      headerName: 'Due Date',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'due_date'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'due_date')
    }, {
      field: 'billed',
      headerName: 'Billed',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'billed'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'billed')
    }, {
      field: 'ar_due',
      headerName: 'AR Due',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'ar_due'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'ar_due')
    }, {
      field: 'status',
      headerName: 'WO Status',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'status'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'status')
    }, {
      field: 'priority',
      headerName: 'Priority',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'priority'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'priority')
    }, {
      field: 'work_notes',
      headerName: 'WO Notes',
      sortable: true,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_WorkOrders.bind(this, 'work_notes'),
      onCellClicked: this.CellClicked_WorkOrders.bind(this, 'work_notes')
    }];
    this.columnDefs3 = [
    // {
    //   field: '',
    //   checkboxSelection: true,
    //   headerCheckboxSelection: true,
    //    width: 20,
    //   cellStyle:(params:any):any=>{
    //     let x = params.node.data;
    //     let result = x.error_type;
    //     console.log('error_type',result);
    //     if(result ==='[4]'){
    //       return { 'background-color': '#ffcaca','font-size':'12px' };
    //     }
    //     else
    //     {
    //       return {'font-size':'12px' };
    //     }
    //   },
    // },
    {
      field: 'touch',
      headerName: '',
      width: 45,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      sortable: true,
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'touch')
    }, {
      field: 'claim_no',
      headerName: 'Claim No',
      sortable: true,
      width: 90,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked_assignedClaims.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 102,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'dos'),
      onCellClicked: this.CellClicked_assignedClaims.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 60,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'age'),
      onCellClicked: this.CellClicked_assignedClaims.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 80,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked_assignedClaims.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      width: 150,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked_assignedClaims.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 147,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
      sortable: true,
      width: 115,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'responsibility')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
      sortable: true,
      width: 125,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'billed_submit_date')
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 105,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'denial_code')
    }, {
      field: 'statuscode',
      headerName: 'Status Code',
      sortable: true,
      width: 83,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'statuscode')
    }, {
      field: 'substatuscode',
      headerName: 'Sub Status Code',
      sortable: true,
      width: 128,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          ``;
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'substatuscode')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
      sortable: true,
      width: 115,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
      sortable: true,
      width: 90,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 106,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'claim_Status')
    }, {
      field: 'claims_notes',
      headerName: 'Claim Note',
      sortable: true,
      width: 100,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'claims_notes')
    }, {
      field: 'executive_work_date',
      headerName: 'Executive w.Date',
      sortable: true,
      width: 133,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'executive_work_date')
    }, {
      field: 'assigned_to',
      headerName: 'User | Date',
      sortable: true,
      width: 130,
      cellStyle: params => {
        let x = params.node.data;
        let result = x.error_type;
        if (result === '[4]') {
          return {
            'background-color': '#ffcaca',
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        } else {
          return {
            'color': '#363636',
            'font-weight': '500',
            'font-family': 'sans-serif',
            'font-size': '12px'
          };
        }
      },
      cellRenderer: this.cellrendered_assignedClaims.bind(this, 'assigned_to')
    }];
    this.columnDefs4 = [{
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
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'claim_no'),
      onCellClicked: this.CellClicked_ClosedClaims.bind(this, 'claim_no')
    }, {
      field: 'dos',
      headerName: 'DOS',
      sortable: true,
      width: 106,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'dos'),
      onCellClicked: this.CellClicked_ClosedClaims.bind(this, 'dos')
    }, {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 70,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'age'),
      onCellClicked: this.CellClicked_ClosedClaims.bind(this, 'age')
    }, {
      field: 'acct_no',
      headerName: 'Acc No',
      sortable: true,
      width: 80,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'acct_no'),
      onCellClicked: this.CellClicked_ClosedClaims.bind(this, 'acct_no')
    }, {
      field: 'patient_name',
      headerName: 'Patient Name',
      sortable: true,
      width: 160,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'patient_name'),
      onCellClicked: this.CellClicked_ClosedClaims.bind(this, 'patient_name')
    }, {
      field: 'rendering_prov',
      headerName: 'Rendering Provider',
      sortable: true,
      width: 150,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'rendering_prov')
    }, {
      field: 'responsibility',
      headerName: 'Responsibility',
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
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'responsibility')
    }, {
      field: 'billed_submit_date',
      headerName: 'BillSubmit Date',
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
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'billed_submit_date')
    }, {
      field: 'denial_code',
      headerName: 'Denial Code',
      sortable: true,
      width: 110,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'denial_code')
    }, {
      field: 'statuscode',
      headerName: 'Status Code',
      sortable: true,
      width: 155,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'statuscode')
    }, {
      field: 'substatuscode',
      headerName: 'Sub Status Code',
      sortable: true,
      width: 130,
      cellStyle: params => {
        return {
          'color': '#363636',
          'font-weight': '500',
          'font-family': 'sans-serif',
          'font-size': '12px'
        };
      },
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'substatuscode')
    }, {
      field: 'total_charges',
      headerName: 'Total Charges',
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
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'total_charges')
    }, {
      field: 'total_ar',
      headerName: 'Total AR',
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
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'total_ar')
    }, {
      field: 'claim_Status',
      headerName: 'Claim Status',
      sortable: true,
      width: 110,
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'claim_Status')
    }, {
      field: 'claims_notes',
      headerName: 'Claim Note',
      sortable: true,
      width: 100,
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'claims_notes')
    }, {
      field: 'created_ats',
      headerName: 'User | Date',
      sortable: true,
      width: 150,
      cellRenderer: this.cellrendered_ClosedClaims.bind(this, 'created_ats')
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
          suppressColumnExpandAll: false
        }
      }],
      defaultToolPanel: 'columns'
    };
    this.autoGroupColumnDef = {
      width: 140
    };
    this.observalble = this.setus.update_edit_perm().subscribe(message => {
      this.check_edit_permission(message);
    });
    this.response_data = this.notes_hadler.get_response_data('audit').subscribe(message => {
      this.collect_response(message);
    });
    this.update_monitor = this.notes_hadler.refresh_update().subscribe(message => {
      this.getclaim_details(this.pages, 'refresh', 'null', 'null', 'null', 'null', null, null, null, null, null);
      console.log(this.update_monitor);
    });
    this.alwaysShowCalendars = true;
  }
  //Error Handling
  handleError(error) {
    console.log(error);
  }
  order_list(type, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search) {
    console.log(sorting_name);
    this.sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, null, search);
    }
  }
  assigned_order_list(type, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search) {
    this.assigned_sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.alloc_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.alloc_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, null, search);
    }
  }
  closed_order_list(type, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search) {
    this.closed_sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.getclaim_details(this.comp_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, null, search);
    } else {
      this.sortByAsc = true;
      this.getclaim_details(this.comp_pages, type, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, null, null, search);
    }
  }
  audit_claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search) {
    this.auditclaims_filter = search;
    console.log(this.auditclaims_filter);
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search);
  }
  assigned_claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search) {
    this.assignedclaims_filter = search;
    console.log(this.assignedclaims_filter);
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search);
  }
  closed_claims_filter(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, searchdata) {
    this.closedclaims_filter = searchdata;
    console.log(this.closedclaims_filter);
    console.log(type);
    this.getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, searchdata);
  }
  getclaim_details(page, type, sort_data, sort_type, sorting_name, sorting_method, assign_claim_searh, reassign_claim_searh, closed_claim_searh, audit_claim_search, search) {
    this.loader.start();
    this.search = search;
    console.log(assign_claim_searh);
    let page_count = 15;
    let form_type = null;
    let searchs = this.search;
    console.log(this.type);
    this.type = type;
    if (type == 'wo') {
      console.log(searchs);
      this.pages = page;
      this.current_claim_type = 'wo';
      let auditSearch_notNull = [];
      let nullVal = false;
      let auditClaims_searchValue = [this.auditClaimsFind.value];
      if (typeof auditClaims_searchValue === 'object' && auditClaims_searchValue !== null) {
        Object.keys(auditClaims_searchValue).forEach(key => {
          if (typeof auditClaims_searchValue[key] === 'object' && auditClaims_searchValue[key] !== null) {
            Object.keys(auditClaims_searchValue[key]).forEach(val => {
              if (typeof auditClaims_searchValue[key][val] === 'object' && auditClaims_searchValue[key][val] !== null) {
                Object.keys(auditClaims_searchValue[key][val]).forEach(data => {
                  if (auditClaims_searchValue[key][val][data] === null) {
                    nullVal = false;
                  } else {
                    nullVal = true;
                  }
                });
                auditSearch_notNull.push(nullVal);
              } else if (typeof auditClaims_searchValue[key][val] !== 'object' && auditClaims_searchValue[key][val] !== null && auditClaims_searchValue[key][val] != '') {
                nullVal = true;
                auditSearch_notNull.push(nullVal);
              } else if (typeof auditClaims_searchValue[key][val] !== 'object' && auditClaims_searchValue[key][val] !== null && auditClaims_searchValue[key][val] == '') {
                nullVal = false;
                auditSearch_notNull.push(nullVal);
              }
            });
          }
        });
      }
      if (auditSearch_notNull.some(x => x === true)) {
        this.search = this.auditclaims_filter;
        search = this.search;
        sort_data = null;
        sort_type = null;
        sorting_name = 'null';
        sorting_method = 'null';
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
        this.search = search;
        // this.Jarwis.get_audit_table_page(sort_data, page, page_count, sort_type, sorting_name, sorting_method, null, null, null, null, search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_table_page_new(null, null, null, null, search).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      } else if (searchs == 'search') {
        console.log(this.auditClaimsFind.value);
        console.log(this.sorting_name);
        if (this.auditClaimsFind.value.dos?.[0] != null && this.auditClaimsFind.value.dos?.[1] != null) {
          console.log(this.auditClaimsFind.controls['dos'].value);
          this.auditClaimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.auditClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.auditClaimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.auditClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
          this.auditClaimsFind.value.dos.pop(this.auditClaimsFind.value.dos[0]);
          this.auditClaimsFind.value.dos.pop(this.auditClaimsFind.value.dos[1]);
          const obj = {
            ...this.auditClaimsFind.controls['dos'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.auditClaimsFind.value.dos = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.auditClaimsFind.value.dos);
        }
        if (this.auditClaimsFind.value.date?.[0] != null && this.auditClaimsFind.value.date?.[1] != null) {
          console.log(this.auditClaimsFind.controls['date'].value);
          this.auditClaimsFind.value.date.startDate = this.datepipe.transform(new Date(this.auditClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.auditClaimsFind.value.date.endDate = this.datepipe.transform(new Date(this.auditClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
          this.auditClaimsFind.value.date.pop(this.auditClaimsFind.value.date[0]);
          this.auditClaimsFind.value.date.pop(this.auditClaimsFind.value.date[1]);
          const obj = {
            ...this.auditClaimsFind.controls['date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.auditClaimsFind.value.date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.auditClaimsFind.value.date);
        }
        if (this.auditClaimsFind.value.bill_submit_date?.[0] != null && this.auditClaimsFind.value.bill_submit_date?.[1] != null) {
          this.auditClaimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.auditClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.auditClaimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.auditClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.auditClaimsFind.value.bill_submit_date.pop(this.auditClaimsFind.value.bill_submit_date[0]);
          this.auditClaimsFind.value.bill_submit_date.pop(this.auditClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.auditClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.auditClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.auditClaimsFind.value.bill_submit_date);
        }
        // this.Jarwis.get_audit_table_page(sort_data, page, page_count, sort_type, this.sorting_name, this.sortByAsc, null, null, null, this.auditClaimsFind.value, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_table_page_new(null, null, null, this.auditClaimsFind.value, this.search).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      } else {
        this.search = search;
        // this.Jarwis.get_audit_table_page(sort_data, page, page_count, sort_type, this.sorting_name, this.sortByAsc, null, null, null, null, this.search).subscribe(
        //   data => this.assign_page_data(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_table_page_new(null, null, null, null, this.search).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      }
    } else if (type == 'completed') {
      this.search = search;
      console.log(searchs);
      this.comp_pages = page;
      this.current_claim_type = 'completed';
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
        // this.Jarwis.get_audit_claim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, sorting_name, sorting_method, null, null, null, null, search).subscribe(
        //   data => this.form_table(data, type, form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_claim_details_new(this.setus.getId(), type, null, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
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
        // this.Jarwis.get_audit_claim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.closed_sorting_name, this.sortByAsc, null, null, this.closedClaimsFind.value, null, this.search).subscribe(
        //   data => this.form_table(data, type, form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_claim_details_new(this.setus.getId(), type, null, null, this.closedClaimsFind.value, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else {
        // this.Jarwis.get_audit_claim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.closed_sorting_name, this.sortByAsc, null, null, null, null, this.search).subscribe(
        //   data => this.form_table(data, type, form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_claim_details_new(this.setus.getId(), type, null, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      }
    } else if (type == 'allocated') {
      this.search = search;
      console.log(searchs);
      this.alloc_pages = page;
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
        // this.Jarwis.get_audit_claim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, sorting_name, sorting_method, null, null, null, null, search).subscribe(
        //   data => this.form_table(data, type, form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_claim_details_new(this.setus.getId(), type, null, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else if (searchs == 'search') {
        console.log(this.assigned_sorting_name);
        if (this.assignedClaimsFind.value.dos?.[0] != null && this.assignedClaimsFind.value.dos?.[1] != null) {
          console.log(this.assignedClaimsFind.controls['dos'].value);
          this.assignedClaimsFind.value.dos.startDate = this.datepipe.transform(new Date(this.assignedClaimsFind.value.dos?.[0]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.dos.endDate = this.datepipe.transform(new Date(this.assignedClaimsFind.value.dos?.[1]), 'yyyy-MM-dd');
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
          this.assignedClaimsFind.value.date.startDate = this.datepipe.transform(new Date(this.assignedClaimsFind.value.date?.[0]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.date.endDate = this.datepipe.transform(new Date(this.assignedClaimsFind.value.date?.[1]), 'yyyy-MM-dd');
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
          this.assignedClaimsFind.value.bill_submit_date.startDate = this.datepipe.transform(new Date(this.assignedClaimsFind.value.bill_submit_date?.[0]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.bill_submit_date.endDate = this.datepipe.transform(new Date(this.assignedClaimsFind.value.bill_submit_date?.[1]), 'yyyy-MM-dd');
          this.assignedClaimsFind.value.bill_submit_date.pop(this.assignedClaimsFind.value.bill_submit_date[0]);
          this.assignedClaimsFind.value.bill_submit_date.pop(this.assignedClaimsFind.value.bill_submit_date[1]);
          const obj = {
            ...this.assignedClaimsFind.controls['bill_submit_date'].value
          }; // { 0: 1, 1: 2, 2: 3 }
          this.assignedClaimsFind.value.bill_submit_date = obj;
          console.log('OBJ', obj);
          console.log('Updated claims', this.assignedClaimsFind.value.bill_submit_date);
        }
        console.log('target');
        // this.Jarwis.get_audit_claim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.assigned_sorting_name, this.sortByAsc, this.assignedClaimsFind.value, null, null, null, this.search).subscribe(
        //   data => this.form_table(data, type, form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_claim_details_new(this.setus.getId(), type, this.assignedClaimsFind.value, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      } else {
        // this.Jarwis.get_audit_claim_details(this.setus.getId(), page, page_count, type, sort_data, sort_type, this.assigned_sorting_name, this.sortByAsc, null, null, null, null, this.search).subscribe(
        //   data => this.form_table(data, type, form_type),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_audit_claim_details_new(this.setus.getId(), type, null, null, null, null).subscribe(data => this.form_table(data, type, form_type), error => this.handleError(error));
      }
    } else if (type == 'refresh') {
      if (type == 'refresh') {
        type = this.current_claim_type;
        form_type = 'refresh';
        if (type == 'wo') {
          page = this.pages;
        } else if (type == 'completed') {
          page = this.comp_pages;
        } else if (type == 'allocated') {
          page = this.alloc_pages;
          console.log(page);
        }
      }
    }
    this.tab_load = true;
    // this.Jarwis.get_audit_claim_details(this.setus.getId(),page,page_count,'allocated').subscribe(
    //   data  => this.form_table(data,type,form_type),
    //   error => this.handleError(error)
    // );
  }
  //set filter type
  claim_filter_type($event) {
    this.selected_filter_type = $event.target.value;
    this.claim_sort_filter();
  }
  //sort with filter
  claim_sort_filter() {
    this.getclaim_details(1, 'all', null, null, null, null, null, null, null, null, null);
  }
  //Assign Table data and `total values
  assign_page_data(data) {
    if (data) {
      this.GridrowData1 = data.data;
      this.myGrid_1.api?.setRowData(this.GridrowData1);
      this.gridApi_1.closeToolPanel();
      this.loader.stop();
      console.log('GridData', this.GridrowData1);
      this.autoSizeAll();
    } else {
      this.myGrid_1.api?.setRowData([]);
      this.gridApi_1.closeToolPanel();
      this.loader.stop();
      this.autoSizeAll();
    }
    if (data) {
      this.table_datas = data.data;
      this.audit_claim_data = data.audit_claim_data;
      this.total = data.total;
      this.totals = data.total;
      this.current_totals = data.current_total;
      this.skips = data.skip + 1;
    }
    this.skip_rows = this.skips;
    this.current_rows = this.skips + this.current_totals - 1;
    this.total_rows = this.total;
  }
  //Search filter function
  sort_data(data) {
    this.getclaim_details(1, 'wo', data, 'searchFilter', 'null', 'null', null, null, null, null, null);
    this.searchData = data;
    //To reset the checklist
    this.check_all[1] = false;
    this.selected_claim_nos = [];
    //console.log(this.searchData);
  }

  sort_wo_data(data) {
    // console.log(data);
    if (data == '') {
      this.get_workorder(null, null, null, 2, 1, null, null, null, null, null, null, null);
    } else {
      this.get_workorder('search', data, 0, 2, 1, null, null, null, null, null, null, null);
    }
  }
  sort_table(data) {
    this.getclaim_details(1, 'wo', data, 'filters', 'null', 'null', null, null, null, null, null);
  }
  work_order_list(sort_type, sorting_name, sorting_method, search) {
    this.wo_sorting_name = sort_type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.get_workorder(null, null, null, 1, this.w_pages, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, search);
    } else {
      this.sortByAsc = true;
      this.get_workorder(null, null, null, 1, this.w_pages, this.sortByAsc, sort_type, sorting_name, sorting_method, null, null, search);
    }
  }
  workorder_search(filter, from, to, type, page, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, search) {
    this.search = search;
    console.log(this.search);
    this.get_workorder(filter, from, to, type, page, sort_type, this.sortByAsc, sorting_name, sorting_method, null, this.workOrderFind.value, search);
  }
  get_workorder(filter, from, to, type, page, sort_data, sort_type, sorting_name, sorting_method, closedsearch, workordersearch, search) {
    this.loader.start();
    let page_count = 15;
    this.tab_load = true;
    if (filter == null && from == null && to == null) {
      let searchs = this.search;
      this.w_pages = page;
      if (sorting_name == 'null' && searchs != 'search') {
        // this.Jarwis.get_workorder(0, 0, 0, 2, page, sort_type, sort_data, sorting_name, sorting_method, closedsearch, workordersearch, search).subscribe(
        //   data => this.form_wo_table(data, page),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_workorder_new(0, 2, page, closedsearch, workordersearch).subscribe(data => this.form_wo_table(data, page), error => this.handleError(error));
      } else if (searchs == 'search') {
        if (this.workOrderFind.value.created_at?.[0] != null && this.workOrderFind.value.created_at?.[1] != null) {
          console.log(this.workOrderFind.value.created_at);
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
        }
        if (this.workOrderFind.value.due_date?.[0] != null && this.workOrderFind.value.due_date?.[1] != null) {
          console.log(this.workOrderFind.controls['due_date'].value);
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
        }
        // this.Jarwis.get_workorder(0, 0, 0, 2, page, sort_type, sort_data, this.wo_sorting_name, this.sortByAsc, null, this.workOrderFind.value, this.search).subscribe(
        //   data => this.form_wo_table(data, page),
        //   error => this.error_handler(error)
        // );
        this.Jarwis.get_workorder_new(0, 2, page, null, this.workOrderFind.value).subscribe(data => this.form_wo_table(data, page), error => this.handleError(error));
      } else {
        // this.Jarwis.get_workorder(0, 0, 0, 2, page, sort_type, sort_data, this.wo_sorting_name, this.sortByAsc, null, workordersearch, this.search).subscribe(
        //   data => this.form_wo_table(data, page),
        //   error => this.handleError(error)
        // );
        this.Jarwis.get_workorder_new(0, 2, page, closedsearch, workordersearch).subscribe(data => this.form_wo_table(data, page), error => this.handleError(error));
      }
    } else if (filter == 'search') {
      this.Jarwis.get_workorder(filter, from, 0, 2, page, sort_data, sort_type, sorting_name, sorting_method, null, null, null).subscribe(data => this.form_wo_table(data, page), error => this.handleError(error));
    }
  }
  //Form Claim Table
  form_table(data, type, form_type) {
    //console.log("fom_datav ",data,type,form_type);
    if (form_type == null) {
      if (type == "wo") {
        this.table_fields = data.data.fields;
        this.table_datas = data.data.datas;
        this.total_claims = data.count;
        // this.total=data.total;
        // this.current_total= data.current_total - 1;
        // this.skip = data.skip;
        // this.skip_row = this.skip;
        // this.current_row = this.skip + this.current_total;
        // this.total_row = data.count;
      } else if (type == 'allocated') {
        // console.log(data);
        if (data) {
          this.allocated_claims = data.data.datas;
          this.assigned_claim_data = data.selected_claim_data;
          this.total_allocated = data.count;
          this.total_row = data.count;
          this.current_total = data.current_total;
          this.skip = data.skip + 1;
        }
        if (this.allocated_claims) {
          this.GridrowData3 = this.allocated_claims;
          console.log('GridrowData3', this.GridrowData3);
          this.myGrid_3.api.setRowData(this.GridrowData3);
          this.gridApi_3.closeToolPanel();
          this.loader.stop();
          //this.autoSizeAll();
        }

        this.skip_row = this.skip;
        this.current_row = this.skip + this.current_total - 1;
        console.log(this.allocated_claims);
        this.sortallocated();
      } else if (type == 'completed') {
        if (data) {
          this.completed_claims = data.data.datas;
          this.closed_claim_data = data.selected_claim_data;
          this.total_completed_claims = data.count;
          //this.total=data.total;
          this.current_total = data.current_total;
          this.skip = data.skip + 1;
          this.total_row = data.count;
        }
        if (this.completed_claims) {
          this.GridrowData4 = this.completed_claims;
          console.log('GridrowData3', this.GridrowData4);
          this.myGrid_4.api.setRowData(this.GridrowData4);
          this.gridApi_4.closeToolPanel();
          //this.autoSizeAll();
          this.loader.stop();
        }
        this.skip_row = this.skip;
        this.current_row = this.skip + this.current_total - 1;
      }
    } else if (form_type == 'refresh') {
      let new_claim;
      if (type == "wo") {
        this.table_fields = data.data.fields;
        this.table_datas = data.data.datas;
        this.total_claims = data.count;
        if (this.claim_active != undefined) {
          new_claim = this.table_datas.find(x => x.claim_no == this.claim_active['claim_no']);
        }
      } else if (type == 'allocated') {
        // console.log(data);
        this.allocated_claims = data.data.datas;
        this.total_allocated = data.count;
        if (this.claim_active != undefined) {
          new_claim = this.allocated_claims.find(x => x.claim_no == this.claim_active['claim_no']);
        }
      } else if (type == 'completed') {
        this.completed_claims = data.data.datas;
        this.total_completed_claims = data.count;
        if (this.claim_active != undefined) {
          new_claim = this.completed_claims.find(x => x.claim_no == this.claim_active['claim_no']);
        }
      }
      if (this.claim_active != undefined) {
        if (this.main_tab == true) {
          this.getnotes(this.claim_active);
          this.claimslection(new_claim);
        } else {
          this.Jarwis.getnotes(this.claim_active).subscribe(data => {
            let prcs_data = {
              data: data['data']['process']
            };
            let refer_data = {
              data: data['data']['claim']
            };
            let qc_data = {
              data: data['data']['qc']
            };
            this.update_refer_notes(prcs_data, 'processnotes', this.claim_active.claim_no);
            this.update_refer_notes(refer_data, 'claimnotes', this.claim_active.claim_no);
            this.update_refer_notes(qc_data, 'qcnotes', this.claim_active.claim_no);
          }, error => this.handleError(error));
          // console.log("Goos sdhfb",this.refer_claim_notes,this.refer_process_notes,this.refer_qc_notes,this.refer_client_notes);
          this.referclaim(this.claim_active);
        }
      }
      this.tab_load = false;
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
    // console.log("Here",claim);
    this.claim_no = claim.claim_no;
    this.get_line_items(claim);
    this.check_reassign_alloc(claim);
    //Clear Previous Claims
    this.clear_refer();
    this.claim_clicked = claim;
    console.log(this.claim_clicked);
    let length = this.table_datas.length;
    this.claim_related = [];
    this.get_related(claim);
    // for(let i=0;i<this.table_datas.length;i++)
    // {
    //   let related_length=this.claim_related.length;
    //   length= length-1;
    //   if(related_length<3)
    //   {
    //     if(this.table_datas[length]['acct_no'] == claim.acct_no && this.table_datas[length]['claim_no'] != claim.claim_no )
    //     {
    //     this.claim_related.push(this.table_datas[length]);
    //     }
    //   }
    // }
    this.send_calim_det('footer_data');
    this.loading = true;
    this.getnotes(this.claim_clicked);
    // this.process_notes_delete(this.claim_no);
  }

  get_related(claim) {
    this.Jarwis.get_related_calims(claim, 'followup', this.setus.getId()).subscribe(data => this.list_related(data), error => this.handleError(error));
  }
  list_related(claims) {
    this.claim_related = claims.data;
    //console.log(this.claim_related);
  }
  //Refer Claim
  referclaim(claim) {
    // (claim.editable == false) ? (this.refer_claim_editable = false) : (this.refer_claim_editable = true);
    claim = claim.claim;
    this.claim_nos = claim.claim_no;
    console.log(this.type);
    this.claim_status = claim.claim_Status;
    this.Jarwis.get_audit_claimno(this.claim_nos, this.setus.getId(), this.claim_status, this.type).subscribe(data => this.handleClaimNo(data), error => this.handleError(error));
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
    this.send_calim_det('footer_data');
  }
  //Update Notes in Related Claims
  update_refer_notes(data, type, claimno) {
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
    this.send_calim_det('footer_data');
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
  get f() {
    return this.processNotes.controls;
  }
  get v() {
    return this.qcNotes.controls;
  }
  get c() {
    return this.claimNotes.controls;
  }
  //Update Displayed Notes
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
        }
      }
      this.loading = false;
      this.processNotes.reset();
      this.claimNotes.reset();
      this.qcNotes.reset();
    }
  }
  process_display_notes(data, type) {
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
        }
      }
      this.loading = false;
      this.processNotes.reset();
      this.claimNotes.reset();
      this.qcNotes.reset();
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
  //Get Status codes from Backend
  get_statuscodes() {
    this.Jarwis.get_status_codes(this.setus.getId(), 'all').subscribe(data => this.process_codes(data));
  }
  process_codes(data) {
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
        this.auditClaimsFind.patchValue({
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
            this.auditClaimsFind.patchValue({
              sub_status_code: {
                id: this.sub_options[0]['id'],
                description: this.sub_options[0]['description']
              }
            });
          } else {
            this.auditClaimsFind.patchValue({
              sub_status_code: ""
            });
          }
        }
      }
      // this.modified_stats.push(event);
    }
  }

  assign_status_code_changed(event) {
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

  get_audit_codes() {
    this.Jarwis.get_audit_codes(this.setus.getId()).subscribe(data => this.assign_audit_codes(data), error => this.handleError(error));
  }
  assign_audit_codes(data) {
    console.log("hello2");
    console.log(data);
    this.root_stats = data.root_states;
    console.log(this.root_stats);
    this.err_stats = data.err_types;
    console.log(this.err_stats);
    this.audit_codes_list = {
      root: this.root_stats,
      error: this.err_stats
    };
    let root_states = [];
    //console.log(root_states);
    let error_states = [];
    for (let j = 0; j < this.err_stats.length; j++) {
      if (this.err_stats[j]['status'] == '1') {
        error_states.push({
          id: this.err_stats[j]['id'],
          description: this.err_stats[j]['name']
        });
      }
    }
    this.err_type_list = error_states;
    console.log(this.err_type_list);
    for (let i = 0; i < this.root_stats.length; i++) {
      if (this.root_stats[i].status == '1') {
        root_states.push({
          id: this.root_stats[i]['id'],
          description: this.root_stats[i]['name']
        });
      }
    }
    this.root_cause_list = root_states;
    // console.log("err",this.err_type_list,this.root_cause_list);
    // sub_status_option.push({id: sub_status[i]['id'], description: sub_status[i]['status_code'] +'-'+ sub_status[i]['description'] });
  }

  get_error_param_codes() {
    this.Jarwis.get_error_param_codes(this.setus.getId()).subscribe(data => this.assign_error_codes(data), error => this.handleError(error));
  }
  assign_error_codes(data) {
    console.log(data);
    this.err_param_stats = data.err_param_types;
    this.fyi_param_stats = data.fyi_param_types;
    console.log(this.err_param_stats);
    let error_params = [];
    for (let k = 0; k < this.err_param_stats.length; k++) {
      if (this.err_param_stats[k].status == '1') {
        error_params.push({
          id: this.err_param_stats[k]['id'],
          description: this.err_param_stats[k]['err_params']
        });
      }
    }
    console.log(error_params);
    //console.log(error_params['id']);
    this.error_param_list = error_params;
    let fyi_params = [];
    for (let m = 0; m < this.fyi_param_stats.length; m++) {
      if (this.fyi_param_stats[m].status == '1') {
        fyi_params.push({
          id: this.fyi_param_stats[m]['id'],
          description: this.fyi_param_stats[m]['err_params']
        });
      }
    }
    console.log(fyi_params);
    this.fyi_param_list = fyi_params;
  }
  get_error_sub_param_codes() {
    this.Jarwis.get_error_sub_param_codes(this.setus.getId(), this.parentId).subscribe(data => {
      console.log(data), this.assign_sub_error_codes(data);
    }, error => this.handleError(error));
  }
  assign_sub_error_codes(data) {
    console.log(data);
    this.err_sub_param_stats = data.sub_param_datas;
    // let fyi_sub_param_stats = data.fyi_sub_param_types;
    this.error_sub_codes_list = {
      errorsubparam: this.err_sub_param_stats
    };
    console.log(this.err_sub_param_stats);
    let error_sub_params = [];
    for (let n = 0; n < this.err_sub_param_stats.length; n++) {
      if (this.err_sub_param_stats[n].status == '1') {
        error_sub_params.push({
          id: this.err_sub_param_stats[n]['id'],
          description: this.err_sub_param_stats[n]['sub_parameter']
        });
      }
    }
    console.log(error_sub_params);
    this.error_sub_param_list = error_sub_params;
    return error_sub_params;
  }
  editnotes(type, value, id) {
    if (type == 'qc_notes_init') {
      let qc_data = this.qc_notes_data.find(x => x.id == id['claim_no']);
      console.log(qc_data);
      this.editnote_value = qc_data.notes;
      this.edit_noteid = id;
      this.initial_edit = true;
    } else if (type == 'process_notes_init') {
      let process_data = this.process_notes_data.find(x => x.id == id['claim_no']);
      this.editnote_value = process_data.notes;
      this.edit_noteid = id;
      this.proess_initial_edit = true;
    } else {
      this.editnote_value = value.content;
      this.edit_noteid = id;
      this.qcNotes.patchValue({
        qc_notes: this.editnote_value
      });
      if (type == 'qcnote') {
        let root_cause = value.root_cause;
        let error_type = value.error_type;
        let error_parameter = value['error_parameter'];
        let error_sub_parameter = value['error_sub_parameter'];
        console.log(error_sub_parameter);
        this.selected_err_codes = value['error_sub_parameter'];
        let root_det = this.root_stats;
        let selecetd_root = [];
        if (root_cause != null) {
          root_cause.forEach(function (value) {
            let rootkeys = value;
            console.log(rootkeys);
            let rootval = root_det.find(x => x.id == rootkeys['id']);
            selecetd_root.push({
              id: rootkeys['id'],
              description: rootval['name']
            });
          });
          this.root_cause_list = selecetd_root;
        } else {
          selecetd_root.push({
            id: null,
            description: null
          });
          this.root_cause_list = selecetd_root;
        }
        // console.log(this.audit_codes_list);
        console.log(this.err_stats);
        let error_det = this.err_stats;
        let selected_err = [];
        let error_param_det = this.err_param_stats;
        let fyi_param_det = this.fyi_param_stats;
        let keys;
        let error;
        // console.log("ERR_tyoe",error_type);
        error_type.forEach(function (value) {
          keys = value;
          console.log(keys);
          console.log(keys.id);
          console.log(keys['id']);
          console.log(error_det);
          error = error_det.find(x => x.id == keys['id']);
          console.log(error);
          console.log(error['name']);
          //this.selected_err_codes = {id:keys['id'],description:error['name']};
          //console.log(this.selected_err_codes);
          selected_err.push({
            id: keys['id'],
            description: error['name']
          });
          console.log(selected_err);
        });
        this.qcNotes.patchValue({
          error_type: {
            id: keys['id'],
            description: error['name']
          }
        });
        this.selectedError = error['name'];
        //this.err_type_list = this.selecetd_err;
        console.log(error_param_det);
        let selecetd_err_parameter = [];
        let err_param_keys = error_parameter;
        console.log(err_param_keys);
        let error_param = error_param_det.find(x => x.id == err_param_keys);
        console.log(error_param);
        selecetd_err_parameter.push({
          id: err_param_keys,
          description: error_param['err_params']
        });
        this.qcNotes.patchValue({
          error_parameter: {
            id: err_param_keys,
            description: error_param['err_params']
          }
        });
        this.parentId = err_param_keys;
        this.Jarwis.get_error_sub_param_codes(this.setus.getId(), err_param_keys).subscribe(data => this.set_sub_err_code(data));
        this.qcNotes.patchValue({
          qc_notes: this.editnote_value,
          root_cause: selecetd_root
        });
      }
      this.initial_edit = false;
    }
  }
  set_sub_err_code(data) {
    console.log(data);
    this.err_sub_param_stats = data.sub_param_datas;
    let error_sub_param_det = this.err_sub_param_stats;
    console.log(error_sub_param_det);
    let selecetd_err_sub_parameter = [];
    let err_sub_param_keys = this.selected_err_codes;
    console.log(err_sub_param_keys);
    let error_sub_param = error_sub_param_det.find(x => x.id == err_sub_param_keys);
    console.log(error_sub_param);
    selecetd_err_sub_parameter.push({
      id: err_sub_param_keys,
      description: error_sub_param['sub_parameter']
    });
    this.qcNotes.patchValue({
      error_sub_parameter: {
        id: err_sub_param_keys,
        description: error_sub_param['sub_parameter']
      }
    });
  }
  //Handle Rootcause and Error Type
  handle_notes_opt() {
    console.log("QC", this.qcNotes.value);
    let error_type = this.qcNotes.value['error_type'];
    let root_cause = this.qcNotes.value['root_cause'];
    let error_parameter = this.qcNotes.value['error_parameter'];
    let error_sub_parameter = this.qcNotes.value['error_sub_parameter'];
    let fyi_parameter = this.qcNotes.value['fyi_parameter'];
    let fyi_sub_parameter = this.qcNotes.value['fyi_sub_parameter'];
    console.log(error_type);
    console.log(error_parameter);
    console.log(error_sub_parameter);
    console.log(fyi_parameter);
    console.log(fyi_sub_parameter);
    console.log(this.selectedError);
    console.log(this.parentId);
    let error_types_ids = [];
    /* error_type.forEach(ertype => {
    let keys = ertype;
    console.log(keys);
    error_types_ids.push(keys.id);
    console.log(error_types_ids);
    }); */
    let keys = error_type;
    console.log(keys);
    error_types_ids.push(keys.id);
    console.log(error_types_ids);
    let error_parameter_ids;
    let error_sub_parameter_ids;
    let fyi_parameter_ids;
    let fyi_sub_parameter_ids;
    if (this.selectedError != "No Error" || this.selectedError != "Clarification") {
      if (error_parameter != null && error_sub_parameter != null) {
        console.log(error_parameter);
        error_parameter_ids = error_parameter.id;
        console.log(error_parameter_ids);
        console.log(error_sub_parameter);
        error_sub_parameter_ids = error_sub_parameter.id;
        console.log(error_sub_parameter_ids);
      } else {
        error_parameter_ids = null;
        error_sub_parameter_ids = null;
      }
      if (fyi_parameter != null && fyi_sub_parameter != null) {
        console.log(fyi_parameter);
        fyi_parameter_ids = fyi_parameter.id;
        console.log(fyi_parameter_ids);
        console.log(fyi_parameter);
        fyi_sub_parameter_ids = fyi_sub_parameter.id;
        console.log(fyi_sub_parameter_ids);
      } else {
        fyi_parameter_ids = null;
        fyi_sub_parameter_ids = null;
      }
    } else {
      error_parameter_ids = null;
      error_sub_parameter_ids = null;
      fyi_parameter_ids = null;
      fyi_sub_parameter_ids = null;
    }
    this.rc_et_data = {
      root_cause: null,
      error_types: error_types_ids,
      error_parameter: error_parameter_ids,
      error_sub_parameter: error_sub_parameter_ids,
      fyi_parameter: fyi_parameter_ids,
      fyi_sub_parameter: fyi_sub_parameter_ids
    };
  }
  note_refresh() {
    this.process_notes_data_list = [];
    this.qc_notes_data_list = [];
  }
  savenotes(type) {
    let claim_id = [];
    if (this.active_claim.length != 0) {
      let index = this.refer_claim_no.indexOf(this.active_claim);
      claim_id = this.refer_claim_det[index];
    } else {
      claim_id = this.claim_clicked;
      console.log(this.claim_clicked);
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
    } else if (type == 'qcnotes') {
      //console.log(this.qcNotes.value['qc_notes']);
      console.log('claaim id  :' + claim_id);
      this.submitted = true;
      this.handle_notes_opt();
      console.log("QC", this.rc_et_data);
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
      // this.Jarwis.qc_note(this.setus.getId(),notes_det,claim_id,'create_qcnotes').subscribe(
      //   data  => this.display_notes(data,type),
      //   error => this.handleError(error)
      //   );
      this.notes_hadler.set_notes(this.setus.getId(), notes_det, claim_id, 'create_qcnotes');
      this.send_calim_det('footer_data');
    }
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
      this.send_calim_det('footer_data');
    }
    // else if(this.proess_initial_edit==true){
    //   this.notes_hadler.set_notesest(this.setus.getId(),this.processNotes.value['processnotes'],this.edit_noteid,'claim_create');
    //   this.process_notes_data.find(x => x.id == this.edit_noteid['claim_no']).notes=this.processNotes.value['processnotes'];
    //   this.initial_edit=false;
    //   this.send_calim_det('footer_data');
    // }
    else {
      if (type == 'processnotes') {
        this.Jarwis.process_note(this.setus.getId(), this.processNotes.value['processnotes'], this.edit_noteid, 'processupdate', 'audit-closed').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      } else if (type == 'claimnotes') {
        this.Jarwis.claim_note(this.setus.getId(), this.claimNotes.value['claim_notes'], this.edit_noteid, 'claimupdate').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
      } else if (type == 'qcnotes') {
        let claim_active;
        let claim_id = [];
        console.log(this.edit_noteid);
        if (this.main_tab == true) {
          claim_active = this.claim_clicked;
          claim_id = this.claim_clicked;
          console.log(claim_active);
        } else {
          claim_active = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
          console.log(claim_active);
          claim_id = this.claim_clicked;
        }
        this.Jarwis.check_edit_val(claim_active, 'audit').subscribe(data => {
          this.set_note_edit_validity(data);
          if (this.note_edit_val != undefined) {
            this.handle_notes_opt();
            console.log(this.qcNotes.value['qc_notes']);
            //this.qc_notes_data.push({notes:this.qcNotes.value['qc_notes'],id:claim_active['claim_no'],notes_opt:this.rc_et_data});
            let notes_det = {
              notes: this.qcNotes.value['qc_notes'],
              notes_opt: this.rc_et_data
            };
            this.Jarwis.qc_note(this.setus.getId(), notes_det, claim_id, 'qcupdate').subscribe(data => this.display_notes(data, type), error => this.handleError(error));
            //this.qc_notes_data.find(x => x.id == this.edit_noteid['claim_no']).notes=this.qcNotes.value['qc_notes'];
            this.notes_hadler.set_notes(this.setus.getId(), notes_det, claim_id, 'qcupdate');
            this.send_calim_det('footer_data');
          } else {
            this.toastr.errorToastr('Notes cannot be Updated.', 'Claim Processed.');
          }
        }, error => this.handleError(error));
      }
    }
    this.editnote_value = null;
  }
  closedupdatenotes(type) {
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
  //Clear ProcessNote
  clear_notes() {
    this.editnote_value = null;
    this.processNotes.reset();
  }
  //Open Pop-up
  open(content) {
    this.openModal(content);
    this.getDismissReason();
    // this.modalService.open(content, { centered: true, windowClass: 'dark-modal' }).result.then((result) => {
    //   this.closeResult = `${result}`;
    // }, (reason) => {
    //   this.closeResult = `${this.getDismissReason()}`;
    // });
  }
  //Modal Dismiss on Clicking Outside the Modal
  getDismissReason() {
    this.clear_notes();
  }
  //Send Claim Value to Followup-Template Component on Opening Template
  send_calim_det(type) {
    if (this.main_tab == true) {
      console.log('main');
      if (type == 'followup') {
        this.follow.setvalue(this.claim_clicked['claim_no']);
      } else {
        this.notes_hadler.selected_tab(this.claim_clicked['claim_no']);
        this.notes_hadler.set_claim_details(this.claim_clicked);
        this.claim_active = this.claim_clicked;
      }
    } else {
      console.log('Not main');
      if (type == 'followup') {
        this.follow.setvalue(this.active_claim);
      } else {
        this.notes_hadler.selected_tab(this.active_claim);
        let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
        console.log(claim_detials);
        this.notes_hadler.set_claim_details(claim_detials);
        this.claim_active = claim_detials;
      }
    }
  }
  //Collect Response Forom Footer Component after Claim processing
  collect_response(data) {
    //console.log(data);
    if (this.main_tab == true) {
      this.check_note_edit_validity(this.claim_clicked);
    } else {
      let claim_detials = this.refer_claim_det.find(x => x.claim_no == this.active_claim);
      this.check_note_edit_validity(claim_detials);
    }
    // this.check_note_edit_validity(this.active_claim)
    this.display_notes(data, 'qcnotes');
    this.getclaim_details(1, 'allocated', 'null', 'null', 'null', 'null', null, null, null, null, null);
    this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
    this.getclaim_details(1, 'completed', 'null', 'null', 'null', 'null', null, null, null, null, null);
    let index = this.qc_notes_data_list.indexOf(this.active_claim);
    this.qc_notes_data_list.splice(index, 1);
    // console.log(this.qc_notes_data_list);
    let index1 = this.process_notes_data_list.indexOf(this.active_claim);
    this.process_notes_data_list.splice(index1, 1);
  }
  get_auditors() {
    this.Jarwis.get_auditors(this.setus.getId()).subscribe(data => this.assign_auditors(data), error => this.handleError(error));
  }
  //Assign and List auditor details
  assign_auditors(data) {
    //console.log(data);
    this.auditors_detail = data.data;
  }
  check_all_assign(page, event) {
    if (event.target.checked == true) {
      this.check_all[page] = true;
    } else {
      this.check_all[page] = false;
    }
  }
  selected(event, claim, index) {
    if (claim == 'all' && event == true) {
      let audit_claim_data = this.audit_claim_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      audit_claim_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
    } else if (claim == 'all' && event == false) {
      for (let i = 0; i < this.audit_claim_data.length; i++) {
        let claim = this.audit_claim_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
    } else if (event == true) {
      this.selected_claims.push(this.audit_claim_data[index]);
      this.selected_claim_nos.push(claim);
      console.log(this.selected_claim_nos);
    } else if (event == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  assigned_selected(event, claim, index) {
    if (claim == 'all' && event.target.checked == true) {
      let assigned_claim_data = this.assigned_claim_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      assigned_claim_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.assigned_claim_data.length; i++) {
        let claim = this.assigned_claim_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.assigned_claim_data[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
  }
  closed_selected(event, claim, index) {
    if (claim == 'all' && event.target.checked == true) {
      let assigned_claim_data = this.closed_claim_data;
      let claim_nos = this.selected_claim_nos;
      let claim_data = this.selected_claims;
      assigned_claim_data.forEach(function (value) {
        let keys = value;
        if (!claim_nos.includes(keys['claim_no'])) {
          claim_nos.push(keys['claim_no']);
          claim_data.push(keys);
        }
      });
      this.selected_claim_nos = claim_nos;
      this.selected_claims = claim_data;
    } else if (claim == 'all' && event.target.checked == false) {
      for (let i = 0; i < this.closed_claim_data.length; i++) {
        let claim = this.closed_claim_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
    } else if (event.target.checked == true) {
      this.selected_claims.push(this.closed_claim_data[index]);
      this.selected_claim_nos.push(claim);
    } else if (event.target.checked == false) {
      let ind = this.selected_claim_nos.indexOf(claim);
      this.selected_claims.splice(ind, 1);
      this.selected_claim_nos.splice(ind, 1);
    }
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
    if (this.selected_associates.length == 0) {
      this.toastr.errorToastr("Please select Associate");
    } else {
      this.claim_assign_type = type;
    }
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
    // this.check_limit();
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
  proceed_stats() {
    // selected_claim_nos.length==0 || selected_claim_nos.length < assigned_claim_nos
    // console.log(this.selected_claim_nos.length ,',', this.assigned_claim_nos, this.selected_claim_nos.length,this.limit_exceeds  )
    // console.log(this.selected_associates.length, this.selected_claim_nos.length , this.assigned_claim_nos , this.claim_assign_type , this.assigned_claims_details.length )
    if (this.selected_associates.length == 0 || this.selected_claim_nos.length < this.assigned_claim_nos) {
      // console.log("P_Stats  -> True")
      this.claim_proceed = true;
    } else {
      // console.log("P_Stats  -> False")
      this.claim_proceed = false;
    }
    // console.log(this.claim_proceed)
  }
  //Monitor Limit of Associates
  check_limit() {
    // console.log("Here",this.assigned_claims_details)
    for (let i = 0; i < this.assigned_claims_details.length; i++) {
      let associate = this.auditors_detail.find(x => x['id'] == this.assigned_claims_details[i]['id']);
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
  //Assign Claims to Create Work Order
  assign_claims() {
    let selected_claims = this.selected_claim_nos;
    console.log(selected_claims);
    let assigned_details = [];
    let init_value = 0;
    this.assigned_claims_details.forEach(function (value) {
      let keys = value;
      let id = keys['id'];
      let value_data = keys['value'];
      let claims_assigned = selected_claims.slice(init_value, Number(init_value) + Number(value_data));
      console.log(claims_assigned);
      init_value = value_data;
      assigned_details.push({
        assigned_to: id,
        claim_nos: value_data,
        claims: claims_assigned
      });
    });
    this.assigned_claim_details = assigned_details;
    console.log("O*/p", this.assigned_claim_details);
    this.assigned_claim_status = true;
  }
  auto_assign_claims() {
    //alert("Auto");
    //console.log("Auto",this.selected_claim_nos,this.auditors_detail,this.selected_associates);
    let assignable_aud = [];
    console.log(this.selected_associates.length);
    if (this.selected_associates.length == 0) {
      this.auditors_detail.forEach(element => {
        assignable_aud.push(element.id);
      });
      console.log(this.auditors_detail);
    } else {
      assignable_aud = this.selected_associates;
      console.log(assignable_aud);
      this.modalService.dismissAll();
    }
    let selected_claims = this.selected_claim_nos;
    console.log(selected_claims);
    let init_value = 0;
    let auditors = this.auditors_detail;
    console.log(auditors);
    let assigned_details = [];
    let assign_value = 0;
    console.log(assignable_aud);
    assignable_aud.forEach(function (value) {
      let keys = value;
      let auditor_det = auditors.find(x => x['id'] == keys);
      console.log(auditor_det);
      //Check Assignable Numbers
      console.log(auditor_det['assign_limit']);
      console.log(auditor_det['assigned_nos']);
      let assign_limit = Number(auditor_det['assigned_nos']) - Number(auditor_det['assign_limit']);
      console.log(assign_limit);
      // Check assignable claims nos
      if (selected_claims.length - Number(assign_value) < assign_limit) {
        assign_limit = selected_claims.length;
        console.log(assign_limit);
      }
      console.log('this' + selected_claims.length, assign_value);
      console.log(assign_limit);
      if ( /*assign_limit >0 && */selected_claims.length - Number(assign_value) != 0) {
        assign_value = Number(init_value) + Number(assign_limit);
        console.log(init_value);
        console.log(assign_value);
        let claims_assigned = selected_claims.slice(init_value, Number(init_value) + Number(assign_limit));
        init_value = Number(init_value) + Number(assign_limit);
        assigned_details.push({
          assigned_to: auditor_det['id'],
          claim_nos: assign_limit,
          claims: selected_claims
        });
        console.log(assigned_details);
      }
    });
    this.assigned_claim_details = assigned_details;
    console.log("o/p", this.assigned_claim_details);
    this.assigned_claim_status = true;
    this.create_workorder();
  }
  create_workorder() {
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
    this.Jarwis.create_workorder(this.setus.getId(), this.workOrder.value, this.assigned_claim_details, 'audit').subscribe(data => this.handle_workorder_creation(data), error => this.handleError(error));
  }
  //Aftermath Work Order creation Handling
  handle_workorder_creation(data) {
    this.toastr.successToastr('Work Order Created');
    this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
    this.claim_assign_type = null;
    this.workOrder.reset();
    this.selected_claim_nos = [];
    this.selected_claims = [];
    this.check_all = [];
    this.assigned_claim_details = [];
    this.assigned_data = [];
    this.selected_claim_nos = [];
  }
  form_wo_table(data, page_no) {
    //  console.log(data);
    if (data) {
      this.GridrowData2 = data.data;
      this.myGrid_2.api?.setRowData(this.GridrowData2);
      this.gridApi_2.closeToolPanel();
      console.log('GridrowData_Work Orders', this.GridrowData2);
      //this.autoSizeAll();
      this.loader.stop();
    }
    this.work_order_data = data.data;
    this.wo_total = data.count;
    this.wo_page_number = page_no;
    this.tab_load = false;
    this.w_total = data.count;
    this.w_current_total = data.current_total;
    this.w_skip = data.skip + 1;
    this.w_skip_rows = this.w_skip;
    this.w_current_row = this.w_skip + this.w_current_total - 1;
    this.w_total_row = this.w_total;
  }
  export_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_audit_export_data(filter, s_code, this.setus.getId()).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.handleError(error));
  }
  export_wo_files(type) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    let wo_type = 2;
    this.Jarwis.fetch_wo_export_data(filter, s_code, wo_type, this.setus.getId()).subscribe(data => this.export_handler.ready_wo_export(data, type), error => this.handleError(error));
  }
  wo_export_function(type) {
    this.export_handler.sort_export_data(this.wo_details, type, 'wo_detail');
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
  assign_line_data(data) {
    this.line_item_data.push(data.data);
    this.line_data = data.data;
  }
  check_edit_permission(data) {
    if (data.includes('audit')) {
      console.log(data);
      this.edit_permission = true;
    } else {
      this.edit_permission = false;
    }
    //console.log(this.edit_permission);
  }

  confirm_reassign(claim) {
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
    this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
    this.reassign_allocation = false;
  }
  check_reassign_alloc(claim) {
    console.log("ROle", this.setus.get_role(), claim['audit_work_order']);
    //console.log(this.setus.get_role_id());
    if (this.setus.get_role_id() == '4' && this.setus.get_role_id() == '3' && claim['audit_work_order'] != null) {
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
  check_note_edit_validity(claim) {
    this.Jarwis.check_edit_val(claim, 'audit').subscribe(data => this.set_note_edit_validity(data), error => this.handleError(error));
  }
  set_note_edit_validity(data) {
    console.log(data);
    if (data.edit_val == true) {
      this.note_edit_val = data.note_id['id'];
    } else {
      this.note_edit_val = undefined;
    }
  }
  reload_data(page) {
    if (this.modalService.hasOpenModals() == false) {
      // this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
      this.Jarwis.get_audit_table_page_new(null, null, null, null, null).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      // for (let i = 0; i < this.audit_claim_data.length; i++) {
      //   let claim = this.audit_claim_data[i]['claim_no'];
      //   let ind = this.selected_claim_nos.indexOf(claim);
      //   this.selected_claims.splice(ind, 1);
      //   this.selected_claim_nos.splice(ind, 1);
      // }
      let page_count = 15;
      this.pages = page;
      // this.Jarwis.get_audit_table_page('null', this.pages, page_count, 'null', 'null', 'null', null, null, null, null, null).subscribe(
      //   data => this.assign_page_data(data),
      //   error => this.handleError(error)
      // );
      this.checkboxes.forEach(element => {
        element.nativeElement.checked = false;
      });
    }
  }
  reload_datas(page) {
    if (this.modalService.hasOpenModals() == false) {
      this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
      for (let i = 0; i < this.audit_claim_data.length; i++) {
        let claim = this.audit_claim_data[i]['claim_no'];
        let ind = this.selected_claim_nos.indexOf(claim);
        this.selected_claims.splice(ind, 1);
        this.selected_claim_nos.splice(ind, 1);
      }
      let page_count = 15;
      this.pages = page;
      this.Jarwis.get_audit_table_page('null', this.pages, page_count, 'null', 'null', 'null', null, null, null, null, null).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
      this.checkboxes.forEach(element => {
        element.nativeElement.checked = false;
      });
    }
  }
  //isChecked;
  auto_select_claims(event) {
    //console.log("checked",this.selected_claim_nos,event.target.checked);
    // if(!this.isChecked)
    // {
    this.Jarwis.auto_assign_claims(this.setus.getId()).subscribe(data => this.assign_auto_select(data), error => this.handleError(error));
    // }
  }

  removeTextbox() {
    //this.assign_type(this.type).reset(this.type);
    this.assigntype_reset = this.assign_type(this.type);
    this.assigntype_reset = '';
    this.associateCount = '';
  }
  checkedEvnt(val) {
    for (let i = 0; i < this.auditors_detail.length; i++) {
      this.auditors_detail[i].isCheck = val;
    }
    this.associateCount = '';
  }
  assign_auto_select(data) {
    this.selected_claim_nos = [];
    let work_claims = data.data;
    let assignable = [];
    for (let i = 0; i < work_claims.length; i++) {
      assignable = work_claims[i]['work_claims'];
      for (let j = 0; j < assignable.length; j++) {
        this.selected_claim_nos.push(assignable[j]);
      }
    }
    console.log("AA_Op", this.selected_claim_nos);
  }
  user_role_maintainer() {
    let role_id = Number(this.setus.get_role_id());
    if (role_id == 5 || role_id == 3 || role_id == 2) {
      this.user_role = 2;
      this.class_change['tab1'] = '';
      this.class_change['tab2'] = 'active';
      this.class_change_tab['tab1'] = ' ';
      this.class_change_tab['tab2'] = 'tab-pane active';
    } else if (role_id == 4) {
      this.user_role = 1;
      this.class_change['tab1'] = '';
      this.class_change['tab2'] = '';
      this.class_change_tab['tab1'] = '';
      this.class_change_tab['tab2'] = 'tab-pane';
    } else if (role_id == 16) {
      this.user_role = 16;
      this.class_change['tab1'] = '';
      this.class_change_tab['tab1'] = '';
      this.class_change_tab['tab2'] = 'tab-pane';
    }
  }
  graphStatus() {
    let role_id = Number(this.setus.get_role_id());
    var exclusion = [2, 4, 5];
    if (!exclusion.includes(role_id)) {
      this.Jarwis.get_audit_graph(this.setus.getId()).subscribe(data => {
        console.log(data);
      }, error => this.handleError(error));
    }
  }
  // order_list(type){
  //   if(this.sortByAsc == true) {
  //     this.sortByAsc = false;
  //     this.getclaim_details(1,'wo',this.sortByAsc,type);
  //   } else {
  //     this.sortByAsc = true;
  //     this.getclaim_details(1,'wo',this.sortByAsc,type);
  //   }
  // }
  ngOnInit() {
    // this.auth.tokenValue.next(false);
    this.user_role_maintainer();
    // this.get_statuscodes();
    this.auditClaimsFind = this.formBuilder.group({
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
      date: [],
      payer_name: [],
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
    this.assignedClaimsFind = this.formBuilder.group({
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
      date: [],
      payer_name: [],
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
    this.closedClaimsFind = this.formBuilder.group({
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
      date: [],
      payer_name: [],
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
    this.workOrderFind = this.formBuilder.group({
      created_at: [null],
      due_date: [null],
      work_order_name: [null],
      priority: [null]
    });
    this.processNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      processnotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    this.claimNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      claim_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    this.qcNotes = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      qc_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      root_cause: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      error_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      error_parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      error_sub_parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      fyi_parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      fyi_sub_parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    this.workOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      workorder_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      wo_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    const debouncetime = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(700));
    this.search_data.valueChanges.pipe(debouncetime).subscribe(result => this.sort_data(result));
    this.wo_search_data.valueChanges.pipe(debouncetime).subscribe(result => this.sort_wo_data(result));
    this.filter_option.valueChanges.subscribe(result => this.sort_table(result));
    this.subscription = this.notify_service.fetch_touch_limit().subscribe(message => {
      this.touch_count = message;
    });
    //this.graphStatus();
    // this.getSearchResults();
  }

  ngAfterViewInit() {
    // this.get_statuscodes(); CALLED TWO TIMES
    // this.get_audit_codes();
    // this.get_error_param_codes();
    // this.get_error_sub_param_codes();
    this.Jarwis.get_audit_table_page('null', 1, 15, 'null', 'null', 'null', null, null, null, null, null).subscribe(data => this.assign_page_data(data), error => this.handleError(error));
    // this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
    //this.sortallocated();
    if (this.touch_count == undefined) {
      this.touch_count = this.notify_service.manual_touch_limit();
    }
    console.log('LAST IN AUDIT COMP');
    // this.auth.tokenValue.next(true);
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
    this.response_data.unsubscribe();
    this.observalble.unsubscribe();
    this.update_monitor.unsubscribe();
    //this.sub_err_subscription.unsubscribe();
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
  reassign(content) {
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('Please select Claims');
    } else {
      this.modalService.open(content, {
        centered: true,
        windowClass: 'custom-class'
      }).result.then(result => {
        this.closeResult = `${result}`;
      }, reason => {
        this.closeResult = `${this.getDismissReason()}`;
      });
    }
  }
  selectChange(event) {
    /* event.forEach(element => {
     this.selectedError = element.description;
    }); */
    this.selectedError = event.description;
    console.log(this.selectedValue);
    console.log(this.selectedError);
    if (event.description == 'No Error' || event.description == 'Clarification') {
      this.qcNotes.controls['error_parameter'].clearValidators();
      this.qcNotes.controls['error_parameter'].setValidators(null);
      this.qcNotes.controls['error_parameter'].updateValueAndValidity();
      this.qcNotes.controls['error_sub_parameter'].clearValidators();
      this.qcNotes.controls['error_sub_parameter'].setValidators(null);
      this.qcNotes.controls['error_sub_parameter'].updateValueAndValidity();
      this.qcNotes.controls['fyi_parameter'].clearValidators();
      this.qcNotes.controls['fyi_parameter'].setValidators(null);
      this.qcNotes.controls['fyi_parameter'].updateValueAndValidity();
      this.qcNotes.controls['fyi_sub_parameter'].clearValidators();
      this.qcNotes.controls['fyi_sub_parameter'].setValidators(null);
      this.qcNotes.controls['fyi_sub_parameter'].updateValueAndValidity();
      this.qcNotes.valid;
    } else if (event.description == 'FYI') {
      this.qcNotes.controls['error_parameter'].clearValidators();
      this.qcNotes.controls['error_parameter'].setValidators(null);
      this.qcNotes.controls['error_parameter'].updateValueAndValidity();
      this.qcNotes.controls['error_sub_parameter'].clearValidators();
      this.qcNotes.controls['error_sub_parameter'].setValidators(null);
      this.qcNotes.controls['error_sub_parameter'].updateValueAndValidity();
    } else {
      this.qcNotes.controls['fyi_parameter'].clearValidators();
      this.qcNotes.controls['fyi_parameter'].setValidators(null);
      this.qcNotes.controls['fyi_parameter'].updateValueAndValidity();
      this.qcNotes.controls['fyi_sub_parameter'].clearValidators();
      this.qcNotes.controls['fyi_sub_parameter'].setValidators(null);
      this.qcNotes.controls['fyi_sub_parameter'].updateValueAndValidity();
    }
    console.log(this.qcNotes.value);
    this.get_error_param_codes();
  }
  selectSubChange(value) {
    console.log(value);
    this.parentId = value.id;
    console.log(this.parentId);
    if (this.parentId != '') {
      this.get_error_sub_param_codes();
    }
  }
  confirm_box() {
    this.Jarwis.get_closed_claims(this.selected_claim_nos, this.setus.getId()).subscribe(data => this.reassigned_claims(data), error => this.handleError(error));
  }
  reassigned_claims(data) {
    console.log(data);
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('please select Claims');
    }
    if (data.status == 'success') {
      let type = 'allocated';
      this.getclaim_details(1, 'allocated', 'null', 'null', 'null', 'null', null, null, null, null, null);
      this.toastr.successToastr('Claim move to closed.');
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
  select_claims(content) {
    console.log('selected_claim_no', this.selected_claim_nos);
    if (this.selected_claim_nos.length == 0) {
      this.toastr.errorToastr('Please Select Claims.');
    } else {
      this.openModal(content);
      this.getDismissReason();
      // this.modalService.open(content, { centered: true, windowClass: 'dark-modal' }).result.then((result) => {
      //   console.log('result',result);
      //   this.closeResult = `${result}`;
      // }, (reason) => {
      //   this.closeResult = `${this.getDismissReason()}`;
      // });
    }
  }

  clear_fields() {
    this.assigned_claims_details = [];
    this.workOrder.reset();
  }
  sort_details(type) {
    if (type == 'id') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.acct_no.localeCompare(b.acct_no));
        this.work_order_data.sort((a, b) => a.created.localeCompare(b.created));
        this.allocated_claims.sort((a, b) => a.acct_no.localeCompare(b.acct_no));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => b.acct_no.localeCompare(a.acct_no));
        this.work_order_data.sort((a, b) => b.created.localeCompare(a.created));
        this.allocated_claims.sort((a, b) => b.acct_no.localeCompare(a.acct_no));
      }
    } else if (type == 'claims') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.claim_no.localeCompare(b.claim_no));
        this.allocated_claims.sort((a, b) => a.claim_no.localeCompare(b.claim_no));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => b.claim_no.localeCompare(a.claim_no));
        this.allocated_claims.sort((a, b) => b.claim_no.localeCompare(a.claim_no));
      }
    } else if (type == 'patient') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.allocated_claims.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
        this.table_datas.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
        this.work_order_data.sort((a, b) => a.work_order_name.localeCompare(b.work_order_name));
      } else {
        this.sortByAsc = true;
        this.allocated_claims.sort((a, b) => b.patient_name.localeCompare(a.patient_name));
        this.table_datas.sort((a, b) => b.patient_name.localeCompare(a.patient_name));
        this.work_order_data.sort((a, b) => b.work_order_name.localeCompare(a.work_order_name));
      }
    } else if (type == 'insurance') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.prim_ins_name.localeCompare(b.prim_ins_name));
        this.allocated_claims.sort((a, b) => a.prim_ins_name.localeCompare(b.prim_ins_name));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => b.prim_ins_name.localeCompare(a.prim_ins_name));
        this.allocated_claims.sort((a, b) => b.prim_ins_name.localeCompare(a.prim_ins_name));
      }
    } else if (type == 'bill') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.total_charges.localeCompare(b.total_charges));
        this.allocated_claims.sort((a, b) => a.total_charges.localeCompare(b.total_charges));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => b.total_charges.localeCompare(a.total_charges));
        this.allocated_claims.sort((a, b) => b.total_charges.localeCompare(a.total_charges));
      }
    } else if (type == 'due') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.total_ar.localeCompare(b.total_ar));
        this.work_order_data.sort((a, b) => a.due_date.localeCompare(b.due_date));
        this.allocated_claims.sort((a, b) => a.total_ar.localeCompare(b.total_ar));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => b.total_ar.localeCompare(a.total_ar));
        this.work_order_data.sort((a, b) => b.due_date.localeCompare(a.due_date));
        this.allocated_claims.sort((a, b) => b.total_ar.localeCompare(a.total_ar));
      }
    } else if (type == 'status') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
        this.work_order_data.sort((a, b) => a.status.localeCompare(b.status));
        this.allocated_claims.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
        this.work_order_data.sort((a, b) => b.status.localeCompare(a.status));
        this.allocated_claims.sort((a, b) => a.claim_Status.localeCompare(b.claim_Status));
      }
    } else if (type == 'dos') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.table_datas.sort((a, b) => a.dos.localeCompare(b.dos));
        this.allocated_claims.sort((a, b) => a.dos.localeCompare(b.dos));
      } else {
        this.sortByAsc = true;
        this.table_datas.sort((a, b) => b.dos.localeCompare(a.dos));
        this.allocated_claims.sort((a, b) => b.dos.localeCompare(a.dos));
      }
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
  togglecollapse() {
    // alert("hi")
    this.isopend = !this.isopend;
  }
  export_excel_files(type, table_name) {
    console.log(table_name);
    if (table_name == 'Audit_que_claims') {
      this.searchClaims = this.auditClaimsFind.value;
    } else if (table_name == 'Assigned_claims') {
      this.searchClaims = this.assignedClaimsFind.value;
    } else if (table_name == 'Closed_claims') {
      this.searchClaims = this.closedClaimsFind.value;
    }
    this.Jarwis.fetch_audit_claims_export_data(this.setus.getId(), table_name, this.search, this.searchClaims).subscribe(data => this.export_handler.create_claim_export_excel(data), error => this.error_handler(error));
  }
  export_pdf_files(type, table_name) {
    let filter = 'all claims';
    let s_code = 'adjustment';
    this.Jarwis.fetch_audit_claims_export_data_pdf(this.setus.getId(), table_name).subscribe(data => this.export_handler.sort_export_data(data, type, 'claim'), error => this.error_handler(error));
  }
  auto_assigned() {
    console.log(this.selected_claim_nos);
    //this.setus.getId(),this.workOrder.value,this.assigned_claim_details,'audit'
    this.Jarwis.auto_assigned(this.setus.getId(), this.selected_claim_nos, this.workOrder.value, this.assigned_claim_details, 'audit').subscribe(data => this.auto_assigned_data(data), error => this.error_handler(error));
  }
  auto_assigned_data(data) {
    this.getclaim_details(1, 'wo', 'null', 'null', 'null', 'null', null, null, null, null, null);
    this.modalService.dismissAll();
    this.clear_notes();
    this.workOrder.reset();
    this.selected_claim_nos = [];
    this.checkboxes.forEach(element => {
      element.nativeElement.checked = false;
    });
  }
  export_excel_wo_files(type, table_name) {
    this.Jarwis.fetch_work_order_export_data(this.setus.getId(), table_name, this.search, this.workOrderFind.value).subscribe(data => this.export_handler.create_wo_export_excel(data), error => this.error_handler(error));
  }
  error_handler(error) {}
  get fe() {
    return this.workOrder.controls;
  }
  claimValidators() {
    this.workOrder = this.formBuilder.group({
      workorder_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      due_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      wo_notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
  }
  // tooltipOptions= {
  //     'placement': 'right',
  //     'show-delay': '200',
  //     'tooltip-class': 'new-tooltip-class',
  //     'background-color': '#9ad9e4'
  //   };
  // public clear_auditor()
  // {
  // this.assigned_claims_details=[];
  // this.assign_claims.reset();
  //}
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
  //For AuditQueue
  auditQueueSearchOnKeyUp(event) {
    let input = event.target.value;
    if (input.length > 0) {
      this.auditQueue_results = this.searchFromArray(this.searchResults, input);
    } else {
      this.auditQueue_selected_val = null;
      this.auditQueueSelected = false;
    }
  }
  auditQueueSelectvalue(value) {
    if (value != '' || value != null) {
      this.auditQueueSelected = true;
      this.auditQueue_selected_val = value;
    } else {
      this.auditQueue_selected_val = null;
      this.auditQueueSelected = false;
    }
  }
  //For AssignedClaim
  assignedSearchOnKeyUp(event) {
    let input = event.target.value;
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
  //For ReAssignedClaim
  reassignedSearchOnKeyUp(event) {
    let input = event.target.value;
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
  sortallocated() {
    this.allocated_claims.sort((a, b) => {
      if (a.error_type === '[4]') {
        console.log(this.allocated_claims);
        console.log('sorted');
        return -1;
      } else if (a.error_type === null) {
        return 1;
      } else if (b.error_type === null) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
    params.api.sizeColumnsToFit();
    console.log('event', params);
    this.myGrid_1.api.setRowData([]);
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
        this.resl_dta = this.GridrowData1.slice(startIndex, endIndex);
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

  onGridReady_4(params) {
    this.gridApi_4 = params.api;
    params.api.sizeColumnsToFit();
    console.log('event', params);
    this.myGrid_4.api.setRowData([]);
    // setTimeout(() => {
    //   console.log('444', this.GridrowData1);
    //   this.cdtn = true;
    //   this.myGrid_1.api?.setRowData(this.GridrowData1);
    // }, 4000);
  }

  onSelectionChanged(params) {
    this.cdtn = !this.cdtn;
    this.selected_claim_nos = [];
    console.log('cdtn', this.cdtn);
    console.log('params', params);
    this.rowValue_ID_1 = this.gridApi_1.getSelectedRows();
    console.log('ID1', this.rowValue_ID_1);
    if (this.rowValue_ID_1 != '') {
      for (let i = 0; i < this.rowValue_ID_1.length; i++) {
        this.selected_claim_nos.push(this.rowValue_ID_1?.[i].claim_no);
      }
    }
    // this.rowValue_ID_1 .forEach((rowNode: any) => {
    //   rowIndex = rowNode.rowIndex;
    //   console.log('Row Index:', rowIndex);
    //   // this.selected(this.cdtn,this.rowValue_ID_1.claim_no,this.rowValue_ID_1.rowIndex);
    // });
  }

  onSelectionChanged_forWorkOrders(params) {
    this.selected_claim_nos = [];
    this.rowValue_ID_2 = this.gridApi_2.getSelectedRows();
    console.log('ID2', this.rowValue_ID_2);
    if (this.rowValue_ID_2 != '') {
      for (let i = 0; i < this.rowValue_ID_2.length; i++) {
        this.selected_claim_nos.push(this.rowValue_ID_2?.[i].claim_no);
      }
    }
  }
  onSelectionChanged_assignedClaims(params) {
    this.rowValue_ID_3 = this.gridApi_3.getSelectedRows();
    console.log('ID3', this.rowValue_ID_3);
  }
  onSelectionChanged_ClosedClaims(params) {
    this.rowValue_ID_4 = this.gridApi_4.getSelectedRows();
    console.log('ID3', this.rowValue_ID_4);
  }
  onPageSizeChanged(type) {
    if (type == 'audit_que') {
      this.gridApi_1.paginationSetPageSize(Number(this.paginationSizeValue_AuditQue));
    } else if (type == 'work_orders') {
      this.gridApi_2.paginationSetPageSize(Number(this.paginationSizeValue_WorkOrders));
    } else if (type == 'assigned_claims') {
      this.gridApi_3.paginationSetPageSize(Number(this.paginationSizeValue_AssignmedClaims));
    } else if (type == 'closed_claims') {
      this.gridApi_4.paginationSetPageSize(Number(this.paginationSizeValue_ClosedClaims));
    }
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
  cellrendered_auditQue(headerName, params) {
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
            const rowData = params.node.data;
            const assignedTo = rowData.touch;
            let x;
            if (assignedTo >= this.touch_count || assignedTo < this.touch_count) {
              x = assignedTo;
            }
            return `${x}   ${params.value}`;
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
      case 'billed_submit_date':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'denial_code':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'statuscode':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'substatus_code':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
          break;
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
          let x;
          x = params.value.substring(0, 10);
          x = this.datepipe.transform(x, 'MM/dd/yyyy');
          x != null ? x : 'UA';
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo == null ? 'UA' : assignedTo} | ${x}`;
        }
    }
  }
  cellrendered_ClosedClaims(headerName, params) {
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
      case 'responsibility':
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
      case 'statuscode':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'substatuscode':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
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
      case 'claims_notes':
        {
          if (params.value) return `<i  style="width:30px" class="fa fa-info-circle" aria-hidden="true" title="${params.value}"></i>`;else return '-Nil-';
        }
      case 'created_ats':
        {
          let x;
          x = params.value.substring(0, 10);
          x = this.datepipe.transform(x, 'MM/dd/yyyy');
          x != null ? x : 'UA';
          const rowData = params.node.data;
          const assignedTo = rowData.assigned_to;
          return `${assignedTo == null ? 'UA' : assignedTo} | ${x}`;
        }
    }
  }
  cellrendered_assignedClaims(headerName, params) {
    switch (headerName) {
      case 'touch':
        {
          if (params.value >= this.touch_count || params.value < this.touch_count) {
            return params.value;
          } else return '-Nil-';
        }
      case 'claim_no':
        {
          if (params.value || params.value != '') return params.value;else return '-Nil-';
        }
      case 'dos':
        {
          if (params.value) {
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
      case 'billed_submit_date':
        {
          if (params.value || params.value != '') return params.value;else return '-Nil-';
        }
      case 'denial_code':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'statuscode':
        {
          if (params.value) return params.value;else return '-Nil-';
        }
      case 'substatuscode':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-Nil-';
          }
          break;
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
      case 'claims_notes':
        {
          if (params.value) return `<i class="fa fa-info-circle" aria-hidden="true" title="${params.value}"></i>`;else return '-Nil-';
        }
      case 'executive_work_date':
        {
          if (params.value) {
            let x = params.value;
            x = this.datepipe.transform(x, 'MM/dd/yyyy');
            return `${x}`;
          } else {
            return '-Nil-';
          }
        }
      case 'assigned_to':
        {
          let x = params.value;
          const rowData = params.node.data;
          const created_ats = rowData.created_ats;
          const date = new Date(created_ats);
          let result = date.toLocaleDateString('en-US');
          return `${x != null ? x : 'UA'} | ${result != null ? result : 'UA'}`;
        }
    }
  }
  cellrendered_WorkOrders(headerName, params) {
    switch (headerName) {
      case 'created':
        {
          let rowData = params.node.data;
          let assignedTo = rowData.created_at;
          assignedTo = assignedTo.substring(0, 10);
          assignedTo = this.datepipe.transform(assignedTo, 'MM/dd/yyyy');
          return `${params.value} | ${assignedTo}`;
        }
      case 'work_order_name':
        {
          if (params.value) return params.value;else return '-Nil';
        }
      case 'assigned_nos':
        {
          if (params.value) return params.value;else return '-Nil';
        }
      case 'due_date':
        {
          if (params.value) {
            let x = params.value;
            x = this.datepipe.transform(x, 'MM/dd/yyyy');
            return `${x}`;
          } else return '-Nil';
        }
      case 'billed':
        {
          if (params.value) return params.value.toFixed(2);else return '-Nil';
        }
      case 'ar_due':
        {
          if (params.value || params.value == 0) return params.value.toFixed(2);else return '-Nil';
        }
      case 'status':
        {
          if (params.value) return params.value;else return '-Nil';
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
          if (params.value) {
            return `<i title="${params.value}"
            class="fa fa-file-text"></i>`;
          }
        }
    }
  }
  CellClicked_AuditQue(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'dos':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'age':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'rendering_prov':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'responsibility':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'prim_ins_name':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'sec_ins_name':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'total_charges':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'claim_Status':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'denial_code':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'billed_submit_date':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'claim_note':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
        case 'assigned_to':
          {
            // this.openModal(this.template);
            this.claimslection(this.rowValue_ID_1?.[0]);
            break;
          }
      }
    }
  }
  CellClicked_ClosedClaims(headerName, params) {
    if (params.value) {
      switch (headerName) {
        case 'claim_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_4?.[0]);
            this.note_refresh();
            break;
          }
        case 'dos':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_4?.[0]);
            this.note_refresh();
            break;
          }
        case 'age':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_4?.[0]);
            this.note_refresh();
            break;
          }
        case 'acct_no':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_4?.[0]);
            this.note_refresh();
            break;
          }
        case 'patient_name':
          {
            this.openModal(this.claimpage);
            this.claimslection(this.rowValue_ID_4?.[0]);
            this.note_refresh();
            break;
          }
      }
    }
  }
  CellClicked_WorkOrders(headerName, params) {
    switch (headerName) {
      case 'created':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'work_order_name':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'assigned_nos':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'due_date':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'billed':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'ar_due':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'status':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'priority':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
      case 'work_notes':
        {
          this.open(this.work_order_details);
          this.get_wo_details(this.rowValue_ID_2?.[0].id, this.rowValue_ID_2?.[0].work_order_name, this.rowValue_ID_2?.[0].created);
          break;
        }
    }
  }
  CellClicked_assignedClaims(headerName, params) {
    switch (headerName) {
      case 'claim_no':
        {
          this.openModal(this.claimpage);
          this.note_refresh();
          this.claimslection(this.rowValue_ID_3?.[0]);
          this.check_reassign_alloc(this.rowValue_ID_3?.[0]);
          break;
        }
      case 'dos':
        {
          this.openModal(this.claimpage);
          this.note_refresh();
          this.claimslection(this.rowValue_ID_3?.[0]);
          this.check_reassign_alloc(this.rowValue_ID_3?.[0]);
          break;
        }
      case 'age':
        {
          this.openModal(this.claimpage);
          this.note_refresh();
          this.claimslection(this.rowValue_ID_3?.[0]);
          this.check_reassign_alloc(this.rowValue_ID_3?.[0]);
          break;
        }
      case 'acct_no':
        {
          this.openModal(this.claimpage);
          this.note_refresh();
          this.claimslection(this.rowValue_ID_3?.[0]);
          this.check_reassign_alloc(this.rowValue_ID_3?.[0]);
          break;
        }
      case 'patient_name':
        {
          this.openModal(this.claimpage);
          this.note_refresh();
          this.claimslection(this.rowValue_ID_3?.[0]);
          this.check_reassign_alloc(this.rowValue_ID_3?.[0]);
          break;
        }
    }
  }
  onSearch() {
    this.myGrid_1.api.setQuickFilter(this.search_value);
    this.myGrid_3.api.setQuickFilter(this.search_value_assignedClaims);
  }
  autoSizeAll() {
    if (this.GridrowData1 || this.GridrowData2 || this.GridrowData3 || this.GridrowData4) {
      let allColumnIds = [];
      this.gridOptions1.columnApi.getColumns().forEach(column => {
        allColumnIds.push(column.getId());
      });
      // this.gridOptions2.columnApi.getColumns().forEach((column:any) => {
      //   allColumnIds.push(column.getId());
      // });
      // this.gridOptions4.columnApi.getColumns().forEach((column:any) => {
      //   allColumnIds.push(column.getId());
      // });
      // this.gridOptions3.columnApi.getColumns().forEach((column:any) => {
      //   allColumnIds.push(column.getId());
      // });
      console.log('Size Resized');
      this.gridOptions1.columnApi.autoSizeColumns(allColumnIds, false);
      // this.gridOptions2.columnApi.autoSizeColumns(allColumnIds, false);
      // this.gridOptions3.columnApi.autoSizeColumns(allColumnIds, false);
      // this.gridOptions4.columnApi.autoSizeColumns(allColumnIds, false);
    }
  }

  status_code_select() {
    if (!this.isCollapsed_audit_que_filters || !this.isCollapsed_assigned_claims_filters || !this.isCollapsed_closed_claims_filters) {
      this.get_statuscodes();
      this.getSearchResults();
    }
  }
}
AuditComponent.ɵfac = function AuditComponent_Factory(t) {
  return new (t || AuditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_3__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_16__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_followup_service__WEBPACK_IMPORTED_MODULE_4__.FollowupService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_notes_handler_service__WEBPACK_IMPORTED_MODULE_5__.NotesHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_18__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_export_functions_service__WEBPACK_IMPORTED_MODULE_6__.ExportFunctionsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_notify_service__WEBPACK_IMPORTED_MODULE_7__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_21__.NgxUiLoaderService));
};
AuditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: AuditComponent,
  selectors: [["app-audit"]],
  viewQuery: function AuditComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c6, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.myGrid_1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.myGrid_2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.myGrid_3 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.myGrid_4 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.claimpage = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.work_order_details = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
    }
  },
  decls: 1018,
  vars: 119,
  consts: [[1, "row", 2, "margin-bottom", "25px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "box", "no-shadow", "no-border", "no-bottom"], [1, "no-padding"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [3, "ngClass", 4, "ngIf"], ["class", "", 4, "ngIf"], [4, "ngIf"], ["href", "#tab_1", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-drivers-license"], [1, "tab-divider"], [1, "tab-content", "no-padding"], ["id", "tab_4", 1, "tab-pane"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "box", "box-primary", "no-shadow", 2, "border", "1px solid #dee0e8"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "box-title", "list-heading"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool"], [1, "fa", "fa-minus"], [1, "box-body", "chart-responsive"], [1, "box", "box-primary", "no-shadow", "hide", 2, "border", "1px solid #dee0e8"], ["id", "sales-chart", 1, "chart", 2, "height", "230px", "position", "relative"], ["height", "230", "version", "1.1", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "overflow", "hidden", "position", "relative"], [2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#3c8dbc", "d", "M0,108.33333333333333A-6.666666666666667,-6.666666666666667,0,0,0,-5.228486604698025,110.86389406942499", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#3c8dbc", "stroke", "#ffffff", "d", "M0,111.33333333333333A-3.666666666666667,-3.666666666666667,0,0,0,-2.8756676325839137,112.72514173818374L-11.764094860570555,105.69376165620622A-15,-15,0,0,1,0,100Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#f56954", "d", "M-5.228486604698025,110.86389406942499A-6.666666666666667,-6.666666666666667,0,1,0,6.054042404487644,117.79159721469804", "stroke-width", "2", "opacity", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "1"], ["fill", "#f56954", "stroke", "#ffffff", "d", "M-2.8756676325839137,112.72514173818374A-3.666666666666667,-3.666666666666667,0,1,0,3.3297233224682046,116.53537846808393L9.081063606731467,119.18739582204708A-10,-10,0,1,1,-7.842729907047037,108.79584110413748Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["fill", "none", "stroke", "#00a65a", "d", "M6.054042404487644,117.79159721469804A-6.666666666666667,-6.666666666666667,0,0,0,0.0020943950679349903,108.33333366232014", "stroke-width", "2", "opacity", "0", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "opacity", "0"], ["fill", "#00a65a", "stroke", "#ffffff", "d", "M3.3297233224682046,116.53537846808393A-3.666666666666667,-3.666666666666667,0,0,0,0.0011519172873642447,111.33333351427608L0.004712388902853728,100.00000074022033A-15,-15,0,0,1,13.6215954100972,121.2810937330706Z", "stroke-width", "3", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "s", "", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], ["dy", "105", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], ["x", "0", "y", "125", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "14px", "stroke", "none", "fill", "#000000", "s", "", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "14px"], ["dy", "125", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"], [1, "box", "no-shadow", "no-border"], [1, "box-body", "no-padding"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "box-tools", "pull-right", 2, "margin-top", "1px"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", "dropdown-hidden", 2, "width", "93px"], [1, "selection"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-4kn7-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-4kn7-container", "title", "Assigned", 1, "select2-selection__rendered"], ["role", "presentation", 1, "select2-selection__arrow"], ["role", "presentation"], ["aria-hidden", "true", 1, "dropdown-wrapper"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "production-table", "table-responsive"], [1, "table-striped1", "table", "table-responsive"], [1, "font600", "line-height-24"], ["colspan", "5", 1, "font600", "text-center", "line-height-24", 2, "border-right", "1px solid #fff"], ["colspan", "5", 1, "font600", "text-center", "line-height-24"], [1, "text-center"], [1, "ar-blue", "font600"], [2, "background", "#f5f5f5"], [1, "text-red", "font600"], [1, "spnDetails"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], [1, "spnTooltip"], [1, "ar-blue"], ["id", "tab_1", 1, "tab-pane"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xs-12"], [1, "fa", "fa-filter", "ar-blue"], ["type", "button", 1, "btn", "btn-box-tool", "collapsed", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "fa fa-minus", 4, "ngIf"], ["id", "closedClaims_search", 1, "collapse", 3, "collapse", "isAnimated"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding"], [1, "form-group", "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "dos", "id", "data-picker", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "form-group", "col-md-4", "col-sm-4", "col-lg-4", "col-xs-12"], ["formControlName", "age_filter", "aria-hidden", "true", 1, "form-control", "ngx-dropdown-button", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "claim_no", 1, "form-control"], ["type", "text", "formControlName", "acc_no", 1, "form-control"], ["type", "text", "formControlName", "patient_name", 1, "form-control"], ["type", "text", "placeholder", "10.00-20.00", "formControlName", "total_ar", 1, "form-control"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "date", "id", "data-picker", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["formControlName", "status_code", 3, "config", "options", "change"], ["formControlName", "sub_status_code", 3, "config", "options"], ["type", "text", "formControlName", "rendering_provider", 1, "form-control"], ["type", "text", "formControlName", "responsibility", 1, "form-control"], ["type", "text", "formControlName", "dos", "placement", "right", "formControlName", "bill_submit_date", "id", "data-picker", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "denial_code", 1, "form-control"], ["type", "text", "formControlName", "payer_name", "placeholder", "Search Payer", "list", "SearchResults", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", "pull-right"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], ["type", "text", "placeholder", "Search..", "name", "search", 1, "search_box", 3, "keyup"], [1, "box", "no-shadow", "no-border", "mb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "listing-table"], [1, "no-shadow", "no-bottom"], [1, "", 2, "margin-top", "5px"], ["id", "page-size", 2, "border-radius", "4px", 3, "ngModel", "change", "ngModelChange"], ["value", "100"], ["value", "500"], ["value", "1000"], [2, "margin-left", "10px", "font-family", "'Maven Pro', sans-serif", "font-size", "13px !important", "font-weight", "600", "color", "#535a68"], [2, "margin-left", "10px", "color", "#ccc", "margin-right", "10px"], ["title", "Excel", 1, "fa", "fa-file-excel-o", 2, "cursor", "pointer", 3, "click"], [1, "collapse", 3, "collapse", "isAnimated"], [1, "ag-theme-alpine", "no-grid-lines", 3, "columnDefs", "gridOptions", "defaultColDef", "sideBar", "gridReady", "selectionChanged"], ["myGrid_4", ""], ["id", "tab_5", 1, "tab-pane"], ["id", "assigned_search", 1, "box-body", "no-padding", "collapse", 3, "collapse", "isAnimated"], ["type", "text", "placeholder", "Search..", "name", "search", 1, "search_box", 3, "ngModel", "ngModelChange", "keyup"], ["title", "Reassign", 1, "fa", "fa-random", 2, "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table", "no-padding"], ["myGrid_3", ""], ["id", "tab_2", 3, "ngClass"], ["id", "audit_Search", 1, "box-body", "no-padding", "collapse", 3, "collapse", "isAnimated"], ["type", "text", "placeholder", "Search..", "name", "search", 1, "search_box", 3, "ngModel", "keyup", "ngModelChange"], [1, "box-body", "no-padding", 2, "border", "1px solid #d8dbe4"], ["title", "Reload", 1, "fa", "fa-refresh", 2, "cursor", "pointer", 3, "click"], ["title", "Assign Claims", 1, "fa", "fa-user-plus", 2, "cursor", "pointer", 3, "click"], ["myGrid_1", ""], ["id", "tab_3", 1, "tab-pane"], [1, "box", "no-shadow", "no-bottom"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], ["type", "text", "placement", "bottom", "formControlName", "created_at", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "placement", "bottom", "formControlName", "due_date", "id", "data-picker", "bsDaterangepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "work_order_name", 1, "form-control"], [1, "form-group", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12", 2, "margin-top", "3px"], ["aria-hidden", "true", "formControlName", "priority", 1, "form-control", "ngx-dropdown-button", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "ngValue", "selected"], ["value", "low", 3, "selected"], ["value", "medium", 3, "selected"], ["value", "high", 3, "selected"], ["type", "button", "value", "Search", 1, "btn", "btn-search", "pull-right", 3, "click"], [1, "box-tools", "pull-right", 2, "margin-top", "5px"], ["myGrid_2", ""], ["claimpage", ""], ["processnotes", ""], ["claimnotes", ""], ["qcnotes", ""], ["new_workorder", ""], ["associates", ""], ["work_order_details", ""], ["confirm_modal", ""], ["confirmation", ""], ["confirmation_close", ""], ["HtmlContent", ""], ["AccNo", ""], ["PriInsurance", ""], ["SecInsurance", ""], ["TerInsurance", ""], ["TotalAr", ""], ["ClaimNote", ""], [3, "ngClass"], ["href", "#tab_4", "data-toggle", "tab", "aria-expanded", "true"], [1, "fa", "fa-dashboard", 3, "click"], ["href", "#tab_2", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-file-text"], [1, ""], ["href", "#tab_3", "data-toggle", "tab", "aria-expanded", "false", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-list"], ["href", "#tab_5", "data-toggle", "tab", 2, "padding-left", "0px", 3, "click"], [1, "fa", "fa-share"], [1, "fa", "fa-plus"], [3, "ngValue"], ["class", "error", 4, "ngIf"], [1, "error"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "nav", "nav-tabs", "no-border"], [1, "testClass"], ["href", "#{main_tab}", "data-toggle", "tab", 1, "no-padding", 3, "click"], [1, "modal-title", "list-heading"], ["class", "testClass", 3, "active", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "maintab", 1, "tab-pane"], [1, "modal-body", "no-padding"], [1, "box", "no-shadow", "no-border", "no-bottom", 2, "margin-top", "10px"], [1, "box", "no-shadow", "no-bottom", "no-border"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box21", 1, "btn", "btn-box-tool"], [1, "box-body", "no-padding", "hide"], [1, "box", "box-success", "no-border", "no-shadow"], [1, "box-header", "no-border", "p-t-0", "p-b-0"], ["type", "button", "data-widget", "collapse", 1, "btn", "btn-box-tool", "p-t-0"], ["id", "sales-chart", 1, "chart", 2, "height", "230px"], ["id", "box21", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", "p-l-0"], [1, "table", "no-border", "table-striped-nb"], [1, "table-label"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", "p-l-0"], [1, "text-orange"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-12"], [1, "ar-blue", 2, "margin-top", "0px", "font-size", "16px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "15px solid #e9ecf3"], [1, "box", "no-shadow", "no-border", 2, "margin-top", "10px"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box22", 1, "btn", "btn-box-tool"], ["id", "box22", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "table-striped1", "table"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-top", "5px solid #e9ecf3", "border-bottom", "3px solid #e9ecf3"], ["aria-expanded", "false", "data-target", "#Claim_Note", "data-toggle", "collapse", "title", "Claim Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], [2, "text-decoration", "underline"], ["aria-expanded", "false", "data-target", "#QC_Notes", "data-toggle", "collapse", "title", "QC Notes", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px"], ["id", "QC_Notes", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "box-header", 2, "border-bottom", "1px solid #f3eee9"], ["class", "cur-pointer", "style", "margin-right: 15px;font-size: 16px;", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box24", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box24", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "margin-top:5px;", 4, "ngIf"], ["id", "Claim_Note", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["type", "button", "data-widget", "collapse", "data-toggle", "collapse", "data-target", "#box25", 1, "btn", "btn-box-tool", 2, "margin-left", "10px"], ["id", "box25", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "10px"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding", "style", "border-bottom: 1px dashed #f0f0f0;margin-top:5px;", 4, "ngFor", "ngForOf"], [3, "size", "color", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "0px"], ["id", "followup-list3", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], ["id", "followupview", 1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3"], [1, "text-center", "close-btn"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "background", "#f9f9f9"], ["id", "client-assistant-list", 1, "collapse", 2, "margin-top", "10px"], [1, "", 2, "font-size", "16px", "margin-top", "20px"], [1, "form-horizontal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px solid #f3f4f9"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-11", "col-md-11", "col-sm-11", "col-xs-12", "no-padding"], [1, "form-group"], [1, "ar-red"], ["type", "text", 1, "form-control"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-12", "col-lg-offset-1", "col-md-offset-1", "col-sm-offset-1", "no-padding"], ["tabindex", "-1", "aria-hidden", "true", 1, "form-control", "select2", "select2-hidden-accessible", 2, "width", "100%"], ["dir", "ltr", 1, "select2", "select2-container", "select2-container--default", 2, "width", "100%"], ["role", "combobox", "aria-haspopup", "true", "aria-expanded", "false", "tabindex", "0", "aria-labelledby", "select2-d8k9-container", 1, "select2-selection", "select2-selection--single"], ["id", "select2-d8k9-container", "title", "-- Select --", 1, "select2-selection__rendered"], [1, "form-control", "text-space"], [1, "btn", "btn-default", "btn-sm", "text-center"], [1, "btn", "btn-info", "btn-sm", "text-center"], ["class", "tab-pane", 3, "active", "id", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-toggle", "tab", 3, "href", "click"], ["class", "p-l-0 table-label", "style", "text-decoration: underline;cursor: pointer; padding-left: 0px;", 3, "click", 4, "ngIf"], [1, "p-l-0", "table-label", 2, "text-decoration", "underline", "cursor", "pointer", "padding-left", "0px", 3, "click"], ["aria-expanded", "false", 1, "cur-pointer", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Assign to Manager / TL", 1, "fa", "fa-exchange"], ["data-toggle", "modal", "class", "cur-pointer", "style", "font-size:16px;", 3, "hidden", "click", 4, "ngIf"], [1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "fa", "fa-plus-circle"], ["data-toggle", "modal", 1, "cur-pointer", 2, "font-size", "16px", 3, "hidden", "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0"], [1, "text-justify", 2, "margin-bottom", "10px"], [2, "margin-left", "3px", "margin-right", "3px", "color", "#ccc"], [1, "font600"], ["class", "font600", 4, "ngFor", "ngForOf"], ["class", "fa fa-edit ar-blue", "style", "margin-left:10px; font-size:16px;cursor: pointer;", "title", "Edit", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "fa", "fa-edit", "ar-blue", 2, "margin-left", "10px", "font-size", "16px", "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "margin-top", "5px"], [1, "text-center", "text-gray", 2, "margin-bottom", "10px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", 2, "border-bottom", "1px dashed #f0f0f0", "margin-top", "5px"], [1, "pull-right", 2, "font-size", "18px"], [3, "size", "color"], [1, "tab-pane", 3, "id"], ["x", "0", "y", "105", "text-anchor", "middle", "font-family", "\"Arial\"", "font-size", "15px", "stroke", "none", "fill", "#000000", "font-weight", "800", "stroke-width", "1", 2, "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", "text-anchor", "middle", "font-family", "Arial", "font-size", "15px", "font-weight", "800"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-12", "p-l-0"], [1, "col-lg-7", "col-md-7", "col-sm-7", "col-xs-12", "p-l-0"], ["data-toggle", "collapse", "data-target", "#followupview", "title", "Followup View", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template View", 1, "fa", "fa-external-link-square"], [1, "box-body", "no-padding", 2, "margin-top", "10px"], [1, "col-lg-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "no-padding", "collapse", 2, "border-top", "15px solid #e9ecf3", 3, "id"], ["data-toggle", "collapse", "data-target", "#followup-list3", "class", "cur-pointer collapsed", "title", "Followup Template", "style", "margin-right: 15px;font-size: 16px;", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["data-toggle", "collapse", "data-target", "#followup-list3", "title", "Followup Template", "aria-expanded", "false", 1, "cur-pointer", "collapsed", 2, "margin-right", "15px", "font-size", "16px", 3, "click"], ["title", "Followup Template", 1, "fa", "fa-headphones"], ["type", "button", 1, "btn", "btn-default", "text-center", "btn-md", 2, "min-width", "80px", 3, "click"], [1, "text-center", "closed-btn", 2, "margin-top", "8%"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "form-horizontal", 3, "formGroup"], ["modalform", "ngForm"], ["formControlName", "processnotes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["formControlName", "claim_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], ["formControlName", "qc_notes", "placeholder", "Enter your notes..", 1, "form-control", "text-space", 2, "height", "90px", 3, "value"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"], [1, "form-group", 2, "margin-bottom", "10px", "margin-left", "0px"], ["formControlName", "error_type", 3, "config", "options", "ngClass", "ngModelChange"], ["errortype", ""], ["type", "submit", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], [1, "col-md-3", "col-sm-3", "col-lg-3", "col-xs-12"], ["formControlName", "error_parameter", 3, "config", "options", "ngModelChange", "click"], ["formControlName", "error_sub_parameter", 3, "config", "options"], ["formControlName", "fyi_parameter", 3, "config", "options", "ngModelChange", "click"], ["formControlName", "fyi_sub_parameter", 3, "config", "options"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-9", "col-md-9", "col-sm-9", "col-xs-9"], ["type", "text", "formControlName", "workorder_name", 1, "form-control", 3, "ngClass"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "text-center"], ["type", "text", "formControlName", "due_date", "placement", "bottom", "id", "data-picker", "bsDatepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "col-lg-9", "col-md-9", "col-sm-9", "col-xs-9", "priority-column"], [1, "priority"], [1, "form-group", "priority-radio"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "low", "name", "priority", "fomControlName", "priority", "value", "low", "tabindex", "low", 1, "custom-control-input", 3, "ngClass"], ["for", "low", 1, "custom-control-label"], ["class", "invalid-feedback priority-error", 4, "ngIf"], ["type", "radio", "id", "medium", "name", "priority", "formControlName", "priority", "value", "medium", "tabindex", "medium", 1, "custom-control-input", 3, "ngClass"], ["for", "medium", 1, "custom-control-label"], ["class", "invalid-feedback priority-error2", 4, "ngIf"], ["type", "radio", "id", "high", "name", "priority", "formControlName", "priority", "value", "high", "tabindex", "high", 1, "custom-control-input", 3, "ngClass"], ["for", "high", 1, "custom-control-label"], ["formControlName", "wo_notes", 1, "form-control", "text-space", 2, "height", "90px", 3, "ngClass"], [1, "btn", "btn-file", "btn-xs", "btn-flat", "pull-center"], ["for", "auto_select", "title", "Auto select claims from Caller Benchmark", 1, "auto-select"], ["type", "checkbox", "id", "auto_select", "value", "low", 3, "click"], ["data-toggle", "modal", "data-target", "#modal-user", 1, "btn", "btn-file", "btn-xs", "btn-flat", "pull-right", 3, "disabled", "click"], [1, "fa", "fa-users"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "disabled", "click"], [1, "invalid-feedback", "priority-error"], [1, "invalid-feedback", "priority-error2"], [1, "alert-danger", "pull-center", 2, "margin-top", "-1px", 3, "hidden"], [1, "table", "no-border", "no-bottom"], [1, "pull-left", 2, "margin-top", "20px"], [1, "cur-pointer", "btn", "btn-default", "btn-sm", "btn-flat", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "btn-sm", "btn-flat", 2, "margin-top", "20px", 3, "disabled", "click"], [2, "color", "red"], ["type", "checkbox", 2, "margin-top", "0px", 3, "id", "checked", "ngModel", "click", "ngModelChange"], [1, "assigned_nos"], ["type", "text", "size", "3", "knifeOnlyNumbers", "", 3, "value", "ngModel", "keyup", "ngModelChange"], [1, "table-responsive"], [1, "font600", "line-height-24", 3, "click"], [1, "fa", "fa-fw", "fa-sort"], ["title", "Touch Count"], [1, "cur-pointer"], ["class", "cur-pointer", 4, "ngIf"], [1, "cur-pointer", "text-right"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["class", "modal-body", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-danger", 3, "click"], [1, "text-primary"], [1, "text-danger"], [1, "modal-title", "custom-title"], [1, "confirm-text"], [1, "col-lg-12", "col-md-12", "col-sm-12"]],
  template: function AuditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AuditComponent_li_6_Template, 6, 0, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AuditComponent_li_7_Template, 6, 1, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AuditComponent_li_8_Template, 6, 0, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AuditComponent_li_9_Template, 6, 0, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "li")(11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_a_click_11_listener() {
        return ctx.getclaim_details(1, "completed", "null", "null", "null", "null", "null", "null", "null", "null", "null");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Closed Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, " Completed vs Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 20)(26, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 24)(30, "div", 17)(31, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " Donut Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 20)(35, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 23)(38, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "svg", 26)(40, "desc", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Created with Rapha\u00EBl 2.2.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "defs", 27)(43, "path", 28)(44, "path", 29)(45, "path", 30)(46, "path", 31)(47, "path", 32)(48, "path", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "text", 34)(50, "tspan", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "In-Store Sales ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "text", 36)(53, "tspan", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 15)(56, "div", 16)(57, "div", 17)(58, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, " Monthly Production");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 20)(62, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](64, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 38)(66, "div", 39)(67, "div", 40)(68, "div", 17)(69, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](70, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, " Status Wise Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 41)(73, "select", 42)(74, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "Assigned");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Payer");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "span", 43)(79, "span", 44)(80, "span", 45)(81, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "Assigned");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "b", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](85, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "div", 50)(87, "div", 51)(88, "table", 52)(89, "thead")(90, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](91, "th", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "tbody")(101, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](102, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](111, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](114, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](116, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](118, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](120, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](126, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](127, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](130, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](131, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](132, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](134, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](135, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](136, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](137, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](138, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](140, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](142, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](143, "tr")(144, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](145, "Submitted");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](146, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](147, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](148, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](149, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](150, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](151, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](152, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](153, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](154, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](155, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](156, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](157, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](159, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](160, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](161, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](162, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](163, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](164, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](165, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](166, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](167, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](168, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](169, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](170, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](171, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](172, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](173, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](175, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](176, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](177, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](178, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](179, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](180, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](181, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](182, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](183, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](184, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](185, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "tr")(187, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](188, "Hold");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](189, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](190, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](191, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](192, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](193, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](194, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](195, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](196, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](197, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](198, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](200, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](201, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](202, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](204, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](206, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](207, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](208, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](209, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](210, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](211, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](212, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](213, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](214, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](215, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](216, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](217, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](218, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](219, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](220, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](221, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](222, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](223, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](224, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](225, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](226, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](228, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](229, "tr", 58)(230, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](231, "Denied");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](232, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](233, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](234, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](235, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](236, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](237, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](238, "td", 59)(239, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](241, "td", 59)(242, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](243, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](244, "td", 59)(245, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](246, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](247, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](248, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](249, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](250, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](252, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](254, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](255, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](256, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](258, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](259, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](260, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](261, "td", 59)(262, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](263, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](264, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](265, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](266, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](267, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](269, "71");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](271, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](272, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](273, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](274, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](275, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](276, "tr")(277, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](278, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](279, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](280, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](281, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](282, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](283, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](284, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](285, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](286, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](287, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](288, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](289, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](290, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](291, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](292, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](293, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](294, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](295, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](296, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](297, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](298, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](299, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](300, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](301, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](302, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](303, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](304, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](305, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](306, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](308, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](310, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](312, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](313, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](314, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](315, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](316, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](317, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](318, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](319, "div", 38)(320, "div", 39)(321, "div", 40)(322, "div", 17)(323, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](324, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](325, " My Production");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](326, "div", 20)(327, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](328, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](329, "div", 50)(330, "div", 51)(331, "table", 52)(332, "thead")(333, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](334, "th", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](335, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](336, "Week 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](337, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](338, "Week 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](339, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](340, "Week 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](341, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](342, "Week 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](343, "tbody")(344, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](345, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](346, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](347, "09/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](348, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](349, "09/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](350, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](351, "09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](352, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](353, "09/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](354, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](355, "09/05");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](356, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](357, "09/08");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](358, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](359, "09/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](360, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](361, "09/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](362, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](363, "09/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](364, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](365, "09/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](366, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](367, "09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](368, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](369, "09/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](370, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](371, "09/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](372, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](373, "09/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](374, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](375, "09/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](376, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](377, "09/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](378, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](379, "09/23");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](380, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](381, "09/24");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](382, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](383, "09/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](384, "td", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](385, "09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](386, "tr")(387, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](388, "Target");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](390, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](391, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](392, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](393, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](394, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](395, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](396, "96");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](397, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](398, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](399, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](400, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](401, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](402, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](403, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](404, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](405, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](406, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](408, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](409, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](410, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](411, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](412, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](414, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](415, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](416, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](417, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](418, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](419, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](420, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](421, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](422, "87");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](423, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](424, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](425, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](426, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](427, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](428, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](429, "tr")(430, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](431, "Assigned");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](433, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](434, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](435, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](436, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](437, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](438, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](439, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](440, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](441, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](442, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](443, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](444, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](445, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](446, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](447, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](448, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](449, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](451, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](453, "44");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](455, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](457, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](458, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](459, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](460, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](461, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](462, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](463, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](464, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](465, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](466, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](467, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](468, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](469, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](470, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](471, "60");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](472, "tr", 58)(473, "td", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](474, "Achieved");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](475, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](476, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](477, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](478, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](479, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](480, "70");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](481, "td", 59)(482, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](483, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](484, "span", 62)(485, "strong", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](486, "09/04 : 75% Achieved");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](487, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](488, " This is the alert message for the accuracy below 70% in the target achieved ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](489, "td", 59)(490, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](491, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](492, "span", 62)(493, "strong", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](494, "09/05 : 23% Achieved");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](495, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](496, " This is the alert message for the accuracy below 70% in the target achieved ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](497, "td", 59)(498, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](499, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](500, "span", 62)(501, "strong", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](502, "09/06 : 70% Achieved");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](503, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](504, " This is the alert message for the accuracy below 70% in the target achieved ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](505, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](506, "34");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](507, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](508, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](509, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](510, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](511, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](512, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](513, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](514, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](515, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](516, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](517, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](518, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](519, "td", 59)(520, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](521, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](522, "span", 62)(523, "strong", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](524, "09/06 : 72% Achieved");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](525, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](526, " This is the alert message for the accuracy below 70% in the target achieved ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](527, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](528, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](529, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](530, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](531, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](532, "71");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](533, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](534, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](535, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](536, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](537, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](538, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](539, "div", 64)(540, "div", 38)(541, "div", 39)(542, "div", 14)(543, "div", 65)(544, "div", 40)(545, "div", 17)(546, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](547, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](548, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](549, "div", 20)(550, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_button_click_550_listener() {
        ctx.isCollapsed_closed_claims_filters = !ctx.isCollapsed_closed_claims_filters;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](551, AuditComponent_i_551_Template, 1, 0, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](552, AuditComponent_i_552_Template, 1, 0, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](553, "div", 70)(554, "form", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function AuditComponent_Template_form_ngSubmit_554_listener() {
        return ctx.closed_claims_filter(1, "completed", null, null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](555, "div", 50)(556, "div", 72)(557, "div", 73)(558, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](559, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](560, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_560_listener($event) {
        return ctx.selectedClosed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](561, "div", 75)(562, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](563, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](564, "select", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_select_ngModelChange_564_listener($event) {
        return ctx.closedselectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](565, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](566, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](567, AuditComponent_option_567_Template, 2, 5, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](568, "div", 75)(569, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](570, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](571, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](572, "div", 72)(573, "div", 75)(574, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](575, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](576, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](577, "div", 75)(578, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](579, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](580, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](581, "div", 75)(582, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](583, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](584, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](585, AuditComponent_div_585_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](586, "div", 72)(587, "div", 75)(588, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](589, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](590, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_590_listener($event) {
        return ctx.closed_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](591, "div", 75)(592, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](593, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](594, "ngx-select-dropdown", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_ngx_select_dropdown_change_594_listener($event) {
        return ctx.closed_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](595, "div", 75)(596, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](597, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](598, "ngx-select-dropdown", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](599, "div", 72)(600, "div", 75)(601, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](602, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](603, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](604, "div", 75)(605, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](606, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](607, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](608, "div", 75)(609, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](610, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](611, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_611_listener($event) {
        return ctx.closed_submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](612, "div", 72)(613, "div", 75)(614, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](615, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](616, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](617, "div", 75)(618, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](619, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](620, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_620_listener($event) {
        return ctx.closed_selected_val = $event;
      })("keyup", function AuditComponent_Template_input_keyup_620_listener($event) {
        return ctx.closedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](621, AuditComponent_div_621_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](622, "div", 72)(623, "div", 91)(624, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_input_click_624_listener() {
        return ctx.closed_claims_filter(1, "completed", null, null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](625, "div", 65)(626, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function AuditComponent_Template_input_keyup_626_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](627, "div", 94)(628, "div", 39)(629, "div", 40)(630, "div", 39)(631, "div", 95)(632, "div", 38)(633, "div", 39)(634, "div", 96)(635, "div", 17)(636, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](637, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](638, " Closed Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](639, "div", 20)(640, "p", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](641, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](642, "select", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_select_change_642_listener() {
        return ctx.onPageSizeChanged("closed_claims");
      })("ngModelChange", function AuditComponent_Template_select_ngModelChange_642_listener($event) {
        return ctx.paginationSizeValue_ClosedClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](643, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](644, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](645, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](646, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](647, "option", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](648, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](649, "option", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](650, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](651, "span", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](652, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](653, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](654, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](655, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_i_click_655_listener() {
        return ctx.export_excel_files("excel", "Closed_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](656, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](657, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](658, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_button_click_658_listener() {
        return ctx.isCollapsed_closed_claims = !ctx.isCollapsed_closed_claims;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](659, AuditComponent_i_659_Template, 1, 0, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](660, AuditComponent_i_660_Template, 1, 0, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](661, "div", 105)(662, "ag-grid-angular", 106, 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("gridReady", function AuditComponent_Template_ag_grid_angular_gridReady_662_listener($event) {
        return ctx.onGridReady_4($event);
      })("selectionChanged", function AuditComponent_Template_ag_grid_angular_selectionChanged_662_listener($event) {
        return ctx.onSelectionChanged_ClosedClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](664, "div", 108)(665, "div", 38)(666, "div", 39)(667, "div", 14)(668, "div", 65)(669, "div", 40)(670, "div", 17)(671, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](672, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](673, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](674, "div", 20)(675, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_button_click_675_listener() {
        ctx.isCollapsed_assigned_claims_filters = !ctx.isCollapsed_assigned_claims_filters;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](676, AuditComponent_i_676_Template, 1, 0, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](677, AuditComponent_i_677_Template, 1, 0, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](678, "div", 109)(679, "form", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function AuditComponent_Template_form_ngSubmit_679_listener() {
        return ctx.assigned_claims_filter(1, "allocated", null, null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](680, "div", 50)(681, "div", 72)(682, "div", 73)(683, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](684, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](685, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_685_listener($event) {
        return ctx.selectedAssign = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](686, "div", 75)(687, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](688, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](689, "select", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_select_ngModelChange_689_listener($event) {
        return ctx.selectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](690, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](691, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](692, AuditComponent_option_692_Template, 2, 5, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](693, "div", 75)(694, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](695, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](696, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](697, "div", 72)(698, "div", 75)(699, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](700, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](701, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](702, "div", 75)(703, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](704, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](705, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](706, "div", 75)(707, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](708, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](709, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](710, AuditComponent_div_710_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](711, "div", 72)(712, "div", 75)(713, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](714, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](715, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_715_listener($event) {
        return ctx.assigned_select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](716, "div", 75)(717, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](718, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](719, "ngx-select-dropdown", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_ngx_select_dropdown_change_719_listener($event) {
        return ctx.assign_status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](720, "div", 75)(721, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](722, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](723, "ngx-select-dropdown", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](724, "div", 72)(725, "div", 75)(726, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](727, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](728, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](729, "div", 75)(730, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](731, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](732, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](733, "div", 75)(734, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](735, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](736, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_736_listener($event) {
        return ctx.assigned_submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](737, "div", 72)(738, "div", 75)(739, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](740, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](741, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](742, "div", 75)(743, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](744, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](745, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_745_listener($event) {
        return ctx.assigned_selected_val = $event;
      })("keyup", function AuditComponent_Template_input_keyup_745_listener($event) {
        return ctx.assignedSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](746, AuditComponent_div_746_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](747, "div", 72)(748, "div", 91)(749, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_input_click_749_listener() {
        return ctx.assigned_claims_filter(1, "allocated", null, null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](750, "div", 65)(751, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_751_listener($event) {
        return ctx.search_value_assignedClaims = $event;
      })("keyup", function AuditComponent_Template_input_keyup_751_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](752, "div", 94)(753, "div", 39)(754, "div", 40)(755, "div", 39)(756, "div", 95)(757, "div", 38)(758, "div", 39)(759, "div", 96)(760, "div", 17)(761, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](762, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](763, " Assigned Claims ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](764, "div", 20)(765, "p", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](766, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](767, "select", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_select_change_767_listener() {
        return ctx.onPageSizeChanged("assigned_claims");
      })("ngModelChange", function AuditComponent_Template_select_ngModelChange_767_listener($event) {
        return ctx.paginationSizeValue_AssignmedClaims = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](768, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](769, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](770, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](771, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](772, "option", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](773, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](774, "option", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](775, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](776, "span", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](777, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](778, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](779, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](780, "span", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_span_click_780_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r333);
        const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](1001);
        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.reassign(_r45));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](781, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](782, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](783, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_i_click_783_listener() {
        return ctx.export_excel_files("excel", "Assigned_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](784, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](785, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](786, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_button_click_786_listener() {
        return ctx.isCollapsed_assigned_claims_grid = !ctx.isCollapsed_assigned_claims_grid;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](787, AuditComponent_i_787_Template, 1, 0, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](788, AuditComponent_i_788_Template, 1, 0, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](789, "div", 105)(790, "div", 112)(791, "ag-grid-angular", 106, 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("gridReady", function AuditComponent_Template_ag_grid_angular_gridReady_791_listener($event) {
        return ctx.onGridReady_3($event);
      })("selectionChanged", function AuditComponent_Template_ag_grid_angular_selectionChanged_791_listener($event) {
        return ctx.onSelectionChanged_assignedClaims($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](793, "div", 114)(794, "div", 38)(795, "div", 39)(796, "div", 14)(797, "div", 65)(798, "div", 40)(799, "div", 17)(800, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](801, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](802, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](803, "div", 20)(804, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_button_click_804_listener() {
        ctx.isCollapsed_audit_que_filters = !ctx.isCollapsed_audit_que_filters;
        return ctx.status_code_select();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](805, AuditComponent_i_805_Template, 1, 0, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](806, AuditComponent_i_806_Template, 1, 0, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](807, "div", 115)(808, "form", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function AuditComponent_Template_form_ngSubmit_808_listener() {
        return ctx.audit_claims_filter(1, "wo", null, null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](809, "div", 50)(810, "div", 72)(811, "div", 73)(812, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](813, "DOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](814, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_814_listener($event) {
        return ctx.selectedAudit = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](815, "div", 73)(816, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](817, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](818, "select", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_select_ngModelChange_818_listener($event) {
        return ctx.auditselectedAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](819, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](820, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](821, AuditComponent_option_821_Template, 2, 5, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](822, "div", 73)(823, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](824, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](825, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](826, "div", 72)(827, "div", 73)(828, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](829, "Acc No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](830, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](831, "div", 73)(832, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](833, "Patient Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](834, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](835, "div", 75)(836, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](837, "Total AR");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](838, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](839, AuditComponent_div_839_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](840, "div", 72)(841, "div", 75)(842, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](843, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](844, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_844_listener($event) {
        return ctx.select_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](845, "div", 75)(846, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](847, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](848, "ngx-select-dropdown", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_ngx_select_dropdown_change_848_listener($event) {
        return ctx.status_code_changed($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](849, "div", 75)(850, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](851, "Sub Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](852, "ngx-select-dropdown", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](853, "div", 72)(854, "div", 75)(855, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](856, "Rendering Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](857, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](858, "div", 75)(859, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](860, "Responsibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](861, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](862, "div", 75)(863, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](864, "Billed/Last Submit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](865, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_865_listener($event) {
        return ctx.audit_submit_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](866, "div", 72)(867, "div", 75)(868, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](869, "Denial Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](870, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](871, "div", 75)(872, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](873, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](874, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_874_listener($event) {
        return ctx.auditQueue_selected_val = $event;
      })("keyup", function AuditComponent_Template_input_keyup_874_listener($event) {
        return ctx.auditQueueSearchOnKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](875, AuditComponent_div_875_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](876, "div", 72)(877, "div", 91)(878, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_input_click_878_listener() {
        return ctx.audit_claims_filter(1, "wo", null, null, null, null, null, null, null, null, "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](879, "div", 65)(880, "input", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function AuditComponent_Template_input_keyup_880_listener() {
        return ctx.onSearch();
      })("ngModelChange", function AuditComponent_Template_input_ngModelChange_880_listener($event) {
        return ctx.search_value = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](881, "div", 38)(882, "div", 117)(883, "div", 40)(884, "div", 17)(885, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](886, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](887, " Audit Que");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](888, "div", 20)(889, "p", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](890, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](891, "select", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_select_change_891_listener() {
        return ctx.onPageSizeChanged("audit_que");
      })("ngModelChange", function AuditComponent_Template_select_ngModelChange_891_listener($event) {
        return ctx.paginationSizeValue_AuditQue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](892, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](893, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](894, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](895, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](896, "option", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](897, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](898, "option", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](899, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](900, "span", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](901, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](902, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](903, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](904, "span", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_span_click_904_listener() {
        return ctx.reload_data(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](905, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](906, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](907, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_i_click_907_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r333);
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](993);
        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.select_claims(_r37));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](908, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](909, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](910, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_i_click_910_listener() {
        return ctx.export_excel_files("excel", "Audit_que_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](911, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](912, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](913, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_button_click_913_listener() {
        return ctx.isCollapsed_audit_que_grid = !ctx.isCollapsed_audit_que_grid;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](914, AuditComponent_i_914_Template, 1, 0, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](915, AuditComponent_i_915_Template, 1, 0, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](916, "div", 105)(917, "div", 112)(918, "ag-grid-angular", 106, 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("gridReady", function AuditComponent_Template_ag_grid_angular_gridReady_918_listener($event) {
        return ctx.onGridReady_1($event);
      })("selectionChanged", function AuditComponent_Template_ag_grid_angular_selectionChanged_918_listener($event) {
        return ctx.onSelectionChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](920, "div", 121)(921, "div", 38)(922, "div", 117)(923, "form", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function AuditComponent_Template_form_ngSubmit_923_listener() {
        return ctx.workorder_search(null, null, null, 1, ctx.wo_page_number, "null", "null", null, "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](924, "div", 122)(925, "div", 17)(926, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](927, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](928, " Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](929, "div", 50)(930, "div", 72)(931, "div", 123)(932, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](933, "Created date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](934, "input", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_934_listener($event) {
        return ctx.selectedCreatedAt = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](935, "div", 123)(936, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](937, "Due date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](938, "input", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_input_ngModelChange_938_listener($event) {
        return ctx.selectedDueDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](939, "div", 123)(940, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](941, "Work Order Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](942, "input", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](943, "div", 127)(944, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](945, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](946, "select", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AuditComponent_Template_select_ngModelChange_946_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](947, "option", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selected", function AuditComponent_Template_option_selected_947_listener() {
        return ctx.page = "--Select--";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](948, "--Select Age--");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](949, "option", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selected", function AuditComponent_Template_option_selected_949_listener() {
        return ctx.page = "low";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](950, "Low");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](951, "option", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selected", function AuditComponent_Template_option_selected_951_listener() {
        return ctx.page = "medium";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](952, "Medium");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](953, "option", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selected", function AuditComponent_Template_option_selected_953_listener() {
        return ctx.page = "high";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](954, "High");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](955, "div", 72)(956, "div", 91)(957, "input", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_input_click_957_listener() {
        return ctx.workorder_search(null, null, null, 1, ctx.wo_page_number, "null", "null", null, "null", "null", "null", "search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](958, "div", 94)(959, "div", 39)(960, "div", 40)(961, "div", 17)(962, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](963, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](964, " Work Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](965, "div", 134)(966, "p", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](967, " Show: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](968, "select", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AuditComponent_Template_select_change_968_listener() {
        return ctx.onPageSizeChanged("work_orders");
      })("ngModelChange", function AuditComponent_Template_select_ngModelChange_968_listener($event) {
        return ctx.paginationSizeValue_WorkOrders = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](969, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](970, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](971, "option", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](972, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](973, "option", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](974, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](975, "option", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](976, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](977, "span", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](978, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](979, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](980, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](981, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuditComponent_Template_i_click_981_listener() {
        return ctx.export_excel_wo_files("excel", "Audit_work_order_claims");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](982, "ag-grid-angular", 106, 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("gridReady", function AuditComponent_Template_ag_grid_angular_gridReady_982_listener($event) {
        return ctx.onGridReady_2($event);
      })("selectionChanged", function AuditComponent_Template_ag_grid_angular_selectionChanged_982_listener($event) {
        return ctx.onSelectionChanged_forWorkOrders($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](984, AuditComponent_ng_template_984_Template, 290, 30, "ng-template", null, 136, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](986, AuditComponent_ng_template_986_Template, 21, 8, "ng-template", null, 137, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](988, AuditComponent_ng_template_988_Template, 20, 4, "ng-template", null, 138, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](990, AuditComponent_ng_template_990_Template, 36, 15, "ng-template", null, 139, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](992, AuditComponent_ng_template_992_Template, 88, 25, "ng-template", null, 140, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](994, AuditComponent_ng_template_994_Template, 29, 8, "ng-template", null, 141, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](996, AuditComponent_ng_template_996_Template, 55, 2, "ng-template", null, 142, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](998, AuditComponent_ng_template_998_Template, 12, 1, "ng-template", null, 143, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1000, AuditComponent_ng_template_1000_Template, 17, 0, "ng-template", null, 144, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1002, AuditComponent_ng_template_1002_Template, 17, 0, "ng-template", null, 145, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1004, AuditComponent_ng_template_1004_Template, 23, 16, "ng-template", null, 146, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1006, AuditComponent_ng_template_1006_Template, 18, 15, "ng-template", null, 147, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1008, AuditComponent_ng_template_1008_Template, 15, 7, "ng-template", null, 148, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1010, AuditComponent_ng_template_1010_Template, 15, 7, "ng-template", null, 149, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1012, AuditComponent_ng_template_1012_Template, 15, 7, "ng-template", null, 150, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1014, AuditComponent_ng_template_1014_Template, 9, 14, "ng-template", null, 151, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1016, AuditComponent_ng_template_1016_Template, 5, 2, "ng-template", null, 152, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.user_role == 1 || ctx.user_role == 3 || ctx.user_role == 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.user_role == 2 || ctx.user_role == 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.user_role == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.user_role == 2 || ctx.user_role == 1 || ctx.user_role == 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](541);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_closed_claims_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCollapsed_closed_claims_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_closed_claims_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed_closed_claims_filters)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.closedClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedClosed)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.closedselectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.closedClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.closed_select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.closed_submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.closed_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.closedSelected == false && ctx.closed_selected_val != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_ClosedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_closed_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCollapsed_closed_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_closed_claims);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed_closed_claims)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnDefs", ctx.columnDefs4)("gridOptions", ctx.gridOptions4)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_assigned_claims_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCollapsed_assigned_claims_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_assigned_claims_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed_assigned_claims_filters)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.assignedClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedAssign)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.assignedClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.assigned_select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.assigned_submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.assigned_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.assignedSelected == false && ctx.assigned_selected_val != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.search_value_assignedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_AssignmedClaims);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_assigned_claims_grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCollapsed_assigned_claims_grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_assigned_claims_grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed_assigned_claims_grid)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnDefs", ctx.columnDefs3)("gridOptions", ctx.gridOptions3)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx.class_change_tab["tab2"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_audit_que_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCollapsed_audit_que_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_audit_que_filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed_audit_que_filters)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.auditClaimsFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedAudit)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.auditselectedAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.age_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.auditClaimsFind.controls["total_ar"].touched || ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.select_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.status_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.config)("options", ctx.sub_options);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.audit_submit_date)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.auditQueue_selected_val);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.auditQueueSelected == false && ctx.auditQueue_selected_val != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.search_value);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_AuditQue);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_audit_que_grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCollapsed_audit_que_grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_audit_que_grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed_audit_que_grid)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.workOrderFind);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedCreatedAt)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedDueDate)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.page);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.paginationSizeValue_WorkOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnDefs", ctx.columnDefs2)("gridOptions", ctx.gridOptions2)("defaultColDef", ctx.defaultColDef)("sideBar", ctx.sideBar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _claim_op_footer_claim_op_footer_component__WEBPACK_IMPORTED_MODULE_9__.ClaimOpFooterComponent, _followup_template_followup_template_component__WEBPACK_IMPORTED_MODULE_10__.FollowupTemplateComponent, _followup_view_followup_view_component__WEBPACK_IMPORTED_MODULE_11__.FollowupViewComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, angular_epic_spinners__WEBPACK_IMPORTED_MODULE_22__["ɵa"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_23__.NgxSelectDropdownComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__.AgGridAngular, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_25__.CollapseDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__.BsDaterangepickerInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 9184:
/*!*********************************************************!*\
  !*** ./src/app/lazy-audit/lazy-audit-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyAuditRoutingModule": () => (/* binding */ LazyAuditRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_audit_audit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/audit/audit.component */ 2857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_audit_audit_component__WEBPACK_IMPORTED_MODULE_0__.AuditComponent
}];
class LazyAuditRoutingModule {}
LazyAuditRoutingModule.ɵfac = function LazyAuditRoutingModule_Factory(t) {
  return new (t || LazyAuditRoutingModule)();
};
LazyAuditRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LazyAuditRoutingModule
});
LazyAuditRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyAuditRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3784:
/*!*************************************************!*\
  !*** ./src/app/lazy-audit/lazy-audit.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyAuditModule": () => (/* binding */ LazyAuditModule)
/* harmony export */ });
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lazy_audit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-audit-routing.module */ 9184);
/* harmony import */ var _components_audit_audit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/audit/audit.component */ 2857);
/* harmony import */ var _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-module/common-module.module */ 6469);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-sidebar */ 2400);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-daterangepicker-material */ 9723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class LazyAuditModule {}
LazyAuditModule.ɵfac = function LazyAuditModule_Factory(t) {
  return new (t || LazyAuditModule)();
};
LazyAuditModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: LazyAuditModule
});
LazyAuditModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _lazy_audit_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyAuditRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarModule.forRoot(), ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__.NgxDaterangepickerMd, ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LazyAuditModule, {
    declarations: [_components_audit_audit_component__WEBPACK_IMPORTED_MODULE_1__.AuditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _lazy_audit_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyAuditRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_2__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__.NgxDaterangepickerMd, ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_lazy-audit_lazy-audit_module_ts.3a8063b9f86166dd.js.map