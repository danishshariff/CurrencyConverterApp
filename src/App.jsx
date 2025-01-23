import React, { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import currencyMap from "./utils/currencyMap";

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { data: currencyInfo, error } = useCurrencyInfo();

    const options = Object.keys(currencyInfo || {}).map(code => ({
        code,
        name: currencyMap[code] || code
    }));

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        if (currencyInfo) {
            const fromRate = currencyInfo[from] || 1;
            const toRate = currencyInfo[to] || 1;
            const newConvertedAmount = ((toRate / fromRate) * amount).toFixed(2);
            setConvertedAmount(newConvertedAmount);
        }
    };

    useEffect(() => {
        if (currencyInfo) {
            convert();
        }
    }, [currencyInfo, amount, from, to]);

    if (error) {
        return <p>Error fetching currency data: {error}</p>;
    }

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            }}>
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}>
                        <InputBox
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                        <div className="relative w-full h-0.5 mt-3">
                            <button type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}>
                                swap
                            </button>
                        </div>
                        <InputBox
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
