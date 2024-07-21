import React, { useState } from "react";
import bgMobile from "./../image/bg-main-mobile.png";
import bgDesktop from "./../image/bg-main-desktop.png";
import tick from "./../image/icon-complete.svg";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { removeItemToOrder } from "../Slices/SliceProducts";
import { useDispatch } from "react-redux";
import { useController, useForm } from "react-hook-form";
import image from './../image/danger_triangle_icon_183758.svg'
import PayEx from "./PayEx";

export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("");

  const dispatch = useDispatch()

  const {
    watch,
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      cardholderName: "",
      number: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  });

  const {
    field: cardNumberField,
    fieldState: { error: cardNumberError },
  } = useController({
    control,
    name: "number",
    rules: {
      required: "Can't be blank",
      minLength: {
        value: 19,
        message: "Incomplete card number",
      },
      pattern: {
        value: /^(?=.*\d)[\d ]+$/,
        message: "Wrong format, numbers only",
      },
    },
  });

  const [isComplete, setIsComplete] = useState(false);

  function onSubmit(data, event) {
    event.preventDefault();
    // Send data to backend 👇
    console.log(data);
    setIsComplete(true);
  }

  function handleContinue() {
    setIsComplete(false);
    reset();
  }

  function formatCardNumber(numberStr) {
    return numberStr
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .substring(0, 19);
  }

  return (
    <>
      <section className="pay">
        <div className="pay__block-fonts">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" className="pay__image-fonts" />
          </picture>
        </div>

        <div className="pay__block-main-side">
          <PayEx card={watch()} />

          <div className="pay__block-confirm">
            <>
              {
                !isComplete ? <form className="pay__forms" onSubmit={handleSubmit(onSubmit)}>
                <div className="pay__block-cardholder">
            <label className="pay__label" htmlFor="cardholder-name">CARDHOLDER NAME</label>
            <input
              className="pay__input"
              id="cardholder-name"
              {...register("cardholderName", { required: "Can't be blank" })}
              placeholder="e.g. Jane Appleseed"
            />
            {errors.cardholderName && (
              <p className='error'>{errors.cardholderName.message}</p>
            )}
            </div>
            <div className="pay__block-card-numbers">
            <label className="pay__label" htmlFor="card-number">CARD NUMBER</label>
            <input 
              className="pay__input"
              id="card-number"
              onChange={(e) => {
                cardNumberField.onChange(formatCardNumber(e.target.value));
              }}
              onBlur={cardNumberField.onBlur}
              value={cardNumberField.value}
              ref={cardNumberField.ref}
              inputMode="numeric"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            {cardNumberError && (
              <p className='error' >{cardNumberError.message}</p>
            )}
            </div>
            <article className="pay__blb">
              <div className="pay__blb-inside">
                <label className="pay__label" htmlFor="card-exp-month">EXP. DATE (MM/YY)</label>
                <div className="pay__lals">
                  <input 
                    className="pay__input pay__input-date"
                    id="card-exp-month"
                    {...register("expMonth", {
                      min: { value: 1, message: "Invalid date" },
                      max: { value: 12, message: "Invalid date" },
                      required: "Can't be blank",
                    })}
                    maxLength={2}
                    inputMode="numeric"
                    placeholder="MM"
                  />
                  <input 
                    className="pay__input pay__input-month"
                    id="card-exp-year"
                    {...register("expYear", {
                      required: "Can't be blank",
                      min: {
                        value: new Date().getFullYear() % 2000,
                        message: "Invalid date",
                      },
                      max: {
                        value: 99,
                        message: "Invalid date",
                      },
                    })}
                    maxLength={2}
                    inputMode="numeric"
                    placeholder="YY"
                  />
                </div>
                {(errors.expMonth && (
                  <p className='error' >{errors.expMonth.message}</p>
                )) ||
                  (errors.expYear && (
                    <p className='error' >{errors.expYear.message}</p>
                  ))}
              </div>
              <div className="pay__block-cvc">
                <label className="pay__label" htmlFor="card-cvc">CVC</label>
                <input 
                  className="pay__input"
                  id="card-cvc"
                  {...register("cvc", {
                    pattern: {
                      value: /[0-9]{3}/,
                      message: "Must be 3 digits",
                    },
                    required: "Can't be blank",
                  })}
                  maxLength={3}
                  inputMode="numeric"
                  placeholder="e.g. 123"
                />
                {errors.cvc && <p className='error'>{errors.cvc.message}</p>}
                </div>
              </article>
            <button onClick={() => dispatch(removeItemToOrder())} className="pay__btn-confirm">Confirm</button>
                </form> : <ThankYou setConfirmed={setConfirmed} />
              }
            </>
          </div>
        </div>
      </section>
    </>
  );
}

function ThankYou({ setConfirmed }) {
  return (
    <>
      <div className="success-payment__block">
        <img src={tick} alt="" className="success-payment__image" />
        <h1 className="success-payment__header">
          Thank you!
        </h1>
        <p className="success-payment__description">
          We've added your card details
        </p>
        <Link className="success-payment__link" to='/'>
            <button
              onClick={() => setConfirmed(false)}
              className="success-payment__continue"
            >
              Continue
            </button>
        </Link>
      </div>
    </>
  );
}