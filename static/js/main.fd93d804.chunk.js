(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),o=a(10),l=a.n(o),s=a(55),d=a(56),u=a(60),m=a(57),p=a(61),h=a(1),f=(a(110),function(e){var t=e.share,a=e.id,n=e.go,r=e.fetchedUser;return c.a.createElement(h.Panel,{id:a},c.a.createElement(h.PanelHeader,null,"World Bots"),r&&c.a.createElement(h.Group,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(h.ListItem,{before:r.photo_200?c.a.createElement(h.Avatar,{src:r.photo_200}):null,description:r.city&&r.city.title?r.city.title:""},"".concat(r.first_name," ").concat(r.last_name))),c.a.createElement(h.Group,{title:"\u041f\u0430\u043d\u0435\u043b\u044c"},c.a.createElement(h.Div,{style:{display:"flex"}},c.a.createElement(h.Button,{size:"xl",stretched:!0,style:{marginRight:8},onClick:n,"data-to":"persik"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"),c.a.createElement(h.Button,{size:"xl",stretched:!0,style:{marginRight:8},onClick:t},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))))}),b=a(58),g=a.n(b),E=(a(111),a(59)),k=a.n(E),v=a(32),y=a.n(v),P=Object(h.platform)(),_=function(e){return c.a.createElement(h.Panel,{id:e.id},c.a.createElement(h.PanelHeader,{left:c.a.createElement(h.HeaderButton,{onClick:e.go,"data-to":"home"},P===h.IOS?c.a.createElement(k.a,null):c.a.createElement(y.a,null))},"\u041f\u0435\u0440\u0441\u0438\u043a"),c.a.createElement("img",{className:"Persik",src:g.a,alt:"Persik The Cat"}))},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).check_group=function(){var e=l.a.send("VKWebAppCallAPIMethod",{method:"groups.isMember",params:{group_id:173243972,user_id:a.state.fetchedUser.id,v:"5.95",access_token:"79d23ccd6697b3fd1b4bf95bba7ac60c47a9b96610e6d7bc5949a3e87cd7da21caca864a46afd1ef7a5d9"}});return console.log(e),!e.member},a.share=function(){a.check_group&&l.a.send("VKWebAppJoinGroup",{group_id:173243972})},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data,activePanel:"home"});break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(h.View,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,share:this.share}),c.a.createElement(_,{id:"persik",go:this.go}))}}]),t}(c.a.Component);l.a.send("VKWebAppInit",{}),i.a.render(c.a.createElement(w,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.fd93d804.chunk.js.map