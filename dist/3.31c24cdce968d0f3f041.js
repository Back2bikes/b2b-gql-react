webpackJsonp([3],{312:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(3),l=r(u),s=t(91),d=t(331),f=r(d),E=t(321),v=r(E),T=t(40),p=function(e){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleCheckin.bind(t),t}return i(n,e),c(n,[{key:"handleCheckin",value:function(e){T.hashHistory.push("/people/"+e+"/confirmCheckin")}},{key:"renderItems",value:function(){var e=this;return this.props.data.notCheckedIn.map(function(n){var t=n.id,r=n.name,a=n.surname;return l.default.createElement("li",{key:t,className:"collection-item",onClick:function(){return e.handleCheckin(t)}},r," ",a)})}},{key:"render",value:function(){return this.props.data.loading?l.default.createElement(v.default,null):l.default.createElement("ul",{className:"collection with-header"},l.default.createElement("li",{className:"collection-header"},l.default.createElement("h4",null,"Ready for Check In")),this.renderItems())}}]),n}(u.Component);n.default=(0,s.graphql)(f.default)(p)},317:function(e,n,t){"use strict";function r(e,n,t,o,i,c){c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,r):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0});var u=t;if(!u&&n&&n.length>0){var l=n[0];u=l&&l.loc&&l.loc.source}var s=o;!s&&n&&(s=n.filter(function(e){return Boolean(e.loc)}).map(function(e){return e.loc.start})),s&&0===s.length&&(s=void 0);var d=void 0,f=u;f&&s&&(d=s.map(function(e){return(0,a.getLocation)(f,e)})),Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:d||void 0,enumerable:!0},path:{value:i||void 0,enumerable:!0},nodes:{value:n||void 0},source:{value:u||void 0},positions:{value:s||void 0},originalError:{value:c}})}Object.defineProperty(n,"__esModule",{value:!0}),n.GraphQLError=r;var a=t(319);r.prototype=Object.create(Error.prototype,{constructor:{value:r},name:{value:"GraphQLError"}})},318:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(317);Object.defineProperty(n,"GraphQLError",{enumerable:!0,get:function(){return r.GraphQLError}});var a=t(324);Object.defineProperty(n,"syntaxError",{enumerable:!0,get:function(){return a.syntaxError}});var o=t(323);Object.defineProperty(n,"locatedError",{enumerable:!0,get:function(){return o.locatedError}});var i=t(322);Object.defineProperty(n,"formatError",{enumerable:!0,get:function(){return i.formatError}})},319:function(e,n,t){"use strict";function r(e,n){for(var t=/\r\n|[\n\r]/g,r=1,a=n+1,o=void 0;(o=t.exec(e.body))&&o.index<n;)r+=1,a=n+1-(o.index+o[0].length);return{line:r,column:a}}Object.defineProperty(n,"__esModule",{value:!0}),n.getLocation=r},320:function(e,n,t){function r(e){return e.replace(/[\s,]+/g," ").trim()}function a(e){return r(e.source.body.substring(e.start,e.end))}function o(){E={},v={}}function i(e){for(var n={},t=[],r=0;r<e.definitions.length;r++){var o=e.definitions[r];if("FragmentDefinition"===o.kind){var i=o.name.value,c=a(o.loc);v.hasOwnProperty(i)&&!v[i][c]?(T&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),v[i][c]=!0):v.hasOwnProperty(i)||(v[i]={},v[i][c]=!0),n[c]||(n[c]=!0,t.push(o))}else t.push(o)}return e.definitions=t,e}function c(){T=!1}function u(e,n){var t=Object.prototype.toString.call(e);if("[object Array]"===t)return e.map(function(e){return u(e,n)});if("[object Object]"!==t)throw new Error("Unexpected input.");n&&e.loc&&delete e.loc,e.loc&&(delete e.loc.startToken,delete e.loc.endToken);var r,a,o,i=Object.keys(e);for(r in i)i.hasOwnProperty(r)&&(a=e[i[r]],"[object Object]"!==(o=Object.prototype.toString.call(a))&&"[object Array]"!==o||(e[i[r]]=u(a,!0)));return e}function l(e){var n=r(e);if(E[n])return E[n];var t=f(e);if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=i(t),t=u(t,!1),E[n]=t,t}function s(){for(var e=Array.prototype.slice.call(arguments),n=e[0],t=n[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?t+=e[r].loc.source.body:t+=e[r],t+=n[r];return l(t)}var d=t(328),f=d.parse,E={},v={},T=!0;s.default=s,s.resetCaches=o,s.disableFragmentWarnings=c,e.exports=s},321:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(3),u=function(e){return e&&e.__esModule?e:{default:e}}(c),l=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),i(n,[{key:"render",value:function(){return u.default.createElement("div",{className:"preloader-wrapper small active"},u.default.createElement("div",{className:"spinner-layer spinner-green-only"},u.default.createElement("div",{className:"circle-clipper left"},u.default.createElement("div",{className:"circle"})),u.default.createElement("div",{className:"gap-patch"},u.default.createElement("div",{className:"circle"})),u.default.createElement("div",{className:"circle-clipper right"},u.default.createElement("div",{className:"circle"}))))}}]),n}(c.Component);n.default=l},322:function(e,n,t){"use strict";function r(e){return(0,o.default)(e,"Received null or undefined error."),{message:e.message,locations:e.locations,path:e.path}}Object.defineProperty(n,"__esModule",{value:!0}),n.formatError=r;var a=t(325),o=function(e){return e&&e.__esModule?e:{default:e}}(a)},323:function(e,n,t){"use strict";function r(e,n,t){if(e&&e.path)return e;var r=e?e.message||String(e):"An unknown error occurred.";return new a.GraphQLError(r,e&&e.nodes||n,e&&e.source,e&&e.positions,t,e)}Object.defineProperty(n,"__esModule",{value:!0}),n.locatedError=r;var a=t(317)},324:function(e,n,t){"use strict";function r(e,n,t){var r=(0,i.getLocation)(e,n);return new c.GraphQLError("Syntax Error "+e.name+" ("+r.line+":"+r.column+") "+t+"\n\n"+a(e,r),void 0,e,[n])}function a(e,n){var t=n.line,r=(t-1).toString(),a=t.toString(),i=(t+1).toString(),c=i.length,u=e.body.split(/\r\n|[\n\r]/g);return(t>=2?o(c,r)+": "+u[t-2]+"\n":"")+o(c,a)+": "+u[t-1]+"\n"+Array(2+c+n.column).join(" ")+"^\n"+(t<u.length?o(c,i)+": "+u[t]+"\n":"")}function o(e,n){return Array(e-n.length+1).join(" ")+n}Object.defineProperty(n,"__esModule",{value:!0}),n.syntaxError=r;var i=t(319),c=t(317)},325:function(e,n,t){"use strict";function r(e,n){if(!e)throw new Error(n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},326:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.VARIABLE="Variable",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.TYPE_EXTENSION_DEFINITION="TypeExtensionDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition"},327:function(e,n,t){"use strict";function r(e,n){var t=new i(h,0,0,0,0,null);return{source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:a}}function a(){var e=this.lastToken=this.token;if(e.kind!==I){do{e=e.next=u(this,e)}while(e.kind===M);this.token=e}return e}function o(e){var n=e.value;return n?e.kind+' "'+n+'"':e.kind}function i(e,n,t,r,a,o,i){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=a,this.value=i,this.prev=o,this.next=null}function c(e){return isNaN(e)?I:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'+("00"+e.toString(16).toUpperCase()).slice(-4)+'"'}function u(e,n){var t=e.source,r=t.body,a=r.length,o=s(r,n.end,e),u=e.line,E=1+o-e.lineStart;if(o>=a)return new i(I,a,a,u,E,n);var T=B.call(r,o);if(T<32&&9!==T&&10!==T&&13!==T)throw(0,N.syntaxError)(t,o,"Cannot contain the invalid character "+c(T)+".");switch(T){case 33:return new i(_,o,o+1,u,E,n);case 35:return d(t,o,u,E,n);case 36:return new i(O,o,o+1,u,E,n);case 40:return new i(m,o,o+1,u,E,n);case 41:return new i(y,o,o+1,u,E,n);case 46:if(46===B.call(r,o+1)&&46===B.call(r,o+2))return new i(b,o,o+3,u,E,n);break;case 58:return new i(A,o,o+1,u,E,n);case 61:return new i(L,o,o+1,u,E,n);case 64:return new i(R,o,o+1,u,E,n);case 91:return new i(w,o,o+1,u,E,n);case 93:return new i(g,o,o+1,u,E,n);case 123:return new i(C,o,o+1,u,E,n);case 124:return new i(P,o,o+1,u,E,n);case 125:return new i(D,o,o+1,u,E,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return k(t,o,u,E,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return f(t,o,T,u,E,n);case 34:return v(t,o,u,E,n)}throw(0,N.syntaxError)(t,o,l(T))}function l(e){return 39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character "+c(e)+"."}function s(e,n,t){for(var r=e.length,a=n;a<r;){var o=B.call(e,a);if(9===o||32===o||44===o||65279===o)++a;else if(10===o)++a,++t.line,t.lineStart=a;else{if(13!==o)break;10===B.call(e,a+1)?a+=2:++a,++t.line,t.lineStart=a}}return a}function d(e,n,t,r,a){var o=e.body,c=void 0,u=n;do{c=B.call(o,++u)}while(null!==c&&(c>31||9===c));return new i(M,n,u,t,r,a,x.call(o,n+1,u))}function f(e,n,t,r,a,o){var u=e.body,l=t,s=n,d=!1;if(45===l&&(l=B.call(u,++s)),48===l){if((l=B.call(u,++s))>=48&&l<=57)throw(0,N.syntaxError)(e,s,"Invalid number, unexpected digit after 0: "+c(l)+".")}else s=E(e,s,l),l=B.call(u,s);return 46===l&&(d=!0,l=B.call(u,++s),s=E(e,s,l),l=B.call(u,s)),69!==l&&101!==l||(d=!0,l=B.call(u,++s),43!==l&&45!==l||(l=B.call(u,++s)),s=E(e,s,l)),new i(d?F:S,n,s,r,a,o,x.call(u,n,s))}function E(e,n,t){var r=e.body,a=n,o=t;if(o>=48&&o<=57){do{o=B.call(r,++a)}while(o>=48&&o<=57);return a}throw(0,N.syntaxError)(e,a,"Invalid number, expected digit but got: "+c(o)+".")}function v(e,n,t,r,a){for(var o=e.body,u=n+1,l=u,s=0,d="";u<o.length&&null!==(s=B.call(o,u))&&10!==s&&13!==s&&34!==s;){if(s<32&&9!==s)throw(0,N.syntaxError)(e,u,"Invalid character within String: "+c(s)+".");if(++u,92===s){switch(d+=x.call(o,l,u-1),s=B.call(o,u)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var f=T(B.call(o,u+1),B.call(o,u+2),B.call(o,u+3),B.call(o,u+4));if(f<0)throw(0,N.syntaxError)(e,u,"Invalid character escape sequence: \\u"+o.slice(u+1,u+5)+".");d+=String.fromCharCode(f),u+=4;break;default:throw(0,N.syntaxError)(e,u,"Invalid character escape sequence: \\"+String.fromCharCode(s)+".")}++u,l=u}}if(34!==s)throw(0,N.syntaxError)(e,u,"Unterminated string.");return d+=x.call(o,l,u),new i(j,n,u+1,t,r,a,d)}function T(e,n,t,r){return p(e)<<12|p(n)<<8|p(t)<<4|p(r)}function p(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function k(e,n,t,r,a){for(var o=e.body,c=o.length,u=n+1,l=0;u!==c&&null!==(l=B.call(o,u))&&(95===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122);)++u;return new i(K,n,u,t,r,a,x.call(o,n,u))}Object.defineProperty(n,"__esModule",{value:!0}),n.TokenKind=void 0,n.createLexer=r,n.getTokenDesc=o;var N=t(318),h="<SOF>",I="<EOF>",_="!",O="$",m="(",y=")",b="...",A=":",L="=",R="@",w="[",g="]",C="{",P="|",D="}",K="Name",S="Int",F="Float",j="String",M="Comment",B=(n.TokenKind={SOF:h,EOF:I,BANG:_,DOLLAR:O,PAREN_L:m,PAREN_R:y,SPREAD:b,COLON:A,EQUALS:L,AT:R,BRACKET_L:w,BRACKET_R:g,BRACE_L:C,PIPE:P,BRACE_R:D,NAME:K,INT:S,FLOAT:F,STRING:j,COMMENT:M},String.prototype.charCodeAt),x=String.prototype.slice;i.prototype.toJSON=i.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},328:function(e,n,t){"use strict";function r(e,n){var t="string"==typeof e?new oe.Source(e):e;return c((0,ce.createLexer)(t,n||{}))}function a(e,n){var t="string"==typeof e?new oe.Source(e):e,r=(0,ce.createLexer)(t,n||{});ee(r,ce.TokenKind.SOF);var a=O(r,!1);return ee(r,ce.TokenKind.EOF),a}function o(e,n){var t="string"==typeof e?new oe.Source(e):e,r=(0,ce.createLexer)(t,n||{});ee(r,ce.TokenKind.SOF);var a=g(r);return ee(r,ce.TokenKind.EOF),a}function i(e){var n=ee(e,ce.TokenKind.NAME);return{kind:ue.NAME,value:n.value,loc:W(e,n)}}function c(e){var n=e.token;ee(e,ce.TokenKind.SOF);var t=[];do{t.push(u(e))}while(!Z(e,ce.TokenKind.EOF));return{kind:ue.DOCUMENT,definitions:t,loc:W(e,n)}}function u(e){if($(e,ce.TokenKind.BRACE_L))return l(e);if($(e,ce.TokenKind.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return l(e);case"fragment":return I(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"extend":case"directive":return P(e)}throw te(e)}function l(e){var n=e.token;if($(e,ce.TokenKind.BRACE_L))return{kind:ue.OPERATION_DEFINITION,operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:v(e),loc:W(e,n)};var t=s(e),r=void 0;return $(e,ce.TokenKind.NAME)&&(r=i(e)),{kind:ue.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:d(e),directives:R(e),selectionSet:v(e),loc:W(e,n)}}function s(e){var n=ee(e,ce.TokenKind.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw te(e,n)}function d(e){return $(e,ce.TokenKind.PAREN_L)?ae(e,ce.TokenKind.PAREN_L,f,ce.TokenKind.PAREN_R):[]}function f(e){var n=e.token;return{kind:ue.VARIABLE_DEFINITION,variable:E(e),type:(ee(e,ce.TokenKind.COLON),g(e)),defaultValue:Z(e,ce.TokenKind.EQUALS)?O(e,!0):null,loc:W(e,n)}}function E(e){var n=e.token;return ee(e,ce.TokenKind.DOLLAR),{kind:ue.VARIABLE,name:i(e),loc:W(e,n)}}function v(e){var n=e.token;return{kind:ue.SELECTION_SET,selections:ae(e,ce.TokenKind.BRACE_L,T,ce.TokenKind.BRACE_R),loc:W(e,n)}}function T(e){return $(e,ce.TokenKind.SPREAD)?h(e):p(e)}function p(e){var n=e.token,t=i(e),r=void 0,a=void 0;return Z(e,ce.TokenKind.COLON)?(r=t,a=i(e)):(r=null,a=t),{kind:ue.FIELD,alias:r,name:a,arguments:k(e),directives:R(e),selectionSet:$(e,ce.TokenKind.BRACE_L)?v(e):null,loc:W(e,n)}}function k(e){return $(e,ce.TokenKind.PAREN_L)?ae(e,ce.TokenKind.PAREN_L,N,ce.TokenKind.PAREN_R):[]}function N(e){var n=e.token;return{kind:ue.ARGUMENT,name:i(e),value:(ee(e,ce.TokenKind.COLON),O(e,!1)),loc:W(e,n)}}function h(e){var n=e.token;if(ee(e,ce.TokenKind.SPREAD),$(e,ce.TokenKind.NAME)&&"on"!==e.token.value)return{kind:ue.FRAGMENT_SPREAD,name:_(e),directives:R(e),loc:W(e,n)};var t=null;return"on"===e.token.value&&(e.advance(),t=C(e)),{kind:ue.INLINE_FRAGMENT,typeCondition:t,directives:R(e),selectionSet:v(e),loc:W(e,n)}}function I(e){var n=e.token;return ne(e,"fragment"),{kind:ue.FRAGMENT_DEFINITION,name:_(e),typeCondition:(ne(e,"on"),C(e)),directives:R(e),selectionSet:v(e),loc:W(e,n)}}function _(e){if("on"===e.token.value)throw te(e);return i(e)}function O(e,n){var t=e.token;switch(t.kind){case ce.TokenKind.BRACKET_L:return b(e,n);case ce.TokenKind.BRACE_L:return A(e,n);case ce.TokenKind.INT:return e.advance(),{kind:ue.INT,value:t.value,loc:W(e,t)};case ce.TokenKind.FLOAT:return e.advance(),{kind:ue.FLOAT,value:t.value,loc:W(e,t)};case ce.TokenKind.STRING:return e.advance(),{kind:ue.STRING,value:t.value,loc:W(e,t)};case ce.TokenKind.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:ue.BOOLEAN,value:"true"===t.value,loc:W(e,t)}):"null"===t.value?(e.advance(),{kind:ue.NULL,loc:W(e,t)}):(e.advance(),{kind:ue.ENUM,value:t.value,loc:W(e,t)});case ce.TokenKind.DOLLAR:if(!n)return E(e)}throw te(e)}function m(e){return O(e,!0)}function y(e){return O(e,!1)}function b(e,n){var t=e.token,r=n?m:y;return{kind:ue.LIST,values:re(e,ce.TokenKind.BRACKET_L,r,ce.TokenKind.BRACKET_R),loc:W(e,t)}}function A(e,n){var t=e.token;ee(e,ce.TokenKind.BRACE_L);for(var r=[];!Z(e,ce.TokenKind.BRACE_R);)r.push(L(e,n));return{kind:ue.OBJECT,fields:r,loc:W(e,t)}}function L(e,n){var t=e.token;return{kind:ue.OBJECT_FIELD,name:i(e),value:(ee(e,ce.TokenKind.COLON),O(e,n)),loc:W(e,t)}}function R(e){for(var n=[];$(e,ce.TokenKind.AT);)n.push(w(e));return n}function w(e){var n=e.token;return ee(e,ce.TokenKind.AT),{kind:ue.DIRECTIVE,name:i(e),arguments:k(e),loc:W(e,n)}}function g(e){var n=e.token,t=void 0;return Z(e,ce.TokenKind.BRACKET_L)?(t=g(e),ee(e,ce.TokenKind.BRACKET_R),t={kind:ue.LIST_TYPE,type:t,loc:W(e,n)}):t=C(e),Z(e,ce.TokenKind.BANG)?{kind:ue.NON_NULL_TYPE,type:t,loc:W(e,n)}:t}function C(e){var n=e.token;return{kind:ue.NAMED_TYPE,name:i(e),loc:W(e,n)}}function P(e){if($(e,ce.TokenKind.NAME))switch(e.token.value){case"schema":return D(e);case"scalar":return S(e);case"type":return F(e);case"interface":return U(e);case"union":return V(e);case"enum":return Y(e);case"input":return J(e);case"extend":return Q(e);case"directive":return H(e)}throw te(e)}function D(e){var n=e.token;ne(e,"schema");var t=R(e),r=ae(e,ce.TokenKind.BRACE_L,K,ce.TokenKind.BRACE_R);return{kind:ue.SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:W(e,n)}}function K(e){var n=e.token,t=s(e);ee(e,ce.TokenKind.COLON);var r=C(e);return{kind:ue.OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:W(e,n)}}function S(e){var n=e.token;ne(e,"scalar");var t=i(e),r=R(e);return{kind:ue.SCALAR_TYPE_DEFINITION,name:t,directives:r,loc:W(e,n)}}function F(e){var n=e.token;ne(e,"type");var t=i(e),r=j(e),a=R(e),o=re(e,ce.TokenKind.BRACE_L,M,ce.TokenKind.BRACE_R);return{kind:ue.OBJECT_TYPE_DEFINITION,name:t,interfaces:r,directives:a,fields:o,loc:W(e,n)}}function j(e){var n=[];if("implements"===e.token.value){e.advance();do{n.push(C(e))}while($(e,ce.TokenKind.NAME))}return n}function M(e){var n=e.token,t=i(e),r=B(e);ee(e,ce.TokenKind.COLON);var a=g(e),o=R(e);return{kind:ue.FIELD_DEFINITION,name:t,arguments:r,type:a,directives:o,loc:W(e,n)}}function B(e){return $(e,ce.TokenKind.PAREN_L)?ae(e,ce.TokenKind.PAREN_L,x,ce.TokenKind.PAREN_R):[]}function x(e){var n=e.token,t=i(e);ee(e,ce.TokenKind.COLON);var r=g(e),a=null;Z(e,ce.TokenKind.EQUALS)&&(a=m(e));var o=R(e);return{kind:ue.INPUT_VALUE_DEFINITION,name:t,type:r,defaultValue:a,directives:o,loc:W(e,n)}}function U(e){var n=e.token;ne(e,"interface");var t=i(e),r=R(e),a=re(e,ce.TokenKind.BRACE_L,M,ce.TokenKind.BRACE_R);return{kind:ue.INTERFACE_TYPE_DEFINITION,name:t,directives:r,fields:a,loc:W(e,n)}}function V(e){var n=e.token;ne(e,"union");var t=i(e),r=R(e);ee(e,ce.TokenKind.EQUALS);var a=G(e);return{kind:ue.UNION_TYPE_DEFINITION,name:t,directives:r,types:a,loc:W(e,n)}}function G(e){var n=[];do{n.push(C(e))}while(Z(e,ce.TokenKind.PIPE));return n}function Y(e){var n=e.token;ne(e,"enum");var t=i(e),r=R(e),a=ae(e,ce.TokenKind.BRACE_L,q,ce.TokenKind.BRACE_R);return{kind:ue.ENUM_TYPE_DEFINITION,name:t,directives:r,values:a,loc:W(e,n)}}function q(e){var n=e.token,t=i(e),r=R(e);return{kind:ue.ENUM_VALUE_DEFINITION,name:t,directives:r,loc:W(e,n)}}function J(e){var n=e.token;ne(e,"input");var t=i(e),r=R(e),a=re(e,ce.TokenKind.BRACE_L,x,ce.TokenKind.BRACE_R);return{kind:ue.INPUT_OBJECT_TYPE_DEFINITION,name:t,directives:r,fields:a,loc:W(e,n)}}function Q(e){var n=e.token;ne(e,"extend");var t=F(e);return{kind:ue.TYPE_EXTENSION_DEFINITION,definition:t,loc:W(e,n)}}function H(e){var n=e.token;ne(e,"directive"),ee(e,ce.TokenKind.AT);var t=i(e),r=B(e);ne(e,"on");var a=z(e);return{kind:ue.DIRECTIVE_DEFINITION,name:t,arguments:r,locations:a,loc:W(e,n)}}function z(e){var n=[];do{n.push(i(e))}while(Z(e,ce.TokenKind.PIPE));return n}function W(e,n){if(!e.options.noLocation)return new X(n,e.lastToken,e.source)}function X(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function $(e,n){return e.token.kind===n}function Z(e,n){var t=e.token.kind===n;return t&&e.advance(),t}function ee(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw(0,ie.syntaxError)(e.source,t.start,"Expected "+n+", found "+(0,ce.getTokenDesc)(t))}function ne(e,n){var t=e.token;if(t.kind===ce.TokenKind.NAME&&t.value===n)return e.advance(),t;throw(0,ie.syntaxError)(e.source,t.start,'Expected "'+n+'", found '+(0,ce.getTokenDesc)(t))}function te(e,n){var t=n||e.token;return(0,ie.syntaxError)(e.source,t.start,"Unexpected "+(0,ce.getTokenDesc)(t))}function re(e,n,t,r){ee(e,n);for(var a=[];!Z(e,r);)a.push(t(e));return a}function ae(e,n,t,r){ee(e,n);for(var a=[t(e)];!Z(e,r);)a.push(t(e));return a}Object.defineProperty(n,"__esModule",{value:!0}),n.parse=r,n.parseValue=a,n.parseType=o,n.parseConstValue=m,n.parseTypeReference=g,n.parseNamedType=C;var oe=t(329),ie=t(318),ce=t(327),ue=t(326);X.prototype.toJSON=X.prototype.inspect=function(){return{start:this.start,end:this.end}}},329:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.Source=function e(n,t){r(this,e),this.body=n,this.name=t||"GraphQL"}},331:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query notCheckedIn {\n    notCheckedIn{\n      id\n      name\n      surname\n      avatar\n      lastAttend\n    }\n  }\n"],["\n  query notCheckedIn {\n    notCheckedIn{\n      id\n      name\n      surname\n      avatar\n      lastAttend\n    }\n  }\n"]),a=t(320),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default=(0,o.default)(r)}});