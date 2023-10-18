import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function PrivacyPolicySection({ title, content }) {
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
}

export default PrivacyPolicySection;
