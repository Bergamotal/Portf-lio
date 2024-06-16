function changeTextColor(selector) {
    // Reseta a cor de todos os textos
    document.querySelectorAll('.text1, .text2, .text3, .text4, .text5').forEach(function(text) {
        text.style.color = '#5ccb5f';
    });

    // Muda a cor do texto clicado
    var paragraphElement = document.querySelector(selector);
    paragraphElement.style.color = 'yellow';
}

function loadPage(page) { 
    // Carrega as págs como Web.html e/ou Ai.html
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

function reloadPage() {
    // Recarrega a página
    location.reload();
}

function hideIntroduction() {
    // Esconde a "introduction" em determinadas mudanças de págs 
    var introElement = document.getElementById('intro');
    if (introElement) {
        introElement.style.display = 'none';
    }
    var introHeader = document.querySelector('.introduction');
    if (introHeader) {
        introHeader.style.display = 'none';
    }
    
}

function hideAlg() {
    //Esconde a "alg" em determinadas mudanças de págs 
    var introHeader = document.querySelector('.alg');
    if (introHeader) {
        introHeader.style.display = 'none';
    }
    var introHeader = document.querySelector('.alg2');
    if (introHeader) {
        introHeader.style.display = 'none';
    }
    var introHeader = document.querySelector('.alg3');
    if (introHeader) {
        introHeader.style.display = 'none';
    }
    var introHeader = document.querySelector('.al');
    if (introHeader) {
        introHeader.style.display = 'none';
    }
    var introHeader = document.querySelector('.al2');
    if (introHeader) {
        introHeader.style.display = 'none';
    }
}

function showIntroduction() {
    //Mostra a "introduction" em determinadas mudanças de págs
    var introElement = document.getElementById('intro');
    if (introElement) {
        introElement.style.display = 'block';
    }
    var introHeader = document.querySelector('.introduction');
    if (introHeader) {
        introHeader.style.display = 'block';
    }
}

function showAlg() {
    //Mostra a "alg" em determinadas mudanças de págs 
    var introHeader = document.querySelector('.alg');
    if (introHeader) {
        introHeader.style.display = 'block';
    }
    var introHeader = document.querySelector('.alg2');
    if (introHeader) {
        introHeader.style.display = 'block';
    }
    var introHeader = document.querySelector('.alg3');
    if (introHeader) {
        introHeader.style.display = 'block';
    }
    var introHeader = document.querySelector('.al');
    if (introHeader) {
        introHeader.style.display = 'block';
    }
    var introHeader = document.querySelector('.al2');
    if (introHeader) {
        introHeader.style.display = 'block';
    }
}



function scrollToTop() {
    // Função de um botão que leva a pág para o início
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Mostra o botão quando o usuário rola para baixo 100px da parte superior do documento
  window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  
