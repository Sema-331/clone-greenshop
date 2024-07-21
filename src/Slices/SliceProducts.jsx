import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from '../data/dataProducts';
import { productFilters } from "../data/dataBaseFiltersProduct";

export const fetchQuery = createAsyncThunk(
  'productCopy/fetchQuery',
  async function (_, {rejectWithValue, getState}) {
    console.log(getState)
      try {
          const res = await fetch ('http://localhost:3032/user')

          if(!res.ok) {
              throw new Error('Server bad!')
          }
          const data = res.json()
          console.log(res)
          return data
      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
);
{/*export const fetchTodos = createAsyncThunk(
  'placeOrder/fetchTodos',
  async function(_, {rejectWithValue}) {
      try {
          const response = await fetch('http://localhost:3031/placeOrder');
          
          if (!response.ok) {
              throw new Error('Server Error!');
          }
  
          const data = await response.json();
  
          return data;
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
)*/}
export const fetchs = createAsyncThunk(
  'filteredItems/fetchs',
  async function (_, {rejectWithValue, getState}) {
    console.log(getState)
      try {
          const res = await fetch ('http://localhost:3032/user')

          if(!res.ok) {
              throw new Error('Server bad!')
          }
          const data = res.json()
          console.log(res)
          return data
      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
);
export const toggleStatus = createAsyncThunk(
  'products/toggleStatus',
  async function (id, {rejectWithValue, dispatch, getState}) {
      const todo = getState().products.productCopy.find(todo => todo.id === id);
      console.log(todo)

      try {
          const response = await fetch(`http://localhost:3032/user/${id}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                favourites: !todo.favourites,
              })
          }).then((response) => console.log(response))

          if (!response.ok) {
              throw new Error('Can\'t toggle status. Server error.');
          }

          dispatch(toggleComplete(id));

      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
);
export const toggleStatusTrack = createAsyncThunk(
  'productCopy/toggleStatusTrack',
  async function (id, {rejectWithValue, dispatch, getState}) {
      const todo = getState().products.productCopy.find(todo => todo.id === id);
      console.log(todo)

      try {
          const response = await fetch(`http://localhost:3032/user/${id}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                trackNumber: !todo.trackNumber,
              })
          });

          if (!response.ok) {
              throw new Error('Can\'t toggle status. Server error.');
          }

          dispatch(toggleCompleteTrack(id));

      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
);
export const toggleStatusFalse = createAsyncThunk(
  'productCopy/toggleStatusFalse',
  async function (id, {rejectWithValue, dispatch, getState}) {
      const todo = getState().products.productCopy.find(todo => todo.id === id);
      console.log(todo)

      try {
          const response = await fetch(`http://localhost:3032/user/${id}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                favourites: false,
              })
          });

          if (!response.ok) {
              throw new Error('Can\'t toggle status. Server error.');
          }

          console.log(todo)
          dispatch(toggleCompleteRemove(id));

      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
);
export const toggleStatusTrue = createAsyncThunk(
  'productCopy/toggleStatusTrue',
  async function (id, {rejectWithValue, dispatch, getState}) {
      const todo = getState().products.productCopy.find(todo => todo.id === id);
      console.log(todo)

      try {
          const response = await fetch(`http://localhost:3032/user/${id}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                favourites: true,
              })
          });

          if (!response.ok) {
              throw new Error('Can\'t toggle status. Server error.');
          }

          console.log(todo)
          dispatch(toggleCompleteTrue(id));

      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
);
{/*export const addNewTodo = createAsyncThunk(
  'basketProducts/addNewTodo',
  async function (text, {rejectWithValue, dispatch}) {
      try {
          const todo = {
              title: text,
              id: 1,
              completed: false,
          };
          const response = await fetch('http://localhost:3031/basket', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(todo)
          });

          if (!response.ok) {
              throw new Error('Can\'t add task. Server error.');
          }

          const data = await response.json();
          dispatch(handleClickAddBasketProduct(data));

      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);*/}


const item = localStorage.getItem('card') !== null ? JSON.parse(localStorage.getItem('card')) : []
const authority = localStorage.getItem('authority') !== null ? JSON.parse(localStorage.getItem('authority')) : []
const log = localStorage.getItem('login') !== null ? JSON.parse(localStorage.getItem('login')) : 0
const order = localStorage.getItem('order') !== null ? JSON.parse(localStorage.getItem('order')) : []
const mobileCheckoutAdress = localStorage.getItem('mobileCheckoutAdress') !== null ? JSON.parse(localStorage.getItem('mobileCheckoutAdress')) : []
const arr = localStorage.getItem('arr') !== null ? JSON.parse(localStorage.getItem('arr')) : []
const selectedFilters = localStorage.getItem('selectedFilters') !== null ? JSON.parse(localStorage.getItem('selectedFilters')) : []
const filteredItems = localStorage.getItem('filteredItems') !== null ? JSON.parse(localStorage.getItem('filteredItems')) : []
const orderItem = localStorage.getItem('orderItem') !== null ? JSON.parse(localStorage.getItem('orderItem')) : []



export const sliceProducts = createSlice({
  name: 'todos',
  initialState: {
    product: [],
    productCopy: [],
    productImgSolo: [],
    recentlyViewed: [],
    favouritesItem: authority,
    basketProducts: item,
    modalConfirmProductAdd: [],
    basketCheckout: [],
    /*buttonToggle: false,*/
    inputMin: '',
    inputMax: '',
    totalprice: 0,
    shipping: 0,
    selectedFilter: [],//products
    filteredItems: [],
    loading: null,
    error: null,
    login: log,
    stateProductBasket: false,
    headerLoginButton: log,
    arr: arr,
    placeOrder: order,
    stateHoverProduct: false,
    load: false,
    orderItem: orderItem,
    countOrderNumber: 0,
    searchValue: '',
    mobileModal: true,
    mobileCheckoutAdress: mobileCheckoutAdress
  },
  reducers: {
    handelClickSaveAdress(state, {payload}) {
      
      localStorage.setItem('mobileCheckoutAdress', JSON.stringify(state.mobileCheckoutAdress.map((item) => item)))
    },
    handelClickAddAdress(state, {payload}) {
      state.mobileCheckoutAdress.push(payload)
      //state.placeOrder.push(payload)
      localStorage.setItem('mobileCheckoutAdress', JSON.stringify(state.mobileCheckoutAdress.map((item) => item)))
    },
    handleScrollPages(state, {payload}) {
      state.mobileModal = payload
    },
    handleSearchValueUser(state, {payload}) {
      state.searchValue = payload
      console.log(state.searchValue)
    },
    handleClickSearchProduct(state, {payload}) {
      state.filteredItems = state.filteredItems.filter((item) => state.searchValue !== '' ? item.title.toLowerCase().includes(state.searchValue.toLowerCase()) : state.filteredItems)
    },  
    handleCountOrderNumber(state, {payload}) {
      state.countOrderNumber = `Доставка номер ${state.countOrderNumber = Math.floor(Math.random() * 1000)}`
      console.log(state.countOrderNumber)
    },  
    stateHoverProductFalse(state, {payload}) {
      state.stateHoverProduct = false
    },
    stateHoverProductTrue(state, {payload}) {
      state.stateHoverProduct = true
    },
    placeOrderPushValue(state, {payload}) {
      state.placeOrder.push(payload)
      //state.placeOrder.push(payload)
      localStorage.setItem('order', JSON.stringify(state.placeOrder.map((item) => item)))
    },  
    removeItemToOrder(state, {payload}) {
      state.basketProducts = state.basketProducts.filter((item) => item.trackNumber !== true)
      console.log(state.basketProducts)
      localStorage.setItem('card', JSON.stringify(state.basketProducts.map((item) => item)))
    },
    handleClickSelectAllCheck(state, {payload}) {
      state.arr = state.basketProducts.filter((item) => item.trackNumber === true)
      localStorage.setItem('arr', JSON.stringify(state.arr.map((item) => item)))
    },
    testForth(state, {payload}) {
      state.arr = state.basketProducts.filter((item) => item.trackNumber === true)
      localStorage.setItem('arr', JSON.stringify(state.arr.map((item) => item)))
    },
    testThird(state, {payload}) {
      const stateValue = state.basketProducts.find((item) => item.id === payload)
      if(stateValue) {
        stateValue.trackNumber = !stateValue.trackNumber
      }
    },
    testFifth(state, action) {
      {/*const a = state.basketProducts.filter((item) => item.trackNumber === true)
      if(a) {
        state.orderItem.push(a)
        console.log(state.orderItem)
        localStorage.setItem('orderItem', JSON.stringify(state.orderItem.map((item) => item)))
      }*/}
      const isExist = state.orderItem.some(r => r.id === action.payload.id) 
      if (isExist) {
          state = state.orderItem.filter(r => r.id !== action.payload.id)
      } else {
          state.orderItem.push(action.payload)
          localStorage.setItem('orderItem', JSON.stringify(state.orderItem.map((item) => item)))
      } 
    },
    testSixth(state, {payload}) {
      state.arr = state.basketProducts.filter((item) => item.trackNumber === true)
      localStorage.setItem('arr', JSON.stringify(state.arr.map((item) => item)))
      const stateValue = state.basketProducts.find((item) => item.id === payload)
      if(stateValue) {
        stateValue.trackNumber = !stateValue.trackNumber
      }
    },
    test(state, {payload}) {
      localStorage.setItem('login', JSON.stringify(state.login = 1))
    },
    testSecond(state, {payload}) {
      localStorage.setItem('login', JSON.stringify(state.login = 0))
    },
    toggleCompleteTrue(state, action) {
      const toggledTodo = state.productCopy.find(todo => todo.id === action.payload.id);
      toggledTodo.favourites = true;
    },
    toggleCompleteRemove(state, action) {
      const toggledTodo = state.productCopy.find(todo => todo.id === action.payload.id);
      toggledTodo.favourites = false;
  },
    headerLoginButton(state, {payload}) {
      state.headerLoginButton = true
    },
    headerLoginButtonSecond(state, {payload}) {
      state.headerLoginButton = false
    },
    toggleCompleteTrack(state, action) {
      const toggledTodo = state.productCopy.find(todo => todo.id === action.payload.id);
      toggledTodo.trackNumber = !toggledTodo.trackNumber;
      console.log(true)
  },
    toggleComplete(state, action) {
      const toggledTodo = state.productCopy.find(todo => todo.id === action.payload.id);
      toggledTodo.favourites = !toggledTodo.favourites;
      console.log("true!")
  },
    handleClicks(state, {payload}) {
      state.productCopy.find((item) => item.img === payload)
      console.log(payload)
    },
    handleHoverOptions(state, action) {
      state.productCopy = state.product.filter((authority) => authority.id !== action.payload)
    },
    onclickHnadleEyes(state, action) {
      const isExist = state.productImgSolo.some(r => r.id === action.payload.id) 
            if (isExist) {
                state = state.productImgSolo.filter(r => r.id !== action.payload.id)
            } else {
                state.productImgSolo.push(action.payload)
            } 
    },
    closeEaysModal(state) {
      state.productImgSolo = []
    },
    handleClickAllProducts(state) {
      state.filteredItems = state.product
    },
    handleClickFiltersCategoryNew(state, action) {
      state.filteredItems = state.product.filter((item) => item.plantCategory === action.payload)
    },
    handleClickFilterSale(state, action) {
      state.filteredItems = state.product.filter((item) => item.sale === action.payload)
    },
    handleClickSortGoUp(state, action) {
      state.filteredItems = state.filteredItems.sort((a, b) => a.price > b.price ? 1 : -1)
      console.log(state.productCopy)
    },
    handleClickSortGoDown(state, action) {
      state.filteredItems = state.filteredItems.sort((a, b) => a.price > b.price ? -1 : 1)
      console.log(state.product)
    },
    handleClickSortCategories(state, {payload}) {
      state.productCopy = state.product.filter((item) => item.categories === payload)
    },
    handleClickRecentlyViews(state, action) {
      const isExist = state.recentlyViewed.some(r => r.id === action.payload.id) 
        if (isExist) {
            state = state.recentlyViewed.filter(r => r.id !== action.payload.id)
        } else {
            state.recentlyViewed.push(action.payload)
        }
    },
    handleClickSortSizes(state, {payload}) {
      state.productCopy = state.product.filter((item) => item.size === payload)
    },
    handleClickAddFavourites(state, action) {
      const isExist = state.favouritesItem.some(r => r.id === action.payload.id) 
      if (isExist) {
          state = state.favouritesItem.filter(r => r.id !== action.payload.id)
      } else {
          state.favouritesItem.push(action.payload)
          localStorage.setItem('authority', JSON.stringify(state.favouritesItem.map((item) => item)))
      }
    {/*}  state.favouritesItem = state.productCopy.some(r => r.id === action.payload.id) 
      if (state.favouritesItem) {
          state.favouritesItem = state.productCopy.filter(r => r.id === action.payload.id)
      } else {
          state.favouritesItem.push(action.payload)
          localStorage.setItem('authority', JSON.stringify(state.favouritesItem.map((item) => item)))
      }*/}
    },
    handleClickRemoveFavourites(state, action) {
      state.favouritesItem = state.favouritesItem.filter((item) => item.id !== action.payload)
      localStorage.setItem('authority', JSON.stringify(state.favouritesItem.map((item) => item)))
    },
    handelClickRemoveProductFavourites(state, {payload}) {
      state.favouritesItem = state.favouritesItem.filter((item) => item.id !== payload)
      localStorage.setItem('authority', JSON.stringify(state.favouritesItem.map((item) => item)))
    },
    handleClickIncrementProduct(state, {payload}) {
      const increment = state.productCopy.find((item) => item.id === payload) 
      if(increment) {
        increment.count++
      }
    },
    handleClickDecrementProduct(state, {payload}) {
      const decrement = state.productCopy.find((item) => item.id === payload) 
      if (decrement.count > 1) {
        decrement.count--
      } else {
        decrement.count = 1
      }
    },
    handleClickProductModalIncrement(state, {payload}) {
      const incrementBasket = state.arr.find((item) => item.id === payload) 
      if(incrementBasket) {
        incrementBasket.count++
      }
      const incrementBaskett = state.basketProducts.find((item) => item.id === payload) 
      if(incrementBaskett) {
        incrementBaskett.count++
      }
      console.log(incrementBaskett.count)
    },
    handleClickProductModalIncrementSecond(state, {payload}) {
      const incrementBasket = state.arr.find((item) => item.id === payload) 
      if(incrementBasket) {
        incrementBasket.count++
      }
      const incrementBaskett = state.productCopy.find((item) => item.id === payload) 
      if(incrementBaskett) {
        incrementBaskett.count++
      }
      console.log(incrementBaskett.count)
    },
    handleClickProductModalDecrementSecond(state, {payload}) {
      const decrement = state.productCopy.find((item) => item.id === payload) 
      if(decrement.count = 1) {
        decrement.count = 1
      } else if (decrement.count > 1) {
        decrement.count -= 1
      }
    },
    handleClickProductModalDecrement(state, {payload}) {
      const decrement = state.productImgSolo.find((item) => item.id === payload) 
      if(decrement.count = 1) {
        decrement.count = 1
      } else if (decrement.count > 1) {
        decrement.count--
      }
    },
    handleClickAddBasketProduct(state, action) {
      const isExist = state.basketProducts.some(r => r.id === action.payload.id) 
      if (isExist) {
        state = state.basketProducts.filter(r => r.id !== action.payload.id)
      } else {
          state.basketProducts.push(action.payload)
          localStorage.setItem('card', JSON.stringify(state.basketProducts.map(item => item)))
      }
      console.log(state.basketProducts)
    },
    handleCLickRemoveArrayBasket(state, {payload}) {
      state.basketProducts = []
    },
    handleClickRemoveItemBasket(state, {payload}) {
      state.basketProducts = state.basketProducts.filter((item) => item.id !== payload)
      localStorage.setItem('card', JSON.stringify(state.basketProducts.map((item) => item)))
    },
    handleClickAddCountBasketItem(state, {payload}) {
      const incrementBasket = state.arr.find((item) => item.id === payload) 
      if(incrementBasket) {
        incrementBasket.count++
      }
      const incrementBaskett = state.basketProducts.find((item) => item.id === payload) 
      if(incrementBaskett) {
        incrementBaskett.count++
      }
    },
    handleClickAddCountFavouritesItem(state, {payload}) {
      const incrementBasket = state.arr.find((item) => item.id === payload) 
      if(incrementBasket) {
        incrementBasket.count++
      }
      const incrementBaskett = state.productCopy.find((item) => item.id === payload) 
      if(incrementBaskett) {
        incrementBaskett.count++
      }
    },
    handleClickRemoveCountItemBasket(state, {payload}) {
      const decrementt = state.basketProducts.find((item) => item.id === payload) 
      if(decrementt.count === 1) {
        decrementt.count = 1
      } else if (decrementt.count > 1) {
        decrementt.count--
      }
      const decrement = state.arr.find((item) => item.id === payload) 
      if(decrement.count === 1) {
        decrement.count = 1
      } else if (decrement.count > 1) {
        decrement.count--
      }
    },
    totalPriceOfGoods(state) {
      state.totalprice = state.arr.reduce((item, accum) => item + (accum.price * accum.count), 0)
      //state.totalprice = state.basketProducts.reduce((item, accum) => item + (accum.price * accum.count), 0)
    },
    totalShippingBasketProduct(state, {payload}) {
      state.shipping = Math.round(state.arr.reduce((item ,accum) => item + ((accum.price * accum.count) / 100 * 2), 0))
      //state.shipping = Math.round(state.basketProducts.reduce((item ,accum) => item + ((accum.price * accum.count) / 100 * 2), 0))
    },
    handleClickConfirmProductModal(state, {payload}) {
      const isExist = state.modalConfirmProductAdd.some(r => r.id === payload.id) 
      if (isExist) {
          state = state.modalConfirmProductAdd.filter(r => r.id !== payload.id)
      } else {
          state.modalConfirmProductAdd.push(payload)
      }
      console.log(payload.id)
    },
    handleClickRemoveItemModal(state) {
      state.modalConfirmProductAdd = []
    },
    handleClickSorts(state, action) {
      if(state.selectedFilter.includes(action.payload)) {
          let filters = state.selectedFilter.filter((el) => el !== action.payload);
          state.selectedFilter = filters;
          console.log(1)
        } else {
          state.selectedFilter = ([...state.selectedFilter, action.payload]);
          console.log(2)
          //localStorage.setItem('selectedFilters', JSON.stringify(state.selectedFilter.map((item) => item)))
        }
      },
  hadnleClickSortSecond(state, {payload}) {
      if (state.selectedFilter.length > 0) {
          let tempItems = state.selectedFilter.map((selectedCategory) => {
              let temp = state.product.filter((item) => (item.categories === selectedCategory) || (item.size === selectedCategory))
              return temp
            });
            state.filteredItems = state.productCopy = (tempItems.flat());
          } else {
            state.filteredItems = state.productCopy = ([...state.product]);
          }
          if(state.inputMax === '' && state.inputMin === '') {
            state.filteredItems = Array.from(new Set(state.filteredItems))
            //localStorage.setItem('filteredItems', JSON.stringify(state.filteredItems.map((item) => item)))
          } else {
            state.filteredItems = state.productCopy.filter((item) => item.price > state.inputMin && item.price < state.inputMax)
            //localStorage.setItem('filteredItems', JSON.stringify(state.filteredItems.map((item) => item)))
          }
          //state.filteredItems = Array.from(new Set(state.filteredItems))
          console.log(state.filteredItems = Array.from(new Set(state.filteredItems)))
      },
      handleClickSlider(state, {payload}) {
        state.filteredItems = state.productCopy.filter((item) => item.price > state.inputMin && item.price < state.inputMax)
        console.log(state.product)
        console.log(state.filteredItems)
      },
      handleInputFirst(state, {payload}) {
        state.inputMin = payload
        console.log(state.inputMin)
      },
      handleInputSecond(state, {payload}) {
        state.inputMax = payload   
        console.log(state.inputMax)       
      },
      handleCLickClearValue(state, {payload}) {
        state.inputMin = payload = ''
      },
      handleCLickClearValueSecond(state, {payload}) {
        state.inputMax = payload = ''
      },
      
    },
      extraReducers: {
        [fetchQuery.pending] : (state) => {
            state.loading = 'load'
            state.error = null
            console.log(state.loading)
        },
        [fetchQuery.fulfilled] : (state, {payload}) => {
            state.loading = 'resolve'
            state.productCopy = payload
            state.product = payload
            state.filteredItems = payload
            console.log(state.loading)
            //state.placeOrder = payload
        },
        [fetchQuery.rejected] : (state, {payload}) => {
           state.loading = 'rejected'
           state.error = payload
           console.log(state.loading)
        },
        [toggleStatus.fulfilled] : (state, {payload}) => {
          const toggledTodo = state.productCopy.find(todo => todo.id === payload.id);
            if (toggledTodo) {
              toggledTodo.favourites = !toggledTodo.favourites;
            }
        }
      },
  },
)

export const { handleHoverOptions, onclickHnadleEyes, closeEaysModal, filterRange, handleClickFiltersCategoryNew, handleClickAllProducts, handleClickFilterSale, handleClickSortGoUp, handleClickSortGoDown, handleClickSortCategories, handleClickRecentlyViews, handleClickSortSizes, handleClickAddFavourites, handelClickRemoveProductFavourites, handleClickAddBasketProduct, handelClickRemoveProductBasket, handleClickRemoveFavourites, handleClickIncrementProduct, handleClickDecrementProduct, handleClickProductModalIncrement, handleClickProductModalDecrement, handleClickRemoveItemBasket, handleClickAddCountBasketItem, handleClickRemoveCountItemBasket, totalPriceOfGoods, totalShippingBasketProduct, handleClickConfirmProductModal, handleClickRemoveItemModal, handleClickFiltersCheckbox, handleClickSecond, hadnleClickSortSecond, handleClickSorts, handleClicks, toggleComplete, headerLoginButton, headerLoginButtonSecond,handleCLickRemoveArrayBasket, test, testSecond, toggleCompleteRemove, toggleCompleteTrue, handleClickSlider,handleInputFirst, handleInputSecond, handleCLickClearValue, handleCLickClearValueSecond, toggleCompleteTrack, testThird, testForth, removeItemToOrder, placeOrderPushValue, stateHoverProductTrue, stateHoverProductFalse, testFifth, handleCountOrderNumber, handleSearchValueUser, handleClickSearchProduct, handleScrollPages, handleClickAddCountFavouritesItem, handleClickProductModalIncrementSecond, handleClickProductModalDecrementSecond, testSixth, handelClickAddAdress, handelClickSaveAdress, handleClickSelectAllCheck } = sliceProducts.actions 

export default sliceProducts.reducer
