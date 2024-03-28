export interface IStyleSkillTabLi {
    $active: boolean;
}

export interface ISkillTab {
    id: number;
    title: string;
}

interface IJsTab {
    number: string;
    title: string;
}

interface IReactTab {
    number: string;
    title: string;
}

export interface ITabContentsData {
    js: {
        contents: IJsTab[];
        image: string;
    };
    react: {
        contents: IReactTab[];
        image: string;
    };
}

export interface IStyleTabColor {
    $color: string;
}
