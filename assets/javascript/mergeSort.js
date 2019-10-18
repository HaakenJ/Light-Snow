function merge(leftArr, rightArr) {
    let sortedArr = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex].toLowerCase() < rightArr[rightIndex].toLowerCase()) {
            sortedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArr.concat(leftArr.slice(leftIndex).concat(rightArr.slice(rightIndex)));
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0, middleIndex),
        rightArr = arr.slice(middleIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}