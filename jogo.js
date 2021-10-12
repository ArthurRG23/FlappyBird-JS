console.log('[ArthurRodrigues] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); function para desenhar image
const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha() {
        ctx.drawImage(
            sprites, 
            flappyBird.spriteX, flappyBird.spriteY, //posição da imagem sprite x e y 
            flappyBird.largura, flappyBird.altura, //Tamanho do recorte na sprite em altura e largura 
            flappyBird.x, flappyBird.y, // Dispocição do recorte dentro do canvas
            flappyBird.largura, flappyBird.altura // Tamanho do recorte dentro do canvas
            );
    }
}

//Chão
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        ctx.drawImage(
            sprites, 
            chao.spriteX, chao.spriteY, //posição da imagem sprite x e y 
            chao.largura, chao.altura, //Tamanho do recorte na sprite em altura e largura 
            chao.x, chao.y, // Dispocição do recorte dentro do canvas
            chao.largura, chao.altura // Tamanho do recorte dentro do canvas
            );

            ctx.drawImage(
                sprites, 
                chao.spriteX, chao.spriteY, //posição da imagem sprite x e y 
                chao.largura, chao.altura, //Tamanho do recorte na sprite em altura e largura 
                (chao.x + chao.largura), chao.y, // Dispocição do recorte dentro do canvas
                chao.largura, chao.altura // Tamanho do recorte dentro do canvas
            );
    },
}

//Plano de Fundo
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        //Pintar fundo completo do canvas
        ctx.fillStyle = '#70c5ce';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        //Fim pintar fundo completo do canvas
        ctx.drawImage(
            sprites, 
            planoDeFundo.spriteX, planoDeFundo.spriteY, //posição da imagem sprite x e y 
            planoDeFundo.largura, planoDeFundo.altura, //Tamanho do recorte na sprite em altura e largura 
            planoDeFundo.x, planoDeFundo.y, // Dispocição do recorte dentro do canvas
            planoDeFundo.largura, planoDeFundo.altura // Tamanho do recorte dentro do canvas
            );

            ctx.drawImage(
                sprites, 
                planoDeFundo.spriteX, planoDeFundo.spriteY, //posição da imagem sprite x e y 
                planoDeFundo.largura, planoDeFundo.altura, //Tamanho do recorte na sprite em altura e largura 
                (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y, // Dispocição do recorte dentro do canvas
                planoDeFundo.largura, planoDeFundo.altura // Tamanho do recorte dentro do canvas
            );
    },
}

function loop() {
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();

    // flappyBird.y = flappyBird.y + 1;

    requestAnimationFrame(loop); //função que ajuda na animação do JavaScrpit da maneira mais inteligente possível
}

loop();