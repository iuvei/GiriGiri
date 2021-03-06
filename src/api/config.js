export const MAIN_TABS = [0, 1, 13, 167, 3, 129, 36, 4, 5, 119, 23, 11, 177, 181, 155, 160, 165];

export const RANK_TABS = [0, 1, 33, 168, 3, 129, 36, 4, 5, 119, 23, 11, 177, 181, 155, 160];

// const SERVER_BASE = 'https://robbyvan.cn/giri';
const SERVER_BASE = 'https://localhost:9002';

export function formatUrl(path) {
  const debug = process.env.NODE_ENV !== 'production';
  return debug ? path : `${SERVER_BASE}${path}`;
}

export const TABS = {
  0: {
    name: '首页',
    children: [],
    rid: 0,
    parent: 0
  },
  1: {
    name: '动画',
    children: [24, 25, 47, 27],
    rid: 1,
    parent: 1
  },
  3: {
    name: '音乐',
    children: [28, 31, 30, 59, 29, 54, 130],
    rid: 3,
    parent: 3
  },
  4: {
    name: '游戏',
    children: [17, 171, 172, 65, 173, 121, 136, 19],
    rid: 4,
    parent: 4
  },
  5: {
    name: '娱乐',
    children: [71, 137, 131],
    rid: 5,
    parent: 5
  },
  11: {
    name: '电视剧',
    children: [185, 187],
    rid: 11,
    parent: 11
  },
  13: {
    name: '番剧',
    children: [33, 32, 51, 152],
    rid: 13,
    parent: 13
  },
  17: {
    name: '单机游戏',
    children: [],
    rid: 17,
    parent: 4
  },
  19: {
    name: 'Mugen',
    children: [],
    rid: 19,
    parent: 4
  },
  20: {
    name: '宅舞',
    children: [],
    rid: 20,
    parent: 129
  },
  21: {
    name: '日常',
    children: [],
    rid: 21,
    parent: 160
  },
  22: {
    name: '鬼畜调教',
    children: [],
    rid: 22,
    parent: 119
  },
  23: {
    name: '电影',
    children: [147, 145, 146, 83],
    rid: 23,
    parent: 23
  },
  24: {
    name: 'MAD·AMV',
    children: [],
    rid: 24,
    parent: 1
  },
  25: {
    name: 'MMD·3D',
    children: [],
    rid: 25,
    parent: 1
  },
  26: {
    name: '音MAD',
    children: [],
    rid: 26,
    parent: 119
  },
  27: {
    name: '综合',
    children: [],
    rid: 27,
    parent: 1
  },
  28: {
    name: '原创音乐',
    children: [],
    rid: 28,
    parent: 3
  },
  29: {
    name: '三次元音乐',
    children: [],
    rid: 29,
    parent: 3
  },
  30: {
    name: 'VOCALOID·UTAU',
    children: [],
    rid: 30,
    parent: 3
  },
  31: {
    name: '翻唱',
    children: [],
    rid: 31,
    parent: 3
  },
  32: {
    name: '完结动画',
    children: [],
    rid: 32,
    parent: 13
  },
  33: {
    name: '连载动画',
    children: [],
    rid: 33,
    parent: 13
  },
  36: {
    name: '科技',
    children: [124, 122, 39, 96, 95, 98, 176],
    rid: 36,
    parent: 36
  },
  37: {
    name: '人文·历史',
    children: [],
    rid: 37,
    parent: 177
  },
  39: {
    name: '演讲·公开课',
    children: [],
    rid: 39,
    parent: 36
  },
  47: {
    name: '短片·手书·配音',
    children: [],
    rid: 47,
    parent: 1
  },
  51: {
    name: '资讯',
    children: [],
    rid: 51,
    parent: 13
  },
  54: {
    name: 'OP / ED / OST',
    children: [],
    rid: 54,
    parent: 3
  },
  59: {
    name: '演奏',
    children: [],
    rid: 59,
    parent: 3
  },
  65: {
    name: '网络游戏',
    children: [],
    rid: 65,
    parent: 4
  },
  71: {
    name: '综艺',
    children: [],
    rid: 71,
    parent: 5
  },
  75: {
    name: '动物圈',
    children: [],
    rid: 75,
    parent: 160
  },
  76: {
    name: '美食圈',
    children: [],
    rid: 76,
    parent: 160
  },
  83: {
    name: '其他国家',
    children: [],
    rid: 83,
    parent: 23
  },
  85: {
    name: '短片',
    children: [],
    rid: 85,
    parent: 181
  },
  86: {
    name: '特摄',
    children: [],
    rid: 86,
    parent: 181
  },
  95: {
    name: '数码',
    children: [],
    rid: 95,
    parent: 36
  },
  96: {
    name: '星海',
    children: [],
    rid: 96,
    parent: 36
  },
  98: {
    name: '机械',
    children: [],
    rid: 98,
    parent: 36
  },
  119: {
    name: '鬼畜',
    children: [22, 26, 126, 127],
    rid: 119,
    parent: 119
  },
  121: {
    name: 'GMV',
    children: [],
    rid: 121,
    parent: 4
  },
  122: {
    name: '野生技术协会',
    children: [],
    rid: 122,
    parent: 36
  },
  124: {
    name: '趣味科普人文',
    children: [],
    rid: 124,
    parent: 36
  },
  126: {
    name: '人力VOCALOID',
    children: [],
    rid: 126,
    parent: 119
  },
  127: {
    name: '教程演示',
    children: [],
    rid: 127,
    parent: 119
  },
  129: {
    name: '舞蹈',
    children: [20, 154, 156],
    rid: 129,
    parent: 129
  },
  130: {
    name: '音乐选集',
    children: [],
    rid: 130,
    parent: 3
  },
  131: {
    name: 'Korea相关',
    children: [],
    rid: 131,
    parent: 5
  },
  136: {
    name: '音游',
    children: [],
    rid: 136,
    parent: 4
  },
  137: {
    name: '明星',
    children: [],
    rid: 137,
    parent: 5
  },
  138: {
    name: '搞笑',
    children: [],
    rid: 138,
    parent: 160
  },
  145: {
    name: '欧美电影',
    children: [],
    rid: 145,
    parent: 23
  },
  146: {
    name: '日本电影',
    children: [],
    rid: 146,
    parent: 23
  },
  147: {
    name: '华语电影',
    children: [],
    rid: 147,
    parent: 23
  },
  152: {
    name: '官方延伸',
    children: [],
    rid: 152,
    parent: 13
  },
  153: {
    name: '国产动画',
    children: [],
    rid: 153,
    parent: 167
  },
  154: {
    name: '三次元舞蹈',
    children: [],
    rid: 154,
    parent: 129
  },
  155: {
    name: '时尚',
    children: [157, 158, 164, 159],
    rid: 155,
    parent: 155
  },
  156: {
    name: '舞蹈教程',
    children: [],
    rid: 156,
    parent: 129
  },
  157: {
    name: '美妆',
    children: [],
    rid: 157,
    parent: 155
  },
  158: {
    name: '服饰',
    children: [],
    rid: 158,
    parent: 155
  },
  159: {
    name: '资讯',
    children: [],
    rid: 159,
    parent: 155
  },
  160: {
    name: '生活',
    children: [138, 21, 76, 75, 161, 162, 163, 174],
    rid: 160,
    parent: 160
  },
  161: {
    name: '手工',
    children: [],
    rid: 161,
    parent: 160
  },
  162: {
    name: '绘画',
    children: [],
    rid: 162,
    parent: 160
  },
  163: {
    name: '运动',
    children: [],
    rid: 163,
    parent: 160
  },
  164: {
    name: '健身',
    children: [],
    rid: 164,
    parent: 155
  },
  165: {
    name: '广告',
    children: [],
    rid: 165,
    parent: 165
  },
  167: {
    name: '国创',
    children: [153, 168, 169, 170],
    rid: 167,
    parent: 167
  },
  168: {
    name: '国产原创相关',
    children: [],
    rid: 168,
    parent: 167
  },
  169: {
    name: '布袋戏',
    children: [],
    rid: 169,
    parent: 167
  },
  170: {
    name: '资讯',
    children: [],
    rid: 170,
    parent: 167
  },
  171: {
    name: '电子竞技',
    children: [],
    rid: 171,
    parent: 4
  },
  172: {
    name: '手机游戏',
    children: [],
    rid: 172,
    parent: 4
  },
  173: {
    name: '桌游棋牌',
    children: [],
    rid: 173,
    parent: 4
  },
  174: {
    name: '其他',
    children: [],
    rid: 174,
    parent: 160
  },
  176: {
    name: '汽车',
    children: [],
    rid: 176,
    parent: 36
  },
  177: {
    name: '纪录片',
    children: [37, 178, 179, 180],
    rid: 177,
    parent: 177
  },
  178: {
    name: '科学·探索·自然',
    children: [],
    rid: 178,
    parent: 177
  },
  179: {
    name: '军事',
    children: [],
    rid: 179,
    parent: 177
  },
  180: {
    name: '社会·美食·旅行',
    children: [],
    rid: 180,
    parent: 177
  },
  181: {
    name: '影视',
    children: [182, 183, 85, 184, 86],
    rid: 181,
    parent: 181
  },
  182: {
    name: '影视杂谈',
    children: [],
    rid: 182,
    parent: 181
  },
  183: {
    name: '影视剪辑',
    children: [],
    rid: 183,
    parent: 181
  },
  184: {
    name: '预告·资讯',
    children: [],
    rid: 184,
    parent: 181
  },
  185: {
    name: '国产剧',
    children: [],
    rid: 185,
    parent: 11
  },
  187: {
    name: '海外剧',
    children: [],
    rid: 187,
    parent: 11
  }
};
