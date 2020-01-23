function getSolutions( a, b, c ) {
    let D = b * b - 4 * a * c;
    let result = {}
    let roots = []
    if (D < 0) {
        result.D = D;
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        roots.push(x1);
        result.roots = roots;
        result.D = D;
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots.push(x1);
        roots.push(x2);
        result.roots = roots
        result.D = D;
    }
    return result;
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0 ) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`)
    }
}
