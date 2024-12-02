interface CombatPreferences {
  golani: number
  armor: number
  artillery: number
  searchAndRescue: number
}
 
interface SupportPreferences {
  targetingNCO: number
  nimrodiSergeant: number
  cook: number
  sandwichFiller: number
}

interface TechPreferences {
  fullstack: number
  data: number
  devops: number
  duty: number
}

export default interface MilitaryForm {
  name: string
  personalNote: string
  combatPreferences: CombatPreferences
  supportPreferences: SupportPreferences
  techPreferences: TechPreferences
  submissionDate: Date
  lastModified: Date
  status: 'draft' | 'submitted' | 'processed'
  version: number
}

export enum MilitaryFormKeys{
  "name" = "name",
  "personalNote" = "personalNote",
  "combatPreferences" = "combatPreferences",
  "supportPreferences" = "supportPreferences",
  "techPreferences" = "techPreferences",
  "submissionDate" = "submissionDate",
  "lastModified" = "lastModified",
  "status" = "status",
  "version" = "version",
}