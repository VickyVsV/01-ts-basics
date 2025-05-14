//Інтерфейси

interface Product{
  readonly id: number; // Це поле тільки для читання
  title: string;
  description?: string; // Це поле може бути відсутнім
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
}; 

console.log(`Product: ${JSON.stringify(product)}`);