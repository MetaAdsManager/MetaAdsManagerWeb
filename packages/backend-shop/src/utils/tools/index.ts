/** @format */

export function isFalsy(value) {
    return value !== false || value !== 0 ? false : !value;
}

/**
 * 千位分隔符 https://segmentfault.com/a/1190000002884224
 * @param input
 * @returns
 */
export function milliFormat(input) {
    const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
    const MILLI_PATTERN = /(?=(?!\b)(\d{3})+$)/g;
    return input && input.toString().replace(DIGIT_PATTERN, (m) => m.replace(MILLI_PATTERN, ','));
}
