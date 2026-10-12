# 부산대 입시·진학 통계

전국 고교 졸업자 대학 진학률 추이와 부산대학교 수시·정시 입시 커트라인을 한 페이지로 정리한 정적 대시보드입니다.

**👉 https://themoka7.github.io/AI_Maestro_Self_07/**

---

## 무엇을 보여주나

| # | 섹션 | 기간 | 핵심 수치 |
|---|---|---|---|
| ① | 전국 고교 졸업자 대학 진학률 | 2008–2024 | 2008년 83.8%(정점) → 2017년 68.9%(저점) → 2024년 73.6% |
| ② | 부산대 모집 경쟁률 | 2025–2026학년도 | 수시 10.63 → 10.08 · 정시 4.20 → 4.67 |
| ③ | 부산 일반고 4년제 진학률 | 2023–2024 | 77.72% → 76.54% |
| ④ | 수시 학생부교과 70% 컷 | 2025·2026학년도 | 2026 의예 1.07 · 약학 1.44 · 간호 2.08 · 경영 2.52 |
| ⑤ | 정시 국수탐 백분위 70% 컷 | 2025학년도 | 의예(지역인재) 97.41 · 약학 94.33 · 컴퓨터공학 85.00 |

페이지 하단에는 전체 수치 표가 있습니다. 표에는 출처 링크가 붙어 있고 신뢰등급으로 걸러 볼 수 있습니다. 다크모드와 모바일 화면을 지원합니다.

## 데이터 신뢰등급

이 페이지의 수치는 **2차 집계**입니다. 부산대 입학처 원자료와 KESS 교육통계 원자료는 아직 대조하지 못했습니다.
그래서 모든 수치에 출처와 등급을 붙였습니다.

| 등급 | 의미 | 화면 표시 |
|---|---|---|
| **A** | 정부·공공기관 발표, 또는 그것을 직접 인용한 언론 보도 | 진한 막대 |
| **B** | 입시기관(진학사) 집계 | 진한 막대 |
| **C** | 개인 입시 블로그 집계, 공식 자료와 대조하기 전까지 참고용 | 흐린 막대 |

### 알려진 한계

- **전국 진학률 계열이 나뉘어 있습니다.** 발표 기관마다 집계 기준이 달라 세 계열(통계청·교육부 보도, 국가지표체계, 청소년정책분석평가센터)로 따로 그렸습니다. 예를 들어 2016년 값이 출처에 따라 69.8%와 68.4%로 다릅니다. 2009·2010·2018년은 자료가 없어 점선으로 표시합니다.
- **출처마다 값이 다른 항목이 있습니다.** 이런 항목은 `alt` 필드에 다른 값을 남겼습니다. 예: 간호학과 2025 교과 컷 2.22 / 2.25, 경영학과 2025 정시 84.33 / 84.17.
- **2026학년도 교과 컷의 전형 구분이 불확실합니다.** 진학사 표가 일반 교과전형인지 지역인재전형인지 원문에서 확인하지 못해, 일단 일반 교과전형으로 분류했습니다.
- **③과 ①은 직접 비교할 수 없습니다.** ③은 4년제만 집계한 수치이고, ①은 전문대를 포함한 수치입니다.

> 실제 지원 판단은 반드시 [부산대 입학처](https://go.pusan.ac.kr)의 공식 입시결과와 대학어디가 자료로 확인하세요.

## 구조

```
site/
  index.html   화면 — 외부 라이브러리 없는 HTML/CSS/인라인 SVG
  data.js      데이터와 출처 (수치를 바꿀 때는 이 파일만 수정)
.github/workflows/pages.yml   main 에 push 하면 site/ 를 GitHub Pages 로 배포
```

빌드 단계가 없습니다. 로컬에서는 `site/index.html` 을 브라우저로 열면 바로 보입니다.

## 데이터 갱신 방법

`site/data.js` 의 배열에 항목을 추가하거나 고칩니다. 화면은 데이터로부터 자동으로 그려집니다.

```js
// 1) 출처 등록 (tier: A/B/C)
SOURCES.pnuOfficial26 = { tier: "A", name: "부산대 입학처 2026 입시결과", url: "https://..." };

// 2) 수치 추가 — src 에 출처 키를 연결
SUSI_CUT.push({ year: 2026, track: "교과", dept: "국어국문학과", cut: 3.10, field: "인문·사회", src: "pnuOfficial26" });
```

| 배열 | 내용 | 주요 필드 |
|---|---|---|
| `NATIONAL_RATE` | 전국 진학률 (계열별) | `series`, `points[{y, v, src}]` |
| `BUSAN_RATE` | 부산 일반고 4년제 진학률 | `y`, `v`, `src` |
| `PNU_RATIO` | 부산대 경쟁률 | `year`, `kind`(수시/정시), `ratio`, `quota`, `apply` |
| `SUSI_CUT` | 수시 70% 컷 | `year`, `track`, `dept`, `cut`, `field`, `avg?`, `ratio?`, `alt?` |
| `JUNGSI_CUT` | 정시 백분위 70% 컷 | `dept`, `cut`, `field`, `alt?` |

`field` 값은 `의약` `공학` `인문·사회` `사범` `예체능` 중 하나이며, 막대 색을 정합니다.

## 배포

- `main` 브랜치에 push 하면 GitHub Actions 로 자동 배포됩니다(1분 이내).
- 저장소 설정: **Settings → Pages → Source = GitHub Actions**
- `github-pages` environment 는 `main` 에서만 배포를 허용합니다. 다른 브랜치에서 배포하려면 **Settings → Environments → github-pages → Deployment branches** 에 그 브랜치를 추가해야 합니다.

## 주요 출처

- [베리타스알파 — 부산대 2025 입결](https://www.veritas-a.com/news/articleView.html?idxno=549802) · [2025 수시 경쟁률](https://www.veritas-a.com/news/articleView.html?idxno=520467) · [2025 정시 경쟁률](https://www.veritas-a.com/news/articleView.html?idxno=538120) · [부산 일반고 진학률](https://www.veritas-a.com/news/articleView.html?idxno=534485)
- [한국대학신문 — 2026 수시](https://news.unn.net/news/articleView.html?idxno=583876) · [2026 정시](https://news.unn.net/news/articleView.html?idxno=588285)
- [진학사 — 부산대 2026 수시 등급컷](https://www.jinhak.com/jh/high3/univ-entrance-info/ipsi-analysis/ipsi-strategy/100000667)
- [국가지표체계 — 취학률 및 진학률](https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1520) · [청소년정책분석평가센터](https://ypec.re.kr/mps/youthStat/education/collegeEmployRate?menuId=MENU00757)

전체 출처 목록은 `site/data.js` 의 `SOURCES` 에 있습니다.
