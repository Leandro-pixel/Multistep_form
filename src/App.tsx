//components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/UserForms'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import {FiSend} from 'react-icons/fi'
import Steps from './components/Steps'

//hooks
import { UseForm } from './hooks/UseForm'
import { useState } from 'react'

//css

import './App.css'

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string,
}

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key: string, value: string) => {

    setData((prev) => {//pega oe stado anterior do objeto e retorno todo ele porém alterando a key com o valor
      return {...prev, [key]: value}
    });
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data} />,
]

  const {currentStep, currentComponents, changeSteps, isLastStep} = UseForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>ficamos felizes com a sua compra, utilize o 
          formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeSteps(currentStep + 1, e)} >
          <div className='inputs-container'>
          {currentComponents}
          </div>
          <div className="actions">
            <button type='button' onClick={() => changeSteps(currentStep - 1)}>
            <GrFormPrevious/>
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : (
              <button type='submit'>
              <span>Enviar</span>
              <FiSend/>
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
