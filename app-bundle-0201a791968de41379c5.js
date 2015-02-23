wload([1],{0:function(e,t,o){e.exports=o(8)},8:function(e,t,o){var n=o(6),i=o(31);n.render(n.createElement(i,null),document.body)},31:function(e,t,o){e.exports=o(56)},56:function(e,t,o){var n=o(6),i=o(115),r=o(117),a=o(116),c=o(118),l=o(119),d=o(120),m=n.createClass({displayName:"HomeView",getInitialState:function(){return{}},render:function(){return n.createElement("div",{className:"home-view"},n.createElement(r,null),n.createElement(a,null),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("h1",{className:"col s12"},"Movies"),n.createElement(c,{onSelect:this.handleOnGatewaySelect}),n.createElement(l,{stats:this.state.stats,onRetryClick:this.handleRetryClick,onClearCacheClick:this.handleClearCacheClick,clearCacheDisabled:this.state.clearCacheDisabled})),n.createElement(d,{movies:this.state.movies})))},componentDidUpdate:function(){this.updateMovies()},handleOnGatewaySelect:function(e){this.setState({clientName:e,Client:i[e],movies:null,stats:null})},handleRetryClick:function(e){e.preventDefault(),this.setState({movies:null,stats:null})},handleClearCacheClick:function(e){e.preventDefault(),this.setState({clearCacheDisabled:!0}),this.getCacheStore().clear()},getCacheStore:function(){var e=i.getGateway(this.state.clientName);return e.cacheStore},updateMovies:function(){var e=this.state.Client;this.state.movies,e&&null==this.state.movies&&e.Movie.all(function(e,t){this.setState({movies:e,stats:t,clearCacheDisabled:!1})}.bind(this))}});e.exports=m},115:function(e,t,o){var n=o(3),i=o(4),r=n.JQueryGateway,a=i.SessionStorageCacheStore,c=i.LocalStorageCacheStore,l=i.createCachedGateway(r,a),d=i.createCachedGateway(r,c),m=o(164);e.exports={SessionClient:n.forge(m,l),LocalClient:n.forge(m,d),getGateway:function(e){return/^session/i.test(e)?l:d}}},116:function(e,t,o){var n=o(6),i=n.createClass({displayName:"GithubRibbon",render:function(){return n.createElement("a",{target:"_blank",href:"https://github.com/tulios/mappersmith-playground",dangerouslySetInnerHTML:{__html:'<img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />'}})}});e.exports=i},117:function(e,t,o){e.exports=o(165)},118:function(e,t,o){e.exports=o(166)},119:function(e,t,o){e.exports=o(167)},120:function(e,t,o){e.exports=o(168)},164:function(e){e.exports={host:"http://match.mocaroni.com/Tlo277HoLFtm3Nk7kwHewWu5aUQ",rules:[{values:{gateway:{jsonp:!0},processor:function(e){return e.data}}}],resources:{Movie:{all:"/movies"},Serie:{all:"/series"}}}},165:function(e,t,o){var n=o(6),i=n.createClass({displayName:"HeaderWidget",render:function(){return n.createElement("header",{className:"header-widget"},n.createElement("nav",{className:"top-nav"},n.createElement("div",{className:"container"},n.createElement("div",{className:"nav-wrapper"},n.createElement("a",{href:"/",className:"brand-logo"},"Mappersmith Playground")))))}});e.exports=i},166:function(e,t,o){(function(t){var n=o(6),i=n.createClass({displayName:"GatewaySelectWidget",render:function(){return n.createElement("div",{className:"gateway-select-widget col s6"},n.createElement("label",null,"Gateway with"),n.createElement("select",null,n.createElement("option",{value:"SessionClient"},"SessionStorage Cache"),n.createElement("option",{value:"LocalClient"},"LocalStorage Cache")))},componentDidMount:function(){o(179),o(180);var e=t(this.getDOMNode()),n=e.find("select");n.material_select(),n.on("change",function(e){this.props.onSelect(t(e.target).val())}.bind(this)),this.props.onSelect(n.val())}});e.exports=i}).call(t,o(5))},167:function(e,t,o){var n=o(6),i=n.createClass({displayName:"StatsPanelWidget",render:function(){var e=this.props.stats,t=(e||{}).cacheHit?"hit":"miss",o="waves-effect waves-light btn clear-cache";this.props.clearCacheDisabled&&(o+=" disabled");var i=null!=e?n.createElement("div",{className:"valign left-align"},"Cache ",n.createElement("span",{className:"badge cache "+t})," | time elapsed ",n.createElement("strong",null,e.timeElapsedHumanized),n.createElement("p",null,n.createElement("a",{className:"waves-effect waves-light btn retry",onClick:this.props.onRetryClick},"Retry"),n.createElement("a",{className:o,onClick:this.props.onClearCacheClick},"Clear cache"))):null;return n.createElement("div",{className:"stats-panel-widget col s6"},n.createElement("div",{className:"valign-wrapper"},i))}});e.exports=i},168:function(e,t,o){var n=o(6),i=o(181),r=o(182),a=n.createClass({displayName:"MoviesListWidget",render:function(){var e=this.props.movies||[],t=n.createElement("div",{className:"col s12"},n.createElement(r,null));return e.length>0&&(t=e.map(function(e){return n.createElement("div",{key:e.id,className:"col s2"},n.createElement(i,{data:e}))})),n.createElement("div",{className:"movies-list-widget row"},t)}});e.exports=a},179:function(e,t,o){e.exports=o(185)},180:function(e,t,o){e.exports=o(186)},181:function(e,t,o){e.exports=o(189)},182:function(e,t,o){e.exports=o(190)},185:function(e,t,o){(function(e){e.fn.scrollTo=function(t){return e(this).scrollTop(e(this).scrollTop()-e(this).offset().top+e(t).offset().top),this},e.fn.dropdown=function(t){var o={inDuration:300,outDuration:225,constrain_width:!0,hover:!0,alignment:"left",gutter:0,belowOrigin:!1};t=e.extend(o,t),this.each(function(){function o(){void 0!=a.data("inDuration")&&(t.inDuration=a.data("inDuration")),void 0!=a.data("outDuration")&&(t.outDuration=a.data("outDuration")),void 0!=a.data("constrainwidth")&&(t.constrain_width=a.data("constrainwidth")),void 0!=a.data("hover")&&(t.hover=a.data("hover")),void 0!=a.data("alignment")&&(t.alignment=a.data("alignment")),void 0!=a.data("gutter")&&(t.gutter=a.data("gutter")),void 0!=a.data("beloworigin")&&(t.belowOrigin=a.data("beloworigin"))}function n(){o(),1==t.constrain_width&&c.css("width",a.outerWidth());var n=0;1==t.belowOrigin&&(n=a.height());var r=0,d=t.gutter;"right"==t.alignment&&(r=a.innerWidth()-c.innerWidth(),d=-1*d),c.css(i(a[0])?{display:"block",position:"fixed",height:0,top:a.offset().top-e(window).scrollTop()+n,left:a.offset().left+r+d}:{display:"block",top:a.offset().top+n,left:a.offset().left+r+d,height:0}),c.velocity({opacity:1},{duration:t.inDuration,queue:!1,easing:"easeOutQuad"}).velocity({height:l},{duration:t.inDuration,queue:!1,easing:"easeOutCubic",complete:function(){c.css("overflow-y","auto")}})}function i(t){var o=e(t),n=o.add(o.parents()),i=!1;return n.each(function(){return"fixed"===e(this).css("position")?(i=!0,!1):void 0}),i}function r(){c.velocity({opacity:0},{duration:t.outDuration,easing:"easeOutQuad",complete:function(){c.css({display:"none","overflow-y":""})}})}var a=e(this),c=e("#"+a.attr("data-activates"));o(),c.parent().is(e("body"))||(c.detach(),e("body").append(c));var l=c.height();t.hover?(a.on("mouseover",function(){n()}),c.on("mouseleave",function(){r()})):a.click(function(t){t.preventDefault(),t.stopPropagation(),n(),e(document).bind("click."+c.attr("id"),function(t){c.is(t.target)||a.is(t.target)||(r(),e(document).unbind("click."+c.attr("id")))})}),a.on("open",n),a.on("close",r),e(document).on("resize",function(){})})}}).call(t,o(5))},186:function(e,t,o){(function(e){var t=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}();e.fn.material_select=function(o){e(this).each(function(){if($select=e(this),!$select.hasClass("browser-default")&&!$select.hasClass("initialized")){var n=t(),i=e('<div class="select-wrapper"></div>'),r=e('<ul id="select-options-'+n+'" class="dropdown-content select-dropdown"></ul>'),a=$select.children("option");if(void 0!==$select.find("option:selected"))var c=$select.find("option:selected");else var c=r.first();a.each(function(){r.append(e('<li class="'+(e(this).is(":disabled")?"disabled":"")+'"><span>'+e(this).html()+"</span></li>"))}),r.find("li").each(function(t){var n=$select;e(this).click(function(){e(this).hasClass("disabled")||(n.find("option").eq(t).prop("selected",!0),n.trigger("change"),n.siblings("input.select-dropdown").val(e(this).text()),"undefined"!=typeof o&&o())})}),$select.wrap(i);var l=e('<input type="text" class="select-dropdown" readonly="true" '+($select.is(":disabled")?"disabled":"")+' data-activates="select-options-'+n+'" value="'+c.html()+'"/><i class="mdi-navigation-arrow-drop-down">');$select.before(l),e("body").append(r),$select.is(":disabled")||l.dropdown({hover:!1}),$select.addClass("initialized"),l.on("focus",function(){e(this).trigger("open"),c=e(this).val(),selectedOption=r.find("li").filter(function(){return e(this).text().toLowerCase()===c.toLowerCase()})[0],activateOption(r,selectedOption)}),l.on("blur",function(){e(this).trigger("close")}),activateOption=function(t,o){t.find("li.active").removeClass("active"),e(o).addClass("active"),t.scrollTo(o)},filterQuery=[],onKeyDown=function(t){return 9==t.which?void l.trigger("close"):40!=t.which||r.is(":visible")?void((13!=t.which||r.is(":visible"))&&(t.preventDefault(),letter=String.fromCharCode(t.which).toLowerCase(),letter&&(filterQuery.push(letter),string=filterQuery.join(""),newOption=r.find("li").filter(function(){return 0===e(this).text().toLowerCase().indexOf(string)})[0],newOption&&activateOption(r,newOption)),13==t.which&&(activeOption=r.find("li.active:not(.disabled)")[0],activeOption&&(e(activeOption).trigger("click"),l.trigger("close"))),40==t.which&&(newOption=r.find("li.active").next("li:not(.disabled)")[0],newOption&&activateOption(r,newOption)),27==t.which&&l.trigger("close"),38==t.which&&(newOption=r.find("li.active").prev("li:not(.disabled)")[0],newOption&&activateOption(r,newOption)),setTimeout(function(){filterQuery=[]},1e3))):void l.trigger("open")},l.on("keydown",onKeyDown)}})}}).call(t,o(5))},189:function(e,t,o){var n=o(6),i=n.createClass({displayName:"MovieCardWidget",render:function(){var e=this.props.data;return n.createElement("div",{className:"movie-card-widget card"},n.createElement("div",{className:"card-image"},n.createElement("img",{src:e.poster_url})),n.createElement("div",{className:"card-content"},n.createElement("p",null,n.createElement("strong",null,"Year:")," ",e.year)),n.createElement("div",{className:"card-action"},n.createElement("a",{href:e.imdb_url},"IMDB"),n.createElement("a",{href:e.tracktv_url},"Trakt.tv")))}});e.exports=i},190:function(e,t,o){var n=o(6),i=n.createClass({displayName:"CircularLoaderWidget",render:function(){var e=this.props.size||"big";return n.createElement("div",{className:"circular-loader-widget valign-wrapper"},n.createElement("div",{className:"valign"},n.createElement("div",{className:"preloader-wrapper "+e+" active"},n.createElement("div",{className:"spinner-layer spinner-blue"},n.createElement("div",{className:"circle-clipper left"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"gap-patch"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"circle-clipper right"},n.createElement("div",{className:"circle"}))),n.createElement("div",{className:"spinner-layer spinner-red"},n.createElement("div",{className:"circle-clipper left"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"gap-patch"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"circle-clipper right"},n.createElement("div",{className:"circle"}))),n.createElement("div",{className:"spinner-layer spinner-yellow"},n.createElement("div",{className:"circle-clipper left"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"gap-patch"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"circle-clipper right"},n.createElement("div",{className:"circle"}))),n.createElement("div",{className:"spinner-layer spinner-green"},n.createElement("div",{className:"circle-clipper left"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"gap-patch"},n.createElement("div",{className:"circle"})),n.createElement("div",{className:"circle-clipper right"},n.createElement("div",{className:"circle"}))))))}});e.exports=i}});