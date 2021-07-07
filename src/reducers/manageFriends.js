export function manageFriends(state = {
    friends: [], 
}, action) {
    switch(action.type) {
        // add friend action 

        case "ADD_FRIEND":
         return (
            {...state,
            friends: [
                ...state.friends, 
                action.friend
            ] }
        )

        // delete friend
        case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )


      default:
        return state;
    }
}
