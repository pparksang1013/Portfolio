import { tabCommonStyle } from "../style/TabCommonStyle";
import { Highlight } from "../../../shared/Highlight";

export const TabKanban = () => {
    return (
        <>
            <tabCommonStyle.MainBox>
                <tabCommonStyle.Title>
                    <span>02.</span>
                    칸반보드
                </tabCommonStyle.Title>

                <tabCommonStyle.Desc>
                    부트캠프에서 진행한 파이널 프로젝트입니다.
                    <br />
                    애자일 협업툴 칸반보드 개발.
                    <br />
                    <br />
                    <br />
                    프론트엔드 3명 백엔드 2명으로 구성된 팀입니다. <br />
                    저는 <Highlight>프론트엔드</Highlight>로 참여했고, <Highlight>팀리더</Highlight>를 맡았습니다.
                    <br /> 메인페이지, 캘린더페이지, 대쉬보드 페이지를 담당했습니다.
                </tabCommonStyle.Desc>
            </tabCommonStyle.MainBox>

            <tabCommonStyle.FuncBox>
                <tabCommonStyle.FuncMain>
                    <h3>프로젝트 주요 기능 및 구현 사항</h3>
                    <tabCommonStyle.GreyText $customMargin="-14px 0 1.5rem">
                        프로젝트를 진행하면서 제가 기여한 부분 위주로 작성했습니다.
                    </tabCommonStyle.GreyText>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        메인페이지
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        대쉬보드 페이지
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        캘린더 페이지
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        데이터 CRUD
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        담당 페이지 UI/UX
                    </h4>
                </tabCommonStyle.FuncMain>

                <h3>구현 사항</h3>

                <tabCommonStyle.FuncContent>
                    <h5>종합적인 CRUD 기능</h5>

                    <ul>
                        <li>
                            칸반보드의 핵심 요소인 <Highlight>card와 task를 위한 종합적인 CRUD</Highlight> 시스템 구축.
                        </li>
                        <li>
                            axios 라이브러리를 활용하여 <Highlight>HTTP 메서드</Highlight> 기반의 CRUD 구현.
                        </li>
                        <li>
                            다양한 컴포넌트에서 사용하기 위해 HTTP 메서드를 <Highlight>모듈화</Highlight>하여 코드의
                            재사용성과 유지보수성을 향상.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>async / await</h5>

                    <ul>
                        <li>async / await을 사용해 서버로부터 응답을 받은 후 페이지 렌더링이 이루어지도록 구현.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>proxy 설정</h5>

                    <ul>
                        <li>
                            http-proxy-middleware 라이브러리 <Highlight>createProxyMiddleware</Highlight> 함수를 사용해
                            proxy 설정.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>캘린더 페이지</h5>

                    <ul>
                        <li>react-calendar 라이브러리를 사용해 캘린더 페이지 구현.</li>
                        <li>캘린더 페이지에서 일정이 있는 날짜는 Mark되는 기능 구현.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>대쉬보드 페이지</h5>

                    <ul>
                        <li>apexcharts 라이브러리를 사용해 대쉬보드 페이지 구현.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>Github를 통한 프로젝트 형상관리</h5>

                    <ul>
                        <li>
                            팀 리더로서 GitHub를 통한 프로젝트 형상 관리에 있어 fork 기능으로 팀원들의 코드를 관리하고,
                            코드 병합 및 검토를 위해 pull request 기능을 적극 활용.
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
                        리액트 리렌더링
                    </h4>

                    <h5>문제 상황</h5>

                    <p>
                        서버로부터 받은 객체 데이터를 useState를 사용하여 상태 관리를 하고 있었으나, 상태 값이
                        변경되어도 컴포넌트 리렌더링이 발생하지 않는 문제가 발생.
                    </p>

                    <h5>해결 방법</h5>

                    <p>
                        원티드 프리온보딩에서 <Highlight textcolor="var(--orange-color)">객체 불변성</Highlight>에 대한
                        개념을 학습할 수 있었고, 이를 활용해 자바스크립트{" "}
                        <Highlight textcolor="var(--orange-color)">스프레드 연산자</Highlight>로 새 객체를 생성해
                        useState에 적용함으로써 리렌더링 문제 해결.
                    </p>
                </tabCommonStyle.TroubleShootingContents>

                <tabCommonStyle.TroubleShootingContents>
                    <h4>
                        <span>✨</span>
                        깃허브
                    </h4>

                    <h5>문제 상황</h5>

                    <p>
                        GitHub를 사용하여 프로젝트를 관리하는 과정에서 브랜치 관리에 실패해, 레포지토리가 혼란스러워진
                        문제 발생.
                    </p>

                    <h5>해결 방법</h5>

                    <p>
                        팀원들과 상의 후, 기존 레포지토리와 다른 새로운 레포지토리를 생성. 첫 레포지토리와 다르게 Git의
                        포크(fork) 기능을 활용했으며, 코드를 병합하기 전에 새로운 규칙을 설정하여 프로젝트 관리 방법을
                        개선.
                    </p>
                </tabCommonStyle.TroubleShootingContents>
            </tabCommonStyle.TroubleShootingBox>

            <tabCommonStyle.InsightBox>
                <tabCommonStyle.InsightMain>
                    <h3>인사이트</h3>
                </tabCommonStyle.InsightMain>

                <tabCommonStyle.InsightContents>
                    <h4>
                        <span>🔵</span> 개발 협업
                    </h4>
                    <p>
                        팀원들과 프로젝트 진행을 통해 개발 협업 방식을 익히고, 원활한 의사소통의 중요성을 깨달았습니다.
                    </p>
                </tabCommonStyle.InsightContents>

                <tabCommonStyle.InsightContents>
                    <h4>
                        <span>🔵</span> 깃
                    </h4>
                    <p>
                        프로젝트 진행을 통해 Git에 대한 많은 학습을 할 수 있었습니다. 칸반보드 프로젝트 이 후 진행한
                        프로젝트의 형상 관리를 효율적으로 하기 위해, 새 기능 구현 시 새로운 브랜치를 사용하고, 커밋
                        컨벤션을 적용해 변경 사항을 명확히 파악하며 유지보수를 용이하게 하려고 노력하고 있습니다.
                    </p>
                </tabCommonStyle.InsightContents>
            </tabCommonStyle.InsightBox>
        </>
    );
};
