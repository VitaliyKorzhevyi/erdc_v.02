import { Route, Routes } from 'react-router';

//*                             PAGES
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { Admin } from '../pages/Admin';
import { Workspace } from '../pages/workspace/Workspace';
import { Statistics } from '../pages/statistics/statistics';
import { Chat } from '../pages/Chat';

//*                             SECTIONS
import { CreateReport } from '../pages/workspace/CreateReport';
import { Marks } from '../pages/workspace/Marks';
import { ReportManagement } from '../pages/workspace/ReportManagement';
import { DocumentManagement } from '../pages/workspace/DocumentManagement';
import { DataManagement } from '../pages/workspace/DataManagement';

import { DetailedSearch } from '../pages/statistics/detailed-search';
import { MedicationReports } from '../pages/statistics/medication-reports';
import { MedicationStatistics } from '../pages/statistics/medication-statistics';
import { PharmaceuticalAccounting } from '../pages/statistics/pharmaceutical-accounting';
import { SummaryInformation } from '../pages/statistics/summary-information';

//*                            TYPE REPORTS
import { Anesthesiology } from '../pages/workspace/type-reports/Anesthesiology';
import { OperatingRoom } from '../pages/workspace/type-reports/OperatingRoom';
import { ReportDocument } from '../pages/workspace/type-reports/ReportDocument';
import { Resuscitation } from '../pages/workspace/type-reports/Resuscitation';
import { Surgery } from '../pages/workspace/type-reports/Surgery';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}>
        <Route path="news" element={<News />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="workspace" element={<Workspace />}>
          <Route path="create" element={<CreateReport />}>
            <Route path="anesthesiology" element={<Anesthesiology />} />
            <Route path="operating-room" element={<OperatingRoom />} />
            <Route path="resuscitation" element={<Resuscitation />} />
            <Route path="surgery" element={<Surgery />} />
            <Route path="report-document" element={<ReportDocument />} />
          </Route>

          <Route path="report-management" element={<ReportManagement />} />
          <Route path="document-management" element={<DocumentManagement />} />
          <Route path="marks" element={<Marks />} />
          <Route path="data-management" element={<DataManagement />} />
        </Route>
        <Route path="statistics" element={<Statistics />}>
          <Route path="search" element={<DetailedSearch />} />
          <Route path="medication-reports" element={<MedicationReports />} />
          <Route path="medicines" element={<MedicationStatistics />} />
          <Route
            path="pharmaceutical-accounting"
            element={<PharmaceuticalAccounting />}
          />
          <Route path="summary-information" element={<SummaryInformation />} />
        </Route>
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
};
