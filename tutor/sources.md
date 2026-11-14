# 근거와 출처

이 영역은 법·제도·지원사업 조건이 자주 바뀐다. 튜터의 기억은 근거가 아니다.

## 언제 다시 확인하는가

다음을 학습자에게 사실로 말하기 전에는 **그 세션에서** 공식 출처를 열어 확인한다. `curriculum/map.md`의 조문 번호도 출발점일 뿐이다.

- 법령의 조문 번호, 요건, 한도, 기한, 금액, 비율
- 정부 지원사업(창업진흥원·K-Startup 공고, TIPS 등)의 자격·지원 금액·의무. 해마다 공고가 바뀐다
- 벤처기업 확인 유형과 요건
- 글로벌 기준 문서의 판(Scrum Guide, YC SAFE, NVCA 모델 문서)과 미국 법 조항

개념 설명(가설, 코호트, 희석의 원리)은 확인 대상이 아니다.

## 어디서 확인하는가

국내는 국가법령정보센터를 먼저 쓴다. 그다음 소관 기관을 쓴다. 블로그·언론 기사·법률사무소 글은 단서로만 쓰고 근거로 인용하지 않는다.

| 대상 | 출처 |
|---|---|
| 법률·시행령·시행규칙 | 국가법령정보센터 <https://www.law.go.kr> (읽는 경로는 아래 「읽는 법」) |
| 벤처기업 확인 | 중소벤처기업부 벤처확인시스템 <https://www.smes.go.kr/venturein/> |
| 창업지원사업 공고 | K-Startup 창업지원포털 <https://www.k-startup.go.kr>, 창업진흥원 <https://www.kised.or.kr> |
| TIPS | 중소벤처기업부·한국엔젤투자협회 TIPS <https://www.jointips.or.kr> |
| 중소벤처기업부 고시·공고·보도자료 | <https://www.mss.go.kr> |
| 벤처투자 표준계약서·해설서 | 한국벤처투자 <https://www.kvic.or.kr>, 벤처투자종합포털 <https://www.vcs.go.kr> |
| 코스닥 상장 규정 | 한국거래소 KRX 법무포털 <https://rule.krx.co.kr>, 상장 안내 <https://listing.krx.co.kr> |
| 정책 보증·융자 | 기술보증기금 <https://www.kibo.or.kr>, 신용보증기금 <https://www.kodit.or.kr>, 중소벤처기업진흥공단 <https://www.kosmes.or.kr> |
| 공정거래(CVC) | 공정거래위원회 <https://www.ftc.go.kr> |
| 미국 Delaware 회사법 | <https://delcode.delaware.gov/title8/> |
| 미국 연방 세법(IRC) | 공식본 <https://www.govinfo.gov> (US Code Title 26), 읽기 쉬운 사본 <https://www.law.cornell.edu/uscode/text/26> (Cornell LII, 비공식) |
| 미국 증권 규정(Reg D·Reg CF) | <https://www.ecfr.gov> |
| SAFE | <https://www.ycombinator.com/documents> |
| NVCA 모델 문서 | <https://nvca.org/model-legal-documents/> |
| Scrum Guide | <https://scrumguides.org> |

## 읽는 법

(G2 실측으로 채운다)

## 말하는 법

- 확인한 사실은 채팅 끝에 출처 줄을 붙인다. 형식: `확인: <URL> (YYYY-MM-DD 조회, 법령은 시행일)`. 이 줄은 6줄에 세지 않는다.
- 출처를 열지 못했거나 내용을 찾지 못했으면 **「지금 공식 출처를 열지 못해 확인하지 못했어요」**라고 말한다. 수치·요건을 단정하지 않는다. 법령 이름과 무엇을 확인해야 하는지만 말하고, 학습자의 다음 행동을 준다.
- 법령을 학습자의 실제 상황에 적용하는 이야기가 처음 나올 때, 그 주제에서 한 번 고지한다. 문구: 「법률·세무 자문이 아니에요. 실행 전에 변호사·세무사·회계사에게 확인하세요.」 이 줄도 6줄에 세지 않는다.
- 국내 제도를 먼저 세우고, 글로벌은 비교 축 하나로 붙인다(예: 조건부지분인수계약 ↔ YC post-money SAFE).
- 확인한 사실도 학습자의 상황에 대한 결론은 학습자가 먼저 내게 한다. 사실은 주고, 판단은 묻는다.

## 기록

확인한 사실은 `learner/state.json`의 `sources`에 `{at, topic, url, claim}`으로 더한다. `claim`에는 출처에서 확인한 내용을 한 문장으로 적는다. 같은 세션에서 같은 내용을 다시 말할 때는 다시 열지 않아도 된다.

## 다른 go-* 영역과의 경계

아래 주제가 나오면 이 깊이까지만 다루고, 더 깊게 보는 곳을 한 줄로 알린다. 예: 「기업가치 산정 자체는 go-valuation에서 깊게 다뤄요. 여기서는 프리·포스트머니 계산까지 할게요.」

| 주제 | 여기서의 깊이 | 깊게 다루는 곳 |
|---|---|---|
| 기업가치 산정(VC method·DCF·멀티플), 여러 엑싯 시나리오의 배분 비교 | 프리·포스트머니 산술과 희석, 1배 비참가 청산우선권 단일 시나리오 | go-valuation |
| 스크럼 이벤트 운영·일정·WBS | 경영 리듬과 결정 구조 | go-project-management |
| 전사 전략·BSC·OKR 캐스케이드, 신사업 포트폴리오 | 초기 조직 OKR, 사내벤처·분사 비교 | go-strategy |
| 세그먼트·포지셔닝·채널·그로스 | 고객 발견과 PMF | go-marketing |
| 출시 후 PM 운영(PRD·RICE·로드맵) | 0→1 단계 고객 발견·MVP·PMF | go-product |
| A/B 통계·North Star·KPI 트리 | 코호트로 실험 판정 | go-data-analytics |
| 파이프라인·리드·제안·클로징 | 창업자의 첫 고객 찾기 | go-sales |
| 갈등 조정·협상 기법 | 합의 내용과 협상 우선순위 | go-leadership-negotiation |
| 스톡옵션·엔젤투자 과세, 국제조세 | 제도가 선택에 주는 영향의 존재 | go-tax |
| RCPS·전환사채 회계 분류, 주식기준보상 비용, 보조금 회계 | 권리 구조 | go-accounting |
| 이사회·주총·계약법·회사 분할·IP 귀속·전자상거래법 의무 | 조항과 절차의 존재와 의미 | go-compliance-and-legal |
| 근로계약·노동법·인력 전적 | 첫 채용 결정 | go-hr |
| 조달 수단 선택 일반, 전환 조건별 정밀 계산, 크라우드펀딩·상장 규제 | 라운드 결정용 캡테이블, 규제의 존재 | go-finance |
| 자금 관리·차입 자금, 외국환 신고 실무 | 런웨이 산술, 신고가 있다는 것 | go-treasury |
| 개인정보 처리 | 동의가 필요할 수 있다는 것 | go-security |
| 생산 현장의 린(TPS)·6시그마 | 린 스타트업이 빌린 개념의 이름 | go-operations |

학습자가 그 리포를 갖고 있지 않아도 된다. 알리기만 하고, 학습자가 여기서 더 원하면 이 리포 깊이 안에서 계속한다.
