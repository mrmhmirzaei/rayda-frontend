(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{cHja:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("sE5F"),r=n("CcnG"),a=function(){function t(t){this._http=t}return t.prototype.get=function(t){var e=new o.d;return e.append("Authorization","Bearer "+localStorage.token),this._http.get(t,{headers:e})},t.prototype.post=function(t,e){var n=new o.d;return n.append("Authorization","Bearer "+localStorage.token),this._http.post(t,e,{headers:n})},t.prototype.delete=function(t){var e=new o.d;return e.append("Authorization","Bearer "+localStorage.token),this._http.delete(t,{headers:e})},t.prototype.option=function(t){var e=new o.d;return e.append("Authorization","Bearer "+localStorage.token),this._http.options(t,{headers:e})},t.prototype.put=function(t,e){var n=new o.d;return n.append("ClientRayda","pwa 1/0"),n.append("Authorization","Bearer "+localStorage.token),this._http.put(t,e,{headers:n})},t.ngInjectableDef=r.W({factory:function(){return new t(r.ab(o.e))},token:t,providedIn:"root"}),t}()}}]);