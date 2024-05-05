"use client";

import * as React from "react";
import { musicStore } from ".";
import { useBearStore } from "./bear";
const Hydration = () => {
    React.useEffect(() => {
        musicStore.persist.rehydrate();
        // useBearStore.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;