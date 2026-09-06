import api from './api';
import type { Application, ApplicationStatus } from '../types/application'

export const getAllApplications = async (): Promise<Application[]> => {
    const response = await api.get<Application[]>('/applications')

    return response.data
}

export const getApplicationById = async (id: number): Promise<Application> => {
    const response = await api.get<Application>(`/applications/${id}`)

    return response.data
}

export const createApplication = async (
    data: Omit<Application, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Application> => {
    const response = await api.post<Application>('/applications', data)

    return response.data
}

export const updateApplication = async (
    id: number,
    data: Omit<Application, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Application> => {
    const response = await api.put<Application>(`/applications/${id}`, data)

    return response.data
}

export const updateApplicationStatus = async (
    id: number,
    status: ApplicationStatus
): Promise<Application> => {
    const response = await api.patch<Application>(`/applications/${id}/status`, { status })

    return response.data
}

export const deleteApplication = async (id: number): Promise<void> => {
    await api.delete(`/applications/${id}`)
}