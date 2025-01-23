import React, { useId } from "react";

function InputBox({
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    Amount
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    Currency
                </label>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((option) => (
                        <option key={option.code} value={option.code}>
                            {option.name} ({option.code})
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
