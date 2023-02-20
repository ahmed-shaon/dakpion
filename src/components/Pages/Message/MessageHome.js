import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, TextField, IconButton } from '@mui/material';
import { IoIosSend } from 'react-icons/io'

const MessageHome = () => {


    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);




    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Message submitted: ', message);

        const now = new Date();
        const data = {
            message: message,
            timestamp: now.toISOString()
        };
        console.log('Message submitted: ', data);
        // Save message to localStorage
        localStorage.setItem('messages', JSON.stringify([...messages, data]));
        setMessages([...messages, data]);

        setMessage('');
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        // Retrieve messages from localStorage
        const storedMessages = localStorage.getItem('messages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }, []);

    const getFormattedTime = (timestamp) => {
        const options = { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(timestamp).toLocaleString('en-US', options);
      };



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', weight: '96vw' }}>
            {/* Chat message list */}
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, m: 1 }}>A</Avatar>
                    <Typography variant="body2" sx={{ bgcolor: 'grey.300', p: 1, borderRadius: '10px', maxWidth: '70%' }}>
                        Hello, how are you doing today?
                    </Typography>
                    <Typography variant="body2" sx={{ alignSelf: 'flex-end', mt: -1 }}>
                        10:30 AM
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', p: 1 }}>

                    {messages.map((msg, index) => (
                        <Box key={index}>
                            <Typography variant="body2"
                        sx={{ bgcolor: 'primary.main', color: 'white', p: 2, m: 1, borderRadius: '10px', width:'96px vw' }}>{msg.message}</Typography>
                            <Typography  variant="body2" sx={{ alignSelf: 'flex-end', mt: -1, m: 1 }}>{getFormattedTime(msg.timestamp)}</Typography>
                        </Box>
                    ))}


                </Box>
            </Box>
            {/* Message input field */}
            <form onSubmit={handleSubmit} >
                <Box
                    sx={{ display: 'flex', alignItems: 'center', p: 1 }} >
                    <TextField 
                        value={message}
                        onChange={handleChange}
                        variant="outlined" size="small"  
                        sx={{overflow: 'auto', maxHeight: 100}}
                        fullWidth
                        placeholder="Type your message here" />
                    <IconButton type="submit" color="primary" sx={{ ml: 1 }}>
                        <IoIosSend />
                    </IconButton>
                </Box>
            </form>

        </Box>
    );
};

export default MessageHome;

