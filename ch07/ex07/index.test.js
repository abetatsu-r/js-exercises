import { mergeSort } from "."

test('mergeSort', () => {
    expect(mergeSort([])).toEqual([]);
    //expect(mergeSort([1])).toEqual([1]);

    expect(mergeSort([671, 345, 120, 551])).toEqual([120, 345, 551, 671]);
})