function calculate_median(arr) {
    var even = buildEven(arr);
    var median = buildMedian(even);

    return median;
}

function buildEven(arr) {
    var even = [];
    var j = 0;

    for (var i = 1; i < arr.length; i += 2) {

        even[j] = arr[i];
        j++;
    }

    return even;
}

function buildMedian(even) {
    var sum = 0;
    var median = 0;

    for (var i = 0; i < even.length; i++) {
        sum += even[i];
    }
    median = sum / even.length;

    return median;
}

module.exports = calculate_median;
