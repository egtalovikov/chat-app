import storage from "redux-persist/lib/storage";
import { blue, green, grey } from "@mui/material/colors";

export const excludedActions = ["persist/PERSIST", "persist/REHYDRATE"];

export const persistConfig = {
    key: "root",
    storage
};

export const styles = {
    cardStyle: {
        overflow: "hidden",
    },
    cardContentStyle: {
        background: blue[50],
        height: "400px",
        overflowY: "auto",
        marginRight: "-15px",
    },
    bgGradient: {
        background: `linear-gradient(to right, ${green[400]}, ${blue[300]})`,
        color: grey[100],
    }
}