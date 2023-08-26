import{j as C}from"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const s=({label:l,size:y,allcaps:b,fontColor:f,color:g})=>C.jsx("span",{className:`${y} ${g}`,style:{color:f},children:b?l.toUpperCase():l.toLowerCase()});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"texto displayed",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allcaps:{defaultValue:null,description:"",name:"allcaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const S={title:"UI/labels/Mylabel",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic label",allcaps:!0}},a={args:{label:"Secondary label",allcaps:!0}},r={args:{label:"Custom colors",allcaps:!0}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Basic label',
    allcaps: true || false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    allcaps: true || false
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Custom colors',
    allcaps: true || false
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const h=["Basic","Secondary","CustomColors"];export{e as Basic,r as CustomColors,a as Secondary,h as __namedExportsOrder,S as default};
//# sourceMappingURL=MiLabel.stories-0d2b3637.js.map
