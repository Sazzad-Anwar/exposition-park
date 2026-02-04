document.addEventListener('alpine:init', () => {
  Alpine.data('directions', () => ({
    data: [
      {
        name: 'Blue Structure',
        initials: 'B',
        description: '3855 S Figueroa St, Los Angeles, CA 90037 Get directions',
        link: '/',
        image: '/direction-parking-blue.svg',
      },
      {
        name: 'Orange Structure',
        initials: 'O',
        description: '3975 Bill Robertson Ln, Los Angeles, CA 90037',
        link: '/',
        image: '/direction-parking-orange.svg',
      },
      {
        name: 'Pink Lot',
        initials: 'P',
        description: '899 S Park Dr, Los Angeles, CA 90037',
        link: '/',
        image: '/direction-parking-pink.svg',
      },
      {
        name: 'Yellow Lot',
        initials: 'Y',
        description: '3991 Hoover St, Los Angeles, CA 90037',
        link: '/',
        image: '/direction-parking-yellow.svg',
      },
      {
        name: 'Green Lot',
        initials: 'G',
        description: '3986 Hoover St, Los Angeles, CA 90037',
        link: '/',
        image: '/direction-parking-green.svg',
      },
      {
        name: 'State Dr.',
        initials: 'S',
        description: '723-873 State Dr, Los Angeles, CA 90037',
        link: '/',
        image: '/direction-parking-state.svg',
      },
    ],
    hoveredItem: null,
    hover(item) {
      this.hoveredItem = item
    },
  }))
})
