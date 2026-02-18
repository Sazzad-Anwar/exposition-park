import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)
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
      image: `${base}direction-parking-blue.webp`,
    },
    {
      name: 'Orange Structure',
      initials: 'O',
      description: '3975 Bill Robertson Ln, Los Angeles, CA 90037',
      link: 'https://maps.app.goo.gl/T9pC5t4bCzarCcqR8',
      image: `${base}direction-parking-orange.webp`,
    },
    {
      name: 'Pink Lot',
      initials: 'P',
      description: '899 S Park Dr, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/800-898+S+Park+Dr,+Los+Angeles,+CA+90037/@34.0119915,-118.2899569,1515m/data=!3m1!1e3!4m6!3m5!1s0x80c2c806206cf8bd:0x8fc4a3fd677d1e03!8m2!3d34.0122078!4d-118.287761!16s%2Fg%2F11df0qvxj2?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-pink.webp`,
    },
    {
      name: 'Yellow Lot',
      initials: 'Y',
      description: '3991 Hoover St, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/Yellow+Lot/@34.0114957,-118.2904453,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c8061d305c0d:0xba6274dff4a364b2!8m2!3d34.0114913!4d-118.2878704!16s%2Fg%2F11q40j1sd5?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-yellow.webp`,
    },
    {
      name: 'Green Lot',
      initials: 'G',
      description: '3986 Hoover St, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-green.webp`,
    },
    {
      name: 'State Dr.',
      initials: 'S',
      description: '723-873 State Dr, Los Angeles, CA 90037',
      link: 'https://www.google.com/maps/place/723-873+State+Dr,+Los+Angeles,+CA+90037,+USA/@34.0164608,-118.2852314,927m/data=!3m1!1e3!4m6!3m5!1s0x80c2c8082833104d:0x151bec7ba49e0863!8m2!3d34.01652!4d-118.2850386!16s%2Fg%2F11qh2qb_tc?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-state.webp`,
    },
  ],
  defaultImage: `${base}direction-parking-all.webp`,
  hoveredItem: null,
  activeItem: null,
  previousImage: `${base}direction-parking-all.webp`,
  animating: false,
  _observer: null,
  hover(item) {
    if (this.hoveredItem === item) return

    // Set previous image before changing
    this.previousImage = this.currentImage
    this.hoveredItem = item

    // Trigger animation
    this.animating = false
    this.$nextTick(() => {
      this.animating = true
    })
  },
  get currentImage() {
    if (this.hoveredItem) return this.hoveredItem.image
    if (this.activeItem) return this.activeItem.image
    return this.defaultImage
  },
  init() {
    // Preload all images
    this.data.forEach((item) => {
      const img = new Image()
      img.src = item.image
    })
    // Preload default image
    const defaultImg = new Image()
    defaultImg.src = this.defaultImage

    this.$nextTick(() => {
      const cards = this.$root.querySelectorAll('[data-direction-card]')
      if (!cards.length) return

      this._observer = new IntersectionObserver(
        (entries) => {
          if (window.innerWidth >= 1280) return
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.directionCard)
              this.activeItem = this.data[index]
            }
          })
        },
        {
          rootMargin: '-280px 0px -60% 0px',
          threshold: 0,
        },
      )

      cards.forEach((card) => this._observer.observe(card))
    })
  },
  destroy() {
    if (this._observer) {
      this._observer.disconnect()
    }
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
      image: `${base}drop-off-pickup-image.webp`,
    },
    {
      title: 'Bus Parking',
      icon: `${base}bus-parking-icon.svg`,
      description:
        'Bus Parking available in the Green Lot, subject to availability and event reservations.',
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-green.webp`,
    },
    {
      title: 'Oversize Vehicles',
      icon: `${base}bus-parking-icon.svg`,
      description:
        'Oversized vehicle parking available in the Green Lot, subject to availability and event reservations.',
      link: 'https://www.google.com/maps/place/Green+Lot/@34.0115496,-118.2874912,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2c9ebb031b70d:0x95a91ffb0e923c36!8m2!3d34.0115452!4d-118.2849163!16s%2Fg%2F11j1zmpq3s?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
      image: `${base}direction-parking-green.webp`,
    },
    {
      title: 'Route from Bus Drop-Off to Bus Parking',
      icon: `${base}location-icon.svg`,
      description:
        'Exposition Park Dr. (IMAX entrance).Via S. BRL, left on MLK, and left on Hoover 700 Exposition Park Dr, Los Angeles, CA 90037',
      link: null,
      image: `${base}drop-off-pickup-image.webp`,
    },
  ],
  defaultImage: `${base}drop-off-pickup-image.webp`,
  hoveredItem: null,
  previousImage: `${base}drop-off-pickup-image.webp`,
  animating: false,
  hover(item) {
    if (this.hoveredItem === item) return

    this.previousImage = this.currentImage
    this.hoveredItem = item

    this.animating = false
    this.$nextTick(() => {
      this.animating = true
    })
  },
  get currentImage() {
    return this.hoveredItem ? this.hoveredItem.image : this.defaultImage
  },
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
  defaultImage: `${base}direction-parking-all.webp`,
  hoveredItem: null,
  previousImage: `${base}direction-parking-all.webp`,
  animating: false,
  hover(item) {
    if (this.hoveredItem === item) return

    this.previousImage = this.currentImage
    this.hoveredItem = item

    this.animating = false
    this.$nextTick(() => {
      this.animating = true
    })
  },
  get currentImage() {
    return this.defaultImage // The ADA section seems to only use the default map image for now but this keeps it consistent
  },
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
        'Bus, RV, and oversized vehicle parking is extremely limited and must be purchased in advance of the event. Tall vans, large SUVs, RVs, or buses cannot be accommodated in any parking garage due to height restrictions.',
      isOpen: false,
    },
    {
      title: 'Is in-and-out parking access allowed?',
      description: 'No, in-and-out access is not allowed at any time.',
      isOpen: false,
    },
    {
      title: 'Is there bus parking for museum visitors?',
      description:
        'Yes, bus parking is available. Buses should enter via the 39th and Figueroa entrance and proceed to Exposition Park Drive in front of the California Science Center IMAX Theater entrance.',
      isOpen: false,
    },
    {
      title: 'Where is ADA parking located?',
      description:
        'All parking facilities at Exposition Park are ADA-accessible and include designated ADA spaces. In the Blue Parking Structure, ADA spaces are located on all floors and are available on a first-come, first-serve basis.',
      isOpen: false,
    },
    {
      title: 'Are there electric vehicle (EV) charging stations?',
      description:
        'Yes, EV charging stations are available in the Blue Parking Structure. They are located on the north side of Levels A and B and can be used for the duration of your visit.',
      isOpen: false,
    },
    {
      title: 'Are there height restrictions in the Blue Parking Structure?',
      description:
        "Yes, the Blue Parking Structure has a height restriction of 8'2″ on Level A. Levels B, C, and D have a height restriction of 7'0″.",
      isOpen: false,
    },
    {
      title: 'Is tailgating allowed?',
      description:
        'Tailgating is generally not permitted during events at Exposition Park. For USC football games, it is allowed only in specific areas with a Tailgate Pass, which must be obtained through the University of Southern California (USC).',
      isOpen: false,
    },
    {
      title: 'Are parking rates different during events?',
      description:
        'Yes, event parking rates vary depending on the venue. For parking rate information, guests should visit the LAMC or BMO Stadium website.',
      isOpen: false,
    },
    {
      title: 'Is there discounted parking?',
      description: 'No, discounted parking rates are not available.',
      isOpen: false,
    },
    {
      title: 'Is EBT accepted for parking fees?',
      description: 'No, EBT payment is not accepted for parking fees.',
      isOpen: false,
    },
    {
      title: 'Can payment methods be split into multiple payments?',
      description: 'No, payments must be made using a single form of payment.',
      isOpen: false,
    },
    {
      title: 'Is overnight parking allowed?',
      description:
        'No, overnight parking is not permitted. Vehicles must vacate the premises within two hours after the event.',
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

const currentYear = document.getElementById('current-year')
currentYear.textContent = new Date().getFullYear()
