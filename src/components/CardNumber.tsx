// @ts-nocheck
import {
  Fragment,
  useRef,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { TextField, InputAdornment } from "@material-ui/core";
// @ts-ignore
import PaymentIcon from "react-payment-icons";
import InputMask from "react-input-mask";
import CardIcon from "@material-ui/icons/Payment";
import { number } from "card-validator";
import { CardNumberVerification } from "card-validator/dist/card-number";
import { InputProps } from "@/types/helper.types";
import { absLenght } from "@/helpers/converter";
import { CardContextInterface } from "@/interfaces/helper.interface";

const CreditCardDataContext = createContext<CardContextInterface | null>(null);

const CardNumberInput = ({
  leaveFieldCallback,
  focus,
  tabIndex,
  setShownError,
}: InputProps) => {
  const [cardType, setCardType] = useState("");
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null!);

  const CardContext = useContext(CreditCardDataContext);

  const handleChange = (event: any) => {
    const cardNumberValue: string = event?.target?.value;
    const cardNumberValidator: CardNumberVerification = number(cardNumberValue);

    setCardType(cardNumberValidator?.card?.type || "");
    if (
      absLenght(cardNumberValue) > 0 &&
      !cardNumberValidator.isPotentiallyValid
    ) {
      setError(true);
      setShownError((prev: any) => {
        return {
          ...prev,
          card_num: "رقم البطاقة غير صحيح. يجب أن يكون الرقم مكون من 16 رقم",
        };
      });
      setInfo("رقم البطاقة غير صحيح.");
      // } else if (/([0-9]{4,})/.test(cardNumberValue) && !cardNumberValidator.isValid) {
      //   setError(true);
      //   setInfo("still something sticky");
    } else if (!/([0-9]+)/.test(cardNumberValue)) {
      setError(false);
      setShownError((prev: any) => {
        return { ...prev, card_num: null };
      });
      setInfo("");
    } else if (cardNumberValidator.isValid) {
      setError(false);
      setShownError((prev: any) => {
        return { ...prev, card_num: null };
      });
      setInfo("");
      if (leaveFieldCallback) {
        leaveFieldCallback(tabIndex + 1);
      }
    }
  };

  const handleBlur = (event: any) => {
    const cardNumberValue = event?.target?.value;
    const cardNumberValidator: CardNumberVerification = number(cardNumberValue);
    if (cardNumberValidator.isValid) {
      setError(false);
      setShownError((prev: any) => {
        return { ...prev, card_num: null };
      });
      setInfo("");
      CardContext?.setCardData({
        ...CardContext.cardData,
        cardNumber: event?.target?.value || "",
        cvclenght: cardNumberValidator?.card?.code.size || 3,
      });
    } else {
      setError(true);
      setShownError((prev: any) => {
        return {
          ...prev,
          card_num: "رقم البطاقة غير صحيح. يجب أن يكون الرقم مكون من 16 رقم",
        };
      });
      setInfo("مازال شئ ما خطأ");
      if (leaveFieldCallback) {
        leaveFieldCallback(tabIndex);
      }
    }
  };

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, [focus]);

  return (
    <Fragment>
      <InputMask
        mask="9999 9999 9999 9999"
        maskChar=" "
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {() => (
          <TextField
            error={error}
            id="standard-error-helper-text"
            label="رقم البطاقة"
            tabIndex={tabIndex}
            autoFocus={focus}
            helperText={info}
            inputRef={inputRef}
            type="tel"
            name="card_num"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {cardType === "" && <CardIcon />}
                  {cardType !== "" && (
                    <PaymentIcon
                      id={cardType}
                      style={{ margin: 10, width: 24 }}
                      className="payment-icon"
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        )}
      </InputMask>
    </Fragment>
  );
};

export default CardNumberInput;
