(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/close_icon.c2d0901f.svg"},26:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/mesto-logo.94cbab21.svg"},31:function(e,t,a){e.exports=a.p+"static/media/delete.9c3b03ae.svg"},32:function(e,t,a){e.exports=a.p+"static/media/pen.58afbe73.svg"},33:function(e,t,a){e.exports=a.p+"static/media/true.7fc4c149.svg"},34:function(e,t,a){e.exports=a.p+"static/media/false.c32299fa.svg"},38:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),i=(a(26),a(35)),l=a(4),s=a(29),u=a.n(s),m=a(8),p=a(2);var d=Object(p.g)((function(e){var t=o.a.useState(!1),a=Object(l.a)(t,2),n=a[0],r=a[1],c="/sign-in"===e.location.pathname,i="/"===e.location.pathname,s=function(){r(!1),e.accountExit()};return o.a.createElement("header",{className:"header header-margin"},n&&o.a.createElement("div",{className:"header__menu"},o.a.createElement("p",{className:"header__email-user"},e.userEmail),o.a.createElement("button",{className:"header__exit",onClick:s},"\u0412\u044b\u0439\u0442\u0438")),o.a.createElement("div",{className:"header__main-container"},o.a.createElement(m.b,{to:"/",className:"header__href"},o.a.createElement("img",{src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043c\u0435\u0441\u0442 \u0432 \u0420\u043e\u0441\u0441\u0438\u0438",className:"header__logo"})),i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:n?"header__button-close-menu":"header__button-open-menu",onClick:function(){r(!n)}}),o.a.createElement("div",{className:"header__container-right"},o.a.createElement("p",{className:"header__email-user"},e.userEmail),o.a.createElement(m.b,{to:"".concat(c?"/sign-up":"/sign-in"),className:"header__redirect",onClick:function(){c||s()}},c?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u044b\u0439\u0442\u0438"))):o.a.createElement(m.b,{to:"".concat(c?"/sign-up":"/sign-in"),className:"header__redirect"},c?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438")))})),f=a(9),_=a(10),h=a(3),b=a(1),g=a(14),v=a(13),E=new(function(){function e(){Object(f.a)(this,e)}return Object(_.a)(e,[{key:"getToken",value:function(){return localStorage.getItem("jwt")}},{key:"tokenCheck",value:function(){var e=!1;return this.getToken()&&(e=!0),e}},{key:"saveToken",value:function(e){e&&localStorage.setItem("jwt",e)}},{key:"deleteToken",value:function(){localStorage.removeItem("jwt")}}]),e}()),O=function(){function e(t){Object(f.a)(this,e),this._baseUrl="http://api.students.nomoredomains.monster",this._data={headers:{authorization:E.getToken()}}}return Object(_.a)(e,[{key:"_resetParameters",value:function(){Object.keys(this._data).length>1&&(delete this._data.method,delete this._data.body,delete this._data.headers["Content-Type"])}},{key:"_getData",value:function(e){var t=e.method,a=void 0===t?"GET":t,n=e.body,o=e.contentType;this._resetParameters(),this._data.method=a,n&&(this._data.body=JSON.stringify(n)),o&&(this._data.headers["Content-Type"]=o)}},{key:"_getResult",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}(),y=new(function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n=e.baseUrl;e.groupId,e.authorization;return Object(f.a)(this,a),t.call(this,n)}return Object(_.a)(a,[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),this._data).then((function(t){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",e).call(e,t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),this._data).then((function(t){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",e).call(e,t)}))}},{key:"addCard",value:function(e){var t=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:"POST",body:e,contentType:"application/json"}),fetch("".concat(this._baseUrl,"/cards"),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",t).call(t,e)}))}},{key:"deleteCard",value:function(e){var t=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:"DELETE"}),fetch("".concat(this._baseUrl,"/cards/").concat(e),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",t).call(t,e)}))}},{key:"addLikeOrDislikeCard",value:function(e,t){var n=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:t?"PUT":"DELETE"}),fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",n).call(n,e)}))}},{key:"editProfileForm",value:function(e){var t=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:"PATCH",body:e,contentType:"application/json"}),fetch("".concat(this._baseUrl,"/users/me"),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",t).call(t,e)}))}},{key:"editAvatar",value:function(e){var t=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:"PATCH",body:e,contentType:"application/json"}),fetch("".concat(this._baseUrl,"/users/me/avatar"),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",t).call(t,e)}))}}]),a}(O))({}),j=a(31),k=a.n(j),C=o.a.createContext();var N=function(e){var t=e.link,a=e.name,n=e.likes,r=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,l=e.owner,s=o.a.useContext(C),u=l[0]!==s._id,m=n.some((function(e){return e===s._id}));return console.log("props",e),console.log("owner[0]",l[0]),o.a.createElement("article",{className:"element"},o.a.createElement("img",{className:"element__image",src:"".concat(t),onClick:function(){r(t)}}),o.a.createElement("img",{src:k.a,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",className:"element__button-delete ".concat(u&&"element__button-delete_deactivation"),onClick:function(){i(e)}}),o.a.createElement("div",{className:"element__container"},o.a.createElement("p",{className:"element__text"},a),o.a.createElement("div",{className:"element__container_likes"},o.a.createElement("button",{type:"button",className:"element__button-like ".concat(m&&"element__button-like_action"),onClick:function(){c(e)}}),o.a.createElement("p",{className:"element__count-like"},n.length))))},x=a(32),S=a.n(x);function T(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.handleCardClick,c=e.onCardLike,i=e.cards,l=e.onCardDelete,s=e.setCards,u=o.a.useContext(C);o.a.useEffect((function(){y.getCards().then((function(e){s(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a",e)}))}),[]);var m=u.name,p=u.avatar,d=u.about;return o.a.createElement("main",{className:"main"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__container-avatar"},o.a.createElement("div",{className:"profile__avatar-opacity",src:"".concat(S.a),onClick:n}),o.a.createElement("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar",src:"".concat(p)})),o.a.createElement("div",{className:"profile-info"},o.a.createElement("div",{className:"profile-info__container"},o.a.createElement("h1",{className:"profile-info__name"},m),o.a.createElement("button",{className:"profile-info__edit-button",type:"button",onClick:t})),o.a.createElement("p",{className:"profile-info__information-person"},d)),o.a.createElement("button",{className:"profile__add-button",type:"button",onClick:a})),o.a.createElement("section",{className:"elements"},i&&i.map((function(e){return o.a.createElement(N,Object.assign({key:e._id},e,{onCardClick:function(e){return r(e)},onCardLike:function(e){return c(e)},onCardDelete:function(e){return l(e)}}))}))))}function U(e){return o.a.createElement("footer",{className:"footer margin-footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))}var D=a(17),w=a.n(D),P=a(33),L=a.n(P),A=a(34),I=a.n(A);var R=function(e){var t=e.title,a=e.name,n=e.children,r=e.isOpen,c=e.onClose,i=e.textButton,l=e.onSubmit,s=e.popupMessage,u=void 0!==s&&s,m=e.typeMessage;return o.a.createElement("div",{className:"popup ".concat(r&&"popup_opened"),id:a},u?o.a.createElement("div",{className:"popup__container popup__container_message"},o.a.createElement("img",{src:w.a,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",className:"popup__icon-close popup__icon-close_message",onClick:c}),o.a.createElement("img",{src:m?L.a:I.a,alt:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",className:"popup__icon-message"}),o.a.createElement("h2",{className:"popup__message"},"".concat(m?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))):o.a.createElement("form",{className:"popup__container popup__container_form",method:"post",onSubmit:l,noValidate:!0},o.a.createElement("img",{src:w.a,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",className:"popup__icon-close popup__icon-close_form",onClick:c}),o.a.createElement("h2",{className:"popup__title form-title"},t),n,o.a.createElement("button",{className:"popup__button form-button",type:"submit"},i)))};var M=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup ".concat(t?"popup_opened":"")},o.a.createElement("div",{className:"popup__main-container"},o.a.createElement("div",{className:"popup__footer-container"},o.a.createElement("img",{className:"popup__view-photo-container",src:t}),o.a.createElement("img",{src:w.a,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",className:"popup__icon-close icon-close-form_view-photo",onClick:a})),o.a.createElement("p",{className:"popup__view-photo-info"})))};var B=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useState(""),r=Object(l.a)(n,2),c=r[0],i=r[1],s=o.a.useState(""),u=Object(l.a)(s,2),m=u[0],p=u[1],d=o.a.useContext(C);function f(e){e.preventDefault(),i(e.target.value)}function _(e){e.preventDefault(),p(e.target.value)}function h(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{id:"name_person",className:"popup__field popup__field_name_person form-field",type:"text",name:"namePerson",minLength:2,maxLength:40,onChange:f,value:c,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]+$",required:!0}),o.a.createElement("span",{id:"name_person-error",className:"popup__field-error"}),o.a.createElement("input",{id:"inform_person",className:"popup__field popup__field_inform_person form-field",type:"text",name:"informPerson",minLength:2,maxLength:200,onChange:_,value:m,required:!0}),o.a.createElement("span",{id:"inform_person-error",className:"popup__field-error"}))}return o.a.useEffect((function(){i(d.name),p(d.about)}),[d]),o.a.createElement(R,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:m})},children:o.a.createElement(h,null),title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popupEditProfile",isOpen:t,onClose:a,textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})};var F=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();function c(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{id:"link_avatar",className:"popup__field form-field",type:"url",name:"linkCard",ref:r,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"link_avatar-error",className:"popup__field-error"}))}return o.a.createElement(R,{onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})},children:o.a.createElement(c,null),title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popupEditAvatar",isOpen:t,onClose:a,textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})};var z=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useRef(),c=o.a.useRef();function i(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{id:"name_card",className:"popup__field popup__field_name_card form-field",type:"text",minLength:1,maxLength:30,name:"nameCard",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",ref:r,required:!0}),o.a.createElement("span",{id:"name_card-error",className:"popup__field-error"}),o.a.createElement("input",{id:"link_card",className:"popup__field popup__field_link_card form-field",type:"url",name:"linkCard",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:c,required:!0}),o.a.createElement("span",{id:"link_card-error",className:"popup__field-error"}))}return o.a.createElement(R,{onSubmit:function(e){e.preventDefault(),n({name:r.current.value,link:c.current.value})},children:o.a.createElement(i,null),title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popupAddCard",isOpen:t,onClose:a,textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})};var V=function(e){var t=e.title,a=e.textButton,n=e.onSubmitForm,r=e.typeForm,c=o.a.useState(""),i=Object(l.a)(c,2),s=i[0],u=i[1],p=o.a.useState(""),d=Object(l.a)(p,2),f=d[0],_=d[1];return o.a.createElement("form",{className:"form-page",method:"post",noValidate:!0,onSubmit:function(e){e.preventDefault(),n({password:f,email:s})}},o.a.createElement("h2",{className:"form-page__title form-title"},t),o.a.createElement("input",{className:"form-page__field form-field",type:"text",minLength:2,maxLength:40,onChange:function(e){u(e.target.value)},value:s,pattern:"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$",required:!0}),o.a.createElement("input",{className:"form-page__field form-field",type:"password",minLength:2,maxLength:200,onChange:function(e){_(e.target.value)},value:f,required:!0}),o.a.createElement("button",{className:"form-page__button form-button",type:"submit"},a),"register"===r&&o.a.createElement("div",{className:"form-page__container-label"},o.a.createElement("p",{className:"form-page__label"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?   ",o.a.createElement(m.b,{to:"/sign-in",className:"form-page__link"},"\u0412\u043e\u0439\u0442\u0438"))))};var q=function(e){var t=e.login;return o.a.createElement(V,{title:"\u0412\u0445\u043e\u0434",textButton:"\u0412\u043e\u0439\u0442\u0438",onSubmitForm:t})};var J=function(e){var t=e.register;return o.a.createElement(V,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",textButton:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmitForm:t,typeForm:"register"})};var $=function(e){var t=e.isVisible,a=e.typeMessage,n=e.onCloseInfoTooltip;return o.a.createElement(R,{isOpen:t,typeMessage:a,popupMessage:!0,onClose:n})},H=a(36),W=function(e){var t=e.component,a=Object(H.a)(e,["component"]);return o.a.createElement(p.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(p.a,{to:"/sign-in"})}))},G=new(function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){e.baseUrl;return Object(f.a)(this,a),t.call(this)}return Object(_.a)(a,[{key:"signup",value:function(e){var t=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:"POST",body:e,contentType:"application/json"}),fetch("".concat(this._baseUrl,"/signup"),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",t).call(t,e)}))}},{key:"signin",value:function(e){var t=this;return Object(h.a)(Object(b.a)(a.prototype),"_getData",this).call(this,{method:"POST",body:e,contentType:"application/json"}),fetch("".concat(this._baseUrl,"/signin"),this._data).then((function(e){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",t).call(t,e)}))}},{key:"checkValidityToken",value:function(){}}]),a}(O))({}),Z=a(20),K=a(37),Q=new(function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n,o,r=e.baseUrl,c=e.groupId;e.authorization;return Object(f.a)(this,a),(o=t.call(this,r))._groupId=c,Object(K.a)((n=Object(Z.a)(o),Object(b.a)(a.prototype)),"_data",{headers:{authorization:"Bearer ".concat(E.getToken())}},n,!0),o}return Object(_.a)(a,[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),this._data).then((function(t){return Object(h.a)(Object(b.a)(a.prototype),"_getResult",e).call(e,t)}))}}]),a}(O))({baseUrl:"https://auth.nomoreparties.co"});var X=Object(p.g)((function(e){var t=o.a.useState(!1),a=Object(l.a)(t,2),n=a[0],r=a[1],c=o.a.useState(!1),s=Object(l.a)(c,2),u=s[0],m=s[1],f=o.a.useState(!1),_=Object(l.a)(f,2),h=_[0],b=_[1],g=o.a.useState(!1),v=Object(l.a)(g,2),O=v[0],j=(v[1],o.a.useState("")),k=Object(l.a)(j,2),N=k[0],x=k[1],S=o.a.useState({}),D=Object(l.a)(S,2),w=D[0],P=D[1],L=o.a.useState([]),A=Object(l.a)(L,2),I=A[0],V=A[1],H=o.a.useState({isVisible:!1,typeMessage:!1}),Z=Object(l.a)(H,2),K=Z[0],X=Z[1],Y=o.a.useState(""),ee=Object(l.a)(Y,2),te=ee[0],ae=ee[1],ne=o.a.useState(!1),oe=Object(l.a)(ne,2),re=oe[0],ce=oe[1];function ie(){y.getUserInfo().then((function(e){ce(!0),P(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e)})),Q.getUserInfo().then((function(e){e.data.email?ae(e.data.email):console.log("\u041e\u0448\u0438\u0431\u043a\u0430, \u0434\u0430\u043d\u043d\u044b\u0445 \u043e email \u043d\u0435\u0442",e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e)}))}function le(){r(!1),b(!1),m(!1),x("")}function se(e,t){X({isVisible:!0,typeMessage:!0}),ae(e.email),ce(!0),E.saveToken(t.token)}function ue(){X({isVisible:!0,typeMessage:!1})}return o.a.useEffect((function(){E.tokenCheck()?ie():(E.deleteToken(),e.history.push("/sign-in"))}),[]),console.log("this",this),o.a.createElement(C.Provider,{value:w},o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"page"},o.a.createElement(d,{userEmail:te,accountExit:function(){ae(""),ce(!1),E.deleteToken(),e.history.push("/sign-in")}}),o.a.createElement(p.d,null,o.a.createElement(p.b,{path:"/sign-in"},o.a.createElement(q,{login:function(t){G.signin(t).then((function(a){ie(),se(t,a),setTimeout((function(){X({isVisible:!1,typeMessage:!0}),e.history.push("/")}),2e3)})).catch((function(e){ue()}))}})),o.a.createElement(p.b,{path:"/sign-up"},o.a.createElement(J,{register:function(t){G.signup(t).then((function(a){se(t,a),setTimeout((function(){X({isVisible:!1,typeMessage:!0}),e.history.push("/sign-in")}),2e3)})).catch((function(e){ue()}))}})),o.a.createElement(W,{path:"/",loggedIn:re,component:T,onEditProfile:function(){r(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){b(!0)},handleCardClick:function(e){return x(e)},cards:I,onCardLike:function(e){var t=e.likes.some((function(e){return e===w._id}));y.addLikeOrDislikeCard(e._id,!t).then((function(t){var a=I.map((function(a){return a._id===e._id?t:a}));V(a)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043b\u0430\u0439\u043a\u0430",e)}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(t){var a=I.filter((function(t){return t._id!==e._id}));V(a)}))},setCards:V})),o.a.createElement(p.b,{path:"/",exact:!0},o.a.createElement(U,null))),o.a.createElement(B,{isOpen:n,onClose:le,onUpdateUser:function(e){y.editProfileForm(e).then((function(e){P(e),le()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e)}))}}),o.a.createElement(F,{isOpen:h,onClose:le,onUpdateAvatar:function(e){y.editAvatar(e).then((function(e){P(e),le()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e)}))}}),o.a.createElement(z,{isOpen:u,onClose:le,onAddPlace:function(e){y.addCard(e).then((function(e){V([].concat(Object(i.a)(I),[e])),le()}))}}),o.a.createElement(R,{children:"",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"popupDeleteCard",isOpen:O,onClose:le,textButton:"\u0414\u0430"}),o.a.createElement(M,{card:N,onClose:le}),o.a.createElement($,Object.assign({},K,{onCloseInfoTooltip:function(){X({isVisible:!1,typeMessage:!1})}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,null,o.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.cf58c95b.chunk.js.map