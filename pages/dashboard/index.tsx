import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainContent from "../../components/dashboard/MainContent";
import "../../app/globals.css";
import Sidebar from "../../components/dashboard/Sidebar";
import React from "react";
import TopBar from "../../components/dashboard/TopBar";

export default function Example() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const router = useRouter();

	// Function to capitalize the first letter
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	// Get the initial view from the URL parameter
	const getInitialView = () => {
		if (router.isReady) {
			const page = router.query.p;
			return page && typeof page === "string"
				? capitalizeFirstLetter(page)
				: "Dashboard";
		}
		return "Dashboard";
	};
	const [isLoading, setIsLoading] = useState(true);

	const [currentView, setCurrentView] = useState(getInitialView());
	useEffect(() => {
		if (router.isReady) {
			const page = router.query.p;
			if (page && typeof page === "string") {
				setCurrentView(capitalizeFirstLetter(page));
			}
			setIsLoading(false);
		}
	}, [router.isReady, router.query]);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div>
				<Sidebar
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
					currentView={currentView}
					setCurrentView={setCurrentView}
				/>

				<div className="lg:pl-72">
					<TopBar
						setSidebarOpen={setSidebarOpen}
					/>
					<MainContent
						currentView={currentView}
					/>
				</div>
			</div>
		</>
	);
}
