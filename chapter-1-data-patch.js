// 第1章「インターネットの基礎」数据补丁文件。
// 资料来源：ibut第一章.text（原始来源）

const chapter1StudySections = [
  {
    id: "sec-1-1",
    chapter: "第1章 インターネットの基礎",
    title: "インターネットとは何か",
    category: "基礎",
    goal: "理解インターネット的定义，以及它与Web、邮件、SNS的关系。",
    jpKeywords: ["インターネット", "World Wide Web", "Web", "ネットワーク"],
    explanation: "インターネット是把世界各地的计算机、网络设备相互连接起来的世界规模网络。互联网不仅是网页，还包括邮件、SNS、网上购物、云服务等多种服务。Web（万维网）是互联网中的一种服务，不是互联网本身。",
    scenario: "用手机上网看新闻，手机通过 プロバイダ 连接到 互联网，然后可以访问 Web、收发邮件、使用 SNS。",
    examHints: ["世界中", "相互に接続", "世界規模のネットワーク", "Webとの違い"],
    confusion: "インターネット是整体网络基础设施，Web只是其中一种服务。メールやSNSもインターネットの一部。",
    summary: "インターネットは世界中のネットワーク、Webはその中の一サービス"
  },
  {
    id: "sec-1-2",
    chapter: "第1章 インターネットの基礎",
    title: "インターネットの基本的な構造",
    category: "基礎",
    goal: "理解クライアントとサーバ、IPアドレス、ドメイン名、DNS、プロバイダ的关系。",
    jpKeywords: ["クライアント", "サーバ", "IPアドレス", "ドメイン名", "DNS", "プロバイダ", "ブラウザ", "URL"],
    explanation: "互联网使用クライアントサーバ方式：客户端请求服务，服务器提供响应。IPアドレス是网络上的地址，ドメイン名是人类易记的名字，DNS把域名转换成IP地址。プロバイダ是互联网接入服务商。",
    scenario: "在浏览器输入 www.example.com，浏览器先问DNS把域名转换成IP，然后连接Web服务器获取页面并显示。",
    examHints: ["サービスを提供する側", "サービスを利用する側", "ドメイン名をIPに変換", "接続サービス業者", "Webページの住所"],
    confusion: "サーバ是提供服务，クライアント是使用服务。DNS只负责翻译地址，不保存网页内容。",
    summary: "提供するのはサーバ、利用するのはクライアント、ドメインはIPに変換、DNSが変換、プロバイダが接続"
  },
  {
    id: "sec-1-3",
    chapter: "第1章 インターネットの基礎",
    title: "インターネットがもたらす便利なサービス",
    category: "基礎",
    goal: "理解互联网可以提供的各种服务：信息收集、通信、信息发布、购物、金融、学习、娱乐。",
    jpKeywords: ["情報収集", "電子メール", "SNS", "ブログ", "ネットショッピング", "ネットバンキング", "クラウドサービス", "eラーニング"],
    explanation: "互联网让人们可以：快速收集信息（Web搜索）、远距离通信（邮件/SNS/视频通话）、发布信息（博客/SNS/视频）、网上购物（网购/拍卖）、网上银行（转账/查询）、云服务存储、在线学习。",
    scenario: "用搜索引擎查天气、通过邮件联系朋友、在SNS发布动态、网购衣服、使用网上银行转账、存储照片到云端。",
    examHints: ["情報を調べる", "遠くの人と連絡", "自分の考えを公開", "商品を買う", "銀行取引", "データを保存・共有", "オンラインで学ぶ"],
    confusion: "这些服务给生活带来便利，但使用时要意识到风险（个人信息、诈骗、错误信息）。",
    summary: "調べて・連絡して・購入して・発信して・保存して・学ぶ、これがインターネットでできること"
  },
  {
    id: "sec-1-4",
    chapter: "第1章 インターネットの基礎",
    title: "インターネットの影響力",
    category: "基礎",
    goal: "理解互联网对社会和个人产生的影响——既有好的影响也有坏的影响。",
    jpKeywords: ["影響力", "情報拡散", "デマ", "個人情報流出", "誹謗中傷", "ネット依存", "セキュリティ"],
    explanation: "互联网的影响是双面的。好的影响：信息快速传播、灾害时应急通信、任何人可以发声、商业和学习更便利。坏的影响：错误信息和谣言也会快速扩散、个人信息泄露、网上诽谤中伤、网络依赖和健康问题、成为诈骗和犯罪的目标。",
    scenario: "灾害时人们通过SNS分享救援信息是好影响；同一平台上谣言扩散造成恐慌是坏影响。使用互联网时要理解这两面性。",
    examHints: ["情報が速く広がる", "誤情報が広がる", "匿名で誹謗中傷", "個人情報が漏れる", "ネット依存", "便利さと危险性"],
    confusion: "互联网不是只有便利，也不是只有危险。要理解它的双面性，并采取适当的对策。",
    summary: "情報は速いがデマも速い、便利だが危険もある、利用には責任と注意が必要"
  }
];

const chapter1Terms = [
  { id: "term-1-internet", sectionId: "sec-1-1", chapter: "第1章 インターネットの基礎", jp: "インターネット", reading: "インターネット", zh: "互联网", en: "Internet", hint: "世界中のネットワーク" },
  { id: "term-1-network", sectionId: "sec-1-1", chapter: "第1章 インターネットの基礎", jp: "ネットワーク", reading: "ネットワーク", zh: "网络", en: "network", hint: "计算机の连接" },
  { id: "term-1-web", sectionId: "sec-1-1", chapter: "第1章 インターネットの基礎", jp: "Web", reading: "ウェブ", zh: "万维网", en: "World Wide Web", hint: "Webページを見る仕組み" },
  { id: "term-1-www", sectionId: "sec-1-1", chapter: "第1章 インターネットの基礎", jp: "WWW", reading: "ダブリューダブリューダブリュー", zh: "万维网", en: "World Wide Web", hint: "Webの正式名称" },
  { id: "term-1-browser", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "ブラウザ", reading: "ブラウザ", zh: "浏览器", en: "browser", hint: "Webページを閲覧するソフト" },
  { id: "term-1-url", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "URL", reading: "ユーアーエル", zh: "网址", en: "Uniform Resource Locator", hint: "Webページの住所" },
  { id: "term-1-server", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "サーバ", reading: "サーバ", zh: "服务器", en: "server", hint: "サービスを提供する側" },
  { id: "term-1-client", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "クライアント", reading: "クライアント", zh: "客户端", en: "client", hint: "サービスを利用する側" },
  { id: "term-1-ip", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "IPアドレス", reading: "アイピーアドレス", zh: "IP地址", en: "IP address", hint: "ネットワーク上の住所" },
  { id: "term-1-domain", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "ドメイン名", reading: "ドメインめい", zh: "域名", en: "domain name", hint: "人が覚えやすい名前" },
  { id: "term-1-dns", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "DNS", reading: "ディーエヌエス", zh: "域名系统", en: "Domain Name System", hint: "ドメイン名をIPに変換" },
  { id: "term-1-provider", sectionId: "sec-1-2", chapter: "第1章 インターネットの基礎", jp: "プロバイダ", reading: "プロバイダ", zh: "网络接入服务商", en: "Internet service provider", hint: "インターネット接続サービス業者" },
  { id: "term-1-email", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "電子メール", reading: "でんしメール", zh: "电子邮件", en: "email", hint: "遠くの人と文字で連絡" },
  { id: "term-1-sns", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "SNS", reading: "エスエヌエス", zh: "社交网络服务", en: "social networking service", hint: "交流・投稿のプラットフォーム" },
  { id: "term-1-shopping", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "ネットショッピング", reading: "ネットショッピング", zh: "网络购物", en: "online shopping", hint: "商品を購入" },
  { id: "term-1-banking", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "ネットバンキング", reading: "ネットバンキング", zh: "网上银行", en: "online banking", hint: "銀行取引・振込" },
  { id: "term-1-cloud", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "クラウドサービス", reading: "クラウドサービス", zh: "云服务", en: "cloud service", hint: "データを保存・共有" },
  { id: "term-1-blog", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "ブログ", reading: "ブログ", zh: "博客", en: "blog", hint: "日記・情報を公開" },
  { id: "term-1-elearning", sectionId: "sec-1-3", chapter: "第1章 インターネットの基礎", jp: "eラーング", reading: "イーラーニング", zh: "在线学习", en: "e-learning", hint: "オンラインで学ぶ" },
  { id: "term-1-rumor", sectionId: "sec-1-4", chapter: "第1章 インターネットの基礎", jp: "デマ", reading: "デマ", zh: "谣言", en: "false rumor", hint: "誤った情報・拡散" },
  { id: "term-1-personal-info", sectionId: "sec-1-4", chapter: "第1章 インターネットの基礎", jp: "個人情報", reading: "こじんじょうほう", zh: "个人信息", en: "personal information", hint: "住所・名前・写真など" },
  { id: "term-1-defamation", sectionId: "sec-1-4", chapter: "第1章 インターネットの基礎", jp: "誹謗中傷", reading: "ひぼうちゅうしょう", zh: "诽谤中伤", en: "defamation", hint: "悪口・攻撃的な投稿" },
  { id: "term-1-dependence", sectionId: "sec-1-4", chapter: "第1章 インターネットの基礎", jp: "ネット依存", reading: "ネットいそん", zh: "网络依赖", en: "internet addiction", hint: "使いすぎ・やめられない" }
];

const chapter1ExamHints = [
  { id: "hint-1-001", chapter: "第1章 インターネットの基礎", keyword: "世界中のネットワーク", answer: "インターネット", note: "互联网是连接全世界计算机和网络的大网络。" },
  { id: "hint-1-002", chapter: "第1章 インターネットの基礎", keyword: "Webとの違い", answer: "インターネット ≠ Web", note: "Internet是整体，Web是其中一种服务。" },
  { id: "hint-1-003", chapter: "第1章 インターネットの基礎", keyword: "サービスを提供する側", answer: "サーバ", note: "服务器提供网页、邮件、文件等服务。" },
  { id: "hint-1-004", chapter: "第1章 インターネットの基礎", keyword: "サービスを利用する側", answer: "クライアント", note: "客户端是手机、电脑、浏览器等使用服务的一方。" },
  { id: "hint-1-005", chapter: "第1章 インターネットの基礎", keyword: "ネットワーク上の住所", answer: "IPアドレス", note: "IP地址是网络设备的数字标识。" },
  { id: "hint-1-006", chapter: "第1章 インターネットの基礎", keyword: "人が覚えやすい名前", answer: "ドメイン名", note: "域名是人类易记的网站名称，如example.com。" },
  { id: "hint-1-007", chapter: "第1章 インターネットの基礎", keyword: "ドメイン名をIPアドレスに変換", answer: "DNS", note: "DNS负责把域名翻译成IP地址。" },
  { id: "hint-1-008", chapter: "第1章 インターネットの基礎", keyword: "インターネット接続サービス業者", answer: "プロバイダ", note: "PROVIDER是提供网络接入服务的公司。" },
  { id: "hint-1-009", chapter: "第1章 インターネットの基礎", keyword: "Webページを見るソフト", answer: "ブラウザ", note: "浏览器是用于显示网页的软件。" },
  { id: "hint-1-010", chapter: "第1章 インターネットの基礎", keyword: "Webページの住所", answer: "URL", note: "URL是网页在网络上的地址。" },
  { id: "hint-1-011", chapter: "第1章 インターネットの基礎", keyword: "情報を調べる", answer: "Web検索", note: "搜索信息是互联网的主要用途之一。" },
  { id: "hint-1-012", chapter: "第1章 インターネットの基礎", keyword: "遠くの人と連絡", answer: "メール・SNS", note: "邮件和SNS是互联网通信服务。" },
  { id: "hint-1-013", chapter: "第1章 インターネットの基礎", keyword: "自分の考えを公開", answer: "ブログ・SNS投稿", note: "发布信息是互联网的重要功能。" },
  { id: "hint-1-014", chapter: "第1章 インターネットの基礎", keyword: "商品を買う", answer: "ネットショッピング", note: "网购是互联网的商业服务。" },
  { id: "hint-1-015", chapter: "第1章 インターネットの基礎", keyword: "銀行取引", answer: "ネットバンキング", note: "网上银行用于转账和查询余额。" },
  { id: "hint-1-016", chapter: "第1章 インターネットの基礎", keyword: "データを保存・共有", answer: "クラウドサービス", note: "云服务可以存储和共享数据。" },
  { id: "hint-1-017", chapter: "第1章 インターネットの基礎", keyword: "情報が速く広がる", answer: "インターネットの影響力", note: "互联网可以让信息快速传播。" },
  { id: "hint-1-018", chapter: "第1章 インターネットの基礎", keyword: "誤情報が広がる", answer: "デマの拡散", note: "错误信息也会随互联网快速扩散。" },
  { id: "hint-1-019", chapter: "第1章 インターネットの基礎", keyword: "匿名で誹謗中傷", answer: "悪い影響", note: "匿名性可能导致诽谤中伤。" },
  { id: "hint-1-020", chapter: "第1章 インターネットの基礎", keyword: "便利さと危险性", answer: "両方理解する", note: "使用互联网要理解便利性和风险。" }
];

const chapter1Quizzes = [
  { id: "quiz-1-001", chapter: "第1章 インターネットの基礎", question: "世界中のコンピュータやネットワークを相互に接続した世界規模のネットワークを何というか。", answer: "インターネット", explanation: "题眼是 世界中、ネットワーク、相互接続。互联网是全球互联的网络。", hint: "世界中・ネットワーク・相互接続" },
  { id: "quiz-1-002", chapter: "第1章 インターネットの基礎", question: "インターネットとWebの関係として正しいものはどれか。", answer: "Webはインターネット上で利用できるサービスの一つである。", explanation: "互联网是整体基础设施，Web只是其中的一种服务（浏览网页）。", hint: "Webはサービスの一つ" },
  { id: "quiz-1-003", chapter: "第1章 インターネットの基礎", question: "Webページを見るために使うソフトウェアは何か。", answer: "ブラウザ", explanation: "Chrome、Safari、Edge等都是浏览器，用于显示网页内容。", hint: "Webページを表示するソフト" },
  { id: "quiz-1-004", chapter: "第1章 インターネットの基礎", question: "Webページの住所を表すものは何か。", answer: "URL", explanation: "URL是网页在互联网上的地址，如https://example.com。", hint: "Webページの住所" },
  { id: "quiz-1-005", chapter: "第1章 インターネットの基礎", question: "サービスを提供する側のコンピュータを何というか。", answer: "サーバ", explanation: "服务器保存网页、数据等信息，并响应客户端的请求。", hint: "サービスを提供する側" },
  { id: "quiz-1-006", chapter: "第1章 インターネットの基礎", question: "サービスを利用する側の端末やソフトを何というか。", answer: "クライアント", explanation: "客户端是手机、电脑、浏览器等，使用服务器提供的服务。", hint: "サービスを利用する側" },
  { id: "quiz-1-007", chapter: "第1章 インターネットの基礎", question: "ネットワーク上の機器を識別する住所のような番号は何か。", answer: "IPアドレス", explanation: "IP地址是分配给网络设备的数字标识，如192.168.1.1。", hint: "ネットワーク上の住所" },
  { id: "quiz-1-008", chapter: "第1章 インターネットの基礎", question: "ドメイン名をIPアドレスに変換する仕組みは何か。", answer: "DNS", explanation: "DNS（Domain Name System）负责把人类易记的域名转换为电脑可识别的IP地址。", hint: "ドメイン名をIPに変換" },
  { id: "quiz-1-009", chapter: "第1章 インターネットの基礎", question: "インターネット接続サービス業者を何というか。", answer: "プロバイダ", explanation: "PROVIDER是提供网络接入服务的公司，如宽带公司、手机运营商。", hint: "接続サービス業者" },
  { id: "quiz-1-010", chapter: "第1章 インターネットの基礎", question: "インターネットを利用して遠くの人と文字や画像で連絡する例として適切なものはどれか。", answer: "電子メールやSNS", explanation: "邮件和SNS是互联网的通信服务，可以远距离传递文字、图片等信息。", hint: "遠くの人と連絡" },
  { id: "quiz-1-011", chapter: "第1章 インターネットの基礎", question: "インターネットで商品を購入するサービスは何か。", answer: "ネットショッピング", explanation: "网购是互联网的商业服务，可以在家购买各种商品。", hint: "商品を購入" },
  { id: "quiz-1-012", chapter: "第1章 インターネットの基礎", question: "インターネットを利用して残高照会や振込を行うサービスは何か。", answer: "ネットバンキング", explanation: "网上银行用于查询余额、转账等银行交易。", hint: "銀行取引・コラー・振込" },
  { id: "quiz-1-013", chapter: "第1章 インターネットの基礎", question: "インターネットの好的影响として適切なものはどれか。", answer: "情報をすばやく入手・発信できる。", explanation: "互联网可以让信息快速获取和传播，这是其正面影响。", hint: "情報入手・発信が速くなる" },
  { id: "quiz-1-014", chapter: "第1章 インターネットの基礎", question: "インターネットの不好的影响として適切なものはどれか。", answer: "誤情報や個人情報が広がる危険がある。", explanation: "互联网的风险包括错误信息扩散和个人信息泄露。", hint: "誤情報・個人情報流出" },
  { id: "quiz-1-015", chapter: "第1章 インターネットの基礎", question: "互联网利用时的基本心态として適切なものはどれか。", answer: "便利さだけでなく危険性も理解し、情報や個人情報の扱いに注意する。", explanation: "使用互联网要理解双面性，既要利用便利性，也要注意安全。", hint: "便利さと危险性の両方理解" }
];