var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'uni-back'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'chooseback']]]]]]]]])
Z([[2,'!='],[[6],[[7],[3,'bankInfo']],[3,'bankName']],[1,undefined]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'rewardList']])
Z([3,'uni-records'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,5]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,10]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,15]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,101]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,105]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,20]])
Z([3,'date'])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,5]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,10]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,15]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,101]]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,105]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]]])
Z(z[11])
Z([[2,'=='],[[7],[3,'ismask2']],[1,true]])
Z(z[16])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'recordList']])
Z([3,'uni-records'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,2]])
Z([3,'date'])
Z([3,'flex:1;'])
Z(z[5])
Z(z[6])
Z(z[7])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'reason']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'reason']],[1,'']]])
Z([[2,'=='],[[7],[3,'total']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'myTasklist']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'aim']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'aim']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'aim']],[1,2]])
Z([[2,'=='],[[7],[3,'total']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'uni-ordernum'])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'state']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'state']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'state']],[1,2]])
Z([3,'uni-order'])
Z([3,'uni-order-f'])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'taskType']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'taskType']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'taskType']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'taskType']],[1,3]])
Z(z[6])
Z([3,'border-bottom:none;'])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'taskRank']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'taskRank']],[1,1]])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isApp']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[2,'=='],[[7],[3,'ismask']],[1,true]])
Z(z[1])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'menuList']])
Z([3,'__e'])
Z([3,'menu-row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectMenu']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'menuList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'isChecked']])
Z([[2,'=='],[[7],[3,'total']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/load-more.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./pages/index/index.wxml','./pages/invite/invite.wxml','./pages/live/live.wxml','./pages/live/payment.wxml','./pages/my/Withdrawals.wxml','./pages/my/addbank.wxml','./pages/my/balance.wxml','./pages/my/bank.wxml','./pages/my/capital.wxml','./pages/my/chooseback.wxml','./pages/my/my.wxml','./pages/my/personal.wxml','./pages/my/praise.wxml','./pages/my/pwd.wxml','./pages/my/record.wxml','./pages/my/release.wxml','./pages/my/result.wxml','./pages/my/set.wxml','./pages/my/taskmanmgent.wxml','./pages/my/team.wxml','./pages/mytask/create.wxml','./pages/mytask/mytask.wxml','./pages/mytask/mytaskorder.wxml','./pages/news/details.wxml','./pages/news/new.wxml','./pages/sign/forgetpwd.wxml','./pages/sign/license.wxml','./pages/sign/reg.wxml','./pages/sign/sign.wxml','./pages/task/task.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oH=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,3,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(r,oH)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aL=_v()
_(r,aL)
if(_oz(z,0,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var bO=_n('view')
_rz(z,bO,'class',0,e,s,gg)
var oR=_v()
_(bO,oR)
var fS=function(hU,cT,oV,gg){
var oX=_n('view')
_rz(z,oX,'class',4,hU,cT,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,5,hU,cT,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,6,hU,cT,gg)){aZ.wxVkey=1
}
var t1=_v()
_(oX,t1)
if(_oz(z,7,hU,cT,gg)){t1.wxVkey=1
}
var e2=_v()
_(oX,e2)
if(_oz(z,8,hU,cT,gg)){e2.wxVkey=1
}
var b3=_v()
_(oX,b3)
if(_oz(z,9,hU,cT,gg)){b3.wxVkey=1
}
var o4=_v()
_(oX,o4)
if(_oz(z,10,hU,cT,gg)){o4.wxVkey=1
}
var x5=_v()
_(oX,x5)
if(_oz(z,11,hU,cT,gg)){x5.wxVkey=1
}
var o6=_n('view')
_rz(z,o6,'class',12,hU,cT,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,13,hU,cT,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,14,hU,cT,gg)){c8.wxVkey=1
}
var h9=_v()
_(o6,h9)
if(_oz(z,15,hU,cT,gg)){h9.wxVkey=1
}
f7.wxXCkey=1
c8.wxXCkey=1
h9.wxXCkey=1
_(oX,o6)
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
_(oV,oX)
return oV
}
oR.wxXCkey=2
_2z(z,3,fS,e,s,gg,oR,'item','index','')
var oP=_v()
_(bO,oP)
if(_oz(z,16,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,17,e,s,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(r,bO)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var lCB=_mz(z,'mpvue-city-picker',['bind:__l',0,'bind:onCancel',1,'bind:onConfirm',1,'class',2,'data-event-opts',3,'data-ref',4,'pickerValueDefault',5,'themeColor',6,'vueId',7],[],e,s,gg)
_(r,lCB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var bGB=_n('view')
_rz(z,bGB,'class',0,e,s,gg)
var xIB=_v()
_(bGB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_n('view')
_rz(z,cOB,'class',4,cLB,fKB,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,5,cLB,fKB,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,6,cLB,fKB,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(cOB,aRB)
if(_oz(z,7,cLB,fKB,gg)){aRB.wxVkey=1
}
var tSB=_mz(z,'view',['class',8,'style',1],[],cLB,fKB,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,10,cLB,fKB,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,11,cLB,fKB,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(tSB,oVB)
if(_oz(z,12,cLB,fKB,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(tSB,xWB)
if(_oz(z,13,cLB,fKB,gg)){xWB.wxVkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
_(cOB,tSB)
oPB.wxXCkey=1
lQB.wxXCkey=1
aRB.wxXCkey=1
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=2
_2z(z,3,oJB,e,s,gg,xIB,'item','index','')
var oHB=_v()
_(bGB,oHB)
if(_oz(z,14,e,s,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
_(r,bGB)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var fYB=_v()
_(r,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_v()
_(c3B,l5B)
if(_oz(z,3,o2B,h1B,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
return c3B
}
fYB.wxXCkey=2
_2z(z,2,cZB,e,s,gg,fYB,'item','__i0__','')
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oBC=_n('view')
_rz(z,oBC,'class',0,e,s,gg)
var cDC=_v()
_(oBC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_n('view')
var tKC=_v()
_(aJC,tKC)
if(_oz(z,4,cGC,oFC,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,5,cGC,oFC,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(aJC,bMC)
if(_oz(z,6,cGC,oFC,gg)){bMC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
_(oHC,aJC)
return oHC
}
cDC.wxXCkey=2
_2z(z,3,hEC,e,s,gg,cDC,'item','index','')
var fCC=_v()
_(oBC,fCC)
if(_oz(z,7,e,s,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
_(r,oBC)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var xOC=_n('view')
_rz(z,xOC,'class',0,e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',1,e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,2,e,s,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(fQC,hSC)
if(_oz(z,3,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(fQC,oTC)
if(_oz(z,4,e,s,gg)){oTC.wxVkey=1
}
cRC.wxXCkey=1
hSC.wxXCkey=1
oTC.wxXCkey=1
_(xOC,fQC)
var cUC=_n('view')
_rz(z,cUC,'class',5,e,s,gg)
var oVC=_n('view')
_rz(z,oVC,'class',6,e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,7,e,s,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(oVC,aXC)
if(_oz(z,8,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(oVC,tYC)
if(_oz(z,9,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(oVC,eZC)
if(_oz(z,10,e,s,gg)){eZC.wxVkey=1
}
lWC.wxXCkey=1
aXC.wxXCkey=1
tYC.wxXCkey=1
eZC.wxXCkey=1
_(cUC,oVC)
var b1C=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,13,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,14,e,s,gg)){x3C.wxVkey=1
}
o2C.wxXCkey=1
x3C.wxXCkey=1
_(cUC,b1C)
_(xOC,cUC)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,15,e,s,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
_(r,xOC)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var o0C=_v()
_(r,o0C)
if(_oz(z,0,e,s,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var aBD=_n('view')
_rz(z,aBD,'class',0,e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,1,e,s,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,2,e,s,gg)){eDD.wxVkey=1
var oFD=_v()
_(eDD,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],fID,oHD,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,9,fID,oHD,gg)){cMD.wxVkey=1
}
cMD.wxXCkey=1
_(cJD,oLD)
return cJD
}
oFD.wxXCkey=2
_2z(z,5,xGD,e,s,gg,oFD,'item','index','')
}
var bED=_v()
_(aBD,bED)
if(_oz(z,10,e,s,gg)){bED.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
bED.wxXCkey=1
_(r,aBD)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/sign/sign","pages/sign/license","pages/sign/forgetpwd","pages/mytask/create","pages/sign/reg","pages/index/index","pages/news/new","pages/news/details","pages/invite/invite","pages/task/task","pages/live/payment","pages/live/live","pages/mytask/mytask","pages/mytask/mytaskorder","pages/my/my","pages/my/personal","pages/my/set","pages/my/pwd","pages/my/praise","pages/my/balance","pages/my/Withdrawals","pages/my/chooseback","pages/my/result","pages/my/record","pages/my/capital","pages/my/bank","pages/my/addbank","pages/my/team","pages/my/release","pages/my/taskmanmgent"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999999","selectedColor":"#F04F43","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/uni-home.png","selectedIconPath":"static/home.png","text":"首页"},{"pagePath":"pages/mytask/mytask","iconPath":"static/tsak.png","selectedIconPath":"static/task.png","text":"任务"},{"pagePath":"pages/live/live","iconPath":"static/shops.png","selectedIconPath":"static/shop.png","text":"商城"},{"pagePath":"pages/my/my","iconPath":"static/my_g.png","selectedIconPath":"static/my.png","text":"我的"}]},"networkTimeout":{"request":20000,"uploadFile":30000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"趣赞","compilerVersion":"2.5.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/load-more.wxml']=$gwx('./components/load-more.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"趣赞","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","enablePullDownRefresh":true,"backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/invite/invite.json']={"navigationBarTitleText":"分享","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/invite/invite.wxml']=$gwx('./pages/invite/invite.wxml');

__wxAppCode__['pages/live/live.json']={"navigationBarTitleText":"商城","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/live/live.wxml']=$gwx('./pages/live/live.wxml');

__wxAppCode__['pages/live/payment.json']={"navigationBarTitleText":"支付收银台","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/live/payment.wxml']=$gwx('./pages/live/payment.wxml');

__wxAppCode__['pages/my/addbank.json']={"navigationBarTitleText":"添加银行卡","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/addbank.wxml']=$gwx('./pages/my/addbank.wxml');

__wxAppCode__['pages/my/balance.json']={"navigationBarTitleText":"余额","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/balance.wxml']=$gwx('./pages/my/balance.wxml');

__wxAppCode__['pages/my/bank.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/my/bank.wxml']=$gwx('./pages/my/bank.wxml');

__wxAppCode__['pages/my/capital.json']={"navigationBarTitleText":"资金明细","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/capital.wxml']=$gwx('./pages/my/capital.wxml');

__wxAppCode__['pages/my/chooseback.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/my/chooseback.wxml']=$gwx('./pages/my/chooseback.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/my/personal.json']={"navigationBarTitleText":"个人资料","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/my/personal.wxml']=$gwx('./pages/my/personal.wxml');

__wxAppCode__['pages/my/praise.json']={"navigationBarTitleText":"关于我们","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/praise.wxml']=$gwx('./pages/my/praise.wxml');

__wxAppCode__['pages/my/pwd.json']={"navigationBarTitleText":"修改密码","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/pwd.wxml']=$gwx('./pages/my/pwd.wxml');

__wxAppCode__['pages/my/record.json']={"navigationBarTitleText":"提现记录","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/record.wxml']=$gwx('./pages/my/record.wxml');

__wxAppCode__['pages/my/release.json']={"navigationBarTitleText":"我的套餐","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/release.wxml']=$gwx('./pages/my/release.wxml');

__wxAppCode__['pages/my/result.json']={"navigationBarTitleText":"结果详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/result.wxml']=$gwx('./pages/my/result.wxml');

__wxAppCode__['pages/my/set.json']={"navigationBarTitleText":"设置","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/set.wxml']=$gwx('./pages/my/set.wxml');

__wxAppCode__['pages/my/taskmanmgent.json']={"navigationBarTitleText":"任务管理","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/taskmanmgent.wxml']=$gwx('./pages/my/taskmanmgent.wxml');

__wxAppCode__['pages/my/team.json']={"navigationBarTitleText":"我的团队","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","backgroundColor":"#FF5254","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/my/team.wxml']=$gwx('./pages/my/team.wxml');

__wxAppCode__['pages/my/Withdrawals.json']={"navigationBarTitleText":"提现","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/my/Withdrawals.wxml']=$gwx('./pages/my/Withdrawals.wxml');

__wxAppCode__['pages/mytask/create.json']={"navigationBarTitleText":"发布任务","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/mytask/create.wxml']=$gwx('./pages/mytask/create.wxml');

__wxAppCode__['pages/mytask/mytask.json']={"navigationBarTitleText":"我的任务","navigationBarBackgroundColor":"#F04F43","navigationBarTextStyle":"white","enablePullDownRefresh":true,"backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/mytask/mytask.wxml']=$gwx('./pages/mytask/mytask.wxml');

__wxAppCode__['pages/mytask/mytaskorder.json']={"navigationBarTitleText":"任务详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/mytask/mytaskorder.wxml']=$gwx('./pages/mytask/mytaskorder.wxml');

__wxAppCode__['pages/news/details.json']={"navigationBarTitleText":"文章详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/news/details.wxml']=$gwx('./pages/news/details.wxml');

__wxAppCode__['pages/news/new.json']={"navigationBarTitleText":"新闻公告","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/news/new.wxml']=$gwx('./pages/news/new.wxml');

__wxAppCode__['pages/sign/forgetpwd.json']={"navigationBarTitleText":"忘记密码","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/sign/forgetpwd.wxml']=$gwx('./pages/sign/forgetpwd.wxml');

__wxAppCode__['pages/sign/license.json']={"navigationBarTitleText":"注册协议","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/sign/license.wxml']=$gwx('./pages/sign/license.wxml');

__wxAppCode__['pages/sign/reg.json']={"navigationBarTitleText":"用户注册","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/sign/reg.wxml']=$gwx('./pages/sign/reg.wxml');

__wxAppCode__['pages/sign/sign.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/sign/sign.wxml']=$gwx('./pages/sign/sign.wxml');

__wxAppCode__['pages/task/task.json']={"navigationBarTitleText":"任务大厅","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","enablePullDownRefresh":true,"backgroundColor":"#FF5254","usingComponents":{}};
__wxAppCode__['pages/task/task.wxml']=$gwx('./pages/task/task.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0db2":function(e,t,n){"use strict";(function(e){n("b82d"),n("921b");var t=c(n("66fd")),o=c(n("cdc6")),u=c(n("1aa6"));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.use(u.default),t.default.config.productionTip=!1,t.default.prototype.ApiGateWay="http://api.great-info.tech",t.default.prototype.appId="0f11ae8e-e523-4644-bde0-2d633f5512bc",t.default.prototype.ImgServer="https://cdridge.oss-cn-shanghai.aliyuncs.com",o.default.mpType="app";var f=new t.default(a({},o.default));e(f).$mount()}).call(this,n("6e42")["createApp"])},2506:function(e,t,n){"use strict";n.r(t);var o=n("845b"),u=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=u.a},"721d":function(e,t,n){"use strict";var o=n("c71b"),u=n.n(o);u.a},"845b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};t.default=n}).call(this,n("0de9")["default"])},c71b:function(e,t,n){},cdc6:function(e,t,n){"use strict";n.r(t);var o=n("2506");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("721d");var c,a,r,f,l=n("f0c5"),i=Object(l["a"])(o["default"],c,a,!1,null,null,null,!1,r,f);t["default"]=i.exports}},[["0db2","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, a = t[0], c = t[1], l = t[2], p = 0, f = []; p < a.length; p++) {
      o = a[p], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (n in c) {
      Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    }

    s && s(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, l || []), r();
  }

  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, o = 1; o < r.length; o++) {
        var a = r[o];
        0 !== u[a] && (n = !1);
      }

      n && (i.splice(t--, 1), e = c(c.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, c), r.l = !0, r.exports;
  }

  c.e = function (e) {
    var t = [],
        r = {
      "components/mpvue-citypicker/mpvueCityPicker": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker"
      }[e] || e) + ".wxss", u = c.p + n, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === n || p === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        l = f[a], p = l.getAttribute("data-href");
        if (p === n || p === u) return t();
      }

      var s = document.createElement("link");
      s.rel = "stylesheet", s.type = "text/css", s.onload = t, s.onerror = function (t) {
        var n = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        i.request = n, delete o[e], s.parentNode.removeChild(s), r(i);
      }, s.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(s);
    }).then(function () {
      o[e] = 0;
    }));
    var n = u[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var i = new Promise(function (t, r) {
        n = u[e] = [t, r];
      });
      t.push(n[2] = i);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, c.nc && p.setAttribute("nonce", c.nc), p.src = a(e), l = function l(t) {
        p.onerror = p.onload = null, clearTimeout(f);
        var r = u[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            i.type = n, i.request = o, r[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(t);
  }, c.m = e, c.c = n, c.d = function (e, t, r) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (c.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      c.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    t(l[f]);
  }

  var s = p;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(l,e,a){"use strict";function u(l){var e=Object.prototype.toString.call(l);return e.substring(8,e.length-1)}function t(){for(var l=arguments.length,e=new Array(l),a=0;a<l;a++)e[a]=arguments[a];var t=e.map(function(l){var e=Object.prototype.toString.call(l);if("[object object]"===e.toLowerCase())try{l="---BEGIN:JSON---"+JSON.stringify(l)+"---END:JSON---"}catch(t){l="[object object]"}else if(null===l)l="---NULL---";else if(void 0===l)l="---UNDEFINED---";else{var a=u(l).toUpperCase();l="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+l+"---END:"+a+"---":String(l)}return l}),v="";if(t.length>1){var n=t.pop();v=t.join("---COMMA---"),0===n.indexOf(" at ")?v+=n:v+="---COMMA---"+n}else v=t[0];return v}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t},"1aa6":function(l,e,a){"use strict";var u=a("688e"),t={autoSetContainer:!1,appendToBody:!0},v={install:function(l){l.prototype.$clipboardConfig=t,l.prototype.$copyText=function(l,e){return new Promise(function(a,v){var n=document.createElement("button"),b=new u(n,{text:function(){return l},action:function(){return"copy"},container:"object"===typeof e?e:document.body});b.on("success",function(l){b.destroy(),a(l)}),b.on("error",function(l){b.destroy(),v(l)}),t.appendToBody&&document.body.appendChild(n),n.click(),t.appendToBody&&document.body.removeChild(n)})},l.directive("clipboard",{bind:function(l,e,a){if("success"===e.arg)l._vClipboard_success=e.value;else if("error"===e.arg)l._vClipboard_error=e.value;else{var v=new u(l,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:t.autoSetContainer?l:void 0});v.on("success",function(e){var a=l._vClipboard_success;a&&a(e)}),v.on("error",function(e){var a=l._vClipboard_error;a&&a(e)}),l._vClipboard=v}},update:function(l,e){"success"===e.arg?l._vClipboard_success=e.value:"error"===e.arg?l._vClipboard_error=e.value:(l._vClipboard.text=function(){return e.value},l._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(l,e){"success"===e.arg?delete l._vClipboard_success:"error"===e.arg?delete l._vClipboard_error:(l._vClipboard.destroy(),delete l._vClipboard)}})},config:t};l.exports=v},"1f23":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],t=u;e.default=t},2392:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],t=u;e.default=t},"24a9":function(l,e,a){"use strict";(function(l,a){function u(l){return null==l||void 0==l||""==l}function t(l){for(var e=l.split("?")[1],a=e.split("&"),u={},t=0;t<a.length;t++){var v=a[t].split("=");u[v[0]]=v[1]}return u}function v(){var l=new Date,e="-",a=l.getMonth()+1,u=l.getDate();a>=1&&a<=9&&(a="0"+a),u>=0&&u<=9&&(u="0"+u);var t=l.getFullYear()+e+a+e+u;return t}function n(l){if(u(l))return"";var e=l.replace(/\//g,"-");e=e.replace("T"," ");var a=e.split(" ");return a[0]}function b(){}function r(){var l=new Date,e="-",a=l.getMonth()+1,u=l.getDate();a>=1&&a<=9&&(a="0"+a),u>=0&&u<=9&&(u="0"+u);var t=l.getHours(),v=l.getMinutes(),n=l.getSeconds();t>=0&&t<=9&&(t="0"+t),v>=0&&v<=9&&(v="0"+v),n>=0&&n<=9&&(n="0"+n);var b=l.getFullYear()+e+a+e+u+" "+t+":"+v+":"+n;return b}function o(l,e){var a=new Date(l),u=new Date(e),t=a.getTime(),v=u.getTime(),n=(v-t)/1e3,b=parseInt(n/86400),r=n-24*b*60*60,o=parseInt(r/3600),i=n-24*b*60*60-60*o*60,s=parseInt(i/60),c={total:n,day:b,hour:o,min:s};return c}function b(e){var a=new Date(e),u=["周日","周一","周二","周三","周四","周五","周六"],t={year:a.getFullYear(),month:a.getMonth()+1,day:a.getDate(),week:a.getDay(),weekStr:u[a.getDay()],hour:a.getHours(),min:a.getMinutes(),sec:a.getSeconds()};return console.log(l(t," at function.js:132")),t}function i(l){var e;return 0==l.getDay()&&(e="周日"),1==l.getDay()&&(e="周一"),2==l.getDay()&&(e="周二"),3==l.getDay()&&(e="周三"),4==l.getDay()&&(e="周四"),5==l.getDay()&&(e="周五"),6==l.getDay()&&(e="周六"),e}function s(l){var e=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!e.test(l)}function c(l){return 200!=l.statusCode?(401==l.statusCode&&(a.clearStorageSync("token"),a.navigateTo({url:"/pages/sign/sign"})),!1):0==l.data.errorCode}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var f={isEmpty:u,CheckData:c,getWeek:i,getNowDate:v,getNowDateTime:r,dateCompare:o,formatDate:n,getDateJSON:b,validMoney:s,urlToJSON:t};e.default=f}).call(this,a("0de9")["default"],a("6e42")["default"])},"66fd":function(l,e,a){"use strict";a.r(e),function(l){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function u(l){return void 0===l||null===l}function t(l){return void 0!==l&&null!==l}function v(l){return!0===l}function n(l){return!1===l}function b(l){return"string"===typeof l||"number"===typeof l||"symbol"===typeof l||"boolean"===typeof l}function r(l){return null!==l&&"object"===typeof l}var o=Object.prototype.toString;function i(l){return"[object Object]"===o.call(l)}function s(l){return"[object RegExp]"===o.call(l)}function c(l){var e=parseFloat(String(l));return e>=0&&Math.floor(e)===e&&isFinite(l)}function f(l){return t(l)&&"function"===typeof l.then&&"function"===typeof l.catch}function p(l){return null==l?"":Array.isArray(l)||i(l)&&l.toString===o?JSON.stringify(l,null,2):String(l)}function d(l){var e=parseFloat(l);return isNaN(e)?l:e}function h(l,e){for(var a=Object.create(null),u=l.split(","),t=0;t<u.length;t++)a[u[t]]=!0;return e?function(l){return a[l.toLowerCase()]}:function(l){return a[l]}}h("slot,component",!0);var y=h("key,ref,slot,slot-scope,is");function g(l,e){if(l.length){var a=l.indexOf(e);if(a>-1)return l.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(l,e){return _.call(l,e)}function k(l){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=l(a))}}var w=/-(\w)/g,$=k(function(l){return l.replace(w,function(l,e){return e?e.toUpperCase():""})}),S=k(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}),O=/\B([A-Z])/g,x=k(function(l){return l.replace(O,"-$1").toLowerCase()});function A(l,e){function a(a){var u=arguments.length;return u?u>1?l.apply(e,arguments):l.call(e,a):l.call(e)}return a._length=l.length,a}function T(l,e){return l.bind(e)}var F=Function.prototype.bind?T:A;function j(l,e){e=e||0;var a=l.length-e,u=new Array(a);while(a--)u[a]=l[a+e];return u}function C(l,e){for(var a in e)l[a]=e[a];return l}function E(l){for(var e={},a=0;a<l.length;a++)l[a]&&C(e,l[a]);return e}function D(l,e,a){}var B=function(l,e,a){return!1},P=function(l){return l};function I(l,e){if(l===e)return!0;var a=r(l),u=r(e);if(!a||!u)return!a&&!u&&String(l)===String(e);try{var t=Array.isArray(l),v=Array.isArray(e);if(t&&v)return l.length===e.length&&l.every(function(l,a){return I(l,e[a])});if(l instanceof Date&&e instanceof Date)return l.getTime()===e.getTime();if(t||v)return!1;var n=Object.keys(l),b=Object.keys(e);return n.length===b.length&&n.every(function(a){return I(l[a],e[a])})}catch(o){return!1}}function R(l,e){for(var a=0;a<l.length;a++)if(I(l[a],e))return a;return-1}function N(l){var e=!1;return function(){e||(e=!0,l.apply(this,arguments))}}var M=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:B,isReservedAttr:B,isUnknownElement:B,getTagNamespace:D,parsePlatformTagName:P,mustUseProp:B,async:!0,_lifecycleHooks:L},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(l){var e=(l+"").charCodeAt(0);return 36===e||95===e}function H(l,e,a,u){Object.defineProperty(l,e,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var z=new RegExp("[^"+V.source+".$_\\d]");function J(l){if(!z.test(l)){var e=l.split(".");return function(l){for(var a=0;a<e.length;a++){if(!l)return;l=l[e[a]]}return l}}}var W,G="__proto__"in{},K="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Y&&WXEnvironment.platform.toLowerCase(),X=K&&window.navigator.userAgent.toLowerCase(),Z=X&&/msie|trident/.test(X),ll=(X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),el=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)||"ios"===Q),al=(X&&/chrome\/\d+/.test(X),X&&/phantomjs/.test(X),X&&X.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ul)}catch(et){}var tl=function(){return void 0===W&&(W=!K&&!Y&&"undefined"!==typeof l&&(l["process"]&&"server"===l["process"].env.VUE_ENV)),W},vl=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function nl(l){return"function"===typeof l&&/native code/.test(l.toString())}var bl,rl="undefined"!==typeof Symbol&&nl(Symbol)&&"undefined"!==typeof Reflect&&nl(Reflect.ownKeys);bl="undefined"!==typeof Set&&nl(Set)?Set:function(){function l(){this.set=Object.create(null)}return l.prototype.has=function(l){return!0===this.set[l]},l.prototype.add=function(l){this.set[l]=!0},l.prototype.clear=function(){this.set=Object.create(null)},l}();var ol=D,il=0,sl=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=il++,this.subs=[]};function cl(l){sl.SharedObject.targetStack.push(l),sl.SharedObject.target=l}function fl(){sl.SharedObject.targetStack.pop(),sl.SharedObject.target=sl.SharedObject.targetStack[sl.SharedObject.targetStack.length-1]}sl.prototype.addSub=function(l){this.subs.push(l)},sl.prototype.removeSub=function(l){g(this.subs,l)},sl.prototype.depend=function(){sl.SharedObject.target&&sl.SharedObject.target.addDep(this)},sl.prototype.notify=function(){var l=this.subs.slice();for(var e=0,a=l.length;e<a;e++)l[e].update()},sl.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},sl.SharedObject.target=null,sl.SharedObject.targetStack=[];var pl=function(l,e,a,u,t,v,n,b){this.tag=l,this.data=e,this.children=a,this.text=u,this.elm=t,this.ns=void 0,this.context=v,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=n,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=b,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},dl={child:{configurable:!0}};dl.child.get=function(){return this.componentInstance},Object.defineProperties(pl.prototype,dl);var hl=function(l){void 0===l&&(l="");var e=new pl;return e.text=l,e.isComment=!0,e};function yl(l){return new pl(void 0,void 0,void 0,String(l))}function gl(l){var e=new pl(l.tag,l.data,l.children&&l.children.slice(),l.text,l.elm,l.context,l.componentOptions,l.asyncFactory);return e.ns=l.ns,e.isStatic=l.isStatic,e.key=l.key,e.isComment=l.isComment,e.fnContext=l.fnContext,e.fnOptions=l.fnOptions,e.fnScopeId=l.fnScopeId,e.asyncMeta=l.asyncMeta,e.isCloned=!0,e}var _l=Array.prototype,ml=Object.create(_l),kl=["push","pop","shift","unshift","splice","sort","reverse"];kl.forEach(function(l){var e=_l[l];H(ml,l,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var t,v=e.apply(this,a),n=this.__ob__;switch(l){case"push":case"unshift":t=a;break;case"splice":t=a.slice(2);break}return t&&n.observeArray(t),n.dep.notify(),v})});var wl=Object.getOwnPropertyNames(ml),$l=!0;function Sl(l){$l=l}var Ol=function(l){this.value=l,this.dep=new sl,this.vmCount=0,H(l,"__ob__",this),Array.isArray(l)?(G?l.push!==l.__proto__.push?Al(l,ml,wl):xl(l,ml):Al(l,ml,wl),this.observeArray(l)):this.walk(l)};function xl(l,e){l.__proto__=e}function Al(l,e,a){for(var u=0,t=a.length;u<t;u++){var v=a[u];H(l,v,e[v])}}function Tl(l,e){var a;if(r(l)&&!(l instanceof pl))return m(l,"__ob__")&&l.__ob__ instanceof Ol?a=l.__ob__:$l&&!tl()&&(Array.isArray(l)||i(l))&&Object.isExtensible(l)&&!l._isVue&&(a=new Ol(l)),e&&a&&a.vmCount++,a}function Fl(l,e,a,u,t){var v=new sl,n=Object.getOwnPropertyDescriptor(l,e);if(!n||!1!==n.configurable){var b=n&&n.get,r=n&&n.set;b&&!r||2!==arguments.length||(a=l[e]);var o=!t&&Tl(a);Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:function(){var e=b?b.call(l):a;return sl.SharedObject.target&&(v.depend(),o&&(o.dep.depend(),Array.isArray(e)&&El(e))),e},set:function(e){var u=b?b.call(l):a;e===u||e!==e&&u!==u||b&&!r||(r?r.call(l,e):a=e,o=!t&&Tl(e),v.notify())}})}}function jl(l,e,a){if(Array.isArray(l)&&c(e))return l.length=Math.max(l.length,e),l.splice(e,1,a),a;if(e in l&&!(e in Object.prototype))return l[e]=a,a;var u=l.__ob__;return l._isVue||u&&u.vmCount?a:u?(Fl(u.value,e,a),u.dep.notify(),a):(l[e]=a,a)}function Cl(l,e){if(Array.isArray(l)&&c(e))l.splice(e,1);else{var a=l.__ob__;l._isVue||a&&a.vmCount||m(l,e)&&(delete l[e],a&&a.dep.notify())}}function El(l){for(var e=void 0,a=0,u=l.length;a<u;a++)e=l[a],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&El(e)}Ol.prototype.walk=function(l){for(var e=Object.keys(l),a=0;a<e.length;a++)Fl(l,e[a])},Ol.prototype.observeArray=function(l){for(var e=0,a=l.length;e<a;e++)Tl(l[e])};var Dl=U.optionMergeStrategies;function Bl(l,e){if(!e)return l;for(var a,u,t,v=rl?Reflect.ownKeys(e):Object.keys(e),n=0;n<v.length;n++)a=v[n],"__ob__"!==a&&(u=l[a],t=e[a],m(l,a)?u!==t&&i(u)&&i(t)&&Bl(u,t):jl(l,a,t));return l}function Pl(l,e,a){return a?function(){var u="function"===typeof e?e.call(a,a):e,t="function"===typeof l?l.call(a,a):l;return u?Bl(u,t):t}:e?l?function(){return Bl("function"===typeof e?e.call(this,this):e,"function"===typeof l?l.call(this,this):l)}:e:l}function Il(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?Rl(a):a}function Rl(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function Nl(l,e,a,u){var t=Object.create(l||null);return e?C(t,e):t}Dl.data=function(l,e,a){return a?Pl(l,e,a):e&&"function"!==typeof e?l:Pl(l,e)},L.forEach(function(l){Dl[l]=Il}),M.forEach(function(l){Dl[l+"s"]=Nl}),Dl.watch=function(l,e,a,u){if(l===al&&(l=void 0),e===al&&(e=void 0),!e)return Object.create(l||null);if(!l)return e;var t={};for(var v in C(t,l),e){var n=t[v],b=e[v];n&&!Array.isArray(n)&&(n=[n]),t[v]=n?n.concat(b):Array.isArray(b)?b:[b]}return t},Dl.props=Dl.methods=Dl.inject=Dl.computed=function(l,e,a,u){if(!l)return e;var t=Object.create(null);return C(t,l),e&&C(t,e),t},Dl.provide=Pl;var Ml=function(l,e){return void 0===e?l:e};function Ll(l,e){var a=l.props;if(a){var u,t,v,n={};if(Array.isArray(a)){u=a.length;while(u--)t=a[u],"string"===typeof t&&(v=$(t),n[v]={type:null})}else if(i(a))for(var b in a)t=a[b],v=$(b),n[v]=i(t)?t:{type:t};else 0;l.props=n}}function Ul(l,e){var a=l.inject;if(a){var u=l.inject={};if(Array.isArray(a))for(var t=0;t<a.length;t++)u[a[t]]={from:a[t]};else if(i(a))for(var v in a){var n=a[v];u[v]=i(n)?C({from:v},n):{from:n}}else 0}}function Vl(l){var e=l.directives;if(e)for(var a in e){var u=e[a];"function"===typeof u&&(e[a]={bind:u,update:u})}}function ql(l,e,a){if("function"===typeof e&&(e=e.options),Ll(e,a),Ul(e,a),Vl(e),!e._base&&(e.extends&&(l=ql(l,e.extends,a)),e.mixins))for(var u=0,t=e.mixins.length;u<t;u++)l=ql(l,e.mixins[u],a);var v,n={};for(v in l)b(v);for(v in e)m(l,v)||b(v);function b(u){var t=Dl[u]||Ml;n[u]=t(l[u],e[u],a,u)}return n}function Hl(l,e,a,u){if("string"===typeof a){var t=l[e];if(m(t,a))return t[a];var v=$(a);if(m(t,v))return t[v];var n=S(v);if(m(t,n))return t[n];var b=t[a]||t[v]||t[n];return b}}function zl(l,e,a,u){var t=e[l],v=!m(a,l),n=a[l],b=Kl(Boolean,t.type);if(b>-1)if(v&&!m(t,"default"))n=!1;else if(""===n||n===x(l)){var r=Kl(String,t.type);(r<0||b<r)&&(n=!0)}if(void 0===n){n=Jl(u,t,l);var o=$l;Sl(!0),Tl(n),Sl(o)}return n}function Jl(l,e,a){if(m(e,"default")){var u=e.default;return l&&l.$options.propsData&&void 0===l.$options.propsData[a]&&void 0!==l._props[a]?l._props[a]:"function"===typeof u&&"Function"!==Wl(e.type)?u.call(l):u}}function Wl(l){var e=l&&l.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gl(l,e){return Wl(l)===Wl(e)}function Kl(l,e){if(!Array.isArray(e))return Gl(e,l)?0:-1;for(var a=0,u=e.length;a<u;a++)if(Gl(e[a],l))return a;return-1}function Yl(l,e,a){cl();try{if(e){var u=e;while(u=u.$parent){var t=u.$options.errorCaptured;if(t)for(var v=0;v<t.length;v++)try{var n=!1===t[v].call(u,l,e,a);if(n)return}catch(et){Xl(et,u,"errorCaptured hook")}}}Xl(l,e,a)}finally{fl()}}function Ql(l,e,a,u,t){var v;try{v=a?l.apply(e,a):l.call(e),v&&!v._isVue&&f(v)&&!v._handled&&(v.catch(function(l){return Yl(l,u,t+" (Promise/async)")}),v._handled=!0)}catch(et){Yl(et,u,t)}return v}function Xl(l,e,a){if(U.errorHandler)try{return U.errorHandler.call(null,l,e,a)}catch(et){et!==l&&Zl(et,null,"config.errorHandler")}Zl(l,e,a)}function Zl(l,e,a){if(!K&&!Y||"undefined"===typeof console)throw l;console.error(l)}var le,ee=[],ae=!1;function ue(){ae=!1;var l=ee.slice(0);ee.length=0;for(var e=0;e<l.length;e++)l[e]()}if("undefined"!==typeof Promise&&nl(Promise)){var te=Promise.resolve();le=function(){te.then(ue),el&&setTimeout(D)}}else if(Z||"undefined"===typeof MutationObserver||!nl(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())le="undefined"!==typeof setImmediate&&nl(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var ve=1,ne=new MutationObserver(ue),be=document.createTextNode(String(ve));ne.observe(be,{characterData:!0}),le=function(){ve=(ve+1)%2,be.data=String(ve)}}function re(l,e){var a;if(ee.push(function(){if(l)try{l.call(e)}catch(et){Yl(et,e,"nextTick")}else a&&a(e)}),ae||(ae=!0,le()),!l&&"undefined"!==typeof Promise)return new Promise(function(l){a=l})}var oe=new bl;function ie(l){se(l,oe),oe.clear()}function se(l,e){var a,u,t=Array.isArray(l);if(!(!t&&!r(l)||Object.isFrozen(l)||l instanceof pl)){if(l.__ob__){var v=l.__ob__.dep.id;if(e.has(v))return;e.add(v)}if(t){a=l.length;while(a--)se(l[a],e)}else{u=Object.keys(l),a=u.length;while(a--)se(l[u[a]],e)}}}var ce=k(function(l){var e="&"===l.charAt(0);l=e?l.slice(1):l;var a="~"===l.charAt(0);l=a?l.slice(1):l;var u="!"===l.charAt(0);return l=u?l.slice(1):l,{name:l,once:a,capture:u,passive:e}});function fe(l,e){function a(){var l=arguments,u=a.fns;if(!Array.isArray(u))return Ql(u,null,arguments,e,"v-on handler");for(var t=u.slice(),v=0;v<t.length;v++)Ql(t[v],null,l,e,"v-on handler")}return a.fns=l,a}function pe(l,e,a,t,n,b){var r,o,i,s;for(r in l)o=l[r],i=e[r],s=ce(r),u(o)||(u(i)?(u(o.fns)&&(o=l[r]=fe(o,b)),v(s.once)&&(o=l[r]=n(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==i&&(i.fns=o,l[r]=i));for(r in e)u(l[r])&&(s=ce(r),t(s.name,e[r],s.capture))}function de(l,e,a,v){var n=e.options.mpOptions&&e.options.mpOptions.properties;if(u(n))return a;var b=e.options.mpOptions.externalClasses||[],r=l.attrs,o=l.props;if(t(r)||t(o))for(var i in n){var s=x(i),c=ye(a,o,i,s,!0)||ye(a,r,i,s,!1);c&&a[i]&&-1!==b.indexOf(s)&&v[$(a[i])]&&(a[i]=v[$(a[i])])}return a}function he(l,e,a,v){var n=e.options.props;if(u(n))return de(l,e,{},v);var b={},r=l.attrs,o=l.props;if(t(r)||t(o))for(var i in n){var s=x(i);ye(b,o,i,s,!0)||ye(b,r,i,s,!1)}return de(l,e,b,v)}function ye(l,e,a,u,v){if(t(e)){if(m(e,a))return l[a]=e[a],v||delete e[a],!0;if(m(e,u))return l[a]=e[u],v||delete e[u],!0}return!1}function ge(l){for(var e=0;e<l.length;e++)if(Array.isArray(l[e]))return Array.prototype.concat.apply([],l);return l}function _e(l){return b(l)?[yl(l)]:Array.isArray(l)?ke(l):void 0}function me(l){return t(l)&&t(l.text)&&n(l.isComment)}function ke(l,e){var a,n,r,o,i=[];for(a=0;a<l.length;a++)n=l[a],u(n)||"boolean"===typeof n||(r=i.length-1,o=i[r],Array.isArray(n)?n.length>0&&(n=ke(n,(e||"")+"_"+a),me(n[0])&&me(o)&&(i[r]=yl(o.text+n[0].text),n.shift()),i.push.apply(i,n)):b(n)?me(o)?i[r]=yl(o.text+n):""!==n&&i.push(yl(n)):me(n)&&me(o)?i[r]=yl(o.text+n.text):(v(l._isVList)&&t(n.tag)&&u(n.key)&&t(e)&&(n.key="__vlist"+e+"_"+a+"__"),i.push(n)));return i}function we(l){var e=l.$options.provide;e&&(l._provided="function"===typeof e?e.call(l):e)}function $e(l){var e=Se(l.$options.inject,l);e&&(Sl(!1),Object.keys(e).forEach(function(a){Fl(l,a,e[a])}),Sl(!0))}function Se(l,e){if(l){for(var a=Object.create(null),u=rl?Reflect.ownKeys(l):Object.keys(l),t=0;t<u.length;t++){var v=u[t];if("__ob__"!==v){var n=l[v].from,b=e;while(b){if(b._provided&&m(b._provided,n)){a[v]=b._provided[n];break}b=b.$parent}if(!b)if("default"in l[v]){var r=l[v].default;a[v]="function"===typeof r?r.call(e):r}else 0}}return a}}function Oe(l,e){if(!l||!l.length)return{};for(var a={},u=0,t=l.length;u<t;u++){var v=l[u],n=v.data;if(n&&n.attrs&&n.attrs.slot&&delete n.attrs.slot,v.context!==e&&v.fnContext!==e||!n||null==n.slot)v.asyncMeta&&v.asyncMeta.data&&"page"===v.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(v):(a.default||(a.default=[])).push(v);else{var b=n.slot,r=a[b]||(a[b]=[]);"template"===v.tag?r.push.apply(r,v.children||[]):r.push(v)}}for(var o in a)a[o].every(xe)&&delete a[o];return a}function xe(l){return l.isComment&&!l.asyncFactory||" "===l.text}function Ae(l,e,u){var t,v=Object.keys(e).length>0,n=l?!!l.$stable:!v,b=l&&l.$key;if(l){if(l._normalized)return l._normalized;if(n&&u&&u!==a&&b===u.$key&&!v&&!u.$hasNormal)return u;for(var r in t={},l)l[r]&&"$"!==r[0]&&(t[r]=Te(e,r,l[r]))}else t={};for(var o in e)o in t||(t[o]=Fe(e,o));return l&&Object.isExtensible(l)&&(l._normalized=t),H(t,"$stable",n),H(t,"$key",b),H(t,"$hasNormal",v),t}function Te(l,e,a){var u=function(){var l=arguments.length?a.apply(null,arguments):a({});return l=l&&"object"===typeof l&&!Array.isArray(l)?[l]:_e(l),l&&(0===l.length||1===l.length&&l[0].isComment)?void 0:l};return a.proxy&&Object.defineProperty(l,e,{get:u,enumerable:!0,configurable:!0}),u}function Fe(l,e){return function(){return l[e]}}function je(l,e){var a,u,v,n,b;if(Array.isArray(l)||"string"===typeof l)for(a=new Array(l.length),u=0,v=l.length;u<v;u++)a[u]=e(l[u],u,u,u);else if("number"===typeof l)for(a=new Array(l),u=0;u<l;u++)a[u]=e(u+1,u,u,u);else if(r(l))if(rl&&l[Symbol.iterator]){a=[];var o=l[Symbol.iterator](),i=o.next();while(!i.done)a.push(e(i.value,a.length,u++,u)),i=o.next()}else for(n=Object.keys(l),a=new Array(n.length),u=0,v=n.length;u<v;u++)b=n[u],a[u]=e(l[b],b,u,u);return t(a)||(a=[]),a._isVList=!0,a}function Ce(l,e,a,u){var t,v=this.$scopedSlots[l];v?(a=a||{},u&&(a=C(C({},u),a)),t=v(a,this,a._i)||e):t=this.$slots[l]||e;var n=a&&a.slot;return n?this.$createElement("template",{slot:n},t):t}function Ee(l){return Hl(this.$options,"filters",l,!0)||P}function De(l,e){return Array.isArray(l)?-1===l.indexOf(e):l!==e}function Be(l,e,a,u,t){var v=U.keyCodes[e]||a;return t&&u&&!U.keyCodes[e]?De(t,u):v?De(v,l):u?x(u)!==e:void 0}function Pe(l,e,a,u,t){if(a)if(r(a)){var v;Array.isArray(a)&&(a=E(a));var n=function(n){if("class"===n||"style"===n||y(n))v=l;else{var b=l.attrs&&l.attrs.type;v=u||U.mustUseProp(e,b,n)?l.domProps||(l.domProps={}):l.attrs||(l.attrs={})}var r=$(n),o=x(n);if(!(r in v)&&!(o in v)&&(v[n]=a[n],t)){var i=l.on||(l.on={});i["update:"+n]=function(l){a[n]=l}}};for(var b in a)n(b)}else;return l}function Ie(l,e){var a=this._staticTrees||(this._staticTrees=[]),u=a[l];return u&&!e?u:(u=a[l]=this.$options.staticRenderFns[l].call(this._renderProxy,null,this),Ne(u,"__static__"+l,!1),u)}function Re(l,e,a){return Ne(l,"__once__"+e+(a?"_"+a:""),!0),l}function Ne(l,e,a){if(Array.isArray(l))for(var u=0;u<l.length;u++)l[u]&&"string"!==typeof l[u]&&Me(l[u],e+"_"+u,a);else Me(l,e,a)}function Me(l,e,a){l.isStatic=!0,l.key=e,l.isOnce=a}function Le(l,e){if(e)if(i(e)){var a=l.on=l.on?C({},l.on):{};for(var u in e){var t=a[u],v=e[u];a[u]=t?[].concat(t,v):v}}else;return l}function Ue(l,e,a,u){e=e||{$stable:!a};for(var t=0;t<l.length;t++){var v=l[t];Array.isArray(v)?Ue(v,e,a):v&&(v.proxy&&(v.fn.proxy=!0),e[v.key]=v.fn)}return u&&(e.$key=u),e}function Ve(l,e){for(var a=0;a<e.length;a+=2){var u=e[a];"string"===typeof u&&u&&(l[e[a]]=e[a+1])}return l}function qe(l,e){return"string"===typeof l?e+l:l}function He(l){l._o=Re,l._n=d,l._s=p,l._l=je,l._t=Ce,l._q=I,l._i=R,l._m=Ie,l._f=Ee,l._k=Be,l._b=Pe,l._v=yl,l._e=hl,l._u=Ue,l._g=Le,l._d=Ve,l._p=qe}function ze(l,e,u,t,n){var b,r=this,o=n.options;m(t,"_uid")?(b=Object.create(t),b._original=t):(b=t,t=t._original);var i=v(o._compiled),s=!i;this.data=l,this.props=e,this.children=u,this.parent=t,this.listeners=l.on||a,this.injections=Se(o.inject,t),this.slots=function(){return r.$slots||Ae(l.scopedSlots,r.$slots=Oe(u,t)),r.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(l.scopedSlots,this.slots())}}),i&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=Ae(l.scopedSlots,this.$slots)),o._scopeId?this._c=function(l,e,a,u){var v=ta(b,l,e,a,u,s);return v&&!Array.isArray(v)&&(v.fnScopeId=o._scopeId,v.fnContext=t),v}:this._c=function(l,e,a,u){return ta(b,l,e,a,u,s)}}function Je(l,e,u,v,n){var b=l.options,r={},o=b.props;if(t(o))for(var i in o)r[i]=zl(i,o,e||a);else t(u.attrs)&&Ge(r,u.attrs),t(u.props)&&Ge(r,u.props);var s=new ze(u,r,n,v,l),c=b.render.call(null,s._c,s);if(c instanceof pl)return We(c,u,s.parent,b,s);if(Array.isArray(c)){for(var f=_e(c)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=We(f[d],u,s.parent,b,s);return p}}function We(l,e,a,u,t){var v=gl(l);return v.fnContext=a,v.fnOptions=u,e.slot&&((v.data||(v.data={})).slot=e.slot),v}function Ge(l,e){for(var a in e)l[$(a)]=e[a]}He(ze.prototype);var Ke={init:function(l,e){if(l.componentInstance&&!l.componentInstance._isDestroyed&&l.data.keepAlive){var a=l;Ke.prepatch(a,a)}else{var u=l.componentInstance=Xe(l,$a);u.$mount(e?l.elm:void 0,e)}},prepatch:function(l,e){var a=e.componentOptions,u=e.componentInstance=l.componentInstance;Aa(u,a.propsData,a.listeners,e,a.children)},insert:function(l){var e=l.context,a=l.componentInstance;a._isMounted||(Ca(a,"onServiceCreated"),Ca(a,"onServiceAttached"),a._isMounted=!0,Ca(a,"mounted")),l.data.keepAlive&&(e._isMounted?qa(a):Fa(a,!0))},destroy:function(l){var e=l.componentInstance;e._isDestroyed||(l.data.keepAlive?ja(e,!0):e.$destroy())}},Ye=Object.keys(Ke);function Qe(l,e,a,n,b){if(!u(l)){var o=a.$options._base;if(r(l)&&(l=o.extend(l)),"function"===typeof l){var i;if(u(l.cid)&&(i=l,l=pa(i,o),void 0===l))return fa(i,e,a,n,b);e=e||{},cu(l),t(e.model)&&ea(l.options,e);var s=he(e,l,b,a);if(v(l.options.functional))return Je(l,s,e,a,n);var c=e.on;if(e.on=e.nativeOn,v(l.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var p=l.options.name||b,d=new pl("vue-component-"+l.cid+(p?"-"+p:""),e,void 0,void 0,void 0,a,{Ctor:l,propsData:s,listeners:c,tag:b,children:n},i);return d}}}function Xe(l,e){var a={_isComponent:!0,_parentVnode:l,parent:e},u=l.data.inlineTemplate;return t(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new l.componentOptions.Ctor(a)}function Ze(l){for(var e=l.hook||(l.hook={}),a=0;a<Ye.length;a++){var u=Ye[a],t=e[u],v=Ke[u];t===v||t&&t._merged||(e[u]=t?la(v,t):v)}}function la(l,e){var a=function(a,u){l(a,u),e(a,u)};return a._merged=!0,a}function ea(l,e){var a=l.model&&l.model.prop||"value",u=l.model&&l.model.event||"input";(e.attrs||(e.attrs={}))[a]=e.model.value;var v=e.on||(e.on={}),n=v[u],b=e.model.callback;t(n)?(Array.isArray(n)?-1===n.indexOf(b):n!==b)&&(v[u]=[b].concat(n)):v[u]=b}var aa=1,ua=2;function ta(l,e,a,u,t,n){return(Array.isArray(a)||b(a))&&(t=u,u=a,a=void 0),v(n)&&(t=ua),va(l,e,a,u,t)}function va(l,e,a,u,v){if(t(a)&&t(a.__ob__))return hl();if(t(a)&&t(a.is)&&(e=a.is),!e)return hl();var n,b,r;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),v===ua?u=_e(u):v===aa&&(u=ge(u)),"string"===typeof e)?(b=l.$vnode&&l.$vnode.ns||U.getTagNamespace(e),n=U.isReservedTag(e)?new pl(U.parsePlatformTagName(e),a,u,void 0,void 0,l):a&&a.pre||!t(r=Hl(l.$options,"components",e))?new pl(e,a,u,void 0,void 0,l):Qe(r,a,l,u,e)):n=Qe(e,a,l,u);return Array.isArray(n)?n:t(n)?(t(b)&&na(n,b),t(a)&&ba(a),n):hl()}function na(l,e,a){if(l.ns=e,"foreignObject"===l.tag&&(e=void 0,a=!0),t(l.children))for(var n=0,b=l.children.length;n<b;n++){var r=l.children[n];t(r.tag)&&(u(r.ns)||v(a)&&"svg"!==r.tag)&&na(r,e,a)}}function ba(l){r(l.style)&&ie(l.style),r(l.class)&&ie(l.class)}function ra(l){l._vnode=null,l._staticTrees=null;var e=l.$options,u=l.$vnode=e._parentVnode,t=u&&u.context;l.$slots=Oe(e._renderChildren,t),l.$scopedSlots=a,l._c=function(e,a,u,t){return ta(l,e,a,u,t,!1)},l.$createElement=function(e,a,u,t){return ta(l,e,a,u,t,!0)};var v=u&&u.data;Fl(l,"$attrs",v&&v.attrs||a,null,!0),Fl(l,"$listeners",e._parentListeners||a,null,!0)}var oa,ia=null;function sa(l){He(l.prototype),l.prototype.$nextTick=function(l){return re(l,this)},l.prototype._render=function(){var l,e=this,a=e.$options,u=a.render,t=a._parentVnode;t&&(e.$scopedSlots=Ae(t.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=t;try{ia=e,l=u.call(e._renderProxy,e.$createElement)}catch(et){Yl(et,e,"render"),l=e._vnode}finally{ia=null}return Array.isArray(l)&&1===l.length&&(l=l[0]),l instanceof pl||(l=hl()),l.parent=t,l}}function ca(l,e){return(l.__esModule||rl&&"Module"===l[Symbol.toStringTag])&&(l=l.default),r(l)?e.extend(l):l}function fa(l,e,a,u,t){var v=hl();return v.asyncFactory=l,v.asyncMeta={data:e,context:a,children:u,tag:t},v}function pa(l,e){if(v(l.error)&&t(l.errorComp))return l.errorComp;if(t(l.resolved))return l.resolved;var a=ia;if(a&&t(l.owners)&&-1===l.owners.indexOf(a)&&l.owners.push(a),v(l.loading)&&t(l.loadingComp))return l.loadingComp;if(a&&!t(l.owners)){var n=l.owners=[a],b=!0,o=null,i=null;a.$on("hook:destroyed",function(){return g(n,a)});var s=function(l){for(var e=0,a=n.length;e<a;e++)n[e].$forceUpdate();l&&(n.length=0,null!==o&&(clearTimeout(o),o=null),null!==i&&(clearTimeout(i),i=null))},c=N(function(a){l.resolved=ca(a,e),b?n.length=0:s(!0)}),p=N(function(e){t(l.errorComp)&&(l.error=!0,s(!0))}),d=l(c,p);return r(d)&&(f(d)?u(l.resolved)&&d.then(c,p):f(d.component)&&(d.component.then(c,p),t(d.error)&&(l.errorComp=ca(d.error,e)),t(d.loading)&&(l.loadingComp=ca(d.loading,e),0===d.delay?l.loading=!0:o=setTimeout(function(){o=null,u(l.resolved)&&u(l.error)&&(l.loading=!0,s(!1))},d.delay||200)),t(d.timeout)&&(i=setTimeout(function(){i=null,u(l.resolved)&&p(null)},d.timeout)))),b=!1,l.loading?l.loadingComp:l.resolved}}function da(l){return l.isComment&&l.asyncFactory}function ha(l){if(Array.isArray(l))for(var e=0;e<l.length;e++){var a=l[e];if(t(a)&&(t(a.componentOptions)||da(a)))return a}}function ya(l){l._events=Object.create(null),l._hasHookEvent=!1;var e=l.$options._parentListeners;e&&ka(l,e)}function ga(l,e){oa.$on(l,e)}function _a(l,e){oa.$off(l,e)}function ma(l,e){var a=oa;return function u(){var t=e.apply(null,arguments);null!==t&&a.$off(l,u)}}function ka(l,e,a){oa=l,pe(e,a||{},ga,_a,ma,l),oa=void 0}function wa(l){var e=/^hook:/;l.prototype.$on=function(l,a){var u=this;if(Array.isArray(l))for(var t=0,v=l.length;t<v;t++)u.$on(l[t],a);else(u._events[l]||(u._events[l]=[])).push(a),e.test(l)&&(u._hasHookEvent=!0);return u},l.prototype.$once=function(l,e){var a=this;function u(){a.$off(l,u),e.apply(a,arguments)}return u.fn=e,a.$on(l,u),a},l.prototype.$off=function(l,e){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(l)){for(var u=0,t=l.length;u<t;u++)a.$off(l[u],e);return a}var v,n=a._events[l];if(!n)return a;if(!e)return a._events[l]=null,a;var b=n.length;while(b--)if(v=n[b],v===e||v.fn===e){n.splice(b,1);break}return a},l.prototype.$emit=function(l){var e=this,a=e._events[l];if(a){a=a.length>1?j(a):a;for(var u=j(arguments,1),t='event handler for "'+l+'"',v=0,n=a.length;v<n;v++)Ql(a[v],e,u,e,t)}return e}}var $a=null;function Sa(l){var e=$a;return $a=l,function(){$a=e}}function Oa(l){var e=l.$options,a=e.parent;if(a&&!e.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(l)}l.$parent=a,l.$root=a?a.$root:l,l.$children=[],l.$refs={},l._watcher=null,l._inactive=null,l._directInactive=!1,l._isMounted=!1,l._isDestroyed=!1,l._isBeingDestroyed=!1}function xa(l){l.prototype._update=function(l,e){var a=this,u=a.$el,t=a._vnode,v=Sa(a);a._vnode=l,a.$el=t?a.__patch__(t,l):a.__patch__(a.$el,l,e,!1),v(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},l.prototype.$forceUpdate=function(){var l=this;l._watcher&&l._watcher.update()},l.prototype.$destroy=function(){var l=this;if(!l._isBeingDestroyed){Ca(l,"beforeDestroy"),l._isBeingDestroyed=!0;var e=l.$parent;!e||e._isBeingDestroyed||l.$options.abstract||g(e.$children,l),l._watcher&&l._watcher.teardown();var a=l._watchers.length;while(a--)l._watchers[a].teardown();l._data.__ob__&&l._data.__ob__.vmCount--,l._isDestroyed=!0,l.__patch__(l._vnode,null),Ca(l,"destroyed"),l.$off(),l.$el&&(l.$el.__vue__=null),l.$vnode&&(l.$vnode.parent=null)}}}function Aa(l,e,u,t,v){var n=t.data.scopedSlots,b=l.$scopedSlots,r=!!(n&&!n.$stable||b!==a&&!b.$stable||n&&l.$scopedSlots.$key!==n.$key),o=!!(v||l.$options._renderChildren||r);if(l.$options._parentVnode=t,l.$vnode=t,l._vnode&&(l._vnode.parent=t),l.$options._renderChildren=v,l.$attrs=t.data.attrs||a,l.$listeners=u||a,e&&l.$options.props){Sl(!1);for(var i=l._props,s=l.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=l.$options.props;i[f]=zl(f,p,e,l)}Sl(!0),l.$options.propsData=e}l._$updateProperties&&l._$updateProperties(l),u=u||a;var d=l.$options._parentListeners;l.$options._parentListeners=u,ka(l,u,d),o&&(l.$slots=Oe(v,t.context),l.$forceUpdate())}function Ta(l){while(l&&(l=l.$parent))if(l._inactive)return!0;return!1}function Fa(l,e){if(e){if(l._directInactive=!1,Ta(l))return}else if(l._directInactive)return;if(l._inactive||null===l._inactive){l._inactive=!1;for(var a=0;a<l.$children.length;a++)Fa(l.$children[a]);Ca(l,"activated")}}function ja(l,e){if((!e||(l._directInactive=!0,!Ta(l)))&&!l._inactive){l._inactive=!0;for(var a=0;a<l.$children.length;a++)ja(l.$children[a]);Ca(l,"deactivated")}}function Ca(l,e){cl();var a=l.$options[e],u=e+" hook";if(a)for(var t=0,v=a.length;t<v;t++)Ql(a[t],l,null,l,u);l._hasHookEvent&&l.$emit("hook:"+e),fl()}var Ea=[],Da=[],Ba={},Pa=!1,Ia=!1,Ra=0;function Na(){Ra=Ea.length=Da.length=0,Ba={},Pa=Ia=!1}var Ma=Date.now;if(K&&!Z){var La=window.performance;La&&"function"===typeof La.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return La.now()})}function Ua(){var l,e;for(Ma(),Ia=!0,Ea.sort(function(l,e){return l.id-e.id}),Ra=0;Ra<Ea.length;Ra++)l=Ea[Ra],l.before&&l.before(),e=l.id,Ba[e]=null,l.run();var a=Da.slice(),u=Ea.slice();Na(),Ha(a),Va(u),vl&&U.devtools&&vl.emit("flush")}function Va(l){var e=l.length;while(e--){var a=l[e],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Ca(u,"updated")}}function qa(l){l._inactive=!1,Da.push(l)}function Ha(l){for(var e=0;e<l.length;e++)l[e]._inactive=!0,Fa(l[e],!0)}function za(l){var e=l.id;if(null==Ba[e]){if(Ba[e]=!0,Ia){var a=Ea.length-1;while(a>Ra&&Ea[a].id>l.id)a--;Ea.splice(a+1,0,l)}else Ea.push(l);Pa||(Pa=!0,re(Ua))}}var Ja=0,Wa=function(l,e,a,u,t){this.vm=l,t&&(l._watcher=this),l._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ja,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new bl,this.newDepIds=new bl,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Wa.prototype.get=function(){var l;cl(this);var e=this.vm;try{l=this.getter.call(e,e)}catch(et){if(!this.user)throw et;Yl(et,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ie(l),fl(),this.cleanupDeps()}return l},Wa.prototype.addDep=function(l){var e=l.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(l),this.depIds.has(e)||l.addSub(this))},Wa.prototype.cleanupDeps=function(){var l=this.deps.length;while(l--){var e=this.deps[l];this.newDepIds.has(e.id)||e.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Wa.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():za(this)},Wa.prototype.run=function(){if(this.active){var l=this.get();if(l!==this.value||r(l)||this.deep){var e=this.value;if(this.value=l,this.user)try{this.cb.call(this.vm,l,e)}catch(et){Yl(et,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,l,e)}}},Wa.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wa.prototype.depend=function(){var l=this.deps.length;while(l--)this.deps[l].depend()},Wa.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var l=this.deps.length;while(l--)this.deps[l].removeSub(this);this.active=!1}};var Ga={enumerable:!0,configurable:!0,get:D,set:D};function Ka(l,e,a){Ga.get=function(){return this[e][a]},Ga.set=function(l){this[e][a]=l},Object.defineProperty(l,a,Ga)}function Ya(l){l._watchers=[];var e=l.$options;e.props&&Qa(l,e.props),e.methods&&vu(l,e.methods),e.data?Xa(l):Tl(l._data={},!0),e.computed&&eu(l,e.computed),e.watch&&e.watch!==al&&nu(l,e.watch)}function Qa(l,e){var a=l.$options.propsData||{},u=l._props={},t=l.$options._propKeys=[],v=!l.$parent;v||Sl(!1);var n=function(v){t.push(v);var n=zl(v,e,a,l);Fl(u,v,n),v in l||Ka(l,"_props",v)};for(var b in e)n(b);Sl(!0)}function Xa(l){var e=l.$options.data;e=l._data="function"===typeof e?Za(e,l):e||{},i(e)||(e={});var a=Object.keys(e),u=l.$options.props,t=(l.$options.methods,a.length);while(t--){var v=a[t];0,u&&m(u,v)||q(v)||Ka(l,"_data",v)}Tl(e,!0)}function Za(l,e){cl();try{return l.call(e,e)}catch(et){return Yl(et,e,"data()"),{}}finally{fl()}}var lu={lazy:!0};function eu(l,e){var a=l._computedWatchers=Object.create(null),u=tl();for(var t in e){var v=e[t],n="function"===typeof v?v:v.get;0,u||(a[t]=new Wa(l,n||D,D,lu)),t in l||au(l,t,v)}}function au(l,e,a){var u=!tl();"function"===typeof a?(Ga.get=u?uu(e):tu(a),Ga.set=D):(Ga.get=a.get?u&&!1!==a.cache?uu(e):tu(a.get):D,Ga.set=a.set||D),Object.defineProperty(l,e,Ga)}function uu(l){return function(){var e=this._computedWatchers&&this._computedWatchers[l];if(e)return e.dirty&&e.evaluate(),sl.SharedObject.target&&e.depend(),e.value}}function tu(l){return function(){return l.call(this,this)}}function vu(l,e){l.$options.props;for(var a in e)l[a]="function"!==typeof e[a]?D:F(e[a],l)}function nu(l,e){for(var a in e){var u=e[a];if(Array.isArray(u))for(var t=0;t<u.length;t++)bu(l,a,u[t]);else bu(l,a,u)}}function bu(l,e,a,u){return i(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=l[a]),l.$watch(e,a,u)}function ru(l){var e={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(l.prototype,"$data",e),Object.defineProperty(l.prototype,"$props",a),l.prototype.$set=jl,l.prototype.$delete=Cl,l.prototype.$watch=function(l,e,a){var u=this;if(i(e))return bu(u,l,e,a);a=a||{},a.user=!0;var t=new Wa(u,l,e,a);if(a.immediate)try{e.call(u,t.value)}catch(v){Yl(v,u,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var ou=0;function iu(l){l.prototype._init=function(l){var e=this;e._uid=ou++,e._isVue=!0,l&&l._isComponent?su(e,l):e.$options=ql(cu(e.constructor),l||{},e),e._renderProxy=e,e._self=e,Oa(e),ya(e),ra(e),Ca(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&$e(e),Ya(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Ca(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function su(l,e){var a=l.$options=Object.create(l.constructor.options),u=e._parentVnode;a.parent=e.parent,a._parentVnode=u;var t=u.componentOptions;a.propsData=t.propsData,a._parentListeners=t.listeners,a._renderChildren=t.children,a._componentTag=t.tag,e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns)}function cu(l){var e=l.options;if(l.super){var a=cu(l.super),u=l.superOptions;if(a!==u){l.superOptions=a;var t=fu(l);t&&C(l.extendOptions,t),e=l.options=ql(a,l.extendOptions),e.name&&(e.components[e.name]=l)}}return e}function fu(l){var e,a=l.options,u=l.sealedOptions;for(var t in a)a[t]!==u[t]&&(e||(e={}),e[t]=a[t]);return e}function pu(l){this._init(l)}function du(l){l.use=function(l){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(l)>-1)return this;var a=j(arguments,1);return a.unshift(this),"function"===typeof l.install?l.install.apply(l,a):"function"===typeof l&&l.apply(null,a),e.push(l),this}}function hu(l){l.mixin=function(l){return this.options=ql(this.options,l),this}}function yu(l){l.cid=0;var e=1;l.extend=function(l){l=l||{};var a=this,u=a.cid,t=l._Ctor||(l._Ctor={});if(t[u])return t[u];var v=l.name||a.options.name;var n=function(l){this._init(l)};return n.prototype=Object.create(a.prototype),n.prototype.constructor=n,n.cid=e++,n.options=ql(a.options,l),n["super"]=a,n.options.props&&gu(n),n.options.computed&&_u(n),n.extend=a.extend,n.mixin=a.mixin,n.use=a.use,M.forEach(function(l){n[l]=a[l]}),v&&(n.options.components[v]=n),n.superOptions=a.options,n.extendOptions=l,n.sealedOptions=C({},n.options),t[u]=n,n}}function gu(l){var e=l.options.props;for(var a in e)Ka(l.prototype,"_props",a)}function _u(l){var e=l.options.computed;for(var a in e)au(l.prototype,a,e[a])}function mu(l){M.forEach(function(e){l[e]=function(l,a){return a?("component"===e&&i(a)&&(a.name=a.name||l,a=this.options._base.extend(a)),"directive"===e&&"function"===typeof a&&(a={bind:a,update:a}),this.options[e+"s"][l]=a,a):this.options[e+"s"][l]}})}function ku(l){return l&&(l.Ctor.options.name||l.tag)}function wu(l,e){return Array.isArray(l)?l.indexOf(e)>-1:"string"===typeof l?l.split(",").indexOf(e)>-1:!!s(l)&&l.test(e)}function $u(l,e){var a=l.cache,u=l.keys,t=l._vnode;for(var v in a){var n=a[v];if(n){var b=ku(n.componentOptions);b&&!e(b)&&Su(a,v,u,t)}}}function Su(l,e,a,u){var t=l[e];!t||u&&t.tag===u.tag||t.componentInstance.$destroy(),l[e]=null,g(a,e)}iu(pu),ru(pu),wa(pu),xa(pu),sa(pu);var Ou=[String,RegExp,Array],xu={name:"keep-alive",abstract:!0,props:{include:Ou,exclude:Ou,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var l in this.cache)Su(this.cache,l,this.keys)},mounted:function(){var l=this;this.$watch("include",function(e){$u(l,function(l){return wu(e,l)})}),this.$watch("exclude",function(e){$u(l,function(l){return!wu(e,l)})})},render:function(){var l=this.$slots.default,e=ha(l),a=e&&e.componentOptions;if(a){var u=ku(a),t=this,v=t.include,n=t.exclude;if(v&&(!u||!wu(v,u))||n&&u&&wu(n,u))return e;var b=this,r=b.cache,o=b.keys,i=null==e.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):e.key;r[i]?(e.componentInstance=r[i].componentInstance,g(o,i),o.push(i)):(r[i]=e,o.push(i),this.max&&o.length>parseInt(this.max)&&Su(r,o[0],o,this._vnode)),e.data.keepAlive=!0}return e||l&&l[0]}},Au={KeepAlive:xu};function Tu(l){var e={get:function(){return U}};Object.defineProperty(l,"config",e),l.util={warn:ol,extend:C,mergeOptions:ql,defineReactive:Fl},l.set=jl,l.delete=Cl,l.nextTick=re,l.observable=function(l){return Tl(l),l},l.options=Object.create(null),M.forEach(function(e){l.options[e+"s"]=Object.create(null)}),l.options._base=l,C(l.options.components,Au),du(l),hu(l),yu(l),mu(l)}Tu(pu),Object.defineProperty(pu.prototype,"$isServer",{get:tl}),Object.defineProperty(pu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pu,"FunctionalRenderContext",{value:ze}),pu.version="2.6.11";var Fu="[object Array]",ju="[object Object]";function Cu(l,e){var a={};return Eu(l,e),Du(l,e,"",a),a}function Eu(l,e){if(l!==e){var a=Pu(l),u=Pu(e);if(a==ju&&u==ju){if(Object.keys(l).length>=Object.keys(e).length)for(var t in e){var v=l[t];void 0===v?l[t]=null:Eu(v,e[t])}}else a==Fu&&u==Fu&&l.length>=e.length&&e.forEach(function(e,a){Eu(l[a],e)})}}function Du(l,e,a,u){if(l!==e){var t=Pu(l),v=Pu(e);if(t==ju)if(v!=ju||Object.keys(l).length<Object.keys(e).length)Bu(u,a,l);else{var n=function(t){var v=l[t],n=e[t],b=Pu(v),r=Pu(n);if(b!=Fu&&b!=ju)v!=e[t]&&Bu(u,(""==a?"":a+".")+t,v);else if(b==Fu)r!=Fu?Bu(u,(""==a?"":a+".")+t,v):v.length<n.length?Bu(u,(""==a?"":a+".")+t,v):v.forEach(function(l,e){Du(l,n[e],(""==a?"":a+".")+t+"["+e+"]",u)});else if(b==ju)if(r!=ju||Object.keys(v).length<Object.keys(n).length)Bu(u,(""==a?"":a+".")+t,v);else for(var o in v)Du(v[o],n[o],(""==a?"":a+".")+t+"."+o,u)};for(var b in l)n(b)}else t==Fu?v!=Fu?Bu(u,a,l):l.length<e.length?Bu(u,a,l):l.forEach(function(l,t){Du(l,e[t],a+"["+t+"]",u)}):Bu(u,a,l)}}function Bu(l,e,a){l[e]=a}function Pu(l){return Object.prototype.toString.call(l)}function Iu(l){if(l.__next_tick_callbacks&&l.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=l.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+l._uid+"]:flushCallbacks["+l.__next_tick_callbacks.length+"]")}var a=l.__next_tick_callbacks.slice(0);l.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Ru(l){return Ea.find(function(e){return l._watcher===e})}function Nu(l,e){if(!l.__next_tick_pending&&!Ru(l)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=l.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+l._uid+"]:nextVueTick")}return re(e,l)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var u=l.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+l._uid+"]:nextMPTick")}var t;if(l.__next_tick_callbacks||(l.__next_tick_callbacks=[]),l.__next_tick_callbacks.push(function(){if(e)try{e.call(l)}catch(et){Yl(et,l,"nextTick")}else t&&t(l)}),!e&&"undefined"!==typeof Promise)return new Promise(function(l){t=l})}function Mu(l){var e=Object.create(null),a=[].concat(Object.keys(l._data||{}),Object.keys(l._computedWatchers||{}));return a.reduce(function(e,a){return e[a]=l[a],e},e),Object.assign(e,l.$mp.data||{}),Array.isArray(l.$options.behaviors)&&-1!==l.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=l.name,e["value"]=l.value),JSON.parse(JSON.stringify(e))}var Lu=function(l,e){var a=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,t=Object.create(null);try{t=Mu(this)}catch(b){console.error(b)}t.__webviewId__=u.data.__webviewId__;var v=Object.create(null);Object.keys(t).forEach(function(l){v[l]=u.data[l]});var n=Cu(t,v);Object.keys(n).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(n)),this.__next_tick_pending=!0,u.setData(n,function(){a.__next_tick_pending=!1,Iu(a)})):Iu(this)}};function Uu(){}function Vu(l,e,a){if(!l.mpType)return l;"app"===l.mpType&&(l.$options.render=Uu),l.$options.render||(l.$options.render=Uu),"mp-toutiao"!==l.mpHost&&Ca(l,"beforeMount");var u=function(){l._update(l._render(),a)};return new Wa(l,u,D,{before:function(){l._isMounted&&!l._isDestroyed&&Ca(l,"beforeUpdate")}},!0),a=!1,l}function qu(l,e){return t(l)||t(e)?Hu(l,zu(e)):""}function Hu(l,e){return l?e?l+" "+e:l:e||""}function zu(l){return Array.isArray(l)?Ju(l):r(l)?Wu(l):"string"===typeof l?l:""}function Ju(l){for(var e,a="",u=0,v=l.length;u<v;u++)t(e=zu(l[u]))&&""!==e&&(a&&(a+=" "),a+=e);return a}function Wu(l){var e="";for(var a in l)l[a]&&(e&&(e+=" "),e+=a);return e}var Gu=k(function(l){var e={},a=/;(?![^(]*\))/g,u=/:(.+)/;return l.split(a).forEach(function(l){if(l){var a=l.split(u);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e});function Ku(l){return Array.isArray(l)?E(l):"string"===typeof l?Gu(l):l}var Yu=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qu(l,e){var a=e.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?l[u]:Qu(l[u],a.slice(1).join("."))}function Xu(l){l.config.errorHandler=function(l){var e=getApp();e&&e.onError?e.onError(l):console.error(l)};var e=l.prototype.$emit;l.prototype.$emit=function(l){return this.$scope&&l&&this.$scope["triggerEvent"](l,{__args__:j(arguments,1)}),e.apply(this,arguments)},l.prototype.$nextTick=function(l){return Nu(this,l)},Yu.forEach(function(e){l.prototype[e]=function(l){return this.$scope&&this.$scope[e]?this.$scope[e](l):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(l):"createIntersectionObserver"===e?my.createIntersectionObserver(l):void 0:void 0}}),l.prototype.__init_provide=we,l.prototype.__init_injections=$e,l.prototype.__call_hook=function(l,e){var a=this;cl();var u,t=a.$options[l],v=l+" hook";if(t)for(var n=0,b=t.length;n<b;n++)u=Ql(t[n],a,e?[e]:null,a,v);return a._hasHookEvent&&a.$emit("hook:"+l,e),fl(),u},l.prototype.__set_model=function(l,e,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),l||(l=this),l[e]=a},l.prototype.__set_sync=function(l,e,a){l||(l=this),l[e]=a},l.prototype.__get_orig=function(l){return i(l)&&l["$orig"]||l},l.prototype.__get_value=function(l,e){return Qu(e||this,l)},l.prototype.__get_class=function(l,e){return qu(e,l)},l.prototype.__get_style=function(l,e){if(!l&&!e)return"";var a=Ku(l),u=e?C(e,a):a;return Object.keys(u).map(function(l){return x(l)+":"+u[l]}).join(";")},l.prototype.__map=function(l,e){var a,u,t,v,n;if(Array.isArray(l)){for(a=new Array(l.length),u=0,t=l.length;u<t;u++)a[u]=e(l[u],u);return a}if(r(l)){for(v=Object.keys(l),a=Object.create(null),u=0,t=v.length;u<t;u++)n=v[u],a[n]=e(l[n],n,u);return a}return[]}}var Zu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function lt(l){var e=l.extend;l.extend=function(l){l=l||{};var a=l.methods;return a&&Object.keys(a).forEach(function(e){-1!==Zu.indexOf(e)&&(l[e]=a[e],delete a[e])}),e.call(this,l)};var a=l.config.optionMergeStrategies,u=a.created;Zu.forEach(function(l){a[l]=u}),l.prototype.__lifecycle_hooks__=Zu}pu.prototype.__patch__=Lu,pu.prototype.$mount=function(l,e){return Vu(this,l,e)},lt(pu),Xu(pu),e["default"]=pu}.call(this,a("c8ba"))},"688e":function(l,e,a){"use strict";
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */!function(e,a){l.exports=a()}(0,function(){return function(l){var e={};function a(u){if(e[u])return e[u].exports;var t=e[u]={i:u,l:!1,exports:{}};return l[u].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=l,a.c=e,a.d=function(l,e,u){a.o(l,e)||Object.defineProperty(l,e,{enumerable:!0,get:u})},a.r=function(l){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a.t=function(l,e){if(1&e&&(l=a(l)),8&e)return l;if(4&e&&"object"==typeof l&&l&&l.__esModule)return l;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:l}),2&e&&"string"!=typeof l)for(var t in l)a.d(u,t,function(e){return l[e]}.bind(null,t));return u},a.n=function(l){var e=l&&l.__esModule?function(){return l.default}:function(){return l};return a.d(e,"a",e),e},a.o=function(l,e){return Object.prototype.hasOwnProperty.call(l,e)},a.p="",a(a.s=0)}([function(l,e,a){var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(l){return typeof l}:function(l){return l&&"function"==typeof Symbol&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},t=function(){function l(l,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}return function(e,a,u){return a&&l(e.prototype,a),u&&l(e,u),e}}(),v=r(a(1)),n=r(a(3)),b=r(a(4));function r(l){return l&&l.__esModule?l:{default:l}}var o=function(l){function e(l,a){!function(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var u=function(l,e){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?l:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.resolveOptions(a),u.listenClick(l),u}return function(l,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);l.prototype=Object.create(e&&e.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(l,e):l.__proto__=e)}(e,n.default),t(e,[{key:"resolveOptions",value:function(){var l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof l.action?l.action:this.defaultAction,this.target="function"==typeof l.target?l.target:this.defaultTarget,this.text="function"==typeof l.text?l.text:this.defaultText,this.container="object"===u(l.container)?l.container:document.body}},{key:"listenClick",value:function(l){var e=this;this.listener=(0,b.default)(l,"click",function(l){return e.onClick(l)})}},{key:"onClick",value:function(l){var e=l.delegateTarget||l.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new v.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(l){return i("action",l)}},{key:"defaultTarget",value:function(l){var e=i("target",l);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(l){return i("text",l)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof l?[l]:l,a=!!document.queryCommandSupported;return e.forEach(function(l){a=a&&!!document.queryCommandSupported(l)}),a}}]),e}();function i(l,e){var a="data-clipboard-"+l;if(e.hasAttribute(a))return e.getAttribute(a)}l.exports=o},function(l,e,a){var u,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(l){return typeof l}:function(l){return l&&"function"==typeof Symbol&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},v=function(){function l(l,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}return function(e,a,u){return a&&l(e.prototype,a),u&&l(e,u),e}}(),n=a(2),b=(u=n)&&u.__esModule?u:{default:u},r=function(){function e(l){!function(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(l),this.initSelection()}return v(e,[{key:"resolveOptions",value:function(){var l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=l.action,this.container=l.container,this.emitter=l.emitter,this.target=l.target,this.text=l.text,this.trigger=l.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var l=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return l.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=a+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,b.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,b.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(l){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(l){this.emitter.emit(l?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=l,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(l){if(void 0!==l){if(!l||"object"!==(void 0===l?"undefined":t(l))||1!==l.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&l.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(l.hasAttribute("readonly")||l.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=l}},get:function(){return this._target}}]),e}();l.exports=r},function(l,e){l.exports=function(l){var e;if("SELECT"===l.nodeName)l.focus(),e=l.value;else if("INPUT"===l.nodeName||"TEXTAREA"===l.nodeName){var a=l.hasAttribute("readonly");a||l.setAttribute("readonly",""),l.select(),l.setSelectionRange(0,l.value.length),a||l.removeAttribute("readonly"),e=l.value}else{l.hasAttribute("contenteditable")&&l.focus();var u=window.getSelection(),t=document.createRange();t.selectNodeContents(l),u.removeAllRanges(),u.addRange(t),e=u.toString()}return e}},function(l,e){function a(){}a.prototype={on:function(l,e,a){var u=this.e||(this.e={});return(u[l]||(u[l]=[])).push({fn:e,ctx:a}),this},once:function(l,e,a){var u=this;function t(){u.off(l,t),e.apply(a,arguments)}return t._=e,this.on(l,t,a)},emit:function(l){for(var e=[].slice.call(arguments,1),a=((this.e||(this.e={}))[l]||[]).slice(),u=0,t=a.length;u<t;u++)a[u].fn.apply(a[u].ctx,e);return this},off:function(l,e){var a=this.e||(this.e={}),u=a[l],t=[];if(u&&e)for(var v=0,n=u.length;v<n;v++)u[v].fn!==e&&u[v].fn._!==e&&t.push(u[v]);return t.length?a[l]=t:delete a[l],this}},l.exports=a},function(l,e,a){var u=a(5),t=a(6);l.exports=function(l,e,a){if(!l&&!e&&!a)throw new Error("Missing required arguments");if(!u.string(e))throw new TypeError("Second argument must be a String");if(!u.fn(a))throw new TypeError("Third argument must be a Function");if(u.node(l))return c=e,f=a,(s=l).addEventListener(c,f),{destroy:function(){s.removeEventListener(c,f)}};if(u.nodeList(l))return r=l,o=e,i=a,Array.prototype.forEach.call(r,function(l){l.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(l){l.removeEventListener(o,i)})}};if(u.string(l))return v=l,n=e,b=a,t(document.body,v,n,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var v,n,b,r,o,i,s,c,f}},function(l,e){e.node=function(l){return void 0!==l&&l instanceof HTMLElement&&1===l.nodeType},e.nodeList=function(l){var a=Object.prototype.toString.call(l);return void 0!==l&&("[object NodeList]"===a||"[object HTMLCollection]"===a)&&"length"in l&&(0===l.length||e.node(l[0]))},e.string=function(l){return"string"==typeof l||l instanceof String},e.fn=function(l){return"[object Function]"===Object.prototype.toString.call(l)}},function(l,e,a){var u=a(7);function t(l,e,a,t,v){var n=function(l,e,a,t){return function(a){a.delegateTarget=u(a.target,e),a.delegateTarget&&t.call(l,a)}}.apply(this,arguments);return l.addEventListener(a,n,v),{destroy:function(){l.removeEventListener(a,n,v)}}}l.exports=function(l,e,a,u,v){return"function"==typeof l.addEventListener?t.apply(null,arguments):"function"==typeof a?t.bind(null,document).apply(null,arguments):("string"==typeof l&&(l=document.querySelectorAll(l)),Array.prototype.map.call(l,function(l){return t(l,e,a,u,v)}))}},function(l,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}l.exports=function(l,e){for(;l&&9!==l.nodeType;){if("function"==typeof l.matches&&l.matches(e))return l;l=l.parentNode}}}])})},"6e42":function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=Se,e.createPage=$e,e.default=void 0;var u=t(a("66fd"));function t(l){return l&&l.__esModule?l:{default:l}}function v(l,e){return r(l)||b(l,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function b(l,e){var a=[],u=!0,t=!1,v=void 0;try{for(var n,b=l[Symbol.iterator]();!(u=(n=b.next()).done);u=!0)if(a.push(n.value),e&&a.length===e)break}catch(r){t=!0,v=r}finally{try{u||null==b["return"]||b["return"]()}finally{if(t)throw v}}return a}function r(l){if(Array.isArray(l))return l}function o(l,e,a){return e in l?Object.defineProperty(l,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[e]=a,l}function i(l){return f(l)||c(l)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function f(l){if(Array.isArray(l)){for(var e=0,a=new Array(l.length);e<l.length;e++)a[e]=l[e];return a}}var p=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function h(l){return"function"===typeof l}function y(l){return"string"===typeof l}function g(l){return"[object Object]"===p.call(l)}function _(l,e){return d.call(l,e)}function m(){}function k(l){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=l(a))}}var w=/-(\w)/g,$=k(function(l){return l.replace(w,function(l,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],O={},x={};function A(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?T(a):a}function T(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function F(l,e){var a=l.indexOf(e);-1!==a&&l.splice(a,1)}function j(l,e){Object.keys(e).forEach(function(a){-1!==S.indexOf(a)&&h(e[a])&&(l[a]=A(l[a],e[a]))})}function C(l,e){l&&e&&Object.keys(e).forEach(function(a){-1!==S.indexOf(a)&&h(e[a])&&F(l[a],e[a])})}function E(l,e){"string"===typeof l&&g(e)?j(x[l]||(x[l]={}),e):g(l)&&j(O,l)}function D(l,e){"string"===typeof l?g(e)?C(x[l],e):delete x[l]:g(l)&&C(O,l)}function B(l){return function(e){return l(e)||e}}function P(l){return!!l&&("object"===typeof l||"function"===typeof l)&&"function"===typeof l.then}function I(l,e){for(var a=!1,u=0;u<l.length;u++){var t=l[u];if(a)a=Promise.then(B(t));else{var v=t(e);if(P(v)&&(a=Promise.resolve(v)),!1===v)return{then:function(){}}}}return a||{then:function(l){return l(e)}}}function R(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(l[a])){var u=e[a];e[a]=function(e){I(l[a],e).then(function(l){return h(u)&&u(l)||l})}}}),e}function N(l,e){var a=[];Array.isArray(O.returnValue)&&a.push.apply(a,i(O.returnValue));var u=x[l];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,i(u.returnValue)),a.forEach(function(l){e=l(e)||e}),e}function M(l){var e=Object.create(null);Object.keys(O).forEach(function(l){"returnValue"!==l&&(e[l]=O[l].slice())});var a=x[l];return a&&Object.keys(a).forEach(function(l){"returnValue"!==l&&(e[l]=(e[l]||[]).concat(a[l]))}),e}function L(l,e,a){for(var u=arguments.length,t=new Array(u>3?u-3:0),v=3;v<u;v++)t[v-3]=arguments[v];var n=M(l);if(n&&Object.keys(n).length){if(Array.isArray(n.invoke)){var b=I(n.invoke,a);return b.then(function(l){return e.apply(void 0,[R(n,l)].concat(t))})}return e.apply(void 0,[R(n,a)].concat(t))}return e.apply(void 0,[a].concat(t))}var U={returnValue:function(l){return P(l)?l.then(function(l){return l[1]}).catch(function(l){return l[0]}):l}},V=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,H=/^on/;function z(l){return q.test(l)}function J(l){return V.test(l)}function W(l){return H.test(l)&&"onPush"!==l}function G(l){return l.then(function(l){return[null,l]}).catch(function(l){return[l]})}function K(l){return!(z(l)||J(l)||W(l))}function Y(l,e){return K(l)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,t=new Array(u>1?u-1:0),v=1;v<u;v++)t[v-1]=arguments[v];return h(a.success)||h(a.fail)||h(a.complete)?N(l,L.apply(void 0,[l,e,a].concat(t))):N(l,G(new Promise(function(u,v){L.apply(void 0,[l,e,Object.assign({},a,{success:u,fail:v})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(l){var e=this.constructor;return this.then(function(a){return e.resolve(l()).then(function(){return a})},function(a){return e.resolve(l()).then(function(){throw a})})})})))}:e}var Q=1e-4,X=750,Z=!1,ll=0,el=0;function al(){var l=wx.getSystemInfoSync(),e=l.platform,a=l.pixelRatio,u=l.windowWidth;ll=u,el=a,Z="ios"===e}function ul(l,e){if(0===ll&&al(),l=Number(l),0===l)return 0;var a=l/X*(e||ll);return a<0&&(a=-a),a=Math.floor(a+Q),0===a?1!==el&&Z?.5:1:l<0?-a:a}var tl={promiseInterceptor:U},vl=Object.freeze({__proto__:null,upx2px:ul,interceptors:tl,addInterceptor:E,removeInterceptor:D}),nl={},bl=[],rl=[],ol=["success","fail","cancel","complete"];function il(l,e,a){return function(u){return e(cl(l,u,a))}}function sl(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var v=!0===t?e:{};for(var n in h(a)&&(a=a(e,v)||{}),e)if(_(a,n)){var b=a[n];h(b)&&(b=b(e[n],e,v)),b?y(b)?v[b]=e[n]:g(b)&&(v[b.name?b.name:n]=b.value):console.warn("app-plus ".concat(l,"暂不支持").concat(n))}else-1!==ol.indexOf(n)?v[n]=il(l,e[n],u):t||(v[n]=e[n]);return v}return h(e)&&(e=il(l,e,u)),e}function cl(l,e,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(nl.returnValue)&&(e=nl.returnValue(l,e)),sl(l,e,a,{},u)}function fl(l,e){if(_(nl,l)){var a=nl[l];return a?function(e,u){var t=a;h(a)&&(t=a(e)),e=sl(l,e,t.args,t.returnValue);var v=[e];"undefined"!==typeof u&&v.push(u);var n=wx[t.name||l].apply(wx,v);return J(l)?cl(l,n,t.returnValue,z(l)):n}:function(){console.error("app-plus 暂不支持".concat(l))}}return e}var pl=Object.create(null),dl=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function hl(l){return function(e){var a=e.fail,u=e.complete,t={errMsg:"".concat(l,":fail:暂不支持 ").concat(l," 方法")};h(a)&&a(t),h(u)&&u(t)}}dl.forEach(function(l){pl[l]=hl(l)});var yl=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return l||(l=new u.default),l};var l}();function gl(l,e,a){return l[e].apply(l,a)}function _l(){return gl(yl(),"$on",Array.prototype.slice.call(arguments))}function ml(){return gl(yl(),"$off",Array.prototype.slice.call(arguments))}function kl(){return gl(yl(),"$once",Array.prototype.slice.call(arguments))}function wl(){return gl(yl(),"$emit",Array.prototype.slice.call(arguments))}var $l=Object.freeze({__proto__:null,$on:_l,$off:ml,$once:kl,$emit:wl});function Sl(l){return"undefined"!==typeof weex?weex.requireModule(l):__requireNativePlugin__(l)}function Ol(l){l.$processed=!0,l.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},l.id)};var e=[];if(l.onMessage=function(l){e.push(l)},l.$consumeMessage=function(l){e.forEach(function(e){return e(l)})},l.__uniapp_mask_id){var a=l.__uniapp_mask,u="0"===l.__uniapp_mask_id?{setStyle:function(l){var e=l.mask;Sl("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(l.__uniapp_mask_id),t=l.show,v=l.hide,n=l.close,b=function(){u.setStyle({mask:a})},r=function(){u.setStyle({mask:"none"})};l.show=function(){b();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return t.apply(l,a)},l.hide=function(){r();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return v.apply(l,a)},l.close=function(){r(),e=[];for(var a=arguments.length,u=new Array(a),t=0;t<a;t++)u[t]=arguments[t];return n.apply(l,u)}}}function xl(l){var e=plus.webview.getWebviewById(l);return e&&!e.$processed&&Ol(e),e}var Al=Object.freeze({__proto__:null,getSubNVueById:xl,requireNativePlugin:Sl}),Tl=Page,Fl=Component,jl=/:/g,Cl=k(function(l){return $(l.replace(jl,"-"))});function El(l){if(wx.canIUse("nextTick")){var e=l.triggerEvent;l.triggerEvent=function(a){for(var u=arguments.length,t=new Array(u>1?u-1:0),v=1;v<u;v++)t[v-1]=arguments[v];return e.apply(l,[Cl(a)].concat(t))}}}function Dl(l,e){var a=e[l];e[l]=a?function(){El(this);for(var l=arguments.length,e=new Array(l),u=0;u<l;u++)e[u]=arguments[u];return a.apply(this,e)}:function(){El(this)}}Page=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Dl("onLoad",l),Tl(l)},Component=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Dl("created",l),Fl(l)};var Bl=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Pl(l,e){var a=l.$mp[l.mpType];e.forEach(function(e){_(a,e)&&(l[e]=a[e])})}function Il(l,e){if(!e)return!0;if(u.default.options&&Array.isArray(u.default.options[l]))return!0;if(e=e.default||e,h(e))return!!h(e.extendOptions[l])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[l]));if(h(e[l]))return!0;var a=e.mixins;return Array.isArray(a)?!!a.find(function(e){return Il(l,e)}):void 0}function Rl(l,e,a){e.forEach(function(e){Il(e,a)&&(l[e]=function(l){return this.$vm&&this.$vm.__call_hook(e,l)})})}function Nl(l,e){var a;return e=e.default||e,h(e)?(a=e,e=a.extendOptions):a=l.extend(e),[a,e]}function Ml(l,e){if(Array.isArray(e)&&e.length){var a=Object.create(null);e.forEach(function(l){a[l]=!0}),l.$scopedSlots=l.$slots=a}}function Ll(l,e){l=(l||"").split(",");var a=l.length;1===a?e._$vueId=l[0]:2===a&&(e._$vueId=l[0],e._$vuePid=l[1])}function Ul(l,e){var a=l.data||{},u=l.methods||{};if("function"===typeof a)try{a=a.call(e)}catch(t){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(t){}return g(a)||(a={}),Object.keys(u).forEach(function(l){-1!==e.__lifecycle_hooks__.indexOf(l)||_(a,l)||(a[l]=u[l])}),a}var Vl=[String,Number,Boolean,Object,Array,null];function ql(l){return function(e,a){this.$vm&&(this.$vm[l]=e)}}function Hl(l,e){var a=l["behaviors"],u=l["extends"],t=l["mixins"],v=l["props"];v||(l["props"]=v=[]);var n=[];return Array.isArray(a)&&a.forEach(function(l){n.push(l.replace("uni://","wx".concat("://"))),"uni://form-field"===l&&(Array.isArray(v)?(v.push("name"),v.push("value")):(v["name"]={type:String,default:""},v["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(u)&&u.props&&n.push(e({properties:Jl(u.props,!0)})),Array.isArray(t)&&t.forEach(function(l){g(l)&&l.props&&n.push(e({properties:Jl(l.props,!0)}))}),n}function zl(l,e,a,u){return Array.isArray(e)&&1===e.length?e[0]:e}function Jl(l){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(l,e){var a=Object.create(null);l.forEach(function(l){a[l]=!0}),this.setData({$slots:a})}}),Array.isArray(l)?l.forEach(function(l){a[l]={type:null,observer:ql(l)}}):g(l)&&Object.keys(l).forEach(function(e){var u=l[e];if(g(u)){var t=u["default"];h(t)&&(t=t()),u.type=zl(e,u.type),a[e]={type:-1!==Vl.indexOf(u.type)?u.type:null,value:t,observer:ql(e)}}else{var v=zl(e,u);a[e]={type:-1!==Vl.indexOf(v)?v:null,observer:ql(e)}}}),a}function Wl(l){try{l.mp=JSON.parse(JSON.stringify(l))}catch(e){}return l.stopPropagation=m,l.preventDefault=m,l.target=l.target||{},_(l,"detail")||(l.detail={}),g(l.detail)&&(l.target=Object.assign({},l.target,l.detail)),l}function Gl(l,e){var a=l;return e.forEach(function(e){var u=e[0],t=e[2];if(u||"undefined"!==typeof t){var v=e[1],n=e[3],b=u?l.__get_value(u,a):a;Number.isInteger(b)?a=t:v?Array.isArray(b)?a=b.find(function(e){return l.__get_value(v,e)===t}):g(b)?a=Object.keys(b).find(function(e){return l.__get_value(v,b[e])===t}):console.error("v-for 暂不支持循环数据：",b):a=b[t],n&&(a=l.__get_value(n,a))}}),a}function Kl(l,e,a){var u={};return Array.isArray(e)&&e.length&&e.forEach(function(e,t){"string"===typeof e?e?"$event"===e?u["$"+t]=a:0===e.indexOf("$event.")?u["$"+t]=l.__get_value(e.replace("$event.",""),a):u["$"+t]=l.__get_value(e):u["$"+t]=l:u["$"+t]=Gl(l,e)}),u}function Yl(l){for(var e={},a=1;a<l.length;a++){var u=l[a];e[u[0]]=u[1]}return e}function Ql(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,n=!1;if(t&&(n=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!a.length))return n?[e]:e.detail.__args__||e.detail;var b=Kl(l,u,e),r=[];return a.forEach(function(l){"$event"===l?"__set_model"!==v||t?t&&!n?r.push(e.detail.__args__[0]):r.push(e):r.push(e.target.value):Array.isArray(l)&&"o"===l[0]?r.push(Yl(l)):"string"===typeof l&&_(b,l)?r.push(b[l]):r.push(l)}),r}var Xl="~",Zl="^";function le(l,e){return l===e||"regionchange"===e&&("begin"===l||"end"===l)}function ee(l){var e=this;l=Wl(l);var a=(l.currentTarget||l.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var t=l.type,v=[];return u.forEach(function(a){var u=a[0],n=a[1],b=u.charAt(0)===Zl;u=b?u.slice(1):u;var r=u.charAt(0)===Xl;u=r?u.slice(1):u,n&&le(t,u)&&n.forEach(function(a){var u=a[0];if(u){var t=e.$vm;if(t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent),"$emit"===u)return void t.$emit.apply(t,Ql(e.$vm,l,a[1],a[2],b,u));var n=t[u];if(!h(n))throw new Error(" _vm.".concat(u," is not a function"));if(r){if(n.once)return;n.once=!0}v.push(n.apply(t,Ql(e.$vm,l,a[1],a[2],b,u)))}})}),"input"===t&&1===v.length&&"undefined"!==typeof v[0]?v[0]:void 0}var ae=["onShow","onHide","onError","onPageNotFound"];function ue(l,e){var a=e.mocks,t=e.initRefs;l.$options.store&&(u.default.prototype.$store=l.$options.store),u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),Pl(this,a)))}});var v={onLaunch:function(e){this.$vm||(this.$vm=l,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};v.globalData=l.$options.globalData||{};var n=l.$options.methods;return n&&Object.keys(n).forEach(function(l){v[l]=n[l]}),Rl(v,ae),v}var te=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ve(l,e){for(var a,u=l.$children,t=u.length-1;t>=0;t--){var v=u[t];if(v.$scope._$vueId===e)return v}for(var n=u.length-1;n>=0;n--)if(a=ve(u[n],e),a)return a}function ne(l){return Behavior(l)}function be(){return!!this.route}function re(l){this.triggerEvent("__l",l)}function oe(l){var e=l.$scope;Object.defineProperty(l,"$refs",{get:function(){var l={},a=e.selectAllComponents(".vue-ref");a.forEach(function(e){var a=e.dataset.ref;l[a]=e.$vm||e});var u=e.selectAllComponents(".vue-ref-in-for");return u.forEach(function(e){var a=e.dataset.ref;l[a]||(l[a]=[]),l[a].push(e.$vm||e)}),l}})}function ie(l){var e,a=l.detail||l.value,u=a.vuePid,t=a.vueOptions;u&&(e=ve(this.$vm,u)),e||(e=this.$vm),t.parent=e}function se(l){return ue(l,{mocks:te,initRefs:oe})}var ce=["onUniNViewMessage"];function fe(l){var e=se(l);return Rl(e,ce),e}function pe(l){return App(fe(l)),l}function de(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.isPage,t=e.initRelation,n=Nl(u.default,l),b=v(n,2),r=b[0],o=b[1],i={multipleSlots:!0,addGlobalClass:!0},s={options:i,data:Ul(o,u.default.prototype),behaviors:Hl(o,ne),properties:Jl(o.props,!1,o.__file),lifetimes:{attached:function(){var l=this.properties,e={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:l};Ll(l.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new r(e),Ml(this.$vm,l.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(l){this.$vm&&this.$vm.__call_hook("onPageShow",l)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(l){this.$vm&&this.$vm.__call_hook("onPageResize",l)}},methods:{__l:ie,__e:ee}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(l){s.methods[l]=function(e){return this.$vm[l](e)}}),a?s:[s,r]}function he(l){return de(l,{isPage:be,initRelation:re})}function ye(l){var e=he(l);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function _e(l,e){e.isPage,e.initRelation;var a=ye(l);return Rl(a.methods,ge,l),a.methods.onLoad=function(l){this.$vm.$mp.query=l,this.$vm.__call_hook("onLoad",l)},a}function me(l){return _e(l,{isPage:be,initRelation:re})}ge.push.apply(ge,Bl);var ke=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(l){var e=me(l);return Rl(e.methods,ke),e}function $e(l){return Component(we(l))}function Se(l){return Component(ye(l))}bl.forEach(function(l){nl[l]=!1}),rl.forEach(function(l){var e=nl[l]&&nl[l].name?nl[l].name:l;wx.canIUse(e)||(nl[l]=!1)});var Oe={};Object.keys(vl).forEach(function(l){Oe[l]=vl[l]}),Object.keys($l).forEach(function(l){Oe[l]=$l[l]}),Object.keys(Al).forEach(function(l){Oe[l]=Y(l,Al[l])}),Object.keys(wx).forEach(function(l){(_(wx,l)||_(nl,l))&&(Oe[l]=Y(l,fl(l,wx[l])))}),"undefined"!==typeof l&&(l.uni=Oe,l.UniEmitter=$l),wx.createApp=pe,wx.createPage=$e,wx.createComponent=Se;var xe=Oe,Ae=xe;e.default=Ae}).call(this,a("c8ba"))},8189:function(l){l.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},"888c":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[{value:"110000",label:"北京市",children:[{value:"110101",label:"东城区"},{value:"110102",label:"西城区"},{value:"110103",label:"崇文区"},{value:"110104",label:"宣武区"},{value:"110105",label:"朝阳区"},{value:"110106",label:"丰台区"},{value:"110107",label:"石景山区"},{value:"110108",label:"海淀区"},{value:"110109",label:"门头沟区"},{value:"110111",label:"房山区"},{value:"110112",label:"通州区"},{value:"110113",label:"顺义区"},{value:"110114",label:"昌平区"},{value:"110115",label:"大兴区"},{value:"110116",label:"怀柔区"},{value:"110117",label:"平谷区"},{value:"110228",label:"密云县"},{value:"110229",label:"延庆县"},{value:"110230",label:"其它区"}]},{value:"120000",label:"天津市",children:[{value:"120101",label:"和平区"},{value:"120102",label:"河东区"},{value:"120103",label:"河西区"},{value:"120104",label:"南开区"},{value:"120105",label:"河北区"},{value:"120106",label:"红桥区"},{value:"120107",label:"塘沽区"},{value:"120108",label:"汉沽区"},{value:"120109",label:"大港区"},{value:"120110",label:"东丽区"},{value:"120111",label:"西青区"},{value:"120112",label:"津南区"},{value:"120113",label:"北辰区"},{value:"120114",label:"武清区"},{value:"120115",label:"宝坻区"},{value:"120116",label:"滨海新区"},{value:"120221",label:"宁河县"},{value:"120223",label:"静海县"},{value:"120225",label:"蓟县"},{value:"120226",label:"其它区"}]},{value:"130000",label:"河北省",children:[{value:"130100",label:"石家庄市"},{value:"130200",label:"唐山市"},{value:"130300",label:"秦皇岛市"},{value:"130400",label:"邯郸市"},{value:"130500",label:"邢台市"},{value:"130600",label:"保定市"},{value:"130700",label:"张家口市"},{value:"130800",label:"承德市"},{value:"130900",label:"沧州市"},{value:"131000",label:"廊坊市"},{value:"131100",label:"衡水市"}]},{value:"140000",label:"山西省",children:[{value:"140100",label:"太原市"},{value:"140200",label:"大同市"},{value:"140300",label:"阳泉市"},{value:"140400",label:"长治市"},{value:"140500",label:"晋城市"},{value:"140600",label:"朔州市"},{value:"140700",label:"晋中市"},{value:"140800",label:"运城市"},{value:"140900",label:"忻州市"},{value:"141000",label:"临汾市"},{value:"141100",label:"吕梁市"}]},{value:"150000",label:"内蒙古",children:[{value:"150100",label:"呼和浩特市"},{value:"150200",label:"包头市"},{value:"150300",label:"乌海市"},{value:"150400",label:"赤峰市"},{value:"150500",label:"通辽市"},{value:"150600",label:"鄂尔多斯市"},{value:"150700",label:"呼伦贝尔市"},{value:"150800",label:"巴彦淖尔市"},{value:"150900",label:"乌兰察布市"},{value:"152200",label:"兴安盟"},{value:"152500",label:"锡林郭勒盟"},{value:"152900",label:"阿拉善盟"}]},{value:"210000",label:"辽宁省",children:[{value:"210100",label:"沈阳市"},{value:"210200",label:"大连市"},{value:"210300",label:"鞍山市"},{value:"210400",label:"抚顺市"},{value:"210500",label:"本溪市"},{value:"210600",label:"丹东市"},{value:"210700",label:"锦州市"},{value:"210800",label:"营口市"},{value:"210900",label:"阜新市"},{value:"211000",label:"辽阳市"},{value:"211100",label:"盘锦市"},{value:"211200",label:"铁岭市"},{value:"211300",label:"朝阳市"},{value:"211400",label:"葫芦岛市"}]},{value:"220000",label:"吉林省",children:[{value:"220100",label:"长春市"},{value:"220200",label:"吉林市"},{value:"220300",label:"四平市"},{value:"220400",label:"辽源市"},{value:"220500",label:"通化市"},{value:"220600",label:"白山市"},{value:"220700",label:"松原市"},{value:"220800",label:"白城市"},{value:"222400",label:"延边朝鲜族自治州"}]},{value:"230000",label:"黑龙江省",children:[{value:"230100",label:"哈尔滨市"},{value:"230200",label:"齐齐哈尔市"},{value:"230300",label:"鸡西市"},{value:"230400",label:"鹤岗市"},{value:"230500",label:"双鸭山市"},{value:"230600",label:"大庆市"},{value:"230700",label:"伊春市"},{value:"230800",label:"佳木斯市"},{value:"230900",label:"七台河市"},{value:"231000",label:"牡丹江市"},{value:"231100",label:"黑河市"},{value:"231200",label:"绥化市"},{value:"232700",label:"大兴安岭地区"}]},{value:"310000",label:"上海市",children:[{value:"310101",label:"黄浦区"},{value:"310103",label:"卢湾区"},{value:"310104",label:"徐汇区"},{value:"310105",label:"长宁区"},{value:"310106",label:"静安区"},{value:"310107",label:"普陀区"},{value:"310108",label:"闸北区"},{value:"310109",label:"虹口区"},{value:"310110",label:"杨浦区"},{value:"310112",label:"闵行区"},{value:"310113",label:"宝山区"},{value:"310114",label:"嘉定区"},{value:"310115",label:"浦东新区"},{value:"310116",label:"金山区"},{value:"310117",label:"松江区"},{value:"310118",label:"青浦区"},{value:"310119",label:"南汇区"},{value:"310120",label:"奉贤区"},{value:"310152",label:"川沙区"},{value:"310230",label:"崇明县"},{value:"310231",label:"其它区"}]},{value:"320000",label:"江苏省",children:[{value:"320100",label:"南京市"},{value:"320200",label:"无锡市"},{value:"320300",label:"徐州市"},{value:"320400",label:"常州市"},{value:"320500",label:"苏州市"},{value:"320600",label:"南通市"},{value:"320700",label:"连云港市"},{value:"320800",label:"淮安市"},{value:"320900",label:"盐城市"},{value:"321000",label:"扬州市"},{value:"321100",label:"镇江市"},{value:"321200",label:"泰州市"},{value:"321300",label:"宿迁市"}]},{value:"330000",label:"浙江省",children:[{value:"330100",label:"杭州市"},{value:"330200",label:"宁波市"},{value:"330300",label:"温州市"},{value:"330400",label:"嘉兴市"},{value:"330500",label:"湖州市"},{value:"330600",label:"绍兴市"},{value:"330700",label:"金华市"},{value:"330800",label:"衢州市"},{value:"330900",label:"舟山市"},{value:"331000",label:"台州市"},{value:"331100",label:"丽水市"}]},{value:"340000",label:"安徽省",children:[{value:"340100",label:"合肥市"},{value:"340200",label:"芜湖市"},{value:"340300",label:"蚌埠市"},{value:"340400",label:"淮南市"},{value:"340500",label:"马鞍山市"},{value:"340600",label:"淮北市"},{value:"340700",label:"铜陵市"},{value:"340800",label:"安庆市"},{value:"341000",label:"黄山市"},{value:"341100",label:"滁州市"},{value:"341200",label:"阜阳市"},{value:"341300",label:"宿州市"},{value:"341500",label:"六安市"},{value:"341600",label:"亳州市"},{value:"341700",label:"池州市"},{value:"341800",label:"宣城市"}]},{value:"350000",label:"福建省",children:[{value:"350100",label:"福州市"},{value:"350200",label:"厦门市"},{value:"350300",label:"莆田市"},{value:"350400",label:"三明市"},{value:"350500",label:"泉州市"},{value:"350600",label:"漳州市"},{value:"350700",label:"南平市"},{value:"350800",label:"龙岩市"},{value:"350900",label:"宁德市"}]},{value:"360000",label:"江西省",children:[{value:"360100",label:"南昌市"},{value:"360200",label:"景德镇市"},{value:"360300",label:"萍乡市"},{value:"360400",label:"九江市"},{value:"360500",label:"新余市"},{value:"360600",label:"鹰潭市"},{value:"360700",label:"赣州市"},{value:"360800",label:"吉安市"},{value:"360900",label:"宜春市"},{value:"361000",label:"抚州市"},{value:"361100",label:"上饶市"}]},{value:"370000",label:"山东省",children:[{value:"370100",label:"济南市"},{value:"370200",label:"青岛市"},{value:"370300",label:"淄博市"},{value:"370400",label:"枣庄市"},{value:"370500",label:"东营市"},{value:"370600",label:"烟台市"},{value:"370700",label:"潍坊市"},{value:"370800",label:"济宁市"},{value:"370900",label:"泰安市"},{value:"371000",label:"威海市"},{value:"371100",label:"日照市"},{value:"371200",label:"莱芜市"},{value:"371300",label:"临沂市"},{value:"371400",label:"德州市"},{value:"371500",label:"聊城市"},{value:"371600",label:"滨州市"},{value:"371700",label:"菏泽市"}]},{value:"410000",label:"河南省",children:[{value:"410100",label:"郑州市"},{value:"410200",label:"开封市"},{value:"410300",label:"洛阳市"},{value:"410400",label:"平顶山市"},{value:"410500",label:"安阳市"},{value:"410600",label:"鹤壁市"},{value:"410700",label:"新乡市"},{value:"410800",label:"焦作市"},{value:"410881",label:"济源市"},{value:"410900",label:"濮阳市"},{value:"411000",label:"许昌市"},{value:"411100",label:"漯河市"},{value:"411200",label:"三门峡市"},{value:"411300",label:"南阳市"},{value:"411400",label:"商丘市"},{value:"411500",label:"信阳市"},{value:"411600",label:"周口市"},{value:"411700",label:"驻马店市"}]},{value:"420000",label:"湖北省",children:[{value:"420100",label:"武汉市"},{value:"420200",label:"黄石市"},{value:"420300",label:"十堰市"},{value:"420500",label:"宜昌市"},{value:"420600",label:"襄阳市"},{value:"420700",label:"鄂州市"},{value:"420800",label:"荆门市"},{value:"420900",label:"孝感市"},{value:"421000",label:"荆州市"},{value:"421100",label:"黄冈市"},{value:"421200",label:"咸宁市"},{value:"421300",label:"随州市"},{value:"422800",label:"恩施土家族苗族自治州"},{value:"429004",label:"仙桃市"},{value:"429005",label:"潜江市"},{value:"429006",label:"天门市"},{value:"429021",label:"神农架林区"}]},{value:"430000",label:"湖南省",children:[{value:"430100",label:"长沙市"},{value:"430200",label:"株洲市"},{value:"430300",label:"湘潭市"},{value:"430400",label:"衡阳市"},{value:"430500",label:"邵阳市"},{value:"430600",label:"岳阳市"},{value:"430700",label:"常德市"},{value:"430800",label:"张家界市"},{value:"430900",label:"益阳市"},{value:"431000",label:"郴州市"},{value:"431100",label:"永州市"},{value:"431200",label:"怀化市"},{value:"431300",label:"娄底市"},{value:"433100",label:"湘西土家族苗族自治州"}]},{value:"440000",label:"广东省",children:[{value:"440100",label:"广州市"},{value:"440200",label:"韶关市"},{value:"440300",label:"深圳市"},{value:"440400",label:"珠海市"},{value:"440500",label:"汕头市"},{value:"440600",label:"佛山市"},{value:"440700",label:"江门市"},{value:"440800",label:"湛江市"},{value:"440900",label:"茂名市"},{value:"441200",label:"肇庆市"},{value:"441300",label:"惠州市"},{value:"441400",label:"梅州市"},{value:"441500",label:"汕尾市"},{value:"441600",label:"河源市"},{value:"441700",label:"阳江市"},{value:"441800",label:"清远市"},{value:"441900",label:"东莞市"},{value:"442000",label:"中山市"},{value:"445100",label:"潮州市"},{value:"445200",label:"揭阳市"},{value:"445300",label:"云浮市"}]},{value:"450000",label:"广西壮族",children:[{value:"450100",label:"南宁市"},{value:"450200",label:"柳州市"},{value:"450300",label:"桂林市"},{value:"450400",label:"梧州市"},{value:"450500",label:"北海市"},{value:"450600",label:"防城港市"},{value:"450700",label:"钦州市"},{value:"450800",label:"贵港市"},{value:"450900",label:"玉林市"},{value:"451000",label:"百色市"},{value:"451100",label:"贺州市"},{value:"451200",label:"河池市"},{value:"451300",label:"来宾市"},{value:"451400",label:"崇左市"}]},{value:"460000",label:"海南省",children:[{value:"460100",label:"海口市"},{value:"460200",label:"三亚市"},{value:"469001",label:"五指山市"},{value:"469002",label:"琼海市"},{value:"469003",label:"儋州市"},{value:"469005",label:"文昌市"},{value:"469006",label:"万宁市"},{value:"469007",label:"东方市"},{value:"469025",label:"定安县"},{value:"469026",label:"屯昌县"},{value:"469027",label:"澄迈县"},{value:"469028",label:"临高县"},{value:"469030",label:"白沙黎族自治县"},{value:"469031",label:"昌江黎族自治县"},{value:"469033",label:"乐东黎族自治县"},{value:"469034",label:"陵水黎族自治县"},{value:"469035",label:"保亭黎族苗族自治县"},{value:"469036",label:"琼中黎族苗族自治县"},{value:"469037",label:"西沙群岛"},{value:"469038",label:"南沙群岛"},{value:"469039",label:"中沙群岛的岛礁及其海域"}]},{value:"500000",label:"重庆",children:[{value:"500101",label:"万州区"},{value:"500102",label:"涪陵区"},{value:"500103",label:"渝中区"},{value:"500104",label:"大渡口区"},{value:"500105",label:"江北区"},{value:"500106",label:"沙坪坝区"},{value:"500107",label:"九龙坡区"},{value:"500108",label:"南岸区"},{value:"500109",label:"北碚区"},{value:"500110",label:"万盛区"},{value:"500111",label:"双桥区"},{value:"500112",label:"渝北区"},{value:"500113",label:"巴南区"},{value:"500114",label:"黔江区"},{value:"500115",label:"长寿区"},{value:"500222",label:"綦江县"},{value:"500223",label:"潼南县"},{value:"500224",label:"铜梁县"},{value:"500225",label:"大足县"},{value:"500226",label:"荣昌县"},{value:"500227",label:"璧山县"},{value:"500228",label:"梁平县"},{value:"500229",label:"城口县"},{value:"500230",label:"丰都县"},{value:"500231",label:"垫江县"},{value:"500232",label:"武隆县"},{value:"500233",label:"忠县"},{value:"500234",label:"开县"},{value:"500235",label:"云阳县"},{value:"500236",label:"奉节县"},{value:"500237",label:"巫山县"},{value:"500238",label:"巫溪县"},{value:"500240",label:"石柱土家族自治县"},{value:"500241",label:"秀山土家族苗族自治县"},{value:"500242",label:"酉阳土家族苗族自治县"},{value:"500243",label:"彭水苗族土家族自治县"},{value:"500381",label:"江津区"},{value:"500382",label:"合川区"},{value:"500383",label:"永川区"},{value:"500384",label:"南川区"},{value:"500385",label:"其它区"}]},{value:"510000",label:"四川省",children:[{value:"510100",label:"成都市"},{value:"510300",label:"自贡市"},{value:"510400",label:"攀枝花市"},{value:"510500",label:"泸州市"},{value:"510600",label:"德阳市"},{value:"510700",label:"绵阳市"},{value:"510800",label:"广元市"},{value:"510900",label:"遂宁市"},{value:"511000",label:"内江市"},{value:"511100",label:"乐山市"},{value:"511300",label:"南充市"},{value:"511400",label:"眉山市"},{value:"511500",label:"宜宾市"},{value:"511600",label:"广安市"},{value:"511700",label:"达州市"},{value:"511800",label:"雅安市"},{value:"511900",label:"巴中市"},{value:"512000",label:"资阳市"},{value:"513200",label:"阿坝藏族羌族自治州"},{value:"513300",label:"甘孜藏族自治州"},{value:"513400",label:"凉山彝族自治州"}]},{value:"520000",label:"贵州省",children:[{value:"520100",label:"贵阳市"},{value:"520200",label:"六盘水市"},{value:"520300",label:"遵义市"},{value:"520400",label:"安顺市"},{value:"522200",label:"铜仁地区"},{value:"522300",label:"黔西南布依族苗族自治州"},{value:"522400",label:"毕节地区"},{value:"522600",label:"黔东南苗族侗族自治州"},{value:"522700",label:"黔南布依族苗族自治州"}]},{value:"530000",label:"云南省",children:[{value:"530100",label:"昆明市"},{value:"530300",label:"曲靖市"},{value:"530400",label:"玉溪市"},{value:"530500",label:"保山市"},{value:"530600",label:"昭通市"},{value:"530700",label:"丽江市"},{value:"530800",label:"普洱市"},{value:"530900",label:"临沧市"},{value:"532300",label:"楚雄彝族自治州"},{value:"532500",label:"红河哈尼族彝族自治州"},{value:"532600",label:"文山壮族苗族自治州"},{value:"532800",label:"西双版纳傣族自治州"},{value:"532900",label:"大理白族自治州"},{value:"533100",label:"德宏傣族景颇族自治州"},{value:"533300",label:"怒江傈僳族自治州"},{value:"533400",label:"迪庆藏族自治州"}]},{value:"540000",label:"西藏",children:[{value:"540100",label:"拉萨市"},{value:"542100",label:"昌都地区"},{value:"542200",label:"山南地区"},{value:"542300",label:"日喀则地区"},{value:"542400",label:"那曲地区"},{value:"542500",label:"阿里地区"},{value:"542600",label:"林芝地区"}]},{value:"610000",label:"陕西省",children:[{value:"610100",label:"西安市"},{value:"610200",label:"铜川市"},{value:"610300",label:"宝鸡市"},{value:"610400",label:"咸阳市"},{value:"610500",label:"渭南市"},{value:"610600",label:"延安市"},{value:"610700",label:"汉中市"},{value:"610800",label:"榆林市"},{value:"610900",label:"安康市"},{value:"611000",label:"商洛市"}]},{value:"620000",label:"甘肃省",children:[{value:"620100",label:"兰州市"},{value:"620200",label:"嘉峪关市"},{value:"620300",label:"金昌市"},{value:"620400",label:"白银市"},{value:"620500",label:"天水市"},{value:"620600",label:"武威市"},{value:"620700",label:"张掖市"},{value:"620800",label:"平凉市"},{value:"620900",label:"酒泉市"},{value:"621000",label:"庆阳市"},{value:"621100",label:"定西市"},{value:"621200",label:"陇南市"},{value:"622900",label:"临夏回族自治州"},{value:"623000",label:"甘南藏族自治州"}]},{value:"630000",label:"青海省",children:[{value:"630100",label:"西宁市"},{value:"632100",label:"海东地区"},{value:"632200",label:"海北藏族自治州"},{value:"632300",label:"黄南藏族自治州"},{value:"632500",label:"海南藏族自治州"},{value:"632600",label:"果洛藏族自治州"},{value:"632700",label:"玉树藏族自治州"},{value:"632800",label:"海西蒙古族藏族自治州"}]},{value:"640000",label:"宁夏",children:[{value:"640100",label:"银川市"},{value:"640200",label:"石嘴山市"},{value:"640300",label:"吴忠市"},{value:"640400",label:"固原市"},{value:"640500",label:"中卫市"}]},{value:"650000",label:"新疆",children:[{value:"650100",label:"乌鲁木齐市"},{value:"650200",label:"克拉玛依市"},{value:"652100",label:"吐鲁番地区"},{value:"652200",label:"哈密地区"},{value:"652300",label:"昌吉回族自治州"},{value:"652700",label:"博尔塔拉蒙古自治州"},{value:"652800",label:"巴音郭楞蒙古自治州"},{value:"652900",label:"阿克苏地区"},{value:"653000",label:"克孜勒苏柯尔克孜自治州"},{value:"653100",label:"喀什地区"},{value:"653200",label:"和田地区"},{value:"654000",label:"伊犁哈萨克自治州"},{value:"654200",label:"塔城地区"},{value:"654300",label:"阿勒泰地区"},{value:"659001",label:"石河子市"},{value:"659002",label:"阿拉尔市"},{value:"659003",label:"图木舒克市"},{value:"659004",label:"五家渠市"}]},{value:"710000",label:"台湾省",children:[{value:"710100",label:"台北市"},{value:"710200",label:"高雄市"},{value:"710300",label:"台南市"},{value:"710400",label:"台中市"},{value:"710500",label:"金门县"},{value:"710600",label:"南投县"},{value:"710700",label:"基隆市"},{value:"710800",label:"新竹市"},{value:"710900",label:"嘉义市"},{value:"711100",label:"新北市"},{value:"711200",label:"宜兰县"},{value:"711300",label:"新竹县"},{value:"711400",label:"桃园县"},{value:"711500",label:"苗栗县"},{value:"711700",label:"彰化县"},{value:"711900",label:"嘉义县"},{value:"712100",label:"云林县"},{value:"712400",label:"屏东县"},{value:"712500",label:"台东县"},{value:"712600",label:"花莲县"},{value:"712700",label:"澎湖县"}]},{value:"810000",label:"香港",children:[{value:"810100",label:"香港岛"},{value:"810200",label:"九龙"},{value:"810300",label:"新界"}]},{value:"820000",label:"澳门",children:[{value:"820100",label:"澳门半岛"},{value:"820200",label:"离岛"}]},{value:"990000",label:"海外",children:[{value:"990100",label:"海外"}]}];e.default=u},"8a67":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=0,t=8;function v(l){return d(n(p(l),l.length*t))}function n(l,e){l[e>>5]|=128<<e%32,l[14+(e+64>>>9<<4)]=e;for(var a=1732584193,u=-271733879,t=-1732584194,v=271733878,n=0;n<l.length;n+=16){var b=a,f=u,p=t,d=v;a=r(a,u,t,v,l[n+0],7,-680876936),v=r(v,a,u,t,l[n+1],12,-389564586),t=r(t,v,a,u,l[n+2],17,606105819),u=r(u,t,v,a,l[n+3],22,-1044525330),a=r(a,u,t,v,l[n+4],7,-176418897),v=r(v,a,u,t,l[n+5],12,1200080426),t=r(t,v,a,u,l[n+6],17,-1473231341),u=r(u,t,v,a,l[n+7],22,-45705983),a=r(a,u,t,v,l[n+8],7,1770035416),v=r(v,a,u,t,l[n+9],12,-1958414417),t=r(t,v,a,u,l[n+10],17,-42063),u=r(u,t,v,a,l[n+11],22,-1990404162),a=r(a,u,t,v,l[n+12],7,1804603682),v=r(v,a,u,t,l[n+13],12,-40341101),t=r(t,v,a,u,l[n+14],17,-1502002290),u=r(u,t,v,a,l[n+15],22,1236535329),a=o(a,u,t,v,l[n+1],5,-165796510),v=o(v,a,u,t,l[n+6],9,-1069501632),t=o(t,v,a,u,l[n+11],14,643717713),u=o(u,t,v,a,l[n+0],20,-373897302),a=o(a,u,t,v,l[n+5],5,-701558691),v=o(v,a,u,t,l[n+10],9,38016083),t=o(t,v,a,u,l[n+15],14,-660478335),u=o(u,t,v,a,l[n+4],20,-405537848),a=o(a,u,t,v,l[n+9],5,568446438),v=o(v,a,u,t,l[n+14],9,-1019803690),t=o(t,v,a,u,l[n+3],14,-187363961),u=o(u,t,v,a,l[n+8],20,1163531501),a=o(a,u,t,v,l[n+13],5,-1444681467),v=o(v,a,u,t,l[n+2],9,-51403784),t=o(t,v,a,u,l[n+7],14,1735328473),u=o(u,t,v,a,l[n+12],20,-1926607734),a=i(a,u,t,v,l[n+5],4,-378558),v=i(v,a,u,t,l[n+8],11,-2022574463),t=i(t,v,a,u,l[n+11],16,1839030562),u=i(u,t,v,a,l[n+14],23,-35309556),a=i(a,u,t,v,l[n+1],4,-1530992060),v=i(v,a,u,t,l[n+4],11,1272893353),t=i(t,v,a,u,l[n+7],16,-155497632),u=i(u,t,v,a,l[n+10],23,-1094730640),a=i(a,u,t,v,l[n+13],4,681279174),v=i(v,a,u,t,l[n+0],11,-358537222),t=i(t,v,a,u,l[n+3],16,-722521979),u=i(u,t,v,a,l[n+6],23,76029189),a=i(a,u,t,v,l[n+9],4,-640364487),v=i(v,a,u,t,l[n+12],11,-421815835),t=i(t,v,a,u,l[n+15],16,530742520),u=i(u,t,v,a,l[n+2],23,-995338651),a=s(a,u,t,v,l[n+0],6,-198630844),v=s(v,a,u,t,l[n+7],10,1126891415),t=s(t,v,a,u,l[n+14],15,-1416354905),u=s(u,t,v,a,l[n+5],21,-57434055),a=s(a,u,t,v,l[n+12],6,1700485571),v=s(v,a,u,t,l[n+3],10,-1894986606),t=s(t,v,a,u,l[n+10],15,-1051523),u=s(u,t,v,a,l[n+1],21,-2054922799),a=s(a,u,t,v,l[n+8],6,1873313359),v=s(v,a,u,t,l[n+15],10,-30611744),t=s(t,v,a,u,l[n+6],15,-1560198380),u=s(u,t,v,a,l[n+13],21,1309151649),a=s(a,u,t,v,l[n+4],6,-145523070),v=s(v,a,u,t,l[n+11],10,-1120210379),t=s(t,v,a,u,l[n+2],15,718787259),u=s(u,t,v,a,l[n+9],21,-343485551),a=c(a,b),u=c(u,f),t=c(t,p),v=c(v,d)}return Array(a,u,t,v)}function b(l,e,a,u,t,v){return c(f(c(c(e,l),c(u,v)),t),a)}function r(l,e,a,u,t,v,n){return b(e&a|~e&u,l,e,t,v,n)}function o(l,e,a,u,t,v,n){return b(e&u|a&~u,l,e,t,v,n)}function i(l,e,a,u,t,v,n){return b(e^a^u,l,e,t,v,n)}function s(l,e,a,u,t,v,n){return b(a^(e|~u),l,e,t,v,n)}function c(l,e){var a=(65535&l)+(65535&e),u=(l>>16)+(e>>16)+(a>>16);return u<<16|65535&a}function f(l,e){return l<<e|l>>>32-e}function p(l){for(var e=Array(),a=(1<<t)-1,u=0;u<l.length*t;u+=t)e[u>>5]|=(l.charCodeAt(u/t)&a)<<u%32;return e}function d(l){for(var e=u?"0123456789ABCDEF":"0123456789abcdef",a="",t=0;t<4*l.length;t++)a+=e.charAt(l[t>>2]>>t%4*8+4&15)+e.charAt(l[t>>2]>>t%4*8&15);return a}var h={hex_md5:v};e.default=h},"921b":function(l,e,a){"use strict";(function(l){var e=a("8189");function u(l,e){return!e||"object"!==typeof e&&"function"!==typeof e?t(l):e}function t(l){if(void 0===l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function v(l){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},v(l)}function n(l,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(e&&e.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),e&&b(l,e)}function b(l,e){return b=Object.setPrototypeOf||function(l,e){return l.__proto__=e,l},b(l,e)}function r(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function o(l,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function i(l,e,a){return e&&o(l.prototype,e),a&&o(l,a),l}var s=e.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,d=300,h=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var e="";if("n"===$()){try{e=plus.runtime.getDCloudId()}catch(a){e=""}return e}try{e=l.getStorageSync(y)}catch(a){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{l.setStorageSync(y,e)}catch(a){l.setStorageSync(y,g)}}return e}var m=function(l){var e=Object.keys(l),a=e.sort(),u={},t="";for(var v in a)u[a[v]]=l[a[v]],t+=a[v]+"="+l[a[v]]+"&";return{sign:"",options:t.substr(0,t.length-1)}},k=function(l){var e="";for(var a in l)e+=a+"="+l[a]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},$=function(){var l={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return l["app-plus"]},S=function(){var e="";return"wx"!==$()&&"qq"!==$()||l.canIUse("getAccountInfoSync")&&(e=l.getAccountInfoSync().miniProgram.appId||""),e},O=function(){return"n"===$()?plus.runtime.version:""},x=function(){var l=$(),e="";return"n"===l&&(e=plus.runtime.channel),e},A=function(e){var a=$(),u="";return e||("wx"===a&&(u=l.getLaunchOptionsSync().scene),u)},T="First__Visit__Time",F="Last__Visit__Time",j=function(){var e=l.getStorageSync(T),a=0;return e?a=e:(a=w(),l.setStorageSync(T,a),l.removeStorageSync(F)),a},C=function(){var e=l.getStorageSync(F),a=0;return a=e||"",l.setStorageSync(F,w()),a},E="__page__residence__time",D=0,B=0,P=function(){return D=w(),"n"===$()&&l.setStorageSync(E,w()),D},I=function(){return B=w(),"n"===$()&&(D=l.getStorageSync(E)),B-D},R="Total__Visit__Count",N=function(){var e=l.getStorageSync(R),a=1;return e&&(a=e,a++),l.setStorageSync(R,a),a},M=function(l){var e={};for(var a in l)e[a]=encodeURIComponent(l[a]);return e},L=0,U=0,V=function(){var l=(new Date).getTime();return L=l,U=0,l},q=function(){var l=(new Date).getTime();return U=l,l},H=function(l){var e=0;if(0!==L&&(e=U-L),e=parseInt(e/1e3),e=e<1?1:e,"app"===l){var a=e>d;return{residenceTime:e,overtime:a}}if("page"===l){var u=e>p;return{residenceTime:e,overtime:u}}return{residenceTime:e}},z=function(){var l=getCurrentPages(),e=l[l.length-1],a=e.$vm;return"bd"===$()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},J=function(l){var e=getCurrentPages(),a=e[e.length-1],u=a.$vm,t=l._query,v=t&&"{}"!==JSON.stringify(t)?"?"+JSON.stringify(t):"";return l._query="","bd"===$()?u.$mp&&u.$mp.page.is+v:u.$scope&&u.$scope.route+v||u.$mp&&u.$mp.page.route+v},W=function(l){return!!("page"===l.mpType||l.$mp&&"page"===l.$mp.mpType||"page"===l.$options.mpType)},G=function(l,e){return l?"string"!==typeof l?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):l.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===l&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=a("d26b").default,Y=a("e4d8").default||a("e4d8"),Q=l.getSystemInfoSync(),X=function(){function e(){r(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:$(),mpn:S(),ak:Y.appid,usv:s,v:O(),ch:x(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return i(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var l=H("app");if(l.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(l,e){this.__licationHide=!0,q();var a=H();V();var u=J(this);this._sendHideRequest({urlref:u,urlref_ts:a.residenceTime},e)}},{key:"_pageShow",value:function(){var l=J(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=l);q(),this._lastPageRoute=l;var a=H("page");if(a.overtime){var u={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(u)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var l=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:l.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(l){this._sendEventRequest({key:l},0)}},{key:"_sendReportRequest",value:function(l){this._navigationBarTitle.lt="1";var e=l.query&&"{}"!==JSON.stringify(l.query)?"?"+JSON.stringify(l.query):"";this.statData.lt="1",this.statData.url=l.path+e||"",this.statData.t=w(),this.statData.sc=A(l.scene),this.statData.fvts=j(),this.statData.lvts=C(),this.statData.tvc=N(),"n"===$()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(l){var e=l.url,a=l.urlref,u=l.urlref_ts;this._navigationBarTitle.lt="11";var t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(t)}},{key:"_sendHideRequest",value:function(l,e){var a=l.urlref,u=l.urlref_ts,t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(t,e)}},{key:"_sendEventRequest",value:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=l.key,a=void 0===e?"":e,u=l.value,t=void 0===u?"":u,v=this._lastPageRoute,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:v,ch:this.statData.ch,e_n:a,e_v:"object"===typeof t?JSON.stringify(t):t.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"getNetworkInfo",value:function(){var e=this;l.getNetworkType({success:function(l){e.statData.net=l.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var l=this;plus.runtime.getProperty(plus.runtime.appid,function(e){l.statData.v=e.version||"",l.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?l.getLocation({type:"wgs84",geocode:!0,success:function(l){l.address&&(e.statData.cn=l.address.country,e.statData.pn=l.address.province,e.statData.ct=l.address.city),e.statData.lat=l.latitude,e.statData.lng=l.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,a){var u=this,t=w(),v=this._navigationBarTitle;e.ttn=v.page,e.ttpj=v.config,e.ttc=v.report;var n=this._reportingRequestData;if("n"===$()&&(n=l.getStorageSync("__UNI__STAT__DATA")||{}),n[e.lt]||(n[e.lt]=[]),n[e.lt].push(e),"n"===$()&&l.setStorageSync("__UNI__STAT__DATA",n),!(I()<h)||a){var b=this._reportingRequestData;"n"===$()&&(b=l.getStorageSync("__UNI__STAT__DATA")),P();var r=[],o=[],i=[],c=function(l){var e=b[l];e.forEach(function(e){var a=k(e);0===l?r.push(a):3===l?i.push(a):o.push(a)})};for(var f in b)c(f);r.push.apply(r,o.concat(i));var p={usv:s,t:t,requests:JSON.stringify(r)};this._reportingRequestData={},"n"===$()&&l.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==$()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){u._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var a=this;l.request({url:c,method:"POST",data:e,success:function(){},fail:function(l){++a._retry<3&&setTimeout(function(){a._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(l){var e=new Image,a=m(M(l)).options;e.src=f+"?"+a}},{key:"sendEvent",value:function(l,e){G(l,e)||("title"!==l?this._sendEventRequest({key:l,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function a(){var e;return r(this,a),e=u(this,v(a).call(this)),e.instance=null,"function"===typeof l.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return n(a,e),i(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),i(a,[{key:"addInterceptorInit",value:function(){var e=this;l.addInterceptor("setNavigationBarTitle",{invoke:function(l){e._navigationBarTitle.page=l.title}})}},{key:"interceptLogin",value:function(){var e=this;l.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var a=this;e?l.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var e=this;l.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(l,e){this.self=e,P(),this.__licationShow=!0,this._sendReportRequest(l,!0)}},{key:"load",value:function(l,e){if(!e.$scope&&!e.$mp){var a=getCurrentPages();e.$scope=a[a.length-1]}this.self=e,this._query=l}},{key:"show",value:function(l){this.self=l,W(l)?this._pageShow(l):this._applicationShow(l)}},{key:"ready",value:function(l){}},{key:"hide",value:function(l){this.self=l,W(l)?this._pageHide(l):this._applicationHide(l,!0)}},{key:"error",value:function(l){this._platform;var e="";e=l.message?l.stack:JSON.stringify(l);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(X),ll=Z.getInstance(),el=!1,al={onLaunch:function(l){ll.report(l,this)},onReady:function(){ll.ready(this)},onLoad:function(l){if(ll.load(l,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(l){return ll.interceptShare(!1),e.call(this,l)}}},onShow:function(){el=!1,ll.show(this)},onHide:function(){el=!0,ll.hide(this)},onUnload:function(){el?el=!1:ll.hide(this)},onError:function(l){ll.error(l)}};function ul(){var e=a("66fd");(e.default||e).mixin(al),l.report=function(l,e){ll.sendEvent(l,e)}}ul()}).call(this,a("6e42")["default"])},b82d:function(l,e,a){},c8ba:function(l,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}l.exports=a},d26b:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={pages:{"pages/sign/sign":{navigationBarTitleText:"",enablePullDownRefresh:!0,navigationStyle:"custom"},"pages/sign/license":{navigationBarTitleText:"注册协议",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/sign/forgetpwd":{navigationBarTitleText:"忘记密码",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/mytask/create":{navigationBarTitleText:"发布任务",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/sign/reg":{navigationBarTitleText:"用户注册",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/index/index":{navigationBarTitleText:"趣赞",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",enablePullDownRefresh:!0,backgroundColor:"#FF5254"},"pages/news/new":{navigationBarTitleText:"新闻公告",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/news/details":{navigationBarTitleText:"文章详情",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/invite/invite":{navigationBarTitleText:"分享",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/task/task":{navigationBarTitleText:"任务大厅",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",enablePullDownRefresh:!0,backgroundColor:"#FF5254"},"pages/live/payment":{navigationBarTitleText:"支付收银台",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/live/live":{navigationBarTitleText:"商城",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/mytask/mytask":{navigationBarTitleText:"我的任务",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",enablePullDownRefresh:!0,backgroundColor:"#FF5254"},"pages/mytask/mytaskorder":{navigationBarTitleText:"任务详情",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/my/my":{navigationBarTitleText:"",enablePullDownRefresh:!0,navigationStyle:"custom"},"pages/my/personal":{navigationBarTitleText:"个人资料",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/set":{navigationBarTitleText:"设置",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/pwd":{navigationBarTitleText:"修改密码",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/praise":{navigationBarTitleText:"关于我们",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/balance":{navigationBarTitleText:"余额",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/Withdrawals":{navigationBarTitleText:"提现",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/my/chooseback":{navigationBarTitleText:"",enablePullDownRefresh:!0,navigationStyle:"custom"},"pages/my/result":{navigationBarTitleText:"结果详情",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",backgroundColor:"#FF5254"},"pages/my/record":{navigationBarTitleText:"提现记录",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/capital":{navigationBarTitleText:"资金明细",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/bank":{navigationBarTitleText:"",enablePullDownRefresh:!0,navigationStyle:"custom"},"pages/my/addbank":{navigationBarTitleText:"添加银行卡",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/team":{navigationBarTitleText:"我的团队",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254",enablePullDownRefresh:!0},"pages/my/release":{navigationBarTitleText:"我的套餐",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"},"pages/my/taskmanmgent":{navigationBarTitleText:"任务管理",navigationBarBackgroundColor:"#F04F43",navigationBarTextStyle:"white",backgroundColor:"#FF5254"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=u},e4d8:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={appid:"__UNI__AA7704A"};e.default=u},f0c5:function(l,e,a){"use strict";function u(l,e,a,u,t,v,n,b,r,o){var i,s="function"===typeof l?l.options:l;if(r&&(s.components=Object.assign(r,s.components||{})),o&&((o.beforeCreate||(o.beforeCreate=[])).unshift(function(){this[o.__module]=this}),(s.mixins||(s.mixins=[])).push(o)),e&&(s.render=e,s.staticRenderFns=a,s._compiled=!0),u&&(s.functional=!0),v&&(s._scopeId="data-v-"+v),n?(i=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,l||"undefined"===typeof __VUE_SSR_CONTEXT__||(l=__VUE_SSR_CONTEXT__),t&&t.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(n)},s._ssrRegister=i):t&&(i=b?function(){t.call(this,this.$root.$options.shadowRoot)}:t),i)if(s.functional){s._injectStyles=i;var c=s.render;s.render=function(l,e){return i.call(e),c(l,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,i):[i]}return{exports:l,options:s}}a.d(e,"a",function(){return u})},f16b:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"金堂县",value:"510121"},{label:"郫县",value:"510124"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],t=u;e.default=t}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/load-more.js';

define('components/load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Component({});
});
require('components/load-more.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "0f38": function f38(e, t, i) {
    "use strict";

    i.r(t);
    var a = i("1ea1"),
        u = i.n(a);

    for (var l in a) {
      "default" !== l && function (e) {
        i.d(t, e, function () {
          return a[e];
        });
      }(l);
    }

    t["default"] = u.a;
  },
  "1ea1": function ea1(e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = r(i("2392")),
        u = r(i("1f23")),
        l = r(i("f16b"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: [],
          cityDataList: [],
          areaDataList: []
        };
      },
      created: function created() {
        this.handPickValueDefault(), this.provinceDataList = a.default, this.cityDataList = u.default[this.pickerValueDefault[0]], this.areaDataList = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]], this.pickerValue = this.pickerValueDefault;
      },
      props: {
        showPicker: {
          type: Boolean,
          default: !1
        },
        pickerValueDefault: {
          type: Array,
          default: [0, 0, 0]
        },
        themeColor: String
      },
      methods: {
        show: function show() {
          var e = this;
          setTimeout(function () {
            e.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(e) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          this.pickerValueDefault !== [0, 0, 0] && (this.pickerValueDefault[0] > a.default.length - 1 && (this.pickerValueDefault[0] = a.default.length - 1), this.pickerValueDefault[1] > u.default[this.pickerValueDefault[0]].length - 1 && (this.pickerValueDefault[1] = u.default[this.pickerValueDefault[0]].length - 1), this.pickerValueDefault[2] > l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1 && (this.pickerValueDefault[2] = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1));
        },
        pickerChange: function pickerChange(e) {
          var t = e.mp.detail.value;
          this.pickerValue[0] !== t[0] ? (this.cityDataList = u.default[t[0]], this.areaDataList = l.default[t[0]][0], t[1] = 0, t[2] = 0) : this.pickerValue[1] !== t[1] && (this.areaDataList = l.default[t[0]][t[1]], t[2] = 0), this.pickerValue = t, this._$emit("onChange");
        },
        _$emit: function _$emit(e) {
          var t = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(e, t);
        },
        _getLabel: function _getLabel() {
          var e = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return e;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    t.default = n;
  },
  "38f6": function f6(e, t, i) {
    "use strict";

    var a = i("a5df"),
        u = i.n(a);
    u.a;
  },
  "6bee": function bee(e, t, i) {
    "use strict";

    var a,
        u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        l = [];

    i.d(t, "b", function () {
      return u;
    }), i.d(t, "c", function () {
      return l;
    }), i.d(t, "a", function () {
      return a;
    });
  },
  "98fd": function fd(e, t, i) {
    "use strict";

    i.r(t);
    var a = i("6bee"),
        u = i("0f38");

    for (var l in u) {
      "default" !== l && function (e) {
        i.d(t, e, function () {
          return u[e];
        });
      }(l);
    }

    i("38f6");
    var r,
        n = i("f0c5"),
        c = Object(n["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
    t["default"] = c.exports;
  },
  a5df: function a5df(e, t, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("98fd"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');

__wxRoute = 'pages/sign/sign';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sign/sign.js';

define('pages/sign/sign.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sign/sign"],{"3fea":function(e,n,t){"use strict";var a=t("b3f2"),o=t.n(a);o.a},"476c":function(e,n,t){"use strict";t.r(n);var a=t("8ef2"),o=t("e882");for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);t("3fea");var s,u=t("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);n["default"]=c.exports},"8eb2":function(e,n,t){"use strict";(function(e){t("b82d"),t("921b");a(t("66fd"));var n=a(t("476c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"8ef2":function(e,n,t){"use strict";var a,o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return a})},b3f2:function(e,n,t){},bc39:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("24a9")),o=i(t("8a67"));function i(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{isShowPass:!0,isShow:!1,btnShow:!1,isChecked:!1,isBlue:!1,ifDisplay:!1,info:{userPhone:"",userPass:""},token:"",isApp:!0,title:""}},onLoad:function(){},onShow:function(){var n=e.getStorageSync("token");a.default.isEmpty(n)||e.reLaunch({url:"/pages/index/index"})},methods:{goApp:function(){location.href="https://cdridge-download.oss-cn-shanghai.aliyuncs.com/qz.apk"},goIndex:function(){var n=this,t=o.default.hex_md5(this.info.userPass),i={userPhone:this.info.userPhone,userPass:t,appId:this.appId};e.showLoading({title:"加载中..."}),e.request({url:n.ApiGateWay+"/sale/Member/Login",data:i,method:"POST",dataType:"json",success:function(n){if(a.default.CheckData(n)){var t=n.data.data;e.setStorageSync("token",t),e.reLaunch({url:"/pages/index/index"})}else e.showToast({title:"账号密码错误",icon:"none"})},complete:function(){e.hideLoading()}})},goForetpwd:function(){e.navigateTo({url:"/pages/sign/forgetpwd"})},getInptValue:function(e){},showPass:function(){this.isShowPass=!this.isShowPass},btnClick:function(){var e=this;e.isChecked=!e.isChecked},clearPassword:function(){this.info.password=""}}};n.default=s}).call(this,t("6e42")["default"])},e882:function(e,n,t){"use strict";t.r(n);var a=t("bc39"),o=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);n["default"]=o.a}},[["8eb2","common/runtime","common/vendor"]]]);
});
require('pages/sign/sign.js');
__wxRoute = 'pages/sign/license';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sign/license.js';

define('pages/sign/license.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sign/license"],{"0054":function(n,t,e){},"0968":function(n,t,e){},"098e":function(n,t,e){"use strict";e.r(t);var u=e("8dbd"),c=e("9660");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("e2cf");var f,a=e("f0c5"),o=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);t["default"]=o.exports},"38bc":function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");u(e("66fd"));var t=u(e("098e"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"8dbd":function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},9660:function(n,t,e){"use strict";e.r(t);var u=e("0054"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},e2cf:function(n,t,e){"use strict";var u=e("0968"),c=e.n(u);c.a}},[["38bc","common/runtime","common/vendor"]]]);
});
require('pages/sign/license.js');
__wxRoute = 'pages/sign/forgetpwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sign/forgetpwd.js';

define('pages/sign/forgetpwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sign/forgetpwd"],{"1f5e":function(e,t,n){"use strict";var o=n("b8bf"),s=n.n(o);s.a},"653b":function(e,t,n){"use strict";n.r(t);var o=n("8d99"),s=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=s.a},"8d99":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("24a9")),s=a(n("8a67"));function a(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{parentId:"",userPhone:"",userPass:"",checkCode:"",userPass_2:"",checkcode_btn:"获取验证码",timecount:60,license:!1}},onLoad:function(t){e.removeStorageSync("token")},methods:{GetCheckCode:function(){var t=this;if(o.default.isEmpty(this.userPhone)||11!=t.userPhone.length)return e.showModal({title:"信息提示",content:"请输入正确的手机号",showCancel:!1}),t.checkcode_btn="获取验证码",void(t.timecount=60);e.showLoading({title:"请等待..."}),e.request({url:t.ApiGateWay+"/sale/message/GetCheckCode?type=1&phone="+t.userPhone,method:"POST",success:function(n){e.hideLoading(),o.default.CheckData(n)?t.GetCode():e.showModal({title:"信息提示",content:n.data.errorMessage,showCancel:!1})},fail:function(){e.hideLoading(),e.showModal({title:"信息提示",content:"网络错误",showCancel:!1})}})},GetCode:function(){var e=this;0==this.timecount?(this.checkcode_btn="获取验证码",this.timecount=60):(e.checkcode_btn=e.timecount+"秒后重发",e.timecount--,setTimeout(function(){e.GetCode()},1e3))},goReg:function(){var t=this;if(o.default.isEmpty(this.userPhone)||11!=this.userPhone.length)e.showToast({title:"请输入正确的手机号",icon:"none"});else if(o.default.isEmpty(this.checkCode)||6!=this.checkCode.length)e.showToast({title:"请输入6位验证码",icon:"none"});else if(o.default.isEmpty(this.userPass)||this.userPass.length<6)e.showToast({title:"请输入6位或以上新密码",icon:"none"});else if(this.userPass==this.userPass_2){var n=s.default.hex_md5(this.userPass),a={userPhone:t.userPhone,userPass:n,checkCode:t.checkCode,appId:t.appId,parentId:t.parentId};e.request({url:t.ApiGateWay+"/sale/Member/FindPass",data:a,dataType:"json",method:"POST",success:function(t){o.default.CheckData(t)?e.showModal({title:"信息提示",content:"密码重置成功,去登录",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"/pages/sign/sign"})}}):e.showModal({title:"出错了",content:t.data.errorMessage,showCancel:!1})}})}else e.showToast({title:"两次密码输入不一致",icon:"none"})}}};t.default=c}).call(this,n("6e42")["default"])},"9fb5":function(e,t,n){"use strict";n.r(t);var o=n("fafe"),s=n("653b");for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n("1f5e");var c,i=n("f0c5"),u=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=u.exports},b8bf:function(e,t,n){},fa44:function(e,t,n){"use strict";(function(e){n("b82d"),n("921b");o(n("66fd"));var t=o(n("9fb5"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fafe:function(e,t,n){"use strict";var o,s=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return s}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})}},[["fa44","common/runtime","common/vendor"]]]);
});
require('pages/sign/forgetpwd.js');
__wxRoute = 'pages/mytask/create';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mytask/create.js';

define('pages/mytask/create.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mytask/create"],{"0b30":function(e,t,a){"use strict";(function(e){a("b82d"),a("921b");n(a("66fd"));var t=n(a("dbc7"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"70e1":function(e,t,a){},"72ea":function(e,t,a){"use strict";var n=a("70e1"),i=a.n(n);i.a},9300:function(e,t,a){"use strict";a.r(t);var n=a("9f5b"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},"9f5b":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a("24a9"));function o(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{array:["选择任务类型","抖音","快手"],aim:["选择任务要求","点赞","关注","点赞+关注"],aimIndex:0,index:0,token:"",taskPackage:{},taskName:"",url:"",description:""}},onLoad:function(t){this.token=e.getStorageSync("token"),this.taskPackage=JSON.parse(t.item),console.log(n(t.item," at pages\\mytask\\create.vue:109"))},methods:{bindPickerChange:function(e){console.log(n("picker发送选择改变，携带值为",e.target.value," at pages\\mytask\\create.vue:115")),this.index=e.target.value},bindAimPickerChange:function(e){this.aimIndex=e.target.value},goCreateTask:function(){var t=this;if(0!=this.index)if(i.default.isEmpty(this.url))e.showToast({title:"请输入视频地址",icon:"none"});else{var a={orderNo:t.taskPackage.orderNo,taskName:t.taskName,url:t.url,description:t.description,aim:t.aimIndex-1,taskType:t.index-1};e.showLoading({title:"加载中..."}),e.request({url:t.ApiGateWay+"/sale/Member/CreateTask",data:a,header:{Authorization:t.token},method:"POST",dataType:"json",success:function(t){i.default.CheckData(t)&&e.showModal({title:"信息提示",content:"任务发布成功",showCancel:!1,success:function(t){e.navigateBack({delta:1})}})},complete:function(){e.hideLoading()},fail:function(t){e.stopPullDownRefresh()}})}else e.showToast({title:"请选择任务类型",icon:"none"})}}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},dbc7:function(e,t,a){"use strict";a.r(t);var n=a("e179"),i=a("9300");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("72ea");var u,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports},e179:function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"b",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return n})}},[["0b30","common/runtime","common/vendor"]]]);
});
require('pages/mytask/create.js');
__wxRoute = 'pages/sign/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sign/reg.js';

define('pages/sign/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sign/reg"],{"170b":function(e,t,n){"use strict";(function(e){n("b82d"),n("921b");s(n("66fd"));var t=s(n("9c5b"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"2a92":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(n("24a9")),o=c(n("8a67"));function c(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{parentId:"",userPhone:"",userPass:"",checkCode:"",userPass_2:"",checkcode_btn:"获取验证码",timecount:60,license:!1}},onLoad:function(t){s.default.isEmpty(t.parentId)||(this.parentId=t.parentId),e.removeStorageSync("token")},methods:{btnLicense:function(e){this.license=!this.license},goLicense:function(){e.navigateTo({url:"/pages/sign/license"})},GetCheckCode:function(){var t=this;if(s.default.isEmpty(this.userPhone)||11!=t.userPhone.length)return e.showModal({title:"信息提示",content:"请输入正确的手机号",showCancel:!1}),t.checkcode_btn="获取验证码",void(t.timecount=60);e.showLoading({title:"请等待..."}),e.request({url:t.ApiGateWay+"/sale/message/GetCheckCode?type=1&phone="+t.userPhone,method:"POST",success:function(n){e.hideLoading(),s.default.CheckData(n)?t.GetCode():e.showModal({title:"信息提示",content:n.data.errorMessage,showCancel:!1})},fail:function(){e.hideLoading(),e.showModal({title:"信息提示",content:"网络错误",showCancel:!1})}})},GetCode:function(){var e=this;0==this.timecount?(this.checkcode_btn="获取验证码",this.timecount=60):(e.checkcode_btn=e.timecount+"秒后重发",e.timecount--,setTimeout(function(){e.GetCode()},1e3))},goReg:function(){var t=this;if(s.default.isEmpty(this.userPhone)||11!=this.userPhone.length)e.showToast({title:"请输入正确的手机号",icon:"none"});else if(s.default.isEmpty(this.checkCode)||6!=this.checkCode.length)e.showToast({title:"请输入6位验证码",icon:"none"});else if(s.default.isEmpty(this.userPass)||this.userPass.length<6)e.showToast({title:"请输入6位或以上密码",icon:"none"});else if(this.userPass==this.userPass_2)if(this.license){var n=o.default.hex_md5(this.userPass),c={userPhone:t.userPhone,userPass:n,checkCode:t.checkCode,appId:t.appId,parentId:t.parentId};e.request({url:t.ApiGateWay+"/sale/Member/Register",data:c,dataType:"json",method:"POST",success:function(t){s.default.CheckData(t)?e.showModal({title:"信息提示",content:"注册成功,去登录",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"/pages/sign/sign"})}}):e.showModal({title:"出错了",content:t.data.errorMessage,showCancel:!1})}})}else e.showToast({title:"请阅读并同意注册协议",icon:"none"});else e.showToast({title:"两次密码输入不一致",icon:"none"})}}};t.default=i}).call(this,n("6e42")["default"])},"3e77":function(e,t,n){"use strict";n.r(t);var s=n("2a92"),o=n.n(s);for(var c in s)"default"!==c&&function(e){n.d(t,e,function(){return s[e]})}(c);t["default"]=o.a},"9c5b":function(e,t,n){"use strict";n.r(t);var s=n("c267"),o=n("3e77");for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);n("b8b5");var i,a=n("f0c5"),u=Object(a["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],i);t["default"]=u.exports},b8b5:function(e,t,n){"use strict";var s=n("dc0c"),o=n.n(s);o.a},c267:function(e,t,n){"use strict";var s,o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s})},dc0c:function(e,t,n){}},[["170b","common/runtime","common/vendor"]]]);
});
require('pages/sign/reg.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"357f":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("24a9"));function o(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{total:0,token:"",state:"",taskList:[],pageIndex:1,pageSize:15,indicatorDots:!0,phone:"拨打客服电话：400-0515-207",autoplay:!0,interval:2e3,duration:500}},onShow:function(){this.pageIndex=1,this.taskList=[],this.token=t.getStorageSync("token"),this.userInfo=t.getStorageSync("userInfo"),this.getTaskList()},onReachBottom:function(){this.taskList.length<this.total&&(this.pageIndex++,this.getTaskList())},onPullDownRefresh:function(){this.pageIndex=1,this.taskList=[],this.getTaskList()},methods:{news:function(){t.navigateTo({url:"/pages/news/new"})},task:function(e){t.navigateTo({url:"/pages/task/task?rank="+e})},live:function(){t.switchTab({url:"/pages/live/live"})},invite:function(){t.navigateTo({url:"/pages/invite/invite"})},getCall:function(){wx.makePhoneCall({phoneNumber:this.phone})},getTaskList:function(){var e=this,n={state:e.state,pageIndex:e.pageIndex,pageSize:e.pageSize};t.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:n,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(a(t+"111"," at pages\\index\\index.vue:202")),i.default.CheckData(t)&&(e.taskList=e.taskList.concat(t.data.list),e.total=t.data.total,console.log(a(e.taskList," at pages\\index\\index.vue:206")))},fail:function(){t.hideLoading()},complete:function(){t.hideLoading(),t.stopPullDownRefresh()}})},getTask:function(e,n){var a=this;t.showLoading({title:"加载中..."}),t.request({url:a.ApiGateWay+"/sale/Member/MemberGetTask?taskId="+n,header:{Authorization:a.token},method:"POST",dataType:"json",success:function(n){i.default.CheckData(n)?(n=n.data,a.taskList.splice(e,1),t.showModal({title:"提示",content:"领取成功",confirmColor:"#5A83E9",showCancel:!1})):t.showToast({title:n.data.errorMessage,icon:"none"})},complete:function(){t.hideLoading()},fail:function(e){t.stopPullDownRefresh()}})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"35b7":function(t,e,n){"use strict";n.r(e);var a=n("ed03"),i=n("f9c5");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("9812");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},"598a":function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("35b7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5a2e":function(t,e,n){},9812:function(t,e,n){"use strict";var a=n("5a2e"),i=n.n(a);i.a},ed03:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},f9c5:function(t,e,n){"use strict";n.r(e);var a=n("357f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a}},[["598a","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/news/new';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/new.js';

define('pages/news/new.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/new"],{"3ea2":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},"6a0c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{edit:function(){n.navigateTo({url:"/pages/news/details"})}}};t.default=e}).call(this,e("6e42")["default"])},"6f37":function(n,t,e){"use strict";e.r(t);var u=e("3ea2"),a=e("7b75");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("f0fd");var f,r=e("f0c5"),o=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);t["default"]=o.exports},"73b4":function(n,t,e){},"7b75":function(n,t,e){"use strict";e.r(t);var u=e("6a0c"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},d26c:function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");u(e("66fd"));var t=u(e("6f37"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},f0fd:function(n,t,e){"use strict";var u=e("73b4"),a=e.n(u);a.a}},[["d26c","common/runtime","common/vendor"]]]);
});
require('pages/news/new.js');
__wxRoute = 'pages/news/details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/details.js';

define('pages/news/details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/details"],{1482:function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");u(e("66fd"));var t=u(e("6d37"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},4236:function(n,t,e){},"44a2":function(n,t,e){"use strict";e.r(t);var u=e("d9ca"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"56da":function(n,t,e){"use strict";var u=e("4236"),a=e.n(u);a.a},"6d37":function(n,t,e){"use strict";e.r(t);var u=e("7c3d"),a=e("44a2");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("56da");var r,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=f.exports},"7c3d":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},d9ca:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{bank:function(){n.navigateBack({delta:1})}}};t.default=e}).call(this,e("6e42")["default"])}},[["1482","common/runtime","common/vendor"]]]);
});
require('pages/news/details.js');
__wxRoute = 'pages/invite/invite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/invite/invite.js';

define('pages/invite/invite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invite/invite"],{"18d4":function(t,e,n){"use strict";var a=n("90b9"),i=n.n(a);i.a},"23d8":function(t,e,n){"use strict";n.r(e);var a=n("bac7"),i=n("4122");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("18d4");var u,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},4122:function(t,e,n){"use strict";n.r(e);var a=n("eafc"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"90b9":function(t,e,n){},bac7:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},cb24:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("23d8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},eafc:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("24a9"));function o(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{token:"",shareUrl:"",windowWidth:0,windowHeight:0}},onLoad:function(){var e=t.getSystemInfoSync(),n=e.windowWidth,i=e.windowHeight;this.windowHeight=i-100,this.windowWidth=n-64,console.log(a(n,i," at pages\\invite\\invite.vue:41")),this.token=t.getStorageSync("token"),this.getShareUrl()},methods:{bank:function(){t.navigateBack({delta:1})},savePic:function(){},getShareUrl:function(){var e=this;t.showLoading({title:"请稍候..."}),t.request({url:e.ApiGateWay+"/sale/Member/GetShareUrl",data:"",method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(a(t," at pages\\invite\\invite.vue:115")),i.default.CheckData(t)&&(e.shareUrl=e.ImgServer+t.data.data)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["cb24","common/runtime","common/vendor"]]]);
});
require('pages/invite/invite.js');
__wxRoute = 'pages/task/task';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/task/task.js';

define('pages/task/task.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/task/task"],{"1a02":function(t,e,s){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("24a9"));i(s("d127"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{token:"",nodata:!1,total:-1,pageIndex:1,pageSize:10,state:"",taskRank:"",taskType:"",taskList:[],menuList:[],menuIndex:-1,isdown:!0,ismask:!1,sortnum:0}},onLoad:function(t){this.taskRank=t.rank},onShow:function(){this.token=t.getStorageSync("token"),this.pageIndex=1,this.taskList=[],this.getTaskList()},onPullDownRefresh:function(){this.pageIndex=1,this.taskList=[],this.getTaskList(),t.stopPullDownRefresh()},onReachBottom:function(){this.taskList.length<this.total&&(this.pageIndex++,this.getTaskList())},methods:{selectMenu:function(t){for(var e=0;e<this.menuList.length;e++)this.menuList[e].isChecked=!1;t.isChecked=!0,this.ismask=!1,1==this.menuIndex&&(this.taskRank=t.selectstatus),0==this.menuIndex&&(this.taskType=t.selectstatus),this.pageIndex=1,this.taskList=[],this.getTaskList()},closeallmask:function(){this.ismask=!1},openmask:function(t){if(console.log(n(t," at pages\\task\\task.vue:155")),this.menuIndex!=t){if(0==t){console.log(n("init----"," at pages\\task\\task.vue:158")),this.menuList=[{name:"全部",isChecked:!1,selectstatus:-1},{name:"抖音任务",isChecked:!1,selectstatus:0},{name:"快手任务",isChecked:!1,selectstatus:1}],this.menuIndex=0;for(var e=0;e<this.menuList.length;e++)if(this.menuList[e].selectstatus==this.status){this.menuList[e].isChecked=!0;break}}if(1==t){this.menuList=[{name:"全部",isChecked:!1,selectstatus:-1},{name:"普通任务",isChecked:!1,selectstatus:0},{name:"巨星任务",isChecked:!1,selectstatus:1}],this.menuIndex=1;for(e=0;e<this.menuList.length;e++)if(this.menuList[e].selectstatus==this.vehicelClass){this.menuList[e].isChecked=!0;break}}}console.log(n(this.menuList," at pages\\task\\task.vue:223")),this.menuIndex=t,this.ismask=!0},getTaskList:function(){var e=this,s=e.taskRank;-1==e.taskRank&&(s="");var i=e.taskType;-1==e.taskType&&(i="");var o={state:e.state,taskType:i,taskRank:s,pageIndex:e.pageIndex,pageSize:e.pageSize};t.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:o,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){if(console.log(n(t," at pages\\task\\task.vue:260")),a.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.taskList=e.taskList.concat(t.data.list),console.log(n(e.taskList," at pages\\task\\task.vue:273"))}else e.total=!0},fail:function(){t.hideLoading()},complete:function(){t.hideLoading(),t.stopPullDownRefresh()}})},getTask:function(e,s){var i=this;console.log(n("点击移除"," at pages\\task\\task.vue:295")),t.request({url:i.ApiGateWay+"/sale/Member/MemberGetTask?taskId="+s,header:{Authorization:i.token},method:"POST",dataType:"json",success:function(s){a.default.CheckData(s)?(s=s.data,i.taskList.splice(e,1),t.showModal({title:"提示",content:"领取成功",confirmColor:"#5A83E9",showCancel:!1})):t.showModal({title:"提示",content:s.data.errorMessage,confirmColor:"#5A83E9",showCancel:!1})},complete:function(){t.hideLoading()},fail:function(e){t.stopPullDownRefresh()}})}}};e.default=o}).call(this,s("6e42")["default"],s("0de9")["default"])},"31bb":function(t,e,s){"use strict";s.r(e);var n=s("7a00"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},4881:function(t,e,s){"use strict";s.r(e);var n=s("b060"),a=s("5cef");for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);s("f9f0");var o,u=s("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=c.exports},"5cef":function(t,e,s){"use strict";s.r(e);var n=s("1a02"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},"7a00":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},data:function(){return{}}};e.default=n},"7b62":function(t,e,s){"use strict";var n=s("9965"),a=s.n(n);a.a},"85e7":function(t,e,s){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return i}),s.d(e,"a",function(){return n})},9965:function(t,e,s){},b060:function(t,e,s){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return i}),s.d(e,"a",function(){return n})},bc96:function(t,e,s){"use strict";(function(t){s("b82d"),s("921b");n(s("66fd"));var e=n(s("4881"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},d127:function(t,e,s){"use strict";s.r(e);var n=s("85e7"),a=s("31bb");for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);s("7b62");var o,u=s("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=c.exports},dfb1:function(t,e,s){},f9f0:function(t,e,s){"use strict";var n=s("dfb1"),a=s.n(n);a.a}},[["bc96","common/runtime","common/vendor"]]]);
});
require('pages/task/task.js');
__wxRoute = 'pages/live/payment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/live/payment.js';

define('pages/live/payment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/live/payment"],{1834:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"7f3b":function(t,e,n){"use strict";n.r(e);var a=n("b147"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"892a":function(t,e,n){"use strict";var a=n("96d4"),o=n.n(a);o.a},"96d4":function(t,e,n){},b147:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("24a9"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{token:"",info:{},payType:0}},onLoad:function(e){this.token=t.getStorageSync("token"),this.info=JSON.parse(e.item)},methods:{btnClick:function(t){this.payType=t},payOrder:function(){t.showLoading({title:"正在下单..."});var e=this;t.request({url:e.ApiGateWay+"/sale/Member/PayTaskPackage?taskPackageId="+e.info.id+"&payType="+e.payType,data:"",header:{Authorization:e.token},method:"POST",dataType:"json",success:function(e){if(a.default.CheckData(e)){var n=e.data.data;t.showModal({title:"是否支付完成了",content:"为了避免订单超时,请尽快完成支付",confirmText:"已完成",success:function(e){e.confirm?t.navigateTo({url:"/pages/my/release"}):t.switchTab({url:"/pages/live/live"})}});var o=navigator.userAgent;o.indexOf("cdridge-android")>0?wv.goUrl(n):location.href=n}},complete:function(){t.hideLoading()},fail:function(e){t.stopPullDownRefresh()}})}}};e.default=i}).call(this,n("6e42")["default"])},c120:function(t,e,n){"use strict";n.r(e);var a=n("1834"),o=n("7f3b");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("892a");var u,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},c6e7:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("c120"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["c6e7","common/runtime","common/vendor"]]]);
});
require('pages/live/payment.js');
__wxRoute = 'pages/live/live';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/live/live.js';

define('pages/live/live.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/live/live"],{"054b":function(t,e,n){"use strict";var a=n("9c3a"),u=n.n(a);u.a},"19d3":function(t,e,n){"use strict";n.r(e);var a=n("2811"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},2381:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},2811:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("24a9"));function u(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{list:[],token:""}},onLoad:function(){this.token=t.getStorageSync("token"),this.getList()},methods:{getList:function(){var e=this;t.request({url:e.ApiGateWay+"/sale/Member/GetTaskPackageList",data:"",header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){a.default.CheckData(t)&&(e.list=t.data.list)},complete:function(){t.hideLoading()},fail:function(e){t.stopPullDownRefresh()}})},payment:function(e){t.navigateTo({url:"/pages/live/payment?item="+JSON.stringify(e)})}}};e.default=i}).call(this,n("6e42")["default"])},5879:function(t,e,n){"use strict";n.r(e);var a=n("2381"),u=n("19d3");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("054b");var o,c=n("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=r.exports},"9c3a":function(t,e,n){},bed5:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("5879"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["bed5","common/runtime","common/vendor"]]]);
});
require('pages/live/live.js');
__wxRoute = 'pages/mytask/mytask';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mytask/mytask.js';

define('pages/mytask/mytask.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mytask/mytask"],{2031:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("24a9"));s(n("d127"));function s(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{sendType:0,myTasklist:[],token:"",pageIndex:1,pageSize:10,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},total:-1,nodata:!1}},onShow:function(){this.pageIndex=1,this.myTasklist=[],this.selType=-1,this.token=t.getStorageSync("token"),this.userInfo=t.getStorageSync("userInfo"),this.getMyTaskList()},onPullDownRefresh:function(){this.pageIndex=1,this.myTasklist=[],this.getMyTaskList()},onReachBottom:function(){this.myTasklist.length<this.total&&(this.pageIndex++,this.getMyTaskList())},methods:{getMyTaskList:function(){var e=this,n={pageIndex:e.pageIndex,pageSize:e.pageSize,state:e.sendType};t.request({url:e.ApiGateWay+"/sale/Member/GetMyTaskList",data:n,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){if(console.log(a(t+"111"," at pages\\mytask\\mytask.vue:144")),o.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.myTasklist=e.myTasklist.concat(t.data.list)}},fail:function(){t.hideLoading()},complete:function(){t.hideLoading(),t.stopPullDownRefresh()}})},btnClick:function(t){console.log(a(t," at pages\\mytask\\mytask.vue:174")),this.sendType!=t&&(this.sendType=t,this.getMyTaskList())},mytasorder:function(e){console.log(a("=========="," at pages\\mytask\\mytask.vue:183")),console.log(a(e," at pages\\mytask\\mytask.vue:184")),console.log(a("=========="," at pages\\mytask\\mytask.vue:185")),t.navigateTo({url:"/pages/mytask/mytaskorder?orderNo="+e.orderNo})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"31bb":function(t,e,n){"use strict";n.r(e);var a=n("7a00"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"3f43":function(t,e,n){},"6d32":function(t,e,n){"use strict";n.r(e);var a=n("fcb4"),o=n("a958");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("6f08");var u,r=n("f0c5"),i=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},"6f08":function(t,e,n){"use strict";var a=n("3f43"),o=n.n(a);o.a},"7a00":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},data:function(){return{}}};e.default=a},"7b62":function(t,e,n){"use strict";var a=n("9965"),o=n.n(a);o.a},"85e7":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},9965:function(t,e,n){},a958:function(t,e,n){"use strict";n.r(e);var a=n("2031"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},cbca:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("6d32"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d127:function(t,e,n){"use strict";n.r(e);var a=n("85e7"),o=n("31bb");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("7b62");var u,r=n("f0c5"),i=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},fcb4:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})}},[["cbca","common/runtime","common/vendor"]]]);
});
require('pages/mytask/mytask.js');
__wxRoute = 'pages/mytask/mytaskorder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mytask/mytaskorder.js';

define('pages/mytask/mytaskorder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mytask/mytaskorder"],{"13ae":function(t,e,a){"use strict";var o,n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.onCopyResult("success")),o=t.onCopyResult("error");t.$mp.data=Object.assign({},{$root:{m0:a,m1:o}})},s=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return o})},1959:function(t,e,a){},"34ab":function(t,e,a){"use strict";a.r(e);var o=a("59c8"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},"4daa":function(t,e,a){"use strict";var o=a("1959"),n=a.n(o);n.a},5596:function(t,e,a){"use strict";a.r(e);var o=a("13ae"),n=a("34ab");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("4daa");var i,c=a("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=r.exports},"59c8":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("24a9"));function s(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{token:"",info:{},item:{},imgPath:"",imgSvr:""}},onLoad:function(e){this.imgSvr=this.ImgServer,this.token=t.getStorageSync("token");var a=e.orderNo;this.getTask(a)},onShow:function(){},methods:{getTask:function(e){var a=this;t.showLoading({title:"请稍候..."}),t.request({url:a.ApiGateWay+"/sale/Member/GetMyTaskDetails?orderNo="+e,data:"",method:"POST",dataType:"json",header:{Authorization:a.token},success:function(e){if(n.default.CheckData(e)){var o=e.data.data;a.imgPath=o.taskPic,a.info=o}else t.showModal({title:"信息提示",content:e.data.errorMessage,showCancel:!1,success:function(e){e.confirm&&t.switchTab({url:"/pages/mytask/mytask"})}})},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})},onCopyResult:function(e){"success"===e?t.showToast({title:"复制成功",icon:"none"}):console.log(o(2," at pages\\mytask\\mytaskorder.vue:162"))},sendTask:function(){var e=this;if(n.default.isEmpty(e.imgPath))t.showToast({title:"请上传图片",icon:"none"});else{var a={taskPic:e.imgPath,orderNo:e.info.orderNo};t.showLoading({title:"请稍候..."}),t.request({url:e.ApiGateWay+"/sale/Member/SubmitTask",data:a,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(e){n.default.CheckData(e)?t.showModal({title:"信息提示",content:"提交成功,请等待审核!",showCancel:!1,success:function(e){e.confirm&&t.switchTab({url:"/pages/mytask/mytask"})}}):t.showModal({title:"信息提示",content:e.data.errorMessage,showCancel:!1,success:function(e){e.confirm&&t.switchTab({url:"/pages/mytask/mytask"})}})},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})}},openUrl:function(){var t=navigator.userAgent;t.indexOf("cdridge-android")>0?wv.goUrl(this.info.url):location.href=this.info.url},copyData:function(){var e=this;t.setClipboardData({data:e.info.url,success:function(){t.showToast({title:"复制成功",icon:"none"})}})},selectPic1:function(){var e=this;t.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){a.tempFiles[0].size;t.getImageInfo({src:a.tempFilePaths[0],success:function(t){e.upload(t.path)}})}})},selectPic:function(){var e=this,a="";t.chooseImage({count:1,sizeType:["compressed"],success:function(n){a=n.tempFilePaths.toString(),t.getImageInfo({src:a,success:function(t){var n=t.width,s=t.height,i=n/s;n>500&&(n=500,s=Math.floor(n/i));var c=new Image;c.src=a;var r=document.createElement("canvas"),u=r.getContext("2d");r.width=n,r.height=s,u.clearRect(0,0,n,s),u.drawImage(c,0,0,n,s),a=r.toDataURL("image/png"),console.log(o(a," at pages\\mytask\\mytaskorder.vue:313")),e.upload(a)}})}})},upload:function(e){t.showLoading({title:"请稍候..."});var a=this;t.uploadFile({url:a.ApiGateWay+"/sale/image/uploadByFile",filePath:e,name:"file",formData:{path:"/sale/task/"},success:function(e){var o=JSON.parse(e.data);0==o.errorCode?(t.showToast({icon:"success",title:"图片上传成功!"}),a.imgPath=o.data):(t.hideLoading(),t.showModal({title:"提示",content:"图片上传失败",showCancel:!1,success:function(t){}}))},complete:function(){a.upload_field=""}})}}};e.default=i}).call(this,a("6e42")["default"],a("0de9")["default"])},ec8a:function(t,e,a){"use strict";(function(t){a("b82d"),a("921b");o(a("66fd"));var e=o(a("5596"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["ec8a","common/runtime","common/vendor"]]]);
});
require('pages/mytask/mytaskorder.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0e0a":function(e,a,t){"use strict";(function(e){t("b82d"),t("921b");n(t("66fd"));var a=n(t("34ca"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},"0fd1":function(e,a,t){"use strict";var n,o=function(){var e=this,a=e.$createElement;e._self._c},i=[];t.d(a,"b",function(){return o}),t.d(a,"c",function(){return i}),t.d(a,"a",function(){return n})},"34ca":function(e,a,t){"use strict";t.r(a);var n=t("0fd1"),o=t("47f9");for(var i in o)"default"!==i&&function(e){t.d(a,e,function(){return o[e]})}(i);t("e32d");var u,s=t("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);a["default"]=r.exports},"47f9":function(e,a,t){"use strict";t.r(a);var n=t("e4b0"),o=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(a,e,function(){return n[e]})}(i);a["default"]=o.a},b140:function(e,a,t){},e32d:function(e,a,t){"use strict";var n=t("b140"),o=t.n(n);o.a},e4b0:function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(t("24a9"));function i(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{imgSvr:"",token:"",info:{},teamCount:"",dataModel:{taskMoney:0,taskProfit:0,taskPackageProfit:0,taskSuperCount:0,taskCount:0,useTaskSuperCount:0,useTaskCount:0,money:0,todayIncome:0},rankName:"普通会员",levelName:"普通用户"}},onLoad:function(){this.imgSvr=this.ImgServer,this.token=e.getStorageSync("token")},onShow:function(){this.getInfo(),this.getData(),this.getTeamCount()},methods:{getTeamCount:function(){var a=this;e.request({url:a.ApiGateWay+"/sale/Member/GetTeamCount",data:"",method:"GET",dataType:"json",header:{Authorization:a.token},success:function(e){console.log(n(e," at pages\\my\\my.vue:190")),o.default.CheckData(e)&&(a.teamCount=e.data.data.total-1+"人")},fail:function(){},complete:function(){}})},initRankName:function(){switch(this.info.rank){case 0:this.rankName="普通会员";break;case 1:this.rankName="网红";break;case 2:this.rankName="达人";break;case 3:this.rankName="明星";break;case 4:this.rankName="巨星";break}switch(this.info.memberType){case 0:this.levelName="普通用户";break;case 1:this.levelName="经销商";break;case 2:this.levelName="代理商";break;case 3:this.levelName="总代";break}},getInfo:function(){var a=this;e.showLoading({title:"请稍候..."}),e.request({url:a.ApiGateWay+"/sale/Member/GetInfo",data:"",method:"POST",dataType:"json",header:{Authorization:a.token},success:function(e){console.log(n(e," at pages\\my\\my.vue:256")),o.default.CheckData(e)&&(a.info=e.data.data,a.initRankName())},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}})},getData:function(){var a=this;e.showLoading({title:"请稍候..."}),e.request({url:a.ApiGateWay+"/sale/Member/GetTodayData",data:"",method:"POST",dataType:"json",header:{Authorization:a.token},success:function(e){console.log(n(e," at pages\\my\\my.vue:289")),o.default.CheckData(e)&&(a.dataModel=e.data.data)},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}})},shez:function(){e.navigateTo({url:"/pages/my/set"})},team:function(){e.navigateTo({url:"/pages/my/team"})},release:function(){e.navigateTo({url:"/pages/my/release"})},person:function(){e.navigateTo({url:"/pages/my/personal"})},taskmanmgent:function(){e.navigateTo({url:"/pages/my/taskmanmgent"})},balance:function(){e.navigateTo({url:"/pages/my/balance"})},invite:function(){e.navigateTo({url:"/pages/invite/invite"})},myBank:function(){console.log(n(" at pages\\my\\my.vue:349")),e.navigateTo({url:"/pages/my/bank"})},withdrawals:function(){e.navigateTo({url:"/pages/my/Withdrawals"})}}};a.default=u}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["0e0a","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/my/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/personal.js';

define('pages/my/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/personal"],{"0576":function(e,t,a){"use strict";var n=a("241b"),o=a.n(n);o.a},"0c1f":function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n})},"241b":function(e,t,a){},"6d24":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("24a9"));i(a("888c"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){return Promise.all([a.e("common/vendor"),a.e("components/mpvue-citypicker/mpvueCityPicker")]).then(a.bind(null,"98fd"))},c={components:{mpvueCityPicker:s},data:function(){return{imgSvr:"",token:"",info:{},array:["男","女"]}},onLoad:function(){this.imgSvr=this.ImgServer,this.token=e.getStorageSync("token"),this.getInfo()},methods:{getInfo:function(){var t=this;e.showLoading({title:"请稍候..."}),e.request({url:t.ApiGateWay+"/sale/Member/GetInfo",data:"",method:"POST",dataType:"json",header:{Authorization:t.token},success:function(e){console.log(n(e," at pages\\my\\personal.vue:97")),o.default.CheckData(e)&&(o.default.isEmpty(e.data.data.sex)&&(e.data.data.sex=0),t.info=e.data.data)},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}})},saveData:function(){var t=this;o.default.isEmpty(this.info.avatar)?e.showToast({title:"请上传头像",icon:"none"}):o.default.isEmpty(this.info.userName)?e.showToast({title:"请输入姓名",icon:"none"}):(e.showLoading({title:"请稍候..."}),e.request({url:t.ApiGateWay+"/sale/Member/EditMemberInfo",data:t.info,method:"POST",dataType:"json",header:{Authorization:t.token},success:function(t){console.log(n(t," at pages\\my\\personal.vue:157")),o.default.CheckData(t)?e.showModal({title:"信息提示",content:"信息修改成功",showCancel:!1}):e.showModal({title:"出错了",content:t.data.errorMessage,showCancel:!1})},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}}))},bindPickerChange:function(e){console.log(n("picker发送选择改变，携带值为",e.target.value," at pages\\my\\personal.vue:185")),this.info.sex=e.target.value},selectPic:function(){var t=this,a="";e.chooseImage({count:1,sizeType:["compressed"],success:function(o){a=o.tempFilePaths.toString(),e.getImageInfo({src:a,success:function(e){var o=e.width,i=e.height,s=o/i;o>500&&(o=500,i=Math.floor(o/s));var c=new Image;c.src=a;var u=document.createElement("canvas"),r=u.getContext("2d");u.width=o,u.height=i,r.clearRect(0,0,o,i),r.drawImage(c,0,0,o,i),a=u.toDataURL("image/png"),console.log(n(a," at pages\\my\\personal.vue:222")),t.upload(a)}})}})},upload:function(t){e.showLoading({title:"请稍候..."});var a=this;e.uploadFile({url:a.ApiGateWay+"/sale/image/uploadByFile",filePath:t,name:"file",formData:{path:"/user/avatar/"},success:function(t){var n=JSON.parse(t.data);0==n.errorCode?(e.showToast({icon:"success",title:"图片上传成功!"}),a.info.avatar=n.data):(e.hideLoading(),e.showModal({title:"提示",content:"图片上传失败",showCancel:!1,success:function(e){}}))},complete:function(){a.upload_field=""}})}}};t.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},afba:function(e,t,a){"use strict";(function(e){a("b82d"),a("921b");n(a("66fd"));var t=n(a("e79e"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d02e:function(e,t,a){"use strict";a.r(t);var n=a("6d24"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},e79e:function(e,t,a){"use strict";a.r(t);var n=a("0c1f"),o=a("d02e");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("0576");var s,c=a("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=u.exports}},[["afba","common/runtime","common/vendor"]]]);
});
require('pages/my/personal.js');
__wxRoute = 'pages/my/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/set.js';

define('pages/my/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/set"],{"0ad1":function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");a(e("66fd"));var t=a(e("1243"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},1243:function(n,t,e){"use strict";e.r(t);var a=e("bbca"),u=e("a453");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("5af1");var o,i=e("f0c5"),r=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=r.exports},"4c30":function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{phone:"400-0000-000"}},methods:{goExitApp:function(){n.showModal({title:"信息提示",content:"是否确认退出程序",success:function(t){t.confirm&&(n.removeStorageSync("token"),n.reLaunch({url:"/pages/sign/sign"}))}})},getCall:function(){n.makePhoneCall({phoneNumber:this.phone})},pwd:function(){n.navigateTo({url:"/pages/my/pwd"})},baCk:function(){n.switchTab({url:"/pages/my/my"})},praise:function(){n.navigateTo({url:"/pages/my/praise"})},bindPickerChange:function(n){console.log(e("picker发送选择改变，携带值为",n.target.value," at pages\\my\\set.vue:100")),this.index=n.target.value}}};t.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},"5af1":function(n,t,e){"use strict";var a=e("9b68"),u=e.n(a);u.a},"9b68":function(n,t,e){},a453:function(n,t,e){"use strict";e.r(t);var a=e("4c30"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=u.a},bbca:function(n,t,e){"use strict";var a,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return a})}},[["0ad1","common/runtime","common/vendor"]]]);
});
require('pages/my/set.js');
__wxRoute = 'pages/my/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/pwd.js';

define('pages/my/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/pwd"],{"38e5":function(t,e,n){"use strict";n.r(e);var a=n("96cc"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},"48b0":function(t,e,n){"use strict";var a=n("4d0c"),s=n.n(a);s.a},"4d0c":function(t,e,n){},"7cf9":function(t,e,n){"use strict";n.r(e);var a=n("a5ca"),s=n("38e5");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("48b0");var c,u=n("f0c5"),i=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=i.exports},"96cc":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(n("24a9")),o=c(n("8a67"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{token:"",oldPass:"",newPass:"",newPass_2:""}},onLoad:function(){this.token=t.getStorageSync("token")},methods:{sendData:function(){var e=this;if(s.default.isEmpty(this.oldPass)||this.oldPass.length<6)t.showToast({title:"请输入6位以上原密码",icon:"none"});else if(s.default.isEmpty(this.newPass)||this.newPass.length<6)t.showToast({title:"请输入6位以上新密码",icon:"none"});else if(this.newPass==this.newPass_2){var n=o.default.hex_md5(this.oldPass),c=o.default.hex_md5(this.newPass),u={oldPass:n,newPass:c};t.request({url:e.ApiGateWay+"/sale/Member/EditMemberPass",data:u,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(e){console.log(a(e," at pages\\my\\pwd.vue:111")),s.default.CheckData(e)?t.showModal({title:"信息提示",content:"修改成功",showCancel:!1,success:function(e){t.navigateBack({delta:1})}}):t.showModal({title:"出错了",content:e.data.errorMessage,showCancel:!1})},fail:function(){},complete:function(){}})}else t.showToast({title:"两次密码输入不一致",icon:"none"})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},a5ca:function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},f0cc:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("7cf9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f0cc","common/runtime","common/vendor"]]]);
});
require('pages/my/pwd.js');
__wxRoute = 'pages/my/praise';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/praise.js';

define('pages/my/praise.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/praise"],{"04f1":function(n,t,e){"use strict";e.r(t);var u=e("a9e0"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"2b16":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},9447:function(n,t,e){},a609:function(n,t,e){"use strict";var u=e("9447"),a=e.n(u);a.a},a9e0:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{bank:function(){n.navigateBack({delta:1})}}};t.default=e}).call(this,e("6e42")["default"])},d144:function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");u(e("66fd"));var t=u(e("f6cf"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},f6cf:function(n,t,e){"use strict";e.r(t);var u=e("2b16"),a=e("04f1");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("a609");var f,r=e("f0c5"),o=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);t["default"]=o.exports}},[["d144","common/runtime","common/vendor"]]]);
});
require('pages/my/praise.js');
__wxRoute = 'pages/my/balance';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/balance.js';

define('pages/my/balance.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/balance"],{"0aef":function(t,a,e){"use strict";e.r(a);var n=e("ca12"),o=e("9471");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);e("8836");var u,c=e("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);a["default"]=l.exports},"495a":function(t,a,e){"use strict";(function(t){e("b82d"),e("921b");n(e("66fd"));var a=n(e("0aef"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"692b":function(t,a,e){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(e("24a9"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{token:"",balance:0,list:[]}},onLoad:function(){this.token=t.getStorageSync("token"),this.getData()},onShow:function(){this.getList()},methods:{getData:function(){var a=this;t.showLoading({title:"请稍候..."}),t.request({url:a.ApiGateWay+"/sale/Member/GetTodayData",data:"",method:"POST",dataType:"json",header:{Authorization:a.token},success:function(t){console.log(n(t," at pages\\my\\balance.vue:74")),o.default.CheckData(t)&&(a.balance=t.data.data.money)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})},getList:function(){var a=this;t.showLoading({title:"请稍候..."}),t.request({url:a.ApiGateWay+"/sale/Member/MemberGetBankAccountList",data:{pageIndex:1,pageSize:100},method:"POST",dataType:"json",header:{Authorization:a.token},success:function(t){console.log(n(t," at pages\\my\\balance.vue:109")),o.default.CheckData(t)&&(a.list=t.data.list)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})},capital:function(){t.navigateTo({url:"/pages/my/capital"})},record:function(){t.navigateTo({url:"/pages/my/record"})},bank:function(){t.navigateBack({delta:1})},addback:function(){t.navigateTo({url:"/pages/my/bank"})},withdrawals:function(){0!=this.list.length?t.navigateTo({url:"/pages/my/Withdrawals"}):t.showModal({title:"出错了",content:"请先添加提现银行卡",showCancel:!1})}}};a.default=u}).call(this,e("6e42")["default"],e("0de9")["default"])},8233:function(t,a,e){},8836:function(t,a,e){"use strict";var n=e("8233"),o=e.n(n);o.a},9471:function(t,a,e){"use strict";e.r(a);var n=e("692b"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a},ca12:function(t,a,e){"use strict";var n,o=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"b",function(){return o}),e.d(a,"c",function(){return i}),e.d(a,"a",function(){return n})}},[["495a","common/runtime","common/vendor"]]]);
});
require('pages/my/balance.js');
__wxRoute = 'pages/my/Withdrawals';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/Withdrawals.js';

define('pages/my/Withdrawals.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/Withdrawals"],{"23e5":function(e,a,n){"use strict";(function(e,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(n("24a9"));function i(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{token:"",balance:0,bankInfo:{},money:""}},onLoad:function(){this.token=e.getStorageSync("token"),e.removeStorageSync("bank"),this.bankInfo={},this.getData()},onShow:function(){var a=e.getStorageSync("bank");o.default.isEmpty(a)||(this.bankInfo=a)},methods:{checkInput:function(e){parseFloat(this.money)>parseFloat(this.balance)&&(this.money=this.balance+"",console.log(t(this.money,this.balance," at pages\\my\\Withdrawals.vue:77")))},setMoney:function(){this.money=this.balance},getData:function(){var a=this;e.showLoading({title:"请稍候..."}),e.request({url:a.ApiGateWay+"/sale/Member/GetTodayData",data:"",method:"POST",dataType:"json",header:{Authorization:a.token},success:function(e){console.log(t(e," at pages\\my\\Withdrawals.vue:99")),o.default.CheckData(e)&&(a.balance=e.data.data.money)},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}})},goSendData:function(){if(o.default.validMoney(this.money))if(o.default.isEmpty(this.bankInfo.bankName))e.showModal({title:"出错了",content:"请选择提现银行卡",showCancel:!1});else{parseFloat(this.money)>parseFloat(this.balance)&&(this.money=this.balance);var a=this,n={money:this.money,bankName:this.bankInfo.bankName,subBankName:this.bankInfo.subBankName,cardNo:this.bankInfo.cardNo,accountName:this.bankInfo.accountName};e.showLoading({title:"请稍候..."}),e.request({url:a.ApiGateWay+"/sale/Member/MemberAddMoneyOrders",data:n,method:"POST",dataType:"json",header:{Authorization:a.token},success:function(n){console.log(t(n," at pages\\my\\Withdrawals.vue:163")),o.default.CheckData(n)?e.reLaunch({url:"/pages/my/result?bankName="+a.bankInfo.bankName+"&money="+a.money}):e.showModal({title:"出错了",content:n.data.errorMessage,showCancel:!1})},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}})}else e.showModal({title:"出错了",content:"请输入正确的金额",showCancel:!1})},chooseback:function(){e.removeStorageSync("bank"),this.bankInfo={},e.navigateTo({url:"/pages/my/chooseback"})},bank:function(){e.navigateBack({delta:1})}}};a.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"41d9":function(e,a,n){"use strict";(function(e){n("b82d"),n("921b");t(n("66fd"));var a=t(n("9e93"));function t(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,n("6e42")["createPage"])},4321:function(e,a,n){"use strict";n.r(a);var t=n("23e5"),o=n.n(t);for(var i in t)"default"!==i&&function(e){n.d(a,e,function(){return t[e]})}(i);a["default"]=o.a},"9e93":function(e,a,n){"use strict";n.r(a);var t=n("c2e9"),o=n("4321");for(var i in o)"default"!==i&&function(e){n.d(a,e,function(){return o[e]})}(i);n("ef45");var s,c=n("f0c5"),u=Object(c["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],s);a["default"]=u.exports},a768:function(e,a,n){},c2e9:function(e,a,n){"use strict";var t,o=function(){var e=this,a=e.$createElement;e._self._c},i=[];n.d(a,"b",function(){return o}),n.d(a,"c",function(){return i}),n.d(a,"a",function(){return t})},ef45:function(e,a,n){"use strict";var t=n("a768"),o=n.n(t);o.a}},[["41d9","common/runtime","common/vendor"]]]);
});
require('pages/my/Withdrawals.js');
__wxRoute = 'pages/my/chooseback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/chooseback.js';

define('pages/my/chooseback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/chooseback"],{2253:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("24a9"));function u(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{token:"",list:[]}},onLoad:function(){this.token=t.getStorageSync("token"),this.getList()},onShow:function(){t.removeStorageSync("bank")},methods:{goBack:function(){t.navigateBack({delta:1})},getList:function(){var e=this;t.showLoading({title:"请稍候..."}),t.request({url:e.ApiGateWay+"/sale/Member/MemberGetBankAccountList",data:{pageIndex:1,pageSize:100},method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(a(t," at pages\\my\\chooseback.vue:69")),o.default.CheckData(t)&&(e.list=t.data.list)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})},selectBank:function(e){t.setStorageSync("bank",e),t.navigateBack({delta:1})}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"8f92":function(t,e,n){"use strict";var a=n("de42"),o=n.n(a);o.a},9215:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("ee27"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"95f7":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},a3cb:function(t,e,n){"use strict";n.r(e);var a=n("2253"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},de42:function(t,e,n){},ee27:function(t,e,n){"use strict";n.r(e);var a=n("95f7"),o=n("a3cb");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("8f92");var c,i=n("f0c5"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=r.exports}},[["9215","common/runtime","common/vendor"]]]);
});
require('pages/my/chooseback.js');
__wxRoute = 'pages/my/result';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/result.js';

define('pages/my/result.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/result"],{"1acd":function(n,t,e){"use strict";e.r(t);var a=e("c759"),u=e("87f9");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("d8c8");var o,r=e("f0c5"),f=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=f.exports},"3d60":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{bankName:"",money:0}},onLoad:function(n){this.bankName=n.bankName,this.money=n.money},methods:{goBack:function(){n.switchTab({url:"/pages/my/my"})}}};t.default=e}).call(this,e("6e42")["default"])},"648a":function(n,t,e){},"87f9":function(n,t,e){"use strict";e.r(t);var a=e("3d60"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=u.a},a112:function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");a(e("66fd"));var t=a(e("1acd"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},c759:function(n,t,e){"use strict";var a,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return a})},d8c8:function(n,t,e){"use strict";var a=e("648a"),u=e.n(a);u.a}},[["a112","common/runtime","common/vendor"]]]);
});
require('pages/my/result.js');
__wxRoute = 'pages/my/record';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/record.js';

define('pages/my/record.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/record"],{"0826":function(e,t,n){"use strict";var o=n("f8f0"),r=n.n(o);r.a},"31bb":function(e,t,n){"use strict";n.r(t);var o=n("7a00"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},"48f3":function(e,t,n){"use strict";n.r(t);var o=n("9a22"),r=n("94c6");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("0826");var u,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=i.exports},"5b81":function(e,t,n){"use strict";(function(e){n("b82d"),n("921b");o(n("66fd"));var t=o(n("48f3"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7a00":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},data:function(){return{}}};t.default=o},"7b62":function(e,t,n){"use strict";var o=n("9965"),r=n.n(o);r.a},"85e7":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"94c6":function(e,t,n){"use strict";n.r(t);var o=n("9e8e"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},9965:function(e,t,n){},"9a22":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"9e8e":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("24a9"));a(n("d127"));function a(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{token:"",state:"",pageIndex:1,pageSize:10,sendType:-1,recordList:[],contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},total:-1,nodata:!1}},onShow:function(){this.pageIndex=1,this.recordList=[],this.selType=-1,this.token=e.getStorageSync("token"),this.userInfo=e.getStorageSync("userInfo"),this.getMoneyOrdersList()},methods:{btnClick:function(e){console.log(o(e," at pages\\my\\record.vue:93")),this.sendType!=e&&(this.sendType=e,this.getMoneyOrdersList())},getMoneyOrdersList:function(){var t=this,n={state:t.sendType,pageIndex:t.pageIndex,pageSize:t.pageSize};e.request({url:t.ApiGateWay+"/sale/Member/MemberGetMoneyOrdersList",data:n,method:"POST",dataType:"json",header:{Authorization:t.token},success:function(e){if(console.log(o(e+"111"," at pages\\my\\record.vue:119")),r.default.CheckData(e)){e.errorCode,e.errorMessage;var n=e.list;e.total,e.totalPage;null==n&&(t.total=e.data.total),t.recordList=t.recordList.concat(e.data.list),t.recordList=e.data.list,console.log(o(t.recordList," at pages\\my\\record.vue:133"))}else t.total=!0},fail:function(){e.hideLoading()},complete:function(){e.hideLoading()}})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},d127:function(e,t,n){"use strict";n.r(t);var o=n("85e7"),r=n("31bb");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("7b62");var u,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=i.exports},f8f0:function(e,t,n){}},[["5b81","common/runtime","common/vendor"]]]);
});
require('pages/my/record.js');
__wxRoute = 'pages/my/capital';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/capital.js';

define('pages/my/capital.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/capital"],{2705:function(t,e,n){"use strict";n.r(e);var a=n("a892"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"31bb":function(t,e,n){"use strict";n.r(e);var a=n("7a00"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"32a3":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},"3ce4":function(t,e,n){"use strict";var a=n("fd29"),i=n.n(a);i.a},"7a00":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},data:function(){return{}}};e.default=a},"7b62":function(t,e,n){"use strict";var a=n("9965"),i=n.n(a);i.a},"85e7":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},"8e1f":function(t,e,n){"use strict";n.r(e);var a=n("32a3"),i=n("2705");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("3ce4");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=u.exports},9965:function(t,e,n){},a892:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("24a9"));o(n("d127"));function o(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){var t=this.getDate({format:!0});return{token:"",pageIndex:1,pageSize:10,rewardList:[],ismask2:!1,sendType:0,date:t,isdown:!0,sortnum:0,sortlist:[{title:"全部",type:-1},{title:"后台充值",type:1},{title:"任务奖励",type:5},{title:"任务分佣",type:10},{title:"套餐提成",type:15},{title:"充值消费",type:105},{title:"提现",type:101},{title:"提现驳回",type:20}]}},onReachBottom:function(){this.rewardList.length!=this.total&&(this.pageIndex++,this.getMoneyRecordList())},onPullDownRefresh:function(){this.pageIndex=1,this.rewardList=[],this.getMoneyRecordList()},onShow:function(){this.pageIndex=1,this.rewardList=[],this.token=t.getStorageSync("token"),this.userInfo=t.getStorageSync("userInfo"),this.getMoneyRecordList()},methods:{getDate:function(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1;return a=a>9?a:"0"+a,"".concat(n,"-").concat(a)},bindDateChange:function(t){this.date=t.target.value},navClick:function(t){this.isdown=!1,this.ismask2=!1,this.getMoneyRecordList()()},closeallmask:function(){this.ismask2=!1},downselectsort:function(t){this.isdown=!0,this.ismask2=!1,this.sortnum=t,this.pageIndex=1,this.rewardList=[],this.getMoneyRecordList()},openmask2:function(){this.ismask=!1,console.log(a("ismaskkkkkkkkkkkkkkk"+this.ismask," at pages\\my\\capital.vue:197")),0==this.ismask2?this.ismask2=!0:this.ismask2=!1},getMoneyRecordList:function(){var e=this,n={type:e.sortlist[e.sortnum].type,pageIndex:e.pageIndex,pageSize:e.pageSize};t.request({url:e.ApiGateWay+"/sale/Member/MemberGetMoneyRecordList",data:n,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){if(console.log(a(t+"111"," at pages\\my\\capital.vue:223")),i.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.rewardList=e.rewardList.concat(t.data.list)}else e.total=t.data.total},fail:function(){t.hideLoading()},complete:function(){t.stopPullDownRefresh(),t.hideLoading()}})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},c068:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("8e1f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d127:function(t,e,n){"use strict";n.r(e);var a=n("85e7"),i=n("31bb");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("7b62");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=u.exports},fd29:function(t,e,n){}},[["c068","common/runtime","common/vendor"]]]);
});
require('pages/my/capital.js');
__wxRoute = 'pages/my/bank';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/bank.js';

define('pages/my/bank.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/bank"],{"205b":function(t,e,n){},"32bd":function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("d222"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3956:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("24a9"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{token:"",list:[]}},onLoad:function(){this.token=t.getStorageSync("token")},onShow:function(){this.list=[],this.getList()},methods:{delBank:function(e,n){var i=this;t.showModal({content:"是否确认删除银行卡",success:function(u){u.confirm&&(t.showLoading({title:"请稍候..."}),t.request({url:i.ApiGateWay+"/sale/Member/MemberDelBankAccount?id="+e.id,data:"",method:"POST",dataType:"json",header:{Authorization:i.token},success:function(e){console.log(a(e," at pages\\my\\bank.vue:67")),o.default.CheckData(e)&&(t.showModal({content:"删除成功",showCancel:!1}),i.list.splice(n,1))},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}}))}})},getList:function(){var e=this;t.showLoading({title:"请稍候..."}),t.request({url:e.ApiGateWay+"/sale/Member/MemberGetBankAccountList",data:{pageIndex:1,pageSize:100},method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(a(t," at pages\\my\\bank.vue:111")),o.default.CheckData(t)&&(e.list=t.data.list)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})},goAddBank:function(e){t.navigateTo({url:"/pages/my/addbank?item="+JSON.stringify(e)})},goBank:function(){t.navigateBack({delta:1})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"3e19":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},9612:function(t,e,n){"use strict";var a=n("205b"),o=n.n(a);o.a},9901:function(t,e,n){"use strict";n.r(e);var a=n("3956"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},d222:function(t,e,n){"use strict";n.r(e);var a=n("3e19"),o=n("9901");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9612");var u,c=n("f0c5"),d=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=d.exports}},[["32bd","common/runtime","common/vendor"]]]);
});
require('pages/my/bank.js');
__wxRoute = 'pages/my/addbank';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/addbank.js';

define('pages/my/addbank.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/addbank"],{2544:function(a,e,t){"use strict";t.r(e);var n=t("a589"),o=t.n(n);for(var i in n)"default"!==i&&function(a){t.d(e,a,function(){return n[a]})}(i);e["default"]=o.a},2818:function(a,e,t){"use strict";t.r(e);var n=t("815a"),o=t("2544");for(var i in o)"default"!==i&&function(a){t.d(e,a,function(){return o[a]})}(i);t("298e");var u,c=t("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=r.exports},"298e":function(a,e,t){"use strict";var n=t("44fa"),o=t.n(n);o.a},"44fa":function(a,e,t){},"815a":function(a,e,t){"use strict";var n,o=function(){var a=this,e=a.$createElement;a._self._c},i=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return i}),t.d(e,"a",function(){return n})},a589:function(a,e,t){"use strict";(function(a,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t("24a9"));function i(a){return a&&a.__esModule?a:{default:a}}function u(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var c={data:function(){return{token:"",id:"",bankName:"",subBankName:"",cardNo:"",accountName:"",array:["中国工商银行","中国农业银行","中国建设银行","中国邮政银行","兴业银行","中国农村商业银行","浦发银行","中兴银行","中国银行"],index:0}},onLoad:function(e){if(!o.default.isEmpty(e.item)){console.log(a(e.item," at pages\\my\\addbank.vue:72"));var t=JSON.parse(e.item);this.id=t.id,this.bankName=t.bankName,this.subBankName=t.subBankName,this.accountName=t.accountName,this.cardNo=t.cardNo,console.log(a(t.cardNo," at pages\\my\\addbank.vue:80"));for(var n=0;n<array.length;n++)if(array[n]==t.bankName){this.index=n;break}}},onShow:function(){this.token=n.getStorageSync("token"),this.userInfo=n.getStorageSync("userInfo")},methods:u({getAddbankAccount:function(){var e=this,t={id:this.id,bankName:e.array[e.index],subBankName:e.subBankName,cardNo:e.cardNo,accountName:e.accountName},i=(e.ApiGateWay,"银行卡添加成功");if(!o.default.isEmpty(this.id)){e.ApiGateWay;i="银行卡修改成功"}n.request({url:e.ApiGateWay+"/sale/Member/MemberAddBankAccount",data:t,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(e){console.log(a(e," at pages\\my\\addbank.vue:130")),o.default.CheckData(e)?n.showModal({title:"信息提示",content:i,showCancel:!1,success:function(a){n.navigateBack({delta:1})}}):n.showModal({title:"出错了",content:e.data.errorMessage,showCancel:!1})},fail:function(){n.hideLoading()},complete:function(){n.hideLoading()}})},bindPickerChange:function(e){console.log(a("picker发送选择改变，携带值为",e.target.value," at pages\\my\\addbank.vue:167")),this.index=e.target.value},bank:function(){n.navigateBack({delta:1})}},"bindPickerChange",function(e){console.log(a("picker发送选择改变，携带值为",e.target.value," at pages\\my\\addbank.vue:181")),this.index=e.target.value})};e.default=c}).call(this,t("0de9")["default"],t("6e42")["default"])},dcdd:function(a,e,t){"use strict";(function(a){t("b82d"),t("921b");n(t("66fd"));var e=n(t("2818"));function n(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("6e42")["createPage"])}},[["dcdd","common/runtime","common/vendor"]]]);
});
require('pages/my/addbank.js');
__wxRoute = 'pages/my/team';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/team.js';

define('pages/my/team.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/team"],{"660c":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("24a9"));function i(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{level:1,token:"",list:[],pageIndex:1,pageSize:15,teamInfo:{},total:0}},onLoad:function(){this.token=e.getStorageSync("token"),this.getTeamCount(),this.getOneTeam()},onReachBottom:function(){this.list.length!=this.total&&(this.pageIndex++,this.getOneTeam())},onPullDownRefresh:function(){this.pageIndex=1,this.list=[],this.getOneTeam()},methods:{getTeamCount:function(){var t=this;e.request({url:t.ApiGateWay+"/sale/Member/GetTeamCount",data:"",method:"GET",dataType:"json",header:{Authorization:t.token},success:function(e){console.log(n(e," at pages\\my\\team.vue:98")),o.default.CheckData(e)&&(t.teamInfo=e.data.data)},fail:function(){},complete:function(){}})},getOneTeam:function(){var t=this,a={pageIndex:t.pageIndex,pageSize:t.pageSize,level:t.level};e.request({url:t.ApiGateWay+"/sale/Member/GetTeam",data:a,method:"POST",dataType:"json",header:{Authorization:t.token},success:function(e){if(console.log(n(e," at pages\\my\\team.vue:132")),o.default.CheckData(e)){for(var a=0;a<e.data.list.length;a++){var i=e.data.list[a].rank,c=e.data.list[a].memberType,u="",s="";switch(c){case 0:u="普通用户";break;case 1:u="经销商";break;case 2:u="代理商";break;case 3:u="总代";break}switch(i){case 0:s="普通";break;case 1:s="网红";break;case 2:s="达人";break;case 3:s="明星";break;case 4:u="巨星";break}e.data.list[a].rankStr=s+"-"+u}t.list=t.list.concat(e.data.list),t.total=e.data.total}},fail:function(){},complete:function(){e.stopPullDownRefresh()}})},btnClick:function(e){console.log(n(e," at pages\\my\\team.vue:195")),this.level!=e&&(this.level=e,this.pageIndex=1,this.list=[],this.getOneTeam())},bank:function(){e.navigateBack({delta:1})}}};t.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},"96e3":function(e,t,a){"use strict";a.r(t);var n=a("d8c1"),o=a("c6d0");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("ebf8");var c,u=a("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=s.exports},a83b:function(e,t,a){"use strict";(function(e){a("b82d"),a("921b");n(a("66fd"));var t=n(a("96e3"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},c6d0:function(e,t,a){"use strict";a.r(t);var n=a("660c"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},d8c1:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n})},ebf8:function(e,t,a){"use strict";var n=a("fb7e"),o=a.n(n);o.a},fb7e:function(e,t,a){}},[["a83b","common/runtime","common/vendor"]]]);
});
require('pages/my/team.js');
__wxRoute = 'pages/my/release';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/release.js';

define('pages/my/release.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/release"],{"0f86":function(e,t,n){},"3f68":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},4576:function(e,t,n){"use strict";var a=n("0f86"),i=n.n(a);i.a},"6cf8":function(e,t,n){"use strict";(function(e){n("b82d"),n("921b");a(n("66fd"));var t=a(n("994d"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"994d":function(e,t,n){"use strict";n.r(t);var a=n("3f68"),i=n("e00d");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("4576");var u,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=c.exports},e00d:function(e,t,n){"use strict";n.r(t);var a=n("e040"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},e040:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("24a9"));function o(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{sendType:-1,token:"",list:[],pageIndex:1,pageSize:15}},onLoad:function(){this.token=e.getStorageSync("token")},onShow:function(){this.pageIndex=1,this.list=[],this.getList()},methods:{btnClick:function(e){console.log(a(e," at pages\\my\\release.vue:105")),this.sendType!=e&&(this.sendType=e,this.pageIndex=1,this.list=[],this.getList())},goCreate:function(t){e.navigateTo({url:"/pages/mytask/create?item="+JSON.stringify(t)})},getList:function(){var t=this;if(-1==t.sendType)var n="";else n=t.sendType;var a={pageIndex:t.pageIndex,pageSize:t.pageSize,state:n};e.showLoading({title:"加载中..."}),e.request({url:t.ApiGateWay+"/sale/Member/GetMyTaskPackageList",data:a,header:{Authorization:t.token},method:"POST",dataType:"json",success:function(e){i.default.CheckData(e)&&(t.list=t.list.concat(e.data.list))},complete:function(){e.hideLoading()},fail:function(t){e.stopPullDownRefresh()}})},bank:function(){e.navigateBack({delta:1})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["6cf8","common/runtime","common/vendor"]]]);
});
require('pages/my/release.js');
__wxRoute = 'pages/my/taskmanmgent';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/taskmanmgent.js';

define('pages/my/taskmanmgent.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/taskmanmgent"],{2596:function(n,t,e){},5071:function(n,t,e){"use strict";var a,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return a})},"7fca":function(n,t,e){"use strict";var a=e("2596"),u=e.n(a);u.a},"83c4":function(n,t,e){"use strict";(function(n){e("b82d"),e("921b");a(e("66fd"));var t=a(e("bfa2"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},bfa2:function(n,t,e){"use strict";e.r(t);var a=e("5071"),u=e("e90e");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("7fca");var f,o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],f);t["default"]=r.exports},ce49:function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{sendType:0}},methods:{btnClick:function(t){console.log(n(t," at pages\\my\\taskmanmgent.vue:45")),this.sendType!=t&&(this.sendType=t)},bank:function(){e.navigateBack({delta:1})}}};t.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},e90e:function(n,t,e){"use strict";e.r(t);var a=e("ce49"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=u.a}},[["83c4","common/runtime","common/vendor"]]]);
});
require('pages/my/taskmanmgent.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

