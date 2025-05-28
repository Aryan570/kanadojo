const N3 = [
  {
    id: 1,
    kanjiChar: '政',
    onyomi: ['sei セイ'],
    kunyomi: ['matsurigoto まつりごと'],
    displayMeanings: ['politics', 'government'],
    fullDisplayMeanings: ['politics', 'government'],
    meanings: ['politics', 'government']
  },
  {
    id: 2,
    kanjiChar: '議',
    onyomi: ['gi ギ'],
    kunyomi: [],
    displayMeanings: ['deliberation', 'consultation', 'debate'],
    fullDisplayMeanings: ['deliberation', 'consultation', 'debate'],
    meanings: ['deliberation', 'consultation', 'debate']
  },
  {
    id: 3,
    kanjiChar: '民',
    onyomi: ['min ミン'],
    kunyomi: ['tami たみ'],
    displayMeanings: ['people', 'nation', 'subjects'],
    fullDisplayMeanings: ['people', 'nation', 'subjects'],
    meanings: ['people', 'nation', 'subjects']
  },
  {
    id: 4,
    kanjiChar: '連',
    onyomi: ['ren レン'],
    kunyomi: ['tsura(naru) つら(なる)', 'tsu(reru) つ(れる)'],
    displayMeanings: ['take along', 'lead', 'join', 'connect'],
    fullDisplayMeanings: ['take along', 'lead', 'join', 'connect'],
    meanings: ['take along', 'lead', 'join', 'connect']
  },
  {
    id: 5,
    kanjiChar: '対',
    onyomi: ['tai タイ', 'tsui ツイ'],
    kunyomi: [],
    displayMeanings: [
      'opposite',
      'even',
      'equal',
      'versus',
      'anti-',
      'compare'
    ],
    fullDisplayMeanings: [
      'opposite',
      'even',
      'equal',
      'versus',
      'anti-',
      'compare'
    ],
    meanings: ['opposite', 'even', 'equal', 'versus', 'anti-', 'compare']
  },
  {
    id: 6,
    kanjiChar: '部',
    onyomi: ['bu ブ'],
    kunyomi: [],
    displayMeanings: [
      'section',
      'bureau',
      'dept',
      'class',
      'copy',
      'part',
      'portion'
    ],
    fullDisplayMeanings: [
      'section',
      'bureau',
      'dept',
      'class',
      'copy',
      'part',
      'portion'
    ],
    meanings: ['section', 'bureau', 'dept', 'class', 'copy', 'part', 'portion']
  },
  {
    id: 7,
    kanjiChar: '合',
    onyomi: ['gou ゴウ', 'ga ガッ', 'ka カッ'],
    kunyomi: ['a(u) あ(う)', 'ai あい'],
    displayMeanings: ['fit', 'suit', 'join', '0.1'],
    fullDisplayMeanings: ['fit', 'suit', 'join', '0.1'],
    meanings: ['fit', 'suit', 'join', '0.1']
  },
  {
    id: 8,
    kanjiChar: '市',
    onyomi: ['shi シ'],
    kunyomi: ['ichi いち'],
    displayMeanings: ['market', 'city', 'town'],
    fullDisplayMeanings: ['market', 'city', 'town'],
    meanings: ['market', 'city', 'town']
  },
  {
    id: 9,
    kanjiChar: '内',
    onyomi: ['nai ナイ'],
    kunyomi: ['uchi うち'],
    displayMeanings: ['inside', 'within', 'between', 'among', 'house', 'home'],
    fullDisplayMeanings: [
      'inside',
      'within',
      'between',
      'among',
      'house',
      'home'
    ],
    meanings: ['inside', 'within', 'between', 'among', 'house', 'home']
  },
  {
    id: 10,
    kanjiChar: '相',
    onyomi: ['sou ソウ', 'shou ショウ'],
    kunyomi: ['ai あい'],
    displayMeanings: [
      'inter-',
      'mutual',
      'together',
      'each other',
      'minister of state'
    ],
    fullDisplayMeanings: [
      'inter-',
      'mutual',
      'together',
      'each other',
      'minister of state'
    ],
    meanings: [
      'inter-',
      'mutual',
      'together',
      'each other',
      'minister of state'
    ]
  },
  {
    id: 11,
    kanjiChar: '定',
    onyomi: ['tei テイ', 'jou ジョウ'],
    kunyomi: ['sada(meru) さだ(める)'],
    displayMeanings: ['determine', 'fix', 'establish', 'decide'],
    fullDisplayMeanings: ['determine', 'fix', 'establish', 'decide'],
    meanings: ['determine', 'fix', 'establish', 'decide']
  },
  {
    id: 12,
    kanjiChar: '回',
    onyomi: ['kai カイ'],
    kunyomi: ['mawa(su) まわ(す)'],
    displayMeanings: ['-times', 'round', 'revolve', 'counter'],
    fullDisplayMeanings: ['-times', 'round', 'revolve', 'counter'],
    meanings: ['-times', 'round', 'revolve', 'counter']
  },
  {
    id: 13,
    kanjiChar: '選',
    onyomi: ['sen セン'],
    kunyomi: ['era(bu) えら(ぶ)'],
    displayMeanings: ['elect', 'select', 'choose', 'prefer'],
    fullDisplayMeanings: ['elect', 'select', 'choose', 'prefer'],
    meanings: ['elect', 'select', 'choose', 'prefer']
  },
  {
    id: 14,
    kanjiChar: '米',
    onyomi: ['bei ベイ', 'mai マイ', 'meetoru メエトル'],
    kunyomi: ['kome こめ'],
    displayMeanings: ['rice', 'USA', 'meter'],
    fullDisplayMeanings: ['rice', 'USA', 'meter'],
    meanings: ['rice', 'USA', 'meter']
  },
  {
    id: 15,
    kanjiChar: '実',
    onyomi: ['jitsu ジツ'],
    kunyomi: ['mi み', 'mino(ru) みの(る)'],
    displayMeanings: ['reality', 'truth'],
    fullDisplayMeanings: ['reality', 'truth'],
    meanings: ['reality', 'truth']
  },
  {
    id: 16,
    kanjiChar: '関',
    onyomi: ['kan カン'],
    kunyomi: ['seki せき', 'kaka(waru) かか(わる)'],
    displayMeanings: [
      'connection',
      'barrier',
      'gateway',
      'involve',
      'concerning'
    ],
    fullDisplayMeanings: [
      'connection',
      'barrier',
      'gateway',
      'involve',
      'concerning'
    ],
    meanings: ['connection', 'barrier', 'gateway', 'involve', 'concerning']
  },
  {
    id: 17,
    kanjiChar: '決',
    onyomi: ['ketsu ケツ'],
    kunyomi: ['ki(meru) き(める)'],
    displayMeanings: ['decide', 'fix', 'agree upon', 'appoint'],
    fullDisplayMeanings: ['decide', 'fix', 'agree upon', 'appoint'],
    meanings: ['decide', 'fix', 'agree upon', 'appoint']
  },
  {
    id: 18,
    kanjiChar: '全',
    onyomi: ['zen ゼン'],
    kunyomi: ['matta(ku) まった(く)', 'sube(te) すべ(て)'],
    displayMeanings: ['whole', 'entire', 'all', 'complete', 'fulfill'],
    fullDisplayMeanings: ['whole', 'entire', 'all', 'complete', 'fulfill'],
    meanings: ['whole', 'entire', 'all', 'complete', 'fulfill']
  },
  {
    id: 19,
    kanjiChar: '表',
    onyomi: ['hyou ヒョウ'],
    kunyomi: ['omote おもて', 'arawa(su) あらわ(す)'],
    displayMeanings: ['surface', 'table', 'chart', 'diagram'],
    fullDisplayMeanings: ['surface', 'table', 'chart', 'diagram'],
    meanings: ['surface', 'table', 'chart', 'diagram']
  },
  {
    id: 20,
    kanjiChar: '戦',
    onyomi: ['sen セン'],
    kunyomi: ['ikusa いくさ', 'tataka(u) たたか(う)'],
    displayMeanings: ['war', 'battle', 'match'],
    fullDisplayMeanings: ['war', 'battle', 'match'],
    meanings: ['war', 'battle', 'match']
  },
  {
    id: 21,
    kanjiChar: '経',
    onyomi: ['kei ケイ'],
    kunyomi: ['he(ru) へ(る)', 'ta(tsu) た(つ)'],
    displayMeanings: ['longitude', 'pass thru', 'expire', 'warp'],
    fullDisplayMeanings: ['longitude', 'pass thru', 'expire', 'warp'],
    meanings: ['longitude', 'pass thru', 'expire', 'warp']
  },
  {
    id: 22,
    kanjiChar: '最',
    onyomi: ['sai サイ'],
    kunyomi: ['motto(mo) もっと(も)'],
    displayMeanings: ['utmost', 'most', 'extreme'],
    fullDisplayMeanings: ['utmost', 'most', 'extreme'],
    meanings: ['utmost', 'most', 'extreme']
  },
  {
    id: 23,
    kanjiChar: '現',
    onyomi: ['gen ゲン'],
    kunyomi: ['arawa(reru) あらわ(れる)', 'utsu(tsu) うつ(つ)'],
    displayMeanings: ['present', 'existing', 'actual'],
    fullDisplayMeanings: ['present', 'existing', 'actual'],
    meanings: ['present', 'existing', 'actual']
  },
  {
    id: 24,
    kanjiChar: '調',
    onyomi: ['chou チョウ'],
    kunyomi: ['shira(beru) しら(べる)', 'tono(u) ととの(う)'],
    displayMeanings: ['tune', 'tone', 'meter', 'prepare', 'investigate'],
    fullDisplayMeanings: ['tune', 'tone', 'meter', 'prepare', 'investigate'],
    meanings: ['tune', 'tone', 'meter', 'prepare', 'investigate']
  },
  {
    id: 25,
    kanjiChar: '化',
    onyomi: ['ka カ', 'ke ケ'],
    kunyomi: ['ba(keru) ば(ける)', 'fu(keru) ふ(ける)'],
    displayMeanings: [
      'change',
      'take the form of',
      'influence',
      'enchant',
      'delude',
      '-ization'
    ],
    fullDisplayMeanings: [
      'change',
      'take the form of',
      'influence',
      'enchant',
      'delude',
      '-ization'
    ],
    meanings: [
      'change',
      'take the form of',
      'influence',
      'enchant',
      'delude',
      '-ization'
    ]
  },
  {
    id: 26,
    kanjiChar: '当',
    onyomi: ['tou トウ'],
    kunyomi: ['a(taru) あ(たる)'],
    displayMeanings: ['hit', 'right', 'appropriate'],
    fullDisplayMeanings: ['hit', 'right', 'appropriate'],
    meanings: ['hit', 'right', 'appropriate']
  },
  {
    id: 27,
    kanjiChar: '約',
    onyomi: ['yaku ヤク'],
    kunyomi: ['tsuzu(maru) つづ(まる)'],
    displayMeanings: ['promise', 'approximately', 'shrink'],
    fullDisplayMeanings: ['promise', 'approximately', 'shrink'],
    meanings: ['promise', 'approximately', 'shrink']
  },
  {
    id: 28,
    kanjiChar: '首',
    onyomi: ['shu シュ'],
    kunyomi: ['kubi くび'],
    displayMeanings: ['neck'],
    fullDisplayMeanings: ['neck'],
    meanings: ['neck']
  },
  {
    id: 29,
    kanjiChar: '法',
    onyomi: ['hou ホウ'],
    kunyomi: ['nori のり'],
    displayMeanings: ['method', 'law', 'rule', 'principle', 'model', 'system'],
    fullDisplayMeanings: [
      'method',
      'law',
      'rule',
      'principle',
      'model',
      'system'
    ],
    meanings: ['method', 'law', 'rule', 'principle', 'model', 'system']
  },
  {
    id: 30,
    kanjiChar: '性',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: [],
    displayMeanings: ['sex', 'gender', 'nature'],
    fullDisplayMeanings: ['sex', 'gender', 'nature'],
    meanings: ['sex', 'gender', 'nature']
  },
  {
    id: 31,
    kanjiChar: '的',
    onyomi: ['teki テキ'],
    kunyomi: [],
    displayMeanings: ['mark', 'target', 'object', 'adjective ending'],
    fullDisplayMeanings: ['mark', 'target', 'object', 'adjective ending'],
    meanings: ['mark', 'target', 'object', 'adjective ending']
  },
  {
    id: 32,
    kanjiChar: '要',
    onyomi: ['you ヨウ'],
    kunyomi: ['i(ru) い(る)', 'kaname かなめ'],
    displayMeanings: ['need', 'main point', 'essence', 'pivot'],
    fullDisplayMeanings: ['need', 'main point', 'essence', 'pivot'],
    meanings: ['need', 'main point', 'essence', 'pivot']
  },
  {
    id: 33,
    kanjiChar: '制',
    onyomi: ['sei セイ'],
    kunyomi: [],
    displayMeanings: ['system', 'law', 'rule'],
    fullDisplayMeanings: ['system', 'law', 'rule'],
    meanings: ['system', 'law', 'rule']
  },
  {
    id: 34,
    kanjiChar: '治',
    onyomi: ['ji ジ', 'chi チ'],
    kunyomi: ['nasa(meru) おさ(める)', 'nao(ru) なお(る)'],
    displayMeanings: ['reign', 'cure', 'heal'],
    fullDisplayMeanings: ['reign', 'cure', 'heal'],
    meanings: ['reign', 'cure', 'heal']
  },
  {
    id: 35,
    kanjiChar: '務',
    onyomi: ['mu ム'],
    kunyomi: ['tsuto(meru) つと(める)'],
    displayMeanings: ['task', 'duties'],
    fullDisplayMeanings: ['task', 'duties'],
    meanings: ['task', 'duties']
  },
  {
    id: 36,
    kanjiChar: '成',
    onyomi: ['sei セイ', 'jou ジョウ'],
    kunyomi: ['na(ru) な(る)'],
    displayMeanings: ['turn into', 'become', 'get', 'grow', 'elapse'],
    fullDisplayMeanings: ['turn into', 'become', 'get', 'grow', 'elapse'],
    meanings: ['turn into', 'become', 'get', 'grow', 'elapse']
  },
  {
    id: 37,
    kanjiChar: '期',
    onyomi: ['ki キ', 'go ゴ'],
    kunyomi: [],
    displayMeanings: ['period', 'time', 'date', 'term'],
    fullDisplayMeanings: ['period', 'time', 'date', 'term'],
    meanings: ['period', 'time', 'date', 'term']
  },
  {
    id: 38,
    kanjiChar: '取',
    onyomi: ['shu シュ'],
    kunyomi: ['to(ru) と(る)'],
    displayMeanings: ['take', 'fetch'],
    fullDisplayMeanings: ['take', 'fetch'],
    meanings: ['take', 'fetch']
  },
  {
    id: 39,
    kanjiChar: '都',
    onyomi: ['to ト', 'tsu ツ'],
    kunyomi: ['miyako みやこ'],
    displayMeanings: ['metropolis', 'capital'],
    fullDisplayMeanings: ['metropolis', 'capital'],
    meanings: ['metropolis', 'capital']
  },
  {
    id: 40,
    kanjiChar: '和',
    onyomi: ['wa ワ', 'o オ'],
    kunyomi: ['yawa(ragu) やわ(らぐ)', 'nago(mu) なご(む)'],
    displayMeanings: ['harmony', 'Japanese style', 'peace'],
    fullDisplayMeanings: ['harmony', 'Japanese style', 'peace'],
    meanings: ['harmony', 'Japanese style', 'peace']
  },
  {
    id: 41,
    kanjiChar: '機',
    onyomi: ['ki キ'],
    kunyomi: ['hata はた'],
    displayMeanings: ['machine', 'airplane', 'opportunity'],
    fullDisplayMeanings: ['machine', 'airplane', 'opportunity'],
    meanings: ['machine', 'airplane', 'opportunity']
  },
  {
    id: 42,
    kanjiChar: '平',
    onyomi: ['hei ヘイ', 'byou ビョウ'],
    kunyomi: ['tai(ra) たい(ら)', 'hira ひら'],
    displayMeanings: ['even', 'flat', 'peace'],
    fullDisplayMeanings: ['even', 'flat', 'peace'],
    meanings: ['even', 'flat', 'peace']
  },
  {
    id: 43,
    kanjiChar: '加',
    onyomi: ['ka カ'],
    kunyomi: ['kuwa(eru) くわ(える)'],
    displayMeanings: ['add', 'addition', 'increase', 'join'],
    fullDisplayMeanings: ['add', 'addition', 'increase', 'join'],
    meanings: ['add', 'addition', 'increase', 'join']
  },
  {
    id: 44,
    kanjiChar: '受',
    onyomi: ['ju ジュ'],
    kunyomi: ['u(keru) う(ける)'],
    displayMeanings: ['accept', 'undergo', 'answer (phone)', 'take'],
    fullDisplayMeanings: ['accept', 'undergo', 'answer (phone)', 'take'],
    meanings: ['accept', 'undergo', 'answer (phone)', 'take']
  },
  {
    id: 45,
    kanjiChar: '続',
    onyomi: ['zoku ゾク'],
    kunyomi: ['tsuzuku つづ(く)'],
    displayMeanings: ['continue', 'series', 'sequel'],
    fullDisplayMeanings: ['continue', 'series', 'sequel'],
    meanings: ['continue', 'series', 'sequel']
  },
  {
    id: 46,
    kanjiChar: '進',
    onyomi: ['shin シン'],
    kunyomi: ['susu(mu) すす(む)'],
    displayMeanings: ['advance', 'proceed'],
    fullDisplayMeanings: ['advance', 'proceed'],
    meanings: ['advance', 'proceed']
  },
  {
    id: 47,
    kanjiChar: '数',
    onyomi: ['suu スウ'],
    kunyomi: ['kazu かず', 'kazo(eru) かぞ(える)'],
    displayMeanings: ['number', 'strength', 'fate', 'law', 'figures'],
    fullDisplayMeanings: ['number', 'strength', 'fate', 'law', 'figures'],
    meanings: ['number', 'strength', 'fate', 'law', 'figures']
  },
  {
    id: 48,
    kanjiChar: '記',
    onyomi: ['ki キ'],
    kunyomi: ['shiru(su) しる(す)'],
    displayMeanings: ['scribe', 'account', 'narrative'],
    fullDisplayMeanings: ['scribe', 'account', 'narrative'],
    meanings: ['scribe', 'account', 'narrative']
  },
  {
    id: 49,
    kanjiChar: '初',
    onyomi: ['sho ショ'],
    kunyomi: ['haji(me) はじ(め)', 'hatsu はつ'],
    displayMeanings: ['first time', 'beginning'],
    fullDisplayMeanings: ['first time', 'beginning'],
    meanings: ['first time', 'beginning']
  },
  {
    id: 50,
    kanjiChar: '指',
    onyomi: ['shi シ'],
    kunyomi: ['yubi ゆび', 'sa(su) さ(す)'],
    displayMeanings: ['finger', 'point to', 'indicate'],
    fullDisplayMeanings: ['finger', 'point to', 'indicate'],
    meanings: ['finger', 'point to', 'indicate']
  },
  {
    id: 51,
    kanjiChar: '権',
    onyomi: ['ken ケン'],
    kunyomi: [],
    displayMeanings: ['authority', 'power', 'rights'],
    fullDisplayMeanings: ['authority', 'power', 'rights'],
    meanings: ['authority', 'power', 'rights']
  },
  {
    id: 52,
    kanjiChar: '支',
    onyomi: ['shi シ'],
    kunyomi: ['sasa(eru) ささ(える)'],
    displayMeanings: ['branch', 'support', 'sustain'],
    fullDisplayMeanings: ['branch', 'support', 'sustain'],
    meanings: ['branch', 'support', 'sustain']
  },
  {
    id: 53,
    kanjiChar: '産',
    onyomi: ['san サン'],
    kunyomi: ['u(mu) う(む)', 'mu(su) む(す)'],
    displayMeanings: ['products', 'bear', 'give birth'],
    fullDisplayMeanings: ['products', 'bear', 'give birth'],
    meanings: ['products', 'bear', 'give birth']
  },
  {
    id: 54,
    kanjiChar: '点',
    onyomi: ['ten テン'],
    kunyomi: ['tsu(keru) つ(ける)'],
    displayMeanings: ['spot', 'point', 'mark'],
    fullDisplayMeanings: ['spot', 'point', 'mark'],
    meanings: ['spot', 'point', 'mark']
  },
  {
    id: 55,
    kanjiChar: '報',
    onyomi: ['hou ホウ'],
    kunyomi: ['mukku(iru) むく(いる)'],
    displayMeanings: ['report', 'news', 'reward'],
    fullDisplayMeanings: ['report', 'news', 'reward'],
    meanings: ['report', 'news', 'reward']
  },
  {
    id: 56,
    kanjiChar: '済',
    onyomi: ['sai サイ', 'sei セイ'],
    kunyomi: ['su(mu) す(む)'],
    displayMeanings: ['settle', 'relieve', 'finish'],
    fullDisplayMeanings: ['settle', 'relieve', 'finish'],
    meanings: ['settle', 'relieve', 'finish']
  },
  {
    id: 57,
    kanjiChar: '活',
    onyomi: ['katsu カツ'],
    kunyomi: [],
    displayMeanings: ['living'],
    fullDisplayMeanings: ['living'],
    meanings: ['living']
  },
  {
    id: 58,
    kanjiChar: '原',
    onyomi: ['gen ゲン'],
    kunyomi: ['hara はら'],
    displayMeanings: ['original', 'primitive', 'field'],
    fullDisplayMeanings: ['original', 'primitive', 'field'],
    meanings: ['original', 'primitive', 'field']
  },
  {
    id: 59,
    kanjiChar: '共',
    onyomi: ['kyou キョウ'],
    kunyomi: ['tomo とも'],
    displayMeanings: ['together', 'both', 'neither'],
    fullDisplayMeanings: ['together', 'both', 'neither'],
    meanings: ['together', 'both', 'neither']
  },
  {
    id: 60,
    kanjiChar: '得',
    onyomi: ['toku トク'],
    kunyomi: ['e(ru) え(る)'],
    displayMeanings: [
      'gain',
      'get',
      'find',
      'earn',
      'acquire',
      'can',
      'may',
      'able to',
      'profit'
    ],
    fullDisplayMeanings: [
      'gain',
      'get',
      'find',
      'earn',
      'acquire',
      'can',
      'may',
      'able to',
      'profit'
    ],
    meanings: [
      'gain',
      'get',
      'find',
      'earn',
      'acquire',
      'can',
      'may',
      'able to',
      'profit'
    ]
  },
  {
    id: 61,
    kanjiChar: '解',
    onyomi: ['kai カイ', 'ge ゲ'],
    kunyomi: ['to(ku) と(く)', 'hodo(ku) ほど(く)'],
    displayMeanings: ['unravel', 'explanation'],
    fullDisplayMeanings: ['unravel', 'explanation'],
    meanings: ['unravel', 'explanation']
  },
  {
    id: 62,
    kanjiChar: '交',
    onyomi: ['kou コウ'],
    kunyomi: [
      'maji(waru) まじ(わる)',
      'ma(zeru) ま(ぜる)',
      'ka(wasu) か(わす)'
    ],
    displayMeanings: ['mingle', 'mixing', 'association', 'coming & going'],
    fullDisplayMeanings: ['mingle', 'mixing', 'association', 'coming & going'],
    meanings: ['mingle', 'mixing', 'association', 'coming & going']
  },
  {
    id: 63,
    kanjiChar: '資',
    onyomi: ['shi シ'],
    kunyomi: [],
    displayMeanings: [
      'assets',
      'resources',
      'capital',
      'funds',
      'data',
      'be conducive to'
    ],
    fullDisplayMeanings: [
      'assets',
      'resources',
      'capital',
      'funds',
      'data',
      'be conducive to'
    ],
    meanings: [
      'assets',
      'resources',
      'capital',
      'funds',
      'data',
      'be conducive to'
    ]
  },
  {
    id: 64,
    kanjiChar: '予',
    onyomi: ['yo ヨ', 'sha シャ'],
    kunyomi: ['arakaji(me) あらかじ(め)'],
    displayMeanings: ['beforehand', 'previous', 'myself', 'I'],
    fullDisplayMeanings: ['beforehand', 'previous', 'myself', 'I'],
    meanings: ['beforehand', 'previous', 'myself', 'I']
  },
  {
    id: 65,
    kanjiChar: '向',
    onyomi: ['kou コウ'],
    kunyomi: ['mu(ku) む(く)', 'muka(i) むか(い)'],
    displayMeanings: ['facing', 'beyond'],
    fullDisplayMeanings: ['facing', 'beyond'],
    meanings: ['facing', 'beyond']
  },
  {
    id: 66,
    kanjiChar: '際',
    onyomi: ['sai サイ'],
    kunyomi: ['kiwa きわ'],
    displayMeanings: ['occasion', 'time'],
    fullDisplayMeanings: ['occasion', 'time'],
    meanings: ['occasion', 'time']
  },
  {
    id: 67,
    kanjiChar: '勝',
    onyomi: ['shou ショウ'],
    kunyomi: ['ka(tsu) か(つ)', 'masa(ru) まさ(る)'],
    displayMeanings: ['victory', 'win'],
    fullDisplayMeanings: ['victory', 'win'],
    meanings: ['victory', 'win']
  },
  {
    id: 68,
    kanjiChar: '面',
    onyomi: ['men メン'],
    kunyomi: ['omo おも', 'omote おもて', 'tsura つら'],
    displayMeanings: ['mask', 'face', 'features', 'surface'],
    fullDisplayMeanings: ['mask', 'face', 'features', 'surface'],
    meanings: ['mask', 'face', 'features', 'surface']
  },
  {
    id: 69,
    kanjiChar: '告',
    onyomi: ['koku コク'],
    kunyomi: ['tsu(geru) つ(げる)'],
    displayMeanings: ['revelation', 'inform'],
    fullDisplayMeanings: ['revelation', 'inform'],
    meanings: ['revelation', 'inform']
  },
  {
    id: 70,
    kanjiChar: '反',
    onyomi: ['han ハン'],
    kunyomi: ['so(ru) そ(る)'],
    displayMeanings: ['anti-'],
    fullDisplayMeanings: ['anti-'],
    meanings: ['anti-']
  },
  {
    id: 71,
    kanjiChar: '判',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['judgement', 'signature'],
    fullDisplayMeanings: ['judgement', 'signature'],
    meanings: ['judgement', 'signature']
  },
  {
    id: 72,
    kanjiChar: '認',
    onyomi: ['nin ニン'],
    kunyomi: ['mito(meru) みと(める)', 'shitata(meru) したた(める)'],
    displayMeanings: ['acknowledge', 'witness', 'recognize'],
    fullDisplayMeanings: ['acknowledge', 'witness', 'recognize'],
    meanings: ['acknowledge', 'witness', 'recognize']
  },
  {
    id: 73,
    kanjiChar: '参',
    onyomi: ['san サン'],
    kunyomi: ['mai(ru) まい(る)'],
    displayMeanings: ['going', 'coming', 'participate'],
    fullDisplayMeanings: ['going', 'coming', 'participate'],
    meanings: ['going', 'coming', 'participate']
  },
  {
    id: 74,
    kanjiChar: '利',
    onyomi: ['ri リ'],
    kunyomi: ['ki(ku) き(く)'],
    displayMeanings: ['profit', 'advantage', 'benefit'],
    fullDisplayMeanings: ['profit', 'advantage', 'benefit'],
    meanings: ['profit', 'advantage', 'benefit']
  },
  {
    id: 75,
    kanjiChar: '組',
    onyomi: ['so ソ'],
    kunyomi: ['ku(mu) く(む)', 'kumi くみ'],
    displayMeanings: ['association', 'assemble', 'unite'],
    fullDisplayMeanings: ['association', 'assemble', 'unite'],
    meanings: ['association', 'assemble', 'unite']
  },
  {
    id: 76,
    kanjiChar: '信',
    onyomi: ['shin シン'],
    kunyomi: [],
    displayMeanings: ['faith', 'truth', 'trust'],
    fullDisplayMeanings: ['faith', 'truth', 'trust'],
    meanings: ['faith', 'truth', 'trust']
  },
  {
    id: 77,
    kanjiChar: '在',
    onyomi: ['zai ザイ'],
    kunyomi: ['a(ru) あ(る)'],
    displayMeanings: ['exist', 'outskirts'],
    fullDisplayMeanings: ['exist', 'outskirts'],
    meanings: ['exist', 'outskirts']
  },
  {
    id: 78,
    kanjiChar: '件',
    onyomi: ['ken ケン'],
    kunyomi: ['kudan くだん'],
    displayMeanings: ['affair', 'case', 'matter'],
    fullDisplayMeanings: ['affair', 'case', 'matter'],
    meanings: ['affair', 'case', 'matter']
  },
  {
    id: 79,
    kanjiChar: '側',
    onyomi: ['soku ソク'],
    kunyomi: ['gawa がわ', 'soba そば'],
    displayMeanings: ['side', 'lean', 'oppose'],
    fullDisplayMeanings: ['side', 'lean', 'oppose'],
    meanings: ['side', 'lean', 'oppose']
  },
  {
    id: 80,
    kanjiChar: '任',
    onyomi: ['nin ニン'],
    kunyomi: ['maka(seru) まか(せる)'],
    displayMeanings: ['responsibility', 'duty'],
    fullDisplayMeanings: ['responsibility', 'duty'],
    meanings: ['responsibility', 'duty']
  },
  {
    id: 81,
    kanjiChar: '引',
    onyomi: ['in イン'],
    kunyomi: ['hi(ku) ひ(く)'],
    displayMeanings: ['pull', 'tug', 'jerk'],
    fullDisplayMeanings: ['pull', 'tug', 'jerk'],
    meanings: ['pull', 'tug', 'jerk']
  },
  {
    id: 82,
    kanjiChar: '求',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['moto(meru) もと(める)'],
    displayMeanings: ['request', 'want', 'demand'],
    fullDisplayMeanings: ['request', 'want', 'demand'],
    meanings: ['request', 'want', 'demand']
  },
  {
    id: 83,
    kanjiChar: '所',
    onyomi: ['sho ショ'],
    kunyomi: ['tokoro ところ'],
    displayMeanings: ['place', 'extent'],
    fullDisplayMeanings: ['place', 'extent'],
    meanings: ['place', 'extent']
  },
  {
    id: 84,
    kanjiChar: '次',
    onyomi: ['ji ジ', 'shi シ'],
    kunyomi: ['tsu(gu) つ(ぐ)', 'tsugi つぎ'],
    displayMeanings: ['next', 'order'],
    fullDisplayMeanings: ['next', 'order'],
    meanings: ['next', 'order']
  },
  {
    id: 85,
    kanjiChar: '昨',
    onyomi: ['saku サク'],
    kunyomi: [],
    displayMeanings: ['yesterday', 'previous'],
    fullDisplayMeanings: ['yesterday', 'previous'],
    meanings: ['yesterday', 'previous']
  },
  {
    id: 86,
    kanjiChar: '論',
    onyomi: ['ron ロン'],
    kunyomi: ['agetsura(u) あげつら(う)'],
    displayMeanings: ['argument', 'discourse'],
    fullDisplayMeanings: ['argument', 'discourse'],
    meanings: ['argument', 'discourse']
  },
  {
    id: 87,
    kanjiChar: '官',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['bureaucrat', 'the government', 'organ'],
    fullDisplayMeanings: ['bureaucrat', 'the government', 'organ'],
    meanings: ['bureaucrat', 'the government', 'organ']
  },
  {
    id: 88,
    kanjiChar: '増',
    onyomi: ['zou ゾウ'],
    kunyomi: ['ma(su) ま(す)', 'fu(eru) ふ(える)'],
    displayMeanings: ['increase', 'add'],
    fullDisplayMeanings: ['increase', 'add'],
    meanings: ['increase', 'add']
  },
  {
    id: 89,
    kanjiChar: '係',
    onyomi: ['kei ケイ'],
    kunyomi: ['kaka(ru) かか(る)', 'kakari かかり'],
    displayMeanings: ['person in charge', 'connection'],
    fullDisplayMeanings: ['person in charge', 'connection'],
    meanings: ['person in charge', 'connection']
  },
  {
    id: 90,
    kanjiChar: '感',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['emotion', 'feeling', 'sensation'],
    fullDisplayMeanings: ['emotion', 'feeling', 'sensation'],
    meanings: ['emotion', 'feeling', 'sensation']
  },
  {
    id: 91,
    kanjiChar: '情',
    onyomi: ['jou ジョウ', 'sei セイ'],
    kunyomi: ['nasa(ke) なさ(け)'],
    displayMeanings: ['feelings', 'emotion', 'passion'],
    fullDisplayMeanings: ['feelings', 'emotion', 'passion'],
    meanings: ['feelings', 'emotion', 'passion']
  },
  {
    id: 92,
    kanjiChar: '投',
    onyomi: ['tou トウ'],
    kunyomi: ['na(geru) な(げる)'],
    displayMeanings: ['throw', 'discard'],
    fullDisplayMeanings: ['throw', 'discard'],
    meanings: ['throw', 'discard']
  },
  {
    id: 93,
    kanjiChar: '示',
    onyomi: ['ji ジ', 'shi シ'],
    kunyomi: ['shime(su) しめ(す)'],
    displayMeanings: ['show', 'indicate', 'display'],
    fullDisplayMeanings: ['show', 'indicate', 'display'],
    meanings: ['show', 'indicate', 'display']
  },
  {
    id: 94,
    kanjiChar: '変',
    onyomi: ['hen ヘン'],
    kunyomi: ['ka(waru) か(わる)'],
    displayMeanings: ['unusual', 'change', 'strange'],
    fullDisplayMeanings: ['unusual', 'change', 'strange'],
    meanings: ['unusual', 'change', 'strange']
  },
  {
    id: 95,
    kanjiChar: '打',
    onyomi: ['da ダ'],
    kunyomi: ['u(tsu) う(つ)', 'bu(tsu) ぶ(つ)'],
    displayMeanings: ['strike', 'hit', 'knock'],
    fullDisplayMeanings: ['strike', 'hit', 'knock'],
    meanings: ['strike', 'hit', 'knock']
  },
  {
    id: 96,
    kanjiChar: '直',
    onyomi: ['choku チョク', 'jiki ジキ'],
    kunyomi: ['tada(chini) ただ(ちに)', 'su(gu) す(ぐ)'],
    displayMeanings: ['straightaway', 'honesty', 'frankness', 'fix', 'repair'],
    fullDisplayMeanings: [
      'straightaway',
      'honesty',
      'frankness',
      'fix',
      'repair'
    ],
    meanings: ['straightaway', 'honesty', 'frankness', 'fix', 'repair']
  },
  {
    id: 97,
    kanjiChar: '両',
    onyomi: ['ryou リョウ'],
    kunyomi: [],
    displayMeanings: ['both'],
    fullDisplayMeanings: ['both'],
    meanings: ['both']
  },
  {
    id: 98,
    kanjiChar: '式',
    onyomi: ['shiki シキ'],
    kunyomi: [],
    displayMeanings: ['style', 'ceremony'],
    fullDisplayMeanings: ['style', 'ceremony'],
    meanings: ['style', 'ceremony']
  },
  {
    id: 99,
    kanjiChar: '確',
    onyomi: ['kaku カク'],
    kunyomi: ['tashi(ka) たし(か)'],
    displayMeanings: ['assurance', 'firm', 'confirm'],
    fullDisplayMeanings: ['assurance', 'firm', 'confirm'],
    meanings: ['assurance', 'firm', 'confirm']
  },
  {
    id: 100,
    kanjiChar: '果',
    onyomi: ['ka カ'],
    kunyomi: ['ha(tasu) は(たす)'],
    displayMeanings: ['fruit', 'reward', 'carry out', 'achieve', 'complete'],
    fullDisplayMeanings: [
      'fruit',
      'reward',
      'carry out',
      'achieve',
      'complete'
    ],
    meanings: ['fruit', 'reward', 'carry out', 'achieve', 'complete']
  },
  {
    id: 101,
    kanjiChar: '容',
    onyomi: ['you ヨウ'],
    kunyomi: [],
    displayMeanings: ['contain', 'form'],
    fullDisplayMeanings: ['contain', 'form'],
    meanings: ['contain', 'form']
  },
  {
    id: 102,
    kanjiChar: '必',
    onyomi: ['hitsu ヒツ'],
    kunyomi: ['kanara(zu) かなら(ず)'],
    displayMeanings: ['invariably', 'certain', 'inevitable'],
    fullDisplayMeanings: ['invariably', 'certain', 'inevitable'],
    meanings: ['invariably', 'certain', 'inevitable']
  },
  {
    id: 103,
    kanjiChar: '演',
    onyomi: ['en エン'],
    kunyomi: [],
    displayMeanings: ['performance', 'act', 'play', 'render', 'stage'],
    fullDisplayMeanings: ['performance', 'act', 'play', 'render', 'stage'],
    meanings: ['performance', 'act', 'play', 'render', 'stage']
  },
  {
    id: 104,
    kanjiChar: '歳',
    onyomi: ['sai サイ', 'sei セイ'],
    kunyomi: [],
    displayMeanings: ['age', 'year-end'],
    fullDisplayMeanings: ['age', 'year-end'],
    meanings: ['age', 'year-end']
  },
  {
    id: 105,
    kanjiChar: '争',
    onyomi: ['sou ソウ'],
    kunyomi: ['araso(u) あらそ(う)'],
    displayMeanings: ['contend', 'dispute', 'argue'],
    fullDisplayMeanings: ['contend', 'dispute', 'argue'],
    meanings: ['contend', 'dispute', 'argue']
  },
  {
    id: 106,
    kanjiChar: '談',
    onyomi: ['dan ダン'],
    kunyomi: [],
    displayMeanings: ['discuss', 'talk'],
    fullDisplayMeanings: ['discuss', 'talk'],
    meanings: ['discuss', 'talk']
  },
  {
    id: 107,
    kanjiChar: '能',
    onyomi: ['nou ノウ'],
    kunyomi: ['ata(u) あた(う)'],
    displayMeanings: ['ability', 'talent', 'skill', 'capacity'],
    fullDisplayMeanings: ['ability', 'talent', 'skill', 'capacity'],
    meanings: ['ability', 'talent', 'skill', 'capacity']
  },
  {
    id: 108,
    kanjiChar: '位',
    onyomi: ['i イ'],
    kunyomi: ['kurai くらい', 'gurai ぐらい'],
    displayMeanings: ['rank', 'grade', 'about'],
    fullDisplayMeanings: ['rank', 'grade', 'about'],
    meanings: ['rank', 'grade', 'about']
  },
  {
    id: 109,
    kanjiChar: '置',
    onyomi: ['chi チ'],
    kunyomi: ['o(ku) お(く)'],
    displayMeanings: ['placement', 'put', 'set', 'deposit', 'leave behind'],
    fullDisplayMeanings: ['placement', 'put', 'set', 'deposit', 'leave behind'],
    meanings: ['placement', 'put', 'set', 'deposit', 'leave behind']
  },
  {
    id: 110,
    kanjiChar: '流',
    onyomi: ['ryuu リュウ', 'ru ル'],
    kunyomi: ['naga(reru) なが(れる)'],
    displayMeanings: ['current', 'flow'],
    fullDisplayMeanings: ['current', 'flow'],
    meanings: ['current', 'flow']
  },
  {
    id: 111,
    kanjiChar: '格',
    onyomi: ['kaku カク', 'kou コウ', 'kyaku キャク'],
    kunyomi: [],
    displayMeanings: ['status', 'rank', 'capacity'],
    fullDisplayMeanings: ['status', 'rank', 'capacity'],
    meanings: ['status', 'rank', 'capacity']
  },
  {
    id: 112,
    kanjiChar: '疑',
    onyomi: ['gi ギ'],
    kunyomi: ['utaga(u) うたが(う)'],
    displayMeanings: ['doubt', 'distrust'],
    fullDisplayMeanings: ['doubt', 'distrust'],
    meanings: ['doubt', 'distrust']
  },
  {
    id: 113,
    kanjiChar: '過',
    onyomi: ['ka カ'],
    kunyomi: ['su(giru) す(ぎる)', 'yogi(ru) よぎ(る)'],
    displayMeanings: ['overdo', 'exceed', 'go beyond'],
    fullDisplayMeanings: ['overdo', 'exceed', 'go beyond'],
    meanings: ['overdo', 'exceed', 'go beyond']
  },
  {
    id: 114,
    kanjiChar: '局',
    onyomi: ['kyoku キョク'],
    kunyomi: [],
    displayMeanings: ['bureau', 'board', 'office'],
    fullDisplayMeanings: ['bureau', 'board', 'office'],
    meanings: ['bureau', 'board', 'office']
  },
  {
    id: 115,
    kanjiChar: '放',
    onyomi: ['hou ホウ'],
    kunyomi: ['hana(su) はな(す)', 'hou(ru) ほう(る)'],
    displayMeanings: ['set free', 'release'],
    fullDisplayMeanings: ['set free', 'release'],
    meanings: ['set free', 'release']
  },
  {
    id: 116,
    kanjiChar: '常',
    onyomi: ['jou ジョウ'],
    kunyomi: ['tsune つね'],
    displayMeanings: ['usual', 'ordinary', 'normal'],
    fullDisplayMeanings: ['usual', 'ordinary', 'normal'],
    meanings: ['usual', 'ordinary', 'normal']
  },
  {
    id: 117,
    kanjiChar: '状',
    onyomi: ['jou ジョウ'],
    kunyomi: [],
    displayMeanings: ['conditions', 'form', 'appearance'],
    fullDisplayMeanings: ['conditions', 'form', 'appearance'],
    meanings: ['conditions', 'form', 'appearance']
  },
  {
    id: 118,
    kanjiChar: '球',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['tama たま'],
    displayMeanings: ['ball', 'sphere'],
    fullDisplayMeanings: ['ball', 'sphere'],
    meanings: ['ball', 'sphere']
  },
  {
    id: 119,
    kanjiChar: '職',
    onyomi: ['shoku ショク'],
    kunyomi: [],
    displayMeanings: ['post', 'employment', 'work'],
    fullDisplayMeanings: ['post', 'employment', 'work'],
    meanings: ['post', 'employment', 'work']
  },
  {
    id: 120,
    kanjiChar: '与',
    onyomi: ['yo ヨ'],
    kunyomi: ['ata(eru) あた(える)', 'azuka(ru) あずか(る)'],
    displayMeanings: ['give', 'award'],
    fullDisplayMeanings: ['give', 'award'],
    meanings: ['give', 'award']
  },
  {
    id: 121,
    kanjiChar: '供',
    onyomi: ['kyou キョウ', 'ku ク', 'kuu クウ'],
    kunyomi: ['sona(eru) そな(える)', 'tomo とも'],
    displayMeanings: ['submit', 'offer', 'present', 'accompany'],
    fullDisplayMeanings: ['submit', 'offer', 'present', 'accompany'],
    meanings: ['submit', 'offer', 'present', 'accompany']
  },
  {
    id: 122,
    kanjiChar: '役',
    onyomi: ['yaku ヤク', 'eki エキ'],
    kunyomi: [],
    displayMeanings: ['duty', 'service', 'role'],
    fullDisplayMeanings: ['duty', 'service', 'role'],
    meanings: ['duty', 'service', 'role']
  },
  {
    id: 123,
    kanjiChar: '構',
    onyomi: ['kou コウ'],
    kunyomi: ['kama(u) かま(う)'],
    displayMeanings: ['posture', 'build', 'pretend'],
    fullDisplayMeanings: ['posture', 'build', 'pretend'],
    meanings: ['posture', 'build', 'pretend']
  },
  {
    id: 124,
    kanjiChar: '割',
    onyomi: ['katsu カツ'],
    kunyomi: ['wa(ru) わ(る)', 'wari わり'],
    displayMeanings: ['proportion', 'divide', 'cut', 'separate'],
    fullDisplayMeanings: ['proportion', 'divide', 'cut', 'separate'],
    meanings: ['proportion', 'divide', 'cut', 'separate']
  },
  {
    id: 125,
    kanjiChar: '身',
    onyomi: ['shin シン'],
    kunyomi: ['mi み'],
    displayMeanings: ['somebody', 'person'],
    fullDisplayMeanings: ['somebody', 'person'],
    meanings: ['somebody', 'person']
  },
  {
    id: 126,
    kanjiChar: '費',
    onyomi: ['hi ヒ'],
    kunyomi: ['tsui(yasu) つい(やす)'],
    displayMeanings: ['expense', 'consume'],
    fullDisplayMeanings: ['expense', 'consume'],
    meanings: ['expense', 'consume']
  },
  {
    id: 127,
    kanjiChar: '付',
    onyomi: ['fu フ'],
    kunyomi: ['tsu(keru) つ(ける)'],
    displayMeanings: ['adhere', 'attach', 'refer to', 'append'],
    fullDisplayMeanings: ['adhere', 'attach', 'refer to', 'append'],
    meanings: ['adhere', 'attach', 'refer to', 'append']
  },
  {
    id: 128,
    kanjiChar: '由',
    onyomi: ['yu ユ', 'yuu ユウ'],
    kunyomi: ['yoshi よし', 'yo(ru) よ(る)'],
    displayMeanings: ['wherefore', 'a reason'],
    fullDisplayMeanings: ['wherefore', 'a reason'],
    meanings: ['wherefore', 'a reason']
  },
  {
    id: 129,
    kanjiChar: '説',
    onyomi: ['setsu セツ', 'zei ゼイ'],
    kunyomi: ['to(ku) と(く)'],
    displayMeanings: ['opinion', 'theory', 'explanation'],
    fullDisplayMeanings: ['opinion', 'theory', 'explanation'],
    meanings: ['opinion', 'theory', 'explanation']
  },
  {
    id: 130,
    kanjiChar: '難',
    onyomi: ['nan ナン'],
    kunyomi: [
      'kata(i) かた(い)',
      'muzuka(shii) むずか(しい)',
      'niku(i) にく(い)'
    ],
    displayMeanings: ['difficult', 'trouble', 'accident'],
    fullDisplayMeanings: ['difficult', 'trouble', 'accident'],
    meanings: ['difficult', 'trouble', 'accident']
  },
  {
    id: 131,
    kanjiChar: '優',
    onyomi: ['yuu ユウ', 'u ウ'],
    kunyomi: ['yasa(shii) やさ(しい)', 'sugu(reru) すぐ(れる)'],
    displayMeanings: ['tenderness', 'kind', 'actor'],
    fullDisplayMeanings: ['tenderness', 'kind', 'actor'],
    meanings: ['tenderness', 'kind', 'actor']
  },
  {
    id: 132,
    kanjiChar: '夫',
    onyomi: ['fu フ', 'fuu フウ'],
    kunyomi: ['otto おっと'],
    displayMeanings: ['husband', 'man'],
    fullDisplayMeanings: ['husband', 'man'],
    meanings: ['husband', 'man']
  },
  {
    id: 133,
    kanjiChar: '収',
    onyomi: ['shuu シュウ'],
    kunyomi: ['osa(meru) おさ(める)'],
    displayMeanings: ['income', 'obtain', 'reap', 'pay', 'supply', 'store'],
    fullDisplayMeanings: ['income', 'obtain', 'reap', 'pay', 'supply', 'store'],
    meanings: ['income', 'obtain', 'reap', 'pay', 'supply', 'store']
  },
  {
    id: 134,
    kanjiChar: '断',
    onyomi: ['dan ダン'],
    kunyomi: ['ta(tsu) た(つ)', 'kotowa(ru) ことわ(る)'],
    displayMeanings: ['severance', 'decline', 'refuse', 'apologize'],
    fullDisplayMeanings: ['severance', 'decline', 'refuse', 'apologize'],
    meanings: ['severance', 'decline', 'refuse', 'apologize']
  },
  {
    id: 135,
    kanjiChar: '石',
    onyomi: ['seki セキ', 'shaku シャク', 'koku コク'],
    kunyomi: ['ishi いし'],
    displayMeanings: ['stone'],
    fullDisplayMeanings: ['stone'],
    meanings: ['stone']
  },
  {
    id: 136,
    kanjiChar: '違',
    onyomi: ['i イ'],
    kunyomi: ['chiga(u) ちが(う)', 'taga(u) たが(う)'],
    displayMeanings: ['difference', 'differ'],
    fullDisplayMeanings: ['difference', 'differ'],
    meanings: ['difference', 'differ']
  },
  {
    id: 137,
    kanjiChar: '消',
    onyomi: ['shou ショウ'],
    kunyomi: ['ki(eru) き(える)', 'ke(su) け(す)'],
    displayMeanings: ['extinguish', 'turn off'],
    fullDisplayMeanings: ['extinguish', 'turn off'],
    meanings: ['extinguish', 'turn off']
  },
  {
    id: 138,
    kanjiChar: '神',
    onyomi: ['shin シン', 'jin ジン'],
    kunyomi: ['kami かみ'],
    displayMeanings: ['gods', 'mind', 'soul'],
    fullDisplayMeanings: ['gods', 'mind', 'soul'],
    meanings: ['gods', 'mind', 'soul']
  },
  {
    id: 139,
    kanjiChar: '番',
    onyomi: ['ban バン'],
    kunyomi: ['tsugai つが(い)'],
    displayMeanings: ['turn', 'number in a series'],
    fullDisplayMeanings: ['turn', 'number in a series'],
    meanings: ['turn', 'number in a series']
  },
  {
    id: 140,
    kanjiChar: '規',
    onyomi: ['ki キ'],
    kunyomi: [],
    displayMeanings: ['standard', 'measure'],
    fullDisplayMeanings: ['standard', 'measure'],
    meanings: ['standard', 'measure']
  },
  {
    id: 141,
    kanjiChar: '術',
    onyomi: ['jutsu ジュツ'],
    kunyomi: ['sube すべ'],
    displayMeanings: ['art', 'technique', 'skill', 'means', 'trick'],
    fullDisplayMeanings: ['art', 'technique', 'skill', 'means', 'trick'],
    meanings: ['art', 'technique', 'skill', 'means', 'trick']
  },
  {
    id: 142,
    kanjiChar: '備',
    onyomi: ['bi ビ'],
    kunyomi: ['sona(eru) そな(える)'],
    displayMeanings: ['equip', 'provision', 'preparation'],
    fullDisplayMeanings: ['equip', 'provision', 'preparation'],
    meanings: ['equip', 'provision', 'preparation']
  },
  {
    id: 143,
    kanjiChar: '宅',
    onyomi: ['taku タク'],
    kunyomi: [],
    displayMeanings: ['home', 'house', 'residence'],
    fullDisplayMeanings: ['home', 'house', 'residence'],
    meanings: ['home', 'house', 'residence']
  },
  {
    id: 144,
    kanjiChar: '害',
    onyomi: ['gai ガイ'],
    kunyomi: [],
    displayMeanings: ['harm', 'injury'],
    fullDisplayMeanings: ['harm', 'injury'],
    meanings: ['harm', 'injury']
  },
  {
    id: 145,
    kanjiChar: '配',
    onyomi: ['hai ハイ'],
    kunyomi: ['kuba(ru) くば(る)'],
    displayMeanings: ['distribute', 'spouse'],
    fullDisplayMeanings: ['distribute', 'spouse'],
    meanings: ['distribute', 'spouse']
  },
  {
    id: 146,
    kanjiChar: '警',
    onyomi: ['kei ケイ'],
    kunyomi: [],
    displayMeanings: ['admonish', 'commandment'],
    fullDisplayMeanings: ['admonish', 'commandment'],
    meanings: ['admonish', 'commandment']
  },
  {
    id: 147,
    kanjiChar: '育',
    onyomi: ['iku イク'],
    kunyomi: ['soda(tsu) そだ(つ)', 'haguku(mu) はぐく(む)'],
    displayMeanings: ['bring up', 'grow up', 'raise'],
    fullDisplayMeanings: ['bring up', 'grow up', 'raise'],
    meanings: ['bring up', 'grow up', 'raise']
  },
  {
    id: 148,
    kanjiChar: '席',
    onyomi: ['seki セキ'],
    kunyomi: ['mushiro むしろ'],
    displayMeanings: ['seat'],
    fullDisplayMeanings: ['seat'],
    meanings: ['seat']
  },
  {
    id: 149,
    kanjiChar: '訪',
    onyomi: ['hou ホウ'],
    kunyomi: ['toozu(reru) おとず(れる)', 'tazu(neru) たず(ねる)'],
    displayMeanings: ['call on', 'visit'],
    fullDisplayMeanings: ['call on', 'visit'],
    meanings: ['call on', 'visit']
  },
  {
    id: 150,
    kanjiChar: '乗',
    onyomi: ['jou ジョウ', 'shou ショウ'],
    kunyomi: ['no(ru) の(る)'],
    displayMeanings: ['ride'],
    fullDisplayMeanings: ['ride'],
    meanings: ['ride']
  },
  {
    id: 151,
    kanjiChar: '残',
    onyomi: ['zan ザン'],
    kunyomi: ['noko(ru) のこ(る)'],
    displayMeanings: ['remainder', 'balance'],
    fullDisplayMeanings: ['remainder', 'balance'],
    meanings: ['remainder', 'balance']
  },
  {
    id: 152,
    kanjiChar: '想',
    onyomi: ['sou ソウ', 'so ソ'],
    kunyomi: ['omo(u) おも(う)'],
    displayMeanings: ['concept', 'think', 'idea'],
    fullDisplayMeanings: ['concept', 'think', 'idea'],
    meanings: ['concept', 'think', 'idea']
  },
  {
    id: 153,
    kanjiChar: '声',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: ['koe こえ'],
    displayMeanings: ['voice'],
    fullDisplayMeanings: ['voice'],
    meanings: ['voice']
  },
  {
    id: 154,
    kanjiChar: '助',
    onyomi: ['jo ジョ'],
    kunyomi: ['tasu(keru) たす(ける)'],
    displayMeanings: ['help', 'rescue', 'assist'],
    fullDisplayMeanings: ['help', 'rescue', 'assist'],
    meanings: ['help', 'rescue', 'assist']
  },
  {
    id: 155,
    kanjiChar: '労',
    onyomi: ['rou ロウ'],
    kunyomi: [
      'rou(suru) ろう(する)',
      'itawa(ru) いたわ(る)',
      'negira(u) ねぎら(う)'
    ],
    displayMeanings: ['labor', 'thank for'],
    fullDisplayMeanings: ['labor', 'thank for'],
    meanings: ['labor', 'thank for']
  },
  {
    id: 156,
    kanjiChar: '例',
    onyomi: ['rei レイ'],
    kunyomi: ['tato(eba) たと(えば)'],
    displayMeanings: ['example'],
    fullDisplayMeanings: ['example'],
    meanings: ['example']
  },
  {
    id: 157,
    kanjiChar: '然',
    onyomi: ['zen ゼン', 'nen ネン'],
    kunyomi: ['shika しか', 'sa さ'],
    displayMeanings: ['sort of thing', 'if so'],
    fullDisplayMeanings: ['sort of thing', 'if so'],
    meanings: ['sort of thing', 'if so']
  },
  {
    id: 158,
    kanjiChar: '限',
    onyomi: ['gen ゲン'],
    kunyomi: ['kagi(ru) かぎ(る)'],
    displayMeanings: ['limit', 'restrict'],
    fullDisplayMeanings: ['limit', 'restrict'],
    meanings: ['limit', 'restrict']
  },
  {
    id: 159,
    kanjiChar: '追',
    onyomi: ['tsui ツイ'],
    kunyomi: ['o(u) お(う)'],
    displayMeanings: ['chase', 'drive away'],
    fullDisplayMeanings: ['chase', 'drive away'],
    meanings: ['chase', 'drive away']
  },
  {
    id: 160,
    kanjiChar: '商',
    onyomi: ['shou ショウ'],
    kunyomi: ['akina(u) あきな(う)'],
    displayMeanings: ['deal', 'selling', 'merchant'],
    fullDisplayMeanings: ['deal', 'selling', 'merchant'],
    meanings: ['deal', 'selling', 'merchant']
  },
  {
    id: 161,
    kanjiChar: '葉',
    onyomi: ['you ヨウ'],
    kunyomi: ['ha は'],
    displayMeanings: [
      'leaf',
      'plane',
      'needle',
      'blade',
      'counter for flat things'
    ],
    fullDisplayMeanings: [
      'leaf',
      'plane',
      'needle',
      'blade',
      'counter for flat things'
    ],
    meanings: ['leaf', 'plane', 'needle', 'blade', 'counter for flat things']
  },
  {
    id: 162,
    kanjiChar: '伝',
    onyomi: ['den デン'],
    kunyomi: ['tsuta(waru) つた(わる)'],
    displayMeanings: [
      'transmit',
      'go along',
      'walk along',
      'follow',
      'report',
      'communicate',
      'legend',
      'tradition'
    ],
    fullDisplayMeanings: [
      'transmit',
      'go along',
      'walk along',
      'follow',
      'report',
      'communicate',
      'legend',
      'tradition'
    ],
    meanings: [
      'transmit',
      'go along',
      'walk along',
      'follow',
      'report',
      'communicate',
      'legend',
      'tradition'
    ]
  },
  {
    id: 163,
    kanjiChar: '働',
    onyomi: ['dou ドウ'],
    kunyomi: ['hatara(ku) はたら(く)'],
    displayMeanings: ['work'],
    fullDisplayMeanings: ['work'],
    meanings: ['work']
  },
  {
    id: 164,
    kanjiChar: '形',
    onyomi: ['kei ケイ', 'gyou ギョウ'],
    kunyomi: ['kata かた', 'katachi かたち', 'nari なり'],
    displayMeanings: ['shape', 'form', 'style'],
    fullDisplayMeanings: ['shape', 'form', 'style'],
    meanings: ['shape', 'form', 'style']
  },
  {
    id: 165,
    kanjiChar: '景',
    onyomi: ['kei ケイ', 'ke ケ'],
    kunyomi: [],
    displayMeanings: ['scenery', 'view'],
    fullDisplayMeanings: ['scenery', 'view'],
    meanings: ['scenery', 'view']
  },
  {
    id: 166,
    kanjiChar: '落',
    onyomi: ['raku ラク'],
    kunyomi: ['o(chiru) お(ちる)'],
    displayMeanings: ['fall', 'drop'],
    fullDisplayMeanings: ['fall', 'drop'],
    meanings: ['fall', 'drop']
  },
  {
    id: 167,
    kanjiChar: '好',
    onyomi: ['kou コウ'],
    kunyomi: ['kono(mu) この(む)', 'su(ku) す(く)'],
    displayMeanings: ['fond', 'pleasing', 'like something'],
    fullDisplayMeanings: ['fond', 'pleasing', 'like something'],
    meanings: ['fond', 'pleasing', 'like something']
  },
  {
    id: 168,
    kanjiChar: '退',
    onyomi: ['tai タイ'],
    kunyomi: [
      'shirizo(ku) しりぞ(く)',
      'hi(ku) ひ(く)',
      'no(keru) の(ける)',
      'do(ku) ど(く)'
    ],
    displayMeanings: [
      'retreat',
      'withdraw',
      'retire',
      'resign',
      'repel',
      'expel',
      'reject'
    ],
    fullDisplayMeanings: [
      'retreat',
      'withdraw',
      'retire',
      'resign',
      'repel',
      'expel',
      'reject'
    ],
    meanings: [
      'retreat',
      'withdraw',
      'retire',
      'resign',
      'repel',
      'expel',
      'reject'
    ]
  },
  {
    id: 169,
    kanjiChar: '頭',
    onyomi: ['tou トウ', 'zu ズ', 'to ト'],
    kunyomi: ['atama あたま', 'kashira かしら'],
    displayMeanings: ['head'],
    fullDisplayMeanings: ['head'],
    meanings: ['head']
  },
  {
    id: 170,
    kanjiChar: '負',
    onyomi: ['fu フ'],
    kunyomi: ['ma(keru) ま(ける)', 'o(u) お(う)'],
    displayMeanings: ['defeat', 'negative', 'minus', 'assume a responsibility'],
    fullDisplayMeanings: [
      'defeat',
      'negative',
      'minus',
      'assume a responsibility'
    ],
    meanings: ['defeat', 'negative', 'minus', 'assume a responsibility']
  },
  {
    id: 171,
    kanjiChar: '渡',
    onyomi: ['to ト'],
    kunyomi: ['wata(ru) わた(る)'],
    displayMeanings: ['transit', 'ferry', 'cross'],
    fullDisplayMeanings: ['transit', 'ferry', 'cross'],
    meanings: ['transit', 'ferry', 'cross']
  },
  {
    id: 172,
    kanjiChar: '失',
    onyomi: ['shitsu シツ'],
    kunyomi: ['ushina(u) うしな(う)', 'u(seru) う(せる)'],
    displayMeanings: ['lose', 'error', 'fault', 'disadvantage', 'loss'],
    fullDisplayMeanings: ['lose', 'error', 'fault', 'disadvantage', 'loss'],
    meanings: ['lose', 'error', 'fault', 'disadvantage', 'loss']
  },
  {
    id: 173,
    kanjiChar: '差',
    onyomi: ['sa サ'],
    kunyomi: ['sa(su) さ(す)'],
    displayMeanings: ['distinction', 'difference', 'variation'],
    fullDisplayMeanings: ['distinction', 'difference', 'variation'],
    meanings: ['distinction', 'difference', 'variation']
  },
  {
    id: 174,
    kanjiChar: '末',
    onyomi: ['matsu マツ'],
    kunyomi: ['sue すえ'],
    displayMeanings: ['end', 'close', 'tip'],
    fullDisplayMeanings: ['end', 'close', 'tip'],
    meanings: ['end', 'close', 'tip']
  },
  {
    id: 175,
    kanjiChar: '守',
    onyomi: ['shu シュ', 'su ス'],
    kunyomi: ['mamo(ru) まも(る)', 'mori もり'],
    displayMeanings: ['guard', 'protect', 'obey'],
    fullDisplayMeanings: ['guard', 'protect', 'obey'],
    meanings: ['guard', 'protect', 'obey']
  },
  {
    id: 176,
    kanjiChar: '若',
    onyomi: ['jaku ジャク'],
    kunyomi: ['waka(i) わか(い)', 'mo(shi) も(し)'],
    displayMeanings: ['young'],
    fullDisplayMeanings: ['young'],
    meanings: ['young']
  },
  {
    id: 177,
    kanjiChar: '種',
    onyomi: ['shu シュ'],
    kunyomi: ['tane たね', '-gusa -ぐさ'],
    displayMeanings: ['species', 'kind', 'class', 'seed'],
    fullDisplayMeanings: ['species', 'kind', 'class', 'seed'],
    meanings: ['species', 'kind', 'class', 'seed']
  },
  {
    id: 178,
    kanjiChar: '美',
    onyomi: ['bi ビ', 'mi ミ'],
    kunyomi: ['utsukushii うつく(しい)'],
    displayMeanings: ['beauty', 'beautiful'],
    fullDisplayMeanings: ['beauty', 'beautiful'],
    meanings: ['beauty', 'beautiful']
  },
  {
    id: 179,
    kanjiChar: '命',
    onyomi: ['mei メイ', 'myou ミョウ'],
    kunyomi: ['inochi いのち'],
    displayMeanings: ['fate', 'command'],
    fullDisplayMeanings: ['fate', 'command'],
    meanings: ['fate', 'command']
  },
  {
    id: 180,
    kanjiChar: '福',
    onyomi: ['fuku フク'],
    kunyomi: [],
    displayMeanings: ['blessing', 'fortune', 'luck', 'wealth'],
    fullDisplayMeanings: ['blessing', 'fortune', 'luck', 'wealth'],
    meanings: ['blessing', 'fortune', 'luck', 'wealth']
  },
  {
    id: 181,
    kanjiChar: '望',
    onyomi: ['bou ボウ'],
    kunyomi: ['nozo(mu) のぞ(む)', 'mochi もち'],
    displayMeanings: [
      'ambition',
      'full moon',
      'hope',
      'desire',
      'aspire to',
      'expect'
    ],
    fullDisplayMeanings: [
      'ambition',
      'full moon',
      'hope',
      'desire',
      'aspire to',
      'expect'
    ],
    meanings: ['ambition', 'full moon', 'hope', 'desire', 'aspire to', 'expect']
  },
  {
    id: 182,
    kanjiChar: '非',
    onyomi: ['hi ヒ'],
    kunyomi: ['ara(zu) あら(ず)'],
    displayMeanings: ['un-', 'mistake', 'negative'],
    fullDisplayMeanings: ['un-', 'mistake', 'negative'],
    meanings: ['un-', 'mistake', 'negative']
  },
  {
    id: 183,
    kanjiChar: '観',
    onyomi: ['kan カン'],
    kunyomi: ['mi(ru) み(る)'],
    displayMeanings: ['outlook', 'appearance', 'condition'],
    fullDisplayMeanings: ['outlook', 'appearance', 'condition'],
    meanings: ['outlook', 'appearance', 'condition']
  },
  {
    id: 184,
    kanjiChar: '察',
    onyomi: ['satsu サツ'],
    kunyomi: [],
    displayMeanings: ['guess', 'presume', 'judge'],
    fullDisplayMeanings: ['guess', 'presume', 'judge'],
    meanings: ['guess', 'presume', 'judge']
  },
  {
    id: 185,
    kanjiChar: '段',
    onyomi: ['dan ダン'],
    kunyomi: [],
    displayMeanings: ['grade', 'steps', 'stairs'],
    fullDisplayMeanings: ['grade', 'steps', 'stairs'],
    meanings: ['grade', 'steps', 'stairs']
  },
  {
    id: 186,
    kanjiChar: '横',
    onyomi: ['ou オウ'],
    kunyomi: ['yoko よこ'],
    displayMeanings: ['sideways', 'side'],
    fullDisplayMeanings: ['sideways', 'side'],
    meanings: ['sideways', 'side']
  },
  {
    id: 187,
    kanjiChar: '深',
    onyomi: ['shin シン'],
    kunyomi: ['fuka(i) ふか(い)'],
    displayMeanings: ['deep', 'heighten'],
    fullDisplayMeanings: ['deep', 'heighten'],
    meanings: ['deep', 'heighten']
  },
  {
    id: 188,
    kanjiChar: '申',
    onyomi: ['shin シン'],
    kunyomi: ['mou(su) もう(す)', 'saru さる'],
    displayMeanings: ['have the honor to'],
    fullDisplayMeanings: ['have the honor to'],
    meanings: ['have the honor to']
  },
  {
    id: 189,
    kanjiChar: '様',
    onyomi: ['you ヨウ'],
    kunyomi: ['sama さま', 'san さん'],
    displayMeanings: ['manner', 'situation', 'polite suffix'],
    fullDisplayMeanings: ['manner', 'situation', 'polite suffix'],
    meanings: ['manner', 'situation', 'polite suffix']
  },
  {
    id: 190,
    kanjiChar: '財',
    onyomi: ['zai ザイ', 'sai サイ', 'zoku ゾク'],
    kunyomi: [],
    displayMeanings: ['property', 'money', 'wealth', 'assets'],
    fullDisplayMeanings: ['property', 'money', 'wealth', 'assets'],
    meanings: ['property', 'money', 'wealth', 'assets']
  },
  {
    id: 191,
    kanjiChar: '港',
    onyomi: ['kou コウ'],
    kunyomi: ['minato みなと'],
    displayMeanings: ['harbor', 'port'],
    fullDisplayMeanings: ['harbor', 'port'],
    meanings: ['harbor', 'port']
  },
  {
    id: 192,
    kanjiChar: '識',
    onyomi: ['shiki シキ'],
    kunyomi: ['shi(ru) し(る)'],
    displayMeanings: ['know'],
    fullDisplayMeanings: ['know'],
    meanings: ['know']
  },
  {
    id: 193,
    kanjiChar: '呼',
    onyomi: ['ko コ'],
    kunyomi: ['yo(bu) よ(ぶ)'],
    displayMeanings: ['call', 'invite'],
    fullDisplayMeanings: ['call', 'invite'],
    meanings: ['call', 'invite']
  },
  {
    id: 194,
    kanjiChar: '達',
    onyomi: ['tatsu タツ', 'da ダ'],
    kunyomi: ['-tachi -たち'],
    displayMeanings: ['accomplished', 'reach', 'arrive', 'attain'],
    fullDisplayMeanings: ['accomplished', 'reach', 'arrive', 'attain'],
    meanings: ['accomplished', 'reach', 'arrive', 'attain']
  },
  {
    id: 195,
    kanjiChar: '良',
    onyomi: ['ryou リョウ'],
    kunyomi: ['yo(i) よ(い)', 'i(i) い(い)'],
    displayMeanings: ['good'],
    fullDisplayMeanings: ['good'],
    meanings: ['good']
  },
  {
    id: 196,
    kanjiChar: '阪',
    onyomi: ['han ハン'],
    kunyomi: ['saka さか'],
    displayMeanings: ['heights', 'slope'],
    fullDisplayMeanings: ['heights', 'slope'],
    meanings: ['heights', 'slope']
  },
  {
    id: 197,
    kanjiChar: '候',
    onyomi: ['kou コウ'],
    kunyomi: ['sourou そうろう'],
    displayMeanings: ['climate', 'season', 'weather'],
    fullDisplayMeanings: ['climate', 'season', 'weather'],
    meanings: ['climate', 'season', 'weather']
  },
  {
    id: 198,
    kanjiChar: '程',
    onyomi: ['tei テイ'],
    kunyomi: ['hodo ほど'],
    displayMeanings: ['extent', 'degree'],
    fullDisplayMeanings: ['extent', 'degree'],
    meanings: ['extent', 'degree']
  },
  {
    id: 199,
    kanjiChar: '満',
    onyomi: ['man マン'],
    kunyomi: ['mi(chiru) み(ちる)'],
    displayMeanings: ['full', 'fullness', 'enough', 'satisfy'],
    fullDisplayMeanings: ['full', 'fullness', 'enough', 'satisfy'],
    meanings: ['full', 'fullness', 'enough', 'satisfy']
  },
  {
    id: 200,
    kanjiChar: '敗',
    onyomi: ['hai ハイ'],
    kunyomi: ['yabu(reru) やぶ(れる)'],
    displayMeanings: ['failure', 'defeat'],
    fullDisplayMeanings: ['failure', 'defeat'],
    meanings: ['failure', 'defeat']
  },
  {
    id: 201,
    kanjiChar: '値',
    onyomi: ['chi チ'],
    kunyomi: ['ne ね', 'atai あたい'],
    displayMeanings: ['price', 'cost', 'value'],
    fullDisplayMeanings: ['price', 'cost', 'value'],
    meanings: ['price', 'cost', 'value']
  },
  {
    id: 202,
    kanjiChar: '突',
    onyomi: ['totsu トツ', 'ka カ'],
    kunyomi: ['tsu(ku) つ(く)'],
    displayMeanings: ['stab', 'protruding', 'thrust'],
    fullDisplayMeanings: ['stab', 'protruding', 'thrust'],
    meanings: ['stab', 'protruding', 'thrust']
  },
  {
    id: 203,
    kanjiChar: '光',
    onyomi: ['kou コウ'],
    kunyomi: ['hika(ru) ひか(る)', 'hikari ひかり'],
    displayMeanings: ['ray', 'light'],
    fullDisplayMeanings: ['ray', 'light'],
    meanings: ['ray', 'light']
  },
  {
    id: 204,
    kanjiChar: '路',
    onyomi: ['ro ロ', 'ru ル'],
    kunyomi: ['michi みち'],
    displayMeanings: ['path', 'route', 'road'],
    fullDisplayMeanings: ['path', 'route', 'road'],
    meanings: ['path', 'route', 'road']
  },
  {
    id: 205,
    kanjiChar: '科',
    onyomi: ['ka カ'],
    kunyomi: [],
    displayMeanings: ['department', 'course', 'section'],
    fullDisplayMeanings: ['department', 'course', 'section'],
    meanings: ['department', 'course', 'section']
  },
  {
    id: 206,
    kanjiChar: '積',
    onyomi: ['seki セキ'],
    kunyomi: ['tsu(mu) つ(む)'],
    displayMeanings: ['volume', 'contents', 'pile up', 'stack'],
    fullDisplayMeanings: ['volume', 'contents', 'pile up', 'stack'],
    meanings: ['volume', 'contents', 'pile up', 'stack']
  },
  {
    id: 207,
    kanjiChar: '他',
    onyomi: ['ta タ'],
    kunyomi: ['hoka ほか'],
    displayMeanings: ['other', 'another'],
    fullDisplayMeanings: ['other', 'another'],
    meanings: ['other', 'another']
  },
  {
    id: 208,
    kanjiChar: '処',
    onyomi: ['sho ショ'],
    kunyomi: [],
    displayMeanings: ['dispose', 'manage', 'deal with'],
    fullDisplayMeanings: ['dispose', 'manage', 'deal with'],
    meanings: ['dispose', 'manage', 'deal with']
  },
  {
    id: 209,
    kanjiChar: '太',
    onyomi: ['tai タイ', 'ta タ'],
    kunyomi: ['futo(i) ふと(い)'],
    displayMeanings: ['plump', 'thick', 'big around'],
    fullDisplayMeanings: ['plump', 'thick', 'big around'],
    meanings: ['plump', 'thick', 'big around']
  },
  {
    id: 210,
    kanjiChar: '客',
    onyomi: ['kyaku キャク', 'kaku カク'],
    kunyomi: [],
    displayMeanings: ['guest', 'visitor', 'customer'],
    fullDisplayMeanings: ['guest', 'visitor', 'customer'],
    meanings: ['guest', 'visitor', 'customer']
  },
  {
    id: 211,
    kanjiChar: '否',
    onyomi: ['hi ヒ'],
    kunyomi: ['ina いな', 'iya いや'],
    displayMeanings: ['negate', 'no', 'decline'],
    fullDisplayMeanings: ['negate', 'no', 'decline'],
    meanings: ['negate', 'no', 'decline']
  },
  {
    id: 212,
    kanjiChar: '師',
    onyomi: ['shi シ'],
    kunyomi: [],
    displayMeanings: ['expert', 'teacher', 'master'],
    fullDisplayMeanings: ['expert', 'teacher', 'master'],
    meanings: ['expert', 'teacher', 'master']
  },
  {
    id: 213,
    kanjiChar: '登',
    onyomi: ['tou トウ', 'to ト'],
    kunyomi: ['nobo(ru) のぼ(る)', 'a(garu) あ(がる)'],
    displayMeanings: ['ascend', 'climb up'],
    fullDisplayMeanings: ['ascend', 'climb up'],
    meanings: ['ascend', 'climb up']
  },
  {
    id: 214,
    kanjiChar: '易',
    onyomi: ['eki エキ', 'i イ'],
    kunyomi: ['yasa(shii) やさ(しい)', 'yasu(i) やす(い)'],
    displayMeanings: ['easy', 'ready to', 'simple'],
    fullDisplayMeanings: ['easy', 'ready to', 'simple'],
    meanings: ['easy', 'ready to', 'simple']
  },
  {
    id: 215,
    kanjiChar: '速',
    onyomi: ['soku ソク'],
    kunyomi: ['haya(i) はや(い)'],
    displayMeanings: ['quick', 'fast'],
    fullDisplayMeanings: ['quick', 'fast'],
    meanings: ['quick', 'fast']
  },
  {
    id: 216,
    kanjiChar: '存',
    onyomi: ['son ソン', 'zon ゾン'],
    kunyomi: [],
    displayMeanings: ['exist', 'be aware of'],
    fullDisplayMeanings: ['exist', 'be aware of'],
    meanings: ['exist', 'be aware of']
  },
  {
    id: 217,
    kanjiChar: '飛',
    onyomi: ['hi ヒ'],
    kunyomi: ['to(bu) と(ぶ)'],
    displayMeanings: ['fly'],
    fullDisplayMeanings: ['fly'],
    meanings: ['fly']
  },
  {
    id: 218,
    kanjiChar: '殺',
    onyomi: ['satsu サツ', 'sai サイ'],
    kunyomi: ['koro(su) ころ(す)'],
    displayMeanings: ['kill', 'murder'],
    fullDisplayMeanings: ['kill', 'murder'],
    meanings: ['kill', 'murder']
  },
  {
    id: 219,
    kanjiChar: '号',
    onyomi: ['gou ゴウ'],
    kunyomi: [],
    displayMeanings: ['number', 'item'],
    fullDisplayMeanings: ['number', 'item'],
    meanings: ['number', 'item']
  },
  {
    id: 220,
    kanjiChar: '単',
    onyomi: ['tan タン'],
    kunyomi: ['hitoe ひとえ'],
    displayMeanings: ['simple', 'single'],
    fullDisplayMeanings: ['simple', 'single'],
    meanings: ['simple', 'single']
  },
  {
    id: 221,
    kanjiChar: '座',
    onyomi: ['za ザ'],
    kunyomi: ['suwa(ru) すわ(る)'],
    displayMeanings: ['squat', 'seat', 'sit'],
    fullDisplayMeanings: ['squat', 'seat', 'sit'],
    meanings: ['squat', 'seat', 'sit']
  },
  {
    id: 222,
    kanjiChar: '破',
    onyomi: ['ha ハ'],
    kunyomi: ['yabu(ru) やぶ(る)'],
    displayMeanings: ['rip', 'tear', 'break'],
    fullDisplayMeanings: ['rip', 'tear', 'break'],
    meanings: ['rip', 'tear', 'break']
  },
  {
    id: 223,
    kanjiChar: '除',
    onyomi: ['jo ジョ', 'ji ジ'],
    kunyomi: ['nozo(ku) のぞ(く)'],
    displayMeanings: ['exclude', 'remove'],
    fullDisplayMeanings: ['exclude', 'remove'],
    meanings: ['exclude', 'remove']
  },
  {
    id: 224,
    kanjiChar: '完',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['perfect', 'completion'],
    fullDisplayMeanings: ['perfect', 'completion'],
    meanings: ['perfect', 'completion']
  },
  {
    id: 225,
    kanjiChar: '降',
    onyomi: ['kou コウ', 'go ゴ'],
    kunyomi: ['o(riru) お(りる)', 'fu(ru) ふ(る)'],
    displayMeanings: ['descend', 'precipitate', 'fall', 'surrender'],
    fullDisplayMeanings: ['descend', 'precipitate', 'fall', 'surrender'],
    meanings: ['descend', 'precipitate', 'fall', 'surrender']
  },
  {
    id: 226,
    kanjiChar: '責',
    onyomi: ['seki セキ'],
    kunyomi: ['se(meru) せ(める)'],
    displayMeanings: ['blame', 'condemn'],
    fullDisplayMeanings: ['blame', 'condemn'],
    meanings: ['blame', 'condemn']
  },
  {
    id: 227,
    kanjiChar: '捕',
    onyomi: ['ho ホ'],
    kunyomi: ['to(raeru) と(らえる)', 'tsuka(maeru) つか(まえる)'],
    displayMeanings: ['catch', 'capture'],
    fullDisplayMeanings: ['catch', 'capture'],
    meanings: ['catch', 'capture']
  },
  {
    id: 228,
    kanjiChar: '危',
    onyomi: ['ki キ'],
    kunyomi: ['abu(nai) あぶ(ない)', 'aya(ui) あや(うい)'],
    displayMeanings: ['dangerous', 'fear', 'uneasy'],
    fullDisplayMeanings: ['dangerous', 'fear', 'uneasy'],
    meanings: ['dangerous', 'fear', 'uneasy']
  },
  {
    id: 229,
    kanjiChar: '給',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['tama(u) たま(う)', 'tamo(u) たも(う)'],
    displayMeanings: ['salary', 'wage', 'gift'],
    fullDisplayMeanings: ['salary', 'wage', 'gift'],
    meanings: ['salary', 'wage', 'gift']
  },
  {
    id: 230,
    kanjiChar: '苦',
    onyomi: ['ku ク'],
    kunyomi: ['kuru(shii) くる(しい)', 'niga(i) にが(い)'],
    displayMeanings: ['suffering', 'bitter'],
    fullDisplayMeanings: ['suffering', 'bitter'],
    meanings: ['suffering', 'bitter']
  },
  {
    id: 231,
    kanjiChar: '迎',
    onyomi: ['gei ゲイ'],
    kunyomi: ['muka(eru) むか(える)'],
    displayMeanings: ['welcome', 'meet', 'greet'],
    fullDisplayMeanings: ['welcome', 'meet', 'greet'],
    meanings: ['welcome', 'meet', 'greet']
  },
  {
    id: 232,
    kanjiChar: '園',
    onyomi: ['en エン'],
    kunyomi: ['sono その'],
    displayMeanings: ['park', 'garden', 'yard'],
    fullDisplayMeanings: ['park', 'garden', 'yard'],
    meanings: ['park', 'garden', 'yard']
  },
  {
    id: 233,
    kanjiChar: '具',
    onyomi: ['gu グ'],
    kunyomi: ['sona(eru) そな(える)', 'tsubasa(ni) つぶさ(に)'],
    displayMeanings: ['tool', 'utensil'],
    fullDisplayMeanings: ['tool', 'utensil'],
    meanings: ['tool', 'utensil']
  },
  {
    id: 234,
    kanjiChar: '辞',
    onyomi: ['ji ジ'],
    kunyomi: ['ya(meru) や(める)'],
    displayMeanings: ['resign', 'word', 'term'],
    fullDisplayMeanings: ['resign', 'word', 'term'],
    meanings: ['resign', 'word', 'term']
  },
  {
    id: 235,
    kanjiChar: '因',
    onyomi: ['in イン'],
    kunyomi: ['yo(ru) よ(る)', 'china(mu) ちな(む)'],
    displayMeanings: ['cause', 'factor', 'depend on'],
    fullDisplayMeanings: ['cause', 'factor', 'depend on'],
    meanings: ['cause', 'factor', 'depend on']
  },
  {
    id: 236,
    kanjiChar: '馬',
    onyomi: ['ba バ'],
    kunyomi: ['uma うま'],
    displayMeanings: ['horse'],
    fullDisplayMeanings: ['horse'],
    meanings: ['horse']
  },
  {
    id: 237,
    kanjiChar: '愛',
    onyomi: ['ai アイ'],
    kunyomi: ['ito(shii) いと(しい)', 'mana まな'],
    displayMeanings: ['love', 'affection'],
    fullDisplayMeanings: ['love', 'affection'],
    meanings: ['love', 'affection']
  },
  {
    id: 238,
    kanjiChar: '富',
    onyomi: ['fu フ', 'fuu フウ'],
    kunyomi: ['to(mu) と(む)', 'tomi とみ'],
    displayMeanings: ['wealth', 'enrich', 'abundant'],
    fullDisplayMeanings: ['wealth', 'enrich', 'abundant'],
    meanings: ['wealth', 'enrich', 'abundant']
  },
  {
    id: 239,
    kanjiChar: '彼',
    onyomi: ['hi ヒ'],
    kunyomi: ['kare かれ', 'kano かの'],
    displayMeanings: ['he', 'him'],
    fullDisplayMeanings: ['he', 'him'],
    meanings: ['he', 'him']
  },
  {
    id: 240,
    kanjiChar: '未',
    onyomi: ['mi ミ', 'bi ビ'],
    kunyomi: ['ima(da) いま(だ)', 'ma(da) ま(だ)'],
    displayMeanings: ['un-', 'not yet'],
    fullDisplayMeanings: ['un-', 'not yet'],
    meanings: ['un-', 'not yet']
  },
  {
    id: 241,
    kanjiChar: '舞',
    onyomi: ['bu ブ'],
    kunyomi: ['ma(u) ま(う)', 'mai まい'],
    displayMeanings: ['dance', 'circle'],
    fullDisplayMeanings: ['dance', 'circle'],
    meanings: ['dance', 'circle']
  },
  {
    id: 242,
    kanjiChar: '亡',
    onyomi: ['bou ボウ', 'mou モウ'],
    kunyomi: ['na(kunaru) な(くなる)'],
    displayMeanings: ['deceased', 'dying'],
    fullDisplayMeanings: ['deceased', 'dying'],
    meanings: ['deceased', 'dying']
  },
  {
    id: 243,
    kanjiChar: '冷',
    onyomi: ['rei レイ'],
    kunyomi: ['tsume(tai) つめ(たい)', 'hi(eru) ひ(える)', 'sa(meru) さ(める)'],
    displayMeanings: ['cool', 'cold', 'chill'],
    fullDisplayMeanings: ['cool', 'cold', 'chill'],
    meanings: ['cool', 'cold', 'chill']
  },
  {
    id: 244,
    kanjiChar: '適',
    onyomi: ['teki テキ'],
    kunyomi: ['kana(u) かな(う)'],
    displayMeanings: ['suitable', 'occasional', 'rare'],
    fullDisplayMeanings: ['suitable', 'occasional', 'rare'],
    meanings: ['suitable', 'occasional', 'rare']
  },
  {
    id: 245,
    kanjiChar: '婦',
    onyomi: ['fu フ'],
    kunyomi: ['yome よめ'],
    displayMeanings: ['lady', 'woman', 'wife'],
    fullDisplayMeanings: ['lady', 'woman', 'wife'],
    meanings: ['lady', 'woman', 'wife']
  },
  {
    id: 246,
    kanjiChar: '寄',
    onyomi: ['ki キ'],
    kunyomi: ['yo(ru) よ(る)'],
    displayMeanings: ['draw near', 'gather'],
    fullDisplayMeanings: ['draw near', 'gather'],
    meanings: ['draw near', 'gather']
  },
  {
    id: 247,
    kanjiChar: '込',
    onyomi: [],
    kunyomi: ['ko(mu) こ(む)'],
    displayMeanings: ['crowded', 'mixture'],
    fullDisplayMeanings: ['crowded', 'mixture'],
    meanings: ['crowded', 'mixture']
  },
  {
    id: 248,
    kanjiChar: '顔',
    onyomi: ['gan ガン'],
    kunyomi: ['kao かお'],
    displayMeanings: ['face', 'expression'],
    fullDisplayMeanings: ['face', 'expression'],
    meanings: ['face', 'expression']
  },
  {
    id: 249,
    kanjiChar: '類',
    onyomi: ['rui ルイ'],
    kunyomi: ['tagu(i) たぐ(い)'],
    displayMeanings: ['sort', 'kind', 'variety', 'class', 'genus'],
    fullDisplayMeanings: ['sort', 'kind', 'variety', 'class', 'genus'],
    meanings: ['sort', 'kind', 'variety', 'class', 'genus']
  },
  {
    id: 250,
    kanjiChar: '余',
    onyomi: ['yo ヨ'],
    kunyomi: ['ama(ru) あま(る)'],
    displayMeanings: ['too much', 'surplus'],
    fullDisplayMeanings: ['too much', 'surplus'],
    meanings: ['too much', 'surplus']
  },
  {
    id: 251,
    kanjiChar: '王',
    onyomi: ['ou オウ'],
    kunyomi: [],
    displayMeanings: ['king', 'rule'],
    fullDisplayMeanings: ['king', 'rule'],
    meanings: ['king', 'rule']
  },
  {
    id: 252,
    kanjiChar: '返',
    onyomi: ['hen ヘン'],
    kunyomi: ['kae(su) かえ(す)'],
    displayMeanings: ['return', 'answer'],
    fullDisplayMeanings: ['return', 'answer'],
    meanings: ['return', 'answer']
  },
  {
    id: 253,
    kanjiChar: '妻',
    onyomi: ['sai サイ'],
    kunyomi: ['tsuma つま'],
    displayMeanings: ['wife', 'spouse'],
    fullDisplayMeanings: ['wife', 'spouse'],
    meanings: ['wife', 'spouse']
  },
  {
    id: 254,
    kanjiChar: '背',
    onyomi: ['hai ハイ'],
    kunyomi: ['se せ', 'sei せい'],
    displayMeanings: ['stature', 'height', 'back'],
    fullDisplayMeanings: ['stature', 'height', 'back'],
    meanings: ['stature', 'height', 'back']
  },
  {
    id: 255,
    kanjiChar: '熱',
    onyomi: ['netsu ネツ'],
    kunyomi: ['atsu(i) あつ(い)'],
    displayMeanings: ['heat', 'fever', 'passion'],
    fullDisplayMeanings: ['heat', 'fever', 'passion'],
    meanings: ['heat', 'fever', 'passion']
  },
  {
    id: 256,
    kanjiChar: '宿',
    onyomi: ['shuku シュク'],
    kunyomi: ['yado やど'],
    displayMeanings: ['inn', 'lodging'],
    fullDisplayMeanings: ['inn', 'lodging'],
    meanings: ['inn', 'lodging']
  },
  {
    id: 257,
    kanjiChar: '薬',
    onyomi: ['yaku ヤク'],
    kunyomi: ['kusuri くすり'],
    displayMeanings: ['medicine', 'chemical'],
    fullDisplayMeanings: ['medicine', 'chemical'],
    meanings: ['medicine', 'chemical']
  },
  {
    id: 258,
    kanjiChar: '険',
    onyomi: ['ken ケン'],
    kunyomi: ['kewa(shii) けわ(しい)'],
    displayMeanings: ['precipitous', 'inaccessible place'],
    fullDisplayMeanings: ['precipitous', 'inaccessible place'],
    meanings: ['precipitous', 'inaccessible place']
  },
  {
    id: 259,
    kanjiChar: '頼',
    onyomi: ['rai ライ'],
    kunyomi: ['tano(mu) たの(む)', 'tayo(ru) たよ(る)'],
    displayMeanings: ['trust', 'request'],
    fullDisplayMeanings: ['trust', 'request'],
    meanings: ['trust', 'request']
  },
  {
    id: 260,
    kanjiChar: '覚',
    onyomi: ['kaku カク'],
    kunyomi: ['obo(eru) おぼ(える)', 'sa(masu) さ(ます)'],
    displayMeanings: ['memorize', 'learn', 'remember', 'awake'],
    fullDisplayMeanings: ['memorize', 'learn', 'remember', 'awake'],
    meanings: ['memorize', 'learn', 'remember', 'awake']
  },
  {
    id: 261,
    kanjiChar: '船',
    onyomi: ['sen セン'],
    kunyomi: ['fune ふね', 'funa ふな'],
    displayMeanings: ['ship', 'boat'],
    fullDisplayMeanings: ['ship', 'boat'],
    meanings: ['ship', 'boat']
  },
  {
    id: 262,
    kanjiChar: '途',
    onyomi: ['to ト'],
    kunyomi: ['michi みち'],
    displayMeanings: ['route', 'way', 'road'],
    fullDisplayMeanings: ['route', 'way', 'road'],
    meanings: ['route', 'way', 'road']
  },
  {
    id: 263,
    kanjiChar: '許',
    onyomi: ['kyo キョ'],
    kunyomi: ['yuru(su) ゆる(す)'],
    displayMeanings: ['permit', 'approve'],
    fullDisplayMeanings: ['permit', 'approve'],
    meanings: ['permit', 'approve']
  },
  {
    id: 264,
    kanjiChar: '抜',
    onyomi: ['batsu バツ'],
    kunyomi: ['nu(ku) ぬ(く)'],
    displayMeanings: ['slip out', 'extract', 'pull out', 'remove'],
    fullDisplayMeanings: ['slip out', 'extract', 'pull out', 'remove'],
    meanings: ['slip out', 'extract', 'pull out', 'remove']
  },
  {
    id: 265,
    kanjiChar: '便',
    onyomi: ['ben ベン', 'bin ビン'],
    kunyomi: ['tayo(ri) たよ(り)'],
    displayMeanings: ['convenience', 'facility'],
    fullDisplayMeanings: ['convenience', 'facility'],
    meanings: ['convenience', 'facility']
  },
  {
    id: 266,
    kanjiChar: '留',
    onyomi: ['ryuu リュウ', 'ru ル'],
    kunyomi: ['to(maru) と(まる)', 'todo(meru) とど(める)'],
    displayMeanings: ['detain', 'fasten', 'halt', 'stop'],
    fullDisplayMeanings: ['detain', 'fasten', 'halt', 'stop'],
    meanings: ['detain', 'fasten', 'halt', 'stop']
  },
  {
    id: 267,
    kanjiChar: '罪',
    onyomi: ['zai ザイ'],
    kunyomi: ['tsumi つみ'],
    displayMeanings: ['guilt', 'sin', 'crime'],
    fullDisplayMeanings: ['guilt', 'sin', 'crime'],
    meanings: ['guilt', 'sin', 'crime']
  },
  {
    id: 268,
    kanjiChar: '努',
    onyomi: ['do ド'],
    kunyomi: ['tsuto(meru) つと(める)'],
    displayMeanings: ['toil', 'diligent', 'as much as possible'],
    fullDisplayMeanings: ['toil', 'diligent', 'as much as possible'],
    meanings: ['toil', 'diligent', 'as much as possible']
  },
  {
    id: 269,
    kanjiChar: '精',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: ['shira(geru) しら(げる)'],
    displayMeanings: ['refined', 'ghost', 'fairy', 'energy'],
    fullDisplayMeanings: ['refined', 'ghost', 'fairy', 'energy'],
    meanings: ['refined', 'ghost', 'fairy', 'energy']
  },
  {
    id: 270,
    kanjiChar: '散',
    onyomi: ['san サン'],
    kunyomi: ['chi(ru) ち(る)', 'bara(keru) ばら(ける)'],
    displayMeanings: ['scatter', 'disperse'],
    fullDisplayMeanings: ['scatter', 'disperse'],
    meanings: ['scatter', 'disperse']
  },
  {
    id: 271,
    kanjiChar: '静',
    onyomi: ['sei セイ', 'jou ジョウ'],
    kunyomi: ['shizu(ka) しず(か)'],
    displayMeanings: ['quiet'],
    fullDisplayMeanings: ['quiet'],
    meanings: ['quiet']
  },
  {
    id: 272,
    kanjiChar: '婚',
    onyomi: ['kon コン'],
    kunyomi: [],
    displayMeanings: ['marriage'],
    fullDisplayMeanings: ['marriage'],
    meanings: ['marriage']
  },
  {
    id: 273,
    kanjiChar: '喜',
    onyomi: ['ki キ'],
    kunyomi: ['yoroko(bu) よろこ(ぶ)'],
    displayMeanings: ['rejoice', 'take pleasure in'],
    fullDisplayMeanings: ['rejoice', 'take pleasure in'],
    meanings: ['rejoice', 'take pleasure in']
  },
  {
    id: 274,
    kanjiChar: '浮',
    onyomi: ['fu フ'],
    kunyomi: ['u(kabu) う(かぶ)'],
    displayMeanings: ['float', 'rise to surface'],
    fullDisplayMeanings: ['float', 'rise to surface'],
    meanings: ['float', 'rise to surface']
  },
  {
    id: 275,
    kanjiChar: '絶',
    onyomi: ['zetsu ゼツ'],
    kunyomi: ['ta(eru) た(える)'],
    displayMeanings: ['discontinue', 'unparalleled'],
    fullDisplayMeanings: ['discontinue', 'unparalleled'],
    meanings: ['discontinue', 'unparalleled']
  },
  {
    id: 276,
    kanjiChar: '幸',
    onyomi: ['kou コウ'],
    kunyomi: ['saiwa(i) さいわ(い)', 'sara さち', 'shiawa(se) しあわ(せ)'],
    displayMeanings: ['happiness', 'blessing', 'fortune'],
    fullDisplayMeanings: ['happiness', 'blessing', 'fortune'],
    meanings: ['happiness', 'blessing', 'fortune']
  },
  {
    id: 277,
    kanjiChar: '押',
    onyomi: ['ou オウ'],
    kunyomi: ['o(su) お(す)'],
    displayMeanings: ['push'],
    fullDisplayMeanings: ['push'],
    meanings: ['push']
  },
  {
    id: 278,
    kanjiChar: '倒',
    onyomi: ['tou トウ'],
    kunyomi: ['tao(reru) たお(れる)'],
    displayMeanings: ['overthrow', 'fall', 'collapse'],
    fullDisplayMeanings: ['overthrow', 'fall', 'collapse'],
    meanings: ['overthrow', 'fall', 'collapse']
  },
  {
    id: 279,
    kanjiChar: '等',
    onyomi: ['tou トウ'],
    kunyomi: ['hito(shii) ひと(しい)', 'nado など'],
    displayMeanings: ['etc.', 'and so forth'],
    fullDisplayMeanings: ['etc.', 'and so forth'],
    meanings: ['etc.', 'and so forth']
  },
  {
    id: 280,
    kanjiChar: '老',
    onyomi: ['rou ロウ'],
    kunyomi: ['o(iru) お(いる)', 'fu(keru) ふ(ける)'],
    displayMeanings: ['old'],
    fullDisplayMeanings: ['old'],
    meanings: ['old']
  },
  {
    id: 281,
    kanjiChar: '曲',
    onyomi: ['kyoku キョク'],
    kunyomi: ['ma(garu) ま(がる)'],
    displayMeanings: ['bend', 'music', 'melody'],
    fullDisplayMeanings: ['bend', 'music', 'melody'],
    meanings: ['bend', 'music', 'melody']
  },
  {
    id: 282,
    kanjiChar: '払',
    onyomi: [],
    kunyomi: ['hara(u) はら(う)'],
    displayMeanings: ['pay'],
    fullDisplayMeanings: ['pay'],
    meanings: ['pay']
  },
  {
    id: 283,
    kanjiChar: '庭',
    onyomi: ['tei テイ'],
    kunyomi: ['niwa にわ'],
    displayMeanings: ['courtyard', 'garden', 'yard'],
    fullDisplayMeanings: ['courtyard', 'garden', 'yard'],
    meanings: ['courtyard', 'garden', 'yard']
  },
  {
    id: 284,
    kanjiChar: '徒',
    onyomi: ['to ト'],
    kunyomi: ['itazura いたずら', 'ada あだ'],
    displayMeanings: ['on foot', 'junior', 'vanity', 'futility', 'uselessness'],
    fullDisplayMeanings: [
      'on foot',
      'junior',
      'vanity',
      'futility',
      'uselessness'
    ],
    meanings: ['on foot', 'junior', 'vanity', 'futility', 'uselessness']
  },
  {
    id: 285,
    kanjiChar: '勤',
    onyomi: ['kin キン', 'gon ゴン'],
    kunyomi: ['tsuto(meru) つと(める)'],
    displayMeanings: ['diligence', 'employed', 'serve'],
    fullDisplayMeanings: ['diligence', 'employed', 'serve'],
    meanings: ['diligence', 'employed', 'serve']
  },
  {
    id: 286,
    kanjiChar: '遅',
    onyomi: ['chi チ'],
    kunyomi: ['oku(reru) おく(れる)', 'oso(i) おそ(い)'],
    displayMeanings: ['slow', 'late', 'back', 'later'],
    fullDisplayMeanings: ['slow', 'late', 'back', 'later'],
    meanings: ['slow', 'late', 'back', 'later']
  },
  {
    id: 287,
    kanjiChar: '居',
    onyomi: ['kyo キョ', 'ko コ'],
    kunyomi: ['i(ru) い(る)', 'o(ru) お(る)'],
    displayMeanings: ['reside', 'to be', 'exist'],
    fullDisplayMeanings: ['reside', 'to be', 'exist'],
    meanings: ['reside', 'to be', 'exist']
  },
  {
    id: 288,
    kanjiChar: '雑',
    onyomi: ['zatsu ザツ', 'zou ゾウ'],
    kunyomi: ['maji(ru) まじ(る)'],
    displayMeanings: ['miscellaneous'],
    fullDisplayMeanings: ['miscellaneous'],
    meanings: ['miscellaneous']
  },
  {
    id: 289,
    kanjiChar: '招',
    onyomi: ['shou ショウ'],
    kunyomi: ['mane(ku) まね(く)'],
    displayMeanings: ['invite', 'summon', 'engage'],
    fullDisplayMeanings: ['invite', 'summon', 'engage'],
    meanings: ['invite', 'summon', 'engage']
  },
  {
    id: 290,
    kanjiChar: '困',
    onyomi: ['kon コン'],
    kunyomi: ['koma(ru) こま(る)'],
    displayMeanings: ['quandary', 'become distressed'],
    fullDisplayMeanings: ['quandary', 'become distressed'],
    meanings: ['quandary', 'become distressed']
  },
  {
    id: 291,
    kanjiChar: '欠',
    onyomi: ['ketsu ケツ', 'ken ケン'],
    kunyomi: ['ka(keru) か(ける)'],
    displayMeanings: ['lack', 'gap'],
    fullDisplayMeanings: ['lack', 'gap'],
    meanings: ['lack', 'gap']
  },
  {
    id: 292,
    kanjiChar: '更',
    onyomi: ['kou コウ'],
    kunyomi: ['sara(ni) さら(に)', 'fu(keru) ふ(ける)'],
    displayMeanings: ['renew', 'renovate', 'again'],
    fullDisplayMeanings: ['renew', 'renovate', 'again'],
    meanings: ['renew', 'renovate', 'again']
  },
  {
    id: 293,
    kanjiChar: '刻',
    onyomi: ['koku コク'],
    kunyomi: ['kiza(mu) きざ(む)'],
    displayMeanings: ['engrave', 'cut fine', 'chop'],
    fullDisplayMeanings: ['engrave', 'cut fine', 'chop'],
    meanings: ['engrave', 'cut fine', 'chop']
  },
  {
    id: 294,
    kanjiChar: '賛',
    onyomi: ['san サン'],
    kunyomi: [],
    displayMeanings: ['approve', 'praise'],
    fullDisplayMeanings: ['approve', 'praise'],
    meanings: ['approve', 'praise']
  },
  {
    id: 295,
    kanjiChar: '抱',
    onyomi: ['hou ホウ'],
    kunyomi: ['da(ku) だ(く)', 'ida(ku) いだ(く)', 'kaka(eru) かか(える)'],
    displayMeanings: ['embrace', 'hug'],
    fullDisplayMeanings: ['embrace', 'hug'],
    meanings: ['embrace', 'hug']
  },
  {
    id: 296,
    kanjiChar: '犯',
    onyomi: ['han ハン'],
    kunyomi: ['oka(su) おか(す)'],
    displayMeanings: ['crime', 'sin', 'offense'],
    fullDisplayMeanings: ['crime', 'sin', 'offense'],
    meanings: ['crime', 'sin', 'offense']
  },
  {
    id: 297,
    kanjiChar: '恐',
    onyomi: ['kyou キョウ'],
    kunyomi: ['oso(reru) おそ(れる)', 'kowa(i) こわ(い)'],
    displayMeanings: ['fear', 'dread'],
    fullDisplayMeanings: ['fear', 'dread'],
    meanings: ['fear', 'dread']
  },
  {
    id: 298,
    kanjiChar: '息',
    onyomi: ['musu ムス', 'soku ソク'],
    kunyomi: ['iki いき'],
    displayMeanings: ['breath', 'son', 'interest (on money)'],
    fullDisplayMeanings: ['breath', 'son', 'interest (on money)'],
    meanings: ['breath', 'son', 'interest (on money)', 'interest on money']
  },
  {
    id: 299,
    kanjiChar: '遠',
    onyomi: ['en エン', 'on オン'], // Note: Input only showed 'en', assuming 'on' might be alternative if available elsewhere
    kunyomi: ['too(i) とお(い)'],
    displayMeanings: ['distant', 'far'],
    fullDisplayMeanings: ['distant', 'far'],
    meanings: ['distant', 'far']
  },
  {
    id: 300,
    kanjiChar: '戻',
    onyomi: ['rei レイ'],
    kunyomi: ['modo(ru) もど(る)'],
    displayMeanings: ['re-', 'return', 'revert'],
    fullDisplayMeanings: ['re-', 'return', 'revert'],
    meanings: ['re-', 're', 'return', 'revert']
  },

  {
    id: 301,
    kanjiChar: '願',
    onyomi: ['gan ガン'],
    kunyomi: ['nega(u) ねが(う)'],
    displayMeanings: ['petition', 'request', 'wish'],
    fullDisplayMeanings: ['petition', 'request', 'wish'],
    meanings: ['petition', 'request', 'wish']
  },
  {
    id: 302,
    kanjiChar: '絵',
    onyomi: ['kai カイ', 'e エ'],
    kunyomi: [],
    displayMeanings: ['picture', 'drawing'],
    fullDisplayMeanings: ['picture', 'drawing'],
    meanings: ['picture', 'drawing']
  },
  {
    id: 303,
    kanjiChar: '越',
    onyomi: ['etsu エツ'],
    kunyomi: ['ko(su) こ(す)'],
    displayMeanings: ['surpass', 'cross over', 'move to', 'exceed'],
    fullDisplayMeanings: ['surpass', 'cross over', 'move to', 'exceed'],
    meanings: ['surpass', 'cross over', 'move to', 'exceed']
  },
  {
    id: 304,
    kanjiChar: '欲',
    onyomi: ['yoku ヨク'],
    kunyomi: ['ho(shii) ほ(しい)'],
    displayMeanings: ['longing', 'greed', 'passion'],
    fullDisplayMeanings: ['longing', 'greed', 'passion'],
    meanings: ['longing', 'greed', 'passion']
  },
  {
    id: 305,
    kanjiChar: '痛',
    onyomi: ['tsuu ツウ'],
    kunyomi: ['ita(i) いた(い)'],
    displayMeanings: ['pain', 'hurt', 'damage', 'bruise'],
    fullDisplayMeanings: ['pain', 'hurt', 'damage', 'bruise'],
    meanings: ['pain', 'hurt', 'damage', 'bruise']
  },
  {
    id: 306,
    kanjiChar: '笑',
    onyomi: ['shou ショウ'],
    kunyomi: ['wara(u) わら(う)', 'e(mu) え(む)'],
    displayMeanings: ['laugh'],
    fullDisplayMeanings: ['laugh'],
    meanings: ['laugh']
  },
  {
    id: 307,
    kanjiChar: '互',
    onyomi: ['go ゴ'],
    kunyomi: ['taga(i) たが(い)', 'katami(ni) かたみ(に)'],
    displayMeanings: ['mutually', 'reciprocally', 'together'],
    fullDisplayMeanings: ['mutually', 'reciprocally', 'together'],
    meanings: ['mutually', 'reciprocally', 'together']
  },
  {
    id: 308,
    kanjiChar: '束',
    onyomi: ['soku ソク'],
    kunyomi: ['taba たば', 'tsuka つか'],
    displayMeanings: ['bundle', 'manage'],
    fullDisplayMeanings: ['bundle', 'manage'],
    meanings: ['bundle', 'manage']
  },
  {
    id: 309,
    kanjiChar: '似',
    onyomi: ['ji ジ', 'ne ね'],
    kunyomi: ['ni(ru) に(る)'],
    displayMeanings: ['becoming', 'resemble', 'imitate'],
    fullDisplayMeanings: ['becoming', 'resemble', 'imitate'],
    meanings: ['becoming', 'resemble', 'imitate']
  },
  {
    id: 310,
    kanjiChar: '列',
    onyomi: ['retsu レツ', 're レ'],
    kunyomi: [],
    displayMeanings: ['file', 'row', 'column'],
    fullDisplayMeanings: ['file', 'row', 'column'],
    meanings: ['file', 'row', 'column']
  },
  {
    id: 311,
    kanjiChar: '探',
    onyomi: ['tan タン'],
    kunyomi: ['sagu(ru) さぐ(る)', 'saga(su) さが(す)'],
    displayMeanings: ['search', 'look for'],
    fullDisplayMeanings: ['search', 'look for'],
    meanings: ['search', 'look for']
  },
  {
    id: 312,
    kanjiChar: '逃',
    onyomi: ['tou トウ'],
    kunyomi: ['ni(geru) に(げる)', 'noga(su) のが(す)'],
    displayMeanings: ['escape', 'flee'],
    fullDisplayMeanings: ['escape', 'flee'],
    meanings: ['escape', 'flee']
  },
  {
    id: 313,
    kanjiChar: '遊',
    onyomi: ['yuu ユウ'],
    kunyomi: ['aso(bu) あそ(ぶ)'],
    displayMeanings: ['play'],
    fullDisplayMeanings: ['play'],
    meanings: ['play']
  },
  {
    id: 314,
    kanjiChar: '迷',
    onyomi: ['mei メイ'],
    kunyomi: ['mayo(u) まよ(う)'],
    displayMeanings: ['astray', 'be perplexed', 'in doubt', 'lost'],
    fullDisplayMeanings: ['astray', 'be perplexed', 'in doubt', 'lost'],
    meanings: ['astray', 'be perplexed', 'in doubt', 'lost']
  },
  {
    id: 315,
    kanjiChar: '夢',
    onyomi: ['mu ム'],
    kunyomi: ['yume ゆめ'],
    displayMeanings: ['dream', 'vision'],
    fullDisplayMeanings: ['dream', 'vision'],
    meanings: ['dream', 'vision']
  },
  {
    id: 316,
    kanjiChar: '君',
    onyomi: ['kun クン'],
    kunyomi: ['kimi きみ'],
    displayMeanings: ['you', 'male name suffix'],
    fullDisplayMeanings: ['you', 'male name suffix'],
    meanings: ['you', 'male name suffix']
  },
  {
    id: 317,
    kanjiChar: '閉',
    onyomi: ['hei ヘイ'],
    kunyomi: ['to(jiru) と(じる)', 'shi(meru) し(める)'],
    displayMeanings: ['closed', 'shut'],
    fullDisplayMeanings: ['closed', 'shut'],
    meanings: ['closed', 'shut']
  },
  {
    id: 318,
    kanjiChar: '緒',
    onyomi: ['sho ショ'],
    kunyomi: ['o お'],
    displayMeanings: ['beginning', 'end', 'cord', 'strap'],
    fullDisplayMeanings: ['beginning', 'end', 'cord', 'strap'],
    meanings: ['beginning', 'end', 'cord', 'strap']
  },
  {
    id: 319,
    kanjiChar: '折',
    onyomi: ['setsu セツ', 'shaku シャク'],
    kunyomi: ['o(ru) お(る)', 'ori おり'],
    displayMeanings: ['fold', 'break', 'fracture'],
    fullDisplayMeanings: ['fold', 'break', 'fracture'],
    meanings: ['fold', 'break', 'fracture']
  },
  {
    id: 320,
    kanjiChar: '草',
    onyomi: ['sou ソウ'],
    kunyomi: ['kusa くさ'],
    displayMeanings: ['grass', 'weeds', 'herbs'],
    fullDisplayMeanings: ['grass', 'weeds', 'herbs'],
    meanings: ['grass', 'weeds', 'herbs']
  },
  {
    id: 321,
    kanjiChar: '暮',
    onyomi: ['bo ボ'],
    kunyomi: ['ku(rasu) く(らす)'],
    displayMeanings: ['evening', 'livelihood'],
    fullDisplayMeanings: ['evening', 'livelihood'],
    meanings: ['evening', 'livelihood']
  },
  {
    id: 322,
    kanjiChar: '酒',
    onyomi: ['shu シュ'],
    kunyomi: ['sake さけ', 'saka- さか-'],
    displayMeanings: ['sake', 'alcohol'],
    fullDisplayMeanings: ['sake', 'alcohol'],
    meanings: ['sake', 'alcohol']
  },
  {
    id: 323,
    kanjiChar: '悲',
    onyomi: ['hi ヒ'],
    kunyomi: ['kana(shii) かな(しい)'],
    displayMeanings: ['grieve', 'sad'],
    fullDisplayMeanings: ['grieve', 'sad'],
    meanings: ['grieve', 'sad']
  },
  {
    id: 324,
    kanjiChar: '晴',
    onyomi: ['sei セイ'],
    kunyomi: ['ha(reru) は(れる)'],
    displayMeanings: ['clear up'],
    fullDisplayMeanings: ['clear up'],
    meanings: ['clear up']
  },
  {
    id: 325,
    kanjiChar: '掛',
    onyomi: ['kei ケイ'],
    kunyomi: ['ka(keru) か(ける)'],
    displayMeanings: ['hang', 'suspend'],
    fullDisplayMeanings: ['hang', 'suspend'],
    meanings: ['hang', 'suspend']
  },
  {
    id: 326,
    kanjiChar: '到',
    onyomi: ['tou トウ'],
    kunyomi: ['ita(ru) いた(る)'],
    displayMeanings: ['arrival', 'proceed', 'reach'],
    fullDisplayMeanings: ['arrival', 'proceed', 'reach'],
    meanings: ['arrival', 'proceed', 'reach']
  },
  {
    id: 327,
    kanjiChar: '寝',
    onyomi: ['shin シン'],
    kunyomi: ['ne(ru) ね(る)'],
    displayMeanings: ['lie down', 'sleep', 'rest'],
    fullDisplayMeanings: ['lie down', 'sleep', 'rest'],
    meanings: ['lie down', 'sleep', 'rest']
  },
  {
    id: 328,
    kanjiChar: '暗',
    onyomi: ['an アン'],
    kunyomi: ['kura(i) くら(い)'],
    displayMeanings: ['darkness', 'disappear', 'shade', 'informal'],
    fullDisplayMeanings: ['darkness', 'disappear', 'shade', 'informal'],
    meanings: ['darkness', 'disappear', 'shade', 'informal']
  },
  {
    id: 329,
    kanjiChar: '盗',
    onyomi: ['tou トウ'],
    kunyomi: ['nusu(mu) ぬす(む)'],
    displayMeanings: ['steal', 'rob'],
    fullDisplayMeanings: ['steal', 'rob'],
    meanings: ['steal', 'rob']
  },
  {
    id: 330,
    kanjiChar: '吸',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['su(u) す(う)'],
    displayMeanings: ['suck', 'inhale'],
    fullDisplayMeanings: ['suck', 'inhale'],
    meanings: ['suck', 'inhale']
  },
  {
    id: 331,
    kanjiChar: '陽',
    onyomi: ['you ヨウ'],
    kunyomi: ['hi ひ'],
    displayMeanings: ['sunshine', 'positive'],
    fullDisplayMeanings: ['sunshine', 'positive'],
    meanings: ['sunshine', 'positive']
  },
  {
    id: 332,
    kanjiChar: '御',
    onyomi: ['gyo ギョ', 'go ゴ'],
    kunyomi: ['on おん', 'o お'],
    displayMeanings: ['honorable'],
    fullDisplayMeanings: ['honorable'],
    meanings: ['honorable']
  },
  {
    id: 333,
    kanjiChar: '歯',
    onyomi: ['shi シ'],
    kunyomi: ['ha は'],
    displayMeanings: ['tooth', 'cog'],
    fullDisplayMeanings: ['tooth', 'cog'],
    meanings: ['tooth', 'cog']
  },
  {
    id: 334,
    kanjiChar: '忘',
    onyomi: ['bou ボウ'],
    kunyomi: ['wasu(reru) わす(れる)'],
    displayMeanings: ['forget'],
    fullDisplayMeanings: ['forget'],
    meanings: ['forget']
  },
  {
    id: 335,
    kanjiChar: '雪',
    onyomi: ['setsu セツ'],
    kunyomi: ['yuki ゆき'],
    displayMeanings: ['snow'],
    fullDisplayMeanings: ['snow'],
    meanings: ['snow']
  },
  {
    id: 336,
    kanjiChar: '吹',
    onyomi: ['sui スイ'],
    kunyomi: ['fu(ku) ふ(く)'],
    displayMeanings: ['blow', 'breathe', 'puff'],
    fullDisplayMeanings: ['blow', 'breathe', 'puff'],
    meanings: ['blow', 'breathe', 'puff']
  },
  {
    id: 337,
    kanjiChar: '娘',
    onyomi: ['jou ジョウ'],
    kunyomi: ['musume むすめ', 'ko こ'],
    displayMeanings: ['daughter', 'girl'],
    fullDisplayMeanings: ['daughter', 'girl'],
    meanings: ['daughter', 'girl']
  },
  {
    id: 338,
    kanjiChar: '誤',
    onyomi: ['go ゴ'],
    kunyomi: ['ayama(ru) あやま(る)'],
    displayMeanings: ['mistake'],
    fullDisplayMeanings: ['mistake'],
    meanings: ['mistake']
  },
  {
    id: 339,
    kanjiChar: '洗',
    onyomi: ['sen セン'],
    kunyomi: ['ara(u) あら(う)'],
    displayMeanings: ['wash'],
    fullDisplayMeanings: ['wash'],
    meanings: ['wash']
  },
  {
    id: 340,
    kanjiChar: '慣',
    onyomi: ['kan カン'],
    kunyomi: ['na(reru) な(れる)'],
    displayMeanings: ['accustomed', 'get used to'],
    fullDisplayMeanings: ['accustomed', 'get used to'],
    meanings: ['accustomed', 'get used to']
  },
  {
    id: 341,
    kanjiChar: '礼',
    onyomi: ['rei レイ', 'rai ライ'],
    kunyomi: [],
    displayMeanings: ['salute', 'bow', 'ceremony', 'thanks'],
    fullDisplayMeanings: ['salute', 'bow', 'ceremony', 'thanks'],
    meanings: ['salute', 'bow', 'ceremony', 'thanks']
  },
  {
    id: 342,
    kanjiChar: '窓',
    onyomi: ['sou ソウ'],
    kunyomi: ['mado まど'],
    displayMeanings: ['window', 'pane'],
    fullDisplayMeanings: ['window', 'pane'],
    meanings: ['window', 'pane']
  },
  {
    id: 343,
    kanjiChar: '昔',
    onyomi: ['seki セキ', 'shaku シャク'],
    kunyomi: ['mukashi むかし'],
    displayMeanings: ['once upon a time', 'old times'],
    fullDisplayMeanings: ['once upon a time', 'old times'],
    meanings: ['once upon a time', 'old times']
  },
  {
    id: 344,
    kanjiChar: '貧',
    onyomi: ['hin ヒン', 'bin ビン'],
    kunyomi: ['mazu(shii) まず(しい)'],
    displayMeanings: ['poverty', 'poor'],
    fullDisplayMeanings: ['poverty', 'poor'],
    meanings: ['poverty', 'poor']
  },
  {
    id: 345,
    kanjiChar: '怒',
    onyomi: ['do ド'],
    kunyomi: ['ika(ru) いか(る)', 'oko(ru) おこ(る)'],
    displayMeanings: ['angry', 'be offended'],
    fullDisplayMeanings: ['angry', 'be offended'],
    meanings: ['angry', 'be offended']
  },
  {
    id: 346,
    kanjiChar: '泳',
    onyomi: ['ei エイ'],
    kunyomi: ['oyo(gu) およ(ぐ)'],
    displayMeanings: ['swim'],
    fullDisplayMeanings: ['swim'],
    meanings: ['swim']
  },
  {
    id: 347,
    kanjiChar: '祖',
    onyomi: ['so ソ'],
    kunyomi: [],
    displayMeanings: ['ancestor', 'pioneer', 'founder'],
    fullDisplayMeanings: ['ancestor', 'pioneer', 'founder'],
    meanings: ['ancestor', 'pioneer', 'founder']
  },
  {
    id: 348,
    kanjiChar: '杯',
    onyomi: ['hai ハイ'],
    kunyomi: ['sakazuki さかずき'],
    displayMeanings: ['glass', 'cup'],
    fullDisplayMeanings: ['glass', 'cup'],
    meanings: ['glass', 'cup']
  },
  {
    id: 349,
    kanjiChar: '疲',
    onyomi: ['hi ヒ'],
    kunyomi: ['tsuka(reru) つか(れる)'],
    displayMeanings: ['exhausted', 'tire'],
    fullDisplayMeanings: ['exhausted', 'tire'],
    meanings: ['exhausted', 'tire']
  },
  {
    id: 350,
    kanjiChar: '皆',
    onyomi: ['kai カイ'],
    kunyomi: ['mina みな', 'minna みんな'],
    displayMeanings: ['all', 'everyone', 'everybody'],
    fullDisplayMeanings: ['all', 'everyone', 'everybody'],
    meanings: ['all', 'everyone', 'everybody']
  },
  {
    id: 351,
    kanjiChar: '鳴',
    onyomi: ['mei メイ'],
    kunyomi: ['na(ku) な(く)', 'na(ru) な(る)'],
    displayMeanings: ['chirp', 'cry', 'bark'],
    fullDisplayMeanings: ['chirp', 'cry', 'bark'],
    meanings: ['chirp', 'cry', 'bark']
  },
  {
    id: 352,
    kanjiChar: '腹',
    onyomi: ['fuku フク'],
    kunyomi: ['hara はら'],
    displayMeanings: ['abdomen', 'belly', 'stomach'],
    fullDisplayMeanings: ['abdomen', 'belly', 'stomach'],
    meanings: ['abdomen', 'belly', 'stomach']
  },
  {
    id: 353,
    kanjiChar: '煙',
    onyomi: ['en エン'],
    kunyomi: ['kemu(ru) けむ(る)', 'kemuri けむり'],
    displayMeanings: ['smoke'],
    fullDisplayMeanings: ['smoke'],
    meanings: ['smoke']
  },
  {
    id: 354,
    kanjiChar: '眠',
    onyomi: ['min ミン'],
    kunyomi: ['nemu(ru) ねむ(る)'],
    displayMeanings: ['sleep'],
    fullDisplayMeanings: ['sleep'],
    meanings: ['sleep']
  },
  {
    id: 355,
    kanjiChar: '怖',
    onyomi: ['fu フ'],
    kunyomi: ['kowa(i) こわ(い)', 'o(jiru) お(じる)'],
    displayMeanings: ['dreadful', 'fearful'],
    fullDisplayMeanings: ['dreadful', 'fearful'],
    meanings: ['dreadful', 'fearful']
  },
  {
    id: 356,
    kanjiChar: '耳',
    onyomi: ['ji ジ'],
    kunyomi: ['mimi みみ'],
    displayMeanings: ['ear'],
    fullDisplayMeanings: ['ear'],
    meanings: ['ear']
  },
  {
    id: 357,
    kanjiChar: '頂',
    onyomi: ['chou チョウ'],
    kunyomi: ['itada(ku) いただ(く)'],
    displayMeanings: ['receive', 'top', 'summit', 'peak'],
    fullDisplayMeanings: ['receive', 'top', 'summit', 'peak'],
    meanings: ['receive', 'top', 'summit', 'peak']
  },
  {
    id: 358,
    kanjiChar: '箱',
    onyomi: ['sou ソウ'],
    kunyomi: ['hako はこ'],
    displayMeanings: ['box', 'chest'],
    fullDisplayMeanings: ['box', 'chest'],
    meanings: ['box', 'chest']
  },
  {
    id: 359,
    kanjiChar: '晩',
    onyomi: ['ban バン'],
    kunyomi: [],
    displayMeanings: ['nightfall', 'night'],
    fullDisplayMeanings: ['nightfall', 'night'],
    meanings: ['nightfall', 'night']
  },
  {
    id: 360,
    kanjiChar: '寒',
    onyomi: ['kan カン'],
    kunyomi: ['samu(i) さむ(い)'],
    displayMeanings: ['cold'],
    fullDisplayMeanings: ['cold'],
    meanings: ['cold']
  },
  {
    id: 361,
    kanjiChar: '髪',
    onyomi: ['hatsu ハツ'],
    kunyomi: ['kami かみ'],
    displayMeanings: ['hair (on the head)'],
    fullDisplayMeanings: ['hair (on the head)'],
    meanings: ['hair (on the head)']
  },
  {
    id: 362,
    kanjiChar: '忙',
    onyomi: ['bou ボウ', 'mou モウ'],
    kunyomi: ['isoga(shii) いそが(しい)'],
    displayMeanings: ['busy', 'occupied'],
    fullDisplayMeanings: ['busy', 'occupied'],
    meanings: ['busy', 'occupied']
  },
  {
    id: 363,
    kanjiChar: '才',
    onyomi: ['sai サイ'],
    kunyomi: [],
    displayMeanings: ['genius', 'years old'],
    fullDisplayMeanings: ['genius', 'years old'],
    meanings: ['genius', 'years old']
  },
  {
    id: 364,
    kanjiChar: '靴',
    onyomi: ['ka カ'],
    kunyomi: ['kutsu くつ'],
    displayMeanings: ['shoes'],
    fullDisplayMeanings: ['shoes'],
    meanings: ['shoes']
  },
  {
    id: 365,
    kanjiChar: '恥',
    onyomi: ['chi チ'],
    kunyomi: ['haji はじ', 'ha(zukashii) は(ずかしい)'],
    displayMeanings: ['shame', 'dishonor'],
    fullDisplayMeanings: ['shame', 'dishonor'],
    meanings: ['shame', 'dishonor']
  },
  {
    id: 366,
    kanjiChar: '偶',
    onyomi: ['guu グウ'],
    kunyomi: ['tama たま'],
    displayMeanings: ['accidentally', 'even number'],
    fullDisplayMeanings: ['accidentally', 'even number'],
    meanings: ['accidentally', 'even number']
  },
  {
    id: 367,
    kanjiChar: '偉',
    onyomi: ['i イ'],
    kunyomi: ['era(i) えら(い)'],
    displayMeanings: ['admirable', 'greatness'],
    fullDisplayMeanings: ['admirable', 'greatness'],
    meanings: ['admirable', 'greatness']
  },
  {
    id: 368,
    kanjiChar: '猫',
    onyomi: ['byou ビョウ'],
    kunyomi: ['neko ねこ'],
    displayMeanings: ['cat'],
    fullDisplayMeanings: ['cat'],
    meanings: ['cat']
  },
  {
    id: 369,
    kanjiChar: '幾',
    onyomi: ['ki キ'],
    kunyomi: ['iku(tsu) いく(つ)'],
    displayMeanings: ['how many', 'how much', 'some'],
    fullDisplayMeanings: ['how many', 'how much', 'some'],
    meanings: ['how many', 'how much', 'some']
  },
  {
    id: 370,
    kanjiChar: '誰',
    onyomi: ['sui スイ'],
    kunyomi: ['dare だれ'],
    displayMeanings: ['who', 'someone', 'somebody'],
    fullDisplayMeanings: ['who', 'someone', 'somebody'],
    meanings: ['who', 'someone', 'somebody']
  }
];

export default N3;
