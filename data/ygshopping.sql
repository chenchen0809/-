/*
Navicat MySQL Data Transfer

Source Server         : orange
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ygshopping

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-03-25 18:49:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `uid` int(40) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) NOT NULL,
  `userpsw` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('1', '18818880809', 'haha', null);
INSERT INTO `userlist` VALUES ('2', '12345678910', 'haha', null);
INSERT INTO `userlist` VALUES ('3', '10987654321', 'haha', null);
INSERT INTO `userlist` VALUES ('4', '19876543210', 'haha', null);
INSERT INTO `userlist` VALUES ('5', '12345678922', 'haha', null);
INSERT INTO `userlist` VALUES ('6', '12345678233', 'haha', null);
INSERT INTO `userlist` VALUES ('7', '13421730088', 'haha', null);
INSERT INTO `userlist` VALUES ('8', '13421730011', 'haha', null);
INSERT INTO `userlist` VALUES ('9', '13421730022', 'haha', null);
INSERT INTO `userlist` VALUES ('10', '12345678444', 'haha', null);
INSERT INTO `userlist` VALUES ('11', '12345678444', 'haha', null);
INSERT INTO `userlist` VALUES ('12', '12345678444', 'haha', null);
INSERT INTO `userlist` VALUES ('13', '12345678444', 'haha', null);
INSERT INTO `userlist` VALUES ('14', '12345678444', 'haha', null);
INSERT INTO `userlist` VALUES ('15', '12345678444', 'haha', null);
INSERT INTO `userlist` VALUES ('16', '12345678988', 'haha', null);
INSERT INTO `userlist` VALUES ('17', '12345678945', 'haha', null);
INSERT INTO `userlist` VALUES ('18', '13421731166', 'haha', null);
INSERT INTO `userlist` VALUES ('19', '13421077501', 'q123456', null);
INSERT INTO `userlist` VALUES ('20', '15815542582', '12345', null);
INSERT INTO `userlist` VALUES ('21', '12345678999', 'haha', null);

-- ----------------------------
-- Table structure for ygcar
-- ----------------------------
DROP TABLE IF EXISTS `ygcar`;
CREATE TABLE `ygcar` (
  `gid` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `num` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `goodid` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf16le;

-- ----------------------------
-- Records of ygcar
-- ----------------------------
INSERT INTO `ygcar` VALUES ('1', '2', '18818880809', '1');
INSERT INTO `ygcar` VALUES ('2', '5', '18818880809', '7');
INSERT INTO `ygcar` VALUES ('3', '1', '18818880809', '12');
INSERT INTO `ygcar` VALUES ('11', '2', '18818880809', '15');
INSERT INTO `ygcar` VALUES ('7', '8', '18818880809', '22');

-- ----------------------------
-- Table structure for yggoodlist
-- ----------------------------
DROP TABLE IF EXISTS `yggoodlist`;
CREATE TABLE `yggoodlist` (
  `﻿gid` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `before` varchar(255) DEFAULT NULL,
  `finish` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `limitsale` varchar(255) DEFAULT NULL,
  `limitnum` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `ziying` varchar(255) DEFAULT NULL,
  `remain` varchar(255) DEFAULT NULL,
  `goodid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM AUTO_INCREMENT=151 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of yggoodlist
-- ----------------------------
INSERT INTO `yggoodlist` VALUES ('1', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood1.jpg', '波美度高无添加 1斤装1瓶共8瓶', '179.00 ', '199.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '1');
INSERT INTO `yggoodlist` VALUES ('2', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood2.jpg', null, '359.00 ', '399.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '2');
INSERT INTO `yggoodlist` VALUES ('3', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood3.jpg', '服用方便 即可饮用 药食同源', '999.00 ', null, '1', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '3715', '3');
INSERT INTO `yggoodlist` VALUES ('4', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood4.jpg', '药食同源 携带方便', '998.00 ', null, '2', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '642', '4');
INSERT INTO `yggoodlist` VALUES ('5', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood5.jpg', '藏血麦麦片32袋组 富含铁 锌 维生素B族等', '299.00 ', null, '0', '0', null, '10组', '方家铺子官方旗舰店', '方家铺子官方旗舰店', '1169', '5');
INSERT INTO `yggoodlist` VALUES ('6', '滑县道口烧鸡超值组', '../goodimg/listgood6.jpg', '制作技艺历代相传 形成自己的独特风格', '179.00 ', '199.00 ', '36', '4', '限时折扣', '10组', '官方店铺', '自营', '643', '6');
INSERT INTO `yggoodlist` VALUES ('7', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood7.jpg', '传统工艺品质 百年老汤炖煮', '259.00 ', '299.00 ', '57', '1', '限时折扣', '10组', '官方店铺', '自营', '976', '7');
INSERT INTO `yggoodlist` VALUES ('8', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood8.jpg', '微山湖特产 标准化配方调味 美味酥香299.00', '259.00 ', null, '8', '1', '限时折扣', '10组', '官方店铺', '自营', '123', '8');
INSERT INTO `yggoodlist` VALUES ('9', '藏蜜牌30+天然野花蜜限量组', '../goodimg/listgood9.jpg', '国家地理标识认证 欧盟有机认证', '328.00 ', null, '152', '21', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '1791', '9');
INSERT INTO `yggoodlist` VALUES ('10', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood10.jpg', null, '324.00 ', '998.00 ', '2', '1', '限时折扣', '10组', '官方店铺', '自营', '3', '10');
INSERT INTO `yggoodlist` VALUES ('11', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood11.jpg', null, '342.00 ', null, '2', '1', '限时折扣', '10组', '官方店铺', '自营', '55', '11');
INSERT INTO `yggoodlist` VALUES ('12', '北大荒 亲民食品有机挂面 龙须面360g*3袋', '../goodimg/listgood12.jpg', '无添加杂粮 有机挂面', '45.60 ', '998.00 ', '0', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '10000', '12');
INSERT INTO `yggoodlist` VALUES ('13', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood13.jpg', null, '12.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '674', '13');
INSERT INTO `yggoodlist` VALUES ('14', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood14.jpg', null, '98.00 ', null, '0', '0', null, null, '官方店铺', '自营', '535', '14');
INSERT INTO `yggoodlist` VALUES ('15', '佰德隆筋头巴脑超值组', '../goodimg/listgood15.jpg', '浓郁鲜香 营养丰富 健康安全', '258.00 ', '298.00 ', '0', '0', '限时折扣', '10组', '瑞享国际旗舰店', '瑞享国际旗舰店', '241', '15');
INSERT INTO `yggoodlist` VALUES ('16', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood16.jpg', null, '66.00 ', null, '26', '0', '限时折扣', null, '官方店铺', '自营', '515', '16');
INSERT INTO `yggoodlist` VALUES ('17', '滑县道口烧鸡超值组', '../goodimg/listgood17.jpg', null, '168.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '967', '17');
INSERT INTO `yggoodlist` VALUES ('18', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood18.jpg', null, '99.00 ', '123.00 ', '27', '4', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '434', '18');
INSERT INTO `yggoodlist` VALUES ('19', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood19.jpg', null, '188.00 ', null, '54', '1', '限时折扣', '10组', '官方店铺', '自营', '4214', '19');
INSERT INTO `yggoodlist` VALUES ('20', '藏蜜牌30+天然野花蜜限量组', '../goodimg/listgood20.jpg', null, '111.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '1215', '20');
INSERT INTO `yggoodlist` VALUES ('21', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood21.jpg', null, '210.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '215', '21');
INSERT INTO `yggoodlist` VALUES ('22', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood22.jpg', null, '112.00 ', null, '0', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '3', '22');
INSERT INTO `yggoodlist` VALUES ('23', '北大荒 亲民食品有机挂面 龙须面360g*3袋', '../goodimg/listgood23.jpg', null, '234.00 ', '278.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '134', '23');
INSERT INTO `yggoodlist` VALUES ('24', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood24.jpg', null, '321.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '234', '24');
INSERT INTO `yggoodlist` VALUES ('25', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood25.jpg', null, '88.00 ', null, '15', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '65', '25');
INSERT INTO `yggoodlist` VALUES ('26', '佰德隆筋头巴脑超值组', '../goodimg/listgood26.jpg', null, '110.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '4123', '26');
INSERT INTO `yggoodlist` VALUES ('27', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood27.jpg', null, '114.00 ', null, '1', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '23', '27');
INSERT INTO `yggoodlist` VALUES ('28', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood28.jpg', null, '112.00 ', null, '7', '3', '限时折扣', '10组', '官方店铺', '自营', '79', '28');
INSERT INTO `yggoodlist` VALUES ('29', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood29.jpg', null, '120.00 ', '174.00 ', '22', '3', '限时折扣', '10组', '官方店铺', '自营', '670', '29');
INSERT INTO `yggoodlist` VALUES ('30', '滑县道口烧鸡超值组', '../goodimg/listgood30.jpg', null, '78.00 ', null, '47', '4', '限时折扣', '10组', '官方店铺', '自营', '77', '30');
INSERT INTO `yggoodlist` VALUES ('31', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood1.jpg', '波美度高无添加 1斤装1瓶共9瓶', '179.00 ', '199.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '31');
INSERT INTO `yggoodlist` VALUES ('32', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood2.jpg', null, '359.00 ', '399.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '32');
INSERT INTO `yggoodlist` VALUES ('33', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood3.jpg', '服用方便 即可饮用 药食同源', '999.00 ', null, '1', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '3715', '33');
INSERT INTO `yggoodlist` VALUES ('34', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood4.jpg', '药食同源 携带方便', '998.00 ', null, '2', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '642', '34');
INSERT INTO `yggoodlist` VALUES ('35', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood5.jpg', '藏血麦麦片33袋组 富含铁 锌 维生素B族等', '299.00 ', null, '0', '0', null, '10组', '方家铺子官方旗舰店', '方家铺子官方旗舰店', '1169', '35');
INSERT INTO `yggoodlist` VALUES ('36', '滑县道口烧鸡超值组', '../goodimg/listgood6.jpg', '制作技艺历代相传 形成自己的独特风格', '179.00 ', '199.00 ', '36', '4', '限时折扣', '10组', '官方店铺', '自营', '643', '36');
INSERT INTO `yggoodlist` VALUES ('37', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood7.jpg', '传统工艺品质 百年老汤炖煮', '259.00 ', '299.00 ', '57', '1', '限时折扣', '10组', '官方店铺', '自营', '976', '37');
INSERT INTO `yggoodlist` VALUES ('38', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood8.jpg', '微山湖特产 标准化配方调味 美味酥香299.01', '259.00 ', null, '8', '1', '限时折扣', '10组', '官方店铺', '自营', '123', '38');
INSERT INTO `yggoodlist` VALUES ('39', '藏蜜牌31+天然野花蜜限量组', '../goodimg/listgood9.jpg', '国家地理标识认证 欧盟有机认证', '328.00 ', null, '152', '21', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '1791', '39');
INSERT INTO `yggoodlist` VALUES ('40', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood10.jpg', null, '324.00 ', '998.00 ', '2', '1', '限时折扣', '10组', '官方店铺', '自营', '3', '40');
INSERT INTO `yggoodlist` VALUES ('41', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood11.jpg', null, '342.00 ', null, '2', '1', '限时折扣', '10组', '官方店铺', '自营', '55', '41');
INSERT INTO `yggoodlist` VALUES ('42', '北大荒 亲民食品有机挂面 龙须面360g*4袋', '../goodimg/listgood12.jpg', '无添加杂粮 有机挂面', '45.60 ', '998.00 ', '0', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '10000', '42');
INSERT INTO `yggoodlist` VALUES ('43', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood13.jpg', null, '12.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '674', '43');
INSERT INTO `yggoodlist` VALUES ('44', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood14.jpg', null, '98.00 ', null, '0', '0', null, null, '官方店铺', '自营', '535', '44');
INSERT INTO `yggoodlist` VALUES ('45', '佰德隆筋头巴脑超值组', '../goodimg/listgood15.jpg', '浓郁鲜香 营养丰富 健康安全', '258.00 ', '298.00 ', '0', '0', '限时折扣', '10组', '瑞享国际旗舰店', '瑞享国际旗舰店', '241', '45');
INSERT INTO `yggoodlist` VALUES ('46', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood16.jpg', null, '66.00 ', null, '26', '0', '限时折扣', null, '官方店铺', '自营', '515', '46');
INSERT INTO `yggoodlist` VALUES ('47', '滑县道口烧鸡超值组', '../goodimg/listgood17.jpg', null, '168.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '967', '47');
INSERT INTO `yggoodlist` VALUES ('48', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood18.jpg', null, '99.00 ', '123.00 ', '27', '4', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '434', '48');
INSERT INTO `yggoodlist` VALUES ('49', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood19.jpg', null, '188.00 ', null, '54', '1', '限时折扣', '10组', '官方店铺', '自营', '4214', '49');
INSERT INTO `yggoodlist` VALUES ('50', '藏蜜牌31+天然野花蜜限量组', '../goodimg/listgood20.jpg', null, '111.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '1215', '50');
INSERT INTO `yggoodlist` VALUES ('51', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood21.jpg', null, '210.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '215', '51');
INSERT INTO `yggoodlist` VALUES ('52', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood22.jpg', null, '112.00 ', null, '0', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '3', '52');
INSERT INTO `yggoodlist` VALUES ('53', '北大荒 亲民食品有机挂面 龙须面360g*4袋', '../goodimg/listgood23.jpg', null, '234.00 ', '278.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '134', '53');
INSERT INTO `yggoodlist` VALUES ('54', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood24.jpg', null, '321.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '234', '54');
INSERT INTO `yggoodlist` VALUES ('55', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood25.jpg', null, '88.00 ', null, '15', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '65', '55');
INSERT INTO `yggoodlist` VALUES ('56', '佰德隆筋头巴脑超值组', '../goodimg/listgood26.jpg', null, '110.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '4123', '56');
INSERT INTO `yggoodlist` VALUES ('57', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood27.jpg', null, '114.00 ', null, '1', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '23', '57');
INSERT INTO `yggoodlist` VALUES ('58', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood28.jpg', null, '112.00 ', null, '7', '3', '限时折扣', '10组', '官方店铺', '自营', '79', '58');
INSERT INTO `yggoodlist` VALUES ('59', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood29.jpg', null, '120.00 ', '174.00 ', '22', '3', '限时折扣', '10组', '官方店铺', '自营', '670', '59');
INSERT INTO `yggoodlist` VALUES ('60', '滑县道口烧鸡超值组', '../goodimg/listgood30.jpg', null, '78.00 ', null, '47', '4', '限时折扣', '10组', '官方店铺', '自营', '77', '60');
INSERT INTO `yggoodlist` VALUES ('61', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood1.jpg', '波美度高无添加 1斤装1瓶共9瓶', '179.00 ', '199.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '61');
INSERT INTO `yggoodlist` VALUES ('62', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood2.jpg', null, '359.00 ', '399.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '62');
INSERT INTO `yggoodlist` VALUES ('63', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood3.jpg', '服用方便 即可饮用 药食同源', '999.00 ', null, '1', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '3715', '63');
INSERT INTO `yggoodlist` VALUES ('64', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood4.jpg', '药食同源 携带方便', '998.00 ', null, '2', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '642', '64');
INSERT INTO `yggoodlist` VALUES ('65', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood5.jpg', '藏血麦麦片33袋组 富含铁 锌 维生素B族等', '299.00 ', null, '0', '0', null, '10组', '方家铺子官方旗舰店', '方家铺子官方旗舰店', '1169', '65');
INSERT INTO `yggoodlist` VALUES ('66', '滑县道口烧鸡超值组', '../goodimg/listgood6.jpg', '制作技艺历代相传 形成自己的独特风格', '179.00 ', '199.00 ', '36', '4', '限时折扣', '10组', '官方店铺', '自营', '643', '66');
INSERT INTO `yggoodlist` VALUES ('67', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood7.jpg', '传统工艺品质 百年老汤炖煮', '259.00 ', '299.00 ', '57', '1', '限时折扣', '10组', '官方店铺', '自营', '976', '67');
INSERT INTO `yggoodlist` VALUES ('68', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood8.jpg', '微山湖特产 标准化配方调味 美味酥香299.01', '259.00 ', null, '8', '1', '限时折扣', '10组', '官方店铺', '自营', '123', '68');
INSERT INTO `yggoodlist` VALUES ('69', '藏蜜牌31+天然野花蜜限量组', '../goodimg/listgood9.jpg', '国家地理标识认证 欧盟有机认证', '328.00 ', null, '152', '21', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '1791', '69');
INSERT INTO `yggoodlist` VALUES ('70', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood10.jpg', null, '324.00 ', '998.00 ', '2', '1', '限时折扣', '10组', '官方店铺', '自营', '3', '70');
INSERT INTO `yggoodlist` VALUES ('71', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood11.jpg', null, '342.00 ', null, '2', '1', '限时折扣', '10组', '官方店铺', '自营', '55', '71');
INSERT INTO `yggoodlist` VALUES ('72', '北大荒 亲民食品有机挂面 龙须面360g*4袋', '../goodimg/listgood12.jpg', '无添加杂粮 有机挂面', '45.60 ', '998.00 ', '0', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '10000', '72');
INSERT INTO `yggoodlist` VALUES ('73', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood13.jpg', null, '12.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '674', '73');
INSERT INTO `yggoodlist` VALUES ('74', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood14.jpg', null, '98.00 ', null, '0', '0', null, null, '官方店铺', '自营', '535', '74');
INSERT INTO `yggoodlist` VALUES ('75', '佰德隆筋头巴脑超值组', '../goodimg/listgood15.jpg', '浓郁鲜香 营养丰富 健康安全', '258.00 ', '298.00 ', '0', '0', '限时折扣', '10组', '瑞享国际旗舰店', '瑞享国际旗舰店', '241', '75');
INSERT INTO `yggoodlist` VALUES ('76', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood16.jpg', null, '66.00 ', null, '26', '0', '限时折扣', null, '官方店铺', '自营', '515', '76');
INSERT INTO `yggoodlist` VALUES ('77', '滑县道口烧鸡超值组', '../goodimg/listgood17.jpg', null, '168.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '967', '77');
INSERT INTO `yggoodlist` VALUES ('78', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood18.jpg', null, '99.00 ', '123.00 ', '27', '4', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '434', '78');
INSERT INTO `yggoodlist` VALUES ('79', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood19.jpg', null, '188.00 ', null, '54', '1', '限时折扣', '10组', '官方店铺', '自营', '4214', '79');
INSERT INTO `yggoodlist` VALUES ('80', '藏蜜牌31+天然野花蜜限量组', '../goodimg/listgood20.jpg', null, '111.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '1215', '80');
INSERT INTO `yggoodlist` VALUES ('81', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood21.jpg', null, '210.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '215', '81');
INSERT INTO `yggoodlist` VALUES ('82', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood22.jpg', null, '112.00 ', null, '0', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '3', '82');
INSERT INTO `yggoodlist` VALUES ('83', '北大荒 亲民食品有机挂面 龙须面360g*4袋', '../goodimg/listgood23.jpg', null, '234.00 ', '278.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '134', '83');
INSERT INTO `yggoodlist` VALUES ('84', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood24.jpg', null, '321.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '234', '84');
INSERT INTO `yggoodlist` VALUES ('85', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood25.jpg', null, '88.00 ', null, '15', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '65', '85');
INSERT INTO `yggoodlist` VALUES ('86', '佰德隆筋头巴脑超值组', '../goodimg/listgood26.jpg', null, '110.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '4123', '86');
INSERT INTO `yggoodlist` VALUES ('87', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood27.jpg', null, '114.00 ', null, '1', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '23', '87');
INSERT INTO `yggoodlist` VALUES ('88', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood28.jpg', null, '112.00 ', null, '7', '3', '限时折扣', '10组', '官方店铺', '自营', '79', '88');
INSERT INTO `yggoodlist` VALUES ('89', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood29.jpg', null, '120.00 ', '174.00 ', '22', '3', '限时折扣', '10组', '官方店铺', '自营', '670', '89');
INSERT INTO `yggoodlist` VALUES ('90', '滑县道口烧鸡超值组', '../goodimg/listgood30.jpg', null, '78.00 ', null, '47', '4', '限时折扣', '10组', '官方店铺', '自营', '77', '90');
INSERT INTO `yggoodlist` VALUES ('91', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood1.jpg', '波美度高无添加 1斤装1瓶共10瓶', '179.00 ', '199.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '91');
INSERT INTO `yggoodlist` VALUES ('92', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood2.jpg', null, '359.00 ', '399.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '92');
INSERT INTO `yggoodlist` VALUES ('93', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood3.jpg', '服用方便 即可饮用 药食同源', '999.00 ', null, '1', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '3715', '93');
INSERT INTO `yggoodlist` VALUES ('94', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood4.jpg', '药食同源 携带方便', '998.00 ', null, '2', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '642', '94');
INSERT INTO `yggoodlist` VALUES ('95', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood5.jpg', '藏血麦麦片34袋组 富含铁 锌 维生素B族等', '299.00 ', null, '0', '0', null, '10组', '方家铺子官方旗舰店', '方家铺子官方旗舰店', '1169', '95');
INSERT INTO `yggoodlist` VALUES ('96', '滑县道口烧鸡超值组', '../goodimg/listgood6.jpg', '制作技艺历代相传 形成自己的独特风格', '179.00 ', '199.00 ', '36', '4', '限时折扣', '10组', '官方店铺', '自营', '643', '96');
INSERT INTO `yggoodlist` VALUES ('97', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood7.jpg', '传统工艺品质 百年老汤炖煮', '259.00 ', '299.00 ', '57', '1', '限时折扣', '10组', '官方店铺', '自营', '976', '97');
INSERT INTO `yggoodlist` VALUES ('98', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood8.jpg', '微山湖特产 标准化配方调味 美味酥香299.02', '259.00 ', null, '8', '1', '限时折扣', '10组', '官方店铺', '自营', '123', '98');
INSERT INTO `yggoodlist` VALUES ('99', '藏蜜牌32+天然野花蜜限量组', '../goodimg/listgood9.jpg', '国家地理标识认证 欧盟有机认证', '328.00 ', null, '152', '21', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '1791', '99');
INSERT INTO `yggoodlist` VALUES ('100', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood10.jpg', null, '324.00 ', '998.00 ', '2', '1', '限时折扣', '10组', '官方店铺', '自营', '3', '100');
INSERT INTO `yggoodlist` VALUES ('101', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood11.jpg', null, '342.00 ', null, '2', '1', '限时折扣', '10组', '官方店铺', '自营', '55', '101');
INSERT INTO `yggoodlist` VALUES ('102', '北大荒 亲民食品有机挂面 龙须面360g*5袋', '../goodimg/listgood12.jpg', '无添加杂粮 有机挂面', '45.60 ', '998.00 ', '0', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '10000', '102');
INSERT INTO `yggoodlist` VALUES ('103', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood13.jpg', null, '12.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '674', '103');
INSERT INTO `yggoodlist` VALUES ('104', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood14.jpg', null, '98.00 ', null, '0', '0', null, null, '官方店铺', '自营', '535', '104');
INSERT INTO `yggoodlist` VALUES ('105', '佰德隆筋头巴脑超值组', '../goodimg/listgood15.jpg', '浓郁鲜香 营养丰富 健康安全', '258.00 ', '298.00 ', '0', '0', '限时折扣', '10组', '瑞享国际旗舰店', '瑞享国际旗舰店', '241', '105');
INSERT INTO `yggoodlist` VALUES ('106', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood16.jpg', null, '66.00 ', null, '26', '0', '限时折扣', null, '官方店铺', '自营', '515', '106');
INSERT INTO `yggoodlist` VALUES ('107', '滑县道口烧鸡超值组', '../goodimg/listgood17.jpg', null, '168.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '967', '107');
INSERT INTO `yggoodlist` VALUES ('108', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood18.jpg', null, '99.00 ', '123.00 ', '27', '4', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '434', '108');
INSERT INTO `yggoodlist` VALUES ('109', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood19.jpg', null, '188.00 ', null, '54', '1', '限时折扣', '10组', '官方店铺', '自营', '4214', '109');
INSERT INTO `yggoodlist` VALUES ('110', '藏蜜牌32+天然野花蜜限量组', '../goodimg/listgood20.jpg', null, '111.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '1215', '110');
INSERT INTO `yggoodlist` VALUES ('111', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood21.jpg', null, '210.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '215', '111');
INSERT INTO `yggoodlist` VALUES ('112', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood22.jpg', null, '112.00 ', null, '0', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '3', '112');
INSERT INTO `yggoodlist` VALUES ('113', '北大荒 亲民食品有机挂面 龙须面360g*5袋', '../goodimg/listgood23.jpg', null, '234.00 ', '278.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '134', '113');
INSERT INTO `yggoodlist` VALUES ('114', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood24.jpg', null, '321.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '234', '114');
INSERT INTO `yggoodlist` VALUES ('115', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood25.jpg', null, '88.00 ', null, '15', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '65', '115');
INSERT INTO `yggoodlist` VALUES ('116', '佰德隆筋头巴脑超值组', '../goodimg/listgood26.jpg', null, '110.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '4123', '116');
INSERT INTO `yggoodlist` VALUES ('117', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood27.jpg', null, '114.00 ', null, '1', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '23', '117');
INSERT INTO `yggoodlist` VALUES ('118', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood28.jpg', null, '112.00 ', null, '7', '3', '限时折扣', '10组', '官方店铺', '自营', '79', '118');
INSERT INTO `yggoodlist` VALUES ('119', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood29.jpg', null, '120.00 ', '174.00 ', '22', '3', '限时折扣', '10组', '官方店铺', '自营', '670', '119');
INSERT INTO `yggoodlist` VALUES ('120', '滑县道口烧鸡超值组', '../goodimg/listgood30.jpg', null, '78.00 ', null, '47', '4', '限时折扣', '10组', '官方店铺', '自营', '77', '120');
INSERT INTO `yggoodlist` VALUES ('121', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood1.jpg', '波美度高无添加 1斤装1瓶共10瓶', '179.00 ', '199.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '121');
INSERT INTO `yggoodlist` VALUES ('122', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood2.jpg', null, '359.00 ', '399.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '0', '122');
INSERT INTO `yggoodlist` VALUES ('123', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood3.jpg', '服用方便 即可饮用 药食同源', '999.00 ', null, '1', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '3715', '123');
INSERT INTO `yggoodlist` VALUES ('124', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood4.jpg', '药食同源 携带方便', '998.00 ', null, '2', '0', null, null, '方家铺子官方旗舰店', '方家铺子官方旗舰店', '642', '124');
INSERT INTO `yggoodlist` VALUES ('125', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood5.jpg', '藏血麦麦片34袋组 富含铁 锌 维生素B族等', '299.00 ', null, '0', '0', null, '10组', '方家铺子官方旗舰店', '方家铺子官方旗舰店', '1169', '125');
INSERT INTO `yggoodlist` VALUES ('126', '滑县道口烧鸡超值组', '../goodimg/listgood6.jpg', '制作技艺历代相传 形成自己的独特风格', '179.00 ', '199.00 ', '36', '4', '限时折扣', '10组', '官方店铺', '自营', '643', '126');
INSERT INTO `yggoodlist` VALUES ('127', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood7.jpg', '传统工艺品质 百年老汤炖煮', '259.00 ', '299.00 ', '57', '1', '限时折扣', '10组', '官方店铺', '自营', '976', '127');
INSERT INTO `yggoodlist` VALUES ('128', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood8.jpg', '微山湖特产 标准化配方调味 美味酥香299.02', '259.00 ', null, '8', '1', '限时折扣', '10组', '官方店铺', '自营', '123', '128');
INSERT INTO `yggoodlist` VALUES ('129', '藏蜜牌32+天然野花蜜限量组', '../goodimg/listgood9.jpg', '国家地理标识认证 欧盟有机认证', '328.00 ', null, '152', '21', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '1791', '129');
INSERT INTO `yggoodlist` VALUES ('130', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood10.jpg', null, '324.00 ', '998.00 ', '2', '1', '限时折扣', '10组', '官方店铺', '自营', '3', '130');
INSERT INTO `yggoodlist` VALUES ('131', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood11.jpg', null, '342.00 ', null, '2', '1', '限时折扣', '10组', '官方店铺', '自营', '55', '131');
INSERT INTO `yggoodlist` VALUES ('132', '北大荒 亲民食品有机挂面 龙须面360g*5袋', '../goodimg/listgood12.jpg', '无添加杂粮 有机挂面', '45.60 ', '998.00 ', '0', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '10000', '132');
INSERT INTO `yggoodlist` VALUES ('133', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood13.jpg', null, '12.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '674', '133');
INSERT INTO `yggoodlist` VALUES ('134', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood14.jpg', null, '98.00 ', null, '0', '0', null, null, '官方店铺', '自营', '535', '134');
INSERT INTO `yggoodlist` VALUES ('135', '佰德隆筋头巴脑超值组', '../goodimg/listgood15.jpg', '浓郁鲜香 营养丰富 健康安全', '258.00 ', '298.00 ', '0', '0', '限时折扣', '10组', '瑞享国际旗舰店', '瑞享国际旗舰店', '241', '135');
INSERT INTO `yggoodlist` VALUES ('136', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood16.jpg', null, '66.00 ', null, '26', '0', '限时折扣', null, '官方店铺', '自营', '515', '136');
INSERT INTO `yggoodlist` VALUES ('137', '滑县道口烧鸡超值组', '../goodimg/listgood17.jpg', null, '168.00 ', null, '3', '0', '限时折扣', null, '官方店铺', '自营', '967', '137');
INSERT INTO `yggoodlist` VALUES ('138', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood18.jpg', null, '99.00 ', '123.00 ', '27', '4', null, null, '瑞享国际旗舰店', '瑞享国际旗舰店', '434', '138');
INSERT INTO `yggoodlist` VALUES ('139', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood19.jpg', null, '188.00 ', null, '54', '1', '限时折扣', '10组', '官方店铺', '自营', '4214', '139');
INSERT INTO `yggoodlist` VALUES ('140', '藏蜜牌32+天然野花蜜限量组', '../goodimg/listgood20.jpg', null, '111.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '1215', '140');
INSERT INTO `yggoodlist` VALUES ('141', '进然牌东北椴树结晶蜜秒杀组', '../goodimg/listgood21.jpg', null, '210.00 ', null, '0', '0', '限时折扣', '10组', '官方店铺', '自营', '215', '141');
INSERT INTO `yggoodlist` VALUES ('142', '西王牌玉米胚芽保健油特惠组', '../goodimg/listgood22.jpg', null, '112.00 ', null, '0', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '3', '142');
INSERT INTO `yggoodlist` VALUES ('143', '北大荒 亲民食品有机挂面 龙须面360g*5袋', '../goodimg/listgood23.jpg', null, '234.00 ', '278.00 ', '0', '0', '限时折扣', '10组', '官方店铺', '自营', '134', '143');
INSERT INTO `yggoodlist` VALUES ('144', '御品膏方桑椹枸杞草本膏套组', '../goodimg/listgood24.jpg', null, '321.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '234', '144');
INSERT INTO `yggoodlist` VALUES ('145', '调心堂人参玫瑰膏尊享组', '../goodimg/listgood25.jpg', null, '88.00 ', null, '15', '0', null, null, '边走边淘食品旗舰店', '边走边淘食品旗舰店', '65', '145');
INSERT INTO `yggoodlist` VALUES ('146', '佰德隆筋头巴脑超值组', '../goodimg/listgood26.jpg', null, '110.00 ', null, '1', '0', '限时折扣', '10组', '官方店铺', '自营', '4123', '146');
INSERT INTO `yggoodlist` VALUES ('147', '青藏高原农夫天耕藏血麦麦片', '../goodimg/listgood27.jpg', null, '114.00 ', null, '1', '0', null, null, '中国农垦官方旗舰店', '中国农垦官方旗舰店', '23', '147');
INSERT INTO `yggoodlist` VALUES ('148', '保德龍保店驴肉劲爆抢购组', '../goodimg/listgood28.jpg', null, '112.00 ', null, '7', '3', '限时折扣', '10组', '官方店铺', '自营', '79', '148');
INSERT INTO `yggoodlist` VALUES ('149', '微山湖特产南四湖荷叶鸭美味组', '../goodimg/listgood29.jpg', null, '120.00 ', '174.00 ', '22', '3', '限时折扣', '10组', '官方店铺', '自营', '670', '149');
INSERT INTO `yggoodlist` VALUES ('150', '滑县道口烧鸡超值组', '../goodimg/listgood30.jpg', null, '78.00 ', null, '47', '4', '限时折扣', '10组', '官方店铺', '自营', '77', '150');
SET FOREIGN_KEY_CHECKS=1;
