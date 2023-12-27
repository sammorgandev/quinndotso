import React from "react";
import Users from "../../components/dashboard/Users";
import StatRow from "../../components/dashboard/StatRow";
import Files from "../../components/dashboard/Files";
import Assistant from "../../components/dashboard/Assistant";
import Calendar from "../../components/dashboard/Calendar";

const MainContent = ({
	currentView,
}) => {
	return (
		<main className="py-10">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-10">
					{currentView === "Dashboard" && <StatRow />}
					{currentView === "Dashboard" && <StatRow />}
					{currentView === "Calendar" && <Calendar />}
					{currentView === "Files" && <Files />}
					{currentView === "Assistant" && <Assistant />}
					{currentView === "Students" && <Users />}
				</div>
			</div>
		</main>
	);
};
export default MainContent;
