System.register(["./_virtual_cc-9de760eb.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t._}],execute:function(){var r;t("default",(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){void 0===t&&(t={});var n,o,i=void 0!==t?t:{};i.ready=new Promise((function(t,e){n=t,o=e}));var a=Object.assign({},i),s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),r&&(s=r),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var u,c,l=i.print||console.log.bind(console),f=i.printErr||console.error.bind(console);Object.assign(i,a),a=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(u=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&O("no native wasm support detected");var p,d,h,v,y,m,g,b,C,$=!1;function T(){var t=c.buffer;i.HEAP8=p=new Int8Array(t),i.HEAP16=h=new Int16Array(t),i.HEAP32=y=new Int32Array(t),i.HEAPU8=d=new Uint8Array(t),i.HEAPU16=v=new Uint16Array(t),i.HEAPU32=m=new Uint32Array(t),i.HEAPF32=g=new Float32Array(t),i.HEAPF64=b=new Float64Array(t)}var w,P,A=[],W=[],k=[],S=0,E=null;function O(t){i.onAbort&&i.onAbort(t),f(t="Aborted("+t+")"),$=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw o(e),e}function _(t){return t.startsWith("data:application/octet-stream;base64,")}function F(t){try{if(t==w&&u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}catch(t){O(t)}}function j(t,e,r){return function(t){return u||"function"!=typeof fetch?Promise.resolve().then((function(){return F(t)})):fetch(t,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((function(){return F(t)}))}(t).then((function(t){return WebAssembly.instantiate(t,e)})).then((function(t){return t})).then(r,(function(t){f("failed to asynchronously prepare wasm: "+t),O(t)}))}function R(t){for(;t.length>0;)t.shift()(i)}_(w="spine.wasm")||(P=w,w=i.locateFile?i.locateFile(P,s):s+P);var D="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(t,e,r){for(var n=e+r,o=e;t[o]&&!(o>=n);)++o;if(o-e>16&&t.buffer&&D)return D.decode(t.subarray(e,o));for(var i="";e<o;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i}function U(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var V=void 0;function x(t){for(var e="",r=t;d[r];)e+=V[d[r++]];return e}var H={},z={},B={};function L(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function M(t,e){var r;return(r={},r[t=L(t)]=function(){return e.apply(this,arguments)},r)[t]}function q(t,e){var r=M(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var G=void 0;function N(t){throw new G(t)}var J=void 0;function K(t){throw new J(t)}function Z(t,e,r){function n(e){var n=r(e);n.length!==t.length&&K("Mismatched type converter count");for(var o=0;o<t.length;++o)Q(t[o],n[o])}t.forEach((function(t){B[t]=e}));var o=new Array(e.length),i=[],a=0;e.forEach((function(t,e){z.hasOwnProperty(t)?o[e]=z[t]:(i.push(t),H.hasOwnProperty(t)||(H[t]=[]),H[t].push((function(){o[e]=z[t],++a===i.length&&n(o)})))})),0===i.length&&n(o)}function Q(t,e,r){if(void 0===r&&(r={}),!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||N('type "'+n+'" must have a positive integer typeid pointer'),z.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;N("Cannot register type '"+n+"' twice")}if(z[t]=e,delete B[t],H.hasOwnProperty(t)){var o=H[t];delete H[t],o.forEach((function(t){return t()}))}}function X(t){N(t.$$.ptrType.registeredClass.name+" instance already deleted")}var Y=!1;function tt(){}function et(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function rt(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=rt(t,e,r.baseClass);return null===n?null:r.downcast(n)}var nt={};var ot=[];function it(){for(;ot.length;){var t=ot.pop();t.$$.deleteScheduled=!1,t.delete()}}var at=void 0;var st={};function ut(t,e){return e.ptrType&&e.ptr||K("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&K("Both smartPtrType and smartPtr must be specified"),e.count={value:1},ct(Object.create(t,{$$:{value:e}}))}function ct(t){return"undefined"==typeof FinalizationRegistry?(ct=function(t){return t},t):(Y=new FinalizationRegistry((function(t){et(t.$$)})),tt=function(t){return Y.unregister(t)},(ct=function(t){var e=t.$$;if(e.smartPtr){var r={$$:e};Y.register(t,r,t)}return t})(t))}function lt(){}function ft(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||N("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function pt(t,e,r){i.hasOwnProperty(t)?((void 0===r||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[r])&&N("Cannot register public name '"+t+"' twice"),ft(i,t,t),i.hasOwnProperty(r)&&N("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[t].overloadTable[r]=e):(i[t]=e,void 0!==r&&(i[t].numArguments=r))}function dt(t,e,r,n,o,i,a,s){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function ht(t,e,r){for(;e!==r;)e.upcast||N("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function vt(t,e){if(null===e)return this.isReference&&N("null is not a valid "+this.name),0;e.$$||N('Cannot pass "'+It(e)+'" as a '+this.name),e.$$.ptr||N("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return ht(e.$$.ptr,r,this.registeredClass)}function yt(t,e){var r;if(null===e)return this.isReference&&N("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||N('Cannot pass "'+It(e)+'" as a '+this.name),e.$$.ptr||N("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&N("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=ht(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&N("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:N("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var o=e.clone();r=this.rawShare(r,jt.toHandle((function(){o.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:N("Unsupporting sharing policy")}return r}function mt(t,e){if(null===e)return this.isReference&&N("null is not a valid "+this.name),0;e.$$||N('Cannot pass "'+It(e)+'" as a '+this.name),e.$$.ptr||N("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&N("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return ht(e.$$.ptr,r,this.registeredClass)}function gt(t){return this.fromWireType(y[t>>2])}function bt(t,e,r,n,o,i,a,s,u,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=l,o||void 0!==e.baseClass?this.toWireType=yt:n?(this.toWireType=vt,this.destructorFunction=null):(this.toWireType=mt,this.destructorFunction=null)}var Ct=[];function $t(t){var e=Ct[t];return e||(t>=Ct.length&&(Ct.length=t+1),Ct[t]=e=C.get(t)),e}function Tt(t,e,r){return t.includes("j")?function(t,e,r){var n=i["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}(t,e,r):$t(e).apply(null,r)}function wt(t,e){var r,n,o,i=(t=x(t)).includes("j")?(r=t,n=e,o=[],function(){return o.length=0,Object.assign(o,arguments),Tt(r,n,o)}):$t(e);return"function"!=typeof i&&N("unknown function pointer with signature "+t+": "+e),i}var Pt=void 0;function At(t){var e=Xt(t),r=x(e);return Qt(e),r}function Wt(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||z[e]||(B[e]?B[e].forEach(t):(r.push(e),n[e]=!0))})),new Pt(t+": "+r.map(At).join([", "]))}function kt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function St(t,e,r,n,o){var i=e.length;i<2&&N("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,s=!1,u=1;u<e.length;++u)if(null!==e[u]&&void 0===e[u].destructorFunction){s=!0;break}var c="void"!==e[0].name,l=i-2,f=new Array(l),p=[],d=[];return function(){var r;arguments.length!==l&&N("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=o,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var i=0;i<l;++i)f[i]=e[i+2].toWireType(d,arguments[i]),p.push(f[i]);var u=n.apply(null,p);function h(t){if(s)kt(d);else for(var n=a?1:2;n<e.length;n++){var o=1===n?r:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(o)}if(c)return e[0].fromWireType(t)}return h(u)}}function Et(t,e){for(var r=[],n=0;n<t;n++)r.push(m[e+4*n>>2]);return r}function Ot(t,e,r){return t instanceof Object||N(r+' with invalid "this": '+t),t instanceof e.registeredClass.constructor||N(r+' incompatible with "this" of type '+t.constructor.name),t.$$.ptr||N("cannot call emscripten binding method "+r+" on deleted object"),ht(t.$$.ptr,t.$$.ptrType.registeredClass,e.registeredClass)}var _t=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.has=function(t){return void 0!==this.allocated[t]},this.allocate=function(t){var e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function Ft(t){t>=_t.reserved&&0==--_t.get(t).refcount&&_t.free(t)}var jt={toValue:function(t){return t||N("Cannot use deleted val. handle = "+t),_t.get(t).value},toHandle:function(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return _t.allocate({refcount:1,value:t})}}};function Rt(t,e,r){switch(e){case 0:return function(t){var e=r?p:d;return this.fromWireType(e[t])};case 1:return function(t){var e=r?h:v;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=r?y:m;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function Dt(t,e){var r=z[t];return void 0===r&&N(e+" has unknown type "+At(t)),r}function It(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Ut(t,e){switch(e){case 2:return function(t){return this.fromWireType(g[t>>2])};case 3:return function(t){return this.fromWireType(b[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Vt(t,e,r){switch(e){case 0:return r?function(t){return p[t]}:function(t){return d[t]};case 1:return r?function(t){return h[t>>1]}:function(t){return v[t>>1]};case 2:return r?function(t){return y[t>>2]}:function(t){return m[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var xt="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Ht(t,e){for(var r=t,n=r>>1,o=n+e/2;!(n>=o)&&v[n];)++n;if((r=n<<1)-t>32&&xt)return xt.decode(d.subarray(t,r));for(var i="",a=0;!(a>=e/2);++a){var s=h[t+2*a>>1];if(0==s)break;i+=String.fromCharCode(s)}return i}function zt(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,o=(r-=2)<2*t.length?r/2:t.length,i=0;i<o;++i){var a=t.charCodeAt(i);h[e>>1]=a,e+=2}return h[e>>1]=0,e-n}function Bt(t){return 2*t.length}function Lt(t,e){for(var r=0,n="";!(r>=e/4);){var o=y[t+4*r>>2];if(0==o)break;if(++r,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n}function Mt(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,o=n+r-4,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),y[e>>2]=a,(e+=4)+4>o)break}return y[e>>2]=0,e-n}function qt(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}function Gt(t){var e=t-c.buffer.byteLength+65535>>>16;try{return c.grow(e),T(),1}catch(t){}}var Nt=[null,[],[]];!function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);V=t}(),G=i.BindingError=q(Error,"BindingError"),J=i.InternalError=q(Error,"InternalError"),lt.prototype.isAliasOf=function(t){if(!(this instanceof lt))return!1;if(!(t instanceof lt))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,o=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return e===n&&r===o},lt.prototype.clone=function(){if(this.$$.ptr||X(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=ct(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},lt.prototype.delete=function(){this.$$.ptr||X(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&N("Object already scheduled for deletion"),tt(this),et(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},lt.prototype.isDeleted=function(){return!this.$$.ptr},lt.prototype.deleteLater=function(){return this.$$.ptr||X(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&N("Object already scheduled for deletion"),ot.push(this),1===ot.length&&at&&at(it),this.$$.deleteScheduled=!0,this},i.getInheritedInstanceCount=function(){return Object.keys(st).length},i.getLiveInheritedInstances=function(){var t=[];for(var e in st)st.hasOwnProperty(e)&&t.push(st[e]);return t},i.flushPendingDeletes=it,i.setDelayFunction=function(t){at=t,ot.length&&at&&at(it)},bt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},bt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},bt.prototype.argPackAdvance=8,bt.prototype.readValueFromPointer=gt,bt.prototype.deleteObject=function(t){null!==t&&t.delete()},bt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=function(t,e){for(void 0===e&&N("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),st[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function o(){return this.isSmartPointer?ut(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):ut(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var i,a=this.registeredClass.getActualType(e),s=nt[a];if(!s)return o.call(this);i=this.isConst?s.constPointerType:s.pointerType;var u=rt(e,this.registeredClass,i.registeredClass);return null===u?o.call(this):this.isSmartPointer?ut(i.registeredClass.instancePrototype,{ptrType:i,ptr:u,smartPtrType:this,smartPtr:t}):ut(i.registeredClass.instancePrototype,{ptrType:i,ptr:u})},Pt=i.UnboundTypeError=q(Error,"UnboundTypeError"),_t.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),_t.reserved=_t.allocated.length,i.count_emval_handles=function(){for(var t=0,e=_t.reserved;e<_t.allocated.length;++e)void 0!==_t.allocated[e]&&++t;return t};var Jt={o:function(){return 0},x:function(){return 0},y:function(){},t:function(){},C:function(t,e,r,n,o){var i=U(r);Q(t,{name:e=x(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:o},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=p;else if(2===r)n=h;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=y}return this.fromWireType(n[t>>i])},destructorFunction:null})},b:function(t,e,r,n,o,a,s,u,c,l,f,p,d){f=x(f),a=wt(o,a),u&&(u=wt(s,u)),l&&(l=wt(c,l)),d=wt(p,d);var h=L(f);pt(h,(function(){Wt("Cannot construct "+f+" due to unbound types",[n])})),Z([t,e,r],n?[n]:[],(function(e){var r,o;e=e[0],o=n?(r=e.registeredClass).instancePrototype:lt.prototype;var s=M(h,(function(){if(Object.getPrototypeOf(this)!==c)throw new G("Use 'new' to construct "+f);if(void 0===p.constructor_body)throw new G(f+" has no accessible constructor");var t=p.constructor_body[arguments.length];if(void 0===t)throw new G("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(p.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),c=Object.create(o,{constructor:{value:s}});s.prototype=c;var p=new dt(f,s,c,d,r,a,u,l);p.baseClass&&(void 0===p.baseClass.__derivedClasses&&(p.baseClass.__derivedClasses=[]),p.baseClass.__derivedClasses.push(p));var v=new bt(f,p,!0,!1,!1),y=new bt(f+"*",p,!1,!1,!1),m=new bt(f+" const*",p,!1,!0,!1);return nt[t]={pointerType:y,constPointerType:m},function(t,e,r){i.hasOwnProperty(t)||K("Replacing nonexistant public symbol"),i[t].overloadTable,i[t]=e,i[t].argCount=r}(h,s),[v,y,m]}))},f:function(t,r,n,o,i,a,s){var u=Et(n,o);r=x(r),a=wt(i,a),Z([],[t],(function(t){var o=(t=t[0]).name+"."+r;function i(){Wt("Cannot call "+o+" due to unbound types",u)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var c=t.registeredClass.constructor;return void 0===c[r]?(i.argCount=n-1,c[r]=i):(ft(c,r,o),c[r].overloadTable[n-1]=i),Z([],u,(function(i){var u=[i[0],null].concat(i.slice(1)),l=St(o,u,null,a,s);if(void 0===c[r].overloadTable?(l.argCount=n-1,c[r]=l):c[r].overloadTable[n-1]=l,t.registeredClass.__derivedClasses)for(var f,p=e(t.registeredClass.__derivedClasses);!(f=p()).done;){var d=f.value;d.constructor.hasOwnProperty(r)||(d.constructor[r]=l)}return[]})),[]}))},j:function(t,e,r,n,o,i,a,s){e=x(e),i=wt(o,i),Z([],[t],(function(t){var o=(t=t[0]).name+"."+e,u={get:function(){Wt("Cannot access "+o+" due to unbound types",[r])},enumerable:!0,configurable:!0};return u.set=s?function(){Wt("Cannot access "+o+" due to unbound types",[r])}:function(){N(o+" is a read-only property")},Object.defineProperty(t.registeredClass.constructor,e,u),Z([],[r],(function(r){r=r[0];var o={get:function(){return r.fromWireType(i(n))},enumerable:!0};return s&&(s=wt(a,s),o.set=function(t){var e=[];s(n,r.toWireType(e,t)),kt(e)}),Object.defineProperty(t.registeredClass.constructor,e,o),[]})),[]}))},c:function(t,e,r,n,o,i){e>0||O(undefined);var a=Et(e,r);o=wt(n,o),Z([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new G("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){Wt("Cannot construct "+t.name+" due to unbound types",a)},Z([],a,(function(n){return n.splice(1,0,null),t.registeredClass.constructor_body[e-1]=St(r,n,null,o,i),[]})),[]}))},a:function(t,e,r,n,o,i,a,s){var u=Et(r,n);e=x(e),i=wt(o,i),Z([],[t],(function(t){var n=(t=t[0]).name+"."+e;function o(){Wt("Cannot call "+n+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(o.argCount=r-2,o.className=t.name,c[e]=o):(ft(c,e,n),c[e].overloadTable[r-2]=o),Z([],u,(function(o){var s=St(n,o,t,i,a);return void 0===c[e].overloadTable?(s.argCount=r-2,c[e]=s):c[e].overloadTable[r-2]=s,[]})),[]}))},e:function(t,e,r,n,o,i,a,s,u,c){e=x(e),o=wt(n,o),Z([],[t],(function(t){var n=(t=t[0]).name+"."+e,l={get:function(){Wt("Cannot access "+n+" due to unbound types",[r,a])},enumerable:!0,configurable:!0};return l.set=u?function(){Wt("Cannot access "+n+" due to unbound types",[r,a])}:function(){N(n+" is a read-only property")},Object.defineProperty(t.registeredClass.instancePrototype,e,l),Z([],u?[r,a]:[r],(function(r){var a=r[0],l={get:function(){var e=Ot(this,t,n+" getter");return a.fromWireType(o(i,e))},enumerable:!0};if(u){u=wt(s,u);var f=r[1];l.set=function(e){var r=Ot(this,t,n+" setter"),o=[];u(c,r,f.toWireType(o,e)),kt(o)}}return Object.defineProperty(t.registeredClass.instancePrototype,e,l),[]})),[]}))},A:function(t,e){Q(t,{name:e=x(e),fromWireType:function(t){var e=jt.toValue(t);return Ft(t),e},toWireType:function(t,e){return jt.toHandle(e)},argPackAdvance:8,readValueFromPointer:gt,destructorFunction:null})},k:function(t,e,r,n){var o=U(r);function i(){}e=x(e),i.values={},Q(t,{name:e,constructor:i,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:Rt(e,o,n),destructorFunction:null}),pt(e,i)},d:function(t,e,r){var n=Dt(t,"enum");e=x(e);var o=n.constructor,i=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:M(n.name+"_"+e,(function(){}))}});o.values[r]=i,o[e]=i},p:function(t,e,r){var n=U(r);Q(t,{name:e=x(e),fromWireType:function(t){return t},toWireType:function(t,e){return e},argPackAdvance:8,readValueFromPointer:Ut(e,n),destructorFunction:null})},l:function(t,e,r,n){e=x(e);var o=U(r),i=function(t){return t};if(0===n){var a=32-8*r;i=function(t){return t<<a>>>a}}var s=e.includes("unsigned");Q(t,{name:e,fromWireType:i,toWireType:s?function(t,e){return this.name,e>>>0}:function(t,e){return this.name,e},argPackAdvance:8,readValueFromPointer:Vt(e,o,0!==n),destructorFunction:null})},i:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(t){var e=m,r=e[t>>=2],o=e[t+1];return new n(e.buffer,o,r)}Q(t,{name:r=x(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},q:function(t,e){var r="std::string"===(e=x(e));Q(t,{name:e,fromWireType:function(t){var e,n,o=m[t>>2],i=t+4;if(r)for(var a=i,s=0;s<=o;++s){var u=i+s;if(s==o||0==d[u]){var c=(n=a)?I(d,n,u-a):"";void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),a=u+1}}else{var l=new Array(o);for(s=0;s<o;++s)l[s]=String.fromCharCode(d[i+s]);e=l.join("")}return Qt(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var o="string"==typeof e;o||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||N("Cannot pass non-string to std::string"),n=r&&o?function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}(e):e.length;var i=Zt(4+n+1),a=i+4;if(m[i>>2]=n,r&&o)!function(t,e,r,n){if(!(n>0))return 0;for(var o=r+n-1,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),a<=127){if(r>=o)break;e[r++]=a}else if(a<=2047){if(r+1>=o)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=o)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=o)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,d,a,n+1);else if(o)for(var s=0;s<n;++s){var u=e.charCodeAt(s);u>255&&(Qt(a),N("String has UTF-16 code units that do not fit in 8 bits")),d[a+s]=u}else for(s=0;s<n;++s)d[a+s]=e[s];return null!==t&&t.push(Qt,i),i},argPackAdvance:8,readValueFromPointer:gt,destructorFunction:function(t){Qt(t)}})},m:function(t,e,r){var n,o,i,a,s;r=x(r),2===e?(n=Ht,o=zt,a=Bt,i=function(){return v},s=1):4===e&&(n=Lt,o=Mt,a=qt,i=function(){return m},s=2),Q(t,{name:r,fromWireType:function(t){for(var r,o=m[t>>2],a=i(),u=t+4,c=0;c<=o;++c){var l=t+4+c*e;if(c==o||0==a[l>>s]){var f=n(u,l-u);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),u=l+e}}return Qt(t),r},toWireType:function(t,n){"string"!=typeof n&&N("Cannot pass non-string to C++ string type "+r);var i=a(n),u=Zt(4+i+e);return m[u>>2]=i>>s,o(n,u+4,i+e),null!==t&&t.push(Qt,u),u},argPackAdvance:8,readValueFromPointer:gt,destructorFunction:function(t){Qt(t)}})},D:function(t,e){Q(t,{isVoid:!0,name:e=x(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},F:function(t,e,r){t=jt.toValue(t),e=Dt(e,"emval::as");var n=[],o=jt.toHandle(n);return m[r>>2]=o,e.toWireType(n,t)},r:Ft,G:function(t){t>4&&(_t.get(t).refcount+=1)},E:function(t){kt(jt.toValue(t)),Ft(t)},h:function(t,e){var r=(t=Dt(t,"_emval_take_value")).readValueFromPointer(e);return jt.toHandle(r)},g:function(){O("")},z:function(t,e,r){d.copyWithin(t,e,e+r)},u:function(t){var e=d.length,r=2147483648;if((t>>>=0)>r)return!1;for(var n,o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,t+100663296),Gt(Math.min(r,(n=Math.max(t,i))+(65536-n%65536)%65536)))return!0}return!1},n:function(){return 52},w:function(){return 52},s:function(){return 70},v:function(t,e,r,n){for(var o,i,a,s=0,u=0;u<r;u++){var c=m[e>>2],p=m[e+4>>2];e+=8;for(var h=0;h<p;h++)o=t,i=d[c+h],a=void 0,a=Nt[o],0===i||10===i?((1===o?l:f)(I(a,0)),a.length=0):a.push(i);s+=p}return m[n>>2]=s,0},H:function(){var t=i.SpineWasmUtil,e=t.getCurrentListenerID(),r=t.getCurrentTrackEntry(),n=t.getCurrentEvent(),o=t.getCurrentEventType();globalThis.TrackEntryListeners.emitListener(e,r,n,o.value)},B:function(){var t=i.SpineWasmUtil,e=t.getCurrentListenerID(),r=t.getCurrentEventType(),n=t.getCurrentTrackEntry(),o=t.getCurrentEvent();globalThis.TrackEntryListeners.emitTrackEntryListener(e,n,o,r.value)}};!function(){var t,e,r,n,a={a:Jt};function s(t){var e,r=t.exports;return i.asm=r,c=i.asm.I,T(),C=i.asm.K,e=i.asm.J,W.unshift(e),function(){if(S--,i.monitorRunDependencies&&i.monitorRunDependencies(S),0==S&&E){var t=E;E=null,t()}}(),r}if(S++,i.monitorRunDependencies&&i.monitorRunDependencies(S),i.instantiateWasm)try{return i.instantiateWasm(a,s)}catch(t){f("Module.instantiateWasm callback failed with error: "+t),o(t)}(t=u,e=w,r=a,n=function(t){s(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||_(e)||"function"!=typeof fetch?j(e,r,n):fetch(e,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(n,(function(t){return f("wasm streaming compile failed: "+t),f("falling back to ArrayBuffer instantiation"),j(e,r,n)}))}))).catch(o)}();var Kt,Zt=function(){return(Zt=i.asm.L).apply(null,arguments)},Qt=function(){return(Qt=i.asm.M).apply(null,arguments)},Xt=function(){return(Xt=i.asm.N).apply(null,arguments)};function Yt(){function t(){Kt||(Kt=!0,i.calledRun=!0,$||(R(W),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),k.unshift(t);var t;R(k)}()))}S>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),A.unshift(t);var t;R(A)}(),S>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.O).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.P).apply(null,arguments)},E=function t(){Kt||Yt(),Kt||(E=t)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Yt(),t.ready}))}}}));
