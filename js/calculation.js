function calculateCategoryScore(category) {
    let total = 0;
    let maxPossible = 0;
    // ... 计算逻辑
    return {
        actual: total,
        max: maxPossible,
        percentage: Math.round((total / maxPossible) * 100)
    };
}