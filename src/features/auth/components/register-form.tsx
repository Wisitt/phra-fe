'use client'

import { useState } from 'react'

import Stepper from '@/components/ui/stepper'

import ExpertVerificationForm from './expert-verification-form'
import MemberInformationForm from './member-information-form'
import MembershipPayment from './membership-payment'
import RegistrationSuccess from './registration-success'
import ThaiIdVerification from './thai-id-verification'
import UserRoleSelection from './user-role-selection'

export default function RegisterForm() {
  const [selectedUserRoleId, setSelectedUserRoleId] = useState<number | undefined>()
  const [activeStep, setActiveStep] = useState(1)

  const handleStepChange = (direction: 'prev' | 'next') => {
    setActiveStep((prev) => {
      if (direction === 'prev') {
        if (prev === 1) {
          setSelectedUserRoleId(undefined)
          return prev
        }
        return prev - 1
      }
      return prev + 1
    })
  }

  return (
    <div
      style={{
        backgroundImage: 'url(/auth/box-bg.png)',
      }}
      className="z-10 w-full max-w-[1114px] rounded-[40px] bg-[#2D2824] bg-cover bg-center bg-no-repeat py-[31.5px] drop-shadow-[0_0_50px_rgba(82,75,74,0.44)]"
    >
      {!selectedUserRoleId
        ? (
            <UserRoleSelection onSelect={setSelectedUserRoleId} />
          )
        : (
            <div className="mx-auto max-w-[834px]">
              <Stepper onStepChange={handleStepChange} activeStep={activeStep}>
                <Stepper.Step label="กรอกข้อมูล">
                  <MemberInformationForm selectedUserRoleId={selectedUserRoleId} />
                </Stepper.Step>
                {selectedUserRoleId === 2 && (
                  <Stepper.Step label="ข้อมูลยืนยันเซียนพระ">
                    <ExpertVerificationForm />
                  </Stepper.Step>
                )}
                <Stepper.Step label="ยืนยันตัวตนผ่าน ThaiID">
                  <ThaiIdVerification />
                </Stepper.Step>
                <Stepper.Step label="ชำระค่าสมาชิก">
                  <MembershipPayment />
                </Stepper.Step>
                <Stepper.Step completed>
                  <RegistrationSuccess />
                </Stepper.Step>
              </Stepper>
            </div>
          )}
    </div>
  )
}
