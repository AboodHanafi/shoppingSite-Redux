export const AddCart = (index, name) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: {
        index: index,
        name: name,
      },
    });
  };
};

// export const RemoveCart = (index, name) => {
//   return (dispatch) => {
//     dispatch({
//       type: "remove",
//       payload: {
//         index: index,
//         name: name,
//       },
//     });
//   };
// };

export const CounterPlus = (index, name, oldIndex) => {
  return (dispatch) => {
    dispatch({
      type: "plus",
      payload: {
        index: index,
        name: name,
        oldIndex: oldIndex,
      },
    });
  };
};
export const CounterMinus = (index, name, oldIndex) => {
  return (dispatch) => {
    dispatch({
      type: "minus",
      payload: {
        index: index,
        name: name,
        oldIndex: oldIndex,
      },
    });
  };
};

export const DeleteItem = (id, quantity, index, name) => {
  return (dispatch) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
        quantity: quantity,
        index: index,
        name: name,
      },
    });
  };
};
