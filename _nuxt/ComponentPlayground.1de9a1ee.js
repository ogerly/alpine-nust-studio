import{u as m}from"./asyncData.c0dee60c.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.ed967a30.js";import f from"./Ellipsis.730a3282.js";import _ from"./ComponentPlaygroundData.144666ee.js";import"./TabsHeader.2fb3ef5e.js";import"./ComponentPlaygroundProps.d2d12612.js";import"./ProseH4.b8d4b015.js";import"./ProseCodeInline.ad2b89b6.js";import"./Badge.411729e4.js";import"./MDCSlot.f03aeddf.js";import"./slot.1e41509c.js";import"./ProseP.e1f3cf32.js";import"./index.087d5f27.js";import"./ComponentPlaygroundSlots.vue.e3d20870.js";import"./ComponentPlaygroundTokens.vue.de8612e5.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-c6ef11bc"]]);export{V as default};