import {act} from '@testing-library/react'
const productsList = [
    {
      id: 1,
      title: "Apple iPhone 13 Pro (128GB) - Graphite",
      rating: 4,
      price: 1300,
      image: "/iphone13.jpg",
    },
    {
      id: 2,
      title: "Apple AirPods Pro with MagSafe Charging Case",
      rating: 4,
      price: 1000,
      image: "/airpods.jpg",
    },
    {
      id: 3,
      title: "Nutri-blend Mixer, Grinder & Blender | Powerful 400W 22000 RPM motor | Stainless steel Blades | 2 unbreakable jars | 2 Years warranty",
      rating: 4,
      price: 1000,
      image: "/blender.jpg",
    },
    {
      id: 4,
      title: "Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)",
      rating: 4,
      price: 1000,
      image: "/alexa.jpg",
    },
    {
      id: 5,
      title: "Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. ",
      rating: 4,
      price: 1000,
      image: "/macbook.jpg",
    },
    {
      id: 6,
      title: "Exclusive Diecast Alloy Metal Pull Back Die-cast Car 1:32 Bumble BEE Diecast Metal Pullback Toy car with Openable Doors & Light, Music Boys Gifts Toys for Kids",
      rating: 4,
      price: 1000,
      image: "/toycar.jpg",
    },
  ];

export const initialState = {
    products: productsList,
    basket: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
          return {...state, user: action.payload};
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.payload]};
        case 'REMOVE_FROM_BASKET':
          const { id } = action.payload;
          const newBasket = state.basket.filter(item => item.id != id);
          return { ...state, basket: newBasket}
            break;
        default :
            return state;
    }
}


export default reducer