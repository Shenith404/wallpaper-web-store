import React from 'react';
import { Typography, Box, Container,Paper } from '@mui/material';

const ReturnRefundSection = ({ title, content }) => {
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

const ReturnAndRefund = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ margin: '1px 20px 10px 10px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Return and Refund Policy
        </Typography>
      </Box>

      <ReturnRefundSection
        title="Introduction"
        content="This Return and Refund Policy is applicable to purchases made on the Online Wallpaper Store. By making a purchase, you agree to adhere to the terms outlined in this policy."
      />

      <ReturnRefundSection
        title="Eligibility for Returns and Refunds"
        content="To be eligible for a return and refund, items must be in the same condition as when you received them. They must also be in the original packaging."
      />

      <ReturnRefundSection
        title="Refund Process"
        content="Upon receipt of the returned item, we will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund to your original payment method."
      />

      <ReturnRefundSection
        title="Exchanges"
        content="If you received a damaged or defective item, we will send you a replacement for the same item. Please contact our customer support to request an exchange."
      />

      <ReturnRefundSection
        title="Contact Us"
        content="If you have any questions or concerns about our Return and Refund Policy, please contact us at [your contact information]."
      />
    </Container>
  );
};

export default ReturnAndRefund;
