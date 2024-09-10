function knapsackRecursive(capacity, weights, values, n) {
    if (n === 0 || capacity === 0) {
        return { maxValue: 0, selectedItems: [] };
    }

    if (weights[n - 1] > capacity) {
        return knapsackRecursive(capacity, weights, values, n - 1);
    } else {
        const withoutItem = knapsackRecursive(capacity, weights, values, n - 1);
        const withItem = knapsackRecursive(capacity - weights[n - 1], weights, values, n - 1);

        const valueWithoutItem = withoutItem.maxValue;
        const valueWithItem = values[n - 1] + withItem.maxValue;

        if (valueWithItem > valueWithoutItem) {
            const selectedItems = [...withItem.selectedItems, n - 1];
            return { maxValue: valueWithItem, selectedItems };
        } else {
            return withoutItem;
        }
    }
}