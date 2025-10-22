import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'






// ----------------------------
// EXEMPLOS DE COMPONENTES COM PROPS
// ----------------------------

// Esse componente recebe "props" (propriedades) — valores passados de outro componente.
// Aqui, estamos desestruturando diretamente: {nome, sobrenome, idade}.
function Human({nome, sobrenome, idade}) {
  return (
    <>
      {/* Exibe os dados recebidos pelas props */}
      <h1>Nome: {nome}</h1>
      <h1>Sobrenome: {sobrenome}</h1>
      <h1>Idade: {idade}</h1>
    </>
  )
}

// Esse componente Button também usa props, mas agora aplicadas em estilos inline.
// Cada prop define algo do botão: cor, tamanho e texto.
function Button({color, text, height, width}) {
  return (
    <>
      {/* Aplica o estilo usando as props recebidas */}
      <button style={{ backgroundColor: color, height: height, width: width }}>
        {text}
      </button>
    </>
  )
}

// Esse é o mesmo conceito de Button, mas usando o Tailwind CSS.
// Aqui, as props são passadas como classes do Tailwind.
function ButtonTailwind({color, text, height, width}) {
  return (
    <>
      {/* As props viram classes CSS com template string */}
      <button className={`${color} ${height} ${width}`}>
        {text}
      </button>
    </>
  )
}

// ----------------------------
// COMPONENTE PRINCIPAL DA APLICAÇÃO
// ----------------------------
function App() {
  // useState → hook que cria uma variável de estado e uma função para alterá-la.
  // const [count, setCount] = useState(0) → exemplo de contador.
  // const [text, setText] = useState("") → exemplo para armazenar texto digitado.
  // const [IsShow, setIsShow] = useState(true) → controla a exibição de um elemento.

  // useEffect → hook que executa uma função sempre que algo muda (efeito colateral).
  // Aqui ele é executado toda vez que o "text" muda, mostrando no console.

  useEffect(() => {
    console.log(text)
  }, [text]) // o [text] é a dependência — dispara o efeito quando text é atualizado.


  // ----------------------------
  // JSX (o que será renderizado na tela)
  // ----------------------------
  return (
    <>
      {/* 
        EXEMPLO DE CONTADOR:
        - Cada botão altera o estado "count".
        - React atualiza automaticamente o valor mostrado na tela.
      */}

      
      <button onClick={() => setCount(count + 1)}> + </button>
      {count}
      <button onClick={() => setCount(count - 1)}> - </button>
      

      {/* 
        EXEMPLO DE INPUT CONTROLADO:
        - Ao digitar no input, o estado "text" é atualizado com o valor digitado.
        - Mostra o texto abaixo do input.
      */}

      
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    

      {/* 
        EXEMPLO DE CONDICIONAL (Renderização condicional):
        - O botão alterna o valor de IsShow (true/false).
        - Quando IsShow é true, mostra o quadrado roxo.
      */}

      
      <button onClick={() => setIsShow(!IsShow)}>Disappear</button>
      {IsShow && (
        <div style={{ backgroundColor: 'purple', width: '100px', height: '100px' }}></div>
      )}
      

      {/* 
        EXEMPLOS DE USO DE PROPS:
        - Cada componente recebe valores diferentes pelas props.
        - React passa os valores e o componente renderiza de forma reutilizável.
      */}

       
      <Human nome="HeloLinda" sobrenome="FazChinello" idade="17" />
      <Button color={'blue'} height={'50px'} width={'90px'} text={'Thaís linda!'} /> 
      <Button color={'red'} height={'50px'} width={'90px'} text={'Thaís linda!'} /> 
      <Button color={'green'} height={'50px'} width={'90px'} text={'Thaís linda!'} /> 
      <ButtonTailwind color={'bg-blue-300'} text={'sdds Beca'} height={'h-12'} width={'w-30'} />
    
    </>
  )
}

export default App

