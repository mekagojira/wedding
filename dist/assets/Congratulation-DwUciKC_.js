import{j as e}from"./index-Cu2D-3n0.js";function i(){const c=[{bank:"VP Bank",name:"NGUYEN THUY LINH",num:"18042014",img:"/img/qr-linh.jpg",text:"Đến cô dâu",bg:"linh-bg-1.jpg"},{bank:"Techcombank",name:"NGUYEN DUC MANH",num:"9868281198",img:"/img/qr-manh.jpeg",text:"Đến chú rể",bg:"manh-bg-1.jpg"}],n=c.map(s=>e.jsx("div",{style:{backgroundImage:`url(img/${s.bg})`,backgroundPosition:"center center",backgroundSize:"cover"},className:"flex flex-col justify-center items-center h-screen px-4 container text-theme-bg",children:e.jsxs("div",{className:"w-full flex flex-col items-center justify-center pt-4 my-8",children:[e.jsx("div",{className:"pt-4"}),e.jsx("img",{src:s.img,className:"w-32 shadow",alt:""}),e.jsx("div",{className:"pt-8"}),e.jsxs("div",{className:"pt-1",children:["Ngân hàng: ",s.bank]}),e.jsxs("div",{className:"pt-1",children:["Tên tài khoản: ",s.name]}),e.jsxs("div",{className:"pt-1",children:["Số tài khoản: ",s.num]})]})},s.num)),l=c.map(s=>e.jsx("div",{className:"px-4 w-full",children:e.jsx("div",{className:"w-full h-screen",style:{backgroundImage:`url(img/${s.bg})`,backgroundPosition:"center center",backgroundSize:"cover"},children:e.jsxs("div",{className:"flex flex-col justify-center items-center h-screen px-4 container text-theme-bg",children:[e.jsx("div",{className:"pt-40"}),e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"w-full flex flex-col items-center justify-center my-8",children:[e.jsx("div",{className:"pt-4"}),e.jsx("img",{src:s.img,className:"w-2/3 md:w-96 shadow",alt:""}),e.jsx("div",{className:"pt-8"}),e.jsxs("div",{className:"pt-1",children:["Ngân hàng: ",s.bank]}),e.jsxs("div",{className:"pt-1",children:["Tên tài khoản: ",s.name]}),e.jsxs("div",{className:"pt-1",children:["Số tài khoản: ",s.num]})]})})]})})},s.num));return e.jsxs("div",{className:"pb-8",children:[e.jsx("div",{className:"hidden md:block",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex flex-col items-center pb-8",children:e.jsx("div",{className:"font-viao text-2xl text-center uppercase shadow-xl font-black bg-theme-main text-theme-bg px-3 py-2",children:"Hộp mừng cưới"})}),e.jsx("div",{className:"flex space-x-8 pb-8",children:n})]})}),e.jsxs("div",{className:"block md:hidden",children:[e.jsx("div",{className:"flex flex-col items-center pb-8",children:e.jsx("div",{className:"font-viao text-2xl text-center uppercase shadow-xl font-black bg-theme-main text-theme-bg px-3 py-2",children:"Hộp mừng cưới"})}),e.jsx("div",{className:"flex flex-col items-center space-y-8",children:l})]})]})}export{i as default};
