import { useEffect, useState } from "react";

function useCryptoCurrencyConverter(crypto, currency){
    const [data, setData] = useState(null)  

    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`)
        .then((res)=> res.json())
        .then((res)=> setData(res[crypto]?.[currency])) 
        //console.log(data)
    }, [crypto,currency])

    //console.log("price:", data)
    return data 
}

export default useCryptoCurrencyConverter