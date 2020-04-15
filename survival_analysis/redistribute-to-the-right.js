let aml_data_maintained = ["9", "13", "13+", "18", "23", "28+", "31", "34", "45+", "48", "161+"];
let aml_data_nonmaintained = ["5", "5", "8", "8", "12", "16+", "23", "27", "30", "33", "43", "45"];

// empirical survivor function
let esf = function (data = aml_data_maintained, time = 24) {
  // force the array str types to int
  let intData = data.map((x) => parseInt(x));

  // # of observations > time = #[t_i > time]
  let obsGreaterThanTime = intData.filter((x) => x > time).length;
  let Sn_t = obsGreaterThanTime / intData.length;
  return Sn_t;
};

// Redistribute-to-the-right algorithm
let redistributeToTheRight = function (data = aml_data_maintained, time = 24) {
  // force the array str types to int
  let intData = data.map((x) => parseInt(x));

  // get just the censored data
  let censoredData = data.filter((value) => isNaN(value)).map((x) => parseInt(x));
  let atRisk = intData.length;

  S_hat_t;
};

console.log("esf - ", esf());
redistributeToTheRight();

/*
// this removes the plus signs from the arrays - didn't need but just to have it
let removePlusSigns = function(arr = aml_data_maintained) {
    return arr.map((value) => {
        if (isNaN(value)) {
            value = value.slice(0,-1)
        }
        return value;
     })
}

// function used to remove all of the censored times, so it wasn't needed either
let remove_allTimes = function ( time = 24, data = aml_data_maintained) {
    //  remove censored data and force the array str types to int 
    let intData = data.filter(value => !isNaN(value)).map(x => parseInt(x));
  
    let obsGreaterThanTime = intData.filter((x) => x > time).length;
    console.log(intData, obsGreaterThanTime)
    let Sn_t = obsGreaterThanTime / data.length;
    return Sn_t;
  };
  */
