'use strict';

const items = [
  {
    id: '1a', title: 'Nível de consciência', max: 3,
    instruction: 'Observe o grau de alerta e a necessidade de estímulo para obter resposta.',
    detail: 'Escolha uma pontuação mesmo quando houver barreiras à avaliação completa. A pontuação mais alta é reservada à ausência de resposta além de atividade reflexa/automática ou ausência completa de resposta.',
    options: [
      ['0', 'Alerta, responde prontamente.'],
      ['1', 'Sonolento ou pouco alerta; desperta com estímulo leve.'],
      ['2', 'Precisa de estímulos repetidos ou vigorosos para responder.'],
      ['3', 'Responde apenas de forma reflexa/automática ou não responde.']
    ]
  },
  {
    id: '1b', title: 'Perguntas: mês e idade', max: 2,
    instruction: 'Pergunte o mês atual e a idade do paciente. Considere apenas a resposta inicial.',
    detail: 'Não ofereça pistas verbais ou não verbais e não conceda crédito parcial por respostas aproximadas. Na adaptação brasileira consultada, afasia/estupor com ausência de compreensão pontua 2; incapacidade de falar por entubação, trauma orotraqueal, disartria grave ou barreira não relacionada à afasia pontua 1.',
    options: [
      ['0', 'Responde corretamente às duas perguntas.'],
      ['1', 'Responde corretamente a uma pergunta.'],
      ['2', 'Não responde corretamente a nenhuma.']
    ]
  },
  {
    id: '1c', title: 'Comandos', max: 2,
    instruction: 'Solicite abrir/fechar os olhos e abrir/fechar a mão não parética.',
    detail: 'Se as mãos não puderem ser usadas, substitua por outro comando simples de uma etapa. Se não houver resposta ao comando verbal, demonstre a tarefa por pantomima. Considere tentativa inequívoca prejudicada por fraqueza como execução da tarefa.',
    options: [
      ['0', 'Executa os dois comandos.'],
      ['1', 'Executa apenas um comando.'],
      ['2', 'Não executa nenhum comando.']
    ]
  },
  {
    id: '2', title: 'Melhor olhar conjugado', max: 2,
    instruction: 'Avalie os movimentos oculares horizontais, voluntários ou reflexos.',
    detail: 'Desvio que pode ser vencido por atividade voluntária ou reflexa e paresia isolada de nervo oculomotor podem receber 1. Desvio forçado ou paralisia total não vencida pela manobra oculocefálica recebe 2. Não use prova calórica.',
    options: [
      ['0', 'Movimentos horizontais normais.'],
      ['1', 'Limitação/paralisia parcial do olhar conjugado.'],
      ['2', 'Desvio forçado ou paralisia total do olhar conjugado.']
    ]
  },
  {
    id: '3', title: 'Campos visuais', max: 3,
    instruction: 'Teste os quadrantes superiores e inferiores por confrontação, com dedos em movimento ou ameaça visual.',
    detail: 'Quando houver cegueira/enucleação unilateral, avalie o olho remanescente. Uma assimetria clara, inclusive quadrantanopsia, é anormal. Faça estimulação dupla simultânea, considerando também a avaliação de extinção no item 11. Na versão brasileira disponibilizada pela Ação AVC, o escore 1 corresponde à hemianopsia parcial e o escore 2 à hemianopsia completa. Há uma adaptação mais antiga do Ministério da Saúde com repetição editorial nesta descrição; não misture formulários ou critérios de versões distintas.',
    options: [
      ['0', 'Sem perda visual.'],
      ['1', 'Perda parcial do campo visual (inclui quadrantanopsia).'],
      ['2', 'Hemianopsia completa em um hemicampo.'],
      ['3', 'Perda visual bilateral, incluindo cegueira cortical.']
    ]
  },
  {
    id: '4', title: 'Paralisia facial', max: 3,
    instruction: 'Peça para mostrar os dentes/sorrir, elevar as sobrancelhas e fechar os olhos; use pantomima se necessário.',
    detail: 'Em paciente pouco responsivo ou que não compreende, observe a simetria da expressão diante de estímulo nocivo, conforme o protocolo. Remova barreiras físicas à inspeção quando possível.',
    options: [
      ['0', 'Movimento facial simétrico normal.'],
      ['1', 'Assimetria discreta, como apagamento do sulco nasolabial.'],
      ['2', 'Paralisia parcial, predominando na metade inferior da face.'],
      ['3', 'Paralisia completa de um ou ambos os lados da face.']
    ]
  },
  {
    id: '5a', title: 'Motor do braço esquerdo', max: 4,
    instruction: 'Braço elevado a 90° sentado ou 45° em decúbito; observe por 10 segundos.',
    detail: 'Teste cada membro separadamente, começando pelo não parético. Pontue queda antes de 10 segundos. Use 9 apenas em amputação ou fusão articular no ombro; registre a justificativa. Não usar 9 por dor ou falta de cooperação.',
    options: [
      ['0', 'Mantém a posição por 10 segundos, sem queda.'],
      ['1', 'Apresenta queda, mas não toca a cama/suporte.'],
      ['2', 'Faz esforço contra a gravidade, mas cai até a cama/suporte.'],
      ['3', 'Não vence a gravidade; o membro cai.'],
      ['4', 'Sem movimento.'],
      ['9', 'Não testável: amputação ou fusão articular.']
    ]
  },
  {
    id: '5b', title: 'Motor do braço direito', max: 4,
    instruction: 'Braço elevado a 90° sentado ou 45° em decúbito; observe por 10 segundos.',
    detail: 'Teste cada membro separadamente, começando pelo não parético. Pontue queda antes de 10 segundos. Use 9 apenas em amputação ou fusão articular no ombro; registre a justificativa. Não usar 9 por dor ou falta de cooperação.',
    options: [
      ['0', 'Mantém a posição por 10 segundos, sem queda.'],
      ['1', 'Apresenta queda, mas não toca a cama/suporte.'],
      ['2', 'Faz esforço contra a gravidade, mas cai até a cama/suporte.'],
      ['3', 'Não vence a gravidade; o membro cai.'],
      ['4', 'Sem movimento.'],
      ['9', 'Não testável: amputação ou fusão articular.']
    ]
  },
  {
    id: '6a', title: 'Motor da perna esquerda', max: 4,
    instruction: 'Em decúbito dorsal, eleve a perna a 30° e observe por 5 segundos.',
    detail: 'Teste cada membro separadamente. Pontue a queda antes de 5 segundos. Use 9 apenas em amputação ou fusão articular no quadril; registre a justificativa. Não usar 9 por dor ou falta de cooperação.',
    options: [
      ['0', 'Mantém 30° por 5 segundos, sem queda.'],
      ['1', 'Apresenta queda, mas não toca a cama.'],
      ['2', 'Faz esforço contra a gravidade, mas cai até a cama.'],
      ['3', 'Não vence a gravidade; a perna cai imediatamente.'],
      ['4', 'Sem movimento.'],
      ['9', 'Não testável: amputação ou fusão articular.']
    ]
  },
  {
    id: '6b', title: 'Motor da perna direita', max: 4,
    instruction: 'Em decúbito dorsal, eleve a perna a 30° e observe por 5 segundos.',
    detail: 'Teste cada membro separadamente. Pontue a queda antes de 5 segundos. Use 9 apenas em amputação ou fusão articular no quadril; registre a justificativa. Não usar 9 por dor ou falta de cooperação.',
    options: [
      ['0', 'Mantém 30° por 5 segundos, sem queda.'],
      ['1', 'Apresenta queda, mas não toca a cama.'],
      ['2', 'Faz esforço contra a gravidade, mas cai até a cama.'],
      ['3', 'Não vence a gravidade; a perna cai imediatamente.'],
      ['4', 'Sem movimento.'],
      ['9', 'Não testável: amputação ou fusão articular.']
    ]
  },
  {
    id: '7', title: 'Ataxia de membros', max: 2,
    instruction: 'Com os olhos abertos, teste dedo-nariz-dedo e calcanhar-joelho nos dois lados.',
    detail: 'Considere ataxia somente quando desproporcional à fraqueza. Se o paciente não compreende ou está paralisado, a ataxia é considerada ausente. Em caso de defeito visual, teste no campo preservado. Use 9 apenas em amputação ou fusão articular que impeça o teste e registre a justificativa.',
    options: [
      ['0', 'Ausente.'],
      ['1', 'Presente em um membro.'],
      ['2', 'Presente em dois membros.'],
      ['9', 'Não testável: amputação ou fusão articular.']
    ]
  },
  {
    id: '8', title: 'Sensibilidade', max: 2,
    instruction: 'Avalie a percepção de estímulo doloroso superficial em face, braços, pernas e tronco, conforme necessário.',
    detail: 'Pontue apenas perda atribuível ao evento cerebrovascular. Em afasia ou obnubilação, use a resposta facial/retirada ao estímulo. Escore 2 exige perda grave ou total claramente demonstrada. No coma (1a = 3), a adaptação consultada orienta pontuar 2.',
    options: [
      ['0', 'Sensibilidade normal, sem perda.'],
      ['1', 'Perda leve/moderada; percebe o toque, mas sente redução da intensidade.'],
      ['2', 'Perda grave ou total; não percebe o estímulo nas áreas avaliadas.']
    ]
  },
  {
    id: '9', title: 'Melhor linguagem', max: 3,
    instruction: 'Avalie compreensão e expressão pela descrição de figura, nomeação de objetos e leitura de frases padronizadas.',
    detail: 'Avalie compreensão e expressão com a figura de descrição, os cartões de nomeação e as frases de leitura indicados no formulário. Se houver perda visual, utilize o procedimento alternativo previsto na versão adotada. Para paciente intubado, considere a estratégia de comunicação escrita descrita no formulário. Em coma (1a = 3), siga a regra específica da escala.',
    options: [
      ['0', 'Sem afasia; linguagem normal.'],
      ['1', 'Afasia leve/moderada; comunicação possível, com alguma dificuldade.'],
      ['2', 'Afasia grave; comunicação fragmentada e grande necessidade de inferência.'],
      ['3', 'Mudez ou afasia global, sem linguagem/compreensão auditiva aproveitável.']
    ]
  },
  {
    id: '10', title: 'Disartria', max: 2,
    instruction: 'Solicite leitura ou repetição dos estímulos de fala padronizados, quando aplicável.',
    detail: 'Solicite leitura ou repetição das palavras padronizadas indicadas no formulário. Se houver afasia grave, avalie a clareza da articulação na fala espontânea. A marcação 9 é reservada à intubação ou outra barreira física à produção da fala; registre a justificativa.',
    options: [
      ['0', 'Articulação normal.'],
      ['1', 'Disartria leve/moderada; algumas palavras são arrastadas, mas compreensíveis.'],
      ['2', 'Disartria grave; fala ininteligível ou paciente mudo/anártrico.'],
      ['9', 'Não testável: intubação ou outra barreira física.']
    ]
  },
  {
    id: '11', title: 'Extinção e desatenção', max: 2,
    instruction: 'Investigue negligência e extinção em estimulação bilateral simultânea, considerando modalidades visual, tátil, auditiva, espacial ou pessoal.',
    detail: 'Informações dos itens anteriores podem revelar negligência. Se houver perda visual grave que impeça estímulo visual bilateral, mas estímulo cutâneo preservado, pontue conforme as demais modalidades. Pode-se considerar negligência espacial ou anosognosia. Este item não deve receber marcação 9.',
    options: [
      ['0', 'Sem anormalidade.'],
      ['1', 'Extinção ou desatenção em uma modalidade à estimulação bilateral simultânea.'],
      ['2', 'Hemi-inatenção profunda ou comprometimento de mais de uma modalidade.']
    ]
  }
];

const state = Object.create(null);
const itemsRoot = document.getElementById('itemsRoot');
const progressLabel = document.getElementById('progressLabel');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');
const resultState = document.getElementById('resultState');
const resultNumber = document.getElementById('resultNumber');
const resultHelp = document.getElementById('resultHelp');
const resultBreakdown = document.getElementById('resultBreakdown');
const toast = document.getElementById('toast');
let toastTimer;

function safeId(value) { return String(value).replace(/[^a-z0-9]/gi, ''); }

function renderItems() {
  itemsRoot.innerHTML = '';
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'item-card';
    card.id = `card-${safeId(item.id)}`;
    const titleWrap = document.createElement('div');
    titleWrap.className = 'item-title-wrap';
    titleWrap.innerHTML = `<span class="item-number">${item.id}</span><div><h3 class="item-title">${item.title}</h3><div class="item-meta">Pontuação máxima: ${item.max}</div></div>`;
    const head = document.createElement('div');
    head.className = 'item-head';
    head.append(titleWrap);
    const selected = state[item.id];
    const tag = document.createElement('span');
    tag.className = 'item-max';
    tag.textContent = selected === undefined ? 'Pendente' : selected === '9' ? 'Não testável' : `${selected} ponto(s)`;
    head.append(tag);
    const instruction = document.createElement('p');
    instruction.className = 'instruction';
    instruction.textContent = item.instruction;
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.className = 'detail-toggle';
    summary.textContent = 'Instruções e observações';
    const detailBody = document.createElement('div');
    detailBody.className = 'detail-body';
    const detailParagraph = document.createElement('p');
    detailParagraph.textContent = item.detail;
    detailBody.append(detailParagraph);
    if (item.id === '9' || item.id === '10') {
      const pdfLink = document.createElement('a');
      pdfLink.href = 'https://www.acaoavc.org.br/assets/arquivos/nihss_traduzida_e_adaptada_brasil.pdf';
      pdfLink.target = '_blank';
      pdfLink.rel = 'noopener';
      pdfLink.textContent = item.id === '9'
        ? 'Abrir PDF da NIHSS brasileira — figura, cartões de nomeação e frases de leitura'
        : 'Abrir PDF da NIHSS brasileira — lista de palavras para disartria';
      const linkParagraph = document.createElement('p');
      linkParagraph.className = 'item-source-link';
      linkParagraph.append(pdfLink);
      detailBody.append(linkParagraph);
      const offlineNote = document.createElement('small');
      offlineNote.className = 'offline-link-note';
      offlineNote.textContent = 'O PDF abre em site externo e requer internet. Mantenha uma cópia institucional autorizada disponível para uso offline.';
      detailBody.append(offlineNote);
    }
    details.append(summary, detailBody);
    const options = document.createElement('div');
    options.className = 'score-options';
    options.setAttribute('role', 'radiogroup');
    options.setAttribute('aria-label', `Pontuação do item ${item.id}: ${item.title}`);
    item.options.forEach(([value, label]) => {
      const option = document.createElement('label');
      const isUn = value === '9';
      option.className = `score-option${state[item.id] === value ? ' selected' : ''}${isUn ? ' un-option' : ''}`;
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `score-${safeId(item.id)}`;
      radio.value = value;
      radio.checked = state[item.id] === value;
      radio.setAttribute('aria-label', `${value === '9' ? 'Não testável' : value + ' pontos'}: ${label}`);
      radio.addEventListener('change', () => {
        state[item.id] = value;
        renderItems();
        updateResult();
      });
      const scoreValue = document.createElement('span');
      scoreValue.className = 'score-value';
      scoreValue.textContent = isUn ? 'NT' : value;
      const scoreText = document.createElement('span');
      scoreText.className = 'score-text';
      scoreText.textContent = label;
      option.append(radio, scoreValue, scoreText);
      options.append(option);
    });
    card.append(head, instruction, details, options);
    if (selected !== undefined && selected !== '9') card.classList.add('complete');
    if (selected === '9') card.classList.add('has-un');
    itemsRoot.append(card);
  });
}

function updateResult() {
  const completed = items.filter(item => state[item.id] !== undefined).length;
  const notTestable = items.filter(item => state[item.id] === '9');
  const percent = Math.round((completed / items.length) * 100);
  progressLabel.textContent = `${completed} de ${items.length} itens preenchidos`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  if (completed < items.length) {
    const pending = items.length - completed;
    resultState.textContent = 'Avaliação em andamento';
    resultNumber.innerHTML = '— <span>/ 42</span>';
    resultHelp.textContent = `${pending} ${pending === 1 ? 'item pendente' : 'itens pendentes'}. A pontuação total será exibida quando todos forem preenchidos.`;
    resultBreakdown.hidden = true;
    return;
  }

  if (notTestable.length) {
    resultState.textContent = 'Avaliação incompleta — há item(ns) não testável(is)';
    resultNumber.innerHTML = 'NT <span>/ 42</span>';
    resultHelp.textContent = `Não é apresentado total NIHSS padronizado. Revise e documente o motivo para: ${notTestable.map(x => x.id).join(', ')}. NT não equivale a zero.`;
    resultBreakdown.hidden = false;
    const partial = items.reduce((sum, item) => sum + (state[item.id] === '9' ? 0 : Number(state[item.id])), 0);
    resultBreakdown.textContent = `Soma dos itens numericamente pontuados: ${partial}. Esta soma é parcial e não deve ser interpretada como pontuação total NIHSS.`;
    return;
  }

  const total = items.reduce((sum, item) => sum + Number(state[item.id]), 0);
  resultState.textContent = 'Pontuação total NIHSS';
  resultNumber.innerHTML = `${total} <span>/ 42</span>`;
  resultHelp.textContent = 'Todos os 15 campos foram preenchidos. Confirme os registros com o formulário oficial antes de documentar no prontuário.';
  resultBreakdown.hidden = false;
  resultBreakdown.textContent = 'Resultado calculado pela soma dos 15 campos numéricos. A classificação de gravidade não é usada para definir, isoladamente, diagnóstico ou conduta.';
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab === button));
    document.querySelectorAll('.tab-panel').forEach(panel => {
      const active = panel.id === button.dataset.tab;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  const hasData = Object.keys(state).length > 0;
  if (hasData && !window.confirm('Deseja apagar todas as pontuações desta avaliação?')) return;
  Object.keys(state).forEach(key => delete state[key]);
  renderItems();
  updateResult();
  showToast('Avaliação reiniciada.');
});

renderItems();
updateResult();



// NeuroSanta 0.5.1 — regras de triagem para EVT e apoio heurístico à localização.
function val(id) {
  const el = document.getElementById(id);
  if (!el) return '';
  return String(el.value ?? '').trim();
}
function numeric(id) {
  const raw = val(id).replace(',', '.');
  return raw === '' ? null : (Number.isFinite(Number(raw)) ? Number(raw) : null);
}
function appendResult(container, kind, title, message) {
  const card = document.createElement('div');
  card.className = `alert-card alert-${kind}`;
  const heading = document.createElement('strong');
  heading.textContent = title;
  const body = document.createElement('span');
  body.textContent = message;
  card.append(heading, body);
  container.append(card);
}
function evtEvaluate() {
  const out = document.getElementById('evtResults');
  out.innerHTML = '';
  const inRange = (id, min, max, integer = false) => { const n = numeric(id); return n !== null && n >= min && n <= max && (!integer || Number.isInteger(n)) ? n : null; };
  const age = inRange('evtAge', 18, 120, true);
  const nihss = inRange('evtNihss', 0, 42, true);
  const mrs = inRange('evtMrs', 0, 6, true);
  const windowCode = val('evtWindow');
  const vessel = val('evtVessel');
  const m2Dominance = val('evtM2Dominance');
  const hemorrhage = val('evtHemorrhage');
  const aspects = inRange('evtAspects', 0, 10, true);
  const dwi = inRange('evtDwiAspects', 0, 10, true);
  const pcAspects = inRange('evtPcAspects', 0, 10, true);
  const core = inRange('evtCore', 0, 300);
  const mismatchRatio = inRange('evtMismatchRatio', 0, 20);
  const mismatchVolume = inRange('evtMismatchVolume', 0, 300);
  const massEffect = val('evtMassEffect');
  const advancedImaging = val('evtAdvancedImaging');
  const adult = age !== null && age >= 18;
  const anteriorLvo = vessel === 'ica' || vessel === 'm1';
  const basilar = vessel === 'basilar';
  const noBleed = hemorrhage === 'no';
  const earlyBR = windowCode === '0_6' || windowCode === '6_8';
  const earlyUS = windowCode === '0_6';
  const late = ['8_16','16_24'].includes(windowCode);
  const lateAHA = ['6_8','8_16','16_24'].includes(windowCode);
  // O relatório do PCDT apresenta inclusão geral com core <50 mL, mas o perfil
  // detalhado de mismatch cita <70 mL. Em caso de divergência, a ferramenta adota
  // o limite geral mais conservador e orienta conferência do protocolo integral.
  const pcdtCoreThreshold = age !== null && nihss !== null && core !== null && core < 50 && (
    (age >= 80 && nihss > 10 && core < 21) ||
    (age < 80 && nihss >= 10 && nihss <= 19 && core < 31) ||
    (age < 80 && nihss > 20 && core < 51) ||
    (windowCode === '8_16' && mismatchRatio !== null && mismatchVolume !== null && mismatchRatio > 1.8 && mismatchVolume > 15 && core < 70)
  );
  // O texto do PCDT/relatório para a janela <=8 h registra literalmente mRS prévio '0 ou 2'.
  // Para não presumir que a redação equivale a <=2, mRS 1 gera alerta de conferência local.
  const pcdtEarlyComplete = age !== null && nihss !== null && mrs !== null && aspects !== null && adult && nihss >= 6 && (mrs === 0 || mrs === 2) && noBleed && (aspects >= 6 || (dwi !== null && dwi >= 5));
  const pcdtLateComplete = adult && age <= 90 && nihss !== null && nihss >= 6 && mrs !== null && mrs <= 2 && noBleed && pcdtCoreThreshold && advancedImaging === 'yes';
  const knownAnterior = anteriorLvo;

  if (vessel === 'none' || vessel === 'other') {
    appendResult(out, 'warning', 'Oclusão fora do padrão principal das regras exibidas', 'O PCDT brasileiro e os critérios-resumo desta tela não permitem classificar automaticamente esta anatomia. M2, vasos distais e outras oclusões exigem avaliação individualizada; a seleção não deve ser negada apenas por esta tela.');
  }
  if (hemorrhage === 'yes') {
    appendResult(out, 'danger', 'Hemorragia intracraniana informada', 'A tela não prossegue com critérios de AVC isquêmico para trombectomia. Confirme a interpretação da imagem e a hipótese diagnóstica com neurorradiologia/equipe responsável.');
  }
  if (!age || !nihss && nihss !== 0 || !windowCode || !vessel || !hemorrhage) {
    appendResult(out, 'neutral', 'Dados clínicos incompletos', 'Preencha idade, NIHSS, última vez bem, vaso na angioimagem e presença/ausência de hemorragia. Os resultados abaixo são apenas triagem de critérios e não elegibilidade.');
  }

  // Brazilian PCDT 2023: anterior circulation LVO up to 8 h and selected 8–24 h.
  if (earlyBR) {
    if (!adult || !anteriorLvo || !pcdtEarlyComplete) {
      const missing = [];
      if (age === null) missing.push('idade');
      if (nihss === null) missing.push('NIHSS');
      if (mrs === null) missing.push('mRS prévio');
      if (aspects === null && dwi === null) missing.push('ASPECTS (TC) ou DWI-ASPECTS');
      if (hemorrhage === '') missing.push('exclusão de hemorragia');
      if (vessel === '' || !anteriorLvo) missing.push('oclusão ACI intracraniana/M1 confirmada');
      let why = !adult ? 'A idade informada não atende ao critério adulto do PCDT.' : 'Os dados ainda não demonstram todos os critérios resumidos do PCDT.';
      if (hemorrhage === 'yes') why = 'Hemorragia intracraniana informada.';
      if (nihss !== null && nihss < 6) why += ' NIHSS abaixo de 6.';
      if (mrs !== null && mrs > 2) why += ' mRS prévio acima de 2.';
      if (mrs === 1) why += ' O texto do PCDT para até 8 h registra literalmente mRS “0 ou 2”; mRS 1 requer conferência do protocolo institucional.';
      if (aspects !== null && aspects < 6 && (dwi === null || dwi < 5)) why += ' ASPECTS/DWI abaixo dos limiares resumidos.';
      appendResult(out, 'warning', 'PCDT brasileiro · janela até 8 horas: critérios não demonstrados/incompletos', `${why} Pendências/condições a revisar: ${missing.join('; ') || 'confirmação clínica e de imagem'}. Isso não substitui avaliação do centro de trombectomia.`);
    } else {
      appendResult(out, 'success', 'PCDT brasileiro · janela até 8 horas: perfil compatível com os critérios resumidos', 'Adulto, oclusão ACI intracraniana/M1, NIHSS ≥6, mRS prévio literalmente descrito como 0 ou 2 no texto do PCDT/relatório, sem hemorragia e ASPECTS TC ≥6 ou DWI ≥5. Confirme a imagem, a possibilidade de punção dentro da janela, contraindicações, protocolo e discussão neurovascular.');
    }
  } else if (late) {
    if (!adult || !anteriorLvo || !pcdtLateComplete) {
      let why = 'Critérios tardios do PCDT não estão todos demonstrados.';
      if (!adult) why += ' É necessário paciente adulto.';
      if (!anteriorLvo) why += ' A regra exibida requer circulação anterior com oclusão ACI/M1.';
      if (nihss !== null && nihss < 6) why += ' NIHSS abaixo de 6.';
      if (mrs !== null && mrs > 2) why += ' mRS prévio acima de 2.';
      if (age !== null && age > 90) why += ' O PCDT brasileiro descreve exclusão acima de 90 anos para a janela tardia.';
      if (core !== null && core >= 50) why += ' O relatório traz critério geral de core <50 mL, embora o perfil de mismatch cite <70 mL; o app adota o limite geral mais conservador.';
      if (core === null) why += ' Falta volume do core/perfil mismatch.';
      if (advancedImaging !== 'yes') why += ' Confirme imagem avançada (perfusão/difusão) para seleção tardia.';
      if (hemorrhage !== 'no') why += ' Confirme ausência de hemorragia.';
      appendResult(out, 'warning', 'PCDT brasileiro · janela 8–24 horas: critérios não demonstrados/incompletos', `${why} A seleção tardia exige neuroimagem avançada e avaliação do perfil clínico-radiológico; discuta com centro habilitado.`);
    } else {
      appendResult(out, 'success', 'PCDT brasileiro · janela 8–24 horas: perfil compatível com os critérios resumidos', 'Os valores clínicos e de core/mismatch inseridos correspondem a um dos perfis resumidos do PCDT. Confirme seleção por imagem, tempo exato, ausência de exclusões e protocolo do centro.');
    }
  } else if (windowCode === 'unknown') {
    appendResult(out, 'warning', 'Janela desconhecida / wake-up', 'Não classifique automaticamente. Determine a última vez bem e considere seleção por imagem avançada quando disponível, conforme diretriz, rede e protocolo institucional.');
  } else if (windowCode === 'gt24') {
    appendResult(out, 'warning', 'Além de 24 horas', 'A rotina desta ferramenta não contém critérios padrão para trombectomia além de 24 horas. Casos excepcionais exigem discussão especializada e não podem ser classificados pelo app.');
  }

  // AHA/ASA 2026 criteria, displayed separately from Brazilian PCDT.
  if (earlyUS && anteriorLvo && adult && nihss !== null && nihss >= 6 && mrs !== null && mrs <= 1 && aspects !== null && aspects >= 3 && aspects <= 10 && noBleed) {
    appendResult(out, 'success', 'AHA/ASA 2026 · circulação anterior até 6 horas: perfil compatível', 'Oclusão proximal ACI/M1, NIHSS ≥6, mRS 0–1 e ASPECTS 3–10, sem hemorragia informada. Confirme imagem completa e decisão da equipe neurovascular.');
  } else if (earlyUS && anteriorLvo && adult && nihss !== null && nihss >= 6 && mrs === 2 && aspects !== null && aspects >= 6 && noBleed) {
    appendResult(out, 'warning', 'AHA/ASA 2026 · mRS prévio 2 até 6 horas: EVT pode ser razoável', 'Oclusão proximal ACI/M1, NIHSS ≥6 e ASPECTS ≥6 com mRS prévio 2. É uma recomendação de consideração individualizada, não o mesmo perfil de recomendação forte com mRS 0–1.');
  } else if (earlyUS && anteriorLvo && adult && nihss !== null && nihss >= 6 && mrs !== null && mrs >= 3 && mrs <= 4 && aspects !== null && aspects >= 6 && noBleed) {
    appendResult(out, 'warning', 'AHA/ASA 2026 · incapacidade prévia moderada até 6 horas: considerar individualmente', 'Em pacientes com oclusão proximal ACI/M1, NIHSS ≥6 e ASPECTS ≥6, a trombectomia pode ser razoável em alguns casos com mRS prévio 3–4. A recomendação é mais fraca e exige decisão individualizada; não representa elegibilidade automática.');
  } else if (earlyUS && anteriorLvo && age !== null && age < 80 && nihss !== null && nihss >= 6 && mrs !== null && mrs <= 1 && aspects !== null && aspects <= 2 && massEffect === 'no' && noBleed) {
    appendResult(out, 'warning', 'AHA/ASA 2026 · ASPECTS 0–2 até 6 horas: considerar em pacientes selecionados', 'Perfil de idade <80 anos, NIHSS ≥6, mRS 0–1, ASPECTS 0–2 e sem efeito de massa significativo. A recomendação é individualizada e requer discussão neurovascular urgente.');
  }
  if (lateAHA && anteriorLvo && adult && nihss !== null && nihss >= 6 && mrs !== null && mrs <= 1 && aspects !== null && aspects >= 6 && noBleed) {
    appendResult(out, 'success', 'AHA/ASA 2026 · janela 6–24 horas, ASPECTS ≥6: perfil compatível', 'Oclusão proximal ACI/M1, NIHSS ≥6, mRS prévio 0–1 e ASPECTS ≥6. A diretriz recomenda EVT nesse perfil; confirme demais aspectos de imagem e protocolo local.');
  } else if (lateAHA && anteriorLvo && age !== null && age < 80 && nihss !== null && nihss >= 6 && mrs !== null && mrs <= 1 && aspects !== null && aspects >= 3 && aspects <= 5 && massEffect === 'no' && noBleed) {
    appendResult(out, 'success', 'AHA/ASA 2026 · janela 6–24 horas, ASPECTS 3–5: perfil selecionado compatível', 'Oclusão proximal ACI/M1, idade <80 anos, NIHSS ≥6, mRS 0–1, ASPECTS 3–5 e ausência de efeito de massa significativo. Confirme todos os critérios de seleção.');
  }
  if (vessel === 'm2' && earlyUS && m2Dominance === 'dominant' && adult && nihss !== null && nihss >= 6 && mrs !== null && mrs <= 1 && aspects !== null && aspects >= 6 && noBleed) {
    appendResult(out, 'warning', 'AHA/ASA 2026 · M2 dominante até 6 horas: EVT pode ser razoável em pacientes selecionados', 'Esta recomendação não se estende automaticamente a M2 não dominante/codominante ou oclusões distais. Confirme a dominância do ramo e discuta com equipe neurovascular.');
  } else if (vessel === 'm2' && m2Dominance === 'nondominant') {
    appendResult(out, 'warning', 'M2 não dominante/codominante', 'A diretriz AHA/ASA 2026 não recomenda EVT de rotina para oclusões M2 não dominantes/codominantes ou oclusões distais, por ausência de benefício demonstrado. Avaliação individualizada pode ser necessária.');
  }
  if (basilar && (earlyUS || lateAHA) && age !== null && age >= 18 && nihss !== null && nihss >= 10 && mrs !== null && mrs <= 1 && pcAspects !== null && pcAspects >= 6 && noBleed) {
    appendResult(out, 'success', 'AHA/ASA 2026 · oclusão basilar até 24 horas: perfil de recomendação forte compatível', 'Adulto com oclusão basilar, NIHSS ≥10, mRS prévio 0–1 e PC-ASPECTS ≥6. A indicação depende da avaliação especializada, imagem e decisão do centro.');
  } else if (basilar && nihss !== null && nihss >= 6 && nihss <= 9 && mrs !== null && mrs <= 1 && pcAspects !== null && pcAspects >= 6 && noBleed && (earlyUS || lateAHA)) {
    appendResult(out, 'warning', 'Oclusão basilar com NIHSS 6–9: evidência menos robusta', 'A diretriz AHA/ASA 2026 apresenta recomendação mais fraca para alguns pacientes com NIHSS 6–9. Requer avaliação neurovascular individualizada; não equiparar ao critério de recomendação forte NIHSS ≥10.');
  } else if (basilar) {
    appendResult(out, 'neutral', 'Oclusão basilar: aplicar critérios específicos de circulação posterior', 'A diretriz AHA/ASA 2026 recomenda EVT até 24 h em pacientes selecionados com NIHSS ≥10, mRS prévio 0–1 e PC-ASPECTS ≥6; NIHSS 6–9 exige análise individualizada. O resumo do PCDT brasileiro mostrado nesta tela é para circulação anterior.');
  }

  appendResult(out, 'neutral', 'Antes de encaminhar / decidir', 'Confirmar angio-TC/angio-RM e local da oclusão; definir última vez bem; revisar TC/RM (core, ASPECTS, efeito de massa, circulação posterior); documentar mRS prévio; avaliar contraindicações, comorbidades e objetivos terapêuticos; acionar imediatamente o centro habilitado. Se elegível para trombólise IV, ela geralmente não deve atrasar a trombectomia nem o encaminhamento.');
}
const evtEvaluateButton = document.getElementById('evtEvaluate');
if (evtEvaluateButton) evtEvaluateButton.addEventListener('click', evtEvaluate);
const evtClearButton = document.getElementById('evtClear');
if (evtClearButton) evtClearButton.addEventListener('click', () => {
  ['evtAge','evtNihss','evtMrs','evtWindow','evtVessel','evtM2Dominance','evtHemorrhage','evtAspects','evtDwiAspects','evtPcAspects','evtCore','evtMismatchRatio','evtMismatchVolume','evtMassEffect','evtAdvancedImaging'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('evtResults').innerHTML = '<div class="alert-card alert-neutral">Campos limpos. Preencha os dados e reavalie.</div>';
});

function generateNeuroLocalization() {
  const out = document.getElementById('neuroResults');
  out.innerHTML = '';
  const examIds = ['neuroConscious','orientation','attention','memory','neuroLanguage','dominantSide','neuroNeglect','neuroCortical','cn1','cn2','pupils','cn346','cn5','cn7','cn8','cn910','cn11','cn12','muscleBulk','involuntary','pronatorDrift','strRA','strLA','strRL','strLL','segShoulderR','segShoulderL','segElbowFlexR','segElbowFlexL','segElbowExtR','segElbowExtL','segWristR','segWristL','segFingerR','segFingerL','segHipR','segHipL','segKneeR','segKneeL','segAnkleR','segAnkleL','toneR','toneL','refBicepsR','refBicepsL','refTricepsR','refTricepsL','refBrachioR','refBrachioL','refPatellarR','refPatellarL','refAchillesR','refAchillesL','plantarR','plantarL','sensory','sensoryModalities','coordination','gait','meningeal','neuroNotes'];
  const values = Object.fromEntries(examIds.map(id => [id,val(id)]));
  const minGrade = (ids) => { const grades = ids.map(numeric).filter(n => n !== null); return grades.length ? Math.min(...grades) : null; };
  const rightArmGrade = minGrade(['strRA','segShoulderR','segElbowFlexR','segElbowExtR','segWristR','segFingerR']);
  const leftArmGrade = minGrade(['strLA','segShoulderL','segElbowFlexL','segElbowExtL','segWristL','segFingerL']);
  const rightLegGrade = minGrade(['strRL','segHipR','segKneeR','segAnkleR']);
  const leftLegGrade = minGrade(['strLL','segHipL','segKneeL','segAnkleL']);
  const rightArmWeak = rightArmGrade !== null && rightArmGrade < 5;
  const leftArmWeak = leftArmGrade !== null && leftArmGrade < 5;
  const rightLegWeak = rightLegGrade !== null && rightLegGrade < 5;
  const leftLegWeak = leftLegGrade !== null && leftLegGrade < 5;
  const rightWeak = rightArmWeak || rightLegWeak || values.pronatorDrift === 'right' || values.gait === 'hemiparetic_r';
  const leftWeak = leftArmWeak || leftLegWeak || values.pronatorDrift === 'left' || values.gait === 'hemiparetic_l';
  const rightArmMore = rightArmGrade !== null && (rightLegGrade === null || rightArmGrade < rightLegGrade);
  const leftArmMore = leftArmGrade !== null && (leftLegGrade === null || leftArmGrade < leftLegGrade);
  const legRightPred = rightLegWeak && (rightArmGrade === null || rightLegGrade < rightArmGrade);
  const legLeftPred = leftLegWeak && (leftArmGrade === null || leftLegGrade < leftArmGrade);
  const rightDtrIds = ['refBicepsR','refTricepsR','refBrachioR','refPatellarR','refAchillesR'];
  const leftDtrIds = ['refBicepsL','refTricepsL','refBrachioL','refPatellarL','refAchillesL'];
  const hasHyperreflexia = (ids, toneId) => ids.some(id => { const n = numeric(id); return n === 4 || (n === 3 && val(toneId) === 'spastic'); });
  const rightPyramidal = val('plantarR') === 'extensor' || hasHyperreflexia(rightDtrIds, 'toneR');
  const leftPyramidal = val('plantarL') === 'extensor' || hasHyperreflexia(leftDtrIds, 'toneL');
  const rightSideMoreWeak = rightWeak && !leftWeak;
  const leftSideMoreWeak = leftWeak && !rightWeak;
  const language = values.neuroLanguage;
  const dominantSide = values.dominantSide;
  const neglect = values.neuroNeglect;
  const sensory = values.sensory;
  const cn346 = values.cn346;
  const cn5 = values.cn5;
  const cn910 = values.cn910;
  const cn7 = values.cn7;
  const cn8 = values.cn8;
  const cn2 = values.cn2;
  const coord = values.coordination;
  const cortical = values.neuroCortical;
  const cranialBrainstem = [cn346,cn5,cn7,cn8,cn910,values.cn11,values.cn12,values.pupils].some(v => v && v !== 'normal');
  const crossedSensory = sensory === 'crossed' || (values.cn5 === 'sens_r' && sensory === 'left') || (values.cn5 === 'sens_l' && sensory === 'right');
  let lesionSide = '';
  let basis = [];
  if (language === 'expressive' || language === 'receptive' || language === 'global') { lesionSide = dominantSide === 'right' ? 'direito (hemisfério dominante informado)' : dominantSide === 'left' ? 'esquerdo (hemisfério dominante informado)' : 'hemisfério dominante não lateralizado'; basis.push('afasia sugere comprometimento do hemisfério dominante; a lateralização deve ser conhecida ou estimada com cautela'); }
  else if (neglect === 'left') { lesionSide = 'direito'; basis.push('negligência do hemiespaço esquerdo sugere hemisfério direito'); }
  else if (neglect === 'right') { lesionSide = 'esquerdo'; basis.push('negligência do hemiespaço direito sugere hemisfério esquerdo'); }
  else if (cn7 === 'central_r') { lesionSide = 'esquerdo'; basis.push('paresia facial central direita pode indicar lesão supranuclear esquerda'); }
  else if (cn7 === 'central_l') { lesionSide = 'direito'; basis.push('paresia facial central esquerda pode indicar lesão supranuclear direita'); }
  else if (cn346 === 'gaze_l') { lesionSide = 'esquerdo'; basis.push('desvio conjugado do olhar para a esquerda pode sugerir acometimento frontal esquerdo, mas isoladamente não define artéria nem exclui localização pontina ou fenômeno ictal'); }
  else if (cn346 === 'gaze_r') { lesionSide = 'direito'; basis.push('desvio conjugado do olhar para a direita pode sugerir acometimento frontal direito, mas isoladamente não define artéria nem exclui localização pontina ou fenômeno ictal'); }
  else if (sensory === 'right') { lesionSide = 'esquerdo'; basis.push('déficit sensitivo corporal direito sugere via sensitiva esquerda'); }
  else if (sensory === 'left') { lesionSide = 'direito'; basis.push('déficit sensitivo corporal esquerdo sugere via sensitiva direita'); }
  else if (rightPyramidal && !leftPyramidal) { lesionSide = 'esquerdo'; basis.push('sinal piramidal à direita pode indicar comprometimento corticoespinal esquerdo'); }
  else if (leftPyramidal && !rightPyramidal) { lesionSide = 'direito'; basis.push('sinal piramidal à esquerda pode indicar comprometimento corticoespinal direito'); }
  else if (rightSideMoreWeak && !leftSideMoreWeak) { lesionSide = 'esquerdo'; basis.push('fraqueza corporal direita sugere lesão supratentorial esquerda, se não houver sinais cruzados'); }
  else if (leftSideMoreWeak && !rightSideMoreWeak) { lesionSide = 'direito'; basis.push('fraqueza corporal esquerda sugere lesão supratentorial direita, se não houver sinais cruzados'); }
  if (!lesionSide && (cn2 === 'right_hh' || cn2 === 'right_quad')) { lesionSide = 'esquerdo'; basis.push('defeito homônimo/quadrântico direito sugere via visual retroquiasmática esquerda'); }
  if (!lesionSide && (cn2 === 'left_hh' || cn2 === 'left_quad')) { lesionSide = 'direito'; basis.push('defeito homônimo/quadrântico esquerdo sugere via visual retroquiasmática direita'); }

  let topo = '';
  let territory = '';
  let confidence = 'baixa';
  const faceArmRight = rightArmWeak && (rightLegGrade === null || rightArmMore);
  const faceArmLeft = leftArmWeak && (leftLegGrade === null || leftArmMore);
  const leftHemisphereEvidence = rightWeak || sensory === 'right' || cn7 === 'central_r' || rightPyramidal || neglect === 'right' || cn2 === 'right_hh' || cn2 === 'right_quad';
  const rightHemisphereEvidence = leftWeak || sensory === 'left' || cn7 === 'central_l' || leftPyramidal || neglect === 'left' || cn2 === 'left_hh' || cn2 === 'left_quad';
  const knownDominantMotorMismatch = (dominantSide === 'left' && leftWeak) || (dominantSide === 'right' && rightWeak);

  // Crossed cranial-nerve and long-tract findings take precedence over hemispheric heuristics.
  if ((values.cn5 === 'sens_r' && sensory === 'left') || (values.cn5 === 'sens_l' && sensory === 'right')) {
    const side = values.cn5 === 'sens_r' ? 'direito' : 'esquerdo';
    topo = `Tronco encefálico ${side} (via trigeminal ipsilateral + via espinotalâmica contralateral)`;
    territory = 'Ponte lateral ou junção pontobulbar; circulação vértebro-basilar. AICA/PICA dependem dos demais sinais e da angioimagem';
    confidence = 'moderada';
  } else if (cn346 === 'iii_r' && (leftWeak || sensory === 'left')) {
    topo = 'Mesencéfalo direito (síndrome alterna mesencefálica possível)'; territory = 'Circulação posterior: perfurantes da ACP/basilar — correlacionar com angioimagem'; confidence = 'moderada';
  } else if (cn346 === 'iii_l' && (rightWeak || sensory === 'right')) {
    topo = 'Mesencéfalo esquerdo (síndrome alterna mesencefálica possível)'; territory = 'Circulação posterior: perfurantes da ACP/basilar — correlacionar com angioimagem'; confidence = 'moderada';
  } else if ((cn346 === 'vi_r' || cn7 === 'peripheral_r') && (leftWeak || sensory === 'left' || sensory === 'crossed')) {
    topo = 'Ponte direita (lesão pontina com possível acometimento de tratos longos)'; territory = cn8 === 'hearing_r' || cn8 === 'vestibular' ? 'Sistema vértebro-basilar; AICA é uma possibilidade se houver sinais cocleovestibulares/faciais' : 'Circulação basilar / ramos pontinos; correlacionar com angioimagem'; confidence = 'moderada';
  } else if ((cn346 === 'vi_l' || cn7 === 'peripheral_l') && (rightWeak || sensory === 'right' || sensory === 'crossed')) {
    topo = 'Ponte esquerda (lesão pontina com possível acometimento de tratos longos)'; territory = cn8 === 'hearing_l' || cn8 === 'vestibular' ? 'Sistema vértebro-basilar; AICA é uma possibilidade se houver sinais cocleovestibulares/faciais' : 'Circulação basilar / ramos pontinos; correlacionar com angioimagem'; confidence = 'moderada';
  } else if ((cn910 === 'right' || values.cn12 === 'right') && (leftWeak || sensory === 'left' || sensory === 'crossed')) {
    topo = 'Bulbo direito (síndrome bulbar alterna possível)'; territory = 'Artéria vertebral/PICA ou artéria espinal anterior, conforme síndrome e imagem'; confidence = 'moderada';
  } else if ((cn910 === 'left' || values.cn12 === 'left') && (rightWeak || sensory === 'right' || sensory === 'crossed')) {
    topo = 'Bulbo esquerdo (síndrome bulbar alterna possível)'; territory = 'Artéria vertebral/PICA ou artéria espinal anterior, conforme síndrome e imagem'; confidence = 'moderada';
  } else if (crossedSensory) {
    topo = 'Tronco encefálico (síndrome sensitiva cruzada)'; territory = 'Circulação vértebro-basilar; PICA/AICA dependem dos sinais associados'; confidence = 'moderada';
  } else if (coord === 'right' || coord === 'truncal' || (coord === 'bilateral' && cranialBrainstem)) {
    topo = coord === 'right' ? 'Hemisfério cerebelar direito / conexões cerebelares' : 'Cerebelo / conexões cerebelares'; territory = cn8 === 'hearing_r' || cn7 === 'peripheral_r' ? 'AICA direita possível' : cn8 === 'hearing_l' || cn7 === 'peripheral_l' ? 'AICA esquerda possível' : 'PICA/SCA/AICA conforme topografia e sinais associados'; confidence = 'baixa a moderada';
  } else if (coord === 'left') {
    topo = 'Hemisfério cerebelar esquerdo ou conexões cerebelares'; territory = 'PICA/SCA/AICA esquerdas — depende do padrão clínico e vascular'; confidence = 'baixa a moderada';
  } else if (coord === 'bilateral' || values.gait === 'ataxic' || cn8 === 'vestibular') {
    topo = 'Circuitos vestibulocerebelares / cerebelo / tronco encefálico'; territory = 'Sistema vértebro-basilar; não é possível distinguir PICA, AICA ou SCA apenas por estes campos'; confidence = 'baixa';
  } else if (sensory === 'level') {
    topo = 'Medula espinal — considerar mielopatia com nível sensitivo'; territory = 'Não sugere artéria cerebral única; investigar etiologia medular/vascular medular conforme início e exame'; confidence = 'baixa a moderada';
  } else if (rightWeak && leftWeak) {
    topo = 'Comprometimento motor bilateral / lesão extensa ou multifocal'; territory = 'Não atribuir artéria única; considerar circulação posterior/basilar, lesões múltiplas, patologia medular e causas sistêmicas'; confidence = 'baixa';
  } else if (leftHemisphereEvidence && rightHemisphereEvidence) {
    topo = 'Achados com lateralização supratentorial discordante'; territory = 'Não atribuir uma única artéria: reexaminar lateralidade, considerar lesões múltiplas/bilaterais, dominância atípica ou erro de caracterização dos sinais; correlacionar com imagem'; confidence = 'baixa';
  } else if (knownDominantMotorMismatch && (language === 'expressive' || language === 'receptive' || language === 'global')) {
    topo = 'Afasia e déficit motor com lateralização não concordante'; territory = 'Reconfirmar hemisfério dominante, lateralidade da força, possíveis lesões múltiplas e achados de imagem antes de sugerir artéria'; confidence = 'baixa';
  } else if (rightPyramidal && leftPyramidal) {
    topo = 'Sinais piramidais bilaterais'; territory = 'Não localiza uma artéria única; considerar lesão encefálica bilateral, medular cervical, doença prévia ou combinação de condições'; confidence = 'baixa';
  } else if (sensory === 'bilateral') {
    topo = 'Déficit sensitivo bilateral'; territory = 'Não atribuir território arterial único; considerar lesão talâmica bilateral, tronco, medula, neuropatia ou causas sistêmicas conforme padrão e temporalidade'; confidence = 'baixa';
  } else if (language === 'expressive' || language === 'receptive' || language === 'global' || neglect === 'left' || neglect === 'right' || rightWeak || leftWeak || cn2 === 'right_hh' || cn2 === 'left_hh' || cn2 === 'right_quad' || cn2 === 'left_quad' || cn7 === 'central_r' || cn7 === 'central_l' || cn346 === 'gaze_r' || sensory === 'right' || sensory === 'left' || cortical === 'apraxia' || cortical === 'agnosia' || cortical === 'abulia' || rightPyramidal || leftPyramidal) {
    const dominant = language === 'expressive' || language === 'receptive' || language === 'global';
    if (dominant) {
      const domHemisphere = dominantSide === 'right' ? 'direito' : dominantSide === 'left' ? 'esquerdo' : 'dominante, não lateralizado';
      topo = dominantSide ? `Hemisfério cerebral ${domHemisphere} dominante` : 'Hemisfério cerebral dominante (geralmente esquerdo, mas não presumir sem contexto)';
      const mcaSide = dominantSide === 'right' ? 'direita' : dominantSide === 'left' ? 'esquerda' : 'do hemisfério dominante';
      territory = faceArmRight || faceArmLeft ? `Artéria cerebral média ${mcaSide} possível (síndrome cortical/perissilviana); confirmar dominância e angioimagem` : (legRightPred || legLeftPred) ? 'Artéria cerebral anterior do hemisfério dominante é uma possibilidade; confirmar lateralização e imagem' : `Artéria cerebral média ${mcaSide} é uma possibilidade; confirmar lateralização e imagem`;
      confidence = 'moderada';
    } else if (neglect === 'left' || leftWeak || leftPyramidal || cn7 === 'central_l') {
      topo = 'Hemisfério cerebral direito';
      territory = legLeftPred ? 'Artéria cerebral anterior direita é uma possibilidade' : 'Artéria cerebral média direita é uma possibilidade, especialmente com negligência e déficit face/braço';
      confidence = 'moderada';
    } else if (neglect === 'right' || rightWeak || cn7 === 'central_r' || sensory === 'right' || rightPyramidal) {
      topo = 'Hemisfério cerebral esquerdo';
      territory = legRightPred ? 'Artéria cerebral anterior esquerda é uma possibilidade' : 'Artéria cerebral média esquerda é uma possibilidade';
      confidence = 'moderada';
    } else if (cn2 === 'right_hh' || cn2 === 'right_quad') {
      topo = 'Via visual retroquiasmática esquerda'; territory = 'Artéria cerebral posterior esquerda é uma possibilidade; radiações ópticas da ACM também podem estar envolvidas conforme o padrão'; confidence = 'baixa a moderada';
    } else if (cn2 === 'left_hh' || cn2 === 'left_quad') {
      topo = 'Via visual retroquiasmática direita'; territory = 'Artéria cerebral posterior direita é uma possibilidade; radiações ópticas da ACM também podem estar envolvidas conforme o padrão'; confidence = 'baixa a moderada';
    } else if (sensory === 'left' || cn7 === 'central_l' || leftPyramidal) {
      topo = 'Hemisfério cerebral direito / via sensitiva supratentorial'; territory = 'Tálamo (perfurantes da ACP) ou córtex parietal (ACM), conforme o padrão sensitivo'; confidence = 'baixa a moderada';
    } else if (sensory === 'right' || cn7 === 'central_r' || rightPyramidal) {
      topo = 'Hemisfério cerebral esquerdo / via sensitiva supratentorial'; territory = 'Tálamo (perfurantes da ACP) ou córtex parietal (ACM), conforme o padrão sensitivo'; confidence = 'baixa a moderada';
    } else if (lesionSide.startsWith('esquerdo')) {
      topo = 'Hemisfério cerebral esquerdo'; territory = 'Rede frontoparietal esquerda / circulação anterior; artéria específica depende dos sinais associados e da imagem'; confidence = 'baixa a moderada';
    } else if (lesionSide.startsWith('direito')) {
      topo = 'Hemisfério cerebral direito'; territory = 'Rede frontoparietal direita / circulação anterior; artéria específica depende dos sinais associados e da imagem'; confidence = 'baixa a moderada';
    } else if (cortical === 'abulia') {
      topo = 'Região frontal medial / circuito frontossubcortical'; territory = 'Artéria cerebral anterior é uma possibilidade; excluir causas difusas'; confidence = 'baixa';
    } else if (cortical === 'apraxia' || cortical === 'agnosia') {
      topo = 'Rede cortical associativa (parietal/temporal)'; territory = 'Artéria cerebral média é uma possibilidade; a lateralização depende do tipo de apraxia/agnosia e do restante do exame'; confidence = 'baixa';
    } else {
      topo = 'Via visual retroquiasmática / hemisfério contralateral ao defeito de campo'; territory = 'Artéria cerebral posterior é uma possibilidade'; confidence = 'baixa a moderada';
    }
    const corticalSigns = dominant || neglect !== '' && neglect !== 'none' || cortical === 'apraxia' || cortical === 'agnosia';
    if (!corticalSigns && (rightWeak || leftWeak) && !cranialBrainstem && (sensory === 'right' || sensory === 'left' || sensory === 'normal' || sensory === '')) {
      topo += ' — considerar também cápsula interna/corona radiata';
      territory += '; se síndrome motora/sensitiva pura, considerar perfurantes lenticuloestriadas (MCA) ou coroidea anterior';
    }
  } else if (cranialBrainstem) {
    topo = 'Achado de nervo craniano isolado — localização central versus periférica indeterminada';
    territory = 'Não atribuir artéria culpada sem sinais associados de trato longo ou imagem vascular; considerar trajeto nuclear/fascicular, base do crânio e causas não vasculares';
    confidence = 'baixa';
  } else if (values.neuroConscious === 'coma' || values.neuroConscious === 'stupor') {
    topo = 'Sem localização focal definida pelos campos preenchidos'; territory = 'Reavaliar tronco encefálico, circulação posterior, causas metabólicas/tóxicas e crises não convulsivas; neuroimagem urgente'; confidence = 'baixa';
  }

  if (topo) {
    appendResult(out, confidence.includes('moderada') ? 'warning' : 'neutral', `Hipótese topográfica (${confidence} confiança)`, topo + (basis.length ? `. Fundamentação: ${basis.join('; ')}.` : '.'));
    appendResult(out, 'neutral', 'Território arterial possível — não confirmado', territory + '. A artéria culpada só pode ser definida com integração clínica e imagem vascular.');
  } else {
    appendResult(out, 'neutral', 'Localização ainda indeterminada', 'Os campos informados não compõem um padrão focal suficiente para sugerir topografia. Complete o exame ou descreva melhor os achados, lembrando que um exame parcial não exclui AVC.');
  }
  const recorded = [];
  const labels = {neuroConscious:'consciência',orientation:'orientação',attention:'atenção',memory:'memória',neuroLanguage:'linguagem',dominantSide:'dominância da linguagem',neuroNeglect:'negligência',neuroCortical:'outros sinais corticais',cn1:'NC I',cn2:'NC II',pupils:'pupilas',cn346:'NC III/IV/VI',cn5:'NC V',cn7:'NC VII',cn8:'NC VIII',cn910:'NC IX/X',cn11:'NC XI',cn12:'NC XII',muscleBulk:'trofismo',involuntary:'movimentos involuntários',pronatorDrift:'pronator drift',strRA:'força global braço D',strLA:'força global braço E',strRL:'força global perna D',strLL:'força global perna E',segShoulderR:'abdução ombro D',segShoulderL:'abdução ombro E',segElbowFlexR:'flexão cotovelo D',segElbowFlexL:'flexão cotovelo E',segElbowExtR:'extensão cotovelo D',segElbowExtL:'extensão cotovelo E',segWristR:'extensão punho D',segWristL:'extensão punho E',segFingerR:'abdução dedos D',segFingerL:'abdução dedos E',segHipR:'flexão quadril D',segHipL:'flexão quadril E',segKneeR:'extensão joelho D',segKneeL:'extensão joelho E',segAnkleR:'dorsiflexão tornozelo D',segAnkleL:'dorsiflexão tornozelo E',toneR:'tônus D',toneL:'tônus E',refBicepsR:'bicipital D',refBicepsL:'bicipital E',refTricepsR:'tricipital D',refTricepsL:'tricipital E',refBrachioR:'estilorradial D',refBrachioL:'estilorradial E',refPatellarR:'patelar D',refPatellarL:'patelar E',refAchillesR:'aquileu D',refAchillesL:'aquileu E',plantarR:'plantar D',plantarL:'plantar E',sensory:'sensibilidade',sensoryModalities:'modalidades sensitivas',coordination:'coordenação',gait:'marcha',meningeal:'sinais meníngeos'};
  Object.entries(labels).forEach(([key,label]) => {
    const el = document.getElementById(key);
    if (!el || values[key] === '') return;
    const chosen = el.tagName === 'SELECT' ? el.options[el.selectedIndex]?.textContent?.trim() : values[key];
    if (chosen) recorded.push(`${label}: ${chosen}`);
  });
  if (values.neuroNotes) recorded.push(`Observações: ${values.neuroNotes}`);
  appendResult(out, 'neutral', 'Campos preenchidos', recorded.length ? recorded.join(' · ') : 'Nenhum campo preenchido. Campos vazios permanecem como não avaliados.');
  appendResult(out, 'warning', 'Próxima etapa', 'Reconfirmar sinais, tempo de início/última vez bem, glicemia e neuroimagem. Em suspeita de AVC agudo, solicitar TC sem contraste e angio-TC de crânio/pescoço conforme fluxo local; não aguardar a saída desta ferramenta para acionar equipe de AVC.');
}
const neuroAnalyzeButton = document.getElementById('neuroAnalyze');
if (neuroAnalyzeButton) neuroAnalyzeButton.addEventListener('click', generateNeuroLocalization);
const neuroClearButton = document.getElementById('neuroClear');
if (neuroClearButton) neuroClearButton.addEventListener('click', () => {
  document.querySelectorAll('#neuroexam input, #neuroexam select').forEach(el => el.value='');
  document.getElementById('neuroResults').innerHTML = '<div class="alert-card alert-neutral">Campos limpos. Preencha o exame e gere uma nova hipótese.</div>';
});

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      showToast('Não foi possível ativar o cache offline neste endereço.');
    });
  });
}


// NeuroSanta 0.5.1 — fisiologia e cálculo ponderal, sem persistência de dados.
const weightInput = document.getElementById('weightInput');
const sbpInput = document.getElementById('sbpInput');
const dbpInput = document.getElementById('dbpInput');
const glucoseInput = document.getElementById('glucoseInput');
const vitalsAlerts = document.getElementById('vitalsAlerts');
const drugSelect = document.getElementById('drugSelect');
const eligibilityConfirm = document.getElementById('eligibilityConfirm');
const calculatorStatus = document.getElementById('calculatorStatus');
const doseResult = document.getElementById('doseResult');
const tenecteplaseWarning = document.getElementById('tenecteplaseWarning');

function readNumber(input) {
  const raw = input.value.trim();
  if (!raw) return null;
  const value = Number(raw.replace(',', '.'));
  return Number.isFinite(value) ? value : null;
}
function fmt(value, digits = 1) {
  return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: digits });
}
function addAlert(container, kind, title, message) {
  const card = document.createElement('div');
  card.className = `alert-card alert-${kind}`;
  const strong = document.createElement('strong');
  strong.textContent = title;
  const body = document.createElement('span');
  body.textContent = message;
  card.append(strong, body);
  container.append(card);
}
function vitalsAssessment() {
  const sbp = readNumber(sbpInput);
  const dbp = readNumber(dbpInput);
  const glucose = readNumber(glucoseInput);
  const weight = readNumber(weightInput);
  const bpEntered = sbp !== null && dbp !== null;
  const glucoseEntered = glucose !== null;
  const weightValid = weight !== null && weight > 0 && weight <= 300;
  const bpValid = bpEntered && sbp >= 40 && sbp <= 300 && dbp >= 20 && dbp <= 200;
  const bpAbove = bpValid && (sbp >= 185 || dbp >= 110);
  const glucoseExtreme = glucoseEntered && (glucose < 60 || glucose > 400);
  const parametersComplete = weightValid && bpValid && glucoseEntered && glucose > 0;
  const canProceedToCalculation = parametersComplete && !bpAbove && !glucoseExtreme && eligibilityConfirm.checked;
  return { sbp, dbp, glucose, weight, bpEntered, glucoseEntered, weightValid, bpValid, bpAbove, glucoseExtreme, parametersComplete, canProceedToCalculation };
}
function renderVitals() {
  const v = vitalsAssessment();
  vitalsAlerts.innerHTML = '';
  if (!v.bpEntered) {
    addAlert(vitalsAlerts, 'neutral', 'Pressão arterial pendente', 'Informe PAS e PAD para comparar com os limiares pré-trombólise.');
  } else if (!v.bpValid) {
    addAlert(vitalsAlerts, 'warning', 'Confira a pressão arterial', 'Os valores informados não parecem válidos.');
  } else if (v.bpAbove) {
    addAlert(vitalsAlerts, 'danger', 'Pressão acima do limiar pré-IVT', `PAS ${fmt(v.sbp,0)} e/ou PAD ${fmt(v.dbp,0)} mmHg. A meta antes da trombólise é PAS <185 e PAD <110 mmHg. Corrija conforme protocolo, repita as medidas e reavalie; hipertensão persistente/refratária impede iniciar IVT.`);
  } else {
    addAlert(vitalsAlerts, 'success', 'Pressão abaixo dos limiares pré-IVT', `PAS ${fmt(v.sbp,0)} / PAD ${fmt(v.dbp,0)} mmHg. Isso satisfaz apenas o critério pressórico; não confirma elegibilidade para trombólise.`);
  }

  if (!v.glucoseEntered) {
    addAlert(vitalsAlerts, 'neutral', 'Glicemia pendente', 'Informe a glicemia capilar/plasmática para identificar extremos que exigem correção e reavaliação.');
  } else if (v.glucose <= 0) {
    addAlert(vitalsAlerts, 'warning', 'Confira a glicemia', 'Informe um valor maior que zero em mg/dL.');
  } else if (v.glucose < 50) {
    addAlert(vitalsAlerts, 'danger', 'Hipoglicemia grave', `Glicemia ${fmt(v.glucose,0)} mg/dL. Corrija imediatamente e reavalie o déficit após normalização. Se persistir déficit incapacitante, a elegibilidade para IVT deve ser reavaliada; este valor isolado não substitui a avaliação clínica.`);
  } else if (v.glucose < 60) {
    addAlert(vitalsAlerts, 'warning', 'Hipoglicemia significativa', `Glicemia ${fmt(v.glucose,0)} mg/dL. Corrija e repita a medida; reavalie os déficits antes de decidir sobre IVT.`);
  } else if (v.glucose > 400) {
    addAlert(vitalsAlerts, 'danger', 'Hiperglicemia grave', `Glicemia ${fmt(v.glucose,0)} mg/dL. Corrija e reavalie o déficit após tratamento; se persistir déficit incapacitante, a elegibilidade para IVT deve ser reconsiderada.`);
  } else if (v.glucose > 180) {
    addAlert(vitalsAlerts, 'warning', 'Hiperglicemia', `Glicemia ${fmt(v.glucose,0)} mg/dL. Maneje conforme protocolo, evitando hipoglicemia. Não se recomenda controle intensivo rotineiro para 80–130 mg/dL.`);
  } else {
    addAlert(vitalsAlerts, 'success', 'Sem extremo glicêmico sinalizado', `Glicemia ${fmt(v.glucose,0)} mg/dL. O valor isolado não confirma elegibilidade; mantenha a avaliação clínica e o protocolo institucional.`);
  }
  addAlert(vitalsAlerts, 'neutral', 'Lembrete de segurança', 'A NIHSS, PA e glicemia não definem sozinhas a indicação. Verifique horário/última vez bem, neuroimagem, diagnóstico, contraindicações, exames pertinentes e protocolo vigente.');

  updateDoseCalculator(v);
}
function updateDoseCalculator(v = vitalsAssessment()) {
  const drug = drugSelect.value;
  tenecteplaseWarning.hidden = drug !== 'tenecteplase';
  doseResult.hidden = true;
  doseResult.innerHTML = '';
  if (!v.parametersComplete) {
    calculatorStatus.className = 'alert-card alert-neutral';
    calculatorStatus.textContent = 'Preencha peso, PAS, PAD e glicemia com valores válidos para habilitar a calculadora.';
    return;
  }
  if (v.bpAbove) {
    calculatorStatus.className = 'alert-card alert-danger';
    calculatorStatus.textContent = 'Cálculo bloqueado: PA permanece acima do limiar pré-IVT. Corrija, repita as medidas e atualize os valores antes de prosseguir.';
    return;
  }
  if (v.glucoseExtreme) {
    calculatorStatus.className = 'alert-card alert-warning';
    calculatorStatus.textContent = 'Cálculo bloqueado até corrigir o extremo glicêmico e reavaliar o déficit. Atualize a glicemia após a correção. Se persistir déficit incapacitante, reavalie a elegibilidade de acordo com a diretriz e o protocolo local.';
    return;
  }
  if (!v.weightValid) {
    calculatorStatus.className = 'alert-card alert-warning';
    calculatorStatus.textContent = 'Peso inválido. Informe um peso entre 1 e 300 kg.';
    return;
  }
  if (!eligibilityConfirm.checked) {
    calculatorStatus.className = 'alert-card alert-neutral';
    calculatorStatus.textContent = 'Parâmetros inseridos sem alerta pressórico/glicêmico extremo. A calculadora permanece bloqueada até a confirmação explícita da equipe de que os demais critérios foram verificados e a decisão já foi tomada.';
    return;
  }
  calculatorStatus.className = 'alert-card alert-warning';
  calculatorStatus.textContent = 'Confirmação registrada localmente nesta tela. O cálculo abaixo não certifica indicação nem substitui dupla checagem independente.';

  let html = '';
  if (drug === 'alteplase') {
    const total = Math.min(0.9 * v.weight, 90);
    const bolus = total * 0.10;
    const infusion = total - bolus;
    // The Brazilian PCDT and product kit use a reconstituted concentration of 1 mg/mL.
    html = `<h4>Alteplase · cálculo por peso</h4>
      <div class="dose-hero"><b>${fmt(total,2)} mg</b><span>dose total · ${fmt(v.weight,1)} kg</span></div>
      <div class="dose-detail-grid">
        <div class="dose-detail"><span>Bolus (10% em 1 min)</span><strong>${fmt(bolus,2)} mg / ${fmt(bolus,2)} mL</strong></div>
        <div class="dose-detail"><span>Infusão (90% em 60 min)</span><strong>${fmt(infusion,2)} mg / ${fmt(infusion,2)} mL</strong></div>
        <div class="dose-detail"><span>Dose calculada</span><strong>0,9 mg/kg</strong></div>
        <div class="dose-detail"><span>Concentração assumida</span><strong>1 mg/mL</strong></div>
      </div>
      <p class="dose-instructions"><strong>Preparo:</strong> reconstituir utilizando o diluente/água para injetáveis fornecido no kit, conforme a bula da apresentação disponível, para concentração final de 1 mg/mL. Administrar 10% da dose em bolus IV durante 1 minuto e os 90% restantes em bomba de infusão durante 60 minutos. Não improvisar diluição nem substituir o diluente da apresentação.</p>
      <p class="dose-warning">Dose máxima considerada: 90 mg. Confira peso, apresentação, reconstituição, dose, volume e programação da bomba com um segundo profissional antes de administrar.</p>`;
  } else {
    const total = Math.min(0.25 * v.weight, 25);
    const volume = total / 5;
    html = `<h4>Tenecteplase · cálculo por peso</h4>
      <div class="dose-hero"><b>${fmt(total,2)} mg</b><span>dose total · ${fmt(v.weight,1)} kg</span></div>
      <div class="dose-detail-grid">
        <div class="dose-detail"><span>Bolus único</span><strong>${fmt(total,2)} mg / ${fmt(volume,2)} mL</strong></div>
        <div class="dose-detail"><span>Dose calculada</span><strong>0,25 mg/kg</strong></div>
        <div class="dose-detail"><span>Concentração assumida</span><strong>5 mg/mL</strong></div>
        <div class="dose-detail"><span>Volume final</span><strong>${fmt(volume,2)} mL</strong></div>
      </div>
      <p class="dose-instructions"><strong>Preparo:</strong> concentração de 5 mg/mL após reconstituição; para Metalyse 40 mg, a bula descreve 8 mL de diluente; para 50 mg, 10 mL. Usar exclusivamente a seringa/diluente fornecidos e confirmar a apresentação do frasco. Administrar a dose calculada em bolus IV único durante 5–10 segundos, conforme protocolo institucional.</p>
      <p class="dose-warning">Dose máxima considerada: 25 mg. Uso em AVC no Brasil pode ser off-label; o PCDT nacional consultado descreve alteplase e a bula brasileira de Metalyse consultada indica IAM. Só utilizar quando previsto em protocolo institucional aprovado. Confirmar produto e concentração antes de administrar. Esta tela calcula 0,25 mg/kg exatos; se o protocolo do serviço utilizar tabela por faixas de peso ou arredondamento, siga a tabela institucional validada e não combine os métodos.</p>`;
  }
  doseResult.innerHTML = html;
  doseResult.hidden = false;
}

[weightInput, sbpInput, dbpInput, glucoseInput].forEach(input => input.addEventListener('input', renderVitals));
drugSelect.addEventListener('change', () => updateDoseCalculator());
eligibilityConfirm.addEventListener('change', () => updateDoseCalculator());
renderVitals();
