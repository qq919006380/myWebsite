"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[436],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7245:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],s={title:"React"},c=void 0,i={permalink:"/blog/2021/01/07/react/react",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-01-07-react/react.md",source:"@site/blog/2021-01-07-react/react.md",title:"React",description:"1 jsx",date:"2021-01-07T00:00:00.000Z",formattedDate:"January 7, 2021",tags:[],readingTime:3.07,truncated:!1,authors:[],prevItem:{title:"Js note 2",permalink:"/blog/2021/01/07/js-note2/js-note2"},nextItem:{title:"Command note",permalink:"/blog/2021/01/01/command/command"}},p={authorsImageUrls:[]},u=[{value:"1 jsx",id:"1-jsx",children:[],level:2},{value:"2 jsx\u7684\u4f8b\u5b50",id:"2-jsx\u7684\u4f8b\u5b50",children:[],level:2},{value:"3 react \u6784\u5efa\u7ec4\u4ef6\u7684\u4f8b\u5b50 with bootstrap",id:"3-react-\u6784\u5efa\u7ec4\u4ef6\u7684\u4f8b\u5b50-with-bootstrap",children:[],level:2},{value:"4 react \u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"4-react-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[],level:2},{value:"5 react \u7684 props/state/forms",id:"5-react-\u7684-propsstateforms",children:[],level:2},{value:"6 react \u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",id:"6-react-\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",children:[],level:2},{value:"7 react \u65f6\u949f",id:"7-react-\u65f6\u949f",children:[],level:2},{value:"8 react Form \uff08\u53d7\u63a7\u7ec4\u4ef6\uff09",id:"8-react-form-\u53d7\u63a7\u7ec4\u4ef6",children:[],level:2},{value:"9 \u82e5\u6539\u4e3a\u975e\u53d7\u63a7\u7ec4\u4ef6",id:"9-\u82e5\u6539\u4e3a\u975e\u53d7\u63a7\u7ec4\u4ef6",children:[],level:2}],m={toc:u};function d(e){var n=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-jsx"},"1 jsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"javascript \u7684\u8bed\u6cd5\u6269\u5c55\n\n\u53ef\u4ee5\u4f7f\u7528{} \u5185\u5d4c\u4efb\u4f55\u7684 ** javascript expressions **\n\n\u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6\uff0c\u53ea\u662f\u4e00\u4e2aobject\n")),(0,o.kt)("h2",{id:"2-jsx\u7684\u4f8b\u5b50"},"2 jsx\u7684\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nclass Welcome extends React.Component {\n    \n    render(){\n        const toDoList = ['learn react','learn Redux'];\n        const isLogin= true;\n        return( \n        <div>\n            <h1 className=\"123\">hello react</h1>;\n            <ul>\n            {\n                toDoList.map(item =>\n                    <li>{item}</li>\n                )\n            }\n            </ul>\n\n            {isLogin ? <p>u have login</p> : <p>no</p> }\n        </div>\n        )\n    }\n}\n\nexport default Welcome;\n")),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u5728html\u683c\u5f0f\u91cc\uff0cclass \u53d8\u6210className \uff0cfor \u53d8\u6210\u4e86htmlFor"),(0,o.kt)("h2",{id:"3-react-\u6784\u5efa\u7ec4\u4ef6\u7684\u4f8b\u5b50-with-bootstrap"},"3 react \u6784\u5efa\u7ec4\u4ef6\u7684\u4f8b\u5b50 with bootstrap"),(0,o.kt)("p",null,"\u51fd\u6570\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const NameCard = (props) => {\n    const {name, number, isHuman, tags}=props;\n    return (\n        <div className='alert alert-success'>\n        <h4>{name}</h4>\n        <ul>\n            <li>\u7535\u8bdd:{number}</li>\n            <li>{isHuman ? '\u4eba\u7c7b' : '\u5916\u661f\u4eba'}</li>\n            <p>\n                {tags.map((tag,index)=>(\n                    <span key={index}>{tag}</span>)\n                )}\n            </p>\n        </ul>\n    </div>\n    )\n}\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nclass NameCard extends React.Component {\n    render(){\n        const {name, number, isHuman, tags}=this.props;\n        return(\n            <div className='alert alert-success'>\n                <h4>{name}</h4>\n                <ul>\n                    <li>\u7535\u8bdd:{number}</li>\n                    <li>{isHuman ? '\u4eba\u7c7b' : '\u5916\u661f\u4eba'}</li>\n                    <p>\n                        {tags.map((tag,index)=>(\n                            <span key={index}>{tag}</span>)\n                        )}\n                    </p>\n                </ul>\n            </div>\n        )\n        \n        \n    }\n}\nexport default NameCard;\n")),(0,o.kt)("h2",{id:"4-react-\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"4 react \u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5173\u95ed\u65b9\u6cd5\uff1a<LikesButton />\n")),(0,o.kt)("h2",{id:"5-react-\u7684-propsstateforms"},"5 react \u7684 props/state/forms"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u7ec4\u4ef6\u5185\u90e8\u7684\u6570\u636e\u3002\u53ef\u4ee5\u52a8\u6001\u6539\u53d8\n\nthis.setState()\u662f\u66f4\u65b0state\u7684\u552f\u4e00\u9014\u5f84\n\n\u6bd4\u5982\u4ee5\u4e0b\u7684\u70b9\u8d5e\u6309\u94ae\u7684\u4f8b\u5b50\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    class LikesButton extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state={\n            likes:0 \n        };\n    }\n    increaseLikes() {\n        alert(\'Increasing\')\n        this.setState({ \n            likes: ++this.state.likes\n        })\n    }\n    render() {\n        return (\n            <div className="likes-button-component">\n                <button type="button" className="btn btn-outline-primary btn-lg"\n                // onClick={this.increaseLikes}\n                onClick={() => { this.increaseLikes()} }\n                >\n                \ud83d\udc4d{this.state.likes}\n                </button>\n            </div>\n        )\n    }\n}\nexport default LikesButton;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," \u6ce8\u610f\u4ee5\u4e0a\u4ee3\u7801\u4e2d\u7684onClick \u7684\u7bad\u5934\u51fd\u6570\u7684\u4f7f\u7528\u65b9\u6cd5 ")),(0,o.kt)("h2",{id:"6-react-\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"},"6 react \u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u7ec4\u4ef6\u521d\u59cb\u5316 \n\n\u7ec4\u4ef6\u66f4\u65b0\n\n\u7ec4\u4ef6\u5378\u8f7d\n\n\u521b\u5efa-\u300b\u66f4\u65b0-\u3009\u5378\u8f7d\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"react\u7684\u751f\u547d\u5468\u671f",src:t(6209).Z})),(0,o.kt)("h2",{id:"7-react-\u65f6\u949f"},"7 react \u65f6\u949f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7684\u6848\u4f8b\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nclass DigitalCloud extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state={\n            date: new Date()\n        };\n    }\n    componentDidMount() {\n        this.time=setInterval(() =>{ \n            this.setState({\n                date:new Date()\n            })\n        },1000)\n    }\n    componentDidUpdate(currentProps,currentState){\n        console.log(currentState)\n    }\n    componentWillUnmount(){\n        clearInterval(this.timer)\n    }\n    render() {\n        return(\n            <div className=\"digital-Clock-component jumbotron\">\n                <h1>{this.state.date.toLocaleTimeString()}</h1>\n            </div>\n        )\n    }\n}\nexport default DigitalCloud;\n")),(0,o.kt)("h2",{id:"8-react-form-\u53d7\u63a7\u7ec4\u4ef6"},"8 react Form \uff08\u53d7\u63a7\u7ec4\u4ef6\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u53ef\u53d8\u72b6\u6001\u901a\u8fc7setState\u6539\u53d8 \u5e76\u4e14\u901a\u8fc7\u65b9\u6cd5\u4f7freact\u6210\u4e3a\u8868\u5355\u72b6\u6001\u6765\u6e90\uff0c\u4e8c\u8005\u5408\u4e00\nreact\u8d1f\u8d23\u6e32\u67d3\u8868\u5355\u7ec4\u4ef6\uff0c\n\n\u53ea\u6709react\u63a7\u5236\u7684\u8f93\u5165\u5143\u7d20\u79f0\u4e3a\ncontrolled components\n\u6bd4\u5982\u4e00\u4e2a\u7559\u8a00\u7684\u529f\u80fd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from \'react\'\nclass CommentBox extends React.Component {\n    constructor(props) {\n        super(props)\n        this.state={\n            value:\'\'\n        }\n        // this.handleChange=this.handleChange.bind(this)\n    }\n    handleChange(event){\n        this.setState({\n            value: event.target.value\n        })\n    }\n    handleSubmit(event){\n        alert(this.state.value)\n        event.preventDefault()\n    }\n    render() {\n        return (\n            <form className="p-5" onSubmit={(event)=>{this.handleSubmit(event)}} >\n                <div className="form-group">\n                    <label>\u7559\u8a00\u5185\u5bb9</label>\n                    <input\n                    type="text"\n                    className="form-control"\n                    onChange={(event)=>{this.handleChange(event)}}\n                    //  onChange={this.handleChange}\n                    value={this.state.value}>\n\n                    </input>\n                </div>\n                <button type="submit" className="btn btn-primary">submit</button>\n            </form>\n        )\n    }\n}\nexport default CommentBox;\n')),(0,o.kt)("h2",{id:"9-\u82e5\u6539\u4e3a\u975e\u53d7\u63a7\u7ec4\u4ef6"},"9 \u82e5\u6539\u4e3a\u975e\u53d7\u63a7\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u83b7\u53d6input\u8282\u70b9\u7684\u65f6\u5019\u5220\u6389onChange \u6dfb\u52a0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<input ref={(textInput)=>{this.textInput=textInput}};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"handleSubmit()\u91cc\uff0cthis.state.value\u6539\u4e3athis.textInput.value\n")))}d.isMDXComponent=!0},6209:function(e,n,t){n.Z=t.p+"assets/images/1-9db4167b281c4e9d06f873c4fa161ef9.png"}}]);