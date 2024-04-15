import { tabCommonStyle } from "../style/TabCommonStyle";
import { Highlight } from "../../../shared/Highlight";
import { PORTFOLIO_FUNC_CONTENTS_DATA } from "../data/func_content_data";
import { FuncContent } from "./FuncContent";

export const TabPortfolio = () => {
    return (
        <>
            <tabCommonStyle.MainBox>
                <tabCommonStyle.Title>
                    <span>04.</span>
                    포트폴리오
                </tabCommonStyle.Title>

                <tabCommonStyle.Desc>
                    개인 포트폴리오를 웹페이지 형태로 구현한 프로젝트.
                    <br />
                    <br />
                    저의 기술 스택, 프로젝트 경험과 저를 소개하는 콘텐츠를 담았습니다. 모던한 디자인과 인터랙티브한
                    요소들을 통해 효과적으로 정보를 전달하고, 저에 대한 긍정적인 인상을 남기고자 노력했습니다.
                </tabCommonStyle.Desc>
            </tabCommonStyle.MainBox>

            <tabCommonStyle.FuncBox>
                <tabCommonStyle.FuncMain>
                    <h3>프로젝트 주요 기능 및 구현 사항</h3>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        다양한 애니메이션 구현
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        탭메뉴 기능
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        아키텍쳐
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        페이지네이션 기능
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        타입관리
                    </h4>
                </tabCommonStyle.FuncMain>

                <h3>구현 사항</h3>

                <FuncContent contents={PORTFOLIO_FUNC_CONTENTS_DATA} />
            </tabCommonStyle.FuncBox>

            <tabCommonStyle.InsightBox>
                <tabCommonStyle.InsightMain>
                    <h3>인사이트</h3>
                </tabCommonStyle.InsightMain>

                <tabCommonStyle.InsightContents>
                    <h4>
                        <span>🔵</span> 스크롤 인터렉티브 애니메이션
                    </h4>
                    <p>
                        프로젝트 페이지 구현사항 텍스트 아래에 있는 리스트 태그들이 뷰포트 중간에 위치할 때, 보더라인에
                        색상을 추가하는 인터렉티브 애니메이션을 구현했습니다.
                        <br />
                        <br />이 과정에서{" "}
                        <Highlight textcolor="var(--blue-color)">
                            intersectionObserver API와 DOM 요소의 offsetTop, offsetHeight 속성 및 getBoundingClientRect
                            메서드
                        </Highlight>
                        에 학습했습니다.
                        <br />
                        <br />
                        또한 스크롤 이벤트로 인한 과부하를 방지하기 위해
                        <Highlight textcolor="var(--blue-color)"> 쓰로틀링 함수</Highlight>를 직접 개발하여 페이지
                        최적화를 진행했습니다.
                        <br />
                        <br />
                        하지만 스크롤 애니메이션 구현 과정에서 조건문과 쓰로틀링 함수의 사용이 애니메이션의
                        부자연스러움을 초래했고, 이로 인해 사용자 경험이 저하된다는 문제를 인식했습니다. 이에 따라,
                        애니메이션을 제거하기로 결정했습니다.
                        <br />
                        <br />
                        향후 <Highlight textcolor="var(--blue-color)"> 리팩토링</Highlight>을 통해, 보다 자연스러운
                        애니메이션을 개발하여 사용자가 현재 읽고 있는 컨텐츠를 더욱 명확하게 인식할 수 있도록 발전시킬
                        계획입니다.
                    </p>
                </tabCommonStyle.InsightContents>
            </tabCommonStyle.InsightBox>
        </>
    );
};
