webpackJsonp([4],{10:function(t,e,a){"use strict";var i=function(){return a.e(3).then(a.bind(null,11))},n=function(){return a.e(2).then(a.bind(null,14))},s=function(){return a.e(1).then(a.bind(null,17))};e.a={data:function(){return{items:[{tabName:"item1",isActive:!1},{tabName:"item2",isActive:!1},{tabName:"item3",isActive:!1}],activeTab:0,currentTab:i}},mounted:function(){this.loadTabContent("item1",0)},methods:{setActiveTab:function(t){var e=t,a=this.items,i=this.activeTab;a[e].isActive=!0,i!==e&&(a[i].isActive=!1,this.activeTab=e)},loadTabContent:function(t,e){switch(this.setActiveTab(e),t){case"item1":this.currentTab=i;break;case"item2":this.currentTab=n;break;case"item3":this.currentTab=s;break;default:this.currentTab=i}}}}},20:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"tabs1-01",attrs:{role:"tablist"}},[t._l(t.items,function(e,i){return[a("div",{staticClass:"tabs",class:{active:e.isActive},attrs:{role:"tab","aria-selected":e.isActive,"aria-setsize":t.items.length,"aria-posinset":i+1,tabindex:"0"},on:{click:function(a){t.loadTabContent(e.tabName,i)}}},[t._v("\n        "+t._s(e.tabName)+"\n      ")])]})],2),t._v(" "),a("div",{staticClass:"row col-sm-12 tabs1-01_panels"},[a("keep-alive",[a(t.currentTab,{tag:"component"})],1)],1)])},n=[],s={render:i,staticRenderFns:n};e.a=s},8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(10),n=a(20),s=a(0),c=s(i.a,n.a,null,null,null);e.default=c.exports}});