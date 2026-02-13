import Alpine from 'alpinejs'

window.Alpine = Alpine

// Get base URL for assets (handles GitHub Pages deployment)
const base = import.meta.env.BASE_URL || '/'

Alpine.data('directions', () => ({
  data: [
    {
      name: 'Blue Structure',
      initials: 'B',
      description: '3855 S Figueroa St, Los Angeles, CA 90037 Get directions',
      link: 'https://maps.app.goo.gl/MyQrE7STEdTgPJxH8',
      image: `${base}direction-parking-blue.svg`,
    },
    {
      name: 'Orange Structure',
      initials: 'O',
      description: '3975 Bill Robertson Ln, Los Angeles, CA 90037',
      link: 'https://maps.app.goo.gl/T9pC5t4bCzarCcqR8',
      image: `${base}direction-parking-orange.svg`,
    },
    {
      name: 'Pink Lot',
      initials: 'P',
      description: '899 S Park Dr, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/dir//Pink+Lot',
      image: `${base}direction-parking-pink.svg`,
    },
    {
      name: 'Yellow Lot',
      initials: 'Y',
      description: '3991 Hoover St, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/Yellow+Lot/@34.0114957,-118.2904453,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c8061d305c0d:0xba6274dff4a364b2!8m2!3d34.0114913!4d-118.2878704!16s%2Fg%2F11q40j1sd5?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-yellow.svg`,
    },
    {
      name: 'Green Lot',
      initials: 'G',
      description: '3986 Hoover St, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-green.svg`,
    },
    {
      name: 'State Dr.',
      initials: 'S',
      description: '723-873 State Dr, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/723-873+State+Dr,+Los+Angeles,+CA+90037,+USA/@34.0164608,-118.2852314,927m/data=!3m1!1e3!4m6!3m5!1s0x80c2c8082833104d:0x151bec7ba49e0863!8m2!3d34.01652!4d-118.2850386!16s%2Fg%2F11qh2qb_tc?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-state.svg`,
    },
  ],
  defaultImage: `${base}direction-parking-all.svg`,
  hoveredItem: null,
  hover(item) {
    this.hoveredItem = item
  },
}))

Alpine.data('dropOffPickup', () => ({
  data: [
    {
      title: 'Drop-Off and Pick-Up',
      icon: `${base}location-icon.svg`,
      description:
        'Designated areas for safe loading and unloading of passengers. Parking buses in these areas is prohibited.',
      link: 'https://www.google.com/maps/place/631-693+Exposition+Park+Dr,+Los+Angeles,+CA+90037,+USA/@34.0154501,-118.2901703,790m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x80c2c7e2aa25f9e9:0x9b567c4059f24b05!2s700+Exposition+Park+Dr,+Los+Angeles,+CA+90037,+USA!3b1!8m2!3d34.0161726!4d-118.2874233!16s%2Fg%2F11ckqrv23x!3m5!1s0x80c2c807fd7ad3e9:0xe620e9f8b1e3b67b!8m2!3d34.0154457!4d-118.2875954!16s%2Fg%2F11rz5m8hkh?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      title: 'Bus Parking',
      icon: `${base}bus-parking-icon.svg`,
      description:
        'Bus Parking available in the Green Lot, subject to availability and event reservations.',
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      title: 'Oversize Vehicles',
      icon: `${base}bus-parking-icon.svg`,
      description:
        'Oversized vehicle parking available in the Green Lot, subject to availability and event reservations.',
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      title: 'Location',
      icon: `${base}location-icon.svg`,
      description:
        'Exposition Park Dr. (IMAX entrance).Via S. BRL, left on MLK, and left on Hoover 700 Exposition Park Dr, Los Angeles, CA 90037',
      link: null,
    },
  ],
}))

Alpine.data('accessibleParking', () => ({
  data: [
    {
      title: 'Blue Structure',
      initials: 'B',
      color: 'blue',
      description: `
        3855 S Figueroa St, Los Angeles, CA 90037:
        Level A: 43 ADA Spaces
        Level B: 9 ADA Spaces
        Level C: 11 ADA Spaces`,
      link: 'https://maps.app.goo.gl/MyQrE7STEdTgPJxH8',
    },
    {
      title: 'Orange Structure',
      color: 'orange',
      initials: 'O',
      description: `
        3975 Bill Robertson Ln, Los Angeles, CA 90037:
        P1 Level: 25 ADA Spaces`,
      link: 'https://maps.app.goo.gl/T9pC5t4bCzarCcqR8',
    },
    {
      title: 'Pink Lot',
      color: 'pink',
      initials: 'P',
      description: `
        899 S Park Dr, Los Angeles, CA 90037:
        Lot: 10 ADA Spaces`,
      link: 'https://www.google.com/maps/dir//Pink+Lot',
    },
    {
      title: 'Green Lot',
      color: 'green',
      initials: 'G',
      description: `
        3986 Hoover St, Los Angeles, CA 90037:
        20 ADA Spaces`,
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
    },
  ],
}))

Alpine.data('faq', () => ({
  data: [
    {
      title: 'What types of payments are accepted?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: true,
    },
    {
      title: 'Is there bus and oversized parking during events?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: false,
    },
    {
      title: 'Is there bus and oversized parking during events?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: false,
    },
    {
      title: 'Is there bus parking for museum visitors?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: false,
    },
    {
      title: 'Where is ADA parking located?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: false,
    },
    {
      title: 'Are there electric vehicle (EV) charging stations?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: false,
    },
    {
      title: 'Are there height restrictions in the Blue Parking Structure?',
      description:
        'Cash and all major credit cards, except American Express, are accepted at Exposition Park. For cash payments in the Blue Parking Structure, guests should use the Pay Station located on the northwest corner of Level A.',
      isOpen: false,
    },
  ],
  toggle(item) {
    this.data.forEach((i) => {
      if (i === item) {
        i.isOpen = !i.isOpen
      } else {
        i.isOpen = false
      }
    })
  },
}))
Alpine.store('accessibility', {
  highContrast: localStorage.getItem('highContrast') === 'true',
  fontSize: parseInt(localStorage.getItem('fontSize')) || 100,

  toggleHighContrast() {
    this.highContrast = !this.highContrast
    localStorage.setItem('highContrast', this.highContrast)
    this.applySettings()
  },

  increaseFont() {
    if (this.fontSize < 150) {
      this.fontSize += 10
      localStorage.setItem('fontSize', this.fontSize)
      this.applySettings()
    }
  },

  decreaseFont() {
    if (this.fontSize > 100) {
      this.fontSize -= 10
      localStorage.setItem('fontSize', this.fontSize)
      this.applySettings()
    }
  },

  reset() {
    this.fontSize = 100
    localStorage.setItem('fontSize', this.fontSize)
    this.applySettings()
  },

  setDefaults() {
    this.highContrast = false
    this.fontSize = 100
    localStorage.setItem('highContrast', this.highContrast)
    localStorage.setItem('fontSize', this.fontSize)
    this.applySettings()
  },

  applySettings() {
    const html = document.documentElement
    if (this.highContrast) {
      html.classList.add('high-contrast')
    } else {
      html.classList.remove('high-contrast')
    }
    html.style.fontSize = `${this.fontSize}%`
  },

  init() {
    this.applySettings()
  },
})

Alpine.start()
