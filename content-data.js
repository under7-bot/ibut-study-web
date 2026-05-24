// iBut考试对策学习网页的数据文件
// 本文件只保存学习内容，不写页面逻辑。

const studySections = [
  {
    "id": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "title": "インターネットとは何か",
    "category": "基礎",
    "goal": "理解インターネット的定义，以及它与Web、邮件、SNS的关系。",
    "jpKeywords": ["インターネット", "World Wide Web", "Web", "ネットワーク"],
    "explanation": "インターネット是把世界各地的计算机、网络设备相互连接起来的世界规模网络。互联网不仅是网页，还包括邮件、SNS、网上购物、云服务等多种服务。Web（万维网）是互联网中的一种服务，不是互联网本身。",
    "scenario": "用手机上网看新闻，手机通过 プロバイダ 连接到 互联网，然后可以访问 Web、收发邮件、使用 SNS。",
    "examHints": ["世界中", "相互に接続", "世界規模のネットワーク", "Webとの違い"],
    "confusion": "インターネット是整体网络基础设施，Web只是其中一种服务。メールやSNSもインターネットの一部。",
    "summary": "インターネットは世界中のネットワーク、Webはその中の一サービス"
  },
  {
    "id": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "title": "インターネットの基本的な構造",
    "category": "基礎",
    "goal": "理解クライアントとサーバ、IPアドレス、ドメイン名、DNS、プロバイダ的关系。",
    "jpKeywords": ["クライアント", "サーバ", "IPアドレス", "ドメイン名", "DNS", "プロバイダ", "ブラウザ", "URL"],
    "explanation": "互联网使用クライアントサーバ方式：客户端请求服务，服务器提供响应。IPアドレス是网络上的地址，ドメイン名是人类易记的名字，DNS把域名转换成IP地址。プロバイダ是互联网接入服务商。",
    "scenario": "在浏览器输入 www.example.com，浏览器先问DNS把域名转换成IP，然后连接Web服务器获取页面并显示。",
    "examHints": ["サービスを提供する側", "サービスを利用する側", "ドメイン名をIPに変換", "接続サービス業者", "Webページの住所"],
    "confusion": "サーバ是提供服务，クライアント是使用服务。DNS只负责翻译地址，不保存网页内容。",
    "summary": "提供するのはサーバ、利用するのはクライアント、ドメインはIPに変換、DNSが変換、プロバイダが接続"
  },
  {
    "id": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "title": "インターネットがもたらす便利なサービス",
    "category": "基礎",
    "goal": "理解互联网可以提供的各种服务：信息收集、通信、信息发布、购物、金融、学习、娱乐。",
    "jpKeywords": ["情報収集", "電子メール", "SNS", "ブログ", "ネットショッピング", "ネットバンキング", "クラウドサービス", "eラーング"],
    "explanation": "互联网让人们可以：快速收集信息（Web搜索）、远距离通信（邮件/SNS/视频通话）、发布信息（博客/SNS/视频）、网上购物（网购/拍卖）、网上银行（转账/查询）、云服务存储、在线学习。",
    "scenario": "用搜索引擎查天气、通过邮件联系朋友、在SNS发布动态、网购衣服、使用网上银行转账、存储照片到云端。",
    "examHints": ["情報を調べる", "遠くの人と連絡", "自分の考えを公開", "商品を買う", "銀行取引", "データを保存・共有", "オンラインで学ぶ"],
    "confusion": "这些服务给生活带来便利，但使用时要意识到风险（个人信息、诈骗、错误信息）。",
    "summary": "調べて・連絡して・購入して・発信して・保存して・学ぶ、これがインターネットでできること"
  },
  {
    "id": "sec-1-4",
    "chapter": "第1章 インターネットの基礎",
    "title": "インターネットの影響力",
    "category": "基礎",
    "goal": "理解互联网对社会和个人产生的影响——既有好的影响也有坏的影响。",
    "jpKeywords": ["影響力", "情報拡散", "デマ", "個人情報流出", "誹謗中傷", "ネット依存", "セキュリティ"],
    "explanation": "互联网的影响是双面的。好的影响：信息快速传播、灾害时应急通信、任何人可以发声、商业和学习更便利。坏的影响：错误信息和谣言也会快速扩散、个人信息泄露、网上诽谤中伤、网络依赖和健康问题、成为诈骗和犯罪的目标。",
    "scenario": "灾害时人们通过SNS分享救援信息是好影响；同一平台上谣言扩散造成恐慌是坏影响。使用互联网时要理解这两面性。",
    "examHints": ["情報が速く広がる", "誤情報が広がる", "匿名で誹謗中傷", "個人情報が漏れる", "ネット依存", "便利さと危险性"],
    "confusion": "互联网不是只有便利，也不是只有危险。要理解它的双面性，并采取适当的对策。",
    "summary": "情報は速いがデマも速い、便利だが危険もある、利用には責任と注意が必要"
  },
  {
    "id": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "title": "インターネットは、具体的にどんな被害をもたらすのか",
    "category": "被害",
    "goal": "理解互联网可能带来的金钱、信息、名誉和健康方面的被害。",
    "jpKeywords": [
      "被害",
      "金銭的被害",
      "個人情報",
      "なりすまし",
      "誹謗中傷"
    ],
    "explanation": "互联网被害包括被骗钱、个人信息泄露、被冒充、被恶意攻击等。",
    "scenario": "账号被盗后，他人用自己的名字发布不当内容。",
    "examHints": [
      "お金をだまし取られる",
      "ID・パスワードが盗まれる",
      "SNSで悪口を書かれる"
    ],
    "confusion": "金銭的被害是钱的损失，情報流出是信息泄露。",
    "summary": "お金・情報・名誉・健康に注意"
  },
  {
    "id": "sec-2-2",
    "chapter": "第2章 インターネットでの被害",
    "title": "フィッシング詐欺",
    "category": "被害",
    "goal": "理解フィッシング詐欺的典型场景、考试题眼和防范方法。",
    "jpKeywords": [
      "フィッシング詐欺",
      "偽サイト",
      "ID",
      "パスワード"
    ],
    "explanation": "假装成银行、购物网站或信用卡公司，引导用户进入假网站并输入账号密码。",
    "scenario": "「本人確認が必要です」「至急ログインしてください」というメールが届く。",
    "examHints": [
      "偽サイト",
      "ID・パスワード",
      "銀行を装う"
    ],
    "confusion": "フィッシング是偷信息，ワンクリック詐欺是点击后要求付款。",
    "summary": "偽サイトで盗む → フィッシング"
  },
  {
    "id": "sec-2-3",
    "chapter": "第2章 インターネットでの被害",
    "title": "ワンクリック詐欺",
    "category": "被害",
    "goal": "理解点击后显示注册完成和料金請求的诈骗方式。",
    "jpKeywords": [
      "ワンクリック詐欺",
      "登録完了",
      "料金請求",
      "架空請求"
    ],
    "explanation": "点击链接后突然显示已经注册，并要求支付不存在的费用。",
    "scenario": "页面显示「登録が完了しました。料金を支払ってください」。",
    "examHints": [
      "クリック",
      "登録完了",
      "料金請求"
    ],
    "confusion": "架空請求是不该付的虚假账单，ワンクリック詐欺常以点击为入口。",
    "summary": "クリック後に請求 → ワンクリック"
  },
  {
    "id": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "title": "詐欺、犯罪に巻き込まれないために",
    "category": "被害",
    "goal": "掌握遇到可疑请求时的正确处理方式。",
    "jpKeywords": [
      "相談する",
      "支払わない",
      "連絡しない",
      "削除する"
    ],
    "explanation": "遇到可疑收费、中奖、账号确认等信息时，不付款、不联系、不输入个人信息，并向可信的人或机构咨询。",
    "scenario": "收到陌生收费短信时，先截图保存并咨询家人、老师或官方窗口。",
    "examHints": [
      "支払わない",
      "連絡しない",
      "相談する"
    ],
    "confusion": "不要按对方给出的联系方式确认，应使用官方渠道确认。",
    "summary": "払わない・連絡しない・相談する"
  },
  {
    "id": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "title": "インターネットに関連した新たな詐欺の被害例",
    "category": "被害",
    "goal": "理解サポート詐欺、偽通販サイト、投資詐欺、ロマンス詐欺等新型诈骗。",
    "jpKeywords": [
      "サポート詐欺",
      "偽通販サイト",
      "投資詐欺",
      "ロマンス詐欺",
      "QRコード詐欺"
    ],
    "explanation": "新型诈骗常利用假警告、超低价商品、必赚投资、恋爱感情或二维码诱导用户付款或输入信息。",
    "scenario": "电脑画面出现「ウイルス感染」と假警告，并要求打电话。",
    "examHints": [
      "偽警告",
      "遠隔操作ソフト",
      "必ず儲かる",
      "恋愛感情"
    ],
    "confusion": "サポート詐欺是假客服，偽通販サイト是假购物网站。",
    "summary": "うますぎる話と偽警告に注意"
  },
  {
    "id": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "title": "迷惑メール、チェーンメール",
    "category": "被害",
    "goal": "区分迷惑メール和チェーンメール，并理解正确处理方式。",
    "jpKeywords": [
      "迷惑メール",
      "チェーンメール",
      "転送する",
      "削除する"
    ],
    "explanation": "迷惑メール是不需要的广告、诈骗或带病毒邮件。チェーンメール要求继续转发，容易造成混乱。",
    "scenario": "邮件写着「このメールを10人に送ってください」。",
    "examHints": [
      "広告・詐欺・ウイルス付きメール",
      "このメールを○人に送って"
    ],
    "confusion": "迷惑メール重点是不需要和危险，チェーンメール重点是要求转发。",
    "summary": "怪しいメールは開かない・転送しない"
  },
  {
    "id": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "title": "健康面への影響",
    "category": "被害",
    "goal": "理解过度使用互联网对睡眠、眼睛、身体和心理的影响。",
    "jpKeywords": [
      "ネット依存",
      "睡眠不足",
      "目の疲れ",
      "肩こり",
      "ストレス"
    ],
    "explanation": "长时间使用网络可能导致睡眠不足、眼疲劳、肩颈酸痛、压力和网络依赖。",
    "scenario": "夜遅くまでスマホを使い、次の日に眠くなる。",
    "examHints": [
      "夜遅くまでスマホ",
      "やめたいのにやめられない",
      "SNSで比較して不安"
    ],
    "confusion": "健康面への影響不仅是身体问题，也包括心理压力和依赖。",
    "summary": "使いすぎは体と心に影響"
  },
  {
    "id": "sec-7-1",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "ユーザー認証とパスワード管理",
    "category": "セキュリティ",
    "goal": "理解用户认证的基本概念和强密码的重要性。",
    "jpKeywords": [
      "ユーザー認証",
      "パスワード",
      "ID",
      "ログインパスワード"
    ],
    "explanation": "用户认证是确认用户身份的过程。密码是常见的认证方式，但弱密码容易被破解。",
    "scenario": "设置密码时使用「123456」容易被猜到。",
    "examHints": [
      "パスワード管理",
      "強度",
      "変更"
    ],
    "confusion": "简单密码和重复使用的密码都很危险。",
    "summary": "パスワードは強く管理する"
  },
  {
    "id": "sec-7-2",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "パスワードを狙った攻撃",
    "category": "セキュリティ",
    "goal": "理解総当たり攻撃、辞書攻撃、パスワードリスト攻撃的区别。",
    "jpKeywords": [
      "総当たり攻撃",
      "辞書攻撃",
      "パスワードリスト攻撃",
      "ブルートフォース"
    ],
    "explanation": "総当たり攻撃是尝试所有可能的组合；辞書攻撃使用常见单词和密码列表；パスワードリスト攻撃利用其他网站泄露的密码。",
    "scenario": "攻击者使用程序自动尝试 0000 到 9999 的所有数字组合。",
    "examHints": [
      "総当たり",
      "辞書",
      "リスト",
      "自動化"
    ],
    "confusion": "三种攻击的共同点是自动化，但使用的数据源不同。",
    "summary": "攻撃は自動化、防御は複雑さ"
  },
  {
    "id": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "生体認証と多要素認証",
    "category": "セキュリティ",
    "goal": "理解生体认证和多要素认证的概念和优势。",
    "jpKeywords": [
      "生体認証",
      "指紋認証",
      "顔認証",
      "多要素認証",
      "知識情報",
      "所持情報"
    ],
    "explanation": "生体认证使用指纹、面部、虹膜等身体特征。多要素认证组合两种以上不同类型的认证（知識、所指、生体）。",
    "scenario": "登录网银时需要密码（知識）+ 手机验证码（所持）。",
    "examHints": [
      "指紋",
      "顔",
      "知識",
      "所持",
      "生体"
    ],
    "confusion": "两个密码仍是同一种知識情報，不算多要素认证。",
    "summary": "2種類以上の認証 → 多要素認証"
  },
  {
    "id": "sec-7-4",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "暗号化と電子証明書",
    "category": "セキュリティ",
    "goal": "理解加密通信和电子证书的作用。",
    "jpKeywords": [
      "暗号化",
      "SSL",
      "TLS",
      "電子証明書",
      "HTTPS",
      "ディジタル署名"
    ],
    "explanation": "加密把数据变成只有正确对象才能解读的形式。电子证书证明网站的真实性。",
    "scenario": "浏览器地址栏显示锁图标表示 HTTPS 加密连接。",
    "examHints": [
      "鍵アイコン",
      "暗号化",
      "証明書",
      "HTTPS"
    ],
    "confusion": "加密保护内容，证书验证身份。",
    "summary": "暗号化で内容を保護、証明書で身元を確認"
  },
  {
    "id": "sec-7-5",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "フィルタリングとソーシャルエンジニアリング",
    "category": "セキュリティ",
    "goal": "理解网页过滤和社会工程学攻击的防范。",
    "jpKeywords": [
      "フィルタリング",
      "URLフィルタリング",
      "ソーシャルエンジニアリング",
      "フィッシング"
    ],
    "explanation": "过滤可以阻止访问危险网站。ソーシャルエンジニアリング利用心理弱点绕过技术防护。",
    "scenario": "收到「IT部门」的电话要求提供密码。",
    "examHints": [
      "電話",
      "メール",
      "骗す",
      "フィルタ"
    ],
    "confusion": "技术措施可能被心理操纵绕过。",
    "summary": "技術も心理も両方防御"
  },
  {
    "id": "sec-7-6",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "スキミングとスマートフォンのセキュリティ",
    "category": "セキュリティ",
    "goal": "理解スキミング和手机安全的基本知识。",
    "jpKeywords": [
      "スキミング",
      "カード情報",
      "スマートフォン",
      "OS更新",
      "アプリ"
    ],
    "explanation": "スキミング是不法读取卡片磁条信息。智能手机需要及时更新系统和应用。",
    "scenario": "在陌生设备上登录账号后没有登出。",
    "examHints": [
      "カード",
      "OS更新",
      "アプリ",
      "公共设备"
    ],
    "confusion": "手机安全不仅是防病毒，还包括使用习惯。",
    "summary": "カードは守る、端末は更新する"
  },
  {
    "id": "sec-7-7",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "バックアップと復元",
    "category": "セキュリティ",
    "goal": "理解备份的重要性以及如何应对数据丢失。",
    "jpKeywords": [
      "バックアップ",
      "復元",
      "クラウドバックアップ",
      "外部記憶装置"
    ],
    "explanation": "定期备份可以在数据丢失或被勒索软件加密时恢复重要文件。",
    "scenario": "电脑被勒索软件加密后，从外部硬盘备份恢复文件。",
    "examHints": [
      "バックアップ",
      "復元",
      "定期的に"
    ],
    "confusion": "只备份一次不够，需要定期更新备份。",
    "summary": "备份は定期的に、 хранилищеは分けた場所に"
  },
  {
    "id": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "title": "著作権の重要性と違法利用",
    "category": "法規",
    "goal": "著作権で守られる作品と、違法アップロード・違法ダウンロードを見分ける。",
    "jpKeywords": [
      "著作権",
      "著作物",
      "引用",
      "違法ダウンロード",
      "違法アップロード"
    ],
    "explanation": "文章、音楽、写真、動画、プログラムなどの作品は著作権で守られる。無断コピーや無断公開は試験でよく問われる。",
    "scenario": "有料の動画や音楽を勝手にアップロードしたり、違法と知ってダウンロードしたりする。",
    "examHints": [
      "作品",
      "無断コピー",
      "違法アップロード",
      "違法ダウンロード"
    ],
    "confusion": "引用は条件を守れば可能だが、出典なしの丸写しは著作権侵害。",
    "summary": "作品を無断で使う → 著作権"
  },
  {
    "id": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "title": "肖像権・パブリシティ権・プライバシーの権利",
    "category": "法規",
    "goal": "顔写真、私生活、有名人の広告利用に関する権利を区別する。",
    "jpKeywords": [
      "肖像権",
      "パブリシティ権",
      "プライバシーの権利",
      "同意"
    ],
    "explanation": "人の顔写真を無断で公開すると肖像権、私生活を勝手に公開するとプライバシー、有名人の価値を広告利用するとパブリシティ権が問題になる。",
    "scenario": "友人の写真を本人に確認せず SNS に投稿する。",
    "examHints": [
      "顔写真",
      "有名人",
      "私生活",
      "無断投稿"
    ],
    "confusion": "肖像権は顔写真、パブリシティ権は有名人の商業的価値。",
    "summary": "顔は肖像、私生活はプライバシー、有名人広告はパブリシティ"
  },
  {
    "id": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "title": "名誉毀損・わいせつ物頒布",
    "category": "法規",
    "goal": "投稿内容が他人の社会的評価を下げる場合や有害情報の公開を理解する。",
    "jpKeywords": [
      "名誉毀損",
      "誹謗中傷",
      "社会的評価",
      "わいせつ物頒布"
    ],
    "explanation": "事実であっても他人の社会的評価を下げる投稿は名誉毀損になることがある。わいせつな画像や動画の頒布も法律上問題になる。",
    "scenario": "掲示板で個人名を出して悪口やうわさを書き込む。",
    "examHints": [
      "悪口",
      "社会的評価低下",
      "公開",
      "わいせつ"
    ],
    "confusion": "単なる感想と、社会的評価を下げる具体的な投稿は分けて考える。",
    "summary": "評価を下げる投稿 → 名誉毀損"
  },
  {
    "id": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "title": "特定商取引法・電子契約法・ステマ規制",
    "category": "法規",
    "goal": "ネット取引、電子契約、広告表示に関する法律の題眼を覚える。",
    "jpKeywords": [
      "特定商取引法",
      "電子契約法",
      "ステマ規制",
      "景品表示法"
    ],
    "explanation": "ネット通販では販売者情報や返品条件が重要。電子契約法は操作ミス救済、ステマ規制は広告であることを隠す表示を防ぐ。",
    "scenario": "広告なのに個人の感想のように見せて商品をすすめる。",
    "examHints": [
      "通信販売",
      "返品条件",
      "広告表示",
      "ステマ"
    ],
    "confusion": "特定商取引法は取引表示、電子契約法はクリック操作ミス、ステマ規制は広告表示。",
    "summary": "通販は表示、契約は確認、広告隠しはステマ"
  },
  {
    "id": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "title": "不正アクセス禁止法・個人情報保護法",
    "category": "法規",
    "goal": "他人の ID 利用と個人情報の取り扱いを判断する。",
    "jpKeywords": [
      "不正アクセス禁止法",
      "個人情報保護法",
      "他人のID",
      "利用目的"
    ],
    "explanation": "他人の ID やパスワードを使ってログインする行為は禁止される。個人情報は利用目的を明確にして適切に扱う。",
    "scenario": "友人のパスワードを知って本人に無断でログインする。",
    "examHints": [
      "他人のID",
      "無断ログイン",
      "個人情報",
      "利用目的"
    ],
    "confusion": "IDを盗む行為と、盗んだIDでログインする行為はどちらも危険。",
    "summary": "ID無断利用 → 不正アクセス"
  },
  {
    "id": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "title": "青少年・メール・出会い系サイト関連法規",
    "category": "法規",
    "goal": "青少年保護、広告メール、出会い系サイト規制の目的を理解する。",
    "jpKeywords": [
      "青少年インターネット環境整備法",
      "特定電子メール法",
      "出会い系サイト規制法",
      "法改正"
    ],
    "explanation": "青少年を有害情報から守る制度、広告メールのルール、出会い系サイト利用による被害防止が出題される。",
    "scenario": "広告メールに送信者情報や配信停止方法がない。",
    "examHints": [
      "青少年",
      "広告メール",
      "配信停止",
      "出会い系"
    ],
    "confusion": "迷惑メール対策は特定電子メール法、青少年保護は青少年インターネット環境整備法。",
    "summary": "青少年・メール・出会い系は保護目的"
  },
  {
    "id": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "情報発信者のモラルと心構え",
    "category": "モラル",
    "goal": "投稿前に相手や社会への影響を考える姿勢を理解する。",
    "jpKeywords": [
      "情報発信者のモラル",
      "責任",
      "確認",
      "公開範囲"
    ],
    "explanation": "インターネットでは誰でも発信者になる。公開後は広がりやすいため、内容の正確さと相手への配慮が必要。",
    "scenario": "未確認の情報をそのまま SNS に投稿して広がる。",
    "examHints": [
      "発信者",
      "責任",
      "確認",
      "公開範囲"
    ],
    "confusion": "匿名でも責任が消えるわけではない。",
    "summary": "発信前に確認、相手、公開範囲"
  },
  {
    "id": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "Web閲覧と個人情報の公開",
    "category": "モラル",
    "goal": "Webページ閲覧時の注意と個人情報を公開する危険を理解する。",
    "jpKeywords": [
      "Webページ閲覧",
      "個人情報",
      "位置情報",
      "プライバシー"
    ],
    "explanation": "氏名、住所、学校、写真、位置情報などは個人を特定する材料になる。公開範囲を必ず確認する。",
    "scenario": "写真の背景や位置情報から自宅や学校が分かる。",
    "examHints": [
      "個人情報",
      "位置情報",
      "公開範囲"
    ],
    "confusion": "友人だけのつもりでも再共有される可能性がある。",
    "summary": "個人情報は出す前に止まる"
  },
  {
    "id": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "嫌がらせ・迷惑行為とプライバシー保護",
    "category": "モラル",
    "goal": "誹謗中傷、嫌がらせ、迷惑行為への正しい対応を覚える。",
    "jpKeywords": [
      "誹謗中傷",
      "嫌がらせ",
      "ブロック",
      "相談"
    ],
    "explanation": "攻撃的な投稿に反応して言い返すと被害が広がる。証拠を残し、ブロックや相談を行う。",
    "scenario": "SNSで悪口を何度も書かれる。",
    "examHints": [
      "証拠保存",
      "ブロック",
      "相談"
    ],
    "confusion": "削除だけで終わらせず、必要なら画面保存を先に行う。",
    "summary": "反応せず、保存して相談"
  },
  {
    "id": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "電子メール・チャットツールのマナー",
    "category": "モラル",
    "goal": "TO、CC、BCC とメール・チャットの基本マナーを区別する。",
    "jpKeywords": [
      "電子メール",
      "チャットマナー",
      "TO",
      "CC",
      "BCC"
    ],
    "explanation": "宛先を正しく使い、件名や本文を分かりやすく書く。複数人に送る時はメールアドレスの見え方に注意する。",
    "scenario": "全員のメールアドレスを見せたくない一斉送信では BCC を使う。",
    "examHints": [
      "一斉送信",
      "メールアドレスを隠す",
      "BCC"
    ],
    "confusion": "CC は見える共有、BCC は相手に見えない共有。",
    "summary": "隠す一斉送信は BCC"
  },
  {
    "id": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "デマ・炎上・情報の偏り",
    "category": "モラル",
    "goal": "デマ、炎上、情報の偏り、フィルターバブル、エコーチェンバーを理解する。",
    "jpKeywords": [
      "デマ",
      "炎上",
      "情報の偏り",
      "フィルターバブル",
      "エコーチェンバー"
    ],
    "explanation": "自分の好みに近い情報だけを見ると判断が偏る。複数の情報源や公式情報で確認する。",
    "scenario": "SNSで同じ意見ばかり見て、それが全体の意見だと思い込む。",
    "examHints": [
      "複数情報源",
      "公式情報",
      "偏り"
    ],
    "confusion": "フィルターバブルは表示の偏り、エコーチェンバーは同じ意見が反響する状態。",
    "summary": "偏り対策は複数確認"
  },
  {
    "id": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "生成AI内容確認",
    "category": "モラル",
    "goal": "生成AIの出力をそのまま信じず確認する態度を身につける。",
    "jpKeywords": [
      "生成AI",
      "内容確認",
      "誤情報",
      "出典確認"
    ],
    "explanation": "生成AIの回答には誤りが含まれることがある。出典や公式情報で確認し、丸写しを避ける。",
    "scenario": "AIの回答を確認せずレポートに使う。",
    "examHints": [
      "AI",
      "確認",
      "誤情報",
      "出典"
    ],
    "confusion": "AIの回答は参考であり、最終判断は利用者が行う。",
    "summary": "AIは確認して使う"
  },
  {
    "id": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "title": "インターネットのしくみ",
    "category": "しくみ",
    "goal": "パケット通信、IPアドレス、ルータ、DNS の役割を理解する。",
    "jpKeywords": [
      "パケット通信",
      "IPアドレス",
      "ルータ",
      "DNS"
    ],
    "explanation": "インターネットではデータを小さなパケットに分け、IPアドレスを手がかりにルータが経路を選ぶ。DNS はドメイン名を IP アドレスに対応させる。",
    "scenario": "example.com と入力すると DNS が IP アドレスを調べる。",
    "examHints": [
      "ドメイン名",
      "IPアドレス",
      "DNS",
      "ルータ"
    ],
    "confusion": "IPアドレスは住所、DNS は名前から住所を調べるしくみ。",
    "summary": "名前はDNS、住所はIP、道案内はルータ"
  },
  {
    "id": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "title": "Webページ・URL・ブラウザ",
    "category": "しくみ",
    "goal": "Web、WWW、ブラウザ、URL の関係を説明できる。",
    "jpKeywords": [
      "Web",
      "WWW",
      "ブラウザ",
      "URL",
      "Webページ"
    ],
    "explanation": "Webページはブラウザで閲覧する情報。URL は Web 上の場所を示す住所のようなもの。WWW は Web のしくみを指す。",
    "scenario": "ブラウザのアドレス欄に URL を入力して Web ページを開く。",
    "examHints": [
      "Webページ",
      "ブラウザ",
      "URL"
    ],
    "confusion": "ブラウザは見るためのソフト、URL は場所を示す文字列。",
    "summary": "Webを見る道具がブラウザ、場所がURL"
  },
  {
    "id": "sec-5-3",
    "chapter": "第5章 インターネットのしくみ",
    "title": "HTTP・HTTPS",
    "category": "しくみ",
    "goal": "Web通信で使う HTTP と暗号化された HTTPS を区別する。",
    "jpKeywords": [
      "HTTP",
      "HTTPS",
      "暗号化",
      "SSL",
      "TLS"
    ],
    "explanation": "HTTP は Web ページをやり取りする通信の決まり。HTTPS は通信内容を暗号化して安全性を高める。",
    "scenario": "個人情報や決済情報を入力するページで HTTPS を確認する。",
    "examHints": [
      "暗号化",
      "安全なWeb通信",
      "HTTPS"
    ],
    "confusion": "HTTPS は危険がゼロという意味ではなく、通信が暗号化されているという意味。",
    "summary": "暗号化されたWeb通信 → HTTPS"
  },
  {
    "id": "sec-5-4",
    "chapter": "第5章 インターネットのしくみ",
    "title": "電子メールのしくみ",
    "category": "しくみ",
    "goal": "SMTP、POP3、IMAP の役割を覚える。",
    "jpKeywords": [
      "電子メール",
      "SMTP",
      "POP3",
      "IMAP"
    ],
    "explanation": "SMTP はメール送信、POP3 はメールを端末に取り込む方式、IMAP はサーバ上でメールを管理し複数端末で同期しやすい方式。",
    "scenario": "スマホとパソコンで同じメール状態を見たい時は IMAP が向く。",
    "examHints": [
      "送信SMTP",
      "受信POP3",
      "サーバ管理IMAP"
    ],
    "confusion": "SMTP は送信、POP3 と IMAP は受信側のしくみ。",
    "summary": "送るSMTP、受けるPOP3、同期IMAP"
  },
  {
    "id": "sec-5-5",
    "chapter": "第5章 インターネットのしくみ",
    "title": "SNS・CGM・ネットサービス",
    "category": "しくみ",
    "goal": "SNS、CGM、ネットショッピング、ネットバンキングの特徴を理解する。",
    "jpKeywords": [
      "SNS",
      "CGM",
      "ネットショッピング",
      "ネットバンキング"
    ],
    "explanation": "SNS は人とつながるサービス、CGM は利用者が作る情報メディア。ネットショッピングやネットバンキングは便利だが安全確認が必要。",
    "scenario": "口コミサイトや動画投稿サイトは利用者が内容を作る CGM の例。",
    "examHints": [
      "利用者が作る",
      "SNS",
      "CGM",
      "安全確認"
    ],
    "confusion": "SNS は交流に重点、CGM は利用者生成コンテンツに重点。",
    "summary": "人とつながるSNS、利用者が作るCGM"
  },
  {
    "id": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "title": "Wi-Fi・クラウドサービス",
    "category": "しくみ",
    "goal": "Wi-Fi、SSID、WPA2/WPA3、クラウドサービスの題眼を覚える。",
    "jpKeywords": [
      "Wi-Fi",
      "無線LAN",
      "SSID",
      "WPA2",
      "WPA3",
      "クラウドサービス"
    ],
    "explanation": "Wi-Fi は無線LANの通信。SSID はネットワーク名、WPA2/WPA3 は暗号化方式。クラウドサービスはインターネット上の保存や処理を使う。",
    "scenario": "公共 Wi-Fi では暗号化や接続先名を確認する。",
    "examHints": [
      "SSID",
      "WPA2/WPA3",
      "クラウド"
    ],
    "confusion": "SSID は名前であり、パスワードや暗号化方式そのものではない。",
    "summary": "Wi-Fi名はSSID、安全はWPA2/WPA3"
  },
  {
    "id": "sec-5-7",
    "chapter": "第5章 インターネットのしくみ",
    "title": "生成AI・プロンプト",
    "category": "しくみ",
    "goal": "生成AIとプロンプト、利用時の注意を理解する。",
    "jpKeywords": [
      "生成AI",
      "プロンプト",
      "出力確認",
      "注意"
    ],
    "explanation": "生成AIは入力された指示に応じて文章や画像などを作る。指示文をプロンプトという。出力は必ず確認する。",
    "scenario": "AIに要約を依頼する時、目的や条件をプロンプトに書く。",
    "examHints": [
      "プロンプト",
      "生成AI",
      "内容確認"
    ],
    "confusion": "生成AIの出力は常に正しいとは限らない。",
    "summary": "AIはプロンプトで動き、出力は確認"
  },
  {
    "id": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "title": "マルウェアとは",
    "category": "ウイルス",
    "goal": "マルウェアの意味と代表的な種類を理解する。",
    "jpKeywords": [
      "マルウェア",
      "ウイルス",
      "ワーム",
      "トロイの木馬"
    ],
    "explanation": "マルウェアは悪意のあるソフトの総称。ウイルス、ワーム、トロイの木馬などが含まれる。",
    "scenario": "便利そうなソフトを入れたら不正な動作を始めた。",
    "examHints": [
      "悪意あるソフト総称",
      "マルウェア"
    ],
    "confusion": "マルウェアは総称で、ウイルスはその一種。",
    "summary": "悪意あるソフト総称 → マルウェア"
  },
  {
    "id": "sec-6-2",
    "chapter": "第6章 コンピュータウイルス",
    "title": "ウイルス・ワーム・トロイの木馬",
    "category": "ウイルス",
    "goal": "代表的なマルウェアの違いを覚える。",
    "jpKeywords": [
      "ウイルス",
      "ワーム",
      "トロイの木馬",
      "自己増殖"
    ],
    "explanation": "ウイルスは他のファイルに寄生して広がる。ワームは自己増殖する。トロイの木馬は正常なソフトに見せかける。",
    "scenario": "ゲームのように見えるソフトを入れたら裏で情報を送信した。",
    "examHints": [
      "自己増殖",
      "偽装",
      "寄生"
    ],
    "confusion": "ワームは自己増殖、トロイの木馬は偽装が題眼。",
    "summary": "増えるワーム、偽装トロイ"
  },
  {
    "id": "sec-6-3",
    "chapter": "第6章 コンピュータウイルス",
    "title": "スパイウェア・ランサムウェア・アドウェア・ボット",
    "category": "ウイルス",
    "goal": "情報収集、身代金要求、広告表示、遠隔操作の違いを理解する。",
    "jpKeywords": [
      "スパイウェア",
      "ランサムウェア",
      "アドウェア",
      "ボット"
    ],
    "explanation": "スパイウェアは情報を盗む。ランサムウェアはデータを暗号化して身代金を要求する。アドウェアは広告表示、ボットは遠隔操作される。",
    "scenario": "ファイルが暗号化され、復元のために金銭を要求される。",
    "examHints": [
      "情報を盗む",
      "暗号化して身代金",
      "広告表示",
      "遠隔操作"
    ],
    "confusion": "スパイウェアは盗み見、ランサムウェアは身代金。",
    "summary": "盗むスパイ、金を迫るランサム"
  },
  {
    "id": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "title": "感染経路",
    "category": "ウイルス",
    "goal": "メール添付、リンク、不正Webサイト、不正アプリ、USB、脆弱性を覚える。",
    "jpKeywords": [
      "感染経路",
      "メール添付",
      "SMSリンク",
      "不正Webサイト",
      "不正アプリ",
      "USBメモリ",
      "脆弱性"
    ],
    "explanation": "感染は添付ファイル、メールやSMSのリンク、不正Webサイト、不正アプリ、USBメモリ、OSやアプリの脆弱性から起こる。",
    "scenario": "知らない相手から届いた添付ファイルを開いて感染する。",
    "examHints": [
      "添付ファイル",
      "リンク",
      "不正サイト",
      "USB"
    ],
    "confusion": "リンクを開くだけで危険なサイトに誘導されることがある。",
    "summary": "開かない、入れない、つながない"
  },
  {
    "id": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "title": "感染防止と感染時の対応",
    "category": "ウイルス",
    "goal": "更新、セキュリティソフト、バックアップ、感染時対応を覚える。",
    "jpKeywords": [
      "感染防止",
      "OSやアプリの更新",
      "セキュリティソフト",
      "バックアップ",
      "感染時の対応"
    ],
    "explanation": "OSやアプリを更新し、怪しい添付や不明ソフトを避ける。バックアップを取り、感染時はネットワークから切り離して相談する。",
    "scenario": "感染が疑われたためネット接続を切り、管理者に連絡する。",
    "examHints": [
      "更新",
      "セキュリティソフト",
      "バックアップ",
      "切り離す"
    ],
    "confusion": "バックアップは感染後の復旧に役立つが、感染防止そのものではない。",
    "summary": "更新、防御、保存、切断"
  }
];

const terms = [
  {
    "id": "term-1-internet",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "インターネット",
    "reading": "インターネット",
    "zh": "互联网",
    "en": "Internet",
    "hint": "世界中のネットワーク"
  },
  {
    "id": "term-1-network",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ネットワーク",
    "reading": "ネットワーク",
    "zh": "网络",
    "en": "network",
    "hint": "计算机的连接"
  },
  {
    "id": "term-1-web",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "Web",
    "reading": "ウェブ",
    "zh": "万维网",
    "en": "World Wide Web",
    "hint": "Webページを見る仕組み"
  },
  {
    "id": "term-1-www",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "WWW",
    "reading": "ダブリューダブリューダブリュー",
    "zh": "万维网",
    "en": "World Wide Web",
    "hint": "Webの正式名称"
  },
  {
    "id": "term-1-browser",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ブラウザ",
    "reading": "ブラウザ",
    "zh": "浏览器",
    "en": "browser",
    "hint": "Webページを閲覧するソフト"
  },
  {
    "id": "term-1-url",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "URL",
    "reading": "ユーアーエル",
    "zh": "网址",
    "en": "Uniform Resource Locator",
    "hint": "Webページの住所"
  },
  {
    "id": "term-1-server",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "サーバ",
    "reading": "サーバ",
    "zh": "服务器",
    "en": "server",
    "hint": "サービスを提供する側"
  },
  {
    "id": "term-1-client",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "クライアント",
    "reading": "クライアント",
    "zh": "客户端",
    "en": "client",
    "hint": "サービスを利用する側"
  },
  {
    "id": "term-1-ip",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "IPアドレス",
    "reading": "アイピーアドレス",
    "zh": "IP地址",
    "en": "IP address",
    "hint": "ネットワーク上の住所"
  },
  {
    "id": "term-1-domain",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ドメイン名",
    "reading": "ドメインめい",
    "zh": "域名",
    "en": "domain name",
    "hint": "人が覚えやすい名前"
  },
  {
    "id": "term-1-dns",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "DNS",
    "reading": "ディーエヌエス",
    "zh": "域名系统",
    "en": "Domain Name System",
    "hint": "ドメイン名をIPに変換"
  },
  {
    "id": "term-1-provider",
    "sectionId": "sec-1-2",
    "chapter": "第1章 インターネットの基礎",
    "jp": "プロバイダ",
    "reading": "プロバイダ",
    "zh": "网络接入服务商",
    "en": "Internet service provider",
    "hint": "インターネット接続サービス業者"
  },
  {
    "id": "term-1-email",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "電子メール",
    "reading": "でんしメール",
    "zh": "电子邮件",
    "en": "email",
    "hint": "遠くの人と文字で連絡"
  },
  {
    "id": "term-1-sns",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "SNS",
    "reading": "エスエヌエス",
    "zh": "社交网络服务",
    "en": "social networking service",
    "hint": "交流・投稿のプラットフォーム"
  },
  {
    "id": "term-1-shopping",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ネットショッピング",
    "reading": "ネットショッピング",
    "zh": "网络购物",
    "en": "online shopping",
    "hint": "商品を購入"
  },
  {
    "id": "term-1-banking",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ネットバンキング",
    "reading": "ネットバンキング",
    "zh": "网上银行",
    "en": "online banking",
    "hint": "銀行取引・コラー"
  },
  {
    "id": "term-1-cloud",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "クラウドサービス",
    "reading": "クラウドサービス",
    "zh": "云服务",
    "en": "cloud service",
    "hint": "データを保存・共有"
  },
  {
    "id": "term-1-blog",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ブログ",
    "reading": "ブログ",
    "zh": "博客",
    "en": "blog",
    "hint": "日記・情報を公開"
  },
  {
    "id": "term-1-elearning",
    "sectionId": "sec-1-3",
    "chapter": "第1章 インターネットの基礎",
    "jp": "eラーング",
    "reading": "イーラーニング",
    "zh": "在线学习",
    "en": "e-learning",
    "hint": "オンラインで学ぶ"
  },
  {
    "id": "term-1-rumor",
    "sectionId": "sec-1-4",
    "chapter": "第1章 インターネットの基礎",
    "jp": "デマ",
    "reading": "デマ",
    "zh": "谣言",
    "en": "false rumor",
    "hint": "誤った情報・拡散"
  },
  {
    "id": "term-1-personal-info",
    "sectionId": "sec-1-4",
    "chapter": "第1章 インターネットの基礎",
    "jp": "個人情報",
    "reading": "こじんじょうほう",
    "zh": "个人信息",
    "en": "personal information",
    "hint": "住所・名前・写真など"
  },
  {
    "id": "term-1-defamation",
    "sectionId": "sec-1-4",
    "chapter": "第1章 インターネットの基礎",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "defamation",
    "hint": "悪口・攻撃的な投稿"
  },
  {
    "id": "term-1-dependence",
    "sectionId": "sec-1-4",
    "chapter": "第1章 インターネットの基礎",
    "jp": "ネット依存",
    "reading": "ネットいそん",
    "zh": "网络依赖",
    "en": "internet addiction",
    "hint": "使いすぎ・やめられない"
  },
  {
    "id": "term-2-damage",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "被害",
    "reading": "ひがい",
    "zh": "受害、损害",
    "en": "damage or harm",
    "hint": "ネットで受ける損害"
  },
  {
    "id": "term-2-financial-damage",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "金銭的被害",
    "reading": "きんせんてきひがい",
    "zh": "金钱损失",
    "en": "financial damage",
    "hint": "お金をだまし取られる"
  },
  {
    "id": "term-2-personal-information",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "個人情報",
    "reading": "こじんじょうほう",
    "zh": "个人信息",
    "en": "personal information",
    "hint": "氏名、住所、IDなど"
  },
  {
    "id": "term-2-information-leakage",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "情報流出",
    "reading": "じょうほうりゅうしゅつ",
    "zh": "信息泄露",
    "en": "information leakage",
    "hint": "情報が外に出る"
  },
  {
    "id": "term-2-impersonation",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "なりすまし",
    "reading": "なりすまし",
    "zh": "冒充",
    "en": "impersonation",
    "hint": "他人の名前で行動"
  },
  {
    "id": "term-2-defamation",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "defamation or abuse",
    "hint": "SNSで悪口を書く"
  },
  {
    "id": "term-2-phishing",
    "sectionId": "sec-2-2",
    "chapter": "第2章 インターネットでの被害",
    "jp": "フィッシング詐欺",
    "reading": "フィッシングさぎ",
    "zh": "钓鱼诈骗",
    "en": "phishing",
    "hint": "偽サイト、ID、パスワード"
  },
  {
    "id": "term-2-fake-website",
    "sectionId": "sec-2-2",
    "chapter": "第2章 インターネットでの被害",
    "jp": "偽サイト",
    "reading": "にせサイト",
    "zh": "假网站",
    "en": "fake website",
    "hint": "本物に似せたサイト"
  },
  {
    "id": "term-2-one-click-fraud",
    "sectionId": "sec-2-3",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ワンクリック詐欺",
    "reading": "ワンクリックさぎ",
    "zh": "一键点击诈骗",
    "en": "one-click fraud",
    "hint": "クリック、登録完了、料金請求"
  },
  {
    "id": "term-2-fictitious-billing",
    "sectionId": "sec-2-3",
    "chapter": "第2章 インターネットでの被害",
    "jp": "架空請求",
    "reading": "かくうせいきゅう",
    "zh": "虚假账单",
    "en": "fictitious billing",
    "hint": "使っていないのに請求"
  },
  {
    "id": "term-2-support-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "サポート詐欺",
    "reading": "サポートさぎ",
    "zh": "假客服诈骗",
    "en": "tech support scam",
    "hint": "ウイルス感染、電話してください"
  },
  {
    "id": "term-2-fake-warning",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "偽警告",
    "reading": "にせけいこく",
    "zh": "假警告",
    "en": "fake warning",
    "hint": "画面に出る偽の警告"
  },
  {
    "id": "term-2-remote-access-software",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "遠隔操作ソフト",
    "reading": "えんかくそうさソフト",
    "zh": "远程控制软件",
    "en": "remote access software",
    "hint": "他人が端末を操作する"
  },
  {
    "id": "term-2-fake-shopping-site",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "偽通販サイト",
    "reading": "にせつうはんサイト",
    "zh": "假网购网站",
    "en": "fake shopping site",
    "hint": "商品が届かない"
  },
  {
    "id": "term-2-investment-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "投資詐欺",
    "reading": "とうしさぎ",
    "zh": "投资诈骗",
    "en": "investment scam",
    "hint": "必ず儲かる"
  },
  {
    "id": "term-2-romance-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ロマンス詐欺",
    "reading": "ロマンスさぎ",
    "zh": "情感诈骗",
    "en": "romance scam",
    "hint": "恋愛感情、送金"
  },
  {
    "id": "term-2-qr-code-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "QRコード詐欺",
    "reading": "キューアールコードさぎ",
    "zh": "二维码诈骗",
    "en": "QR code scam",
    "hint": "QRコード、偽サイト"
  },
  {
    "id": "term-2-spam-mail",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "迷惑メール",
    "reading": "めいわくメール",
    "zh": "垃圾邮件",
    "en": "spam mail",
    "hint": "広告、詐欺、ウイルス付き"
  },
  {
    "id": "term-2-chain-mail",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "チェーンメール",
    "reading": "チェーンメール",
    "zh": "连锁转发邮件",
    "en": "chain mail",
    "hint": "このメールを○人に送って"
  },
  {
    "id": "term-2-forward",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "転送する",
    "reading": "てんそうする",
    "zh": "转发",
    "en": "forward",
    "hint": "メールを他人に送る"
  },
  {
    "id": "term-2-delete",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "削除する",
    "reading": "さくじょする",
    "zh": "删除",
    "en": "delete",
    "hint": "怪しいメールを消す"
  },
  {
    "id": "term-2-internet-addiction",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ネット依存",
    "reading": "ネットいぞん",
    "zh": "网络依赖",
    "en": "internet addiction",
    "hint": "やめたいのにやめられない"
  },
  {
    "id": "term-2-lack-of-sleep",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "睡眠不足",
    "reading": "すいみんぶそく",
    "zh": "睡眠不足",
    "en": "lack of sleep",
    "hint": "夜遅くまでスマホ"
  },
  {
    "id": "term-2-eye-strain",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "目の疲れ",
    "reading": "めのつかれ",
    "zh": "眼疲劳",
    "en": "eye strain",
    "hint": "長時間画面を見る"
  },
  {
    "id": "term-2-stiff-shoulders",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "肩こり",
    "reading": "かたこり",
    "zh": "肩颈酸痛",
    "en": "stiff shoulders",
    "hint": "同じ姿勢が続く"
  },
  {
    "id": "term-2-stress",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ストレス",
    "reading": "ストレス",
    "zh": "压力",
    "en": "stress",
    "hint": "SNSで比較して不安"
  },
  {
    "id": "term-2-consult",
    "sectionId": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "jp": "相談する",
    "reading": "そうだんする",
    "zh": "咨询",
    "en": "consult",
    "hint": "一人で判断しない"
  },
  {
    "id": "term-2-do-not-pay",
    "sectionId": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "jp": "支払わない",
    "reading": "しはらわない",
    "zh": "不付款",
    "en": "do not pay",
    "hint": "怪しい請求に払わない"
  },
  {
    "id": "term-2-do-not-contact",
    "sectionId": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "jp": "連絡しない",
    "reading": "れんらくしない",
    "zh": "不联系",
    "en": "do not contact",
    "hint": "相手に電話しない"
  },
  {
    "id": "term-user-authentication",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "ユーザー認証",
    "reading": "ユーザーにんしょう",
    "zh": "用户认证",
    "en": "user authentication",
    "hint": "本人確認"
  },
  {
    "id": "term-biometric-authentication",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "生体認証",
    "reading": "せいたいにんしょう",
    "zh": "生物认证",
    "en": "biometric authentication",
    "hint": "指紋、顔、虹彩"
  },
  {
    "id": "term-encryption",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "暗号化",
    "reading": "あんごうか",
    "zh": "加密",
    "en": "encryption",
    "hint": "読めない形にする"
  },
  {
    "id": "term-digital-certificate",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "電子証明書",
    "reading": "でんししょうめいしょ",
    "zh": "电子证书",
    "en": "digital certificate",
    "hint": "本物のサイトを証明"
  },
  {
    "id": "term-7-user-auth",
    "sectionId": "sec-7-1",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "ユーザー認証",
    "reading": "ユーザーにんしょう",
    "zh": "用户认证",
    "en": "user authentication",
    "hint": "本人確認"
  },
  {
    "id": "term-7-password",
    "sectionId": "sec-7-1",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "パスワード",
    "reading": "パスワード",
    "zh": "密码",
    "en": "password",
    "hint": "認証に使われる秘密の文字"
  },
  {
    "id": "term-7-login-id",
    "sectionId": "sec-7-1",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "ログインID",
    "reading": "ログインアイディー",
    "zh": "登录ID",
    "en": "login ID",
    "hint": "アカウント識別子"
  },
  {
    "id": "term-7-password-strength",
    "sectionId": "sec-7-1",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "パスワード強度",
    "reading": "パスワードきょうど",
    "zh": "密码强度",
    "en": "password strength",
    "hint": "長く複雑な密码"
  },
  {
    "id": "term-7-brute-force",
    "sectionId": "sec-7-2",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "総当たり攻撃",
    "reading": "そうあたりこうげき",
    "zh": "暴力攻击/穷举攻击",
    "en": "brute force attack",
    "hint": "すべての組み合わせを試す"
  },
  {
    "id": "term-7-dictionary-attack",
    "sectionId": "sec-7-2",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "辞書攻撃",
    "reading": "じしょこうげき",
    "zh": "字典攻击",
    "en": "dictionary attack",
    "hint": "よく使うパスワードを試す"
  },
  {
    "id": "term-7-password-list-attack",
    "sectionId": "sec-7-2",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "パスワードリスト攻撃",
    "reading": "パスワードリストこうげき",
    "zh": "密码列表攻击",
    "en": "password list attack",
    "hint": "漏洩したパスワード再利用"
  },
  {
    "id": "term-7-automation",
    "sectionId": "sec-7-2",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "自動化",
    "reading": "じどうか",
    "zh": "自动化",
    "en": "automation",
    "hint": "プログラムで自動試行"
  },
  {
    "id": "term-7-biometric",
    "sectionId": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "生体認証",
    "reading": "せいたいにんしょう",
    "zh": "生物认证",
    "en": "biometric authentication",
    "hint": "指紋、顔、虹彩"
  },
  {
    "id": "term-7-fingerprint",
    "sectionId": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "指紋認証",
    "reading": "しもんにんしょう",
    "zh": "指纹认证",
    "en": "fingerprint authentication",
    "hint": "指の紋で認証"
  },
  {
    "id": "term-7-face-auth",
    "sectionId": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "顔認証",
    "reading": "かおにんしょう",
    "zh": "面部认证",
    "en": "face authentication",
    "hint": "顔の特徴で認証"
  },
  {
    "id": "term-7-mfa",
    "sectionId": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "多要素認証",
    "reading": "たようそにんしょう",
    "zh": "多因素认证",
    "en": "multi-factor authentication",
    "hint": "知識、所持、生体から2つ以上"
  },
  {
    "id": "term-7-knowledge-factor",
    "sectionId": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "知識情報",
    "reading": "ちしきじょうほう",
    "zh": "知识因素",
    "en": "knowledge factor",
    "hint": "パスワード、暗証番号"
  },
  {
    "id": "term-7-possession-factor",
    "sectionId": "sec-7-3",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "所持情報",
    "reading": "しょじじょうほう",
    "zh": "持有因素",
    "en": "possession factor",
    "hint": "スマホ、ICカード"
  },
  {
    "id": "term-7-encryption",
    "sectionId": "sec-7-4",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "暗号化",
    "reading": "あんごうか",
    "zh": "加密",
    "en": "encryption",
    "hint": "内容を読み取れない形にする"
  },
  {
    "id": "term-7-ssl",
    "sectionId": "sec-7-4",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "SSL",
    "reading": "エスエルエル",
    "zh": "安全套接层",
    "en": "Secure Sockets Layer",
    "hint": "通信暗号化プロトコル"
  },
  {
    "id": "term-7-tls",
    "sectionId": "sec-7-4",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "TLS",
    "reading": "ティーエルエス",
    "zh": "传输层安全",
    "en": "Transport Layer Security",
    "hint": "SSLの後継"
  },
  {
    "id": "term-7-digital-cert",
    "sectionId": "sec-7-4",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "電子証明書",
    "reading": "でんししょうめいしょ",
    "zh": "数字证书",
    "en": "digital certificate",
    "hint": "本物のサイトを証明"
  },
  {
    "id": "term-7-filtering",
    "sectionId": "sec-7-5",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "フィルタリング",
    "reading": "フィルタリング",
    "zh": "过滤",
    "en": "filtering",
    "hint": "有害サイトの遮断"
  },
  {
    "id": "term-7-url-filtering",
    "sectionId": "sec-7-5",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "URLフィルタリング",
    "reading": "ユーアーエルフィルタリング",
    "zh": "URL过滤",
    "en": "URL filtering",
    "hint": "危険网站的URLをブロック"
  },
  {
    "id": "term-7-social-engineering",
    "sectionId": "sec-7-5",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "ソーシャルエンジニアリング",
    "reading": "ソーシャルエンジニアリング",
    "zh": "社会工程学",
    "en": "social engineering",
    "hint": "心理を突いて情報を骗す"
  },
  {
    "id": "term-7-phishing",
    "sectionId": "sec-7-5",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "フィッシング",
    "reading": "フィッシング",
    "zh": "网络钓鱼",
    "en": "phishing",
    "hint": "偽メールで騙す"
  },
  {
    "id": "term-7-skimming",
    "sectionId": "sec-7-6",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "スキミング",
    "reading": "スキミング",
    "zh": "磁条信息读取",
    "en": "skimming",
    "hint": "カードの磁気情報を不正読み取り"
  },
  {
    "id": "term-7-smartphone-sec",
    "sectionId": "sec-7-6",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "スマートフォンのセキュリティ",
    "reading": "スマートフォンのセキュリティ",
    "zh": "智能手机安全",
    "en": "smartphone security",
    "hint": "OS更新、アプリ管理"
  },
  {
    "id": "term-7-backup",
    "sectionId": "sec-7-7",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "バックアップ",
    "reading": "バックアップ",
    "zh": "备份",
    "en": "backup",
    "hint": "データのコピー保存"
  },
  {
    "id": "term-7-restore",
    "sectionId": "sec-7-7",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "復元",
    "reading": "ふくげん",
    "zh": "恢复",
    "en": "restore",
    "hint": "バックアップからデータを戻す"
  },
  {
    "id": "term-7-cloud-backup",
    "sectionId": "sec-7-7",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "クラウドバックアップ",
    "reading": "クラウドバックアップ",
    "zh": "云备份",
    "en": "cloud backup",
    "hint": "网络存储服务备份"
  },
  {
    "id": "term-3-copyright",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "著作権",
    "reading": "ちょさくけん",
    "zh": "著作权",
    "en": "copyright",
    "hint": "作品を守る権利"
  },
  {
    "id": "term-3-work",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "著作物",
    "reading": "ちょさくぶつ",
    "zh": "作品",
    "en": "creative work",
    "hint": "文章・音楽・写真など"
  },
  {
    "id": "term-3-quote",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "引用",
    "reading": "いんよう",
    "zh": "引用",
    "en": "quotation",
    "hint": "出典と範囲が重要"
  },
  {
    "id": "term-3-illegal-download",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "違法ダウンロード",
    "reading": "いほうダウンロード",
    "zh": "违法下载",
    "en": "illegal download",
    "hint": "違法と知って入手"
  },
  {
    "id": "term-3-illegal-upload",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "違法アップロード",
    "reading": "いほうアップロード",
    "zh": "违法上传",
    "en": "illegal upload",
    "hint": "無断で公開"
  },
  {
    "id": "term-3-pirated-copy",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "海賊版",
    "reading": "かいぞくばん",
    "zh": "盗版",
    "en": "pirated copy",
    "hint": "無断複製物"
  },
  {
    "id": "term-3-portrait-rights",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "肖像権",
    "reading": "しょうぞうけん",
    "zh": "肖像权",
    "en": "portrait rights",
    "hint": "顔写真の無断利用"
  },
  {
    "id": "term-3-publicity-rights",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "パブリシティ権",
    "reading": "パブリシティけん",
    "zh": "公开权、名人商业价值权",
    "en": "publicity rights",
    "hint": "有名人の広告価値"
  },
  {
    "id": "term-3-privacy-rights",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "プライバシーの権利",
    "reading": "プライバシーのけんり",
    "zh": "隐私权",
    "en": "right to privacy",
    "hint": "私生活を守る権利"
  },
  {
    "id": "term-3-consent",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "同意",
    "reading": "どうい",
    "zh": "同意",
    "en": "consent",
    "hint": "本人確認が必要"
  },
  {
    "id": "term-3-defamation",
    "sectionId": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "名誉毀損",
    "reading": "めいよきそん",
    "zh": "名誉毁损",
    "en": "defamation",
    "hint": "社会的評価低下"
  },
  {
    "id": "term-3-social-reputation",
    "sectionId": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "社会的評価",
    "reading": "しゃかいてきひょうか",
    "zh": "社会评价",
    "en": "social reputation",
    "hint": "評判を下げる"
  },
  {
    "id": "term-3-obscene-distribution",
    "sectionId": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "わいせつ物頒布",
    "reading": "わいせつぶつはんぷ",
    "zh": "传播淫秽物",
    "en": "distribution of obscene materials",
    "hint": "有害画像の公開"
  },
  {
    "id": "term-3-specific-commercial-transaction-law",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "特定商取引法",
    "reading": "とくていしょうとりひきほう",
    "zh": "特定商业交易法",
    "en": "Specified Commercial Transactions Act",
    "hint": "通信販売の表示"
  },
  {
    "id": "term-3-electronic-contract-law",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "電子契約法",
    "reading": "でんしけいやくほう",
    "zh": "电子契约法",
    "en": "Electronic Contract Act",
    "hint": "操作ミス救済"
  },
  {
    "id": "term-3-stealth-marketing",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "ステマ規制",
    "reading": "ステマきせい",
    "zh": "隐性广告规制",
    "en": "stealth marketing regulation",
    "hint": "広告を隠さない"
  },
  {
    "id": "term-3-premiums-labeling-law",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "景品表示法",
    "reading": "けいひんひょうじほう",
    "zh": "赠品表示法",
    "en": "Premiums and Representations Act",
    "hint": "不当表示を防ぐ"
  },
  {
    "id": "term-3-unauthorized-access-law",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "不正アクセス禁止法",
    "reading": "ふせいアクセスきんしほう",
    "zh": "禁止非法访问法",
    "en": "Unauthorized Computer Access Law",
    "hint": "他人のIDでログイン"
  },
  {
    "id": "term-3-unauthorized-login",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "無断ログイン",
    "reading": "むだんログイン",
    "zh": "未经许可登录",
    "en": "unauthorized login",
    "hint": "本人以外が入る"
  },
  {
    "id": "term-3-personal-information-protection-law",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "個人情報保護法",
    "reading": "こじんじょうほうほごほう",
    "zh": "个人信息保护法",
    "en": "Personal Information Protection Act",
    "hint": "個人情報を守る"
  },
  {
    "id": "term-3-purpose-of-use",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "利用目的",
    "reading": "りようもくてき",
    "zh": "使用目的",
    "en": "purpose of use",
    "hint": "何に使うか"
  },
  {
    "id": "term-3-youth-internet-law",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "青少年インターネット環境整備法",
    "reading": "せいしょうねんインターネットかんきょうせいびほう",
    "zh": "青少年互联网环境整备法",
    "en": "Act on Development of an Internet Environment for Youth",
    "hint": "青少年保護"
  },
  {
    "id": "term-3-specified-email-law",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "特定電子メール法",
    "reading": "とくていでんしメールほう",
    "zh": "特定电子邮件法",
    "en": "Specified Electronic Mail Act",
    "hint": "広告メールの規制"
  },
  {
    "id": "term-3-dating-site-law",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "出会い系サイト規制法",
    "reading": "であいけいサイトきせいほう",
    "zh": "交友网站规制法",
    "en": "Dating Site Regulation Act",
    "hint": "出会い系被害防止"
  },
  {
    "id": "term-3-law-revision",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "法改正",
    "reading": "ほうかいせい",
    "zh": "法律修订",
    "en": "legal revision",
    "hint": "社会変化に合わせる"
  },
  {
    "id": "term-4-morals",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "情報発信者のモラル",
    "reading": "じょうほうはっしんしゃのモラル",
    "zh": "信息发布者道德",
    "en": "morals of information sender",
    "hint": "発信前の責任"
  },
  {
    "id": "term-4-responsibility",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "責任",
    "reading": "せきにん",
    "zh": "责任",
    "en": "responsibility",
    "hint": "投稿者の責任"
  },
  {
    "id": "term-4-public-range",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "公開範囲",
    "reading": "こうかいはんい",
    "zh": "公开范围",
    "en": "visibility range",
    "hint": "誰に見えるか"
  },
  {
    "id": "term-4-fact-check",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "事実確認",
    "reading": "じじつかくにん",
    "zh": "事实确认",
    "en": "fact checking",
    "hint": "投稿前確認"
  },
  {
    "id": "term-4-personal-information",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "個人情報",
    "reading": "こじんじょうほう",
    "zh": "个人信息",
    "en": "personal information",
    "hint": "氏名や住所"
  },
  {
    "id": "term-4-privacy",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "プライバシー",
    "reading": "プライバシー",
    "zh": "隐私",
    "en": "privacy",
    "hint": "私生活の保護"
  },
  {
    "id": "term-4-location-information",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "位置情報",
    "reading": "いちじょうほう",
    "zh": "位置信息",
    "en": "location information",
    "hint": "写真から漏れる"
  },
  {
    "id": "term-4-web-browsing",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "Webページ閲覧",
    "reading": "ウェブページえつらん",
    "zh": "浏览网页",
    "en": "web browsing",
    "hint": "安全確認"
  },
  {
    "id": "term-4-online-abuse",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "online abuse",
    "hint": "悪口投稿"
  },
  {
    "id": "term-4-harassment",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "嫌がらせ",
    "reading": "いやがらせ",
    "zh": "骚扰",
    "en": "harassment",
    "hint": "迷惑行為"
  },
  {
    "id": "term-4-block",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "ブロック",
    "reading": "ブロック",
    "zh": "屏蔽",
    "en": "block",
    "hint": "相手を遮断"
  },
  {
    "id": "term-4-consult",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "相談",
    "reading": "そうだん",
    "zh": "咨询",
    "en": "consultation",
    "hint": "大人や窓口に相談"
  },
  {
    "id": "term-4-email-manners",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "メールマナー",
    "reading": "メールマナー",
    "zh": "邮件礼仪",
    "en": "email etiquette",
    "hint": "件名と宛先"
  },
  {
    "id": "term-4-chat-manners",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "チャットマナー",
    "reading": "チャットマナー",
    "zh": "聊天礼仪",
    "en": "chat etiquette",
    "hint": "短文でも配慮"
  },
  {
    "id": "term-4-to",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "TO",
    "reading": "トゥー",
    "zh": "收件人",
    "en": "to recipient",
    "hint": "主な宛先"
  },
  {
    "id": "term-4-cc",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "CC",
    "reading": "シーシー",
    "zh": "抄送",
    "en": "carbon copy",
    "hint": "見える共有"
  },
  {
    "id": "term-4-bcc",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "BCC",
    "reading": "ビーシーシー",
    "zh": "密件抄送",
    "en": "blind carbon copy",
    "hint": "アドレスを隠す"
  },
  {
    "id": "term-4-rumor",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "デマ",
    "reading": "デマ",
    "zh": "谣言",
    "en": "false rumor",
    "hint": "未確認情報"
  },
  {
    "id": "term-4-flaming",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "炎上",
    "reading": "えんじょう",
    "zh": "网络炎上",
    "en": "online backlash",
    "hint": "批判が集中"
  },
  {
    "id": "term-4-information-bias",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "情報の偏り",
    "reading": "じょうほうのかたより",
    "zh": "信息偏向",
    "en": "information bias",
    "hint": "片寄った情報"
  },
  {
    "id": "term-4-filter-bubble",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "フィルターバブル",
    "reading": "フィルターバブル",
    "zh": "过滤气泡",
    "en": "filter bubble",
    "hint": "好みに近い情報だけ表示"
  },
  {
    "id": "term-4-echo-chamber",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "エコーチェンバー",
    "reading": "エコーチェンバー",
    "zh": "回音室效应",
    "en": "echo chamber",
    "hint": "同じ意見が反響"
  },
  {
    "id": "term-4-multiple-sources",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "複数情報源",
    "reading": "ふくすうじょうほうげん",
    "zh": "多个信息源",
    "en": "multiple sources",
    "hint": "偏り対策"
  },
  {
    "id": "term-4-generative-ai",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "生成AI",
    "reading": "せいせいエーアイ",
    "zh": "生成式AI",
    "en": "generative AI",
    "hint": "内容確認が必要"
  },
  {
    "id": "term-4-ai-content-check",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "内容確認",
    "reading": "ないようかくにん",
    "zh": "内容确认",
    "en": "content verification",
    "hint": "AI出力を確認"
  },
  {
    "id": "term-4-misinformation",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "誤情報",
    "reading": "ごじょうほう",
    "zh": "错误信息",
    "en": "misinformation",
    "hint": "間違いの可能性"
  },
  {
    "id": "term-5-packet-communication",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "パケット通信",
    "reading": "パケットつうしん",
    "zh": "分组通信",
    "en": "packet switching",
    "hint": "データを小分け"
  },
  {
    "id": "term-5-ip-address",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "IPアドレス",
    "reading": "アイピーアドレス",
    "zh": "IP地址",
    "en": "IP address",
    "hint": "ネット上の住所"
  },
  {
    "id": "term-5-router",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "ルータ",
    "reading": "ルータ",
    "zh": "路由器",
    "en": "router",
    "hint": "経路を選ぶ"
  },
  {
    "id": "term-5-dns",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "DNS",
    "reading": "ディーエヌエス",
    "zh": "域名解析系统",
    "en": "Domain Name System",
    "hint": "名前をIPへ"
  },
  {
    "id": "term-5-domain-name",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "ドメイン名",
    "reading": "ドメインめい",
    "zh": "域名",
    "en": "domain name",
    "hint": "example.com"
  },
  {
    "id": "term-5-web",
    "sectionId": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "Web",
    "reading": "ウェブ",
    "zh": "Web网络",
    "en": "web",
    "hint": "ページ閲覧"
  },
  {
    "id": "term-5-www",
    "sectionId": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "WWW",
    "reading": "ダブリューダブリューダブリュー",
    "zh": "万维网",
    "en": "World Wide Web",
    "hint": "Webのしくみ"
  },
  {
    "id": "term-5-browser",
    "sectionId": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "ブラウザ",
    "reading": "ブラウザ",
    "zh": "浏览器",
    "en": "browser",
    "hint": "Webを見るソフト"
  },
  {
    "id": "term-5-url",
    "sectionId": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "URL",
    "reading": "ユーアールエル",
    "zh": "网址",
    "en": "Uniform Resource Locator",
    "hint": "Web上の住所"
  },
  {
    "id": "term-5-web-page",
    "sectionId": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "Webページ",
    "reading": "ウェブページ",
    "zh": "网页",
    "en": "web page",
    "hint": "ブラウザで見る"
  },
  {
    "id": "term-5-http",
    "sectionId": "sec-5-3",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "HTTP",
    "reading": "エイチティーティーピー",
    "zh": "Web通信协议",
    "en": "Hypertext Transfer Protocol",
    "hint": "Web通信"
  },
  {
    "id": "term-5-https",
    "sectionId": "sec-5-3",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "HTTPS",
    "reading": "エイチティーティーピーエス",
    "zh": "加密Web通信",
    "en": "Hypertext Transfer Protocol Secure",
    "hint": "暗号化Web通信"
  },
  {
    "id": "term-5-encryption",
    "sectionId": "sec-5-3",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "暗号化",
    "reading": "あんごうか",
    "zh": "加密",
    "en": "encryption",
    "hint": "内容を読めなくする"
  },
  {
    "id": "term-5-smtp",
    "sectionId": "sec-5-4",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "SMTP",
    "reading": "エスエムティーピー",
    "zh": "邮件发送协议",
    "en": "Simple Mail Transfer Protocol",
    "hint": "メール送信"
  },
  {
    "id": "term-5-pop3",
    "sectionId": "sec-5-4",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "POP3",
    "reading": "ポップスリー",
    "zh": "邮件接收协议",
    "en": "Post Office Protocol 3",
    "hint": "端末に取り込む"
  },
  {
    "id": "term-5-imap",
    "sectionId": "sec-5-4",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "IMAP",
    "reading": "アイマップ",
    "zh": "邮件同步协议",
    "en": "Internet Message Access Protocol",
    "hint": "サーバ上で管理"
  },
  {
    "id": "term-5-sns",
    "sectionId": "sec-5-5",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "SNS",
    "reading": "エスエヌエス",
    "zh": "社交网络服务",
    "en": "Social Networking Service",
    "hint": "人とつながる"
  },
  {
    "id": "term-5-cgm",
    "sectionId": "sec-5-5",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "CGM",
    "reading": "シージーエム",
    "zh": "消费者生成媒体",
    "en": "Consumer Generated Media",
    "hint": "利用者が作る"
  },
  {
    "id": "term-5-net-shopping",
    "sectionId": "sec-5-5",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "ネットショッピング",
    "reading": "ネットショッピング",
    "zh": "网络购物",
    "en": "online shopping",
    "hint": "ネットで買い物"
  },
  {
    "id": "term-5-net-banking",
    "sectionId": "sec-5-5",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "ネットバンキング",
    "reading": "ネットバンキング",
    "zh": "网上银行",
    "en": "online banking",
    "hint": "銀行手続き"
  },
  {
    "id": "term-5-wifi",
    "sectionId": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "Wi-Fi",
    "reading": "ワイファイ",
    "zh": "无线网络",
    "en": "Wi-Fi",
    "hint": "無線LAN"
  },
  {
    "id": "term-5-wireless-lan",
    "sectionId": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "無線LAN",
    "reading": "むせんラン",
    "zh": "无线局域网",
    "en": "wireless LAN",
    "hint": "ケーブルなし通信"
  },
  {
    "id": "term-5-ssid",
    "sectionId": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "SSID",
    "reading": "エスエスアイディー",
    "zh": "网络名称",
    "en": "Service Set Identifier",
    "hint": "Wi-Fi名"
  },
  {
    "id": "term-5-wpa2",
    "sectionId": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "WPA2",
    "reading": "ダブリューピーエーツー",
    "zh": "Wi-Fi保护访问2",
    "en": "Wi-Fi Protected Access 2",
    "hint": "暗号化方式"
  },
  {
    "id": "term-5-wpa3",
    "sectionId": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "WPA3",
    "reading": "ダブリューピーエースリー",
    "zh": "Wi-Fi保护访问3",
    "en": "Wi-Fi Protected Access 3",
    "hint": "新しい暗号化方式"
  },
  {
    "id": "term-5-cloud-service",
    "sectionId": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "クラウドサービス",
    "reading": "クラウドサービス",
    "zh": "云服务",
    "en": "cloud service",
    "hint": "ネット上の保存や処理"
  },
  {
    "id": "term-5-generative-ai",
    "sectionId": "sec-5-7",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "生成AI",
    "reading": "せいせいエーアイ",
    "zh": "生成式AI",
    "en": "generative AI",
    "hint": "文章などを生成"
  },
  {
    "id": "term-5-prompt",
    "sectionId": "sec-5-7",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "プロンプト",
    "reading": "プロンプト",
    "zh": "提示词",
    "en": "prompt",
    "hint": "AIへの指示"
  },
  {
    "id": "term-5-output-check",
    "sectionId": "sec-5-7",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "出力確認",
    "reading": "しゅつりょくかくにん",
    "zh": "输出确认",
    "en": "output checking",
    "hint": "AI出力を確認"
  },
  {
    "id": "term-6-malware",
    "sectionId": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "マルウェア",
    "reading": "マルウェア",
    "zh": "恶意软件",
    "en": "malware",
    "hint": "悪意あるソフト総称"
  },
  {
    "id": "term-6-computer-virus",
    "sectionId": "sec-6-2",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ウイルス",
    "reading": "ウイルス",
    "zh": "病毒",
    "en": "computer virus",
    "hint": "他ファイルに寄生"
  },
  {
    "id": "term-6-worm",
    "sectionId": "sec-6-2",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ワーム",
    "reading": "ワーム",
    "zh": "蠕虫",
    "en": "worm",
    "hint": "自己増殖"
  },
  {
    "id": "term-6-trojan-horse",
    "sectionId": "sec-6-2",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "トロイの木馬",
    "reading": "トロイのもくば",
    "zh": "木马",
    "en": "Trojan horse",
    "hint": "正常ソフトに偽装"
  },
  {
    "id": "term-6-spyware",
    "sectionId": "sec-6-3",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "スパイウェア",
    "reading": "スパイウェア",
    "zh": "间谍软件",
    "en": "spyware",
    "hint": "情報を盗む"
  },
  {
    "id": "term-6-ransomware",
    "sectionId": "sec-6-3",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ランサムウェア",
    "reading": "ランサムウェア",
    "zh": "勒索软件",
    "en": "ransomware",
    "hint": "暗号化して身代金"
  },
  {
    "id": "term-6-adware",
    "sectionId": "sec-6-3",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "アドウェア",
    "reading": "アドウェア",
    "zh": "广告软件",
    "en": "adware",
    "hint": "広告表示"
  },
  {
    "id": "term-6-bot",
    "sectionId": "sec-6-3",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ボット",
    "reading": "ボット",
    "zh": "僵尸程序",
    "en": "bot",
    "hint": "遠隔操作される"
  },
  {
    "id": "term-6-infection-route",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "感染経路",
    "reading": "かんせんけいろ",
    "zh": "感染途径",
    "en": "infection route",
    "hint": "どこから感染するか"
  },
  {
    "id": "term-6-mail-attachment",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "メール添付",
    "reading": "メールてんぷ",
    "zh": "邮件附件",
    "en": "email attachment",
    "hint": "開くと危険"
  },
  {
    "id": "term-6-sms-link",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "メール / SMS リンク",
    "reading": "メール エスエムエス リンク",
    "zh": "邮件或短信链接",
    "en": "email or SMS link",
    "hint": "偽サイト誘導"
  },
  {
    "id": "term-6-malicious-site",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "不正Webサイト",
    "reading": "ふせいウェブサイト",
    "zh": "恶意网站",
    "en": "malicious website",
    "hint": "感染や詐欺"
  },
  {
    "id": "term-6-unauthorized-app",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "不正アプリ",
    "reading": "ふせいアプリ",
    "zh": "恶意应用",
    "en": "malicious app",
    "hint": "入れない"
  },
  {
    "id": "term-6-usb-memory",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "USBメモリ",
    "reading": "ユーエスビー メモリ",
    "zh": "U盘",
    "en": "USB flash drive",
    "hint": "接続で感染"
  },
  {
    "id": "term-6-vulnerability",
    "sectionId": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "脆弱性",
    "reading": "ぜいじゃくせい",
    "zh": "漏洞",
    "en": "vulnerability",
    "hint": "弱点を悪用"
  },
  {
    "id": "term-6-infection-prevention",
    "sectionId": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "感染防止",
    "reading": "かんせんぼうし",
    "zh": "防止感染",
    "en": "infection prevention",
    "hint": "予防策"
  },
  {
    "id": "term-6-os-update",
    "sectionId": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "OSやアプリの更新",
    "reading": "オーエスやアプリのこうしん",
    "zh": "系统和应用更新",
    "en": "OS and app updates",
    "hint": "脆弱性対策"
  },
  {
    "id": "term-6-security-software",
    "sectionId": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "セキュリティソフト",
    "reading": "セキュリティソフト",
    "zh": "安全软件",
    "en": "security software",
    "hint": "検知と防御"
  },
  {
    "id": "term-6-backup",
    "sectionId": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "バックアップ",
    "reading": "バックアップ",
    "zh": "备份",
    "en": "backup",
    "hint": "復旧に備える"
  },
  {
    "id": "term-6-incident-response",
    "sectionId": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "感染時の対応",
    "reading": "かんせんじのたいおう",
    "zh": "感染后的应对",
    "en": "incident response",
    "hint": "切断して相談"
  }
];

const examHints = [
  {
    "id": "hint-1-001",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "世界中のネットワーク",
    "answer": "インターネット",
    "note": "互联网是连接全世界计算机和网络的大网络。"
  },
  {
    "id": "hint-1-002",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "Webとの違い",
    "answer": "インターネット ≠ Web",
    "note": "Internet是整体，Web是其中一种服务。"
  },
  {
    "id": "hint-1-003",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "サービスを提供する側",
    "answer": "サーバ",
    "note": "服务器提供网页、邮件、文件等服务。"
  },
  {
    "id": "hint-1-004",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "サービスを利用する側",
    "answer": "クライアント",
    "note": "客户端是手机、电脑、浏览器等使用服务的一方。"
  },
  {
    "id": "hint-1-005",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "ネットワーク上の住所",
    "answer": "IPアドレス",
    "note": "IP地址是网络设备的数字标识。"
  },
  {
    "id": "hint-1-006",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "人が覚えやすい名前",
    "answer": "ドメイン名",
    "note": "域名是人类易记的网站名称，如example.com。"
  },
  {
    "id": "hint-1-007",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "ドメイン名をIPアドレスに変換",
    "answer": "DNS",
    "note": "DNS负责把域名翻译成IP地址。"
  },
  {
    "id": "hint-1-008",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "インターネット接続サービス業者",
    "answer": "プロバイダ",
    "note": "PROVIDER是提供网络接入服务的公司。"
  },
  {
    "id": "hint-1-009",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "Webページを見るソフト",
    "answer": "ブラウザ",
    "note": "浏览器是用于显示网页的软件。"
  },
  {
    "id": "hint-1-010",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "Webページの住所",
    "answer": "URL",
    "note": "URL是网页在网络上的地址。"
  },
  {
    "id": "hint-1-011",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "情報を調べる",
    "answer": "Web検索",
    "note": "搜索信息是互联网的主要用途之一。"
  },
  {
    "id": "hint-1-012",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "遠くの人と連絡",
    "answer": "メール・SNS",
    "note": "邮件和SNS是互联网通信服务。"
  },
  {
    "id": "hint-1-013",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "自分の考えを公開",
    "answer": "ブログ・SNS投稿",
    "note": "发布信息是互联网的重要功能。"
  },
  {
    "id": "hint-1-014",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "商品を買う",
    "answer": "ネットショッピング",
    "note": "网购是互联网的商业服务。"
  },
  {
    "id": "hint-1-015",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "銀行取引",
    "answer": "ネットバンキング",
    "note": "网上银行用于转账和查询余额。"
  },
  {
    "id": "hint-1-016",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "データを保存・共有",
    "answer": "クラウドサービス",
    "note": "云服务可以存储和共享数据。"
  },
  {
    "id": "hint-1-017",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "情報が速く広がる",
    "answer": "インターネットの影響力",
    "note": "互联网可以让信息快速传播。"
  },
  {
    "id": "hint-1-018",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "誤情報が広がる",
    "answer": "デマの拡散",
    "note": "错误信息也会随互联网快速扩散。"
  },
  {
    "id": "hint-1-019",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "匿名で誹謗中傷",
    "answer": "悪い影響",
    "note": "匿名性可能导致诽谤中伤。"
  },
  {
    "id": "hint-1-020",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "便利さと危险性",
    "answer": "両方理解する",
    "note": "使用互联网要理解便利性和风险。"
  },
  {
    "id": "hint-2-01",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "お金をだまし取られる",
    "answer": "金銭的被害",
    "note": "网络诈骗可能直接造成钱财损失。"
  },
  {
    "id": "hint-2-02",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "ID・パスワードが盗まれる",
    "answer": "個人情報流出 / フィッシング",
    "note": "账号密码被盗通常和个人信息泄露、钓鱼诈骗有关。"
  },
  {
    "id": "hint-2-03",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "他人の名前で投稿される",
    "answer": "なりすまし",
    "note": "冒充他人身份发布信息。"
  },
  {
    "id": "hint-2-04",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "SNSで悪口を書かれる",
    "answer": "誹謗中傷",
    "note": "在网上写恶意攻击内容会损害他人名誉。"
  },
  {
    "id": "hint-2-05",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "添付ファイルを開いて感染",
    "answer": "ウイルス感染",
    "note": "打开可疑附件可能导致电脑感染恶意软件。"
  },
  {
    "id": "hint-2-06",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "偽サイト、ID、パスワード",
    "answer": "フィッシング詐欺",
    "note": "假网站诱导输入账号和密码。"
  },
  {
    "id": "hint-2-07",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "クリック、登録完了、料金請求",
    "answer": "ワンクリック詐欺",
    "note": "点击后突然要求付款。"
  },
  {
    "id": "hint-2-08",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "使用していないのに請求",
    "answer": "架空請求詐欺",
    "note": "没有使用服务却被要求付费。"
  },
  {
    "id": "hint-2-09",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "ウイルス感染、電話してください",
    "answer": "サポート詐欺",
    "note": "假警告诱导用户联系假客服。"
  },
  {
    "id": "hint-2-10",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "遠隔操作ソフトを入れさせる",
    "answer": "サポート詐欺",
    "note": "让用户安装远程控制软件是常见手法。"
  },
  {
    "id": "hint-2-11",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "商品が届かない、極端に安い",
    "answer": "偽通販サイト",
    "note": "假网购网站常用超低价吸引付款。"
  },
  {
    "id": "hint-2-12",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "必ず儲かる、暗号資産、投資",
    "answer": "投資詐欺",
    "note": "承诺稳赚的投资信息要警惕。"
  },
  {
    "id": "hint-2-13",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "恋愛感情、送金",
    "answer": "ロマンス詐欺",
    "note": "利用恋爱感情骗取金钱。"
  },
  {
    "id": "hint-2-14",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "QRコード、偽サイト",
    "answer": "QRコード詐欺",
    "note": "二维码可能把用户带到假网站。"
  },
  {
    "id": "hint-2-15",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "家族・友人・官公庁を装う",
    "answer": "なりすまし詐欺",
    "note": "假装成可信身份诱导转账或输入信息。"
  },
  {
    "id": "hint-2-16",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "このメールを○人に送って",
    "answer": "チェーンメール",
    "note": "要求继续转发的邮件。"
  },
  {
    "id": "hint-2-17",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "広告・詐欺・ウイルス付きメール",
    "answer": "迷惑メール",
    "note": "不需要且可能危险的邮件。"
  },
  {
    "id": "hint-2-18",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "夜遅くまでスマホを使い睡眠不足",
    "answer": "健康面への影響",
    "note": "过度使用手机会影响睡眠。"
  },
  {
    "id": "hint-2-19",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "やめたいのにやめられない",
    "answer": "ネット依存",
    "note": "想停止却停不下来是依赖的题眼。"
  },
  {
    "id": "hint-2-20",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "SNSで比較して不安になる",
    "answer": "精神的ストレス",
    "note": "网络使用也可能造成心理压力。"
  },
  {
    "id": "hint-007",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "作品、無断コピー",
    "answer": "著作権",
    "note": "文章、图片、音乐等作品受到保护。"
  },
  {
    "id": "hint-008",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "顔写真、無断投稿",
    "answer": "肖像権",
    "note": "未经本人同意使用照片可能侵害肖像权。"
  },
  {
    "id": "hint-009",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "有名人、広告利用",
    "answer": "パブリシティ権",
    "note": "名人形象有商业价值。"
  },
  {
    "id": "hint-010",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "他人のID、無断ログイン",
    "answer": "不正アクセス禁止法",
    "note": "禁止未经许可登录他人账号。"
  },
  {
    "id": "hint-011",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "一斉送信、メールアドレスを隠す",
    "answer": "BCC",
    "note": "群发邮件时可隐藏收件人地址。"
  },
  {
    "id": "hint-012",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "悪口、デマ、社会的評価低下",
    "answer": "名誉毀損",
    "note": "损害他人社会评价可能构成名誉毁损。"
  },
  {
    "id": "hint-013",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "複数情報源で確認",
    "answer": "情報の偏り対策",
    "note": "不要只相信单一来源。"
  },
  {
    "id": "hint-014",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "ドメイン名、IPアドレス",
    "answer": "DNS",
    "note": "DNS负责把域名转换为IP地址。"
  },
  {
    "id": "hint-015",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "変換、翻訳",
    "answer": "名前解決",
    "note": "DNS执行名称解析工作。"
  },
  {
    "id": "hint-016",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Webページ",
    "answer": "HTTP",
    "note": "HTTP是万维网通信的基础协议。"
  },
  {
    "id": "hint-017",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "鍵アイコン、暗号化",
    "answer": "HTTPS",
    "note": "HTTPS使用加密保护通信，浏览器显示锁图标。"
  },
  {
    "id": "hint-017b",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "メール送信",
    "answer": "SMTP",
    "note": "SMTP协议用于发送邮件。"
  },
  {
    "id": "hint-017c",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "メールダウンロード",
    "answer": "POP3",
    "note": "POP3协议用于下载邮件到本地。"
  },
  {
    "id": "hint-017d",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "複数端末、同期",
    "answer": "IMAP",
    "note": "IMAP支持多个设备同步管理邮件。"
  },
  {
    "id": "hint-017e",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "プロフィール、投稿、コメント",
    "answer": "SNS",
    "note": "SNS的特征是个人主页、内容发布和互动评论。"
  },
  {
    "id": "hint-017f",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "互联网上的保存",
    "answer": "クラウドサービス",
    "note": "云服务把数据保存在网络服务器上。"
  },
  {
    "id": "hint-017g",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "无线LAN接続",
    "answer": "Wi-Fi",
    "note": "Wi-Fi是无线网络连接方式。"
  },
  {
    "id": "hint-017h",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Wi-Fi暗号化方式",
    "answer": "WPA2 / WPA3",
    "note": "WPA2和WPA3是Wi-Fi的安全协议。"
  },
  {
    "id": "hint-017i",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "第三者に見られない",
    "answer": "暗号化",
    "note": "加密可以防止通信内容被窃听。"
  },
  {
    "id": "hint-017j",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "通信暗号化技術",
    "answer": "SSL / TLS",
    "note": "SSL/TLS用于加密网络通信。"
  },
  {
    "id": "hint-017k",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "公共Wi-Fi、危険",
    "answer": "Wi-Fi利用の注意",
    "note": "公共Wi-Fi需要谨慎，避免访问敏感信息。"
  },
  {
    "id": "hint-017l",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "招待されていない人の参加",
    "answer": "SNSの注意点",
    "note": "SNS不能做的是让未被邀请的人参加。"
  },
  {
    "id": "hint-017m",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Wi-Fiネットワーク名",
    "answer": "SSID",
    "note": "SSID是Wi-Fi的网络名称。"
  },
  {
    "id": "hint-017n",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "AIへの指示文",
    "answer": "プロンプト",
    "note": "プロンプト是给生成AI的输入指令。"
  },
  {
    "id": "hint-017o",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "生成AI 内容確認",
    "answer": "誤情報の可能性",
    "note": "AI输出可能包含错误，需要人工确认。"
  },
  {
    "id": "hint-018",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "悪意あるソフト総称",
    "answer": "マルウェア",
    "note": "恶意软件的总称。"
  },
  {
    "id": "hint-019",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "自己増殖",
    "answer": "ワーム",
    "note": "蠕虫能自我复制扩散。"
  },
  {
    "id": "hint-020",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "正常ソフトに偽装",
    "answer": "トロイの木馬",
    "note": "伪装成正常软件。"
  },
  {
    "id": "hint-021",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "暗号化して身代金",
    "answer": "ランサムウェア",
    "note": "加密文件并要求赎金。"
  },
  {
    "id": "hint-022",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "本人確認",
    "answer": "ユーザー認証",
    "note": "确认正在使用的人是不是本人。"
  },
  {
    "id": "hint-023",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "本物のサイト、CA、HTTPS",
    "answer": "電子証明書",
    "note": "证明网站和通信对象的正当性。"
  },
  {
    "id": "hint-024",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "知識・所持・生体",
    "answer": "多要素認証",
    "note": "两种以上不同认证要素组合。"
  },
  {
    "id": "hint-7-001",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "本人確認",
    "answer": "ユーザー認証",
    "note": "确认正在使用的人是不是本人。"
  },
  {
    "id": "hint-7-002",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "長く複雑な文字",
    "answer": "パスワード強度",
    "note": "强密码需要长度和复杂性。"
  },
  {
    "id": "hint-7-003",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "すべての組み合わせを試す",
    "answer": "総当たり攻撃",
    "note": "暴力攻击尝试所有可能的组合。"
  },
  {
    "id": "hint-7-004",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "よく使う単語やパスワード",
    "answer": "辞書攻撃",
    "note": "字典攻击使用常见密码列表。"
  },
  {
    "id": "hint-7-005",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "漏洩したパスワード、他サービス",
    "answer": "パスワードリスト攻撃",
    "note": "密码列表攻击利用泄露的密码。"
  },
  {
    "id": "hint-7-006",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "指紋、顔、虹彩",
    "answer": "生体認証",
    "note": "使用身体特征进行认证。"
  },
  {
    "id": "hint-7-007",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "指で触れる認証",
    "answer": "指紋認証",
    "note": "指纹是常见的生体认证方式。"
  },
  {
    "id": "hint-7-008",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "パスワード＋スマホ確認",
    "answer": "多要素認証",
    "note": "组合两种以上不同类型的认证。"
  },
  {
    "id": "hint-7-009",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "パスワード、暗証番号",
    "answer": "知識情報",
    "note": "只有自己知道的信息。"
  },
  {
    "id": "hint-7-010",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "スマホ、ICカード",
    "answer": "所持情報",
    "note": "持有某个设备或物品。"
  },
  {
    "id": "hint-7-011",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "指紋、顔、虹彩",
    "answer": "生体情報",
    "note": "身体的生物特征。"
  },
  {
    "id": "hint-7-012",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "読み取れない形にする",
    "answer": "暗号化",
    "note": "把数据变成无法直接读取的形式。"
  },
  {
    "id": "hint-7-013",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "鍵アイコン、HTTPS",
    "answer": "SSL / TLS",
    "note": "使用加密协议保护通信。"
  },
  {
    "id": "hint-7-014",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "本物のサイトと証明",
    "answer": "電子証明書",
    "note": "证明网站的身份真实性。"
  },
  {
    "id": "hint-7-015",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "有害サイトの遮断",
    "answer": "フィルタリング",
    "note": "阻止访问危险或有害网站。"
  },
  {
    "id": "hint-7-016",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "心理を突いて騙す",
    "answer": "ソーシャルエンジニアリング",
    "note": "利用心理弱点获取信息。"
  },
  {
    "id": "hint-7-017",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "偽メールでID・パスワード",
    "answer": "フィッシング",
    "note": "伪装成可信来源的钓鱼攻击。"
  },
  {
    "id": "hint-7-018",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "カードの磁気情報読み取り",
    "answer": "スキミング",
    "note": "非法读取卡片磁条信息。"
  },
  {
    "id": "hint-7-019",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "OSやアプリの最新版",
    "answer": "OS更新",
    "note": "保持系统和应用更新以修补漏洞。"
  },
  {
    "id": "hint-7-020",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "データをコピー保存",
    "answer": "バックアップ",
    "note": "定期备份防止数据丢失。"
  },
  {
    "id": "hint-7-021",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "バックアップから元に戻す",
    "answer": "復元",
    "note": "从备份恢复数据或系统。"
  },
  {
    "id": "hint-7-022",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "2つのパスワード",
    "answer": "多要素認証ではない",
    "note": "两个密码都是知识因素，不算多要素。"
  },
  {
    "id": "hint-7-023",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "電話や訪問で密码を求める",
    "answer": "ソーシャルエンジニアリング",
    "note": "通过人际交往骗取密码。"
  },
  {
    "id": "hint-3-001",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "作品、無断コピー",
    "answer": "著作権",
    "note": "作品を勝手に複製しない。"
  },
  {
    "id": "hint-3-002",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "出典、必要最小限",
    "answer": "引用",
    "note": "引用条件の題眼。"
  },
  {
    "id": "hint-3-003",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "違法と知ってダウンロード",
    "answer": "違法ダウンロード",
    "note": "違法ファイル入手。"
  },
  {
    "id": "hint-3-004",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "無断でネット公開",
    "answer": "違法アップロード",
    "note": "公開する側の違反。"
  },
  {
    "id": "hint-3-005",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "顔写真、無断投稿",
    "answer": "肖像権",
    "note": "本人の同意が必要。"
  },
  {
    "id": "hint-3-006",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "有名人、広告利用",
    "answer": "パブリシティ権",
    "note": "商業的価値の利用。"
  },
  {
    "id": "hint-3-007",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "私生活、勝手に公開",
    "answer": "プライバシーの権利",
    "note": "個人の私生活を守る。"
  },
  {
    "id": "hint-3-008",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "悪口、社会的評価低下",
    "answer": "名誉毀損",
    "note": "評判を下げる投稿。"
  },
  {
    "id": "hint-3-009",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "わいせつ画像、公開",
    "answer": "わいせつ物頒布",
    "note": "有害情報の頒布。"
  },
  {
    "id": "hint-3-010",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "通信販売、返品条件",
    "answer": "特定商取引法",
    "note": "販売者表示が題眼。"
  },
  {
    "id": "hint-3-011",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "クリックミス、契約確認",
    "answer": "電子契約法",
    "note": "操作ミス救済。"
  },
  {
    "id": "hint-3-012",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "広告なのに広告と隠す",
    "answer": "ステマ規制",
    "note": "広告表示を隠さない。"
  },
  {
    "id": "hint-3-013",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "実際より著しくよく見せる",
    "answer": "景品表示法",
    "note": "不当表示の防止。"
  },
  {
    "id": "hint-3-014",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "他人のID、無断ログイン",
    "answer": "不正アクセス禁止法",
    "note": "認証情報の悪用。"
  },
  {
    "id": "hint-3-015",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "利用目的、個人情報",
    "answer": "個人情報保護法",
    "note": "個人情報の適切な管理。"
  },
  {
    "id": "hint-3-016",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "青少年、有害情報",
    "answer": "青少年インターネット環境整備法",
    "note": "青少年を守る法律。"
  },
  {
    "id": "hint-3-017",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "広告メール、配信停止",
    "answer": "特定電子メール法",
    "note": "広告メールのルール。"
  },
  {
    "id": "hint-3-018",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "出会い系、児童被害",
    "answer": "出会い系サイト規制法",
    "note": "被害防止が目的。"
  },
  {
    "id": "hint-3-019",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "社会変化、法律更新",
    "answer": "インターネット関連法規の改正",
    "note": "法改正の理由。"
  },
  {
    "id": "hint-3-020",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "本人の許可、同意",
    "answer": "同意",
    "note": "公開前の確認。"
  },
  {
    "id": "hint-4-001",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "投稿前、確認、責任",
    "answer": "情報発信者のモラル",
    "note": "発信者として確認する。"
  },
  {
    "id": "hint-4-002",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "公開範囲、誰に見えるか",
    "answer": "公開範囲",
    "note": "投稿の見え方を確認。"
  },
  {
    "id": "hint-4-003",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "氏名、住所、学校",
    "answer": "個人情報",
    "note": "個人を特定できる情報。"
  },
  {
    "id": "hint-4-004",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "写真、GPS、自宅が分かる",
    "answer": "位置情報",
    "note": "画像から漏れる情報。"
  },
  {
    "id": "hint-4-005",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "悪口、攻撃的投稿",
    "answer": "誹謗中傷",
    "note": "相手を傷つける投稿。"
  },
  {
    "id": "hint-4-006",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "証拠を残す、相談",
    "answer": "嫌がらせ対応",
    "note": "反応せず相談。"
  },
  {
    "id": "hint-4-007",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "一斉送信、アドレスを隠す",
    "answer": "BCC",
    "note": "宛先を見せない。"
  },
  {
    "id": "hint-4-008",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "共有相手にも見える",
    "answer": "CC",
    "note": "見える共有。"
  },
  {
    "id": "hint-4-009",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "件名、本文、宛先",
    "answer": "メールマナー",
    "note": "メールの基本。"
  },
  {
    "id": "hint-4-010",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "短文、誤解、配慮",
    "answer": "チャットマナー",
    "note": "短いやり取りほど注意。"
  },
  {
    "id": "hint-4-011",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "未確認情報、拡散",
    "answer": "デマ",
    "note": "広げる前に確認。"
  },
  {
    "id": "hint-4-012",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "批判が集中",
    "answer": "炎上",
    "note": "投稿が大きな批判を受ける。"
  },
  {
    "id": "hint-4-013",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "同じ情報ばかり見る",
    "answer": "情報の偏り",
    "note": "判断が偏る。"
  },
  {
    "id": "hint-4-014",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "好みに合う情報だけ表示",
    "answer": "フィルターバブル",
    "note": "表示の偏り。"
  },
  {
    "id": "hint-4-015",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "同じ意見が強まる",
    "answer": "エコーチェンバー",
    "note": "反響で信念が強まる。"
  },
  {
    "id": "hint-4-016",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "公式、複数情報源",
    "answer": "情報の偏り対策",
    "note": "複数で確認。"
  },
  {
    "id": "hint-4-017",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "AIの回答、確認",
    "answer": "生成AI内容確認",
    "note": "そのまま信じない。"
  },
  {
    "id": "hint-4-018",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "出典、公式情報",
    "answer": "出典確認",
    "note": "根拠を見る。"
  },
  {
    "id": "hint-5-001",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "データを小さく分ける",
    "answer": "パケット通信",
    "note": "通信の基本。"
  },
  {
    "id": "hint-5-002",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "ネット上の住所",
    "answer": "IPアドレス",
    "note": "機器を識別。"
  },
  {
    "id": "hint-5-003",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "経路を選ぶ機器",
    "answer": "ルータ",
    "note": "通信の中継。"
  },
  {
    "id": "hint-5-004",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "ドメイン名、IPアドレス",
    "answer": "DNS",
    "note": "名前解決。"
  },
  {
    "id": "hint-5-005",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Webを見るソフト",
    "answer": "ブラウザ",
    "note": "閲覧ソフト。"
  },
  {
    "id": "hint-5-006",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Web上の住所",
    "answer": "URL",
    "note": "ページの場所。"
  },
  {
    "id": "hint-5-007",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Web通信の決まり",
    "answer": "HTTP",
    "note": "Web通信プロトコル。"
  },
  {
    "id": "hint-5-008",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "暗号化されたWeb通信",
    "answer": "HTTPS",
    "note": "安全性が高い通信。"
  },
  {
    "id": "hint-5-009",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "メール送信",
    "answer": "SMTP",
    "note": "送信プロトコル。"
  },
  {
    "id": "hint-5-010",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "端末にメールを取り込む",
    "answer": "POP3",
    "note": "受信方式。"
  },
  {
    "id": "hint-5-011",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "サーバ上でメール管理",
    "answer": "IMAP",
    "note": "複数端末で同期。"
  },
  {
    "id": "hint-5-012",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "人とつながるサービス",
    "answer": "SNS",
    "note": "交流サービス。"
  },
  {
    "id": "hint-5-013",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "利用者が作るメディア",
    "answer": "CGM",
    "note": "口コミや投稿サイト。"
  },
  {
    "id": "hint-5-014",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Wi-Fiのネットワーク名",
    "answer": "SSID",
    "note": "接続先名。"
  },
  {
    "id": "hint-5-015",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "Wi-Fiの暗号化方式",
    "answer": "WPA2 / WPA3",
    "note": "無線LAN保護。"
  },
  {
    "id": "hint-5-016",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "ネット上に保存・処理",
    "answer": "クラウドサービス",
    "note": "クラウドの題眼。"
  },
  {
    "id": "hint-5-017",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "AIへの指示文",
    "answer": "プロンプト",
    "note": "生成AIに入力する。"
  },
  {
    "id": "hint-5-018",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "生成AIの回答を確認",
    "answer": "生成AI利用時の注意",
    "note": "誤りの可能性。"
  },
  {
    "id": "hint-6-001",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "悪意あるソフト総称",
    "answer": "マルウェア",
    "note": "総称が題眼。"
  },
  {
    "id": "hint-6-002",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "他のファイルに寄生",
    "answer": "ウイルス",
    "note": "寄生して広がる。"
  },
  {
    "id": "hint-6-003",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "自己増殖",
    "answer": "ワーム",
    "note": "自分で増える。"
  },
  {
    "id": "hint-6-004",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "正常ソフトに偽装",
    "answer": "トロイの木馬",
    "note": "偽装が題眼。"
  },
  {
    "id": "hint-6-005",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "情報を盗む",
    "answer": "スパイウェア",
    "note": "盗み見。"
  },
  {
    "id": "hint-6-006",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "暗号化して身代金",
    "answer": "ランサムウェア",
    "note": "身代金要求。"
  },
  {
    "id": "hint-6-007",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "広告を表示",
    "answer": "アドウェア",
    "note": "広告表示。"
  },
  {
    "id": "hint-6-008",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "遠隔操作される",
    "answer": "ボット",
    "note": "外部から操られる。"
  },
  {
    "id": "hint-6-009",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "添付ファイルを開く",
    "answer": "感染経路",
    "note": "メール添付に注意。"
  },
  {
    "id": "hint-6-010",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "メールやSMSのリンク",
    "answer": "感染経路",
    "note": "不正サイト誘導。"
  },
  {
    "id": "hint-6-011",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "不正Webサイト、不正アプリ",
    "answer": "感染経路",
    "note": "怪しいサイトやアプリ。"
  },
  {
    "id": "hint-6-012",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "USBメモリ",
    "answer": "感染経路",
    "note": "接続で感染。"
  },
  {
    "id": "hint-6-013",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "脆弱性対策",
    "answer": "OSやアプリの更新",
    "note": "更新が重要。"
  },
  {
    "id": "hint-6-014",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "復旧に備える",
    "answer": "バックアップ",
    "note": "ランサム対策にも重要。"
  },
  {
    "id": "hint-6-015",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "感染したかも、切断、相談",
    "answer": "感染時の対応",
    "note": "広げないため切断。"
  }
];

const quizzes = [
  {
    "id": "quiz-1-001",
    "chapter": "第1章 インターネットの基礎",
    "question": "世界中のコンピュータやネットワークを相互に接続した世界規模のネットワークを何というか。",
    "answer": "インターネット",
    "explanation": "题眼是 世界中、ネットワーク、相互接続。互联网是全球互联的网络。",
    "hint": "世界中・ネットワーク・相互接続"
  },
  {
    "id": "quiz-1-002",
    "chapter": "第1章 インターネットの基礎",
    "question": "インターネットとWebの関係として正しいものはどれか。",
    "answer": "Webはインターネット上で利用できるサービスの一つである。",
    "explanation": "互联网是整体基础设施，Web只是其中的一种服务（浏览网页）。",
    "hint": "Webはサービスの一つ"
  },
  {
    "id": "quiz-1-003",
    "chapter": "第1章 インターネットの基礎",
    "question": "Webページを見るために使うソフトウェアは何か。",
    "answer": "ブラウザ",
    "explanation": "Chrome、Safari、Edge等都是浏览器，用于显示网页内容。",
    "hint": "Webページを表示するソフト"
  },
  {
    "id": "quiz-1-004",
    "chapter": "第1章 インターネットの基礎",
    "question": "Webページの住所を表すものは何か。",
    "answer": "URL",
    "explanation": "URL是网页在互联网上的地址，如https://example.com。",
    "hint": "Webページの住所"
  },
  {
    "id": "quiz-1-005",
    "chapter": "第1章 インターネットの基礎",
    "question": "サービスを提供する側のコンピュータを何이라고いますか。",
    "answer": "サーバ",
    "explanation": "服务器保存网页、数据等信息，并响应客户端的请求。",
    "hint": "サービスを提供する側"
  },
  {
    "id": "quiz-1-006",
    "chapter": "第1章 インターネットの基礎",
    "question": "サービスを利用する側の端末やソフトを何이라고いますか。",
    "answer": "クライアント",
    "explanation": "客户端是手机、电脑、浏览器等，使用服务器提供的服务。",
    "hint": "サービスを利用する側"
  },
  {
    "id": "quiz-1-007",
    "chapter": "第1章 インターネットの基礎",
    "question": "ネットワーク上の機器を識別する住所のような番号は何か。",
    "answer": "IPアドレス",
    "explanation": "IP地址是分配给网络设备的数字标识，如192.168.1.1。",
    "hint": "ネットワーク上の住所"
  },
  {
    "id": "quiz-1-008",
    "chapter": "第1章 インターネットの基礎",
    "question": "ドメイン名をIPアドレスに変換する仕組みは何か。",
    "answer": "DNS",
    "explanation": "DNS（Domain Name System）负责把人类易记的域名转换为电脑可识别的IP地址。",
    "hint": "ドメイン名をIPに変換"
  },
  {
    "id": "quiz-1-009",
    "chapter": "第1章 インターネットの基礎",
    "question": "インターネット接続サービス業者を何というか。",
    "answer": "プロバイダ",
    "explanation": "PROVIDER是提供网络接入服务的公司，如宽带公司、手机运营商。",
    "hint": "接続サービス業者"
  },
  {
    "id": "quiz-1-010",
    "chapter": "第1章 インターネットの基礎",
    "question": "インターネットを利用して遠くの人と文字や画像で連絡する例として適切なものはどれか。",
    "answer": "電子メールやSNS",
    "explanation": "邮件和SNS是互联网的通信服务，可以远距离传递文字、图片等信息。",
    "hint": "遠くの人と連絡"
  },
  {
    "id": "quiz-1-011",
    "chapter": "第1章 インターネットの基礎",
    "question": "インターネットで商品を購入するサービスは何か。",
    "answer": "ネットショッピング",
    "explanation": "网购是互联网的商业服务，可以在家购买各种商品。",
    "hint": "商品を購入"
  },
  {
    "id": "quiz-1-012",
    "chapter": "第1章 インターネットの基礎",
    "question": "インターネットを利用して残高照会やコラーを行うサービスは何か。",
    "answer": "ネットバンキング",
    "explanation": "网上银行用于查询余额、转账等银行交易。",
    "hint": "銀行取引・コラー・コラー"
  },
  {
    "id": "quiz-1-013",
    "chapter": "第1章 インターネットの基礎",
    "question": "互联网的好影响として適切なものはどれか。",
    "answer": "情報をすばやく入手・発信できる。",
    "explanation": "互联网可以让信息快速获取和传播，这是其正面影响。",
    "hint": "情報入手・発信が速くなる"
  },
  {
    "id": "quiz-1-014",
    "chapter": "第1章 インターネットの基礎",
    "question": "互联网的不好影响として適切なものはどれか。",
    "answer": "誤情報や個人情報が広がる危険がある。",
    "explanation": "互联网的风险包括错误信息扩散和个人信息泄露。",
    "hint": "誤情報・個人情報流出"
  },
  {
    "id": "quiz-1-015",
    "chapter": "第1章 インターネットの基礎",
    "question": "互联网利用时的基本心态として適切なものはどれか。",
    "answer": "便利さだけでなく危険性も理解し、情報や個人情報の扱いに注意する。",
    "explanation": "使用互联网要理解双面性，既要利用便利性，也要注意安全。",
    "hint": "便利さと危险性の両方理解"
  },
  {
    "id": "quiz-2-01",
    "chapter": "第2章 インターネットでの被害",
    "question": "銀行を装ったメールから偽サイトへ誘導し、IDとパスワードを入力させる詐欺は何か。",
    "answer": "フィッシング詐欺",
    "explanation": "题眼是 偽サイト、ID、パスワード。",
    "hint": "偽サイト、ID、パスワード"
  },
  {
    "id": "quiz-2-02",
    "chapter": "第2章 インターネットでの被害",
    "question": "リンクをクリックしただけで登録完了と料金請求が表示された。これは何か。",
    "answer": "ワンクリック詐欺",
    "explanation": "题眼是 クリック、登録完了、料金請求。",
    "hint": "クリック、登録完了、料金請求"
  },
  {
    "id": "quiz-2-03",
    "chapter": "第2章 インターネットでの被害",
    "question": "使用していないサービスの料金を請求された。これは何か。",
    "answer": "架空請求詐欺",
    "explanation": "使用していないのに請求される点が题眼。",
    "hint": "使用していないのに請求"
  },
  {
    "id": "quiz-2-04",
    "chapter": "第2章 インターネットでの被害",
    "question": "画面にウイルス感染と表示され、電話するよう求められた。これは何か。",
    "answer": "サポート詐欺",
    "explanation": "假警告和电话要求是サポート詐欺的典型题眼。",
    "hint": "ウイルス感染、電話してください"
  },
  {
    "id": "quiz-2-05",
    "chapter": "第2章 インターネットでの被害",
    "question": "必ず儲かると言われ、暗号資産への投資を勧められた。これは何か。",
    "answer": "投資詐欺",
    "explanation": "必ず儲かる、暗号資産、投資が题眼。",
    "hint": "必ず儲かる、投資"
  },
  {
    "id": "quiz-2-06",
    "chapter": "第2章 インターネットでの被害",
    "question": "恋愛感情を利用され、送金を求められた。これは何か。",
    "answer": "ロマンス詐欺",
    "explanation": "恋愛感情と送金が出たらロマンス詐欺。",
    "hint": "恋愛感情、送金"
  },
  {
    "id": "quiz-2-07",
    "chapter": "第2章 インターネットでの被害",
    "question": "広告、詐欺、ウイルス付きの可能性がある不要なメールを何というか。",
    "answer": "迷惑メール",
    "explanation": "不要で危険なメールは迷惑メール。",
    "hint": "広告・詐欺・ウイルス付きメール"
  },
  {
    "id": "quiz-2-08",
    "chapter": "第2章 インターネットでの被害",
    "question": "このメールを10人に送ってくださいと書かれたメールは何か。",
    "answer": "チェーンメール",
    "explanation": "転送を求めるメールはチェーンメール。",
    "hint": "このメールを○人に送って"
  },
  {
    "id": "quiz-2-09",
    "chapter": "第2章 インターネットでの被害",
    "question": "IDやパスワードが外部に漏れる被害を何というか。",
    "answer": "個人情報流出",
    "explanation": "IDやパスワードは個人情報に関係する。",
    "hint": "ID・パスワードが盗まれる"
  },
  {
    "id": "quiz-2-10",
    "chapter": "第2章 インターネットでの被害",
    "question": "やめたいのにネット利用をやめられない状態を何というか。",
    "answer": "ネット依存",
    "explanation": "やめたいのにやめられない点が题眼。",
    "hint": "やめたいのにやめられない"
  },
  {
    "id": "quiz-2-11",
    "chapter": "第2章 インターネットでの被害",
    "question": "夜遅くまでスマホを使い、睡眠不足や目の疲れが出ることは何にあたるか。",
    "answer": "健康面への影響",
    "explanation": "睡眠不足、目の疲れ、肩こりは健康面への影響。",
    "hint": "睡眠不足、目の疲れ"
  },
  {
    "id": "quiz-2-12",
    "chapter": "第2章 インターネットでの被害",
    "question": "怪しい料金請求を受けたときの正しい対応は何か。",
    "answer": "支払わない、連絡しない、相談する",
    "explanation": "一人で判断せず、支払わず、相手に連絡せず、信頼できる人に相談する。",
    "hint": "支払わない、連絡しない、相談する"
  },
  {
    "id": "quiz-005",
    "chapter": "第3章 インターネット関連の法規",
    "question": "他人のイラストを許可なくコピーして自分のサイトに載せた。何の問題か。",
    "answer": "著作権",
    "explanation": "作品の無断コピーなので著作権が問題になる。",
    "hint": "作品、無断コピー"
  },
  {
    "id": "quiz-006",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "複数人にメールを送るとき、互いのメールアドレスを隠したい。使う欄は何か。",
    "answer": "BCC",
    "explanation": "BCCは受信者同士にメールアドレスを見せない送信方法。",
    "hint": "一斉送信、メールアドレスを隠す"
  },
  {
    "id": "quiz-007",
    "chapter": "第5章 インターネットのしくみ",
    "question": "ドメイン名とIPアドレスを対応させる仕組みは何か。",
    "answer": "DNS",
    "explanation": "DNSはドメイン名をIPアドレスに対応させる。",
    "hint": "ドメイン名、IPアドレス"
  },
  {
    "id": "quiz-008",
    "chapter": "第6章 コンピュータウイルス",
    "question": "ファイルを暗号化し、復旧のために金銭を要求するマルウェアは何か。",
    "answer": "ランサムウェア",
    "explanation": "暗号化して身代金を要求する点が题眼。",
    "hint": "暗号化して身代金"
  },
  {
    "id": "quiz-009",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "パスワードとスマホ確認など、異なる種類の認証を組み合わせる方式は何か。",
    "answer": "多要素認証",
    "explanation": "知識、所持、生体のうち2種類以上を組み合わせる。",
    "hint": "知識・所持・生体"
  },
  {
    "id": "quiz-7-001",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "パスワードの管理において、短くて単純なパスワードの何が問題か。",
    "answer": "簡単に推測・破解される",
    "explanation": "弱密码容易被総当たり攻撃或辞書攻撃破解。",
    "hint": "パスワード強度"
  },
  {
    "id": "quiz-7-002",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "すべての可能な組み合わせを試すパスワード攻撃は何か。",
    "answer": "総当たり攻撃（ブルートフォース攻撃）",
    "explanation": "暴力攻击尝试所有可能的字符组合。",
    "hint": "すべての組み合わせを試す"
  },
  {
    "id": "quiz-7-003",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "よく使われる単語やパスワードのリストを使って行う攻撃は何か。",
    "answer": "辞書攻撃",
    "explanation": "字典攻击使用常见密码和单词列表。",
    "hint": "よく使うパスワードを試す"
  },
  {
    "id": "quiz-7-004",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "他のウェブサイトで漏洩したパスワードを使い回す攻撃は何か。",
    "answer": "パスワードリスト攻撃",
    "explanation": "攻击者利用泄露的密码尝试其他网站。",
    "hint": "漏洩したパスワード再利用"
  },
  {
    "id": "quiz-7-005",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "指紋や顔の特徴を使って本人確認を行う方式は何か。",
    "answer": "生体認証",
    "explanation": "生体認証使用身体的生物特征进行身份确认。",
    "hint": "指紋、顔、虹彩"
  },
  {
    "id": "quiz-7-006",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "パスワードと手机の验证码など、異なる種類の認証を組み合わせる方式是何か。",
    "answer": "多要素認証",
    "explanation": "多要素認証组合知識、所指、生体中的两种以上。",
    "hint": "知識、所持、生体から2つ以上"
  },
  {
    "id": "quiz-7-007",
    "chapter": "第7章 インターネットセキュリティ",
    "question": " два пароля（两个密码）を組み合わせることは多要素認証と言えるか。",
    "answer": "いいえ、多要素認証ではない",
    "explanation": "两个密码都是知識情報，只有一种认证类型。",
    "hint": "知識だけ2つでも多要素ではない"
  },
  {
    "id": "quiz-7-008",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "通信の内容を暗号化によって保護する协议はどれか。",
    "answer": "SSL / TLS（HTTPS）",
    "explanation": "SSL/TLS 用于加密网络通信，保护数据隐私。",
    "hint": "通信暗号化プロトコル"
  },
  {
    "id": "quiz-7-009",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "Webサイトの真正性を证明するものは何か。",
    "answer": "電子証明書",
    "explanation": "电子证书由 CA 颁发，证明网站的真实身份。",
    "hint": "本物のサイトを証明"
  },
  {
    "id": "quiz-7-010",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "危险なウェブサイトへのアクセスを遮断する方式是何か。",
    "answer": "フィルタリング（URLフィルタリング）",
    "explanation": "过滤可以阻止访问危险或有害的网站。",
    "hint": "有害サイトの遮断"
  },
  {
    "id": "quiz-7-011",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "人間の心理弱点，利用して情報を骗し取る攻击手法は何か。",
    "answer": "ソーシャルエンジニアリング",
    "explanation": "社会工程学利用心理弱点绕过技术防护。",
    "hint": "心理を突いて情報を骗す"
  },
  {
    "id": "quiz-7-012",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "银行卡の磁気情報を不正に读取取る行为は何か。",
    "answer": "スキミング",
    "explanation": "スキミング是读取卡片磁条信息的犯罪行为。",
    "hint": "カードの磁気情報を不正読み取り"
  },
  {
    "id": "quiz-7-013",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "スマートフォン安全のため、重要な対策は何ですか。",
    "answer": "OSや应用软件的更新",
    "explanation": "保持系统和应用更新可以修补安全漏洞。",
    "hint": "OS更新"
  },
  {
    "id": "quiz-7-014",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "勒索软件被害でファイルを恢复する方法として、最も確実なものは何か。",
    "answer": "バックアップからの復元",
    "explanation": "定期备份是应对数据丢失和勒索软件的最有效方法。",
    "hint": "バックアップからの復元"
  },
  {
    "id": "quiz-7-015",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "フィッシングメールを見分けるためのポイントとして、最も重要なものは何か。",
    "answer": "送信元の確認とリンク先の検証",
    "explanation": "不要点击可疑链接，验证网站的真实性。",
    "hint": "送信元の確認とリンク先の検証"
  },
  {
    "id": "quiz-3-001",
    "chapter": "第3章 インターネット関連の法規",
    "question": "他人が作った写真を無断で自分のサイトに載せた。関係する権利は何か。",
    "answer": "著作権",
    "explanation": "写真は著作物として保護される。",
    "hint": "作品、無断利用"
  },
  {
    "id": "quiz-3-002",
    "chapter": "第3章 インターネット関連の法規",
    "question": "違法に公開された動画だと知りながら保存する行為は何か。",
    "answer": "違法ダウンロード",
    "explanation": "違法と知って入手する点が題眼。",
    "hint": "違法と知ってダウンロード"
  },
  {
    "id": "quiz-3-003",
    "chapter": "第3章 インターネット関連の法規",
    "question": "友人の顔写真を許可なく SNS に投稿すると問題になる権利は何か。",
    "answer": "肖像権",
    "explanation": "顔写真の無断公開が題眼。",
    "hint": "顔写真、無断投稿"
  },
  {
    "id": "quiz-3-004",
    "chapter": "第3章 インターネット関連の法規",
    "question": "有名人の写真を広告に無断利用する場合に問題になる権利は何か。",
    "answer": "パブリシティ権",
    "explanation": "有名人の商業的価値を使っている。",
    "hint": "有名人、広告利用"
  },
  {
    "id": "quiz-3-005",
    "chapter": "第3章 インターネット関連の法規",
    "question": "掲示板に個人名を出して評判を下げる投稿をした。何にあたるか。",
    "answer": "名誉毀損",
    "explanation": "社会的評価の低下が題眼。",
    "hint": "社会的評価低下"
  },
  {
    "id": "quiz-3-006",
    "chapter": "第3章 インターネット関連の法規",
    "question": "ネット通販で販売者情報や返品条件を示す法律は何か。",
    "answer": "特定商取引法",
    "explanation": "通信販売の表示ルール。",
    "hint": "通信販売、返品条件"
  },
  {
    "id": "quiz-3-007",
    "chapter": "第3章 インターネット関連の法規",
    "question": "注文前の確認画面や操作ミス救済に関係する法律は何か。",
    "answer": "電子契約法",
    "explanation": "電子契約での入力ミス対策。",
    "hint": "クリックミス、確認"
  },
  {
    "id": "quiz-3-008",
    "chapter": "第3章 インターネット関連の法規",
    "question": "広告であることを隠して商品を紹介する表示の規制は何か。",
    "answer": "ステマ規制",
    "explanation": "広告表示を隠す点が題眼。",
    "hint": "広告を隠す"
  },
  {
    "id": "quiz-3-009",
    "chapter": "第3章 インターネット関連の法規",
    "question": "他人の ID とパスワードで無断ログインする行為を禁じる法律は何か。",
    "answer": "不正アクセス禁止法",
    "explanation": "他人のID利用が題眼。",
    "hint": "他人のID、無断ログイン"
  },
  {
    "id": "quiz-3-010",
    "chapter": "第3章 インターネット関連の法規",
    "question": "個人情報の利用目的を明らかにして扱うことに関係する法律は何か。",
    "answer": "個人情報保護法",
    "explanation": "個人情報の適切な取り扱い。",
    "hint": "利用目的、個人情報"
  },
  {
    "id": "quiz-3-011",
    "chapter": "第3章 インターネット関連の法規",
    "question": "広告メールの送信者表示や配信停止方法に関係する法律は何か。",
    "answer": "特定電子メール法",
    "explanation": "広告メールの規制。",
    "hint": "広告メール、配信停止"
  },
  {
    "id": "quiz-3-012",
    "chapter": "第3章 インターネット関連の法規",
    "question": "青少年を有害情報から守るための法律は何か。",
    "answer": "青少年インターネット環境整備法",
    "explanation": "青少年保護が題眼。",
    "hint": "青少年、有害情報"
  },
  {
    "id": "quiz-4-001",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "SNSに投稿する前に特に確認すべきことは何か。",
    "answer": "公開範囲と内容の正確さ",
    "explanation": "誰に見えるか、正しい情報かを確認する。",
    "hint": "投稿前、確認"
  },
  {
    "id": "quiz-4-002",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "住所や学校名、顔写真など個人を特定できる情報を何というか。",
    "answer": "個人情報",
    "explanation": "個人を識別できる情報が題眼。",
    "hint": "氏名、住所、学校"
  },
  {
    "id": "quiz-4-003",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "SNSで悪口を書かれ続けた時の正しい対応は何か。",
    "answer": "証拠を残して相談する",
    "explanation": "言い返さず保存と相談を行う。",
    "hint": "証拠、相談"
  },
  {
    "id": "quiz-4-004",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "複数人にメールを送り、互いのメールアドレスを隠したい時に使う欄は何か。",
    "answer": "BCC",
    "explanation": "BCC は宛先を隠せる。",
    "hint": "一斉送信、隠す"
  },
  {
    "id": "quiz-4-005",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "メールで主な宛先を入れる欄は何か。",
    "answer": "TO",
    "explanation": "TO は主な受信者。",
    "hint": "主な宛先"
  },
  {
    "id": "quiz-4-006",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "未確認のうわさを広める行為で問題になる情報は何か。",
    "answer": "デマ",
    "explanation": "確認せず拡散する点が題眼。",
    "hint": "未確認情報"
  },
  {
    "id": "quiz-4-007",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "投稿に批判が集中して大きく広がる状態は何か。",
    "answer": "炎上",
    "explanation": "批判集中が題眼。",
    "hint": "批判が集中"
  },
  {
    "id": "quiz-4-008",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "検索やSNSで自分好みの情報だけ表示されやすい状態は何か。",
    "answer": "フィルターバブル",
    "explanation": "表示の偏りが題眼。",
    "hint": "好みに合う情報"
  },
  {
    "id": "quiz-4-009",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "同じ意見の人同士で意見が強まる状態は何か。",
    "answer": "エコーチェンバー",
    "explanation": "同じ意見の反響が題眼。",
    "hint": "同じ意見が反響"
  },
  {
    "id": "quiz-4-010",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "情報の偏りを避けるために重要な行動は何か。",
    "answer": "複数の情報源で確認する",
    "explanation": "公式情報や複数情報源を見る。",
    "hint": "複数情報源"
  },
  {
    "id": "quiz-4-011",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "生成AIの回答を使う時に必要なことは何か。",
    "answer": "内容確認",
    "explanation": "AIの回答には誤りがある可能性がある。",
    "hint": "AI、確認"
  },
  {
    "id": "quiz-4-012",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "AIの文章を確認せず丸写しすることが不適切な理由は何か。",
    "answer": "誤情報が含まれる可能性があるため",
    "explanation": "出典や内容確認が必要。",
    "hint": "誤情報、出典"
  },
  {
    "id": "quiz-5-001",
    "chapter": "第5章 インターネットのしくみ",
    "question": "データを小さな単位に分けて送る通信方式は何か。",
    "answer": "パケット通信",
    "explanation": "データを小分けにする点が題眼。",
    "hint": "小さく分ける"
  },
  {
    "id": "quiz-5-002",
    "chapter": "第5章 インターネットのしくみ",
    "question": "ドメイン名を IP アドレスに対応させるしくみは何か。",
    "answer": "DNS",
    "explanation": "名前解決が題眼。",
    "hint": "ドメイン名、IPアドレス"
  },
  {
    "id": "quiz-5-003",
    "chapter": "第5章 インターネットのしくみ",
    "question": "Webページを見るためのソフトは何か。",
    "answer": "ブラウザ",
    "explanation": "閲覧ソフトが題眼。",
    "hint": "Webを見る"
  },
  {
    "id": "quiz-5-004",
    "chapter": "第5章 インターネットのしくみ",
    "question": "Web上のページの場所を示すものは何か。",
    "answer": "URL",
    "explanation": "Web上の住所。",
    "hint": "Web上の住所"
  },
  {
    "id": "quiz-5-005",
    "chapter": "第5章 インターネットのしくみ",
    "question": "暗号化されたWeb通信を表すものは何か。",
    "answer": "HTTPS",
    "explanation": "S は Secure。",
    "hint": "暗号化Web通信"
  },
  {
    "id": "quiz-5-006",
    "chapter": "第5章 インターネットのしくみ",
    "question": "メールを送信する時に使うプロトコルは何か。",
    "answer": "SMTP",
    "explanation": "送信が題眼。",
    "hint": "メール送信"
  },
  {
    "id": "quiz-5-007",
    "chapter": "第5章 インターネットのしくみ",
    "question": "サーバ上でメールを管理し複数端末で同期しやすい方式は何か。",
    "answer": "IMAP",
    "explanation": "サーバ管理が題眼。",
    "hint": "サーバ上で管理"
  },
  {
    "id": "quiz-5-008",
    "chapter": "第5章 インターネットのしくみ",
    "question": "利用者が作る口コミや投稿によるメディアは何か。",
    "answer": "CGM",
    "explanation": "Consumer Generated Media。",
    "hint": "利用者が作る"
  },
  {
    "id": "quiz-5-009",
    "chapter": "第5章 インターネットのしくみ",
    "question": "Wi-Fi のネットワーク名を表すものは何か。",
    "answer": "SSID",
    "explanation": "接続先名。",
    "hint": "Wi-Fi名"
  },
  {
    "id": "quiz-5-010",
    "chapter": "第5章 インターネットのしくみ",
    "question": "生成AIへ入力する指示文を何というか。",
    "answer": "プロンプト",
    "explanation": "AIへの指示が題眼。",
    "hint": "AIへの指示文"
  },
  {
    "id": "quiz-6-001",
    "chapter": "第6章 コンピュータウイルス",
    "question": "悪意のあるソフトウェアの総称は何か。",
    "answer": "マルウェア",
    "explanation": "総称が題眼。",
    "hint": "悪意あるソフト総称"
  },
  {
    "id": "quiz-6-002",
    "chapter": "第6章 コンピュータウイルス",
    "question": "他のファイルに寄生して広がるマルウェアは何か。",
    "answer": "ウイルス",
    "explanation": "寄生が題眼。",
    "hint": "他ファイルに寄生"
  },
  {
    "id": "quiz-6-003",
    "chapter": "第6章 コンピュータウイルス",
    "question": "自己増殖して広がるマルウェアは何か。",
    "answer": "ワーム",
    "explanation": "自己増殖が題眼。",
    "hint": "自己増殖"
  },
  {
    "id": "quiz-6-004",
    "chapter": "第6章 コンピュータウイルス",
    "question": "正常なソフトに見せかけるマルウェアは何か。",
    "answer": "トロイの木馬",
    "explanation": "偽装が題眼。",
    "hint": "正常ソフトに偽装"
  },
  {
    "id": "quiz-6-005",
    "chapter": "第6章 コンピュータウイルス",
    "question": "情報をこっそり集めるマルウェアは何か。",
    "answer": "スパイウェア",
    "explanation": "情報を盗む点が題眼。",
    "hint": "情報を盗む"
  },
  {
    "id": "quiz-6-006",
    "chapter": "第6章 コンピュータウイルス",
    "question": "ファイルを暗号化して金銭を要求するものは何か。",
    "answer": "ランサムウェア",
    "explanation": "身代金要求が題眼。",
    "hint": "暗号化して身代金"
  },
  {
    "id": "quiz-6-007",
    "chapter": "第6章 コンピュータウイルス",
    "question": "メール添付やSMSリンク、不正Webサイトは何の例か。",
    "answer": "感染経路",
    "explanation": "感染する入り口。",
    "hint": "添付、リンク、不正サイト"
  },
  {
    "id": "quiz-6-008",
    "chapter": "第6章 コンピュータウイルス",
    "question": "脆弱性対策として重要な基本行動は何か。",
    "answer": "OSやアプリの更新",
    "explanation": "更新で弱点をふさぐ。",
    "hint": "脆弱性、更新"
  },
  {
    "id": "quiz-6-009",
    "chapter": "第6章 コンピュータウイルス",
    "question": "ランサムウェア被害から復旧しやすくするため事前に行うことは何か。",
    "answer": "バックアップ",
    "explanation": "復旧に備える。",
    "hint": "復旧、保存"
  },
  {
    "id": "quiz-6-010",
    "chapter": "第6章 コンピュータウイルス",
    "question": "感染が疑われる時、被害拡大を防ぐため最初に考える対応は何か。",
    "answer": "ネットワークから切り離して相談する",
    "explanation": "広げないことが重要。",
    "hint": "切断、相談"
  }
];
