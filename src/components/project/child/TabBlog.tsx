import { tabCommonStyle } from "../style/TabCommonStyle";
import { Highlight } from "../../../shared/Highlight";

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

                <tabCommonStyle.FuncContent>
                    <h5>포스팅 정적 생성</h5>

                    <ul>
                        <li>
                            Next.js의 <Highlight>generateStaticParams 함수</Highlight>를 사용해 블로그 포스팅을 위한
                            정적 페이지 생성.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>Contentlayer 라이브러리</h5>

                    <ul>
                        <li>
                            MDX 파일로 작성한 블로그 포스팅 파일을 효율적으로 관리하기 위해 Contentlayer 라이브러리를
                            사용.
                        </li>
                        <li>
                            useMDXComponent hook을 사용해 커스텀 리액트 컴포넌트 사용. 이를 통해, MDX에서 작성한 내용에
                            대한 스타일링을 자유자재로 표현할 수 있었고, 사용되는 레이아웃이나 컴포넌트 재사용.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>포스팅 검색 기능</h5>

                    <ul>
                        <li>자바스크립트 메서드와 react useState를 통해 검색기능 구현.</li>
                        <li>Contentlayer에서 제공하는 객체를 활용하여 filter 메서드를 이용한 검색 기능.</li>
                        <li>
                            input 필드에 값이 입력될 때, useState를 사용하여 input 필드 아래에 검색 결과를 표시하는 기능
                            구현.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>Next app 디렉토리</h5>

                    <ul>
                        <li>Next.js의 app 디렉토리 사용.</li>
                        <li>파일 기반 라우팅과 동적 라우팅 구현.</li>
                        <li>layout.tsx 파일을 통해 공통 UI 컴포넌트를 관리 및 재사용.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>MDX</h5>

                    <ul>
                        <li>MDX metadata를 활용해 포스팅을 효율적으로 관리.</li>
                        <li>
                            React.Children.toArray를 활용하여 MDX 파일 내의 h2태그를 filter 메서드를 추출했고, 이를 통해
                            contents 기능 구현.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>
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
