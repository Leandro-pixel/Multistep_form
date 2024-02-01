import { ReactElement, FormEvent, useState } from "react";//para tipar

export function UseForm(steps: ReactElement[]) {

    const [currentStep, setCurrentStep] = useState(0)//indice atual

    function changeSteps(i: number, e?: FormEvent) { // o simbolo ?: simboliza ser opicional pro typescript
        if (e) e.preventDefault()

        if(i < 0 || i >= steps.length) return
        
        setCurrentStep(i);
    }

    return {
        changeSteps,
        currentComponents: steps[currentStep],
        currentStep,
        isLastStep: currentStep + 1 === steps.length ? true : false, //seo passo atual mais 1 for igual ao total de passos na array então da true
    }
}