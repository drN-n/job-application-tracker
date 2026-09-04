import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {
    const location = useLocation()

    const navLinkClass = (path: string) => {
        const isActive = location.pathname === path
        return `textsm ${isActive ? 'text-gray-900 font-medium' : 'text-gray-500'} hover:text-gray-900`
    }

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                    <Link to ="/dashboard" className="text-sm font-semibold text-gray-900">
                        Job Tracker
                    </Link>
                    <nav className="flex gap-6">
                        <Link to="/dashboard" className={navLinkClass("/dashboard")}>
                            Dashboard
                        </Link>
                        <Link to="/jobs" className={navLinkClass("/applications")}>
                            Applications
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout