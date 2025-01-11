import { skillBadgeData } from "../data/skillBadge";

const SkillBadgeHolder = ({ skills }: { skills: string[] }) => {
  
  const unavailableBadgeTitles: string[] = [];

  const retrieveBadge = (skillEntry: string, index: number) => {
    return skillBadgeData.map((skillBadgeEntry) => {
      if (skillBadgeEntry.name.toLowerCase() === skillEntry.toLowerCase()) {
        return <img key={index} src={skillBadgeEntry.src} alt={skillBadgeEntry.name}/>
      }
    })
  }

  return (
    <>
      <div className="grid sm:flex justify-center">
        {
          skills.map((skillEntry, index) => {
            const badge = retrieveBadge(skillEntry, index).filter(Boolean)[0];
            if (!badge) {
              unavailableBadgeTitles.push(skillEntry);
              return <></>
            }
            return badge;
          })
        }
      </div>
      <div className="grid">
        {unavailableBadgeTitles.map((title) => <p className="mt-4">{title}</p>)}
      </div>
    </>
  );
}

export default SkillBadgeHolder;
