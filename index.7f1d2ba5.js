!function(){function t(t){return t&&t.__esModule?t.default:t}var e;e=JSON.parse('[{"id":1,"user":"Elon Reeve Musk","tweets":777,"followers":100500,"avatar":"../images/hansel.png"},{"id":2,"user":"Elon Reeve Musk","tweets":777,"followers":100502,"avatar":"../images/hansel.png"},{"id":3,"user":"Elon Reeve Musk","tweets":777,"followers":100503,"avatar":"../images/hansel.png"}]');var a={cardsList:document.querySelector(".cards-list"),cardBtnFollow:document.querySelector(".card-btn")},n=[],s=[];function o(t){return n.includes(t)?"following":"follow"}var r=function(){var o=JSON.parse(localStorage.getItem("following")),r=JSON.parse(localStorage.getItem("users"));n=o||[],s=r||t(e),a.cardsList.innerHTML=l()},l=function(){return s.map((function(t){var e,a=t.id,n=t.tweets,s=t.followers,r=t.avatar;return'<li class="card" data-id='.concat(a,' data-state="follow">\n        <div class="card-avatar">\n                <div class="card-img">\n                    <img src=').concat(r,' alt=""/>\n                </div>\n            </div>\n            <p class="card-tweets">').concat(n,' tweets</p>\n            <p class="card-followers">').concat((e=s,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),' followers</p>\n            <button type="button" class="card-btn" data-state=').concat(o(a)," data-id=").concat(a,">").concat(o(a),"</button>\n         </li>")})).join("")};document.body.addEventListener("click",(function(a){var s=a.target;if(s.classList.contains("card-btn")){var o=Number(s.dataset.id),l=t(e).find((function(t){return t.id===o}));n.includes(o)?(l.followers-=1,n.splice(n.indexOf(o),1)):(l.followers+=1,n.push(o)),localStorage.setItem("users",JSON.stringify(t(e))),localStorage.setItem("following",JSON.stringify(n)),r()}})),r()}();
//# sourceMappingURL=index.7f1d2ba5.js.map
