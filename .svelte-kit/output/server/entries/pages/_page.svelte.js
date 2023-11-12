import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as prefersReducedMotion, S as Seo } from "../../chunks/Contact.svelte_svelte_type_style_lang.js";
import { w as windowHeight } from "../../chunks/global.js";
const css$4 = {
  code: "section.svelte-kqtysv{width:100%;margin:auto;display:flex;flex-direction:column;justify-content:center;place-items:center;overflow:hidden;position:relative;transition:height 100ms ease}.header-container.svelte-kqtysv{line-height:0.85;user-select:none}.overline.svelte-kqtysv{font-weight:200;text-align:left;margin-bottom:0.75rem;font-style:italic;font-size:2.75rem;color:#000}.title.svelte-kqtysv{margin-bottom:1.5rem}.lucas.svelte-kqtysv,.gover.svelte-kqtysv{display:block;font-weight:600;letter-spacing:-0.05rem;text-transform:uppercase;overflow:hidden}@media screen and (-webkit-min-device-pixel-ratio: 0){.gover.svelte-kqtysv{color:#555}}.lucas *{transform-origin:center bottom;transform-style:preserve-3d;transition:opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),\n			transform 0s cubic-bezier(0.215, 0.61, 0.355, 1)}.gover *{transform-origin:center bottom;transform-style:preserve-3d;transition:opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),\n			transform 0s cubic-bezier(0.215, 0.61, 0.355, 1)}.lucas.svelte-kqtysv{font-size:18vw;text-align:center}.gover.svelte-kqtysv{font-size:7.5vw;text-align:center}@media screen and (max-width: 768px){.overline.svelte-kqtysv{font-size:2rem;margin-bottom:0.75rem}}@media screen and (max-width: 768px){section.svelte-kqtysv{place-items:center}.overline.svelte-kqtysv{font-size:8vw}}@media screen and (max-width: 768px){.gover.svelte-kqtysv{-webkit-text-stroke:1px rgba(0,0,0, 1)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefersReducedMotion;
  let $windowHeight, $$unsubscribe_windowHeight;
  $$unsubscribe_prefersReducedMotion = subscribe(prefersReducedMotion, (value) => value);
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value) => $windowHeight = value);
  $$result.css.add(css$4);
  $$unsubscribe_prefersReducedMotion();
  $$unsubscribe_windowHeight();
  return `<section id="header" style="${"min-height: " + escape($windowHeight ? `${$windowHeight * 1.01}px` : "101vh", true) + "; perspective: 100vw;"}" class="svelte-kqtysv"><div class="header-container svelte-kqtysv"><h1 class="${["overline begin-invisible svelte-kqtysv", ""].join(" ").trim()}" data-svelte-h="svelte-14l2ziy">Hi, I&#39;m</h1> <div class="title svelte-kqtysv"><h1 class="${[
    "lucas begin-invisible gradient-accented svelte-kqtysv",
    ""
  ].join(" ").trim()}" data-svelte-h="svelte-6xqcj0">jeremy</h1> <h1 class="${[
    "gover begin-invisible gradient-accented svelte-kqtysv",
    ""
  ].join(" ").trim()}" data-svelte-h="svelte-2mlpmm">From Accounting</h1></div></div> </section>`;
});
const css$3 = {
  code: ".footer-wrapper.svelte-1t1vm1b{margin-top:80px}.get-in-touch.svelte-1t1vm1b{display:relative;color:white;font-size:24px;letter-spacing:3px;margin-top:10px;margin-bottom:10px}.created-by.svelte-1t1vm1b{display:relative;color:white;font-size:24px;letter-spacing:3px;padding-left:20px;margin:auto;margin-top:10px;margin-bottom:10px}.col.svelte-1t1vm1b{width:50%;height:100%;text-align:center}.Footer.svelte-1t1vm1b{position:absolute;left:0;bottom:0;width:100%;padding:20px;background:linear-gradient(to left, rgba(var(--primary-color-rgb), 1) -200%, #d81159 125%)}@media screen and (min-width: 601px){.row.svelte-1t1vm1b{display:flex}}@media screen and (max-width: 768px){.get-in-touch.svelte-1t1vm1b{font-size:18pt}.created-by.svelte-1t1vm1b{font-size:18pt}}@media screen and (max-width: 600px){.row.svelte-1t1vm1b{display:relative}.col.svelte-1t1vm1b{display:inline;width:100%}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="footer-wrapper svelte-1t1vm1b" data-svelte-h="svelte-13eqgy"><div class="push"></div> <div class="Footer row svelte-1t1vm1b"><div class="col svelte-1t1vm1b"><div class="created-by svelte-1t1vm1b">Created by <a target="_blank" rel="noopener noreferrer" href="https://sheets.google.com">Jeremy From Accounting</a> 2023</div></div> <div class="col svelte-1t1vm1b"><div class="get-in-touch svelte-1t1vm1b">Get in Touch: <a href="mailto:lucasgover@gmail.com">jeremy@αΩ.com</a></div></div></div> </div>`;
});
const css$2 = {
  code: "ul.svelte-15a9gje{margin:20px}li.svelte-15a9gje{color:black}p.svelte-15a9gje,strong.svelte-15a9gje{color:black;padding:10px;padding-bottom:2px}strong.svelte-15a9gje{font-size:24px}h2.svelte-15a9gje{color:black;padding-top:30px}em.svelte-15a9gje{padding:0px;padding-left:10px;color:black}strong.svelte-15a9gje{font-weight:600}.resume-title.svelte-15a9gje{color:black;font-family:'Times New Roman', Times, serif;font-weight:600;font-style:italic;letter-spacing:5px;text-align:center;font-size:72px}.resume.svelte-15a9gje{font-family:Arial, sans-serif;margin:20px;color:black;margin:15vw;margin-top:5vw;margin-bottom:5vw}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="resume svelte-15a9gje" data-svelte-h="svelte-1y4retu"><h1 class="resume-title svelte-15a9gje">Resume</h1> <p style="padding: 30px;" class="svelte-15a9gje">Jeremy loves numbers and his dog, so you know he&#39;s good people.  Jeremy is a third-generation accountant, who graduated in 1998 with his Bachelor’s in Accounting and finance from DePaul University, and has been practicing accounting ever since.</p> <h2 class="svelte-15a9gje">Education:</h2> <p class="svelte-15a9gje">Bachelor of Science in Accounting and Finance (Double Major)</p> <p class="svelte-15a9gje">DePaul University, Chicago, IL</p> <p class="svelte-15a9gje">Graduated: May 1998</p> <h2 class="svelte-15a9gje">Professional Experience:</h2> <p class="svelte-15a9gje"><strong class="svelte-15a9gje">Alpha Omega (???, CO)</strong></p> <p class="svelte-15a9gje"><em class="svelte-15a9gje">Senior Accountant (2007 - Present)</em></p> <ul class="svelte-15a9gje"><li class="svelte-15a9gje">Successfully managed financial data, maintained accurate ledgers, and prepared financial
			statements for the organization.</li> <li class="svelte-15a9gje">Conducted in-depth financial analysis to identify cost-saving opportunities and improve
			efficiency.</li> <li class="svelte-15a9gje">Collaborated with internal departments to ensure compliance with financial regulations and tax
			codes.</li> <li class="svelte-15a9gje">Played a crucial role in annual audits, consistently receiving positive feedback from external
			auditors.</li> <li class="svelte-15a9gje">Trained and mentored junior accountants in accounting procedures and best practices.</li> <li class="svelte-15a9gje">Also, some <a href="./notes" style="text-decoration: underline;">other stuff.</a></li></ul> <p class="svelte-15a9gje"><strong class="svelte-15a9gje">Corporate Oil (Chicago, IL)</strong></p> <p class="svelte-15a9gje"><em class="svelte-15a9gje">Junior Accountant (1998 - 2007)</em></p> <ul class="svelte-15a9gje"><li class="svelte-15a9gje">Successfully managed financial data, maintained accurate ledgers, and prepared financial
			statements for the organization.</li> <li class="svelte-15a9gje">Conducted in-depth financial analysis to identify cost-saving opportunities and improve
			efficiency.</li> <li class="svelte-15a9gje">Collaborated with internal departments to ensure compliance with financial regulations and tax
			codes.</li> <li class="svelte-15a9gje">Played a crucial role in annual audits, consistently receiving positive feedback from external
			auditors.</li></ul> <h2 class="svelte-15a9gje">Skills:</h2> <ul class="svelte-15a9gje"><li class="svelte-15a9gje">Financial Analysis</li> <li class="svelte-15a9gje">Budgeting and Forecasting</li> <li class="svelte-15a9gje">Taxation</li> <li class="svelte-15a9gje">Financial Reporting</li> <li class="svelte-15a9gje">Data Analysis</li> <li class="svelte-15a9gje">Auditing</li> <li class="svelte-15a9gje">MS Excel (Advanced)</li> <li class="svelte-15a9gje">Accounting Software (e.g., QuickBooks)</li> <li class="svelte-15a9gje">Attention to Detail</li> <li class="svelte-15a9gje">Time Management</li></ul> <h2 class="svelte-15a9gje">Accomplishments:</h2> <ul class="svelte-15a9gje"><li class="svelte-15a9gje">Implemented a streamlined financial reporting system, reducing report preparation time by 30%.</li> <li class="svelte-15a9gje">Recovered significant discrepancies during a complex tax audit, saving the company $1 million
			in potential fines.</li> <li class="svelte-15a9gje">Consistently met or exceeded project deadlines, ensuring the company&#39;s financial stability.</li> <li class="svelte-15a9gje">Received the &quot;Accountant of the Year&quot; award for dedication and excellence in accounting
			services.</li></ul> </div>`;
});
const css$1 = {
  code: ".info.svelte-1ouosq6{font-size:3vw}.right.svelte-1ouosq6{float:right;display:inline}.left.svelte-1ouosq6{float:left;display:inline}.contact-info.svelte-1ouosq6{width:fit-content;display:inline-block;padding:7.5vw;height:fit-content;border:#fff dashed 3px;border-radius:20px}.contact.svelte-1ouosq6{width:100%;background-color:#000;padding:5vw;display:inline-block;box-shadow:0 0 10px 10px rgba(0,0,0,0.2)}.pfp-container.svelte-1ouosq6{width:30vw;height:30vw;border-radius:15vw;overflow:hidden;background-size:30vw;position:relative;transform-style:preserve-3d;z-index:2;display:inline-block}.shadow.svelte-1ouosq6{padding:1rem;position:relative;width:fit-content;display:inline-block}.shadow.svelte-1ouosq6::after{content:'';position:absolute;inset:2vw;background:linear-gradient(to bottom right, rgb(239, 94, 255), rgb(106, 203, 255));filter:blur(2.5em);z-index:1;border-radius:15vw;display:inline-block}@media(max-width: 576px){.pfp-container.svelte-1ouosq6{width:25vw;height:25vw}}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="contact svelte-1ouosq6" data-svelte-h="svelte-1sndew5"><div class="left svelte-1ouosq6"><div class="box"><div class="shadow svelte-1ouosq6"><div class="pfp-container svelte-1ouosq6"><img class="jeremy-pfp" src="https://www.bourkeaccounting.com/files/JEREMY-e1646928808914.jpg" style="max-width: 105%;" alt="jeremy picture"></div></div></div></div> <div class="right svelte-1ouosq6"><div class="contact-info svelte-1ouosq6"><ul><li class="info svelte-1ouosq6">123 Boring Street</li> <li class="info svelte-1ouosq6">Denver, CO 80202</li> <li class="info svelte-1ouosq6">Phone: (773) 123-4567</li> <li class="info svelte-1ouosq6">Email: jeremy@αΩ.com</li></ul></div></div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.white-gradient.svelte-1cgs8q{background:linear-gradient(\n			to top right,\n			rgb(255,255,255,0),\n			rgba(255,255,255,1),\n			rgba(255,255,255,0)\n		)}.spreadsheet-pattern.svelte-1cgs8q{background-image:url("/Users/lucasgover/Jeremy-Website/src/routes/spreadsheet.svg");height:fit-content}.header-blue-pink-gradient.svelte-1cgs8q{background:linear-gradient(\n			to top right,\n			rgb(249, 196, 255),\n			rgba(0,0,0,0),\n			rgb(173, 225, 253)\n		);width:100%;height:fit-content;box-shadow:0 0 20px 20px rgba(0,0,0,0.1)}main.svelte-1cgs8q{display:grid;width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;z-index:100;position:relative}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` ${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})} <main id="home" class="svelte-1cgs8q"><div class="header-blue-pink-gradient svelte-1cgs8q"><div class="spreadsheet-pattern svelte-1cgs8q"><div class="white-gradient svelte-1cgs8q">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div></div></div> ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  </main>`;
});
export {
  Page as default
};
