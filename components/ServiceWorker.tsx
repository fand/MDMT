import { useEffect } from "react";
import nextConfig from "../next.config";

export default () => {
    // Register ServiceWorker
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            if (
                typeof navigator !== "undefined" &&
                "serviceWorker" in navigator
            ) {
                navigator.serviceWorker
                    .register(`${nextConfig.assetPrefix}/sw.js`)
            .then(console.log) // eslint-disable-line
            .catch(console.error); // eslint-disable-line
            }
        }
    }, []);

    return null;
};
