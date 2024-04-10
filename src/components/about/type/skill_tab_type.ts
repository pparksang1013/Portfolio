export interface TabContentsStyleInterface {
    $color: string;
}

interface Tab_Js {
    number: string;
    title: string;
}

interface Tab_React {
    number: string;
    title: string;
}

export interface TabContentsDataInterface {
    js: {
        contents: Tab_Js[];
        image: string;
    };
    react: {
        contents: Tab_React[];
        image: string;
    };
}
