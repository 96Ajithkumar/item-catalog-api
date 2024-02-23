const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    imageUrl: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    price: 64,
    countInStock: 203
  },
  {
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    imageUrl: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    price: 109,
    countInStock: 470
  },
  {
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    imageUrl: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    price: 109,
    countInStock: 319
  },
  {
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    imageUrl: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    price: 114,
    countInStock: 400
  },
  {
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    imageUrl: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    price: 599,
    countInStock: 250
  },
  {
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    imageUrl: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    price: 999.99,
    countInStock: 140
  },
  //
  {
    name: "Smartphone X",
    imageUrl: "https://images-cdn.ubuy.co.in/652682543e53841912205916-used-good-condition-apple-iphone-x.jpg",
    description: "Feature-rich smartphone with advanced technology.",
    price: 599.99,
    countInStock: 15
  },
  {
    name: "UltraBook Pro",
    imageUrl: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NjM0Njh8aW1hZ2UvanBlZ3xoNGIvaDlhLzk0NDU5MjkzNTMyNDYuanBnfDNmYmY5OGJjYzUyZjZhOTA0MDE4NTJjODFlNmVkNmM0N2JmNTVkMjEyMGRmMTlhYWE1MjFkMzg1MmFjMjg0ODI/bWFzdGVyfH.jpg",
    description: "Powerful and lightweight laptop for professional use.",
    price: 1299.99,
    countInStock: 8
  },
  {
    name: "4K UHD Smart TV",
    imageUrl: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/50ur9050psk_atr_eail_in_c/50UR9050PSK-Basic-450.jpg",
    description: "Immersive entertainment with stunning 4K visuals.",
    price: 899.99,
    countInStock: 12
  },
  {
    name: "Wireless Noise-Canceling Headphones",
    imageUrl: "https://d1b5h9psu9yexj.cloudfront.net/57440/Anker-s-Soundcore-Space-One_20230829-151132_full.jpeg",
    description: "Experience crystal-clear audio with noise cancellation.",
    price: 149.99,
    countInStock: 20
  },
  {
    name: "Gaming Console XYZ",
    imageUrl: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/09/17/4aab07149fc943da5fe68e58fa807332.jpg?quality=80&zoom=1&ssl=1",
    description: "Next-gen gaming console for an unparalleled gaming experience.",
    price: 499.99,
    countInStock: 5
  },
  {
    name: "Smart Home Security Camera",
    imageUrl: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1000,w-1000,cm-pad_resize/data/philips/08sept2023/254-2023_05_05-For_all.jpg",
    description: "Keep your home secure with high-definition surveillance.",
    price: 79.99,
    countInStock: 18
  },
  {
    name: "Portable Bluetooth Speaker",
    imageUrl: "https://media.croma.com/image/upload/v1636734211/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/244474_5_qkrrr6.png",
    description: "Compact speaker delivering powerful stereo sound on the go.",
    price: 59.99,
    countInStock: 25
  },
  {
    name: "High-Performance Gaming Mouse",
    imageUrl: "https://isp.page/news/wp-content/uploads/2023/12/compressed_img-3KoveBqjtqEPVDSoMXa5K7zy.png",
    description: "Ergonomic design for precision and speed in gaming.",
    price: 49.99,
    countInStock: 10
  },
  {
    name: "4TB External Hard Drive",
    imageUrl: "https://mms.businesswire.com/media/20150617005152/en/472882/5/Samsung_M3_dynamic_1000.jpg",
    description: "Ample storage for your files with fast data transfer speeds.",
    price: 129.99,
    countInStock: 7
  },
  {
    name: "Wireless Charging Pad",
    imageUrl: "https://cdn.shopify.com/s/files/1/0493/9834/9974/files/image1_3_480x480.jpg?v=1684742083",
    description: "Charge your devices wirelessly with style and efficiency.",
    price: 29.99,
    countInStock: 15
  },
  {
    name: "Smart Thermostat",
    imageUrl: "https://images.prismic.io/palmettoblog/f341677f-c519-4378-98fa-ecc4a6e848f7_smart-thermostat-guide.jpeg?auto=compress,format&rect=0,0,1200,800&w=1200&h=800",
    description: "Energy-efficient thermostat for smart home temperature control.",
    price: 89.99,
    countInStock: 9
  },
];

module.exports = products;
