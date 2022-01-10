"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{8665:function(e,a,t){t.d(a,{Z:function(){return E}});var l=t(3366),r=t(7294),n=t(6010),i=t(7019),s=t(9960),m="sidebar_q+wC",o="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",d="sidebarItem_cjdF",g="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs",p=t(5999);function v(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},a.title),r.createElement("ul",{className:c},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var b=["sidebar","toc","children"];var E=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,l.Z)(e,b),o=a&&a.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:a})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&r.createElement("div",{className:"col col--2"},t))))}},2754:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var l=t(7294),r=t(2263),n=t(8665),i=t(2544),s=t(9960),m=t(5999);var o=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.Z,{className:"pagination-nav__link",to:t},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(s.Z,{className:"pagination-nav__link",to:r},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(3616);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,r.Z)().siteConfig.title,d=a.blogDescription,g=a.blogTitle,u="/"===a.permalink?m:g;return l.createElement(n.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return l.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},l.createElement(a,null))})),l.createElement(o,{metadata:a}))}},6753:function(e,a,t){t.d(a,{Z:function(){return g}});var l=t(7294),r=t(5999),n=t(7462),i=t(3366),s=t(6010),m="iconEdit_mS5F",o=["className"];var c=function(e){var a=e.className,t=(0,i.Z)(e,o);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,a),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=t(3616);function g(e){var a=e.editUrl;return l.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},l.createElement(c,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2544:function(e,a,t){t.d(a,{Z:function(){return u}});var l=t(7294),r=t(6010),n=t(3905),i=t(5999),s=t(9960),m=t(3616),o=t(1914),c=t(1217),d=t(6753),g={blogPostData:"blogPostData_A2Le",blogPostDetailsFull:"blogPostDetailsFull_2lop"};var u=function(e){var a,t,u,p=(t=(0,m.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),v=e.children,b=e.frontMatter,E=e.metadata,h=e.truncated,_=e.isBlogPostPage,f=void 0!==_&&_,N=E.date,Z=E.formattedDate,k=E.permalink,T=E.tags,w=E.readingTime,P=E.title,L=E.editUrl,I=b.author,M=b.image,y=b.keywords,x=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,C=b.author_image_url||b.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:y,image:M}),l.createElement("article",{className:f?void 0:"margin-bottom--xl"},(u=f?"h1":"h2",l.createElement("header",null,l.createElement(u,{className:g.blogPostTitle},f?P:l.createElement(s.Z,{to:k},P)),l.createElement("div",{className:(0,r.Z)(g.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:N},Z),w&&l.createElement(l.Fragment,null," \xb7 ",p(w))),l.createElement("div",{className:"avatar margin-vert--md"},C&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:x},l.createElement("img",{src:C,alt:I})),l.createElement("div",{className:"avatar__intro"},I&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:x},I)),l.createElement("small",{className:"avatar__subtitle"},A)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:o.Z},v)),(T.length>0||h)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[g.blogPostDetailsFull]=f,a))},T.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),T.map((function(e){var a=e.label,t=e.permalink;return l.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:L})),!f&&h&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:E.permalink,"aria-label":"Read more about "+P},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);