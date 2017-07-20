/**
 * 级联选择器 城市数据配置
 * https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17
 * @type {[*]}
 */

// 依赖 china-division 这个 npm 库
// import provinces from 'china-division/dist/provinces.json';
// import cities from 'china-division/dist/cities.json';
// import areas from 'china-division/dist/areas.json';

// 省
const provinces = [{"code": "110000", "name": "北京市"}, {"code": "120000", "name": "天津市"}, {
	"code": "130000",
	"name": "河北省"
}, {"code": "140000", "name": "山西省"}, {"code": "150000", "name": "内蒙古自治区"}, {
	"code": "210000",
	"name": "辽宁省"
}, {"code": "220000", "name": "吉林省"}, {"code": "230000", "name": "黑龙江省"}, {
	"code": "310000",
	"name": "上海市"
}, {"code": "320000", "name": "江苏省"}, {"code": "330000", "name": "浙江省"}, {
	"code": "340000",
	"name": "安徽省"
}, {"code": "350000", "name": "福建省"}, {"code": "360000", "name": "江西省"}, {
	"code": "370000",
	"name": "山东省"
}, {"code": "410000", "name": "河南省"}, {"code": "420000", "name": "湖北省"}, {
	"code": "430000",
	"name": "湖南省"
}, {"code": "440000", "name": "广东省"}, {"code": "450000", "name": "广西壮族自治区"}, {
	"code": "460000",
	"name": "海南省"
}, {"code": "500000", "name": "重庆市"}, {"code": "510000", "name": "四川省"}, {
	"code": "520000",
	"name": "贵州省"
}, {"code": "530000", "name": "云南省"}, {"code": "540000", "name": "西藏自治区"}, {
	"code": "610000",
	"name": "陕西省"
}, {"code": "620000", "name": "甘肃省"}, {"code": "630000", "name": "青海省"}, {
	"code": "640000",
	"name": "宁夏回族自治区"
}, {"code": "650000", "name": "新疆维吾尔自治区"}, {"code": "710000", "name": "台湾省"}, {
	"code": "810000",
	"name": "香港特别行政区"
}, {"code": "820000", "name": "澳门特别行政区"}];

// 市
const cities = [{"code": "110100", "name": "市辖区", "parent_code": "110000"}, {
	"code": "120100",
	"name": "市辖区",
	"parent_code": "120000"
}, {"code": "130100", "name": "石家庄市", "parent_code": "130000"}, {
	"code": "130200",
	"name": "唐山市",
	"parent_code": "130000"
}, {"code": "130300", "name": "秦皇岛市", "parent_code": "130000"}, {
	"code": "130400",
	"name": "邯郸市",
	"parent_code": "130000"
}, {"code": "130500", "name": "邢台市", "parent_code": "130000"}, {
	"code": "130600",
	"name": "保定市",
	"parent_code": "130000"
}, {"code": "130700", "name": "张家口市", "parent_code": "130000"}, {
	"code": "130800",
	"name": "承德市",
	"parent_code": "130000"
}, {"code": "130900", "name": "沧州市", "parent_code": "130000"}, {
	"code": "131000",
	"name": "廊坊市",
	"parent_code": "130000"
}, {"code": "131100", "name": "衡水市", "parent_code": "130000"}, {
	"code": "139000",
	"name": "省直辖县级行政区划",
	"parent_code": "130000"
}, {"code": "140100", "name": "太原市", "parent_code": "140000"}, {
	"code": "140200",
	"name": "大同市",
	"parent_code": "140000"
}, {"code": "140300", "name": "阳泉市", "parent_code": "140000"}, {
	"code": "140400",
	"name": "长治市",
	"parent_code": "140000"
}, {"code": "140500", "name": "晋城市", "parent_code": "140000"}, {
	"code": "140600",
	"name": "朔州市",
	"parent_code": "140000"
}, {"code": "140700", "name": "晋中市", "parent_code": "140000"}, {
	"code": "140800",
	"name": "运城市",
	"parent_code": "140000"
}, {"code": "140900", "name": "忻州市", "parent_code": "140000"}, {
	"code": "141000",
	"name": "临汾市",
	"parent_code": "140000"
}, {"code": "141100", "name": "吕梁市", "parent_code": "140000"}, {
	"code": "150100",
	"name": "呼和浩特市",
	"parent_code": "150000"
}, {"code": "150200", "name": "包头市", "parent_code": "150000"}, {
	"code": "150300",
	"name": "乌海市",
	"parent_code": "150000"
}, {"code": "150400", "name": "赤峰市", "parent_code": "150000"}, {
	"code": "150500",
	"name": "通辽市",
	"parent_code": "150000"
}, {"code": "150600", "name": "鄂尔多斯市", "parent_code": "150000"}, {
	"code": "150700",
	"name": "呼伦贝尔市",
	"parent_code": "150000"
}, {"code": "150800", "name": "巴彦淖尔市", "parent_code": "150000"}, {
	"code": "150900",
	"name": "乌兰察布市",
	"parent_code": "150000"
}, {"code": "152200", "name": "兴安盟", "parent_code": "150000"}, {
	"code": "152500",
	"name": "锡林郭勒盟",
	"parent_code": "150000"
}, {"code": "152900", "name": "阿拉善盟", "parent_code": "150000"}, {
	"code": "210100",
	"name": "沈阳市",
	"parent_code": "210000"
}, {"code": "210200", "name": "大连市", "parent_code": "210000"}, {
	"code": "210300",
	"name": "鞍山市",
	"parent_code": "210000"
}, {"code": "210400", "name": "抚顺市", "parent_code": "210000"}, {
	"code": "210500",
	"name": "本溪市",
	"parent_code": "210000"
}, {"code": "210600", "name": "丹东市", "parent_code": "210000"}, {
	"code": "210700",
	"name": "锦州市",
	"parent_code": "210000"
}, {"code": "210800", "name": "营口市", "parent_code": "210000"}, {
	"code": "210900",
	"name": "阜新市",
	"parent_code": "210000"
}, {"code": "211000", "name": "辽阳市", "parent_code": "210000"}, {
	"code": "211100",
	"name": "盘锦市",
	"parent_code": "210000"
}, {"code": "211200", "name": "铁岭市", "parent_code": "210000"}, {
	"code": "211300",
	"name": "朝阳市",
	"parent_code": "210000"
}, {"code": "211400", "name": "葫芦岛市", "parent_code": "210000"}, {
	"code": "220100",
	"name": "长春市",
	"parent_code": "220000"
}, {"code": "220200", "name": "吉林市", "parent_code": "220000"}, {
	"code": "220300",
	"name": "四平市",
	"parent_code": "220000"
}, {"code": "220400", "name": "辽源市", "parent_code": "220000"}, {
	"code": "220500",
	"name": "通化市",
	"parent_code": "220000"
}, {"code": "220600", "name": "白山市", "parent_code": "220000"}, {
	"code": "220700",
	"name": "松原市",
	"parent_code": "220000"
}, {"code": "220800", "name": "白城市", "parent_code": "220000"}, {
	"code": "222400",
	"name": "延边朝鲜族自治州",
	"parent_code": "220000"
}, {"code": "230100", "name": "哈尔滨市", "parent_code": "230000"}, {
	"code": "230200",
	"name": "齐齐哈尔市",
	"parent_code": "230000"
}, {"code": "230300", "name": "鸡西市", "parent_code": "230000"}, {
	"code": "230400",
	"name": "鹤岗市",
	"parent_code": "230000"
}, {"code": "230500", "name": "双鸭山市", "parent_code": "230000"}, {
	"code": "230600",
	"name": "大庆市",
	"parent_code": "230000"
}, {"code": "230700", "name": "伊春市", "parent_code": "230000"}, {
	"code": "230800",
	"name": "佳木斯市",
	"parent_code": "230000"
}, {"code": "230900", "name": "七台河市", "parent_code": "230000"}, {
	"code": "231000",
	"name": "牡丹江市",
	"parent_code": "230000"
}, {"code": "231100", "name": "黑河市", "parent_code": "230000"}, {
	"code": "231200",
	"name": "绥化市",
	"parent_code": "230000"
}, {"code": "232700", "name": "大兴安岭地区", "parent_code": "230000"}, {
	"code": "310100",
	"name": "市辖区",
	"parent_code": "310000"
}, {"code": "320100", "name": "南京市", "parent_code": "320000"}, {
	"code": "320200",
	"name": "无锡市",
	"parent_code": "320000"
}, {"code": "320300", "name": "徐州市", "parent_code": "320000"}, {
	"code": "320400",
	"name": "常州市",
	"parent_code": "320000"
}, {"code": "320500", "name": "苏州市", "parent_code": "320000"}, {
	"code": "320600",
	"name": "南通市",
	"parent_code": "320000"
}, {"code": "320700", "name": "连云港市", "parent_code": "320000"}, {
	"code": "320800",
	"name": "淮安市",
	"parent_code": "320000"
}, {"code": "320900", "name": "盐城市", "parent_code": "320000"}, {
	"code": "321000",
	"name": "扬州市",
	"parent_code": "320000"
}, {"code": "321100", "name": "镇江市", "parent_code": "320000"}, {
	"code": "321200",
	"name": "泰州市",
	"parent_code": "320000"
}, {"code": "321300", "name": "宿迁市", "parent_code": "320000"}, {
	"code": "330100",
	"name": "杭州市",
	"parent_code": "330000"
}, {"code": "330200", "name": "宁波市", "parent_code": "330000"}, {
	"code": "330300",
	"name": "温州市",
	"parent_code": "330000"
}, {"code": "330400", "name": "嘉兴市", "parent_code": "330000"}, {
	"code": "330500",
	"name": "湖州市",
	"parent_code": "330000"
}, {"code": "330600", "name": "绍兴市", "parent_code": "330000"}, {
	"code": "330700",
	"name": "金华市",
	"parent_code": "330000"
}, {"code": "330800", "name": "衢州市", "parent_code": "330000"}, {
	"code": "330900",
	"name": "舟山市",
	"parent_code": "330000"
}, {"code": "331000", "name": "台州市", "parent_code": "330000"}, {
	"code": "331100",
	"name": "丽水市",
	"parent_code": "330000"
}, {"code": "340100", "name": "合肥市", "parent_code": "340000"}, {
	"code": "340200",
	"name": "芜湖市",
	"parent_code": "340000"
}, {"code": "340300", "name": "蚌埠市", "parent_code": "340000"}, {
	"code": "340400",
	"name": "淮南市",
	"parent_code": "340000"
}, {"code": "340500", "name": "马鞍山市", "parent_code": "340000"}, {
	"code": "340600",
	"name": "淮北市",
	"parent_code": "340000"
}, {"code": "340700", "name": "铜陵市", "parent_code": "340000"}, {
	"code": "340800",
	"name": "安庆市",
	"parent_code": "340000"
}, {"code": "341000", "name": "黄山市", "parent_code": "340000"}, {
	"code": "341100",
	"name": "滁州市",
	"parent_code": "340000"
}, {"code": "341200", "name": "阜阳市", "parent_code": "340000"}, {
	"code": "341300",
	"name": "宿州市",
	"parent_code": "340000"
}, {"code": "341500", "name": "六安市", "parent_code": "340000"}, {
	"code": "341600",
	"name": "亳州市",
	"parent_code": "340000"
}, {"code": "341700", "name": "池州市", "parent_code": "340000"}, {
	"code": "341800",
	"name": "宣城市",
	"parent_code": "340000"
}, {"code": "350100", "name": "福州市", "parent_code": "350000"}, {
	"code": "350200",
	"name": "厦门市",
	"parent_code": "350000"
}, {"code": "350300", "name": "莆田市", "parent_code": "350000"}, {
	"code": "350400",
	"name": "三明市",
	"parent_code": "350000"
}, {"code": "350500", "name": "泉州市", "parent_code": "350000"}, {
	"code": "350600",
	"name": "漳州市",
	"parent_code": "350000"
}, {"code": "350700", "name": "南平市", "parent_code": "350000"}, {
	"code": "350800",
	"name": "龙岩市",
	"parent_code": "350000"
}, {"code": "350900", "name": "宁德市", "parent_code": "350000"}, {
	"code": "360100",
	"name": "南昌市",
	"parent_code": "360000"
}, {"code": "360200", "name": "景德镇市", "parent_code": "360000"}, {
	"code": "360300",
	"name": "萍乡市",
	"parent_code": "360000"
}, {"code": "360400", "name": "九江市", "parent_code": "360000"}, {
	"code": "360500",
	"name": "新余市",
	"parent_code": "360000"
}, {"code": "360600", "name": "鹰潭市", "parent_code": "360000"}, {
	"code": "360700",
	"name": "赣州市",
	"parent_code": "360000"
}, {"code": "360800", "name": "吉安市", "parent_code": "360000"}, {
	"code": "360900",
	"name": "宜春市",
	"parent_code": "360000"
}, {"code": "361000", "name": "抚州市", "parent_code": "360000"}, {
	"code": "361100",
	"name": "上饶市",
	"parent_code": "360000"
}, {"code": "370100", "name": "济南市", "parent_code": "370000"}, {
	"code": "370200",
	"name": "青岛市",
	"parent_code": "370000"
}, {"code": "370300", "name": "淄博市", "parent_code": "370000"}, {
	"code": "370400",
	"name": "枣庄市",
	"parent_code": "370000"
}, {"code": "370500", "name": "东营市", "parent_code": "370000"}, {
	"code": "370600",
	"name": "烟台市",
	"parent_code": "370000"
}, {"code": "370700", "name": "潍坊市", "parent_code": "370000"}, {
	"code": "370800",
	"name": "济宁市",
	"parent_code": "370000"
}, {"code": "370900", "name": "泰安市", "parent_code": "370000"}, {
	"code": "371000",
	"name": "威海市",
	"parent_code": "370000"
}, {"code": "371100", "name": "日照市", "parent_code": "370000"}, {
	"code": "371200",
	"name": "莱芜市",
	"parent_code": "370000"
}, {"code": "371300", "name": "临沂市", "parent_code": "370000"}, {
	"code": "371400",
	"name": "德州市",
	"parent_code": "370000"
}, {"code": "371500", "name": "聊城市", "parent_code": "370000"}, {
	"code": "371600",
	"name": "滨州市",
	"parent_code": "370000"
}, {"code": "371700", "name": "菏泽市", "parent_code": "370000"}, {
	"code": "410100",
	"name": "郑州市",
	"parent_code": "410000"
}, {"code": "410200", "name": "开封市", "parent_code": "410000"}, {
	"code": "410300",
	"name": "洛阳市",
	"parent_code": "410000"
}, {"code": "410400", "name": "平顶山市", "parent_code": "410000"}, {
	"code": "410500",
	"name": "安阳市",
	"parent_code": "410000"
}, {"code": "410600", "name": "鹤壁市", "parent_code": "410000"}, {
	"code": "410700",
	"name": "新乡市",
	"parent_code": "410000"
}, {"code": "410800", "name": "焦作市", "parent_code": "410000"}, {
	"code": "410900",
	"name": "濮阳市",
	"parent_code": "410000"
}, {"code": "411000", "name": "许昌市", "parent_code": "410000"}, {
	"code": "411100",
	"name": "漯河市",
	"parent_code": "410000"
}, {"code": "411200", "name": "三门峡市", "parent_code": "410000"}, {
	"code": "411300",
	"name": "南阳市",
	"parent_code": "410000"
}, {"code": "411400", "name": "商丘市", "parent_code": "410000"}, {
	"code": "411500",
	"name": "信阳市",
	"parent_code": "410000"
}, {"code": "411600", "name": "周口市", "parent_code": "410000"}, {
	"code": "411700",
	"name": "驻马店市",
	"parent_code": "410000"
}, {"code": "419000", "name": "省直辖县级行政区划", "parent_code": "410000"}, {
	"code": "420100",
	"name": "武汉市",
	"parent_code": "420000"
}, {"code": "420200", "name": "黄石市", "parent_code": "420000"}, {
	"code": "420300",
	"name": "十堰市",
	"parent_code": "420000"
}, {"code": "420500", "name": "宜昌市", "parent_code": "420000"}, {
	"code": "420600",
	"name": "襄阳市",
	"parent_code": "420000"
}, {"code": "420700", "name": "鄂州市", "parent_code": "420000"}, {
	"code": "420800",
	"name": "荆门市",
	"parent_code": "420000"
}, {"code": "420900", "name": "孝感市", "parent_code": "420000"}, {
	"code": "421000",
	"name": "荆州市",
	"parent_code": "420000"
}, {"code": "421100", "name": "黄冈市", "parent_code": "420000"}, {
	"code": "421200",
	"name": "咸宁市",
	"parent_code": "420000"
}, {"code": "421300", "name": "随州市", "parent_code": "420000"}, {
	"code": "422800",
	"name": "恩施土家族苗族自治州",
	"parent_code": "420000"
}, {"code": "429000", "name": "省直辖县级行政区划", "parent_code": "420000"}, {
	"code": "430100",
	"name": "长沙市",
	"parent_code": "430000"
}, {"code": "430200", "name": "株洲市", "parent_code": "430000"}, {
	"code": "430300",
	"name": "湘潭市",
	"parent_code": "430000"
}, {"code": "430400", "name": "衡阳市", "parent_code": "430000"}, {
	"code": "430500",
	"name": "邵阳市",
	"parent_code": "430000"
}, {"code": "430600", "name": "岳阳市", "parent_code": "430000"}, {
	"code": "430700",
	"name": "常德市",
	"parent_code": "430000"
}, {"code": "430800", "name": "张家界市", "parent_code": "430000"}, {
	"code": "430900",
	"name": "益阳市",
	"parent_code": "430000"
}, {"code": "431000", "name": "郴州市", "parent_code": "430000"}, {
	"code": "431100",
	"name": "永州市",
	"parent_code": "430000"
}, {"code": "431200", "name": "怀化市", "parent_code": "430000"}, {
	"code": "431300",
	"name": "娄底市",
	"parent_code": "430000"
}, {"code": "433100", "name": "湘西土家族苗族自治州", "parent_code": "430000"}, {
	"code": "440100",
	"name": "广州市",
	"parent_code": "440000"
}, {"code": "440200", "name": "韶关市", "parent_code": "440000"}, {
	"code": "440300",
	"name": "深圳市",
	"parent_code": "440000"
}, {"code": "440400", "name": "珠海市", "parent_code": "440000"}, {
	"code": "440500",
	"name": "汕头市",
	"parent_code": "440000"
}, {"code": "440600", "name": "佛山市", "parent_code": "440000"}, {
	"code": "440700",
	"name": "江门市",
	"parent_code": "440000"
}, {"code": "440800", "name": "湛江市", "parent_code": "440000"}, {
	"code": "440900",
	"name": "茂名市",
	"parent_code": "440000"
}, {"code": "441200", "name": "肇庆市", "parent_code": "440000"}, {
	"code": "441300",
	"name": "惠州市",
	"parent_code": "440000"
}, {"code": "441400", "name": "梅州市", "parent_code": "440000"}, {
	"code": "441500",
	"name": "汕尾市",
	"parent_code": "440000"
}, {"code": "441600", "name": "河源市", "parent_code": "440000"}, {
	"code": "441700",
	"name": "阳江市",
	"parent_code": "440000"
}, {"code": "441800", "name": "清远市", "parent_code": "440000"}, {
	"code": "441900",
	"name": "东莞市",
	"parent_code": "440000"
}, {"code": "442000", "name": "中山市", "parent_code": "440000"}, {
	"code": "445100",
	"name": "潮州市",
	"parent_code": "440000"
}, {"code": "445200", "name": "揭阳市", "parent_code": "440000"}, {
	"code": "445300",
	"name": "云浮市",
	"parent_code": "440000"
}, {"code": "450100", "name": "南宁市", "parent_code": "450000"}, {
	"code": "450200",
	"name": "柳州市",
	"parent_code": "450000"
}, {"code": "450300", "name": "桂林市", "parent_code": "450000"}, {
	"code": "450400",
	"name": "梧州市",
	"parent_code": "450000"
}, {"code": "450500", "name": "北海市", "parent_code": "450000"}, {
	"code": "450600",
	"name": "防城港市",
	"parent_code": "450000"
}, {"code": "450700", "name": "钦州市", "parent_code": "450000"}, {
	"code": "450800",
	"name": "贵港市",
	"parent_code": "450000"
}, {"code": "450900", "name": "玉林市", "parent_code": "450000"}, {
	"code": "451000",
	"name": "百色市",
	"parent_code": "450000"
}, {"code": "451100", "name": "贺州市", "parent_code": "450000"}, {
	"code": "451200",
	"name": "河池市",
	"parent_code": "450000"
}, {"code": "451300", "name": "来宾市", "parent_code": "450000"}, {
	"code": "451400",
	"name": "崇左市",
	"parent_code": "450000"
}, {"code": "460100", "name": "海口市", "parent_code": "460000"}, {
	"code": "460200",
	"name": "三亚市",
	"parent_code": "460000"
}, {"code": "460300", "name": "三沙市", "parent_code": "460000"}, {
	"code": "460400",
	"name": "儋州市",
	"parent_code": "460000"
}, {"code": "469000", "name": "省直辖县级行政区划", "parent_code": "460000"}, {
	"code": "500100",
	"name": "市辖区",
	"parent_code": "500000"
}, {"code": "500200", "name": "县", "parent_code": "500000"}, {
	"code": "510100",
	"name": "成都市",
	"parent_code": "510000"
}, {"code": "510300", "name": "自贡市", "parent_code": "510000"}, {
	"code": "510400",
	"name": "攀枝花市",
	"parent_code": "510000"
}, {"code": "510500", "name": "泸州市", "parent_code": "510000"}, {
	"code": "510600",
	"name": "德阳市",
	"parent_code": "510000"
}, {"code": "510700", "name": "绵阳市", "parent_code": "510000"}, {
	"code": "510800",
	"name": "广元市",
	"parent_code": "510000"
}, {"code": "510900", "name": "遂宁市", "parent_code": "510000"}, {
	"code": "511000",
	"name": "内江市",
	"parent_code": "510000"
}, {"code": "511100", "name": "乐山市", "parent_code": "510000"}, {
	"code": "511300",
	"name": "南充市",
	"parent_code": "510000"
}, {"code": "511400", "name": "眉山市", "parent_code": "510000"}, {
	"code": "511500",
	"name": "宜宾市",
	"parent_code": "510000"
}, {"code": "511600", "name": "广安市", "parent_code": "510000"}, {
	"code": "511700",
	"name": "达州市",
	"parent_code": "510000"
}, {"code": "511800", "name": "雅安市", "parent_code": "510000"}, {
	"code": "511900",
	"name": "巴中市",
	"parent_code": "510000"
}, {"code": "512000", "name": "资阳市", "parent_code": "510000"}, {
	"code": "513200",
	"name": "阿坝藏族羌族自治州",
	"parent_code": "510000"
}, {"code": "513300", "name": "甘孜藏族自治州", "parent_code": "510000"}, {
	"code": "513400",
	"name": "凉山彝族自治州",
	"parent_code": "510000"
}, {"code": "520100", "name": "贵阳市", "parent_code": "520000"}, {
	"code": "520200",
	"name": "六盘水市",
	"parent_code": "520000"
}, {"code": "520300", "name": "遵义市", "parent_code": "520000"}, {
	"code": "520400",
	"name": "安顺市",
	"parent_code": "520000"
}, {"code": "520500", "name": "毕节市", "parent_code": "520000"}, {
	"code": "520600",
	"name": "铜仁市",
	"parent_code": "520000"
}, {"code": "522300", "name": "黔西南布依族苗族自治州", "parent_code": "520000"}, {
	"code": "522600",
	"name": "黔东南苗族侗族自治州",
	"parent_code": "520000"
}, {"code": "522700", "name": "黔南布依族苗族自治州", "parent_code": "520000"}, {
	"code": "530100",
	"name": "昆明市",
	"parent_code": "530000"
}, {"code": "530300", "name": "曲靖市", "parent_code": "530000"}, {
	"code": "530400",
	"name": "玉溪市",
	"parent_code": "530000"
}, {"code": "530500", "name": "保山市", "parent_code": "530000"}, {
	"code": "530600",
	"name": "昭通市",
	"parent_code": "530000"
}, {"code": "530700", "name": "丽江市", "parent_code": "530000"}, {
	"code": "530800",
	"name": "普洱市",
	"parent_code": "530000"
}, {"code": "530900", "name": "临沧市", "parent_code": "530000"}, {
	"code": "532300",
	"name": "楚雄彝族自治州",
	"parent_code": "530000"
}, {"code": "532500", "name": "红河哈尼族彝族自治州", "parent_code": "530000"}, {
	"code": "532600",
	"name": "文山壮族苗族自治州",
	"parent_code": "530000"
}, {"code": "532800", "name": "西双版纳傣族自治州", "parent_code": "530000"}, {
	"code": "532900",
	"name": "大理白族自治州",
	"parent_code": "530000"
}, {"code": "533100", "name": "德宏傣族景颇族自治州", "parent_code": "530000"}, {
	"code": "533300",
	"name": "怒江傈僳族自治州",
	"parent_code": "530000"
}, {"code": "533400", "name": "迪庆藏族自治州", "parent_code": "530000"}, {
	"code": "540100",
	"name": "拉萨市",
	"parent_code": "540000"
}, {"code": "540200", "name": "日喀则市", "parent_code": "540000"}, {
	"code": "540300",
	"name": "昌都市",
	"parent_code": "540000"
}, {"code": "540400", "name": "林芝市", "parent_code": "540000"}, {
	"code": "540500",
	"name": "山南市",
	"parent_code": "540000"
}, {"code": "542400", "name": "那曲地区", "parent_code": "540000"}, {
	"code": "542500",
	"name": "阿里地区",
	"parent_code": "540000"
}, {"code": "610100", "name": "西安市", "parent_code": "610000"}, {
	"code": "610200",
	"name": "铜川市",
	"parent_code": "610000"
}, {"code": "610300", "name": "宝鸡市", "parent_code": "610000"}, {
	"code": "610400",
	"name": "咸阳市",
	"parent_code": "610000"
}, {"code": "610500", "name": "渭南市", "parent_code": "610000"}, {
	"code": "610600",
	"name": "延安市",
	"parent_code": "610000"
}, {"code": "610700", "name": "汉中市", "parent_code": "610000"}, {
	"code": "610800",
	"name": "榆林市",
	"parent_code": "610000"
}, {"code": "610900", "name": "安康市", "parent_code": "610000"}, {
	"code": "611000",
	"name": "商洛市",
	"parent_code": "610000"
}, {"code": "620100", "name": "兰州市", "parent_code": "620000"}, {
	"code": "620200",
	"name": "嘉峪关市",
	"parent_code": "620000"
}, {"code": "620300", "name": "金昌市", "parent_code": "620000"}, {
	"code": "620400",
	"name": "白银市",
	"parent_code": "620000"
}, {"code": "620500", "name": "天水市", "parent_code": "620000"}, {
	"code": "620600",
	"name": "武威市",
	"parent_code": "620000"
}, {"code": "620700", "name": "张掖市", "parent_code": "620000"}, {
	"code": "620800",
	"name": "平凉市",
	"parent_code": "620000"
}, {"code": "620900", "name": "酒泉市", "parent_code": "620000"}, {
	"code": "621000",
	"name": "庆阳市",
	"parent_code": "620000"
}, {"code": "621100", "name": "定西市", "parent_code": "620000"}, {
	"code": "621200",
	"name": "陇南市",
	"parent_code": "620000"
}, {"code": "622900", "name": "临夏回族自治州", "parent_code": "620000"}, {
	"code": "623000",
	"name": "甘南藏族自治州",
	"parent_code": "620000"
}, {"code": "630100", "name": "西宁市", "parent_code": "630000"}, {
	"code": "630200",
	"name": "海东市",
	"parent_code": "630000"
}, {"code": "632200", "name": "海北藏族自治州", "parent_code": "630000"}, {
	"code": "632300",
	"name": "黄南藏族自治州",
	"parent_code": "630000"
}, {"code": "632500", "name": "海南藏族自治州", "parent_code": "630000"}, {
	"code": "632600",
	"name": "果洛藏族自治州",
	"parent_code": "630000"
}, {"code": "632700", "name": "玉树藏族自治州", "parent_code": "630000"}, {
	"code": "632800",
	"name": "海西蒙古族藏族自治州",
	"parent_code": "630000"
}, {"code": "640100", "name": "银川市", "parent_code": "640000"}, {
	"code": "640200",
	"name": "石嘴山市",
	"parent_code": "640000"
}, {"code": "640300", "name": "吴忠市", "parent_code": "640000"}, {
	"code": "640400",
	"name": "固原市",
	"parent_code": "640000"
}, {"code": "640500", "name": "中卫市", "parent_code": "640000"}, {
	"code": "650100",
	"name": "乌鲁木齐市",
	"parent_code": "650000"
}, {"code": "650200", "name": "克拉玛依市", "parent_code": "650000"}, {
	"code": "650400",
	"name": "吐鲁番市",
	"parent_code": "650000"
}, {"code": "650500", "name": "哈密市", "parent_code": "650000"}, {
	"code": "652300",
	"name": "昌吉回族自治州",
	"parent_code": "650000"
}, {"code": "652700", "name": "博尔塔拉蒙古自治州", "parent_code": "650000"}, {
	"code": "652800",
	"name": "巴音郭楞蒙古自治州",
	"parent_code": "650000"
}, {"code": "652900", "name": "阿克苏地区", "parent_code": "650000"}, {
	"code": "653000",
	"name": "克孜勒苏柯尔克孜自治州",
	"parent_code": "650000"
}, {"code": "653100", "name": "喀什地区", "parent_code": "650000"}, {
	"code": "653200",
	"name": "和田地区",
	"parent_code": "650000"
}, {"code": "654000", "name": "伊犁哈萨克自治州", "parent_code": "650000"}, {
	"code": "654200",
	"name": "塔城地区",
	"parent_code": "650000"
}, {"code": "654300", "name": "阿勒泰地区", "parent_code": "650000"}, {
	"code": "659000",
	"name": "自治区直辖县级行政区划",
	"parent_code": "650000"
}];

// 区
const areas = [{"code": "110101", "name": "东城区", "parent_code": "110100"}, {
	"code": "110102",
	"name": "西城区",
	"parent_code": "110100"
}, {"code": "110105", "name": "朝阳区", "parent_code": "110100"}, {
	"code": "110106",
	"name": "丰台区",
	"parent_code": "110100"
}, {"code": "110107", "name": "石景山区", "parent_code": "110100"}, {
	"code": "110108",
	"name": "海淀区",
	"parent_code": "110100"
}, {"code": "110109", "name": "门头沟区", "parent_code": "110100"}, {
	"code": "110111",
	"name": "房山区",
	"parent_code": "110100"
}, {"code": "110112", "name": "通州区", "parent_code": "110100"}, {
	"code": "110113",
	"name": "顺义区",
	"parent_code": "110100"
}, {"code": "110114", "name": "昌平区", "parent_code": "110100"}, {
	"code": "110115",
	"name": "大兴区",
	"parent_code": "110100"
}, {"code": "110116", "name": "怀柔区", "parent_code": "110100"}, {
	"code": "110117",
	"name": "平谷区",
	"parent_code": "110100"
}, {"code": "110118", "name": "密云区", "parent_code": "110100"}, {
	"code": "110119",
	"name": "延庆区",
	"parent_code": "110100"
}, {"code": "120101", "name": "和平区", "parent_code": "120100"}, {
	"code": "120102",
	"name": "河东区",
	"parent_code": "120100"
}, {"code": "120103", "name": "河西区", "parent_code": "120100"}, {
	"code": "120104",
	"name": "南开区",
	"parent_code": "120100"
}, {"code": "120105", "name": "河北区", "parent_code": "120100"}, {
	"code": "120106",
	"name": "红桥区",
	"parent_code": "120100"
}, {"code": "120110", "name": "东丽区", "parent_code": "120100"}, {
	"code": "120111",
	"name": "西青区",
	"parent_code": "120100"
}, {"code": "120112", "name": "津南区", "parent_code": "120100"}, {
	"code": "120113",
	"name": "北辰区",
	"parent_code": "120100"
}, {"code": "120114", "name": "武清区", "parent_code": "120100"}, {
	"code": "120115",
	"name": "宝坻区",
	"parent_code": "120100"
}, {"code": "120116", "name": "滨海新区", "parent_code": "120100"}, {
	"code": "120117",
	"name": "宁河区",
	"parent_code": "120100"
}, {"code": "120118", "name": "静海区", "parent_code": "120100"}, {
	"code": "120119",
	"name": "蓟州区",
	"parent_code": "120100"
}, {"code": "130102", "name": "长安区", "parent_code": "130100"}, {
	"code": "130104",
	"name": "桥西区",
	"parent_code": "130100"
}, {"code": "130105", "name": "新华区", "parent_code": "130100"}, {
	"code": "130107",
	"name": "井陉矿区",
	"parent_code": "130100"
}, {"code": "130108", "name": "裕华区", "parent_code": "130100"}, {
	"code": "130109",
	"name": "藁城区",
	"parent_code": "130100"
}, {"code": "130110", "name": "鹿泉区", "parent_code": "130100"}, {
	"code": "130111",
	"name": "栾城区",
	"parent_code": "130100"
}, {"code": "130121", "name": "井陉县", "parent_code": "130100"}, {
	"code": "130123",
	"name": "正定县",
	"parent_code": "130100"
}, {"code": "130125", "name": "行唐县", "parent_code": "130100"}, {
	"code": "130126",
	"name": "灵寿县",
	"parent_code": "130100"
}, {"code": "130127", "name": "高邑县", "parent_code": "130100"}, {
	"code": "130128",
	"name": "深泽县",
	"parent_code": "130100"
}, {"code": "130129", "name": "赞皇县", "parent_code": "130100"}, {
	"code": "130130",
	"name": "无极县",
	"parent_code": "130100"
}, {"code": "130131", "name": "平山县", "parent_code": "130100"}, {
	"code": "130132",
	"name": "元氏县",
	"parent_code": "130100"
}, {"code": "130133", "name": "赵县", "parent_code": "130100"}, {
	"code": "130183",
	"name": "晋州市",
	"parent_code": "130100"
}, {"code": "130184", "name": "新乐市", "parent_code": "130100"}, {
	"code": "130202",
	"name": "路南区",
	"parent_code": "130200"
}, {"code": "130203", "name": "路北区", "parent_code": "130200"}, {
	"code": "130204",
	"name": "古冶区",
	"parent_code": "130200"
}, {"code": "130205", "name": "开平区", "parent_code": "130200"}, {
	"code": "130207",
	"name": "丰南区",
	"parent_code": "130200"
}, {"code": "130208", "name": "丰润区", "parent_code": "130200"}, {
	"code": "130209",
	"name": "曹妃甸区",
	"parent_code": "130200"
}, {"code": "130223", "name": "滦县", "parent_code": "130200"}, {
	"code": "130224",
	"name": "滦南县",
	"parent_code": "130200"
}, {"code": "130225", "name": "乐亭县", "parent_code": "130200"}, {
	"code": "130227",
	"name": "迁西县",
	"parent_code": "130200"
}, {"code": "130229", "name": "玉田县", "parent_code": "130200"}, {
	"code": "130281",
	"name": "遵化市",
	"parent_code": "130200"
}, {"code": "130283", "name": "迁安市", "parent_code": "130200"}, {
	"code": "130302",
	"name": "海港区",
	"parent_code": "130300"
}, {"code": "130303", "name": "山海关区", "parent_code": "130300"}, {
	"code": "130304",
	"name": "北戴河区",
	"parent_code": "130300"
}, {"code": "130306", "name": "抚宁区", "parent_code": "130300"}, {
	"code": "130321",
	"name": "青龙满族自治县",
	"parent_code": "130300"
}, {"code": "130322", "name": "昌黎县", "parent_code": "130300"}, {
	"code": "130324",
	"name": "卢龙县",
	"parent_code": "130300"
}, {"code": "130402", "name": "邯山区", "parent_code": "130400"}, {
	"code": "130403",
	"name": "丛台区",
	"parent_code": "130400"
}, {"code": "130404", "name": "复兴区", "parent_code": "130400"}, {
	"code": "130406",
	"name": "峰峰矿区",
	"parent_code": "130400"
}, {"code": "130421", "name": "邯郸县", "parent_code": "130400"}, {
	"code": "130423",
	"name": "临漳县",
	"parent_code": "130400"
}, {"code": "130424", "name": "成安县", "parent_code": "130400"}, {
	"code": "130425",
	"name": "大名县",
	"parent_code": "130400"
}, {"code": "130426", "name": "涉县", "parent_code": "130400"}, {
	"code": "130427",
	"name": "磁县",
	"parent_code": "130400"
}, {"code": "130428", "name": "肥乡县", "parent_code": "130400"}, {
	"code": "130429",
	"name": "永年县",
	"parent_code": "130400"
}, {"code": "130430", "name": "邱县", "parent_code": "130400"}, {
	"code": "130431",
	"name": "鸡泽县",
	"parent_code": "130400"
}, {"code": "130432", "name": "广平县", "parent_code": "130400"}, {
	"code": "130433",
	"name": "馆陶县",
	"parent_code": "130400"
}, {"code": "130434", "name": "魏县", "parent_code": "130400"}, {
	"code": "130435",
	"name": "曲周县",
	"parent_code": "130400"
}, {"code": "130481", "name": "武安市", "parent_code": "130400"}, {
	"code": "130502",
	"name": "桥东区",
	"parent_code": "130500"
}, {"code": "130503", "name": "桥西区", "parent_code": "130500"}, {
	"code": "130521",
	"name": "邢台县",
	"parent_code": "130500"
}, {"code": "130522", "name": "临城县", "parent_code": "130500"}, {
	"code": "130523",
	"name": "内丘县",
	"parent_code": "130500"
}, {"code": "130524", "name": "柏乡县", "parent_code": "130500"}, {
	"code": "130525",
	"name": "隆尧县",
	"parent_code": "130500"
}, {"code": "130526", "name": "任县", "parent_code": "130500"}, {
	"code": "130527",
	"name": "南和县",
	"parent_code": "130500"
}, {"code": "130528", "name": "宁晋县", "parent_code": "130500"}, {
	"code": "130529",
	"name": "巨鹿县",
	"parent_code": "130500"
}, {"code": "130530", "name": "新河县", "parent_code": "130500"}, {
	"code": "130531",
	"name": "广宗县",
	"parent_code": "130500"
}, {"code": "130532", "name": "平乡县", "parent_code": "130500"}, {
	"code": "130533",
	"name": "威县",
	"parent_code": "130500"
}, {"code": "130534", "name": "清河县", "parent_code": "130500"}, {
	"code": "130535",
	"name": "临西县",
	"parent_code": "130500"
}, {"code": "130581", "name": "南宫市", "parent_code": "130500"}, {
	"code": "130582",
	"name": "沙河市",
	"parent_code": "130500"
}, {"code": "130602", "name": "竞秀区", "parent_code": "130600"}, {
	"code": "130606",
	"name": "莲池区",
	"parent_code": "130600"
}, {"code": "130607", "name": "满城区", "parent_code": "130600"}, {
	"code": "130608",
	"name": "清苑区",
	"parent_code": "130600"
}, {"code": "130609", "name": "徐水区", "parent_code": "130600"}, {
	"code": "130623",
	"name": "涞水县",
	"parent_code": "130600"
}, {"code": "130624", "name": "阜平县", "parent_code": "130600"}, {
	"code": "130626",
	"name": "定兴县",
	"parent_code": "130600"
}, {"code": "130627", "name": "唐县", "parent_code": "130600"}, {
	"code": "130628",
	"name": "高阳县",
	"parent_code": "130600"
}, {"code": "130629", "name": "容城县", "parent_code": "130600"}, {
	"code": "130630",
	"name": "涞源县",
	"parent_code": "130600"
}, {"code": "130631", "name": "望都县", "parent_code": "130600"}, {
	"code": "130632",
	"name": "安新县",
	"parent_code": "130600"
}, {"code": "130633", "name": "易县", "parent_code": "130600"}, {
	"code": "130634",
	"name": "曲阳县",
	"parent_code": "130600"
}, {"code": "130635", "name": "蠡县", "parent_code": "130600"}, {
	"code": "130636",
	"name": "顺平县",
	"parent_code": "130600"
}, {"code": "130637", "name": "博野县", "parent_code": "130600"}, {
	"code": "130638",
	"name": "雄县",
	"parent_code": "130600"
}, {"code": "130681", "name": "涿州市", "parent_code": "130600"}, {
	"code": "130683",
	"name": "安国市",
	"parent_code": "130600"
}, {"code": "130684", "name": "高碑店市", "parent_code": "130600"}, {
	"code": "130702",
	"name": "桥东区",
	"parent_code": "130700"
}, {"code": "130703", "name": "桥西区", "parent_code": "130700"}, {
	"code": "130705",
	"name": "宣化区",
	"parent_code": "130700"
}, {"code": "130706", "name": "下花园区", "parent_code": "130700"}, {
	"code": "130708",
	"name": "万全区",
	"parent_code": "130700"
}, {"code": "130709", "name": "崇礼区", "parent_code": "130700"}, {
	"code": "130722",
	"name": "张北县",
	"parent_code": "130700"
}, {"code": "130723", "name": "康保县", "parent_code": "130700"}, {
	"code": "130724",
	"name": "沽源县",
	"parent_code": "130700"
}, {"code": "130725", "name": "尚义县", "parent_code": "130700"}, {
	"code": "130726",
	"name": "蔚县",
	"parent_code": "130700"
}, {"code": "130727", "name": "阳原县", "parent_code": "130700"}, {
	"code": "130728",
	"name": "怀安县",
	"parent_code": "130700"
}, {"code": "130730", "name": "怀来县", "parent_code": "130700"}, {
	"code": "130731",
	"name": "涿鹿县",
	"parent_code": "130700"
}, {"code": "130732", "name": "赤城县", "parent_code": "130700"}, {
	"code": "130802",
	"name": "双桥区",
	"parent_code": "130800"
}, {"code": "130803", "name": "双滦区", "parent_code": "130800"}, {
	"code": "130804",
	"name": "鹰手营子矿区",
	"parent_code": "130800"
}, {"code": "130821", "name": "承德县", "parent_code": "130800"}, {
	"code": "130822",
	"name": "兴隆县",
	"parent_code": "130800"
}, {"code": "130823", "name": "平泉县", "parent_code": "130800"}, {
	"code": "130824",
	"name": "滦平县",
	"parent_code": "130800"
}, {"code": "130825", "name": "隆化县", "parent_code": "130800"}, {
	"code": "130826",
	"name": "丰宁满族自治县",
	"parent_code": "130800"
}, {"code": "130827", "name": "宽城满族自治县", "parent_code": "130800"}, {
	"code": "130828",
	"name": "围场满族蒙古族自治县",
	"parent_code": "130800"
}, {"code": "130902", "name": "新华区", "parent_code": "130900"}, {
	"code": "130903",
	"name": "运河区",
	"parent_code": "130900"
}, {"code": "130921", "name": "沧县", "parent_code": "130900"}, {
	"code": "130922",
	"name": "青县",
	"parent_code": "130900"
}, {"code": "130923", "name": "东光县", "parent_code": "130900"}, {
	"code": "130924",
	"name": "海兴县",
	"parent_code": "130900"
}, {"code": "130925", "name": "盐山县", "parent_code": "130900"}, {
	"code": "130926",
	"name": "肃宁县",
	"parent_code": "130900"
}, {"code": "130927", "name": "南皮县", "parent_code": "130900"}, {
	"code": "130928",
	"name": "吴桥县",
	"parent_code": "130900"
}, {"code": "130929", "name": "献县", "parent_code": "130900"}, {
	"code": "130930",
	"name": "孟村回族自治县",
	"parent_code": "130900"
}, {"code": "130981", "name": "泊头市", "parent_code": "130900"}, {
	"code": "130982",
	"name": "任丘市",
	"parent_code": "130900"
}, {"code": "130983", "name": "黄骅市", "parent_code": "130900"}, {
	"code": "130984",
	"name": "河间市",
	"parent_code": "130900"
}, {"code": "131002", "name": "安次区", "parent_code": "131000"}, {
	"code": "131003",
	"name": "广阳区",
	"parent_code": "131000"
}, {"code": "131022", "name": "固安县", "parent_code": "131000"}, {
	"code": "131023",
	"name": "永清县",
	"parent_code": "131000"
}, {"code": "131024", "name": "香河县", "parent_code": "131000"}, {
	"code": "131025",
	"name": "大城县",
	"parent_code": "131000"
}, {"code": "131026", "name": "文安县", "parent_code": "131000"}, {
	"code": "131028",
	"name": "大厂回族自治县",
	"parent_code": "131000"
}, {"code": "131081", "name": "霸州市", "parent_code": "131000"}, {
	"code": "131082",
	"name": "三河市",
	"parent_code": "131000"
}, {"code": "131102", "name": "桃城区", "parent_code": "131100"}, {
	"code": "131103",
	"name": "冀州区",
	"parent_code": "131100"
}, {"code": "131121", "name": "枣强县", "parent_code": "131100"}, {
	"code": "131122",
	"name": "武邑县",
	"parent_code": "131100"
}, {"code": "131123", "name": "武强县", "parent_code": "131100"}, {
	"code": "131124",
	"name": "饶阳县",
	"parent_code": "131100"
}, {"code": "131125", "name": "安平县", "parent_code": "131100"}, {
	"code": "131126",
	"name": "故城县",
	"parent_code": "131100"
}, {"code": "131127", "name": "景县", "parent_code": "131100"}, {
	"code": "131128",
	"name": "阜城县",
	"parent_code": "131100"
}, {"code": "131182", "name": "深州市", "parent_code": "131100"}, {
	"code": "139001",
	"name": "定州市",
	"parent_code": "139000"
}, {"code": "139002", "name": "辛集市", "parent_code": "139000"}, {
	"code": "140105",
	"name": "小店区",
	"parent_code": "140100"
}, {"code": "140106", "name": "迎泽区", "parent_code": "140100"}, {
	"code": "140107",
	"name": "杏花岭区",
	"parent_code": "140100"
}, {"code": "140108", "name": "尖草坪区", "parent_code": "140100"}, {
	"code": "140109",
	"name": "万柏林区",
	"parent_code": "140100"
}, {"code": "140110", "name": "晋源区", "parent_code": "140100"}, {
	"code": "140121",
	"name": "清徐县",
	"parent_code": "140100"
}, {"code": "140122", "name": "阳曲县", "parent_code": "140100"}, {
	"code": "140123",
	"name": "娄烦县",
	"parent_code": "140100"
}, {"code": "140181", "name": "古交市", "parent_code": "140100"}, {
	"code": "140202",
	"name": "城区",
	"parent_code": "140200"
}, {"code": "140203", "name": "矿区", "parent_code": "140200"}, {
	"code": "140211",
	"name": "南郊区",
	"parent_code": "140200"
}, {"code": "140212", "name": "新荣区", "parent_code": "140200"}, {
	"code": "140221",
	"name": "阳高县",
	"parent_code": "140200"
}, {"code": "140222", "name": "天镇县", "parent_code": "140200"}, {
	"code": "140223",
	"name": "广灵县",
	"parent_code": "140200"
}, {"code": "140224", "name": "灵丘县", "parent_code": "140200"}, {
	"code": "140225",
	"name": "浑源县",
	"parent_code": "140200"
}, {"code": "140226", "name": "左云县", "parent_code": "140200"}, {
	"code": "140227",
	"name": "大同县",
	"parent_code": "140200"
}, {"code": "140302", "name": "城区", "parent_code": "140300"}, {
	"code": "140303",
	"name": "矿区",
	"parent_code": "140300"
}, {"code": "140311", "name": "郊区", "parent_code": "140300"}, {
	"code": "140321",
	"name": "平定县",
	"parent_code": "140300"
}, {"code": "140322", "name": "盂县", "parent_code": "140300"}, {
	"code": "140402",
	"name": "城区",
	"parent_code": "140400"
}, {"code": "140411", "name": "郊区", "parent_code": "140400"}, {
	"code": "140421",
	"name": "长治县",
	"parent_code": "140400"
}, {"code": "140423", "name": "襄垣县", "parent_code": "140400"}, {
	"code": "140424",
	"name": "屯留县",
	"parent_code": "140400"
}, {"code": "140425", "name": "平顺县", "parent_code": "140400"}, {
	"code": "140426",
	"name": "黎城县",
	"parent_code": "140400"
}, {"code": "140427", "name": "壶关县", "parent_code": "140400"}, {
	"code": "140428",
	"name": "长子县",
	"parent_code": "140400"
}, {"code": "140429", "name": "武乡县", "parent_code": "140400"}, {
	"code": "140430",
	"name": "沁县",
	"parent_code": "140400"
}, {"code": "140431", "name": "沁源县", "parent_code": "140400"}, {
	"code": "140481",
	"name": "潞城市",
	"parent_code": "140400"
}, {"code": "140502", "name": "城区", "parent_code": "140500"}, {
	"code": "140521",
	"name": "沁水县",
	"parent_code": "140500"
}, {"code": "140522", "name": "阳城县", "parent_code": "140500"}, {
	"code": "140524",
	"name": "陵川县",
	"parent_code": "140500"
}, {"code": "140525", "name": "泽州县", "parent_code": "140500"}, {
	"code": "140581",
	"name": "高平市",
	"parent_code": "140500"
}, {"code": "140602", "name": "朔城区", "parent_code": "140600"}, {
	"code": "140603",
	"name": "平鲁区",
	"parent_code": "140600"
}, {"code": "140621", "name": "山阴县", "parent_code": "140600"}, {
	"code": "140622",
	"name": "应县",
	"parent_code": "140600"
}, {"code": "140623", "name": "右玉县", "parent_code": "140600"}, {
	"code": "140624",
	"name": "怀仁县",
	"parent_code": "140600"
}, {"code": "140702", "name": "榆次区", "parent_code": "140700"}, {
	"code": "140721",
	"name": "榆社县",
	"parent_code": "140700"
}, {"code": "140722", "name": "左权县", "parent_code": "140700"}, {
	"code": "140723",
	"name": "和顺县",
	"parent_code": "140700"
}, {"code": "140724", "name": "昔阳县", "parent_code": "140700"}, {
	"code": "140725",
	"name": "寿阳县",
	"parent_code": "140700"
}, {"code": "140726", "name": "太谷县", "parent_code": "140700"}, {
	"code": "140727",
	"name": "祁县",
	"parent_code": "140700"
}, {"code": "140728", "name": "平遥县", "parent_code": "140700"}, {
	"code": "140729",
	"name": "灵石县",
	"parent_code": "140700"
}, {"code": "140781", "name": "介休市", "parent_code": "140700"}, {
	"code": "140802",
	"name": "盐湖区",
	"parent_code": "140800"
}, {"code": "140821", "name": "临猗县", "parent_code": "140800"}, {
	"code": "140822",
	"name": "万荣县",
	"parent_code": "140800"
}, {"code": "140823", "name": "闻喜县", "parent_code": "140800"}, {
	"code": "140824",
	"name": "稷山县",
	"parent_code": "140800"
}, {"code": "140825", "name": "新绛县", "parent_code": "140800"}, {
	"code": "140826",
	"name": "绛县",
	"parent_code": "140800"
}, {"code": "140827", "name": "垣曲县", "parent_code": "140800"}, {
	"code": "140828",
	"name": "夏县",
	"parent_code": "140800"
}, {"code": "140829", "name": "平陆县", "parent_code": "140800"}, {
	"code": "140830",
	"name": "芮城县",
	"parent_code": "140800"
}, {"code": "140881", "name": "永济市", "parent_code": "140800"}, {
	"code": "140882",
	"name": "河津市",
	"parent_code": "140800"
}, {"code": "140902", "name": "忻府区", "parent_code": "140900"}, {
	"code": "140921",
	"name": "定襄县",
	"parent_code": "140900"
}, {"code": "140922", "name": "五台县", "parent_code": "140900"}, {
	"code": "140923",
	"name": "代县",
	"parent_code": "140900"
}, {"code": "140924", "name": "繁峙县", "parent_code": "140900"}, {
	"code": "140925",
	"name": "宁武县",
	"parent_code": "140900"
}, {"code": "140926", "name": "静乐县", "parent_code": "140900"}, {
	"code": "140927",
	"name": "神池县",
	"parent_code": "140900"
}, {"code": "140928", "name": "五寨县", "parent_code": "140900"}, {
	"code": "140929",
	"name": "岢岚县",
	"parent_code": "140900"
}, {"code": "140930", "name": "河曲县", "parent_code": "140900"}, {
	"code": "140931",
	"name": "保德县",
	"parent_code": "140900"
}, {"code": "140932", "name": "偏关县", "parent_code": "140900"}, {
	"code": "140981",
	"name": "原平市",
	"parent_code": "140900"
}, {"code": "141002", "name": "尧都区", "parent_code": "141000"}, {
	"code": "141021",
	"name": "曲沃县",
	"parent_code": "141000"
}, {"code": "141022", "name": "翼城县", "parent_code": "141000"}, {
	"code": "141023",
	"name": "襄汾县",
	"parent_code": "141000"
}, {"code": "141024", "name": "洪洞县", "parent_code": "141000"}, {
	"code": "141025",
	"name": "古县",
	"parent_code": "141000"
}, {"code": "141026", "name": "安泽县", "parent_code": "141000"}, {
	"code": "141027",
	"name": "浮山县",
	"parent_code": "141000"
}, {"code": "141028", "name": "吉县", "parent_code": "141000"}, {
	"code": "141029",
	"name": "乡宁县",
	"parent_code": "141000"
}, {"code": "141030", "name": "大宁县", "parent_code": "141000"}, {
	"code": "141031",
	"name": "隰县",
	"parent_code": "141000"
}, {"code": "141032", "name": "永和县", "parent_code": "141000"}, {
	"code": "141033",
	"name": "蒲县",
	"parent_code": "141000"
}, {"code": "141034", "name": "汾西县", "parent_code": "141000"}, {
	"code": "141081",
	"name": "侯马市",
	"parent_code": "141000"
}, {"code": "141082", "name": "霍州市", "parent_code": "141000"}, {
	"code": "141102",
	"name": "离石区",
	"parent_code": "141100"
}, {"code": "141121", "name": "文水县", "parent_code": "141100"}, {
	"code": "141122",
	"name": "交城县",
	"parent_code": "141100"
}, {"code": "141123", "name": "兴县", "parent_code": "141100"}, {
	"code": "141124",
	"name": "临县",
	"parent_code": "141100"
}, {"code": "141125", "name": "柳林县", "parent_code": "141100"}, {
	"code": "141126",
	"name": "石楼县",
	"parent_code": "141100"
}, {"code": "141127", "name": "岚县", "parent_code": "141100"}, {
	"code": "141128",
	"name": "方山县",
	"parent_code": "141100"
}, {"code": "141129", "name": "中阳县", "parent_code": "141100"}, {
	"code": "141130",
	"name": "交口县",
	"parent_code": "141100"
}, {"code": "141181", "name": "孝义市", "parent_code": "141100"}, {
	"code": "141182",
	"name": "汾阳市",
	"parent_code": "141100"
}, {"code": "150102", "name": "新城区", "parent_code": "150100"}, {
	"code": "150103",
	"name": "回民区",
	"parent_code": "150100"
}, {"code": "150104", "name": "玉泉区", "parent_code": "150100"}, {
	"code": "150105",
	"name": "赛罕区",
	"parent_code": "150100"
}, {"code": "150121", "name": "土默特左旗", "parent_code": "150100"}, {
	"code": "150122",
	"name": "托克托县",
	"parent_code": "150100"
}, {"code": "150123", "name": "和林格尔县", "parent_code": "150100"}, {
	"code": "150124",
	"name": "清水河县",
	"parent_code": "150100"
}, {"code": "150125", "name": "武川县", "parent_code": "150100"}, {
	"code": "150202",
	"name": "东河区",
	"parent_code": "150200"
}, {"code": "150203", "name": "昆都仑区", "parent_code": "150200"}, {
	"code": "150204",
	"name": "青山区",
	"parent_code": "150200"
}, {"code": "150205", "name": "石拐区", "parent_code": "150200"}, {
	"code": "150206",
	"name": "白云鄂博矿区",
	"parent_code": "150200"
}, {"code": "150207", "name": "九原区", "parent_code": "150200"}, {
	"code": "150221",
	"name": "土默特右旗",
	"parent_code": "150200"
}, {"code": "150222", "name": "固阳县", "parent_code": "150200"}, {
	"code": "150223",
	"name": "达尔罕茂明安联合旗",
	"parent_code": "150200"
}, {"code": "150302", "name": "海勃湾区", "parent_code": "150300"}, {
	"code": "150303",
	"name": "海南区",
	"parent_code": "150300"
}, {"code": "150304", "name": "乌达区", "parent_code": "150300"}, {
	"code": "150402",
	"name": "红山区",
	"parent_code": "150400"
}, {"code": "150403", "name": "元宝山区", "parent_code": "150400"}, {
	"code": "150404",
	"name": "松山区",
	"parent_code": "150400"
}, {"code": "150421", "name": "阿鲁科尔沁旗", "parent_code": "150400"}, {
	"code": "150422",
	"name": "巴林左旗",
	"parent_code": "150400"
}, {"code": "150423", "name": "巴林右旗", "parent_code": "150400"}, {
	"code": "150424",
	"name": "林西县",
	"parent_code": "150400"
}, {"code": "150425", "name": "克什克腾旗", "parent_code": "150400"}, {
	"code": "150426",
	"name": "翁牛特旗",
	"parent_code": "150400"
}, {"code": "150428", "name": "喀喇沁旗", "parent_code": "150400"}, {
	"code": "150429",
	"name": "宁城县",
	"parent_code": "150400"
}, {"code": "150430", "name": "敖汉旗", "parent_code": "150400"}, {
	"code": "150502",
	"name": "科尔沁区",
	"parent_code": "150500"
}, {"code": "150521", "name": "科尔沁左翼中旗", "parent_code": "150500"}, {
	"code": "150522",
	"name": "科尔沁左翼后旗",
	"parent_code": "150500"
}, {"code": "150523", "name": "开鲁县", "parent_code": "150500"}, {
	"code": "150524",
	"name": "库伦旗",
	"parent_code": "150500"
}, {"code": "150525", "name": "奈曼旗", "parent_code": "150500"}, {
	"code": "150526",
	"name": "扎鲁特旗",
	"parent_code": "150500"
}, {"code": "150581", "name": "霍林郭勒市", "parent_code": "150500"}, {
	"code": "150602",
	"name": "东胜区",
	"parent_code": "150600"
}, {"code": "150603", "name": "康巴什区", "parent_code": "150600"}, {
	"code": "150621",
	"name": "达拉特旗",
	"parent_code": "150600"
}, {"code": "150622", "name": "准格尔旗", "parent_code": "150600"}, {
	"code": "150623",
	"name": "鄂托克前旗",
	"parent_code": "150600"
}, {"code": "150624", "name": "鄂托克旗", "parent_code": "150600"}, {
	"code": "150625",
	"name": "杭锦旗",
	"parent_code": "150600"
}, {"code": "150626", "name": "乌审旗", "parent_code": "150600"}, {
	"code": "150627",
	"name": "伊金霍洛旗",
	"parent_code": "150600"
}, {"code": "150702", "name": "海拉尔区", "parent_code": "150700"}, {
	"code": "150703",
	"name": "扎赉诺尔区",
	"parent_code": "150700"
}, {"code": "150721", "name": "阿荣旗", "parent_code": "150700"}, {
	"code": "150722",
	"name": "莫力达瓦达斡尔族自治旗",
	"parent_code": "150700"
}, {"code": "150723", "name": "鄂伦春自治旗", "parent_code": "150700"}, {
	"code": "150724",
	"name": "鄂温克族自治旗",
	"parent_code": "150700"
}, {"code": "150725", "name": "陈巴尔虎旗", "parent_code": "150700"}, {
	"code": "150726",
	"name": "新巴尔虎左旗",
	"parent_code": "150700"
}, {"code": "150727", "name": "新巴尔虎右旗", "parent_code": "150700"}, {
	"code": "150781",
	"name": "满洲里市",
	"parent_code": "150700"
}, {"code": "150782", "name": "牙克石市", "parent_code": "150700"}, {
	"code": "150783",
	"name": "扎兰屯市",
	"parent_code": "150700"
}, {"code": "150784", "name": "额尔古纳市", "parent_code": "150700"}, {
	"code": "150785",
	"name": "根河市",
	"parent_code": "150700"
}, {"code": "150802", "name": "临河区", "parent_code": "150800"}, {
	"code": "150821",
	"name": "五原县",
	"parent_code": "150800"
}, {"code": "150822", "name": "磴口县", "parent_code": "150800"}, {
	"code": "150823",
	"name": "乌拉特前旗",
	"parent_code": "150800"
}, {"code": "150824", "name": "乌拉特中旗", "parent_code": "150800"}, {
	"code": "150825",
	"name": "乌拉特后旗",
	"parent_code": "150800"
}, {"code": "150826", "name": "杭锦后旗", "parent_code": "150800"}, {
	"code": "150902",
	"name": "集宁区",
	"parent_code": "150900"
}, {"code": "150921", "name": "卓资县", "parent_code": "150900"}, {
	"code": "150922",
	"name": "化德县",
	"parent_code": "150900"
}, {"code": "150923", "name": "商都县", "parent_code": "150900"}, {
	"code": "150924",
	"name": "兴和县",
	"parent_code": "150900"
}, {"code": "150925", "name": "凉城县", "parent_code": "150900"}, {
	"code": "150926",
	"name": "察哈尔右翼前旗",
	"parent_code": "150900"
}, {"code": "150927", "name": "察哈尔右翼中旗", "parent_code": "150900"}, {
	"code": "150928",
	"name": "察哈尔右翼后旗",
	"parent_code": "150900"
}, {"code": "150929", "name": "四子王旗", "parent_code": "150900"}, {
	"code": "150981",
	"name": "丰镇市",
	"parent_code": "150900"
}, {"code": "152201", "name": "乌兰浩特市", "parent_code": "152200"}, {
	"code": "152202",
	"name": "阿尔山市",
	"parent_code": "152200"
}, {"code": "152221", "name": "科尔沁右翼前旗", "parent_code": "152200"}, {
	"code": "152222",
	"name": "科尔沁右翼中旗",
	"parent_code": "152200"
}, {"code": "152223", "name": "扎赉特旗", "parent_code": "152200"}, {
	"code": "152224",
	"name": "突泉县",
	"parent_code": "152200"
}, {"code": "152501", "name": "二连浩特市", "parent_code": "152500"}, {
	"code": "152502",
	"name": "锡林浩特市",
	"parent_code": "152500"
}, {"code": "152522", "name": "阿巴嘎旗", "parent_code": "152500"}, {
	"code": "152523",
	"name": "苏尼特左旗",
	"parent_code": "152500"
}, {"code": "152524", "name": "苏尼特右旗", "parent_code": "152500"}, {
	"code": "152525",
	"name": "东乌珠穆沁旗",
	"parent_code": "152500"
}, {"code": "152526", "name": "西乌珠穆沁旗", "parent_code": "152500"}, {
	"code": "152527",
	"name": "太仆寺旗",
	"parent_code": "152500"
}, {"code": "152528", "name": "镶黄旗", "parent_code": "152500"}, {
	"code": "152529",
	"name": "正镶白旗",
	"parent_code": "152500"
}, {"code": "152530", "name": "正蓝旗", "parent_code": "152500"}, {
	"code": "152531",
	"name": "多伦县",
	"parent_code": "152500"
}, {"code": "152921", "name": "阿拉善左旗", "parent_code": "152900"}, {
	"code": "152922",
	"name": "阿拉善右旗",
	"parent_code": "152900"
}, {"code": "152923", "name": "额济纳旗", "parent_code": "152900"}, {
	"code": "210102",
	"name": "和平区",
	"parent_code": "210100"
}, {"code": "210103", "name": "沈河区", "parent_code": "210100"}, {
	"code": "210104",
	"name": "大东区",
	"parent_code": "210100"
}, {"code": "210105", "name": "皇姑区", "parent_code": "210100"}, {
	"code": "210106",
	"name": "铁西区",
	"parent_code": "210100"
}, {"code": "210111", "name": "苏家屯区", "parent_code": "210100"}, {
	"code": "210112",
	"name": "浑南区",
	"parent_code": "210100"
}, {"code": "210113", "name": "沈北新区", "parent_code": "210100"}, {
	"code": "210114",
	"name": "于洪区",
	"parent_code": "210100"
}, {"code": "210115", "name": "辽中区", "parent_code": "210100"}, {
	"code": "210123",
	"name": "康平县",
	"parent_code": "210100"
}, {"code": "210124", "name": "法库县", "parent_code": "210100"}, {
	"code": "210181",
	"name": "新民市",
	"parent_code": "210100"
}, {"code": "210202", "name": "中山区", "parent_code": "210200"}, {
	"code": "210203",
	"name": "西岗区",
	"parent_code": "210200"
}, {"code": "210204", "name": "沙河口区", "parent_code": "210200"}, {
	"code": "210211",
	"name": "甘井子区",
	"parent_code": "210200"
}, {"code": "210212", "name": "旅顺口区", "parent_code": "210200"}, {
	"code": "210213",
	"name": "金州区",
	"parent_code": "210200"
}, {"code": "210214", "name": "普兰店区", "parent_code": "210200"}, {
	"code": "210224",
	"name": "长海县",
	"parent_code": "210200"
}, {"code": "210281", "name": "瓦房店市", "parent_code": "210200"}, {
	"code": "210283",
	"name": "庄河市",
	"parent_code": "210200"
}, {"code": "210302", "name": "铁东区", "parent_code": "210300"}, {
	"code": "210303",
	"name": "铁西区",
	"parent_code": "210300"
}, {"code": "210304", "name": "立山区", "parent_code": "210300"}, {
	"code": "210311",
	"name": "千山区",
	"parent_code": "210300"
}, {"code": "210321", "name": "台安县", "parent_code": "210300"}, {
	"code": "210323",
	"name": "岫岩满族自治县",
	"parent_code": "210300"
}, {"code": "210381", "name": "海城市", "parent_code": "210300"}, {
	"code": "210402",
	"name": "新抚区",
	"parent_code": "210400"
}, {"code": "210403", "name": "东洲区", "parent_code": "210400"}, {
	"code": "210404",
	"name": "望花区",
	"parent_code": "210400"
}, {"code": "210411", "name": "顺城区", "parent_code": "210400"}, {
	"code": "210421",
	"name": "抚顺县",
	"parent_code": "210400"
}, {"code": "210422", "name": "新宾满族自治县", "parent_code": "210400"}, {
	"code": "210423",
	"name": "清原满族自治县",
	"parent_code": "210400"
}, {"code": "210502", "name": "平山区", "parent_code": "210500"}, {
	"code": "210503",
	"name": "溪湖区",
	"parent_code": "210500"
}, {"code": "210504", "name": "明山区", "parent_code": "210500"}, {
	"code": "210505",
	"name": "南芬区",
	"parent_code": "210500"
}, {"code": "210521", "name": "本溪满族自治县", "parent_code": "210500"}, {
	"code": "210522",
	"name": "桓仁满族自治县",
	"parent_code": "210500"
}, {"code": "210602", "name": "元宝区", "parent_code": "210600"}, {
	"code": "210603",
	"name": "振兴区",
	"parent_code": "210600"
}, {"code": "210604", "name": "振安区", "parent_code": "210600"}, {
	"code": "210624",
	"name": "宽甸满族自治县",
	"parent_code": "210600"
}, {"code": "210681", "name": "东港市", "parent_code": "210600"}, {
	"code": "210682",
	"name": "凤城市",
	"parent_code": "210600"
}, {"code": "210702", "name": "古塔区", "parent_code": "210700"}, {
	"code": "210703",
	"name": "凌河区",
	"parent_code": "210700"
}, {"code": "210711", "name": "太和区", "parent_code": "210700"}, {
	"code": "210726",
	"name": "黑山县",
	"parent_code": "210700"
}, {"code": "210727", "name": "义县", "parent_code": "210700"}, {
	"code": "210781",
	"name": "凌海市",
	"parent_code": "210700"
}, {"code": "210782", "name": "北镇市", "parent_code": "210700"}, {
	"code": "210802",
	"name": "站前区",
	"parent_code": "210800"
}, {"code": "210803", "name": "西市区", "parent_code": "210800"}, {
	"code": "210804",
	"name": "鲅鱼圈区",
	"parent_code": "210800"
}, {"code": "210811", "name": "老边区", "parent_code": "210800"}, {
	"code": "210881",
	"name": "盖州市",
	"parent_code": "210800"
}, {"code": "210882", "name": "大石桥市", "parent_code": "210800"}, {
	"code": "210902",
	"name": "海州区",
	"parent_code": "210900"
}, {"code": "210903", "name": "新邱区", "parent_code": "210900"}, {
	"code": "210904",
	"name": "太平区",
	"parent_code": "210900"
}, {"code": "210905", "name": "清河门区", "parent_code": "210900"}, {
	"code": "210911",
	"name": "细河区",
	"parent_code": "210900"
}, {"code": "210921", "name": "阜新蒙古族自治县", "parent_code": "210900"}, {
	"code": "210922",
	"name": "彰武县",
	"parent_code": "210900"
}, {"code": "211002", "name": "白塔区", "parent_code": "211000"}, {
	"code": "211003",
	"name": "文圣区",
	"parent_code": "211000"
}, {"code": "211004", "name": "宏伟区", "parent_code": "211000"}, {
	"code": "211005",
	"name": "弓长岭区",
	"parent_code": "211000"
}, {"code": "211011", "name": "太子河区", "parent_code": "211000"}, {
	"code": "211021",
	"name": "辽阳县",
	"parent_code": "211000"
}, {"code": "211081", "name": "灯塔市", "parent_code": "211000"}, {
	"code": "211102",
	"name": "双台子区",
	"parent_code": "211100"
}, {"code": "211103", "name": "兴隆台区", "parent_code": "211100"}, {
	"code": "211104",
	"name": "大洼区",
	"parent_code": "211100"
}, {"code": "211122", "name": "盘山县", "parent_code": "211100"}, {
	"code": "211202",
	"name": "银州区",
	"parent_code": "211200"
}, {"code": "211204", "name": "清河区", "parent_code": "211200"}, {
	"code": "211221",
	"name": "铁岭县",
	"parent_code": "211200"
}, {"code": "211223", "name": "西丰县", "parent_code": "211200"}, {
	"code": "211224",
	"name": "昌图县",
	"parent_code": "211200"
}, {"code": "211281", "name": "调兵山市", "parent_code": "211200"}, {
	"code": "211282",
	"name": "开原市",
	"parent_code": "211200"
}, {"code": "211302", "name": "双塔区", "parent_code": "211300"}, {
	"code": "211303",
	"name": "龙城区",
	"parent_code": "211300"
}, {"code": "211321", "name": "朝阳县", "parent_code": "211300"}, {
	"code": "211322",
	"name": "建平县",
	"parent_code": "211300"
}, {"code": "211324", "name": "喀喇沁左翼蒙古族自治县", "parent_code": "211300"}, {
	"code": "211381",
	"name": "北票市",
	"parent_code": "211300"
}, {"code": "211382", "name": "凌源市", "parent_code": "211300"}, {
	"code": "211402",
	"name": "连山区",
	"parent_code": "211400"
}, {"code": "211403", "name": "龙港区", "parent_code": "211400"}, {
	"code": "211404",
	"name": "南票区",
	"parent_code": "211400"
}, {"code": "211421", "name": "绥中县", "parent_code": "211400"}, {
	"code": "211422",
	"name": "建昌县",
	"parent_code": "211400"
}, {"code": "211481", "name": "兴城市", "parent_code": "211400"}, {
	"code": "220102",
	"name": "南关区",
	"parent_code": "220100"
}, {"code": "220103", "name": "宽城区", "parent_code": "220100"}, {
	"code": "220104",
	"name": "朝阳区",
	"parent_code": "220100"
}, {"code": "220105", "name": "二道区", "parent_code": "220100"}, {
	"code": "220106",
	"name": "绿园区",
	"parent_code": "220100"
}, {"code": "220112", "name": "双阳区", "parent_code": "220100"}, {
	"code": "220113",
	"name": "九台区",
	"parent_code": "220100"
}, {"code": "220122", "name": "农安县", "parent_code": "220100"}, {
	"code": "220182",
	"name": "榆树市",
	"parent_code": "220100"
}, {"code": "220183", "name": "德惠市", "parent_code": "220100"}, {
	"code": "220202",
	"name": "昌邑区",
	"parent_code": "220200"
}, {"code": "220203", "name": "龙潭区", "parent_code": "220200"}, {
	"code": "220204",
	"name": "船营区",
	"parent_code": "220200"
}, {"code": "220211", "name": "丰满区", "parent_code": "220200"}, {
	"code": "220221",
	"name": "永吉县",
	"parent_code": "220200"
}, {"code": "220281", "name": "蛟河市", "parent_code": "220200"}, {
	"code": "220282",
	"name": "桦甸市",
	"parent_code": "220200"
}, {"code": "220283", "name": "舒兰市", "parent_code": "220200"}, {
	"code": "220284",
	"name": "磐石市",
	"parent_code": "220200"
}, {"code": "220302", "name": "铁西区", "parent_code": "220300"}, {
	"code": "220303",
	"name": "铁东区",
	"parent_code": "220300"
}, {"code": "220322", "name": "梨树县", "parent_code": "220300"}, {
	"code": "220323",
	"name": "伊通满族自治县",
	"parent_code": "220300"
}, {"code": "220381", "name": "公主岭市", "parent_code": "220300"}, {
	"code": "220382",
	"name": "双辽市",
	"parent_code": "220300"
}, {"code": "220402", "name": "龙山区", "parent_code": "220400"}, {
	"code": "220403",
	"name": "西安区",
	"parent_code": "220400"
}, {"code": "220421", "name": "东丰县", "parent_code": "220400"}, {
	"code": "220422",
	"name": "东辽县",
	"parent_code": "220400"
}, {"code": "220502", "name": "东昌区", "parent_code": "220500"}, {
	"code": "220503",
	"name": "二道江区",
	"parent_code": "220500"
}, {"code": "220521", "name": "通化县", "parent_code": "220500"}, {
	"code": "220523",
	"name": "辉南县",
	"parent_code": "220500"
}, {"code": "220524", "name": "柳河县", "parent_code": "220500"}, {
	"code": "220581",
	"name": "梅河口市",
	"parent_code": "220500"
}, {"code": "220582", "name": "集安市", "parent_code": "220500"}, {
	"code": "220602",
	"name": "浑江区",
	"parent_code": "220600"
}, {"code": "220605", "name": "江源区", "parent_code": "220600"}, {
	"code": "220621",
	"name": "抚松县",
	"parent_code": "220600"
}, {"code": "220622", "name": "靖宇县", "parent_code": "220600"}, {
	"code": "220623",
	"name": "长白朝鲜族自治县",
	"parent_code": "220600"
}, {"code": "220681", "name": "临江市", "parent_code": "220600"}, {
	"code": "220702",
	"name": "宁江区",
	"parent_code": "220700"
}, {"code": "220721", "name": "前郭尔罗斯蒙古族自治县", "parent_code": "220700"}, {
	"code": "220722",
	"name": "长岭县",
	"parent_code": "220700"
}, {"code": "220723", "name": "乾安县", "parent_code": "220700"}, {
	"code": "220781",
	"name": "扶余市",
	"parent_code": "220700"
}, {"code": "220802", "name": "洮北区", "parent_code": "220800"}, {
	"code": "220821",
	"name": "镇赉县",
	"parent_code": "220800"
}, {"code": "220822", "name": "通榆县", "parent_code": "220800"}, {
	"code": "220881",
	"name": "洮南市",
	"parent_code": "220800"
}, {"code": "220882", "name": "大安市", "parent_code": "220800"}, {
	"code": "222401",
	"name": "延吉市",
	"parent_code": "222400"
}, {"code": "222402", "name": "图们市", "parent_code": "222400"}, {
	"code": "222403",
	"name": "敦化市",
	"parent_code": "222400"
}, {"code": "222404", "name": "珲春市", "parent_code": "222400"}, {
	"code": "222405",
	"name": "龙井市",
	"parent_code": "222400"
}, {"code": "222406", "name": "和龙市", "parent_code": "222400"}, {
	"code": "222424",
	"name": "汪清县",
	"parent_code": "222400"
}, {"code": "222426", "name": "安图县", "parent_code": "222400"}, {
	"code": "230102",
	"name": "道里区",
	"parent_code": "230100"
}, {"code": "230103", "name": "南岗区", "parent_code": "230100"}, {
	"code": "230104",
	"name": "道外区",
	"parent_code": "230100"
}, {"code": "230108", "name": "平房区", "parent_code": "230100"}, {
	"code": "230109",
	"name": "松北区",
	"parent_code": "230100"
}, {"code": "230110", "name": "香坊区", "parent_code": "230100"}, {
	"code": "230111",
	"name": "呼兰区",
	"parent_code": "230100"
}, {"code": "230112", "name": "阿城区", "parent_code": "230100"}, {
	"code": "230113",
	"name": "双城区",
	"parent_code": "230100"
}, {"code": "230123", "name": "依兰县", "parent_code": "230100"}, {
	"code": "230124",
	"name": "方正县",
	"parent_code": "230100"
}, {"code": "230125", "name": "宾县", "parent_code": "230100"}, {
	"code": "230126",
	"name": "巴彦县",
	"parent_code": "230100"
}, {"code": "230127", "name": "木兰县", "parent_code": "230100"}, {
	"code": "230128",
	"name": "通河县",
	"parent_code": "230100"
}, {"code": "230129", "name": "延寿县", "parent_code": "230100"}, {
	"code": "230183",
	"name": "尚志市",
	"parent_code": "230100"
}, {"code": "230184", "name": "五常市", "parent_code": "230100"}, {
	"code": "230202",
	"name": "龙沙区",
	"parent_code": "230200"
}, {"code": "230203", "name": "建华区", "parent_code": "230200"}, {
	"code": "230204",
	"name": "铁锋区",
	"parent_code": "230200"
}, {"code": "230205", "name": "昂昂溪区", "parent_code": "230200"}, {
	"code": "230206",
	"name": "富拉尔基区",
	"parent_code": "230200"
}, {"code": "230207", "name": "碾子山区", "parent_code": "230200"}, {
	"code": "230208",
	"name": "梅里斯达斡尔族区",
	"parent_code": "230200"
}, {"code": "230221", "name": "龙江县", "parent_code": "230200"}, {
	"code": "230223",
	"name": "依安县",
	"parent_code": "230200"
}, {"code": "230224", "name": "泰来县", "parent_code": "230200"}, {
	"code": "230225",
	"name": "甘南县",
	"parent_code": "230200"
}, {"code": "230227", "name": "富裕县", "parent_code": "230200"}, {
	"code": "230229",
	"name": "克山县",
	"parent_code": "230200"
}, {"code": "230230", "name": "克东县", "parent_code": "230200"}, {
	"code": "230231",
	"name": "拜泉县",
	"parent_code": "230200"
}, {"code": "230281", "name": "讷河市", "parent_code": "230200"}, {
	"code": "230302",
	"name": "鸡冠区",
	"parent_code": "230300"
}, {"code": "230303", "name": "恒山区", "parent_code": "230300"}, {
	"code": "230304",
	"name": "滴道区",
	"parent_code": "230300"
}, {"code": "230305", "name": "梨树区", "parent_code": "230300"}, {
	"code": "230306",
	"name": "城子河区",
	"parent_code": "230300"
}, {"code": "230307", "name": "麻山区", "parent_code": "230300"}, {
	"code": "230321",
	"name": "鸡东县",
	"parent_code": "230300"
}, {"code": "230381", "name": "虎林市", "parent_code": "230300"}, {
	"code": "230382",
	"name": "密山市",
	"parent_code": "230300"
}, {"code": "230402", "name": "向阳区", "parent_code": "230400"}, {
	"code": "230403",
	"name": "工农区",
	"parent_code": "230400"
}, {"code": "230404", "name": "南山区", "parent_code": "230400"}, {
	"code": "230405",
	"name": "兴安区",
	"parent_code": "230400"
}, {"code": "230406", "name": "东山区", "parent_code": "230400"}, {
	"code": "230407",
	"name": "兴山区",
	"parent_code": "230400"
}, {"code": "230421", "name": "萝北县", "parent_code": "230400"}, {
	"code": "230422",
	"name": "绥滨县",
	"parent_code": "230400"
}, {"code": "230502", "name": "尖山区", "parent_code": "230500"}, {
	"code": "230503",
	"name": "岭东区",
	"parent_code": "230500"
}, {"code": "230505", "name": "四方台区", "parent_code": "230500"}, {
	"code": "230506",
	"name": "宝山区",
	"parent_code": "230500"
}, {"code": "230521", "name": "集贤县", "parent_code": "230500"}, {
	"code": "230522",
	"name": "友谊县",
	"parent_code": "230500"
}, {"code": "230523", "name": "宝清县", "parent_code": "230500"}, {
	"code": "230524",
	"name": "饶河县",
	"parent_code": "230500"
}, {"code": "230602", "name": "萨尔图区", "parent_code": "230600"}, {
	"code": "230603",
	"name": "龙凤区",
	"parent_code": "230600"
}, {"code": "230604", "name": "让胡路区", "parent_code": "230600"}, {
	"code": "230605",
	"name": "红岗区",
	"parent_code": "230600"
}, {"code": "230606", "name": "大同区", "parent_code": "230600"}, {
	"code": "230621",
	"name": "肇州县",
	"parent_code": "230600"
}, {"code": "230622", "name": "肇源县", "parent_code": "230600"}, {
	"code": "230623",
	"name": "林甸县",
	"parent_code": "230600"
}, {"code": "230624", "name": "杜尔伯特蒙古族自治县", "parent_code": "230600"}, {
	"code": "230702",
	"name": "伊春区",
	"parent_code": "230700"
}, {"code": "230703", "name": "南岔区", "parent_code": "230700"}, {
	"code": "230704",
	"name": "友好区",
	"parent_code": "230700"
}, {"code": "230705", "name": "西林区", "parent_code": "230700"}, {
	"code": "230706",
	"name": "翠峦区",
	"parent_code": "230700"
}, {"code": "230707", "name": "新青区", "parent_code": "230700"}, {
	"code": "230708",
	"name": "美溪区",
	"parent_code": "230700"
}, {"code": "230709", "name": "金山屯区", "parent_code": "230700"}, {
	"code": "230710",
	"name": "五营区",
	"parent_code": "230700"
}, {"code": "230711", "name": "乌马河区", "parent_code": "230700"}, {
	"code": "230712",
	"name": "汤旺河区",
	"parent_code": "230700"
}, {"code": "230713", "name": "带岭区", "parent_code": "230700"}, {
	"code": "230714",
	"name": "乌伊岭区",
	"parent_code": "230700"
}, {"code": "230715", "name": "红星区", "parent_code": "230700"}, {
	"code": "230716",
	"name": "上甘岭区",
	"parent_code": "230700"
}, {"code": "230722", "name": "嘉荫县", "parent_code": "230700"}, {
	"code": "230781",
	"name": "铁力市",
	"parent_code": "230700"
}, {"code": "230803", "name": "向阳区", "parent_code": "230800"}, {
	"code": "230804",
	"name": "前进区",
	"parent_code": "230800"
}, {"code": "230805", "name": "东风区", "parent_code": "230800"}, {
	"code": "230811",
	"name": "郊区",
	"parent_code": "230800"
}, {"code": "230822", "name": "桦南县", "parent_code": "230800"}, {
	"code": "230826",
	"name": "桦川县",
	"parent_code": "230800"
}, {"code": "230828", "name": "汤原县", "parent_code": "230800"}, {
	"code": "230881",
	"name": "同江市",
	"parent_code": "230800"
}, {"code": "230882", "name": "富锦市", "parent_code": "230800"}, {
	"code": "230883",
	"name": "抚远市",
	"parent_code": "230800"
}, {"code": "230902", "name": "新兴区", "parent_code": "230900"}, {
	"code": "230903",
	"name": "桃山区",
	"parent_code": "230900"
}, {"code": "230904", "name": "茄子河区", "parent_code": "230900"}, {
	"code": "230921",
	"name": "勃利县",
	"parent_code": "230900"
}, {"code": "231002", "name": "东安区", "parent_code": "231000"}, {
	"code": "231003",
	"name": "阳明区",
	"parent_code": "231000"
}, {"code": "231004", "name": "爱民区", "parent_code": "231000"}, {
	"code": "231005",
	"name": "西安区",
	"parent_code": "231000"
}, {"code": "231025", "name": "林口县", "parent_code": "231000"}, {
	"code": "231081",
	"name": "绥芬河市",
	"parent_code": "231000"
}, {"code": "231083", "name": "海林市", "parent_code": "231000"}, {
	"code": "231084",
	"name": "宁安市",
	"parent_code": "231000"
}, {"code": "231085", "name": "穆棱市", "parent_code": "231000"}, {
	"code": "231086",
	"name": "东宁市",
	"parent_code": "231000"
}, {"code": "231102", "name": "爱辉区", "parent_code": "231100"}, {
	"code": "231121",
	"name": "嫩江县",
	"parent_code": "231100"
}, {"code": "231123", "name": "逊克县", "parent_code": "231100"}, {
	"code": "231124",
	"name": "孙吴县",
	"parent_code": "231100"
}, {"code": "231181", "name": "北安市", "parent_code": "231100"}, {
	"code": "231182",
	"name": "五大连池市",
	"parent_code": "231100"
}, {"code": "231202", "name": "北林区", "parent_code": "231200"}, {
	"code": "231221",
	"name": "望奎县",
	"parent_code": "231200"
}, {"code": "231222", "name": "兰西县", "parent_code": "231200"}, {
	"code": "231223",
	"name": "青冈县",
	"parent_code": "231200"
}, {"code": "231224", "name": "庆安县", "parent_code": "231200"}, {
	"code": "231225",
	"name": "明水县",
	"parent_code": "231200"
}, {"code": "231226", "name": "绥棱县", "parent_code": "231200"}, {
	"code": "231281",
	"name": "安达市",
	"parent_code": "231200"
}, {"code": "231282", "name": "肇东市", "parent_code": "231200"}, {
	"code": "231283",
	"name": "海伦市",
	"parent_code": "231200"
}, {"code": "232721", "name": "呼玛县", "parent_code": "232700"}, {
	"code": "232722",
	"name": "塔河县",
	"parent_code": "232700"
}, {"code": "232723", "name": "漠河县", "parent_code": "232700"}, {
	"code": "310101",
	"name": "黄浦区",
	"parent_code": "310100"
}, {"code": "310104", "name": "徐汇区", "parent_code": "310100"}, {
	"code": "310105",
	"name": "长宁区",
	"parent_code": "310100"
}, {"code": "310106", "name": "静安区", "parent_code": "310100"}, {
	"code": "310107",
	"name": "普陀区",
	"parent_code": "310100"
}, {"code": "310109", "name": "虹口区", "parent_code": "310100"}, {
	"code": "310110",
	"name": "杨浦区",
	"parent_code": "310100"
}, {"code": "310112", "name": "闵行区", "parent_code": "310100"}, {
	"code": "310113",
	"name": "宝山区",
	"parent_code": "310100"
}, {"code": "310114", "name": "嘉定区", "parent_code": "310100"}, {
	"code": "310115",
	"name": "浦东新区",
	"parent_code": "310100"
}, {"code": "310116", "name": "金山区", "parent_code": "310100"}, {
	"code": "310117",
	"name": "松江区",
	"parent_code": "310100"
}, {"code": "310118", "name": "青浦区", "parent_code": "310100"}, {
	"code": "310120",
	"name": "奉贤区",
	"parent_code": "310100"
}, {"code": "310151", "name": "崇明区", "parent_code": "310100"}, {
	"code": "320102",
	"name": "玄武区",
	"parent_code": "320100"
}, {"code": "320104", "name": "秦淮区", "parent_code": "320100"}, {
	"code": "320105",
	"name": "建邺区",
	"parent_code": "320100"
}, {"code": "320106", "name": "鼓楼区", "parent_code": "320100"}, {
	"code": "320111",
	"name": "浦口区",
	"parent_code": "320100"
}, {"code": "320113", "name": "栖霞区", "parent_code": "320100"}, {
	"code": "320114",
	"name": "雨花台区",
	"parent_code": "320100"
}, {"code": "320115", "name": "江宁区", "parent_code": "320100"}, {
	"code": "320116",
	"name": "六合区",
	"parent_code": "320100"
}, {"code": "320117", "name": "溧水区", "parent_code": "320100"}, {
	"code": "320118",
	"name": "高淳区",
	"parent_code": "320100"
}, {"code": "320205", "name": "锡山区", "parent_code": "320200"}, {
	"code": "320206",
	"name": "惠山区",
	"parent_code": "320200"
}, {"code": "320211", "name": "滨湖区", "parent_code": "320200"}, {
	"code": "320213",
	"name": "梁溪区",
	"parent_code": "320200"
}, {"code": "320214", "name": "新吴区", "parent_code": "320200"}, {
	"code": "320281",
	"name": "江阴市",
	"parent_code": "320200"
}, {"code": "320282", "name": "宜兴市", "parent_code": "320200"}, {
	"code": "320302",
	"name": "鼓楼区",
	"parent_code": "320300"
}, {"code": "320303", "name": "云龙区", "parent_code": "320300"}, {
	"code": "320305",
	"name": "贾汪区",
	"parent_code": "320300"
}, {"code": "320311", "name": "泉山区", "parent_code": "320300"}, {
	"code": "320312",
	"name": "铜山区",
	"parent_code": "320300"
}, {"code": "320321", "name": "丰县", "parent_code": "320300"}, {
	"code": "320322",
	"name": "沛县",
	"parent_code": "320300"
}, {"code": "320324", "name": "睢宁县", "parent_code": "320300"}, {
	"code": "320381",
	"name": "新沂市",
	"parent_code": "320300"
}, {"code": "320382", "name": "邳州市", "parent_code": "320300"}, {
	"code": "320402",
	"name": "天宁区",
	"parent_code": "320400"
}, {"code": "320404", "name": "钟楼区", "parent_code": "320400"}, {
	"code": "320411",
	"name": "新北区",
	"parent_code": "320400"
}, {"code": "320412", "name": "武进区", "parent_code": "320400"}, {
	"code": "320413",
	"name": "金坛区",
	"parent_code": "320400"
}, {"code": "320481", "name": "溧阳市", "parent_code": "320400"}, {
	"code": "320505",
	"name": "虎丘区",
	"parent_code": "320500"
}, {"code": "320506", "name": "吴中区", "parent_code": "320500"}, {
	"code": "320507",
	"name": "相城区",
	"parent_code": "320500"
}, {"code": "320508", "name": "姑苏区", "parent_code": "320500"}, {
	"code": "320509",
	"name": "吴江区",
	"parent_code": "320500"
}, {"code": "320581", "name": "常熟市", "parent_code": "320500"}, {
	"code": "320582",
	"name": "张家港市",
	"parent_code": "320500"
}, {"code": "320583", "name": "昆山市", "parent_code": "320500"}, {
	"code": "320585",
	"name": "太仓市",
	"parent_code": "320500"
}, {"code": "320602", "name": "崇川区", "parent_code": "320600"}, {
	"code": "320611",
	"name": "港闸区",
	"parent_code": "320600"
}, {"code": "320612", "name": "通州区", "parent_code": "320600"}, {
	"code": "320621",
	"name": "海安县",
	"parent_code": "320600"
}, {"code": "320623", "name": "如东县", "parent_code": "320600"}, {
	"code": "320681",
	"name": "启东市",
	"parent_code": "320600"
}, {"code": "320682", "name": "如皋市", "parent_code": "320600"}, {
	"code": "320684",
	"name": "海门市",
	"parent_code": "320600"
}, {"code": "320703", "name": "连云区", "parent_code": "320700"}, {
	"code": "320706",
	"name": "海州区",
	"parent_code": "320700"
}, {"code": "320707", "name": "赣榆区", "parent_code": "320700"}, {
	"code": "320722",
	"name": "东海县",
	"parent_code": "320700"
}, {"code": "320723", "name": "灌云县", "parent_code": "320700"}, {
	"code": "320724",
	"name": "灌南县",
	"parent_code": "320700"
}, {"code": "320803", "name": "淮安区", "parent_code": "320800"}, {
	"code": "320804",
	"name": "淮阴区",
	"parent_code": "320800"
}, {"code": "320812", "name": "清江浦区", "parent_code": "320800"}, {
	"code": "320813",
	"name": "洪泽区",
	"parent_code": "320800"
}, {"code": "320826", "name": "涟水县", "parent_code": "320800"}, {
	"code": "320830",
	"name": "盱眙县",
	"parent_code": "320800"
}, {"code": "320831", "name": "金湖县", "parent_code": "320800"}, {
	"code": "320902",
	"name": "亭湖区",
	"parent_code": "320900"
}, {"code": "320903", "name": "盐都区", "parent_code": "320900"}, {
	"code": "320904",
	"name": "大丰区",
	"parent_code": "320900"
}, {"code": "320921", "name": "响水县", "parent_code": "320900"}, {
	"code": "320922",
	"name": "滨海县",
	"parent_code": "320900"
}, {"code": "320923", "name": "阜宁县", "parent_code": "320900"}, {
	"code": "320924",
	"name": "射阳县",
	"parent_code": "320900"
}, {"code": "320925", "name": "建湖县", "parent_code": "320900"}, {
	"code": "320981",
	"name": "东台市",
	"parent_code": "320900"
}, {"code": "321002", "name": "广陵区", "parent_code": "321000"}, {
	"code": "321003",
	"name": "邗江区",
	"parent_code": "321000"
}, {"code": "321012", "name": "江都区", "parent_code": "321000"}, {
	"code": "321023",
	"name": "宝应县",
	"parent_code": "321000"
}, {"code": "321081", "name": "仪征市", "parent_code": "321000"}, {
	"code": "321084",
	"name": "高邮市",
	"parent_code": "321000"
}, {"code": "321102", "name": "京口区", "parent_code": "321100"}, {
	"code": "321111",
	"name": "润州区",
	"parent_code": "321100"
}, {"code": "321112", "name": "丹徒区", "parent_code": "321100"}, {
	"code": "321181",
	"name": "丹阳市",
	"parent_code": "321100"
}, {"code": "321182", "name": "扬中市", "parent_code": "321100"}, {
	"code": "321183",
	"name": "句容市",
	"parent_code": "321100"
}, {"code": "321202", "name": "海陵区", "parent_code": "321200"}, {
	"code": "321203",
	"name": "高港区",
	"parent_code": "321200"
}, {"code": "321204", "name": "姜堰区", "parent_code": "321200"}, {
	"code": "321281",
	"name": "兴化市",
	"parent_code": "321200"
}, {"code": "321282", "name": "靖江市", "parent_code": "321200"}, {
	"code": "321283",
	"name": "泰兴市",
	"parent_code": "321200"
}, {"code": "321302", "name": "宿城区", "parent_code": "321300"}, {
	"code": "321311",
	"name": "宿豫区",
	"parent_code": "321300"
}, {"code": "321322", "name": "沭阳县", "parent_code": "321300"}, {
	"code": "321323",
	"name": "泗阳县",
	"parent_code": "321300"
}, {"code": "321324", "name": "泗洪县", "parent_code": "321300"}, {
	"code": "330102",
	"name": "上城区",
	"parent_code": "330100"
}, {"code": "330103", "name": "下城区", "parent_code": "330100"}, {
	"code": "330104",
	"name": "江干区",
	"parent_code": "330100"
}, {"code": "330105", "name": "拱墅区", "parent_code": "330100"}, {
	"code": "330106",
	"name": "西湖区",
	"parent_code": "330100"
}, {"code": "330108", "name": "滨江区", "parent_code": "330100"}, {
	"code": "330109",
	"name": "萧山区",
	"parent_code": "330100"
}, {"code": "330110", "name": "余杭区", "parent_code": "330100"}, {
	"code": "330111",
	"name": "富阳区",
	"parent_code": "330100"
}, {"code": "330122", "name": "桐庐县", "parent_code": "330100"}, {
	"code": "330127",
	"name": "淳安县",
	"parent_code": "330100"
}, {"code": "330182", "name": "建德市", "parent_code": "330100"}, {
	"code": "330185",
	"name": "临安市",
	"parent_code": "330100"
}, {"code": "330203", "name": "海曙区", "parent_code": "330200"}, {
	"code": "330204",
	"name": "江东区",
	"parent_code": "330200"
}, {"code": "330205", "name": "江北区", "parent_code": "330200"}, {
	"code": "330206",
	"name": "北仑区",
	"parent_code": "330200"
}, {"code": "330211", "name": "镇海区", "parent_code": "330200"}, {
	"code": "330212",
	"name": "鄞州区",
	"parent_code": "330200"
}, {"code": "330225", "name": "象山县", "parent_code": "330200"}, {
	"code": "330226",
	"name": "宁海县",
	"parent_code": "330200"
}, {"code": "330281", "name": "余姚市", "parent_code": "330200"}, {
	"code": "330282",
	"name": "慈溪市",
	"parent_code": "330200"
}, {"code": "330283", "name": "奉化市", "parent_code": "330200"}, {
	"code": "330302",
	"name": "鹿城区",
	"parent_code": "330300"
}, {"code": "330303", "name": "龙湾区", "parent_code": "330300"}, {
	"code": "330304",
	"name": "瓯海区",
	"parent_code": "330300"
}, {"code": "330305", "name": "洞头区", "parent_code": "330300"}, {
	"code": "330324",
	"name": "永嘉县",
	"parent_code": "330300"
}, {"code": "330326", "name": "平阳县", "parent_code": "330300"}, {
	"code": "330327",
	"name": "苍南县",
	"parent_code": "330300"
}, {"code": "330328", "name": "文成县", "parent_code": "330300"}, {
	"code": "330329",
	"name": "泰顺县",
	"parent_code": "330300"
}, {"code": "330381", "name": "瑞安市", "parent_code": "330300"}, {
	"code": "330382",
	"name": "乐清市",
	"parent_code": "330300"
}, {"code": "330402", "name": "南湖区", "parent_code": "330400"}, {
	"code": "330411",
	"name": "秀洲区",
	"parent_code": "330400"
}, {"code": "330421", "name": "嘉善县", "parent_code": "330400"}, {
	"code": "330424",
	"name": "海盐县",
	"parent_code": "330400"
}, {"code": "330481", "name": "海宁市", "parent_code": "330400"}, {
	"code": "330482",
	"name": "平湖市",
	"parent_code": "330400"
}, {"code": "330483", "name": "桐乡市", "parent_code": "330400"}, {
	"code": "330502",
	"name": "吴兴区",
	"parent_code": "330500"
}, {"code": "330503", "name": "南浔区", "parent_code": "330500"}, {
	"code": "330521",
	"name": "德清县",
	"parent_code": "330500"
}, {"code": "330522", "name": "长兴县", "parent_code": "330500"}, {
	"code": "330523",
	"name": "安吉县",
	"parent_code": "330500"
}, {"code": "330602", "name": "越城区", "parent_code": "330600"}, {
	"code": "330603",
	"name": "柯桥区",
	"parent_code": "330600"
}, {"code": "330604", "name": "上虞区", "parent_code": "330600"}, {
	"code": "330624",
	"name": "新昌县",
	"parent_code": "330600"
}, {"code": "330681", "name": "诸暨市", "parent_code": "330600"}, {
	"code": "330683",
	"name": "嵊州市",
	"parent_code": "330600"
}, {"code": "330702", "name": "婺城区", "parent_code": "330700"}, {
	"code": "330703",
	"name": "金东区",
	"parent_code": "330700"
}, {"code": "330723", "name": "武义县", "parent_code": "330700"}, {
	"code": "330726",
	"name": "浦江县",
	"parent_code": "330700"
}, {"code": "330727", "name": "磐安县", "parent_code": "330700"}, {
	"code": "330781",
	"name": "兰溪市",
	"parent_code": "330700"
}, {"code": "330782", "name": "义乌市", "parent_code": "330700"}, {
	"code": "330783",
	"name": "东阳市",
	"parent_code": "330700"
}, {"code": "330784", "name": "永康市", "parent_code": "330700"}, {
	"code": "330802",
	"name": "柯城区",
	"parent_code": "330800"
}, {"code": "330803", "name": "衢江区", "parent_code": "330800"}, {
	"code": "330822",
	"name": "常山县",
	"parent_code": "330800"
}, {"code": "330824", "name": "开化县", "parent_code": "330800"}, {
	"code": "330825",
	"name": "龙游县",
	"parent_code": "330800"
}, {"code": "330881", "name": "江山市", "parent_code": "330800"}, {
	"code": "330902",
	"name": "定海区",
	"parent_code": "330900"
}, {"code": "330903", "name": "普陀区", "parent_code": "330900"}, {
	"code": "330921",
	"name": "岱山县",
	"parent_code": "330900"
}, {"code": "330922", "name": "嵊泗县", "parent_code": "330900"}, {
	"code": "331002",
	"name": "椒江区",
	"parent_code": "331000"
}, {"code": "331003", "name": "黄岩区", "parent_code": "331000"}, {
	"code": "331004",
	"name": "路桥区",
	"parent_code": "331000"
}, {"code": "331021", "name": "玉环县", "parent_code": "331000"}, {
	"code": "331022",
	"name": "三门县",
	"parent_code": "331000"
}, {"code": "331023", "name": "天台县", "parent_code": "331000"}, {
	"code": "331024",
	"name": "仙居县",
	"parent_code": "331000"
}, {"code": "331081", "name": "温岭市", "parent_code": "331000"}, {
	"code": "331082",
	"name": "临海市",
	"parent_code": "331000"
}, {"code": "331102", "name": "莲都区", "parent_code": "331100"}, {
	"code": "331121",
	"name": "青田县",
	"parent_code": "331100"
}, {"code": "331122", "name": "缙云县", "parent_code": "331100"}, {
	"code": "331123",
	"name": "遂昌县",
	"parent_code": "331100"
}, {"code": "331124", "name": "松阳县", "parent_code": "331100"}, {
	"code": "331125",
	"name": "云和县",
	"parent_code": "331100"
}, {"code": "331126", "name": "庆元县", "parent_code": "331100"}, {
	"code": "331127",
	"name": "景宁畲族自治县",
	"parent_code": "331100"
}, {"code": "331181", "name": "龙泉市", "parent_code": "331100"}, {
	"code": "340102",
	"name": "瑶海区",
	"parent_code": "340100"
}, {"code": "340103", "name": "庐阳区", "parent_code": "340100"}, {
	"code": "340104",
	"name": "蜀山区",
	"parent_code": "340100"
}, {"code": "340111", "name": "包河区", "parent_code": "340100"}, {
	"code": "340121",
	"name": "长丰县",
	"parent_code": "340100"
}, {"code": "340122", "name": "肥东县", "parent_code": "340100"}, {
	"code": "340123",
	"name": "肥西县",
	"parent_code": "340100"
}, {"code": "340124", "name": "庐江县", "parent_code": "340100"}, {
	"code": "340181",
	"name": "巢湖市",
	"parent_code": "340100"
}, {"code": "340202", "name": "镜湖区", "parent_code": "340200"}, {
	"code": "340203",
	"name": "弋江区",
	"parent_code": "340200"
}, {"code": "340207", "name": "鸠江区", "parent_code": "340200"}, {
	"code": "340208",
	"name": "三山区",
	"parent_code": "340200"
}, {"code": "340221", "name": "芜湖县", "parent_code": "340200"}, {
	"code": "340222",
	"name": "繁昌县",
	"parent_code": "340200"
}, {"code": "340223", "name": "南陵县", "parent_code": "340200"}, {
	"code": "340225",
	"name": "无为县",
	"parent_code": "340200"
}, {"code": "340302", "name": "龙子湖区", "parent_code": "340300"}, {
	"code": "340303",
	"name": "蚌山区",
	"parent_code": "340300"
}, {"code": "340304", "name": "禹会区", "parent_code": "340300"}, {
	"code": "340311",
	"name": "淮上区",
	"parent_code": "340300"
}, {"code": "340321", "name": "怀远县", "parent_code": "340300"}, {
	"code": "340322",
	"name": "五河县",
	"parent_code": "340300"
}, {"code": "340323", "name": "固镇县", "parent_code": "340300"}, {
	"code": "340402",
	"name": "大通区",
	"parent_code": "340400"
}, {"code": "340403", "name": "田家庵区", "parent_code": "340400"}, {
	"code": "340404",
	"name": "谢家集区",
	"parent_code": "340400"
}, {"code": "340405", "name": "八公山区", "parent_code": "340400"}, {
	"code": "340406",
	"name": "潘集区",
	"parent_code": "340400"
}, {"code": "340421", "name": "凤台县", "parent_code": "340400"}, {
	"code": "340422",
	"name": "寿县",
	"parent_code": "340400"
}, {"code": "340503", "name": "花山区", "parent_code": "340500"}, {
	"code": "340504",
	"name": "雨山区",
	"parent_code": "340500"
}, {"code": "340506", "name": "博望区", "parent_code": "340500"}, {
	"code": "340521",
	"name": "当涂县",
	"parent_code": "340500"
}, {"code": "340522", "name": "含山县", "parent_code": "340500"}, {
	"code": "340523",
	"name": "和县",
	"parent_code": "340500"
}, {"code": "340602", "name": "杜集区", "parent_code": "340600"}, {
	"code": "340603",
	"name": "相山区",
	"parent_code": "340600"
}, {"code": "340604", "name": "烈山区", "parent_code": "340600"}, {
	"code": "340621",
	"name": "濉溪县",
	"parent_code": "340600"
}, {"code": "340705", "name": "铜官区", "parent_code": "340700"}, {
	"code": "340706",
	"name": "义安区",
	"parent_code": "340700"
}, {"code": "340711", "name": "郊区", "parent_code": "340700"}, {
	"code": "340722",
	"name": "枞阳县",
	"parent_code": "340700"
}, {"code": "340802", "name": "迎江区", "parent_code": "340800"}, {
	"code": "340803",
	"name": "大观区",
	"parent_code": "340800"
}, {"code": "340811", "name": "宜秀区", "parent_code": "340800"}, {
	"code": "340822",
	"name": "怀宁县",
	"parent_code": "340800"
}, {"code": "340824", "name": "潜山县", "parent_code": "340800"}, {
	"code": "340825",
	"name": "太湖县",
	"parent_code": "340800"
}, {"code": "340826", "name": "宿松县", "parent_code": "340800"}, {
	"code": "340827",
	"name": "望江县",
	"parent_code": "340800"
}, {"code": "340828", "name": "岳西县", "parent_code": "340800"}, {
	"code": "340881",
	"name": "桐城市",
	"parent_code": "340800"
}, {"code": "341002", "name": "屯溪区", "parent_code": "341000"}, {
	"code": "341003",
	"name": "黄山区",
	"parent_code": "341000"
}, {"code": "341004", "name": "徽州区", "parent_code": "341000"}, {
	"code": "341021",
	"name": "歙县",
	"parent_code": "341000"
}, {"code": "341022", "name": "休宁县", "parent_code": "341000"}, {
	"code": "341023",
	"name": "黟县",
	"parent_code": "341000"
}, {"code": "341024", "name": "祁门县", "parent_code": "341000"}, {
	"code": "341102",
	"name": "琅琊区",
	"parent_code": "341100"
}, {"code": "341103", "name": "南谯区", "parent_code": "341100"}, {
	"code": "341122",
	"name": "来安县",
	"parent_code": "341100"
}, {"code": "341124", "name": "全椒县", "parent_code": "341100"}, {
	"code": "341125",
	"name": "定远县",
	"parent_code": "341100"
}, {"code": "341126", "name": "凤阳县", "parent_code": "341100"}, {
	"code": "341181",
	"name": "天长市",
	"parent_code": "341100"
}, {"code": "341182", "name": "明光市", "parent_code": "341100"}, {
	"code": "341202",
	"name": "颍州区",
	"parent_code": "341200"
}, {"code": "341203", "name": "颍东区", "parent_code": "341200"}, {
	"code": "341204",
	"name": "颍泉区",
	"parent_code": "341200"
}, {"code": "341221", "name": "临泉县", "parent_code": "341200"}, {
	"code": "341222",
	"name": "太和县",
	"parent_code": "341200"
}, {"code": "341225", "name": "阜南县", "parent_code": "341200"}, {
	"code": "341226",
	"name": "颍上县",
	"parent_code": "341200"
}, {"code": "341282", "name": "界首市", "parent_code": "341200"}, {
	"code": "341302",
	"name": "埇桥区",
	"parent_code": "341300"
}, {"code": "341321", "name": "砀山县", "parent_code": "341300"}, {
	"code": "341322",
	"name": "萧县",
	"parent_code": "341300"
}, {"code": "341323", "name": "灵璧县", "parent_code": "341300"}, {
	"code": "341324",
	"name": "泗县",
	"parent_code": "341300"
}, {"code": "341502", "name": "金安区", "parent_code": "341500"}, {
	"code": "341503",
	"name": "裕安区",
	"parent_code": "341500"
}, {"code": "341504", "name": "叶集区", "parent_code": "341500"}, {
	"code": "341522",
	"name": "霍邱县",
	"parent_code": "341500"
}, {"code": "341523", "name": "舒城县", "parent_code": "341500"}, {
	"code": "341524",
	"name": "金寨县",
	"parent_code": "341500"
}, {"code": "341525", "name": "霍山县", "parent_code": "341500"}, {
	"code": "341602",
	"name": "谯城区",
	"parent_code": "341600"
}, {"code": "341621", "name": "涡阳县", "parent_code": "341600"}, {
	"code": "341622",
	"name": "蒙城县",
	"parent_code": "341600"
}, {"code": "341623", "name": "利辛县", "parent_code": "341600"}, {
	"code": "341702",
	"name": "贵池区",
	"parent_code": "341700"
}, {"code": "341721", "name": "东至县", "parent_code": "341700"}, {
	"code": "341722",
	"name": "石台县",
	"parent_code": "341700"
}, {"code": "341723", "name": "青阳县", "parent_code": "341700"}, {
	"code": "341802",
	"name": "宣州区",
	"parent_code": "341800"
}, {"code": "341821", "name": "郎溪县", "parent_code": "341800"}, {
	"code": "341822",
	"name": "广德县",
	"parent_code": "341800"
}, {"code": "341823", "name": "泾县", "parent_code": "341800"}, {
	"code": "341824",
	"name": "绩溪县",
	"parent_code": "341800"
}, {"code": "341825", "name": "旌德县", "parent_code": "341800"}, {
	"code": "341881",
	"name": "宁国市",
	"parent_code": "341800"
}, {"code": "350102", "name": "鼓楼区", "parent_code": "350100"}, {
	"code": "350103",
	"name": "台江区",
	"parent_code": "350100"
}, {"code": "350104", "name": "仓山区", "parent_code": "350100"}, {
	"code": "350105",
	"name": "马尾区",
	"parent_code": "350100"
}, {"code": "350111", "name": "晋安区", "parent_code": "350100"}, {
	"code": "350121",
	"name": "闽侯县",
	"parent_code": "350100"
}, {"code": "350122", "name": "连江县", "parent_code": "350100"}, {
	"code": "350123",
	"name": "罗源县",
	"parent_code": "350100"
}, {"code": "350124", "name": "闽清县", "parent_code": "350100"}, {
	"code": "350125",
	"name": "永泰县",
	"parent_code": "350100"
}, {"code": "350128", "name": "平潭县", "parent_code": "350100"}, {
	"code": "350181",
	"name": "福清市",
	"parent_code": "350100"
}, {"code": "350182", "name": "长乐市", "parent_code": "350100"}, {
	"code": "350203",
	"name": "思明区",
	"parent_code": "350200"
}, {"code": "350205", "name": "海沧区", "parent_code": "350200"}, {
	"code": "350206",
	"name": "湖里区",
	"parent_code": "350200"
}, {"code": "350211", "name": "集美区", "parent_code": "350200"}, {
	"code": "350212",
	"name": "同安区",
	"parent_code": "350200"
}, {"code": "350213", "name": "翔安区", "parent_code": "350200"}, {
	"code": "350302",
	"name": "城厢区",
	"parent_code": "350300"
}, {"code": "350303", "name": "涵江区", "parent_code": "350300"}, {
	"code": "350304",
	"name": "荔城区",
	"parent_code": "350300"
}, {"code": "350305", "name": "秀屿区", "parent_code": "350300"}, {
	"code": "350322",
	"name": "仙游县",
	"parent_code": "350300"
}, {"code": "350402", "name": "梅列区", "parent_code": "350400"}, {
	"code": "350403",
	"name": "三元区",
	"parent_code": "350400"
}, {"code": "350421", "name": "明溪县", "parent_code": "350400"}, {
	"code": "350423",
	"name": "清流县",
	"parent_code": "350400"
}, {"code": "350424", "name": "宁化县", "parent_code": "350400"}, {
	"code": "350425",
	"name": "大田县",
	"parent_code": "350400"
}, {"code": "350426", "name": "尤溪县", "parent_code": "350400"}, {
	"code": "350427",
	"name": "沙县",
	"parent_code": "350400"
}, {"code": "350428", "name": "将乐县", "parent_code": "350400"}, {
	"code": "350429",
	"name": "泰宁县",
	"parent_code": "350400"
}, {"code": "350430", "name": "建宁县", "parent_code": "350400"}, {
	"code": "350481",
	"name": "永安市",
	"parent_code": "350400"
}, {"code": "350502", "name": "鲤城区", "parent_code": "350500"}, {
	"code": "350503",
	"name": "丰泽区",
	"parent_code": "350500"
}, {"code": "350504", "name": "洛江区", "parent_code": "350500"}, {
	"code": "350505",
	"name": "泉港区",
	"parent_code": "350500"
}, {"code": "350521", "name": "惠安县", "parent_code": "350500"}, {
	"code": "350524",
	"name": "安溪县",
	"parent_code": "350500"
}, {"code": "350525", "name": "永春县", "parent_code": "350500"}, {
	"code": "350526",
	"name": "德化县",
	"parent_code": "350500"
}, {"code": "350527", "name": "金门县", "parent_code": "350500"}, {
	"code": "350581",
	"name": "石狮市",
	"parent_code": "350500"
}, {"code": "350582", "name": "晋江市", "parent_code": "350500"}, {
	"code": "350583",
	"name": "南安市",
	"parent_code": "350500"
}, {"code": "350602", "name": "芗城区", "parent_code": "350600"}, {
	"code": "350603",
	"name": "龙文区",
	"parent_code": "350600"
}, {"code": "350622", "name": "云霄县", "parent_code": "350600"}, {
	"code": "350623",
	"name": "漳浦县",
	"parent_code": "350600"
}, {"code": "350624", "name": "诏安县", "parent_code": "350600"}, {
	"code": "350625",
	"name": "长泰县",
	"parent_code": "350600"
}, {"code": "350626", "name": "东山县", "parent_code": "350600"}, {
	"code": "350627",
	"name": "南靖县",
	"parent_code": "350600"
}, {"code": "350628", "name": "平和县", "parent_code": "350600"}, {
	"code": "350629",
	"name": "华安县",
	"parent_code": "350600"
}, {"code": "350681", "name": "龙海市", "parent_code": "350600"}, {
	"code": "350702",
	"name": "延平区",
	"parent_code": "350700"
}, {"code": "350703", "name": "建阳区", "parent_code": "350700"}, {
	"code": "350721",
	"name": "顺昌县",
	"parent_code": "350700"
}, {"code": "350722", "name": "浦城县", "parent_code": "350700"}, {
	"code": "350723",
	"name": "光泽县",
	"parent_code": "350700"
}, {"code": "350724", "name": "松溪县", "parent_code": "350700"}, {
	"code": "350725",
	"name": "政和县",
	"parent_code": "350700"
}, {"code": "350781", "name": "邵武市", "parent_code": "350700"}, {
	"code": "350782",
	"name": "武夷山市",
	"parent_code": "350700"
}, {"code": "350783", "name": "建瓯市", "parent_code": "350700"}, {
	"code": "350802",
	"name": "新罗区",
	"parent_code": "350800"
}, {"code": "350803", "name": "永定区", "parent_code": "350800"}, {
	"code": "350821",
	"name": "长汀县",
	"parent_code": "350800"
}, {"code": "350823", "name": "上杭县", "parent_code": "350800"}, {
	"code": "350824",
	"name": "武平县",
	"parent_code": "350800"
}, {"code": "350825", "name": "连城县", "parent_code": "350800"}, {
	"code": "350881",
	"name": "漳平市",
	"parent_code": "350800"
}, {"code": "350902", "name": "蕉城区", "parent_code": "350900"}, {
	"code": "350921",
	"name": "霞浦县",
	"parent_code": "350900"
}, {"code": "350922", "name": "古田县", "parent_code": "350900"}, {
	"code": "350923",
	"name": "屏南县",
	"parent_code": "350900"
}, {"code": "350924", "name": "寿宁县", "parent_code": "350900"}, {
	"code": "350925",
	"name": "周宁县",
	"parent_code": "350900"
}, {"code": "350926", "name": "柘荣县", "parent_code": "350900"}, {
	"code": "350981",
	"name": "福安市",
	"parent_code": "350900"
}, {"code": "350982", "name": "福鼎市", "parent_code": "350900"}, {
	"code": "360102",
	"name": "东湖区",
	"parent_code": "360100"
}, {"code": "360103", "name": "西湖区", "parent_code": "360100"}, {
	"code": "360104",
	"name": "青云谱区",
	"parent_code": "360100"
}, {"code": "360105", "name": "湾里区", "parent_code": "360100"}, {
	"code": "360111",
	"name": "青山湖区",
	"parent_code": "360100"
}, {"code": "360112", "name": "新建区", "parent_code": "360100"}, {
	"code": "360121",
	"name": "南昌县",
	"parent_code": "360100"
}, {"code": "360123", "name": "安义县", "parent_code": "360100"}, {
	"code": "360124",
	"name": "进贤县",
	"parent_code": "360100"
}, {"code": "360202", "name": "昌江区", "parent_code": "360200"}, {
	"code": "360203",
	"name": "珠山区",
	"parent_code": "360200"
}, {"code": "360222", "name": "浮梁县", "parent_code": "360200"}, {
	"code": "360281",
	"name": "乐平市",
	"parent_code": "360200"
}, {"code": "360302", "name": "安源区", "parent_code": "360300"}, {
	"code": "360313",
	"name": "湘东区",
	"parent_code": "360300"
}, {"code": "360321", "name": "莲花县", "parent_code": "360300"}, {
	"code": "360322",
	"name": "上栗县",
	"parent_code": "360300"
}, {"code": "360323", "name": "芦溪县", "parent_code": "360300"}, {
	"code": "360402",
	"name": "濂溪区",
	"parent_code": "360400"
}, {"code": "360403", "name": "浔阳区", "parent_code": "360400"}, {
	"code": "360421",
	"name": "九江县",
	"parent_code": "360400"
}, {"code": "360423", "name": "武宁县", "parent_code": "360400"}, {
	"code": "360424",
	"name": "修水县",
	"parent_code": "360400"
}, {"code": "360425", "name": "永修县", "parent_code": "360400"}, {
	"code": "360426",
	"name": "德安县",
	"parent_code": "360400"
}, {"code": "360428", "name": "都昌县", "parent_code": "360400"}, {
	"code": "360429",
	"name": "湖口县",
	"parent_code": "360400"
}, {"code": "360430", "name": "彭泽县", "parent_code": "360400"}, {
	"code": "360481",
	"name": "瑞昌市",
	"parent_code": "360400"
}, {"code": "360482", "name": "共青城市", "parent_code": "360400"}, {
	"code": "360483",
	"name": "庐山市",
	"parent_code": "360400"
}, {"code": "360502", "name": "渝水区", "parent_code": "360500"}, {
	"code": "360521",
	"name": "分宜县",
	"parent_code": "360500"
}, {"code": "360602", "name": "月湖区", "parent_code": "360600"}, {
	"code": "360622",
	"name": "余江县",
	"parent_code": "360600"
}, {"code": "360681", "name": "贵溪市", "parent_code": "360600"}, {
	"code": "360702",
	"name": "章贡区",
	"parent_code": "360700"
}, {"code": "360703", "name": "南康区", "parent_code": "360700"}, {
	"code": "360721",
	"name": "赣县",
	"parent_code": "360700"
}, {"code": "360722", "name": "信丰县", "parent_code": "360700"}, {
	"code": "360723",
	"name": "大余县",
	"parent_code": "360700"
}, {"code": "360724", "name": "上犹县", "parent_code": "360700"}, {
	"code": "360725",
	"name": "崇义县",
	"parent_code": "360700"
}, {"code": "360726", "name": "安远县", "parent_code": "360700"}, {
	"code": "360727",
	"name": "龙南县",
	"parent_code": "360700"
}, {"code": "360728", "name": "定南县", "parent_code": "360700"}, {
	"code": "360729",
	"name": "全南县",
	"parent_code": "360700"
}, {"code": "360730", "name": "宁都县", "parent_code": "360700"}, {
	"code": "360731",
	"name": "于都县",
	"parent_code": "360700"
}, {"code": "360732", "name": "兴国县", "parent_code": "360700"}, {
	"code": "360733",
	"name": "会昌县",
	"parent_code": "360700"
}, {"code": "360734", "name": "寻乌县", "parent_code": "360700"}, {
	"code": "360735",
	"name": "石城县",
	"parent_code": "360700"
}, {"code": "360781", "name": "瑞金市", "parent_code": "360700"}, {
	"code": "360802",
	"name": "吉州区",
	"parent_code": "360800"
}, {"code": "360803", "name": "青原区", "parent_code": "360800"}, {
	"code": "360821",
	"name": "吉安县",
	"parent_code": "360800"
}, {"code": "360822", "name": "吉水县", "parent_code": "360800"}, {
	"code": "360823",
	"name": "峡江县",
	"parent_code": "360800"
}, {"code": "360824", "name": "新干县", "parent_code": "360800"}, {
	"code": "360825",
	"name": "永丰县",
	"parent_code": "360800"
}, {"code": "360826", "name": "泰和县", "parent_code": "360800"}, {
	"code": "360827",
	"name": "遂川县",
	"parent_code": "360800"
}, {"code": "360828", "name": "万安县", "parent_code": "360800"}, {
	"code": "360829",
	"name": "安福县",
	"parent_code": "360800"
}, {"code": "360830", "name": "永新县", "parent_code": "360800"}, {
	"code": "360881",
	"name": "井冈山市",
	"parent_code": "360800"
}, {"code": "360902", "name": "袁州区", "parent_code": "360900"}, {
	"code": "360921",
	"name": "奉新县",
	"parent_code": "360900"
}, {"code": "360922", "name": "万载县", "parent_code": "360900"}, {
	"code": "360923",
	"name": "上高县",
	"parent_code": "360900"
}, {"code": "360924", "name": "宜丰县", "parent_code": "360900"}, {
	"code": "360925",
	"name": "靖安县",
	"parent_code": "360900"
}, {"code": "360926", "name": "铜鼓县", "parent_code": "360900"}, {
	"code": "360981",
	"name": "丰城市",
	"parent_code": "360900"
}, {"code": "360982", "name": "樟树市", "parent_code": "360900"}, {
	"code": "360983",
	"name": "高安市",
	"parent_code": "360900"
}, {"code": "361002", "name": "临川区", "parent_code": "361000"}, {
	"code": "361021",
	"name": "南城县",
	"parent_code": "361000"
}, {"code": "361022", "name": "黎川县", "parent_code": "361000"}, {
	"code": "361023",
	"name": "南丰县",
	"parent_code": "361000"
}, {"code": "361024", "name": "崇仁县", "parent_code": "361000"}, {
	"code": "361025",
	"name": "乐安县",
	"parent_code": "361000"
}, {"code": "361026", "name": "宜黄县", "parent_code": "361000"}, {
	"code": "361027",
	"name": "金溪县",
	"parent_code": "361000"
}, {"code": "361028", "name": "资溪县", "parent_code": "361000"}, {
	"code": "361029",
	"name": "东乡县",
	"parent_code": "361000"
}, {"code": "361030", "name": "广昌县", "parent_code": "361000"}, {
	"code": "361102",
	"name": "信州区",
	"parent_code": "361100"
}, {"code": "361103", "name": "广丰区", "parent_code": "361100"}, {
	"code": "361121",
	"name": "上饶县",
	"parent_code": "361100"
}, {"code": "361123", "name": "玉山县", "parent_code": "361100"}, {
	"code": "361124",
	"name": "铅山县",
	"parent_code": "361100"
}, {"code": "361125", "name": "横峰县", "parent_code": "361100"}, {
	"code": "361126",
	"name": "弋阳县",
	"parent_code": "361100"
}, {"code": "361127", "name": "余干县", "parent_code": "361100"}, {
	"code": "361128",
	"name": "鄱阳县",
	"parent_code": "361100"
}, {"code": "361129", "name": "万年县", "parent_code": "361100"}, {
	"code": "361130",
	"name": "婺源县",
	"parent_code": "361100"
}, {"code": "361181", "name": "德兴市", "parent_code": "361100"}, {
	"code": "370102",
	"name": "历下区",
	"parent_code": "370100"
}, {"code": "370103", "name": "市中区", "parent_code": "370100"}, {
	"code": "370104",
	"name": "槐荫区",
	"parent_code": "370100"
}, {"code": "370105", "name": "天桥区", "parent_code": "370100"}, {
	"code": "370112",
	"name": "历城区",
	"parent_code": "370100"
}, {"code": "370113", "name": "长清区", "parent_code": "370100"}, {
	"code": "370124",
	"name": "平阴县",
	"parent_code": "370100"
}, {"code": "370125", "name": "济阳县", "parent_code": "370100"}, {
	"code": "370126",
	"name": "商河县",
	"parent_code": "370100"
}, {"code": "370181", "name": "章丘市", "parent_code": "370100"}, {
	"code": "370202",
	"name": "市南区",
	"parent_code": "370200"
}, {"code": "370203", "name": "市北区", "parent_code": "370200"}, {
	"code": "370211",
	"name": "黄岛区",
	"parent_code": "370200"
}, {"code": "370212", "name": "崂山区", "parent_code": "370200"}, {
	"code": "370213",
	"name": "李沧区",
	"parent_code": "370200"
}, {"code": "370214", "name": "城阳区", "parent_code": "370200"}, {
	"code": "370281",
	"name": "胶州市",
	"parent_code": "370200"
}, {"code": "370282", "name": "即墨市", "parent_code": "370200"}, {
	"code": "370283",
	"name": "平度市",
	"parent_code": "370200"
}, {"code": "370285", "name": "莱西市", "parent_code": "370200"}, {
	"code": "370302",
	"name": "淄川区",
	"parent_code": "370300"
}, {"code": "370303", "name": "张店区", "parent_code": "370300"}, {
	"code": "370304",
	"name": "博山区",
	"parent_code": "370300"
}, {"code": "370305", "name": "临淄区", "parent_code": "370300"}, {
	"code": "370306",
	"name": "周村区",
	"parent_code": "370300"
}, {"code": "370321", "name": "桓台县", "parent_code": "370300"}, {
	"code": "370322",
	"name": "高青县",
	"parent_code": "370300"
}, {"code": "370323", "name": "沂源县", "parent_code": "370300"}, {
	"code": "370402",
	"name": "市中区",
	"parent_code": "370400"
}, {"code": "370403", "name": "薛城区", "parent_code": "370400"}, {
	"code": "370404",
	"name": "峄城区",
	"parent_code": "370400"
}, {"code": "370405", "name": "台儿庄区", "parent_code": "370400"}, {
	"code": "370406",
	"name": "山亭区",
	"parent_code": "370400"
}, {"code": "370481", "name": "滕州市", "parent_code": "370400"}, {
	"code": "370502",
	"name": "东营区",
	"parent_code": "370500"
}, {"code": "370503", "name": "河口区", "parent_code": "370500"}, {
	"code": "370505",
	"name": "垦利区",
	"parent_code": "370500"
}, {"code": "370522", "name": "利津县", "parent_code": "370500"}, {
	"code": "370523",
	"name": "广饶县",
	"parent_code": "370500"
}, {"code": "370602", "name": "芝罘区", "parent_code": "370600"}, {
	"code": "370611",
	"name": "福山区",
	"parent_code": "370600"
}, {"code": "370612", "name": "牟平区", "parent_code": "370600"}, {
	"code": "370613",
	"name": "莱山区",
	"parent_code": "370600"
}, {"code": "370634", "name": "长岛县", "parent_code": "370600"}, {
	"code": "370681",
	"name": "龙口市",
	"parent_code": "370600"
}, {"code": "370682", "name": "莱阳市", "parent_code": "370600"}, {
	"code": "370683",
	"name": "莱州市",
	"parent_code": "370600"
}, {"code": "370684", "name": "蓬莱市", "parent_code": "370600"}, {
	"code": "370685",
	"name": "招远市",
	"parent_code": "370600"
}, {"code": "370686", "name": "栖霞市", "parent_code": "370600"}, {
	"code": "370687",
	"name": "海阳市",
	"parent_code": "370600"
}, {"code": "370702", "name": "潍城区", "parent_code": "370700"}, {
	"code": "370703",
	"name": "寒亭区",
	"parent_code": "370700"
}, {"code": "370704", "name": "坊子区", "parent_code": "370700"}, {
	"code": "370705",
	"name": "奎文区",
	"parent_code": "370700"
}, {"code": "370724", "name": "临朐县", "parent_code": "370700"}, {
	"code": "370725",
	"name": "昌乐县",
	"parent_code": "370700"
}, {"code": "370781", "name": "青州市", "parent_code": "370700"}, {
	"code": "370782",
	"name": "诸城市",
	"parent_code": "370700"
}, {"code": "370783", "name": "寿光市", "parent_code": "370700"}, {
	"code": "370784",
	"name": "安丘市",
	"parent_code": "370700"
}, {"code": "370785", "name": "高密市", "parent_code": "370700"}, {
	"code": "370786",
	"name": "昌邑市",
	"parent_code": "370700"
}, {"code": "370811", "name": "任城区", "parent_code": "370800"}, {
	"code": "370812",
	"name": "兖州区",
	"parent_code": "370800"
}, {"code": "370826", "name": "微山县", "parent_code": "370800"}, {
	"code": "370827",
	"name": "鱼台县",
	"parent_code": "370800"
}, {"code": "370828", "name": "金乡县", "parent_code": "370800"}, {
	"code": "370829",
	"name": "嘉祥县",
	"parent_code": "370800"
}, {"code": "370830", "name": "汶上县", "parent_code": "370800"}, {
	"code": "370831",
	"name": "泗水县",
	"parent_code": "370800"
}, {"code": "370832", "name": "梁山县", "parent_code": "370800"}, {
	"code": "370881",
	"name": "曲阜市",
	"parent_code": "370800"
}, {"code": "370883", "name": "邹城市", "parent_code": "370800"}, {
	"code": "370902",
	"name": "泰山区",
	"parent_code": "370900"
}, {"code": "370911", "name": "岱岳区", "parent_code": "370900"}, {
	"code": "370921",
	"name": "宁阳县",
	"parent_code": "370900"
}, {"code": "370923", "name": "东平县", "parent_code": "370900"}, {
	"code": "370982",
	"name": "新泰市",
	"parent_code": "370900"
}, {"code": "370983", "name": "肥城市", "parent_code": "370900"}, {
	"code": "371002",
	"name": "环翠区",
	"parent_code": "371000"
}, {"code": "371003", "name": "文登区", "parent_code": "371000"}, {
	"code": "371082",
	"name": "荣成市",
	"parent_code": "371000"
}, {"code": "371083", "name": "乳山市", "parent_code": "371000"}, {
	"code": "371102",
	"name": "东港区",
	"parent_code": "371100"
}, {"code": "371103", "name": "岚山区", "parent_code": "371100"}, {
	"code": "371121",
	"name": "五莲县",
	"parent_code": "371100"
}, {"code": "371122", "name": "莒县", "parent_code": "371100"}, {
	"code": "371202",
	"name": "莱城区",
	"parent_code": "371200"
}, {"code": "371203", "name": "钢城区", "parent_code": "371200"}, {
	"code": "371302",
	"name": "兰山区",
	"parent_code": "371300"
}, {"code": "371311", "name": "罗庄区", "parent_code": "371300"}, {
	"code": "371312",
	"name": "河东区",
	"parent_code": "371300"
}, {"code": "371321", "name": "沂南县", "parent_code": "371300"}, {
	"code": "371322",
	"name": "郯城县",
	"parent_code": "371300"
}, {"code": "371323", "name": "沂水县", "parent_code": "371300"}, {
	"code": "371324",
	"name": "兰陵县",
	"parent_code": "371300"
}, {"code": "371325", "name": "费县", "parent_code": "371300"}, {
	"code": "371326",
	"name": "平邑县",
	"parent_code": "371300"
}, {"code": "371327", "name": "莒南县", "parent_code": "371300"}, {
	"code": "371328",
	"name": "蒙阴县",
	"parent_code": "371300"
}, {"code": "371329", "name": "临沭县", "parent_code": "371300"}, {
	"code": "371402",
	"name": "德城区",
	"parent_code": "371400"
}, {"code": "371403", "name": "陵城区", "parent_code": "371400"}, {
	"code": "371422",
	"name": "宁津县",
	"parent_code": "371400"
}, {"code": "371423", "name": "庆云县", "parent_code": "371400"}, {
	"code": "371424",
	"name": "临邑县",
	"parent_code": "371400"
}, {"code": "371425", "name": "齐河县", "parent_code": "371400"}, {
	"code": "371426",
	"name": "平原县",
	"parent_code": "371400"
}, {"code": "371427", "name": "夏津县", "parent_code": "371400"}, {
	"code": "371428",
	"name": "武城县",
	"parent_code": "371400"
}, {"code": "371481", "name": "乐陵市", "parent_code": "371400"}, {
	"code": "371482",
	"name": "禹城市",
	"parent_code": "371400"
}, {"code": "371502", "name": "东昌府区", "parent_code": "371500"}, {
	"code": "371521",
	"name": "阳谷县",
	"parent_code": "371500"
}, {"code": "371522", "name": "莘县", "parent_code": "371500"}, {
	"code": "371523",
	"name": "茌平县",
	"parent_code": "371500"
}, {"code": "371524", "name": "东阿县", "parent_code": "371500"}, {
	"code": "371525",
	"name": "冠县",
	"parent_code": "371500"
}, {"code": "371526", "name": "高唐县", "parent_code": "371500"}, {
	"code": "371581",
	"name": "临清市",
	"parent_code": "371500"
}, {"code": "371602", "name": "滨城区", "parent_code": "371600"}, {
	"code": "371603",
	"name": "沾化区",
	"parent_code": "371600"
}, {"code": "371621", "name": "惠民县", "parent_code": "371600"}, {
	"code": "371622",
	"name": "阳信县",
	"parent_code": "371600"
}, {"code": "371623", "name": "无棣县", "parent_code": "371600"}, {
	"code": "371625",
	"name": "博兴县",
	"parent_code": "371600"
}, {"code": "371626", "name": "邹平县", "parent_code": "371600"}, {
	"code": "371702",
	"name": "牡丹区",
	"parent_code": "371700"
}, {"code": "371703", "name": "定陶区", "parent_code": "371700"}, {
	"code": "371721",
	"name": "曹县",
	"parent_code": "371700"
}, {"code": "371722", "name": "单县", "parent_code": "371700"}, {
	"code": "371723",
	"name": "成武县",
	"parent_code": "371700"
}, {"code": "371724", "name": "巨野县", "parent_code": "371700"}, {
	"code": "371725",
	"name": "郓城县",
	"parent_code": "371700"
}, {"code": "371726", "name": "鄄城县", "parent_code": "371700"}, {
	"code": "371728",
	"name": "东明县",
	"parent_code": "371700"
}, {"code": "410102", "name": "中原区", "parent_code": "410100"}, {
	"code": "410103",
	"name": "二七区",
	"parent_code": "410100"
}, {"code": "410104", "name": "管城回族区", "parent_code": "410100"}, {
	"code": "410105",
	"name": "金水区",
	"parent_code": "410100"
}, {"code": "410106", "name": "上街区", "parent_code": "410100"}, {
	"code": "410108",
	"name": "惠济区",
	"parent_code": "410100"
}, {"code": "410122", "name": "中牟县", "parent_code": "410100"}, {
	"code": "410181",
	"name": "巩义市",
	"parent_code": "410100"
}, {"code": "410182", "name": "荥阳市", "parent_code": "410100"}, {
	"code": "410183",
	"name": "新密市",
	"parent_code": "410100"
}, {"code": "410184", "name": "新郑市", "parent_code": "410100"}, {
	"code": "410185",
	"name": "登封市",
	"parent_code": "410100"
}, {"code": "410202", "name": "龙亭区", "parent_code": "410200"}, {
	"code": "410203",
	"name": "顺河回族区",
	"parent_code": "410200"
}, {"code": "410204", "name": "鼓楼区", "parent_code": "410200"}, {
	"code": "410205",
	"name": "禹王台区",
	"parent_code": "410200"
}, {"code": "410211", "name": "金明区", "parent_code": "410200"}, {
	"code": "410212",
	"name": "祥符区",
	"parent_code": "410200"
}, {"code": "410221", "name": "杞县", "parent_code": "410200"}, {
	"code": "410222",
	"name": "通许县",
	"parent_code": "410200"
}, {"code": "410223", "name": "尉氏县", "parent_code": "410200"}, {
	"code": "410225",
	"name": "兰考县",
	"parent_code": "410200"
}, {"code": "410302", "name": "老城区", "parent_code": "410300"}, {
	"code": "410303",
	"name": "西工区",
	"parent_code": "410300"
}, {"code": "410304", "name": "瀍河回族区", "parent_code": "410300"}, {
	"code": "410305",
	"name": "涧西区",
	"parent_code": "410300"
}, {"code": "410306", "name": "吉利区", "parent_code": "410300"}, {
	"code": "410311",
	"name": "洛龙区",
	"parent_code": "410300"
}, {"code": "410322", "name": "孟津县", "parent_code": "410300"}, {
	"code": "410323",
	"name": "新安县",
	"parent_code": "410300"
}, {"code": "410324", "name": "栾川县", "parent_code": "410300"}, {
	"code": "410325",
	"name": "嵩县",
	"parent_code": "410300"
}, {"code": "410326", "name": "汝阳县", "parent_code": "410300"}, {
	"code": "410327",
	"name": "宜阳县",
	"parent_code": "410300"
}, {"code": "410328", "name": "洛宁县", "parent_code": "410300"}, {
	"code": "410329",
	"name": "伊川县",
	"parent_code": "410300"
}, {"code": "410381", "name": "偃师市", "parent_code": "410300"}, {
	"code": "410402",
	"name": "新华区",
	"parent_code": "410400"
}, {"code": "410403", "name": "卫东区", "parent_code": "410400"}, {
	"code": "410404",
	"name": "石龙区",
	"parent_code": "410400"
}, {"code": "410411", "name": "湛河区", "parent_code": "410400"}, {
	"code": "410421",
	"name": "宝丰县",
	"parent_code": "410400"
}, {"code": "410422", "name": "叶县", "parent_code": "410400"}, {
	"code": "410423",
	"name": "鲁山县",
	"parent_code": "410400"
}, {"code": "410425", "name": "郏县", "parent_code": "410400"}, {
	"code": "410481",
	"name": "舞钢市",
	"parent_code": "410400"
}, {"code": "410482", "name": "汝州市", "parent_code": "410400"}, {
	"code": "410502",
	"name": "文峰区",
	"parent_code": "410500"
}, {"code": "410503", "name": "北关区", "parent_code": "410500"}, {
	"code": "410505",
	"name": "殷都区",
	"parent_code": "410500"
}, {"code": "410506", "name": "龙安区", "parent_code": "410500"}, {
	"code": "410522",
	"name": "安阳县",
	"parent_code": "410500"
}, {"code": "410523", "name": "汤阴县", "parent_code": "410500"}, {
	"code": "410526",
	"name": "滑县",
	"parent_code": "410500"
}, {"code": "410527", "name": "内黄县", "parent_code": "410500"}, {
	"code": "410581",
	"name": "林州市",
	"parent_code": "410500"
}, {"code": "410602", "name": "鹤山区", "parent_code": "410600"}, {
	"code": "410603",
	"name": "山城区",
	"parent_code": "410600"
}, {"code": "410611", "name": "淇滨区", "parent_code": "410600"}, {
	"code": "410621",
	"name": "浚县",
	"parent_code": "410600"
}, {"code": "410622", "name": "淇县", "parent_code": "410600"}, {
	"code": "410702",
	"name": "红旗区",
	"parent_code": "410700"
}, {"code": "410703", "name": "卫滨区", "parent_code": "410700"}, {
	"code": "410704",
	"name": "凤泉区",
	"parent_code": "410700"
}, {"code": "410711", "name": "牧野区", "parent_code": "410700"}, {
	"code": "410721",
	"name": "新乡县",
	"parent_code": "410700"
}, {"code": "410724", "name": "获嘉县", "parent_code": "410700"}, {
	"code": "410725",
	"name": "原阳县",
	"parent_code": "410700"
}, {"code": "410726", "name": "延津县", "parent_code": "410700"}, {
	"code": "410727",
	"name": "封丘县",
	"parent_code": "410700"
}, {"code": "410728", "name": "长垣县", "parent_code": "410700"}, {
	"code": "410781",
	"name": "卫辉市",
	"parent_code": "410700"
}, {"code": "410782", "name": "辉县市", "parent_code": "410700"}, {
	"code": "410802",
	"name": "解放区",
	"parent_code": "410800"
}, {"code": "410803", "name": "中站区", "parent_code": "410800"}, {
	"code": "410804",
	"name": "马村区",
	"parent_code": "410800"
}, {"code": "410811", "name": "山阳区", "parent_code": "410800"}, {
	"code": "410821",
	"name": "修武县",
	"parent_code": "410800"
}, {"code": "410822", "name": "博爱县", "parent_code": "410800"}, {
	"code": "410823",
	"name": "武陟县",
	"parent_code": "410800"
}, {"code": "410825", "name": "温县", "parent_code": "410800"}, {
	"code": "410882",
	"name": "沁阳市",
	"parent_code": "410800"
}, {"code": "410883", "name": "孟州市", "parent_code": "410800"}, {
	"code": "410902",
	"name": "华龙区",
	"parent_code": "410900"
}, {"code": "410922", "name": "清丰县", "parent_code": "410900"}, {
	"code": "410923",
	"name": "南乐县",
	"parent_code": "410900"
}, {"code": "410926", "name": "范县", "parent_code": "410900"}, {
	"code": "410927",
	"name": "台前县",
	"parent_code": "410900"
}, {"code": "410928", "name": "濮阳县", "parent_code": "410900"}, {
	"code": "411002",
	"name": "魏都区",
	"parent_code": "411000"
}, {"code": "411023", "name": "许昌县", "parent_code": "411000"}, {
	"code": "411024",
	"name": "鄢陵县",
	"parent_code": "411000"
}, {"code": "411025", "name": "襄城县", "parent_code": "411000"}, {
	"code": "411081",
	"name": "禹州市",
	"parent_code": "411000"
}, {"code": "411082", "name": "长葛市", "parent_code": "411000"}, {
	"code": "411102",
	"name": "源汇区",
	"parent_code": "411100"
}, {"code": "411103", "name": "郾城区", "parent_code": "411100"}, {
	"code": "411104",
	"name": "召陵区",
	"parent_code": "411100"
}, {"code": "411121", "name": "舞阳县", "parent_code": "411100"}, {
	"code": "411122",
	"name": "临颍县",
	"parent_code": "411100"
}, {"code": "411202", "name": "湖滨区", "parent_code": "411200"}, {
	"code": "411203",
	"name": "陕州区",
	"parent_code": "411200"
}, {"code": "411221", "name": "渑池县", "parent_code": "411200"}, {
	"code": "411224",
	"name": "卢氏县",
	"parent_code": "411200"
}, {"code": "411281", "name": "义马市", "parent_code": "411200"}, {
	"code": "411282",
	"name": "灵宝市",
	"parent_code": "411200"
}, {"code": "411302", "name": "宛城区", "parent_code": "411300"}, {
	"code": "411303",
	"name": "卧龙区",
	"parent_code": "411300"
}, {"code": "411321", "name": "南召县", "parent_code": "411300"}, {
	"code": "411322",
	"name": "方城县",
	"parent_code": "411300"
}, {"code": "411323", "name": "西峡县", "parent_code": "411300"}, {
	"code": "411324",
	"name": "镇平县",
	"parent_code": "411300"
}, {"code": "411325", "name": "内乡县", "parent_code": "411300"}, {
	"code": "411326",
	"name": "淅川县",
	"parent_code": "411300"
}, {"code": "411327", "name": "社旗县", "parent_code": "411300"}, {
	"code": "411328",
	"name": "唐河县",
	"parent_code": "411300"
}, {"code": "411329", "name": "新野县", "parent_code": "411300"}, {
	"code": "411330",
	"name": "桐柏县",
	"parent_code": "411300"
}, {"code": "411381", "name": "邓州市", "parent_code": "411300"}, {
	"code": "411402",
	"name": "梁园区",
	"parent_code": "411400"
}, {"code": "411403", "name": "睢阳区", "parent_code": "411400"}, {
	"code": "411421",
	"name": "民权县",
	"parent_code": "411400"
}, {"code": "411422", "name": "睢县", "parent_code": "411400"}, {
	"code": "411423",
	"name": "宁陵县",
	"parent_code": "411400"
}, {"code": "411424", "name": "柘城县", "parent_code": "411400"}, {
	"code": "411425",
	"name": "虞城县",
	"parent_code": "411400"
}, {"code": "411426", "name": "夏邑县", "parent_code": "411400"}, {
	"code": "411481",
	"name": "永城市",
	"parent_code": "411400"
}, {"code": "411502", "name": "浉河区", "parent_code": "411500"}, {
	"code": "411503",
	"name": "平桥区",
	"parent_code": "411500"
}, {"code": "411521", "name": "罗山县", "parent_code": "411500"}, {
	"code": "411522",
	"name": "光山县",
	"parent_code": "411500"
}, {"code": "411523", "name": "新县", "parent_code": "411500"}, {
	"code": "411524",
	"name": "商城县",
	"parent_code": "411500"
}, {"code": "411525", "name": "固始县", "parent_code": "411500"}, {
	"code": "411526",
	"name": "潢川县",
	"parent_code": "411500"
}, {"code": "411527", "name": "淮滨县", "parent_code": "411500"}, {
	"code": "411528",
	"name": "息县",
	"parent_code": "411500"
}, {"code": "411602", "name": "川汇区", "parent_code": "411600"}, {
	"code": "411621",
	"name": "扶沟县",
	"parent_code": "411600"
}, {"code": "411622", "name": "西华县", "parent_code": "411600"}, {
	"code": "411623",
	"name": "商水县",
	"parent_code": "411600"
}, {"code": "411624", "name": "沈丘县", "parent_code": "411600"}, {
	"code": "411625",
	"name": "郸城县",
	"parent_code": "411600"
}, {"code": "411626", "name": "淮阳县", "parent_code": "411600"}, {
	"code": "411627",
	"name": "太康县",
	"parent_code": "411600"
}, {"code": "411628", "name": "鹿邑县", "parent_code": "411600"}, {
	"code": "411681",
	"name": "项城市",
	"parent_code": "411600"
}, {"code": "411702", "name": "驿城区", "parent_code": "411700"}, {
	"code": "411721",
	"name": "西平县",
	"parent_code": "411700"
}, {"code": "411722", "name": "上蔡县", "parent_code": "411700"}, {
	"code": "411723",
	"name": "平舆县",
	"parent_code": "411700"
}, {"code": "411724", "name": "正阳县", "parent_code": "411700"}, {
	"code": "411725",
	"name": "确山县",
	"parent_code": "411700"
}, {"code": "411726", "name": "泌阳县", "parent_code": "411700"}, {
	"code": "411727",
	"name": "汝南县",
	"parent_code": "411700"
}, {"code": "411728", "name": "遂平县", "parent_code": "411700"}, {
	"code": "411729",
	"name": "新蔡县",
	"parent_code": "411700"
}, {"code": "419001", "name": "济源市", "parent_code": "419000"}, {
	"code": "420102",
	"name": "江岸区",
	"parent_code": "420100"
}, {"code": "420103", "name": "江汉区", "parent_code": "420100"}, {
	"code": "420104",
	"name": "硚口区",
	"parent_code": "420100"
}, {"code": "420105", "name": "汉阳区", "parent_code": "420100"}, {
	"code": "420106",
	"name": "武昌区",
	"parent_code": "420100"
}, {"code": "420107", "name": "青山区", "parent_code": "420100"}, {
	"code": "420111",
	"name": "洪山区",
	"parent_code": "420100"
}, {"code": "420112", "name": "东西湖区", "parent_code": "420100"}, {
	"code": "420113",
	"name": "汉南区",
	"parent_code": "420100"
}, {"code": "420114", "name": "蔡甸区", "parent_code": "420100"}, {
	"code": "420115",
	"name": "江夏区",
	"parent_code": "420100"
}, {"code": "420116", "name": "黄陂区", "parent_code": "420100"}, {
	"code": "420117",
	"name": "新洲区",
	"parent_code": "420100"
}, {"code": "420202", "name": "黄石港区", "parent_code": "420200"}, {
	"code": "420203",
	"name": "西塞山区",
	"parent_code": "420200"
}, {"code": "420204", "name": "下陆区", "parent_code": "420200"}, {
	"code": "420205",
	"name": "铁山区",
	"parent_code": "420200"
}, {"code": "420222", "name": "阳新县", "parent_code": "420200"}, {
	"code": "420281",
	"name": "大冶市",
	"parent_code": "420200"
}, {"code": "420302", "name": "茅箭区", "parent_code": "420300"}, {
	"code": "420303",
	"name": "张湾区",
	"parent_code": "420300"
}, {"code": "420304", "name": "郧阳区", "parent_code": "420300"}, {
	"code": "420322",
	"name": "郧西县",
	"parent_code": "420300"
}, {"code": "420323", "name": "竹山县", "parent_code": "420300"}, {
	"code": "420324",
	"name": "竹溪县",
	"parent_code": "420300"
}, {"code": "420325", "name": "房县", "parent_code": "420300"}, {
	"code": "420381",
	"name": "丹江口市",
	"parent_code": "420300"
}, {"code": "420502", "name": "西陵区", "parent_code": "420500"}, {
	"code": "420503",
	"name": "伍家岗区",
	"parent_code": "420500"
}, {"code": "420504", "name": "点军区", "parent_code": "420500"}, {
	"code": "420505",
	"name": "猇亭区",
	"parent_code": "420500"
}, {"code": "420506", "name": "夷陵区", "parent_code": "420500"}, {
	"code": "420525",
	"name": "远安县",
	"parent_code": "420500"
}, {"code": "420526", "name": "兴山县", "parent_code": "420500"}, {
	"code": "420527",
	"name": "秭归县",
	"parent_code": "420500"
}, {"code": "420528", "name": "长阳土家族自治县", "parent_code": "420500"}, {
	"code": "420529",
	"name": "五峰土家族自治县",
	"parent_code": "420500"
}, {"code": "420581", "name": "宜都市", "parent_code": "420500"}, {
	"code": "420582",
	"name": "当阳市",
	"parent_code": "420500"
}, {"code": "420583", "name": "枝江市", "parent_code": "420500"}, {
	"code": "420602",
	"name": "襄城区",
	"parent_code": "420600"
}, {"code": "420606", "name": "樊城区", "parent_code": "420600"}, {
	"code": "420607",
	"name": "襄州区",
	"parent_code": "420600"
}, {"code": "420624", "name": "南漳县", "parent_code": "420600"}, {
	"code": "420625",
	"name": "谷城县",
	"parent_code": "420600"
}, {"code": "420626", "name": "保康县", "parent_code": "420600"}, {
	"code": "420682",
	"name": "老河口市",
	"parent_code": "420600"
}, {"code": "420683", "name": "枣阳市", "parent_code": "420600"}, {
	"code": "420684",
	"name": "宜城市",
	"parent_code": "420600"
}, {"code": "420702", "name": "梁子湖区", "parent_code": "420700"}, {
	"code": "420703",
	"name": "华容区",
	"parent_code": "420700"
}, {"code": "420704", "name": "鄂城区", "parent_code": "420700"}, {
	"code": "420802",
	"name": "东宝区",
	"parent_code": "420800"
}, {"code": "420804", "name": "掇刀区", "parent_code": "420800"}, {
	"code": "420821",
	"name": "京山县",
	"parent_code": "420800"
}, {"code": "420822", "name": "沙洋县", "parent_code": "420800"}, {
	"code": "420881",
	"name": "钟祥市",
	"parent_code": "420800"
}, {"code": "420902", "name": "孝南区", "parent_code": "420900"}, {
	"code": "420921",
	"name": "孝昌县",
	"parent_code": "420900"
}, {"code": "420922", "name": "大悟县", "parent_code": "420900"}, {
	"code": "420923",
	"name": "云梦县",
	"parent_code": "420900"
}, {"code": "420981", "name": "应城市", "parent_code": "420900"}, {
	"code": "420982",
	"name": "安陆市",
	"parent_code": "420900"
}, {"code": "420984", "name": "汉川市", "parent_code": "420900"}, {
	"code": "421002",
	"name": "沙市区",
	"parent_code": "421000"
}, {"code": "421003", "name": "荆州区", "parent_code": "421000"}, {
	"code": "421022",
	"name": "公安县",
	"parent_code": "421000"
}, {"code": "421023", "name": "监利县", "parent_code": "421000"}, {
	"code": "421024",
	"name": "江陵县",
	"parent_code": "421000"
}, {"code": "421081", "name": "石首市", "parent_code": "421000"}, {
	"code": "421083",
	"name": "洪湖市",
	"parent_code": "421000"
}, {"code": "421087", "name": "松滋市", "parent_code": "421000"}, {
	"code": "421102",
	"name": "黄州区",
	"parent_code": "421100"
}, {"code": "421121", "name": "团风县", "parent_code": "421100"}, {
	"code": "421122",
	"name": "红安县",
	"parent_code": "421100"
}, {"code": "421123", "name": "罗田县", "parent_code": "421100"}, {
	"code": "421124",
	"name": "英山县",
	"parent_code": "421100"
}, {"code": "421125", "name": "浠水县", "parent_code": "421100"}, {
	"code": "421126",
	"name": "蕲春县",
	"parent_code": "421100"
}, {"code": "421127", "name": "黄梅县", "parent_code": "421100"}, {
	"code": "421181",
	"name": "麻城市",
	"parent_code": "421100"
}, {"code": "421182", "name": "武穴市", "parent_code": "421100"}, {
	"code": "421202",
	"name": "咸安区",
	"parent_code": "421200"
}, {"code": "421221", "name": "嘉鱼县", "parent_code": "421200"}, {
	"code": "421222",
	"name": "通城县",
	"parent_code": "421200"
}, {"code": "421223", "name": "崇阳县", "parent_code": "421200"}, {
	"code": "421224",
	"name": "通山县",
	"parent_code": "421200"
}, {"code": "421281", "name": "赤壁市", "parent_code": "421200"}, {
	"code": "421303",
	"name": "曾都区",
	"parent_code": "421300"
}, {"code": "421321", "name": "随县", "parent_code": "421300"}, {
	"code": "421381",
	"name": "广水市",
	"parent_code": "421300"
}, {"code": "422801", "name": "恩施市", "parent_code": "422800"}, {
	"code": "422802",
	"name": "利川市",
	"parent_code": "422800"
}, {"code": "422822", "name": "建始县", "parent_code": "422800"}, {
	"code": "422823",
	"name": "巴东县",
	"parent_code": "422800"
}, {"code": "422825", "name": "宣恩县", "parent_code": "422800"}, {
	"code": "422826",
	"name": "咸丰县",
	"parent_code": "422800"
}, {"code": "422827", "name": "来凤县", "parent_code": "422800"}, {
	"code": "422828",
	"name": "鹤峰县",
	"parent_code": "422800"
}, {"code": "429004", "name": "仙桃市", "parent_code": "429000"}, {
	"code": "429005",
	"name": "潜江市",
	"parent_code": "429000"
}, {"code": "429006", "name": "天门市", "parent_code": "429000"}, {
	"code": "429021",
	"name": "神农架林区",
	"parent_code": "429000"
}, {"code": "430102", "name": "芙蓉区", "parent_code": "430100"}, {
	"code": "430103",
	"name": "天心区",
	"parent_code": "430100"
}, {"code": "430104", "name": "岳麓区", "parent_code": "430100"}, {
	"code": "430105",
	"name": "开福区",
	"parent_code": "430100"
}, {"code": "430111", "name": "雨花区", "parent_code": "430100"}, {
	"code": "430112",
	"name": "望城区",
	"parent_code": "430100"
}, {"code": "430121", "name": "长沙县", "parent_code": "430100"}, {
	"code": "430124",
	"name": "宁乡县",
	"parent_code": "430100"
}, {"code": "430181", "name": "浏阳市", "parent_code": "430100"}, {
	"code": "430202",
	"name": "荷塘区",
	"parent_code": "430200"
}, {"code": "430203", "name": "芦淞区", "parent_code": "430200"}, {
	"code": "430204",
	"name": "石峰区",
	"parent_code": "430200"
}, {"code": "430211", "name": "天元区", "parent_code": "430200"}, {
	"code": "430221",
	"name": "株洲县",
	"parent_code": "430200"
}, {"code": "430223", "name": "攸县", "parent_code": "430200"}, {
	"code": "430224",
	"name": "茶陵县",
	"parent_code": "430200"
}, {"code": "430225", "name": "炎陵县", "parent_code": "430200"}, {
	"code": "430281",
	"name": "醴陵市",
	"parent_code": "430200"
}, {"code": "430302", "name": "雨湖区", "parent_code": "430300"}, {
	"code": "430304",
	"name": "岳塘区",
	"parent_code": "430300"
}, {"code": "430321", "name": "湘潭县", "parent_code": "430300"}, {
	"code": "430381",
	"name": "湘乡市",
	"parent_code": "430300"
}, {"code": "430382", "name": "韶山市", "parent_code": "430300"}, {
	"code": "430405",
	"name": "珠晖区",
	"parent_code": "430400"
}, {"code": "430406", "name": "雁峰区", "parent_code": "430400"}, {
	"code": "430407",
	"name": "石鼓区",
	"parent_code": "430400"
}, {"code": "430408", "name": "蒸湘区", "parent_code": "430400"}, {
	"code": "430412",
	"name": "南岳区",
	"parent_code": "430400"
}, {"code": "430421", "name": "衡阳县", "parent_code": "430400"}, {
	"code": "430422",
	"name": "衡南县",
	"parent_code": "430400"
}, {"code": "430423", "name": "衡山县", "parent_code": "430400"}, {
	"code": "430424",
	"name": "衡东县",
	"parent_code": "430400"
}, {"code": "430426", "name": "祁东县", "parent_code": "430400"}, {
	"code": "430481",
	"name": "耒阳市",
	"parent_code": "430400"
}, {"code": "430482", "name": "常宁市", "parent_code": "430400"}, {
	"code": "430502",
	"name": "双清区",
	"parent_code": "430500"
}, {"code": "430503", "name": "大祥区", "parent_code": "430500"}, {
	"code": "430511",
	"name": "北塔区",
	"parent_code": "430500"
}, {"code": "430521", "name": "邵东县", "parent_code": "430500"}, {
	"code": "430522",
	"name": "新邵县",
	"parent_code": "430500"
}, {"code": "430523", "name": "邵阳县", "parent_code": "430500"}, {
	"code": "430524",
	"name": "隆回县",
	"parent_code": "430500"
}, {"code": "430525", "name": "洞口县", "parent_code": "430500"}, {
	"code": "430527",
	"name": "绥宁县",
	"parent_code": "430500"
}, {"code": "430528", "name": "新宁县", "parent_code": "430500"}, {
	"code": "430529",
	"name": "城步苗族自治县",
	"parent_code": "430500"
}, {"code": "430581", "name": "武冈市", "parent_code": "430500"}, {
	"code": "430602",
	"name": "岳阳楼区",
	"parent_code": "430600"
}, {"code": "430603", "name": "云溪区", "parent_code": "430600"}, {
	"code": "430611",
	"name": "君山区",
	"parent_code": "430600"
}, {"code": "430621", "name": "岳阳县", "parent_code": "430600"}, {
	"code": "430623",
	"name": "华容县",
	"parent_code": "430600"
}, {"code": "430624", "name": "湘阴县", "parent_code": "430600"}, {
	"code": "430626",
	"name": "平江县",
	"parent_code": "430600"
}, {"code": "430681", "name": "汨罗市", "parent_code": "430600"}, {
	"code": "430682",
	"name": "临湘市",
	"parent_code": "430600"
}, {"code": "430702", "name": "武陵区", "parent_code": "430700"}, {
	"code": "430703",
	"name": "鼎城区",
	"parent_code": "430700"
}, {"code": "430721", "name": "安乡县", "parent_code": "430700"}, {
	"code": "430722",
	"name": "汉寿县",
	"parent_code": "430700"
}, {"code": "430723", "name": "澧县", "parent_code": "430700"}, {
	"code": "430724",
	"name": "临澧县",
	"parent_code": "430700"
}, {"code": "430725", "name": "桃源县", "parent_code": "430700"}, {
	"code": "430726",
	"name": "石门县",
	"parent_code": "430700"
}, {"code": "430781", "name": "津市市", "parent_code": "430700"}, {
	"code": "430802",
	"name": "永定区",
	"parent_code": "430800"
}, {"code": "430811", "name": "武陵源区", "parent_code": "430800"}, {
	"code": "430821",
	"name": "慈利县",
	"parent_code": "430800"
}, {"code": "430822", "name": "桑植县", "parent_code": "430800"}, {
	"code": "430902",
	"name": "资阳区",
	"parent_code": "430900"
}, {"code": "430903", "name": "赫山区", "parent_code": "430900"}, {
	"code": "430921",
	"name": "南县",
	"parent_code": "430900"
}, {"code": "430922", "name": "桃江县", "parent_code": "430900"}, {
	"code": "430923",
	"name": "安化县",
	"parent_code": "430900"
}, {"code": "430981", "name": "沅江市", "parent_code": "430900"}, {
	"code": "431002",
	"name": "北湖区",
	"parent_code": "431000"
}, {"code": "431003", "name": "苏仙区", "parent_code": "431000"}, {
	"code": "431021",
	"name": "桂阳县",
	"parent_code": "431000"
}, {"code": "431022", "name": "宜章县", "parent_code": "431000"}, {
	"code": "431023",
	"name": "永兴县",
	"parent_code": "431000"
}, {"code": "431024", "name": "嘉禾县", "parent_code": "431000"}, {
	"code": "431025",
	"name": "临武县",
	"parent_code": "431000"
}, {"code": "431026", "name": "汝城县", "parent_code": "431000"}, {
	"code": "431027",
	"name": "桂东县",
	"parent_code": "431000"
}, {"code": "431028", "name": "安仁县", "parent_code": "431000"}, {
	"code": "431081",
	"name": "资兴市",
	"parent_code": "431000"
}, {"code": "431102", "name": "零陵区", "parent_code": "431100"}, {
	"code": "431103",
	"name": "冷水滩区",
	"parent_code": "431100"
}, {"code": "431121", "name": "祁阳县", "parent_code": "431100"}, {
	"code": "431122",
	"name": "东安县",
	"parent_code": "431100"
}, {"code": "431123", "name": "双牌县", "parent_code": "431100"}, {
	"code": "431124",
	"name": "道县",
	"parent_code": "431100"
}, {"code": "431125", "name": "江永县", "parent_code": "431100"}, {
	"code": "431126",
	"name": "宁远县",
	"parent_code": "431100"
}, {"code": "431127", "name": "蓝山县", "parent_code": "431100"}, {
	"code": "431128",
	"name": "新田县",
	"parent_code": "431100"
}, {"code": "431129", "name": "江华瑶族自治县", "parent_code": "431100"}, {
	"code": "431202",
	"name": "鹤城区",
	"parent_code": "431200"
}, {"code": "431221", "name": "中方县", "parent_code": "431200"}, {
	"code": "431222",
	"name": "沅陵县",
	"parent_code": "431200"
}, {"code": "431223", "name": "辰溪县", "parent_code": "431200"}, {
	"code": "431224",
	"name": "溆浦县",
	"parent_code": "431200"
}, {"code": "431225", "name": "会同县", "parent_code": "431200"}, {
	"code": "431226",
	"name": "麻阳苗族自治县",
	"parent_code": "431200"
}, {"code": "431227", "name": "新晃侗族自治县", "parent_code": "431200"}, {
	"code": "431228",
	"name": "芷江侗族自治县",
	"parent_code": "431200"
}, {"code": "431229", "name": "靖州苗族侗族自治县", "parent_code": "431200"}, {
	"code": "431230",
	"name": "通道侗族自治县",
	"parent_code": "431200"
}, {"code": "431281", "name": "洪江市", "parent_code": "431200"}, {
	"code": "431302",
	"name": "娄星区",
	"parent_code": "431300"
}, {"code": "431321", "name": "双峰县", "parent_code": "431300"}, {
	"code": "431322",
	"name": "新化县",
	"parent_code": "431300"
}, {"code": "431381", "name": "冷水江市", "parent_code": "431300"}, {
	"code": "431382",
	"name": "涟源市",
	"parent_code": "431300"
}, {"code": "433101", "name": "吉首市", "parent_code": "433100"}, {
	"code": "433122",
	"name": "泸溪县",
	"parent_code": "433100"
}, {"code": "433123", "name": "凤凰县", "parent_code": "433100"}, {
	"code": "433124",
	"name": "花垣县",
	"parent_code": "433100"
}, {"code": "433125", "name": "保靖县", "parent_code": "433100"}, {
	"code": "433126",
	"name": "古丈县",
	"parent_code": "433100"
}, {"code": "433127", "name": "永顺县", "parent_code": "433100"}, {
	"code": "433130",
	"name": "龙山县",
	"parent_code": "433100"
}, {"code": "440103", "name": "荔湾区", "parent_code": "440100"}, {
	"code": "440104",
	"name": "越秀区",
	"parent_code": "440100"
}, {"code": "440105", "name": "海珠区", "parent_code": "440100"}, {
	"code": "440106",
	"name": "天河区",
	"parent_code": "440100"
}, {"code": "440111", "name": "白云区", "parent_code": "440100"}, {
	"code": "440112",
	"name": "黄埔区",
	"parent_code": "440100"
}, {"code": "440113", "name": "番禺区", "parent_code": "440100"}, {
	"code": "440114",
	"name": "花都区",
	"parent_code": "440100"
}, {"code": "440115", "name": "南沙区", "parent_code": "440100"}, {
	"code": "440117",
	"name": "从化区",
	"parent_code": "440100"
}, {"code": "440118", "name": "增城区", "parent_code": "440100"}, {
	"code": "440203",
	"name": "武江区",
	"parent_code": "440200"
}, {"code": "440204", "name": "浈江区", "parent_code": "440200"}, {
	"code": "440205",
	"name": "曲江区",
	"parent_code": "440200"
}, {"code": "440222", "name": "始兴县", "parent_code": "440200"}, {
	"code": "440224",
	"name": "仁化县",
	"parent_code": "440200"
}, {"code": "440229", "name": "翁源县", "parent_code": "440200"}, {
	"code": "440232",
	"name": "乳源瑶族自治县",
	"parent_code": "440200"
}, {"code": "440233", "name": "新丰县", "parent_code": "440200"}, {
	"code": "440281",
	"name": "乐昌市",
	"parent_code": "440200"
}, {"code": "440282", "name": "南雄市", "parent_code": "440200"}, {
	"code": "440303",
	"name": "罗湖区",
	"parent_code": "440300"
}, {"code": "440304", "name": "福田区", "parent_code": "440300"}, {
	"code": "440305",
	"name": "南山区",
	"parent_code": "440300"
}, {"code": "440306", "name": "宝安区", "parent_code": "440300"}, {
	"code": "440307",
	"name": "龙岗区",
	"parent_code": "440300"
}, {"code": "440308", "name": "盐田区", "parent_code": "440300"}, {
	"code": "440402",
	"name": "香洲区",
	"parent_code": "440400"
}, {"code": "440403", "name": "斗门区", "parent_code": "440400"}, {
	"code": "440404",
	"name": "金湾区",
	"parent_code": "440400"
}, {"code": "440507", "name": "龙湖区", "parent_code": "440500"}, {
	"code": "440511",
	"name": "金平区",
	"parent_code": "440500"
}, {"code": "440512", "name": "濠江区", "parent_code": "440500"}, {
	"code": "440513",
	"name": "潮阳区",
	"parent_code": "440500"
}, {"code": "440514", "name": "潮南区", "parent_code": "440500"}, {
	"code": "440515",
	"name": "澄海区",
	"parent_code": "440500"
}, {"code": "440523", "name": "南澳县", "parent_code": "440500"}, {
	"code": "440604",
	"name": "禅城区",
	"parent_code": "440600"
}, {"code": "440605", "name": "南海区", "parent_code": "440600"}, {
	"code": "440606",
	"name": "顺德区",
	"parent_code": "440600"
}, {"code": "440607", "name": "三水区", "parent_code": "440600"}, {
	"code": "440608",
	"name": "高明区",
	"parent_code": "440600"
}, {"code": "440703", "name": "蓬江区", "parent_code": "440700"}, {
	"code": "440704",
	"name": "江海区",
	"parent_code": "440700"
}, {"code": "440705", "name": "新会区", "parent_code": "440700"}, {
	"code": "440781",
	"name": "台山市",
	"parent_code": "440700"
}, {"code": "440783", "name": "开平市", "parent_code": "440700"}, {
	"code": "440784",
	"name": "鹤山市",
	"parent_code": "440700"
}, {"code": "440785", "name": "恩平市", "parent_code": "440700"}, {
	"code": "440802",
	"name": "赤坎区",
	"parent_code": "440800"
}, {"code": "440803", "name": "霞山区", "parent_code": "440800"}, {
	"code": "440804",
	"name": "坡头区",
	"parent_code": "440800"
}, {"code": "440811", "name": "麻章区", "parent_code": "440800"}, {
	"code": "440823",
	"name": "遂溪县",
	"parent_code": "440800"
}, {"code": "440825", "name": "徐闻县", "parent_code": "440800"}, {
	"code": "440881",
	"name": "廉江市",
	"parent_code": "440800"
}, {"code": "440882", "name": "雷州市", "parent_code": "440800"}, {
	"code": "440883",
	"name": "吴川市",
	"parent_code": "440800"
}, {"code": "440902", "name": "茂南区", "parent_code": "440900"}, {
	"code": "440904",
	"name": "电白区",
	"parent_code": "440900"
}, {"code": "440981", "name": "高州市", "parent_code": "440900"}, {
	"code": "440982",
	"name": "化州市",
	"parent_code": "440900"
}, {"code": "440983", "name": "信宜市", "parent_code": "440900"}, {
	"code": "441202",
	"name": "端州区",
	"parent_code": "441200"
}, {"code": "441203", "name": "鼎湖区", "parent_code": "441200"}, {
	"code": "441204",
	"name": "高要区",
	"parent_code": "441200"
}, {"code": "441223", "name": "广宁县", "parent_code": "441200"}, {
	"code": "441224",
	"name": "怀集县",
	"parent_code": "441200"
}, {"code": "441225", "name": "封开县", "parent_code": "441200"}, {
	"code": "441226",
	"name": "德庆县",
	"parent_code": "441200"
}, {"code": "441284", "name": "四会市", "parent_code": "441200"}, {
	"code": "441302",
	"name": "惠城区",
	"parent_code": "441300"
}, {"code": "441303", "name": "惠阳区", "parent_code": "441300"}, {
	"code": "441322",
	"name": "博罗县",
	"parent_code": "441300"
}, {"code": "441323", "name": "惠东县", "parent_code": "441300"}, {
	"code": "441324",
	"name": "龙门县",
	"parent_code": "441300"
}, {"code": "441402", "name": "梅江区", "parent_code": "441400"}, {
	"code": "441403",
	"name": "梅县区",
	"parent_code": "441400"
}, {"code": "441422", "name": "大埔县", "parent_code": "441400"}, {
	"code": "441423",
	"name": "丰顺县",
	"parent_code": "441400"
}, {"code": "441424", "name": "五华县", "parent_code": "441400"}, {
	"code": "441426",
	"name": "平远县",
	"parent_code": "441400"
}, {"code": "441427", "name": "蕉岭县", "parent_code": "441400"}, {
	"code": "441481",
	"name": "兴宁市",
	"parent_code": "441400"
}, {"code": "441502", "name": "城区", "parent_code": "441500"}, {
	"code": "441521",
	"name": "海丰县",
	"parent_code": "441500"
}, {"code": "441523", "name": "陆河县", "parent_code": "441500"}, {
	"code": "441581",
	"name": "陆丰市",
	"parent_code": "441500"
}, {"code": "441602", "name": "源城区", "parent_code": "441600"}, {
	"code": "441621",
	"name": "紫金县",
	"parent_code": "441600"
}, {"code": "441622", "name": "龙川县", "parent_code": "441600"}, {
	"code": "441623",
	"name": "连平县",
	"parent_code": "441600"
}, {"code": "441624", "name": "和平县", "parent_code": "441600"}, {
	"code": "441625",
	"name": "东源县",
	"parent_code": "441600"
}, {"code": "441702", "name": "江城区", "parent_code": "441700"}, {
	"code": "441704",
	"name": "阳东区",
	"parent_code": "441700"
}, {"code": "441721", "name": "阳西县", "parent_code": "441700"}, {
	"code": "441781",
	"name": "阳春市",
	"parent_code": "441700"
}, {"code": "441802", "name": "清城区", "parent_code": "441800"}, {
	"code": "441803",
	"name": "清新区",
	"parent_code": "441800"
}, {"code": "441821", "name": "佛冈县", "parent_code": "441800"}, {
	"code": "441823",
	"name": "阳山县",
	"parent_code": "441800"
}, {"code": "441825", "name": "连山壮族瑶族自治县", "parent_code": "441800"}, {
	"code": "441826",
	"name": "连南瑶族自治县",
	"parent_code": "441800"
}, {"code": "441881", "name": "英德市", "parent_code": "441800"}, {
	"code": "441882",
	"name": "连州市",
	"parent_code": "441800"
}, {"code": "445102", "name": "湘桥区", "parent_code": "445100"}, {
	"code": "445103",
	"name": "潮安区",
	"parent_code": "445100"
}, {"code": "445122", "name": "饶平县", "parent_code": "445100"}, {
	"code": "445202",
	"name": "榕城区",
	"parent_code": "445200"
}, {"code": "445203", "name": "揭东区", "parent_code": "445200"}, {
	"code": "445222",
	"name": "揭西县",
	"parent_code": "445200"
}, {"code": "445224", "name": "惠来县", "parent_code": "445200"}, {
	"code": "445281",
	"name": "普宁市",
	"parent_code": "445200"
}, {"code": "445302", "name": "云城区", "parent_code": "445300"}, {
	"code": "445303",
	"name": "云安区",
	"parent_code": "445300"
}, {"code": "445321", "name": "新兴县", "parent_code": "445300"}, {
	"code": "445322",
	"name": "郁南县",
	"parent_code": "445300"
}, {"code": "445381", "name": "罗定市", "parent_code": "445300"}, {
	"code": "450102",
	"name": "兴宁区",
	"parent_code": "450100"
}, {"code": "450103", "name": "青秀区", "parent_code": "450100"}, {
	"code": "450105",
	"name": "江南区",
	"parent_code": "450100"
}, {"code": "450107", "name": "西乡塘区", "parent_code": "450100"}, {
	"code": "450108",
	"name": "良庆区",
	"parent_code": "450100"
}, {"code": "450109", "name": "邕宁区", "parent_code": "450100"}, {
	"code": "450110",
	"name": "武鸣区",
	"parent_code": "450100"
}, {"code": "450123", "name": "隆安县", "parent_code": "450100"}, {
	"code": "450124",
	"name": "马山县",
	"parent_code": "450100"
}, {"code": "450125", "name": "上林县", "parent_code": "450100"}, {
	"code": "450126",
	"name": "宾阳县",
	"parent_code": "450100"
}, {"code": "450127", "name": "横县", "parent_code": "450100"}, {
	"code": "450202",
	"name": "城中区",
	"parent_code": "450200"
}, {"code": "450203", "name": "鱼峰区", "parent_code": "450200"}, {
	"code": "450204",
	"name": "柳南区",
	"parent_code": "450200"
}, {"code": "450205", "name": "柳北区", "parent_code": "450200"}, {
	"code": "450206",
	"name": "柳江区",
	"parent_code": "450200"
}, {"code": "450222", "name": "柳城县", "parent_code": "450200"}, {
	"code": "450223",
	"name": "鹿寨县",
	"parent_code": "450200"
}, {"code": "450224", "name": "融安县", "parent_code": "450200"}, {
	"code": "450225",
	"name": "融水苗族自治县",
	"parent_code": "450200"
}, {"code": "450226", "name": "三江侗族自治县", "parent_code": "450200"}, {
	"code": "450302",
	"name": "秀峰区",
	"parent_code": "450300"
}, {"code": "450303", "name": "叠彩区", "parent_code": "450300"}, {
	"code": "450304",
	"name": "象山区",
	"parent_code": "450300"
}, {"code": "450305", "name": "七星区", "parent_code": "450300"}, {
	"code": "450311",
	"name": "雁山区",
	"parent_code": "450300"
}, {"code": "450312", "name": "临桂区", "parent_code": "450300"}, {
	"code": "450321",
	"name": "阳朔县",
	"parent_code": "450300"
}, {"code": "450323", "name": "灵川县", "parent_code": "450300"}, {
	"code": "450324",
	"name": "全州县",
	"parent_code": "450300"
}, {"code": "450325", "name": "兴安县", "parent_code": "450300"}, {
	"code": "450326",
	"name": "永福县",
	"parent_code": "450300"
}, {"code": "450327", "name": "灌阳县", "parent_code": "450300"}, {
	"code": "450328",
	"name": "龙胜各族自治县",
	"parent_code": "450300"
}, {"code": "450329", "name": "资源县", "parent_code": "450300"}, {
	"code": "450330",
	"name": "平乐县",
	"parent_code": "450300"
}, {"code": "450331", "name": "荔浦县", "parent_code": "450300"}, {
	"code": "450332",
	"name": "恭城瑶族自治县",
	"parent_code": "450300"
}, {"code": "450403", "name": "万秀区", "parent_code": "450400"}, {
	"code": "450405",
	"name": "长洲区",
	"parent_code": "450400"
}, {"code": "450406", "name": "龙圩区", "parent_code": "450400"}, {
	"code": "450421",
	"name": "苍梧县",
	"parent_code": "450400"
}, {"code": "450422", "name": "藤县", "parent_code": "450400"}, {
	"code": "450423",
	"name": "蒙山县",
	"parent_code": "450400"
}, {"code": "450481", "name": "岑溪市", "parent_code": "450400"}, {
	"code": "450502",
	"name": "海城区",
	"parent_code": "450500"
}, {"code": "450503", "name": "银海区", "parent_code": "450500"}, {
	"code": "450512",
	"name": "铁山港区",
	"parent_code": "450500"
}, {"code": "450521", "name": "合浦县", "parent_code": "450500"}, {
	"code": "450602",
	"name": "港口区",
	"parent_code": "450600"
}, {"code": "450603", "name": "防城区", "parent_code": "450600"}, {
	"code": "450621",
	"name": "上思县",
	"parent_code": "450600"
}, {"code": "450681", "name": "东兴市", "parent_code": "450600"}, {
	"code": "450702",
	"name": "钦南区",
	"parent_code": "450700"
}, {"code": "450703", "name": "钦北区", "parent_code": "450700"}, {
	"code": "450721",
	"name": "灵山县",
	"parent_code": "450700"
}, {"code": "450722", "name": "浦北县", "parent_code": "450700"}, {
	"code": "450802",
	"name": "港北区",
	"parent_code": "450800"
}, {"code": "450803", "name": "港南区", "parent_code": "450800"}, {
	"code": "450804",
	"name": "覃塘区",
	"parent_code": "450800"
}, {"code": "450821", "name": "平南县", "parent_code": "450800"}, {
	"code": "450881",
	"name": "桂平市",
	"parent_code": "450800"
}, {"code": "450902", "name": "玉州区", "parent_code": "450900"}, {
	"code": "450903",
	"name": "福绵区",
	"parent_code": "450900"
}, {"code": "450921", "name": "容县", "parent_code": "450900"}, {
	"code": "450922",
	"name": "陆川县",
	"parent_code": "450900"
}, {"code": "450923", "name": "博白县", "parent_code": "450900"}, {
	"code": "450924",
	"name": "兴业县",
	"parent_code": "450900"
}, {"code": "450981", "name": "北流市", "parent_code": "450900"}, {
	"code": "451002",
	"name": "右江区",
	"parent_code": "451000"
}, {"code": "451021", "name": "田阳县", "parent_code": "451000"}, {
	"code": "451022",
	"name": "田东县",
	"parent_code": "451000"
}, {"code": "451023", "name": "平果县", "parent_code": "451000"}, {
	"code": "451024",
	"name": "德保县",
	"parent_code": "451000"
}, {"code": "451026", "name": "那坡县", "parent_code": "451000"}, {
	"code": "451027",
	"name": "凌云县",
	"parent_code": "451000"
}, {"code": "451028", "name": "乐业县", "parent_code": "451000"}, {
	"code": "451029",
	"name": "田林县",
	"parent_code": "451000"
}, {"code": "451030", "name": "西林县", "parent_code": "451000"}, {
	"code": "451031",
	"name": "隆林各族自治县",
	"parent_code": "451000"
}, {"code": "451081", "name": "靖西市", "parent_code": "451000"}, {
	"code": "451102",
	"name": "八步区",
	"parent_code": "451100"
}, {"code": "451103", "name": "平桂区", "parent_code": "451100"}, {
	"code": "451121",
	"name": "昭平县",
	"parent_code": "451100"
}, {"code": "451122", "name": "钟山县", "parent_code": "451100"}, {
	"code": "451123",
	"name": "富川瑶族自治县",
	"parent_code": "451100"
}, {"code": "451202", "name": "金城江区", "parent_code": "451200"}, {
	"code": "451221",
	"name": "南丹县",
	"parent_code": "451200"
}, {"code": "451222", "name": "天峨县", "parent_code": "451200"}, {
	"code": "451223",
	"name": "凤山县",
	"parent_code": "451200"
}, {"code": "451224", "name": "东兰县", "parent_code": "451200"}, {
	"code": "451225",
	"name": "罗城仫佬族自治县",
	"parent_code": "451200"
}, {"code": "451226", "name": "环江毛南族自治县", "parent_code": "451200"}, {
	"code": "451227",
	"name": "巴马瑶族自治县",
	"parent_code": "451200"
}, {"code": "451228", "name": "都安瑶族自治县", "parent_code": "451200"}, {
	"code": "451229",
	"name": "大化瑶族自治县",
	"parent_code": "451200"
}, {"code": "451281", "name": "宜州市", "parent_code": "451200"}, {
	"code": "451302",
	"name": "兴宾区",
	"parent_code": "451300"
}, {"code": "451321", "name": "忻城县", "parent_code": "451300"}, {
	"code": "451322",
	"name": "象州县",
	"parent_code": "451300"
}, {"code": "451323", "name": "武宣县", "parent_code": "451300"}, {
	"code": "451324",
	"name": "金秀瑶族自治县",
	"parent_code": "451300"
}, {"code": "451381", "name": "合山市", "parent_code": "451300"}, {
	"code": "451402",
	"name": "江州区",
	"parent_code": "451400"
}, {"code": "451421", "name": "扶绥县", "parent_code": "451400"}, {
	"code": "451422",
	"name": "宁明县",
	"parent_code": "451400"
}, {"code": "451423", "name": "龙州县", "parent_code": "451400"}, {
	"code": "451424",
	"name": "大新县",
	"parent_code": "451400"
}, {"code": "451425", "name": "天等县", "parent_code": "451400"}, {
	"code": "451481",
	"name": "凭祥市",
	"parent_code": "451400"
}, {"code": "460105", "name": "秀英区", "parent_code": "460100"}, {
	"code": "460106",
	"name": "龙华区",
	"parent_code": "460100"
}, {"code": "460107", "name": "琼山区", "parent_code": "460100"}, {
	"code": "460108",
	"name": "美兰区",
	"parent_code": "460100"
}, {"code": "460202", "name": "海棠区", "parent_code": "460200"}, {
	"code": "460203",
	"name": "吉阳区",
	"parent_code": "460200"
}, {"code": "460204", "name": "天涯区", "parent_code": "460200"}, {
	"code": "460205",
	"name": "崖州区",
	"parent_code": "460200"
}, {"code": "469001", "name": "五指山市", "parent_code": "469000"}, {
	"code": "469002",
	"name": "琼海市",
	"parent_code": "469000"
}, {"code": "469005", "name": "文昌市", "parent_code": "469000"}, {
	"code": "469006",
	"name": "万宁市",
	"parent_code": "469000"
}, {"code": "469007", "name": "东方市", "parent_code": "469000"}, {
	"code": "469021",
	"name": "定安县",
	"parent_code": "469000"
}, {"code": "469022", "name": "屯昌县", "parent_code": "469000"}, {
	"code": "469023",
	"name": "澄迈县",
	"parent_code": "469000"
}, {"code": "469024", "name": "临高县", "parent_code": "469000"}, {
	"code": "469025",
	"name": "白沙黎族自治县",
	"parent_code": "469000"
}, {"code": "469026", "name": "昌江黎族自治县", "parent_code": "469000"}, {
	"code": "469027",
	"name": "乐东黎族自治县",
	"parent_code": "469000"
}, {"code": "469028", "name": "陵水黎族自治县", "parent_code": "469000"}, {
	"code": "469029",
	"name": "保亭黎族苗族自治县",
	"parent_code": "469000"
}, {"code": "469030", "name": "琼中黎族苗族自治县", "parent_code": "469000"}, {
	"code": "500101",
	"name": "万州区",
	"parent_code": "500100"
}, {"code": "500102", "name": "涪陵区", "parent_code": "500100"}, {
	"code": "500103",
	"name": "渝中区",
	"parent_code": "500100"
}, {"code": "500104", "name": "大渡口区", "parent_code": "500100"}, {
	"code": "500105",
	"name": "江北区",
	"parent_code": "500100"
}, {"code": "500106", "name": "沙坪坝区", "parent_code": "500100"}, {
	"code": "500107",
	"name": "九龙坡区",
	"parent_code": "500100"
}, {"code": "500108", "name": "南岸区", "parent_code": "500100"}, {
	"code": "500109",
	"name": "北碚区",
	"parent_code": "500100"
}, {"code": "500110", "name": "綦江区", "parent_code": "500100"}, {
	"code": "500111",
	"name": "大足区",
	"parent_code": "500100"
}, {"code": "500112", "name": "渝北区", "parent_code": "500100"}, {
	"code": "500113",
	"name": "巴南区",
	"parent_code": "500100"
}, {"code": "500114", "name": "黔江区", "parent_code": "500100"}, {
	"code": "500115",
	"name": "长寿区",
	"parent_code": "500100"
}, {"code": "500116", "name": "江津区", "parent_code": "500100"}, {
	"code": "500117",
	"name": "合川区",
	"parent_code": "500100"
}, {"code": "500118", "name": "永川区", "parent_code": "500100"}, {
	"code": "500119",
	"name": "南川区",
	"parent_code": "500100"
}, {"code": "500120", "name": "璧山区", "parent_code": "500100"}, {
	"code": "500151",
	"name": "铜梁区",
	"parent_code": "500100"
}, {"code": "500152", "name": "潼南区", "parent_code": "500100"}, {
	"code": "500153",
	"name": "荣昌区",
	"parent_code": "500100"
}, {"code": "500154", "name": "开州区", "parent_code": "500100"}, {
	"code": "500228",
	"name": "梁平县",
	"parent_code": "500200"
}, {"code": "500229", "name": "城口县", "parent_code": "500200"}, {
	"code": "500230",
	"name": "丰都县",
	"parent_code": "500200"
}, {"code": "500231", "name": "垫江县", "parent_code": "500200"}, {
	"code": "500232",
	"name": "武隆县",
	"parent_code": "500200"
}, {"code": "500233", "name": "忠县", "parent_code": "500200"}, {
	"code": "500235",
	"name": "云阳县",
	"parent_code": "500200"
}, {"code": "500236", "name": "奉节县", "parent_code": "500200"}, {
	"code": "500237",
	"name": "巫山县",
	"parent_code": "500200"
}, {"code": "500238", "name": "巫溪县", "parent_code": "500200"}, {
	"code": "500240",
	"name": "石柱土家族自治县",
	"parent_code": "500200"
}, {"code": "500241", "name": "秀山土家族苗族自治县", "parent_code": "500200"}, {
	"code": "500242",
	"name": "酉阳土家族苗族自治县",
	"parent_code": "500200"
}, {"code": "500243", "name": "彭水苗族土家族自治县", "parent_code": "500200"}, {
	"code": "510104",
	"name": "锦江区",
	"parent_code": "510100"
}, {"code": "510105", "name": "青羊区", "parent_code": "510100"}, {
	"code": "510106",
	"name": "金牛区",
	"parent_code": "510100"
}, {"code": "510107", "name": "武侯区", "parent_code": "510100"}, {
	"code": "510108",
	"name": "成华区",
	"parent_code": "510100"
}, {"code": "510112", "name": "龙泉驿区", "parent_code": "510100"}, {
	"code": "510113",
	"name": "青白江区",
	"parent_code": "510100"
}, {"code": "510114", "name": "新都区", "parent_code": "510100"}, {
	"code": "510115",
	"name": "温江区",
	"parent_code": "510100"
}, {"code": "510116", "name": "双流区", "parent_code": "510100"}, {
	"code": "510121",
	"name": "金堂县",
	"parent_code": "510100"
}, {"code": "510124", "name": "郫县", "parent_code": "510100"}, {
	"code": "510129",
	"name": "大邑县",
	"parent_code": "510100"
}, {"code": "510131", "name": "蒲江县", "parent_code": "510100"}, {
	"code": "510132",
	"name": "新津县",
	"parent_code": "510100"
}, {"code": "510181", "name": "都江堰市", "parent_code": "510100"}, {
	"code": "510182",
	"name": "彭州市",
	"parent_code": "510100"
}, {"code": "510183", "name": "邛崃市", "parent_code": "510100"}, {
	"code": "510184",
	"name": "崇州市",
	"parent_code": "510100"
}, {"code": "510185", "name": "简阳市", "parent_code": "510100"}, {
	"code": "510302",
	"name": "自流井区",
	"parent_code": "510300"
}, {"code": "510303", "name": "贡井区", "parent_code": "510300"}, {
	"code": "510304",
	"name": "大安区",
	"parent_code": "510300"
}, {"code": "510311", "name": "沿滩区", "parent_code": "510300"}, {
	"code": "510321",
	"name": "荣县",
	"parent_code": "510300"
}, {"code": "510322", "name": "富顺县", "parent_code": "510300"}, {
	"code": "510402",
	"name": "东区",
	"parent_code": "510400"
}, {"code": "510403", "name": "西区", "parent_code": "510400"}, {
	"code": "510411",
	"name": "仁和区",
	"parent_code": "510400"
}, {"code": "510421", "name": "米易县", "parent_code": "510400"}, {
	"code": "510422",
	"name": "盐边县",
	"parent_code": "510400"
}, {"code": "510502", "name": "江阳区", "parent_code": "510500"}, {
	"code": "510503",
	"name": "纳溪区",
	"parent_code": "510500"
}, {"code": "510504", "name": "龙马潭区", "parent_code": "510500"}, {
	"code": "510521",
	"name": "泸县",
	"parent_code": "510500"
}, {"code": "510522", "name": "合江县", "parent_code": "510500"}, {
	"code": "510524",
	"name": "叙永县",
	"parent_code": "510500"
}, {"code": "510525", "name": "古蔺县", "parent_code": "510500"}, {
	"code": "510603",
	"name": "旌阳区",
	"parent_code": "510600"
}, {"code": "510623", "name": "中江县", "parent_code": "510600"}, {
	"code": "510626",
	"name": "罗江县",
	"parent_code": "510600"
}, {"code": "510681", "name": "广汉市", "parent_code": "510600"}, {
	"code": "510682",
	"name": "什邡市",
	"parent_code": "510600"
}, {"code": "510683", "name": "绵竹市", "parent_code": "510600"}, {
	"code": "510703",
	"name": "涪城区",
	"parent_code": "510700"
}, {"code": "510704", "name": "游仙区", "parent_code": "510700"}, {
	"code": "510705",
	"name": "安州区",
	"parent_code": "510700"
}, {"code": "510722", "name": "三台县", "parent_code": "510700"}, {
	"code": "510723",
	"name": "盐亭县",
	"parent_code": "510700"
}, {"code": "510725", "name": "梓潼县", "parent_code": "510700"}, {
	"code": "510726",
	"name": "北川羌族自治县",
	"parent_code": "510700"
}, {"code": "510727", "name": "平武县", "parent_code": "510700"}, {
	"code": "510781",
	"name": "江油市",
	"parent_code": "510700"
}, {"code": "510802", "name": "利州区", "parent_code": "510800"}, {
	"code": "510811",
	"name": "昭化区",
	"parent_code": "510800"
}, {"code": "510812", "name": "朝天区", "parent_code": "510800"}, {
	"code": "510821",
	"name": "旺苍县",
	"parent_code": "510800"
}, {"code": "510822", "name": "青川县", "parent_code": "510800"}, {
	"code": "510823",
	"name": "剑阁县",
	"parent_code": "510800"
}, {"code": "510824", "name": "苍溪县", "parent_code": "510800"}, {
	"code": "510903",
	"name": "船山区",
	"parent_code": "510900"
}, {"code": "510904", "name": "安居区", "parent_code": "510900"}, {
	"code": "510921",
	"name": "蓬溪县",
	"parent_code": "510900"
}, {"code": "510922", "name": "射洪县", "parent_code": "510900"}, {
	"code": "510923",
	"name": "大英县",
	"parent_code": "510900"
}, {"code": "511002", "name": "市中区", "parent_code": "511000"}, {
	"code": "511011",
	"name": "东兴区",
	"parent_code": "511000"
}, {"code": "511024", "name": "威远县", "parent_code": "511000"}, {
	"code": "511025",
	"name": "资中县",
	"parent_code": "511000"
}, {"code": "511028", "name": "隆昌县", "parent_code": "511000"}, {
	"code": "511102",
	"name": "市中区",
	"parent_code": "511100"
}, {"code": "511111", "name": "沙湾区", "parent_code": "511100"}, {
	"code": "511112",
	"name": "五通桥区",
	"parent_code": "511100"
}, {"code": "511113", "name": "金口河区", "parent_code": "511100"}, {
	"code": "511123",
	"name": "犍为县",
	"parent_code": "511100"
}, {"code": "511124", "name": "井研县", "parent_code": "511100"}, {
	"code": "511126",
	"name": "夹江县",
	"parent_code": "511100"
}, {"code": "511129", "name": "沐川县", "parent_code": "511100"}, {
	"code": "511132",
	"name": "峨边彝族自治县",
	"parent_code": "511100"
}, {"code": "511133", "name": "马边彝族自治县", "parent_code": "511100"}, {
	"code": "511181",
	"name": "峨眉山市",
	"parent_code": "511100"
}, {"code": "511302", "name": "顺庆区", "parent_code": "511300"}, {
	"code": "511303",
	"name": "高坪区",
	"parent_code": "511300"
}, {"code": "511304", "name": "嘉陵区", "parent_code": "511300"}, {
	"code": "511321",
	"name": "南部县",
	"parent_code": "511300"
}, {"code": "511322", "name": "营山县", "parent_code": "511300"}, {
	"code": "511323",
	"name": "蓬安县",
	"parent_code": "511300"
}, {"code": "511324", "name": "仪陇县", "parent_code": "511300"}, {
	"code": "511325",
	"name": "西充县",
	"parent_code": "511300"
}, {"code": "511381", "name": "阆中市", "parent_code": "511300"}, {
	"code": "511402",
	"name": "东坡区",
	"parent_code": "511400"
}, {"code": "511403", "name": "彭山区", "parent_code": "511400"}, {
	"code": "511421",
	"name": "仁寿县",
	"parent_code": "511400"
}, {"code": "511423", "name": "洪雅县", "parent_code": "511400"}, {
	"code": "511424",
	"name": "丹棱县",
	"parent_code": "511400"
}, {"code": "511425", "name": "青神县", "parent_code": "511400"}, {
	"code": "511502",
	"name": "翠屏区",
	"parent_code": "511500"
}, {"code": "511503", "name": "南溪区", "parent_code": "511500"}, {
	"code": "511521",
	"name": "宜宾县",
	"parent_code": "511500"
}, {"code": "511523", "name": "江安县", "parent_code": "511500"}, {
	"code": "511524",
	"name": "长宁县",
	"parent_code": "511500"
}, {"code": "511525", "name": "高县", "parent_code": "511500"}, {
	"code": "511526",
	"name": "珙县",
	"parent_code": "511500"
}, {"code": "511527", "name": "筠连县", "parent_code": "511500"}, {
	"code": "511528",
	"name": "兴文县",
	"parent_code": "511500"
}, {"code": "511529", "name": "屏山县", "parent_code": "511500"}, {
	"code": "511602",
	"name": "广安区",
	"parent_code": "511600"
}, {"code": "511603", "name": "前锋区", "parent_code": "511600"}, {
	"code": "511621",
	"name": "岳池县",
	"parent_code": "511600"
}, {"code": "511622", "name": "武胜县", "parent_code": "511600"}, {
	"code": "511623",
	"name": "邻水县",
	"parent_code": "511600"
}, {"code": "511681", "name": "华蓥市", "parent_code": "511600"}, {
	"code": "511702",
	"name": "通川区",
	"parent_code": "511700"
}, {"code": "511703", "name": "达川区", "parent_code": "511700"}, {
	"code": "511722",
	"name": "宣汉县",
	"parent_code": "511700"
}, {"code": "511723", "name": "开江县", "parent_code": "511700"}, {
	"code": "511724",
	"name": "大竹县",
	"parent_code": "511700"
}, {"code": "511725", "name": "渠县", "parent_code": "511700"}, {
	"code": "511781",
	"name": "万源市",
	"parent_code": "511700"
}, {"code": "511802", "name": "雨城区", "parent_code": "511800"}, {
	"code": "511803",
	"name": "名山区",
	"parent_code": "511800"
}, {"code": "511822", "name": "荥经县", "parent_code": "511800"}, {
	"code": "511823",
	"name": "汉源县",
	"parent_code": "511800"
}, {"code": "511824", "name": "石棉县", "parent_code": "511800"}, {
	"code": "511825",
	"name": "天全县",
	"parent_code": "511800"
}, {"code": "511826", "name": "芦山县", "parent_code": "511800"}, {
	"code": "511827",
	"name": "宝兴县",
	"parent_code": "511800"
}, {"code": "511902", "name": "巴州区", "parent_code": "511900"}, {
	"code": "511903",
	"name": "恩阳区",
	"parent_code": "511900"
}, {"code": "511921", "name": "通江县", "parent_code": "511900"}, {
	"code": "511922",
	"name": "南江县",
	"parent_code": "511900"
}, {"code": "511923", "name": "平昌县", "parent_code": "511900"}, {
	"code": "512002",
	"name": "雁江区",
	"parent_code": "512000"
}, {"code": "512021", "name": "安岳县", "parent_code": "512000"}, {
	"code": "512022",
	"name": "乐至县",
	"parent_code": "512000"
}, {"code": "513201", "name": "马尔康市", "parent_code": "513200"}, {
	"code": "513221",
	"name": "汶川县",
	"parent_code": "513200"
}, {"code": "513222", "name": "理县", "parent_code": "513200"}, {
	"code": "513223",
	"name": "茂县",
	"parent_code": "513200"
}, {"code": "513224", "name": "松潘县", "parent_code": "513200"}, {
	"code": "513225",
	"name": "九寨沟县",
	"parent_code": "513200"
}, {"code": "513226", "name": "金川县", "parent_code": "513200"}, {
	"code": "513227",
	"name": "小金县",
	"parent_code": "513200"
}, {"code": "513228", "name": "黑水县", "parent_code": "513200"}, {
	"code": "513230",
	"name": "壤塘县",
	"parent_code": "513200"
}, {"code": "513231", "name": "阿坝县", "parent_code": "513200"}, {
	"code": "513232",
	"name": "若尔盖县",
	"parent_code": "513200"
}, {"code": "513233", "name": "红原县", "parent_code": "513200"}, {
	"code": "513301",
	"name": "康定市",
	"parent_code": "513300"
}, {"code": "513322", "name": "泸定县", "parent_code": "513300"}, {
	"code": "513323",
	"name": "丹巴县",
	"parent_code": "513300"
}, {"code": "513324", "name": "九龙县", "parent_code": "513300"}, {
	"code": "513325",
	"name": "雅江县",
	"parent_code": "513300"
}, {"code": "513326", "name": "道孚县", "parent_code": "513300"}, {
	"code": "513327",
	"name": "炉霍县",
	"parent_code": "513300"
}, {"code": "513328", "name": "甘孜县", "parent_code": "513300"}, {
	"code": "513329",
	"name": "新龙县",
	"parent_code": "513300"
}, {"code": "513330", "name": "德格县", "parent_code": "513300"}, {
	"code": "513331",
	"name": "白玉县",
	"parent_code": "513300"
}, {"code": "513332", "name": "石渠县", "parent_code": "513300"}, {
	"code": "513333",
	"name": "色达县",
	"parent_code": "513300"
}, {"code": "513334", "name": "理塘县", "parent_code": "513300"}, {
	"code": "513335",
	"name": "巴塘县",
	"parent_code": "513300"
}, {"code": "513336", "name": "乡城县", "parent_code": "513300"}, {
	"code": "513337",
	"name": "稻城县",
	"parent_code": "513300"
}, {"code": "513338", "name": "得荣县", "parent_code": "513300"}, {
	"code": "513401",
	"name": "西昌市",
	"parent_code": "513400"
}, {"code": "513422", "name": "木里藏族自治县", "parent_code": "513400"}, {
	"code": "513423",
	"name": "盐源县",
	"parent_code": "513400"
}, {"code": "513424", "name": "德昌县", "parent_code": "513400"}, {
	"code": "513425",
	"name": "会理县",
	"parent_code": "513400"
}, {"code": "513426", "name": "会东县", "parent_code": "513400"}, {
	"code": "513427",
	"name": "宁南县",
	"parent_code": "513400"
}, {"code": "513428", "name": "普格县", "parent_code": "513400"}, {
	"code": "513429",
	"name": "布拖县",
	"parent_code": "513400"
}, {"code": "513430", "name": "金阳县", "parent_code": "513400"}, {
	"code": "513431",
	"name": "昭觉县",
	"parent_code": "513400"
}, {"code": "513432", "name": "喜德县", "parent_code": "513400"}, {
	"code": "513433",
	"name": "冕宁县",
	"parent_code": "513400"
}, {"code": "513434", "name": "越西县", "parent_code": "513400"}, {
	"code": "513435",
	"name": "甘洛县",
	"parent_code": "513400"
}, {"code": "513436", "name": "美姑县", "parent_code": "513400"}, {
	"code": "513437",
	"name": "雷波县",
	"parent_code": "513400"
}, {"code": "520102", "name": "南明区", "parent_code": "520100"}, {
	"code": "520103",
	"name": "云岩区",
	"parent_code": "520100"
}, {"code": "520111", "name": "花溪区", "parent_code": "520100"}, {
	"code": "520112",
	"name": "乌当区",
	"parent_code": "520100"
}, {"code": "520113", "name": "白云区", "parent_code": "520100"}, {
	"code": "520115",
	"name": "观山湖区",
	"parent_code": "520100"
}, {"code": "520121", "name": "开阳县", "parent_code": "520100"}, {
	"code": "520122",
	"name": "息烽县",
	"parent_code": "520100"
}, {"code": "520123", "name": "修文县", "parent_code": "520100"}, {
	"code": "520181",
	"name": "清镇市",
	"parent_code": "520100"
}, {"code": "520201", "name": "钟山区", "parent_code": "520200"}, {
	"code": "520203",
	"name": "六枝特区",
	"parent_code": "520200"
}, {"code": "520221", "name": "水城县", "parent_code": "520200"}, {
	"code": "520222",
	"name": "盘县",
	"parent_code": "520200"
}, {"code": "520302", "name": "红花岗区", "parent_code": "520300"}, {
	"code": "520303",
	"name": "汇川区",
	"parent_code": "520300"
}, {"code": "520304", "name": "播州区", "parent_code": "520300"}, {
	"code": "520322",
	"name": "桐梓县",
	"parent_code": "520300"
}, {"code": "520323", "name": "绥阳县", "parent_code": "520300"}, {
	"code": "520324",
	"name": "正安县",
	"parent_code": "520300"
}, {"code": "520325", "name": "道真仡佬族苗族自治县", "parent_code": "520300"}, {
	"code": "520326",
	"name": "务川仡佬族苗族自治县",
	"parent_code": "520300"
}, {"code": "520327", "name": "凤冈县", "parent_code": "520300"}, {
	"code": "520328",
	"name": "湄潭县",
	"parent_code": "520300"
}, {"code": "520329", "name": "余庆县", "parent_code": "520300"}, {
	"code": "520330",
	"name": "习水县",
	"parent_code": "520300"
}, {"code": "520381", "name": "赤水市", "parent_code": "520300"}, {
	"code": "520382",
	"name": "仁怀市",
	"parent_code": "520300"
}, {"code": "520402", "name": "西秀区", "parent_code": "520400"}, {
	"code": "520403",
	"name": "平坝区",
	"parent_code": "520400"
}, {"code": "520422", "name": "普定县", "parent_code": "520400"}, {
	"code": "520423",
	"name": "镇宁布依族苗族自治县",
	"parent_code": "520400"
}, {"code": "520424", "name": "关岭布依族苗族自治县", "parent_code": "520400"}, {
	"code": "520425",
	"name": "紫云苗族布依族自治县",
	"parent_code": "520400"
}, {"code": "520502", "name": "七星关区", "parent_code": "520500"}, {
	"code": "520521",
	"name": "大方县",
	"parent_code": "520500"
}, {"code": "520522", "name": "黔西县", "parent_code": "520500"}, {
	"code": "520523",
	"name": "金沙县",
	"parent_code": "520500"
}, {"code": "520524", "name": "织金县", "parent_code": "520500"}, {
	"code": "520525",
	"name": "纳雍县",
	"parent_code": "520500"
}, {"code": "520526", "name": "威宁彝族回族苗族自治县", "parent_code": "520500"}, {
	"code": "520527",
	"name": "赫章县",
	"parent_code": "520500"
}, {"code": "520602", "name": "碧江区", "parent_code": "520600"}, {
	"code": "520603",
	"name": "万山区",
	"parent_code": "520600"
}, {"code": "520621", "name": "江口县", "parent_code": "520600"}, {
	"code": "520622",
	"name": "玉屏侗族自治县",
	"parent_code": "520600"
}, {"code": "520623", "name": "石阡县", "parent_code": "520600"}, {
	"code": "520624",
	"name": "思南县",
	"parent_code": "520600"
}, {"code": "520625", "name": "印江土家族苗族自治县", "parent_code": "520600"}, {
	"code": "520626",
	"name": "德江县",
	"parent_code": "520600"
}, {"code": "520627", "name": "沿河土家族自治县", "parent_code": "520600"}, {
	"code": "520628",
	"name": "松桃苗族自治县",
	"parent_code": "520600"
}, {"code": "522301", "name": "兴义市", "parent_code": "522300"}, {
	"code": "522322",
	"name": "兴仁县",
	"parent_code": "522300"
}, {"code": "522323", "name": "普安县", "parent_code": "522300"}, {
	"code": "522324",
	"name": "晴隆县",
	"parent_code": "522300"
}, {"code": "522325", "name": "贞丰县", "parent_code": "522300"}, {
	"code": "522326",
	"name": "望谟县",
	"parent_code": "522300"
}, {"code": "522327", "name": "册亨县", "parent_code": "522300"}, {
	"code": "522328",
	"name": "安龙县",
	"parent_code": "522300"
}, {"code": "522601", "name": "凯里市", "parent_code": "522600"}, {
	"code": "522622",
	"name": "黄平县",
	"parent_code": "522600"
}, {"code": "522623", "name": "施秉县", "parent_code": "522600"}, {
	"code": "522624",
	"name": "三穗县",
	"parent_code": "522600"
}, {"code": "522625", "name": "镇远县", "parent_code": "522600"}, {
	"code": "522626",
	"name": "岑巩县",
	"parent_code": "522600"
}, {"code": "522627", "name": "天柱县", "parent_code": "522600"}, {
	"code": "522628",
	"name": "锦屏县",
	"parent_code": "522600"
}, {"code": "522629", "name": "剑河县", "parent_code": "522600"}, {
	"code": "522630",
	"name": "台江县",
	"parent_code": "522600"
}, {"code": "522631", "name": "黎平县", "parent_code": "522600"}, {
	"code": "522632",
	"name": "榕江县",
	"parent_code": "522600"
}, {"code": "522633", "name": "从江县", "parent_code": "522600"}, {
	"code": "522634",
	"name": "雷山县",
	"parent_code": "522600"
}, {"code": "522635", "name": "麻江县", "parent_code": "522600"}, {
	"code": "522636",
	"name": "丹寨县",
	"parent_code": "522600"
}, {"code": "522701", "name": "都匀市", "parent_code": "522700"}, {
	"code": "522702",
	"name": "福泉市",
	"parent_code": "522700"
}, {"code": "522722", "name": "荔波县", "parent_code": "522700"}, {
	"code": "522723",
	"name": "贵定县",
	"parent_code": "522700"
}, {"code": "522725", "name": "瓮安县", "parent_code": "522700"}, {
	"code": "522726",
	"name": "独山县",
	"parent_code": "522700"
}, {"code": "522727", "name": "平塘县", "parent_code": "522700"}, {
	"code": "522728",
	"name": "罗甸县",
	"parent_code": "522700"
}, {"code": "522729", "name": "长顺县", "parent_code": "522700"}, {
	"code": "522730",
	"name": "龙里县",
	"parent_code": "522700"
}, {"code": "522731", "name": "惠水县", "parent_code": "522700"}, {
	"code": "522732",
	"name": "三都水族自治县",
	"parent_code": "522700"
}, {"code": "530102", "name": "五华区", "parent_code": "530100"}, {
	"code": "530103",
	"name": "盘龙区",
	"parent_code": "530100"
}, {"code": "530111", "name": "官渡区", "parent_code": "530100"}, {
	"code": "530112",
	"name": "西山区",
	"parent_code": "530100"
}, {"code": "530113", "name": "东川区", "parent_code": "530100"}, {
	"code": "530114",
	"name": "呈贡区",
	"parent_code": "530100"
}, {"code": "530122", "name": "晋宁县", "parent_code": "530100"}, {
	"code": "530124",
	"name": "富民县",
	"parent_code": "530100"
}, {"code": "530125", "name": "宜良县", "parent_code": "530100"}, {
	"code": "530126",
	"name": "石林彝族自治县",
	"parent_code": "530100"
}, {"code": "530127", "name": "嵩明县", "parent_code": "530100"}, {
	"code": "530128",
	"name": "禄劝彝族苗族自治县",
	"parent_code": "530100"
}, {"code": "530129", "name": "寻甸回族彝族自治县", "parent_code": "530100"}, {
	"code": "530181",
	"name": "安宁市",
	"parent_code": "530100"
}, {"code": "530302", "name": "麒麟区", "parent_code": "530300"}, {
	"code": "530303",
	"name": "沾益区",
	"parent_code": "530300"
}, {"code": "530321", "name": "马龙县", "parent_code": "530300"}, {
	"code": "530322",
	"name": "陆良县",
	"parent_code": "530300"
}, {"code": "530323", "name": "师宗县", "parent_code": "530300"}, {
	"code": "530324",
	"name": "罗平县",
	"parent_code": "530300"
}, {"code": "530325", "name": "富源县", "parent_code": "530300"}, {
	"code": "530326",
	"name": "会泽县",
	"parent_code": "530300"
}, {"code": "530381", "name": "宣威市", "parent_code": "530300"}, {
	"code": "530402",
	"name": "红塔区",
	"parent_code": "530400"
}, {"code": "530403", "name": "江川区", "parent_code": "530400"}, {
	"code": "530422",
	"name": "澄江县",
	"parent_code": "530400"
}, {"code": "530423", "name": "通海县", "parent_code": "530400"}, {
	"code": "530424",
	"name": "华宁县",
	"parent_code": "530400"
}, {"code": "530425", "name": "易门县", "parent_code": "530400"}, {
	"code": "530426",
	"name": "峨山彝族自治县",
	"parent_code": "530400"
}, {"code": "530427", "name": "新平彝族傣族自治县", "parent_code": "530400"}, {
	"code": "530428",
	"name": "元江哈尼族彝族傣族自治县",
	"parent_code": "530400"
}, {"code": "530502", "name": "隆阳区", "parent_code": "530500"}, {
	"code": "530521",
	"name": "施甸县",
	"parent_code": "530500"
}, {"code": "530523", "name": "龙陵县", "parent_code": "530500"}, {
	"code": "530524",
	"name": "昌宁县",
	"parent_code": "530500"
}, {"code": "530581", "name": "腾冲市", "parent_code": "530500"}, {
	"code": "530602",
	"name": "昭阳区",
	"parent_code": "530600"
}, {"code": "530621", "name": "鲁甸县", "parent_code": "530600"}, {
	"code": "530622",
	"name": "巧家县",
	"parent_code": "530600"
}, {"code": "530623", "name": "盐津县", "parent_code": "530600"}, {
	"code": "530624",
	"name": "大关县",
	"parent_code": "530600"
}, {"code": "530625", "name": "永善县", "parent_code": "530600"}, {
	"code": "530626",
	"name": "绥江县",
	"parent_code": "530600"
}, {"code": "530627", "name": "镇雄县", "parent_code": "530600"}, {
	"code": "530628",
	"name": "彝良县",
	"parent_code": "530600"
}, {"code": "530629", "name": "威信县", "parent_code": "530600"}, {
	"code": "530630",
	"name": "水富县",
	"parent_code": "530600"
}, {"code": "530702", "name": "古城区", "parent_code": "530700"}, {
	"code": "530721",
	"name": "玉龙纳西族自治县",
	"parent_code": "530700"
}, {"code": "530722", "name": "永胜县", "parent_code": "530700"}, {
	"code": "530723",
	"name": "华坪县",
	"parent_code": "530700"
}, {"code": "530724", "name": "宁蒗彝族自治县", "parent_code": "530700"}, {
	"code": "530802",
	"name": "思茅区",
	"parent_code": "530800"
}, {"code": "530821", "name": "宁洱哈尼族彝族自治县", "parent_code": "530800"}, {
	"code": "530822",
	"name": "墨江哈尼族自治县",
	"parent_code": "530800"
}, {"code": "530823", "name": "景东彝族自治县", "parent_code": "530800"}, {
	"code": "530824",
	"name": "景谷傣族彝族自治县",
	"parent_code": "530800"
}, {"code": "530825", "name": "镇沅彝族哈尼族拉祜族自治县", "parent_code": "530800"}, {
	"code": "530826",
	"name": "江城哈尼族彝族自治县",
	"parent_code": "530800"
}, {"code": "530827", "name": "孟连傣族拉祜族佤族自治县", "parent_code": "530800"}, {
	"code": "530828",
	"name": "澜沧拉祜族自治县",
	"parent_code": "530800"
}, {"code": "530829", "name": "西盟佤族自治县", "parent_code": "530800"}, {
	"code": "530902",
	"name": "临翔区",
	"parent_code": "530900"
}, {"code": "530921", "name": "凤庆县", "parent_code": "530900"}, {
	"code": "530922",
	"name": "云县",
	"parent_code": "530900"
}, {"code": "530923", "name": "永德县", "parent_code": "530900"}, {
	"code": "530924",
	"name": "镇康县",
	"parent_code": "530900"
}, {"code": "530925", "name": "双江拉祜族佤族布朗族傣族自治县", "parent_code": "530900"}, {
	"code": "530926",
	"name": "耿马傣族佤族自治县",
	"parent_code": "530900"
}, {"code": "530927", "name": "沧源佤族自治县", "parent_code": "530900"}, {
	"code": "532301",
	"name": "楚雄市",
	"parent_code": "532300"
}, {"code": "532322", "name": "双柏县", "parent_code": "532300"}, {
	"code": "532323",
	"name": "牟定县",
	"parent_code": "532300"
}, {"code": "532324", "name": "南华县", "parent_code": "532300"}, {
	"code": "532325",
	"name": "姚安县",
	"parent_code": "532300"
}, {"code": "532326", "name": "大姚县", "parent_code": "532300"}, {
	"code": "532327",
	"name": "永仁县",
	"parent_code": "532300"
}, {"code": "532328", "name": "元谋县", "parent_code": "532300"}, {
	"code": "532329",
	"name": "武定县",
	"parent_code": "532300"
}, {"code": "532331", "name": "禄丰县", "parent_code": "532300"}, {
	"code": "532501",
	"name": "个旧市",
	"parent_code": "532500"
}, {"code": "532502", "name": "开远市", "parent_code": "532500"}, {
	"code": "532503",
	"name": "蒙自市",
	"parent_code": "532500"
}, {"code": "532504", "name": "弥勒市", "parent_code": "532500"}, {
	"code": "532523",
	"name": "屏边苗族自治县",
	"parent_code": "532500"
}, {"code": "532524", "name": "建水县", "parent_code": "532500"}, {
	"code": "532525",
	"name": "石屏县",
	"parent_code": "532500"
}, {"code": "532527", "name": "泸西县", "parent_code": "532500"}, {
	"code": "532528",
	"name": "元阳县",
	"parent_code": "532500"
}, {"code": "532529", "name": "红河县", "parent_code": "532500"}, {
	"code": "532530",
	"name": "金平苗族瑶族傣族自治县",
	"parent_code": "532500"
}, {"code": "532531", "name": "绿春县", "parent_code": "532500"}, {
	"code": "532532",
	"name": "河口瑶族自治县",
	"parent_code": "532500"
}, {"code": "532601", "name": "文山市", "parent_code": "532600"}, {
	"code": "532622",
	"name": "砚山县",
	"parent_code": "532600"
}, {"code": "532623", "name": "西畴县", "parent_code": "532600"}, {
	"code": "532624",
	"name": "麻栗坡县",
	"parent_code": "532600"
}, {"code": "532625", "name": "马关县", "parent_code": "532600"}, {
	"code": "532626",
	"name": "丘北县",
	"parent_code": "532600"
}, {"code": "532627", "name": "广南县", "parent_code": "532600"}, {
	"code": "532628",
	"name": "富宁县",
	"parent_code": "532600"
}, {"code": "532801", "name": "景洪市", "parent_code": "532800"}, {
	"code": "532822",
	"name": "勐海县",
	"parent_code": "532800"
}, {"code": "532823", "name": "勐腊县", "parent_code": "532800"}, {
	"code": "532901",
	"name": "大理市",
	"parent_code": "532900"
}, {"code": "532922", "name": "漾濞彝族自治县", "parent_code": "532900"}, {
	"code": "532923",
	"name": "祥云县",
	"parent_code": "532900"
}, {"code": "532924", "name": "宾川县", "parent_code": "532900"}, {
	"code": "532925",
	"name": "弥渡县",
	"parent_code": "532900"
}, {"code": "532926", "name": "南涧彝族自治县", "parent_code": "532900"}, {
	"code": "532927",
	"name": "巍山彝族回族自治县",
	"parent_code": "532900"
}, {"code": "532928", "name": "永平县", "parent_code": "532900"}, {
	"code": "532929",
	"name": "云龙县",
	"parent_code": "532900"
}, {"code": "532930", "name": "洱源县", "parent_code": "532900"}, {
	"code": "532931",
	"name": "剑川县",
	"parent_code": "532900"
}, {"code": "532932", "name": "鹤庆县", "parent_code": "532900"}, {
	"code": "533102",
	"name": "瑞丽市",
	"parent_code": "533100"
}, {"code": "533103", "name": "芒市", "parent_code": "533100"}, {
	"code": "533122",
	"name": "梁河县",
	"parent_code": "533100"
}, {"code": "533123", "name": "盈江县", "parent_code": "533100"}, {
	"code": "533124",
	"name": "陇川县",
	"parent_code": "533100"
}, {"code": "533301", "name": "泸水市", "parent_code": "533300"}, {
	"code": "533323",
	"name": "福贡县",
	"parent_code": "533300"
}, {"code": "533324", "name": "贡山独龙族怒族自治县", "parent_code": "533300"}, {
	"code": "533325",
	"name": "兰坪白族普米族自治县",
	"parent_code": "533300"
}, {"code": "533401", "name": "香格里拉市", "parent_code": "533400"}, {
	"code": "533422",
	"name": "德钦县",
	"parent_code": "533400"
}, {"code": "533423", "name": "维西傈僳族自治县", "parent_code": "533400"}, {
	"code": "540102",
	"name": "城关区",
	"parent_code": "540100"
}, {"code": "540103", "name": "堆龙德庆区", "parent_code": "540100"}, {
	"code": "540121",
	"name": "林周县",
	"parent_code": "540100"
}, {"code": "540122", "name": "当雄县", "parent_code": "540100"}, {
	"code": "540123",
	"name": "尼木县",
	"parent_code": "540100"
}, {"code": "540124", "name": "曲水县", "parent_code": "540100"}, {
	"code": "540126",
	"name": "达孜县",
	"parent_code": "540100"
}, {"code": "540127", "name": "墨竹工卡县", "parent_code": "540100"}, {
	"code": "540202",
	"name": "桑珠孜区",
	"parent_code": "540200"
}, {"code": "540221", "name": "南木林县", "parent_code": "540200"}, {
	"code": "540222",
	"name": "江孜县",
	"parent_code": "540200"
}, {"code": "540223", "name": "定日县", "parent_code": "540200"}, {
	"code": "540224",
	"name": "萨迦县",
	"parent_code": "540200"
}, {"code": "540225", "name": "拉孜县", "parent_code": "540200"}, {
	"code": "540226",
	"name": "昂仁县",
	"parent_code": "540200"
}, {"code": "540227", "name": "谢通门县", "parent_code": "540200"}, {
	"code": "540228",
	"name": "白朗县",
	"parent_code": "540200"
}, {"code": "540229", "name": "仁布县", "parent_code": "540200"}, {
	"code": "540230",
	"name": "康马县",
	"parent_code": "540200"
}, {"code": "540231", "name": "定结县", "parent_code": "540200"}, {
	"code": "540232",
	"name": "仲巴县",
	"parent_code": "540200"
}, {"code": "540233", "name": "亚东县", "parent_code": "540200"}, {
	"code": "540234",
	"name": "吉隆县",
	"parent_code": "540200"
}, {"code": "540235", "name": "聂拉木县", "parent_code": "540200"}, {
	"code": "540236",
	"name": "萨嘎县",
	"parent_code": "540200"
}, {"code": "540237", "name": "岗巴县", "parent_code": "540200"}, {
	"code": "540302",
	"name": "卡若区",
	"parent_code": "540300"
}, {"code": "540321", "name": "江达县", "parent_code": "540300"}, {
	"code": "540322",
	"name": "贡觉县",
	"parent_code": "540300"
}, {"code": "540323", "name": "类乌齐县", "parent_code": "540300"}, {
	"code": "540324",
	"name": "丁青县",
	"parent_code": "540300"
}, {"code": "540325", "name": "察雅县", "parent_code": "540300"}, {
	"code": "540326",
	"name": "八宿县",
	"parent_code": "540300"
}, {"code": "540327", "name": "左贡县", "parent_code": "540300"}, {
	"code": "540328",
	"name": "芒康县",
	"parent_code": "540300"
}, {"code": "540329", "name": "洛隆县", "parent_code": "540300"}, {
	"code": "540330",
	"name": "边坝县",
	"parent_code": "540300"
}, {"code": "540402", "name": "巴宜区", "parent_code": "540400"}, {
	"code": "540421",
	"name": "工布江达县",
	"parent_code": "540400"
}, {"code": "540422", "name": "米林县", "parent_code": "540400"}, {
	"code": "540423",
	"name": "墨脱县",
	"parent_code": "540400"
}, {"code": "540424", "name": "波密县", "parent_code": "540400"}, {
	"code": "540425",
	"name": "察隅县",
	"parent_code": "540400"
}, {"code": "540426", "name": "朗县", "parent_code": "540400"}, {
	"code": "540502",
	"name": "乃东区",
	"parent_code": "540500"
}, {"code": "540521", "name": "扎囊县", "parent_code": "540500"}, {
	"code": "540522",
	"name": "贡嘎县",
	"parent_code": "540500"
}, {"code": "540523", "name": "桑日县", "parent_code": "540500"}, {
	"code": "540524",
	"name": "琼结县",
	"parent_code": "540500"
}, {"code": "540525", "name": "曲松县", "parent_code": "540500"}, {
	"code": "540526",
	"name": "措美县",
	"parent_code": "540500"
}, {"code": "540527", "name": "洛扎县", "parent_code": "540500"}, {
	"code": "540528",
	"name": "加查县",
	"parent_code": "540500"
}, {"code": "540529", "name": "隆子县", "parent_code": "540500"}, {
	"code": "540530",
	"name": "错那县",
	"parent_code": "540500"
}, {"code": "540531", "name": "浪卡子县", "parent_code": "540500"}, {
	"code": "542421",
	"name": "那曲县",
	"parent_code": "542400"
}, {"code": "542422", "name": "嘉黎县", "parent_code": "542400"}, {
	"code": "542423",
	"name": "比如县",
	"parent_code": "542400"
}, {"code": "542424", "name": "聂荣县", "parent_code": "542400"}, {
	"code": "542425",
	"name": "安多县",
	"parent_code": "542400"
}, {"code": "542426", "name": "申扎县", "parent_code": "542400"}, {
	"code": "542427",
	"name": "索县",
	"parent_code": "542400"
}, {"code": "542428", "name": "班戈县", "parent_code": "542400"}, {
	"code": "542429",
	"name": "巴青县",
	"parent_code": "542400"
}, {"code": "542430", "name": "尼玛县", "parent_code": "542400"}, {
	"code": "542431",
	"name": "双湖县",
	"parent_code": "542400"
}, {"code": "542521", "name": "普兰县", "parent_code": "542500"}, {
	"code": "542522",
	"name": "札达县",
	"parent_code": "542500"
}, {"code": "542523", "name": "噶尔县", "parent_code": "542500"}, {
	"code": "542524",
	"name": "日土县",
	"parent_code": "542500"
}, {"code": "542525", "name": "革吉县", "parent_code": "542500"}, {
	"code": "542526",
	"name": "改则县",
	"parent_code": "542500"
}, {"code": "542527", "name": "措勤县", "parent_code": "542500"}, {
	"code": "610102",
	"name": "新城区",
	"parent_code": "610100"
}, {"code": "610103", "name": "碑林区", "parent_code": "610100"}, {
	"code": "610104",
	"name": "莲湖区",
	"parent_code": "610100"
}, {"code": "610111", "name": "灞桥区", "parent_code": "610100"}, {
	"code": "610112",
	"name": "未央区",
	"parent_code": "610100"
}, {"code": "610113", "name": "雁塔区", "parent_code": "610100"}, {
	"code": "610114",
	"name": "阎良区",
	"parent_code": "610100"
}, {"code": "610115", "name": "临潼区", "parent_code": "610100"}, {
	"code": "610116",
	"name": "长安区",
	"parent_code": "610100"
}, {"code": "610117", "name": "高陵区", "parent_code": "610100"}, {
	"code": "610122",
	"name": "蓝田县",
	"parent_code": "610100"
}, {"code": "610124", "name": "周至县", "parent_code": "610100"}, {
	"code": "610125",
	"name": "户县",
	"parent_code": "610100"
}, {"code": "610202", "name": "王益区", "parent_code": "610200"}, {
	"code": "610203",
	"name": "印台区",
	"parent_code": "610200"
}, {"code": "610204", "name": "耀州区", "parent_code": "610200"}, {
	"code": "610222",
	"name": "宜君县",
	"parent_code": "610200"
}, {"code": "610302", "name": "渭滨区", "parent_code": "610300"}, {
	"code": "610303",
	"name": "金台区",
	"parent_code": "610300"
}, {"code": "610304", "name": "陈仓区", "parent_code": "610300"}, {
	"code": "610322",
	"name": "凤翔县",
	"parent_code": "610300"
}, {"code": "610323", "name": "岐山县", "parent_code": "610300"}, {
	"code": "610324",
	"name": "扶风县",
	"parent_code": "610300"
}, {"code": "610326", "name": "眉县", "parent_code": "610300"}, {
	"code": "610327",
	"name": "陇县",
	"parent_code": "610300"
}, {"code": "610328", "name": "千阳县", "parent_code": "610300"}, {
	"code": "610329",
	"name": "麟游县",
	"parent_code": "610300"
}, {"code": "610330", "name": "凤县", "parent_code": "610300"}, {
	"code": "610331",
	"name": "太白县",
	"parent_code": "610300"
}, {"code": "610402", "name": "秦都区", "parent_code": "610400"}, {
	"code": "610403",
	"name": "杨陵区",
	"parent_code": "610400"
}, {"code": "610404", "name": "渭城区", "parent_code": "610400"}, {
	"code": "610422",
	"name": "三原县",
	"parent_code": "610400"
}, {"code": "610423", "name": "泾阳县", "parent_code": "610400"}, {
	"code": "610424",
	"name": "乾县",
	"parent_code": "610400"
}, {"code": "610425", "name": "礼泉县", "parent_code": "610400"}, {
	"code": "610426",
	"name": "永寿县",
	"parent_code": "610400"
}, {"code": "610427", "name": "彬县", "parent_code": "610400"}, {
	"code": "610428",
	"name": "长武县",
	"parent_code": "610400"
}, {"code": "610429", "name": "旬邑县", "parent_code": "610400"}, {
	"code": "610430",
	"name": "淳化县",
	"parent_code": "610400"
}, {"code": "610431", "name": "武功县", "parent_code": "610400"}, {
	"code": "610481",
	"name": "兴平市",
	"parent_code": "610400"
}, {"code": "610502", "name": "临渭区", "parent_code": "610500"}, {
	"code": "610503",
	"name": "华州区",
	"parent_code": "610500"
}, {"code": "610522", "name": "潼关县", "parent_code": "610500"}, {
	"code": "610523",
	"name": "大荔县",
	"parent_code": "610500"
}, {"code": "610524", "name": "合阳县", "parent_code": "610500"}, {
	"code": "610525",
	"name": "澄城县",
	"parent_code": "610500"
}, {"code": "610526", "name": "蒲城县", "parent_code": "610500"}, {
	"code": "610527",
	"name": "白水县",
	"parent_code": "610500"
}, {"code": "610528", "name": "富平县", "parent_code": "610500"}, {
	"code": "610581",
	"name": "韩城市",
	"parent_code": "610500"
}, {"code": "610582", "name": "华阴市", "parent_code": "610500"}, {
	"code": "610602",
	"name": "宝塔区",
	"parent_code": "610600"
}, {"code": "610603", "name": "安塞区", "parent_code": "610600"}, {
	"code": "610621",
	"name": "延长县",
	"parent_code": "610600"
}, {"code": "610622", "name": "延川县", "parent_code": "610600"}, {
	"code": "610623",
	"name": "子长县",
	"parent_code": "610600"
}, {"code": "610625", "name": "志丹县", "parent_code": "610600"}, {
	"code": "610626",
	"name": "吴起县",
	"parent_code": "610600"
}, {"code": "610627", "name": "甘泉县", "parent_code": "610600"}, {
	"code": "610628",
	"name": "富县",
	"parent_code": "610600"
}, {"code": "610629", "name": "洛川县", "parent_code": "610600"}, {
	"code": "610630",
	"name": "宜川县",
	"parent_code": "610600"
}, {"code": "610631", "name": "黄龙县", "parent_code": "610600"}, {
	"code": "610632",
	"name": "黄陵县",
	"parent_code": "610600"
}, {"code": "610702", "name": "汉台区", "parent_code": "610700"}, {
	"code": "610721",
	"name": "南郑县",
	"parent_code": "610700"
}, {"code": "610722", "name": "城固县", "parent_code": "610700"}, {
	"code": "610723",
	"name": "洋县",
	"parent_code": "610700"
}, {"code": "610724", "name": "西乡县", "parent_code": "610700"}, {
	"code": "610725",
	"name": "勉县",
	"parent_code": "610700"
}, {"code": "610726", "name": "宁强县", "parent_code": "610700"}, {
	"code": "610727",
	"name": "略阳县",
	"parent_code": "610700"
}, {"code": "610728", "name": "镇巴县", "parent_code": "610700"}, {
	"code": "610729",
	"name": "留坝县",
	"parent_code": "610700"
}, {"code": "610730", "name": "佛坪县", "parent_code": "610700"}, {
	"code": "610802",
	"name": "榆阳区",
	"parent_code": "610800"
}, {"code": "610803", "name": "横山区", "parent_code": "610800"}, {
	"code": "610821",
	"name": "神木县",
	"parent_code": "610800"
}, {"code": "610822", "name": "府谷县", "parent_code": "610800"}, {
	"code": "610824",
	"name": "靖边县",
	"parent_code": "610800"
}, {"code": "610825", "name": "定边县", "parent_code": "610800"}, {
	"code": "610826",
	"name": "绥德县",
	"parent_code": "610800"
}, {"code": "610827", "name": "米脂县", "parent_code": "610800"}, {
	"code": "610828",
	"name": "佳县",
	"parent_code": "610800"
}, {"code": "610829", "name": "吴堡县", "parent_code": "610800"}, {
	"code": "610830",
	"name": "清涧县",
	"parent_code": "610800"
}, {"code": "610831", "name": "子洲县", "parent_code": "610800"}, {
	"code": "610902",
	"name": "汉滨区",
	"parent_code": "610900"
}, {"code": "610921", "name": "汉阴县", "parent_code": "610900"}, {
	"code": "610922",
	"name": "石泉县",
	"parent_code": "610900"
}, {"code": "610923", "name": "宁陕县", "parent_code": "610900"}, {
	"code": "610924",
	"name": "紫阳县",
	"parent_code": "610900"
}, {"code": "610925", "name": "岚皋县", "parent_code": "610900"}, {
	"code": "610926",
	"name": "平利县",
	"parent_code": "610900"
}, {"code": "610927", "name": "镇坪县", "parent_code": "610900"}, {
	"code": "610928",
	"name": "旬阳县",
	"parent_code": "610900"
}, {"code": "610929", "name": "白河县", "parent_code": "610900"}, {
	"code": "611002",
	"name": "商州区",
	"parent_code": "611000"
}, {"code": "611021", "name": "洛南县", "parent_code": "611000"}, {
	"code": "611022",
	"name": "丹凤县",
	"parent_code": "611000"
}, {"code": "611023", "name": "商南县", "parent_code": "611000"}, {
	"code": "611024",
	"name": "山阳县",
	"parent_code": "611000"
}, {"code": "611025", "name": "镇安县", "parent_code": "611000"}, {
	"code": "611026",
	"name": "柞水县",
	"parent_code": "611000"
}, {"code": "620102", "name": "城关区", "parent_code": "620100"}, {
	"code": "620103",
	"name": "七里河区",
	"parent_code": "620100"
}, {"code": "620104", "name": "西固区", "parent_code": "620100"}, {
	"code": "620105",
	"name": "安宁区",
	"parent_code": "620100"
}, {"code": "620111", "name": "红古区", "parent_code": "620100"}, {
	"code": "620121",
	"name": "永登县",
	"parent_code": "620100"
}, {"code": "620122", "name": "皋兰县", "parent_code": "620100"}, {
	"code": "620123",
	"name": "榆中县",
	"parent_code": "620100"
}, {"code": "620302", "name": "金川区", "parent_code": "620300"}, {
	"code": "620321",
	"name": "永昌县",
	"parent_code": "620300"
}, {"code": "620402", "name": "白银区", "parent_code": "620400"}, {
	"code": "620403",
	"name": "平川区",
	"parent_code": "620400"
}, {"code": "620421", "name": "靖远县", "parent_code": "620400"}, {
	"code": "620422",
	"name": "会宁县",
	"parent_code": "620400"
}, {"code": "620423", "name": "景泰县", "parent_code": "620400"}, {
	"code": "620502",
	"name": "秦州区",
	"parent_code": "620500"
}, {"code": "620503", "name": "麦积区", "parent_code": "620500"}, {
	"code": "620521",
	"name": "清水县",
	"parent_code": "620500"
}, {"code": "620522", "name": "秦安县", "parent_code": "620500"}, {
	"code": "620523",
	"name": "甘谷县",
	"parent_code": "620500"
}, {"code": "620524", "name": "武山县", "parent_code": "620500"}, {
	"code": "620525",
	"name": "张家川回族自治县",
	"parent_code": "620500"
}, {"code": "620602", "name": "凉州区", "parent_code": "620600"}, {
	"code": "620621",
	"name": "民勤县",
	"parent_code": "620600"
}, {"code": "620622", "name": "古浪县", "parent_code": "620600"}, {
	"code": "620623",
	"name": "天祝藏族自治县",
	"parent_code": "620600"
}, {"code": "620702", "name": "甘州区", "parent_code": "620700"}, {
	"code": "620721",
	"name": "肃南裕固族自治县",
	"parent_code": "620700"
}, {"code": "620722", "name": "民乐县", "parent_code": "620700"}, {
	"code": "620723",
	"name": "临泽县",
	"parent_code": "620700"
}, {"code": "620724", "name": "高台县", "parent_code": "620700"}, {
	"code": "620725",
	"name": "山丹县",
	"parent_code": "620700"
}, {"code": "620802", "name": "崆峒区", "parent_code": "620800"}, {
	"code": "620821",
	"name": "泾川县",
	"parent_code": "620800"
}, {"code": "620822", "name": "灵台县", "parent_code": "620800"}, {
	"code": "620823",
	"name": "崇信县",
	"parent_code": "620800"
}, {"code": "620824", "name": "华亭县", "parent_code": "620800"}, {
	"code": "620825",
	"name": "庄浪县",
	"parent_code": "620800"
}, {"code": "620826", "name": "静宁县", "parent_code": "620800"}, {
	"code": "620902",
	"name": "肃州区",
	"parent_code": "620900"
}, {"code": "620921", "name": "金塔县", "parent_code": "620900"}, {
	"code": "620922",
	"name": "瓜州县",
	"parent_code": "620900"
}, {"code": "620923", "name": "肃北蒙古族自治县", "parent_code": "620900"}, {
	"code": "620924",
	"name": "阿克塞哈萨克族自治县",
	"parent_code": "620900"
}, {"code": "620981", "name": "玉门市", "parent_code": "620900"}, {
	"code": "620982",
	"name": "敦煌市",
	"parent_code": "620900"
}, {"code": "621002", "name": "西峰区", "parent_code": "621000"}, {
	"code": "621021",
	"name": "庆城县",
	"parent_code": "621000"
}, {"code": "621022", "name": "环县", "parent_code": "621000"}, {
	"code": "621023",
	"name": "华池县",
	"parent_code": "621000"
}, {"code": "621024", "name": "合水县", "parent_code": "621000"}, {
	"code": "621025",
	"name": "正宁县",
	"parent_code": "621000"
}, {"code": "621026", "name": "宁县", "parent_code": "621000"}, {
	"code": "621027",
	"name": "镇原县",
	"parent_code": "621000"
}, {"code": "621102", "name": "安定区", "parent_code": "621100"}, {
	"code": "621121",
	"name": "通渭县",
	"parent_code": "621100"
}, {"code": "621122", "name": "陇西县", "parent_code": "621100"}, {
	"code": "621123",
	"name": "渭源县",
	"parent_code": "621100"
}, {"code": "621124", "name": "临洮县", "parent_code": "621100"}, {
	"code": "621125",
	"name": "漳县",
	"parent_code": "621100"
}, {"code": "621126", "name": "岷县", "parent_code": "621100"}, {
	"code": "621202",
	"name": "武都区",
	"parent_code": "621200"
}, {"code": "621221", "name": "成县", "parent_code": "621200"}, {
	"code": "621222",
	"name": "文县",
	"parent_code": "621200"
}, {"code": "621223", "name": "宕昌县", "parent_code": "621200"}, {
	"code": "621224",
	"name": "康县",
	"parent_code": "621200"
}, {"code": "621225", "name": "西和县", "parent_code": "621200"}, {
	"code": "621226",
	"name": "礼县",
	"parent_code": "621200"
}, {"code": "621227", "name": "徽县", "parent_code": "621200"}, {
	"code": "621228",
	"name": "两当县",
	"parent_code": "621200"
}, {"code": "622901", "name": "临夏市", "parent_code": "622900"}, {
	"code": "622921",
	"name": "临夏县",
	"parent_code": "622900"
}, {"code": "622922", "name": "康乐县", "parent_code": "622900"}, {
	"code": "622923",
	"name": "永靖县",
	"parent_code": "622900"
}, {"code": "622924", "name": "广河县", "parent_code": "622900"}, {
	"code": "622925",
	"name": "和政县",
	"parent_code": "622900"
}, {"code": "622926", "name": "东乡族自治县", "parent_code": "622900"}, {
	"code": "622927",
	"name": "积石山保安族东乡族撒拉族自治县",
	"parent_code": "622900"
}, {"code": "623001", "name": "合作市", "parent_code": "623000"}, {
	"code": "623021",
	"name": "临潭县",
	"parent_code": "623000"
}, {"code": "623022", "name": "卓尼县", "parent_code": "623000"}, {
	"code": "623023",
	"name": "舟曲县",
	"parent_code": "623000"
}, {"code": "623024", "name": "迭部县", "parent_code": "623000"}, {
	"code": "623025",
	"name": "玛曲县",
	"parent_code": "623000"
}, {"code": "623026", "name": "碌曲县", "parent_code": "623000"}, {
	"code": "623027",
	"name": "夏河县",
	"parent_code": "623000"
}, {"code": "630102", "name": "城东区", "parent_code": "630100"}, {
	"code": "630103",
	"name": "城中区",
	"parent_code": "630100"
}, {"code": "630104", "name": "城西区", "parent_code": "630100"}, {
	"code": "630105",
	"name": "城北区",
	"parent_code": "630100"
}, {"code": "630121", "name": "大通回族土族自治县", "parent_code": "630100"}, {
	"code": "630122",
	"name": "湟中县",
	"parent_code": "630100"
}, {"code": "630123", "name": "湟源县", "parent_code": "630100"}, {
	"code": "630202",
	"name": "乐都区",
	"parent_code": "630200"
}, {"code": "630203", "name": "平安区", "parent_code": "630200"}, {
	"code": "630222",
	"name": "民和回族土族自治县",
	"parent_code": "630200"
}, {"code": "630223", "name": "互助土族自治县", "parent_code": "630200"}, {
	"code": "630224",
	"name": "化隆回族自治县",
	"parent_code": "630200"
}, {"code": "630225", "name": "循化撒拉族自治县", "parent_code": "630200"}, {
	"code": "632221",
	"name": "门源回族自治县",
	"parent_code": "632200"
}, {"code": "632222", "name": "祁连县", "parent_code": "632200"}, {
	"code": "632223",
	"name": "海晏县",
	"parent_code": "632200"
}, {"code": "632224", "name": "刚察县", "parent_code": "632200"}, {
	"code": "632321",
	"name": "同仁县",
	"parent_code": "632300"
}, {"code": "632322", "name": "尖扎县", "parent_code": "632300"}, {
	"code": "632323",
	"name": "泽库县",
	"parent_code": "632300"
}, {"code": "632324", "name": "河南蒙古族自治县", "parent_code": "632300"}, {
	"code": "632521",
	"name": "共和县",
	"parent_code": "632500"
}, {"code": "632522", "name": "同德县", "parent_code": "632500"}, {
	"code": "632523",
	"name": "贵德县",
	"parent_code": "632500"
}, {"code": "632524", "name": "兴海县", "parent_code": "632500"}, {
	"code": "632525",
	"name": "贵南县",
	"parent_code": "632500"
}, {"code": "632621", "name": "玛沁县", "parent_code": "632600"}, {
	"code": "632622",
	"name": "班玛县",
	"parent_code": "632600"
}, {"code": "632623", "name": "甘德县", "parent_code": "632600"}, {
	"code": "632624",
	"name": "达日县",
	"parent_code": "632600"
}, {"code": "632625", "name": "久治县", "parent_code": "632600"}, {
	"code": "632626",
	"name": "玛多县",
	"parent_code": "632600"
}, {"code": "632701", "name": "玉树市", "parent_code": "632700"}, {
	"code": "632722",
	"name": "杂多县",
	"parent_code": "632700"
}, {"code": "632723", "name": "称多县", "parent_code": "632700"}, {
	"code": "632724",
	"name": "治多县",
	"parent_code": "632700"
}, {"code": "632725", "name": "囊谦县", "parent_code": "632700"}, {
	"code": "632726",
	"name": "曲麻莱县",
	"parent_code": "632700"
}, {"code": "632801", "name": "格尔木市", "parent_code": "632800"}, {
	"code": "632802",
	"name": "德令哈市",
	"parent_code": "632800"
}, {"code": "632821", "name": "乌兰县", "parent_code": "632800"}, {
	"code": "632822",
	"name": "都兰县",
	"parent_code": "632800"
}, {"code": "632823", "name": "天峻县", "parent_code": "632800"}, {
	"code": "640104",
	"name": "兴庆区",
	"parent_code": "640100"
}, {"code": "640105", "name": "西夏区", "parent_code": "640100"}, {
	"code": "640106",
	"name": "金凤区",
	"parent_code": "640100"
}, {"code": "640121", "name": "永宁县", "parent_code": "640100"}, {
	"code": "640122",
	"name": "贺兰县",
	"parent_code": "640100"
}, {"code": "640181", "name": "灵武市", "parent_code": "640100"}, {
	"code": "640202",
	"name": "大武口区",
	"parent_code": "640200"
}, {"code": "640205", "name": "惠农区", "parent_code": "640200"}, {
	"code": "640221",
	"name": "平罗县",
	"parent_code": "640200"
}, {"code": "640302", "name": "利通区", "parent_code": "640300"}, {
	"code": "640303",
	"name": "红寺堡区",
	"parent_code": "640300"
}, {"code": "640323", "name": "盐池县", "parent_code": "640300"}, {
	"code": "640324",
	"name": "同心县",
	"parent_code": "640300"
}, {"code": "640381", "name": "青铜峡市", "parent_code": "640300"}, {
	"code": "640402",
	"name": "原州区",
	"parent_code": "640400"
}, {"code": "640422", "name": "西吉县", "parent_code": "640400"}, {
	"code": "640423",
	"name": "隆德县",
	"parent_code": "640400"
}, {"code": "640424", "name": "泾源县", "parent_code": "640400"}, {
	"code": "640425",
	"name": "彭阳县",
	"parent_code": "640400"
}, {"code": "640502", "name": "沙坡头区", "parent_code": "640500"}, {
	"code": "640521",
	"name": "中宁县",
	"parent_code": "640500"
}, {"code": "640522", "name": "海原县", "parent_code": "640500"}, {
	"code": "650102",
	"name": "天山区",
	"parent_code": "650100"
}, {"code": "650103", "name": "沙依巴克区", "parent_code": "650100"}, {
	"code": "650104",
	"name": "新市区",
	"parent_code": "650100"
}, {"code": "650105", "name": "水磨沟区", "parent_code": "650100"}, {
	"code": "650106",
	"name": "头屯河区",
	"parent_code": "650100"
}, {"code": "650107", "name": "达坂城区", "parent_code": "650100"}, {
	"code": "650109",
	"name": "米东区",
	"parent_code": "650100"
}, {"code": "650121", "name": "乌鲁木齐县", "parent_code": "650100"}, {
	"code": "650202",
	"name": "独山子区",
	"parent_code": "650200"
}, {"code": "650203", "name": "克拉玛依区", "parent_code": "650200"}, {
	"code": "650204",
	"name": "白碱滩区",
	"parent_code": "650200"
}, {"code": "650205", "name": "乌尔禾区", "parent_code": "650200"}, {
	"code": "650402",
	"name": "高昌区",
	"parent_code": "650400"
}, {"code": "650421", "name": "鄯善县", "parent_code": "650400"}, {
	"code": "650422",
	"name": "托克逊县",
	"parent_code": "650400"
}, {"code": "650502", "name": "伊州区", "parent_code": "650500"}, {
	"code": "650521",
	"name": "巴里坤哈萨克自治县",
	"parent_code": "650500"
}, {"code": "650522", "name": "伊吾县", "parent_code": "650500"}, {
	"code": "652301",
	"name": "昌吉市",
	"parent_code": "652300"
}, {"code": "652302", "name": "阜康市", "parent_code": "652300"}, {
	"code": "652323",
	"name": "呼图壁县",
	"parent_code": "652300"
}, {"code": "652324", "name": "玛纳斯县", "parent_code": "652300"}, {
	"code": "652325",
	"name": "奇台县",
	"parent_code": "652300"
}, {"code": "652327", "name": "吉木萨尔县", "parent_code": "652300"}, {
	"code": "652328",
	"name": "木垒哈萨克自治县",
	"parent_code": "652300"
}, {"code": "652701", "name": "博乐市", "parent_code": "652700"}, {
	"code": "652702",
	"name": "阿拉山口市",
	"parent_code": "652700"
}, {"code": "652722", "name": "精河县", "parent_code": "652700"}, {
	"code": "652723",
	"name": "温泉县",
	"parent_code": "652700"
}, {"code": "652801", "name": "库尔勒市", "parent_code": "652800"}, {
	"code": "652822",
	"name": "轮台县",
	"parent_code": "652800"
}, {"code": "652823", "name": "尉犁县", "parent_code": "652800"}, {
	"code": "652824",
	"name": "若羌县",
	"parent_code": "652800"
}, {"code": "652825", "name": "且末县", "parent_code": "652800"}, {
	"code": "652826",
	"name": "焉耆回族自治县",
	"parent_code": "652800"
}, {"code": "652827", "name": "和静县", "parent_code": "652800"}, {
	"code": "652828",
	"name": "和硕县",
	"parent_code": "652800"
}, {"code": "652829", "name": "博湖县", "parent_code": "652800"}, {
	"code": "652901",
	"name": "阿克苏市",
	"parent_code": "652900"
}, {"code": "652922", "name": "温宿县", "parent_code": "652900"}, {
	"code": "652923",
	"name": "库车县",
	"parent_code": "652900"
}, {"code": "652924", "name": "沙雅县", "parent_code": "652900"}, {
	"code": "652925",
	"name": "新和县",
	"parent_code": "652900"
}, {"code": "652926", "name": "拜城县", "parent_code": "652900"}, {
	"code": "652927",
	"name": "乌什县",
	"parent_code": "652900"
}, {"code": "652928", "name": "阿瓦提县", "parent_code": "652900"}, {
	"code": "652929",
	"name": "柯坪县",
	"parent_code": "652900"
}, {"code": "653001", "name": "阿图什市", "parent_code": "653000"}, {
	"code": "653022",
	"name": "阿克陶县",
	"parent_code": "653000"
}, {"code": "653023", "name": "阿合奇县", "parent_code": "653000"}, {
	"code": "653024",
	"name": "乌恰县",
	"parent_code": "653000"
}, {"code": "653101", "name": "喀什市", "parent_code": "653100"}, {
	"code": "653121",
	"name": "疏附县",
	"parent_code": "653100"
}, {"code": "653122", "name": "疏勒县", "parent_code": "653100"}, {
	"code": "653123",
	"name": "英吉沙县",
	"parent_code": "653100"
}, {"code": "653124", "name": "泽普县", "parent_code": "653100"}, {
	"code": "653125",
	"name": "莎车县",
	"parent_code": "653100"
}, {"code": "653126", "name": "叶城县", "parent_code": "653100"}, {
	"code": "653127",
	"name": "麦盖提县",
	"parent_code": "653100"
}, {"code": "653128", "name": "岳普湖县", "parent_code": "653100"}, {
	"code": "653129",
	"name": "伽师县",
	"parent_code": "653100"
}, {"code": "653130", "name": "巴楚县", "parent_code": "653100"}, {
	"code": "653131",
	"name": "塔什库尔干塔吉克自治县",
	"parent_code": "653100"
}, {"code": "653201", "name": "和田市", "parent_code": "653200"}, {
	"code": "653221",
	"name": "和田县",
	"parent_code": "653200"
}, {"code": "653222", "name": "墨玉县", "parent_code": "653200"}, {
	"code": "653223",
	"name": "皮山县",
	"parent_code": "653200"
}, {"code": "653224", "name": "洛浦县", "parent_code": "653200"}, {
	"code": "653225",
	"name": "策勒县",
	"parent_code": "653200"
}, {"code": "653226", "name": "于田县", "parent_code": "653200"}, {
	"code": "653227",
	"name": "民丰县",
	"parent_code": "653200"
}, {"code": "654002", "name": "伊宁市", "parent_code": "654000"}, {
	"code": "654003",
	"name": "奎屯市",
	"parent_code": "654000"
}, {"code": "654004", "name": "霍尔果斯市", "parent_code": "654000"}, {
	"code": "654021",
	"name": "伊宁县",
	"parent_code": "654000"
}, {"code": "654022", "name": "察布查尔锡伯自治县", "parent_code": "654000"}, {
	"code": "654023",
	"name": "霍城县",
	"parent_code": "654000"
}, {"code": "654024", "name": "巩留县", "parent_code": "654000"}, {
	"code": "654025",
	"name": "新源县",
	"parent_code": "654000"
}, {"code": "654026", "name": "昭苏县", "parent_code": "654000"}, {
	"code": "654027",
	"name": "特克斯县",
	"parent_code": "654000"
}, {"code": "654028", "name": "尼勒克县", "parent_code": "654000"}, {
	"code": "654201",
	"name": "塔城市",
	"parent_code": "654200"
}, {"code": "654202", "name": "乌苏市", "parent_code": "654200"}, {
	"code": "654221",
	"name": "额敏县",
	"parent_code": "654200"
}, {"code": "654223", "name": "沙湾县", "parent_code": "654200"}, {
	"code": "654224",
	"name": "托里县",
	"parent_code": "654200"
}, {"code": "654225", "name": "裕民县", "parent_code": "654200"}, {
	"code": "654226",
	"name": "和布克赛尔蒙古自治县",
	"parent_code": "654200"
}, {"code": "654301", "name": "阿勒泰市", "parent_code": "654300"}, {
	"code": "654321",
	"name": "布尔津县",
	"parent_code": "654300"
}, {"code": "654322", "name": "富蕴县", "parent_code": "654300"}, {
	"code": "654323",
	"name": "福海县",
	"parent_code": "654300"
}, {"code": "654324", "name": "哈巴河县", "parent_code": "654300"}, {
	"code": "654325",
	"name": "青河县",
	"parent_code": "654300"
}, {"code": "654326", "name": "吉木乃县", "parent_code": "654300"}, {
	"code": "659001",
	"name": "石河子市",
	"parent_code": "659000"
}, {"code": "659002", "name": "阿拉尔市", "parent_code": "659000"}, {
	"code": "659003",
	"name": "图木舒克市",
	"parent_code": "659000"
}, {"code": "659004", "name": "五家渠市", "parent_code": "659000"}, {
	"code": "659006",
	"name": "铁门关市",
	"parent_code": "659000"
}, {"code": "442000", "name": "中山市", "parent_code": "442000"}, {
	"code": "441900",
	"name": "东莞市",
	"parent_code": "441900"
}];

areas.forEach((area) => {
	const matchCity = cities.filter(city => city.code === area.parent_code)[0];
	if (matchCity) {
		matchCity.children = matchCity.children || [];
		matchCity.children.push({
			label: area.name,
			value: area.name,
		});
	}
});

cities.forEach((city) => {
	const matchProvince = provinces.filter(province => province.code === city.parent_code)[0];
	if (matchProvince) {
		matchProvince.children = matchProvince.children || [];
		matchProvince.children.push({
			label: city.name,
			value: city.name,
			children: city.children,
		});
	}
});

const options = provinces.map(province => ({
	label: province.name,
	value: province.name,
	children: province.children,
}));

export default options;
