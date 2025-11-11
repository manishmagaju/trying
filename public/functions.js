function square(value) {
    const area = value * value
    return area
}

function cube(value) {
    const area = value * value * value
    return area
}

export function areaOfCircle(radius) {
    const area = 3.14 * radius * radius
    return area
}


export default square;
export { cube }
