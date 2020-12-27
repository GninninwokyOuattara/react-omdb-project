import React, { useState, useContext } from "react";

interface IContext {
    showDetailModal: false | string;
    show: Function;
    hide: Function;
}

const DetailContext = React.createContext<IContext | {}>({});

const ContextAPI: React.FC<React.ReactNode> = ({ children }) => {
    const [showDetailModal, setShowDetailModal] = useState<false | string>(
        false
    );

    const show = (imdbID: string) => {
        setShowDetailModal(() => {
            return imdbID;
        });
    };

    const hide = () => {
        setShowDetailModal(() => {
            return false;
        });
    };

    const value = { showDetailModal, show, hide };
    return (
        <DetailContext.Provider value={value as IContext}>
            {children}
        </DetailContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(DetailContext) as IContext;
};

export { DetailContext, ContextAPI };
