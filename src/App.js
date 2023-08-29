import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]) // 기본값은 비어있는 array로 두어서 undefined되지 않도록 한다.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // coinpaprika API 가져오기
    .then((response) => response.json()) // response를 받아서 response.json을 return한다.
    .then((json) => {
      setCoins(json); // josn의 값을 setCoins해준다.
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => ( 
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

//암호화폐들과 가격 나열하기.
