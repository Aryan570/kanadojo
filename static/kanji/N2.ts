const N2 = [
  {
    id: 1,
    kanjiChar: '党',
    onyomi: ['tou トウ'],
    kunyomi: ['nakama なかま', 'mura むら'],
    displayMeanings: ['party', 'faction', 'clique'],
    fullDisplayMeanings: ['party', 'faction', 'clique'],
    meanings: ['party', 'faction', 'clique']
  },
  {
    id: 2,
    kanjiChar: '協',
    onyomi: ['kyou キョウ'],
    kunyomi: [],
    displayMeanings: ['co-', 'cooperation'],
    fullDisplayMeanings: ['co-', 'cooperation'],
    meanings: ['co-', 'cooperation']
  },
  {
    id: 3,
    kanjiChar: '総',
    onyomi: ['sou ソウ'],
    kunyomi: ['subete すべて', 'fusa ふさ'],
    displayMeanings: ['general', 'whole', 'all'],
    fullDisplayMeanings: ['general', 'whole', 'all'],
    meanings: ['general', 'whole', 'all']
  },
  {
    id: 4,
    kanjiChar: '区',
    onyomi: ['ku ク'],
    kunyomi: [],
    displayMeanings: ['ward', 'district'],
    fullDisplayMeanings: ['ward', 'district'],
    meanings: ['ward', 'district']
  },
  {
    id: 5,
    kanjiChar: '領',
    onyomi: ['ryou リョウ'],
    kunyomi: ['eri えり'],
    displayMeanings: ['jurisdiction', 'dominion'],
    fullDisplayMeanings: ['jurisdiction', 'dominion'],
    meanings: ['jurisdiction', 'dominion']
  },
  {
    id: 6,
    kanjiChar: '県',
    onyomi: ['ken ケン'],
    kunyomi: ['kakeru かける'],
    displayMeanings: ['prefecture'],
    fullDisplayMeanings: ['prefecture'],
    meanings: ['prefecture']
  },
  {
    id: 7,
    kanjiChar: '設',
    onyomi: ['setsu セツ'],
    kunyomi: ['moukeru もうける'],
    displayMeanings: ['establishment', 'provision'],
    fullDisplayMeanings: ['establishment', 'provision'],
    meanings: ['establishment', 'provision']
  },
  {
    id: 8,
    kanjiChar: '保',
    onyomi: ['ho ホ', 'hou ホウ'],
    kunyomi: ['tamotsu たもつ'],
    displayMeanings: ['protect', 'guarantee', 'keep'],
    fullDisplayMeanings: ['protect', 'guarantee', 'keep'],
    meanings: ['protect', 'guarantee', 'keep']
  },
  {
    id: 9,
    kanjiChar: '改',
    onyomi: ['kai カイ'],
    kunyomi: ['aratameru あらためる'],
    displayMeanings: ['reformation', 'change', 'modify'],
    fullDisplayMeanings: ['reformation', 'change', 'modify'],
    meanings: ['reformation', 'change', 'modify']
  },
  {
    id: 10,
    kanjiChar: '第',
    onyomi: ['dai ダイ'],
    kunyomi: [],
    displayMeanings: ['No.', 'number'],
    fullDisplayMeanings: ['No.', 'number'],
    meanings: ['No.', 'number']
  },
  {
    id: 11,
    kanjiChar: '結',
    onyomi: ['ketsu ケツ'],
    kunyomi: ['musubu むすぶ', 'yuu ゆう'],
    displayMeanings: ['tie', 'bind', 'contract'],
    fullDisplayMeanings: ['tie', 'bind', 'contract'],
    meanings: ['tie', 'bind', 'contract']
  },
  {
    id: 12,
    kanjiChar: '派',
    onyomi: ['ha ハ'],
    kunyomi: [],
    displayMeanings: ['faction', 'group', 'party'],
    fullDisplayMeanings: ['faction', 'group', 'party'],
    meanings: ['faction', 'group', 'party']
  },
  {
    id: 13,
    kanjiChar: '府',
    onyomi: ['fu フ'],
    kunyomi: [],
    displayMeanings: ['borough', 'urban prefecture', 'govt office'],
    fullDisplayMeanings: ['borough', 'urban prefecture', 'govt office'],
    meanings: ['borough', 'urban prefecture', 'govt office']
  },
  {
    id: 14,
    kanjiChar: '査',
    onyomi: ['sa サ'],
    kunyomi: [],
    displayMeanings: ['investigate'],
    fullDisplayMeanings: ['investigate'],
    meanings: ['investigate']
  },
  {
    id: 15,
    kanjiChar: '委',
    onyomi: ['i イ'],
    kunyomi: ['yudaneru ゆだねる'],
    displayMeanings: ['committee', 'entrust to'],
    fullDisplayMeanings: ['committee', 'entrust to'],
    meanings: ['committee', 'entrust to']
  },
  {
    id: 16,
    kanjiChar: '軍',
    onyomi: ['gun グン'],
    kunyomi: ['ikusa いくさ'],
    displayMeanings: ['army', 'force', 'troops'],
    fullDisplayMeanings: ['army', 'force', 'troops'],
    meanings: ['army', 'force', 'troops']
  },
  {
    id: 17,
    kanjiChar: '案',
    onyomi: ['an アン'],
    kunyomi: ['tsukue つくえ'],
    displayMeanings: ['plan', 'suggestion', 'draft'],
    fullDisplayMeanings: ['plan', 'suggestion', 'draft'],
    meanings: ['plan', 'suggestion', 'draft']
  },
  {
    id: 18,
    kanjiChar: '策',
    onyomi: ['saku サク'],
    kunyomi: [],
    displayMeanings: ['scheme', 'plan', 'policy'],
    fullDisplayMeanings: ['scheme', 'plan', 'policy'],
    meanings: ['scheme', 'plan', 'policy']
  },
  {
    id: 19,
    kanjiChar: '団',
    onyomi: ['dan ダン', 'ton トン'],
    kunyomi: ['katamari かたまり', 'marui まるい'],
    displayMeanings: ['group', 'association'],
    fullDisplayMeanings: ['group', 'association'],
    meanings: ['group', 'association']
  },
  {
    id: 20,
    kanjiChar: '各',
    onyomi: ['kaku カク'],
    kunyomi: ['onoono おのおの'],
    displayMeanings: ['each', 'every', 'either'],
    fullDisplayMeanings: ['each', 'every', 'either'],
    meanings: ['each', 'every', 'either']
  },
  {
    id: 21,
    kanjiChar: '島',
    onyomi: ['tou トウ'],
    kunyomi: ['shima しま'],
    displayMeanings: ['island'],
    fullDisplayMeanings: ['island'],
    meanings: ['island']
  },
  {
    id: 22,
    kanjiChar: '革',
    onyomi: ['kaku カク'],
    kunyomi: ['kawa かわ'],
    displayMeanings: ['leather', 'skin', 'reform', 'become serious'],
    fullDisplayMeanings: ['leather', 'skin', 'reform', 'become serious'],
    meanings: ['leather', 'skin', 'reform', 'become serious']
  },
  {
    id: 23,
    kanjiChar: '村',
    onyomi: ['son ソン'],
    kunyomi: ['mura むら'],
    displayMeanings: ['village', 'town'],
    fullDisplayMeanings: ['village', 'town'],
    meanings: ['village', 'town']
  },
  {
    id: 24,
    kanjiChar: '勢',
    onyomi: ['sei セイ'],
    kunyomi: ['ikioi いきおい'],
    displayMeanings: ['forces', 'energy', 'military strength'],
    fullDisplayMeanings: ['forces', 'energy', 'military strength'],
    meanings: ['forces', 'energy', 'military strength']
  },
  {
    id: 25,
    kanjiChar: '減',
    onyomi: ['gen ゲン'],
    kunyomi: ['heru へる'],
    displayMeanings: ['dwindle', 'decrease', 'reduce'],
    fullDisplayMeanings: ['dwindle', 'decrease', 'reduce'],
    meanings: ['dwindle', 'decrease', 'reduce']
  },
  {
    id: 26,
    kanjiChar: '再',
    onyomi: ['sai サイ', 'sa サ'],
    kunyomi: ['futatabi ふたたび'],
    displayMeanings: ['again', 'twice', 'second time'],
    fullDisplayMeanings: ['again', 'twice', 'second time'],
    meanings: ['again', 'twice', 'second time']
  },
  {
    id: 27,
    kanjiChar: '税',
    onyomi: ['zei ゼイ'],
    kunyomi: [],
    displayMeanings: ['tax', 'duty'],
    fullDisplayMeanings: ['tax', 'duty'],
    meanings: ['tax', 'duty']
  },
  {
    id: 28,
    kanjiChar: '営',
    onyomi: ['ei エイ'],
    kunyomi: ['itonamu いとなむ'],
    displayMeanings: [
      'occupation',
      'camp',
      'perform',
      'build',
      'conduct (business)'
    ],
    fullDisplayMeanings: [
      'occupation',
      'camp',
      'perform',
      'build',
      'conduct (business)'
    ],
    meanings: ['occupation', 'camp', 'perform', 'build', 'conduct (business)']
  },
  {
    id: 29,
    kanjiChar: '比',
    onyomi: ['hi ヒ'],
    kunyomi: ['kuraberu くらべる'],
    displayMeanings: ['compare', 'race', 'ratio'],
    fullDisplayMeanings: ['compare', 'race', 'ratio'],
    meanings: ['compare', 'race', 'ratio']
  },
  {
    id: 30,
    kanjiChar: '防',
    onyomi: ['bou ボウ'],
    kunyomi: ['fusegu ふせぐ'],
    displayMeanings: ['ward off', 'defend', 'protect', 'resist'],
    fullDisplayMeanings: ['ward off', 'defend', 'protect', 'resist'],
    meanings: ['ward off', 'defend', 'protect', 'resist']
  },
  {
    id: 31,
    kanjiChar: '補',
    onyomi: ['ho ホ'],
    kunyomi: ['oginau おぎなう'],
    displayMeanings: ['supplement', 'supply', 'offset', 'compensate'],
    fullDisplayMeanings: ['supplement', 'supply', 'offset', 'compensate'],
    meanings: ['supplement', 'supply', 'offset', 'compensate']
  },
  {
    id: 32,
    kanjiChar: '境',
    onyomi: ['kyou キョウ'],
    kunyomi: ['sakai さかい'],
    displayMeanings: ['boundary', 'border', 'region'],
    fullDisplayMeanings: ['boundary', 'border', 'region'],
    meanings: ['boundary', 'border', 'region']
  },
  {
    id: 33,
    kanjiChar: '導',
    onyomi: ['dou ドウ'],
    kunyomi: ['michibiku みちびく'],
    displayMeanings: ['guidance', 'leading', 'conduct', 'usher'],
    fullDisplayMeanings: ['guidance', 'leading', 'conduct', 'usher'],
    meanings: ['guidance', 'leading', 'conduct', 'usher']
  },
  {
    id: 34,
    kanjiChar: '副',
    onyomi: ['fuku フク'],
    kunyomi: [],
    displayMeanings: ['vice-', 'assistant', 'aide', 'duplicate', 'copy'],
    fullDisplayMeanings: ['vice-', 'assistant', 'aide', 'duplicate', 'copy'],
    meanings: ['vice-', 'assistant', 'aide', 'duplicate', 'copy']
  },
  {
    id: 35,
    kanjiChar: '算',
    onyomi: ['san サン'],
    kunyomi: ['soro そろ'],
    displayMeanings: ['calculate', 'divining', 'number', 'probability'],
    fullDisplayMeanings: ['calculate', 'divining', 'number', 'probability'],
    meanings: ['calculate', 'divining', 'number', 'probability']
  },
  {
    id: 36,
    kanjiChar: '輸',
    onyomi: ['yu ユ', 'shu シュ'],
    kunyomi: [],
    displayMeanings: ['transport', 'send', 'be inferior'],
    fullDisplayMeanings: ['transport', 'send', 'be inferior'],
    meanings: ['transport', 'send', 'be inferior']
  },
  {
    id: 37,
    kanjiChar: '述',
    onyomi: ['jutsu ジュツ'],
    kunyomi: ['noberu のべる'],
    displayMeanings: ['mention', 'state', 'speak'],
    fullDisplayMeanings: ['mention', 'state', 'speak'],
    meanings: ['mention', 'state', 'speak']
  },
  {
    id: 38,
    kanjiChar: '線',
    onyomi: ['sen セン'],
    kunyomi: ['suji すじ'],
    displayMeanings: ['line', 'track'],
    fullDisplayMeanings: ['line', 'track'],
    meanings: ['line', 'track']
  },
  {
    id: 39,
    kanjiChar: '農',
    onyomi: ['nou ノウ'],
    kunyomi: [],
    displayMeanings: ['agriculture', 'farmers'],
    fullDisplayMeanings: ['agriculture', 'farmers'],
    meanings: ['agriculture', 'farmers']
  },
  {
    id: 40,
    kanjiChar: '州',
    onyomi: ['shuu シュウ'],
    kunyomi: ['su す'],
    displayMeanings: ['state', 'province'],
    fullDisplayMeanings: ['state', 'province'],
    meanings: ['state', 'province']
  },
  {
    id: 41,
    kanjiChar: '武',
    onyomi: ['bu ブ', 'mu ム'],
    kunyomi: ['takeshi たけし'],
    displayMeanings: ['warrior', 'military', 'chivalry', 'arms'],
    fullDisplayMeanings: ['warrior', 'military', 'chivalry', 'arms'],
    meanings: ['warrior', 'military', 'chivalry', 'arms']
  },
  {
    id: 42,
    kanjiChar: '象',
    onyomi: ['shou ショウ', 'zou ゾウ'],
    kunyomi: ['katadoru かたどる'],
    displayMeanings: ['elephant', 'pattern after', 'image', 'shape'],
    fullDisplayMeanings: ['elephant', 'pattern after', 'image', 'shape'],
    meanings: ['elephant', 'pattern after', 'image', 'shape']
  },
  {
    id: 43,
    kanjiChar: '域',
    onyomi: ['iki イキ'],
    kunyomi: [],
    displayMeanings: ['range', 'region', 'limits', 'stage', 'level'],
    fullDisplayMeanings: ['range', 'region', 'limits', 'stage', 'level'],
    meanings: ['range', 'region', 'limits', 'stage', 'level']
  },
  {
    id: 44,
    kanjiChar: '額',
    onyomi: ['gaku ガク'],
    kunyomi: ['hitai ひたい'],
    displayMeanings: [
      'forehead',
      'tablet',
      'framed picture',
      'sum',
      'amount',
      'volume'
    ],
    fullDisplayMeanings: [
      'forehead',
      'tablet',
      'framed picture',
      'sum',
      'amount',
      'volume'
    ],
    meanings: [
      'forehead',
      'tablet',
      'framed picture',
      'sum',
      'amount',
      'volume'
    ]
  },
  {
    id: 45,
    kanjiChar: '欧',
    onyomi: ['ou オウ'],
    kunyomi: ['utau うたう', 'haku はく'],
    displayMeanings: ['Europe'],
    fullDisplayMeanings: ['Europe'],
    meanings: ['Europe']
  },
  {
    id: 46,
    kanjiChar: '担',
    onyomi: ['tan タン'],
    kunyomi: ['katsugu かつぐ', 'ninau になう'],
    displayMeanings: ['shouldering', 'carry', 'raise', 'bear'],
    fullDisplayMeanings: ['shouldering', 'carry', 'raise', 'bear'],
    meanings: ['shouldering', 'carry', 'raise', 'bear']
  },
  {
    id: 47,
    kanjiChar: '準',
    onyomi: ['jun ジュン'],
    kunyomi: ['junjiru じゅんじる', 'nazoraeru なぞらえる'],
    displayMeanings: ['semi-', 'correspond to', 'imitate'],
    fullDisplayMeanings: ['semi-', 'correspond to', 'imitate'],
    meanings: ['semi-', 'correspond to', 'imitate']
  },
  {
    id: 48,
    kanjiChar: '賞',
    onyomi: ['shou ショウ'],
    kunyomi: ['homeru ほめる'],
    displayMeanings: ['prize', 'reward', 'praise'],
    fullDisplayMeanings: ['prize', 'reward', 'praise'],
    meanings: ['prize', 'reward', 'praise']
  },
  {
    id: 49,
    kanjiChar: '辺',
    onyomi: ['hen ヘン'],
    kunyomi: ['atari あたり', 'hotori ほとり'],
    displayMeanings: ['environs', 'boundary', 'border', 'vicinity'],
    fullDisplayMeanings: ['environs', 'boundary', 'border', 'vicinity'],
    meanings: ['environs', 'boundary', 'border', 'vicinity']
  },
  {
    id: 50,
    kanjiChar: '造',
    onyomi: ['zou ゾウ'],
    kunyomi: ['tsukuru つくる'],
    displayMeanings: ['create', 'make', 'structure', 'physique'],
    fullDisplayMeanings: ['create', 'make', 'structure', 'physique'],
    meanings: ['create', 'make', 'structure', 'physique']
  },
  {
    id: 51,
    kanjiChar: '被',
    onyomi: ['hi ヒ'],
    kunyomi: ['koumuru こうむる', 'kaburu かぶる'],
    displayMeanings: ['incur', 'cover', 'shelter', 'wear', 'put on'],
    fullDisplayMeanings: ['incur', 'cover', 'shelter', 'wear', 'put on'],
    meanings: ['incur', 'cover', 'shelter', 'wear', 'put on']
  },
  {
    id: 52,
    kanjiChar: '技',
    onyomi: ['gi ギ'],
    kunyomi: ['waza わざ'],
    displayMeanings: ['skill', 'art', 'craft', 'ability', 'vocation', 'arts'],
    fullDisplayMeanings: [
      'skill',
      'art',
      'craft',
      'ability',
      'vocation',
      'arts'
    ],
    meanings: ['skill', 'art', 'craft', 'ability', 'vocation', 'arts']
  },
  {
    id: 53,
    kanjiChar: '低',
    onyomi: ['tei テイ'],
    kunyomi: ['hikui ひくい'],
    displayMeanings: ['lower', 'short', 'humble'],
    fullDisplayMeanings: ['lower', 'short', 'humble'],
    meanings: ['lower', 'short', 'humble']
  },
  {
    id: 54,
    kanjiChar: '復',
    onyomi: ['fuku フク'],
    kunyomi: ['mata また'],
    displayMeanings: ['restore', 'return to', 'revert'],
    fullDisplayMeanings: ['restore', 'return to', 'revert'],
    meanings: ['restore', 'return to', 'revert']
  },
  {
    id: 55,
    kanjiChar: '移',
    onyomi: ['i イ'],
    kunyomi: ['utsuru うつる'],
    displayMeanings: ['shift', 'move', 'change'],
    fullDisplayMeanings: ['shift', 'move', 'change'],
    meanings: ['shift', 'move', 'change']
  },
  {
    id: 56,
    kanjiChar: '個',
    onyomi: ['ko コ'],
    kunyomi: [],
    displayMeanings: ['individual', 'counter for articles'],
    fullDisplayMeanings: ['individual', 'counter for articles'],
    meanings: ['individual', 'counter for articles']
  },
  {
    id: 57,
    kanjiChar: '門',
    onyomi: ['mon モン'],
    kunyomi: ['kado かど', 'to と'],
    displayMeanings: ['gate'],
    fullDisplayMeanings: ['gate'],
    meanings: ['gate']
  },
  {
    id: 58,
    kanjiChar: '課',
    onyomi: ['ka カ'],
    kunyomi: [],
    displayMeanings: ['chapter', 'lesson', 'section', 'department'],
    fullDisplayMeanings: ['chapter', 'lesson', 'section', 'department'],
    meanings: ['chapter', 'lesson', 'section', 'department']
  },
  {
    id: 59,
    kanjiChar: '脳',
    onyomi: ['nou ノウ'],
    kunyomi: ['nouzuru のうずる'],
    displayMeanings: ['brain', 'memory'],
    fullDisplayMeanings: ['brain', 'memory'],
    meanings: ['brain', 'memory']
  },
  {
    id: 60,
    kanjiChar: '極',
    onyomi: ['kyoku キョク', 'goku ゴク'],
    kunyomi: ['kiwameru きわめる'],
    displayMeanings: ['poles', 'settlement', 'conclusion', 'end'],
    fullDisplayMeanings: ['poles', 'settlement', 'conclusion', 'end'],
    meanings: ['poles', 'settlement', 'conclusion', 'end']
  },
  {
    id: 61,
    kanjiChar: '含',
    onyomi: ['gan ガン'],
    kunyomi: ['fukumu ふくむ'],
    displayMeanings: ['contain', 'include'],
    fullDisplayMeanings: ['contain', 'include'],
    meanings: ['contain', 'include']
  },
  {
    id: 62,
    kanjiChar: '蔵',
    onyomi: ['zou ゾウ'],
    kunyomi: ['kura くら'],
    displayMeanings: ['storehouse', 'hide', 'own', 'have', 'possess'],
    fullDisplayMeanings: ['storehouse', 'hide', 'own', 'have', 'possess'],
    meanings: ['storehouse', 'hide', 'own', 'have', 'possess']
  },
  {
    id: 63,
    kanjiChar: '量',
    onyomi: ['ryou リョウ'],
    kunyomi: ['hakaru はかる'],
    displayMeanings: ['quantity', 'measure', 'weight', 'amount'],
    fullDisplayMeanings: ['quantity', 'measure', 'weight', 'amount'],
    meanings: ['quantity', 'measure', 'weight', 'amount']
  },
  {
    id: 64,
    kanjiChar: '型',
    onyomi: ['kei ケイ'],
    kunyomi: ['kata かた'],
    displayMeanings: ['type', 'model'],
    fullDisplayMeanings: ['type', 'model'],
    meanings: ['type', 'model']
  },
  {
    id: 65,
    kanjiChar: '況',
    onyomi: ['kyou キョウ'],
    kunyomi: ['mashite まして'],
    displayMeanings: ['condition', 'situation'],
    fullDisplayMeanings: ['condition', 'situation'],
    meanings: ['condition', 'situation']
  },
  {
    id: 66,
    kanjiChar: '針',
    onyomi: ['shin シン'],
    kunyomi: ['hari はり'],
    displayMeanings: ['needle', 'pin', 'staple', 'stinger'],
    fullDisplayMeanings: ['needle', 'pin', 'staple', 'stinger'],
    meanings: ['needle', 'pin', 'staple', 'stinger']
  },
  {
    id: 67,
    kanjiChar: '専',
    onyomi: ['sen セン'],
    kunyomi: ['moppara もっぱら'],
    displayMeanings: ['specialty', 'exclusive', 'mainly', 'solely'],
    fullDisplayMeanings: ['specialty', 'exclusive', 'mainly', 'solely'],
    meanings: ['specialty', 'exclusive', 'mainly', 'solely']
  },
  {
    id: 68,
    kanjiChar: '谷',
    onyomi: ['koku コク'],
    kunyomi: ['tani たに', 'kiwamaru きわまる'],
    displayMeanings: ['valley'],
    fullDisplayMeanings: ['valley'],
    meanings: ['valley']
  },
  {
    id: 69,
    kanjiChar: '史',
    onyomi: ['shi シ'],
    kunyomi: [],
    displayMeanings: ['history', 'chronicle'],
    fullDisplayMeanings: ['history', 'chronicle'],
    meanings: ['history', 'chronicle']
  },
  {
    id: 70,
    kanjiChar: '階',
    onyomi: ['kai カイ'],
    kunyomi: ['kizahashi きざはし'],
    displayMeanings: ['stair', 'counter for building story'],
    fullDisplayMeanings: ['stair', 'counter for building story'],
    meanings: ['stair', 'counter for building story']
  },
  {
    id: 71,
    kanjiChar: '管',
    onyomi: ['kan カン'],
    kunyomi: ['kuda くだ'],
    displayMeanings: [
      'pipe',
      'tube',
      'wind instrument',
      'control',
      'jurisdiction'
    ],
    fullDisplayMeanings: [
      'pipe',
      'tube',
      'wind instrument',
      'control',
      'jurisdiction'
    ],
    meanings: ['pipe', 'tube', 'wind instrument', 'control', 'jurisdiction']
  },
  {
    id: 72,
    kanjiChar: '兵',
    onyomi: ['hei ヘイ', 'hyou ヒョウ'],
    kunyomi: ['tsuwamono つわもの'],
    displayMeanings: ['soldier', 'private', 'troops', 'army'],
    fullDisplayMeanings: ['soldier', 'private', 'troops', 'army'],
    meanings: ['soldier', 'private', 'troops', 'army']
  },
  {
    id: 73,
    kanjiChar: '接',
    onyomi: ['setsu セツ'],
    kunyomi: ['tsugu つぐ'],
    displayMeanings: ['touch', 'contact', 'adjoin', 'piece together'],
    fullDisplayMeanings: ['touch', 'contact', 'adjoin', 'piece together'],
    meanings: ['touch', 'contact', 'adjoin', 'piece together']
  },
  {
    id: 74,
    kanjiChar: '細',
    onyomi: ['sai サイ'],
    kunyomi: ['hosoi ほそい', 'komakai こまかい'],
    displayMeanings: ['slender', 'narrow', 'detailed', 'precise'],
    fullDisplayMeanings: ['slender', 'narrow', 'detailed', 'precise'],
    meanings: ['slender', 'narrow', 'detailed', 'precise']
  },
  {
    id: 75,
    kanjiChar: '効',
    onyomi: ['kou コウ'],
    kunyomi: ['kiku きく'],
    displayMeanings: ['merit', 'efficacy', 'efficiency', 'benefit'],
    fullDisplayMeanings: ['merit', 'efficacy', 'efficiency', 'benefit'],
    meanings: ['merit', 'efficacy', 'efficiency', 'benefit']
  },
  {
    id: 76,
    kanjiChar: '丸',
    onyomi: ['gan ガン'],
    kunyomi: ['maru まる', 'marui まるい'],
    displayMeanings: ['round', 'full (month)', 'perfection'],
    fullDisplayMeanings: ['round', 'full (month)', 'perfection'],
    meanings: ['round', 'full (month)', 'perfection']
  },
  {
    id: 77,
    kanjiChar: '湾',
    onyomi: ['wan ワン'],
    kunyomi: ['irie いりえ'],
    displayMeanings: ['gulf', 'bay', 'inlet'],
    fullDisplayMeanings: ['gulf', 'bay', 'inlet'],
    meanings: ['gulf', 'bay', 'inlet']
  },
  {
    id: 78,
    kanjiChar: '録',
    onyomi: ['roku ロク'],
    kunyomi: ['toru とる'],
    displayMeanings: ['record'],
    fullDisplayMeanings: ['record'],
    meanings: ['record']
  },
  {
    id: 79,
    kanjiChar: '省',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: ['kaerimiru かえりみる', 'habuku はぶく'],
    displayMeanings: ['focus', 'government ministry', 'conserve'],
    fullDisplayMeanings: ['focus', 'government ministry', 'conserve'],
    meanings: ['focus', 'government ministry', 'conserve']
  },
  {
    id: 80,
    kanjiChar: '旧',
    onyomi: ['kyuu キュウ'],
    kunyomi: ['furui ふるい', 'moto もと'],
    displayMeanings: ['old times', 'old things', 'former', 'ex-'],
    fullDisplayMeanings: ['old times', 'old things', 'former', 'ex-'],
    meanings: ['old times', 'old things', 'former', 'ex-']
  },
  {
    id: 81,
    kanjiChar: '橋',
    onyomi: ['kyou キョウ'],
    kunyomi: ['hashi はし'],
    displayMeanings: ['bridge'],
    fullDisplayMeanings: ['bridge'],
    meanings: ['bridge']
  },
  {
    id: 82,
    kanjiChar: '岸',
    onyomi: ['gan ガン'],
    kunyomi: ['kishi きし'],
    displayMeanings: ['beach'],
    fullDisplayMeanings: ['beach'],
    meanings: ['beach']
  },
  {
    id: 83,
    kanjiChar: '周',
    onyomi: ['shuu シュウ'],
    kunyomi: ['mawari まわり'],
    displayMeanings: ['circumference', 'circuit', 'lap'],
    fullDisplayMeanings: ['circumference', 'circuit', 'lap'],
    meanings: ['circumference', 'circuit', 'lap']
  },
  {
    id: 84,
    kanjiChar: '材',
    onyomi: ['zai ザイ'],
    kunyomi: [],
    displayMeanings: ['lumber', 'log', 'timber', 'wood'],
    fullDisplayMeanings: ['lumber', 'log', 'timber', 'wood'],
    meanings: ['lumber', 'log', 'timber', 'wood']
  },
  {
    id: 85,
    kanjiChar: '戸',
    onyomi: ['ko コ'],
    kunyomi: ['to と'],
    displayMeanings: ['door', 'counter for houses'],
    fullDisplayMeanings: ['door', 'counter for houses'],
    meanings: ['door', 'counter for houses']
  },
  {
    id: 86,
    kanjiChar: '央',
    onyomi: ['ou オウ'],
    kunyomi: [],
    displayMeanings: ['center', 'middle'],
    fullDisplayMeanings: ['center', 'middle'],
    meanings: ['center', 'middle']
  },
  {
    id: 87,
    kanjiChar: '券',
    onyomi: ['ken ケン'],
    kunyomi: [],
    displayMeanings: ['ticket'],
    fullDisplayMeanings: ['ticket'],
    meanings: ['ticket']
  },
  {
    id: 88,
    kanjiChar: '編',
    onyomi: ['hen ヘン'],
    kunyomi: ['amu あむ'],
    displayMeanings: ['compilation', 'knit', 'braid', 'twist', 'editing'],
    fullDisplayMeanings: ['compilation', 'knit', 'braid', 'twist', 'editing'],
    meanings: ['compilation', 'knit', 'braid', 'twist', 'editing']
  },
  {
    id: 89,
    kanjiChar: '捜',
    onyomi: ['sou ソウ'],
    kunyomi: ['sagasu さがす'],
    displayMeanings: ['search', 'look for', 'locate'],
    fullDisplayMeanings: ['search', 'look for', 'locate'],
    meanings: ['search', 'look for', 'locate']
  },
  {
    id: 90,
    kanjiChar: '竹',
    onyomi: ['chiku チク'],
    kunyomi: ['take たけ'],
    displayMeanings: ['bamboo'],
    fullDisplayMeanings: ['bamboo'],
    meanings: ['bamboo']
  },
  {
    id: 91,
    kanjiChar: '超',
    onyomi: ['chou チョウ'],
    kunyomi: ['koeru こえる'],
    displayMeanings: ['transcend', 'super-', 'ultra-'],
    fullDisplayMeanings: ['transcend', 'super-', 'ultra-'],
    meanings: ['transcend', 'super-', 'ultra-']
  },
  {
    id: 92,
    kanjiChar: '並',
    onyomi: ['hei ヘイ'],
    kunyomi: ['na(mi) な(み)', 'nami なみ', 'nara(beru) なら(べる)'], // Simplified from na(mi), nami, nara(beru)
    displayMeanings: ['row', 'and', 'besides'],
    fullDisplayMeanings: ['row', 'and', 'besides'],
    meanings: ['row', 'and', 'besides']
  },
  {
    id: 93,
    kanjiChar: '療',
    onyomi: ['ryou リョウ'],
    kunyomi: [],
    displayMeanings: ['heal', 'cure'],
    fullDisplayMeanings: ['heal', 'cure'],
    meanings: ['heal', 'cure']
  },
  {
    id: 94,
    kanjiChar: '採',
    onyomi: ['sai サイ'],
    kunyomi: ['toru とる'],
    displayMeanings: ['pick', 'take', 'fetch', 'take up'],
    fullDisplayMeanings: ['pick', 'take', 'fetch', 'take up'],
    meanings: ['pick', 'take', 'fetch', 'take up']
  },
  {
    id: 95,
    kanjiChar: '森',
    onyomi: ['shin シン'],
    kunyomi: ['mori もり'],
    displayMeanings: ['forest', 'woods'],
    fullDisplayMeanings: ['forest', 'woods'],
    meanings: ['forest', 'woods']
  },
  {
    id: 96,
    kanjiChar: '競',
    onyomi: ['kyou キョウ', 'kei ケイ'],
    kunyomi: ['kisou きそう', 'seru せる'],
    displayMeanings: ['compete with', 'bid', 'contest', 'race'],
    fullDisplayMeanings: ['compete with', 'bid', 'contest', 'race'],
    meanings: ['compete with', 'bid', 'contest', 'race']
  },
  {
    id: 97,
    kanjiChar: '介',
    onyomi: ['kai カイ'],
    kunyomi: [],
    displayMeanings: ['jammed in', 'shellfish', 'mediate'],
    fullDisplayMeanings: ['jammed in', 'shellfish', 'mediate'],
    meanings: ['jammed in', 'shellfish', 'mediate']
  },
  {
    id: 98,
    kanjiChar: '根',
    onyomi: ['kon コン'],
    kunyomi: ['ne ね'],
    displayMeanings: ['root', 'radical'],
    fullDisplayMeanings: ['root', 'radical'],
    meanings: ['root', 'radical']
  },
  {
    id: 99,
    kanjiChar: '販',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['marketing', 'sell', 'trade'],
    fullDisplayMeanings: ['marketing', 'sell', 'trade'],
    meanings: ['marketing', 'sell', 'trade']
  },
  {
    id: 100,
    kanjiChar: '歴',
    onyomi: ['reki レキ'],
    kunyomi: [],
    displayMeanings: ['curriculum', 'continuation', 'passage of time'],
    fullDisplayMeanings: ['curriculum', 'continuation', 'passage of time'],
    meanings: ['curriculum', 'continuation', 'passage of time']
  },
  {
    id: 101,
    kanjiChar: '将',
    onyomi: ['shou ショウ'],
    kunyomi: ['masa(ni) まさ(に)', 'hata はた'],
    displayMeanings: ['leader', 'commander', 'general', 'admiral'],
    fullDisplayMeanings: ['leader', 'commander', 'general', 'admiral'],
    meanings: ['leader', 'commander', 'general', 'admiral']
  },
  {
    id: 102,
    kanjiChar: '幅',
    onyomi: ['fuku フク'],
    kunyomi: ['haba はば'],
    displayMeanings: ['hanging scroll', 'width'],
    fullDisplayMeanings: ['hanging scroll', 'width'],
    meanings: ['hanging scroll', 'width']
  },
  {
    id: 103,
    kanjiChar: '般',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['carrier', 'carry', 'all', 'general', 'sort', 'kind'],
    fullDisplayMeanings: ['carrier', 'carry', 'all', 'general', 'sort', 'kind'],
    meanings: ['carrier', 'carry', 'all', 'general', 'sort', 'kind']
  },
  {
    id: 104,
    kanjiChar: '貿',
    onyomi: ['bou ボウ'],
    kunyomi: [],
    displayMeanings: ['trade', 'exchange'],
    fullDisplayMeanings: ['trade', 'exchange'],
    meanings: ['trade', 'exchange']
  },
  {
    id: 105,
    kanjiChar: '講',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['lecture', 'club', 'association'],
    fullDisplayMeanings: ['lecture', 'club', 'association'],
    meanings: ['lecture', 'club', 'association']
  },
  {
    id: 106,
    kanjiChar: '林',
    onyomi: ['rin リン'],
    kunyomi: ['hayashi はやし'],
    displayMeanings: ['grove', 'forest'],
    fullDisplayMeanings: ['grove', 'forest'],
    meanings: ['grove', 'forest']
  },
  {
    id: 107,
    kanjiChar: '装',
    onyomi: ['sou ソウ', 'shou ショウ'],
    kunyomi: ['yosoo(u) よそお(う)'],
    displayMeanings: ['attire', 'dress', 'pretend', 'disguise'],
    fullDisplayMeanings: ['attire', 'dress', 'pretend', 'disguise'],
    meanings: ['attire', 'dress', 'pretend', 'disguise']
  },
  {
    id: 108,
    kanjiChar: '諸',
    onyomi: ['sho ショ'],
    kunyomi: ['moro もろ'],
    displayMeanings: ['various', 'many', 'several', 'together'],
    fullDisplayMeanings: ['various', 'many', 'several', 'together'],
    meanings: ['various', 'many', 'several', 'together']
  },
  {
    id: 109,
    kanjiChar: '劇',
    onyomi: ['geki ゲキ'],
    kunyomi: [],
    displayMeanings: ['drama', 'play'],
    fullDisplayMeanings: ['drama', 'play'],
    meanings: ['drama', 'play']
  },
  {
    id: 110,
    kanjiChar: '河',
    onyomi: ['ka カ'],
    kunyomi: ['kawa かわ'],
    displayMeanings: ['river'],
    fullDisplayMeanings: ['river'],
    meanings: ['river']
  },
  {
    id: 111,
    kanjiChar: '航',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['navigate', 'sail', 'cruise', 'fly'],
    fullDisplayMeanings: ['navigate', 'sail', 'cruise', 'fly'],
    meanings: ['navigate', 'sail', 'cruise', 'fly']
  },
  {
    id: 112,
    kanjiChar: '鉄',
    onyomi: ['tetsu テツ'],
    kunyomi: ['kurogane くろがね'],
    displayMeanings: ['iron'],
    fullDisplayMeanings: ['iron'],
    meanings: ['iron']
  },
  {
    id: 113,
    kanjiChar: '児',
    onyomi: ['ji ジ'],
    kunyomi: ['ko こ'],
    displayMeanings: ['newborn babe', 'child'],
    fullDisplayMeanings: ['newborn babe', 'child'],
    meanings: ['newborn babe', 'child']
  },
  {
    id: 114,
    kanjiChar: '禁',
    onyomi: ['kin キン'],
    kunyomi: [],
    displayMeanings: ['prohibition', 'ban', 'forbid'],
    fullDisplayMeanings: ['prohibition', 'ban', 'forbid'],
    meanings: ['prohibition', 'ban', 'forbid']
  },
  {
    id: 115,
    kanjiChar: '印',
    onyomi: ['in イン'],
    kunyomi: ['shirushi しるし'],
    displayMeanings: ['stamp', 'seal', 'mark', 'symbol', 'trademark'],
    fullDisplayMeanings: ['stamp', 'seal', 'mark', 'symbol', 'trademark'],
    meanings: ['stamp', 'seal', 'mark', 'symbol', 'trademark']
  },
  {
    id: 116,
    kanjiChar: '逆',
    onyomi: ['gyaku ギャク'],
    kunyomi: ['saka(rau) さか(らう)'],
    displayMeanings: ['inverted', 'reverse', 'opposite'],
    fullDisplayMeanings: ['inverted', 'reverse', 'opposite'],
    meanings: ['inverted', 'reverse', 'opposite']
  },
  {
    id: 117,
    kanjiChar: '換',
    onyomi: ['kan カン'],
    kunyomi: ['ka(eru) か(える)'],
    displayMeanings: [
      'interchange',
      'period',
      'change',
      'convert',
      'replace',
      'renew'
    ],
    fullDisplayMeanings: [
      'interchange',
      'period',
      'change',
      'convert',
      'replace',
      'renew'
    ],
    meanings: ['interchange', 'period', 'change', 'convert', 'replace', 'renew']
  },
  {
    id: 118,
    kanjiChar: '久',
    onyomi: ['kyuu キュウ', 'ku ク'],
    kunyomi: ['hisa(shii) ひさ(しい)'],
    displayMeanings: ['long time', 'old story'],
    fullDisplayMeanings: ['long time', 'old story'],
    meanings: ['long time', 'old story']
  },
  {
    id: 119,
    kanjiChar: '短',
    onyomi: ['tan タン'],
    kunyomi: ['mijika(i) みじか(い)'],
    displayMeanings: ['short', 'fault', 'defect', 'weak point'],
    fullDisplayMeanings: ['short', 'fault', 'defect', 'weak point'],
    meanings: ['short', 'fault', 'defect', 'weak point']
  },
  {
    id: 120,
    kanjiChar: '油',
    onyomi: ['yu ユ'],
    kunyomi: ['abura あぶら'],
    displayMeanings: ['oil', 'fat'],
    fullDisplayMeanings: ['oil', 'fat'],
    meanings: ['oil', 'fat']
  },
  {
    id: 121,
    kanjiChar: '暴',
    onyomi: ['bou ボウ', 'baku バク'],
    kunyomi: ['aba(ku) あば(く)'],
    displayMeanings: ['outburst', 'force', 'violence'],
    fullDisplayMeanings: ['outburst', 'force', 'violence'],
    meanings: ['outburst', 'force', 'violence']
  },
  {
    id: 122,
    kanjiChar: '輪',
    onyomi: ['rin リン'],
    kunyomi: ['wa わ'],
    displayMeanings: [
      'wheel',
      'ring',
      'circle',
      'link',
      'loop',
      'counter for wheels and flowers'
    ],
    fullDisplayMeanings: [
      'wheel',
      'ring',
      'circle',
      'link',
      'loop',
      'counter for wheels and flowers'
    ],
    meanings: [
      'wheel',
      'ring',
      'circle',
      'link',
      'loop',
      'counter for wheels and flowers'
    ]
  },
  {
    id: 123,
    kanjiChar: '占',
    onyomi: ['sen セン'],
    kunyomi: ['shi(meru) し(める)', 'urana(u) うらな(う)'],
    displayMeanings: ['fortune-telling', 'divining', 'forecasting'],
    fullDisplayMeanings: ['fortune-telling', 'divining', 'forecasting'],
    meanings: ['fortune-telling', 'divining', 'forecasting']
  },
  {
    id: 124,
    kanjiChar: '植',
    onyomi: ['shoku ショク'],
    kunyomi: ['u(eru) う(える)'],
    displayMeanings: ['plant'],
    fullDisplayMeanings: ['plant'],
    meanings: ['plant']
  },
  {
    id: 125,
    kanjiChar: '清',
    onyomi: ['sei セイ'],
    kunyomi: ['kiyo(i) きよ(い)'],
    displayMeanings: ['pure', 'purify', 'cleanse'],
    fullDisplayMeanings: ['pure', 'purify', 'cleanse'],
    meanings: ['pure', 'purify', 'cleanse']
  },
  {
    id: 126,
    kanjiChar: '倍',
    onyomi: ['bai バイ'],
    kunyomi: [],
    displayMeanings: ['double', 'twice', 'times', 'fold'],
    fullDisplayMeanings: ['double', 'twice', 'times', 'fold'],
    meanings: ['double', 'twice', 'times', 'fold']
  },
  {
    id: 127,
    kanjiChar: '均',
    onyomi: ['kin キン'],
    kunyomi: ['nara(su) なら(す)'],
    displayMeanings: ['level', 'average'],
    fullDisplayMeanings: ['level', 'average'],
    meanings: ['level', 'average']
  },
  {
    id: 128,
    kanjiChar: '億',
    onyomi: ['oku オク'],
    kunyomi: [],
    displayMeanings: ['hundred million', '10**8'],
    fullDisplayMeanings: ['hundred million', '10**8'],
    meanings: ['hundred million', '10**8']
  },
  {
    id: 129,
    kanjiChar: '圧',
    onyomi: ['atsu アツ'],
    kunyomi: ['o(su) お(す)'],
    displayMeanings: ['pressure', 'push', 'overwhelm', 'oppress'],
    fullDisplayMeanings: ['pressure', 'push', 'overwhelm', 'oppress'],
    meanings: ['pressure', 'push', 'overwhelm', 'oppress']
  },
  {
    id: 130,
    kanjiChar: '芸',
    onyomi: ['gei ゲイ'],
    kunyomi: ['u(eru) う(える)', 'nori のり', 'waza わざ'],
    displayMeanings: ['technique', 'art', 'craft', 'performance', 'acting'],
    fullDisplayMeanings: ['technique', 'art', 'craft', 'performance', 'acting'],
    meanings: ['technique', 'art', 'craft', 'performance', 'acting']
  },
  {
    id: 131,
    kanjiChar: '署',
    onyomi: ['sho ショ'],
    kunyomi: [],
    displayMeanings: ['signature', 'govt office', 'police station'],
    fullDisplayMeanings: ['signature', 'govt office', 'police station'],
    meanings: ['signature', 'govt office', 'police station']
  },
  {
    id: 132,
    kanjiChar: '伸',
    onyomi: ['shin シン'],
    kunyomi: ['no(biru) の(びる)'],
    displayMeanings: ['expand', 'stretch', 'extend'],
    fullDisplayMeanings: ['expand', 'stretch', 'extend'],
    meanings: ['expand', 'stretch', 'extend']
  },
  {
    id: 133,
    kanjiChar: '停',
    onyomi: ['tei テイ'],
    kunyomi: ['to(meru) と(める)'],
    displayMeanings: ['halt', 'stopping'],
    fullDisplayMeanings: ['halt', 'stopping'],
    meanings: ['halt', 'stopping']
  },
  {
    id: 134,
    kanjiChar: '爆',
    onyomi: ['baku バク'],
    kunyomi: ['ha(zeru) は(ぜる)'],
    displayMeanings: ['bomb', 'burst open'],
    fullDisplayMeanings: ['bomb', 'burst open'],
    meanings: ['bomb', 'burst open']
  },
  {
    id: 135,
    kanjiChar: '陸',
    onyomi: ['riku リク', 'roku ロク'],
    kunyomi: ['oka おか'],
    displayMeanings: ['land', 'six'],
    fullDisplayMeanings: ['land', 'six'],
    meanings: ['land', 'six']
  },
  {
    id: 136,
    kanjiChar: '玉',
    onyomi: ['gyoku ギョク'],
    kunyomi: ['tama たま'],
    displayMeanings: ['jewel', 'ball'],
    fullDisplayMeanings: ['jewel', 'ball'],
    meanings: ['jewel', 'ball']
  },
  {
    id: 137,
    kanjiChar: '波',
    onyomi: ['ha ハ'],
    kunyomi: ['nami なみ'],
    displayMeanings: ['waves', 'billows'],
    fullDisplayMeanings: ['waves', 'billows'],
    meanings: ['waves', 'billows']
  },
  {
    id: 138,
    kanjiChar: '帯',
    onyomi: ['tai タイ'],
    kunyomi: ['o(biru) お(びる)'],
    displayMeanings: ['sash', 'belt', 'obi', 'zone', 'region'],
    fullDisplayMeanings: ['sash', 'belt', 'obi', 'zone', 'region'],
    meanings: ['sash', 'belt', 'obi', 'zone', 'region']
  },
  {
    id: 139,
    kanjiChar: '延',
    onyomi: ['en エン'],
    kunyomi: ['no(biru) の(びる)'],
    displayMeanings: ['prolong', 'stretching'],
    fullDisplayMeanings: ['prolong', 'stretching'],
    meanings: ['prolong', 'stretching']
  },
  {
    id: 140,
    kanjiChar: '羽',
    onyomi: ['u ウ'],
    kunyomi: ['ha は', 'wa わ', 'hane はね'],
    displayMeanings: ['feathers', 'counter for birds, rabbits'],
    fullDisplayMeanings: ['feathers', 'counter for birds, rabbits'],
    meanings: ['feathers', 'counter for birds, rabbits']
  },
  {
    id: 141,
    kanjiChar: '固',
    onyomi: ['ko コ'],
    kunyomi: ['kata(meru) かた(める)'],
    displayMeanings: ['harden', 'set', 'clot', 'curdle'],
    fullDisplayMeanings: ['harden', 'set', 'clot', 'curdle'],
    meanings: ['harden', 'set', 'clot', 'curdle']
  },
  {
    id: 142,
    kanjiChar: '則',
    onyomi: ['soku ソク'],
    kunyomi: ['notto(ru) のっと(る)'],
    displayMeanings: ['rule', 'follow', 'based on'],
    fullDisplayMeanings: ['rule', 'follow', 'based on'],
    meanings: ['rule', 'follow', 'based on']
  },
  {
    id: 143,
    kanjiChar: '乱',
    onyomi: ['ran ラン'],
    kunyomi: ['mida(reru) みだ(れる)'],
    displayMeanings: ['riot', 'war', 'disorder', 'disturb'],
    fullDisplayMeanings: ['riot', 'war', 'disorder', 'disturb'],
    meanings: ['riot', 'war', 'disorder', 'disturb']
  },
  {
    id: 144,
    kanjiChar: '普',
    onyomi: ['fu フ'],
    kunyomi: ['amane(ku) あまね(く)'],
    displayMeanings: ['universal', 'generally'],
    fullDisplayMeanings: ['universal', 'generally'],
    meanings: ['universal', 'generally']
  },
  {
    id: 145,
    kanjiChar: '測',
    onyomi: ['soku ソク'],
    kunyomi: ['haka(ru) はか(る)'],
    displayMeanings: ['fathom', 'plan', 'scheme', 'measure'],
    fullDisplayMeanings: ['fathom', 'plan', 'scheme', 'measure'],
    meanings: ['fathom', 'plan', 'scheme', 'measure']
  },
  {
    id: 146,
    kanjiChar: '豊',
    onyomi: ['hou ホウ', 'bu ブ'],
    kunyomi: ['yuta(ka) ゆた(か)', 'toyo とよ'],
    displayMeanings: ['bountiful', 'excellent', 'rich'],
    fullDisplayMeanings: ['bountiful', 'excellent', 'rich'],
    meanings: ['bountiful', 'excellent', 'rich']
  },
  {
    id: 147,
    kanjiChar: '厚',
    onyomi: ['kou コウ'],
    kunyomi: ['atsu(i) あつ(い)'],
    displayMeanings: ['thick', 'heavy', 'rich'],
    fullDisplayMeanings: ['thick', 'heavy', 'rich'],
    meanings: ['thick', 'heavy', 'rich']
  },
  {
    id: 148,
    kanjiChar: '齢',
    onyomi: ['rei レイ'],
    kunyomi: ['yowai よわい', 'toshi とし'],
    displayMeanings: ['age'],
    fullDisplayMeanings: ['age'],
    meanings: ['age']
  },
  {
    id: 149,
    kanjiChar: '囲',
    onyomi: ['i イ'],
    kunyomi: ['kako(mu) かこ(む)'],
    displayMeanings: ['surround', 'enclosure', 'preserve', 'keep'],
    fullDisplayMeanings: ['surround', 'enclosure', 'preserve', 'keep'],
    meanings: ['surround', 'enclosure', 'preserve', 'keep']
  },
  {
    id: 150,
    kanjiChar: '卒',
    onyomi: ['sotsu ソツ'],
    kunyomi: ['so(ssuru) そっ(する)'],
    displayMeanings: ['graduate', 'soldier', 'private', 'die'],
    fullDisplayMeanings: ['graduate', 'soldier', 'private', 'die'],
    meanings: ['graduate', 'soldier', 'private', 'die']
  },
  {
    id: 151,
    kanjiChar: '略',
    onyomi: ['ryaku リャク'],
    kunyomi: ['hobo ほぼ'],
    displayMeanings: ['abbreviation', 'omission', 'outline', 'shorten'],
    fullDisplayMeanings: ['abbreviation', 'omission', 'outline', 'shorten'],
    meanings: ['abbreviation', 'omission', 'outline', 'shorten']
  },
  {
    id: 152,
    kanjiChar: '承',
    onyomi: ['shou ショウ'],
    kunyomi: ['uketamawa(ru) うけたまわ(る)'],
    displayMeanings: ['hear', 'listen to', 'be informed', 'receive'],
    fullDisplayMeanings: ['hear', 'listen to', 'be informed', 'receive'],
    meanings: ['hear', 'listen to', 'be informed', 'receive']
  },
  {
    id: 153,
    kanjiChar: '順',
    onyomi: ['jun ジュン'],
    kunyomi: [],
    displayMeanings: ['obey', 'order', 'turn', 'occasion'],
    fullDisplayMeanings: ['obey', 'order', 'turn', 'occasion'],
    meanings: ['obey', 'order', 'turn', 'occasion']
  },
  {
    id: 154,
    kanjiChar: '岩',
    onyomi: ['gan ガン'],
    kunyomi: ['iwa いわ'],
    displayMeanings: ['boulder', 'rock', 'cliff'],
    fullDisplayMeanings: ['boulder', 'rock', 'cliff'],
    meanings: ['boulder', 'rock', 'cliff']
  },
  {
    id: 155,
    kanjiChar: '練',
    onyomi: ['ren レン'],
    kunyomi: ['ne(ru) ね(る)'],
    displayMeanings: [
      'practice',
      'gloss',
      'train',
      'drill',
      'polish',
      'refine'
    ],
    fullDisplayMeanings: [
      'practice',
      'gloss',
      'train',
      'drill',
      'polish',
      'refine'
    ],
    meanings: ['practice', 'gloss', 'train', 'drill', 'polish', 'refine']
  },
  {
    id: 156,
    kanjiChar: '軽',
    onyomi: ['kei ケイ'],
    kunyomi: ['karu(i) かる(い)'],
    displayMeanings: ['lightly', 'trifling', 'unimportant'],
    fullDisplayMeanings: ['lightly', 'trifling', 'unimportant'],
    meanings: ['lightly', 'trifling', 'unimportant']
  },
  {
    id: 157,
    kanjiChar: '了',
    onyomi: ['ryou リョウ'],
    kunyomi: [],
    displayMeanings: ['complete', 'finish'],
    fullDisplayMeanings: ['complete', 'finish'],
    meanings: ['complete', 'finish']
  },
  {
    id: 158,
    kanjiChar: '庁',
    onyomi: ['chou チョウ'],
    kunyomi: ['yakusho やくしょ'],
    displayMeanings: ['government office'],
    fullDisplayMeanings: ['government office'],
    meanings: ['government office']
  },
  {
    id: 159,
    kanjiChar: '城',
    onyomi: ['jou ジョウ', 'sei セイ'],
    kunyomi: ['shiro しろ'],
    displayMeanings: ['castle'],
    fullDisplayMeanings: ['castle'],
    meanings: ['castle']
  },
  {
    id: 160,
    kanjiChar: '患',
    onyomi: ['kan カン'],
    kunyomi: ['wazura(u) わずら(う)'],
    displayMeanings: ['afflicted', 'disease', 'suffer from', 'be ill'],
    fullDisplayMeanings: ['afflicted', 'disease', 'suffer from', 'be ill'],
    meanings: ['afflicted', 'disease', 'suffer from', 'be ill']
  },
  {
    id: 161,
    kanjiChar: '層',
    onyomi: ['sou ソウ'],
    kunyomi: [],
    displayMeanings: ['stratum', 'social class', 'layer', 'story', 'floor'],
    fullDisplayMeanings: ['stratum', 'social class', 'layer', 'story', 'floor'],
    meanings: ['stratum', 'social class', 'layer', 'story', 'floor']
  },
  {
    id: 162,
    kanjiChar: '版',
    onyomi: ['han ハン'],
    kunyomi: [],
    displayMeanings: ['printing block', 'edition', 'impression', 'label'],
    fullDisplayMeanings: ['printing block', 'edition', 'impression', 'label'],
    meanings: ['printing block', 'edition', 'impression', 'label']
  },
  {
    id: 163,
    kanjiChar: '令',
    onyomi: ['rei レイ'],
    kunyomi: [],
    displayMeanings: ['orders', 'command', 'decree'],
    fullDisplayMeanings: ['orders', 'command', 'decree'],
    meanings: ['orders', 'command', 'decree']
  },
  {
    id: 164,
    kanjiChar: '角',
    onyomi: ['kaku カク'],
    kunyomi: ['kado かど', 'tsuno つの'],
    displayMeanings: ['angle', 'corner', 'square'],
    fullDisplayMeanings: ['angle', 'corner', 'square'],
    meanings: ['angle', 'corner', 'square']
  },
  {
    id: 165,
    kanjiChar: '絡',
    onyomi: ['raku ラク'],
    kunyomi: ['kara(mu) から(む)'],
    displayMeanings: ['entwine', 'coil around', 'get caught in'],
    fullDisplayMeanings: ['entwine', 'coil around', 'get caught in'],
    meanings: ['entwine', 'coil around', 'get caught in']
  },
  {
    id: 166,
    kanjiChar: '損',
    onyomi: ['son ソン'],
    kunyomi: ['soko(nau) そこ(なう)'],
    displayMeanings: ['damage', 'loss', 'disadvantage', 'hurt', 'injure'],
    fullDisplayMeanings: ['damage', 'loss', 'disadvantage', 'hurt', 'injure'],
    meanings: ['damage', 'loss', 'disadvantage', 'hurt', 'injure']
  },
  {
    id: 167,
    kanjiChar: '募',
    onyomi: ['bo ボ'],
    kunyomi: ['tsuno(ru) つの(る)'],
    displayMeanings: ['recruit', 'campaign'],
    fullDisplayMeanings: ['recruit', 'campaign'],
    meanings: ['recruit', 'campaign']
  },
  {
    id: 168,
    kanjiChar: '裏',
    onyomi: ['ri リ'],
    kunyomi: ['ura うら'],
    displayMeanings: ['back', 'reverse', 'inside', 'rear'],
    fullDisplayMeanings: ['back', 'reverse', 'inside', 'rear'],
    meanings: ['back', 'reverse', 'inside', 'rear']
  },
  {
    id: 169,
    kanjiChar: '仏',
    onyomi: ['butsu ブツ'],
    kunyomi: ['hotoke ほとけ'],
    displayMeanings: ['Buddha', 'the dead', 'France'],
    fullDisplayMeanings: ['Buddha', 'the dead', 'France'],
    meanings: ['Buddha', 'the dead', 'France']
  },
  {
    id: 170,
    kanjiChar: '績',
    onyomi: ['seki セキ'],
    kunyomi: [],
    displayMeanings: ['exploits', 'achievements'],
    fullDisplayMeanings: ['exploits', 'achievements'],
    meanings: ['exploits', 'achievements']
  },
  {
    id: 171,
    kanjiChar: '築',
    onyomi: ['chiku チク'],
    kunyomi: ['kizu(ku) きず(く)'],
    displayMeanings: ['fabricate', 'build', 'construct'],
    fullDisplayMeanings: ['fabricate', 'build', 'construct'],
    meanings: ['fabricate', 'build', 'construct']
  },
  {
    id: 172,
    kanjiChar: '貨',
    onyomi: ['ka カ'],
    kunyomi: ['takara たから'],
    displayMeanings: ['freight', 'goods', 'property'],
    fullDisplayMeanings: ['freight', 'goods', 'property'],
    meanings: ['freight', 'goods', 'property']
  },
  {
    id: 173,
    kanjiChar: '混',
    onyomi: ['kon コン'],
    kunyomi: ['ma(jiru) ま(じる)'],
    displayMeanings: ['mix', 'blend', 'confuse'],
    fullDisplayMeanings: ['mix', 'blend', 'confuse'],
    meanings: ['mix', 'blend', 'confuse']
  },
  {
    id: 174,
    kanjiChar: '昇',
    onyomi: ['shou ショウ'],
    kunyomi: ['nobo(ru) のぼ(る)'],
    displayMeanings: ['rise up'],
    fullDisplayMeanings: ['rise up'],
    meanings: ['rise up']
  },
  {
    id: 175,
    kanjiChar: '池',
    onyomi: ['chi チ'],
    kunyomi: ['ike いけ'],
    displayMeanings: ['pond', 'pool', 'reservoir'],
    fullDisplayMeanings: ['pond', 'pool', 'reservoir'],
    meanings: ['pond', 'pool', 'reservoir']
  },
  {
    id: 176,
    kanjiChar: '血',
    onyomi: ['ketsu ケツ'],
    kunyomi: ['chi ち'],
    displayMeanings: ['blood'],
    fullDisplayMeanings: ['blood'],
    meanings: ['blood']
  },
  {
    id: 177,
    kanjiChar: '温',
    onyomi: ['on オン'],
    kunyomi: ['atata(kai) あたた(かい)', 'nuku ぬく'],
    displayMeanings: ['warm'],
    fullDisplayMeanings: ['warm'],
    meanings: ['warm']
  },
  {
    id: 178,
    kanjiChar: '季',
    onyomi: ['ki キ'],
    kunyomi: [],
    displayMeanings: ['seasons'],
    fullDisplayMeanings: ['seasons'],
    meanings: ['seasons']
  },
  {
    id: 179,
    kanjiChar: '星',
    onyomi: ['sei セイ'],
    kunyomi: ['hoshi ほし'],
    displayMeanings: ['star'],
    fullDisplayMeanings: ['star'],
    meanings: ['star']
  },
  {
    id: 180,
    kanjiChar: '永',
    onyomi: ['ei エイ'],
    kunyomi: ['naga(i) なが(い)'],
    displayMeanings: ['eternity', 'long', 'lengthy'],
    fullDisplayMeanings: ['eternity', 'long', 'lengthy'],
    meanings: ['eternity', 'long', 'lengthy']
  },
  {
    id: 181,
    kanjiChar: '著',
    onyomi: ['cho チョ', 'chaku チャク'],
    kunyomi: ['arawa(su) あらわ(す)', 'ichijiru(shii) いちじる(しい)'],
    displayMeanings: ['renowned', 'publish', 'write'],
    fullDisplayMeanings: ['renowned', 'publish', 'write'],
    meanings: ['renowned', 'publish', 'write']
  },
  {
    id: 182,
    kanjiChar: '誌',
    onyomi: ['shi シ'],
    kunyomi: [],
    displayMeanings: ['document', 'records'],
    fullDisplayMeanings: ['document', 'records'],
    meanings: ['document', 'records']
  },
  {
    id: 183,
    kanjiChar: '庫',
    onyomi: ['ko コ', 'ku ク'],
    kunyomi: ['kura くら'],
    displayMeanings: ['warehouse', 'storehouse'],
    fullDisplayMeanings: ['warehouse', 'storehouse'],
    meanings: ['warehouse', 'storehouse']
  },
  {
    id: 184,
    kanjiChar: '刊',
    onyomi: ['kan カン'],
    kunyomi: [],
    displayMeanings: ['publish', 'carve', 'engrave'],
    fullDisplayMeanings: ['publish', 'carve', 'engrave'],
    meanings: ['publish', 'carve', 'engrave']
  },
  {
    id: 185,
    kanjiChar: '像',
    onyomi: ['zou ゾウ'],
    kunyomi: [],
    displayMeanings: ['statue', 'picture', 'image', 'figure'],
    fullDisplayMeanings: ['statue', 'picture', 'image', 'figure'],
    meanings: ['statue', 'picture', 'image', 'figure']
  },
  {
    id: 186,
    kanjiChar: '香',
    onyomi: ['kou コウ', 'kyou キョウ'],
    kunyomi: ['kao(ri) かお(り)'],
    displayMeanings: ['incense', 'smell', 'perfume'],
    fullDisplayMeanings: ['incense', 'smell', 'perfume'],
    meanings: ['incense', 'smell', 'perfume']
  },
  {
    id: 187,
    kanjiChar: '坂',
    onyomi: ['han ハン'],
    kunyomi: ['saka さか'],
    displayMeanings: ['slope', 'incline', 'hill'],
    fullDisplayMeanings: ['slope', 'incline', 'hill'],
    meanings: ['slope', 'incline', 'hill']
  },
  {
    id: 188,
    kanjiChar: '底',
    onyomi: ['tei テイ'],
    kunyomi: ['soko そこ'],
    displayMeanings: ['bottom', 'sole', 'depth', 'bottom price'],
    fullDisplayMeanings: ['bottom', 'sole', 'depth', 'bottom price'],
    meanings: ['bottom', 'sole', 'depth', 'bottom price']
  },
  {
    id: 189,
    kanjiChar: '布',
    onyomi: ['fu フ'],
    kunyomi: ['nuno ぬの', 'shi(ku) し(く)'],
    displayMeanings: ['linen', 'cloth', 'spread', 'distribute'],
    fullDisplayMeanings: ['linen', 'cloth', 'spread', 'distribute'],
    meanings: ['linen', 'cloth', 'spread', 'distribute']
  },
  {
    id: 190,
    kanjiChar: '寺',
    onyomi: ['ji ジ'],
    kunyomi: ['tera てら'],
    displayMeanings: ['Buddhist temple'],
    fullDisplayMeanings: ['Buddhist temple'],
    meanings: ['Buddhist temple']
  },
  {
    id: 191,
    kanjiChar: '宇',
    onyomi: ['u ウ'],
    kunyomi: [],
    displayMeanings: ['eaves', 'roof', 'house', 'heaven'],
    fullDisplayMeanings: ['eaves', 'roof', 'house', 'heaven'],
    meanings: ['eaves', 'roof', 'house', 'heaven']
  },
  {
    id: 192,
    kanjiChar: '巨',
    onyomi: ['kyo キョ'],
    kunyomi: [],
    displayMeanings: ['gigantic', 'big', 'large', 'great'],
    fullDisplayMeanings: ['gigantic', 'big', 'large', 'great'],
    meanings: ['gigantic', 'big', 'large', 'great']
  },
  {
    id: 193,
    kanjiChar: '震',
    onyomi: ['shin シン'],
    kunyomi: ['furu(u) ふる(う)'],
    displayMeanings: ['quake', 'shake', 'tremble', 'quiver'],
    fullDisplayMeanings: ['quake', 'shake', 'tremble', 'quiver'],
    meanings: ['quake', 'shake', 'tremble', 'quiver']
  },
  {
    id: 194,
    kanjiChar: '希',
    onyomi: ['ki キ'],
    kunyomi: ['mare まれ', 'koinega(u) こいねが(う)'],
    displayMeanings: ['hope', 'beg', 'request', 'pray'],
    fullDisplayMeanings: ['hope', 'beg', 'request', 'pray'],
    meanings: ['hope', 'beg', 'request', 'pray']
  },
  {
    id: 195,
    kanjiChar: '触',
    onyomi: ['shoku ショク'],
    kunyomi: ['fu(reru) ふ(れる)', 'sawa(ru) さわ(る)'],
    displayMeanings: [
      'contact',
      'touch',
      'feel',
      'hit',
      'proclaim',
      'announce'
    ],
    fullDisplayMeanings: [
      'contact',
      'touch',
      'feel',
      'hit',
      'proclaim',
      'announce'
    ],
    meanings: ['contact', 'touch', 'feel', 'hit', 'proclaim', 'announce']
  },
  {
    id: 196,
    kanjiChar: '依',
    onyomi: ['i イ', 'e エ'],
    kunyomi: ['yo(ru) よ(る)'],
    displayMeanings: [
      'reliant',
      'depend on',
      'consequently',
      'therefore',
      'due to'
    ],
    fullDisplayMeanings: [
      'reliant',
      'depend on',
      'consequently',
      'therefore',
      'due to'
    ],
    meanings: ['reliant', 'depend on', 'consequently', 'therefore', 'due to']
  },
  {
    id: 197,
    kanjiChar: '籍',
    onyomi: ['seki セキ'],
    kunyomi: [],
    displayMeanings: ['enroll', 'register', 'membership'],
    fullDisplayMeanings: ['enroll', 'register', 'membership'],
    meanings: ['enroll', 'register', 'membership']
  },
  {
    id: 198,
    kanjiChar: '汚',
    onyomi: ['o オ'],
    kunyomi: ['yogo(su) よご(す)', 'kitana(i) きたな(い)', 'kega(su) けが(す)'],
    displayMeanings: ['dirty', 'pollute', 'disgrace', 'defile'],
    fullDisplayMeanings: ['dirty', 'pollute', 'disgrace', 'defile'],
    meanings: ['dirty', 'pollute', 'disgrace', 'defile']
  },
  {
    id: 199,
    kanjiChar: '枚',
    onyomi: ['mai マイ', 'bai バイ'],
    kunyomi: [],
    displayMeanings: ['sheet of...', 'counter for flat thin objects'],
    fullDisplayMeanings: ['sheet of...', 'counter for flat thin objects'],
    meanings: ['sheet of...', 'counter for flat thin objects']
  },
  {
    id: 200,
    kanjiChar: '複',
    onyomi: ['fuku フク'],
    kunyomi: [],
    displayMeanings: ['duplicate', 'double', 'compound', 'multiple'],
    fullDisplayMeanings: ['duplicate', 'double', 'compound', 'multiple'],
    meanings: ['duplicate', 'double', 'compound', 'multiple']
  },

  {
    id: 201,
    kanjiChar: '郵',
    onyomi: ['yuu ユウ'],
    kunyomi: [],
    displayMeanings: ['mail', 'stagecoach stop'],
    fullDisplayMeanings: ['mail', 'stagecoach stop'],
    meanings: ['mail', 'stagecoach stop']
  },
  {
    id: 202,
    kanjiChar: '仲',
    onyomi: ['chuu チュウ'],
    kunyomi: ['naka なか'],
    displayMeanings: ['go-between', 'relationship'],
    fullDisplayMeanings: ['go-between', 'relationship'],
    meanings: ['go-between', 'relationship']
  },
  {
    id: 203,
    kanjiChar: '栄',
    onyomi: ['ei エイ'],
    kunyomi: ['saka(eru) さか(える)'],
    displayMeanings: ['flourish', 'prosperity', 'honor'],
    fullDisplayMeanings: ['flourish', 'prosperity', 'honor'],
    meanings: ['flourish', 'prosperity', 'honor']
  },
  {
    id: 204,
    kanjiChar: '札',
    onyomi: ['satsu サツ'],
    kunyomi: ['fuda ふだ'],
    displayMeanings: ['ticket', 'paper money', 'banknote', 'note'],
    fullDisplayMeanings: ['ticket', 'paper money', 'banknote', 'note'],
    meanings: ['ticket', 'paper money', 'banknote', 'note']
  },
  {
    id: 205,
    kanjiChar: '板',
    onyomi: ['han ハン', 'ban バン'],
    kunyomi: ['ita いた'],
    displayMeanings: ['plank', 'board', 'plate', 'stage'],
    fullDisplayMeanings: ['plank', 'board', 'plate', 'stage'],
    meanings: ['plank', 'board', 'plate', 'stage']
  },
  {
    id: 206,
    kanjiChar: '骨',
    onyomi: ['kotsu コツ'],
    kunyomi: ['hone ほね'],
    displayMeanings: ['skeleton', 'bone', 'remains', 'frame'],
    fullDisplayMeanings: ['skeleton', 'bone', 'remains', 'frame'],
    meanings: ['skeleton', 'bone', 'remains', 'frame']
  },
  {
    id: 207,
    kanjiChar: '傾',
    onyomi: ['kei ケイ'],
    kunyomi: ['katamu(ku) かたむ(く)'],
    displayMeanings: ['lean', 'incline', 'tilt', 'trend', 'bias'],
    fullDisplayMeanings: ['lean', 'incline', 'tilt', 'trend', 'bias'],
    meanings: ['lean', 'incline', 'tilt', 'trend', 'bias']
  },
  {
    id: 208,
    kanjiChar: '届',
    onyomi: ['kai カイ'],
    kunyomi: ['todo(keru) とど(ける)'],
    displayMeanings: ['deliver', 'reach', 'arrive', 'report'],
    fullDisplayMeanings: ['deliver', 'reach', 'arrive', 'report'],
    meanings: ['deliver', 'reach', 'arrive', 'report']
  },
  {
    id: 209,
    kanjiChar: '巻',
    onyomi: ['kan カン'],
    kunyomi: ['ma(ku) ま(く)', 'maki まき'],
    displayMeanings: [
      'scroll',
      'volume',
      'book',
      'part',
      'roll up',
      'wind up',
      'coil',
      'counter for texts (or book scrolls)'
    ],
    fullDisplayMeanings: [
      'scroll',
      'volume',
      'book',
      'part',
      'roll up',
      'wind up',
      'coil',
      'counter for texts (or book scrolls)'
    ],
    meanings: [
      'scroll',
      'volume',
      'book',
      'part',
      'roll up',
      'wind up',
      'coil',
      'counter for texts (or book scrolls)'
    ]
  },
  {
    id: 210,
    kanjiChar: '燃',
    onyomi: ['nen ネン'],
    kunyomi: ['mo(eru) も(える)'],
    displayMeanings: ['burn', 'blaze', 'glow'],
    fullDisplayMeanings: ['burn', 'blaze', 'glow'],
    meanings: ['burn', 'blaze', 'glow']
  },
  {
    id: 211,
    kanjiChar: '跡',
    onyomi: ['seki セキ'],
    kunyomi: ['ato あと'],
    displayMeanings: ['tracks', 'mark', 'print', 'impression'],
    fullDisplayMeanings: ['tracks', 'mark', 'print', 'impression'],
    meanings: ['tracks', 'mark', 'print', 'impression']
  },
  {
    id: 212,
    kanjiChar: '包',
    onyomi: ['hou ホウ'],
    kunyomi: ['tsutsu(mu) つつ(む)', 'kuru(mu) くる(む)'],
    displayMeanings: ['wrap', 'pack up', 'cover', 'conceal'],
    fullDisplayMeanings: ['wrap', 'pack up', 'cover', 'conceal'],
    meanings: ['wrap', 'pack up', 'cover', 'conceal']
  },
  {
    id: 213,
    kanjiChar: '駐',
    onyomi: ['chuu チュウ'],
    kunyomi: [],
    displayMeanings: ['stop-over', 'reside in', 'resident'],
    fullDisplayMeanings: ['stop-over', 'reside in', 'resident'],
    meanings: ['stop-over', 'reside in', 'resident']
  },
  {
    id: 214,
    kanjiChar: '弱',
    onyomi: ['jaku ジャク'],
    kunyomi: ['yowa(i) よわ(い)'],
    displayMeanings: ['weak', 'frail'],
    fullDisplayMeanings: ['weak', 'frail'],
    meanings: ['weak', 'frail']
  },
  {
    id: 215,
    kanjiChar: '紹',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['introduce', 'inherit', 'help'],
    fullDisplayMeanings: ['introduce', 'inherit', 'help'],
    meanings: ['introduce', 'inherit', 'help']
  },
  {
    id: 216,
    kanjiChar: '雇',
    onyomi: ['ko コ'],
    kunyomi: ['yato(u) やと(う)'],
    displayMeanings: ['employ', 'hire'],
    fullDisplayMeanings: ['employ', 'hire'],
    meanings: ['employ', 'hire']
  },
  {
    id: 217,
    kanjiChar: '替',
    onyomi: ['tai タイ'],
    kunyomi: ['ka(waru) か(わる)'],
    displayMeanings: ['exchange', 'spare', 'substitute'],
    fullDisplayMeanings: ['exchange', 'spare', 'substitute'],
    meanings: ['exchange', 'spare', 'substitute']
  },
  {
    id: 218,
    kanjiChar: '預',
    onyomi: ['yo ヨ'],
    kunyomi: ['azu(keru) あず(ける)'],
    displayMeanings: ['deposit', 'custody', 'leave with', 'entrust to'],
    fullDisplayMeanings: ['deposit', 'custody', 'leave with', 'entrust to'],
    meanings: ['deposit', 'custody', 'leave with', 'entrust to']
  },
  {
    id: 219,
    kanjiChar: '焼',
    onyomi: ['shou ショウ'],
    kunyomi: ['ya(ku) や(く)'],
    displayMeanings: ['bake', 'burning'],
    fullDisplayMeanings: ['bake', 'burning'],
    meanings: ['bake', 'burning']
  },
  {
    id: 220,
    kanjiChar: '簡',
    onyomi: ['kan カン'],
    kunyomi: ['fuda ふだ', 'era(bu) えら(ぶ)'],
    displayMeanings: ['simplicity', 'brevity'],
    fullDisplayMeanings: ['simplicity', 'brevity'],
    meanings: ['simplicity', 'brevity']
  },
  {
    id: 221,
    kanjiChar: '章',
    onyomi: ['shou ショウ'],
    kunyomi: [],
    displayMeanings: ['badge', 'chapter', 'composition', 'poem'],
    fullDisplayMeanings: ['badge', 'chapter', 'composition', 'poem'],
    meanings: ['badge', 'chapter', 'composition', 'poem']
  },
  {
    id: 222,
    kanjiChar: '臓',
    onyomi: ['zou ゾウ'],
    kunyomi: ['harawata はらわた'],
    displayMeanings: ['entrails', 'viscera', 'bowels'],
    fullDisplayMeanings: ['entrails', 'viscera', 'bowels'],
    meanings: ['entrails', 'viscera', 'bowels']
  },
  {
    id: 223,
    kanjiChar: '律',
    onyomi: ['ritsu リツ', 'richi リチ'],
    kunyomi: [],
    displayMeanings: ['rhythm', 'law', 'regulation', 'control'],
    fullDisplayMeanings: ['rhythm', 'law', 'regulation', 'control'],
    meanings: ['rhythm', 'law', 'regulation', 'control']
  },
  {
    id: 224,
    kanjiChar: '贈',
    onyomi: ['zou ゾウ'],
    kunyomi: ['oku(ru) おく(る)'],
    displayMeanings: ['presents', 'send', 'give to', 'award to'],
    fullDisplayMeanings: ['presents', 'send', 'give to', 'award to'],
    meanings: ['presents', 'send', 'give to', 'award to']
  },
  {
    id: 225,
    kanjiChar: '照',
    onyomi: ['shou ショウ'],
    kunyomi: ['te(ru) て(る)'],
    displayMeanings: ['illuminate', 'shine', 'compare'],
    fullDisplayMeanings: ['illuminate', 'shine', 'compare'],
    meanings: ['illuminate', 'shine', 'compare']
  },
  {
    id: 226,
    kanjiChar: '薄',
    onyomi: ['haku ハク'],
    kunyomi: ['usu(i) うす(い)'],
    displayMeanings: ['dilute', 'thin', 'weak (tea)'],
    fullDisplayMeanings: ['dilute', 'thin', 'weak (tea)'],
    meanings: ['dilute', 'thin', 'weak (tea)']
  },
  {
    id: 227,
    kanjiChar: '群',
    onyomi: ['gun グン'],
    kunyomi: ['mu(reru) む(れる)', 'mura(garu) むら(がる)'],
    displayMeanings: ['flock', 'group', 'crowd', 'herd'],
    fullDisplayMeanings: ['flock', 'group', 'crowd', 'herd'],
    meanings: ['flock', 'group', 'crowd', 'herd']
  },
  {
    id: 228,
    kanjiChar: '秒',
    onyomi: ['byou ビョウ'],
    kunyomi: [],
    displayMeanings: ['second'],
    fullDisplayMeanings: ['second'],
    meanings: ['second']
  },
  {
    id: 229,
    kanjiChar: '奥',
    onyomi: ['ou オウ'],
    kunyomi: ['oku おく'],
    displayMeanings: ['heart', 'interior'],
    fullDisplayMeanings: ['heart', 'interior'],
    meanings: ['heart', 'interior']
  },
  {
    id: 230,
    kanjiChar: '詰',
    onyomi: ['kitsu キツ'],
    kunyomi: ['tsu(meru) つ(める)'],
    displayMeanings: ['packed', 'close', 'rebuke', 'blame'],
    fullDisplayMeanings: ['packed', 'close', 'rebuke', 'blame'],
    meanings: ['packed', 'close', 'rebuke', 'blame']
  },
  {
    id: 231,
    kanjiChar: '双',
    onyomi: ['sou ソウ'],
    kunyomi: ['futa ふた'],
    displayMeanings: ['pair', 'set', 'comparison', 'counter for pairs'],
    fullDisplayMeanings: ['pair', 'set', 'comparison', 'counter for pairs'],
    meanings: ['pair', 'set', 'comparison', 'counter for pairs']
  },
  {
    id: 232,
    kanjiChar: '刺',
    onyomi: ['shi シ'],
    kunyomi: ['sa(su) さ(す)', 'toge さし'], // Paired sequentially based on minimum length of Romaji/Hiragana lists
    displayMeanings: ['thorn', 'pierce', 'stab', 'prick', 'sting'],
    fullDisplayMeanings: ['thorn', 'pierce', 'stab', 'prick', 'sting'],
    meanings: ['thorn', 'pierce', 'stab', 'prick', 'sting']
  },
  {
    id: 233,
    kanjiChar: '純',
    onyomi: ['jun ジュン'],
    kunyomi: [],
    displayMeanings: ['genuine', 'purity', 'innocence'],
    fullDisplayMeanings: ['genuine', 'purity', 'innocence'],
    meanings: ['genuine', 'purity', 'innocence']
  },
  {
    id: 234,
    kanjiChar: '翌',
    onyomi: ['yoku ヨク'],
    kunyomi: [],
    displayMeanings: ['the following', 'next'],
    fullDisplayMeanings: ['the following', 'next'],
    meanings: ['the following', 'next']
  },
  {
    id: 235,
    kanjiChar: '快',
    onyomi: ['kai カイ'],
    kunyomi: ['kokoroyo(i) こころよ(い)'],
    displayMeanings: ['cheerful', 'pleasant', 'agreeable', 'comfortable'],
    fullDisplayMeanings: ['cheerful', 'pleasant', 'agreeable', 'comfortable'],
    meanings: ['cheerful', 'pleasant', 'agreeable', 'comfortable']
  },
  {
    id: 236,
    kanjiChar: '片',
    onyomi: ['hen ヘン'],
    kunyomi: ['kata かた'],
    displayMeanings: ['one-sided', 'piece'],
    fullDisplayMeanings: ['one-sided', 'piece'],
    meanings: ['one-sided', 'piece']
  },
  {
    id: 237,
    kanjiChar: '敬',
    onyomi: ['kei ケイ'],
    kunyomi: ['uyama(u) うやま(う)'],
    displayMeanings: ['awe', 'respect', 'honor', 'revere'],
    fullDisplayMeanings: ['awe', 'respect', 'honor', 'revere'],
    meanings: ['awe', 'respect', 'honor', 'revere']
  },
  {
    id: 238,
    kanjiChar: '悩',
    onyomi: ['nou ノウ'],
    kunyomi: ['naya(mu) なや(む)'],
    displayMeanings: ['trouble', 'worry', 'in pain', 'distress', 'illness'],
    fullDisplayMeanings: ['trouble', 'worry', 'in pain', 'distress', 'illness'],
    meanings: ['trouble', 'worry', 'in pain', 'distress', 'illness']
  },
  {
    id: 239,
    kanjiChar: '泉',
    onyomi: ['sen セン'],
    kunyomi: ['izumi いずみ'],
    displayMeanings: ['spring', 'fountain'],
    fullDisplayMeanings: ['spring', 'fountain'],
    meanings: ['spring', 'fountain']
  },
  {
    id: 240,
    kanjiChar: '皮',
    onyomi: ['hi ヒ'],
    kunyomi: ['kawa かわ'],
    displayMeanings: ['skin', 'hide', 'leather'],
    fullDisplayMeanings: ['skin', 'hide', 'leather'],
    meanings: ['skin', 'hide', 'leather']
  },
  {
    id: 241,
    kanjiChar: '漁',
    onyomi: ['gyo ギョ', 'ryou リョウ'],
    kunyomi: ['asa(ru) あさ(る)'],
    displayMeanings: ['fishing', 'fishery'],
    fullDisplayMeanings: ['fishing', 'fishery'],
    meanings: ['fishing', 'fishery']
  },
  {
    id: 242,
    kanjiChar: '荒',
    onyomi: ['kou コウ'],
    kunyomi: ['ara(i) あら(い)', 'a(reru) あ(れる)'],
    displayMeanings: ['rough', 'wild'],
    fullDisplayMeanings: ['rough', 'wild'],
    meanings: ['rough', 'wild']
  },
  {
    id: 243,
    kanjiChar: '貯',
    onyomi: ['cho チョ'],
    kunyomi: ['ta(meru) た(める)'],
    displayMeanings: ['savings', 'store'],
    fullDisplayMeanings: ['savings', 'store'],
    meanings: ['savings', 'store']
  },
  {
    id: 244,
    kanjiChar: '硬',
    onyomi: ['kou コウ'],
    kunyomi: ['kata(i) かた(い)'],
    displayMeanings: ['stiff', 'hard'],
    fullDisplayMeanings: ['stiff', 'hard'],
    meanings: ['stiff', 'hard']
  },
  {
    id: 245,
    kanjiChar: '埋',
    onyomi: ['mai マイ'],
    kunyomi: ['u(meru) う(める)'],
    displayMeanings: ['bury', 'be filled up', 'embedded'],
    fullDisplayMeanings: ['bury', 'be filled up', 'embedded'],
    meanings: ['bury', 'be filled up', 'embedded']
  },
  {
    id: 246,
    kanjiChar: '柱',
    onyomi: ['chuu チュウ'],
    kunyomi: ['hashira はしら'],
    displayMeanings: ['pillar', 'post', 'cylinder', 'support'],
    fullDisplayMeanings: ['pillar', 'post', 'cylinder', 'support'],
    meanings: ['pillar', 'post', 'cylinder', 'support']
  },
  {
    id: 247,
    kanjiChar: '祭',
    onyomi: ['sai サイ'],
    kunyomi: ['matsuri まつり'],
    displayMeanings: ['ritual', 'offer prayers', 'celebrate'],
    fullDisplayMeanings: ['ritual', 'offer prayers', 'celebrate'],
    meanings: ['ritual', 'offer prayers', 'celebrate']
  },
  {
    id: 248,
    kanjiChar: '袋',
    onyomi: ['tai タイ'],
    kunyomi: ['fukuro ふくろ'],
    displayMeanings: ['sack', 'bag', 'pouch'],
    fullDisplayMeanings: ['sack', 'bag', 'pouch'],
    meanings: ['sack', 'bag', 'pouch']
  },
  {
    id: 249,
    kanjiChar: '筆',
    onyomi: ['hitsu ヒツ'],
    kunyomi: ['fude ふで'],
    displayMeanings: [
      'writing brush',
      'writing',
      'painting brush',
      'handwriting'
    ],
    fullDisplayMeanings: [
      'writing brush',
      'writing',
      'painting brush',
      'handwriting'
    ],
    meanings: ['writing brush', 'writing', 'painting brush', 'handwriting']
  },
  {
    id: 250,
    kanjiChar: '訓',
    onyomi: ['kun クン'],
    kunyomi: ['yo(mu) よ(む)', 'kun(zuru) くん(ずる)'],
    displayMeanings: ['instruction', 'explanation', 'read'],
    fullDisplayMeanings: ['instruction', 'explanation', 'read'],
    meanings: ['instruction', 'explanation', 'read']
  },
  {
    id: 251,
    kanjiChar: '浴',
    onyomi: ['yoku ヨク'],
    kunyomi: ['a(biru) あ(びる)'],
    displayMeanings: ['bathe', 'be favored with', 'bask in'],
    fullDisplayMeanings: ['bathe', 'be favored with', 'bask in'],
    meanings: ['bathe', 'be favored with', 'bask in']
  },
  {
    id: 252,
    kanjiChar: '童',
    onyomi: ['dou ドウ'],
    kunyomi: ['warabe わらべ'],
    displayMeanings: ['juvenile', 'child'],
    fullDisplayMeanings: ['juvenile', 'child'],
    meanings: ['juvenile', 'child']
  },
  {
    id: 253,
    kanjiChar: '宝',
    onyomi: ['hou ホウ'],
    kunyomi: ['takara たから'],
    displayMeanings: ['treasure', 'wealth', 'valuables'],
    fullDisplayMeanings: ['treasure', 'wealth', 'valuables'],
    meanings: ['treasure', 'wealth', 'valuables']
  },
  {
    id: 254,
    kanjiChar: '封',
    onyomi: ['fuu フウ', 'hou ホウ'],
    kunyomi: [],
    displayMeanings: ['seal', 'closing'],
    fullDisplayMeanings: ['seal', 'closing'],
    meanings: ['seal', 'closing']
  },
  {
    id: 255,
    kanjiChar: '胸',
    onyomi: ['kyou キョウ'],
    kunyomi: ['mune むね'],
    displayMeanings: ['bosom', 'breast', 'chest', 'heart', 'feelings'],
    fullDisplayMeanings: ['bosom', 'breast', 'chest', 'heart', 'feelings'],
    meanings: ['bosom', 'breast', 'chest', 'heart', 'feelings']
  },
  {
    id: 256,
    kanjiChar: '砂',
    onyomi: ['sa サ', 'sha シャ'],
    kunyomi: ['suna すな'],
    displayMeanings: ['sand'],
    fullDisplayMeanings: ['sand'],
    meanings: ['sand']
  },
  {
    id: 257,
    kanjiChar: '塩',
    onyomi: ['en エン'],
    kunyomi: ['shio しお'],
    displayMeanings: ['salt'],
    fullDisplayMeanings: ['salt'],
    meanings: ['salt']
  },
  {
    id: 258,
    kanjiChar: '賢',
    onyomi: ['ken ケン'],
    kunyomi: ['kashiko(i) かしこ(い)'],
    displayMeanings: ['intelligent', 'wise', 'wisdom', 'cleverness'],
    fullDisplayMeanings: ['intelligent', 'wise', 'wisdom', 'cleverness'],
    meanings: ['intelligent', 'wise', 'wisdom', 'cleverness']
  },
  {
    id: 259,
    kanjiChar: '腕',
    onyomi: ['wan ワン'],
    kunyomi: ['ude うで'],
    displayMeanings: ['arm', 'ability', 'talent'],
    fullDisplayMeanings: ['arm', 'ability', 'talent'],
    meanings: ['arm', 'ability', 'talent']
  },
  {
    id: 260,
    kanjiChar: '兆',
    onyomi: ['chou チョウ'],
    kunyomi: ['kiza(su) きざ(す)'],
    displayMeanings: ['trillion', 'sign', 'omen', 'symptoms'],
    fullDisplayMeanings: ['trillion', 'sign', 'omen', 'symptoms'],
    meanings: ['trillion', 'sign', 'omen', 'symptoms']
  },
  {
    id: 261,
    kanjiChar: '床',
    onyomi: ['shou ショウ'],
    kunyomi: ['toko とこ', 'yuka ゆか'],
    displayMeanings: ['bed', 'counter for beds', 'floor', 'padding', 'tatami'],
    fullDisplayMeanings: [
      'bed',
      'counter for beds',
      'floor',
      'padding',
      'tatami'
    ],
    meanings: ['bed', 'counter for beds', 'floor', 'padding', 'tatami']
  },
  {
    id: 262,
    kanjiChar: '毛',
    onyomi: ['mou モウ'],
    kunyomi: ['ke け'],
    displayMeanings: ['fur', 'hair', 'feather'],
    fullDisplayMeanings: ['fur', 'hair', 'feather'],
    meanings: ['fur', 'hair', 'feather']
  },
  {
    id: 263,
    kanjiChar: '緑',
    onyomi: ['ryoku リョク', 'roku ロク'],
    kunyomi: ['midori みどり'],
    displayMeanings: ['green'],
    fullDisplayMeanings: ['green'],
    meanings: ['green']
  },
  {
    id: 264,
    kanjiChar: '尊',
    onyomi: ['son ソン'],
    kunyomi: ['touto(i) とうと(い)'],
    displayMeanings: ['revered', 'valuable', 'precious', 'noble'],
    fullDisplayMeanings: ['revered', 'valuable', 'precious', 'noble'],
    meanings: ['revered', 'valuable', 'precious', 'noble']
  },
  {
    id: 265,
    kanjiChar: '祝',
    onyomi: ['shuku シュク'],
    kunyomi: ['iwa(u) いわ(う)'],
    displayMeanings: ['celebrate', 'congratulate'],
    fullDisplayMeanings: ['celebrate', 'congratulate'],
    meanings: ['celebrate', 'congratulate']
  },
  {
    id: 266,
    kanjiChar: '柔',
    onyomi: ['juu ジュウ', 'nyuu ニュウ'],
    kunyomi: ['yawa(rakai) やわ(らかい)'],
    displayMeanings: ['tender', 'weakness', 'gentleness', 'softness'],
    fullDisplayMeanings: ['tender', 'weakness', 'gentleness', 'softness'],
    meanings: ['tender', 'weakness', 'gentleness', 'softness']
  },
  {
    id: 267,
    kanjiChar: '殿',
    onyomi: ['den デン'],
    kunyomi: ['tono との', 'dono どの'],
    displayMeanings: ['Mr.', 'hall', 'mansion', 'palace', 'temple', 'lord'],
    fullDisplayMeanings: ['Mr.', 'hall', 'mansion', 'palace', 'temple', 'lord'],
    meanings: ['Mr.', 'hall', 'mansion', 'palace', 'temple', 'lord']
  },
  {
    id: 268,
    kanjiChar: '濃',
    onyomi: ['nou ノウ'],
    kunyomi: ['ko(i) こ(い)'],
    displayMeanings: ['concentrated', 'thick', 'dark', 'undiluted'],
    fullDisplayMeanings: ['concentrated', 'thick', 'dark', 'undiluted'],
    meanings: ['concentrated', 'thick', 'dark', 'undiluted']
  },
  {
    id: 269,
    kanjiChar: '液',
    onyomi: ['eki エキ'],
    kunyomi: [],
    displayMeanings: ['fluid', 'liquid', 'juice', 'sap', 'secretion'],
    fullDisplayMeanings: ['fluid', 'liquid', 'juice', 'sap', 'secretion'],
    meanings: ['fluid', 'liquid', 'juice', 'sap', 'secretion']
  },
  {
    id: 270,
    kanjiChar: '衣',
    onyomi: ['i イ', 'e エ'],
    kunyomi: ['koromo ころも', 'kinu きぬ'],
    displayMeanings: ['garment', 'clothes', 'dressing'],
    fullDisplayMeanings: ['garment', 'clothes', 'dressing'],
    meanings: ['garment', 'clothes', 'dressing']
  },
  {
    id: 271,
    kanjiChar: '肩',
    onyomi: ['ken ケン'],
    kunyomi: ['kata かた'],
    displayMeanings: ['shoulder'],
    fullDisplayMeanings: ['shoulder'],
    meanings: ['shoulder']
  },
  {
    id: 272,
    kanjiChar: '零',
    onyomi: ['rei レイ'],
    kunyomi: ['zero ぜろ'],
    displayMeanings: ['zero', 'spill', 'overflow', 'nothing'],
    fullDisplayMeanings: ['zero', 'spill', 'overflow', 'nothing'],
    meanings: ['zero', 'spill', 'overflow', 'nothing']
  },
  {
    id: 273,
    kanjiChar: '幼',
    onyomi: ['you ヨウ'],
    kunyomi: ['osana(i) おさな(い)'],
    displayMeanings: ['infancy', 'childhood'],
    fullDisplayMeanings: ['infancy', 'childhood'],
    meanings: ['infancy', 'childhood']
  },
  {
    id: 274,
    kanjiChar: '荷',
    onyomi: ['ka カ'],
    kunyomi: ['ni に'],
    displayMeanings: ['baggage', 'load', 'cargo', 'freight'],
    fullDisplayMeanings: ['baggage', 'load', 'cargo', 'freight'],
    meanings: ['baggage', 'load', 'cargo', 'freight']
  },
  {
    id: 275,
    kanjiChar: '泊',
    onyomi: ['haku ハク'],
    kunyomi: ['to(maru) と(まる)'],
    displayMeanings: ['overnight stay'],
    fullDisplayMeanings: ['overnight stay'],
    meanings: ['overnight stay']
  },
  {
    id: 276,
    kanjiChar: '黄',
    onyomi: ['kou コウ', 'ou オウ'],
    kunyomi: ['ki き'],
    displayMeanings: ['yellow'],
    fullDisplayMeanings: ['yellow'],
    meanings: ['yellow']
  },
  {
    id: 277,
    kanjiChar: '甘',
    onyomi: ['kan カン'],
    kunyomi: ['ama(i) あま(い)'],
    displayMeanings: ['sweet', 'coax', 'pamper', 'sugary'],
    fullDisplayMeanings: ['sweet', 'coax', 'pamper', 'sugary'],
    meanings: ['sweet', 'coax', 'pamper', 'sugary']
  },
  {
    id: 278,
    kanjiChar: '臣',
    onyomi: ['shin シン', 'jin ジン'],
    kunyomi: [],
    displayMeanings: ['retainer', 'subject'],
    fullDisplayMeanings: ['retainer', 'subject'],
    meanings: ['retainer', 'subject']
  },
  {
    id: 279,
    kanjiChar: '浅',
    onyomi: ['sen セン'],
    kunyomi: ['asa(i) あさ(い)'],
    displayMeanings: ['shallow', 'superficial', 'frivolous'],
    fullDisplayMeanings: ['shallow', 'superficial', 'frivolous'],
    meanings: ['shallow', 'superficial', 'frivolous']
  },
  {
    id: 280,
    kanjiChar: '掃',
    onyomi: ['sou ソウ'],
    kunyomi: ['ha(ku) は(く)'],
    displayMeanings: ['sweep', 'brush'],
    fullDisplayMeanings: ['sweep', 'brush'],
    meanings: ['sweep', 'brush']
  },
  {
    id: 281,
    kanjiChar: '雲',
    onyomi: ['un ウン'],
    kunyomi: ['kumo くも'],
    displayMeanings: ['cloud'],
    fullDisplayMeanings: ['cloud'],
    meanings: ['cloud']
  },
  {
    id: 282,
    kanjiChar: '掘',
    onyomi: ['kutsu クツ'],
    kunyomi: ['ho(ru) ほ(る)'],
    displayMeanings: ['dig', 'delve', 'excavate'],
    fullDisplayMeanings: ['dig', 'delve', 'excavate'],
    meanings: ['dig', 'delve', 'excavate']
  },
  {
    id: 283,
    kanjiChar: '捨',
    onyomi: ['sha シャ'],
    kunyomi: ['su(teru) す(てる)'],
    displayMeanings: ['discard', 'throw away', 'abandon'],
    fullDisplayMeanings: ['discard', 'throw away', 'abandon'],
    meanings: ['discard', 'throw away', 'abandon']
  },
  {
    id: 284,
    kanjiChar: '軟',
    onyomi: ['nan ナン'],
    kunyomi: ['yawa(rakai) やわ(らかい)'],
    displayMeanings: ['soft'],
    fullDisplayMeanings: ['soft'],
    meanings: ['soft']
  },
  {
    id: 285,
    kanjiChar: '沈',
    onyomi: ['chin チン', 'jin ジン'],
    kunyomi: ['shizu(mu) しず(む)'],
    displayMeanings: ['sink', 'be submerged', 'subside', 'be depressed'],
    fullDisplayMeanings: ['sink', 'be submerged', 'subside', 'be depressed'],
    meanings: ['sink', 'be submerged', 'subside', 'be depressed']
  },
  {
    id: 286,
    kanjiChar: '凍',
    onyomi: ['tou トウ'],
    kunyomi: ['koo(ru) こお(る)', 'kogo(eru) こご(える)'],
    displayMeanings: ['frozen', 'refrigerate'],
    fullDisplayMeanings: ['frozen', 'refrigerate'],
    meanings: ['frozen', 'refrigerate']
  },
  {
    id: 287,
    kanjiChar: '乳',
    onyomi: ['nyuu ニュウ'],
    kunyomi: ['chichi ちち', 'chi ち'],
    displayMeanings: ['milk', 'breasts'],
    fullDisplayMeanings: ['milk', 'breasts'],
    meanings: ['milk', 'breasts']
  },
  {
    id: 288,
    kanjiChar: '恋',
    onyomi: ['ren レン'],
    kunyomi: ['koi(shii) こい(しい)'],
    displayMeanings: ['romance', 'in love', 'yearn for', 'miss'],
    fullDisplayMeanings: ['romance', 'in love', 'yearn for', 'miss'],
    meanings: ['romance', 'in love', 'yearn for', 'miss']
  },
  {
    id: 289,
    kanjiChar: '紅',
    onyomi: ['kou コウ', 'ku ク'],
    kunyomi: ['beni べに', 'kurenai くれない'],
    displayMeanings: ['crimson', 'deep red'],
    fullDisplayMeanings: ['crimson', 'deep red'],
    meanings: ['crimson', 'deep red']
  },
  {
    id: 290,
    kanjiChar: '郊',
    onyomi: ['kou コウ'],
    kunyomi: [],
    displayMeanings: ['outskirts', 'suburbs', 'rural area'],
    fullDisplayMeanings: ['outskirts', 'suburbs', 'rural area'],
    meanings: ['outskirts', 'suburbs', 'rural area']
  },
  {
    id: 291,
    kanjiChar: '腰',
    onyomi: ['you ヨウ'],
    kunyomi: ['koshi こし'],
    displayMeanings: ['loins', 'hips', 'waist'],
    fullDisplayMeanings: ['loins', 'hips', 'waist'],
    meanings: ['loins', 'hips', 'waist']
  },
  {
    id: 292,
    kanjiChar: '炭',
    onyomi: ['tan タン'],
    kunyomi: ['sumi すみ'],
    displayMeanings: ['charcoal', 'coal'],
    fullDisplayMeanings: ['charcoal', 'coal'],
    meanings: ['charcoal', 'coal']
  },
  {
    id: 293,
    kanjiChar: '踊',
    onyomi: ['you ヨウ'],
    kunyomi: ['odo(ru) おど(る)'],
    displayMeanings: ['jump', 'dance', 'leap', 'skip'],
    fullDisplayMeanings: ['jump', 'dance', 'leap', 'skip'],
    meanings: ['jump', 'dance', 'leap', 'skip']
  },
  {
    id: 294,
    kanjiChar: '冊',
    onyomi: ['satsu サツ'],
    kunyomi: ['fumi ふみ'],
    displayMeanings: ['counter for books', 'volume'],
    fullDisplayMeanings: ['counter for books', 'volume'],
    meanings: ['counter for books', 'volume']
  },
  {
    id: 295,
    kanjiChar: '勇',
    onyomi: ['yuu ユウ'],
    kunyomi: ['isa(mu) いさ(む)'],
    displayMeanings: ['courage', 'cheer up', 'bravery', 'heroism'],
    fullDisplayMeanings: ['courage', 'cheer up', 'bravery', 'heroism'],
    meanings: ['courage', 'cheer up', 'bravery', 'heroism']
  },
  {
    id: 296,
    kanjiChar: '械',
    onyomi: ['kai カイ'],
    kunyomi: ['kase かせ'],
    displayMeanings: ['contraption', 'machine', 'instrument'],
    fullDisplayMeanings: ['contraption', 'machine', 'instrument'],
    meanings: ['contraption', 'machine', 'instrument']
  },
  {
    id: 297,
    kanjiChar: '菜',
    onyomi: ['sai サイ'],
    kunyomi: ['na な'],
    displayMeanings: ['vegetable', 'side dish', 'greens'],
    fullDisplayMeanings: ['vegetable', 'side dish', 'greens'],
    meanings: ['vegetable', 'side dish', 'greens']
  },
  {
    id: 298,
    kanjiChar: '珍',
    onyomi: ['chin チン'],
    kunyomi: ['mezura(shii) めずら(しい)'],
    displayMeanings: ['rare', 'curious', 'strange'],
    fullDisplayMeanings: ['rare', 'curious', 'strange'],
    meanings: ['rare', 'curious', 'strange']
  },
  {
    id: 299,
    kanjiChar: '卵',
    onyomi: ['ran ラン'],
    kunyomi: ['tamago たまご'],
    displayMeanings: ['egg'],
    fullDisplayMeanings: ['egg'],
    meanings: ['egg']
  },
  {
    id: 300,
    kanjiChar: '湖',
    onyomi: ['ko コ'],
    kunyomi: ['mizuumi みずうみ'],
    displayMeanings: ['lake'],
    fullDisplayMeanings: ['lake'],
    meanings: ['lake']
  },
  {
    id: 301,
    kanjiChar: '喫',
    onyomi: ['kitsu キツ'],
    kunyomi: ['no(mu) の(む)'],
    displayMeanings: ['consume', 'eat', 'drink', 'smoke', 'receive'],
    fullDisplayMeanings: ['consume', 'eat', 'drink', 'smoke', 'receive'],
    meanings: ['consume', 'eat', 'drink', 'smoke', 'receive']
  },
  {
    id: 302,
    kanjiChar: '干',
    onyomi: ['kan カン'],
    kunyomi: ['ho(su) ほ(す)', 'hi(ru) ひ(る)'],
    displayMeanings: ['dry', 'parch'],
    fullDisplayMeanings: ['dry', 'parch'],
    meanings: ['dry', 'parch']
  },
  {
    id: 303,
    kanjiChar: '虫',
    onyomi: ['chuu チュウ', 'ki キ'],
    kunyomi: ['mushi むし'],
    displayMeanings: ['insect', 'bug'],
    fullDisplayMeanings: ['insect', 'bug'],
    meanings: ['insect', 'bug']
  },
  {
    id: 304,
    kanjiChar: '刷',
    onyomi: ['satsu サツ'],
    kunyomi: ['su(ru) す(る)', 'ha(ku) は(く)'],
    displayMeanings: ['printing', 'print', 'brush'],
    fullDisplayMeanings: ['printing', 'print', 'brush'],
    meanings: ['printing', 'print', 'brush']
  },
  {
    id: 305,
    kanjiChar: '湯',
    onyomi: ['tou トウ'],
    kunyomi: ['yu ゆ'],
    displayMeanings: ['hot water', 'bath', 'hot spring'],
    fullDisplayMeanings: ['hot water', 'bath', 'hot spring'],
    meanings: ['hot water', 'bath', 'hot spring']
  },
  {
    id: 306,
    kanjiChar: '溶',
    onyomi: ['you ヨウ'],
    kunyomi: ['to(keru) と(ける)'],
    displayMeanings: ['melt', 'dissolve', 'thaw'],
    fullDisplayMeanings: ['melt', 'dissolve', 'thaw'],
    meanings: ['melt', 'dissolve', 'thaw']
  },
  {
    id: 307,
    kanjiChar: '鉱',
    onyomi: ['kou コウ'],
    kunyomi: ['aragane あらがね'],
    displayMeanings: ['mineral', 'ore'],
    fullDisplayMeanings: ['mineral', 'ore'],
    meanings: ['mineral', 'ore']
  },
  {
    id: 308,
    kanjiChar: '涙',
    onyomi: ['rui ルイ'],
    kunyomi: ['namida なみだ'],
    displayMeanings: ['tears', 'sympathy'],
    fullDisplayMeanings: ['tears', 'sympathy'],
    meanings: ['tears', 'sympathy']
  },
  {
    id: 309,
    kanjiChar: '匹',
    onyomi: ['hitsu ヒツ'],
    kunyomi: ['hiki ひき'],
    displayMeanings: ['counter for small animals'],
    fullDisplayMeanings: ['counter for small animals'],
    meanings: ['counter for small animals']
  },
  {
    id: 310,
    kanjiChar: '孫',
    onyomi: ['son ソン'],
    kunyomi: ['mago まご'],
    displayMeanings: ['grandchild', 'descendants'],
    fullDisplayMeanings: ['grandchild', 'descendants'],
    meanings: ['grandchild', 'descendants']
  },
  {
    id: 311,
    kanjiChar: '鋭',
    onyomi: ['ei エイ'],
    kunyomi: ['surudo(i) するど(い)'],
    displayMeanings: [
      'pointed',
      'sharpness',
      'edge',
      'weapon',
      'sharp',
      'violent'
    ],
    fullDisplayMeanings: [
      'pointed',
      'sharpness',
      'edge',
      'weapon',
      'sharp',
      'violent'
    ],
    meanings: ['pointed', 'sharpness', 'edge', 'weapon', 'sharp', 'violent']
  },
  {
    id: 312,
    kanjiChar: '枝',
    onyomi: ['shi シ'],
    kunyomi: ['eda えだ'],
    displayMeanings: [
      'bough',
      'branch',
      'twig',
      'limb',
      'counter for branches'
    ],
    fullDisplayMeanings: [
      'bough',
      'branch',
      'twig',
      'limb',
      'counter for branches'
    ],
    meanings: ['bough', 'branch', 'twig', 'limb', 'counter for branches']
  },
  {
    id: 313,
    kanjiChar: '塗',
    onyomi: ['to ト'],
    kunyomi: ['nu(ru) ぬ(る)', 'nu(ri) ぬ(り)'],
    displayMeanings: ['paint', 'smear', 'coating'],
    fullDisplayMeanings: ['paint', 'smear', 'coating'],
    meanings: ['paint', 'smear', 'coating']
  },
  {
    id: 314,
    kanjiChar: '軒',
    onyomi: ['ken ケン'],
    kunyomi: ['noki のき'],
    displayMeanings: ['flats', 'counter for houses'],
    fullDisplayMeanings: ['flats', 'counter for houses'],
    meanings: ['flats', 'counter for houses']
  },
  {
    id: 315,
    kanjiChar: '毒',
    onyomi: ['doku ドク'],
    kunyomi: [],
    displayMeanings: ['poison', 'germ', 'harm'],
    fullDisplayMeanings: ['poison', 'germ', 'harm'],
    meanings: ['poison', 'germ', 'harm']
  },
  {
    id: 316,
    kanjiChar: '叫',
    onyomi: ['kyou キョウ'],
    kunyomi: ['sake(bu) さけ(ぶ)'],
    displayMeanings: ['shout', 'exclaim', 'yell'],
    fullDisplayMeanings: ['shout', 'exclaim', 'yell'],
    meanings: ['shout', 'exclaim', 'yell']
  },
  {
    id: 317,
    kanjiChar: '拝',
    onyomi: ['hai ハイ'],
    kunyomi: ['oga(mu) おが(む)'],
    displayMeanings: ['worship', 'adore', 'pray to'],
    fullDisplayMeanings: ['worship', 'adore', 'pray to'],
    meanings: ['worship', 'adore', 'pray to']
  },
  {
    id: 318,
    kanjiChar: '氷',
    onyomi: ['hyou ヒョウ'],
    kunyomi: ['koori こおり', 'hi ひ'],
    displayMeanings: ['ice', 'hail', 'freeze'],
    fullDisplayMeanings: ['ice', 'hail', 'freeze'],
    meanings: ['ice', 'hail', 'freeze']
  },
  {
    id: 319,
    kanjiChar: '乾',
    onyomi: ['kan カン'],
    kunyomi: ['kawa(ku) かわ(く)'],
    displayMeanings: ['drought', 'dry', 'drink up', 'heaven'],
    fullDisplayMeanings: ['drought', 'dry', 'drink up', 'heaven'],
    meanings: ['drought', 'dry', 'drink up', 'heaven']
  },
  {
    id: 320,
    kanjiChar: '棒',
    onyomi: ['bou ボウ'],
    kunyomi: [],
    displayMeanings: ['rod', 'stick', 'cane', 'pole'],
    fullDisplayMeanings: ['rod', 'stick', 'cane', 'pole'],
    meanings: ['rod', 'stick', 'cane', 'pole']
  },
  {
    id: 321,
    kanjiChar: '祈',
    onyomi: ['ki キ'],
    kunyomi: ['ino(ru) いの(る)'],
    displayMeanings: ['pray', 'wish'],
    fullDisplayMeanings: ['pray', 'wish'],
    meanings: ['pray', 'wish']
  },
  {
    id: 322,
    kanjiChar: '拾',
    onyomi: ['shuu シュウ'],
    kunyomi: ['hiro(u) ひろ(う)'],
    displayMeanings: ['pick up', 'gather', 'find'],
    fullDisplayMeanings: ['pick up', 'gather', 'find'],
    meanings: ['pick up', 'gather', 'find']
  },
  {
    id: 323,
    kanjiChar: '粉',
    onyomi: ['fun フン'],
    kunyomi: ['ko こ', 'kona こな'],
    displayMeanings: ['flour', 'powder', 'dust'],
    fullDisplayMeanings: ['flour', 'powder', 'dust'],
    meanings: ['flour', 'powder', 'dust']
  },
  {
    id: 324,
    kanjiChar: '糸',
    onyomi: ['shi シ'],
    kunyomi: ['ito いと'],
    displayMeanings: ['thread'],
    fullDisplayMeanings: ['thread'],
    meanings: ['thread']
  },
  {
    id: 325,
    kanjiChar: '綿',
    onyomi: ['men メン'],
    kunyomi: ['wata わた'],
    displayMeanings: ['cotton'],
    fullDisplayMeanings: ['cotton'],
    meanings: ['cotton']
  },
  {
    id: 326,
    kanjiChar: '汗',
    onyomi: ['kan カン'],
    kunyomi: ['ase あせ'],
    displayMeanings: ['sweat', 'perspire'],
    fullDisplayMeanings: ['sweat', 'perspire'],
    meanings: ['sweat', 'perspire']
  },
  {
    id: 327,
    kanjiChar: '銅',
    onyomi: ['dou ドウ'],
    kunyomi: ['akagane あかがね'],
    displayMeanings: ['copper'],
    fullDisplayMeanings: ['copper'],
    meanings: ['copper']
  },
  {
    id: 328,
    kanjiChar: '湿',
    onyomi: ['shitsu シツ'],
    kunyomi: ['shime(ru) しめ(る)'],
    displayMeanings: ['damp', 'wet', 'moist'],
    fullDisplayMeanings: ['damp', 'wet', 'moist'],
    meanings: ['damp', 'wet', 'moist']
  },
  {
    id: 329,
    kanjiChar: '瓶',
    onyomi: ['bin ビン'],
    kunyomi: ['kame かめ', 'hei へい'],
    displayMeanings: ['bottle', 'jar', 'jug', 'urn'],
    fullDisplayMeanings: ['bottle', 'jar', 'jug', 'urn'],
    meanings: ['bottle', 'jar', 'jug', 'urn']
  },
  {
    id: 330,
    kanjiChar: '咲',
    onyomi: ['shou ショウ'],
    kunyomi: ['sa(ku) さ(く)'],
    displayMeanings: ['blossom', 'bloom'],
    fullDisplayMeanings: ['blossom', 'bloom'],
    meanings: ['blossom', 'bloom']
  },
  {
    id: 331,
    kanjiChar: '召',
    onyomi: ['shou ショウ'],
    kunyomi: ['me(su) め(す)'],
    displayMeanings: ['call', 'send for', 'wear', 'buy', 'to eat', 'to drink'],
    fullDisplayMeanings: [
      'call',
      'send for',
      'wear',
      'buy',
      'to eat',
      'to drink'
    ],
    meanings: ['call', 'send for', 'wear', 'buy', 'to eat', 'to drink']
  },
  {
    id: 332,
    kanjiChar: '缶',
    onyomi: ['kan カン'],
    kunyomi: ['kama かま'],
    displayMeanings: ['tin can', 'container'],
    fullDisplayMeanings: ['tin can', 'container'],
    meanings: ['tin can', 'container']
  },
  {
    id: 333,
    kanjiChar: '隻',
    onyomi: ['seki セキ'],
    kunyomi: [],
    displayMeanings: ['vessels', 'counter for ships', 'fish', 'one of a pair'],
    fullDisplayMeanings: [
      'vessels',
      'counter for ships',
      'fish',
      'one of a pair'
    ],
    meanings: ['vessels', 'counter for ships', 'fish', 'one of a pair']
  },
  {
    id: 334,
    kanjiChar: '脂',
    onyomi: ['shi シ'],
    kunyomi: ['abura あぶら'],
    displayMeanings: ['fat', 'grease', 'lard'],
    fullDisplayMeanings: ['fat', 'grease', 'lard'],
    meanings: ['fat', 'grease', 'lard']
  },
  {
    id: 335,
    kanjiChar: '蒸',
    onyomi: ['jou ジョウ', 'sei セイ'],
    kunyomi: ['mu(su) む(す)'],
    displayMeanings: ['steam', 'heat', 'foment'],
    fullDisplayMeanings: ['steam', 'heat', 'foment'],
    meanings: ['steam', 'heat', 'foment']
  },
  {
    id: 336,
    kanjiChar: '肌',
    onyomi: ['ki キ'],
    kunyomi: ['hada はだ'],
    displayMeanings: ['texture', 'skin', 'body', 'grain'],
    fullDisplayMeanings: ['texture', 'skin', 'body', 'grain'],
    meanings: ['texture', 'skin', 'body', 'grain']
  },
  {
    id: 337,
    kanjiChar: '耕',
    onyomi: ['kou コウ'],
    kunyomi: ['tagaya(su) たがや(す)'],
    displayMeanings: ['till', 'plow', 'cultivate'],
    fullDisplayMeanings: ['till', 'plow', 'cultivate'],
    meanings: ['till', 'plow', 'cultivate']
  },
  {
    id: 338,
    kanjiChar: '鈍',
    onyomi: ['don ドン'],
    kunyomi: ['nibu(i) にぶ(い)', 'namaku(ra) なまく(ら)'],
    displayMeanings: ['dull', 'slow', 'foolish', 'blunt'],
    fullDisplayMeanings: ['dull', 'slow', 'foolish', 'blunt'],
    meanings: ['dull', 'slow', 'foolish', 'blunt']
  },
  {
    id: 339,
    kanjiChar: '泥',
    onyomi: ['dei デイ'],
    kunyomi: ['doro どろ'],
    displayMeanings: ['mud', 'adhere to', 'be attached to'],
    fullDisplayMeanings: ['mud', 'adhere to', 'be attached to'],
    meanings: ['mud', 'adhere to', 'be attached to']
  },
  {
    id: 340,
    kanjiChar: '隅',
    onyomi: ['guu グウ'],
    kunyomi: ['sumi すみ'],
    displayMeanings: ['corner', 'nook'],
    fullDisplayMeanings: ['corner', 'nook'],
    meanings: ['corner', 'nook']
  },
  {
    id: 341,
    kanjiChar: '灯',
    onyomi: ['tou トウ'],
    kunyomi: ['hi ひ', 'tomo(su) とも(す)'],
    displayMeanings: ['lamp', 'a light', 'counter for lights'],
    fullDisplayMeanings: ['lamp', 'a light', 'counter for lights'],
    meanings: ['lamp', 'a light', 'counter for lights']
  },
  {
    id: 342,
    kanjiChar: '辛',
    onyomi: ['shin シン'],
    kunyomi: ['kara(i) から(い)', 'tsura(i) つら(い)'],
    displayMeanings: ['spicy', 'hot'],
    fullDisplayMeanings: ['spicy', 'hot'],
    meanings: ['spicy', 'hot']
  },
  {
    id: 343,
    kanjiChar: '磨',
    onyomi: ['ma マ'],
    kunyomi: ['miga(ku) みが(く)'],
    displayMeanings: ['grind', 'polish', 'improve', 'brush (teeth)'],
    fullDisplayMeanings: ['grind', 'polish', 'improve', 'brush (teeth)'],
    meanings: ['grind', 'polish', 'improve', 'brush (teeth)']
  },
  {
    id: 344,
    kanjiChar: '麦',
    onyomi: ['baku バク'],
    kunyomi: ['mugi むぎ'],
    displayMeanings: ['barley', 'wheat'],
    fullDisplayMeanings: ['barley', 'wheat'],
    meanings: ['barley', 'wheat']
  },
  {
    id: 345,
    kanjiChar: '姓',
    onyomi: ['sei セイ', 'shou ショウ'],
    kunyomi: [],
    displayMeanings: ['surname'],
    fullDisplayMeanings: ['surname'],
    meanings: ['surname']
  },
  {
    id: 346,
    kanjiChar: '筒',
    onyomi: ['tou トウ'],
    kunyomi: ['tsutsu つつ'],
    displayMeanings: ['cylinder', 'pipe', 'tube'],
    fullDisplayMeanings: ['cylinder', 'pipe', 'tube'],
    meanings: ['cylinder', 'pipe', 'tube']
  },
  {
    id: 347,
    kanjiChar: '鼻',
    onyomi: ['bi ビ'],
    kunyomi: ['hana はな'],
    displayMeanings: ['nose', 'snout'],
    fullDisplayMeanings: ['nose', 'snout'],
    meanings: ['nose', 'snout']
  },
  {
    id: 348,
    kanjiChar: '粒',
    onyomi: ['ryuu リュウ'],
    kunyomi: ['tsubu つぶ'],
    displayMeanings: ['grains', 'drop', 'counter for tiny particles'],
    fullDisplayMeanings: ['grains', 'drop', 'counter for tiny particles'],
    meanings: ['grains', 'drop', 'counter for tiny particles']
  },
  {
    id: 349,
    kanjiChar: '詞',
    onyomi: ['shi シ'],
    kunyomi: ['kotoba ことば'],
    displayMeanings: ['part of speech', 'words'],
    fullDisplayMeanings: ['part of speech', 'words'],
    meanings: ['part of speech', 'words']
  },
  {
    id: 350,
    kanjiChar: '胃',
    onyomi: ['i イ'],
    kunyomi: [],
    displayMeanings: ['stomach', 'crop'],
    fullDisplayMeanings: ['stomach', 'crop'],
    meanings: ['stomach', 'crop']
  },
  {
    id: 351,
    kanjiChar: '畳',
    onyomi: ['jou ジョウ', 'chou チョウ'],
    kunyomi: ['tatami たたみ'],
    displayMeanings: ['tatami mat', 'fold'],
    fullDisplayMeanings: ['tatami mat', 'fold'],
    meanings: ['tatami mat', 'fold']
  },
  {
    id: 352,
    kanjiChar: '机',
    onyomi: ['ki キ'],
    kunyomi: ['tsukue つくえ'],
    displayMeanings: ['desk', 'table'],
    fullDisplayMeanings: ['desk', 'table'],
    meanings: ['desk', 'table']
  },
  {
    id: 353,
    kanjiChar: '膚',
    onyomi: ['fu フ'],
    kunyomi: ['hada はだ'],
    displayMeanings: ['skin', 'body', 'texture'],
    fullDisplayMeanings: ['skin', 'body', 'texture'],
    meanings: ['skin', 'body', 'texture']
  },
  {
    id: 354,
    kanjiChar: '濯',
    onyomi: ['taku タク'],
    kunyomi: ['susu(gu) すす(ぐ)'],
    displayMeanings: ['laundry', 'wash', 'rinse'],
    fullDisplayMeanings: ['laundry', 'wash', 'rinse'],
    meanings: ['laundry', 'wash', 'rinse']
  },
  {
    id: 355,
    kanjiChar: '塔',
    onyomi: ['tou トウ'],
    kunyomi: [],
    displayMeanings: ['pagoda', 'tower', 'steeple'],
    fullDisplayMeanings: ['pagoda', 'tower', 'steeple'],
    meanings: ['pagoda', 'tower', 'steeple']
  },
  {
    id: 356,
    kanjiChar: '沸',
    onyomi: ['futsu フツ'],
    kunyomi: ['wa(ku) わ(く)'],
    displayMeanings: ['seethe', 'boil', 'ferment'],
    fullDisplayMeanings: ['seethe', 'boil', 'ferment'],
    meanings: ['seethe', 'boil', 'ferment']
  },
  {
    id: 357,
    kanjiChar: '灰',
    onyomi: ['kai カイ'],
    kunyomi: ['hai はい'],
    displayMeanings: ['ashes', 'cremate'],
    fullDisplayMeanings: ['ashes', 'cremate'],
    meanings: ['ashes', 'cremate']
  },
  {
    id: 358,
    kanjiChar: '菓',
    onyomi: ['ka カ'],
    kunyomi: [],
    displayMeanings: ['candy', 'cakes', 'fruit'],
    fullDisplayMeanings: ['candy', 'cakes', 'fruit'],
    meanings: ['candy', 'cakes', 'fruit']
  },
  {
    id: 359,
    kanjiChar: '帽',
    onyomi: ['bou ボウ'],
    kunyomi: ['ずきん', 'おお(う)'],
    displayMeanings: ['cap', 'headgear'],
    fullDisplayMeanings: ['cap', 'headgear'],
    meanings: ['cap', 'headgear']
  },
  {
    id: 360,
    kanjiChar: '枯',
    onyomi: ['ko コ'],
    kunyomi: ['ka(reru) か(れる)'],
    displayMeanings: ['wither', 'die', 'dry up', 'be seasoned'],
    fullDisplayMeanings: ['wither', 'die', 'dry up', 'be seasoned'],
    meanings: ['wither', 'die', 'dry up', 'be seasoned']
  },
  {
    id: 361,
    kanjiChar: '涼',
    onyomi: ['ryou リョウ'],
    kunyomi: ['suzu(shii) すず(しい)'],
    displayMeanings: ['refreshing', 'nice and cool'],
    fullDisplayMeanings: ['refreshing', 'nice and cool'],
    meanings: ['refreshing', 'nice and cool']
  },
  {
    id: 362,
    kanjiChar: '舟',
    onyomi: ['shuu シュウ'],
    kunyomi: ['fune ふね'],
    displayMeanings: ['boat', 'ship'],
    fullDisplayMeanings: ['boat', 'ship'],
    meanings: ['boat', 'ship']
  },
  {
    id: 363,
    kanjiChar: '貝',
    onyomi: ['bai バイ'],
    kunyomi: ['kai かい'],
    displayMeanings: ['shellfish'],
    fullDisplayMeanings: ['shellfish'],
    meanings: ['shellfish']
  },
  {
    id: 364,
    kanjiChar: '符',
    onyomi: ['fu フ'],
    kunyomi: [],
    displayMeanings: ['token', 'sign', 'mark'],
    fullDisplayMeanings: ['token', 'sign', 'mark'],
    meanings: ['token', 'sign', 'mark']
  },
  {
    id: 365,
    kanjiChar: '憎',
    onyomi: ['zou ゾウ'],
    kunyomi: ['niku(mu) にく(む)'],
    displayMeanings: ['hate', 'detest'],
    fullDisplayMeanings: ['hate', 'detest'],
    meanings: ['hate', 'detest']
  },
  {
    id: 366,
    kanjiChar: '皿',
    onyomi: ['bei ベイ'],
    kunyomi: ['sara さら', 'zara ざら'],
    displayMeanings: ['dish', 'a helping', 'plate'],
    fullDisplayMeanings: ['dish', 'a helping', 'plate'],
    meanings: ['dish', 'a helping', 'plate']
  },
  {
    id: 367,
    kanjiChar: '肯',
    onyomi: ['kou コウ'],
    kunyomi: ['gaenji(ru) がえんじ(る)'],
    displayMeanings: ['agreement', 'consent', 'comply with'],
    fullDisplayMeanings: ['agreement', 'consent', 'comply with'],
    meanings: ['agreement', 'consent', 'comply with']
  },
  {
    id: 368,
    kanjiChar: '燥',
    onyomi: ['sou ソウ'],
    kunyomi: ['hasha(gu) はしゃ(ぐ)'],
    displayMeanings: ['parch', 'dry up'],
    fullDisplayMeanings: ['parch', 'dry up'],
    meanings: ['parch', 'dry up']
  },
  {
    id: 369,
    kanjiChar: '畜',
    onyomi: ['chiku チク'],
    kunyomi: [],
    displayMeanings: ['livestock', 'domestic fowl and animals'],
    fullDisplayMeanings: ['livestock', 'domestic fowl and animals'],
    meanings: ['livestock', 'domestic fowl and animals']
  },
  {
    id: 370,
    kanjiChar: '坊',
    onyomi: ['bou ボウ', 'bo ボッ'],
    kunyomi: [],
    displayMeanings: ['boy', 'priest'],
    fullDisplayMeanings: ['boy', 'priest'],
    meanings: ['boy', 'priest']
  },
  {
    id: 371,
    kanjiChar: '挟',
    onyomi: ['kyou キョウ'],
    kunyomi: ['hasa(mu) はさ(む)'],
    displayMeanings: ['pinch', 'between'],
    fullDisplayMeanings: ['pinch', 'between'],
    meanings: ['pinch', 'between']
  },
  {
    id: 372,
    kanjiChar: '曇',
    onyomi: ['don ドン'],
    kunyomi: ['kumo(ru) くも(る)'],
    displayMeanings: ['cloudy weather'],
    fullDisplayMeanings: ['cloudy weather'],
    meanings: ['cloudy weather']
  },
  {
    id: 373,
    kanjiChar: '滴',
    onyomi: ['teki テキ'],
    kunyomi: ['shizuku しずく', 'shitata(ru) したた(る)'],
    displayMeanings: ['drip', 'drop'],
    fullDisplayMeanings: ['drip', 'drop'],
    meanings: ['drip', 'drop']
  },
  {
    id: 374,
    kanjiChar: '伺',
    onyomi: ['shi シ'],
    kunyomi: ['ukaga(u) うかが(う)'],
    displayMeanings: ['visit', 'ask', 'inquire', 'question'],
    fullDisplayMeanings: ['visit', 'ask', 'inquire', 'question'],
    meanings: ['visit', 'ask', 'inquire', 'question']
  }
];
export default N2;
