import MilitaryModel, {
  CombatPreferences,
  SupportPreferences,
  TechPreferences,
} from './schema'

interface FormDto {
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

export const saveData = async (data: FormDto) => {
  try {
    const dbForm = new MilitaryModel(data)
    await dbForm.save()
    return dbForm._id
  } catch (err) {
    throw err
  }
}
