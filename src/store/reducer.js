const initialState = {
  compareProduct: false,
  compareProductList: [],
  productCart: [],
  confirmProduct: false,
  productCartLenght: 0,
  productCompareLength: 0,
  setupOnlySelectProduct: false,
  menuSelected: 'normal',
  filterName: null,
  showFilterName: false,
  selectorCalculate: false,
  calculateBtu: {
    asset: null,
    type: null,
    roomType: null,
    width: 0,
    height: 0,
    long: 0,
  },
  selectType: {
    air: null,
    brand: null,
    type: null,
    price: null,
  },
  roomInfo: {
    position: null,
    window: null,
    airType: null,
    brand: null,
    price: null,
    type:null
  },
  btuForAdvice: '0',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COMPARE_PRODUCT':
      return {
        ...state,
        compareProduct: action.payload,
        confirmProduct:
          action.payload || state.productCartLenght == 0 ? false : true,
      };
    case 'ADD_TO_CART':
      state.productCart.push(action.payload);
      return {
        ...state,
        confirmProduct: true,
        productCartLenght: state.productCart.length,
      };
    case 'ADD_TO_COMPARE':
      state.compareProductList.push(action.payload);
      return {
        ...state,
        productCompareLength: state.compareProductList.length,
      };
    case 'SETUP_ONLY_PRODUCT':
      return {
        ...state,
        setupOnlySelectProduct: action.payload,
      };
    case 'SELECT_MENU_AIR':
      return {
        ...state,
        menuSelected: action.payload,
      };
    case 'SET_FILTER_NAME':
      return {
        ...state,
        filterName: action.payload,
      };
    case 'SHOW_FILTER_NAME':
      return {
        ...state,
        showFilterName: action.payload,
      };
    case 'CALCULATE_SELECT_ASSET': {
      return {
        ...state,
        calculateBtu: {...state.calculateBtu, asset: action.payload},
      };
    }
    case 'CALCULATE_SELECT_TYPE': {
      return {
        ...state,
        calculateBtu: {...state.calculateBtu, type: action.payload},
      };
    }
    case 'CALCULATE_SELECT_ROOM_TYPE': {
      return {
        ...state,
        calculateBtu: {...state.calculateBtu, roomType: action.payload},
      };
    }
    case 'CALCULATE_SELECT_ROOM_WIDTH': {
      let width = Math.ceil(action.payload);
      return {
        ...state,
        calculateBtu: {...state.calculateBtu, width},
      };
    }
    case 'CALCULATE_SELECT_ROOM_HEIGHT': {
      let height = Math.ceil(action.payload);
      return {
        ...state,
        calculateBtu: {...state.calculateBtu, height},
      };
    }
    case 'CALCULATE_SELECT_ROOM_LONG': {
      let long = Math.ceil(action.payload);
      return {
        ...state,
        calculateBtu: {...state.calculateBtu, long},
      };
    }
    case 'SET_SELECTOR_CALCULATE': {
      return {...state, selectorCalculate: action.payload};
    }
    case 'SELECT_TYPE_AIR': {
      return {
        ...state,
        selectType: {...state.selectType, air: action.payload},
      };
    }
    case 'SELECT_TYPE_BRAND': {
      return {
        ...state,
        selectType: {...state.selectType, brand: action.payload},
      };
    }
    case 'SELECT_TYPE_AIR_TYPE': {
      return {
        ...state,
        selectType: {...state.selectType, type: action.payload},
      };
    }
    case 'SELECT_TYPE_PRICE': {
      return {
        ...state,
        selectType: {...state.selectType, price: action.payload},
      };
    }
    case 'SET_BTU_ADVICE': {
      return {
        ...state,
        btuForAdvice: action.payload,
      };
    }

    case 'SELECT_ROOM_INFO_POSITION': {
      return {
        ...state,
        roomInfo: {...state.roomInfo, position: action.payload},
      };
    }

    case 'SELECT_ROOM_INFO_WINDOW': {
      return {
        ...state,
        roomInfo: {...state.roomInfo, window: action.payload},
      };
    }

    case 'SELECT_ROOM_INFO_AIR_TYPE': {
      return {
        ...state,
        roomInfo: {...state.roomInfo, airType: action.payload},
      };
    }

    case 'SELECT_ROOM_INFO_BRAND': {
      return {
        ...state,
        roomInfo: {...state.roomInfo, brand: action.payload},
      };
    }

    case 'SELECT_ROOM_INFO_PRICE': {
      return {
        ...state,
        roomInfo: {...state.roomInfo, price: action.payload},
      };
    }

    case 'SELECT_ROOM_INFO_TYPE': {
      return {
        ...state,
        roomInfo: {...state.roomInfo, type: action.payload},
      };
    }

    default:
      return state;
  }
}
export default reducer;
