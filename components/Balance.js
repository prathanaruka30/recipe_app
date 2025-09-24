import React from "react";

function Balance({ transactions }) {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </div>
  );
}

export default Balance;
