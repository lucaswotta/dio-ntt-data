/*
Código Condiçãom de pagamento:
1- À vista - Débito - 10% de desconto;
2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros
de 10%.
*/


function aplicarDesconto(precoEtiqueta, formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.1));
    } else if (formaDePagamento === 2) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.15));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(precoEtiqueta + (precoEtiqueta * 0.1));
    }
}

aplicarDesconto(199, 2);



