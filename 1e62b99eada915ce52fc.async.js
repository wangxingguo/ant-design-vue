webpackJsonp([43],{1585:function(a,s,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(s,"__esModule",{value:!0});var e=t(1878),l=n(e),v=t(1881),r=n(v),i=t(1884),_=n(i),c=t(1887),o=n(c),p=t(1890),h=n(p),d=t(1893),u=n(d),C={cn:"# Avatar头像\n          用来代表用户或事物，支持图片、图标或字符展示。\n          ## 代码演示",us:"# Avatar\n          Avatars can be used to represent people or objects. It supports images, 'Icon's, or letters.\n          ## Examples \n          "};s.default={category:"Components",subtitle:"头像",type:"Data Display",title:"Avatar",render:function(){var a=arguments[0];return a("div",[a("md",{attrs:{cn:C.cn,us:C.us}}),a(l.default),a("br"),a(r.default),a("br"),a(_.default),a("br"),a(o.default),a("br"),a("api",[a("template",{slot:"cn"},[a(h.default)]),a(u.default)])])}}},1586:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=["U","Lucy","Tom","Edward"],e=["#f56a00","#7265e6","#ffbf00","#00a2ae"];s.default={data:function(){return{avatarValue:n[0],color:e[0]}},methods:{changeValue:function(){var a=n.indexOf(this.avatarValue);this.avatarValue=a<n.length-1?n[a+1]:n[0],this.color=a<e.length-1?e[a+1]:e[0]}}}},1878:function(a,s,t){a.exports=t(1879)},1879:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1880),e=t(67),l=e(null,n.a,!1,null,null,null);s.default=l.exports},1880:function(a,s,t){"use strict";var n=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <div>\n      <a-avatar size="large" icon="user"/>\n      <a-avatar icon="user"/>\n      <a-avatar size="small" icon="user"/>\n    </div>\n    <br/>\n    <div>\n      <a-avatar shape="square" size="large" icon="user"/>\n      <a-avatar shape="square" icon="user"/>\n      <a-avatar shape="square" size="small" icon="user"/>\n    </div>\n  </div>\n',script:null,style:null,us:"\n#### basic\nThree sizes and two shapes are available.\n",cn:"\n#### 基本\n头像有三种尺寸，两种形状可选。\n",sourceCode:'<template>\n  <div>\n    <div>\n      <a-avatar size="large" icon="user"/>\n      <a-avatar icon="user"/>\n      <a-avatar size="small" icon="user"/>\n    </div>\n    <br/>\n    <div>\n      <a-avatar shape="square" size="large" icon="user" />\n      <a-avatar shape="square" icon="user" />\n      <a-avatar shape="square" size="small" icon="user" />\n    </div>\n  </div>\n</template>\n'}}},[t("template",{slot:"component"},[t("div",[t("div",[t("a-avatar",{attrs:{size:"large",icon:"user"}}),a._v(" "),t("a-avatar",{attrs:{icon:"user"}}),a._v(" "),t("a-avatar",{attrs:{size:"small",icon:"user"}})],1),a._v(" "),t("br"),a._v(" "),t("div",[t("a-avatar",{attrs:{shape:"square",size:"large",icon:"user"}}),a._v(" "),t("a-avatar",{attrs:{shape:"square",icon:"user"}}),a._v(" "),t("a-avatar",{attrs:{shape:"square",size:"small",icon:"user"}})],1)])]),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"基本"}},[a._v("基本 "),t("a",{staticClass:"anchor",attrs:{href:"#基本","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("头像有三种尺寸，两种形状可选。")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"basic"}},[a._v("basic "),t("a",{staticClass:"anchor",attrs:{href:"#basic","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("Three sizes and two shapes are available.")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("size")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"large"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v("/>")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v("/>")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("size")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"small"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v("/>")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("br")]),a._v("/>")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("shape")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"square"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("size")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"large"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("shape")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"square"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("shape")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"square"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("size")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"small"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};s.a=l},1881:function(a,s,t){a.exports=t(1882)},1882:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1883),e=t(67),l=e(null,n.a,!1,null,null,null);s.default=l.exports},1883:function(a,s,t){"use strict";var n=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <span style="marginRight:24px"><a-badge count="1"><a-avatar shape="square" icon="user"/></a-badge></span>\n    <a-badge dot=""><a-avatar shape="square" icon="user"/></a-badge>\n  </div>\n',script:null,style:null,us:"\n#### With Badge\nUsually used for messages remind.\n",cn:"\n#### 带徽标的头像\n通常用于消息提示。\n",sourceCode:'<template>\n  <div>\n    <span style="marginRight:24px"><a-badge count=1><a-avatar shape="square" icon="user" /></a-badge></span>\n    <a-badge dot><a-avatar shape="square" icon="user" /></a-badge>\n  </div>\n</template>\n'}}},[t("template",{slot:"component"},[t("div",[t("span",{staticStyle:{marginRight:"24px"}},[t("a-badge",{attrs:{count:"1"}},[t("a-avatar",{attrs:{shape:"square",icon:"user"}})],1)],1),a._v(" "),t("a-badge",{attrs:{dot:""}},[t("a-avatar",{attrs:{shape:"square",icon:"user"}})],1)],1)]),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"带徽标的头像"}},[a._v("带徽标的头像 "),t("a",{staticClass:"anchor",attrs:{href:"#带徽标的头像","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("通常用于消息提示。")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"With-Badge"}},[a._v("With Badge "),t("a",{staticClass:"anchor",attrs:{href:"#With-Badge","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("Usually used for messages remind.")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("style")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"marginRight:24px"')]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-badge")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("count")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v("1")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("shape")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"square"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-badge")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-badge")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("dot")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("shape")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"square"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-badge")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};s.a=l},1884:function(a,s,t){a.exports=t(1885)},1885:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1886),e=t(67),l=e(null,n.a,!1,null,null,null);s.default=l.exports},1886:function(a,s,t){"use strict";var n=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-avatar icon="user"/>\n    <a-avatar>U</a-avatar>\n    <a-avatar>USER</a-avatar>\n    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>\n    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>\n    <a-avatar style="backgroundColor:#87d068" icon="user"/>\n  </div>\n',script:null,style:null,us:"\n#### Type\nImage, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.\n",cn:"\n#### 类型\n支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。\n",sourceCode:'<template>\n  <div>\n    <a-avatar icon="user" />\n    <a-avatar>U</a-avatar>\n    <a-avatar>USER</a-avatar>\n    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>\n    <a-avatar style="backgroundColor:#87d068" icon="user" />\n  </div>\n</template>\n'}}},[t("template",{slot:"component"},[t("div",[t("a-avatar",{attrs:{icon:"user"}}),a._v(" "),t("a-avatar",[a._v("U")]),a._v(" "),t("a-avatar",[a._v("USER")]),a._v(" "),t("a-avatar",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}}),a._v(" "),t("a-avatar",{staticStyle:{color:"#f56a00",backgroundColor:"#fde3cf"}},[a._v("U")]),a._v(" "),t("a-avatar",{staticStyle:{backgroundColor:"#87d068"},attrs:{icon:"user"}})],1)]),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"类型"}},[a._v("类型 "),t("a",{staticClass:"anchor",attrs:{href:"#类型","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"Type"}},[a._v("Type "),t("a",{staticClass:"anchor",attrs:{href:"#Type","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(">")]),a._v("U"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(">")]),a._v("USER"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("src")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"')]),a._v(" />")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("style")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"color: #f56a00; backgroundColor: #fde3cf"')]),a._v(">")]),a._v("U"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("style")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"backgroundColor:#87d068"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("icon")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};s.a=l},1887:function(a,s,t){a.exports=t(1888)},1888:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1586),e=t.n(n);for(var l in n)"default"!==l&&function(a){t.d(s,a,function(){return n[a]})}(l);var v=t(1889),r=t(67),i=r(e.a,v.a,!1,null,null,null);s.default=i.exports},1889:function(a,s,t){"use strict";var n=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-avatar shape="square" size="large" :style="{\'backgroundColor\': color}">{{avatarValue}}</a-avatar>\n    <a-button @click="changeValue">改变</a-button>\n  </div>\n',script:"\n  const UserList = ['U', 'Lucy', 'Tom', 'Edward']\n  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']\n  export default {\n    data () {\n      return {\n        avatarValue: UserList[0],\n        color: colorList[0],\n      }\n    },\n    methods: {\n      changeValue () {\n        const index = UserList.indexOf(this.avatarValue)\n        this.avatarValue = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]\n        this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0]\n      },\n    },\n  }\n",style:null,us:"\n#### Autoset Font Size\nFor letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.\n",cn:"\n#### 自动调整字符大小\n对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。\n",sourceCode:"<template>\n  <div>\n    <a-avatar shape=\"square\" size=\"large\" :style=\"{'backgroundColor': color}\">{{avatarValue}}</a-avatar>\n    <a-button @click=\"changeValue\">改变</a-button>\n  </div>\n</template>\n<script>\n  const UserList = ['U', 'Lucy', 'Tom', 'Edward']\n  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']\n  export default {\n    data () {\n      return {\n        avatarValue: UserList[0],\n        color: colorList[0],\n      }\n    },\n    methods: {\n      changeValue () {\n        const index = UserList.indexOf(this.avatarValue)\n        this.avatarValue = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]\n        this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0]\n      },\n    },\n  }\n<\/script>\n"}}},[t("template",{slot:"component"},[t("div",[t("a-avatar",{style:{backgroundColor:a.color},attrs:{shape:"square",size:"large"}},[a._v(a._s(a.avatarValue))]),a._v(" "),t("a-button",{on:{click:a.changeValue}},[a._v("改变")])],1)]),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"自动调整字符大小"}},[a._v("自动调整字符大小 "),t("a",{staticClass:"anchor",attrs:{href:"#自动调整字符大小","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"Autoset-Font-Size"}},[a._v("Autoset Font Size "),t("a",{staticClass:"anchor",attrs:{href:"#Autoset-Font-Size","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("shape")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"square"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("size")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"large"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v(":style")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v("\"{'backgroundColor': color}\"")]),a._v(">")]),t("span",[a._v("{{")]),a._v("avatarValue"),t("span",[a._v("}}")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-avatar")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-button")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("@click")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"changeValue"')]),a._v(">")]),a._v("改变"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-button")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("script")]),a._v(">")]),t("span",{staticClass:"javascript"},[a._v("\n  "),t("span",{staticClass:"hljs-keyword"},[a._v("const")]),a._v(" UserList = ["),t("span",{staticClass:"hljs-string"},[a._v("'U'")]),a._v(", "),t("span",{staticClass:"hljs-string"},[a._v("'Lucy'")]),a._v(", "),t("span",{staticClass:"hljs-string"},[a._v("'Tom'")]),a._v(", "),t("span",{staticClass:"hljs-string"},[a._v("'Edward'")]),a._v("]\n  "),t("span",{staticClass:"hljs-keyword"},[a._v("const")]),a._v(" colorList = ["),t("span",{staticClass:"hljs-string"},[a._v("'#f56a00'")]),a._v(", "),t("span",{staticClass:"hljs-string"},[a._v("'#7265e6'")]),a._v(", "),t("span",{staticClass:"hljs-string"},[a._v("'#ffbf00'")]),a._v(", "),t("span",{staticClass:"hljs-string"},[a._v("'#00a2ae'")]),a._v("]\n  "),t("span",{staticClass:"hljs-keyword"},[a._v("export")]),a._v(" "),t("span",{staticClass:"hljs-keyword"},[a._v("default")]),a._v(" {\n    data () {\n      "),t("span",{staticClass:"hljs-keyword"},[a._v("return")]),a._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[a._v("avatarValue")]),a._v(": UserList["),t("span",{staticClass:"hljs-number"},[a._v("0")]),a._v("],\n        "),t("span",{staticClass:"hljs-attr"},[a._v("color")]),a._v(": colorList["),t("span",{staticClass:"hljs-number"},[a._v("0")]),a._v("],\n      }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[a._v("methods")]),a._v(": {\n      changeValue () {\n        "),t("span",{staticClass:"hljs-keyword"},[a._v("const")]),a._v(" index = UserList.indexOf("),t("span",{staticClass:"hljs-keyword"},[a._v("this")]),a._v(".avatarValue)\n        "),t("span",{staticClass:"hljs-keyword"},[a._v("this")]),a._v(".avatarValue = index < UserList.length - "),t("span",{staticClass:"hljs-number"},[a._v("1")]),a._v(" ? UserList[index + "),t("span",{staticClass:"hljs-number"},[a._v("1")]),a._v("] : UserList["),t("span",{staticClass:"hljs-number"},[a._v("0")]),a._v("]\n        "),t("span",{staticClass:"hljs-keyword"},[a._v("this")]),a._v(".color = index < colorList.length - "),t("span",{staticClass:"hljs-number"},[a._v("1")]),a._v(" ? colorList[index + "),t("span",{staticClass:"hljs-number"},[a._v("1")]),a._v("] : colorList["),t("span",{staticClass:"hljs-number"},[a._v("0")]),a._v("]\n      },\n    },\n  }\n")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("script")]),a._v(">")]),a._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};s.a=l},1890:function(a,s,t){a.exports=t(1891)},1891:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1892),e=t(67),l=e(null,n.a,!1,null,null,null);s.default=l.exports},1892:function(a,s,t){"use strict";var n=function(){var a=this,s=a.$createElement;a._self._c;return a._m(0)},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("h2",{attrs:{id:"API"}},[a._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("参数")]),a._v(" "),t("th",[a._v("说明")]),a._v(" "),t("th",[a._v("类型")]),a._v(" "),t("th",[a._v("默认值")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("icon")]),a._v(" "),t("td",[a._v("设置头像的图标类型，参考 "),t("code",{pre:!0},[a._v("Icon")]),a._v(" 组件")]),a._v(" "),t("td",[a._v("string")]),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("shape")]),a._v(" "),t("td",[a._v("指定头像的形状")]),a._v(" "),t("td",[a._v("Enum{ 'circle', 'square' }")]),a._v(" "),t("td",[t("code",{pre:!0},[a._v("circle")])])]),a._v(" "),t("tr",[t("td",[a._v("size")]),a._v(" "),t("td",[a._v("设置头像的大小")]),a._v(" "),t("td",[a._v("Enum{ 'large', 'small', 'default' }")]),a._v(" "),t("td",[t("code",{pre:!0},[a._v("default")])])]),a._v(" "),t("tr",[t("td",[a._v("src")]),a._v(" "),t("td",[a._v("图片类头像的资源地址")]),a._v(" "),t("td",[a._v("string")]),a._v(" "),t("td",[a._v("-")])])])])])}],l={render:n,staticRenderFns:e};s.a=l},1893:function(a,s,t){a.exports=t(1894)},1894:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1895),e=t(67),l=e(null,n.a,!1,null,null,null);s.default=l.exports},1895:function(a,s,t){"use strict";var n=function(){var a=this,s=a.$createElement;a._self._c;return a._m(0)},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("h2",{attrs:{id:"API"}},[a._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Property")]),a._v(" "),t("th",[a._v("Description")]),a._v(" "),t("th",[a._v("Type")]),a._v(" "),t("th",[a._v("Default")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("icon")]),a._v(" "),t("td",[a._v("the "),t("code",{pre:!0},[a._v("Icon")]),a._v(" type for an icon avatar, see "),t("code",{pre:!0},[a._v("Icon")]),a._v(" Component")]),a._v(" "),t("td",[a._v("string")]),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("shape")]),a._v(" "),t("td",[a._v("the shape of avatar")]),a._v(" "),t("td",[t("code",{pre:!0},[a._v("circle")]),a._v(" | "),t("code",{pre:!0},[a._v("square")])]),a._v(" "),t("td",[t("code",{pre:!0},[a._v("circle")])])]),a._v(" "),t("tr",[t("td",[a._v("size")]),a._v(" "),t("td",[a._v("the size of the avatar")]),a._v(" "),t("td",[t("code",{pre:!0},[a._v("large")]),a._v(" | "),t("code",{pre:!0},[a._v("small")]),a._v(" | "),t("code",{pre:!0},[a._v("default")])]),a._v(" "),t("td",[t("code",{pre:!0},[a._v("default")])])]),a._v(" "),t("tr",[t("td",[a._v("src")]),a._v(" "),t("td",[a._v("the address of the image for an image avatar")]),a._v(" "),t("td",[a._v("string")]),a._v(" "),t("td",[a._v("-")])])])])])}],l={render:n,staticRenderFns:e};s.a=l},584:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(1585),e=t.n(n);for(var l in n)"default"!==l&&function(a){t.d(s,a,function(){return n[a]})}(l);var v=t(67),r=v(e.a,null,!1,null,null,null);s.default=r.exports}});