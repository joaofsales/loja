const resume = [
    {
        ano: '2011-2020',
        titulo: 'MBA EM GESTAO',
        onde: 'uberlandia',    
    },
    {
        ano: '2015-2020',
        titulo: 'MBA EM GESTAO DE AGRO',
        onde: 'CAnada',
    },
    {
        ano: '2018-2020',
        titulo: 'MBA EM GESTAO DE AGRO',
        onde: 'CAnada',
    },
    {
        ano: '2020-2020',
        titulo: 'MBA EM GESTAO DE AGRO',
        onde: 'CAnada',
    },
    {
        ano: '2020-2020',
        titulo: 'MBA EM GESTAO DE AGRO',
        onde: 'CAnada',
    }
]

// pegando o elemento box_table do html
const boxtable = document.querySelector('.box_table');

resume.forEach((item, index) => {
    // Criando linha da tabela
    const tableLine = document.createElement('tr');
    // Verificando se a posição do array é par e escolhendo uma classe
    const selectedClass = index % 2 === 0 ? 'white-line' : 'white_text'
    // adicionando a classe na linha da tabela
    tableLine.className = selectedClass

    // criando as colunas da tabela
    const yearColunm = document.createElement('td');
    const titleColunm = document.createElement('td');
    const localColunm = document.createElement('td');

    // adicionando textos nas colunas da tabela
    yearColunm.textContent = item.ano
    titleColunm.textContent = item.titulo
    localColunm.textContent = item.onde

    // adicionando colunas na linha
    tableLine.appendChild(yearColunm)
    tableLine.appendChild(titleColunm)
    tableLine.appendChild(localColunm)

    // adicionando linha na tabela
    boxtable.appendChild(tableLine)
})

//  // criando o card-price e os elementos que compoem o card-price
//  const white_text = document.createElement('tr');  
//  const white_line = document.createElement('tr');

//  // inserindo classes
//  whitetext.className = 'white_text'
//  whiteline.className = 'white_line'
//  // cardPriceBody.className = 'card-price-body'
//  // cardPriceFooter.className = 'card-price-footer'

//  // Não contem titulo  ****
//  // // escrevendo o titulo do card
//  // const cardName = document.createElement('h3');
//  // cardName.textContent = plan.name

//  // escrevendo conteudos   // pq do value ?****
//  const anoValue = document.createElement('p');
//  anoValue.textContent = plan.ano
//  const tituloValue = document.createElement('p');
//  tituloValue.textContent = plan.titulo
//  const ondeValue = document.createElement('p');
//  ondeValue.textContent = plan.onde
 
//  // // adicionando titulo no card price
//  // cardPrice.appendChild(cardPriceHeader)
//  // cardPriceHeader.appendChild(cardName)

//  // adicionando conteudos do card-price-body
//  cardPriceBody.appendChild(anoValue)
//  cardPriceBody.appendChild(tituloValue)
//  cardPriceBody.appendChild(ondeValue)

//  const whitetext = document.createElement('td');
//  const whiteline = document.createElement('td');


//  // cardPriceBody.appendChild(cardPriceBodyPriceContent)

//  // // adicionando card-price-body no card-price
//  // cardPrice.appendChild(cardPriceBody)

//  // // criando botao do card
//  // const cardPriceFooterButton = document.createElement('button');
//  // cardPriceFooterButton.textContent = 'Sing up'

//  // // adicionando botao no card-price-footer
//  // cardPriceFooter.appendChild(cardPriceFooterButton)

//  // // adicionar o card-price-footer no card-price
//  // cardPrice.appendChild(cardPriceFooter)
 
//  // adicionando card-price no grid-card-price
//  gridCardPrice.appendChild(cardPrice)
