import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://openexchangerates.org/api/latest.json?app_id=71ca012b98b2453dbfbd1e9050dff3ea`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((err) => setError(err.message));
    }, []);

    return { data, error };
}

export default useCurrencyInfo;
