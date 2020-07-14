import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  RestaurantContainer,
  RestaurantDetailPage,
  ProductContainer,
  RestaurantLogo,
} from "./styles";
import RestaurantModal from "./RestaurantModal";

function RestaurantPage() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const [showModal, setShowModal] = useState(false);
  const [restaurantDetail, setRestaurantDetail] = useState({
    restaurant: {
      products: [
        {
          id: "CnKdjU6CyKakQDGHzNln",
          category: "Salgado",
          price: "1",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
          name: "Bibsfiha carne",
          description: "Esfiha deliciosa, receita secreta do Habibs.",
        },
        {
          id: "KJqMl2DxeShkSBevKVre",
          photoUrl:
            "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
          name: "Refrigerante",
          description: "Coca cola, Sprite ou Guaraná",
          category: "Bebida",
          price: "4",
        },
        {
          id: "SmT6MYMm8QC8riHYApzt",
          name: "Batata Frita",
          description: "Batata frita crocante e sequinha.",
          category: "Acompanhamento",
          price: "9,50",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
        },
        {
          id: "V5VhD0xmsN7p1RvIDyhs",
          name: "Beirute",
          description: "",
          category: "Lanche",
          price: "22,90",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg",
        },
        {
          id: "ZrZm51AIbZ26MVAifuaJ",
          name: "Pizza",
          description: "",
          category: "Pizza",
          price: "31,90",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg",
        },
        {
          id: "dixrjmRJvcBER8pivj9X",
          name: "Bibsfiha queijo",
          description: "Esfiha deliciosa, receita secreta do Habibs.",
          category: "Salgado",
          price: "1",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
        },
        {
          id: "hYGe0I6HUpItn57SPINc",
          category: "Salgado",
          price: "1",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907151009_76679579.jpg",
          name: "Bibsfiha frango",
          description: "Esfiha deliciosa, receita secreta do Habibs.",
        },
        {
          id: "hwTEJXaj2mvR17oUTwm2",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
          name: "Suco",
          description: "Laranja, Acerola ou Maçã",
          category: "Bebida",
          price: "7,90",
        },
        {
          id: "po7B72myMyfKhtEe0mxv",
          name: "Kibe",
          description: "",
          category: "Salgado",
          price: "5,50",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
        },
        {
          id: "q38byozxbUUidlVmpSXa",
          name: "Pastel",
          description: "",
          category: "Pastel",
          price: "3",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
        },
      ],
      id: "1",
      name: "Habibs",
      logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
      deliveryTime: 60,
      category: "Árabe",
      description:
        "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
      shipping: 6,
      address: "Rua das Margaridas, 110 - Jardim das Flores",
    },
  });
  return (
    <RestaurantDetailPage>
      <button onClick={goToFeedPage}>Home</button>
      <RestaurantContainer>
        <RestaurantLogo src={restaurantDetail.restaurant.logoUrl} />
        <p>{restaurantDetail.restaurant.name}</p>
        <p>{restaurantDetail.restaurant.category}</p>
        <div>
          <span>{restaurantDetail.restaurant.deliveryTime} min</span> -{" "}
          <span> Frete R${restaurantDetail.restaurant.shipping}</span>
        </div>
        <p>{restaurantDetail.restaurant.adress}</p>
      </RestaurantContainer>
      <div>
        <p>Principais</p>
        <hr />
        <p>Salgados</p>
        {restaurantDetail.restaurant.products.map((product) => {
          if (product.category === "Salgado") {
            return (
              <ProductContainer>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <button onClick={handleModal}>Adicionar</button>
              </ProductContainer>
            );
          }
        })}
      </div>
      <RestaurantModal show={showModal} handleModal={handleModal} />
    </RestaurantDetailPage>
  );
}

export default RestaurantPage;
