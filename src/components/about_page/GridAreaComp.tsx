import styled from "styled-components";

// 🔥 NAME
function NameArea() {
    return (
        <Style_Name>
            <ul>
                <li className="name_name">
                    박상민 <span className="name_birth">93. 10. 13.</span>
                </li>
                <li className="name_phone">010 4010 3000</li>
            </ul>

            <img src="img/chiken.png" alt="character" height={130} />
        </Style_Name>
    );
}

const Style_Name = styled.div`
    grid-area: name;
    border: 0.4px solid #999;
    padding: 30px 40px;
    position: relative;

    .name_name {
        font-size: 3.6rem;
        -webkit-text-stroke: 1px;
        letter-spacing: 1.5px;
        font-weight: 900;

        .name_birth {
            display: inline-block;
            vertical-align: text-bottom;
            padding-bottom: 6px;
            font-size: 1.4rem;
        }
    }

    .name_phone {
        font-size: 1.8rem;
        font-weight: 900;
        word-spacing: 5px;
        color: #7b7c88;
        margin-top: 10px;
    }

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;

// 🔥 WANTED
function WantedArea() {
    return (
        <Style_Wanted>
            <div className="wanted_contents">
                <img src="img/wanted_logo.png" alt="wanted logo" height={100} />
                <p className="wanted_title">
                    원티드 프리온보딩 <br /> 프론트엔드 수료
                </p>
            </div>
        </Style_Wanted>
    );
}

const Style_Wanted = styled.div`
    grid-area: wanted;
    background-size: cover;
    background-image: url("img/gradient_bg.jpg");
    position: relative;

    .wanted_contents {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            margin-left: 14px;
        }

        .wanted_title {
            font-weight: 900;
            color: #fff;
            text-align: center;
            font-size: 1.2rem;
            margin-top: 4px;
        }
    }
`;

// 🔥 BOOTCAMP
import { BiPalette } from "react-icons/bi";

function BootcampArea() {
    return (
        <Style_Bootcamp>
            <div className="bootcamp_title-box">
                <h3>
                    엔코아 플레이데이터 <br />
                    빅데이터 부트캠프 <span>22/11 ~ 23/06</span>
                </h3>
            </div>

            <Style_BootcampContents>
                <div className="contents_left contents">
                    <div className="subtitle" id="left_subtitle">
                        <img src="img/circle_icon.png" alt="icon" height={18} />
                        <h4>포용력있는 개발자</h4>
                    </div>

                    <div className="sub_description">
                        <p>
                            다양한 경험을 통해 다양성을 존중하고 수긍할 수 있는 태도를 배울 수 있었고, 그로인해 포용력을
                            지닌 개발자가 될 수 있다고 생각합니다.
                        </p>
                        <p>
                            파이널 프로젝트를 진행할 때, 팀원들간 의사소통에 오해가 생겨 문제가 발생했습니다. 팀장으로서
                            서로의 입장을 듣고 오해를 풀어서 문제를 해결했고, 프로젝트를 성공적으로 끝마칠 수 있었던
                            경험이 있습니다.
                        </p>
                        <p>
                            또한 팀원들과 수많은 의사소통을 통해 다양한 시각을 이해하고 받아들이면서, 개발에 대한 이해를
                            얻을 수 있었습니다.
                        </p>
                    </div>
                </div>
                <div className="contents_right contents">
                    <div className="subtitle" id="right_subtitle">
                        <BiPalette size={20} />
                        <h4>디자인감각있는 프론트엔드 개발자</h4>
                    </div>

                    <p className="sub_description">
                        <p>저는 프론트엔드 개발자에게 있어 디자인 감각도 중요하다고 생각합니다.</p>
                        <p>
                            부트캠프 파이널 프로젝트에서 메인 페이지, 캘린더, 그리고 대쉬보드 페이지의 디자인을
                            담당했고, 이를 통해 팀원들로부터 디자인 능력을 칭찬받았습니다.
                        </p>
                        <p>
                            부트캠프가 끝나고 나서 디자인적으로 웹페이지 완성도가 부족하다는 생각이 들었습니다. 그래서
                            일러스트를 배우는 노력을 했습니다. 더 나아가, 웹페이지에 3D 요소를 추가하기 위해 3D 툴에
                            대한 학습도 계획하고 있습니다. 이런 노력들을 통해 디자인과 기술적 능력을 접목시켜 더 높은
                            수준의 프론트엔드 개발을 지향하고 있습니다.
                        </p>
                    </p>
                </div>
            </Style_BootcampContents>
        </Style_Bootcamp>
    );
}

const Style_Bootcamp = styled.div`
    grid-area: bootcamp;
    padding: 30px;
    border: 0.4px solid #c3c4c8;
    background-color: #f9fafc;

    h3 {
        padding-left: 10px;
        font-size: 2.66rem;
        letter-spacing: 0.8px;
        font-weight: 900;
        line-height: 1.06;
        background: linear-gradient(180deg, var(--blue-color) 40%, #9bb4db 160%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        span {
            font-size: 0.9rem;
            color: var(--black-color);
            -webkit-text-fill-color: var(--blue-color);
        }
    }
`;

const Style_BootcampContents = styled.div`
    display: flex;
    flex: 1;
    gap: 18px;
    margin-top: 50px;

    .contents {
        width: 50%;
        padding: 18px;

        .subtitle {
            padding: 6px 12px 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            border-radius: 20px;

            h4 {
                margin-left: 8px;
                font-size: 1.2rem;
                font-weight: 900;
            }
        }

        .sub_description {
            text-indent: 10px;
            margin-top: 10px;
            line-height: 1.44;
            font-size: 0.9em;

            p {
                margin-top: 12px;

                &:nth-of-type(1) {
                    margin-top: 0;
                }
            }
        }
    }

    #left_subtitle {
        background-color: var(--blue-color);
        color: #f0f6fe;
    }

    #right_subtitle {
        background-color: var(--yellow-color);
        color: #433300;
    }
`;

// 🔥 SCHOOL
import { FaArrowsTurnRight } from "react-icons/fa6";

function SchoolArea() {
    return (
        <Style_School>
            <h3 className="school_title">
                전주대 <br /> 관광경영학과 <br /> 졸업 <span>~ 17/08</span>
            </h3>

            <Style_Borderline />

            <div className="school_contents">
                <div className="school_subtitle">
                    <FaArrowsTurnRight size={19} />
                    <h4>협업이 익숙한 개발자</h4>
                </div>

                <p>
                    관광경영학과 특성상 수 많은 해외답사를 다녀올 수 있었습니다. 해외답사를 가기위해 팀원들과 협업을
                    하고, 익숙하지 않은 환경에서 함께 어려움을 극복해나가는 경험을 많이 할 수 있었습니다. 이러한 경험을
                    통해 여러 사람들과 합을 맞춰 목표를 이뤄나가는데 많이 익숙해질 수 있었습니다.
                </p>
            </div>
        </Style_School>
    );
}

const Style_School = styled.div`
    grid-area: school;
    background: url("img/school_bg.jpg");
    background-size: cover;
    padding: 18px;
    filter: grayscale(0.25);

    .school_title {
        color: #fff;
        text-shadow: 1px 1px 4px #0000002e;
        font-size: 2.2rem;
        font-weight: 900;
        mix-blend-mode: overlay;

        span {
            font-size: 0.9rem;
        }
    }

    .school_contents {
        p {
            text-indent: 10px;
            margin-top: 10px;
            line-height: 1.44;
            font-size: 0.9em;
            padding: 8px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.4);
        }

        .school_subtitle {
            display: flex;
            align-items: center;
            padding: 6px 12px 6px;
            width: fit-content;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.4);
            margin-top: 20px;

            h4 {
                margin-left: 8px;
                font-size: 1.2rem;
                font-weight: 900;
            }
        }
    }

    /* filter: grayscale(0.5); */
`;

const Style_Borderline = styled.div`
    width: 8px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    margin-top: 30px;
    mix-blend-mode: overlay;
`;

// 🔥 GITAREA
import { CommonComponents } from "../common_comp/Index";

function GitArea() {
    return (
        <Style_Git>
            <CommonComponents.GitLinkComp href="https://github.com/pparksang1013" size={120} />
            <div className="arrow_box">
                <img src="img/arrow.png" alt="arrow" height={32} />
                <span>github link</span>
            </div>
        </Style_Git>
    );
}

const Style_Git = styled.div`
    grid-area: git;
    background-color: #ff6c4f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    a {
        color: #fff;
    }

    .arrow_box {
        position: absolute;
        bottom: 26px;
        right: 36px;

        img {
            margin-bottom: 10px;
        }

        span {
            color: #fff;
        }
    }
`;

export const GridAreaComp = {
    NameArea,
    WantedArea,
    BootcampArea,
    SchoolArea,
    GitArea,
};
