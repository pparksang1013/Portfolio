import { tabCommonStyle } from "../style/TabCommonStyle";
import { BLOG_FUNC_CONTENTS_DATA } from "../data/func_content_data";
import { FuncContent } from "./FuncContent";

export const TabBlog = () => {
    return (
        <>
            <tabCommonStyle.MainBox>
                <tabCommonStyle.Title>
                    <span>03.</span>
                    블로그
                </tabCommonStyle.Title>

                <tabCommonStyle.Desc>
                    글이 잘 읽히는 개발 블로그. <br />
                    또한 개발에 대한 내용 학습을 통해 얻은 지식을 공유하고 그 과정에서 형성된 제 생각을 담을 수 있는
                    공간을 조성하고 싶었습니다.
                </tabCommonStyle.Desc>
            </tabCommonStyle.MainBox>

            <tabCommonStyle.FuncBox>
                <tabCommonStyle.FuncMain>
                    <h3>프로젝트 주요 기능 및 구현 사항</h3>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        정적 사이트 생성 (SSG)
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        MDX
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        포스팅 검색 기능
                    </h4>
                </tabCommonStyle.FuncMain>

                <h3>구현 사항</h3>

                <FuncContent contents={BLOG_FUNC_CONTENTS_DATA} />
            </tabCommonStyle.FuncBox>

            <tabCommonStyle.TroubleShootingBox>
                <tabCommonStyle.TroubleShootingMain>
                    <h3>트러블 슈팅</h3>
                </tabCommonStyle.TroubleShootingMain>

                <tabCommonStyle.TroubleShootingContents>
                    <h4>
                        <span>✨</span>
                        pre 태그
                    </h4>

                    <h5>문제 상황</h5>

                    <p>
                        pre 태그에 max-width CSS 속성을 설정했음에도 불구하고, pre 태그가 부모 요소보다 더 넓은 너비를
                        가지는 문제가 발생.
                    </p>

                    <h5>해결방법</h5>

                    <p>pre 태그에 white-space: pre-wrap 옵션을 적용하여 해결.</p>
                </tabCommonStyle.TroubleShootingContents>

                <tabCommonStyle.TroubleShootingContents>
                    <h4>
                        <span>✨</span>
                        CSS 로딩
                    </h4>

                    <h5>문제 상황</h5>
                    <p>
                        메인 페이지에서 포스팅 페이지 경로로 이동 후 브라우저 뒤로가기를 통해 메인 페이지로 돌아왔을 때
                        스타일이 변하는 문제가 발생.
                    </p>

                    <h5>문제 진단</h5>
                    <p>두 개의 CSS 파일에서 p 태그에 대한 전역 스타일 설정이 겹쳐서 발생하는 문제를 확인.</p>

                    <h5>해결 방법</h5>
                    <p>ID 값을 부여해서 두 페이지에 대한 CSS문제 해결.</p>
                </tabCommonStyle.TroubleShootingContents>
            </tabCommonStyle.TroubleShootingBox>

            <tabCommonStyle.InsightBox>
                <tabCommonStyle.InsightMain>
                    <h3>인사이트</h3>
                </tabCommonStyle.InsightMain>

                <tabCommonStyle.InsightContents>
                    <h4>
                        <span>🔵</span> 서버 사이드 렌더링
                    </h4>
                    <p>
                        CSS 로딩에 관한 이슈를 다루면서 웹페이지 초기 로딩 시 서버 사이드 렌더링과 클라이언트 사이드
                        렌더링의 차이점을 비교하며, SSR과 CSR에 대해 더 깊이 이해할 수 있었습니다.
                    </p>
                </tabCommonStyle.InsightContents>
            </tabCommonStyle.InsightBox>
        </>
    );
};
