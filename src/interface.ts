export default interface ICompany {
    id: number
    title: string
    description?: string
    image?: string
    website?: string
}

export default interface IJob {
    id: number
    title: string
    description?: string
    technologies: string
    location?: string
    salary: string
    phone?: number
    email?: string
    telegram?: string
    instagram?: string
    companyId: number
}