// Fungsi untuk menghasilkan bilangan acak antara 1 dan 50
function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // Fungsi untuk mengisi array dengan bilangan acak
  function fillArrayWithRandomValues(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(getRandomNumber());
    }
    return arr;
  }
  
  // Fungsi untuk membagi array menjadi array genap dan ganjil
  function splitArray(arr) {
    const evenArray = [];
    const oddArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
  
    return [evenArray, oddArray];
  }
  
  // Fungsi untuk menghitung min, max, total, dan rata-rata dari array
  function calculateStats(arr) {
    let min = arr[0];
    let max = arr[0];
    let total = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const currentValue = arr[i];
      if (currentValue < min) {
        min = currentValue;
      }
      if (currentValue > max) {
        max = currentValue;
      }
      total += currentValue;
    }
  
    const average = total / arr.length;
  
    return { min, max, total, average };
  }
  
  // Membuat array dengan 100 nilai acak
  const randomArray = fillArrayWithRandomValues(100);
  
  // Membagi array menjadi array genap dan ganjil
  const [evenArray, oddArray] = splitArray(randomArray);
  
  // Menghitung statistik untuk masing-masing array
  const statsEven = calculateStats(evenArray);
  const statsOdd = calculateStats(oddArray);
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Statistik Array Genap:", statsEven);
  console.log("Statistik Array Ganjil:", statsOdd);
  
  // Membandingkan statistik
  if (statsEven.min > statsOdd.min) {
    console.log("Min lebih besar array genap");
  } else {
    console.log("Min lebih besar array ganjil");
  }
  
  if (statsEven.max > statsOdd.max) {
    console.log("Max lebih besar array genap");
  } else {
    console.log("Max lebih besar array ganjil");
  }
  
  if (statsEven.total === statsOdd.total) {
    console.log("Total memiliki nilai sama antara array genap dan ganjil");
  } else {
    console.log("Total berbeda antara array genap dan ganjil");
  }
  
  if (statsEven.average > statsOdd.average) {
    console.log("Rata-rata lebih besar array genap");
  } else {
    console.log("Rata-rata lebih besar array ganjil");
  }
  