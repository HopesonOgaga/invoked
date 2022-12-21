(() => {
  let hotel = {
    name: "park",
    room_rate: 240,
    discount: 15,
    offer_price: function () {
      let offer_rate = this.room_rate * ((100 - this.discount) / 100);
      return offer_rate;
    },
  };

  let hotel_name = document.getElementById("hotelName");
  hotel_name.textContent = hotel.name;
  let room_rate = document.getElementById("roomRate");
  room_rate.textContent = "$" + hotel.room_rate;
  let special_rate = document.getElementById("specialRate");
  special_rate.textContent = "$" + hotel.offer_price();

  const offer_expires = () => {
    let week_from_today = new Date(today.getTime() + 7 * 24 * 60 * 1000);

    let day_names = [
      " Sunday",
      "Monday",
      "Tuesday ",
      "Wednesday ",
      "Thursday",
      " Friday",
      "Saturday ",
    ];

    let month_names = [
      "January",
      " February",
      "March",
      "April ",
      "May ",
      "June ",
      "July",
      "August ",
      "September",
      "October",
      " November",
      "December",
    ];
    let days = day_names[week_from_today.getDay()];
    let months = month_names[week_from_today.getMonth()];
    let date = week_from_today.getDate();
    let year = week_from_today.getFullYear();

    let expire_msg = "offer expires ";
    expire_msg += days + " <br I>( " + date + " " + months + " " + year + ")";
    return expire_msg;
  };
  let today = new Date();

  let el_ends = document.getElementById("offerEnds");
  el_ends.innerHTML = offer_expires();
})();
