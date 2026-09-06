export type JobType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP'

export type WorkSetup = 'ONSITE' | 'REMOTE' | 'HYBRID'

export type ApplicationStatus =
| 'SAVED'
| 'APPLIED'
| 'UNDER_REVIEW'
| 'INTERVIEW'
| 'OFFER'
| 'REJECTED'

export interface Application {
    id: number
    jobTitle: string
    company: string
    location: string | null
    jobType: JobType
    workSetup: WorkSetup
    status: ApplicationStatus
    applicationDate: string | null
    jobUrl: string | null
    companyUrl: string | null
    notes: string | null
    createdAt: string
    updatedAt: string
}