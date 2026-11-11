// Screen 7 destinations and external links configuration
// Update any link here without altering screen components

export const DESTINATIONS = {
  // Screen 5
  keusPageUrl: 'https://www.kalpriti.com/work',

  // Screen 7: Role-specific CTAs
  founder: {
    bookingUrl: 'https://calendar.app.google/38wwA3DR8pNz7xki9',
    emailFallback:
      'mailto:hello@kalpriti.com?subject=Mapping%20prospect%20drop-off%20(Founder)&body=Hi%20Vaibhav%2C%20I%20went%20through%20the%20lead%20magnet%20and%20would%20like%20to%20map%20where%20prospects%20are%20losing%20the%20thread.',
  },

  marketing: {
    // WhatsApp click-to-chat with prefilled text mentioning role and "campaign"
    whatsappUrl:
      'https://wa.me/919529985797?text=Hi%20Vaibhav%2C%20as%20Marketing%20Head%20I%20have%20a%20campaign%20I%20would%20like%20to%20review%20an%20after-click%20experience%20for.',
    emailFallback:
      'mailto:hello@kalpriti.com?subject=Live%20campaign%20review%20(Marketing%20Head)&body=Hi%20Vaibhav%2C%20here%20is%20one%20of%20our%20campaigns.%20I%20would%20like%20to%20see%20the%20after-click%20experience%20you%20would%20build.',
  },

  product: {
    // WhatsApp click-to-chat with prefilled text mentioning role and "sales questions"
    whatsappUrl:
      'https://wa.me/919529985797?text=Hi%20Vaibhav%2C%20as%20Product%2FGrowth%20Head%20I%20have%20key%20sales%20questions%20I%20would%20like%20the%20experience%20to%20answer.',
    emailFallback:
      'mailto:hello@kalpriti.com?subject=Sales%20questions%20review%20(Product%2FGrowth%20Head)&body=Hi%20Vaibhav%2C%20here%20are%20our%20top%20sales%20questions.%20I%20would%20like%20to%20see%20how%20an%20interactive%20experience%20answers%20them.',
  },

  // Analytics
  // Held till full production is completed
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
};
