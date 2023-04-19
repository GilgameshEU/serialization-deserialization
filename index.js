// Функция сериализации массива целых чисел в строку с использованием Base64 кодирования
function serializeIntArray(arr) {
  const str = arr.join(","); // Преобразуем массив в строку с разделителем ","
  const base64Str = btoa(str); // Кодируем строку в Base64
  return base64Str;
}

// Функция десериализации строки в массив целых чисел с использованием Base64 декодирования
function deserializeIntArray(str) {
  const decodedStr = atob(str); // Декодируем строку из Base64
  const arr = decodedStr.split(",").map((num) => parseInt(num)); // Разделяем строку по разделителю "," и преобразуем каждую подстроку в число
  return arr;
}

// Функция для подсчета коэффициента сжатия
function calculateCompressionRatio(originalSize, compressedSize) {
  const compressionRatio = compressedSize / originalSize;
  return compressionRatio;
}

// Функция для генерации массива случайных целых чисел
function generateRandomIntArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomInt(min, max));
  }
  return arr;
}

// Функция для генерации случайного целого числа в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для сравнения двух массивов
function arraysMatch(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Тест 1: Проверка сериализации и десериализации массива из 50 случайных чисел
const testArr1 = generateRandomIntArray(50, 1, 300);
const serializedStr1 = serializeIntArray(testArr1);
const deserializedArr1 = deserializeIntArray(serializedStr1);
const originalLength1 = testArr1.length;
const serializedLength1 = serializedStr1.length;
const compressionRatio1 = calculateCompressionRatio(originalLength1, serializedLength1);
console.log("Test 1:");
console.log("Input Array:", testArr1);
console.log("Serialized String:", serializedStr1);
console.log("Deserialized Array:", deserializedArr1);
console.log("Compression Ratio:", compressionRatio1.toFixed(2));
console.log("Match:", arraysMatch(testArr1, deserializedArr1)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 2: Проверка сериализации и десериализации массива из 100 случайных чисел
const testArr2 = generateRandomIntArray(100, 1, 300);
const serializedStr2 = serializeIntArray(testArr2);
const deserializedArr2 = deserializeIntArray(serializedStr2);
const originalLength2 = testArr2.length;
const serializedLength2 = serializedStr2.length;
const compressionRatio2 = calculateCompressionRatio(originalLength2, serializedLength2);
console.log("Test 2:");
console.log("Input Array:", testArr2);
console.log("Serialized String:", serializedStr2);
console.log("Deserialized Array:", deserializedArr2);
console.log("Compression Ratio:", compressionRatio2.toFixed(2));
console.log("Match:", arraysMatch(testArr2, deserializedArr2)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 3: Проверка сериализации и десериализации массива из 500 случайных чисел
const testArr3 = generateRandomIntArray(500, 1, 300);
const serializedStr3 = serializeIntArray(testArr3);
const deserializedArr3 = deserializeIntArray(serializedStr3);
const originalLength3 = testArr3.length;
const serializedLength3 = serializedStr3.length;
const compressionRatio3 = calculateCompressionRatio(originalLength3, serializedLength3);
console.log("Test 3:");
console.log("Input Array:", testArr3);
console.log("Serialized String:", serializedStr3);
console.log("Deserialized Array:", deserializedArr3);
console.log("Compression Ratio:", compressionRatio3.toFixed(2));
console.log("Match:", arraysMatch(testArr3, deserializedArr3)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 4: Проверка сериализации и десериализации массива из 1000 случайных чисел
const testArr4 = generateRandomIntArray(1000, 1, 300);
const serializedStr4 = serializeIntArray(testArr4);
const deserializedArr4 = deserializeIntArray(serializedStr4);
const originalLength4 = testArr4.length;
const serializedLength4 = serializedStr4.length;
const compressionRatio4 = calculateCompressionRatio(originalLength4, serializedLength4);
console.log("Test 4:");
console.log("Input Array:", testArr4);
console.log("Serialized String:", serializedStr4);
console.log("Deserialized Array:", deserializedArr4);
console.log("Compression Ratio:", compressionRatio4.toFixed(2));
console.log("Match:", arraysMatch(testArr4, deserializedArr4)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 5: Проверка сериализации и десериализации массива из всех чисел из 1го знака
const testArr5 = generateRandomIntArray(1000, 0, 9);
const serializedStr5 = serializeIntArray(testArr5);
const deserializedArr5 = deserializeIntArray(serializedStr5);
const originalLength5 = testArr5.length;
const serializedLength5 = serializedStr5.length;
const compressionRatio5 = calculateCompressionRatio(originalLength5, serializedLength5);
console.log("Test 5:");
console.log("Input Array:", testArr5);
console.log("Serialized String:", serializedStr5);
console.log("Deserialized Array:", deserializedArr5);
console.log("Compression Ratio:", compressionRatio5.toFixed(2));
console.log("Match:", arraysMatch(testArr5, deserializedArr5)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 6: Проверка сериализации и десериализации массива из всех чисел из 2х знаков
const testArr6 = generateRandomIntArray(1000, 10, 99);
const serializedStr6 = serializeIntArray(testArr6);
const deserializedArr6 = deserializeIntArray(serializedStr6);
const originalLength6 = testArr6.length;
const serializedLength6 = serializedStr6.length;
const compressionRatio6 = calculateCompressionRatio(originalLength6, serializedLength6);
console.log("Test 6:");
console.log("Input Array:", testArr6);
console.log("Serialized String:", serializedStr6);
console.log("Deserialized Array:", deserializedArr6);
console.log("Compression Ratio:", compressionRatio6.toFixed(2));
console.log("Match:", arraysMatch(testArr6, deserializedArr6)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 7: Проверка сериализации и десериализации массива из всех чисел из 3х знаков
const testArr7 = generateRandomIntArray(1000, 100, 999);
const serializedStr7 = serializeIntArray(testArr7);
const deserializedArr7 = deserializeIntArray(serializedStr7);
const originalLength7 = testArr7.length;
const serializedLength7 = serializedStr7.length;
const compressionRatio7 = calculateCompressionRatio(originalLength7, serializedLength7);
console.log("Test 7:");
console.log("Input Array:", testArr7);
console.log("Serialized String:", serializedStr7);
console.log("Deserialized Array:", deserializedArr7);
console.log("Compression Ratio:", compressionRatio7.toFixed(2));
console.log("Match:", arraysMatch(testArr7, deserializedArr7)); // Проверка на соответствие исходного и десериализованного массивов

// Тест 8: Массив из чисел, где каждое число повторяется 3 раза
const testArr8 = [];
for (let i = 0; i < 300; i++) {
  const num = getRandomInt(0, 9);
  testArr8.push(num, num, num);
}
const serializedStr8 = serializeIntArray(testArr8);
const deserializedArr8 = deserializeIntArray(serializedStr8);
console.log("Test 8:");
console.log("Input Array:", testArr8);
const originalLength8 = testArr8.length;
const serializedLength8 = serializedStr8.length;
console.log("Serialized String:", serializedStr8);
console.log("Deserialized Array:", deserializedArr8);
console.log("Match:", arraysMatch(testArr8, deserializedArr8));
const compressionRatio8 = serializedLength8 / originalLength8;
console.log("Compression Ratio:", compressionRatio8.toFixed(2));
