document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
        e.preventDefault();
    }
});

const imagens = document.querySelectorAll(".minha-imagem");

imagens.forEach(imagem => {
    imagem.addEventListener("mouseover", function() {
        this.style.transition = "transform 0.3s ease-in-out"; 
        this.style.transform = "scale(1.03)";
    });
    imagem.addEventListener("mouseout", function() {
        this.style.transition = "transform 0.3s ease-in-out"; 
        this.style.transform = "scale(1)"; 
    });
});