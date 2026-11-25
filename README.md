# NeuroSanta · protótipo 0.5.1

PWA em português brasileiro, responsiva para Android, iPhone e computador. Após a primeira carga por HTTPS, os arquivos do aplicativo ficam disponíveis em cache offline.

## Módulos

- **NIHSS:** 15 campos de pontuação, instruções e resultado total protegido contra itens não testáveis. O título do primeiro módulo identifica a escala; nos itens 9 e 10, o bloco de instruções oferece link direto ao PDF brasileiro da Ação AVC com os estímulos de figura, nomeação, leitura e disartria.
- **Trombólise:** parâmetros clínicos, alertas e calculadora por peso da versão anterior. A calculadora é auxiliar e não determina elegibilidade.
- **Trombectomia:** campos de idade, NIHSS, mRS prévio, tempo desde a última vez bem, vaso (incluindo M2 dominante/não dominante), hemorragia, ASPECTS, PC-ASPECTS, core e mismatch. Exibe separadamente critérios resumidos do PCDT brasileiro (2023) e recomendações selecionadas da AHA/ASA 2026, incluindo seleção anterior até 6 h e 6–24 h, perfis de ASPECTS 3–5 e 0–2, M2 dominante selecionado e oclusão basilar.
- **Exame neurológico:** consciência, orientação, atenção, memória, funções corticais, pares cranianos I–XII, força MRC, tônus, reflexos profundos, respostas plantares, sensibilidade, coordenação e marcha. Gera hipótese heurística de localização/território arterial com grau de confiança e limitações.
- **Guia e Sobre:** lembretes, referências, privacidade e limites do protótipo.

## Link dos estímulos da NIHSS

O PDF brasileiro não é copiado para o pacote. Os itens 9 e 10 exibem link contextual direto para:

https://www.acaoavc.org.br/assets/arquivos/nihss_traduzida_e_adaptada_brasil.pdf

O PDF exige internet. Para uso offline, o serviço deve disponibilizar cópia institucional autorizada do material padronizado. A referência no app não representa autorização de reprodução nem validação dos algoritmos.

## Trombectomia — escopo do resumo

O PCDT brasileiro de 2023 é apresentado separadamente das recomendações selecionadas da AHA/ASA 2026, pois os conjuntos de critérios e contextos regulatórios não são idênticos. Para a janela inicial do PCDT, a tela resume pacientes adultos com oclusão ACI intracraniana/M1, NIHSS ≥6, mRS prévio conforme redação publicada (o relatório de recomendação registra literalmente “0 ou 2”; mRS 1 exige conferência da interpretação institucional), ausência de hemorragia e ASPECTS TC ≥6 ou DWI ≥5, com tratamento até 8 h. Na janela 8–24 h, a tela resume perfis selecionados por core/mismatch descritos no protocolo. Como o relatório apresenta critério geral de core <50 mL e um perfil específico de mismatch com core <70 mL, a ferramenta adota o limite geral mais conservador (<50 mL) para evitar classificação automática em zona de divergência. AHA/ASA 2026 inclui oclusão proximal ACI/M1 até 6 h (ASPECTS 3–10), e entre 6–24 h com ASPECTS ≥6; selecionados com ASPECTS 3–5 entre 6–24 h (idade <80 anos e sem efeito de massa significativo); casos selecionados com ASPECTS 0–2 até 6 h; consideração individualizada em pacientes com mRS prévio 2 ou 3–4 e ASPECTS ≥6 até 6 h; oclusão basilar até 24 h; e consideração de M2 dominante em janela inicial. Consulte os documentos integrais e o protocolo local.

**Importante:** a tela não substitui critérios completos de inclusão/exclusão, análise de imagem, acesso a centro habilitado ou decisão da equipe neurovascular. O resultado “perfil compatível” não significa candidato aprovado.

## Exame e hipótese topográfica

O gerador de topografia usa regras simplificadas para reconhecer padrões hemisféricos, ACA/MCA/PCA, cápsula interna/corona radiata e síndromes de tronco/cerebelo. A localização é uma hipótese, não uma identificação da artéria culpada. A neuroimagem vascular é indispensável para confirmar local da oclusão. Os campos não preenchidos são tratados como “não avaliados”, não como normais.

## Teste local

1. Extraia o ZIP.
2. Para abrir rapidamente, execute `index.html` em navegador moderno.
3. Para testar a instalação PWA e o cache offline, na pasta rode `python3 -m http.server 8080` e acesse `http://localhost:8080`. Em hospedagem real, utilize HTTPS.
4. Abra o app uma vez conectado e depois ative modo avião. O PDF externo dos itens 9/10 não estará disponível sem internet, salvo se o serviço tiver disponibilizado o documento padronizado localmente por meio autorizado.

## Antes de uso assistencial

- Revisão independente de todas as instruções NIHSS com a versão brasileira efetivamente adotada pelo serviço.
- Revisão dos critérios de trombectomia por equipe neurovascular e adequação ao protocolo da Santa Casa/rede de referência.
- Validação dos cálculos farmacológicos por neurologia, farmácia clínica e protocolo institucional.
- Testes de software, acessibilidade, usabilidade, privacidade e segurança clínica.
- O algoritmo de localização deve ser tratado como ferramenta educacional/apoio e não como sistema diagnóstico autônomo.

## Referências principais

1. Cincura C, Pontes-Neto OM, Neville IS, et al. Validation of the NIHSS, mRS and Barthel Index in Brazil. *Cerebrovasc Dis.* 2009;27(2):119–122. doi:10.1159/000177918.
2. Brasil. Portaria Conjunta SAES/SECTICS nº 29, de 12 de dezembro de 2023. PCDT — Acidente Vascular Cerebral Isquêmico Agudo. https://www.gov.br/saude/pt-br/assuntos/pcdt/a/acidente-vascular-cerebral-isquemico-agudo
3. Prabhakaran S, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. *Stroke.* 2026. doi:10.1161/STR.0000000000000513. https://doi.org/10.1161/STR.0000000000000513
4. Pontes-Neto OM. Tradução e adaptação da NIHSS para português brasileiro. Ação AVC. https://www.acaoavc.org.br/assets/arquivos/nihss_traduzida_e_adaptada_brasil.pdf

## Aviso

NeuroSanta é um protótipo independente, não validado e não endossado institucionalmente. Não orienta autonomamente decisões diagnósticas ou terapêuticas, não substitui treinamento, protocolos, documentos oficiais, discussão com equipe especializada ou checagem independente.

## Estrutura

- `index.html`: interface e conteúdo.
- `styles.css`: estilos responsivos.
- `app.js`: lógica da NIHSS, trombólise, triagem de trombectomia e hipótese topográfica.
- `manifest.webmanifest`: metadados PWA.
- `sw.js`: cache offline.
- `assets/`: ícones.
