(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports={BasicForm:"BasicForm_BasicForm__1sZM8",Form:"BasicForm_Form__1fU7m",Hidden:"BasicForm_Hidden__3uyy0",ErrorMessage:"BasicForm_ErrorMessage__2tPTh",Field:"BasicForm_Field__3VVPM",Submitted:"BasicForm_Submitted__1_WbC",active:"BasicForm_active__TLZaz",TextArea:"BasicForm_TextArea__2p6Sk"}},21:function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__3fsDI",Logo:"SideDrawer_Logo__3IBbb",Open:"SideDrawer_Open__1oGKy",Close:"SideDrawer_Close__2O9KP"}},28:function(e,a,t){e.exports={Toolbar:"Toolbar_Toolbar__3QMXu",MenuButton:"Toolbar_MenuButton__3Hq-I",Logo:"Toolbar_Logo__3ZL8H",DesktopOnly:"Toolbar_DesktopOnly__-xfxF"}},4:function(e,a,t){e.exports={MainContainer:"Main_MainContainer__3O5o1",IntroCard:"Main_IntroCard__2gSqK",Icons:"Main_Icons__1f-CX",ToolCard:"Main_ToolCard__1VY70",Icon:"Main_Icon__11FQw",ProjectCard:"Main_ProjectCard__WNhej"}},42:function(e,a,t){e.exports=t.p+"static/media/BlackJackTwo.751e3089.PNG"},43:function(e,a,t){e.exports=t.p+"static/media/CatchOfTheDayTwo.a8239f24.PNG"},44:function(e,a,t){e.exports=t.p+"static/media/YelpCampTwo.d1614a61.PNG"},48:function(e,a,t){e.exports={Content:"Layout_Content__2Hf9h"}},49:function(e,a,t){e.exports={NavigationItems:"NavigationItems_NavigationItems__1mvXj"}},51:function(e,a,t){e.exports={NavigationItem:"NavItemHash_NavigationItem__2kc5v",active:"NavItemHash_active__3gRGd"}},52:function(e,a,t){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__fwulY"}},53:function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__33ZXn"}},54:function(e,a,t){},55:function(e,a,t){e.exports=t(89)},60:function(e,a,t){},61:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(41),l=t.n(c),o=(t(60),t(12)),s=t(13),i=t(15),m=t(14),u=t(16),d=(t(61),t(4)),p=t.n(d),h=t(3),E=t(9),_=t.n(E),g=t(42),f=t.n(g),v=t(43),k=t.n(v),b=t(44),C=t.n(b),I=["Blackjack Trainer","Catch Of The Day","Yelp Camp"],w=["React","React","HTML5, CSS3, JavaScript and MongoDB"],N=["A blackjack game that also tells you the suggested actions for each hand vs. the dealer upcard","A react program showing a restaurant's menu and a customers orders","Yelp-like site supporting usernames and more through MongoDB"],S=[["https://react-blackjack-dcp.firebaseapp.com/","https://github.com/Derek42588/react-blackjack"],["https://5c30e9857c8492796d93e7f5--loving-goldwasser-7c4ad0.netlify.com/","https://github.com/Derek42588/CatchOfTheDay"],["https://infinite-brushlands-98227.herokuapp.com/","https://github.com/Derek42588/YelpCamp"]],D=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={totalSlides:2,currentIndex:0,tiltes:["Blackjack Trainer","Catch Of The Day","Yelp Camp"],subtitles:["React","React","HTML5, CSS3, JavaScript and MongoDB"],info:["A blackjack game that also tells you the suggested actions for each hand vs. the dealer upcard","A react program showing a restaurant's menu and a customers orders","Yelp-like site supporting usernames, edits, comments, connected through MongoDB"],links:[["https://react-blackjack-dcp.firebaseapp.com/","https://github.com/Derek42588/react-blackjack"],["https://5c30e9857c8492796d93e7f5--loving-goldwasser-7c4ad0.netlify.com/","https://github.com/Derek42588/CatchOfTheDay"],["https://infinite-brushlands-98227.herokuapp.com/","https://github.com/Derek42588/YelpCamp"]]},t.nextSlide=function(){var e=t.state.currentIndex;(e+=1)>t.state.totalSlides&&(e=0),t.setState({currentIndex:e})},t.prevSlide=function(){var e=t.state.currentIndex;(e-=1)<0&&(e=t.state.totalSlides),t.setState({currentIndex:e})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=null;return 0===this.state.currentIndex&&(e=r.a.createElement("img",{src:f.a,alt:"Blackjack Demo App"})),1===this.state.currentIndex&&(e=r.a.createElement("img",{src:k.a,alt:"Catch Of The Day App"})),2===this.state.currentIndex&&(e=r.a.createElement("img",{src:C.a,alt:"Yelp Camp Demo App"})),r.a.createElement("div",{className:_.a.ImageSlide},r.a.createElement("h3",null,I[this.state.currentIndex]),r.a.createElement("div",{className:_.a.ImageCard},r.a.createElement(h.c,{className:_.a.Icon,onClick:this.prevSlide}),r.a.createElement("div",{className:_.a.ImageContainer},e),r.a.createElement(h.d,{className:_.a.Icon,onClick:this.nextSlide})),r.a.createElement("div",{className:_.a.SlideInfo},r.a.createElement("p",null,"Created with ",r.a.createElement("span",{className:_.a.Tools},w[this.state.currentIndex])),r.a.createElement("p",null,N[this.state.currentIndex])),r.a.createElement("div",{className:_.a.Clickers},r.a.createElement("a",{href:S[this.state.currentIndex][0],className:_.a.Button},"Demo"),r.a.createElement("a",{href:S[this.state.currentIndex][1],className:_.a.Button},"Github")))}}]),a}(n.Component),j=t(17),x=t(47),T=t.n(x),y=t(11),O=t.n(y),B=function(e){return r.a.createElement("div",{id:"contact",className:O.a.BasicForm},r.a.createElement(j.d,{initialValues:{email:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.message||(a.message="Required"),a},onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;a.setStatus,setTimeout(function(){t(!1);var a={name:e.name,email:e.email,message:e.message};T.a.post("/api/form",{email:a}),console.log("hello"),n({email:"",name:"",message:""})},1600)}},function(e){var a=e.isSubmitting,t=e.setStatus;return r.a.createElement(j.c,{className:O.a.Form},r.a.createElement(j.b,{type:"text",name:"name",placeholder:"Your Name",className:O.a.Field,autoComplete:"off"}),r.a.createElement(j.b,{type:"email",name:"email",placeholder:"Email address",className:O.a.Field,autoComplete:"off"}),r.a.createElement(j.a,{name:"email",component:"div",className:O.a.ErrorMessage}),r.a.createElement(j.b,{type:"textarea",name:"message",component:"textarea",className:O.a.TextArea}),r.a.createElement(j.a,{name:"message",component:"div",className:O.a.ErrorMessage}),r.a.createElement("div",null,a?r.a.createElement("button",{className:O.a.Submitted,type:"submit",disabled:a,onClick:function(){return t({success:"Message sent! Send another?"})}},"Success! ",r.a.createElement(h.b,null)):r.a.createElement("button",{type:"submit",disabled:a,onClick:function(){return t({success:"Message sent! Send another?"})}},r.a.createElement(h.g,null))))}))},M=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.MainContainer},r.a.createElement("div",{id:"home",className:p.a.IntroCard},r.a.createElement("h1",null,"Derek Pyle"),r.a.createElement("h3",null,"Front End Dev"),r.a.createElement("p",null,"I'm a web developer based in Boston focusing on front-end, aiming to eventually be a full-stack developer.  Right now, I'm working on web apps made primarily with React.  Current goal is an ",r.a.createElement("span",{style:{color:"#9ACD32"}},"entry-level")," position!")),r.a.createElement("div",{className:p.a.ToolCard},r.a.createElement("h1",null,"WHAT I WORK WITH"),r.a.createElement("p",null,"I have experience with the following:"),r.a.createElement("div",{className:p.a.Icons},r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.k,null)," ",r.a.createElement("p",null,"React")),r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.i,null)," ",r.a.createElement("p",null,"HTML5")),r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.e,null)," ",r.a.createElement("p",null,"CSS3")),r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.j,null)," ",r.a.createElement("p",null,"JavaScript")),r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.a,null)," ",r.a.createElement("p",null,"Bootstrap")),r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.h,null)," ",r.a.createElement("p",null,"Git")),r.a.createElement("div",{className:p.a.Icon}," ",r.a.createElement(h.f,null)," ",r.a.createElement("p",null,"Firebase")))),r.a.createElement("div",{id:"projects",className:p.a.ProjectCard},r.a.createElement("h1",null,"PROJECTS I'VE WORKED ON"),r.a.createElement(D,null)),r.a.createElement(B,null))}}]),a}(n.Component),F=t(18),P=function(e){return e.children},A=t(48),H=t.n(A),R=t(28),L=t.n(R),Y=t(49),W=t.n(Y),Z=t(50),G=t(51),J=t.n(G),K=function(e){return r.a.createElement("li",{className:J.a.NavigationItem},r.a.createElement(Z.NavHashLink,{smooth:!0,exact:e.exact,to:e.link,location:{pathname:document.location.pathname+document.location.hash}},e.children))},V=function(){return r.a.createElement("ul",{className:W.a.NavigationItems},r.a.createElement(K,{link:"/#home",exact:!0},"Home"),r.a.createElement(K,{link:"/#projects",exact:!0},"Projects"),r.a.createElement(K,{link:"/#contact",exact:!0},"Contact"))},q=t(52),X=t.n(q),z=function(e){return r.a.createElement("div",{className:X.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},Q=function(e){return r.a.createElement("header",{className:L.a.Toolbar},r.a.createElement("div",{className:L.a.MenuButton},r.a.createElement(z,{clicked:e.drawerToggleClicked})),r.a.createElement("nav",{className:L.a.DesktopOnly},r.a.createElement(V,null)))},U=t(21),$=t.n(U),ee=t(53),ae=t.n(ee),te=function(e){return e.show?r.a.createElement("div",{className:ae.a.Backdrop,onClick:e.clicked}):null},ne=function(e){var a=[$.a.SideDrawer,$.a.Close];return e.open&&(a=[$.a.SideDrawer,$.a.Open]),r.a.createElement(P,null,r.a.createElement(te,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:a.join(" ")},r.a.createElement("nav",null,r.a.createElement(V,null))))},re=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},t.sideDrawerClosedHandler=function(){t.setState({showSideDrawer:!1})},t.sideDrawerToggleHandler=function(){t.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(Q,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(ne,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:H.a.Content},this.props.children))}}]),a}(n.Component),ce=t(54),le=t.n(ce),oe=function(e){return r.a.createElement("div",{classeName:le.a.NotFound},r.a.createElement("h3",null,"Sorry, I can't find that page !"))},se=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(re,null,r.a.createElement(F.g,null,r.a.createElement(F.d,{exact:!0,path:"/",component:M}),r.a.createElement(F.d,{component:oe}))))}}]),a}(n.Component),ie=t(23);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ie.BrowserRouter,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports={ImageSlide:"ProjectCard_ImageSlide__1M_j9",ImageCard:"ProjectCard_ImageCard__CQf0x",Icon:"ProjectCard_Icon__10Ma5",Clickers:"ProjectCard_Clickers__30Zzz",Button:"ProjectCard_Button__31LNU",SlideInfo:"ProjectCard_SlideInfo__3no9R",Tools:"ProjectCard_Tools__3Asgx"}}},[[55,1,2]]]);
//# sourceMappingURL=main.30716b5f.chunk.js.map