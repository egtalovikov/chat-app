import React, { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography
} from "@mui/material";

export const UserLogin = ({ onLogin }) => {
    const [name, setName] = useState("");

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Войти
                </Typography>
                <TextField
                label="Имя пользователя"
                placeholder="Введите имя"
                size="small"
                style={{ margin: "10px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br />
                <Button
                variant="contained"
                style={{ margin: "10px" }}
                onClick={() => onLogin(name)}
                >
                    Войти в чат
                </Button>
            </CardContent>
        </Card>
    );
};