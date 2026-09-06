import { useEffect, useState } from "react"
import { getAllApplications } from "../services/applicationService"
import type { Application } from "../types/application"

function Dashboard() {
    const [applications, setApplications] = useState<Application[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const data = await getAllApplications()
                setApplications(data)
            } catch (err) {
                console.error(err)
                setError('Failed to load applications')
            } finally {
                setLoading(false)
            }
        }

        fetchApplications()
    }, [])

    if (loading) {
        return <p className="text-gray-500">Loading...</p>
    }

    if (error) {
        return <p className="text-red-600">{error}</p>
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h1>
            <p className="text-gray-600">You have {applications.length} application(s).</p>
        </div>
    )
}

export default Dashboard