DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
    `code_numeric` varchar(3) NOT NULL,
    `code_alpha_2` varchar(2) NOT NULL,
    `code_alpha_3` varchar(3) NOT NULL,
    `name` varchar(255) NOT NULL,
    `name_official` varchar(255) NOT NULL,
    PRIMARY KEY (`code_alpha_3`)
);

INSERT INTO `country` VALUES
                           ('533','AW','ABW','Aruba','ARUBA'),
                           ('004','AF','AFG','Afghanistan','AFGHANISTAN'),
                           ('024','AO','AGO','Angola','ANGOLA'),
                           ('008','AL','ALB','Albania','ALBANIA'),
                           ('020','AD','AND','Andorra','ANDORRA'),
                           ('784','AE','ARE','United Arab Emirates','UNITED ARAB EMIRATES'),
                           ('032','AR','ARG','Argentina','ARGENTINA'),
                           ('051','AM','ARM','Armenia','ARMENIA'),
                           ('016','AS','ASM','American Samoa','AMERICAN SAMOA'),
                           ('028','AG','ATG','Antigua and Barbuda','ANTIGUA AND BARBUDA'),
                           ('036','AU','AUS','Australia','AUSTRALIA'),
                           ('040','AT','AUT','Austria','AUSTRIA'),
                           ('031','AZ','AZE','Azerbaijan','AZERBAIJAN'),
                           ('108','BI','BDI','Burundi','BURUNDI'),
                           ('056','BE','BEL','Belgium','BELGIUM'),
                           ('204','BJ','BEN','Benin','BENIN'),
                           ('854','BF','BFA','Burkina Faso','BURKINA FASO'),
                           ('050','BD','BGD','Bangladesh','BANGLADESH'),
                           ('100','BG','BGR','Bulgaria','BULGARIA'),
                           ('048','BH','BHR','Bahrain','BAHRAIN'),
                           ('044','BS','BHS','Bahamas','BAHAMAS'),
                           ('070','BA','BIH','Bosnia and Herzegovina','BOSNIA AND HERZEGOVINA'),
                           ('112','BY','BLR','Belarus','BELARUS'),
                           ('084','BZ','BLZ','Belize','BELIZE'),
                           ('060','BM','BMU','Bermuda','BERMUDA'),
                           ('068','BO','BOL','Bolivia','BOLIVIA'),
                           ('076','BR','BRA','Brazil','BRAZIL'),
                           ('052','BB','BRB','Barbados','BARBADOS'),
                           ('096','BN','BRN','Brunei Darussalam','BRUNEI DARUSSALAM'),
                           ('064','BT','BTN','Bhutan','BHUTAN'),
                           ('072','BW','BWA','Botswana','BOTSWANA'),
                           ('140','CF','CAF','Central African Republic','CENTRAL AFRICAN REPUBLIC'),
                           ('124','CA','CAN','Canada','CANADA'),
                           ('756','CH','CHE','Switzerland','SWITZERLAND'),
                           ('152','CL','CHL','Chile','CHILE'),
                           ('156','CN','CHN','China','CHINA'),
                           ('384','CI','CIV','Cote D\'Ivoire','COTE D\'IVOIRE'),
                           ('120','CM','CMR','Cameroon','CAMEROON'),
                           ('180','CD','COD','Congo, the Democratic Republic of the','CONGO, THE DEMOCRATIC REPUBLIC OF THE'),
                           ('178','CG','COG','Congo','CONGO'),
                           ('170','CO','COL','Colombia','COLOMBIA'),
                           ('174','KM','COM','Comoros','COMOROS'),
                           ('132','CV','CPV','Cape Verde','CAPE VERDE'),
                           ('188','CR','CRI','Costa Rica','COSTA RICA'),
                           ('192','CU','CUB','Cuba','CUBA'),
                           ('599','CW','CUW','Curacao','CURACAO'),
                           ('136','KY','CYM','Cayman Islands','CAYMAN ISLANDS'),
                           ('196','CY','CYP','Cyprus','CYPRUS'),
                           ('203','CZ','CZE','Czech Republic','CZECH REPUBLIC'),
                           ('276','DE','DEU','Germany','GERMANY'),
                           ('262','DJ','DJI','Djibouti','DJIBOUTI'),
                           ('212','DM','DMA','Dominica','DOMINICA'),
                           ('208','DK','DNK','Denmark','DENMARK'),
                           ('214','DO','DOM','Dominican Republic','DOMINICAN REPUBLIC'),
                           ('012','DZ','DZA','Algeria','ALGERIA'),
                           ('218','EC','ECU','Ecuador','ECUADOR'),
                           ('818','EG','EGY','Egypt','EGYPT'),
                           ('232','ER','ERI','Eritrea','ERITREA'),
                           ('724','ES','ESP','Spain','SPAIN'),
                           ('233','EE','EST','Estonia','ESTONIA'),
                           ('231','ET','ETH','Ethiopia','ETHIOPIA'),
                           ('246','FI','FIN','Finland','FINLAND'),
                           ('242','FJ','FJI','Fiji','FIJI'),
                           ('250','FR','FRA','France','FRANCE'),
                           ('234','FO','FRO','Faroe Islands','FAROE ISLANDS'),
                           ('583','FM','FSM','Micronesia, Federated States of','MICRONESIA, FEDERATED STATES OF'),
                           ('266','GA','GAB','Gabon','GABON'),
                           ('826','GB','GBR','United Kingdom','UNITED KINGDOM'),
                           ('268','GE','GEO','Georgia','GEORGIA'),
                           ('288','GH','GHA','Ghana','GHANA'),
                           ('292','GI','GIB','Gibraltar','GIBRALTAR'),
                           ('324','GN','GIN','Guinea','GUINEA'),
                           ('270','GM','GMB','Gambia','GAMBIA'),
                           ('624','GW','GNB','Guinea-Bissau','GUINEA-BISSAU'),
                           ('226','GQ','GNQ','Equatorial Guinea','EQUATORIAL GUINEA'),
                           ('300','GR','GRC','Greece','GREECE'),
                           ('308','GD','GRD','Grenada','GRENADA'),
                           ('304','GL','GRL','Greenland','GREENLAND'),
                           ('320','GT','GTM','Guatemala','GUATEMALA'),
                           ('316','GU','GUM','Guam','GUAM'),
                           ('328','GY','GUY','Guyana','GUYANA'),
                           ('344','HK','HKG','Hong Kong','HONG KONG'),
                           ('340','HN','HND','Honduras','HONDURAS'),
                           ('191','HR','HRV','Croatia','CROATIA'),
                           ('332','HT','HTI','Haiti','HAITI'),
                           ('348','HU','HUN','Hungary','HUNGARY'),
                           ('360','ID','IDN','Indonesia','INDONESIA'),
                           ('044','IM','IMN','Isle Of Man','ISLE OF MAN'),
                           ('356','IN','IND','India','INDIA'),
                           ('372','IE','IRL','Ireland','IRELAND'),
                           ('364','IR','IRN','Iran, Islamic Republic of','IRAN, ISLAMIC REPUBLIC OF'),
                           ('368','IQ','IRQ','Iraq','IRAQ'),
                           ('352','IS','ISL','Iceland','ICELAND'),
                           ('376','IL','ISR','Israel','ISRAEL'),
                           ('380','IT','ITA','Italy','ITALY'),
                           ('388','JM','JAM','Jamaica','JAMAICA'),
                           ('400','JO','JOR','Jordan','JORDAN'),
                           ('392','JP','JPN','Japan','JAPAN'),
                           ('398','KZ','KAZ','Kazakhstan','KAZAKHSTAN'),
                           ('404','KE','KEN','Kenya','KENYA'),
                           ('417','KG','KGZ','Kyrgyzstan','KYRGYZSTAN'),
                           ('116','KH','KHM','Cambodia','CAMBODIA'),
                           ('296','KI','KIR','Kiribati','KIRIBATI'),
                           ('659','KN','KNA','Saint Kitts and Nevis','SAINT KITTS AND NEVIS'),
                           ('410','KR','KOR','Korea, Republic of','KOREA, REPUBLIC OF'),
                           ('414','KW','KWT','Kuwait','KUWAIT'),
                           ('418','LA','LAO','Lao People\'s Democratic Republic','LAO PEOPLE\'S DEMOCRATIC REPUBLIC'),
                           ('422','LB','LBN','Lebanon','LEBANON'),
                           ('430','LR','LBR','Liberia','LIBERIA'),
                           ('434','LY','LBY','Libyan Arab Jamahiriya','LIBYAN ARAB JAMAHIRIYA'),
                           ('662','LC','LCA','Saint Lucia','SAINT LUCIA'),
                           ('438','LI','LIE','Liechtenstein','LIECHTENSTEIN'),
                           ('144','LK','LKA','Sri Lanka','SRI LANKA'),
                           ('426','LS','LSO','Lesotho','LESOTHO'),
                           ('440','LT','LTU','Lithuania','LITHUANIA'),
                           ('442','LU','LUX','Luxembourg','LUXEMBOURG'),
                           ('428','LV','LVA','Latvia','LATVIA'),
                           ('446','MO','MAC','Macao','MACAO'),
                           ('590','MF','MAF','Saint Martin','SAINT MARTIN'),
                           ('504','MA','MAR','Morocco','MOROCCO'),
                           ('492','MC','MCO','Monaco','MONACO'),
                           ('498','MD','MDA','Moldova, Republic of','MOLDOVA, REPUBLIC OF'),
                           ('450','MG','MDG','Madagascar','MADAGASCAR'),
                           ('462','MV','MDV','Maldives','MALDIVES'),
                           ('484','MX','MEX','Mexico','MEXICO'),
                           ('584','MH','MHL','Marshall Islands','MARSHALL ISLANDS'),
                           ('807','MK','MKD','Macedonia, the Former Yugoslav Republic of','MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF'),
                           ('466','ML','MLI','Mali','MALI'),
                           ('470','MT','MLT','Malta','MALTA'),
                           ('104','MM','MMR','Myanmar','MYANMAR'),
                           ('382','ME','MNE','Montenegro','MONTENEGRO'),
                           ('496','MN','MNG','Mongolia','MONGOLIA'),
                           ('580','MP','MNP','Northern Mariana Islands','NORTHERN MARIANA ISLANDS'),
                           ('508','MZ','MOZ','Mozambique','MOZAMBIQUE'),
                           ('478','MR','MRT','Mauritania','MAURITANIA'),
                           ('480','MU','MUS','Mauritius','MAURITIUS'),
                           ('454','MW','MWI','Malawi','MALAWI'),
                           ('458','MY','MYS','Malaysia','MALAYSIA'),
                           ('516','NA','NAM','Namibia','NAMIBIA'),
                           ('540','NC','NCL','New Caledonia','NEW CALEDONIA'),
                           ('562','NE','NER','Niger','NIGER'),
                           ('566','NG','NGA','Nigeria','NIGERIA'),
                           ('558','NI','NIC','Nicaragua','NICARAGUA'),
                           ('528','NL','NLD','Netherlands','NETHERLANDS'),
                           ('578','NO','NOR','Norway','NORWAY'),
                           ('524','NP','NPL','Nepal','NEPAL'),
                           ('520','NR','NRU','Nauru','NAURU'),
                           ('554','NZ','NZL','New Zealand','NEW ZEALAND'),
                           ('512','OM','OMN','Oman','OMAN'),
                           ('586','PK','PAK','Pakistan','PAKISTAN'),
                           ('591','PA','PAN','Panama','PANAMA'),
                           ('604','PE','PER','Peru','PERU'),
                           ('608','PH','PHL','Philippines','PHILIPPINES'),
                           ('585','PW','PLW','Palau','PALAU'),
                           ('598','PG','PNG','Papua New Guinea','PAPUA NEW GUINEA'),
                           ('616','PL','POL','Poland','POLAND'),
                           ('630','PR','PRI','Puerto Rico','PUERTO RICO'),
                           ('408','KP','PRK','Korea, Democratic People\'s Republic of','KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF'),
                           ('620','PT','PRT','Portugal','PORTUGAL'),
                           ('600','PY','PRY','Paraguay','PARAGUAY'),
                           ('970','PS','PSE','West Bank and Gaza','WEST BANK AND GAZA'),
                           ('258','PF','PYF','French Polynesia','FRENCH POLYNESIA'),
                           ('634','QA','QAT','Qatar','QATAR'),
                           ('040','RO','ROU','Romania','ROMANIA'),
                           ('643','RU','RUS','Russian Federation','RUSSIAN FEDERATION'),
                           ('646','RW','RWA','Rwanda','RWANDA'),
                           ('682','SA','SAU','Saudi Arabia','SAUDI ARABIA'),
                           ('736','SD','SDN','Sudan','SUDAN'),
                           ('686','SN','SEN','Senegal','SENEGAL'),
                           ('702','SG','SGP','Singapore','SINGAPORE'),
                           ('090','SB','SLB','Solomon Islands','SOLOMON ISLANDS'),
                           ('694','SL','SLE','Sierra Leone','SIERRA LEONE'),
                           ('222','SV','SLV','El Salvador','EL SALVADOR'),
                           ('674','SM','SMR','San Marino','SAN MARINO'),
                           ('706','SO','SOM','Somalia','SOMALIA'),
                           ('381','RS','SRB','Serbia','SERBIA'),
                           ('211','SS','SSD','South Sudan','SOUTH SUDAN'),
                           ('678','ST','STP','Sao Tome and Principe','SAO TOME AND PRINCIPE'),
                           ('740','SR','SUR','Suriname','SURINAME'),
                           ('703','SK','SVK','Slovakia','SLOVAKIA'),
                           ('705','SI','SVN','Slovenia','SLOVENIA'),
                           ('752','SE','SWE','Sweden','SWEDEN'),
                           ('748','SZ','SWZ','Swaziland','SWAZILAND'),
                           ('001','SX','SXM','Sint Maarten (Dutch part)','SINT MAARTEN (DUTCH PART)'),
                           ('690','SC','SYC','Seychelles','SEYCHELLES'),
                           ('760','SY','SYR','Syrian Arab Republic','SYRIAN ARAB REPUBLIC'),
                           ('796','TC','TCA','Turks and Caicos Islands','TURKS AND CAICOS ISLANDS'),
                           ('148','TD','TCD','Chad','CHAD'),
                           ('768','TG','TGO','Togo','TOGO'),
                           ('764','TH','THA','Thailand','THAILAND'),
                           ('762','TJ','TJK','Tajikistan','TAJIKISTAN'),
                           ('795','TM','TKM','Turkmenistan','TURKMENISTAN'),
                           ('670','TL','TLS','Timor-Leste','TIMOR-LESTE'),
                           ('776','TO','TON','Tonga','TONGA'),
                           ('780','TT','TTO','Trinidad and Tobago','TRINIDAD AND TOBAGO'),
                           ('788','TN','TUN','Tunisia','TUNISIA'),
                           ('792','TR','TUR','Turkey','TURKEY'),
                           ('798','TV','TUV','Tuvalu','TUVALU'),
                           ('834','TZ','TZA','Tanzania, United Republic of','TANZANIA, UNITED REPUBLIC OF'),
                           ('800','UG','UGA','Uganda','UGANDA'),
                           ('804','UA','UKR','Ukraine','UKRAINE'),
                           ('858','UY','URY','Uruguay','URUGUAY'),
                           ('840','US','USA','United States','UNITED STATES'),
                           ('860','UZ','UZB','Uzbekistan','UZBEKISTAN'),
                           ('670','VC','VCT','Saint Vincent and the Grenadines','SAINT VINCENT AND THE GRENADINES'),
                           ('862','VE','VEN','Venezuela','VENEZUELA'),
                           ('092','VG','VGB','Virgin Islands, British','VIRGIN ISLANDS, BRITISH'),
                           ('850','VI','VIR','Virgin Islands, U.s.','VIRGIN ISLANDS, U.S.'),
                           ('704','VN','VNM','Viet Nam','VIET NAM'),
                           ('548','VU','VUT','Vanuatu','VANUATU'),
                           ('882','WS','WSM','Samoa','SAMOA'),
                           ('383','XK','XKX','Kosovo','KOSOVO'),
                           ('887','YE','YEM','Yemen','YEMEN'),
                           ('710','ZA','ZAF','South Africa','SOUTH AFRICA'),
                           ('894','ZM','ZMB','Zambia','ZAMBIA'),
                           ('716','ZW','ZWE','Zimbabwe','ZIMBABWE');
