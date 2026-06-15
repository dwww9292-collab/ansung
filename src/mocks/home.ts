// 메인 히어로 슬라이드 — 모두 텍스트가 박힌 포스터형(오버레이/제목 미표시)
// 우선순위: 남사당 → 3·1운동 → 안성문화장, 이후 천문과학관 → 유기공방 → 칠장사
// 이미지 파일은 public/images/hero/ 에 아래 파일명으로 저장하면 표시됩니다.
export const heroSlides = [
  {
    id: 1,
    title: "안성 남사당 바우덕이축제",
    link: "#",
    poster: true,
    image: "/images/hero/hero-01-namsadang.jpg",
  },
  {
    id: 2,
    title: "안성 3·1운동기념관",
    link: "#",
    poster: true,
    image: "/images/hero/hero-02-31movement.jpg",
  },
  {
    id: 3,
    title: "안성문화장 페스타",
    link: "#",
    poster: true,
    image: "/images/hero/hero-03-munhwajang.jpg",
  },
  {
    id: 4,
    title: "안성맞춤랜드 천문과학관",
    link: "#",
    poster: true,
    image: "/images/hero/hero-04-astronomy.jpg",
  },
  {
    id: 5,
    title: "안성맞춤 유기 — 대대손손 장인정신",
    link: "#",
    poster: true,
    image: "/images/hero/hero-05-yugi.jpg",
  },
  {
    id: 6,
    title: "칠장사 사천왕상",
    link: "#",
    poster: true,
    image: "/images/hero/hero-06-chiljangsa.jpg",
  },
];

export const newsTabs = ["공지사항", "보도자료", "경영공시"] as const;

export const newsItems = [
  {
    id: 1,
    category: "공지사항",
    title: "[안성문화재단 공고 제2026-37호] 2026 공연창작 지원사업 최종 선정 결과 공고",
    date: "2026-06-02",
    isNew: true,
  },
  {
    id: 2,
    category: "공지사항",
    title: "[안성문화재단 공고 제2026-36호] 2026년 경기 생활문화 공간 활성화 지원사업 <한뼘 더 커뮤니티> 서류심사 결과 공고",
    date: "2026-05-29",
    isNew: false,
  },
  {
    id: 3,
    category: "공지사항",
    title: "안성문화재단 임직원 사칭 허위 구매 사기 피해 예방 안내",
    date: "2026-05-08",
    isNew: false,
  },
];

export const businessItems = [
  {
    id: 1,
    title: "가족과 함께하는 생활밀착형 문화예술교육 「가가호호」<모두기록> <모두원예> 참여자 모집",
    image: "https://public.readdy.ai/ai/img_res/edited_321905ed51441b47c90ebe7338ff3ca5_c28165a8.jpg",
    status: "진행중",
    category: "교육",
  },
  {
    id: 2,
    title: "[모집마감 안내] 시민과 함께하는 안성 시민문화학당 <예술+ 시민강좌> 정규ㆍ특강 참여자 모집",
    image: "https://public.readdy.ai/ai/img_res/edited_ab18ec01c070718068a69e6ab316fe92_c28165a8.jpg",
    status: "진행중",
    category: "교육",
  },
  {
    id: 3,
    title: "2026 안성 역사문화관 어린이 단체관람 프로그램 〈쓱쓱! 안성 역사문화관 유물 찾기〉",
    image: "https://public.readdy.ai/ai/img_res/edited_9d0fbd63a8527f58b4d17b654634e370_c28165a8.jpg",
    status: "진행중",
    category: "행사",
  },
  {
    id: 4,
    title: "2026년 경기 생활문화 공간 활성화 지원사업 <한뼘 더 커뮤니티> 모집 공고",
    image: "https://public.readdy.ai/ai/img_res/edited_08fb2fb3314ba8641ae8844f8223f39b_c28165a8.jpg",
    status: "종료",
    category: "지원사업",
  },
];

export const performanceTabs = ["공연", "전시", "축제"] as const;

export const performanceItems = [
  {
    id: 1,
    title: "[대관] 안성시립소년소녀합창단 제5회 정기연주회「Mozart in Anseong」",
    image: "https://public.readdy.ai/ai/img_res/edited_90cff594bad1289137ad7ef69a018cfd_c28165a8.jpg",
    type: "대관",
    category: "공연",
  },
  {
    id: 2,
    title: "[기획] 찾아가는 문화하루 1회차 <정오의 하모니>",
    image: "https://public.readdy.ai/ai/img_res/edited_10efdec102b0c023cd0144ac639ebc57_c28165a8.jpg",
    type: "기획",
    category: "공연",
  },
  {
    id: 3,
    title: "[기획] 2026 실내악 시리즈<브라보 브라스(Bravo Brass)>",
    image: "https://public.readdy.ai/ai/img_res/edited_57bdb839b35c1d1f4424b4b4b9a0b8d5_c28165a8.jpg",
    type: "기획",
    category: "공연",
  },
  {
    id: 4,
    title: "[기획] 2026 문화살롱 2회차 <오락가락(五樂歌樂) 콘서트: 청춘국악>",
    image: "https://public.readdy.ai/ai/img_res/edited_e35327b635d438b265e874405fa149c1_c28165a8.jpg",
    type: "기획",
    category: "공연",
  },
];

export const rentalTabs = ["시민회관", "안성사랑행복센터", "안성우정행복센터", "안성아트홀"] as const;

export const rentalDates = [
  { day: "08", week: "MON", active: true },
  { day: "09", week: "TUE", active: false },
  { day: "10", week: "WED", active: false },
  { day: "11", week: "THU", active: false },
  { day: "12", week: "FRI", active: false },
  { day: "13", week: "SAT", active: false },
  { day: "14", week: "SUN", active: false },
  { day: "15", week: "MON", active: false },
  { day: "16", week: "TUE", active: false },
  { day: "17", week: "WED", active: false },
  { day: "18", week: "THU", active: false },
  { day: "19", week: "FRI", active: false },
  { day: "20", week: "SAT", active: false },
  { day: "21", week: "SUN", active: false },
  { day: "22", week: "MON", active: false },
  { day: "23", week: "TUE", active: false },
  { day: "24", week: "WED", active: false },
  { day: "25", week: "THU", active: false },
  { day: "26", week: "FRI", active: false },
  { day: "27", week: "SAT", active: false },
  { day: "28", week: "SUN", active: false },
];

export const rentalItems = [
  {
    id: 1,
    title: "공연장 휴관일",
    place: "다목적실",
    time: "8:00 ~ 22:00",
    host: "안성문화재단",
  },
  {
    id: 2,
    title: "공연장 휴관일",
    place: "소공연장",
    time: "8:00 ~ 22:00",
    host: "안성문화재단",
  },
  {
    id: 3,
    title: "2026 전국체전 시설 개·보수 사업 추진 공사",
    place: "대공연장",
    time: "8:00 ~ 22:00",
    host: "안성시 체육과",
  },
];

export const spaceBanners = [
  {
    id: 1,
    title: "시민회관",
    subtitle: "공간소개",
    description: "대공연장(900석), 소공연장(302석), 다목적실을\n갖춘 안성의 대표 문화공간입니다.",
    image: "https://public.readdy.ai/ai/img_res/edited_651952617912a6c9672e010a4ab816a2_333b818a.jpg",
    link: "/rent/space",
  },
  {
    id: 2,
    title: "안성사랑행복센터",
    subtitle: "공간소개",
    description: "대공연장(500석)을 비롯해 문화카페까지\n주민 곁으로 찾아간 생활문화 거점입니다.",
    image: "https://public.readdy.ai/ai/img_res/edited_5afb3b103fa866ccc4b8e0fc48b27681_f7139d32.jpg",
    link: "/rent/space",
  },
  {
    id: 3,
    title: "안성우정행복센터",
    subtitle: "공간소개",
    description: "대공연장(700석)과 전시실을 갖춘\n신도시의 문화 랜드마크입니다.",
    image: "https://public.readdy.ai/ai/img_res/edited_3dd8a408cdd6bb5680d00b195c58bf84_726ce405.jpg",
    link: "/rent/space",
  },
  {
    id: 4,
    title: "안성아트홀",
    subtitle: "공간소개",
    description: "최적의 음향을 자랑하는 클래식 전용홀(350석),\n실내악과 독주회의 성지입니다.",
    image: "https://public.readdy.ai/ai/img_res/edited_a0a2d478892d5042a37e3c78e898106f_4b19b0a4.jpg",
    link: "/rent/space",
  },
];

export const partners = [
  {
    id: 1,
    name: "안성시청",
    image: "https://public.readdy.ai/ai/img_res/edited_db48676dcbe911a249b4426b0b864767_c28165a8.jpg",
    link: "https://www.anseong.go.kr/",
  },
  {
    id: 2,
    name: "안성도시공사",
    image: "https://public.readdy.ai/ai/img_res/edited_a303ddc8f8486e28c26f395e49ab8d78_c28165a8.jpg",
    link: "https://www.anseonguc.or.kr/",
  },
  {
    id: 3,
    name: "안성문화원",
    image: "https://public.readdy.ai/ai/img_res/edited_c6e7a283330333dc752d0d5789b01c28_c28165a8.jpg",
    link: "https://www.ascc.or.kr/",
  },
  {
    id: 4,
    name: "안성시청소년재단",
    image: "https://public.readdy.ai/ai/img_res/edited_c6e3c7340233d6644605c70c0a57d4d5_c28165a8.jpg",
    link: "https://www.asyf.or.kr/",
  },
  {
    id: 5,
    name: "국립민속박물관 안성",
    image: "https://public.readdy.ai/ai/img_res/edited_eae197d77f1ecf30e965904fbf97d5eb_c28165a8.jpg",
    link: "https://www.nfm.go.kr/",
  },
];