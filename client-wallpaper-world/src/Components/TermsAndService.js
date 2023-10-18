import React from 'react';
import { Typography, Box, Container ,Paper} from '@mui/material';

const TermsOfServiceSection = ({ title, content }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1">
      {content}
    </Typography>
  </Paper>
  );
};

const TermsAndService = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ margin: '1px 20px 10px 10px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Service
        </Typography>
      </Box>

      <TermsOfServiceSection
        title="Introduction"
        content="These Terms of Service outline the rules and regulations for the use of the Online Wallpaper Store's website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use the Online Wallpaper Store if you do not agree to take all of the terms and conditions stated on this page."
      />

      <TermsOfServiceSection
        title="Cookies"
        content="We employ the use of cookies. By accessing the Online Wallpaper Store, you agreed to use cookies in agreement with the Online Wallpaper Store's Privacy Policy."
      />

      <TermsOfServiceSection
        title="License"
        content="Unless otherwise stated, Online Wallpaper Store and/or its licensors own the intellectual property rights for all material on the Online Wallpaper Store. All intellectual property rights are reserved. You may access this from the Online Wallpaper Store for your personal use subjected to restrictions set in these terms and conditions."
      />

      <TermsOfServiceSection
        title="Hyperlinking to our Content"
        content="The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors, and Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website."
      />

      <TermsOfServiceSection
        title="Iframes"
        content="Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website."
      />

      <TermsOfServiceSection
        title="Content Liability"
        content="We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."
      />

      <TermsOfServiceSection
        title="Reservation of Rights"
        content="We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
      />

      <TermsOfServiceSection
        title="Removal of links from our website"
        content="If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly."
      />

      <TermsOfServiceSection
        title="Changes to Terms of Service"
        content="We reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
      />
    </Container>
  );
};

export default TermsAndService;
