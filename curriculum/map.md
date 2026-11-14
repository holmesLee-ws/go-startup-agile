# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 수준·목표에 맞춰 조사하고 만든다.

- 기본 순서는 P → L → A → K → F → X다. 선수 관계만 지키면 학습자의 목표에 맞춰 순서를 바꿔도 된다. 예: 투자 미팅이 코앞인 학습자는 P1 뒤에 F로 가도 된다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 「국내 근거」의 조문 번호는 아래 출처 절의 조회일 기준이다. 세션에서 쓰기 전에 [tutor/sources.md](../tutor/sources.md)대로 다시 확인한다. 정부 지원사업은 해마다 공고가 바뀌므로 이름과 운영 기관만 적는다.
- 「경계·연결」은 다른 go-* 리포가 깊게 다루는 주제다. 여기서는 그 줄에 적은 깊이까지만 다룬다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- `node tools/check.mjs`로 형식과 선수 관계를 검사한다(리포 관리자용, 학습자에게는 필요 없다).

## P · 문제와 고객

### P1 · 문제 정의와 가설
- 선수: 없음
- 핵심 질문: 내가 풀려는 것은 누구의 어떤 문제이고, 무엇이 사실이고 무엇이 가정인가?
- 목표: Apply — 아이디어를 문제·고객·가정으로 나누고 검증할 가설 문장으로 바꾼다.
- 만들어 볼 것: 내 아이디어(또는 사내 신사업 안)의 가정 목록과 가장 위험한 가정 하나
- 국내 근거: 법정 기준 없음 — 국내 맥락: 창업진흥원 창업지원사업 공고의 사업계획서 양식이 문제 인식을 묻는다(항목 구성은 공고별 확인)
- 글로벌 비교: Customer Development의 가설 정리(Blank), Lean Canvas의 문제 칸(Maurya)
- 근거: Blank·Dorf(2012), Ries(2011)

### P2 · 고객 발견 인터뷰
- 선수: P1
- 핵심 질문: 고객이 하는 말과 실제로 하는 일을 어떻게 구분해 듣는가?
- 목표: Apply — 유도하지 않는 인터뷰 질문을 짜고, 답을 사실·의견·미래 약속으로 나눠 기록한다.
- 만들어 볼 것: 인터뷰 질문지와 실제 또는 모의 인터뷰 1건의 기록·해석
- 국내 근거: 법정 기준 없음 — 국내 맥락: 인터뷰 녹음·기록은 개인정보 보호법의 수집·이용 동의 대상이 될 수 있다
- 글로벌 비교: Customer Development의 고객 발견 단계(Blank), The Mom Test(Fitzpatrick)
- 경계·연결: 인터뷰 자료의 개인정보 처리는 go-security, 출시 후 PM의 사용자 조사는 go-product
- 근거: Blank·Dorf(2012), Fitzpatrick(2013)

### P3 · 얼리어답터와 첫 고객
- 선수: P2
- 핵심 질문: 모두가 아니라 누가 지금 당장 이 문제에 돈과 시간을 쓰는가?
- 목표: Evaluate — 고객군 후보를 문제의 절박함·지불 의사·접근성으로 비교해 첫 고객군을 고른다.
- 만들어 볼 것: 고객군 후보 비교표와 첫 고객군 선택 근거
- 국내 근거: 법정 기준 없음 — 국내 맥락: 공공·대기업 고객은 조달·구매 절차가 첫 고객 확보 기간을 좌우한다
- 글로벌 비교: Moore의 캐즘과 얼리어답터, Blank의 earlyvangelist
- 경계·연결: 시장 세분화·포지셔닝 전반은 go-marketing, 영업 파이프라인은 go-sales
- 근거: Moore(2014), Blank·Dorf(2012)

### P4 · 가치 제안과 비즈니스 모델
- 선수: P3
- 핵심 질문: 고객이 얻는 가치와 내가 돈을 버는 구조가 어떻게 한 그림으로 맞물리는가?
- 목표: Evaluate — 두 가지 수익 구조를 단위 경제성(고객당 매출·획득 비용)으로 비교해 고른다.
- 만들어 볼 것: 내 사업의 Lean Canvas 또는 Business Model Canvas와 수익 구조 비교 메모
- 국내 근거: 법정 기준 없음 — 국내 맥락: 플랫폼·중개 모델은 전자상거래법상 통신판매중개자 지위가 걸릴 수 있다
- 글로벌 비교: Business Model Canvas(Osterwalder·Pigneur), Value Proposition Canvas
- 경계·연결: 가격 전략은 go-marketing, 전자상거래법 의무는 go-compliance-and-legal
- 근거: Osterwalder·Pigneur(2010), Maurya(2012)

## L · 린 실험과 제품

### L1 · MVP와 실험 설계
- 선수: P4
- 핵심 질문: 가장 위험한 가정을 가장 싸고 빠르게 검증하려면 무엇을 만들어야 하는가?
- 목표: Apply — 가설·지표·성공 기준·기간을 미리 정한 실험을 설계한다.
- 만들어 볼 것: 가장 위험한 가정 하나를 검증하는 실험 카드(가설, MVP 형태, 지표, 기준, 기한)
- 국내 근거: 법정 기준 없음 — 국내 맥락: 규제가 걸린 서비스의 실증은 규제 샌드박스(정보통신융합법·산업융합 촉진법 등의 실증특례) 경로가 있다
- 글로벌 비교: Build-Measure-Learn과 MVP(Ries), 실험 카드·Test Card(Strategyzer)
- 경계·연결: 유료 MVP의 전자상거래법 의무는 go-compliance-and-legal, 출시 후 우선순위·로드맵은 go-product, TPS의 린은 go-operations
- 근거: Ries(2011), Bland·Osterwalder(2019)

### L2 · 지표와 혁신 회계
- 선수: L1
- 핵심 질문: 숫자가 늘었는데 왜 사업은 나아지지 않을 수 있는가?
- 목표: Evaluate — 허영 지표와 실행 가능한 지표를 가르고, 코호트로 실험 결과를 판정한다.
- 만들어 볼 것: 내 사업의 핵심 지표 하나와 코호트 표로 본 실험 판정
- 국내 근거: 법정 기준 없음
- 글로벌 비교: 혁신 회계와 허영 지표(Ries), AARRR(McClure)
- 경계·연결: A/B 통계·North Star·KPI 트리는 go-data-analytics, 런웨이 산술 이상의 자금 관리는 go-finance
- 근거: Ries(2011), Croll·Yoskovitz(2013)

### L3 · 제품-시장 적합성(PMF) 판단
- 선수: L2
- 핵심 질문: PMF에 도달했다는 것을 무엇으로 알 수 있고, 무엇으로는 알 수 없는가?
- 목표: Evaluate — 리텐션 곡선·설문·매출 신호를 함께 보고 PMF 여부를 근거와 함께 판정한다.
- 만들어 볼 것: 실제 또는 예시 데이터로 쓴 PMF 판정 메모(신호, 반대 신호, 결론)
- 국내 근거: 법정 기준 없음
- 글로벌 비교: Andreessen의 PMF 정의, Sean Ellis 설문(「매우 실망」 비율), 리텐션 곡선의 평탄화
- 경계·연결: 출시 후 리텐션 분석은 go-product
- 근거: Andreessen(2007), Sean Ellis PMF 설문

### L4 · 피벗 또는 지속
- 선수: L3
- 핵심 질문: 언제 방향을 바꾸고, 무엇을 남긴 채 바꾸는가?
- 목표: Evaluate — 실험 결과로 피벗·지속·중단 중 하나를 결정하고 바꿀 것과 남길 것을 정한다.
- 만들어 볼 것: 피벗 회의 안건(지난 실험 요약, 선택지, 결정 기준)
- 국내 근거: 법정 기준 없음 — 국내 맥락: 정부 지원사업 협약 중 사업 내용을 크게 바꾸면 협약 변경 승인이 필요한지 협약·공고로 확인한다. 중단하면 중소기업창업 지원법의 재창업 지원으로 이어진다
- 글로벌 비교: 피벗 유형(Ries)
- 근거: Ries(2011)

## A · 애자일 조직 운영

### A1 · 애자일 원칙과 운영 리듬
- 선수: 없음
- 핵심 질문: 계획보다 학습이 빠른 조직은 회의와 결정을 어떻게 짜는가?
- 목표: Explain — 애자일 선언의 가치를 초기 조직의 의사결정 방식으로 바꿔 설명한다.
- 만들어 볼 것: 내 팀(또는 가상의 5인 팀)의 주간 운영 리듬 초안
- 국내 근거: 법정 기준 없음
- 글로벌 비교: Agile Manifesto와 12원칙(2001)
- 경계·연결: 프로젝트 관리 방법론 비교는 go-project-management
- 근거: Beck 외(2001)

### A2 · 스크럼을 경영 리듬으로
- 선수: A1
- 핵심 질문: 스프린트·리뷰·회고가 경영진의 검사와 적응 장치로 작동하려면 무엇이 필요한가?
- 목표: Apply — 스크럼의 책임(제품 책임자·스크럼 마스터·개발자)과 이벤트를 초기 조직의 결정 구조에 배치한다.
- 만들어 볼 것: 우리 조직에서 누가 무엇을 결정하는지 적은 책임 배치표와 첫 회고 안건
- 국내 근거: 법정 기준 없음
- 글로벌 비교: Scrum Guide 2020(Schwaber·Sutherland)
- 경계·연결: 스크럼 이벤트 진행·추정·일정 관리 실무는 go-project-management
- 근거: Schwaber·Sutherland(2020)

### A3 · OKR로 목표 정렬
- 선수: A1, L2
- 핵심 질문: 목표와 실험을 어떻게 이어야 팀이 같은 방향으로 배우는가?
- 목표: Apply — 분기 목표 하나를 측정 가능한 핵심 결과와 실험으로 쪼갠다.
- 만들어 볼 것: 다음 분기 OKR 한 세트와 핵심 결과별 실험 연결
- 국내 근거: 법정 기준 없음
- 글로벌 비교: Grove의 MBO와 OKR, Doerr의 OKR
- 경계·연결: 전사 전략 캐스케이드·BSC는 go-strategy, 인사 평가와의 연결은 go-hr
- 근거: Grove(1983), Doerr(2018)

### A4 · 공동창업자·지분·역할
- 선수: A1
- 핵심 질문: 공동창업자 사이의 지분과 약속은 누가 떠날 때 어떻게 작동하는가?
- 목표: Evaluate — 지분 배분과 베스팅(또는 그에 상응하는 국내 장치) 선택지를 비교해 정한다.
- 만들어 볼 것: 공동창업자 합의 메모(역할, 지분, 이탈 시 처리, 의사결정 방식)
- 국내 근거: 상법 주식 양도(제335조)·주식회사 설립 규정, 주주간계약은 민법상 계약 — 국내에는 베스팅을 정한 법정 제도가 없어 계약으로 정한다
- 글로벌 비교: 미국의 4년·1년 클리프 베스팅 관행, IRC §83(b) 선택
- 경계·연결: 계약법 일반과 IP 귀속은 go-compliance-and-legal, 갈등 조정·협상 기법은 go-leadership-negotiation, 지분 과세는 go-tax
- 근거: Wasserman(2012)

### A5 · 첫 채용과 문화
- 선수: A4
- 핵심 질문: 첫 다섯 명은 무엇을 기준으로 뽑고, 무엇을 약속하는가?
- 목표: Evaluate — 정규직·계약직·외주·공동창업 합류 선택지를 비용·위험·통제로 비교해 정한다.
- 만들어 볼 것: 첫 채용 결정 메모(역할 정의, 고용 형태, 보상 구성, 문화 원칙 3개)
- 국내 근거: 근로기준법 근로계약 서면 명시(제17조), 벤처기업법 주식매수선택권(보상 수단으로 연결)
- 글로벌 비교: 미국 at-will 고용과 지분 보상 관행
- 경계·연결: 근로계약·노동법 실무는 go-hr
- 근거: Wasserman(2012)

## K · 창업 제도와 법

### K1 · 법인 설립과 회사 형태
- 선수: 없음
- 핵심 질문: 개인사업자·주식회사·유한회사 중 무엇으로 시작해야 나중에 투자받고 지분을 나누기 쉬운가?
- 목표: Evaluate — 회사 형태를 투자 유치·지분 설계·책임 범위로 비교해 고른다.
- 만들어 볼 것: 내 사업의 회사 형태 선택 메모와 설립 체크리스트
- 국내 근거: 상법 주식회사 설립(제288조 이하)·종류주식(제344조), 중소기업창업 지원법의 창업·창업자 정의(제2조)
- 글로벌 비교: Delaware General Corporation Law의 C-corporation, 미국 LLC와의 차이
- 경계·연결: 이사회·주주총회 운영은 go-compliance-and-legal, 설립 세무는 go-tax
- 근거: 상법, DGCL

### K2 · 벤처기업 확인
- 선수: K1
- 핵심 질문: 벤처기업 확인은 무엇을 보고 해 주고, 받으면 무엇이 달라지는가?
- 목표: Evaluate — 내 회사에 맞는 확인 유형을 고르고 얻는 것과 드는 것을 비교해 신청 여부를 정한다.
- 만들어 볼 것: 벤처기업 확인 유형 판단표와 신청 여부 결정
- 국내 근거: 벤처기업육성에 관한 특별법 벤처기업의 요건(제2조의2)·확인(제25조), 중소벤처기업부 벤처확인시스템
- 글로벌 비교: 미국은 법정 벤처 인증이 없고 세제(Qualified Small Business Stock, IRC §1202)로 지원한다
- 경계·연결: 벤처기업 세제 혜택의 계산은 go-tax
- 근거: 벤처기업법, 벤처확인시스템

### K3 · 창업 지원 제도
- 선수: K1
- 핵심 질문: 정부 지원사업과 민간 투자 연계 프로그램은 어떤 단계의 회사에 무엇을 주고 무엇을 요구하는가?
- 목표: Evaluate — 지원사업 후보를 단계·자격·의무·기회비용으로 비교해 1년 로드맵을 정한다.
- 만들어 볼 것: 내 회사의 지원사업 후보 비교표와 신청 순서
- 국내 근거: 중소기업창업 지원법(창업 지원 근거), 창업진흥원·K-Startup 창업지원사업 공고, 중소벤처기업부 TIPS(민간투자주도형 기술창업지원)
- 글로벌 비교: 미국 SBIR·STTR, Y Combinator 같은 민간 액셀러레이터
- 경계·연결: 정부 보조금의 회계 처리는 go-accounting
- 근거: 창업지원법, K-Startup, TIPS

### K4 · 스톡옵션 설계
- 선수: K2, A4
- 핵심 질문: 스톡옵션은 누구에게 얼마나, 어떤 조건으로 줘야 사람을 붙잡고 회사를 지키는가?
- 목표: Evaluate — 벤처기업법상 부여와 상법상 부여를 대상·한도·절차로 비교해 설계안을 정한다.
- 만들어 볼 것: 스톡옵션 설계 메모(대상, 수량, 행사가 결정 방식, 베스팅·행사 조건, 필요한 의결)
- 국내 근거: 상법 주식매수선택권(제340조의2~제340조의5), 벤처기업육성에 관한 특별법 주식매수선택권(제16조의3)
- 글로벌 비교: 미국 ISO(IRC §422)·NSO, 행사가 결정과 IRC §409A
- 경계·연결: 스톡옵션 과세는 go-tax, 행사가의 기업가치 산정은 go-valuation, 보상 체계 전반은 go-hr
- 근거: 상법, 벤처기업법, IRC

### K5 · 사내벤처와 분사
- 선수: K1, P4
- 핵심 질문: 회사 안에서 시작한 신사업은 언제, 어떤 조건으로 밖으로 나가야 하는가?
- 목표: Evaluate — 사내 사업부 유지, 사내벤처 팀, 분사 창업을 통제·보상·자금으로 비교해 권고안을 정한다.
- 만들어 볼 것: 경영진 보고용 사내벤처 분사 검토 메모(선택지, 기준, 모회사와의 지분·계약 관계)
- 국내 근거: 벤처기업육성에 관한 특별법·중소기업창업 지원법의 사내벤처·분사 창업 관련 규정, 중소벤처기업부 사내벤처 육성 프로그램 공고
- 글로벌 비교: 기업 벤처링과 스핀오프 관행, Lean Startup의 사내 혁신 회계(Ries)
- 경계·연결: 모회사 전략 포트폴리오는 go-strategy, 분사 시 인력 전적은 go-hr
- 근거: Ries(2017)

## F · 투자유치

### F1 · 투자 단계와 투자자
- 선수: K1, L2
- 핵심 질문: 엔젤·액셀러레이터·VC·CVC는 각각 무엇을 보고 돈을 넣고, 무엇을 기대하는가?
- 목표: Evaluate — 지금 단계와 목표에 맞는 투자자 유형과 금액·시점을 근거와 함께 정한다.
- 만들어 볼 것: 내 회사의 다음 라운드 계획(금액, 쓸 곳, 런웨이, 타깃 투자자 유형)
- 국내 근거: 벤처투자 촉진에 관한 법률의 개인투자조합·창업기획자(액셀러레이터)·벤처투자회사·벤처투자조합 규정, 자본시장과 금융투자업에 관한 법률의 온라인소액투자중개(크라우드펀딩)
- 글로벌 비교: 미국 시드~시리즈 단계 관행, 엔젤의 Accredited Investor(SEC Regulation D), SEC Regulation Crowdfunding
- 경계·연결: 자금 조달 일반·자본 비용은 go-finance
- 근거: 벤처투자법, SEC

### F2 · 투자 수단
- 선수: F1
- 핵심 질문: 보통주·상환전환우선주·전환사채·조건부지분인수계약은 투자자와 창업자에게 각각 무엇을 보장하는가?
- 목표: Evaluate — 투자 수단을 권리(전환·상환·우선)와 창업자 부담으로 비교해 고른다.
- 만들어 볼 것: 이번 라운드에 쓸 투자 수단 선택 메모
- 국내 근거: 상법 종류주식(제344조)·상환주식(제345조)·전환주식(제346조)·전환사채(제513조), 벤처투자법의 조건부지분인수계약
- 글로벌 비교: Y Combinator post-money SAFE, 미국 convertible note
- 경계·연결: 상환전환우선주의 부채·자본 분류는 go-accounting
- 근거: 상법, 벤처투자법, Y Combinator

### F3 · 캡테이블과 희석
- 선수: F2
- 핵심 질문: 라운드를 거듭할 때 내 지분은 왜, 얼마나 줄어드는가?
- 목표: Apply — 프리·포스트머니, 옵션 풀, 전환 증권을 넣어 라운드 전후 캡테이블을 계산한다.
- 만들어 볼 것: 내 회사(또는 예시 회사)의 시드·시리즈 A 캡테이블
- 국내 근거: 상법 신주발행(제416조)과 주주의 신주인수권(제418조)
- 글로벌 비교: post-money SAFE의 지분 계산(Y Combinator), 옵션 풀 셔플
- 경계·연결: 기업가치 자체의 산정은 go-valuation
- 근거: 상법, Y Combinator

### F4 · 텀시트와 주요 조항
- 선수: F2
- 핵심 질문: 투자계약의 어떤 조항이 나중에 회사의 결정을 묶는가?
- 목표: Evaluate — 청산우선권·희석방지·동의권·우선매수·동반매도 조항의 영향을 시나리오로 비교해 협상 우선순위를 정한다.
- 만들어 볼 것: 예시 텀시트의 조항별 영향 메모와 협상 우선순위
- 국내 근거: 상법 종류주식(제344조), 벤처투자법의 투자 규정 — 국내 표준 계약서는 출처를 확인한 것만 쓴다
- 글로벌 비교: NVCA 모델 문서(Term Sheet, Stock Purchase Agreement, Investors' Rights, Voting, ROFR·Co-Sale)
- 경계·연결: 계약 일반·분쟁은 go-compliance-and-legal, 협상 기법은 go-leadership-negotiation, 청산 시나리오의 가치 계산은 go-valuation
- 근거: NVCA, Feld·Mendelson(2019)

### F5 · 사업계획과 IR 내러티브
- 선수: L3, F1
- 핵심 질문: 투자자와 심사위원은 짧은 시간에 무엇을 확인하려 하는가?
- 목표: Develop — 내 실험 결과를 근거로 문제·해결·시장·팀·자금 사용의 이야기를 짠다.
- 만들어 볼 것: IR 덱 목차와 핵심 슬라이드 문장, 또는 지원사업 사업계획서 초안
- 국내 근거: 창업진흥원 창업지원사업 사업계획서 양식(공고별 확인)
- 글로벌 비교: Y Combinator·Sequoia의 피치 구성 가이드
- 근거: K-Startup 공고, Y Combinator

### F6 · 해외 법인 구조
- 선수: F2, K1
- 핵심 질문: 미국 투자자를 만나려면 언제, 어떤 구조로 미국 법인을 둬야 하는가?
- 목표: Evaluate — 한국 법인 유지, 미국 자회사, Delaware 모회사 전환(flip)을 비용·투자·규제로 비교한다.
- 만들어 볼 것: 내 회사의 해외 구조 선택 메모와 확인할 신고·절차 목록
- 국내 근거: 외국환거래법(해외직접투자 신고)
- 글로벌 비교: Delaware General Corporation Law, flip 구조
- 경계·연결: 외환 신고 실무는 go-finance, 국제조세는 go-tax
- 근거: 외국환거래법, DGCL

### F7 · 회수와 다음 단계
- 선수: F4
- 핵심 질문: 투자자는 언제 어떻게 돈을 돌려받으려 하고, 그것이 지금의 내 결정을 어떻게 묶는가?
- 목표: Evaluate — M&A·상장·구주 매각 경로를 시점·조건·창업자 영향으로 비교해 지금 할 일을 정한다.
- 만들어 볼 것: 내 회사의 회수 시나리오 두 개와 지금 계약·지배구조에서 미리 챙길 것
- 국내 근거: 한국거래소 코스닥 상장 규정의 기술특례 상장 제도, 벤처투자법의 벤처투자조합 존속 기간 규정
- 글로벌 비교: 미국 M&A 중심 회수, NVCA 모델 문서의 drag-along·registration rights
- 경계·연결: M&A 가치평가는 go-valuation, 성장 전략으로서의 M&A는 go-strategy, 상장 공시는 go-finance
- 근거: 한국거래소, NVCA

## X · 졸업 프로젝트

### X1 · 내 사업의 실행 패키지
- 선수: L4, A3, K3, F3, F5
- 핵심 질문: 배운 것을 내 실제 사업(또는 사내 신사업)의 다음 6개월 결정에 쓸 수 있는가?
- 목표: Develop — 실험 계획서, 자금조달·지원사업 로드맵, IR 내러티브, 지분·스톡옵션 설계 메모 중 둘 이상(사내 신사업이면 경영진 보고용 사업 검증안·분사 검토 메모로 바꿀 수 있다)을 실제로 쓸 수 있는 수준으로 완성한다.
- 만들어 볼 것: `learner/work/`의 실무 산출물 두 개 이상과 그 근거가 된 실험·법령 확인 기록
- 국내 근거: 위 모듈의 법령·공고 전부(산출물에 쓴 조문은 세션에서 다시 확인)
- 글로벌 비교: 위 모듈의 글로벌 비교 전부
- 근거: 이 지도 전체

## 출처

조회일은 이 지도를 만들며 공식 출처에서 직접 확인한 날이다. 법령은 국가법령정보센터 현행 법령 기준이며 시행일을 함께 적는다. 세션에서는 [tutor/sources.md](../tutor/sources.md)대로 다시 확인한다.

### 국내 법령·제도

(법령 대조 뒤 채움)

### 글로벌 기준

- Agile Manifesto와 12원칙 — <https://agilemanifesto.org/>, <https://agilemanifesto.org/principles.html> (2026-11-14 조회, © 2001)
- Scrum Guide 2020(November 2020판, Schwaber·Sutherland) — <https://scrumguides.org/scrum-guide.html> (2026-11-14 조회)
- Y Combinator SAFE(post-money SAFE) — <https://www.ycombinator.com/documents> (2026-11-14 조회)
- NVCA Model Legal Documents — <https://nvca.org/model-legal-documents/> (2026-11-14 조회. Stock Purchase Agreement·Investors' Rights Agreement 2025-10 개정, Voting Agreement 2026-06 개정, ROFR·Co-Sale Agreement 2026-04 개정 표기)
- Delaware General Corporation Law(Title 8, Chapter 1) §101·§102 설립, §151 종류주식, §157 권리·옵션, §161 신주 발행 — <https://delcode.delaware.gov/title8/c001/sc01/index.html>, <https://delcode.delaware.gov/title8/c001/sc05/index.html> (2026-11-14 조회)
- US Code Title 26 §83(b)·§422(ISO)·§409A·§1202(QSBS) — 읽기 사본 <https://www.law.cornell.edu/uscode/text/26/83>, <https://www.law.cornell.edu/uscode/text/26/422>, <https://www.law.cornell.edu/uscode/text/26/409A>, <https://www.law.cornell.edu/uscode/text/26/1202> (2026-11-14 조회, Cornell LII 비공식 사본 — 공식본 govinfo.gov)
- SEC Regulation D §230.501 accredited investor — <https://www.ecfr.gov/current/title-17/chapter-II/part-230/subject-group-ECFR6e651a4c86c0174/section-230.501> (2026-11-14 조회)
- SEC Regulation Crowdfunding(17 CFR Part 227) — <https://www.ecfr.gov/current/title-17/chapter-II/part-227> (2026-11-14 조회)
- SBIR·STTR — <https://www.sbir.gov/about> (2026-11-14 조회)

### 서적·논문(모듈 「근거」 줄)

- Blank, S. & Dorf, B. (2012). *The Startup Owner's Manual*. K&S Ranch.
- Ries, E. (2011). *The Lean Startup*. Crown Business. / Ries, E. (2017). *The Startup Way*. Currency.
- Maurya, A. (2012). *Running Lean* (2nd ed.). O'Reilly.
- Fitzpatrick, R. (2013). *The Mom Test*.
- Moore, G. A. (2014). *Crossing the Chasm* (3rd ed.). Harper Business.
- Osterwalder, A. & Pigneur, Y. (2010). *Business Model Generation*. Wiley.
- Bland, D. J. & Osterwalder, A. (2019). *Testing Business Ideas*. Wiley.
- Croll, A. & Yoskovitz, B. (2013). *Lean Analytics*. O'Reilly.
- Andreessen, M. (2007). "The only thing that matters." pmarchive.com.
- Ellis, S. (2010). Sean Ellis PMF 설문(「매우 실망」 40% 기준)의 원 출처는 세션에서 확인 뒤 인용한다.
- Grove, A. S. (1983). *High Output Management*. Random House.
- Doerr, J. (2018). *Measure What Matters*. Portfolio.
- Wasserman, N. (2012). *The Founder's Dilemmas*. Princeton University Press.
- Feld, B. & Mendelson, J. (2019). *Venture Deals* (4th ed.). Wiley.
