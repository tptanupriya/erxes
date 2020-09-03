(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(d,l(l({ref:t},b),{},{components:a})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(135)),i={id:"digitalocean",title:"DigitalOcean Marketplace"},l={unversionedId:"installation/digitalocean",id:"installation/digitalocean",isDocsHomePage:!1,title:"DigitalOcean Marketplace",description:"Launch a Droplet using erxes in the DigitalOcean Marketplace.",source:"@site/docs/installation/digitalocean.md",permalink:"/installation/digitalocean",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/digitalocean.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1597717005,sidebar:"docs",previous:{title:"AWS Marketplace",permalink:"/installation/aws"},next:{title:"Docker",permalink:"/installation/docker"}},c=[{value:"Configure your DNS Records",id:"configure-your-dns-records",children:[]},{value:"Connect to your droplet",id:"connect-to-your-droplet",children:[]},{value:"Configure NGINX",id:"configure-nginx",children:[]},{value:"Install Let&#39;s Encrypt using Certbot",id:"install-lets-encrypt-using-certbot",children:[]},{value:"Configure <code>erxes</code>",id:"configure-erxes",children:[{value:"Configure PM2 <code>ecosystem.config.js</code>",id:"configure-pm2-ecosystemconfigjs",children:[]},{value:"Configure frontend environment variables",id:"configure-frontend-environment-variables",children:[]},{value:"export MongoDB URL",id:"export-mongodb-url",children:[]},{value:"Initialize and Load permissions for erxes",id:"initialize-and-load-permissions-for-erxes",children:[]},{value:"Congratulations, time to log in",id:"congratulations-time-to-log-in",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Launch a Droplet using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.digitalocean.com/apps/erxes"}),"erxes")," in the DigitalOcean Marketplace."),Object(o.b)("h2",{id:"configure-your-dns-records"},"Configure your DNS Records"),Object(o.b)("p",null,"Your new Droplet server will have an ",Object(o.b)("strong",{parentName:"p"},"ip address"),". You will need to point your domain name to your new server."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are using a ",Object(o.b)("strong",{parentName:"li"},"subdomain"),", you will need to follow the instructions of updating the `A Records' of the hosting company for your website."),Object(o.b)("li",{parentName:"ul"},"If you are NOT using a ",Object(o.b)("strong",{parentName:"li"},"subdomain"),", then you will need to follow the instructions of your domain name registrar.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example with a domain called, example.com")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your domain name is ",Object(o.b)("strong",{parentName:"p"},"example.com"),", and the ",Object(o.b)("strong",{parentName:"p"},"ip address")," assigned to your server is ",Object(o.b)("strong",{parentName:"p"},"44.123.32.12"),", then you will have two ",Object(o.b)("inlineCode",{parentName:"p"},"A records")," that look like this:"),Object(o.b)("table",{parentName:"div"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.example.com"}),"www.example.com")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"points to 44.123.32.12")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"example.com"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"points to 44.123.32.12")))))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example with a subdomain called, erxes.example.com")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'You first need to create a subdomain. For example, "erxes.example.com". Then you need to edit the ',Object(o.b)("strong",{parentName:"p"},"DNS"),"."),Object(o.b)("p",{parentName:"div"},"If your domain name is ",Object(o.b)("strong",{parentName:"p"},"erxes.example.com"),", and the ",Object(o.b)("strong",{parentName:"p"},"ip address")," assigned to your server is ",Object(o.b)("strong",{parentName:"p"},"44.123.32.12"),", then you will have a two ",Object(o.b)("inlineCode",{parentName:"p"},"A records")," that look like this:"),Object(o.b)("table",{parentName:"div"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"erxes.example.com"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"points to 44.123.32.12")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.erxes.example.com"}),"www.erxes.example.com")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"points to 44.123.32.12")))),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Note:"),' You do not need to create a subdomain called "erxes.example.com", you can use another name of your choice such as "admin.example.com".'))),Object(o.b)("h2",{id:"connect-to-your-droplet"},"Connect to your droplet"),Object(o.b)("p",null,"Connect to your droplet via ssh."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ssh root@YOUR_DROPLET_PUBLIC_IP\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"YOUR_DROPLET_PUBLIC_IP")," is your droplet public IP address")),Object(o.b)("h2",{id:"configure-nginx"},"Configure NGINX"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to replace the ",Object(o.b)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual ",Object(o.b)("inlineCode",{parentName:"li"},"domain name")," in the nginx config file ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/nginx/sites-available/default"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"nano /etc/nginx/sites-available/default\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After replacing YOUR_DOMAIN_COM with your actual domain name. Save with ctrl + x and then y to accept the changes.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test the ",Object(o.b)("strong",{parentName:"p"},"NGINX")," configuration to make sure you don't have any errors"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"nginx -t\n")),Object(o.b)("p",null,"You should see the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reload nginx service")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"systemctl reload nginx\n")),Object(o.b)("h2",{id:"install-lets-encrypt-using-certbot"},"Install Let's Encrypt using Certbot"),Object(o.b)("p",null,"Execute Certbot. You will asked several questions, you can answer as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Enter your email address"),Object(o.b)("li",{parentName:"ul"},"Agree with the ",Object(o.b)("strong",{parentName:"li"},"Terms of Service")),Object(o.b)("li",{parentName:"ul"},"Answer ",Object(o.b)("inlineCode",{parentName:"li"},"Yes")," or ",Object(o.b)("inlineCode",{parentName:"li"},"No"),", if you want to share your email address with the Electronic Frontier Foundation"),Object(o.b)("li",{parentName:"ul"},"Select the corresponding number associated with your domain name, usually ",Object(o.b)("inlineCode",{parentName:"li"},"1")),Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"2")," to redirect all your traffic to a secure ",Object(o.b)("strong",{parentName:"li"},"HTTPS"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"certbot --nginx\n")),Object(o.b)("h2",{id:"configure-erxes"},"Configure ",Object(o.b)("inlineCode",{parentName:"h2"},"erxes")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the following to change the password for ",Object(o.b)("inlineCode",{parentName:"li"},"erxes")," and switch to user ",Object(o.b)("inlineCode",{parentName:"li"},"erxes"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"passwd erxes\nsu erxes\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The rest of the steps are run as ",Object(o.b)("inlineCode",{parentName:"li"},"erxes")," user.")),Object(o.b)("h3",{id:"configure-pm2-ecosystemconfigjs"},"Configure PM2 ",Object(o.b)("inlineCode",{parentName:"h3"},"ecosystem.config.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the following command to replace ",Object(o.b)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name. Please use ",Object(o.b)("inlineCode",{parentName:"li"},"your domain")," for ",Object(o.b)("inlineCode",{parentName:"li"},"your.domain.com"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io\nsed -i 's/YOUR_DOMAIN_COM/your.domain.com/g' ecosystem.config.js\n")),Object(o.b)("h3",{id:"configure-frontend-environment-variables"},"Configure frontend environment variables"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the ",Object(o.b)("inlineCode",{parentName:"li"},"~/erxes.io/erxes/js/env.js")," file in the nano editor.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"nano ~/erxes.io/erxes/js/env.js\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy the following ",Object(o.b)("strong",{parentName:"li"},"environment variables")," in between the ",Object(o.b)("strong",{parentName:"li"},"{ }"),", and replace ",Object(o.b)("strong",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'NODE_ENV: "production",\nREACT_APP_API_URL: "https://YOUR_DOMAIN_COM/api",\nREACT_APP_API_SUBSCRIPTION_URL: "wss://YOUR_DOMAIN_COM/api/subscriptions",\nREACT_APP_CDN_HOST: "https://YOUR_DOMAIN_COM/widgets"\n')),Object(o.b)("p",null,"It should look like this, but ",Object(o.b)("strong",{parentName:"p"},"with your actual domain name"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'window.env = {\n    NODE_ENV: "production",\n    REACT_APP_API_URL: "https://erxes.example.com/api",\n    REACT_APP_API_SUBSCRIPTION_URL: "wss://erxes.example.com/api/subscriptions",\n    REACT_APP_CDN_HOST: "https://erxes.example.com/widgets"\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"save the file with ",Object(o.b)("inlineCode",{parentName:"li"},"ctrl + x")," and then ",Object(o.b)("inlineCode",{parentName:"li"},"y")," to accept all changes.")),Object(o.b)("p",null,"You are now ready to ",Object(o.b)("strong",{parentName:"p"},"initialize")," and ",Object(o.b)("strong",{parentName:"p"},"load the permissions")," in ",Object(o.b)("strong",{parentName:"p"},"erxes"),"."),Object(o.b)("h3",{id:"export-mongodb-url"},"export MongoDB URL"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io\nnano ecosystem.config.js\n")),Object(o.b)("p",null,'Locate the "MONGO_URL": "mongodb://erxes:82e3e42ef31e51d51687b366118200e2@localhost/erxes?authSource=admin&replicaSet=rs0", under the erxes-api.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Copy the MONGO_URL and exit the nano editor with ctrl + x.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Now you will need to export and set the variable MONGO_URL, with the copied URL. See below:"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'# example\n# export MONGO_URL="mongodb://erxes:92c54fa1f0658xxxxc2d9ce618b008b4@localhost/erxes?authSource=admin&replicaSet=rs0"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use your copied MONGO_URL below:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'export MONGO_URL="YOUR_COPIED_MONGO_URL_HERE"\n')),Object(o.b)("h3",{id:"initialize-and-load-permissions-for-erxes"},"Initialize and Load permissions for erxes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"initialize Erxes and generate ",Object(o.b)("strong",{parentName:"li"},"login password"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"source ~/.nvm/nvm.sh\nnvm use default\ncd ~/erxes.io/erxes-api/dist\nnode commands/initProject\n")),Object(o.b)("p",null,"You should have a generated ",Object(o.b)("strong",{parentName:"p"},"password"),". The output will be similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"Your new password: HcEjfBMxws\n\n# note this down\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run this final command to finish the installation of ",Object(o.b)("strong",{parentName:"li"},"erxes"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io/erxes-api/dist\nnode commands/loadPermissionData\n\ncd ~/erxes.io\npm2 restart ecosystem.config.js\n")),Object(o.b)("h3",{id:"congratulations-time-to-log-in"},"Congratulations, time to log in"),Object(o.b)("p",null,"You may now visit your domain, and log in."),Object(o.b)("p",null,"The username is ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"mailto:admin@erxes.io"}),"admin@erxes.io")),", and the password is the password generated above."))}s.isMDXComponent=!0}}]);