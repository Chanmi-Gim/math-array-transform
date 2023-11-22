export function mapWithFunctions(arr, functionsArray) {
    if (!Array.isArray(arr) || !Array.isArray(functionsArray)) {
        throw new TypeError("arr and functionsArray should be arrays.");
    }
    return arr.map((x) => functionsArray.reduce((acc, f) => f(acc), x));
}
