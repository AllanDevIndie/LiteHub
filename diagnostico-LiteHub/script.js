const DATA = {
  "questions": [
    {
      "code": "S1",
      "pillar": "Situação",
      "question": "Qual é o principal objetivo da empresa para os próximos 3–6 meses?",
      "helper": "Como saberiam que conseguiram? Existe meta, prazo e indicador?",
      "evidencePossible": "Meta, planejamento, indicador"
    },
    {
      "code": "S2",
      "pillar": "Situação",
      "question": "Quais números do negócio vocês acompanham atualmente?",
      "helper": "Leads? vendas? ticket? faturamento? conversão? origem?",
      "evidencePossible": "Planilha, ERP, dashboard, relatório"
    },
    {
      "code": "S3",
      "pillar": "Situação",
      "question": "Vocês sabem de onde vêm os clientes e como normalmente acontece o caminho até a compra?",
      "helper": "O que acontece desde o primeiro contato até o pagamento?",
      "evidencePossible": "CRM, histórico, processo conhecido"
    },
    {
      "code": "S4",
      "pillar": "Situação",
      "question": "Está claro quem é responsável por marketing, atendimento e vendas?",
      "helper": "Quem recebe o lead? Quem acompanha? Quem responde pelos resultados?",
      "evidencePossible": "Responsáveis e processo definido"
    },
    {
      "code": "A1",
      "pillar": "Atração",
      "question": "Quem é hoje o cliente que vocês mais querem conquistar?",
      "helper": "Existem segmentos mais lucrativos, recorrentes ou estratégicos?",
      "evidencePossible": "ICP, persona, histórico de clientes"
    },
    {
      "code": "A2",
      "pillar": "Atração",
      "question": "Por que esse cliente deveria escolher vocês em vez das alternativas?",
      "helper": "Qual benefício ou diferencial realmente importa para ele?",
      "evidencePossible": "Oferta, argumento comercial, proposta de valor"
    },
    {
      "code": "A3",
      "pillar": "Atração",
      "question": "Como vocês chamam a atenção desse público atualmente?",
      "helper": "Conteúdo? anúncios? indicação? promoção? eventos?",
      "evidencePossible": "Anúncios, posts, peças, campanhas"
    },
    {
      "code": "A4",
      "pillar": "Atração",
      "question": "Vocês sabem quais mensagens, criativos ou ofertas funcionam melhor?",
      "helper": "Como descobriram? Já compararam versões ou ângulos?",
      "evidencePossible": "Testes, métricas, histórico"
    },
    {
      "code": "L1",
      "pillar": "Leads & Aquisição",
      "question": "De onde chegam atualmente os novos clientes ou oportunidades?",
      "helper": "Quais canais realmente geram negócio?",
      "evidencePossible": "Meta, Google, indicação, orgânico, parceiros etc."
    },
    {
      "code": "L2",
      "pillar": "Leads & Aquisição",
      "question": "O que vocês consideram um lead ou oportunidade realmente boa?",
      "helper": "Existe algum critério mínimo de qualidade ou qualificação?",
      "evidencePossible": "Critérios de qualificação, ICP, histórico"
    },
    {
      "code": "L3",
      "pillar": "Leads & Aquisição",
      "question": "Conseguem saber quantas oportunidades cada canal gera e quanto custa adquiri-las?",
      "helper": "CPL? CAC? origem? volume? receita por canal?",
      "evidencePossible": "Ads, CRM, planilha, relatórios"
    },
    {
      "code": "L4",
      "pillar": "Leads & Aquisição",
      "question": "Se precisassem aumentar as oportunidades em 30%, saberiam onde investir primeiro?",
      "helper": "Existe histórico suficiente para estimar volume, custo e capacidade de escala?",
      "evidencePossible": "Histórico e eficiência dos canais"
    },
    {
      "code": "T1",
      "pillar": "Tecnologia",
      "question": "O que acontece tecnicamente depois que alguém demonstra interesse?",
      "helper": "Vai para WhatsApp, formulário, ligação, loja? Existe um destino e responsável claros?",
      "evidencePossible": "Fluxo real de captação e encaminhamento"
    },
    {
      "code": "T2",
      "pillar": "Tecnologia",
      "question": "Onde essas oportunidades ficam registradas e acompanhadas?",
      "helper": "CRM? WhatsApp? planilha? memória do vendedor?",
      "evidencePossible": "Sistema, pipeline ou rotina de acompanhamento"
    },
    {
      "code": "T3",
      "pillar": "Tecnologia",
      "question": "Conseguem relacionar campanha/origem → oportunidade → venda?",
      "helper": "Dá para saber qual campanha ou canal trouxe receita?",
      "evidencePossible": "Tracking, UTMs, Pixel, CRM, relatórios"
    },
    {
      "code": "T4",
      "pillar": "Tecnologia",
      "question": "Existe integração ou automação ajudando marketing e vendas?",
      "helper": "Distribuição? follow-up? notificações? relatórios? mensagens?",
      "evidencePossible": "CRM, automações, integrações"
    },
    {
      "code": "O1",
      "pillar": "Otimização",
      "question": "Com que frequência vocês analisam os resultados de marketing e vendas?",
      "helper": "Quem analisa? O que é analisado? A análise gera ações?",
      "evidencePossible": "Reunião, dashboard, relatório, rotina"
    },
    {
      "code": "O2",
      "pillar": "Otimização",
      "question": "Hoje, onde vocês acreditam que mais perdem oportunidades?",
      "helper": "Alcance? interesse? confiança? atendimento? fechamento? recompra?",
      "evidencePossible": "Dados de funil ou percepção documentada"
    },
    {
      "code": "O3",
      "pillar": "Otimização",
      "question": "Quando algo não funciona, como vocês decidem o que mudar?",
      "helper": "Existe hipótese e critério de sucesso ou simplesmente alteram?",
      "evidencePossible": "Histórico de testes e decisões"
    },
    {
      "code": "O4",
      "pillar": "Otimização",
      "question": "O que acontece depois da primeira compra?",
      "helper": "Medem satisfação, recompra, indicação, cross-sell ou LTV?",
      "evidencePossible": "CRM, pós-venda, NPS, histórico de vendas"
    }
  ],
  "contextQuestions": [
    "O que fez vocês procurarem uma solução de marketing justamente agora?",
    "O que vocês já tentaram antes e como foi a experiência?",
    "Se daqui a 90 dias este projeto estiver indo muito bem, o que teria mudado?",
    "Existe alguém responsável por atender os leads e executar ações internamente?",
    "Quem participa da decisão de contratar esse tipo de serviço?",
    "Existe uma faixa de investimento prevista para marketing, mídia e ferramentas?",
    "Se pudesse corrigir apenas uma coisa no marketing/comercial nos próximos 90 dias, o que seria?"
  ],
  "criteria": {
    "S1": [
      "Não há objetivo definido além de ideias genéricas como 'vender mais'.",
      "Há uma direção, mas sem meta mensurável, prazo ou responsável.",
      "Há objetivo específico, indicador e prazo definidos.",
      "Objetivos estão ligados ao negócio, acompanhados e revisados com frequência."
    ],
    "S2": [
      "Não há números confiáveis disponíveis.",
      "Alguns números são conhecidos de memória ou consultados ocasionalmente.",
      "Principais indicadores são registrados e acompanhados de forma consistente.",
      "Há histórico confiável, comparação de períodos e decisões orientadas por dados."
    ],
    "S3": [
      "A empresa não consegue explicar de forma confiável como clientes chegam e compram.",
      "Existe entendimento principalmente anedótico ou baseado em percepção.",
      "Origem e jornada básica são conhecidas e parcialmente mensuradas.",
      "Etapas do funil e conversões são conhecidas e analisadas por origem/segmento."
    ],
    "S4": [
      "Não está claro quem responde por marketing, atendimento e vendas.",
      "Existem responsáveis, mas handoffs e rotinas são informais.",
      "Papéis, responsabilidades e passagem de oportunidades estão claros.",
      "Há responsabilização, padrões de atendimento e revisão contínua do processo."
    ],
    "A1": [
      "A comunicação tenta atingir 'todo mundo' ou não há público prioritário.",
      "Há um perfil amplo baseado principalmente em percepção.",
      "Há segmento prioritário definido com base em clientes, oferta e estratégia.",
      "Segmentos são priorizados e comparados por valor, conversão ou potencial."
    ],
    "A2": [
      "A oferta é genérica e não há razão clara para escolher a empresa.",
      "Há benefícios percebidos, mas pouco claros ou não validados.",
      "Benefício/diferencial está claro e conectado a problema ou desejo do público.",
      "Ofertas e argumentos são adaptados/testados por segmento e evidência de resultado."
    ],
    "A3": [
      "Comunicação inexistente, irregular ou sem direção.",
      "Há comunicação, mas principalmente estética/genérica e guiada por opinião.",
      "Mensagens, criativos e CTAs são planejados para objetivos definidos.",
      "Comunicação é adaptada a estágio/consciência e sustentada por múltiplas hipóteses criativas."
    ],
    "A4": [
      "Não há testes ou comparação de mensagens/ofertas.",
      "Alterações são feitas de forma ocasional e sem método.",
      "Existem testes com hipótese, métrica e comparação de resultados.",
      "Há rotina contínua de testes e registro do que funciona para orientar novas peças."
    ],
    "L1": [
      "Novos negócios dependem quase só de acaso, movimento espontâneo ou indicação não gerida.",
      "Há ações ocasionais em um ou mais canais, sem consistência.",
      "Ao menos um canal gera oportunidades de forma repetível.",
      "Há mecanismo escalável e contribuição dos canais é conhecida e comparada."
    ],
    "L2": [
      "Não existe definição de lead/oportunidade válida.",
      "A equipe julga qualidade de forma subjetiva, sem critérios claros.",
      "Há critérios de qualificação documentados ou compartilhados.",
      "Qualidade é segmentada/medida e o feedback comercial melhora a aquisição."
    ],
    "L3": [
      "Não é possível relacionar oportunidades aos canais.",
      "Volume ou origem são parcialmente conhecidos, mas custo/qualidade não.",
      "Volume e custos básicos por canal são conhecidos.",
      "Aquisição é avaliada por custo, qualidade e resultado financeiro/CAC quando aplicável."
    ],
    "L4": [
      "A empresa não sabe o que faria para gerar mais oportunidades.",
      "A decisão seria baseada principalmente em palpite.",
      "Histórico permite estimar onde aumentar esforço ou investimento.",
      "A empresa trabalha com cenários de orçamento, capacidade, retorno e limites de escala."
    ],
    "T1": [
      "Oportunidades chegam de forma desorganizada e podem se perder.",
      "Há destinos definidos por canal, mas o processo é muito manual/inconsistente.",
      "Existe fluxo claro de captação, destino e responsável.",
      "Captação e roteamento são otimizados e atritos/tempo de resposta são acompanhados."
    ],
    "T2": [
      "Não existe registro confiável das oportunidades.",
      "WhatsApp/planilha são usados manualmente e dependem muito da disciplina individual.",
      "Há pipeline/CRM ou solução equivalente usada de forma consistente.",
      "Pipeline possui governança, etapas, aging, responsáveis e automações úteis."
    ],
    "T3": [
      "Não há ligação confiável entre origem e resultado.",
      "Origem é anotada/perguntada manualmente ou apenas parcialmente.",
      "Há tracking suficiente para relacionar campanhas/canais a leads e parte das vendas.",
      "Há atribuição confiável até receita/venda e integração de conversões quando aplicável."
    ],
    "T4": [
      "Não existem integrações relevantes.",
      "Há automações isoladas ou frágeis, com forte dependência manual.",
      "Principais sistemas trocam informações e reduzem perdas/retrabalho.",
      "Stack está integrada, monitorada e automatiza etapas relevantes com confiabilidade."
    ],
    "O1": [
      "Resultados praticamente não são revisados.",
      "Resultados são consultados esporadicamente e sem rotina clara.",
      "Há cadência definida de análise e decisões registradas.",
      "Análises geram ações, responsáveis e acompanhamento sistemático dos efeitos."
    ],
    "O2": [
      "A empresa não sabe onde perde oportunidades.",
      "Há uma hipótese baseada principalmente em percepção.",
      "Dados permitem localizar o estágio do funil com maior perda.",
      "Gargalos são quantificados, priorizados por impacto e comparados ao longo do tempo."
    ],
    "O3": [
      "Mudanças são aleatórias ou apenas reativas.",
      "Há testes ocasionais, sem hipótese ou critério consistente.",
      "Testes têm hipótese, variável e métrica de sucesso.",
      "Existe backlog/cadência de experimentos e aprendizado acumulado orienta prioridades."
    ],
    "O4": [
      "Depois da venda não existe acompanhamento estruturado.",
      "Há contato ou recompra ocasional, mas quase nada é medido.",
      "A empresa acompanha ao menos satisfação, recompra ou indicação de forma básica.",
      "Retenção, LTV, indicação e expansão são medidos e melhorados sistematicamente."
    ]
  }
};
const STORAGE_KEY = 'litehub_diagnosticos_v1';
const PILLARS = ['Situação','Atração','Leads & Aquisição','Tecnologia','Otimização'];
let db = loadDb();
let currentId = null;
let currentPage = 0;

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
function uid() { return 'diag_' + Date.now() + '_' + Math.random().toString(36).slice(2,8); }
function loadDb() { try { const x=JSON.parse(localStorage.getItem(STORAGE_KEY)); return Array.isArray(x) ? x : []; } catch(e) { return []; } }
function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }
function esc(v='') { return String(v).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function emptyDiagnosis() { return {id:uid(), createdAt:new Date().toISOString(), updatedAt:new Date().toISOString(), initial:{company:'',segment:'',model:'',investment:'',contact:'',people:'',reason:'',date:new Date().toISOString().slice(0,10)}, scores:{}, evidence:{}, notes:{}, context:{}, reading:{kotler:'',pointA:'',victory:'',pointB:'',measure:'',decision:'',complexity:''}}; }
function getCurrent() { return db.find(x=>x.id===currentId); }
function show(id) { $$('.view').forEach(v=>v.classList.toggle('active',v.id===id)); window.scrollTo({top:0,behavior:'smooth'}); }
function renderHome() {
  const el=$('#clientCards');
  if(!db.length) { el.innerHTML='<div class="empty">Nenhum diagnóstico ainda.<br><br><button class="btn" id="emptyNew">+ Começar novo diagnóstico</button></div>'; $('#emptyNew').onclick=()=>startNew(); return; }
  el.innerHTML=[...db].sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)).map(d=>{const r=calculate(d);return `<article class="card client-card"><div><h3>${esc(d.initial.company||'Empresa sem nome')}</h3><div class="muted small">${esc(d.initial.segment||'Segmento não informado')} • atualizado em ${new Date(d.updatedAt).toLocaleDateString('pt-BR')}</div><div class="meta"><span class="pill">${r.index===''?'Sem nota':r.index+' / 15'}</span><span class="pill">${r.stage||'Em andamento'}</span>${d.initial.contact?`<span class="pill">${esc(d.initial.contact)}</span>`:''}</div></div><div class="actions"><button class="btn secondary" data-edit="${d.id}">Abrir</button><button class="btn ghost" data-result="${d.id}">Resultado</button><button class="btn danger" data-delete="${d.id}">Apagar</button></div></article>`}).join('');
  $$('[data-edit]').forEach(b=>b.onclick=()=>openDiagnosis(b.dataset.edit)); $$('[data-result]').forEach(b=>b.onclick=()=>openResult(b.dataset.result)); $$('[data-delete]').forEach(b=>b.onclick=()=>deleteDiagnosis(b.dataset.delete));
}
function deleteDiagnosis(id) { const d=db.find(x=>x.id===id); if(!d)return; if(!confirm(`Apagar o diagnóstico de ${d.initial.company||'Empresa sem nome'}? Esta ação não pode ser desfeita.`))return; db=db.filter(x=>x.id!==id); if(currentId===id)currentId=null; persist(); renderHome(); show('homeView'); }
function resetAll() { if(!db.length){alert('Não há diagnósticos salvos.');return;} if(confirm('Apagar TODOS os diagnósticos deste navegador? Exporte um backup antes, se necessário.')){db=[];currentId=null;persist();renderHome();show('homeView');$('#backupDialog').close();} }
function startNew() { const d=emptyDiagnosis(); db.push(d); currentId=d.id; currentPage=0; persist(); renderForm(); show('formView'); }
function openDiagnosis(id) { currentId=id; currentPage=0; renderForm(); show('formView'); }
function saveCurrent() { const d=getCurrent(); if(d) { d.updatedAt=new Date().toISOString(); persist(); } }
function renderForm() { const d=getCurrent(); if(!d)return; const total=DATA.questions.length+2; let pages=[];
  pages.push(`<div class="form-page ${currentPage===0?'active':''}" data-page="0"><h2 class="page-title">Informações iniciais</h2><p class="page-intro">Preencha o contexto básico da empresa antes de iniciar as perguntas pontuadas.</p><div class="card grid cols-2"><div class="field"><label>Empresa *</label><input data-init="company" value="${esc(d.initial.company)}" autofocus></div><div class="field"><label>Contato</label><input data-init="contact" value="${esc(d.initial.contact)}"></div><div class="field"><label>Segmento</label><input data-init="segment" value="${esc(d.initial.segment)}"></div><div class="field"><label>Modelo de venda</label><select data-init="model"><option value="">Selecione</option>${['B2B','B2C','Ambos'].map(x=>`<option ${d.initial.model===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Investimento atual em marketing</label><input data-init="investment" value="${esc(d.initial.investment)}"></div><div class="field"><label>Pessoas em vendas/atendimento</label><input data-init="people" value="${esc(d.initial.people)}"></div><div class="field"><label>Motivo principal</label><input data-init="reason" value="${esc(d.initial.reason)}"></div><div class="field"><label>Data</label><input type="date" data-init="date" value="${esc(d.initial.date)}"></div></div></div>`);
  DATA.questions.forEach((q,i)=>{const p=i+1;const score=d.scores[q.code];pages.push(`<div class="form-page ${currentPage===p?'active':''}" data-page="${p}"><div class="question-card"><div class="q-head"><div><div class="q-code">${q.code} • ${q.pillar}</div><div class="question">${q.question}</div></div><span class="pill">${i+1}/${DATA.questions.length}</span></div><div class="helper">${q.helper}</div><div class="evidence-possible"><b>Evidência possível:</b> ${q.evidencePossible}</div><div class="score-row">${[0,1,2,3].map(n=>`<button type="button" class="score-btn ${String(score)===String(n)?'selected':''}" data-score="${q.code}" data-value="${n}">${n}</button>`).join('')}<button type="button" class="score-btn skip ${score==null?'selected':''}" data-score="${q.code}" data-value="skip">Pular / não se aplica</button></div><div class="evidence-row">${['Não','Parcial','Sim'].map(x=>`<button type="button" class="evidence-btn ${d.evidence[q.code]===x?'selected':''}" data-evidence="${q.code}" data-value="${x}">${x}</button>`).join('')}</div><textarea class="question-note" data-note="${q.code}" placeholder="Observações, justificativa ou evidência...">${esc(d.notes[q.code]||'')}</textarea></div><div class="page-nav">${navButtons(p,total)}</div></div>`);});
  const contextPage=DATA.questions.length+1; pages.push(`<div class="form-page ${currentPage===contextPage?'active':''}" data-page="${contextPage}"><h2 class="page-title">Leitura e contexto</h2><p class="page-intro">Estas respostas não pontuam, mas ajudam a interpretar o resultado e preparar a conversa.</p><div class="grid">${DATA.contextQuestions.map((q,i)=>`<div class="card field"><label>${q}</label><textarea data-context="${i}">${esc(d.context[i]||'')}</textarea></div>`).join('')}<div class="card"><h3>Leitura do diagnóstico</h3><div class="grid cols-2">${readingFields(d)}</div></div></div><div class="page-nav">${navButtons(contextPage,total)}</div></div>`);
  $('#formPages').innerHTML=pages.join(''); bindForm(); updateProgress(total);
}
function navButtons(p,total) { return `${p>0?'<button type="button" class="btn ghost" data-prev>← Anterior</button>':'<span></span>'}<span>${p<total-1?'<button type="button" class="btn" data-next>Próxima →</button>':'<button type="button" class="btn" data-finish>Salvar diagnóstico</button>'}</span>`; }
function readingFields(d) { const fields=[['kotler','Maior vazamento percebido nos 5 As de Kotler',['Assimilação','Atração','Arguição','Ação','Apologia','Indefinido']],['decision','Decisão LiteHub',['Prosseguir para proposta','Solicitar mais informações','Não recomendar contratação']],['complexity','Complexidade percebida',['C1 — Simples','C2 — Moderada','C3 — Alta']],['pointA','Ponto A — onde a empresa está hoje'],['victory','Primeira vitória recomendada'],['pointB','Ponto B desejado ao final do primeiro ciclo'],['measure','Como saberemos que chegamos ao Ponto B']]; return fields.map(([key,label,opts])=>opts?`<div class="field"><label>${label}</label><select data-reading="${key}"><option value="">Selecione</option>${opts.map(x=>`<option ${d.reading[key]===x?'selected':''}>${x}</option>`).join('')}</select></div>`:`<div class="field full"><label>${label}</label><textarea data-reading="${key}">${esc(d.reading[key]||'')}</textarea></div>`).join(''); }
function bindForm() { const d=getCurrent(); $$('[data-init]').forEach(el=>el.oninput=()=>{d.initial[el.dataset.init]=el.value;saveCurrent();}); $$('[data-score]').forEach(b=>b.onclick=()=>{const v=b.dataset.value; if(v==='skip')delete d.scores[b.dataset.score]; else d.scores[b.dataset.score]=Number(v);saveCurrent();renderForm();}); $$('[data-evidence]').forEach(b=>b.onclick=()=>{d.evidence[b.dataset.evidence]=b.dataset.value;saveCurrent();renderForm();}); $$('[data-note]').forEach(el=>el.oninput=()=>{d.notes[el.dataset.note]=el.value;saveCurrent();}); $$('[data-context]').forEach(el=>el.oninput=()=>{d.context[el.dataset.context]=el.value;saveCurrent();}); $$('[data-reading]').forEach(el=>el.oninput=()=>{d.reading[el.dataset.reading]=el.value;saveCurrent();}); $$('[data-next]').forEach(b=>b.onclick=()=>{currentPage++;renderForm();}); $$('[data-prev]').forEach(b=>b.onclick=()=>{currentPage--;renderForm();}); $$('[data-finish]').forEach(b=>b.onclick=()=>openResult(currentId)); }
function updateProgress(total) { const pct=Math.round((currentPage/(total-1))*100); $('#progressBar').style.width=pct+'%'; $('#progressCount').textContent=currentPage===0?'':`Etapa ${currentPage} de ${total-1}`; $('#progressText').textContent=currentPage===0?'Informações iniciais':currentPage<=DATA.questions.length?`Pergunta ${currentPage} — ${DATA.questions[currentPage-1].pillar}`:'Leitura e contexto'; }
function calculate(d) { const vals=DATA.questions.map(q=>d.scores[q.code]).filter(v=>Number.isFinite(v)); const index=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)*10/10)/10:''; const pillarScores={}; PILLARS.forEach(p=>{const x=DATA.questions.filter(q=>q.pillar===p).map(q=>d.scores[q.code]).filter(v=>Number.isFinite(v));pillarScores[p]=x.length?Math.round(x.reduce((a,b)=>a+b,0)/x.length*100)/100:null;}); let stage=''; if(index!=='')stage=index>=12&&PILLARS.every(p=>(pillarScores[p]??0)>=2)?'Escala':index>=9?'Evolução':index>=5?'Tração':'Eclosão'; const ev=DATA.questions.map(q=>d.evidence[q.code]).filter(Boolean); const conf=vals.length?(ev.filter(x=>x==='Sim').length+.5*ev.filter(x=>x==='Parcial').length)/vals.length>=.75?'Alta':(ev.filter(x=>x==='Sim').length+.5*ev.filter(x=>x==='Parcial').length)/vals.length>=.4?'Média':'Baixa':''; const nums=Object.entries(pillarScores).filter(([,v])=>v!==null); const strong=nums.length?nums.reduce((a,b)=>b[1]>a[1]?b:a)[0]:'';const bottleneck=nums.length?nums.reduce((a,b)=>b[1]<a[1]?b:a)[0]:''; return {index,stage,confidence:conf,pillarScores,strong,bottleneck}; }
function openResult(id) { currentId=id; const d=getCurrent(); const r=calculate(d); $('#resultContent').innerHTML=`<div class="result-head"><div class="eyebrow">Resultado do diagnóstico SALTO</div><h2>${esc(d.initial.company||'Empresa sem nome')}</h2><p class="muted">${esc(d.initial.segment||'')} • ${esc(d.initial.date||'')}</p></div><div class="result-grid"><div class="metric"><div class="label">Índice SALTO</div><strong>${r.index===''?'—':r.index+' / 15'}</strong></div><div class="metric"><div class="label">Estágio</div><strong>${r.stage||'—'}</strong></div><div class="metric"><div class="label">Confiança</div><strong>${r.confidence||'—'}</strong></div><div class="metric"><div class="label">Plano recomendado</div><strong>${r.stage||'—'}</strong></div></div><div class="result-card"><h3>Notas por pilar</h3>${PILLARS.map(p=>`<div class="pillar-row"><b>${p}</b><strong>${r.pillarScores[p]===null?'—':r.pillarScores[p]}</strong><div class="bar"><i style="width:${r.pillarScores[p]===null?0:r.pillarScores[p]/3*100}%"></i></div></div>`).join('')}</div><div class="result-card"><h3>Diagnóstico executivo</h3><p><b>Maior força:</b> ${r.strong||'—'}</p><p><b>Gargalo prioritário:</b> ${r.bottleneck||'—'}</p><p><b>Maior vazamento Kotler:</b> ${esc(d.reading.kotler||'—')}</p><p><b>Ponto A:</b> ${esc(d.reading.pointA||'—')}</p><p><b>Primeira vitória:</b> ${esc(d.reading.victory||'—')}</p><p><b>Ponto B:</b> ${esc(d.reading.pointB||'—')}</p><p><b>Como medir:</b> ${esc(d.reading.measure||'—')}</p><p><b>Decisão LiteHub:</b> ${esc(d.reading.decision||'—')}</p><p><b>Complexidade:</b> ${esc(d.reading.complexity||'—')}</p></div><div class="result-card"><h3>Respostas e evidências</h3><div class="answer-list">${DATA.questions.map(q=>`<div class="answer-item"><b>${q.code} — ${q.question}</b><span class="muted small">Nota: ${d.scores[q.code]??'Pulada'} • Evidência: ${d.evidence[q.code]||'não informada'}</span>${d.notes[q.code]?`<div>${esc(d.notes[q.code])}</div>`:''}</div>`).join('')}</div></div>`; show('resultView'); }
function exportDb() { const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='diagnosticos-salto-'+new Date().toISOString().slice(0,10)+'.json';a.click();URL.revokeObjectURL(a.href); }
$('#newClient').onclick=startNew; $('#backHome').onclick=()=>{saveCurrent();renderHome();show('homeView');}; $('#saveAndHome').onclick=()=>{saveCurrent();renderHome();show('homeView');}; $('#showResult').onclick=()=>openResult(currentId); $('#backForm').onclick=()=>{renderForm();show('formView');}; $('#printResult').onclick=()=>window.print(); $('#openResultTab').onclick=()=>{const w=window.open('','_blank');w.document.write('<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Resultado SALTO</title><style>'+[...document.styleSheets].flatMap(s=>{try{return [...s.cssRules].map(r=>r.cssText)}catch(e){return[]}}).join('')+'</style></head><body><main style="max-width:1080px;margin:auto;padding:24px">'+$('#resultContent').innerHTML+'</main></body></html>');w.document.close();}; $('#openBackup').onclick=()=>$('#backupDialog').showModal(); $('#closeBackup').onclick=()=>$('#backupDialog').close(); $('#exportData').onclick=exportDb; $('#resetAll').onclick=resetAll; $('#importData').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!Array.isArray(x))throw Error();db=x;persist();renderHome();alert('Backup importado com sucesso.');$('#backupDialog').close();}catch(err){alert('Arquivo JSON inválido.');}};r.readAsText(f);};
document.addEventListener('keydown',e=>{if(!$('#formView').classList.contains('active'))return;if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;if(e.key==='ArrowRight'&&currentPage<DATA.questions.length+1){currentPage++;renderForm();return;}if(e.key==='ArrowLeft'&&currentPage>0){currentPage--;renderForm();return;}const q=DATA.questions[currentPage-1];if(!q)return;if(e.key>='0'&&e.key<='3'){getCurrent().scores[q.code]=Number(e.key);saveCurrent();renderForm();}else if(e.key==='4'||e.key==='5'||e.key==='6'){getCurrent().evidence[q.code]={'4':'Não','5':'Parcial','6':'Sim'}[e.key];saveCurrent();renderForm();}else if(e.key==='9'){delete getCurrent().scores[q.code];saveCurrent();renderForm();}});
renderHome();
