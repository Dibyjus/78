var i = 0; 
function update() { i++;
     var numbers_of_family_member_in_array = 3
     if(i > numbers_of_family_member_in_array ) { i = 0;
     } var updatedImage = images[i];
      var updatedName = names[i];
       document.getElementById("family_member_image").src = updatedImage;
        document.getElementById("family_member_name").innerHTML = updatedName;
     }
     var images = ["https://st.depositphotos.com/1771835/1481/i/450/depositphotos_14814611-stock-photo-confident-happy-man-framing-photograph.jpg","https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?auto=format&h=200","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1xUup6_ScrUF9JFUqETGNmykoAR3U4aB3i4lyahjDg&s"]   
                var names = ["Rodrigo","Cristina","Joana"]