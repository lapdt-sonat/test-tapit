System.register("chunks:///_virtual/main",["./TimeController.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TimeController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,n,o,a,l,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Label,u=e.Component}],execute:function(){var c,s,p,f,b,m,y;o._RF.push({},"0ae69Sjvd1Df7D5aX887BjF","TimeController",void 0);var d=a.ccclass,g=a.property;e("TimeController",(c=d("TimeController"),s=g(l),p=g(l),c((m=t((b=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,i(t,"weekDayLabel",m,n(t)),i(t,"timerLabel",y,n(t)),t}r(t,e);var o=t.prototype;return o.update=function(){this.updateTimer()},o.updateTimer=function(){var e=new Date,t=e.getHours(),r=e.getMinutes(),i=e.getSeconds(),n="- "+(t>10?t:"0"+t)+":"+(r>10?r:"0"+r)+":"+(i>10?i:"0"+i)+" -";this.timerLabel.string=n},t}(u)).prototype,"weekDayLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(b.prototype,"timerLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=b))||f));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});