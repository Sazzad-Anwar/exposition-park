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
      link: '/',
      image: `${base}direction-parking-blue.svg`,
    },
    {
      name: 'Orange Structure',
      initials: 'O',
      description: '3975 Bill Robertson Ln, Los Angeles, CA 90037',
      link: '/',
      image: `${base}direction-parking-orange.svg`,
    },
    {
      name: 'Pink Lot',
      initials: 'P',
      description: '899 S Park Dr, Los Angeles, CA 90037',
      link: '/',
      image: `${base}direction-parking-pink.svg`,
    },
    {
      name: 'Yellow Lot',
      initials: 'Y',
      description: '3991 Hoover St, Los Angeles, CA 90037',
      link: '/',
      image: `${base}direction-parking-yellow.svg`,
    },
    {
      name: 'Green Lot',
      initials: 'G',
      description: '3986 Hoover St, Los Angeles, CA 90037',
      link: '/',
      image: `${base}direction-parking-green.svg`,
    },
    {
      name: 'State Dr.',
      initials: 'S',
      description: '723-873 State Dr, Los Angeles, CA 90037',
      link: '/',
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
      link: '/',
    },
    {
      title: 'Bus Parking',
      icon: `${base}bus-parking-icon.svg`,
      description:
        'Bus Parking available in the Green Lot, subject to availability and event reservations.',
      link: '/',
    },
    {
      title: 'Oversize Vehicles',
      icon: `${base}bus-parking-icon.svg`,
      description:
        'Oversized vehicle parking available in the Green Lot, subject to availability and event reservations.',
      link: '/',
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
      link: '/',
    },
    {
      title: 'Orange Structure',
      color: 'orange',
      initials: 'O',
      description: `
        3975 Bill Robertson Ln, Los Angeles, CA 90037:
        P1 Level: 25 ADA Spaces`,
      link: '/',
    },
    {
      title: 'Pink Lot',
      color: 'pink',
      initials: 'P',
      description: `
        899 S Park Dr, Los Angeles, CA 90037:
        Lot: 10 ADA Spaces`,
      link: '/',
    },
    {
      title: 'Green Lot',
      color: 'green',
      initials: 'G',
      description: `
        3986 Hoover St, Los Angeles, CA 90037:
        20 ADA Spaces`,
      link: '/',
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
