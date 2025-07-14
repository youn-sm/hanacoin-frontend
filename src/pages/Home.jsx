
import { ContentBox} from "../components/HomeComponents/ContentBox";

export function Home() {

  return (
    <>
    <ContentBox title = "최근 소식" info = {
      " -연승모 밤샘 코딩하다가 \n탈모 악화돼... \n\n -안세용의 구제로 탈모 치료"
    }
    />
    <ContentBox title = "공지" info = "-진로연계 D-DAY"/>
    <ContentBox title = "추천 거래" info = "-준비중입니다."/>
    </>
  );
}
