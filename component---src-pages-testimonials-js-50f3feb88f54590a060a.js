(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+o5u":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i,o=n("TSYQ"),s=(i=o)&&i.__esModule?i:{default:i};t.default={CAROUSEL:function(e){return(0,s.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,s.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,s.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,s.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,s.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,s.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,s.default)({dot:!0,selected:e})}}},"2uI4":function(e,t,n){"use strict";n.r(t);var i=n("vxaI"),o=n("q1tI"),s=n.n(o),a=n("9eSz"),r=n.n(a),l=n("Bl7J"),A=n("vrFN"),u=n("SDyx"),c=(n("a6qw"),n("Dl0Y")),p=(n("xhFo"),function(){var e=u.data;return s.a.createElement(c.Carousel,{showIndicators:!1,showThumbs:!1,showStatus:!1,infiniteLoop:!0},e.allMarkdownRemark.edges.map((function(e){var t=e.node;return s.a.createElement("div",{className:"testimonials-container"},s.a.createElement(r.a,{fluid:t.frontmatter.productImage.childImageSharp.fluid}),s.a.createElement("div",{className:"testimonials-content"},s.a.createElement("h3",null,s.a.createElement("em",null,t.frontmatter.testimonialIntro)),s.a.createElement("h4",null,t.frontmatter.title),s.a.createElement("p",{className:"sub-head"},t.frontmatter.jobTitle),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))})))});n("nhb7"),t.default=function(){var e=i.data;return s.a.createElement(l.a,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return s.a.createElement("div",null,s.a.createElement(A.a,{title:t.frontmatter.title,description:t.frontmatter.description}),s.a.createElement(r.a,{fluid:t.frontmatter.headImage.childImageSharp.fluid}))})),s.a.createElement("div",{className:"testimonials"},s.a.createElement("h2",null,"Testimonials"),s.a.createElement(p,null)))}},Dl0Y:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Carousel=void 0;var i=s(n("YiZL")),o=s(n("RxTv"));function s(e){return e&&e.__esModule?e:{default:e}}t.Carousel=i.default,t.Thumbs=o.default},JtOw:function(e,t,n){var i,o,s;n("HAE/"),o=[t,n("fnPv")],void 0===(s="function"==typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=t)&&n.__esModule?n:{default:n};e.default=i.default})?i.apply(t,o):i)||(e.exports=s)},PFkU:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});t.unit=function(e,t,n){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")}},RxTv:function(e,t,n){"use strict";n("8+KV"),n("2Spj"),n("0l/t"),n("bWfx"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n("q1tI"),a=p(s),r=p(n("17x9")),l=p(n("+o5u")),A=n("f+5F"),u=p(n("sgwi")),c=p(n("JtOw"));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:n.getImages()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=s.Children.map(this.props.children,(function(e,t){var n=e;return"img"!==e.type&&(n=s.Children.toArray(e.props.children).filter((function(e){return"img"===e.type}))[0]),n&&0!==n.length?n:null}));return 0===e.filter((function(e){return null!==e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),null):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map((function(t,n){var o=l.default.ITEM(!1,n===e.state.selectedItem&&e.state.hasMount),s={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:o,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":e.props.labels.item+" "+(n+1)};return 0===n&&(t=a.default.cloneElement(t,{onLoad:e.setMountState})),a.default.createElement("li",i({},s,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,n=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,i=-this.state.firstItem*this.state.itemSize+"px",o=(0,u.default)(i,this.props.axis),s=this.props.transitionTime+"ms";return e={WebkitTransform:o,MozTransform:o,MsTransform:o,OTransform:o,transform:o,msTransform:o,WebkitTransitionDuration:s,MozTransitionDuration:s,MsTransitionDuration:s,OTransitionDuration:s,transitionDuration:s,msTransitionDuration:s},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!t),onClick:this.slideRight,"aria-label":this.props.labels.leftArrow}),a.default.createElement(c.default,{tagName:"ul",selectedItem:this.state.selectedItem,className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,ref:this.setItemsListRef},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!n),onClick:this.slideLeft,"aria-label":this.props.labels.rightArrow})))}}]),t}(s.Component);d.displayName="Thumbs",d.propsTypes={children:r.default.element.isRequired,transitionTime:r.default.number,selectedItem:r.default.number,thumbWidth:r.default.number,labels:r.default.shape({leftArrow:r.default.string,rightArrow:r.default.string,item:r.default.string})},d.defaultProps={selectedItem:0,transitionTime:350,axis:"horizontal"};var f=function(){var e=this;this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsListRef=function(t){e.itemsListRef=t},this.setThumbsRef=function(t,n){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[n]=t},this.updateSizes=function(){if(e.props.children&&e.itemsWrapperRef){var t=e.props.children.length,n=e.itemsWrapperRef.clientWidth,i=e.props.thumbWidth?e.props.thumbWidth:(0,A.outerWidth)(e.thumbsRef[0]),o=Math.floor(n/i),s=t-o,a=o<t;e.setState((function(t,n){return{itemSize:i,visibleItems:o,firstItem:a?e.getFirstItem(n.selectedItem):0,lastPosition:s,showArrows:a}}))}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n,i){if(!i.keyCode||"Enter"===i.key){var o=e.props.onSelectItem;"function"==typeof o&&o(t,n)}},this.onSwipeStart=function(){e.setState({swiping:!0})},this.onSwipeEnd=function(){e.setState({swiping:!1})},this.onSwipeMove=function(t){var n=-e.state.firstItem*e.state.itemSize;0===n&&t>0&&(t=0),n===-e.state.visibleItems*e.state.itemSize&&t<0&&(t=0);var i=n+100/(e.itemsWrapperRef.clientWidth/t)+"%";e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(t){e.itemsListRef.style[t]=(0,u.default)(i,e.props.axis)}))},this.slideRight=function(t){e.moveTo(e.state.firstItem-("number"==typeof t?t:1))},this.slideLeft=function(t){e.moveTo(e.state.firstItem+("number"==typeof t?t:1))},this.moveTo=function(t){t=(t=t<0?0:t)>=e.lastPosition?e.lastPosition:t,e.setState({firstItem:t})}};t.default=d},SDyx:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"e0e1f7c1-87be-5383-8413-5242f615afcd","frontmatter":{"title":"Ryan Strobel, DVM.","testimonialIntro":"Consulting veterinarian puts Tonisity Px to the test.","jobTitle":"Swine Vet Center, St. Peter, MN","image":null,"productImage":{"id":"efecb494-2870-5384-bbb8-915a2ad6da43","childImageSharp":{"id":"33c108fc-a6cd-50c6-8f71-ecf034065130","fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGH3T0zFA2pQkB//8QAGxAAAwEAAwEAAAAAAAAAAAAAAQIDABESIkH/2gAIAQEAAQUCA5NECnThqL2dpEH5nPr/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAcEAABAwUAAAAAAAAAAAAAAAAQAAIRICGBkbH/2gAIAQEABj8ChW6JfqjI/8QAGxABAQEAAgMAAAAAAAAAAAAAAQARITFBUZH/2gAIAQEAAT8hyvZuOc+pLUGzzi4Z6sIIkV72PP/aAAwDAQACAAMAAAAQUwcA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAAMBAQADAAAAAAAAAAAAAQARITFBUZGh/9oACAEBAAE/EFHxIu5x3DbVu/MC+R9YAPs1l5ZnK6TNoXa0xLf0v8Y8+rEDh8n/2Q==","aspectRatio":0.9794520547945206,"src":"//static/59615852fe6c2703879b6b1c35ae4aaf/3f4f3/ryan_strobel.jpg","srcSet":"//static/59615852fe6c2703879b6b1c35ae4aaf/3f4f3/ryan_strobel.jpg 286w","sizes":"(max-width: 286px) 100vw, 286px"}}}},"html":"<p>\\"We needed to stabilize production at a sow farm and were looking for ways to save pigs by lowering pre-weaning mortality. Litters that received <strong><em>Tonisity Px</em></strong> clearly <strong><em>out-performed</em></strong> those that didn’t, by <strong><em>weaning more pigs</em></strong>, having <strong><em>lower mortality rates</em></strong>. This was a large comparison of nearly 1,500 litters and 20,000 pigs, giving the producer <strong><em>high confidence</em></strong> in results.”</p>"}},{"node":{"id":"9c22ace3-98f9-5132-8675-1227213983d8","frontmatter":{"title":"Dietrich Johnson P.A.S.","testimonialIntro":null,"jobTitle":"Cornbelt Livestock Services","image":"dietrich_johnson.jpg","productImage":{"id":"a0176ce4-3f1b-5c19-86e2-333e14bdf5f7","childImageSharp":{"id":"14e6dc8e-51af-57e9-9fa4-11cf21e92211","fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGHmrIkKQeBIIQf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxEhMf/aAAgBAQABBQJK9LjIy9rPT6WEDYLDNiQ+z//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABkQAAIDAQAAAAAAAAAAAAAAAAAQAREhMf/aAAgBAQAGPwI4tt44JX//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFREGGR/9oACAEBAAE/Iag9ks5w0TpQa05V8ncRDsjC7cRUaavMscsUvxf/2gAMAwEAAgADAAAAEPPFPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB4QAQEAAgICAwAAAAAAAAAAAAERACExQVGhELHR/9oACAEBAAE/EIARYa5fGKkR2XIry5Bz0x0RDQTddmNAiWTdxKjDuzGrGwD2/nOK4oOzuce8BQI8DiMXW/pxFF3X4//Z","aspectRatio":0.7301136363636364,"src":"//static/08d81bf616c467b2be907418ae2bf5f3/63ea5/dietrich_johnson.jpg","srcSet":"//static/08d81bf616c467b2be907418ae2bf5f3/63ea5/dietrich_johnson.jpg 257w","sizes":"(max-width: 257px) 100vw, 257px"}}}},"html":"<p>“We tested the <strong><em>5-day program of PxW</em></strong> for pigs weaned into a wean-to-finish barn in Iowa. The Tonisity PxW pigs consumed almost 3x the water in 5 days as compared to the control group.  <strong><em>We were delighted with how the pigs started</em></strong> and look forward to using PxW on future weaned pigs. ”</p>"}}]}}}')},TSYQ:function(e,t,n){var i;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var s=typeof i;if("string"===s||"number"===s)e.push(i);else if(Array.isArray(i)&&i.length){var a=o.apply(null,i);a&&e.push(a)}else if("object"===s)for(var r in i)n.call(i,r)&&i[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},YiZL:function(e,t,n){"use strict";n("2Spj"),n("bWfx"),n("8+KV"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n("q1tI"),a=f(s),r=f(n("i8i4")),l=f(n("17x9")),A=f(n("+o5u")),u=f(n("sgwi")),c=f(n("JtOw")),p=f(n("RxTv")),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("PFkU"));function f(e){return e&&e.__esModule?e:{default:e}}var h=function(){},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setThumbsRef=function(e){n.thumbsRef=e},n.setCarouselWrapperRef=function(e){n.carouselWrapperRef=e},n.setListRef=function(e){n.listRef=e},n.setItemsWrapperRef=function(e){n.itemsWrapperRef=e},n.setItemsRef=function(e,t){n.itemsRef||(n.itemsRef=[]),n.itemsRef[t]=e},n.autoPlay=function(){!n.state.autoPlay||s.Children.count(n.props.children)<=1||(clearTimeout(n.timer),n.timer=setTimeout((function(){n.increment()}),n.props.interval))},n.clearAutoPlay=function(){n.state.autoPlay&&clearTimeout(n.timer)},n.resetAutoPlay=function(){n.clearAutoPlay(),n.autoPlay()},n.stopOnHover=function(){n.setState({isMouseEntered:!0}),n.clearAutoPlay()},n.startOnLeave=function(){n.setState({isMouseEntered:!1}),n.autoPlay()},n.navigateWithKeyboard=function(e){var t="horizontal"===n.props.axis,i=t?37:38;(t?39:40)===e.keyCode?n.increment():i===e.keyCode&&n.decrement()},n.updateSizes=function(){if(n.state.initialized){var e="horizontal"===n.props.axis,t=n.itemsRef[0],i=e?t.clientWidth:t.clientHeight;n.setState((function(e,t){return{itemSize:i}})),n.thumbsRef&&n.thumbsRef.updateSizes()}},n.setMountState=function(){n.setState({hasMount:!0}),n.updateSizes()},n.handleClickItem=function(e,t){0!==s.Children.count(n.props.children)&&(n.state.cancelClick?n.setState({cancelClick:!1}):(n.props.onClickItem(e,t),e!==n.state.selectedItem&&n.setState({selectedItem:e})))},n.handleOnChange=function(e,t){s.Children.count(n.props.children)<=1||n.props.onChange(e,t)},n.handleClickThumb=function(e,t){n.props.onClickThumb(e,t),n.selectItem({selectedItem:e})},n.onSwipeStart=function(e){n.setState({swiping:!0}),n.props.onSwipeStart(e),n.clearAutoPlay()},n.onSwipeEnd=function(e){n.setState({swiping:!1,cancelClick:!1}),n.props.onSwipeEnd(e),n.autoPlay()},n.onSwipeMove=function(e,t){n.props.onSwipeMove(t);var i="horizontal"===n.props.axis,o=s.Children.count(n.props.children),a=n.getPosition(n.state.selectedItem),r=n.props.infiniteLoop?n.getPosition(o-1)-100:n.getPosition(o-1),l=i?e.x:e.y,A=l;0===a&&l>0&&(A=0),a===r&&l<0&&(A=0);var u=a+100/(n.state.itemSize/A);n.props.infiniteLoop&&(0===n.state.selectedItem&&u>-100?u-=100*o:n.state.selectedItem===o-1&&u<100*-o&&(u+=100*o)),u+="%",n.setPosition(u);var c=Math.abs(l)>n.props.swipeScrollTolerance;return c&&!n.state.cancelClick&&n.setState({cancelClick:!0}),c},n.setPosition=function(e,t){var i=r.default.findDOMNode(n.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(t){i.style[t]=(0,u.default)(e,n.props.axis)})),t&&i.offsetLeft},n.resetPosition=function(){var e=n.getPosition(n.state.selectedItem)+"%";n.setPosition(e)},n.decrement=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.moveTo(n.state.selectedItem-("number"==typeof e?e:1),t)},n.increment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.moveTo(n.state.selectedItem+("number"==typeof e?e:1),t)},n.moveTo=function(e,t){var i=s.Children.count(n.props.children)-1,o=n.props.infiniteLoop&&!t&&(e<0||e>i),a=e;e<0&&(e=n.props.infiniteLoop?i:0),e>i&&(e=n.props.infiniteLoop?0:i),o?n.setState({swiping:!0},(function(){a<0?n.props.centerMode&&"horizontal"===n.props.axis?n.setPosition("-"+((i+2)*n.props.centerSlidePercentage-(100-n.props.centerSlidePercentage)/2)+"%",!0):n.setPosition("-"+100*(i+2)+"%",!0):a>i&&n.setPosition(0,!0),n.selectItem({selectedItem:e,swiping:!1})})):n.selectItem({selectedItem:e}),n.state.autoPlay&&!1===n.state.isMouseEntered&&n.resetAutoPlay()},n.onClickNext=function(){n.increment(1,!1)},n.onClickPrev=function(){n.decrement(1,!1)},n.onSwipeForward=function(){n.increment(1,!0)},n.onSwipeBackwards=function(){n.decrement(1,!0)},n.changeItem=function(e){if(!e.key||"Enter"===e.key){var t=e.target.value;n.selectItem({selectedItem:t})}},n.selectItem=function(e,t){n.setState(e,t),n.handleOnChange(e.selectedItem,s.Children.toArray(n.props.children)[e.selectedItem])},n.getInitialImage=function(){var e=n.props.selectedItem,t=n.itemsRef&&n.itemsRef[e],i=t&&t.getElementsByTagName("img");return i&&i[e]},n.getVariableImageHeight=function(e){var t=n.itemsRef&&n.itemsRef[e],i=t&&t.getElementsByTagName("img");if(n.state.hasMount&&i.length>0){var o=i[0];if(!o.complete){o.addEventListener("load",(function e(){n.forceUpdate(),o.removeEventListener("load",e)}))}var s=o.clientHeight;return s>0?s:null}return null},n.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.selectedItem!==this.state.selectedItem&&(this.updateSizes(),this.moveTo(e.selectedItem)),e.autoPlay!==this.state.autoPlay&&this.setState({autoPlay:e.autoPlay},(function(){t.state.autoPlay?t.setupAutoPlay():t.destroyAutoPlay()}))}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition()}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&s.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&document.addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&document.removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){this.props.infiniteLoop&&++e;var t=s.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,i=t-1;return e&&(e!==i||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===i&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return s.Children.map(this.props.children,(function(n,i){var o={ref:function(e){return t.setItemsRef(e,i)},key:"itemKey"+i+(e?"clone":""),className:A.default.ITEM(!0,i===t.state.selectedItem),onClick:t.handleClickItem.bind(t,i,n)};return t.props.centerMode&&"horizontal"===t.props.axis&&(o.style={minWidth:t.props.centerSlidePercentage+"%"}),a.default.createElement("li",o,n)}))}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?a.default.createElement("ul",{className:"control-dots"},s.Children.map(this.props.children,(function(t,n){return a.default.createElement("li",{className:A.default.DOT(n===e.state.selectedItem),onClick:e.changeItem,onKeyDown:e.changeItem,value:n,key:n,role:"button",tabIndex:0,"aria-label":e.props.labels.item+" "+(n+1)})}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,s.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==s.Children.count(this.props.children)?a.default.createElement(p.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels},this.props.children):null}},{key:"render",value:function(){if(!this.props.children||0===s.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&s.Children.count(this.props.children)>1,n=t&&(this.state.selectedItem>0||this.props.infiniteLoop),o=t&&(this.state.selectedItem<s.Children.count(this.props.children)-1||this.props.infiniteLoop),r={},l=this.getPosition(this.state.selectedItem),p=(0,u.default)(l+"%",this.props.axis),d=this.props.transitionTime+"ms";r={WebkitTransform:p,MozTransform:p,MsTransform:p,OTransform:p,transform:p,msTransform:p},this.state.swiping||(r=i({},r,{WebkitTransitionDuration:d,MozTransitionDuration:d,MsTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d}));var f=this.renderItems(!0),h=f.shift(),m=f.pop(),v={selectedItem:this.state.selectedItem,className:A.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:r,tolerance:this.props.swipeScrollTolerance},w={};if(e){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var b=this.getVariableImageHeight(this.state.selectedItem);v.style.height=b||"auto",w.height=b||"auto"}}else v.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,v.style.height=this.state.itemSize,w.height=this.state.itemSize;return a.default.createElement("div",{className:this.props.className,ref:this.setCarouselWrapperRef},a.default.createElement("div",{className:A.default.CAROUSEL(!0),style:{width:this.props.width}},a.default.createElement("button",{type:"button","aria-label":this.props.labels.leftArrow,className:A.default.ARROW_PREV(!n),onClick:this.onClickPrev}),a.default.createElement("div",{className:A.default.WRAPPER(!0,this.props.axis),style:w,ref:this.setItemsWrapperRef},this.props.swipeable?a.default.createElement(c.default,i({tagName:"ul",ref:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&h):a.default.createElement("ul",{className:A.default.SLIDER(!0,this.state.swiping),ref:this.setListRef,style:r},this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&h)),a.default.createElement("button",{type:"button","aria-label":this.props.labels.rightArrow,className:A.default.ARROW_NEXT(!o),onClick:this.onClickNext}),this.renderControls(),this.renderStatus()),this.renderThumbs())}}]),t}(s.Component);m.displayName="Carousel",m.propTypes={className:l.default.string,children:l.default.node,showArrows:l.default.bool,showStatus:l.default.bool,showIndicators:l.default.bool,infiniteLoop:l.default.bool,showThumbs:l.default.bool,thumbWidth:l.default.number,selectedItem:l.default.number,onClickItem:l.default.func.isRequired,onClickThumb:l.default.func.isRequired,onChange:l.default.func.isRequired,axis:l.default.oneOf(["horizontal","vertical"]),verticalSwipe:l.default.oneOf(["natural","standard"]),width:d.unit,useKeyboardArrows:l.default.bool,autoPlay:l.default.bool,stopOnHover:l.default.bool,interval:l.default.number,transitionTime:l.default.number,swipeScrollTolerance:l.default.number,swipeable:l.default.bool,dynamicHeight:l.default.bool,emulateTouch:l.default.bool,statusFormatter:l.default.func.isRequired,centerMode:l.default.bool,centerSlidePercentage:l.default.number,labels:l.default.shape({leftArrow:l.default.string,rightArrow:l.default.string,item:l.default.string}),onSwipeStart:l.default.func,onSwipeEnd:l.default.func,onSwipeMove:l.default.func},m.defaultProps={showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:h,onClickThumb:h,onChange:h,statusFormatter:function(e,t){return e+" of "+t},centerMode:!1,centerSlidePercentage:80,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){}},t.default=m},"f+5F":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},fnPv:function(e,t,n){var i,o,s;n("2Spj"),n("/SS/"),n("hHhE"),n("HAE/"),o=[t,n("q1tI"),n("17x9")],void 0===(s="function"==typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=u;var i=s(t),o=s(n);function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var A=!1;function u(e){A=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){u(!0)}}))}catch(f){}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return A?e:e.capture}function p(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var d=function(e){function t(){var e;a(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return s._handleSwipeStart=s._handleSwipeStart.bind(s),s._handleSwipeMove=s._handleSwipeMove.bind(s),s._handleSwipeEnd=s._handleSwipeEnd.bind(s),s._onMouseDown=s._onMouseDown.bind(s),s._onMouseMove=s._onMouseMove.bind(s),s._onMouseUp=s._onMouseUp.bind(s),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,c({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,c({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=p(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=p(e),n=t.x,i=t.y,o=n-this.moveStart.x,s=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:o,y:s},e)&&e.preventDefault(),this.movePosition={deltaX:o,deltaY:s}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return i.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),t}(t.Component);d.displayName="ReactSwipe",d.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,tolerance:o.default.number.isRequired},d.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=d})?i.apply(t,o):i)||(e.exports=s)},sgwi:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")}},vxaI:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"4a1a2d3b-3c14-5b2c-9900-a6be342698eb","frontmatter":{"title":"Testimonials","description":"Take a look at the feedback from our clients.","headImage":{"id":"f316d6a6-0028-5a47-a9a1-6a52cb2170c8","childImageSharp":{"id":"57cad4b7-0c29-5478-8057-6a08ac54b063","fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAaNBUwP/xAAaEAEAAQUAAAAAAAAAAAAAAAACAAEDBBEh/9oACAEBAAEFAjf4Uia5Op//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAABEQADIRD/2gAIAQEABj8CSeQmwbz/xAAYEAEBAQEBAAAAAAAAAAAAAAABIREAYf/aAAgBAQABPyEwFQzeMMeLvKptr3//2gAMAwEAAgADAAAAEI/P/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8QR//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAgMBAAAAAAAAAAAAAAEAESFBMXGRsf/aAAgBAQABPxCxEcFSp8sh8QGHsw37FqziF7rqf//Z","aspectRatio":2.7877551020408164,"src":"//static/a97f40a6c6fbd010cdb85ca92a642fee/d8255/tonisity_testimonials_header%402x.jpg","srcSet":"//static/a97f40a6c6fbd010cdb85ca92a642fee/9104c/tonisity_testimonials_header%402x.jpg 480w,\\n//static/a97f40a6c6fbd010cdb85ca92a642fee/a6352/tonisity_testimonials_header%402x.jpg 960w,\\n//static/a97f40a6c6fbd010cdb85ca92a642fee/d8255/tonisity_testimonials_header%402x.jpg 1920w,\\n//static/a97f40a6c6fbd010cdb85ca92a642fee/dafe5/tonisity_testimonials_header%402x.jpg 2732w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-testimonials-js-50f3feb88f54590a060a.js.map