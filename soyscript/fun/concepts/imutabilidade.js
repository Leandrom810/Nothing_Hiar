//basicamente nada deve ser alterado.

const a = [5, 4, 3, 2, 1, 0];

//se usado o método sort... Vai quebrar?

// a.sort();

// console.log(a);

//não quebra, porém... Temos um problema, o resultado a ser exibido é "0, 1, 2, 3, 4, 5,"
//e queremos obter justamente o valor de a. Em outras palavras, a foi alterado!

//para evitar alterações, devemos usar uma função que retornará uma nova array.

const b = (x) => [...x].sort();

console.log(b(a));

//o resultado é 0, 1, 2, 3, 4, 5. Porem, se printarmos o a...

console.log(a);
//a mantém seus valores originais e não é alterada. Muito embasado e baseado em fatos.