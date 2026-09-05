const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/12_g-aSPwNdqo5uyUnqlG7Fs-xY27y37s/export?format=csv&gid=949877154';
const PAGE_SIZE = 12;

const translations = {
  pt: {
    skip:'Pular para o conteúdo',menu:'Abrir menu','nav.home':'Início','nav.about':'Sobre','nav.experience':'Experiência','nav.work':'Trabalhos','nav.education':'Formação','nav.contact':'Contato','cta.contact':'Fale comigo','hero.eyebrow':'Edição • Audiovisual • Tecnologia','hero.title':'Histórias ganham <em>ritmo, forma</em> e impacto.','hero.lead':'Editor de vídeo sênior, cineasta, publicitário e desenvolvedor em formação. Transformo ideias em narrativas visuais que conectam, engajam e deixam marca.','cta.work':'Ver trabalhos','cta.about':'Sobre mim','metric.years':'anos de experiência','metric.formats':'TV • Documentários • Promos','metric.clients':'Projetos para marcas, emissoras e agências','metric.drt':'DRT ativo','metric.role':'Editor de vídeo','about.eyebrow':'Sobre mim','about.title':'Narrativas que conectam.<br><em>Imagens que permanecem.</em>','about.copy':'Com mais de 16 anos de experiência, ajudo marcas, agências, produtoras e emissoras a transformar ideias em filmes, campanhas e conteúdos que geram valor real.','about.editing':'Edição','about.editingText':'Ritmo, emoção, clareza e propósito em cada história.','about.av':'Audiovisual','about.avText':'Criação, roteiro, direção e produção com olhar cinematográfico.','about.tech':'Tecnologia','about.techText':'Soluções digitais que ampliam o fluxo de trabalho e a entrega final.','experience.eyebrow':'Trajetória profissional','experience.title':'16+ anos transformando<br><em>histórias em experiências.</em>','experience.more':'Ver toda a trajetória','experience.less':'Recolher trajetória','work.eyebrow':'Portfólio','work.title':'Trabalhos em destaque','work.av':'Audiovisual','work.programming':'Programação','filters.advanced':'Filtros avançados','filters.activity':'Atividade','filters.client':'Cliente','filters.software':'Software','filters.clear':'Limpar filtros','filters.all':'Todos','empty.title':'Nenhum trabalho encontrado','empty.text':'Tente ajustar os filtros ou buscar outra categoria.','work.more':'Carregar mais','education.eyebrow':'Formação','education.title':'Formação que conecta<br><em>criatividade e tecnologia.</em>','education.av':'Trilha audiovisual','education.tech':'Trilha tecnológica','contact.eyebrow':'Contato','contact.title':'Vamos transformar sua ideia<br><em>em uma história marcante?</em>','contact.text':'Conte um pouco sobre seu projeto. A mensagem será preparada para envio no seu aplicativo de e-mail.','form.name':'Nome','form.email':'E-mail','form.subject':'Assunto','form.message':'Mensagem','form.send':'Preparar e-mail','form.ready':'Abrindo seu aplicativo de e-mail…','footer.rights':'Todos os direitos reservados.','footer.top':'Voltar ao topo ↑','dialog.youtube':'Abrir no YouTube ↗','dialog.client':'Cliente','dialog.activities':'Atuação','dialog.software':'Softwares','card.details':'Ver detalhes','card.site':'Abrir site','card.code':'Ver código','status.remote':'Dados atualizados pela planilha.','status.local':'Exibindo cópia local: a planilha externa não respondeu.','results':'trabalhos encontrados'
  },
  en: {
    skip:'Skip to content',menu:'Open menu','nav.home':'Home','nav.about':'About','nav.experience':'Experience','nav.work':'Work','nav.education':'Education','nav.contact':'Contact','cta.contact':'Contact me','hero.eyebrow':'Editing • Audiovisual • Technology','hero.title':'Stories gain <em>rhythm, shape</em> and impact.','hero.lead':'Senior video editor, filmmaker, advertising professional and developer in training. I turn ideas into visual narratives that connect, engage and leave a mark.','cta.work':'View work','cta.about':'About me','metric.years':'years of experience','metric.formats':'TV • Documentaries • Promos','metric.clients':'Projects for brands, broadcasters and agencies','metric.drt':'Active DRT','metric.role':'Video editor','about.eyebrow':'About me','about.title':'Narratives that connect.<br><em>Images that remain.</em>','about.copy':'With over 16 years of experience, I help brands, agencies, producers and broadcasters turn ideas into films, campaigns and content that create real value.','about.editing':'Editing','about.editingText':'Rhythm, emotion, clarity and purpose in every story.','about.av':'Audiovisual','about.avText':'Creation, writing, direction and production with a cinematic eye.','about.tech':'Technology','about.techText':'Digital solutions that improve workflow and final delivery.','experience.eyebrow':'Professional journey','experience.title':'16+ years transforming<br><em>stories into experiences.</em>','experience.more':'View full journey','experience.less':'Collapse journey','work.eyebrow':'Portfolio','work.title':'Featured work','work.av':'Audiovisual','work.programming':'Development','filters.advanced':'Advanced filters','filters.activity':'Activity','filters.client':'Client','filters.software':'Software','filters.clear':'Clear filters','filters.all':'All','empty.title':'No work found','empty.text':'Adjust the filters or try another category.','work.more':'Load more','education.eyebrow':'Education','education.title':'Education connecting<br><em>creativity and technology.</em>','education.av':'Audiovisual track','education.tech':'Technology track','contact.eyebrow':'Contact','contact.title':'Shall we turn your idea<br><em>into a memorable story?</em>','contact.text':'Tell me about your project. The message will be prepared in your email application.','form.name':'Name','form.email':'Email','form.subject':'Subject','form.message':'Message','form.send':'Prepare email','form.ready':'Opening your email application…','footer.rights':'All rights reserved.','footer.top':'Back to top ↑','dialog.youtube':'Open on YouTube ↗','dialog.client':'Client','dialog.activities':'Roles','dialog.software':'Software','card.details':'View details','card.site':'Open site','card.code':'View code','status.remote':'Data updated from the spreadsheet.','status.local':'Showing local copy: the external spreadsheet did not respond.','results':'projects found'
  }
};

const experience = [
  ['01/2026 — 04/2026','Lumiere Produções — Assembleia Legislativa do RS','Diretor de Imagens e Designer Gráfico (contrato temporário)'],['12/2025 — 01/2026','Lumiere Produções — Câmara Municipal de Porto Alegre','Editor de vídeo (contrato temporário)'],['09/2025','Teclift — Empilhadeiras e Paleteiras','Analista de Marketing (contrato temporário)'],['03/2024 — 06/2025','Apus Soluções em TI','Produtor Audiovisual'],['09/2021 — 04/2024','Rede Novo Tempo de Comunicação','Editor de vídeo pleno'],['03/2021 — 04/2021','Ilusion — Henry e Klauss','Freelancer — Edição, VFX e Motion'],['11/2019 — 09/2021','ASSIST RJ','Editor de vídeo — Assistente de Mídias I'],['03/2020','Instituto Vital Brazil','Freelancer — vídeos comemorativos dos 100 anos, em parceria com a UFF'],['03/2015 — 11/2019','Universidade Federal Fluminense','Editor de vídeo e produtor de conteúdo web'],['10/2015','Tatuí Filmes — Netflix — Paris Filmes','Freelancer — trailers e promos (3% Netflix, Invasão Zumbi, O Vendedor de Sonhos)'],['06/2014 — 03/2015','Box Brazil','Editor de vídeo e produtor de TV'],['01/2012 — 12/2014','Canal Rural — Grupo RBS','Editor e produtor de chamadas'],['05/2010 — 12/2011','TV Unisinos — Canal Futura','Editor e produtor de chamadas'],['11/2009 — 03/2010','Opinião Livre — NET TV','Editor de vídeo'],['02/2009 — 07/2009','Agência Zoom — UNASP','Assistente de arte e desenvolvedor web']
];
const education = {
  av:[['Bacharelado em Cinema e Audiovisual','UFF — Universidade Federal Fluminense','Mar/2017 — Jul/2025'],['Bacharelado em Publicidade e Propaganda','Unisinos — Universidade do Vale do Rio dos Sinos','Concluído em 2015'],['Pós-Graduação em Efeitos Visuais (VFX)','Faculdade Méliès','Fev/2022 — Jul/2023'],['Videografismo e Efeitos Visuais','Azimut Escola de Animação — 320h','Jan/2017 — Jun/2017']],
  tech:[['MBA Essencial — Análise de Dados com Python','USP/Esalq','Concluído em Mar/2025'],['Desenvolvimento Full Stack Python','EBAC','Dez/2024 — Dez/2025'],['Pós-Graduação em Engenharia de Dados','Anhanguera','Mai/2026 — em andamento (módulo atual: Databricks & Spark)'],['MBA em Ciência de Dados e Business Intelligence','SENAC','2026 — em andamento']]
};
const programming = [
  ['Portfólio Pessoal','HTML, CSS, JavaScript, Git, Vercel','0.webp','',''],['Galeria de Fotos com jQuery','HTML, CSS, jQuery','1.webp','https://amf-jquery-galeria-fotos.vercel.app/','https://github.com/alexmacielferreira1/JQUERY_EXERCICIO'],['Loja Fictícia de Games','HTML, CSS, Bootstrap','2.webp','https://site-gamesshop-omega-six.vercel.app/','https://github.com/alexmacielferreira1/GAMESHOP_EXERCICIO_EBAC'],['Agenda de Contatos','HTML, CSS, JavaScript','3.webp','https://agenda-de-contatos-psi-pearl.vercel.app/','https://github.com/alexmacielferreira1/AGENDA_CONTATOS_EXERCICIO_EBAC'],['Comparador de Números','HTML, CSS, JavaScript','4.webp','https://exercicio-html-js-teal.vercel.app/','https://github.com/alexmacielferreira1/COMPARAR-NUMEROS_EXERCICIO_EBAC'],['EBAC Motors','HTML, CSS, Bootstrap','5.webp','https://ebac-motors-exercicio-ebac.vercel.app/','https://github.com/alexmacielferreira1/EBAC-MOTORS_EXERCICIO_EBAC'],['Loja de Calçados EBAC','HTML, CSS, Grid responsivo','6.webp','https://ebac-shoes-store-phi.vercel.app/','https://github.com/alexmacielferreira1/ebac-shoes---store'],['jQuery com Plugins','HTML, CSS, jQuery','7.webp','https://jquery-exercicio-ebac.vercel.app/','https://github.com/alexmacielferreira1/plugins-jquery-exercicio'],['Interações com jQuery','HTML, CSS, jQuery','8.webp','https://jquery-exercicio-ebac-2.vercel.app/','https://github.com/alexmacielferreira1/JQUERY_EXERCICIO_EBAC2']
];

const state = {lang:'pt',mode:'audiovisual',items:[],filtered:[],category:'Todos',activity:'Todos',client:'Todos',software:'Todos',visible:PAGE_SIZE,source:'local'};
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const t = key => translations[state.lang][key] || translations.pt[key] || key;

function setLanguage(lang, persist=true){
  state.lang = lang === 'en' ? 'en' : 'pt';
  if(persist) localStorage.setItem('portfolioLanguage',state.lang);
  document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : 'en';
  $$('[data-i18n]').forEach(el => { el.textContent=t(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach(el => { el.innerHTML=t(el.dataset.i18nHtml); });
  $$('[data-lang]').forEach(btn => btn.setAttribute('aria-pressed',String(btn.dataset.lang===state.lang)));
  document.title = state.lang==='pt' ? 'Alex Ferreira — Edição, audiovisual e tecnologia' : 'Alex Ferreira — Editing, audiovisual and technology';
  renderFilters(); renderPortfolio();
}

function csvRows(text){
  const rows=[]; let row=[],field='',quoted=false;
  for(let i=0;i<text.length;i++){
    const char=text[i],next=text[i+1];
    if(char==='"' && quoted && next==='"'){field+='"';i++;}
    else if(char==='"'){quoted=!quoted;}
    else if(char===','&&!quoted){row.push(field);field='';}
    else if((char==='\n'||char==='\r')&&!quoted){if(char==='\r'&&next==='\n')i++;row.push(field);if(row.some(Boolean))rows.push(row);row=[];field='';}
    else field+=char;
  }
  if(field||row.length){row.push(field);rows.push(row)} return rows;
}
function parseCsv(text){
  const rows=csvRows(text); const headers=rows.shift().map(x=>x.trim());
  return rows.map(values=>Object.fromEntries(headers.map((h,i)=>[h,(values[i]||'').trim()])))
    .filter(x=>x.Title&&x.Link).map(x=>({title:x.Title,category:x.Category,client:x.Client,software:split(x.Software),activities:split(x.Atividade),youtube:x.Link,synopsis:x.Sinopse||'',aspect:x.Aspect||x.Formato||''}));
}
const split = value => (value||'').split(',').map(x=>x.trim()).filter(Boolean);
async function loadData(){
  try{
    const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),6000);
    const response=await fetch(SHEET_CSV,{signal:controller.signal}); clearTimeout(timer);
    if(!response.ok) throw new Error('sheet');
    const items=parseCsv(await response.text()); if(!items.length) throw new Error('empty');
    state.items=items; state.source='remote';
  }catch{
    const response=await fetch('data/portfolio.json'); state.items=await response.json(); state.source='local';
  }
  prepareFilters(); renderFilters(); applyFilters();
}

function unique(field){return [...new Set(state.items.flatMap(item=>Array.isArray(item[field])?item[field]:[item[field]]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'))}
function prepareFilters(){
  fillSelect('#activity-filter',unique('activities'));fillSelect('#client-filter',unique('client'));fillSelect('#software-filter',unique('software'));
}
function fillSelect(selector,values){const select=$(selector);select.replaceChildren();select.append(new Option(t('filters.all'),'Todos'));values.forEach(v=>select.append(new Option(v,v)));}
function renderFilters(){
  if(!$('#category-filters'))return;
  const categories=state.mode==='audiovisual'?['Todos',...unique('category')]:['Todos','Front-end','JavaScript','Python','Dados','UI/UX'];
  $('#category-filters').replaceChildren(...categories.map(value=>{const b=document.createElement('button');b.type='button';b.textContent=value==='Todos'?t('filters.all'):value;b.className=value===state.category?'active':'';b.addEventListener('click',()=>{state.category=value;state.visible=PAGE_SIZE;applyFilters()});return b;}));
}
function applyFilters(){
  if(state.mode==='programming'){renderPortfolio();return;}
  state.filtered=state.items.filter(item=>(state.category==='Todos'||item.category===state.category)&&(state.activity==='Todos'||item.activities.includes(state.activity))&&(state.client==='Todos'||item.client===state.client)&&(state.software==='Todos'||item.software.includes(state.software)));
  renderPortfolio();
}
function make(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el}
function youtubeId(value){
  const raw=(value||'').trim(); if(/^[\w-]{11}$/.test(raw))return raw;
  try{const url=new URL(raw);if(url.hostname.includes('youtu.be'))return url.pathname.split('/').filter(Boolean)[0]||'';if(url.hostname.includes('youtube.com'))return url.searchParams.get('v')||url.pathname.split('/').filter(Boolean).pop()||'';}catch{} return '';
}
function workCard(item){
  const article=make('article','work-card');const thumb=make('div','work-thumb');const img=new Image();const id=youtubeId(item.youtube);img.src=id?`https://img.youtube.com/vi/${id}/hqdefault.jpg`:'assets/programming/0.webp';img.alt='';img.loading='lazy';img.width=480;img.height=270;img.addEventListener('error',()=>{img.src='assets/programming/0.webp'});thumb.append(img,make('span','play','▶'));
  const body=make('div','work-card-body');body.append(make('span','card-category',item.category),make('h3','',item.title),make('p','',item.activities.join(' • ')));const actions=make('div','card-actions');const btn=make('button','',t('card.details'));btn.type='button';btn.addEventListener('click',()=>openDialog(item));actions.append(btn);body.append(actions);article.append(thumb,body);return article;
}
function programmingCard(item){
  const [title,tools,image,site,code]=item;const article=make('article','work-card');const thumb=make('div','work-thumb');const img=new Image();img.src=`assets/programming/${image}`;img.alt='';img.loading='lazy';thumb.append(img);const body=make('div','work-card-body');body.append(make('span','card-category','Programação'),make('h3','',title),make('p','',tools));const actions=make('div','card-actions');if(site){const a=make('a','',t('card.site'));a.href=site;a.target='_blank';a.rel='noopener noreferrer';actions.append(a)}if(code){const a=make('a','',t('card.code'));a.href=code;a.target='_blank';a.rel='noopener noreferrer';actions.append(a)}body.append(actions);article.append(thumb,body);return article;
}
function renderPortfolio(){
  const grid=$('#portfolio-grid');if(!grid)return;grid.replaceChildren();let items;
  if(state.mode==='audiovisual'){items=state.filtered.slice(0,state.visible);items.forEach(x=>grid.append(workCard(x)));$('#results-count').textContent=`${state.filtered.length} ${t('results')}`;$('#data-status').textContent=t(state.source==='remote'?'status.remote':'status.local');$('#load-more').hidden=state.visible>=state.filtered.length;$('#av-toolbar').hidden=false;}
  else{items=programming.filter(x=>state.category==='Todos'||x[1].toLowerCase().includes(state.category.toLowerCase())).slice(0,state.visible);items.forEach(x=>grid.append(programmingCard(x)));$('#results-count').textContent=`${items.length} ${t('results')}`;$('#data-status').textContent='';$('#load-more').hidden=true;$('#av-toolbar').hidden=false;}
  $('#empty-state').hidden=items.length>0;
}
function setMode(mode){state.mode=mode;state.category='Todos';state.visible=PAGE_SIZE;$$('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);b.setAttribute('aria-pressed',String(b.dataset.mode===mode))});$('.work-mode').classList.toggle('programming',mode==='programming');renderFilters();applyFilters()}
function tagList(values){const wrap=make('span','tag-list');values.forEach(v=>wrap.append(make('span','tag',v)));return wrap}
const iconFiles = {
  'NOVO TEMPO':'icone_NOVO TEMPO.png','TATUÍ FILMES':'icone_TATUÍ FILMES.png','NETFLIX BRASIL-TATUÍ FILMES':'icone_NETFLIX BRASIL-TATUÍ FILMES.png','BOXBRAZIL - DSTV1':'icone_BOXBRAZIL - DSTV1.png','BOXBRAZIL - SÓ NOVELAS':'icone_BOXBRAZIL - SÓ NOVELAS.png','CANAL RURAL':'icone_CANAL RURAL.png','GRUPO RBS':'icone_GRUPO RBS.png','APUS':'icone_APUS.png','UFF - UNIVERSIDADE FEDERAL FLUMINENSE':'icone_UFF - UNIVERSIDADE FEDERAL FLUMINENSE.png','HENRY E KLAUS':'icone_HENRY & KLAUS.png','CANAL FUTURA':'icone_CANAL FUTURA.png','Lumine':'icone_LUMINE.png','INSTITUTO VITAL BRAZIL':'icone_INSTITUTO VITAL BRAZIL.png','ASSIST':'icone_ASSIST.png','Clube do Valor':'icone_CLUBE DO VALOR.png','HAVAN':'icone_HAVAN.png',
  'ADOBE PREMIERE':'icone_ADOBE PREMIERE.png','AFTER EFFECTS':'icone_AFTER EFFECTS.png','AUDITION':'icone_AUDITION.png','DAVINCI RESOLVE':'icone_DAVINCI RESOLVE.png','FINAL CUT PRO 7':'icone_FINAL CUT PRO 7.png','FINAL CUT PRO X':'icone_FINAL CUT PRO X.png'
};
function iconList(values){
  const wrap=make('span','icon-list');
  values.forEach(value=>{const badge=make('span','icon-badge');const file=iconFiles[value];if(file){const img=new Image();img.src=`assets/icons/${encodeURIComponent(file)}`;img.alt='';img.addEventListener('error',()=>img.remove());badge.append(img)}else badge.append(make('span','icon-fallback',value.split(/\s+/).map(x=>x[0]).join('').slice(0,2)));badge.append(make('span','',value));wrap.append(badge)});
  return wrap;
}
function openDialog(item){
  const id=youtubeId(item.youtube);$('#dialog-category').textContent=item.category;$('#dialog-title').textContent=item.title;$('#dialog-synopsis').textContent=item.synopsis||'—';$('#dialog-client').replaceChildren(iconList([item.client||'—']));$('#dialog-activities').replaceChildren(tagList(item.activities));$('#dialog-software').replaceChildren(iconList(item.software));
  $('.video-shell').classList.toggle('vertical',/9\s*:\s*16|vertical|short/i.test(item.aspect||item.youtube));
  const link=id?`https://www.youtube.com/watch?v=${id}`:'#';$('#youtube-link').href=link;$('#video-frame').src=id?`https://www.youtube-nocookie.com/embed/${id}?rel=0`:'';$('#work-dialog').showModal();document.body.classList.add('modal-open');
}
function closeDialog(){$('#video-frame').src='';$('#work-dialog').close();document.body.classList.remove('modal-open')}
function renderResume(){
  const list=$('#experience-list');experience.forEach(([period,company,role])=>{const item=make('article','timeline-item');item.append(make('div','period',period));const content=make('div','timeline-content');const wrap=make('div');wrap.append(make('h3','',company),make('p','',role));content.append(wrap);item.append(content);list.append(item)});
  for(const [key,target] of [['av','#education-av'],['tech','#education-tech']])education[key].forEach(([course,school,period])=>{const item=make('div','education-item');item.append(make('h4','',course),make('p','',school),make('p','',period));$(target).append(item)});
}
function init(){
  renderResume();$('#year').textContent=new Date().getFullYear();
  const stored=localStorage.getItem('portfolioLanguage');const detected=(navigator.languages?.[0]||navigator.language||'pt').toLowerCase().startsWith('pt')?'pt':'en';setLanguage(stored||detected,false);
  $$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  $('.menu-button').addEventListener('click',e=>{const open=$('#primary-nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});$$('.primary-nav a').forEach(a=>a.addEventListener('click',()=>{$('#primary-nav').classList.remove('open');$('.menu-button').setAttribute('aria-expanded','false')}));
  $$('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));$('.toggle-track').addEventListener('click',()=>setMode(state.mode==='audiovisual'?'programming':'audiovisual'));
  $('.filters-button').addEventListener('click',e=>{const panel=$('#advanced-filters');panel.hidden=!panel.hidden;e.currentTarget.setAttribute('aria-expanded',String(!panel.hidden))});
  for(const [selector,key] of [['#activity-filter','activity'],['#client-filter','client'],['#software-filter','software']])$(selector).addEventListener('change',e=>{state[key]=e.target.value;state.visible=PAGE_SIZE;applyFilters()});
  $('#clear-filters').addEventListener('click',()=>{state.activity=state.client=state.software='Todos';state.category='Todos';$$('#advanced-filters select').forEach(s=>s.value='Todos');renderFilters();applyFilters()});
  $('#load-more').addEventListener('click',()=>{state.visible+=PAGE_SIZE;renderPortfolio()});
  $('#experience-toggle').addEventListener('click',e=>{const expanded=$('#experience-list').classList.toggle('expanded');e.currentTarget.setAttribute('aria-expanded',String(expanded));e.currentTarget.textContent=t(expanded?'experience.less':'experience.more')});
  $('.dialog-close').addEventListener('click',closeDialog);$('#work-dialog').addEventListener('click',e=>{if(e.target===$('#work-dialog'))closeDialog()});$('#work-dialog').addEventListener('close',()=>document.body.classList.remove('modal-open'));$('#work-dialog').addEventListener('cancel',()=>{$('#video-frame').src=''});
  $('#contact-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent(d.get('subject'));const body=encodeURIComponent(`${d.get('message')}\n\n${d.get('name')}\n${d.get('email')}`);$('#form-status').textContent=t('form.ready');window.location.href=`mailto:alexmacielferreira1@gmail.com?subject=${subject}&body=${body}`});
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});$$('.reveal').forEach(el=>observer.observe(el));
  loadData();
}
init();
