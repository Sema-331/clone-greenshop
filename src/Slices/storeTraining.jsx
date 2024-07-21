import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const data = await response.json();
    
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }

            dispatch(removeTodo({id}));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().todos.todos.find(todo => todo.id === id);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });

            if (!response.ok) {
                throw new Error('Can\'t toggle status. Server error.');
            }

            dispatch(toggleComplete({id}));

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };

            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
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
            dispatch(addTodo(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.status = null;
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
        [fetchTodos.rejected] = setError;
        });
    },
});

const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;



/*********** */

// import React, { useState } from "react";
// import bgMobile from "./../image/bg-main-mobile.png";
// import bgDesktop from "./../image/bg-main-desktop.png";
// import logo from "./../image/card-logo.svg";
// import tick from "./../image/icon-complete.svg";
// import { format } from "date-fns";
// import { Link } from "react-router-dom";
// import { removeItemToOrder } from "../Slices/SliceProducts";
// import { useDispatch } from "react-redux";
// import { useController, useForm } from "react-hook-form";
// import image from './../image/danger_triangle_icon_183758.svg'

// export default function App() {
//   const [confirmed, setConfirmed] = useState(false);
//   const [name, setName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [date, setDate] = useState("01/23");
//   const [cvc, setCvc] = useState("");

//   const dispatch = useDispatch()

//   const {
//     watch,
//     register,
//     reset,
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     shouldUseNativeValidation: true,
//     defaultValues: {
//       cardholderName: "",
//       number: "",
//       expMonth: "",
//       expYear: "",
//       cvc: "",
//     },
//   });

//   const {
//     field: cardNumberField,
//     fieldState: { error: cardNumberError },
//   } = useController({
//     control,
//     name: "number",
//     rules: {
//       required: "Can't be blank",
//       minLength: {
//         value: 19,
//         message: "Incomplete card number",
//       },
//       pattern: {
//         value: /^(?=.*\d)[\d ]+$/,
//         message: "Wrong format, numbers only",
//       },
//     },
//   });

//   const [isComplete, setIsComplete] = useState(false);

//   function onSubmit(data, event) {
//     event.preventDefault();
//     // Send data to backend 👇
//     console.log(data);
//     setIsComplete(true);
//   }

//   function handleContinue() {
//     setIsComplete(false);
//     reset();
//   }

//   return (
//     <>
//       <section className="pay">
//         <div className="pay__block-fonts">
//           <picture>
//             <source media="(min-width: 768px)" srcSet={bgDesktop} />
//             <img src={bgMobile} alt="" className="pay__image-fonts" />
//           </picture>
//         </div>

//         <div className="pay__block-main-side">
//           <div className="pay__block-side-inside">
//             <article className="front-card">
//               <img src={logo} alt="" className="pay__side-iamge" />

//               <div className="pay__block-card-num">
//                 <h2 className="pay__heade-card-num">
//                   {cardNumber}
//                 </h2>

//                 <ul className="pay__list-box-info-user">
//                   <li className="pay__list-item-name-user">
//                     {name}
//                   </li>
//                   <li className="pay__list-item-date-user">
//                     {format(new Date(date), "MM/yy")}
//                   </li>
//                 </ul>
//               </div>
//             </article>

//             <article className="back-card">
//               <p className="pay__back-card-description">
//                 {cvc}
//               </p>
//             </article>
//           </div>

//           <div className="pay__block-confirm">
//             {!confirmed && (
//               <form id='form__pay' className="pay__forms" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="pay__block-cardholder">
//                 <input
//                 className="pay__input"
//                   id="cardholder-name"
//                   {...register("cardholderName", { required: "Can't be blank" })}
//                   placeholder="e.g. Jane Appleseed"
//                 />
//                 {errors.cardholderName && (
//                   <p>{errors.cardholderName.message}</p>
//                 )}
//                   <label className="pay__label" htmlFor="cardholder_name">Cardholder Name</label>
//                   <input
//                     {...register("firstName", {
//                       required: 'The field must be filled in!',
//                       minLength: {
//                         value: 2,
//                         message: 'Minimum 2 symbol',
//                         // pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
//                       }
//                     })}
//                     className="pay__input"
//                     id="cardholder_name"
//                     placeholder="e.g. Jane Appleseed"
//                     // required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   {/* <div>{errors?.firstName && <div className='check__form-danger'><img src={image} /><p>{errors?.firstName?.message || 'Error'}</p></div>}</div> */}
//                   <div>
//                     {errors?.firstName && <p>{errors?.firstName.message || 'Error'}</p>}
//                   </div>
//                 </div>

//                 <div className="pay__block-card-numbers">
//                   <label className="pay__label" htmlFor="card_number">Card Number</label>
//                   <input
//                     className="pay__input"
//                     type="text"
//                     name="card_number"
//                     id="card_number"
//                     placeholder="e.g. 1234 5678 9012 3456"
//                     required
//                     maxLength={19}
//                     value={cardNumber
//                       .replace(/\s/g, "")
//                       .replace(/(\d{4})/g, "$1 ")
//                       .trim()}
//                     onChange={(e) => setCardNumber(e.target.value)}
//                   />
//                 </div>

//                 <article className="pay__blb">
//                   <div className="pay__blb-inside">
//                     <label className="pay__label" htmlFor="expiry_date">Exp. Date (MM/YY)</label>
//                     <input
//                       className="pay__input"
//                       type="month"
//                       name="expiry_date"
//                       id="expiry_date"
//                       placeholder="MM YY"
//                       required
//                       value={date}
//                       onChange={(e) => setDate(e.target.value)}
//                     />
//                   </div>

//                   <div className="pay__block-cvc">
//                     <label className="pay__label" htmlFor="cvc">CVC</label>
//                     <input
//                       className="pay__input"
//                       type="number"
//                       name="cvc"
//                       id="cvc"
//                       placeholder="e.g. 123"
//                       maxLength={3}
//                       required
//                       value={cvc}
//                       onChange={(e) => {
//                         if (e.target.value.length === 4) {
//                             window.alert(
//                                 "Username shouldn't exceed 3 characters"
//                             );
//                         }
//                         setCvc(e.target.value);
//                       }}
//                     />
//                   </div>
//                 </article>

//                 <button onClick={() => {
//                   dispatch(removeItemToOrder())
//                   setConfirmed(true)
//                 }}  form="form__pay" type='submit'  className="pay__btn-confirm">
//                   Confirm
//                 </button>
//               </form>
//             )}

//             {isComplete && <ThankYou setConfirmed={setConfirmed} />}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function ThankYou({ setConfirmed }) {
//   return (
//     <>
//       <div className="success-payment__block">
//         <img src={tick} alt="" className="success-payment__image" />
//         <h1 className="success-payment__header">
//           Thank you!
//         </h1>
//         <p className="success-payment__description">
//           We've added your card details
//         </p>
//         <Link className="success-payment__link" to='/'>
//             <button
//               onClick={() => setConfirmed(false)}
//               className="success-payment__continue"
//             >
//               Continue
//             </button>
//         </Link>
//       </div>
//     </>
//   );
// }