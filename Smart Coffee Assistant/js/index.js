function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if ((username === "admin" || username === "user") && password === "1234") {
      alert("Login successful!");
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("orderSection").style.display = "block";
    } else {
      alert("Invalid credentials. Access denied.");
    }
  }

  function placeOrder() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const coffee = document.getElementById("coffeeType").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const split = parseInt(document.getElementById("split").value);
    const tipPercent = parseInt(document.getElementById("tip").value);

    let price = 0;
    if (coffee === "espresso") price = 2.5;
    else if (coffee === "latte") price = 3.5;
    else if (coffee === "cappuccino") price = 4.0;

    let originalTotal = price * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
    let finalTotal = originalTotal - discount;

    let tipAmount = finalTotal * (tipPercent / 100);
    let totalWithTip = finalTotal + tipAmount;
    let perPerson = totalWithTip / split;

    alert(
      `Hello ${name}!\n` +
      `You ordered ${quantity} ${coffee}(s).\n` +
      `Original total: $${originalTotal.toFixed(2)}\n` +
      `Discount: $${discount.toFixed(2)}\n` +
      `Tip: $${tipAmount.toFixed(2)}\n` +
      `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
      `Split between ${split} person(s): $${perPerson.toFixed(2)} each`
    );
  }