import React from 'react'
import PrivacyPolicySection from './PrivacyPolicySection'
import { Box, Container,Typography } from '@mui/material'
import { Margin } from '@mui/icons-material'

export default function Privacy_policy() {
  return (
    <Container maxWidth="lg"  >
      <Box sx={{margin:"1px 20px 10px 10px"}}>
      <Typography variant="h4" component="h1" gutterBottom >
          Privacy Policy
        </Typography>
      </Box>
      

    <PrivacyPolicySection
        title="Introduction"
        content="This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use the Online Wallpaper Store. By using our service, you agree to the practices described in this policy."
      />

      <PrivacyPolicySection
        title="Information We Collect"
        content="User Account Information: When you create an account, we may collect your full name, email address, and age. Wallpaper Information: We may collect data related to wallpapers you upload, including names, categories, sizes, and ratings. User Interactions: We collect information about your interactions with the Online Wallpaper Store, such as downloads and user activity."
      />

      <PrivacyPolicySection
        title="How We Use Your Information"
        content="We use your personal information to provide and improve our service, including account management, customized content delivery, and troubleshooting. We may use your information to send you notifications and updates related to the service."
      />

      <PrivacyPolicySection
        title="Data Sharing"
        content="We do not share your personal information with third parties unless required by law or with your explicit consent."
      />

      <PrivacyPolicySection
        title="Data Security"
        content="We implement security measures to protect your data from unauthorized access, disclosure, alteration, and destruction."
      />

      <PrivacyPolicySection
        title="User Choices"
        content="You can update your account information and privacy settings at any time. You have the option to delete your account, which will permanently remove your data from our system."
      />

      <PrivacyPolicySection
        title="Cookies and Tracking Technologies"
        content="We may use cookies and similar tracking technologies to enhance your user experience and collect information about your usage of the Online Wallpaper Store."
      />

      <PrivacyPolicySection
        title="Children's Privacy"
        content="The Online Wallpaper Store is not intended for children under the age of 13. We do not knowingly collect personal information from children."
      />

      <PrivacyPolicySection
        title="Changes to this Policy"
        content="We may update this Privacy Policy periodically. We will notify you of any changes, and the latest version of the policy will be available on the Online Wallpaper Store."
      />

      <PrivacyPolicySection 
        title="Contact Us"
        content="If you have questions or concerns about this Privacy Policy, please contact us at [your contact information]."
      />
    

  </Container>
  )
}
