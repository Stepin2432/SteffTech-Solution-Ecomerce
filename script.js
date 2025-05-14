document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  const products = [
    { name: "Wireless Mouse", price: "Ksh1200", image: "https://media.istockphoto.com/id/1009379172/photo/computer-mouse.jpg?s=1024x1024&w=is&k=20&c=JTciwZHm-3XiEq7uHZrOfqiJhhWEQkQUzdadtE3iXa8="},
    { name: "Mechanical Keyboard", price: "Ksh 4500", image: "https://images.pexels.com/photos/18311093/pexels-photo-18311093/free-photo-of-colorful-mechanical-keyboard-on-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "HD Webcam", price: "Ksh 2500", image: "https://media.istockphoto.com/id/829753870/photo/webcam.jpg?b=1&s=612x612&w=0&k=20&c=8QqHOyY9FAjFk9le6eNOM5IugOgPTE1sgf_gc2S0iwY=" },
    { name: "Bluetooth Speaker", price: "Ksh 3500", image: "https://images.pexels.com/photos/9767549/pexels-photo-9767549.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "USB-C Hub", price: "Ksh 1500", image: "https://images.pexels.com/photos/20076003/pexels-photo-20076003/free-photo-of-portable-hard-disk-with-wire.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Laptop Stand", price: "Ksh 1800", image: "https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Portable SSD", price: "Ksh 550", image: "https://images.pexels.com/photos/11216304/pexels-photo-11216304.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Gaming Headset", price: "Ksh 1770", image: "https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=_5iO0jNExcta9m1a-BeatGAHc1ObiqLwcTvXBInp5EA=" },
    { name: "Smartphone Holder", price: "Ksh 1000", image: "https://images.pexels.com/photos/8371126/pexels-photo-8371126.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Wireless Charger", price: "Ksh 750", image: "https://media.istockphoto.com/id/1215029140/photo/modern-smart-phone-wireless-charging-on-carbon-fibre-surface.jpg?b=1&s=612x612&w=0&k=20&c=Pp1B7rm7shWxawzA2QLZL1C_SkSJBTQa-znJXbcUJ90=" }
  ];

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100%">
      <h4>${product.name}</h4>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });
});
