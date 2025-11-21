export const categories = [
  {
    id: "algcom",
    name: "Algcom",
    subcategories: ["Routers", "Access Points", "11 GHz", "5 GHz", "6 GHz", "5 GHz for C5x"],
    logo: "algcom.png"
  },
  {
    id: "tenda",
    name: "Tenda",
    subcategories: ["Routers", "Switches", "Access Points"],
    logo: "tenda.png"
  },
  {
    id: "tplink",
    name: "TP-Link",
    subcategories: ["Routers", "Switches", "Access Points", "Adapters"],
    logo: "tplink.png"
  },
  {
    id: "netis",
    name: "Netis",
    subcategories: ["Routers", "Switches", "Range Extender"],
    logo: "netis.png"
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: ["Cables", "Adapters", "Antennas"],
    logo: "accessories.jpg"
  },
  {
    id: "cudy",
    name: "Cudy",
    subcategories: ["Routers", "Access Points"],
    logo: "cudy.png"
  },
  {
    id: "witek",
    name: "Wi-Tek",
    subcategories: ["Switches", "Access Points"],
    logo: "witek.png"
  },
  {
    id: "mikrotik",
    name: "MikroTik",
    subcategories: ["Ethernet Routers", "Switches", "Wireless Systems", "Wireless for Home and Office", "Antennas", "Accessories", "RouterBOARD", "60 GHz Products"],
    logo: "mikrotik.png"
  },
  {
    id: "ubiquiti",
    name: "Ubiquiti",
    subcategories: ["Access Points", "Routers", "Switches", "Wi-Fi", "AirMax Antennas", "Accessories", "UniFi", "60 GHz Wireless", "AirMax Devices"],
    logo: "ubiquiti.jpg"
  },
  {
    id: "mimosa",
    name: "Mimosa",
    subcategories: ["PTP", "PTMP"],
    logo: "mimosa.png"
  },
  {
    id: "fiber",
    name: "Fiber Optic",
    subcategories: ["Cables", "Connectors", "Tools"],
    logo: "fiber.avif"
  }
];

export const products = [
  {
    id: 'algcom-001',
    name: 'ALGcom 11GHz 2ft Parabolic Dish',
    category: 'algcom',
    subcategory: '11 GHz',
    price: 299.99,
    stock: 5,
    availability: 'In Stock',
    description: '11 GHz high-performance parabolic dish antenna for long-range links. Durable build for outdoor deployments.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '11 GHz',
      gain: '37 dBi',
      diameter: '2 feet',
      polarization: 'Dual'
    }
  },
  {
    id: 'algcom-002',
    name: 'ALGcom 5GHz Sector Antenna 17dBi',
    category: 'algcom',
    subcategory: '5 GHz',
    price: 149.99,
    stock: 12,
    availability: 'In Stock',
    description: '5 GHz sector antenna (17 dBi) designed for broad coverage. Ideal for multipoint wireless networks.',
    image: 'https://images.pexels.com/photos/15666317/pexels-photo-15666317.jpeg?cs=srgb&dl=pexels-life-_-kor-169880157-15666317.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '5 GHz',
      gain: '17 dBi',
      beamwidth: '120°',
      polarization: 'Dual'
    }
  },
  {
    id: 'algcom-003',
    name: 'ALGcom 6GHz Dish Antenna 30dBi',
    category: 'algcom',
    subcategory: '6 GHz',
    price: 259.00,
    stock: 4,
    availability: 'Limited Stock',
    description: '6 GHz parabolic dish antenna offering 30 dBi of gain. Provides reliable point-to-point connectivity.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '6 GHz',
      gain: '30 dBi',
      diameter: '0.6 m',
      mount: 'Pole-mount'
    }
  },
  {
    id: 'algcom-004',
    name: 'ALGcom C5x Horn Antenna 25dBi',
    category: 'algcom',
    subcategory: '5 GHz for C5x',
    price: 89.99,
    stock: 20,
    availability: 'In Stock',
    description: '5 GHz horn antenna optimized for Mimosa C5x radios. Delivers 25 dBi gain with a compact design.',
    image: 'https://images.pexels.com/photos/15666317/pexels-photo-15666317.jpeg?cs=srgb&dl=pexels-life-_-kor-169880157-15666317.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '5 GHz',
      gain: '25 dBi',
      beamwidth: '45°',
      compatibility: 'Mimosa C5x'
    }
  },
  {
    id: 'tenda-001',
    name: 'Tenda AC10 AC1200 Router',
    category: 'tenda',
    subcategory: 'Routers',
    price: 59.99,
    stock: 30,
    availability: 'In Stock',
    description: 'Dual-band AC1200 Wi-Fi router for home use. Provides stable coverage with 4 external antennas.',
    image: 'https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-28348054.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: true,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: '1200 Mbps',
      antennas: '4 external',
      ports: '3 LAN + 1 WAN (100Mbps)'
    }
  },
  {
    id: 'tenda-002',
    name: 'Tenda SG108 8-Port Gigabit Switch',
    category: 'tenda',
    subcategory: 'Switches',
    price: 34.50,
    stock: 18,
    availability: 'In Stock',
    description: 'Unmanaged 8-Port Gigabit Ethernet switch. Plug-and-play switching for small office and home networks.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '8x Gigabit LAN',
      throughput: '16 Gbps (non-blocking)',
      mounting: 'Desktop or wall-mount',
      features: 'Fanless design'
    }
  },
  {
    id: 'tenda-003',
    name: 'Tenda O6 Outdoor CPE 5GHz',
    category: 'tenda',
    subcategory: 'Access Points',
    price: 79.99,
    stock: 7,
    availability: 'Limited Stock',
    description: '5GHz outdoor long-range CPE. Ideal for point-to-point links or as a base station for rural broadband.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11a/n (5GHz)',
      gain: '16 dBi antenna',
      range: 'Up to 10 km (line of sight)',
      enclosure: 'Weatherproof'
    }
  },
  {
    id: 'tplink-001',
    name: 'TP-Link Archer AX73 AX5400 Router',
    category: 'tplink',
    subcategory: 'Routers',
    price: 149.99,
    stock: 15,
    availability: 'In Stock',
    description: 'Dual-band WiFi 6 router with up to 5400 Mbps combined speed. Great for 4K streaming and gaming.',
    image: 'https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-28348054.jpg&fm=jpg',
    featured: true,
    newArrival: true,
    bestSeller: true,
    specs: {
      wifi: 'Wi-Fi 6 (802.11ax)',
      speed: '5400 Mbps',
      bands: 'Dual-band',
      ports: '4× Gigabit LAN, 1× WAN'
    }
  },
  {
    id: 'tplink-002',
    name: 'TP-Link TL-SG105 5-Port Gigabit Switch',
    category: 'tplink',
    subcategory: 'Switches',
    price: 24.99,
    stock: 25,
    availability: 'In Stock',
    description: '5-port unmanaged Gigabit desktop switch. Durable metal casing and plug-and-play installation.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '5× Gigabit Ethernet',
      capacity: '10 Gbps switching',
      features: 'Fanless, QoS support',
      mounting: 'Desktop'
    }
  },
  {
    id: 'tplink-003',
    name: 'TP-Link EAP225 AC1350 Ceiling AP',
    category: 'tplink',
    subcategory: 'Access Points',
    price: 99.99,
    stock: 10,
    availability: 'In Stock',
    description: 'Dual-band AC1350 wireless access point for home or office. Supports PoE and Omada SDN for easy management.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ubiquiti_Unifi_AP.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: '1350 Mbps',
      mounting: 'Ceiling or wall',
      features: 'PoE support, VLAN'
    }
  },
  {
    id: 'tplink-004',
    name: 'TP-Link Archer T3U AC1300 USB Adapter',
    category: 'tplink',
    subcategory: 'Adapters',
    price: 29.99,
    stock: 40,
    availability: 'In Stock',
    description: 'AC1300 dual-band USB Wi-Fi adapter for PC. Compact design with high-gain antenna for reliable connections.',
    image: 'https://cdn.pixabay.com/photo/2016/10/09/20/27/bluetooth-1726772_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: 'Up to 867 Mbps (5GHz)',
      interface: 'USB 2.0',
      antenna: 'External high-gain'
    }
  },
  {
    id: 'tplink-005',
    name: 'TP-Link RE200 AC750 Range Extender',
    category: 'tplink',
    subcategory: 'Adapters',
    price: 34.99,
    stock: 22,
    availability: 'In Stock',
    description: 'AC750 Wi-Fi range extender with wall-plug design. Extends wireless coverage to eliminate dead zones.',
    image: 'https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-28348054.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: '750 Mbps',
      plugType: 'EU/US (varies)',
      features: 'Signal strength LED'
    }
  },
  {
    id: 'netis-001',
    name: 'Netis N2 AC1200 Dual Band Router',
    category: 'netis',
    subcategory: 'Routers',
    price: 54.99,
    stock: 16,
    availability: 'In Stock',
    description: 'Netis AC1200 wireless router with dual-band connectivity. Four high-gain antennas for broad Wi-Fi coverage.',
    image: 'https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-29711663.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: '1200 Mbps',
      antennas: '4 fixed 5dBi',
      ports: '4× LAN, 1× WAN (100Mbps)'
    }
  },
  {
    id: 'netis-002',
    name: 'Netis PE6105 5-Port Fast Ethernet Switch',
    category: 'netis',
    subcategory: 'Switches',
    price: 19.99,
    stock: 50,
    availability: 'In Stock',
    description: '5-port 10/100Mbps Ethernet switch in a compact form. Ideal for basic network expansion at home or office.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '5× Fast Ethernet',
      standards: 'IEEE 802.3/3u',
      features: 'Auto MDI/MDIX',
      case: 'Plastic'
    }
  },
  {
    id: 'netis-003',
    name: 'Netis E3 AC1200 Wi-Fi Range Extender',
    category: 'netis',
    subcategory: 'Range Extender',
    price: 44.99,
    stock: 8,
    availability: 'In Stock',
    description: 'Dual-band AC1200 range extender with wall plug design. Extends existing Wi-Fi to hard-to-reach areas.',
    image: 'https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-29711663.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: '1200 Mbps',
      antennas: '2 internal',
      setup: 'WPS button'
    }
  },
  {
    id: 'accessories-001',
    name: 'Cat6 Ethernet Patch Cable 5m',
    category: 'accessories',
    subcategory: 'Cables',
    price: 7.99,
    stock: 100,
    availability: 'In Stock',
    description: '5 meter Cat6 UTP patch cable for high-speed Gigabit networking. Durable connectors and snagless design.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      type: 'Cat6 UTP',
      length: '5 m',
      connectors: 'RJ45 (Snagless)',
      color: 'Blue'
    }
  },
  {
    id: 'accessories-002',
    name: 'USB 3.0 to Gigabit Ethernet Adapter',
    category: 'accessories',
    subcategory: 'Adapters',
    price: 15.99,
    stock: 35,
    availability: 'In Stock',
    description: 'Compact USB 3.0 to RJ45 adapter adds a Gigabit Ethernet port to laptops or PCs. Plug and play on most OS.',
    image: 'https://cdn.pixabay.com/photo/2016/10/09/20/27/bluetooth-1726772_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      interface: 'USB 3.0',
      speed: 'Up to 1000 Mbps',
      compatibility: 'Windows/Mac/Linux',
      features: 'LED status indicators'
    }
  },
  {
    id: 'accessories-003',
    name: 'Dual-Band Omni WiFi Antenna 8dBi',
    category: 'accessories',
    subcategory: 'Antennas',
    price: 12.50,
    stock: 60,
    availability: 'In Stock',
    description: '8dBi dual-band (2.4/5 GHz) omnidirectional antenna with RP-SMA connector. Boosts Wi-Fi router or PCI card signal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Ubiquiti_edgerouter_x_router.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '2.4 & 5 GHz',
      gain: '8 dBi',
      connector: 'RP-SMA male',
      length: '38 cm'
    }
  },
  {
    id: 'cudy-001',
    name: 'Cudy AC1200 Dual Band Router',
    category: 'cudy',
    subcategory: 'Routers',
    price: 49.99,
    stock: 27,
    availability: 'In Stock',
    description: 'Affordable AC1200 router for home networks. Dual-band Wi-Fi with 4 antennas for stable coverage.',
    image: 'https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-28348054.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11ac Dual Band',
      speed: '1200 Mbps',
      antennas: '4 external',
      ports: '4× LAN, 1× WAN'
    }
  },
  {
    id: 'cudy-002',
    name: 'Cudy N300 Mini Wi-Fi AP/Router',
    category: 'cudy',
    subcategory: 'Access Points',
    price: 29.99,
    stock: 45,
    availability: 'In Stock',
    description: 'Mini 2.4GHz N300 wireless AP/router. Ideal for travel or small apartments. Supports router, AP, and repeater modes.',
    image: 'https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-29711663.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11n 2.4GHz',
      speed: '300 Mbps',
      modes: 'Router/AP/Repeater',
      dimensions: 'Compact design'
    }
  },
  {
    id: 'witek-001',
    name: 'Wi-Tek WI-PS208G 8-Port PoE Switch',
    category: 'witek',
    subcategory: 'Switches',
    price: 119.99,
    stock: 10,
    availability: 'In Stock',
    description: '8-Port Gigabit PoE switch (4 PoE+ ports) for IP cameras or APs. Delivers power and data over one cable.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '8× Gigabit (4 PoE+)',
      PoEBudget: '60 W total',
      standards: '802.3af/at',
      mounting: 'Desktop/Wall'
    }
  },
  {
    id: 'witek-002',
    name: 'Wi-Tek Indoor Ceiling AP N300',
    category: 'witek',
    subcategory: 'Access Points',
    price: 64.99,
    stock: 14,
    availability: 'In Stock',
    description: 'Ceiling-mounted 2.4GHz N300 wireless access point. Simple to deploy for offices, supports PoE power.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ubiquiti_Unifi_AP.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11n 2.4GHz',
      speed: '300 Mbps',
      antenna: 'Internal 2×2 MIMO',
      power: 'PoE 24V Passive'
    }
  },
  {
    id: 'mikrotik-001',
    name: 'MikroTik hAP ac2 Dual-Band Router',
    category: 'mikrotik',
    subcategory: 'Wireless for Home and Office',
    price: 69.99,
    stock: 20,
    availability: 'In Stock',
    description: 'Dual-concurrent WiFi router for home/office. Supports 2.4GHz & 5GHz WiFi with five Ethernet ports and RouterOS features.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Mikrotik_Wireless_Router.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '2.4GHz & 5GHz',
      speed: 'Dual-band AC1200',
      CPU: '716 MHz',
      RAM: '128 MB'
    }
  },
  {
    id: 'mikrotik-002',
    name: 'MikroTik CCR2004-16G-2S+ Cloud Core Router',
    category: 'mikrotik',
    subcategory: 'Ethernet Routers',
    price: 499.99,
    stock: 2,
    availability: 'Limited Stock',
    description: 'High-performance 16-port Gigabit router with 2 SFP+ ports. Powered by RouterOS, suitable for ISP or enterprise core routing.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Ubiquiti_edgerouter_x_router.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '16× Gigabit, 2× 10G SFP+',
      throughput: 'Up to 12 Gbps',
      CPU: 'ARM 64bit 1.7GHz 4 core',
      OS: 'RouterOS v7'
    }
  },
  {
    id: 'mikrotik-003',
    name: 'MikroTik CRS326-24G-2S+RM Switch',
    category: 'mikrotik',
    subcategory: 'Switches',
    price: 229.99,
    stock: 5,
    availability: 'In Stock',
    description: '24-Port Gigabit rackmount switch with 2 SFP+ uplinks. SwitchOS/RouterOS dual boot for flexible management.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '24× Gigabit, 2× SFP+',
      switchingCapacity: '64 Gbps',
      OS: 'SwitchOS / RouterOS',
      features: 'Layer3 routing option'
    }
  },
  {
    id: 'mikrotik-004',
    name: 'MikroTik LHG 5 Point-to-Point Kit',
    category: 'mikrotik',
    subcategory: 'Wireless Systems',
    price: 139.99,
    stock: 8,
    availability: 'In Stock',
    description: 'Pre-configured pair of 5GHz point-to-point devices (LHG 5). Provides a stable wireless bridge over several kilometers.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: '802.11a/n (5GHz)',
      antenna: '24.5 dBi grid dish',
      range: 'Up to 10 km',
      OS: 'RouterOS L3'
    }
  },
  {
    id: 'mikrotik-005',
    name: 'MikroTik mANT30 5GHz 30dBi Dish',
    category: 'mikrotik',
    subcategory: 'Antennas',
    price: 109.99,
    stock: 11,
    availability: 'In Stock',
    description: '30dBi 5GHz parabolic dish antenna designed for MikroTik Basebox or wireless wire systems. Ensures focused long-range links.',
    image: 'https://images.pexels.com/photos/15666317/pexels-photo-15666317.jpeg?cs=srgb&dl=pexels-life-_-kor-169880157-15666317.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '4.7-5.875 GHz',
      gain: '30 dBi',
      polarization: 'Dual (H/V)',
      mounts: 'Compatible with MikroTik radios'
    }
  },
  {
    id: 'mikrotik-006',
    name: 'MikroTik Wireless Wire 60G Kit',
    category: 'mikrotik',
    subcategory: '60 GHz Products',
    price: 199.99,
    stock: 6,
    availability: 'In Stock',
    description: '60 GHz wireless bridge kit for fiber-like speeds over short distances. Preconfigured pair for instant setup.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Ubiquiti_edgerouter_x_router.jpg',
    featured: false,
    newArrival: true,
    bestSeller: false,
    specs: {
      frequency: '60 GHz + 5 GHz backup',
      speed: '1 Gbps full duplex',
      range: 'Up to 200m (60GHz)',
      setup: 'Pre-paired out of box'
    }
  },
  {
    id: 'ubiquiti-001',
    name: 'Ubiquiti UniFi U6-Lite Access Point',
    category: 'ubiquiti',
    subcategory: 'Wi-Fi',
    price: 99.00,
    stock: 30,
    availability: 'In Stock',
    description: 'Dual-band Wi-Fi 6 Lite access point for home or business. Compact design with UniFi Controller management.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ubiquiti_Unifi_AP.jpg',
    featured: true,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: 'Wi-Fi 6 (2x2 MIMO)',
      speed: 'Up to 1.5 Gbps',
      PoE: '802.3af PoE',
      indoorOutdoor: 'Indoor'
    }
  },
  {
    id: 'ubiquiti-002',
    name: 'Ubiquiti EdgeRouter X',
    category: 'ubiquiti',
    subcategory: 'Routers',
    price: 59.99,
    stock: 50,
    availability: 'In Stock',
    description: '5-port Gigabit router with advanced EdgeOS features. Powerful routing in a compact form factor, ideal for WISPs or tech enthusiasts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Ubiquiti_edgerouter_x_router.jpg',
    featured: false,
    newArrival: false,
    bestSeller: true,
    specs: {
      ports: '5× Gigabit',
      PoE: 'Passive PoE passthrough',
      OS: 'EdgeOS',
      performance: '1 Gbps routing throughput'
    }
  },
  {
    id: 'ubiquiti-003',
    name: 'Ubiquiti UniFi Switch 8 POE-150W',
    category: 'ubiquiti',
    subcategory: 'Switches',
    price: 189.99,
    stock: 10,
    availability: 'In Stock',
    description: '8-Port managed PoE switch (150W) for UniFi systems. Provides reliable PoE to UniFi APs, cameras, and more, with UniFi Controller management.',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      ports: '8× Gigabit (all PoE)',
      PoEBudget: '150 W total',
      management: 'UniFi Controller',
      mounting: 'Desktop/Wall'
    }
  },
  {
    id: 'ubiquiti-004',
    name: 'Ubiquiti airMAX NanoBeam 5AC Gen2',
    category: 'ubiquiti',
    subcategory: 'AirMax Devices',
    price: 79.00,
    stock: 22,
    availability: 'In Stock',
    description: '5GHz airMAX CPE device with integrated 19 dBi antenna. Ideal for point-to-point or point-to-multipoint links in WISP networks.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '5 GHz',
      thruput: 'Up to 450+ Mbps',
      antenna: '19 dBi integrated',
      management: 'airOS 8'
    }
  },
  {
    id: 'ubiquiti-005',
    name: 'Ubiquiti airMax Sector Antenna 5G-20-90',
    category: 'ubiquiti',
    subcategory: 'AirMax Antennas',
    price: 139.99,
    stock: 9,
    availability: 'Limited Stock',
    description: '5 GHz airMAX sector antenna with 20 dBi gain and 90° beamwidth. Designed for use with Rocket radios in point-to-multipoint deployments.',
    image: 'https://images.pexels.com/photos/15666317/pexels-photo-15666317.jpeg?cs=srgb&dl=pexels-life-_-kor-169880157-15666317.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '5 GHz',
      gain: '20 dBi',
      beamwidth: '90°',
      compatibility: 'Rocket M5/5AC'
    }
  },
  {
    id: 'ubiquiti-006',
    name: 'Ubiquiti UniFi Dream Machine',
    category: 'ubiquiti',
    subcategory: 'UniFi',
    price: 299.00,
    stock: 3,
    availability: 'In Stock',
    description: 'All-in-one UniFi OS console, security gateway, and Wi-Fi AP. Simplifies home or small office networks with powerful integrated features.',
    image: 'https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg?cs=srgb&dl=pexels-jakub-zerdzicki-28348054.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      wifi: 'Dual-band 4x4 Wave2',
      LANPorts: '4× Gigabit',
      security: 'Built-in firewall/VPN',
      controller: 'UniFi OS Console'
    }
  },
  {
    id: 'ubiquiti-007',
    name: 'Ubiquiti GigaBeam 60 GHz Bridge',
    category: 'ubiquiti',
    subcategory: '60 GHz Wireless',
    price: 199.00,
    stock: 6,
    availability: 'In Stock',
    description: '60 GHz point-to-point bridge with 5 GHz backup. Enables high-speed short-range wireless links with low interference.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: true,
    bestSeller: false,
    specs: {
      frequency: '60 GHz + 5 GHz failover',
      maxSpeed: '1 Gbps+',
      range: 'Up to 1 km',
      weather: 'Outdoor rated'
    }
  },
  {
    id: 'mimosa-001',
    name: 'Mimosa B5 5GHz Backhaul Radio',
    category: 'mimosa',
    subcategory: 'PTP',
    price: 399.99,
    stock: 4,
    availability: 'Limited Stock',
    description: 'High throughput 5GHz point-to-point radio for backhaul links. Up to 1.5 Gbps PHY rate and robust reliability for ISP networks.',
    image: 'https://images.pexels.com/photos/12850895/pexels-photo-12850895.jpeg?cs=srgb&dl=pexels-lolimjoshingyou-12850895.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '4.9–6.2 GHz',
      throughput: 'Up to 750 Mbps',
      antenna: 'External (dual N-type)',
      features: 'GPS sync, OFDM'
    }
  },
  {
    id: 'mimosa-002',
    name: 'Mimosa A5c 4x4 Sector AP',
    category: 'mimosa',
    subcategory: 'PTMP',
    price: 549.00,
    stock: 5,
    availability: 'In Stock',
    description: '4x4 MU-MIMO sector access point for point-to-multipoint networks. Delivers high capacity and coverage for multiple clients.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Mikrotik_Wireless_Router.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      frequency: '5 GHz',
      antenna: 'Connectorized (4 ports)',
      clientCapacity: '100+ clients',
      features: 'GPS sync, SRS'
    }
  },
  {
    id: 'fiber-001',
    name: 'SC/LC Fiber Patch Cable 10m',
    category: 'fiber',
    subcategory: 'Cables',
    price: 24.99,
    stock: 15,
    availability: 'In Stock',
    description: '10 meter duplex fiber optic patch cable (SC to LC connectors). Suitable for high-speed data connections and FTTH deployments.',
    image: 'https://images.pexels.com/photos/9468398/pexels-photo-9468398.jpeg?cs=srgb&dl=pexels-benni-fish-40038242-9468398.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      type: 'Duplex SMF',
      length: '10 m',
      connectors: 'SC/UPC to LC/UPC',
      cableDia: '3.0 mm'
    }
  },
  {
    id: 'fiber-002',
    name: 'Fiber Optic SC Coupler Adapter',
    category: 'fiber',
    subcategory: 'Connectors',
    price: 3.99,
    stock: 200,
    availability: 'In Stock',
    description: 'Simplex SC/SC fiber optic adapter (coupler) for connecting two fiber patch cables. High precision alignment ensures low loss.',
    image: 'https://cdn.pixabay.com/photo/2016/10/09/20/27/bluetooth-1726772_640.jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      connectorType: 'SC/UPC',
      fiberType: 'Singlemode or Multimode',
      body: 'Ceramic sleeve',
      color: 'Blue'
    }
  },
  {
    id: 'fiber-003',
    name: 'Fiber Optic Stripping Tool',
    category: 'fiber',
    subcategory: 'Tools',
    price: 18.50,
    stock: 14,
    availability: 'In Stock',
    description: 'Precision fiber optic stripper for removing buffer/coating from optical fibers. Essential for fiber cable termination and splicing.',
    image: 'https://images.pexels.com/photos/9468398/pexels-photo-9468398.jpeg?cs=srgb&dl=pexels-benni-fish-40038242-9468398.jpg&fm=jpg',
    featured: false,
    newArrival: false,
    bestSeller: false,
    specs: {
      use: 'Fiber cable prep',
      compatible: '125µm fiber (250µm & 900µm coating)',
      material: 'High carbon steel',
      length: '105 mm'
    }
  }
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubcategory = (categoryId, subcategory) => {
  return products.filter(
    product => product.category === categoryId && product.subcategory === subcategory
  );
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = () => {
  return products.filter(product => product.newArrival).slice(0, 6);
};

export const getBestSellers = () => {
  return products.filter(product => product.bestSeller).slice(0, 6);
};

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
};


