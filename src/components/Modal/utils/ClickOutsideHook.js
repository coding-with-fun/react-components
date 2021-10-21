import { useEffect, useRef } from "react";

export const ClickOutsideHook = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const domHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", domHandler);

        return () => {
            document.removeEventListener("mousedown", domHandler);
        };
    });

    return domNode;
};
