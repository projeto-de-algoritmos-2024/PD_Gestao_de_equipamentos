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

// Exemplo de uso
// const itens = [1, 2, 3, 4, 5];
// const values = [1, 6, 18, 22, 26];
// const weights = [1, 2, 5, 6, 7];
// const capacity = 11;
// const n = values.length;

// const result = knapsackRecursive(capacity, weights, values, n);
// const maxValue = result.maxValue;
// const selectedItems = result.selectedItems.map(index => itens[index]);

// console.log("O valor máximo que pode ser colocado na mochila é: " + maxValue);
// console.log("Itens selecionados: " + selectedItems);