var entrada = document.getElementById('txtEntrada')
var saida = document.getElementById('txtSaida')
var opc = document.getElementsByName('rad')
var feito
var metodo = 1
var imagem = document.getElementsByName('rimage')
var start = $('#start')
var boy = $('body')
/* Start */
start.on('click', function () {
    $('#txtEntrada').fadeToggle(1000);

    $('#txtSaida').fadeToggle(1000);
})

/* Botão Limpar */
document.getElementById('btnLimpar').addEventListener('click', function () {
    limpar()
})

/* Função Limpar */
function limpar() {
    entrada.value = ''
    saida.value = ''
}

/* Opção a se Fazer */

/* Entrada de Texto A Criptografar*/

opc[0].addEventListener('click', function () {

    if (opc[0].checked) {
        metodo = 1
        limpar()
    }
    if (opc[1].checked) {
        metodo = 0
        limpar()
    }


})

opc[1].addEventListener('click', function () {

    if (opc[0].checked) {
        metodo = 1
        limpar()
    }
    if (opc[1].checked) {
        metodo = 0
        limpar()
    }

    feito = metodo(this.value)

    saida.value = feito
})



entrada.addEventListener('input', function () {
    if (metodo == 1) {
        feito = criptografando(this.value)
        saida.value = feito
    } else {
        feito = descriptografando(this.value)
        saida.value = feito
    }
})

/* Imagens de Fundo */
function iman() {
    if (imagem[0].checked) {
        boy.removeClass('by2');
        boy.removeClass('by3');
        boy.addClass('by1');
    } else if (imagem[1].checked) {
        boy.removeClass('by1')
        boy.removeClass('by3')
        boy.addClass('by2')
    } else if (imagem[2].checked) {
        boy.removeClass('by1')
        boy.removeClass('by3')
        boy.addClass('by3')
    }
}


/* Entrada de Texto a Descriptografar */
function criptografando(para) {
    return para
        /* Vogais */
        /* A */
        .replace(/a/gi, 'µ')
        .replace(/à/gi, '∋')
        /* E */
        .replace(/e/gi, '§')
        .replace(/é/gi, 'Þ')
        /* I */
        .replace(/í/gi, 'ß')
        .replace(/î/gi, 'ø')
        /* O */
        .replace(/o/gi, 'Ψ')
        .replace(/ó/gi, 'ð')
        .replace(/õ/gi, 'Đ')
        .replace(/ô/gi, 'đ')
        /* U */
        .replace(/u/gi, 'ý')
        .replace(/ú/gi, 'þ')

        /* Numeros */
        .replace(/1/gi, 'ď')
        .replace(/2/gi, 'Ď')
        .replace(/3/gi, 'č')
        .replace(/4/gi, 'ċ')
        .replace(/5/gi, 'ĉ')
        .replace(/6/gi, 'ć')
        .replace(/7/gi, 'ą')
        .replace(/8/gi, 'ă')
        .replace(/9/gi, 'ā')
        .replace(/0/gi, 'ÿ')

        /* Especiais */
        .replace(/ /gi, 'Ԋ')

        /* Consoates */
        .replace(/b/gi, 'Æ')
        .replace(/c/gi, 'Ð')
        .replace(/d/gi, 'Φ')
        .replace(/f/gi, 'ζ')
        .replace(/g/gi, 'Ͱ')
        .replace(/h/gi, '¢')
        .replace(/j/gi, '¤')
        .replace(/k/gi, '¦')
        .replace(/l/gi, '¬')
        .replace(/m/gi, 'Å')
        .replace(/n/gi, '¿')
        .replace(/p/gi, '¶')
        .replace(/q/gi, '£')
        .replace(/r/gi, '©')
        .replace(/s/gi, 'Σ')
        .replace(/t/gi, 'Π')
        .replace(/v/gi, 'Ω')
        .replace(/w/gi, '¥')
        .replace(/x/gi, 'π')
        .replace(/y/gi, '∞')
        .replace(/z/gi, '۵')

        /* Caractreres Especiais */

        .replace(/"/gi, '⋯')
        .replace(/#/gi, '←')
        .replace(/%/gi, '∀')
        .replace(/&/gi, '∂')
        .replace(/º/gi, '∇')
        .replace(/ª/gi, '∃')
        .replace(/-/gi, '∁')
        .replace(/_/gi, '∂')
        .replace(/,/gi, '≅')
        .replace(/;/gi, '∓')
        .replace(/]/gi, '∄')
        .replace(/@/gi, '∈')
        .replace(/:/gi, '≈')
        .replace(/\./gi, '≡')
}

/* Entrada de Texto A Descriptografar*/
function descriptografando(para) {
    return para

        /* Vogais */
        /* A */
        .replace(/µ/gi, 'a')
        .replace(/∋/gi, 'à')
        /* E */
        .replace(/§/gi, 'e')
        .replace(/Þ/gi, 'é')
        /* I */
        .replace(/ß/gi, 'í')
        .replace(/ø/gi, 'î')
        /* O */
        .replace(/Ψ/gi, 'o')
        .replace(/ð/gi, 'ó')
        .replace(/Đ/gi, 'õ')
        .replace(/đ/gi, 'ô')
        /* U */
        .replace(/ý/gi, 'u')
        .replace(/þ/gi, 'ú')

        /* Numeros */
        .replace(/ď/gi, '1')
        .replace(/Ď/gi, '2')
        .replace(/č/gi, '3')
        .replace(/ċ/gi, '4')
        .replace(/ĉ/gi, '5')
        .replace(/ć/gi, '6')
        .replace(/ą/gi, '7')
        .replace(/ă/gi, '8')
        .replace(/ā/gi, '9')
        .replace(/ÿ/gi, '0')

        /* Especiais */
        .replace(/Ԋ/gi, ' ')

        /* Consoates */
        .replace(/Æ/gi, 'b')
        .replace(/Ð/gi, 'c')
        .replace(/Φ/gi, 'd')
        .replace(/ζ/gi, 'f')
        .replace(/Ͱ/gi, 'g')
        .replace(/¢/gi, 'h')
        .replace(/¤/gi, 'j')
        .replace(/¦/gi, 'k')
        .replace(/¬/gi, 'l')
        .replace(/Å/gi, 'm')
        .replace(/¿/gi, 'n')
        .replace(/¶/gi, 'p')
        .replace(/£/gi, 'q')
        .replace(/©/gi, 'r')
        .replace(/Σ/gi, 's')
        .replace(/Π/gi, 't')
        .replace(/Ω/gi, 'v')
        .replace(/¥/gi, 'w')
        .replace(/π/gi, 'x')
        .replace(/∞/gi, 'y')
        .replace(/۵/gi, 'z')

        /* Caractreres Especiais */

        .replace(/⋯/gi, '"')
        .replace(/←/gi, '#')
        .replace(/∀/gi, '%')
        .replace(/∂/gi, '&')
        .replace(/∇/gi, 'º')
        .replace(/∃/gi, 'ª')
        .replace(/∁/gi, '-')
        .replace(/∂/gi, '_')
        .replace(/≅/gi, ',')
        .replace(/∓/gi, ';')
        .replace(/∄/gi, ']')
        .replace(/∈/gi, '@')
        .replace(/≈/gi, ':')
        .replace(/≡/gi, '.')

}


