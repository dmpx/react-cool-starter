webpackJsonp([4],{435:function(t,e,r){"use strict";var n=r(16),u=(r.n(n),r(443)),a=r.i(n.Map)({readyState:u.a,list:null});e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments[1];switch(e.type){case u.b:return t.merge({readyState:u.b});case u.c:return t.merge({readyState:u.c,err:r.i(n.fromJS)(e.err)});case u.e:return t.merge({readyState:u.e,list:r.i(n.fromJS)(e.data)});default:return t}}},443:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return u}),r.d(e,"e",function(){return a}),r.d(e,"c",function(){return c}),r.d(e,"d",function(){return f});var n="USERS_INVALID",u="USERS_REQUESTING",a="USERS_SUCCESS",c="USERS_FAILURE",i="https://jsonplaceholder.typicode.com/users",o=function(t){return function(e){return e({type:u}),t.get(i).then(function(t){e({type:a,data:t.data})}).catch(function(t){e({type:c,err:t})})}},d=function(t){var e=t.get("home");return e.get("readyState")!==a},f=function(){return function(t,e,r){return d(e())?t(o(r)):null}}}});