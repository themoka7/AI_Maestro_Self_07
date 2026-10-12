// 부산대 입시·진학 통계 데이터
// ─────────────────────────────────────────────────────────────
// 모든 수치는 출처(src)와 신뢰등급(tier)을 함께 기록한다.
//   A = 정부·공공기관 발표치 또는 그것을 직접 인용한 언론 보도
//   B = 입시기관(진학사 등) 집계
//   C = 개인 입시 블로그 2차 가공 — 공식 자료와 대조 전까지 참고용
// 같은 항목에 출처마다 값이 다르면 alt 에 다른 값을 남긴다.
// 원자료(부산대 입학처 입시결과, KESS 교육통계)로 교체할 때는 이 파일만 고치면 된다.

window.SOURCES = {
  nocut:     { tier: "A", name: "노컷뉴스 (교과부 발표 인용, 2008)", url: "https://www.nocutnews.co.kr/news/491566" },
  seoul17:   { tier: "A", name: "서울신문 (통계청 발표 인용, 2017)", url: "https://www.seoul.co.kr/news/society/2017/03/24/20170324011020" },
  veritas17: { tier: "A", name: "베리타스알파 — 2017년 대학진학률 68.9%", url: "http://www.veritas-a.com/news/articleView.html?idxno=111393" },
  index1520: { tier: "A", name: "국가지표체계 — 취학률 및 진학률", url: "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1520" },
  ypec:      { tier: "A", name: "청소년정책분석평가센터 — 진학률 및 취업률", url: "https://ypec.re.kr/mps/youthStat/education/collegeEmployRate?menuId=MENU00757" },
  vBusan24:  { tier: "A", name: "베리타스알파 — [2024진학률] 부산 95개 일반고 76.54%", url: "https://www.veritas-a.com/news/articleView.html?idxno=534485" },
  vSusi25:   { tier: "A", name: "베리타스알파 — 부산대 2025수시경쟁률 10.63대1", url: "https://www.veritas-a.com/news/articleView.html?idxno=520467" },
  unnSusi26: { tier: "A", name: "한국대학신문 — 부산대 2026 수시 10.08대1", url: "https://news.unn.net/news/articleView.html?idxno=583876" },
  vJungsi25: { tier: "A", name: "베리타스알파 — 부산대 2025정시경쟁률 4.20대1", url: "https://www.veritas-a.com/news/articleView.html?idxno=538120" },
  unnJungsi26:{ tier: "A", name: "한국대학신문 — 부산대 2026 정시 4.67대1", url: "https://news.unn.net/news/articleView.html?idxno=588285" },
  vIpgyeol25:{ tier: "A", name: "베리타스알파 — 부산대 2025입결, 의예 지역인재 백분위 97.41", url: "https://www.veritas-a.com/news/articleView.html?idxno=549802" },
  jinhak26:  { tier: "B", name: "진학사 — 부산대 2026 수시 등급컷 총정리", url: "https://www.jinhak.com/jh/high3/univ-entrance-info/ipsi-analysis/ipsi-strategy/100000667" },
  namuSusi25:{ tier: "C", name: "나무아카데미 — 2025학년도 수시 전형 (부산대 외)", url: "https://namuacademy.com/bbs/board.php?bo_table=4001&wr_id=417" },
  freshSusi: { tier: "C", name: "freshnewinfo — 부산대 수시 등급컷", url: "https://www.freshnewinfo.com/entry/20252026-%EB%B6%80%EC%82%B0%EB%8C%80%EA%B2%BD%EB%B6%81%EB%8C%80%EC%A0%84%EB%82%A8%EB%8C%80-%EC%88%98%EC%8B%9C-%EB%93%B1%EA%B8%89%EC%BB%B7-%EC%88%98%EC%8B%9C%EB%AA%A8%EC%A7%91-%EC%A0%95%EB%B3%B4" },
  ipsihogu:  { tier: "C", name: "ipsihogu — 2025 부산대 입시결과 분석", url: "https://ipsihogu.com/2025-%EB%B6%80%EC%82%B0%EB%8C%80-%EC%9E%85%EC%8B%9C%EA%B2%B0%EA%B3%BC-%EB%B6%84%EC%84%9D-%EA%B2%BD%EC%9F%81%EB%A5%A0-%EC%88%98%EC%8B%9C%EB%93%B1%EA%B8%89-%EC%A0%95%EC%8B%9C%EB%93%B1%EA%B8%89/" },
  freshJungsi:{ tier: "C", name: "freshnewinfo — 부산대 정시등급컷", url: "https://www.freshnewinfo.com/entry/20252026-%EB%B6%80%EC%82%B0%EB%8C%80-%EC%A0%95%EC%8B%9C%EB%93%B1%EA%B8%89%EC%BB%B7-%EC%A0%95%EC%8B%9C%EB%AA%A8%EC%A7%91-%EC%A0%95%EB%B3%B4" },
};

// ① 전국 고교 졸업자 대학 진학률 (%), 당해 졸업자 중 상급학교 진학자 비율
// 발표 기관·시점마다 집계 기준(국외 진학·개정 여부)이 달라 계열을 분리해 그린다.
window.NATIONAL_RATE = [
  { series: "통계청·교육부 보도", points: [
      { y: 2008, v: 83.8, src: "nocut" },
      { y: 2011, v: 72.5, src: "seoul17" }, { y: 2012, v: 71.3, src: "seoul17" },
      { y: 2013, v: 70.7, src: "seoul17" }, { y: 2014, v: 70.9, src: "seoul17" },
      { y: 2015, v: 70.8, src: "seoul17" }, { y: 2016, v: 69.8, src: "seoul17" },
      { y: 2017, v: 68.9, src: "veritas17" },
  ]},
  { series: "국가지표체계", points: [
      { y: 2016, v: 68.4, src: "index1520" }, { y: 2019, v: 69.4, src: "index1520" },
      { y: 2020, v: 71.0, src: "index1520" }, { y: 2021, v: 72.0, src: "index1520" },
      { y: 2022, v: 73.8, src: "index1520" },
  ]},
  { series: "청소년정책분석평가센터", points: [
      { y: 2023, v: 72.8, src: "ypec", note: "남 69.8 · 여 76.0" },
      { y: 2024, v: 73.6, src: "ypec", note: "남 70.7 · 여 76.7" },
  ]},
];

// ② 부산 일반고 평균 4년제 대학 진학률 (%) — 졸업자 20명 미만 학교 제외, 국내+국외
window.BUSAN_RATE = [
  { y: 2023, v: 77.72, src: "vBusan24" },
  { y: 2024, v: 76.54, src: "vBusan24", note: "95개교 · 1위 성모여고 92.86%" },
];

// ③ 부산대 모집 경쟁률 (대 1)
window.PNU_RATIO = [
  { year: 2025, kind: "수시", ratio: 10.63, alt: "이듬해 보도에서는 10.32로 인용", src: "vSusi25" },
  { year: 2026, kind: "수시", ratio: 10.08, quota: 3455, apply: 34820, src: "unnSusi26" },
  { year: 2025, kind: "정시", ratio: 4.20, quota: 1839, apply: 7715, detail: "가 3.78 · 나 3.93 · 다 14.13", src: "vJungsi25" },
  { year: 2026, kind: "정시", ratio: 4.67, quota: 1714, apply: 7996, detail: "가 4.45 · 나 4.11 · 다 24.22", src: "unnJungsi26" },
];

// ④ 수시 학생부교과 최종등록자 70% 컷 (내신 등급 — 낮을수록 높은 성적)
window.SUSI_CUT = [
  // 2026학년도 입시결과 (진학사 집계)
  { year: 2026, track: "교과", dept: "의예과", cut: 1.07, field: "의약", src: "jinhak26" },
  { year: 2026, track: "지역인재", dept: "의예과", cut: 1.08, field: "의약", src: "jinhak26" },
  { year: 2026, track: "지역인재", dept: "치의예과", cut: 1.38, field: "의약", src: "jinhak26" },
  { year: 2026, track: "교과", dept: "약학부", cut: 1.44, avg: 1.41, ratio: 14.7, field: "의약", src: "jinhak26" },
  { year: 2026, track: "교과", dept: "간호학과", cut: 2.08, avg: 2.04, ratio: 10.9, field: "의약", src: "jinhak26" },
  { year: 2026, track: "교과", dept: "기계공학부", cut: 2.36, avg: 2.27, ratio: 6.6, field: "공학", src: "jinhak26" },
  { year: 2026, track: "교과", dept: "정보컴퓨터공학부(컴퓨터공학)", cut: 2.42, avg: 2.45, ratio: 6.3, field: "공학", src: "jinhak26" },
  { year: 2026, track: "교과", dept: "경영학과", cut: 2.52, avg: 2.33, ratio: 11.1, field: "인문·사회", src: "jinhak26" },
  // 2025학년도 입시결과 (블로그 집계 — 출처 간 편차 있음)
  { year: 2025, track: "교과", dept: "의예과", cut: 1.15, field: "의약", src: "namuSusi25" },
  { year: 2025, track: "교과", dept: "수학교육과", cut: 1.96, field: "사범", src: "freshSusi" },
  { year: 2025, track: "교과", dept: "전기전자공학부(전자공학)", cut: 1.98, field: "공학", src: "freshSusi" },
  { year: 2025, track: "교과", dept: "간호학과", cut: 2.22, alt: "2.25 (ipsihogu)", field: "의약", src: "freshSusi" },
  { year: 2025, track: "교과", dept: "경영학과", cut: 2.46, field: "인문·사회", src: "freshSusi" },
  { year: 2025, track: "교과", dept: "기계공학부", cut: 2.62, field: "공학", src: "freshSusi" },
  { year: 2025, track: "교과", dept: "국어국문학과", cut: 3.91, field: "인문·사회", src: "ipsihogu" },
  { year: 2025, track: "교과", dept: "디자인학과(디자인앤테크놀로지)", cut: 4.06, field: "예체능", src: "ipsihogu" },
  { year: 2025, track: "교과", dept: "바이오산업기계공학과", cut: 4.61, field: "공학", src: "ipsihogu" },
];

// ⑤ 2025학년도 정시 최종등록자 국수탐 백분위 70% 컷 (높을수록 높은 성적)
window.JUNGSI_CUT = [
  { dept: "의예과(지역인재)", cut: 97.41, field: "의약", src: "vIpgyeol25", alt: "블로그 집계 97.33" },
  { dept: "의예과", cut: 97.00, field: "의약", src: "freshJungsi", alt: "98.00 (다른 블로그)" },
  { dept: "약학부", cut: 94.33, field: "의약", src: "freshJungsi" },
  { dept: "화공생명공학과", cut: 87.83, field: "공학", src: "freshJungsi" },
  { dept: "전기전자공학부(전자공학)", cut: 87.50, field: "공학", src: "freshJungsi" },
  { dept: "정보컴퓨터공학부(컴퓨터공학)", cut: 85.00, field: "공학", src: "freshJungsi" },
  { dept: "경영학과", cut: 84.33, field: "인문·사회", src: "freshJungsi", alt: "84.17 (ipsihogu)" },
  { dept: "기계공학부", cut: 84.00, field: "공학", src: "freshJungsi", alt: "83.83 (ipsihogu)" },
  { dept: "경제학부", cut: 83.67, field: "인문·사회", src: "freshJungsi" },
  { dept: "미디어커뮤니케이션학과", cut: 83.67, field: "인문·사회", src: "freshJungsi" },
  { dept: "영어영문학과", cut: 79.00, field: "인문·사회", src: "freshJungsi" },
];
