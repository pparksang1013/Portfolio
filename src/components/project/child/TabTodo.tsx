import { tabCommonStyle } from "../style/TabCommonStyle";
import { Highlight } from "../../../shared/Highlight";

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

                <tabCommonStyle.FuncContent>
                    <h5>로그인 / 회원가입 양식 유효성 검사</h5>

                    <ul>
                        <li>useState와 useRef를 활용하여 회원가입 및 로그인 양식의 유효성 검사 기능을 구현.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>API 통신</h5>

                    <ul>
                        <li>
                            <Highlight>Axios 라이브러리</Highlight>를 사용하여 원티드에서 제공한 API 주소로 요청을
                            보내고 응답을 받음.
                        </li>
                        <li>응답받은 JWT토근을 브라우저 로컬스토리지에 저장.</li>
                        <li>
                            투두리스트 페이지에서 리스트의 생성, 삭제, 수정이 발생할 때마다 데이터가 실시간으로 전송.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>리다이렉트</h5>

                    <ul>
                        <li>
                            <Highlight>react router dom 라이브러리 useNavigate hook</Highlight>을 사용해 리다이렉트를
                            구현.
                        </li>
                        <li>회원가입 페이지에서 회원가입 완료 후 로그인 페이지로 라우팅하는 기능을 구현.</li>
                        <li>
                            브라우저 로컬스토리지에 JWT토큰 값이 없는 상태로 투두리스트 페이지에 접속하면 회원가입
                            페이지로 라우팅 되는 기능 구현.
                        </li>
                        <li>
                            브라우저 로컬스토리지에 JWT토큰 값이 있는 상태로 회원가입/로그인 페이지에 접속하면
                            투두리스트 페이지로 라우팅 되는 기능 구현.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>투두리스트 페이지 데이터 렌더링</h5>

                    <ul>
                        <li>투두리스트 페이지에 접속 시, useEffect를 사용해 저장된 리스트를 즉시 보여주도록 구현.</li>
                        <li>새로운 투두리스트를 추가 후 새로고침 시, 추가된 항목이 표시되도록 구현.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>투두리스트 Update / Delete</h5>

                    <ul>
                        <li>자바스크립트 메서드를 통해 리스트 update, delete를 구현.</li>
                        <li>Update: findIndex와 splice 메서드를 통해 리스트 수정기능 구현.</li>
                        <li>Delete: filter 메서드를 통해 리스트 삭제기능 구현.</li>
                    </ul>
                </tabCommonStyle.FuncContent>

                <tabCommonStyle.FuncContent>
                    <h5>JWT 토큰</h5>

                    <ul>
                        <li>
                            axios 라이브러리 <Highlight>interceptors.request.use</Highlight> 메서드를 사용하여 모든
                            HTTP요청에 JWT 인증 토큰을 추가하는 로직 구현.
                        </li>
                    </ul>
                </tabCommonStyle.FuncContent>
            </tabCommonStyle.FuncBox>
        </>
    );
};
