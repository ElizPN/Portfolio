import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import { useState } from 'react';
import Link from '@mui/material/Link';
import {GitHub, LinkedIn } from '@mui/icons-material';

function ContactForm() {

  const [open, setOpen] = React.useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "757fdfa8-9268-4e1a-a3e4-223c2140e89f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container component="form" onSubmit={onSubmit}   justifyContent="space-around">
        <Grid item xs={12}  sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h4" component="h2" gutterBottom>
               Send me a message
              </Typography>
              <Typography variant="h5">
                And let's Create Something Amazing Together!
              </Typography>
               
              <TextField
                required
                noBorder
                placeholder="Your name"
                variant="standard"
                name='name'
                type='text'
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <TextField
                required
                noBorder
                placeholder="Your email"
                variant="standard"
                name='email'
                type='email'
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <TextField
                required
                noBorder
                placeholder="Message"
                variant="standard"
                name='message'
                type='text'
                sx={{ width: '100%', mt: 3, mb: 2 }}
                multiline
                rows={5}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          mt={20}
          mb={10}
          xs={12}
        
          sx={{ display: { md: 'block' }, position: 'relative',  }}
        >

          <Box
            sx={{
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
              
            }}
          >
           <Typography variant="h6" color="text.primary" gutterBottom={true}>
              Contacts
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: romanovaliza9393@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={5}>
              Phone: +46 76 747 85 07 
            </Typography>

             <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link href="https://github.com/ElizPN" color="inherit" target="_blank">
              <GitHub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/liza-romanova-8216a6214/"
              color="inherit"
              target="_blank"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedIn />
            </Link>
            </Box>
        </Grid>
        
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message={result}
      />
        <Typography>{result}</Typography>
    </Container>
  );
}

export default ContactForm;