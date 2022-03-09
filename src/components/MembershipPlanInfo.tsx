import React, { ReactNode } from 'react'
import MembershipPlans from './MembershipPlans'
import SectionWrapper from './SectionWrapper'
import ProgramDescription from './ProgramDescription'

type MembershipPlanInfoProps = {
  title: ReactNode,
}
function MembershipPlanInfo({title}: MembershipPlanInfoProps) {
  return (
    <SectionWrapper title={title}>
      <MembershipPlans/>
      <ProgramDescription/>
    </SectionWrapper>
  )
}

export default MembershipPlanInfo