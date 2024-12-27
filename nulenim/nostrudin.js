function calculateSine(angle) {
    // Check if the angle is undefined
    if (angle === undefined) {
        angle = 0; // Default value
    }
    
    const radians = angle * (Math.PI / 180); // Convert degrees to radians
    return Math.sin(radians);
}

// Usage examples
console.log(calculateSine());          // Output: 0 (default angle is 0 degrees)
console.log(calculateSine(30));        // Output: 0.5 (sine of 30 degrees)
console.log(calculateSine(undefined)); // Output: 0 (explicitly passing undefined)
console.log(calculateSine(90));        // Output: 1 (sine of 90 degrees)
