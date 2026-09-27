// ============================================================
//  FLASHCARD WORDS — edit this file to add or change cards
// ============================================================
//  One card per line, in this order:
//  ["Topic", "Chinese", "Jyutping", "Pinyin", "English", "Note (optional)"],
//
//  Tips
//  - Keep the quotes "" and the comma at the end of each line.
//  - Leave the note as "" if you don't want one.
//  - A new topic name automatically becomes a new topic button.
//  - Lines starting with // are comments and are ignored.
// ============================================================

const WORD_LIST = [
 // Drinks
 ["Drinks","奶茶","naai5 caa4","nǎichá","Milk tea","HK-style, strained through a 'silk stocking' and made with evaporated milk."],
 ["Drinks","凍檸茶","dung3 ning4 caa4","dòng níngchá","Iced lemon tea","凍 = cold/iced. Add 少甜 (siu2 tim4) for less sweet."],
 ["Drinks","熱檸茶","jit6 ning4 caa4","rè níngchá","Hot lemon tea","熱 = hot."],
 ["Drinks","鴛鴦","jyun1 joeng1","yuānyang","Yuenyeung (coffee + milk tea)","Named after mandarin ducks, which come in pairs."],
 ["Drinks","咖啡","gaa3 fe1","kāfēi","Coffee",""],
 ["Drinks","檸檬水","ning4 mung1 seoi2","níngméng shuǐ","Lemon water","On menus often shortened to 檸水."],
 ["Drinks","阿華田","aa3 waa4 tin4","āhuátián","Ovaltine","A sound-borrowed brand name."],
 ["Drinks","豆漿","dau6 zoeng1","dòujiāng","Soy milk",""],
 ["Drinks","汽水","hei3 seoi2","qìshuǐ","Soft drink / soda","Literally 'gas water'."],
 ["Drinks","啤酒","be1 zau2","píjiǔ","Beer",""],
 ["Drinks","凍水","dung3 seoi2","dòng shuǐ","Iced water","In Mandarin you would usually say 冰水 (bīng shuǐ)."],
 // Cha chaan teng
 ["Cha chaan teng","菠蘿包","bo1 lo4 baau1","bōluó bāo","Pineapple bun","No pineapple inside. The crackly top just looks like one."],
 ["Cha chaan teng","菠蘿油","bo1 lo4 jau4","bōluó yóu","Pineapple bun with butter","油 here means a thick slab of butter."],
 ["Cha chaan teng","蛋撻","daan6 taat1","dàntà","Egg tart","撻 is borrowed from English 'tart'."],
 ["Cha chaan teng","西多士","sai1 do1 si2","xī duō shì","HK French toast","西 = Western, 多士 = 'toast'."],
 ["Cha chaan teng","公仔麵","gung1 zai2 min6","gōngzǎi miàn","Instant noodles","HK brand name that became the everyday word. Standard term: 即食麵."],
 ["Cha chaan teng","叉燒公仔麵","caa1 siu1 gung1 zai2 min6","chāshāo gōngzǎi miàn","Instant noodles with char siu",""],
 ["Cha chaan teng","餐蛋麵","caan1 daan2 min6","cān dàn miàn","Luncheon meat & egg noodles","餐 is short for 餐肉, luncheon meat."],
 ["Cha chaan teng","沙嗲牛肉麵","saa3 de1 ngau4 juk6 min6","shādiǎ niúròu miàn","Satay beef noodles","A classic breakfast set item."],
 ["Cha chaan teng","通粉","tung1 fan2","tōngfěn","Macaroni","Usually served in ham soup: 火腿通粉."],
 ["Cha chaan teng","奶油多","naai5 jau4 do1","nǎiyóu duō","Condensed milk & butter toast",""],
 ["Cha chaan teng","炒蛋","caau2 daan2","chǎo dàn","Scrambled eggs","炒 = stir-fry."],
 ["Cha chaan teng","火腿","fo2 teoi2","huǒtuǐ","Ham","Literally 'fire leg'."],
 // Rice & noodles
 ["Rice & noodles","叉燒","caa1 siu1","chāshāo","Char siu (BBQ pork)","'Fork-roasted', from how it was cooked on skewers."],
 ["Rice & noodles","叉燒飯","caa1 siu1 faan6","chāshāo fàn","Char siu with rice",""],
 ["Rice & noodles","燒鵝","siu1 ngo2","shāo'é","Roast goose",""],
 ["Rice & noodles","白飯","baak6 faan6","báifàn","Plain white rice",""],
 ["Rice & noodles","雲吞麵","wan4 tan1 min6","yúntūn miàn","Wonton noodles","Mandarin speakers in the north say 餛飩 (húntun)."],
 ["Rice & noodles","魚蛋","jyu4 daan2","yúdàn","Fish balls","Mandarin usually says 魚丸 (yúwán)."],
 ["Rice & noodles","炒飯","caau2 faan6","chǎofàn","Fried rice",""],
 ["Rice & noodles","粥","zuk1","zhōu","Congee",""],
 ["Rice & noodles","皮蛋瘦肉粥","pei4 daan2 sau3 juk6 zuk1","pídàn shòuròu zhōu","Century egg & lean pork congee",""],
 ["Rice & noodles","煲仔飯","bou1 zai2 faan6","bāozǎi fàn","Claypot rice","仔 makes things 'little'. 煲 = pot."],
 ["Rice & noodles","車仔麵","ce1 zai2 min6","chēzǎi miàn","Cart noodles","Pick your own toppings. 車仔 = little cart."],
 // Dim sum
 ["Dim sum","飲茶","jam2 caa4","yǐnchá","Yum cha (going for dim sum)","Literally 'drink tea'."],
 ["Dim sum","蝦餃","haa1 gaau2","xiājiǎo","Shrimp dumpling (har gow)",""],
 ["Dim sum","燒賣","siu1 maai2","shāomài","Siu mai",""],
 ["Dim sum","叉燒包","caa1 siu1 baau1","chāshāo bāo","BBQ pork bun",""],
 ["Dim sum","腸粉","coeng2 fan2","chángfěn","Rice noodle roll","腸 = intestine, for the shape."],
 ["Dim sum","鳳爪","fung6 zaau2","fèngzhǎo","Chicken feet","Menu name: 'phoenix claws'."],
 ["Dim sum","蘿蔔糕","lo4 baak6 gou1","luóbo gāo","Turnip cake",""],
 // Snacks & sweets
 ["Snacks & sweets","雞蛋仔","gai1 daan6 zai2","jīdàn zǎi","Egg waffle",""],
 ["Snacks & sweets","豆腐花","dau6 fu6 faa1","dòufu huā","Tofu pudding","Mandarin often says 豆花."],
 ["Snacks & sweets","碗仔翅","wun2 zai2 ci3","wǎnzǎi chì","Imitation shark fin soup","Street food, made with vermicelli, not real fin."],
 ["Snacks & sweets","臭豆腐","cau3 dau6 fu6","chòu dòufu","Stinky tofu",""],
 ["Snacks & sweets","雪糕","syut3 gou1","xuěgāo","Ice cream","Mandarin more often says 冰淇淋."],
 // Everyday basics
 ["Everyday basics","牛奶","ngau4 naai5","niúnǎi","Milk",""],
 ["Everyday basics","麵包","min6 baau1","miànbāo","Bread",""],
 ["Everyday basics","雞蛋","gai1 daan2","jīdàn","Egg (chicken egg)",""],
 ["Everyday basics","餅乾","beng2 gon1","bǐnggān","Biscuits / cookies",""]
];
