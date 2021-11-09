(this["webpackJsonpreact-issue-ganttchart"]=this["webpackJsonpreact-issue-ganttchart"]||[]).push([[0],{134:function(e,t,n){},145:function(e,t,n){},224:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(13),u=n.n(a),s=n(82),i=n(16),o=(n(134),n(40)),l=n(118),c=n(15),d=n(4),p=n(279),f=n(115),g=n.n(f),h=n(286),b=n(248),m=n(285),v=n(112),_=n(287),k=n(116),y=n.n(k),j=n(12),w=n(113),x=n.n(w),O=n(9),D={multiselectContainer:{width:"35%",display:"inline-block",verticalAlign:"middle",padding:"4px",alignItems:"flex-end"},chips:{background:"light blue",fontSize:"15px"},searchBox:{border:"none"}},C=Object(d.a)((function(e){return{root:{"& > *":{fontSize:"13px",marginRight:"4px"}}}}))((function(e){var t=e.classes;return Object(O.jsxs)("form",{noValidate:!0,children:[Object(O.jsx)(p.a,{color:"primary",style:{verticalAlign:"middle"},children:Object(O.jsx)(x.a,{onClick:function(e){j.gantt.config.show_grid=!j.gantt.config.show_grid,j.gantt.render()}})}),Object(O.jsx)(h.a,{className:t.root,required:!0,placeholder:"https://github.com/lamact/react-issue-ganttchart",label:"Git Repository URL",style:{width:"20%",verticalAlign:"middle"},onChange:function(t){e.onGitURLChange(t.target.value)},inputRef:e.register,name:"git_url"}),Object(O.jsx)(h.a,{className:t.root,type:"password",placeholder:"Access Token",label:"Access Token",style:{width:"10%",verticalAlign:"middle"},onChange:function(t){e.onTokenChange(t.target.value)},inputRef:e.register,name:"token"}),Object(O.jsx)(v.Multiselect,{className:t.root,options:e.labels,selectedValues:e.selected_labels,onSelect:function(t){e.onSelectedLabelChange(t)},onRemove:function(t){e.onSelectedLabelChange(t)},displayValue:"name",style:D,placeholder:"filter by labels",hidePlaceholder:"false",emptyRecordMsg:"No Labels",closeIcon:"cancel"}),Object(O.jsx)(_.a,{className:t.root,size:"small",options:e.member_list,getOptionLabel:function(e){return e.name},value:e.selected_assignee,noOptionsText:"Requires a valid token",onChange:function(t,n){e.onSelectedAssigneeChange(n)},style:{width:"15%",verticalAlign:"middle",display:"inline-block",marginRight:"15px"},renderInput:function(e){return Object(O.jsx)(h.a,Object(c.a)(Object(c.a)({},e),{},{className:t.root,label:"Assignee",variant:"standard"}))}}),Object(O.jsxs)(m.a,{size:"small",style:{height:"34px"},children:[Object(O.jsx)(b.a,{onClick:function(t){e.onZoomChange("Weeks")},children:"Weeks"}),Object(O.jsx)(b.a,{onClick:function(t){e.onZoomChange("Days")},children:"Days"})]}),Object(O.jsx)(p.a,{color:"primary",style:{verticalAlign:"middle"},children:Object(O.jsx)(g.a,{onClick:function(t){e.onUpdateClick()}})}),Object(O.jsx)(p.a,{color:"primary",style:{verticalAlign:"middle"},children:Object(O.jsx)(y.a,{onClick:function(){return window.open("https://github.com/lamact/react-issue-ganttchart")}})})]})})),A=(n(145),C),T=(n(146),n(147),n(221),n(55)),I=n.n(T),L=function(e){return null!==e&&e!==[]&&void 0!==e&&""!==e||!!Array.isArray(e)&&e.length>0},z=function(e){return L(e)&&"id"in e&&"name"in e},S=function(e){return!!L(e)&&/https?:\/\//.test(e)},R=function(e,t){return Math.round(e/t)*t},P=function(e,t){var n=I()(e,"YYYY/MM/DD");return I()(t,"YYYY/MM/DD").diff(n,"days")+1},N=function(e,t){var n=new Date(e),r=I()(n,"YYYY/MM/DD").add(t-1,"d").toDate();return E(r)},E=function(e){if("[object Date]"!==Object.prototype.toString.call(e))return null;if(isNaN(e.getFullYear()))return null;var t=e.toLocaleDateString("ja-JP");/\d{4}\/\d{1,2}\/\d{1,2}/.test(t)||(t=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate());return t},M=function(e){return E(new Date(e))},Y=function(e,t,n){var r=null;return L(e)?r=E(e):L(n)&&(r=M(n)),r},B=function(e,t,n){var r=null;return L(t)?r=new Date(t):L(n)&&(r=new Date(n)),r},U=function(e,t){return M(null!=t?t:e)},F=function(e,t,n){return L(t)?(L(e)||(e=n),null!=e&&null!=t?P(e,t):1):null},G=function(e,t){if(!1 in t)return null;if(0===t.parent)return null;var n=e.getTask(t.parent).valueOf();n.start_date.getTime()>t.start_date.getTime()&&(n.start_date=t.start_date,e.updateTask(n.id,n),e.render()),n.end_date.getTime()<t.end_date.getTime()&&(n.end_date=t.end_date,e.updateTask(n.id,n),e.render())},Z=function(e,t,n){var r=e.getTask(n).valueOf(),a=r.duration.valueOf();r.start_date.getTime()<t.start_date.getTime()&&(r.start_date=t.start_date,r.end_date=new Date(N(t.start_date,a)),e.updateTask(r.id,r),e.render()),r.end_date.getTime()>t.end_date.getTime()&&(r.start_date=new Date(function(e,t){var n=new Date(e),r=I()(n,"YYYY/MM/DD").add(-t,"d").toDate();return E(r)}(t.end_date,a)),r.end_date=t.end_date,e.updateTask(r.id,r),e.render())},$={levels:[{name:"Days",scale_height:30,min_column_width:25,scales:[{unit:"month",step:1,format:"%n"},{unit:"day",step:1,format:"%d"}]},{name:"Weeks",scale_height:30,min_column_width:70,scales:[{unit:"week",step:1,format:"%n/%d~"}]}]},V=function(e){return"[object Date]"!==Object.prototype.toString.call(e)?null:("00"+(e.getMonth()+1)).slice(-2)+"/"+("00"+e.getDate()).slice(-2)},J=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n;(n=j.gantt).config.xml_date="%Y/%m/%d %H:%i",n.config.order_branch=!0,n.config.order_branch_free=!0,n.config.keep_grid_width=!0,n.config.grid_resize=!0,n.config.open_tree_initially=!0,n.config.fit_tasks=!0,n.config.show_grid=!1,n.config.sort=!0,n.config.columns=[{name:"text",label:"Title",tree:!0,width:"400",resize:!0},{name:"start_date",label:"Start ",align:"center",width:"60",resize:!0,template:function(e){return V(e.start_date)}},{name:"due_date",label:"Due ",align:"center",width:"60",resize:!0,template:function(e){return V(e.due_date)}},{name:"assignee",label:"Assignee",align:"center",width:"130"},{name:"add",label:"",width:"30"}],n.plugins({drag_timeline:!0}),n.showDate(new Date),n.ext.zoom.init($),function(e){e.templates.timeline_cell_class=function(e,t){if("[object Date]"!==Object.prototype.toString.call(t))return null;var n=new Date;if(t.getDate()===n.getDate()&&t.getMonth()===n.getMonth())return"today";if(0===t.getDay()||6===t.getDay())return"weekend";var r=new Date;return r.setDate(r.getDate()-1),t<r?"past_days":void 0},e.templates.task_text=function(e,t,n){return n.text},e.templates.task_class=function(e,t,n){if(1==n.progress)return"";if(n.progress<.01){if(e<=new Date)return"behind"}else if(new Date(N(e,(P(e,t)+1)*n.progress))<new Date)return"behind"}}(j.gantt),function(e,t){e.attachEvent("onTaskDblClick",(function(e,n){t.openIssueAtBrowser(e)})),e.attachEvent("onTaskCreated",(function(e,n){t.openNewIssueAtBrowser(e)})),e.attachEvent("onAfterTaskUpdate",(function(n,r){G(e,r),e.getChildren(r.id).map((function(t){Z(e,r,t)})),t.updateIssueByAPI(r,e)})),e.attachEvent("onBeforeTaskUpdate",(function(e,t,n){})),e.attachEvent("onAfterTaskMove",(function(n,r){var a=e.getTask(n);"parent"in a&&0!==a.parent&&(a.parent=r,t.updateIssueByAPI(a,e))})),e.attachEvent("onAfterLinkAdd",(function(t,n){var r=[],a=[],u=n.target;e.getTask(u).$target.forEach((function(t){var n=e.getLink(t),u=n.target,s=n.source;a.push({type:"0",target:u,source:s});var i=s.slice(1);""!=i&&r.push(i)})),e.getTask(u).dependon=r,e.getTask(u).links=a,e.updateTask(u)})),e.attachEvent("onAfterLinkDelete",(function(t,n){var r=[],a=[],u=n.target;e.getTask(u).$target.forEach((function(t){var n=e.getLink(t),u=n.target,s=n.source;a.push({type:"0",target:u,source:s});var i=s.slice(1);""!=i&&r.push(i)})),e.getTask(u).dependon=r,e.getTask(u).links=a,e.updateTask(u)})),e.attachEvent("onTaskDrag",(function(t,n,r,a){var u,s=e.getState(),i=s.min_date,o=s.max_date,l=e.date.add(new Date,s.scale_step,s.scale_unit)-new Date,c=!1;"resize"!=n&&"move"!=n||(Math.abs(r.start_date-i)<l?(u=r.start_date,c=!0):Math.abs(r.end_date-o)<l&&(u=r.end_date,c=!0),c&&(e.render(),e.showDate(u)))}))}(j.gantt,e),j.gantt.init(t.current),j.gantt.ext.zoom.setLevel(e.zoom)}),[]),Object(r.useEffect)((function(){"Days"===e.zoom?j.gantt.eachTask((function(e){e.$open=!0})):j.gantt.eachTask((function(e){e.$open=!1})),j.gantt.ext.zoom.setLevel(e.zoom)}),[e.zoom]),Object(r.useEffect)((function(){try{L(e.issue)&&0!=e.issue.length&&(j.gantt.clearAll(),e.issue.map((function(e){j.gantt.addTask(e),"links"in e&&e.links.map((function(e){return console.log(e),j.gantt.addLink(e),null}))})),j.gantt.sort("due_date",!1))}catch(t){j.gantt.message({text:t,type:"error"})}}),[e.issue]),Object(O.jsx)("div",{ref:t,style:{width:"100%",height:"100%"}})},W=(n(224),J),H=n(54),q=n(83),Q=function(e){return e.length>1&&/^#/.test(e)&&(e=e.substring(1)),e},K=function(e){return e.length>1&&/ +$/.test(e)&&(e=e.slice(0,-1)),e},X=function(e){if(null===e)return null;var t=function(e){if(null===e)return null;if("string"!==typeof e)return null;var t=e.split(/^```yaml/);return null===t||t.length<2||null===(t=t[1].split(/```/))||t.length<2?null:t[0]}(e);if(null===t)return null;var n=null;try{n=q.a.load(t)}catch(r){j.gantt.message({text:"failed load yaml"+t,type:"error"})}return n},ee=function(e,t){if(null===e)return null;var n=X(e);if(null===n||!(t in n))return null;var r=n[t];return"number"!==typeof r?null:r},te=function(e,t){if(null===e)return null;var n=function(e,t){if(null===e)return null;var n=X(e);if(null===n||!(t in n))return null;var r=n[t];return"string"!==typeof r?null:K(K(r))}(e,t);return/\d{4}\/\d{1,2}\/\d{1,2}/.test(n)?new Date(n):null},ne=function(e,t){if(null===e||null===t)return null;var n=q.a.dump(t);n="```yaml\n"+n+"```";var r=e.split(/^```yaml/);if(null===r||r.length<2)return/```/.test(e)?null:n+"\n"+e;var a=r[0];if(null===(r=r[1].split(/```/))||r.length<2)return null;var u=r[1];return null==a||null==u?null:a+n+u},re=function(e){var t="";return L(e)?(e.map((function(e){return z(e)&&L(e.id)&&(t+=e.id+":"+e.name+","),null})),t):null},ae=function(e){var t=[];if(L(e)){var n=e.split(",");n.forEach((function(e,r,a){if(r<n.length-1){var u=e.split(":");if(!isNaN(parseInt(u[0]))){var s={id:parseInt(u[0]),name:u[1]};t.push(s)}}}))}else t=[{id:0,name:""}];return t},ue=function(e,t){if(null===e)return null;var n=X(e);return null!==n&&t in n?n[t]:null},se=n(7),ie=n.n(se),oe=n(14),le="https://api.github.com/repos/",ce="https://github.com/",de=function(e){return!!S(e)&&(!(e.split("/").length<5)&&/github\.com/.test(e))},pe=function(e){if(!de(e))return null;var t=e.split("/");return t.length>=5?t[3]:null},fe=function(e){if(!de(e))return null;var t=e.split("/");return t.length>=5?t[4]:null},ge=function(e,t){return de(e)&&L(t)?le+pe(e)+"/"+fe(e)+"/issues/"+t:null},he=function(e,t,n){if(!de(e)||!L(t)||!L(n))return null;var r="?";return r+="labels=",t.map((function(e){z(e)&&(r+=e.name+",")})),z(n)&&""!==n.name&&(r+="&assignee="+n.name),le+pe(e)+"/"+fe(e)+"/issues"+r},be=function(e){return de(e)?le+pe(e)+"/"+fe(e)+"/labels":null},me=function(e){return de(e)?le+pe(e)+"/"+fe(e)+"/collaborators":null},ve=function(e,t){return de(e)&&L(t)?("number"===typeof(n=t)&&Number.isFinite(n)||(t=Q(t)),t<=0?null:ce+pe(e)+"/"+fe(e)+"/issues/"+t):null;var n},_e=function(e){return!!S(e)&&(!(e.split("/").length<5)&&/gitlab\.com/.test(e))},ke=function(e){if(de(e))return null;if(!S(e))return null;var t=e.split("/");return t.length>=5?t[2]:null},ye=function(e){if(!S(e))return null;var t=null,n=ke(e);return null!==n&&(t=e.substr(0,e.indexOf(":"))+"://"+n+"/"),t},je=function(e){return S(e)?ye(e):null},we=function(e){return S(e)?ye(e)+"api/v4/":null},xe=function(e){if(!S(e))return null;var t=e.split("/");return t.length>=5?t[3]:null},Oe=function(e){if(!S(e))return null;var t=e.split("/");return t.length>=5?t[4]:null},De=function(e){var t="?";return L(e)&&"Tokens that have not yet been entered"!==e&&(t+="access_token="+e),t},Ce=function(e,t,n,r){if(!S(e))return null;if(!L(t))return null;if(!L(n))return null;if(!z(r))return null;var a=De(t);return L(n)&&(a+="&labels=",n.map((function(e){return z(e)&&(a+=e.name+","),null}))),z(r)&&""!==r.name&&(a+="&assignee_id="+r.id),a+="&per_page=100&state=opened",we(e)+"projects/"+xe(e)+"%2F"+Oe(e)+"/issues"+a},Ae=function(e,t,n){if(!S(e))return null;if(!L(t))return null;if(!L(n))return null;var r=De(t);return we(e)+"projects/"+xe(e)+"%2F"+Oe(e)+"/issues/"+n+r},Te=function(e,t){if(!S(e))return null;var n=De(t);return n+="&per_page=100",we(e)+"projects/"+xe(e)+"%2F"+Oe(e)+"/labels"+n},Ie=function(e,t){if(!S(e))return null;var n=De(t);return we(e)+"groups/"+xe(e)+"/members/all"+n+"&per_page=200"},Le=n(26),ze=n.n(Le),Se=function(e){return null!==e.assignee?e.assignee.login:""},Re=function(e,t){var n=te(e,"start_date"),r=te(e,"due_date");return{id:"#"+t.number,text:t.title,start_date:Y(n,0,t.created_at),due_date:B(0,r,t.created_at),duration:F(n,r,t.created_at),progress:ee(e,"progress"),assignee:Se(t),parent:"#"+ee(e,"parent"),description:e,update:U(t.created_at,t.updated_at)}},Pe=function(e){var t,n=[];if(null!=(t=ue(e.body,"dependon"))){for(var r=0;r<t.length;r++){var a=[];a.type="0",a.target="#"+e.number,a.source="#"+t[r],n.push(a)}return n}},Ne=function(e,t){var n=M(t.start_date).replace(/\-/g,"/"),r={start_date:n,due_date:N(n,t.duration).replace(/\-/g,"/"),progress:R(t.progress,.01)};return"parent"in t&&(r.parent=parseInt(Q(t.parent))),"dependon"in t&&(r.dependon=t.dependon),e=ne(e,r)},Ee=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n,r){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ze.a.get(ge(t,n.number),{headers:{Authorization:"token ".concat(r)},data:{}}).then((function(e){var t=[],r=Re(e.data.body,n),a=Pe(n);if("undefined"!=typeof a)for(var u=0;u<a.length;u++){var s={type:a[u].type,target:a[u].target,source:a[u].source};t.push(s)}return r.links=t,console.log(r),r})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Me=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n,r,a){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ze.a.get(he(t,r,a),{headers:{Authorization:"token ".concat(n)},data:{}}).then((function(e){var r=[];return e.data.map((function(e){r.push(Ee(t,e,n))})),Promise.all(r)})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ze.a.get(be(t),{headers:{Authorization:"token ".concat(n)},data:{}}).then((function(e){var t=[];return e.data.map((function(e){return t.push({id:e.id,name:e.name}),null})),t})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Be=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L(n)||"Tokens that have not yet been entered"===n){e.next=4;break}return e.abrupt("return",ze.a.get(me(t),{headers:{Authorization:"token ".concat(n)},data:{}}).then((function(e){var t=[];return e.data.map((function(e){return t.push({id:e.id,name:e.login}),null})),t})));case 4:console.warn("token is not valid!");case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ue=function(e,t,n,r){var a=ge(r,Q(e.id));return ze.a.get(a,{headers:{Authorization:"token ".concat(t)},data:{}}).then((function(r){var u,s,i,o=r.data;null==Ne(o.body,e)?n.message({text:"failed update issue. "+e.text,type:"error"}):1!=(u=function(e){var t=[];return e.links.map((function(e){var n=[];n.type=e.type,n.target=e.target,n.source=e.source,t.push(n)})),{id:e.id,text:e.text,start_date:M(e.start_date),due_date:e.due_date,duration:e.duration,progress:e.progress,assignee:e.assignee,description:e.description,update:e.update,links:t,parent:"#"+e.parent}}(e),s=Re(o.body,o),i=Pe(o),u.id==s.id&&u.text==s.text&&u.start_date==s.start_date&&u.due_date==s.due_date.toString()&&u.duration==s.duration&&u.progress==s.progress&&u.assignee==s.assignee&&u.update==s.update&&u.parent==s.parent&&u.links.toString()==i.toString())&&ze.a.post(a,{body:Ne(o.body,e)},{headers:{Authorization:"token ".concat(t)}}).then((function(t){n.message({text:"success update issue.  "+e.id})})).catch((function(e){n.message({text:"failed update GitHub issue. check your token."+e,type:"error"})}))})).catch((function(e){n.message({text:"failed get GitHub issue. check your url."+e,type:"error"}),Me(n,r,t)})),null},Fe=function(e,t){var n=E(new Date),r=E(new Date);null==e.parent&&(e.parent=0);var a={start_date:n,due_date:r,progress:.1,parent:parseInt(Q(e.parent))},u=ne("",a);u=encodeURIComponent(u),window.open(function(e){return de(e)?ce+pe(e)+"/"+fe(e)+"/issues/new?assignees=&labels=&title=&body=":null}(t)+u,"_blank")},Ge=function(e){return L(e)&&"assignee"in e&&L(e.assignee)&&"name"in e.assignee?e.assignee.name:""},Ze=function(e){var t=te(e.description,"start_date"),n=M(e.due_date),r={id:"#"+e.iid,text:e.title,start_date:Y(t,0,e.created_at),due_date:B(0,n,e.created_at),duration:F(t,n,e.created_at),progress:ee(e.description,"progress"),assignee:Ge(e),description:e.description,update:U(e.created_at,e.updated_at)};console.log(r);var a=ee(e.description,"parent");null!==a&&0!==a&&(r.parent="#"+a);var u=[],s=$e(e);if("undefined"!=typeof s)for(var i=0;i<s.length;i++){var o={type:s[i].type,target:s[i].target,source:s[i].source};u.push(o)}return r.links=u,r},$e=function(e){var t,n=[];if(null!=(t=ue(e.description,"dependon"))){for(var r=0;r<t.length;r++){var a=[];a.type="0",a.target="#"+e.iid,a.source="#"+t[r],n.push(a)}return n}},Ve=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n,r,a){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ze.a.get(Ce(t,n,r,a)).then((function(e){var t=[];return e.data.map((function(e){var n=Ze(e);t.push(n)})),t})).catch((function(e){return console.error(e),Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Je=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ze.a.get(Te(t,n)).then((function(e){var t=[];return e.data.map((function(e){return t.push(e),null})),t})).catch((function(e){return console.error(e),Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),We=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ze.a.get(Ie(t,n)).then((function(e){var t=[];return e.data.map((function(e){return t.push({id:e.id,name:e.name}),null})),t})).catch((function(e){return console.error(e),Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),He=function(e,t,n,r){return ze.a.get(Ae(r,t,Q(e.id))).then((function(a){var u,s,i=a.data;if(1!=(u=function(e){var t=[];e.links.map((function(e){t.push({type:e.type,target:e.target,source:e.source})}));var n={id:e.id,text:e.text,start_date:M(e.start_date),due_date:e.due_date,duration:e.duration,progress:e.progress,assignee:e.assignee,description:e.description,update:e.update,links:t};return 0!==e.parent&&(n.parent=e.parent),n}(e),s=Ze(i),u.id==s.id&&u.text==s.text&&u.start_date==s.start_date&&u.due_date==s.due_date.toString()&&u.duration==s.duration&&u.progress==s.progress&&u.assignee==s.assignee&&u.update==s.update&&u.parent==s.parent&&JSON.stringify(u.links)==JSON.stringify(s.links))&&parseInt(i.iid)===parseInt(Q(e.id))){var o=function(e,t){var n={start_date:M(t.start_date).replace(/\-/g,"/"),progress:R(t.progress,.01)};return"parent"in t&&(n.parent=parseInt(Q(t.parent))),"dependon"in t&&(n.dependon=t.dependon),ne(e,n)}(i.description,e);if(null!=o){o=encodeURIComponent(o);var l=M(e.start_date),c=N(l,e.duration),d=Ae(r,t,Q(e.id))+"&description="+o+"&due_date="+c;return ze.a.put(d).then((function(t){n.message({text:"success update issue.  "+e.id})})).catch((function(e){return console.error(e),Promise.reject(e)}))}n.message({text:"failed update issue. "+e.text,type:"error"})}})).catch((function(e){n.message({text:"failed get GitLab issue. check your token.",type:"error"})}))},qe=function(e,t){window.open(function(e,t){return S(e)?je(e)+xe(e)+"/"+Oe(e)+"/-/issues/"+t:null}(t,Q(e)),"_blank")},Qe=function(e,t){var n=E(new Date);null==e.parent&&(e.parent=0);var r={start_date:n,progress:.1,parent:parseInt(Q(e.parent))},a=ne("",r);a=encodeURIComponent(a),window.open(function(e){return S(e)?je(e)+xe(e)+"/"+Oe(e)+"/issues/new?issue[description]=":null}(t)+a,"_blank")},Ke=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n,r,a){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(t)){e.next=4;break}return e.abrupt("return",Promise.resolve());case 4:if(!de(t)){e.next=8;break}return e.abrupt("return",Me(t,n,r,a));case 8:if(!_e(t)&&null===ke(t)){e.next=10;break}return e.abrupt("return",Ve(t,n,r,a));case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(t)){e.next=4;break}return e.abrupt("return",Promise.resolve());case 4:if(!de(t)){e.next=8;break}return e.abrupt("return",Ye(t,n));case 8:if(!_e(t)&&null===ke(t)){e.next=10;break}return e.abrupt("return",Je(t,n));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),et=function(){var e=Object(oe.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(t)){e.next=4;break}return e.abrupt("return",Promise.resolve());case 4:if(!de(t)){e.next=8;break}return e.abrupt("return",Be(t,n));case 8:if(!_e(t)&&null===ke(t)){e.next=10;break}return e.abrupt("return",We(t,n));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),tt=function(e,t){if(!S(t))return Promise.resolve();de(t)?function(e,t){window.open(ve(t,Q(e)),"_blank")}(e,t):(_e(t)||null!==ke(t))&&qe(e,t)},nt={currentZoom:"Days",update:0,git_url:"",token:"Tokens that have not yet been entered",labels:[],selected_labels:[],member_list:[],selected_assignee:{},issue:[],issue_columns:[]},rt=function(e,t){switch(t.type){case"zoomChange":return Object(c.a)(Object(c.a)({},e),{},{currentZoom:t.value});case"gitURLChange":return Object(c.a)(Object(c.a)({},e),{},{git_url:it(t.value.props,t.value.git_url,e.selected_labels)});case"tokenChange":return Object(c.a)(Object(c.a)({},e),{},{token:ot(t.value)});case"labelChange":return Object(c.a)(Object(c.a)({},e),{},{labels:t.value});case"selectedLabelsChange":return Object(c.a)(Object(c.a)({},e),{},{selected_labels:lt(t.value.props,e.git_url,t.value.selected_labels,e.selected_assignee)});case"memberListChange":return Object(c.a)(Object(c.a)({},e),{},{member_list:ct(t.value)});case"selectedAssigneeChange":return Object(c.a)(Object(c.a)({},e),{},{selected_assignee:dt(t.value.props,e.git_url,e.selected_labels,t.value.selected_assignee)});case"updateClick":return Object(c.a)(Object(c.a)({},e),{},{update:e.update+1});case"openIssueAtBrowser":return at(e,t);case"openNewIssueAtBrowser":return ut(e,t);case"updateIssueByAPI":return st(e,t);case"setIssue":return Object(c.a)(Object(c.a)({},e),{},{issue:t.value});case"setStateFromURLQueryString":return ft(e,t.value.props,t.value.setValue);default:return e}},at=function(e,t){return tt(t.value,e.git_url),e},ut=function(e,t){return function(e,t){if(!S(t))return null;de(t)?Fe(e,t):(_e(t)||null!==ke(t))&&Qe(e,t)}(t.value,e.git_url),e},st=function(e,t){var n,r,a,u;return n=t.value.gantt_task,r=e.token,a=t.value.gantt,u=e.git_url,S(u)?de(u)?Ue(n,r,a,u):(_e(u)||null!==ke(u))&&He(n,r,a,u):Promise.resolve(),e},it=function(e,t,n,r){var a;if((a=K(t)).length>1&&/\/$/.test(a)&&(a=a.slice(0,-1)),de(t=a))j.gantt.message({text:"Access GitHub.com"});else if(_e(t))j.gantt.message({text:"Access GitLab.com"});else if(null!==ke(t))j.gantt.message({text:"Access Maybe GitLab.self-host"});else if(""!==t)return j.gantt.message({text:"Not a valid URL.",type:"error"}),null;return pt(e,t,n,r),t},ot=function(e){return Object(H.bake_cookie)("git_token",e),e},lt=function(e,t,n,r){return pt(e,t,n,r),n},ct=function(e){return L(e)?e:[]},dt=function(e,t,n,r){return pt(e,t,n,r),r},pt=function(e,t,n,r){var a=new URLSearchParams(e.location.search);return a.set("giturl",t),a.set("labels",re(n)),a.set("assignee",re([r])),e.history.push({search:a.toString()}),null},ft=function(e,t,n){var r=new URLSearchParams(t.location.search);e.git_url=r.get("giturl");var a=ae(r.get("labels"));L(a[0])&&"name"in a[0]&&""!==a[0].name&&(e.selected_labels=a);var u=ae(r.get("assignee"));return L(u)&&(e.selected_assignee=u[0]),n("git_url",e.git_url),e},gt=Object(i.e)((function(e){var t=Object(r.useReducer)(rt,nt),n=Object(o.a)(t,2),a=n[0],u=n[1],s=Object(l.a)({git_url:"",token:""}),i=s.register,c=s.setValue;return Object(r.useEffect)((function(){c("token",Object(H.read_cookie)("git_token")),u({type:"tokenChange",value:Object(H.read_cookie)("git_token")})}),[]),Object(r.useEffect)((function(){u({type:"setStateFromURLQueryString",value:{props:e,setValue:c}})}),[e.location]),Object(r.useEffect)((function(){Xe(a.git_url,a.token).then((function(e){u({type:"labelChange",value:e})})).catch((function(e){j.gantt.message({text:e,type:"error"})})),et(a.git_url,a.token).then((function(e){u({type:"memberListChange",value:e})})).catch((function(e){j.gantt.message({text:e,type:"error"})}))}),[a.git_url,a.token,a.selected_assignee]),Object(r.useEffect)((function(){Ke(a.git_url,a.token,a.selected_labels,a.selected_assignee).then((function(e){u({type:"setIssue",value:e})})).catch((function(e){console.log("error")}))}),[a.git_url,a.token,a.selected_labels,a.selected_assignee,a.update]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"zoom-bar",children:Object(O.jsx)(A,{zoom:a.currentZoom,onZoomChange:function(e){return u({type:"zoomChange",value:e})},onGitURLChange:function(t){return u({type:"gitURLChange",value:{props:e,git_url:t}})},token:a.token,onTokenChange:function(e){return u({type:"tokenChange",value:e})},onUpdateClick:function(){return u({type:"updateClick"})},labels:a.labels,selected_labels:a.selected_labels,onSelectedLabelChange:function(t){return u({type:"selectedLabelsChange",value:{props:e,selected_labels:t}})},member_list:a.member_list,selected_assignee:a.selected_assignee,onSelectedAssigneeChange:function(t){return u({type:"selectedAssigneeChange",value:{props:e,selected_assignee:t}})},register:i})}),Object(O.jsx)("div",{className:"gantt-container",children:Object(O.jsx)(W,{zoom:a.currentZoom,git_url:a.git_url,token:a.token,selected_labels:a.selected_labels,selected_assignee:a.selected_assignee,issue:a.issue,update:a.update,openIssueAtBrowser:function(e){return u({type:"openIssueAtBrowser",value:e})},openNewIssueAtBrowser:function(e){return u({type:"openNewIssueAtBrowser",value:e})},updateIssueByAPI:function(e,t){return u({type:"updateIssueByAPI",value:{gantt_task:e,gantt:t}})}})})]})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(O.jsx)(s.a,{children:Object(O.jsx)(i.a,{render:function(e){return Object(O.jsx)(gt,{})}})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[247,1,2]]]);
//# sourceMappingURL=main.2879f9ab.chunk.js.map