import { homeTitleStyle } from "./style/HomeTitleStyle";

export const HomeTitle = () => {
    return (
        <homeTitleStyle.Box>
            <homeTitleStyle.Frontend
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    opacity: { duration: 1.4, delay: 0.5 },
                    x: { duration: 1.4, delay: 0.5 },
                }}
            >
                FRONTEND
            </homeTitleStyle.Frontend>
            <homeTitleStyle.Title
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ opacity: { duration: 1, delay: 1.5 }, scale: { duration: 1, delay: 1.5 } }}
            >
                <homeTitleStyle.Colon>:</homeTitleStyle.Colon>
                PORTFOLIO
            </homeTitleStyle.Title>
            <homeTitleStyle.Name
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ opacity: { duration: 1.4, delay: 0.5 }, x: { duration: 1.4, delay: 0.5 } }}
            >
                PARKSANGMIN
            </homeTitleStyle.Name>
        </homeTitleStyle.Box>
    );
};
