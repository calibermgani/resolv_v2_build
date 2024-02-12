"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_lazy_lazy_module_ts"],{

/***/ 214:
/*!********************************************!*\
  !*** ./src/app/Services/report.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ReportService {
  //private api = 'http://35.226.72.203/avecarm/backend/public/index.php/api';
  constructor(http) {
    this.http = http;
    this.id = 0;
    //private api = "http://127.0.0.1:8000/api";
    this.api = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
  }
  getdata(id) {
    id = localStorage.getItem('practice_id');
    return this.http.get(`${this.api}/dashboard?practice_dbid=` + id);
  }
}
ReportService.ɵfac = function ReportService_Factory(t) {
  return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ReportService,
  factory: ReportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);


class DashboardComponent {
  //     public practiceLogIn !:boolean;
  //     public monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  //     public thisMonth = this.monthNames[(new Date()).getMonth()];
  //     public prevMonth = this.monthNames[(new Date()).getMonth() - 1];
  //     public payer_classfication:any= [];
  //     public agingBucket:any = [];
  //     public touch:any=[];
  //     public status_code:any= [];
  //     public statusFooter:any=[];
  //     public performance:any=[];
  //     public day30:any = [] ;
  //     public day60:any = [];
  //     public day90: any = [];
  //     public day120!: any[];
  //     public day180!: any[];
  //     public day365: any = [];
  //     public day366: any = [];
  //     public janless3: any = [];
  //     public janthree: any = [];
  //     public janfour: any = [];
  //     public janfive: any = [];
  //     public jansix: any = [];
  //     public jansixplus: any = [];
  //     public febless3: any = [];
  //     public febthree: any = [];
  //     public febfour: any = [];
  //     public febfive: any = [];
  //     public febsix: any = [];
  //     public febsixplus: any = [];
  //     public marless3: any = [];
  //     public marthree: any = [];
  //     public marfour: any = [];
  //     public marfive: any = [];
  //     public marsix: any = [];
  //     public marsixplus: any = [];
  //     public aprless3: any = [];
  //     public aprthree: any = [];
  //     public aprfour: any = [];
  //     public aprfive: any = [];
  //     public aprsix: any = [];
  //     public aprsixplus: any = [];
  //     public mayless3: any = [];
  //     public maythree: any = [];
  //     public mayfour: any = [];
  //     public mayfive: any = [];
  //     public maysix: any = [];
  //     public maysixplus: any = [];
  //     public juneless3: any = [];
  //     public junethree: any = [];
  //     public junefour: any = [];
  //     public junefive: any = [];
  //     public junesix: any = [];
  //     public junesixplus: any = [];
  //     public julyless3: any = [];
  //     public julythree: any = [];
  //     public julyfour: any = [];
  //     public julyfive: any = [];
  //     public julysix: any = [];
  //     public julysixplus: any = [];
  //     public augless3: any = [];
  //     public augthree: any = [];
  //     public augfour: any = [];
  //     public augfive: any = [];
  //     public augsix: any = [];
  //     public augsixplus: any = [];
  //     public sepless3: any = [];
  //     public septhree: any = [];
  //     public sepfour: any = [];
  //     public sepfive: any = [];
  //     public sepsix: any = [];
  //     public sepsixplus: any = [];
  //     public octless3: any = [];
  //     public octthree: any = [];
  //     public octfour: any = [];
  //     public octfive: any = [];
  //     public octsix: any = [];
  //     public octsixplus: any = [];
  //     public novless3: any = [];
  //     public novthree: any = [];
  //     public novfour: any = [];
  //     public novfive: any = [];
  //     public novsix: any = [];
  //     public novsixplus: any = [];
  //     public decless3: any = [];
  //     public decthree: any = [];
  //     public decfour: any = [];
  //     public decfive: any = [];
  //     public decsix: any = [];
  //     public decsixplus: any = [];
  //     public name!:string;
  //     public total: any = [];
  //     public user:any;
  //     public pending: any = [];
  //     public assign: any = [];
  //     public worked!: any[];
  //     public resolved: any = [];
  //     pyramid!: Object;
  //     stacked!: object;
  //     dataSource!: object;
  //     pie3d!: object;
  //     stacked_chart!: object;
  //     data!: Object;
  //     dataset!: object;
  //     chartData :any=[];
  //     status_chart:any=[];
  //     associates_chart:any=[];
  //     associates_chart_pending:any=[];
  //     associates_chart_assign:any=[];
  //     associates_chart_worked:any=[];
  //     associates_chart_resolved:any=[];
  constructor(
  //   private setus: SetUserService,
  // private notify_service:NotifyService,
  // private modalService: NgbModal,
  // private dataservice: ReportService, private zone: NgZone
  auth) {
    this.auth = auth;
    //   let id: number = 0;
    //   //  this.notify_service.get_notify_data().subscribe(message => { this.process_notify(message) });
    //   this.dataservice.getdata(id).subscribe(
    //   (data:any) => {
    //   console.log(data.data);
    //   console.log("sample -------------- data");
    //   console.log(data.data.aging_analysis);
    //  this.agingBucket.push(data.data.aging_analysis);
    //  for (const value of this.agingBucket) {
    //   this.day30 = value.day30;
    //   this.day60 =value.day60;
    //   this.day90 = value.day90;
    //   this.day120 = value.day120;
    //   this.day180= value.day180;
    //   this.day365 = value.day365;
    //   this.day366 = value.day366;
  }
  //       this.pyramid = {
  //         "chart": {
  //                 "captionOnTop": "0",
  //                 "captionPadding": "25",
  //                 "alignCaptionWithCanvas": "1",
  //                 "subCaptionFontSize": "12",
  //                 "borderAlpha": "20",
  //                 "is2D": "1",
  //                 "numberPrefix": "$",
  //                 "numberSuffix": "M",
  //                 "plotTooltext": "$label of $$value ",
  //                 "chartLeftMargin": "40",
  //                 "width": "100%",
  //               "height": "350",
  //                 "theme": "fusion"
  //             },
  //        data: [{ label: '0-30', value: this.day30 },
  //         { label: '31-60', value: this.day60 },
  //         { label: '61-90', value: this.day90 },
  //         { label: '91-120', value: this.day120 },
  //         { label: '121-180', value: this.day180 },
  //         { label: '181-365', value: this.day365 },
  //         { label: '365+', value: this.day366 }
  //         ],
  //       }
  //     this.touch.push(data.data.touch_analysis);
  //      console.log(this.touch)
  //      for( const value of this.touch){
  //        this.janless3=value.January.less3;
  //        this.janthree= value.January.three;
  //        this.janfour= value.January.four;
  //        this.janfive=value.January.five;
  //        this.jansix= value.January.six;
  //        this.jansixplus= value.January.sixplus;
  //        this.febless3=value.February.less3;
  //        this.febthree= value.February.three;
  //        this.febfour= value.February.four;
  //        this.febfive=value.February.five;
  //        this.febsix= value.February.six;
  //        this.febsixplus= value.February.sixplus;
  //        this.marless3=value.March.less3;
  //        this.marthree= value.March.three;
  //        this.marfour= value.March.four;
  //        this.marfive=value.March.five;
  //        this.marsix= value.March.six;
  //        this.marsixplus= value.March.sixplus;
  //        this.aprless3=value.April.less3;
  //        this.aprthree= value.April.three;
  //        this.aprfour= value.April.four;
  //        this.aprfive=value.April.five;
  //        this.aprsix= value.April.six;
  //        this.aprsixplus= value.April.sixplus;
  //        this.mayless3=value.May.less3;
  //        this.maythree= value.May.three;
  //        this.mayfour= value.May.four;
  //        this.mayfive=value.May.five;
  //        this.maysix= value.May.six;
  //        this.maysixplus= value.May.sixplus;
  //        this.juneless3=value.June.less3;
  //        this.junethree= value.June.three;
  //        this.junefour= value.June.four;
  //        this.junefive=value.June.five;
  //        this.junesix= value.June.six;
  //        this.junesixplus= value.June.sixplus;
  //        this.julyless3=value.July.less3;
  //        this.julythree= value.July.three;
  //        this.julyfour= value.July.four;
  //        this.julyfive=value.July.five;
  //        this.julysix= value.July.six;
  //        this.julysixplus= value.July.sixplus;
  //        this.augless3=value.August.less3;
  //        this.augthree= value.August.three;
  //        this.augfour= value.August.four;
  //        this.augfive=value.August.five;
  //        this.augsix= value.August.six;
  //        this.augsixplus= value.August.sixplus;
  //        this.sepless3=value.September.less3;
  //        this.septhree= value.September.three;
  //        this.sepfour= value.September.four;
  //        this.sepfive=value.September.five;
  //        this.sepsix= value.September.six;
  //        this.sepsixplus= value.September.sixplus;
  //        this.octless3=value.October.less3;
  //        this.octthree= value.October.three;
  //        this.octfour= value.October.four;
  //        this.octfive=value.October.five;
  //        this.octsix= value.October.six;
  //        this.octsixplus= value.October.sixplus;
  //        this.novless3=value.November.less3;
  //        this.novthree= value.November.three;
  //        this.novfour= value.November.four;
  //        this.novfive=value.November.five;
  //        this.novsix= value.November.six;
  //        this.novsixplus= value.November.sixplus;
  //        this.decless3=value.December.less3;
  //        this.decthree= value.December.three;
  //        this.decfour= value.December.four;
  //        this.decfive=value.December.five;
  //        this.decsix= value.December.six;
  //        this.decsixplus= value.December.sixplus;
  //       }
  //   this.stacked={
  //     "chart": {
  //         "xAxisname": "",
  //         "yAxisName": "",
  //       "plotSpacePercent": "70",
  //       "palettecolors": "#3ad6b1,#40beec,#90a3d1,#f3d9a1,#94d39d,#e2b170,#ddc19d,#57b8a2",
  //       "showValues": "0",
  //       "showLegend": "0",
  //       "width": "100%",
  //       "height": "100%",
  //         "theme": "fusion",
  //     },
  //     "categories": [{
  //       "category": [
  //           {"label": "Jan"},
  //           {"label": "Feb"},
  //           {"label": "Mar"},
  //           {"label": "Apr"},
  //           {"label": "May"},
  //           {"label": "Jun"},
  //           {"label": "Jul"},
  //           {"label": "Aug"},
  //           {"label": "Sep"},
  //           {"label": "Oct"},
  //           {"label": "Nov"},
  //           {"label": "Dec"}
  //       ]
  //   }],
  //     dataset: [{
  //   "seriesname": "&lt; 3 Touches",
  //       data: [
  //           {value: this.janless3},
  //           {value: this.febless3},
  //           {value: this.marless3},
  //           {value: this.aprless3},
  //           {value: this.mayless3},
  //           {value: this.juneless3},
  //           {value: this.julyless3},
  //           {value: this.augless3},
  //           {value: this.sepless3},
  //           {value: this.octless3},
  //           {value: this.novless3},
  //           {value: this.decless3}
  //       ]
  //   },
  //   {
  //       "seriesname": "3 Touches",
  //       "data": [
  //         {value: this.janthree},
  //         {value: this.febthree},
  //         {value: this.marthree},
  //         {value: this.aprthree},
  //         {value: this.maythree},
  //         {value: this.junethree},
  //         {value: this.julythree},
  //         {value: this.augthree},
  //         {value: this.septhree},
  //         {value: this.octthree},
  //         {value: this.novthree},
  //         {value: this.decthree}
  //         ]
  //       },
  //       {
  //           "seriesname": "4 Touches",
  //           "data": [
  //               {value: this.janfour},
  //               {value: this.febfour},
  //               {value: this.marfour},
  //               {value: this.aprfour},
  //               {value: this.mayfour},
  //               {value: this.junefour},
  //               {value: this.julyfour},
  //               {value: this.augfour},
  //               {value: this.sepfour},
  //               {value: this.octthree},
  //               {value: this.novthree},
  //               {value: this.decthree}
  //           ]},
  //           {
  //           "seriesname": "5 Touches",
  //           "data": [
  //               {value: this.janfive},
  //               {value: this.febfive},
  //               {value: this.marfive},
  //               {value: this.aprfive},
  //               {value: this.mayfive},
  //               {value: this.junefive},
  //               {value: this.julyfive},
  //               {value: this.augfive},
  //               {value: this.sepfive},
  //               {value: this.octfive},
  //               {value: this.novfive},
  //               {value: this.decfive}
  //           ]},
  //           {
  //           "seriesname": "6 Touches",
  //           "data": [
  //             {value: this.jansix},
  //             {value: this.febsix},
  //             {value: this.marsix},
  //             {value: this.aprsix},
  //             {value: this.maysix},
  //             {value: this.junesix},
  //             {value: this.julysix},
  //             {value: this.augsix},
  //             {value: this.sepsix},
  //             {value: this.octsix},
  //             {value: this.novsix},
  //             {value: this.decsix}
  //           ]},
  //           {
  //           "seriesname": ">6 Touches",
  //           "data": [
  //             {value: this.jansixplus},
  //             {value: this.febsixplus},
  //             {value: this.marsixplus},
  //             {value: this.aprsixplus},
  //             {value: this.maysixplus},
  //             {value: this.junesixplus},
  //             {value: this.julysixplus},
  //             {value: this.augsixplus},
  //             {value: this.sepsixplus},
  //             {value: this.octsixplus},
  //             {value: this.novsixplus},
  //             {value: this.decsixplus}
  //           ]
  //   }]
  //   }
  //   //Associates Performance
  // this.performance.push(data.data.performance);
  // console.log(this.performance);
  // for( const per of this.performance){
  //   for( const res of per){
  //     this.user=res.name;
  //     this.pending=res.pending;
  //     this.assign=res.assign;
  //     this.worked=res.worked;
  //     this.resolved=res.resolved;
  //     this.associates_chart.push({
  //       "label": this.user,
  //   })
  //   this.associates_chart_pending.push({
  //     "value": this.pending,
  // })
  //   this.associates_chart_assign.push({
  //     "value":this.assign
  //   })
  //   this.associates_chart_worked.push({
  //     "value":this.assign
  //   })
  //   this.associates_chart_resolved.push({
  //     "value":this.assign
  //   })
  //   }
  //   console.log(this.associates_chart_pending)
  // }
  // this.stacked_chart={
  //         "chart": {
  //           "caption": "",
  //           "subcaption": "",
  //           "xAxisName": "",
  //           "pYAxisName": "",
  //           "sYAxisName": "",
  //           "numberPrefix": "",
  //           "numbersuffix": "",
  //           "sNumberSuffix": "%",
  //           "sYAxisMaxValue": "25",
  //           "divlineAlpha": "100",
  //           "divlineColor": "#999999",
  //           "palettecolors": "#e08c92,#b1ceb5,#e1e3cd,#80bde7,#57b8a2",
  //           "divlineThickness": "1",
  //           "divLineDashed": "1",
  //           "divLineDashLen": "1",
  //           "width":"100%",
  //           "height":"100%",
  //           "theme": "fusion"
  //         },
  //         "categories": [
  //             { category:  this.associates_chart }
  //         ],
  //         "dataset": [{
  //           "dataset": [{
  //               "seriesname": "Assigned Claims",
  //                "data": this.associates_chart_assign
  //           },
  //           {
  //               "seriesname": "Pending Claims",
  //               "data": this.associates_chart_pending
  //           },
  //           {
  //               "seriesname": "Worked Claims",
  //               "data": this.associates_chart_worked
  //           }
  //       ]
  //       },
  //             {
  //                 "dataset": [{
  //                   "seriesname": "Resolved Claims",
  //                   "data": this.associates_chart_resolved
  //               }]
  //             }
  //         ]
  //       }
  //   //Payer Classification
  //   this.payer_classfication.push(data.data.payer_classfication.insurance);
  //   console.log(this.payer_classfication);
  //   for( const value of this.payer_classfication)
  //   {
  //   for( const payer of value)
  //   {
  //     if(payer.Insurance==null){
  //       this.name='null';
  //     }else{
  //       this.name=payer.Insurance;
  //     }
  // this.total=payer.totalCharges
  // // this.chartData +='{"label":"'+ this.name+'","value":'+ this.total+'},';
  //     this.chartData.push({
  //        "label":  this.name,
  //        "value": this.total
  //      })
  // }
  //  console.log(this.chartData)
  //   }
  //   this.dataSource = {
  //     "chart": {
  //       "showLegend": "0",
  //        "showLabels": "0",
  //       "showValues": "0",
  //       "numberPrefix" : "$",
  //       "enableMultiSlicing":"1",
  //       "width": "500",
  //       "height": "300",
  //       "theme":"fusion"
  //     },
  //      data: this.chartData
  //   };
  //       //Status Code
  //       this.status_code.push(data.data.status_code.header);
  //       this.statusFooter.push(data.data.status_code.footer);
  //       //console.log(this.status_code);
  //       for(const value of this.status_code){
  //         for( const status of value){
  //           this.name=status.statusCode,
  //           this.total=status.statusValue;
  //           this.status_chart.push({
  //             "label": this.name,
  //             "value": this.total
  //         })
  //         }
  //         //console.log(this.status_chart)
  //       }
  //       this.pie3d = {
  //         "chart": {
  //           "showLegend": "0",
  //            "showLabels": "0",
  //           "showValues": "0",
  //           "palettecolors": "#ef7e86,#faeb6b,#80c3dc,#bea4dc,#94d39d,#e2b170,#ddc19d,#57b8a2",
  //           "numberPrefix" : "$",
  //           "enableMultiSlicing":"1",
  //           "width": "500",
  //         "height": "300",
  //         "renderAt": 'status_chart',
  //           "theme": "fusion"
  //         },
  //         data:  this.status_chart
  //     };
  // });
  // }
  //   public error_data:string='';
  //   notifications =[];
  //   public assign_err(data:any)
  //   {
  //     if(data != undefined)
  //     {
  //     this.error_data = data;
  //     setTimeout(() => {
  //       this.error_data = '';
  //     }, 1500);
  //     this.setus.dashboard_warning('');
  //   }
  // }
  // //Red Alerrt Box
  // private _opened: boolean = false;
  // private isOpen: boolean = false;
  // private _positionNum: number = 0;
  // private _modeNum: number = 0;
  // private closeOnClickOutside: boolean = false;
  // private _MODES: Array<string> = ['push'];
  // private _POSITIONS: Array<string> = ['right'];
  // private redalert() {
  //  this._opened = !this._opened;
  // }
  // private mynotes(){
  //     this.isOpen=!this.isOpen;
  // }
  // private _togglePosition(): void {
  //  this._positionNum++;
  //  if (this._positionNum === this._POSITIONS.length) {
  //    this._positionNum = 0;
  //  }
  // }
  // private ClickOutside(): void {
  //     this.closeOnClickOutside = !this.closeOnClickOutside;
  //   }
  // private _toggleMode(): void {
  //  this._modeNum++;
  //  if (this._modeNum === this._MODES.length) {
  //    this._modeNum = 0;
  //  }
  // }
  // private _toggleCloseOnClickOutside(){
  //     this.closeOnClickOutside=!this.closeOnClickOutside;
  // }
  // stacked3={
  //     "chart": {
  //         "caption": "",
  //             "subCaption": "",
  //             "xAxisName": "",
  //             "yAxisName": "",
  //             "plotSpacePercent": "50",
  //             "palettecolors": "#ef7e86,#94d39d,#80c3dc,#bea4dc,#94d39d,#e2b170,#faeb6b,#57b8a2",
  //             "showValues": "0",
  //             "theme": "fusion"
  //     },
  //     "categories": [
  //         {
  //             "category": [
  //                 {"label": "Jan"},
  //                 {"label": "Feb"},
  //                 {"label": "Mar"},
  //                 {"label": "Apr"},
  //                 {"label": "May"},
  //                 {"label": "Jun"},
  //                 {"label": "Jul"},
  //                 {"label": "Aug"},
  //                 {"label": "Sep"},
  //                 {"label": "Oct"},
  //                 {"label": "Nov"},
  //                 {"label": "Dec"}
  //             ]
  //         }
  //     ],
  //     "dataset": [
  //         {
  //             "seriesname": "Total",
  //             "data": [
  //                 {"value": "23"},
  //                 {"value": "43"},
  //                 {"value": "21"},
  //                 {"value": "123"},
  //                 {"value": "43"},
  //                 {"value": "75"},
  //                 {"value": "79"},
  //                 {"value": "134"},
  //                 {"value": "85"},
  //                 {"value": "66"},
  //                 {"value": "27"},
  //                 {"value": "38"},
  //                 {"value": "88"}
  //             ]
  //         },
  //         {
  //             "seriesname": "Closed",
  //             "data": [
  //                 {"value": "11"},
  //                 {"value": "43"},
  //                 {"value": "20"},
  //                 {"value": "88"},
  //                 {"value": "26"},
  //                 {"value": "54"},
  //                 {"value": "23"},
  //                 {"value": "99"},
  //                 {"value": "54"},
  //                 {"value": "22"},
  //                 {"value": "27"},
  //                 {"value": "32"}
  //             ]
  //         },
  //     ]
  // }
  ngOnInit() {
    console.log('Dashboard in');
    // this.auth.tokenValue.next(false);
    // this.assign_err(this.setus.get_error());
    // this.process_notify(this.notify_service.getuser_Id());
  }

  ngAfterViewInit() {
    console.log('LAST IN DASHBOARD COMP');
    // this.auth.tokenValue.next(true);
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
    //  if(localStorage.getItem('role') =='Admin'){
    //       this.auth.tokenValue.next(true);
    //       let data = localStorage.getItem('token');
    //       this.auth.login(data);
    //     }
  }
}

DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 3,
  vars: 0,
  consts: [[1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", 2, "padding", "0 3%"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  styles: [".alert-class .modal-content {\r\n    right: 212px;\r\n    top: 263px;\r\n    width: auto;\r\n\r\n  }\r\n  .alert-class .close {\r\n    color: white;\r\n  }\r\n\r\n  .alert-class .modal-content {\r\n    right: 212px;\r\n    top: 263px;\r\n    width: auto;\r\n\r\n  }\r\n  .alert-class .close {\r\n    color: white;\r\n  }\r\n  .fusion-charts{\r\n    width: 100% !important;\r\n  }\r\n  .analysis{\r\n    margin-right: 15px;\r\n    padding-left: 0px !important;\r\n  }\r\n  .analysis li {\r\n    list-style-type: none;\r\n    display: grid;\r\n}\r\n\r\n.red-alert{\r\n  transition: 0.5s all ease-in-out;\r\n}\r\n\r\n.ng-sidebar--right[_ngcontent-c8] {\r\n  bottom: 0;\r\n  right: 0;\r\n  top: 0;\r\n  position: relative !important;\r\n  overflow: hidden !important;\r\n}\r\n\r\n.ng-sidebar[_ngcontent-c7] {\r\n  -webkit-overflow-scrolling: touch;\r\n  overflow: auto;\r\n  pointer-events: auto;\r\n  position: relative !important;\r\n  touch-action: auto;\r\n  will-change: initial;\r\n  z-index: 2;\r\n  overflow: hidden !important;\r\n\r\n}\r\n.a {\r\n  top: 27%;\r\n  position: absolute;\r\n  width: 106px;\r\n  height: 40px;\r\n  background-color: #dd4b39;\r\n  color: white;\r\n  transform: rotate(90deg);\r\n  right: -33px;\r\n  z-index: 155;\r\n  text-decoration: none;\r\n  border-bottom-left-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n  padding-top: 0px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.a p , .b p{\r\n  font-size: 17px;\r\n\r\n}\r\n.b{\r\n  top: 77%;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  width: 106px;\r\n  height: 40px;\r\n  background-color: #00c0ef;\r\n  color: white;\r\n  transform: rotate(90deg);\r\n  right: -33px;\r\n  z-index: 155;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  border-bottom-left-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n  padding-top: 9px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.a p{\r\n  padding-top: 7px;\r\n}\r\n\r\n.box-container {\r\n  position: relative;\r\n  height: 150px;\r\n  padding: 45px 0;\r\n}\r\n.box-swap {\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 150px;\r\n  height: 60px;\r\n  padding: 15px 35px;\r\n  line-height: 30px;\r\n}\r\n.payer ul{\r\n  padding-inline-start: 0px !important;\r\n}\r\n.payer li{\r\n  list-style-type: none;\r\n}\r\n.touch-analysis{\r\n  list-style-type:none;\r\n}\r\n.status_code ul li:nth-child(1) i { color: #ef7e86; }\r\n.status_code ul li:nth-child(2) i { color: #e5d96c; }\r\n.status_code ul li:nth-child(3) i { color: #80c3dc; }\r\n.status_code ul li:nth-child(3) i { color: #80c3dc; }\r\n.status_code ul li:nth-child(4) i { color: #bea4dc; }\r\n.status_code ul li:nth-child(5) i { color: #94d39d; }\r\n.status_code ul li:nth-child(6) i { color: #e2b170; }\r\n\r\n\r\n.payer ul li:nth-child(1) i { color: #5d62b5; }\r\n.payer ul li:nth-child(2) i { color: #29c3be; }\r\n.payer ul li:nth-child(3) i { color: #f2726f; }\r\n.payer ul li:nth-child(4) i { color: #ffc533; }\r\n.payer ul li:nth-child(5) i { color: #62b58f; }\r\n.payer ul li:nth-child(6) i { color: #bc95df; }\r\n.payer ul li:nth-child(7) i { color: #67cdf2; }\r\n.payer ul li:nth-child(8) i { color: #5d62b5; }\r\n.payer ul li:nth-child(9) i { color: #29c3be; }\r\n.payer ul li:nth-child(10) i { color: #f2726f; }\r\n.payer ul li:nth-child(11) i { color: #5d62b5; }\r\n\r\n.payer li p {\r\n white-space: nowrap;\r\n    overflow: hidden;\r\n    /* max-width: 100px; */\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 5px;\r\n}\r\n.mb-3{\r\n  margin-bottom: 4% !important;\r\n}\r\n/* table tbody tr td:first-child{\r\n  padding-left: 10px !important;\r\n} */\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n  padding: 5px 19px 5px 0px !important;\r\n}\r\n.b {\r\n  width: 108px !important;\r\n  top: 77.2% !important;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7O0VBRWI7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixNQUFNO0VBQ04sNkJBQTZCO0VBQzdCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDViwyQkFBMkI7O0FBRTdCO0FBQ0E7RUFDRSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFFWix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUVaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBLG9DQUFvQyxjQUFjLEVBQUU7QUFDcEQsb0NBQW9DLGNBQWMsRUFBRTtBQUNwRCxvQ0FBb0MsY0FBYyxFQUFFO0FBQ3BELG9DQUFvQyxjQUFjLEVBQUU7QUFDcEQsb0NBQW9DLGNBQWMsRUFBRTtBQUNwRCxvQ0FBb0MsY0FBYyxFQUFFO0FBQ3BELG9DQUFvQyxjQUFjLEVBQUU7OztBQUdwRCw4QkFBOEIsY0FBYyxFQUFFO0FBQzlDLDhCQUE4QixjQUFjLEVBQUU7QUFDOUMsOEJBQThCLGNBQWMsRUFBRTtBQUM5Qyw4QkFBOEIsY0FBYyxFQUFFO0FBQzlDLDhCQUE4QixjQUFjLEVBQUU7QUFDOUMsOEJBQThCLGNBQWMsRUFBRTtBQUM5Qyw4QkFBOEIsY0FBYyxFQUFFO0FBQzlDLDhCQUE4QixjQUFjLEVBQUU7QUFDOUMsOEJBQThCLGNBQWMsRUFBRTtBQUM5QywrQkFBK0IsY0FBYyxFQUFFO0FBQy9DLCtCQUErQixjQUFjLEVBQUU7O0FBRS9DO0NBQ0MsbUJBQW1CO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1jbGFzcyAubW9kYWwtY29udGVudCB7XHJcbiAgICByaWdodDogMjEycHg7XHJcbiAgICB0b3A6IDI2M3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcblxyXG4gIH1cclxuICAuYWxlcnQtY2xhc3MgLmNsb3NlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5hbGVydC1jbGFzcyAubW9kYWwtY29udGVudCB7XHJcbiAgICByaWdodDogMjEycHg7XHJcbiAgICB0b3A6IDI2M3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcblxyXG4gIH1cclxuICAuYWxlcnQtY2xhc3MgLmNsb3NlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmZ1c2lvbi1jaGFydHN7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYW5hbHlzaXN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYW5hbHlzaXMgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLnJlZC1hbGVydHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm5nLXNpZGViYXItLXJpZ2h0W19uZ2NvbnRlbnQtYzhdIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nLXNpZGViYXJbX25nY29udGVudC1jN10ge1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB0b3VjaC1hY3Rpb246IGF1dG87XHJcbiAgd2lsbC1jaGFuZ2U6IGluaXRpYWw7XHJcbiAgei1pbmRleDogMjtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5hIHtcclxuICB0b3A6IDI3JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwNnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgcmlnaHQ6IC0zM3B4O1xyXG4gIHotaW5kZXg6IDE1NTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5hIHAgLCAuYiBwe1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbn1cclxuLmJ7XHJcbiAgdG9wOiA3NyU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTA2cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGMwZWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICByaWdodDogLTMzcHg7XHJcbiAgei1pbmRleDogMTU1O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZy10b3A6IDlweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYSBwe1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5ib3gtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBwYWRkaW5nOiA0NXB4IDA7XHJcbn1cclxuLmJveC1zd2FwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5wYXllciB1bHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBheWVyIGxpe1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4udG91Y2gtYW5hbHlzaXN7XHJcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbn1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCgxKSBpIHsgY29sb3I6ICNlZjdlODY7IH1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCgyKSBpIHsgY29sb3I6ICNlNWQ5NmM7IH1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCgzKSBpIHsgY29sb3I6ICM4MGMzZGM7IH1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCgzKSBpIHsgY29sb3I6ICM4MGMzZGM7IH1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCg0KSBpIHsgY29sb3I6ICNiZWE0ZGM7IH1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCg1KSBpIHsgY29sb3I6ICM5NGQzOWQ7IH1cclxuLnN0YXR1c19jb2RlIHVsIGxpOm50aC1jaGlsZCg2KSBpIHsgY29sb3I6ICNlMmIxNzA7IH1cclxuXHJcblxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDEpIGkgeyBjb2xvcjogIzVkNjJiNTsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDIpIGkgeyBjb2xvcjogIzI5YzNiZTsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDMpIGkgeyBjb2xvcjogI2YyNzI2ZjsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDQpIGkgeyBjb2xvcjogI2ZmYzUzMzsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDUpIGkgeyBjb2xvcjogIzYyYjU4ZjsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDYpIGkgeyBjb2xvcjogI2JjOTVkZjsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDcpIGkgeyBjb2xvcjogIzY3Y2RmMjsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDgpIGkgeyBjb2xvcjogIzVkNjJiNTsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDkpIGkgeyBjb2xvcjogIzI5YzNiZTsgfVxyXG4ucGF5ZXIgdWwgbGk6bnRoLWNoaWxkKDEwKSBpIHsgY29sb3I6ICNmMjcyNmY7IH1cclxuLnBheWVyIHVsIGxpOm50aC1jaGlsZCgxMSkgaSB7IGNvbG9yOiAjNWQ2MmI1OyB9XHJcblxyXG4ucGF5ZXIgbGkgcCB7XHJcbiB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIG1heC13aWR0aDogMTAwcHg7ICovXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubWItM3tcclxuICBtYXJnaW4tYm90dG9tOiA0JSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRhYmxlIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxke1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcbi50YWJsZT50Ym9keT50cj50ZCwgLnRhYmxlPnRib2R5PnRyPnRoLCAudGFibGU+dGZvb3Q+dHI+dGQsIC50YWJsZT50Zm9vdD50cj50aCwgLnRhYmxlPnRoZWFkPnRyPnRkLCAudGFibGU+dGhlYWQ+dHI+dGgge1xyXG4gIHBhZGRpbmc6IDVweCAxOXB4IDVweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYiB7XHJcbiAgd2lkdGg6IDEwOHB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA3Ny4yJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 9321:
/*!*************************************************************!*\
  !*** ./src/app/components/documents/documents.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsComponent": () => (/* binding */ DocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);

// import { saveAs } from 'file-saver';












function DocumentsComponent_tr_71_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r11 + 1);
  }
}
function DocumentsComponent_tr_71_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r13.pages - 1) * 15 + i_r11 + 1);
  }
}
function DocumentsComponent_tr_71_i_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_tr_71_i_25_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const doc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.download_file(doc_r10.id, doc_r10.file_name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_tr_71_i_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_tr_71_i_26_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](85);
      ctx_r23.display_files_list(i_r11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.open(_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_tr_71_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_tr_71_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const doc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.delete_file(doc_r10.id, doc_r10.file_name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_tr_71_i_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_tr_71_i_30_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](85);
      ctx_r29.delete_files_list(i_r11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.open(_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DocumentsComponent_tr_71_td_3_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DocumentsComponent_tr_71_td_4_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 48)(18, "p")(19, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_tr_71_Template_i_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const doc_r10 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](83);
      ctx_r32.view_doc_details(doc_r10.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.open(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_tr_71_Template_i_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const doc_r10 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](81);
      ctx_r34.edit_doc_details(doc_r10.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.open(_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DocumentsComponent_tr_71_i_25_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DocumentsComponent_tr_71_i_26_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DocumentsComponent_tr_71_i_29_Template, 1, 0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, DocumentsComponent_tr_71_i_30_Template, 1, 0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pages == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](doc_r10.document_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](doc_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", doc_r10.created_by_name, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 13, doc_r10.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", doc_r10.updated_by_name, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 16, doc_r10.updated_at_date, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](doc_r10.file_nos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", doc_r10.file_nos == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", doc_r10.file_nos > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", doc_r10.file_nos == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", doc_r10.file_nos > 1);
  }
}
function DocumentsComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 56)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DocumentsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Showing ", ctx_r2.skip_row, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("to ", ctx_r2.current_row, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" of ", ctx_r2.total_row, " records");
  }
}
function DocumentsComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Showing 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " of 0 records");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DocumentsComponent_ng_template_80_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Document Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_h4_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Edit Document Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_input_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function DocumentsComponent_ng_template_80_input_29_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.check_availability("new"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_input_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function DocumentsComponent_ng_template_80_input_30_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r51.check_availability("edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Document Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentsComponent_ng_template_80_div_31_div_1_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r41.formGroup.controls["document_name"].hasError("required"));
  }
}
function DocumentsComponent_ng_template_80_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Category is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentsComponent_ng_template_80_div_59_div_1_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r42.formGroup.controls["category"].hasError("required"));
  }
}
function DocumentsComponent_ng_template_80_label_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DocumentsComponent_ng_template_80_label_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add Additional Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " File is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_80_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentsComponent_ng_template_80_div_69_div_1_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r45.formGroup.controls["file"].hasError("required"));
  }
}
function DocumentsComponent_ng_template_80_div_70_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const edit_files_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](edit_files_r57);
  }
}
function DocumentsComponent_ng_template_80_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Files in Document:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table")(4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DocumentsComponent_ng_template_80_div_70_tr_5_Template, 3, 1, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r46.edit_file_details);
  }
}
function DocumentsComponent_ng_template_80_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_80_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const modal_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r58.file_upload("upload");
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r35.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r38.valid);
  }
}
function DocumentsComponent_ng_template_80_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_80_button_75_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const modal_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r61.file_upload("update");
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r35.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r38.valid);
  }
}
function DocumentsComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_80_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65);
      const modal_r35 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      modal_r35.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r64.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DocumentsComponent_ng_template_80_h4_4_Template, 2, 0, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DocumentsComponent_ng_template_80_h4_5_Template, 2, 0, "h4", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 63)(7, "form", 64, 65)(9, "div", 20)(10, "div", 66)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "User - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 20)(19, "div", 69)(20, "div", 70)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Document Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 72)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DocumentsComponent_ng_template_80_input_29_Template, 1, 0, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, DocumentsComponent_ng_template_80_input_30_Template, 1, 0, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, DocumentsComponent_ng_template_80_div_31_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 69)(33, "div", 70)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 72)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 73)(42, "select", 75)(43, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Medical Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "ERA/EOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Superbills / Chargesheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Patient Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Provider Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Miscellenous");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Billing Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, DocumentsComponent_ng_template_80_div_59_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 69)(61, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, DocumentsComponent_ng_template_80_label_62_Template, 4, 0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, DocumentsComponent_ng_template_80_label_63_Template, 2, 0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 72)(65, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 73)(68, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DocumentsComponent_ng_template_80_Template_input_change_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r66.file_validation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, DocumentsComponent_ng_template_80_div_69_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, DocumentsComponent_ng_template_80_div_70_Template, 6, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 77)(72, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_80_Template_button_click_72_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65);
      const modal_r35 = restoredCtx.$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      modal_r35.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r67.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, DocumentsComponent_ng_template_80_button_74_Template, 2, 1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, DocumentsComponent_ng_template_80_button_75_Template, 2, 1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r5.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 14, ctx_r5.myDate, "longDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["document_name"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["category"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["file"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.edit_file_details.length > 0);
  }
}
function DocumentsComponent_ng_template_82_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Document Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_82_div_5_label_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DocumentsComponent_ng_template_82_div_5_label_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add Additional Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_82_div_5_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Files in Document:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DocumentsComponent_ng_template_82_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63)(1, "form", 64, 65)(3, "div", 20)(4, "div", 66)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "User - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 20)(13, "div", 69)(14, "div", 70)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Document Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 72)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 69)(25, "div", 70)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 72)(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 69)(36, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, DocumentsComponent_ng_template_82_div_5_label_37_Template, 4, 0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, DocumentsComponent_ng_template_82_div_5_label_38_Template, 2, 0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 72)(40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, DocumentsComponent_ng_template_82_div_5_div_44_Template, 3, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r71 = ctx.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r70.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 8, ctx_r70.myDate, "longDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r71.document_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r71.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r70.edit_file_details.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r70.edit_file_details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r71.file_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r70.edit_file_details.length > 0);
  }
}
function DocumentsComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_82_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const modal_r68 = restoredCtx.$implicit;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      modal_r68.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r76.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DocumentsComponent_ng_template_82_h4_4_Template, 2, 0, "h4", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DocumentsComponent_ng_template_82_div_5_Template, 45, 11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 77)(7, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_82_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const modal_r68 = restoredCtx.$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      modal_r68.dismiss();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r78.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.edit_file_details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.document_names);
  }
}
function DocumentsComponent_ng_template_84_tr_10_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_84_tr_10_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r86);
      const down_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r85.download_file(ctx_r85.download_id, down_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DocumentsComponent_ng_template_84_tr_10_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td")(1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_84_tr_10_td_5_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r90);
      const down_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r88.add_to_delete($event, down_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DocumentsComponent_ng_template_84_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DocumentsComponent_ng_template_84_tr_10_i_4_Template, 1, 0, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DocumentsComponent_ng_template_84_tr_10_td_5_Template, 2, 0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const down_r82 = ctx.$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](down_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r80.list_type_nos == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r80.list_type_nos == 2);
  }
}
function DocumentsComponent_ng_template_84_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_84_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r92);
      const modal_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r91.delete_file(ctx_r91.delete_id, "down");
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r79.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r81.delete_selected.length == 0);
  }
}
function DocumentsComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58)(1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_84_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r95);
      const modal_r79 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r79.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 63)(7, "div", 20)(8, "table", 89)(9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DocumentsComponent_ng_template_84_tr_10_Template, 6, 3, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 77)(12, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_ng_template_84_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r95);
      const modal_r79 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r79.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DocumentsComponent_ng_template_84_button_14_Template, 2, 1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.list_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.download_file_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.list_type_nos == 2);
  }
}
const _c0 = function (a2, a3) {
  return {
    id: "docs",
    itemsPerPage: 15,
    currentPage: a2,
    totalItems: a3
  };
};
class DocumentsComponent {
  constructor(modalService, toastr, Jarwis, setus, http, auth) {
    this.modalService = modalService;
    this.toastr = toastr;
    this.Jarwis = Jarwis;
    this.setus = setus;
    this.http = http;
    this.auth = auth;
    this.maxSize = 9;
    this.ranges = {
      'Today': [moment__WEBPACK_IMPORTED_MODULE_0__(), moment__WEBPACK_IMPORTED_MODULE_0__()],
      'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days')],
      'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
      'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
      'This Month': [moment__WEBPACK_IMPORTED_MODULE_0__().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().endOf('month')],
      'Last Month': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')]
    };
    this.invalidDates = [moment__WEBPACK_IMPORTED_MODULE_0__().add(2, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().add(3, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().add(5, 'days')];
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-default',
      rangeInputFormat: 'MM/DD/YYYY',
      dateInputFormat: 'MM/DD/YYYY',
      showWeekNumbers: false,
      isAnimated: true,
      adaptivePosition: true
    });
    this.isInvalidDate = m => {
      return this.invalidDates.some(d => d.isSame(m, 'day'));
    };
    this.closeResult = '';
    this.edit_file_details = [];
    this.upload_file = [];
    this.document_list = [];
    this.pages = 0;
    this.delete_selected = [];
    this.list_type = '';
    this.list_type_nos = 0;
    this.download_file_list = [];
    this.download_id = 0;
    this.total_list = 0;
    this.delete_id = 0;
    this.myDate = new Date();
    this.sortByAsc = true;
    this.current_row = 0;
    this.alwaysShowCalendars = true;
  }
  open(content) {
    this.modalService.open(content, {
      centered: true,
      windowClass: 'dark-modal'
    }).result.then(result => {
      this.closeResult = `${result}`;
    }, reason => {
      this.download_id = 0, this.delete_id = 0;
      this.delete_selected = [];
      this.formGroup.reset();
      this.edit_file_details = [];
      this.formGroup.controls['file'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.upload_file = [];
    });
  }
  check_availability(type) {
    if (this.formGroup.value.document_name != '') {
      this.Jarwis.doc_name_validity(this.formGroup.value.document_name, type, this.doc_details_edit['id']).subscribe(data => this.handle_validation(data, type), error => this.handleError(error));
    }
  }
  handleError(error) {
    console.log(error);
  }
  handle_validation(data, type) {
    if (data.data == false) {
      this.toastr.errorToastr('Please change Document Name.', 'Name Present');
      if (type == 'edit') {
        this.formGroup.get('document_name').setValue(this.doc_details_edit['document_name']);
      } else {
        this.formGroup.get('document_name').setValue('');
      }
    }
  }
  file_validation(fileEvent) {
    this.upload_file = [];
    let allowed_type = ['pdf', 'csv', 'xlsx', 'doc', 'docx', 'png', 'jpg'];
    let file_valid = true;
    let file_nos = fileEvent.target.files.length;
    for (let i = 0; i < file_nos; i++) {
      let file_data = fileEvent.target.files[i];
      this.upload_file.push(file_data);
      let file_ext = file_data.name.split('.').pop();
      if (!allowed_type.includes(file_ext)) {
        file_valid = false;
      }
    }
    if (file_valid == false) {
      this.toastr.errorToastr('Please Upload valid File.', 'Invalid File Type');
      this.formGroup.get('file').setValue('');
      file_valid = true;
      this.upload_file = [];
    }
  }
  after_upload(data, type) {
    if (type == 'upload') {
      this.toastr.successToastr('Document Upload Successful', 'Upload Status');
    } else {
      this.toastr.successToastr('Document Details Updated', 'Update Status');
    }
    this.document_list = data.data.data;
    this.total_list = data.data.count;
    this.upload_file = [];
    this.formGroup.reset();
    //console.log(this.document_list);
  }

  clear() {
    this.formGroup.reset();
  }
  get_document_list_pagination(page) {
    this.get_document_list(page, this.search, this.sortByAsc, this.sorting_name);
  }
  get_document_list(page, searchValue, sort_by, sort_name) {
    this.pages = page;
    let page_count = 15;
    this.document_list = [];
    this.Jarwis.get_document_list(page, page_count, searchValue, sort_by, sort_name).subscribe(data => this.assign_data(data), error => this.handleError(error));
  }
  assign_data(data) {
    this.document_list = data.data.data;
    this.total_list = data.data.count;
    this.current_total = data.data.count;
    this.skip = data.skip + 1;
    this.skip_row = this.skip;
    this.current_row = this.skip + this.current_total - 1;
    this.total_row = data.data.count;
  }
  display_files_list(id) {
    this.list_type = "Downloadable File List";
    this.list_type_nos = 1;
    this.download_id = this.document_list[id]['id'];
    this.download_file_list = JSON.parse(this.document_list[id]['file_name']);
  }
  delete_files_list(id) {
    this.list_type = "Deletable File List";
    this.list_type_nos = 2;
    this.delete_id = this.document_list[id]['id'];
    this.download_file_list = JSON.parse(this.document_list[id]['file_name']);
  }
  // this.Jarwis.fetch_create_claims_export_data(this.setus.getId(), table_name, this.search, this.searchClaims, this.workordersearch).subscribe(
  //   data  => this.export_handler.create_claim_export_excel(data),
  //   error => this.error_handler(error)
  //   );
  download_file(id, file) {
    if (this.download_id == 0) {
      let value = JSON.parse(file);
      file = value[0];
    }
    this.Jarwis.download_doc_file(id, file).subscribe(data => this.handle_file_response(data, file), error => this.handleError(error));
  }
  handle_file_response(data, name) {
    console.log(data.data);
    console.log(name);
    window.open(data.data, "_blank");
    //return this.http.get(data.data, { responseType: 'blob' });
  }

  delete_file(id, file) {
    if (this.delete_id == 0) {
      let value = JSON.parse(file);
      file = value[0];
    } else {
      file = this.delete_selected;
    }
    this.Jarwis.delete_doc_file(id, file, this.pages, 15).subscribe(data => {
      this.assign_data(data), this.delete_selected = [];
      this.toastr.successToastr('Files Deletion Successful.', 'Files Deleted');
    }, error => this.handleError(error));
  }
  // {this.assign_data(data),this.update_file_list(data,id)}
  add_to_delete(event, name) {
    if (event.target.checked == true) {
      this.delete_selected.push(name);
    } else if (event.target.checked == false) {
      let ind = this.delete_selected.indexOf(name);
      this.delete_selected.splice(ind, 1);
    }
  }
  edit_doc_details(id) {
    let x = this.document_list.find(v => v.id == id);
    this.doc_details_edit = x;
    this.formGroup.get('document_name').setValue(x.document_name);
    this.formGroup.get('category').setValue(x.category);
    this.formGroup.controls['file'].setValidators([]);
    this.edit_file_details = JSON.parse(x['file_name']);
  }
  view_doc_details(id) {
    let x = this.document_list.find(v => v.id == id);
    this.doc_details_edit = x;
    this.Jarwis.view_doc_file(id).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }
  handleResponse(data) {
    // data.forEach(function (value) {
    //   this.document_names = value.document_name;
    //   this.categories = value.category;
    //   this.file_names = value.file_name;
    // });
    this.document_names = data;
    // this.doumentDetail = new documents();
    // this.doumentDetail.document_name = this.document_names;
    // this.doumentDetail.category = this.categories;
    // this.doumentDetail.file_name = this.file_names;
  }
  // file_update()
  // {
  //   console.log(this.upload_file);
  //   if(this.upload_file.length!=0)
  //   {
  //     let formData = new FormData();
  // const files: Array<File> = this.upload_file;
  // for(let i=0;i<files.length;i++)
  // {
  //   let app_name='file'+i;
  //   formData.append(app_name, this.upload_file[i]);
  // }
  // let nos=files.length.toString()
  // formData.append('file_nos',nos);
  // formData.append('user',this.setus.getId());
  // formData.append('doc_name',this.formGroup.value.document_name);
  // formData.append('doc_category',this.formGroup.value.category);
  // formData.append('type','update');
  // formData.append('upd_id',this.doc_details_edit['id']);
  //   this.Jarwis.upload_document_file(formData).subscribe(
  //     data => this.after_upload(data,'update'),
  //   error => console.log(error)
  //   );
  //   }
  // }
  file_upload(type) {
    let formData = new FormData();
    const files = this.upload_file;
    for (let i = 0; i < files.length; i++) {
      let app_name = 'file' + i;
      formData.append(app_name, this.upload_file[i]);
    }
    let nos = files.length.toString();
    formData.append('file_nos', nos);
    // formData.append('user',this.setus.getId());
    formData.append('doc_name', this.formGroup.value.document_name);
    formData.append('doc_category', this.formGroup.value.category);
    formData.append('type', type);
    formData.append('page_no', this.pages.toString());
    formData.append('page_count', '15');
    formData.append('practice_dbid', '3');
    if (type == 'update') {
      formData.append('upd_id', this.doc_details_edit['id']);
    }
    this.Jarwis.upload_document_file(formData).subscribe(data => this.after_upload(data, type), error => this.handleError(error));
  }
  sort_data(type) {
    if (type == 'name') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.document_list.sort((a, b) => a.document_name.localeCompare(b.document_name));
      } else {
        this.sortByAsc = true;
        this.document_list.sort((a, b) => b.document_name.localeCompare(a.document_name));
      }
    }
    if (type == 'category') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.document_list.sort((a, b) => a.category.localeCompare(b.category));
      } else {
        this.sortByAsc = true;
        this.document_list.sort((a, b) => b.category.localeCompare(a.category));
      }
    }
    if (type == 'file_no') {
      if (this.sortByAsc == true) {
        this.sortByAsc = false;
        this.document_list.sort((a, b) => a.file_nos.localeCompare(b.file_nos));
      } else {
        this.sortByAsc = true;
        this.document_list.sort((a, b) => b.file_nos.localeCompare(a.file_nos));
      }
    }
  }
  ngOnInit() {
    // this.auth.tokenValue.next(false);
    this.get_document_list(1, '', null, null);
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      document_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      file: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    this.searchformGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      document_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
    });
  }
  ngAfterViewInit() {
    console.log('LAST IN DOCUMENTS COMP');
    // this.auth.tokenValue.next(true);
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
  }
  document_search(page) {
    console.log(this.searchformGroup.value);
    this.search = this.searchformGroup.value;
    this.get_document_list(page, this.searchformGroup.value, null, null);
  }
  sorting_data(type) {
    this.sorting_name = type;
    if (this.sortByAsc == true) {
      this.sortByAsc = false;
      this.get_document_list(this.pages, this.search, this.sortByAsc, type);
    } else {
      this.sortByAsc = true;
      this.get_document_list(this.pages, this.search, this.sortByAsc, type);
    }
    // if(this.sortByAsc == true) {
    //   this.sortByAsc = false;
    //   this.pageChange(this.pages,table,this.sortByAsc,type,sorting_name,sorting_method,null,search);
    // } else {
    //   this.sortByAsc = true;
    //   this.pageChange(this.pages,table,this.sortByAsc,type,sorting_name,sorting_method,null,search);
    // }
  }
}

DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) {
  return new (t || DocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_2__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};
DocumentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DocumentsComponent,
  selectors: [["app-documents"]],
  decls: 86,
  vars: 13,
  consts: [[1, "row"], [1, "col-lg-9", "col-md-9", "col-sm-12", "col-xs-12", "col-md-offset-1", "col-lg-offset-1"], [1, "box", "no-shadow", "no-border", "no-bottom"], [1, "no-padding"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [1, "active"], ["href", "#tab_2", "data-toggle", "tab", 2, "padding-left", "0px"], [1, "fa", "fa-file-text"], [1, "tab-content", "no-padding"], ["id", "tab_2", 1, "tab-pane", "active"], [1, "box", "no-shadow", "no-border"], [1, "box-body", "no-padding"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "box-title", "list-heading"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12", "no-padding"], [1, "form-group", "col-lg-3"], ["type", "text", "formControlName", "created_at", "formControlName", "date", "id", "data-picker", "autocomplete", "off", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], ["type", "text", "formControlName", "document_name", 1, "form-control"], ["type", "text", "formControlName", "category", 1, "form-control"], [1, "col-lg-12", "form-group"], ["type", "button", "value", "Search", 1, "pull-right", "btn", "btn-search", 3, "click"], [1, "box", "no-shadow", "no-border", "mb-3"], [1, "", 2, "margin-top", "5px"], ["title", "Assign Claims", 1, "fa", "fa-user-plus", 2, "cursor", "pointer", 3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table", "no-padding"], [1, "table-responsive"], [1, "table-striped1", "table"], [2, "width", "1%"], [1, "font600", "line-height-24"], [1, "font600", "line-height-24", 3, "click"], [1, "fa", "fa-fw", "fa-sort"], [3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-md-6"], [1, "has-text-centered"], ["id", "docs", 3, "pageChange"], ["class", "col-md-6", "style", "text-align: right;", "class", "showing_count", 4, "ngIf"], ["upload_modal", ""], ["document_view_modal", ""], ["files_list_modal", ""], ["type", "checkbox", 2, "margin-top", "0px"], [1, "cur-pointer", "ar-blue"], [1, "fa", "fa-eye", 3, "click"], [2, "padding", "5px"], [1, "fa", "fa-edit", 3, "click"], ["class", "fa fa-download", 3, "click", 4, "ngIf"], ["class", "fa fa-trash", 3, "click", 4, "ngIf"], [1, "fa", "fa-download", 3, "click"], [1, "fa", "fa-trash", 3, "click"], ["align", "center", "colspan", "10"], [1, "showing_count", 2, "text-align", "right"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-title list-heading", "id", "modal-basic-title", 4, "ngIf"], ["class", "modal-title", "id", "modal-basic-title", 4, "ngIf"], [1, "modal-body"], [3, "formGroup"], ["modalform", "ngForm"], [1, "form-group"], [1, "ar-blue"], [1, "pull-right", "ar-blue", "font600"], [1, "row", "form-group"], [1, "col-sm-2"], [1, "ar-red"], [1, "col-sm-1"], [1, "col-sm-9"], ["type", "text", "class", "form-control", "formControlName", "document_name", "value", "", "autocomplete", "off", 3, "blur", 4, "ngIf"], ["formControlName", "category", 1, "form-control"], ["type", "file", "formControlName", "file", "value", "", "multiple", "", 1, "form-control", "file-upload", 3, "change"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "click"], ["type", "button", "class", "btn btn-info btn-flat btn-sm", "style", "margin-top:20px;", 3, "disabled", "click", 4, "ngIf"], ["id", "modal-basic-title", 1, "modal-title", "list-heading"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "text", "formControlName", "document_name", "value", "", "autocomplete", "off", 1, "form-control", 3, "blur"], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "disabled", "click"], ["class", "modal-body", 4, "ngFor", "ngForOf"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-title", "list-heading"], [1, "table", "no-border", "no-bottom"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", 2, "margin-top", "20px", 3, "click"], ["style", "cursor: pointer;", "title", "Download", "class", "fa fa-download", 3, "click", 4, "ngIf"], ["title", "Download", 1, "fa", "fa-download", 2, "cursor", "pointer", 3, "click"], ["type", "checkbox", 3, "click"]],
  template: function DocumentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Documents ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Find My Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18)(21, "form", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DocumentsComponent_Template_form_ngSubmit_21_listener() {
        return ctx.document_search(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 20)(23, "div", 21)(24, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Created Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DocumentsComponent_Template_input_ngModelChange_26_listener($event) {
        return ctx.selecteds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21)(28, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Document Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21)(32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 25)(36, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_Template_input_click_36_listener() {
        return ctx.document_search(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 27)(38, "div", 12)(39, "div", 13)(40, "div", 14)(41, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 17)(45, "p", 28)(46, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_Template_i_click_46_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](81);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.open(_r4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 18)(48, "div", 30)(49, "div", 31)(50, "table", 32)(51, "thead")(52, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "S.No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_Template_th_click_56_listener() {
        return ctx.sorting_data("document_name");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Document Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_Template_th_click_59_listener() {
        return ctx.sorting_data("category");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Category ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Created By|On ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Modified By|On");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentsComponent_Template_th_click_66_listener() {
        return ctx.sort_data("file_no");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Functions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, DocumentsComponent_tr_71_Template, 31, 19, "tr", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](72, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, DocumentsComponent_tr_73_Template, 4, 0, "tr", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 0)(75, "div", 40)(76, "div", 41)(77, "pagination-controls", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function DocumentsComponent_Template_pagination_controls_pageChange_77_listener($event) {
        return ctx.get_document_list_pagination($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, DocumentsComponent_div_78_Template, 8, 3, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, DocumentsComponent_div_79_Template, 8, 0, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, DocumentsComponent_ng_template_80_Template, 76, 17, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, DocumentsComponent_ng_template_82_Template, 9, 2, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, DocumentsComponent_ng_template_84_Template, 15, 3, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchformGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selecteds)("bsConfig", ctx.bsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](72, 7, ctx.document_list, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](10, _c0, ctx.pages, ctx.total_list)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.total_list == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.total_row != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.total_row == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginationControlsComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDaterangepickerInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginatePipe],
  styles: [".dark-modal .modal-content {\r\n    right: -178px;\r\n    top: 120px;\r\n\r\n  }\r\n  .dark-modal .close {\r\n    color: #000;\r\n    opacity: .2;\r\n}\r\n  .alert-class .modal-content {\r\n    right: 212px;\r\n    top: 263px;\r\n    width: auto;\r\n\r\n  }\r\n  .alert-class .close {\r\n    color: white;\r\n  }\r\n  .file-upload::before{\r\n    width: 0px;\r\n    height: 0px;\r\n    border: none;\r\n  }\r\n\r\n.table-striped1 thead tr  th i {\r\ncolor: #ccc;\r\ncursor: pointer;\r\n}\r\n.table-striped1 thead tr  th{\r\ncursor: pointer;\r\n}\r\n.mb-3{\r\n  margin-bottom: 5% !important;\r\n}\r\n.btn-search {\r\n  background-color: #00beda;\r\n  border-color: #00beda;\r\n  color: #fff;\r\n  max-width: 66px;\r\n  margin-top: 15px;\r\n}\r\n.btn-search:hover {\r\n  color: #fff !important;\r\n  background-color: #04a1b8 !important;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTs7RUFFWjtFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7QUFDZjtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXOztFQUViO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVGO0FBQ0EsV0FBVztBQUNYLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgICByaWdodDogLTE3OHB4O1xyXG4gICAgdG9wOiAxMjBweDtcclxuXHJcbiAgfVxyXG4gIC5kYXJrLW1vZGFsIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IC4yO1xyXG59XHJcbiAgLmFsZXJ0LWNsYXNzIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHJpZ2h0OiAyMTJweDtcclxuICAgIHRvcDogMjYzcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuXHJcbiAgfVxyXG4gIC5hbGVydC1jbGFzcyAuY2xvc2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZmlsZS11cGxvYWQ6OmJlZm9yZXtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4udGFibGUtc3RyaXBlZDEgdGhlYWQgdHIgIHRoIGkge1xyXG5jb2xvcjogI2NjYztcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkMSB0aGVhZCB0ciAgdGh7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWItM3tcclxuICBtYXJnaW4tYm90dG9tOiA1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiZWRhO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmVkYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXgtd2lkdGg6IDY2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uYnRuLXNlYXJjaDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhMWI4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 9034:
/*!***********************************************************!*\
  !*** ./src/app/components/practice/practice.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeComponent": () => (/* binding */ PracticeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_jarwis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/jarwis.service */ 1938);
/* harmony import */ var _Services_set_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/set-user.service */ 3038);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/auth.service */ 2557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);











function PracticeComponent_i_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_i_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_div_92_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Business Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_92_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.business_name.errors.required);
  }
}
function PracticeComponent_i_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_i_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_div_174_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address line 1 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_174_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.pay_address_1.errors.required);
  }
}
function PracticeComponent_div_181_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address line 1 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_181_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.pay_address_2.errors.required);
  }
}
function PracticeComponent_div_193_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_193_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.pay_city.errors.required);
  }
}
function PracticeComponent_div_201_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_201_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.pay_state.errors.required);
  }
}
function PracticeComponent_div_210_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Zip Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_210_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.pay_zip_code.errors.required);
  }
}
function PracticeComponent_i_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_i_221_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_div_233_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address line 1 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_233_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_233_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.primary_address_1.errors.required);
  }
}
function PracticeComponent_div_240_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address line 2 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_240_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_240_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.primary_address_2.errors.required);
  }
}
function PracticeComponent_div_252_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_252_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_252_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.f.primary_city.errors.required);
  }
}
function PracticeComponent_div_260_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_260_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.f.primary_city.errors.required);
  }
}
function PracticeComponent_div_269_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Zip Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_269_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_269_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.f.primary_zip_code.errors.required);
  }
}
function PracticeComponent_i_279_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_i_280_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_i_319_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_i_320_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_div_332_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address Line1 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_332_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_332_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.f.mail_address_1.errors.required);
  }
}
function PracticeComponent_div_339_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address Line2 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_339_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_339_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.f.mail_address_1.errors.required);
  }
}
function PracticeComponent_div_351_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_351_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_351_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.f.mail_city.errors.required);
  }
}
function PracticeComponent_div_359_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_359_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_359_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.f.mail_state.errors.required);
  }
}
function PracticeComponent_div_368_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Zip Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_368_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_368_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.f.mail_zip.errors.required);
  }
}
function PracticeComponent_i_378_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_i_379_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_i_414_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 150);
  }
}
function PracticeComponent_i_415_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 151);
  }
}
function PracticeComponent_div_427_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Practice Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_427_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_427_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.f.practice_name.errors.required);
  }
}
function PracticeComponent_div_450_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_450_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter Valid email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PracticeComponent_div_450_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PracticeComponent_div_450_div_1_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PracticeComponent_div_450_div_2_Template, 2, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.f.email.errors == null ? null : ctx_r31.f.email.errors.pattern);
  }
}
function PracticeComponent_ng_template_711_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154)(1, "div", 155)(2, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_ng_template_711_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.modalRef == null ? null : ctx_r58.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New SOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 159)(8, "div", 160)(9, "div", 161)(10, "div", 162)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 163)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 161)(19, "div", 162)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Claim Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 163)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 161)(28, "div", 162)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 163)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 164)(35, "div", 166)(36, "div", 167)(37, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 161)(53, "div", 162)(54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 163)(59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 161)(64, "div", 162)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 163)(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "textarea", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 176)(75, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_ng_template_711_Template_button_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r60.modalRef == null ? null : ctx_r60.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function PracticeComponent_ng_template_713_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154)(1, "div", 155)(2, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_ng_template_713_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r62.modalRef == null ? null : ctx_r62.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 159)(8, "div", 160)(9, "div", 161)(10, "div", 162)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 163)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 180)(19, "div", 162)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 163)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 180)(28, "div", 162)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 163)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 164)(35, "select", 181)(36, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Name 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Name 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Name 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Name 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Name 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Name 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Name 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 161)(53, "div", 162)(54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Agenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 163)(59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "textarea", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 176)(64, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_ng_template_713_Template_button_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r64.modalRef == null ? null : ctx_r64.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function PracticeComponent_ng_template_715_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154)(1, "div", 155)(2, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_ng_template_715_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r66.modalRef == null ? null : ctx_r66.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Client Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 159)(8, "div", 74)(9, "h5")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " : 08/2/2018 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 185)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "No of Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " : 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h5", 186)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Agenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Demo for practice module");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 176)(23, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_ng_template_715_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r68.modalRef == null ? null : ctx_r68.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
// import { validateConfig } from '@angular/router/src/config';
class PracticeComponent {
  constructor(Jarwis, setus, toastr, modalService, formBuilder, modal, auth) {
    this.Jarwis = Jarwis;
    this.setus = setus;
    this.toastr = toastr;
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.modal = modal;
    this.auth = auth;
    this.submitted = false;
    this.isCollapsed_business_details = false;
    this.isCollapsed_payTo_addresss = false;
    this.isCollapsed_primary_location = false;
    this.isCollapsed_Credentials = false;
    this.isCollapsed_mailing_address = false;
    this.isCollapsed_general_details = false;
    this.isCollapsed_practice_info = false;
    this.form = {
      business_name: null,
      address_1: null,
      address_2: null,
      // spec: null,
      // taxonomy: null,
      // billing_entry: null,
      // entity_type: null,
      city: null,
      state: null,
      zip_code: null,
      prim_address1: null,
      prim_address2: null,
      prim_city: null,
      prim_state: null,
      prim_zip_code: null,
      // tax_id: null,
      // npi: null,
      // medicare_ptan: null,
      // medicare_id: null,
      // medicare_id2: null,
      mail_address_1: null,
      mail_address_2: null,
      mail_city: null,
      mail_state: null,
      mail_zip: null,
      // practice_start: null,
      // primary_language: null,
      // providers: null,
      // facilities: null,
      // practice_name: null,
      // practice_desc: null,
      // avatar_name: null,
      // practice_link: null,
      emailid: null
      // phone_no: null,
      // fax_no: null
    };

    this.config = {
      displayKey: "description",
      search: true,
      limitTo: 1000,
      result: 'single'
    };
  }
  get f() {
    return this.formGroup.controls;
  }
  ngOnInit() {
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      business_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      speciality_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      taxanomy_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      billing_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      entity_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      pay_address_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      pay_address_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      pay_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      pay_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      pay_zip_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      primary_address_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      primary_address_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      primary_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      primary_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      primary_zip_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      tax_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      npi: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      medicare_ptan: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      medicare_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      medicare_id2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      mail_address_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      mail_address_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      mail_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      mail_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      mail_zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      practice_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      primary_language: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      providers: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      facilities: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      practice_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      practice_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      avatar_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      practice_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      fax_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Active')
    });
  }
  ngAfterViewInit() {
    console.log('LAST IN PRACTICE COMP');
    // this.auth.tokenValue.next(true);
    if (this.auth.tokenValue.value == true) {
      let data = localStorage.getItem('token');
      this.auth.login(data);
    }
  }
  onSubmit() {
    console.log(this.formGroup.value);
    this.submitted = true;
    if (this.formGroup.invalid) {
      console.log('error');
      return;
    }
    try {
      this.Jarwis.createpractice(this.formGroup.value, this.setus.getId()).subscribe(data => this.RespponseHandleCreatePractice(data), error => this.validation(error));
    } catch (error) {
      this.toastr.errorToastr('Error in creating new Practice.');
    }
  }
  RespponseHandleCreatePractice(data) {
    this.toastr.successToastr("Practice created was successfully!");
  }
  validation(error) {
    this.toastr.errorToastr("Fill the all required fields");
  }
  //Open and Close Modal
  open(content) {
    this.openModal(content);
    // this.modalService.open(content, { centered: true ,windowClass:'custom-class'}).result.then((result) => {
    // //   this.closeResult = `${result}`;
    // // }, (reason) => {
    // //   this.closeResult = `${this.getDismissReason()}`;
    // });
  }

  openModal(model_name) {
    console.log('IN');
    this.modalRef = this.modal.show(model_name, this.config);
  }
}
PracticeComponent.ɵfac = function PracticeComponent_Factory(t) {
  return new (t || PracticeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_jarwis_service__WEBPACK_IMPORTED_MODULE_0__.JarwisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_set_user_service__WEBPACK_IMPORTED_MODULE_1__.SetUserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};
PracticeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PracticeComponent,
  selectors: [["app-practice"]],
  decls: 717,
  vars: 55,
  consts: [[1, "mt-4", "col-8", "offset-s"], [1, "card"], [1, "row"], [1, "col-lg-1", "col-md-1"], [1, "content"], [1, "row", "no-padding"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "content", "no-padding"], [1, "row", "hide", 2, "margin-bottom", "30px"], [1, "col-lg-4", "no-padding", 2, "border-right", "1px solid #ccc"], [2, "font-weight", "600"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-default", "active"], ["type", "button", 1, "btn", "btn-default"], [1, "col-lg-4", 2, "border-right", "1px solid #ccc", "padding-bottom", "10px"], ["type", "radio", "name", "r", "id", "submitted"], ["for", "submitted", 2, "font-weight", "normal"], ["type", "radio", "name", "r", "id", "rejected"], ["for", "rejected", 2, "font-weight", "normal"], ["type", "radio", "name", "r", "id", "hold"], ["for", "hold", 2, "font-weight", "normal"], [1, "col-lg-4"], [1, "col-lg-9", "col-md-9", "col-sm-12", "col-xs-12", "col-lg-offset-1", "col-md-offset-1"], [1, "tabs", "nav-tabs-custom"], [1, "tabs", "nav", "nav-tabs"], [1, "active"], ["href", "#tab_4", "data-toggle", "tab"], [1, "fa", "fa-envelope"], [1, "tab-divider"], ["href", "#tab_2", "data-toggle", "tab", 2, "padding-left", "0px"], [1, "fa", "fa-file-text"], ["href", "#tab_3", "data-toggle", "tab", 2, "padding-left", "0px"], [1, "fa", "fa-clock-o"], ["href", "#tab_1", "data-toggle", "tab"], [1, "fa", "fa-medkit"], [1, "tab-content", "no-padding"], ["id", "tab_1", 1, "tab-pane"], [3, "formGroup", "ngSubmit"], [1, "box", "no-shadow", "no-border"], [1, "box-body", "no-padding"], [1, "box", "no-shadow", "no-bottom", 2, "border", "1px solid #d8dbe4"], [1, "box-header", 2, "border-bottom", "1px solid #e9ecf3"], [1, "box-title", "list-heading"], [1, "fa", "fa-bars", "ar-blue"], [1, "box-tools", "pull-right"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-box-tool", "collapsed", 2, "margin-left", "10px", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "fa fa-minus", 4, "ngIf"], [1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px", 3, "collapse", "isAnimated"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", "no-padding"], [1, "box-body"], [1, "col-lg-9", "no-padding"], [1, "form-group"], [1, "ar-red"], ["type", "text", "formControlName", "business_name", "name", "business_name", "id", "business_name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "speciality_id", "id", "spec", 1, "form-control"], ["formControlName", "taxanomy_id", "id", "taxonomy", 1, "form-control"], [1, "col-lg-9"], [1, "status-column", "status"], [1, "status"], [1, "status-radio"], [1, "custom-control", "custom-radio"], ["id", "true", "formControlName", "billing_entity", "type", "radio", "value", "true", 1, "custom-control-input"], ["for", "true", 1, "custom-control-label"], ["id", "false", "formControlName", "billing_entity", "type", "radio", "value", "false", 1, "custom-control-input"], ["for", "false", 1, "custom-control-label"], ["id", "group", "name", "entity_type", "formControlName", "entity_type", "type", "radio", "value", "Group", 1, "custom-control-input"], ["for", "group", 1, "custom-control-label"], ["id", "individual", "name", "entity_type", "formControlName", "entity_type", "type", "radio", "value", "Individual", 1, "custom-control-input"], ["for", "ndividual", 1, "custom-control-label"], ["type", "text", "formControlName", "pay_address_1", "name", "pay_address_1", "id", "pay_address_1", 1, "form-control"], ["type", "text", "formControlName", "pay_address_2", "name", "pay_address_2", "id", "pay_address_2", 1, "form-control"], [1, "col-lg-12", "no-padding"], [1, "col-lg-6"], ["type", "text", "formControlName", "pay_city", "name", "pay_city", "id", "city", 1, "form-control"], ["type", "text", "formControlName", "pay_state", "name", "pay_state", "id", "pay_state", 1, "form-control"], ["type", "text", "formControlName", "pay_zip_code", "name", "pay_zip_code", "id", "pay_zip_code", 1, "form-control"], ["type", "text", "formControlName", "primary_address_1", "name", "primary_address_1", "id", "primary_address_1", 1, "form-control"], ["type", "text", "formControlName", "primary_address_2", "name", "primary_address_2", "id", "primary_address_2", 1, "form-control"], ["type", "text", "formControlName", "primary_city", "name", "primary_city", "id", "primary_city", 1, "form-control"], ["type", "text", "formControlName", "primary_state", "name", "primary_state", "id", "primary_state", 1, "form-control"], ["type", "text", "formControlName", "primary_zip_code", "name", "primary_zip_code", "id", "primary_zip_code", 1, "form-control"], ["id", "box43", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px", 3, "collapse", "isAnimated"], ["type", "text", "formControlName", "tax_id", "id", "tax_id", 1, "form-control"], ["type", "text", "formControlName", "npi", "id", "npi", 1, "form-control"], ["type", "text", "formControlName", "medicare_ptan", "id", "medicare_ptan", 1, "form-control"], [1, "col-lg-5", "col-md-5", "col-sm-6", "col-xs-12", "no-padding"], [1, "col-lg-8", "no-padding"], ["type", "text", "formControlName", "medicare_id", "id", "medicare_id", 1, "form-control"], ["type", "text", "formControlName", "medicare_id2", "id", "medicare_id2", 1, "form-control"], ["id", "box44", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px", 3, "collapse", "isAnimated"], ["type", "text", "formControlName", "mail_address_1", "name", "mail_address_1", "id", "mail_address_1", 1, "form-control"], ["type", "text", "formControlName", "mail_address_2", "name", "mail_address_2", "id", "mail_address_2", 1, "form-control"], ["type", "text", "formControlName", "mail_city", "name", "mail_city", "id", "mail_city", 1, "form-control"], ["type", "text", "formControlName", "mail_state", "name", "mail_state", "id", "mail_state", 1, "form-control"], ["type", "text", "formControlName", "mail_zip", "name", "mail_zip", "id", "mail_zip", 1, "form-control"], ["id", "box45", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px", 3, "collapse", "isAnimated"], ["type", "text", "formControlName", "practice_start", "id", "practice_start", 1, "form-control"], ["type", "text", "formControlName", "primary_language", "id", "primary_language", 1, "form-control"], ["type", "text", "formControlName", "providers", "id", "providers", 1, "form-control"], ["type", "text", "formControlName", "facilities", "id", "facilities", 1, "form-control"], ["id", "box46", 1, "box-body", "no-padding", "collapse", "in", 2, "margin-top", "20px", 3, "collapse", "isAnimated"], ["_ngcontent-c5", "", 1, "ar-red"], ["type", "text", "formControlName", "practice_name", "name", "practice_name", "id", "practice_name", 1, "form-control"], ["type", "textarea", "formControlName", "practice_desc", "id", "practice_desc", 1, "form-control"], ["type", "text", "formControlName", "avatar_name", "id", "avatar_name", 1, "form-control"], ["type", "text", "formControlName", "practice_link", "id", "practice_link", 1, "form-control"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", "required", "", 1, "form-control"], ["type", "text", "formControlName", "phone_no", "id", "phone_no", 1, "form-control"], ["type", "text", "formControlName", "fax_no", "id", "fax_no", 1, "form-control"], [1, "box", "no-shadow", "no-bottom", "no-border"], [1, "col-lg-12", "text-center", 2, "margin-bottom", "20px", "margin-top", "20px"], ["type", "submit", 1, "btn", "btn-info", "submit-btn", 3, "disabled", "click"], ["type", "reset", 1, "btn", "btn-default"], ["id", "tab_2", 1, "tab-pane"], ["data-toggle", "modal", "data-target", "#modal_default", 1, "btn", "btn-info", "btn-xs", "btn-flat", 2, "margin-top", "4px", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "box-body", "no-padding", 2, "margin-top", "20px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "listing-table", "no-padding"], [1, "table-responsive"], [1, "table-striped1", "table"], [1, "font600", 2, "width", "15%"], [1, "font600", 2, "width", "30%"], [1, "font600"], [2, "width", "1%"], [1, "fa", "fa-file-text", "ar-blue"], ["id", "tab_3", 1, "tab-pane"], ["data-toggle", "modal", "data-target", "#modal_meeting", 1, "btn", "btn-info", "btn-flat", "btn-xs", 2, "margin-top", "4px", 3, "click"], [2, "width", "10%"], [2, "width", "16%"], [2, "width", "20%"], [2, "width", "5%"], ["data-toggle", "modal", "data-target", "#modal_meeting1", 1, "clickable-row", "cur-pointer", 3, "click"], ["data-content", "Name1, Name2, Name3, Name4", "id", "popoverOption", "rel", "popover", "data-placement", "right", 1, "cur-pointer"], ["data-content", "Name1, Name2, Name3, Name4, Name5, Name6", "id", "popoverOption1", "rel", "popover", "data-placement", "right", 1, "cur-pointer"], ["data-content", "Name1, Name2, Name3", "id", "popoverOption2", "rel", "popover", "data-placement", "right", 1, "cur-pointer"], ["data-content", "Name1, Name2, Name3, Name4", "id", "popoverOption3", "rel", "popover", "data-placement", "right", 1, "cur-pointer"], ["data-content", "Name1, Name2", "id", "popoverOption4", "rel", "popover", "data-placement", "right", 1, "cur-pointer"], ["data-content", "Name1, Name2, Name3, Name4, Name5", "id", "popoverOption5", "rel", "popover", "data-placement", "right", 1, "cur-pointer"], ["id", "tab_4", 1, "tab-pane", "active"], ["data-toggle", "modal", "data-target", "#", 1, "btn", "btn-info", "btn-flat", "btn-xs", 2, "margin-top", "4px"], [1, "table-striped1", "table", "table-hover"], ["data-toggle", "modal", "data-target", "#modal_meeting1", 1, "clickable-row", "cur-pointer", "font600", "ar-black", 3, "click"], [1, "col-lg-2", "col-md-2", "col-sm-12", "col-xs-12"], [1, "box-body", 2, "margin-top", "-3px"], ["modal_default", ""], ["modal_meeting", ""], ["modal_meeting1", ""], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-title", "list-heading"], [1, "modal-body"], [1, "col-lg-12"], [1, "row", "form-group"], [1, "col-sm-2", "text-center"], [1, "col-sm-1"], [1, "col-sm-9"], ["type", "text", 1, "form-control"], [1, "sop", "status"], [1, "form-group", "status-radio"], ["id", "submitted", "name", "r", "type", "radio", "value", "submitted", 1, "custom-control-input"], ["for", "submitted", 1, "custom-control-label"], ["id", "rejected", "name", "r", "type", "radio", "value", "rejected", 1, "custom-control-input"], ["for", "rejected", 1, "custom-control-label"], ["id", "hold", "name", "r", "type", "radio", "value", "hold", 1, "custom-control-input"], ["for", "hold", 1, "custom-control-label"], ["type", "file", 1, "form-control", "file-upload"], [1, "form-control", "notes"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-sm", "btn-flat", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "btn-flat"], ["type", "text", "placeholder", "MM-DD-YYYY", 1, "form-control"], [1, "row", "form-group", 2, "margin-top", "20px"], [1, "form-control"], [1, "form-control", "notes", 2, "height", "100px"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-flat", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-flat", "btn-sm"], [1, "pull-right"], [2, "margin-top", "20px"]],
  template: function PracticeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "section", 7)(8, "div", 8)(9, "div", 9)(10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Filter By");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Associates");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Vendors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Submitted");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Rejected");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Hold");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21)(32, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Sort By");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11)(35, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Associates");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Vendors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 2)(42, "div", 22)(43, "div", 23)(44, "ul", 24)(45, "li", 25)(46, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Emails ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "li")(52, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " SOP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "li")(58, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Meetings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li")(64, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Practice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 35)(68, "div", 36)(69, "form", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PracticeComponent_Template_form_ngSubmit_69_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 38)(71, "div", 39)(72, "div", 40)(73, "div", 41)(74, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Business Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 44)(78, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_78_listener() {
        return ctx.isCollapsed_business_details = !ctx.isCollapsed_business_details;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, PracticeComponent_i_79_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, PracticeComponent_i_80_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 48)(82, "div", 49)(83, "div", 50)(84, "div", 51)(85, "div", 52)(86, "div", 53)(87, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Doing Business As");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, PracticeComponent_div_92_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 53)(94, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Specialty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "select", 57)(97, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Specialty 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Specialty 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Specialty 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 53)(106, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Taxonomy");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "select", 58)(109, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Taxonomy 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Taxonomy 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Taxonomy 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 50)(118, "div", 51)(119, "div", 59)(120, "div", 53)(121, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Billing Entity");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 60)(124, "div", 61)(125, "div", 62)(126, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "label", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 53)(137, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Entity Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 60)(140, "div", 61)(141, "div", 62)(142, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Individual");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 38)(153, "div", 39)(154, "div", 40)(155, "div", 41)(156, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, " Pay to Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 44)(160, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_160_listener() {
        return ctx.isCollapsed_payTo_addresss = !ctx.isCollapsed_payTo_addresss;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](161, PracticeComponent_i_161_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](162, PracticeComponent_i_162_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 48)(164, "div", 49)(165, "div", 50)(166, "div", 51)(167, "div", 52)(168, "div", 53)(169, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Address Line1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](174, PracticeComponent_div_174_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 53)(176, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Address Line2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](181, PracticeComponent_div_181_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 50)(183, "div", 51)(184, "div", 52)(185, "div", 74)(186, "div", 75)(187, "div", 53)(188, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](193, PracticeComponent_div_193_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 75)(195, "div", 53)(196, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](201, PracticeComponent_div_201_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 74)(203, "div", 75)(204, "div", 53)(205, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Zip Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](210, PracticeComponent_div_210_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 38)(212, "div", 39)(213, "div", 40)(214, "div", 41)(215, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, " Primary Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "div", 44)(219, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_219_listener() {
        return ctx.isCollapsed_primary_location = !ctx.isCollapsed_primary_location;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](220, PracticeComponent_i_220_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](221, PracticeComponent_i_221_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 48)(223, "div", 49)(224, "div", 50)(225, "div", 51)(226, "div", 52)(227, "div", 53)(228, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Address Line1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](232, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](233, PracticeComponent_div_233_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 53)(235, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Address Line2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](240, PracticeComponent_div_240_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "div", 50)(242, "div", 51)(243, "div", 52)(244, "div", 74)(245, "div", 75)(246, "div", 53)(247, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](252, PracticeComponent_div_252_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 75)(254, "div", 53)(255, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](260, PracticeComponent_div_260_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 74)(262, "div", 75)(263, "div", 53)(264, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Zip Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](268, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](269, PracticeComponent_div_269_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "div", 38)(271, "div", 39)(272, "div", 40)(273, "div", 41)(274, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](275, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, " Credentials ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 44)(278, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_278_listener() {
        return ctx.isCollapsed_Credentials = !ctx.isCollapsed_Credentials;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](279, PracticeComponent_i_279_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](280, PracticeComponent_i_280_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 84)(282, "div", 49)(283, "div", 50)(284, "div", 51)(285, "div", 52)(286, "div", 53)(287, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Tax ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](289, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 53)(291, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "NPI");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](293, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 53)(295, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Medicare PTAN");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](297, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "div", 88)(299, "div", 51)(300, "div", 52)(301, "div", 89)(302, "div", 53)(303, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Medicaid ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](305, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div", 53)(307, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Medicaid ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](309, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 38)(311, "div", 39)(312, "div", 40)(313, "div", 41)(314, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](315, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, " Mailing Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "div", 44)(318, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_318_listener() {
        return ctx.isCollapsed_mailing_address = !ctx.isCollapsed_mailing_address;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](319, PracticeComponent_i_319_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](320, PracticeComponent_i_320_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "div", 92)(322, "div", 49)(323, "div", 50)(324, "div", 51)(325, "div", 52)(326, "div", 53)(327, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "Address Line1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](331, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](332, PracticeComponent_div_332_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "div", 53)(334, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "Address Line2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](338, "input", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](339, PracticeComponent_div_339_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "div", 50)(341, "div", 51)(342, "div", 52)(343, "div", 74)(344, "div", 75)(345, "div", 53)(346, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](350, "input", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](351, PracticeComponent_div_351_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "div", 75)(353, "div", 53)(354, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](358, "input", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](359, PracticeComponent_div_359_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "div", 74)(361, "div", 75)(362, "div", 53)(363, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](364, "Zip Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](367, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](368, PracticeComponent_div_368_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "div", 38)(370, "div", 39)(371, "div", 40)(372, "div", 41)(373, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](374, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, " General Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 44)(377, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_377_listener() {
        return ctx.isCollapsed_general_details = !ctx.isCollapsed_general_details;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](378, PracticeComponent_i_378_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](379, PracticeComponent_i_379_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "div", 98)(381, "div", 49)(382, "div", 50)(383, "div", 51)(384, "div", 52)(385, "div", 53)(386, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, "Practice Start Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](388, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "div", 53)(390, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, "Primary Language");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](392, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "div", 88)(394, "div", 51)(395, "div", 52)(396, "div", 89)(397, "div", 53)(398, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399, "Providers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](400, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "div", 53)(402, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](403, "Facilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](404, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "div", 38)(406, "div", 39)(407, "div", 40)(408, "div", 41)(409, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](410, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, " Practice Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "div", 44)(413, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_413_listener() {
        return ctx.isCollapsed_practice_info = !ctx.isCollapsed_practice_info;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](414, PracticeComponent_i_414_Template, 1, 0, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](415, PracticeComponent_i_415_Template, 1, 0, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "div", 103)(417, "div", 49)(418, "div", 50)(419, "div", 51)(420, "div", 52)(421, "div", 53)(422, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423, "Practice Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "span", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](426, "input", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](427, PracticeComponent_div_427_Template, 2, 1, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "div", 53)(429, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Practice Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](431, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](432, "div", 53)(433, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](434, "Avatar Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](435, "input", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "div", 53)(437, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, "Practice Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](439, "input", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](440, "div", 88)(441, "div", 51)(442, "div", 52)(443, "div", 52)(444, "div", 53)(445, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](446, "Email Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "span", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](448, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](449, "input", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](450, PracticeComponent_div_450_Template, 3, 2, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](451, "div", 53)(452, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](453, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](454, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "div", 53)(456, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](457, "Fax");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](458, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "div", 40)(460, "div", 39)(461, "div", 112)(462, "div", 39)(463, "div", 113)(464, "button", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_464_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](465, "Sumbit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "button", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](467, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](468, "div", 116)(469, "div", 38)(470, "div", 39)(471, "div", 40)(472, "div", 41)(473, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](474, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475, " SOP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](476, "div", 44)(477, "button", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_477_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](712);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r32));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](478, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](479, " New SOP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](480, "div", 119)(481, "div", 120)(482, "div", 121)(483, "table", 122)(484, "thead")(485, "tr")(486, "th", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "th", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](489, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](490, "th", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](491, "Claim No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "th", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](493, "Created By/On");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](494, "th", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "tbody")(496, "tr")(497, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](498, "08/22/2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](499, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](500, "SOP file name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](501, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](502, "CN424");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](503, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](504, "MAS/09/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](506, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](507, "tr")(508, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](509, "08/12/2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511, "SOP file name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](512, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](513, "CN357");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](514, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](515, "EDR/09/25/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](516, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](517, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](518, "tr")(519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](520, "09/06/2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](521, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](522, "SOP file name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](523, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](524, "CN234");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](525, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](526, "ADM/08/21/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](527, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](528, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "tr")(530, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](531, "08/22/2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](532, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](533, "SOP file name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](534, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](535, "CN234");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](536, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](537, "ERM/09/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](539, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](540, "tr")(541, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](542, "09/06/2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](543, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](544, "SOP file name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](545, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](546, "CN234");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](547, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](548, "ADM/08/21/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](550, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](551, "tr")(552, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](553, "08/22/2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](554, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](555, "SOP file name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](557, "CN234");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](558, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](559, "MAS/09/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](560, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](561, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](562, "div", 128)(563, "div", 38)(564, "div", 39)(565, "div", 40)(566, "div", 41)(567, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](568, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](569, " Meeting History ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](570, "div", 44)(571, "button", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_button_click_571_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](714);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r34));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](572, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](573, " New Meeting");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](574, "div", 119)(575, "div", 120)(576, "div", 121)(577, "table", 122)(578, "thead")(579, "tr")(580, "th", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](581, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](582, "th", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](583, "Topic");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](584, "th", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](585, "Agenda ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](586, "th", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](587, "Participants");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](588, "tbody")(589, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_589_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](590, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](591, "08/2/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](592, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](593, "Client Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](594, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](595, "Demo for practice module ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](596, "td")(597, "a", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](598, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](599, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_599_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](600, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](601, "08/2/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](602, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](603, "Client Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](604, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](605, "Product demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](606, "td")(607, "a", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](608, "6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](609, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_609_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](610, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](611, "08/2/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](612, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](613, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](614, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](615, "Clarification needed for admin side ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](616, "td")(617, "a", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](618, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](619, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_619_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](620, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](621, "08/2/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](622, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](623, "Client Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](624, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](625, "Demo for practice module ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](626, "td")(627, "a", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](628, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](629, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_629_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](630, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](631, "08/2/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](632, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](633, "Software Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](634, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](635, "Reviewing the AR tool ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](636, "td")(637, "a", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](638, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](639, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_639_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](640, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](641, "08/2/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](642, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](643, "Client Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](644, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](645, "Demo for practice module ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](646, "td")(647, "a", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](648, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "div", 141)(650, "div", 38)(651, "div", 39)(652, "div", 40)(653, "div", 41)(654, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](655, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](656, " Emails ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](657, "div", 44)(658, "button", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](659, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](660, " New Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](661, "div", 119)(662, "div", 49)(663, "div", 121)(664, "table", 143)(665, "tbody")(666, "tr", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_666_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](667, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](668, "David ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](669, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "Sub : Client Demo - Demo for practice module.. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](671, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](672, "08/22/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](673, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_673_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](674, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](675, "David Miller ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](676, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](677, "Sub : In-house meeting - Demo for practice module.. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](678, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](679, "08/22/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](680, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_680_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](682, "Mike ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](683, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](684, "Sub : Client Demo - Admin module demo..");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](685, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](686, "08/22/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](687, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_687_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](688, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](689, "Warner ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](690, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](691, "Sub : User Credentials - Please find the attached.. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](692, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](693, "08/22/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](694, "tr", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_694_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](695, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](696, "John Willamson ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](697, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](698, "Sub : Client Demo - Demo for practice module.. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](699, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](700, "08/22/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](701, "tr", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PracticeComponent_Template_tr_click_701_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](716);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](702, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](703, "David Miller ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](704, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](705, "Sub : Client Demo - Demo for practice module.. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](706, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](707, "08/22/2018 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](708, "div", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](709, "div", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](710, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](711, PracticeComponent_ng_template_711_Template, 79, 0, "ng-template", null, 147, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](713, PracticeComponent_ng_template_713_Template, 68, 0, "ng-template", null, 148, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](715, PracticeComponent_ng_template_715_Template, 25, 0, "ng-template", null, 149, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_business_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_business_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_business_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_business_details)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.business_name.touched || ctx.submitted) && ctx.f.business_name.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_payTo_addresss);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_payTo_addresss);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_payTo_addresss);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_payTo_addresss)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.pay_address_1.touched || ctx.submitted) && ctx.f.pay_address_1.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.pay_address_2.touched || ctx.submitted) && ctx.f.pay_address_2.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.pay_city.touched || ctx.submitted) && ctx.f.pay_city.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.pay_state.touched || ctx.submitted) && ctx.f.pay_state.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.pay_zip_code.touched || ctx.submitted) && ctx.f.pay_zip_code.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_primary_location);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_primary_location);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_primary_location);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_primary_location)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.primary_address_1.touched || ctx.submitted) && ctx.f.primary_address_1.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.primary_address_2.touched || ctx.submitted) && ctx.f.primary_address_2.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.primary_city.touched || ctx.submitted) && ctx.f.primary_city.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.primary_state.touched || ctx.submitted) && ctx.f.primary_state.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.primary_zip_code.touched || ctx.submitted) && ctx.f.primary_zip_code.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_Credentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_Credentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_Credentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_Credentials)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_mailing_address);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_mailing_address);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_mailing_address);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_mailing_address)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.mail_address_1.touched || ctx.submitted) && ctx.f.mail_address_1.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.mail_address_1.touched || ctx.submitted) && ctx.f.mail_address_1.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.mail_city.touched || ctx.submitted) && ctx.f.mail_city.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.mail_state.touched || ctx.submitted) && ctx.f.mail_state.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.mail_zip.touched || ctx.submitted) && ctx.f.mail_zip.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_general_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_general_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_general_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_general_details)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed_practice_info);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapsed_practice_info);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed_practice_info);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed_practice_info)("isAnimated", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.practice_name.touched || ctx.submitted) && ctx.f.practice_name.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f.email.touched || ctx.submitted) && ctx.f.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__.CollapseDirective],
  styles: [".modal-content[_ngcontent-%COMP%] {\r\n   right: 200px !important;\r\n    top: 80px !important;\r\n}\r\n.submit-btn[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n.notes[_ngcontent-%COMP%]{\r\n    resize: vertical;\r\n}\r\n.file-upload[_ngcontent-%COMP%]::before{\r\n    width: 0px;\r\n    height: 0px;\r\n    border: none;\r\n  }\r\n  .sop[_ngcontent-%COMP%]{\r\n      display: inline-flex;\r\n      width: 100%;\r\n  }\r\n  \r\n\r\n.custom-control[_ngcontent-%COMP%] {\r\n  padding-right: 15px;\r\n}\r\n.custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\r\n    color: #fff;\r\n    border-color: #804a96 !important;\r\n    background-color: #804a96!important;\r\n}\r\n.status-radio[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: -1px;\r\n}\r\n.status-column[_ngcontent-%COMP%] {\r\n  margin-top: 5px !important;\r\n}\r\n.status[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmFjdGljZS9wcmFjdGljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csdUJBQXVCO0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7TUFDSSxvQkFBb0I7TUFDcEIsV0FBVztFQUNmO0VBQ0E7Ozs7R0FJQztBQUNIOzs7Ozs7Ozs7R0FTRztBQUNIO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG1DQUFtQztBQUN2QztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcclxuICAgcmlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG4uc3VibWl0LWJ0bntcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4ubm90ZXN7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5maWxlLXVwbG9hZDo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICAuc29we1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC8qIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICBtYXJnaW46IDJweCAwIDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDFweFxcOTtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn0gKi9cclxuLyogLnByYWN0aWNle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ucHJhY3RpY2UgcCB7XHJcbiAgbWFyZ2luOiAtMnB4IDE1cHggMCA1cHg7XHJcbn1cclxuLnByYWN0aWNlIGlucHV0W3R5cGU9cmFkaW9dIHtcclxuICBtYXJnaW46IDRweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODA0YTk2ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA0YTk2IWltcG9ydGFudDtcclxufVxyXG4uc3RhdHVzLXJhZGlvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcbi5zdGF0dXMtY29sdW1uIHtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1439:
/*!*********************************************!*\
  !*** ./src/app/lazy/lazy-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyRoutingModule": () => (/* binding */ LazyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_practice_practice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/practice/practice.component */ 9034);
/* harmony import */ var _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/documents/documents.component */ 9321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'practice',
  component: _components_practice_practice_component__WEBPACK_IMPORTED_MODULE_1__.PracticeComponent
}, {
  path: 'documents',
  component: _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_2__.DocumentsComponent
}];
class LazyRoutingModule {}
LazyRoutingModule.ɵfac = function LazyRoutingModule_Factory(t) {
  return new (t || LazyRoutingModule)();
};
LazyRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LazyRoutingModule
});
LazyRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5644:
/*!*************************************!*\
  !*** ./src/app/lazy/lazy.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyModule": () => (/* binding */ LazyModule)
/* harmony export */ });
/* harmony import */ var _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-routing.module */ 1439);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_practice_practice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/practice/practice.component */ 9034);
/* harmony import */ var _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/documents/documents.component */ 9321);
/* harmony import */ var _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-module/common-module.module */ 6469);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-sidebar */ 2400);
/* harmony import */ var _Services_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/report.service */ 214);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);













class LazyModule {}
LazyModule.ɵfac = function LazyModule_Factory(t) {
  return new (t || LazyModule)();
};
LazyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: LazyModule
});
LazyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_Services_report_service__WEBPACK_IMPORTED_MODULE_6__.ReportService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_4__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarModule.forRoot(), ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LazyModule, {
    declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _components_practice_practice_component__WEBPACK_IMPORTED_MODULE_2__.PracticeComponent, _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_3__.DocumentsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyRoutingModule, _common_module_common_module_module__WEBPACK_IMPORTED_MODULE_4__.CommonModuleModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_lazy_lazy_module_ts.4180df07aabee55a.js.map