import React, { useState } from "react";
import "./ProductListing.css";

const ProductListing = ({ addToCart }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Smartwatch",
      price: 20,
      category: "Electronics",
      image:
        "https://img.freepik.com/free-vector/smartwatch-applications-tasks-concept-llustration_1284-17017.jpg?w=740&t=st=1700388841~exp=1700389441~hmac=8d37816916c3ab97ede616dd11484dbc34dad5c5bef73a7f9f849aba520d4d27",
    },
    {
      id: 2,
      name: "Dress",
      price: 30,
      category: "Clothing",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQX-E-bbRqqqgPf5zLD0wm5EKfGh_R8ikcanQXBAmZ2StVpustAae-N37FDI5Vbk2HQLjs9MeapbL9hhnmCu-SwpPoqV95-r8m61E5f9idTVa7R6pvQiaay",
    },
    {
      id: 3,
      name: "smartwatch",
      price: 25,
      category: "Electronics",
      image:
        "https://img.freepik.com/free-psd/devices-online-shop-square-flyer-with-smartwatch_23-2148564948.jpg?t=st=1700388841~exp=1700389441~hmac=0a5f378c499db8b23892f60797cd38fb0e73fd9ca25fac8df8e392ad224b35d2",
    },
    {
      id: 4,
      name: "T-Shirt for Men",
      price: 40,
      category: "Clothing",
      image:
        "https://img.freepik.com/free-photo/front-view-artist-holding-t-shirt_23-2150572755.jpg?size=626&ext=jpg&ga=GA1.1.327411567.1700388837&semt=ais",
    },
    {
      id: 5,
      name: "headphones",
      price: 15,
      category: "Electronics",
      image:
        "https://img.freepik.com/free-psd/shop-now-devices-online-square-flyer-with-headphones_23-2148564947.jpg",
    },
    {
      id: 6,
      name: "Dress",
      price: 50,
      category: "Clothing",
      image:
        "https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?size=626&ext=jpg&ga=GA1.1.327411567.1700388837&semt=ais",
    },
    {
      id: 7,
      name: "virtual headset",
      price: 35,
      category: "Electronics",
      image:
        "https://img.freepik.com/free-vector/realistic-virtual-headset-augmented-reality_52683-52869.jpg?w=740&t=st=1700388986~exp=1700389586~hmac=dcd14ec401108133b4f32b8eb6061e6d3fad47d8109d78c903e1faa5021a7cf0",
    },
    {
      id: 8,
      name: "Dress",
      price: 60,
      category: "Clothing",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-smiling-woman-colorful-brown-summer-dress-isolated-white-full-length_158538-1785.jpg?size=626&ext=jpg&ga=GA1.1.327411567.1700388837&semt=ais",
    },
    {
      id: 9,
      name: "PS5 ",
      price: 22,
      category: "Electronics",
      image:
        "https://nayejaisa.com/wp-content/uploads/2023/08/CFI-1108A01-4.jpg",
    },
    {
      id: 10,
      name: "Dress",
      price: 45,
      category: "Clothing",
      image:
        "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17507.jpg?size=626&ext=jpg&ga=GA1.1.327411567.1700388837&semt=ais",
    },
    {
      id: 11,
      name: "Xiaomi Pad 6 )",
      price: 28,
      category: "Electronics",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690208353/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/274102_0_mh0qhu.png?tr=w-640",
    },
    {
      id: 12,
      name: "Dress",
      price: 55,
      category: "Clothing",
      image:
        "https://img.freepik.com/free-photo/emotional-brunette-woman-blue-coat-posing-purple-wall-indoor-photo-beautiful-short-haired-female-model-trendy-midi-dress_197531-5181.jpg?w=1380&t=st=1700389540~exp=1700390140~hmac=58245aa34d176b69d50b9c338b5902e95416a6b8fca56a2f6860c85299d6c745",
    },
    {
      id: 13,
      name: "T-Shirt for Men",
      price: 40,
      category: "Clothing",
      image:
        "https://img.freepik.com/free-photo/front-view-artist-holding-t-shirt_23-2150572755.jpg?size=626&ext=jpg&ga=GA1.1.327411567.1700388837&semt=ais",
    },
    {
      id: 14,
      name: "headphones",
      price: 15,
      category: "Electronics",
      image:
        "https://img.freepik.com/free-psd/shop-now-devices-online-square-flyer-with-headphones_23-2148564947.jpg",
    },
    {
      id: 15,
      name: "smartwatch",
      price: 25,
      category: "Electronics",
      image:
        "https://img.freepik.com/free-psd/devices-online-shop-square-flyer-with-smartwatch_23-2148564948.jpg?t=st=1700388841~exp=1700389441~hmac=0a5f378c499db8b23892f60797cd38fb0e73fd9ca25fac8df8e392ad224b35d2",
    },
  ]);

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <>
      <div>
        <h1
          style={{
            margin: "auto",
            textAlign: "center",
            paddingBottom: "20px",
          }}>
          Product Listing
        </h1>
      </div>
      <div className="product-listing">
        {/* products */}
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{`Price: $${product.price}`}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* pop-up message*/}
      {showMessage && (
        <div className="popup-message">Product added successfully!</div>
      )}
    </>
  );
};

export default ProductListing;
