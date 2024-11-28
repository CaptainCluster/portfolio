export const displayKeySkill = (skill: string, index: number, experiencesLength: number) => {
  if (index ===  experiencesLength-1) {
    return <span key={index}>{`${skill}`}</span>
  }
  return <span key={index}>{`${skill}, `}</span>
}
