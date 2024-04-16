import { tabCommonStyle } from "../style/TabCommonStyle";
import { TODO_FUNC_CONTENTS_DATA } from "../data/func_content_data";
import { FuncContent } from "./FuncContent";

export const TabTodo = () => {
    return (
        <>
            <tabCommonStyle.MainBox>
                <tabCommonStyle.Title>
                    <span>01.</span>
                    투두리스트
                </tabCommonStyle.Title>

                <tabCommonStyle.Desc>
                    원티드 프리온보딩 사전과제로 진행한 개인 프로젝트입니다. <br />
                    <tabCommonStyle.GreyText>
                        원티드 프리온보딩이란? 채용 플랫폼 '원티드'에서 진행하는 교육 프로그램입니다.
                    </tabCommonStyle.GreyText>
                    <br />
                    사전과제에 합격해 교육을 수료했습니다.
                </tabCommonStyle.Desc>
            </tabCommonStyle.MainBox>

            <tabCommonStyle.FuncBox>
                <tabCommonStyle.FuncMain>
                    <h3>프로젝트 주요 기능 및 구현 사항</h3>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        로그인
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        회원가입
                    </h4>

                    <h4>
                        <tabCommonStyle.StarIcon size={18} />
                        투두리스트 CRUD
                    </h4>
                </tabCommonStyle.FuncMain>
                <h3>구현 사항</h3>

                <FuncContent contents={TODO_FUNC_CONTENTS_DATA} />
            </tabCommonStyle.FuncBox>
        </>
    );
};
