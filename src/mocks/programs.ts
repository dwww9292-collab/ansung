import type { ProgramRow } from "@/features/programs/types";

// DB(Supabase programs 테이블)가 비어있거나 연결 불가일 때 쓰는 폴백 데이터.
// supabase/programs.sql 시드와 동일 (안성 중립화 반영).
function row(
  id: string,
  title: string,
  category: string,
  status: string,
  image_url: string,
  location: string | null,
  date_range: string,
  sort_order: number,
): ProgramRow {
  return {
    id,
    title,
    category,
    status,
    image_url,
    location,
    date_range,
    body: null,
    contact: null,
    attachments: [],
    is_published: true,
    sort_order,
    created_at: "",
  };
}

export const mockProgramRows: ProgramRow[] = [
  row("p1", "안성 역사문화관 운영", "기타", "진행중", "https://public.readdy.ai/ai/img_res/edited_2078e0733c1e19504ff485a91ed363a9_c28165a8.jpg", "안성 역사문화관(안성시 [도로명주소])", "2026-01-01(목) ~ 2026-12-31(목)", 1),
  row("p2", "가족과 함께하는 생활밀착형 문화예술교육 「가가호호」<모두기록> <모두원예> 참여자 모집", "교육", "진행중", "https://public.readdy.ai/ai/img_res/edited_321905ed51441b47c90ebe7338ff3ca5_c28165a8.jpg", null, "2026-06-01(월) ~ 2026-06-15(월)", 2),
  row("p3", "[모집마감 안내] 시민과 함께하는 안성 시민문화학당 <예술+ 시민강좌> 정규·특강 참여자 모집", "교육", "진행중", "https://public.readdy.ai/ai/img_res/edited_ab18ec01c070718068a69e6ab316fe92_c28165a8.jpg", "경기 안성시 [도로명주소], 안성 시민문화학당", "2026-05-26(화) ~ 2026-06-26(금)", 3),
  row("p4", "2026 안성 역사문화관 어린이 단체관람 프로그램 〈쓱쓱! 안성 역사문화관 유물 찾기〉", "행사", "진행중", "https://public.readdy.ai/ai/img_res/edited_9d0fbd63a8527f58b4d17b654634e370_c28165a8.jpg", "안성 역사문화관(안성시 [도로명주소])", "2026-05-20(수) ~ 2026-11-30(월)", 4),
  row("p5", "2026년 경기 생활문화 공간 활성화 지원사업 <한뼘 더 커뮤니티> 모집 공고", "지원사업", "종료", "https://public.readdy.ai/ai/img_res/edited_08fb2fb3314ba8641ae8844f8223f39b_c28165a8.jpg", null, "2026-05-11(월) ~ 2026-05-25(월)", 5),
  row("p6", "2026 문화기획학교 <기획의 발견>", "교육", "진행중", "https://public.readdy.ai/ai/img_res/edited_ffd856ebafeca7183094613ec1d8e823_c28165a8.jpg", "안성 시민회관 3층 다목적실", "2026-05-04(월) ~ 2026-06-11(목)", 6),
  row("p7", "시민과 함께하는 안성 시민문화학당 <예술+ 시민강좌> 정규·특강 참여자 모집", "교육", "종료", "https://public.readdy.ai/ai/img_res/edited_ab18ec01c070718068a69e6ab316fe92_c28165a8.jpg", "경기 안성시 [도로명주소], 안성 시민문화학당", "2026-05-06(수) ~ 2026-05-22(금)", 7),
  row("p8", "2026 인문학 탐방 <인문학에게 길을 묻다> 참여자 모집", "교육", "진행중", "https://public.readdy.ai/ai/img_res/edited_bc12fb3f4f9ca75e99b825351a0734ca_c28165a8.jpg", "온라인 및 유선 접수 / 선착순 마감", "2026-03-06(금) ~ 2026-10-25(일)", 8),
  row("p9", "2026 안성 역사문화관 문화해설사 양성과정 모집", "교육", "진행중", "https://readdy.ai/api/search-image?query=Korean%20cultural%20heritage%20site%20guide%20training%20workshop%20with%20participants%20learning%20about%20Goryeo%20dynasty%20history%20in%20a%20modern%20classroom%20setting%2C%20maps%20and%20artifacts%20on%20display%2C%20professional%20yet%20warm%20atmosphere%2C%20educational%20cultural%20foundation%20program%2C%20natural%20lighting%20through%20windows%2C%20diverse%20age%20group%20of%20Korean%20adults%20engaged%20in%20learning&width=800&height=600&seq=hyeeum-guide-2026&orientation=landscape", "안성 역사문화관(안성시 [도로명주소])", "2026-06-08(월) ~ 2026-07-31(금)", 9),
  row("p10", "안성 전통연희 전수교육관 정기 강습 참여자 모집", "교육", "진행중", "https://readdy.ai/api/search-image?query=Traditional%20Korean%20mask%20dance%20performance%20with%20colorful%20costumes%20and%20traditional%20masks%2C%20outdoor%20cultural%20heritage%20performance%2C%20vibrant%20and%20dynamic%20folk%20art%20scene%2C%20Korean%20intangible%20cultural%20heritage%2C%20performers%20in%20traditional%20hanbok%20with%20exaggerated%20masks%2C%20festive%20atmosphere%20under%20clear%20sky&width=800&height=600&seq=yeonhui-2026&orientation=landscape", "안성 전통연희 전수교육관(안성시)", "2026-04-01(수) ~ 2026-11-30(월)", 10),
  row("p11", "안성 시민문화학당 <인문학 산책> - 조선 선비의 삶과 지혜 특강 시리즈", "교육", "진행중", "https://readdy.ai/api/search-image?query=Traditional%20Korean%20scholar%20study%20room%20with%20wooden%20interior%20warm%20lighting%20books%20and%20calligraphy%20materials%20serene%20contemplative%20atmosphere%20Korean%20Confucian%20academy%20style%20space%20with%20paper%20windows%20and%20wooden%20floor%20cultural%20heritage%20education%20program&width=800&height=600&seq=yulgok-human-2026&orientation=landscape", "안성 시민문화학당(안성시 [도로명주소])", "2026-06-15(월) ~ 2026-08-31(월)", 11),
  row("p12", "안성 역사문화관 야간개장 <달빛기행> - 고려의 밤을 걷다", "행사", "진행중", "https://readdy.ai/api/search-image?query=Ancient%20Korean%20historical%20site%20at%20night%20with%20soft%20lantern%20lighting%20traditional%20Korean%20architecture%20ruins%20under%20moonlight%20peaceful%20atmospheric%20night%20scene%20Goryeo%20dynasty%20heritage%20site%20with%20warm%20glowing%20lanterns%20along%20stone%20pathways%20serene%20cultural%20night%20tour&width=800&height=600&seq=hyeeum-night-2026&orientation=landscape", "안성 역사문화관(안성시 [도로명주소])", "2026-07-01(수) ~ 2026-08-31(월)", 12),
  row("p13", "2026 안성 시민공원 문화피크닉 <예술의 숲>", "행사", "진행중", "https://readdy.ai/api/search-image?query=Outdoor%20cultural%20picnic%20event%20at%20a%20lakeside%20park%20with%20families%20enjoying%20art%20installations%20live%20acoustic%20music%20on%20small%20stage%20picnic%20blankets%20on%20green%20grass%20Korean%20community%20cultural%20festival%20warm%20spring%20atmosphere%20with%20flowering%20trees%20and%20calm%20lake%20water%20Anseong%20city%20park%20setting&width=800&height=600&seq=lake-picnic-2026&orientation=landscape", "안성 시민공원(안성시)", "2026-06-20(토) ~ 2026-06-21(일)", 13),
  row("p14", "2026 찾아가는 문화하루 - 안성 곳곳을 예술로 물들이다", "공연", "진행중", "https://public.readdy.ai/ai/img_res/edited_10efdec102b0c023cd0144ac639ebc57_c28165a8.jpg", "안성시 관내 기업·학교·공원 등", "2026-04-01(수) ~ 2026-11-30(월)", 14),
];
