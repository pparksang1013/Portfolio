import { aboutEduStyle } from "./style/AboutEduStyle";
import { Highlight } from "../../shared/Highlight";

export const AboutEdu = () => {
    return (
        <aboutEduStyle.Box>
            <aboutEduStyle.Ul>
                <aboutEduStyle.Title>: education</aboutEduStyle.Title>

                <aboutEduStyle.Li
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <aboutEduStyle.LeftBox>
                        2022.11 ~<br />
                        2023.05
                    </aboutEduStyle.LeftBox>
                    <aboutEduStyle.RightBox>
                        <aboutEduStyle.SubTitle>
                            플레이데이터 부트캠프 <span>빅데이터 과정 수료</span>
                        </aboutEduStyle.SubTitle>
                        <aboutEduStyle.Desc>
                            파이널 프로젝트를 웹 프로젝트로 진행하며 코드의 변경 사항을 실시간으로 확인할 수 있는 점이
                            흥미로웠습니다. 또한, 프로젝트를 진행하는 과정에서 팀원들의{" "}
                            <Highlight>의견을 수용</Highlight>
                            하며 함께 프로젝트를 발전시켜 나가는 과정에 매력을 느껴 프론트엔드 개발자를 목표로 하게
                            되었습니다.
                        </aboutEduStyle.Desc>
                    </aboutEduStyle.RightBox>
                </aboutEduStyle.Li>

                <aboutEduStyle.Li
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <aboutEduStyle.LeftBox>
                        2023.04 &
                        <br />
                        2023.07
                    </aboutEduStyle.LeftBox>
                    <aboutEduStyle.RightBox>
                        <aboutEduStyle.SubTitle>원티드 프리온보딩 프론트엔드</aboutEduStyle.SubTitle>
                        <aboutEduStyle.Desc>
                            원티드 프리온보딩은 채용 플랫폼 원티드에서 진행한 교육 프로그램입니다. <br />
                            23년 04월과 23년 07월 2개의 과정을 수료했습니다. 이 과정을 통해 React와 Nextjs에 대해 학습할
                            수 있었습니다.
                        </aboutEduStyle.Desc>
                    </aboutEduStyle.RightBox>
                </aboutEduStyle.Li>

                <aboutEduStyle.Li
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <aboutEduStyle.LeftBox>
                        2012.02 ~<br />
                        2017.08
                    </aboutEduStyle.LeftBox>
                    <aboutEduStyle.RightBox>
                        <aboutEduStyle.SubTitle>
                            전주대학교 <span>관광경영학과 졸업</span>
                        </aboutEduStyle.SubTitle>
                        <aboutEduStyle.Desc>
                            관광경영학과 특성상 수 많은 해외답사를 다녀왔습니다. 해외답사를 가기위해 팀원들과{" "}
                            <Highlight>협업</Highlight>을 하고, 익숙하지 않은 환경에서 함께 어려움을 극복할 수
                            있었습니다. 해외답사를 통해 여러 사람들과 합을 맞춰 목표를 이뤄나가는 경험을 할 수
                            있었습니다.
                        </aboutEduStyle.Desc>
                    </aboutEduStyle.RightBox>
                </aboutEduStyle.Li>
            </aboutEduStyle.Ul>
        </aboutEduStyle.Box>
    );
};
