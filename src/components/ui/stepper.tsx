import { Children, cloneElement, createContext, useContext, useMemo } from 'react'

import { cn } from '@/lib/utils'

interface StepperContextValue {
  activeStep: number
  prevStep: () => void
  nextStep: () => void
}

interface StepProps {
  label?: string
  step?: number
  children: React.ReactNode
  completed?: boolean
}

const StepperContext = createContext<StepperContextValue | undefined>(undefined)

export function useStepper() {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a <Stepper> component')
  }
  return context
}

interface StepperProps {
  activeStep: number
  onStepChange?: (direction: 'prev' | 'next') => void
  children: React.ReactNode
}

export default function Stepper({ activeStep, onStepChange, children }: StepperProps) {
  const _children = Children.toArray(children) as React.ReactElement[]

  const isStep = (child: React.ReactElement): child is React.ReactElement<StepProps> =>
    child.type === Step
  const steps = _children.filter(child => isStep(child) && !child.props.completed)
  const completedStep = _children.find(child => isStep(child) && child.props.completed)

  const currentStep = steps[activeStep - 1]
  const currentStepContent = currentStep?.props.children
  const completedStepContent = completedStep?.props.children
  const content = activeStep <= steps.length ? currentStepContent : completedStepContent

  const value = useMemo(() => ({
    activeStep,
    prevStep: () => onStepChange?.('prev'),
    nextStep: () => onStepChange?.('next'),
  }), [activeStep, onStepChange])

  return (
    <StepperContext.Provider
      value={value}
    >
      <div className="mb-5 flex w-full justify-around px-2 py-3">
        {steps.map((step, index) => cloneElement(step, { step: index + 1 }))}
      </div>
      {content}
    </StepperContext.Provider>
  )
}

function Step({ step, label }: StepProps) {
  const { activeStep } = useStepper()
  const isPassed = step !== undefined && step < activeStep
  const isActive = step === activeStep

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className={cn(
          'grid size-[60px] place-content-center rounded-full bg-muted text-2xl font-bold text-muted-foreground',
          isPassed && 'bg-primary-300 text-primary-600',
          isActive && 'bg-primary text-white shadow-[0_0_20px_0] shadow-primary',
        )}
      >
        {step}
      </span>
      <p
        className={cn(
          'text-xs text-muted',
          isPassed && 'text-primary-300',
          isActive && 'text-primary',
        )}
      >
        {label}
      </p>
    </div>
  )
}

Stepper.Step = Step
