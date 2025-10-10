let aluno1: [string, number];
aluno1 = ['Romulo', 40];
console.log("Aluno 1:", aluno1);


let aluno2: [number, string];
aluno2 = [40, "Romulo"];
console.log("Aluno 2:",aluno2);


let aluno3: [string, number, string[]];
aluno3 = ['Romulo', 40, ['Dev', 'DJ']];
console.log("Aluno 3:", aluno3);


let statusPedido: [string];
statusPedido = ['Em produção'];
statusPedido.push('Saiu para entrega');
statusPedido.push('Pedido entregue');
console.log("Status do pedido:", statusPedido);
