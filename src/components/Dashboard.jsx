import React from 'react'
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Bell, Calendar, FileText, ClipboardList } from "lucide-react";

export default function Dashboard() {
  return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-lg p-4">
            <CardContent className="flex flex-col items-center">
              <Calendar className="w-10 h-10 text-blue-500" />
              <h2 className="text-lg font-semibold mt-2">Study Schedule</h2>
              <Button variant="outline" className="mt-3">View Schedule</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg p-4">
            <CardContent className="flex flex-col items-center">
              <ClipboardList className="w-10 h-10 text-green-500" />
              <h2 className="text-lg font-semibold mt-2">Assignments</h2>
              <Button variant="outline" className="mt-3">Manage Assignments</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg p-4">
            <CardContent className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-yellow-500" />
              <h2 className="text-lg font-semibold mt-2">Study Materials</h2>
              <Button variant="outline" className="mt-3">Access Notes</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg p-4">
            <CardContent className="flex flex-col items-center">
              <Bell className="w-10 h-10 text-red-500" />
              <h2 className="text-lg font-semibold mt-2">Reminders</h2>
              <Button variant="outline" className="mt-3">Set Alerts</Button>
            </CardContent>
          </Card>
        </div>
      );
  
}
