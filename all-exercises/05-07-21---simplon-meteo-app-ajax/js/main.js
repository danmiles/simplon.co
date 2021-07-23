/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "7e5684e315d0016b07f849714ed08ab8";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    //check if there's already a city
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(el => {
            let content = "";
            //athens,gr
            if (inputVal.includes(",")) {
                //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                //athens
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${filteredArray[0].querySelector(".city-name span").textContent
                } ...otherwise be more specific by providing the country code as well 😉`;
            form.reset();
            input.focus();
            return;
        }
    }

    //ajax here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]
                }.svg`;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${weather[0]["description"]
                }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });



    msg.textContent = "";
    form.reset();
    input.focus();
});

// Chart Meteo APP with Vue.js

var app = new Vue({
    el: "#app-chart",
    data: {
        chart: null,
        city: "",
        dates: [],
        temps: [],
        loading: false,
        errored: false
    },
    methods: {
        getData: function () {
            this.loading = true;

            if (this.chart != null) {
                this.chart.destroy();
            }

            axios
                .get("https://api.openweathermap.org/data/2.5/forecast", {
                    params: {
                        q: this.city,
                        units: "metric",
                        appid: "7e5684e315d0016b07f849714ed08ab8"
                    }
                })
                .then(response => {
                    this.dates = response.data.list.map(list => {
                        return list.dt_txt;
                    });

                    this.temps = response.data.list.map(list => {
                        return list.main.temp;
                    });

                    var ctx = document.getElementById("myChart");
                    this.chart = new Chart(ctx, {
                        type: "line",
                        data: {
                            labels: this.dates,
                            datasets: [
                                {
                                    label: "Avg. Temp",
                                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                                    borderColor: "rgb(51, 51, 255)",  
                                    scaleFontColor: "#FFFFFF",
                                    font: "#fff",                                                                    
                                    fill: false,
                                    data: this.temps                                    
                                }
                            ]
                        },
                        options: {
                            title: {
                                display: true,
                                text: "Temperature with Chart.js"
                            },
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItem, data) {
                                        var label =
                                            data.datasets[tooltipItem.datasetIndex].label || "";

                                        if (label) {
                                            label += ": ";
                                        }

                                        label += Math.floor(tooltipItem.yLabel);
                                        return label + "℃";
                                    }
                                }
                            },
                            scales: {
                                xAxes: [
                                    {
                                        type: "time",
                                        time: {
                                            unit: "hour",
                                            displayFormats: {
                                                hour: "M/DD @ hA"
                                            },
                                            tooltipFormat: "MMM. DD @ hA"
                                        },
                                        scaleLabel: {
                                            display: true,
                                            labelString: "Date/Time"
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        scaleLabel: {
                                            display: true,
                                            labelString: "Temperature (℃)"
                                        },
                                        ticks: {
                                            callback: function (value, index, values) {
                                                return value + "℃";
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    });
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => (this.loading = false));
        }
    }
});