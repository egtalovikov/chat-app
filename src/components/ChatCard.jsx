import { useState } from "react";
import { 
    CardContent,
    CardHeader,
    Card,
    CardActions,
    TextField,
    Button
} from "@mui/material";
import { grey } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import { Messages } from "./Messages";
import { v4 as uid } from "uuid";
import { useAppDispatch } from "../store/hooks";
import { addMessage } from "../store/messagesSlice";
import { styles } from "../consts";

export const ChatCard = ({ user }) => {
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState("");

    const postMessage = () => {
        if (message.trim() !== "") {
            const date = new Date();
            const newMessage = {
                id: uid(),
                message: message.trim(),
                userId: user.id,
                userName: user.name,
                time: `${date.getHours()}:${date.getMinutes()}`,
            };
            dispatch(addMessage(newMessage));
        }
        setMessage("");
    };

    return (
        <Card sx={{ width: "25rem" }} style={styles.cardStyle}>
            <CardHeader
            style={styles.bgGradient}
            />
            <CardContent style={styles.CardContentStyle}>
                <Messages userId={user.id} />
            </CardContent>
            <CardActions disableSpacing style={{ background: grey[50] }}>
                <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="standard"
                size="small"
                multiline
                sx={{ width: "20rem" }}
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <Button aria-label="отправить сообщение" onClick={postMessage}>
                    <SendIcon />
                </Button>
            </CardActions>
        </Card>
    );
};