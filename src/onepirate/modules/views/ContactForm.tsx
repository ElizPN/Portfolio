import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import { useState } from 'react';

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
      <Grid container component="form" onSubmit={onSubmit}>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
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
              <Typography variant="h2" component="h2" gutterBottom>
               Contact me
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
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
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