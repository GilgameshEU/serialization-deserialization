# Array Serialization with Base64

JavaScript библиотека для сериализации и десериализации массивов целых чисел с использованием Base64 кодирования.

## 📋 Описание

Проект предоставляет простые и эффективные функции для преобразования массивов целых чисел в компактные строковые представления и обратно.
Скрипт включает 8 комплексных тестов:
Массивы разного размера (50, 100, 500, 1000 элементов)
Числа разной разрядности (1, 2, 3 знака)
Специальные случаи (повторяющиеся числа)

## 🚀 Возможности

- 🔄 Сериализация массивов чисел в Base64 строки
- 🔍 Десериализация строк обратно в массивы чисел
- 📊 Расчет коэффициента сжатия данных
- 🧪 Автоматическое тестирование с различными наборами данных
- 🎲 Генерация случайных массивов для тестирования

## 🛠 Технологии

- **JavaScript** (ES6+)
- **Base64 Encoding/Decoding** (btoa/atob)
- **Console API** для вывода результатов

## 📦 Использование

```javascript
// Сериализация массива в Base64 строку
const serialized = serializeIntArray([1, 2, 3, 4, 5]);

// Десериализация строки обратно в массив
const deserialized = deserializeIntArray(serialized);

// Расчет коэффициента сжатия
const ratio = calculateCompressionRatio(originalSize, compressedSize);

// Пример
const numbers = [10, 20, 30, 40, 50];
const serializedString = serializeIntArray(numbers);
console.log(serializedString); // "MTAsMjAsMzAsNDAsNTA="

const restoredArray = deserializeIntArray(serializedString);
console.log(restoredArray); // [10, 20, 30, 40, 50]
