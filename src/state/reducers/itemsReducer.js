const products = {
  cartCounter: 0,
  trucksData: [
    {
      id: 1,
      pathName: "trucksData",
      quantity: 10,
      price: 30000,
      name: " trucks number 1",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      pathName: "trucksData",
      quantity: 10,
      price: 30000,
      name: " trucks number 2",
      img: "https://picsum.photos/200",
    },
    {
      id: 3,
      pathName: "trucksData",
      quantity: 10,
      price: 30000,
      name: " trucks number 3",
      img: "https://picsum.photos/200",
    },
  ],
  busesData: [
    {
      id: 4,
      pathName: "busesData",
      quantity: 10,
      price: 30000,
      name: " bus number 1",
      img: "https://picsum.photos/200",
    },
    {
      id: 5,
      pathName: "busesData",
      quantity: 10,
      price: 30000,
      name: " bus number 2",
      img: "https://picsum.photos/200",
    },
    {
      id: 6,
      pathName: "busesData",
      quantity: 10,
      price: 30000,
      name: " bus number 3",
      img: "https://picsum.photos/200",
    },
  ],
  vansData: [
    {
      id: 7,
      pathName: "vansData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
    {
      id: 8,
      pathName: "vansData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
    {
      id: 9,
      pathName: "vansData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
  ],
  carsData: [
    {
      id: 10,
      pathName: "carsData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
    {
      id: 11,
      pathName: "carsData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
    {
      id: 12,
      pathName: "carsData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
  ],
  motorsData: [
    {
      id: 13,
      pathName: "motorsData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
    {
      id: 14,
      pathName: "motorsData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
    {
      id: 15,
      pathName: "motorsData",
      quantity: 10,
      price: 30000,
      name: "",
      img: "https://picsum.photos/200",
    },
  ],
  cartData: [
    {
      id: 0,
      quantity: 1,
    },
  ],
};

const reducer = (state = products, action) => {
  const { type, payload } = action;

  switch (type) {
    /* pages reducer */
    case "add":
      const AddAray = [...state[payload.name]];
      if (AddAray[payload.index].quantity > 0) {
        AddAray[payload.index].quantity = AddAray[payload.index].quantity - 1;
        const NewCart = [...state.cartData];
        if (NewCart.find(({ id }) => id === AddAray[payload.index].id)) {
          const index = NewCart.findIndex(
            (item) => item.id === AddAray[payload.index].id
          );
          NewCart[index].quantity++;
          NewCart[index].remaining--;
        } else {
          NewCart.push({
            id: AddAray[payload.index].id,
            name: AddAray[payload.index].name,
            pathName: AddAray[payload.index].pathName,
            index: payload.index,
            img: AddAray[payload.index].img,
            quantity: 1,
            remaining: AddAray[payload.index].quantity,
            price: AddAray[payload.index].price,
            total:
              AddAray[payload.index].price * AddAray[payload.index].quantity,
          });
        }

        return {
          ...state,
          [payload.name]: AddAray,
          cartCounter: state.cartCounter + 1,
          cartData: NewCart,
        };
      } else {
        alert("There is no more");
        return state;
      }
    /* case "remove":
      const RemoveArray = state[payload.name];
      RemoveArray[payload.index].quantity =
        RemoveArray[payload.index].quantity + 1;

      return {
        ...state,
        [payload.name]: RemoveArray,
        cartCounter: state.cartCounter - 1,
      };*/

    /*  Cart Reducers */
    case "plus":
      const oldArrayP = [...state[payload.name]];
      const NewCartP = [...state.cartData];
      if (NewCartP[payload.index].remaining > 0) {
        NewCartP[payload.index].quantity++;
        NewCartP[payload.index].remaining--;
        oldArrayP[payload.oldIndex].quantity--;
        return {
          ...state,
          [payload.name]: oldArrayP,
          cartCounter: state.cartCounter + 1,
          cartData: NewCartP,
        };
      } else {
        alert("There is no more");
        return state;
      }
    case "minus":
      const oldArray = [...state[payload.name]];
      const NewCart = [...state.cartData];
      if (NewCart[payload.index].quantity > 0) {
        NewCart[payload.index].quantity--;
        NewCart[payload.index].remaining++;
        oldArray[payload.oldIndex].quantity++;
        return {
          ...state,
          [payload.name]: oldArray,
          cartCounter: state.cartCounter - 1,
          cartData: NewCart,
        };
      } else {
        alert("There is no more");
        return state;
      }

    case "delete":
      const oldCartD = [...state.cartData];
      const NewCartD = oldCartD.filter((item) => item.id !== payload.id);
      const oldArrayD = [...state[payload.name]];
      oldArrayD[payload.index].quantity =
        oldArrayD[payload.index].quantity + payload.quantity;
      return {
        ...state,
        [payload.name]: oldArrayD,
        cartCounter: state.cartCounter - payload.quantity,
        cartData: NewCartD,
      };

    default:
      return state;
  }
};

export default reducer;
